# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.core.paginator import Paginator
from web.models import *
import urllib

def get_base_context(request, *args, **kwargs):
    base_context = {
    }
    return base_context

def logout_method(request):
    logout(request)
    return redirect('web:home')

def login_method(request):
    context = get_base_context(request)
    if (request.method == 'GET'):
        if (request.user.is_authenticated):
            return redirect('web:home')
        return render(request, 'web/login.html', context)
    if (request.method == 'POST'):
        user = authenticate(request, username=request.POST['username'], password=request.POST['password'])
        if user:
            if (user.profile.isProfessor):
                login(request, user)
                return render(request, 'web/home.html', context)
        context['error'] = True
        return render(request, 'web/login.html', context)

def register(request):
    context = get_base_context(request)
    if (request.method == 'GET'):
        if (request.user.is_authenticated):
            return redirect('web:home')
        return redirect('web:login')
    if (request.method == 'POST'):
        if User.objects.filter(email=request.POST['email']):
            context['error_registro'] = True
            return render(request, 'web/login.html', context)
        user = User.objects.create_user(request.POST['email'],request.POST['email'],request.POST['password'])
        user.first_name = request.POST['firstname']
        user.last_name = request.POST['lastname']
        user.save()
        client = ClientModel()
        client.auth_user = user
        client.isProfessor = True
        client.save()
        login(request, user)
        return redirect('web:home')
    return redirect('web:login')

def page404(request):
    context = get_base_context(request)
    return render(request, 'web/404.html', context)

@login_required
def home(request):
    context = get_base_context(request)
    return render(request, 'web/home.html', context)

@login_required
def profile(request, client_id):
    context = get_base_context(request)
    context['my_profile'] = False
    if request.user.profile.pk == int(client_id):
        context['my_profile'] = True
        client = request.user.profile
    else:
        try:
            client = ClientModel.objects.get(pk=client_id)
        except:
            return redirect('web:404')
    context['client'] = client
    return render(request, 'web/profile.html', context)

@login_required
def profile_edit(request, client_id):
    context = get_base_context(request)
    if (not request.user.is_staff):
        if (request.user.profile.pk != int(client_id)):
            return redirect('web:404')
    try:
        client = ClientModel.objects.get(pk=client_id)
        context['client'] = client
        if (request.user.profile.pk == client.pk):
            context['my_profile'] = True
    except:
        return redirect('web:404')
    if (request.method == 'GET'):
        context['tab1'] = True
        return render(request, 'web/profile_edit.html', context)
    if (request.method == 'POST'):
        # 0 => Información personal
        if (int(request.POST['formulario']) == 0):
            fname = request.POST['fname']
            lname = request.POST['lname']
            user = client.auth_user
            user.first_name = fname
            user.last_name = lname
            user.save()
            context['tab1'] = True
            context['post1'] = True
            context['success1'] = True
            return render(request, 'web/profile_edit.html', context)
        # 1 => Cambio contraseña
        if (int(request.POST['formulario']) == 1):
            current = request.POST['currentp']
            new = request.POST['newp']
            repeat = request.POST['rnewp']
            context['tab3'] = True
            context['post3'] = True
            context['success3'] = True
            if (new != repeat):
                context['match'] = True
                context['success3'] = False
                return render(request, 'web/profile_edit.html', context)
            user = client.auth_user
            if (not user.check_password(current)):
                context['old'] = True
                context['success3'] = False
                return render(request, 'web/profile_edit.html', context)
            user.set_password(new)
            user.save()
            return render(request, 'web/profile_edit.html', context)
    return redirect('web:404')


