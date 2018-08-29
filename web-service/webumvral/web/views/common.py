# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
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
            return render(request, 'web/home.html', context)
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
    return render(request, 'web/login.html', context)

@login_required
def home(request):
    context = get_base_context(request)
    return render(request, 'web/home.html', context)
