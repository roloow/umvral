from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import CourseModel
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.contrib.auth.decorators import login_required
from django.utils.html import escape
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.db.models import Avg
from web.models import *
import json
import collections

def getTestsResults(student_id, course, array=False):
    course = CourseModel.objects.get(pk=course)
    student = StudentModel.objects.get(profile_id=student_id, course=course)
    # Puntaje de pruebas estudiante
    student_answers = AnswerModel.objects.filter(student=student).values('id','test_id','score')
    # Pruebas de estudiante
    tests = []
    for answ in student_answers:
        tests.append(answ['test_id'])
    #Experiencias de Tests
    expcourse = ExpCourseModel.objects.filter(test__pk__in=tests)
    if array:
        test_experiences = []
        for expc in expcourse:
            exp_pk = expc.available.experience.pk
            test_experiences.append({
                "experience": expc.available.experience.pk,
                "test": expc.test.pk,
                "score": student_answers.get(test_id=expc.test.pk)['score']})
    else:
        test_experiences = {}
        for expc in expcourse:
            exp_pk = expc.available.experience.pk
            if (exp_pk in test_experiences):
                test_experiences[exp_pk]['tests'].append({
                    "experience": expc.available.experience.pk,
                    "test": expc.test.pk,
                    "score": student_answers.get(test_id=expc.test.pk)['score']})
            else:
                test_experiences[exp_pk] = {"tests": [{
                    "experience": expc.available.experience.pk,
                    "test": expc.test.pk,
                    "score": student_answers.get(test_id=expc.test.pk)['score']}]}
    return test_experiences

#Funciones de la view en particular
def courses_list(request):
    context = get_base_context(request)
    context['section'] = 'course'
    return render(request, 'web/course_list.html', context)

def course_edit(request, course=None):
    context = get_base_context(request)
    context['section'] = 'course'
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
    context['section'] = 'course'
    try:
        courseobj = CourseModel.objects.get(pk=course)
        context['course'] = courseobj
    except:
        return redirect('web:404')
    if (courseobj.professor != request.user.profile):
        return redirect('web:404')
    #TODO: cortocircuitos de totales
    context['tot_stu'] = courseobj.students.count()
    context['tot_exp'] = ExpCourseModel.objects.filter(course=courseobj).count()
    context['tot_eval'] = ExpCourseModel.objects.filter(course=courseobj, test__isnull=False).count()
    students = StudentModel.objects.filter(course=courseobj)
    notas = AnswerModel.objects.filter(student__in=students).aggregate(Avg('score'))
    context['tot_avg'] = round(notas['score__avg'], 1)
    return render(request, 'web/course_read.html', context)

@login_required
def studentCourseProfile(request, student_id, course):
    context = get_base_context(request)
    context['section'] = 'course'
    course = CourseModel.objects.get(pk=int(course))
    #course = CourseModel.objects.get(pk=course)
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
        return qs


#Funciones Auxiliares para entregar informacion
def getObjTests(obj, index):
    if (index in obj):
        return obj[index]['tests']
    else:
        return None

def getObjMetrics(obj, index):
    print(obj)
    data = []
    shoot = 0
    target = 0
    for metric in obj:
        aux = {}
        aux['name'] = metric['slug']
        aux['value'] = metric['value_num']
        if aux['name'] == 'disparo':
            shoot = metric['value_num']
        elif aux['name'] == 'acierto':
            target = metric['value_num']
        data.append(aux)
    if index == 2:
        data.append({'name': '% aciertos', 'value': str(round((target*100/shoot),1))+'%'})
    return data


def getStudentResultData(request, student_id, course, exp_id=None):
    notas = CalificationModel.objects.filter(owner_id=student_id).values('name','value')
    data = {"tests" : [] , "metrics" : [], "notas": []}
    if exp_id != None:
        exp_id = int(exp_id)
        metrics = MetricModel.objects.filter(student_id=student_id, experience_id=exp_id).values('slug','value_num')
        test_experiences = getTestsResults(student_id, course)
        if exp_id == 1:
            data = {
                    "tests" : getObjTests(test_experiences, 1),
                    "metrics" : [
                            {'name': 'Aciertos', 'value': '90% 100 tiros'},
                            {'name': 'Tiempo', 'value': '01:05:18'},
                        ],
                    "notas" : list(notas)
            }
        elif exp_id == 2:
            data = {
                    "tests" : getObjTests(test_experiences, 2),
                    "metrics" : getObjMetrics(metrics, 2),
                    "notas" : list(notas)
            }
        elif exp_id == 3:
            data = {
                    "tests" : getObjTests(test_experiences, 3),
                    "metrics" : [
                            {'name': 'Aciertos', 'value': '80% 24 tiros'},
                            {'name': 'Tiempo', 'value': '00:38:16'},
                        ],
                    "notas" : list(notas)
            }
        elif exp_id == 4:
            data = {
                    "tests" : getObjTests(test_experiences, 4) ,
                    "metrics" : [
                            {'name': 'Aciertos', 'value': '90% 5 tiros'},
                            {'name': 'Tiempo', 'value': '00:23:06'},
                        ],
                    "notas" : list(notas)
            }
        #colocar que se hace al tener una experiencia
    else:
        test_experiences = getTestsResults(student_id, course, array=True)
        data = {
                "tests" : test_experiences,
                "metrics" : [],
                "notas" : list(notas)
        }
    return JsonResponse(json.dumps(data), safe=False)

def datepicker(request, client_id, expcourse):
    expc = ExpCourseModel.objects.get(pk=int(expcourse))
    expc.date_visible = request.POST['dateselected']
    expc.save()
    return redirect('web:course_experience', course=expc.course.pk)