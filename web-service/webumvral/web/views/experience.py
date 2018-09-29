from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import *
from django.utils.html import escape
from django.http import HttpResponse

def course_experience(request, course):
    context = get_base_context(request)
    context['course_id'] = course
    try:
        experiences = ExpCourseModel.objects.filter(course__pk=course).order_by("available__position")
        context['experiences'] = experiences
        for j in experiences:
            print(j.available.position)
    except:
        return redirect('web:404')
    if (request.method == "POST"):
        orden = list()
        for k,v in request.POST.items():
            if ('pos' in k):
                orden.append(ExpCourseModel.objects.get(pk=int(v)))
        lista = change_position(orden)
        context['experiences'] = lista
    return render(request, 'web/course_experience.html', context)

def change_visibility(expcou):
    expcou.visible = not expcou.visible
    expcou.save()
    return expcou

def course_exp_visibility(request, course, experience):
    context = get_base_context(request)
    context['course_id'] = course
    try:
        experience = ExpCourseModel.objects.get(pk=experience)
        change_visibility(experience)
    except:
        return redirect('web:404')
    return redirect('web:course_experience', course=course)

def change_position(lista):
    for i in range(len(lista)):
        expcou= lista[i].available
        expcou.position = i
        expcou.save()
    return lista
