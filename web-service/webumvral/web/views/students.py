from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import CourseModel, StudentModel
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.utils.html import escape
from django.http import HttpResponse


def course_students(request, course):
    context = get_base_context(request)
    try:
        courseobj = CourseModel.objects.get(pk=course)
        context["course"] = courseobj
    except:
        return redirect('web:404')
    return render(request, 'web/course_students.html', context)

class StudentListJson(BaseDatatableView):
    model = StudentModel
    columns = ['pk', 'profile__auth_user__email']
    order_columns = ['pk','profile']
    max_display_length = 500

    def get_initial_queryset(self):
        # return queryset used as base for futher sorting/filtering
        # these are simply objects displayed in datatable
        # You should not filter data returned here by any filter values entered by user. This is because
        # we need some base queryset to count total number of records.
        #return CourseModel.objects.filter(something=self.kwargs['something'])
        return StudentModel.objects.all()

    #TODO: Crear filtros de busqueda
    def filter_queryset(self, qs):
        # use parameters passed in GET request to filter queryset

        # simple example:
        search = self.request.GET.get('search[value]', None)
        if search:
            qs = qs.filter(name__istartswith=search)

        course_id = self.request.GET.get('course', None)
        if course_id:
            qs = qs.filter(course__pk= course_id)

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
