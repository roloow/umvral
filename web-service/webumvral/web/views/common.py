# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from web.models import ClientModel
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