# TODO: Hacer resumen mediante count para saber cuantos sin leer hay en cada uno
@login_required
def message_view(request, client_id, inbox_type):
    context = get_base_context(request)
    try:
        client = ClientModel.objects.get(pk=client_id)
        context['client'] = client
    except:
        return redirect('web:404')
    # 0- open my inbox
    if (int(inbox_type) == 0):
        context['inbox'] = True
        context['header'] = 'Bandeja de entrada'
        if (request.method == "GET"):
            context['label0'] = True
            messages = MessageModel.objects.filter(receiver=client, deleted=False).order_by('-date')
            paginator = Paginator(messages, 25)
            page = request.GET.get("page")
            msgs = paginator.get_page(page)
            context['messages'] = msgs
        if (request.method == "POST"):
            # Entrada
            if (int(request.POST['folder']) == 0):
                messages = MessageModel.objects.filter(receiver=client, deleted=False).order_by('-date')
                paginator = Paginator(messages, 25)
                page = request.GET.get("page")
                msgs = paginator.get_page(page)
                context['messages'] = msgs
                context['label0'] = True
            # Importante
            if (int(request.POST['folder']) == 1):
                messages = MessageModel.objects.filter(receiver=client, deleted=False, important=True).order_by('-date')
                paginator = Paginator(messages, 25)
                page = request.GET.get("page")
                msgs = paginator.get_page(page)
                context['messages'] = msgs
                context['label1'] = True
            # Enviados
            if (int(request.POST['folder']) == 2):
                messages = MessageModel.objects.filter(sender=client).order_by('-date')
                paginator = Paginator(messages, 25)
                page = request.GET.get("page")
                msgs = paginator.get_page(page)
                context['messages'] = msgs
                context['label2'] = True
            # Basurero
            if (int(request.POST['folder']) == 3):
                messages = MessageModel.objects.filter(receiver=client, deleted=True).order_by('-date')
                paginator = Paginator(messages, 25)
                page = request.GET.get("page")
                msgs = paginator.get_page(page)
                context['messages'] = msgs
                context['label3'] = True
        return render(request, 'web/inbox.html', context)
    # 1- read a msg
    if (int(inbox_type) == 1):
        context['read'] = True
        context['header'] = 'Bandeja de entrada > Mensaje'
        if (request.method == "POST"):
            print (request.POST)
            msg_id = int(request.POST['msg_id'])
            msg = MessageModel.objects.get(pk=msg_id)
            msg.read =True
            msg.save()
            context['message'] = msg
        else:
            return redirect('web:404')
        return render(request, 'web/inbox.html', context)
    # 2- write a msg
    if (int(inbox_type) == 2):
        context['compose'] = True
        context['header'] = 'Bandeja de entrada > Redactar'
        allusers = ClientModel.objects.all()
        context['users'] = allusers
        if (request.method == "POST"):
            to = request.POST['to']
            subject = request.POST['subject']
            message = request.POST['message']
            if (subject == "" or subject == None or message == "" or message == None):
                context['error'] = True
                context['to'] = int(to)
                context['subject'] = subject
                context['message'] = message
                return render(request, 'web/inbox.html', context)
            msg = MessageModel()
            msg.sender = client
            receiver = ClientModel.objects.get(pk=int(to))
            msg.receiver = receiver
            msg.topic = subject
            msg.content = message
            msg.save()
            context['SENT'] = True
            context['header'] = 'Bandeja de entrada'
            context['inbox'] = True
            context['compose'] = False
            context['label0'] = True
            messages = MessageModel.objects.filter(receiver=client, deleted=False).order_by('-date')
            paginator = Paginator(messages, 25)
            page = request.GET.get("page")
            msgs = paginator.get_page(page)
            context['messages'] = msgs
            return render(request, 'web/inbox.html', context)
        return render(request, 'web/inbox.html', context)
    # 3- write a msg to certain person(post)
    if (int(inbox_type) == 3):
        context['compose'] = True
        context['header'] = 'Bandeja de entrada > Redactar'
        return render(request, 'web/inbox.html', context)
    return redirect('web:404')

def msg_actions(request, client_id, msg_id, action):
    LECTURA = 0
    IMPORTANTE = 1
    ELIMINAR = 2
    action = int(action)
    msg = MessageModel.objects.get(pk=msg_id)
    if (action == LECTURA):
        msg.read = not msg.read
    if (action == IMPORTANTE):
        msg.important = not msg.important
    if (action == ELIMINAR):
        msg.deleted = True
    msg.save()
    return redirect('web:msg_view', client_id=client_id, inbox_type=0)

def msg_direct(request, client_id):
    context = get_base_context(request)
    if (request.method == "POST"):
        to = request.POST['to']
        topic = request.POST['topic']
        if (topic == None or topic == ""):
            topic = "Mensaje directo desde perfil"
        else:
            topic = "RE: " + topic
        client = ClientModel.objects.get(pk=client_id)
        context["users"] = ClientModel.objects.all()
        context["to"] = int(to)
        context["subject"] = topic
        context["compose"] = True
        context["client"] = client
        return render(request, 'web/inbox.html', context)
    if (request.method == "GET"):
        return redirect("web:404")
