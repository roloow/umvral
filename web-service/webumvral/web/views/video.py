from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import *
from django.http import HttpResponse
from .experience import filter_experiences

def myexperiences(request, client_id):
    context = get_base_context(request)
    context['section'] = 'experience'
    context['client_id'] = client_id
    experiencias = AvailabilityModel.objects.filter(professor__pk=client_id)
    context['experiencias'] = experiencias
    return render(request, 'web/myexps.html', context)

def get_url(string):
    if ('watch?v=' not in string):
        return (False, None)
    return string.split('watch?v=')[1]

def editexperiences(request, client_id, ava_id):
    context = get_base_context(request)
    context['section'] = 'experience'
    context['client_id'] = client_id
    ava = AvailabilityModel.objects.get(pk=ava_id)
    context['ava'] = ava
    if (request.method == "GET"):
        return render(request, 'web/editvideos.html', context)
    if (request.method == "POST"):
        if ((request.POST['video'] == '') or ('youtube' not in request.POST['video']) or ('watch?v=' not in request.POST['video'])):
            context['experiences'] = filter_experiences(request.user.profile.pk)
            context['error_2'] = True
            context['Bad'] = True
            return render(request, 'web/editvideos.html', context)
        ava.video = get_url(request.POST['video'])
        ava.save()
        context['Ok'] = True
    return render(request, 'web/editvideos.html', context)

def delexperiences(request, client_id, ava_id):
    context = get_base_context(request)
    context['section'] = 'experience'
    try:
        ava = AvailabilityModel.objects.get(pk=int(ava_id))
        ava.delete()
    except:
        context['fail'] = True
        return redirect('web:myexps', client_id=client_id)
    return redirect('web:myexps', client_id=client_id)

def addexperiences(request, client_id):
    context = get_base_context(request)
    context['section'] = 'experience'
    context['client_id'] = client_id
    experiencias = filter_experiences(client_id)
    context['experiencias'] = experiencias
    if (request.method == "POST"):
        if (request.POST['exp'] == 'None'):
            context['experiences'] = filter_experiences(request.user.profile.pk)
            context['error_1'] = True
        if ((request.POST['video'] == '') or ('youtube' not in request.POST['video']) or ('watch?v=' not in request.POST['video'])):
            context['experiences'] = filter_experiences(request.user.profile.pk)
            context['error_2'] = True
        if (("error_1" in context) or ("error_2" in context)):
            return render(request, 'web/videos.html', context)
        ava = AvailabilityModel()
        ava.professor = request.user.profile
        ava.experience = ExperienceModel.objects.get(pk=int(request.POST['exp']))
        ava.video = get_url(request.POST['video'])
        ava.position = len(AvailabilityModel.objects.filter(professor=request.user.profile))
        ava.save()
        return redirect('web:myexps', client_id=client_id)
    return render(request, 'web/videos.html', context)
