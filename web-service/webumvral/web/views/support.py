from django.shortcuts import render, redirect
from .common import get_base_context
from django.contrib.auth.decorators import login_required
from ..models import *
from django.utils.html import escape
from django.http import HttpResponse
from django.core.mail import send_mail
from ..forms import SupportForm, ExperienceForm


@login_required
def support(request):
    context = get_base_context(request)
    context['section'] = 'support'
    if (request.method == "POST"):
        form = SupportForm(request.POST)
        if form.is_valid():
            try:
                nombre = form.cleaned_data['nombre']
                email = form.cleaned_data['email']
                mensaje = form.cleaned_data['mensaje']
                send_mail(
                    '[SOPORTE] - '+nombre+' - '+email,
                    mensaje,
                    email,
                    ['umvralapp@gmail.com'],
                    fail_silently=False,)
                context['enviado'] = True
            except:
                context['enviado'] = False
    context['form'] = SupportForm()
    return render(request, 'web/support.html', context)


@login_required
def send_experience(request):
    context = get_base_context(request)
    context['section'] = 'support'
    if (request.method == "POST"):
        form = ExperienceForm(request.POST)
        if form.is_valid():
            try:
                nombre = form.cleaned_data['nombre']
                nombre_experiencia = form.cleaned_data['nombre_experiencia']
                email = form.cleaned_data['email']
                mensaje = form.cleaned_data['mensaje']
                send_mail(
                    '[EXPERIENCIA] - '+nombre+' - '+email,
                    'Nombre Experiencia: '+nombre_experiencia+'\n\nDescripción experiencia: \n'+mensaje,
                    email,
                    ['umvralapp@gmail.com'],
                    fail_silently=False,)
                context['enviado'] = True
            except:
                context['enviado'] = False
    context['form'] = ExperienceForm()
    return render(request, 'web/support_experience.html', context)
