from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import CourseModel, StudentModel, ClientModel
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.utils.html import escape
from django.http import HttpResponse
from django.core.mail import send_mail

def course_students(request, course):
    context = get_base_context(request)
    try:
        courseobj = CourseModel.objects.get(pk=course)
        context["course"] = courseobj
    except:
        return redirect('web:404')
    return render(request, 'web/course_students.html', context)

def course_ban(request, course, student_id):
    context = get_base_context(request)
    try:
        print ("HOLA", course, student_id)
        student = StudentModel.objects.get(pk=student_id)
        print (student)
        student.delete()
    except:
        return redirect('web:404')
    return redirect('web:course_students', course=course)

def course_invite(request, course):
    context = get_base_context(request)
    try:
        courseobj = CourseModel.objects.get(pk=course)
        context["course"] = courseobj
    except:
        return redirect('web:404')
    students = ClientModel.objects.filter(isProfessor=False)
    context['students'] = students
    if (request.method == "POST"):
        print (request.POST)
        if (request.POST['to'] == '' or request.POST['to'] == 'No hay selección'):
            context['error'] = True
            return render(request, 'web/course_invite.html', context)
        invited_students = list()
        for k,v in request.POST.items():
            if ("to" == k):
                invited_students.append(v)
            elif ("group-b" in k):
                if (v == "None"):
                    continue
                if (v == "No hay selección"):
                    continue
                invited_students.append(v)
        invited_students_objects = list()
        for i in invited_students:
            try:
                u = ClientModel.objects.get(pk=int(i))
                new_stu = StudentModel()
                new_stu.profile = u
                new_stu.course = courseobj
                new_stu.save()
                try:
                    text = 'Hola '+u.first_name+'!, bienvenido a umVRal. En unos momentos, podras utilizar la Realidad Virtual para poder complementar tus estudios, y mejorar tu comprensión. Ingresa el siguiente código en tu telefono, para poder activar el curso en que te inscribiste'
                    send_mail(
                        '¡Bienvenido a umVRal!',
                        text,
                        'appumvral@gmail.com',
                        [u.email],
                        fail_silently=False,
                    )
                except:
                    pass
            except:
                print("Usuario con identificador", i, "no encontrado.")
        context["Ok"] = True
    return render(request, 'web/course_invite.html', context)

class StudentListJson(BaseDatatableView):
    model = StudentModel
    columns = ['pk', 'profile.full_name', 'profile.email', 'profile.pk']
    order_columns = ['pk', 'profile.full_name', 'profile.email', 'profile.pk']
    max_display_length = 500

    def get_initial_queryset(self):
        # return queryset used as base for futher sorting/filtering
        # these are simply objects displayed in datatable
        # You should not filter data returned here by any filter values entered by user. This is because
        # we need some base queryset to count total number of records.
        #return CourseModel.objects.filter(something=self.kwargs['something'])
        course_id = self.request.GET.get('course_id', None)
        return StudentModel.objects.filter(course__pk=course_id)

    #TODO: Crear filtros de busqueda
    def filter_queryset(self, qs):
        # use parameters passed in GET request to filter queryset

        # simple example:
        search = self.request.GET.get('search[value]', None)
        if search:
            qs = qs.filter(name__istartswith=search)

        course_id = self.request.GET.get('course_id', None)
        qs = qs.filter(course__pk=course_id)

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
