from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import CourseModel, StudentModel, ClientModel,ExpCourseModel
from django.utils.html import escape
from django.http import HttpResponse

def course_experience(request, course):
    context = get_base_context(request)
    try:
        experiences = ExpCourseModel.objects.filter(course__pk=course)
        context['experiences'] = experiences
    except:
        return redirect('web:404')
    return render(request, 'web/course_experience.html', context)
