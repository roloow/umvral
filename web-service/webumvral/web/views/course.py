from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import CourseModel
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.contrib.auth.decorators import login_required
from django.utils.html import escape
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from web.models import *
import json


def courses_list(request):
    context = get_base_context(request)
    return render(request, 'web/course_list.html', context)

def course_edit(request, course=None):
    context = get_base_context(request)
    editing = False
    if course:
        try:
            courseobj = CourseModel.objects.get(pk=course)
            editing = True
            context["course"] = courseobj
        except:
            return redirect('web:404')
    if (request.method == 'GET'):
        return render(request, 'web/course_edit.html', context)
    if (request.method == 'POST'):
        user = request.user.profile
        name = request.POST.get('name', '')
        description = request.POST.get('description', '')
        if (editing):
            courseobj.editCourse(name=name, description=description)
        else:
            CourseModel.objects.create(name=name, erase=False,
                    description=description, professor=user)
        return redirect('web:course_list')
    elif course:
        courseobj = CourseModel.objects.filter(id=course).values()[0]
        context['course'] = courseobj
        return render(request, 'web/course_edit.html', context)
    else:
        return render(request, 'web/course_edit.html', context)

def course_delete(request, course=None):
    if course:
        courseobj = CourseModel.objects.get(id=course)
        courseobj.deleteCourse()
    #return HttpResponse('200')
    return redirect('web:course_list')

def course_read(request, course):
    context = get_base_context(request)
    try:
        courseobj = CourseModel.objects.get(pk=course)
        context['course'] = courseobj
    except:
        return redirect('web:404')
    if (courseobj.professor != request.user.profile):
        return redirect('web:404')
    #TODO: cortocircuitos de totales
    #context['tot_stu'] = courseobj.students.count()
    return render(request, 'web/course_read.html', context)

@login_required
def studentCourseProfile(request, student_id, course):
    context = get_base_context(request)
    course = CourseModel.objects.get(pk=course)
    student = StudentModel.objects.get(profile_id=student_id, course=course)
    if (request.user.profile.pk == course.professor.pk and 
    student.course == course):
        try:
            client = ClientModel.objects.get(pk=student_id)
        except:
            return redirect('web:404')
    else:
        return redirect('web:404')
    student_courses = StudentModel.objects.filter(profile=client).values('course_id')
    courses = CourseModel.objects.filter(professor_id=request.user.pk).filter(id__in=student_courses)
    context['client'] = client
    context['courses'] = courses
    context['course'] = course
    context['experiences'] = ExpCourseModel.objects.filter(course=course)
    return render(request, 'web/profile_studentcourse.html', context)

class CourseListJson(BaseDatatableView):
    model = CourseModel
    columns = ['name', 'description','id']
    order_columns = ['name','description','id']
    max_display_length = 500

    def get_initial_queryset(self):
        # return queryset used as base for futher sorting/filtering
        # these are simply objects displayed in datatable
        # You should not filter data returned here by any filter values entered by user. This is because
        # we need some base queryset to count total number of records.
        #return CourseModel.objects.filter(something=self.kwargs['something'])
        return CourseModel.objects.filter(
                professor_id=self.request.user.id, erase=0)

    #TODO: Crear filtros de busqueda
    def filter_queryset(self, qs):
        # use parameters passed in GET request to filter queryset

        # simple example:
        search = self.request.GET.get('search[value]', None)
        if search:
            qs = qs.filter(name__istartswith=search)

        '''
        # more advanced example using extra parameters
        filter_customer = self.request.GET.get('customer', None)

        if filter_customer:
            customer_parts = filter_customer.split(' ')
            qs_params = None
            for part in customer_parts:
                q = Q(customer_firstname__istartswith=part)|Q(customer_lastname__istartswith=part)
                qs_params = qs_params | q if qs_params else q
            qs = qs.filter(qs_params)
        '''
        return qs

def getStudentResultData(request, student_id, course, exp_id=None):
    course = CourseModel.objects.get(pk=course)
    student = StudentModel.objects.get(profile_id=student_id, course=course)
    exp_id = int(exp_id)

    #experiences = serializers.serialize('json',ExpCourseModel.objects.filter(course=course), fields=('name', 'id'))
    if exp_id != None:
        if exp_id == 1:
            data = {
                    "tests" : [
                            {"name": "Prueba 1", "nota": '5.0'},
                            {"name": "Prueba 2", "nota": '4.0'},
                            {"name": "Prueba 3", "nota": '6.0'},
                            {"name": "Prueba 4", "nota": '7.0'},
                        ],
                    "metrics" : [
                            {'name': 'Aciertos', 'value': '90% 100 tiros'},
                            {'name': 'Tiempo', 'value': '01:05:18'},
                        ]
            }
        elif exp_id == 2:
            data = {
                    "tests" : [
                            {"name": "Prueba 1a", "nota": '4.0'},
                            {"name": "Prueba 2a", "nota": '4.9'},
                            {"name": "Prueba 2.5", "nota": '5.0'},
                            {"name": "Prueba 3", "nota": '7.0'},
                        ],
                    "metrics" : [
                            {'name': 'Aciertos', 'value': '78% 160 tiros'},
                            {'name': 'Tiempo', 'value': '01:38:10'},
                        ]
            }
        elif exp_id == 3:
            data = {
                    "tests" : [
                            {"name": "Prueba 1b", "nota": '6.0'},
                            {"name": "Prueba 2b", "nota": '4.6'},
                            {"name": "Prueba 3b", "nota": '5.0'},
                            {"name": "Prueba 4b", "nota": '5.9'},
                        ],
                    "metrics" : [
                            {'name': 'Aciertos', 'value': '80% 24 tiros'},
                            {'name': 'Tiempo', 'value': '00:38:16'},
                        ]
            }
        elif exp_id == 4:
            data = {
                    "tests" : [
                            {"name": "Prueba 5", "nota": '5.2'},
                            {"name": "Prueba 6", "nota": '6.4'},
                            {"name": "Prueba 7", "nota": '6.2'},
                            {"name": "Prueba 8", "nota": '6.9'},
                        ],
                    "metrics" : [
                            {'name': 'Aciertos', 'value': '90% 5 tiros'},
                            {'name': 'Tiempo', 'value': '00:23:06'},
                        ]
            }
        #colocar que se hace al tener una experiencia
    else:
        experiences = ExpCourseModel.objects.filter(course=course).values('available')
        available = AvailabilityModel.objects.filter(id__in=experiences).values('experience')
        exp2 = ExperienceModel.objects.filter(id__in=available).values()
        data = {
                "experiences": list(exp2),
                "available": list(available),
        }
    return JsonResponse(json.dumps(data), safe=False)
