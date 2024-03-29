from tastypie.resources import ModelResource
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from tastypie.http import HttpUnauthorized, HttpForbidden
from django.conf.urls import url
from tastypie.utils import trailing_slash
from web.models import *
from web.models import StudentModel


class UserResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        fields = ['first_name', 'last_name', 'email']
        allowed_methods = ['get', 'post']
        resource_name = 'user'

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/login%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('login'), name="api_login"),
            url(r'^(?P<resource_name>%s)/logout%s$' %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('logout'), name='api_logout'),
        ]

    def login(self, request, **kwargs):
        self.method_check(request, allowed=['post'])

        #data = self.deserialize(request, request.body, format=request.META.get('CONTENT_TYPE', 'application/json'))
        username = request.POST.get('username', '')
        password = request.POST.get('password','')
        register = request.POST.get('register','')
        if register:
            print('creando')
            user = User.objects.create_user(request.POST['email'],request.POST['email'],request.POST['password'])
            user.first_name = request.POST['firstname']
            user.last_name = request.POST['lastname']
            user.save()
            client = ClientModel()
            client.auth_user = user
            client.isProfessor = False
            client.save()

        #username = data.get('username', '')
        #password = data.get('password', '')

        user = authenticate(username=request.POST['username'], password=request.POST['password'])
        print(user)
        students = StudentModel.objects.filter(profile__pk= user.pk)
        cursos=[]
        for st in students:
            cursos.append([{'course_name': st.course.name ,'course_id':st.course.pk ,'profesor_name':st.course.professor.full_name ,'student_id': st.pk}])

        if user:

            if user.is_active:
                login(request, user)
                return self.create_response(request, {
                    'user_id': user.pk,
                    'user_name': username,
                    'cursos' : cursos
                })
            else:
                return self.create_response(request, {
                    'success': False,
                    'reason': 'disabled, cuenta bloqueada o inavilitada',
                    } )
        else:
            return self.create_response(request, {
                'success': False,
                'reason': 'incorrect'
                } )






    def logout(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        if request.user and request.user.is_authenticated():
            logout(request)
            return self.create_response(request, { 'success': True })
        else:
            return self.create_response(request, { 'success': False }, HttpUnauthorized)
