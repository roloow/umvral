from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import CourseModel
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.utils.html import escape
from django.http import HttpResponse


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
    return render(request, 'web/course_read.html', context)

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
