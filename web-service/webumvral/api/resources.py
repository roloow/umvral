from tastypie.resources import ModelResource
from web.models import ExperienceModel
from web.models import MessageModel
from web.models import AvailabilityModel
from web.models import ClientModel
from web.models import StudentModel
from web.models import CourseModel
from web.models import ExpCourseModel
from django.contrib.auth.models import User
from tastypie.authorization import Authorization
from tastypie.authentication import Authentication
from django.conf.urls import url
from tastypie.utils import trailing_slash
from tastypie.http import HttpUnauthorized, HttpForbidden


#Experiencia
class ExperienceResource(ModelResource):
    class Meta:
        queryset = ExperienceModel.objects.all()
        resource_name = 'experience'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']

#Mensajes
class MessageResource(ModelResource):
    class Meta:
        queryset = MessageModel.objects.all()
        resource_name = 'message'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']

#Experiencias disponibles
class ExpdispResource(ModelResource):
    class Meta:
        queryset = AvailabilityModel.objects.all()
        resource_name = 'expdisp'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']

#Clientes - usuarios
class ClientResource(ModelResource):
    class Meta:
        queryset = User.objects.all()
        resource_name = 'client'

        #allowed_methods = ['get']
        allowed_methods = ['get', 'post']

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/update%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('update'), name="api_update"),

        ]


    def update(self, request, **kwargs):

        self.method_check(request, allowed=['post'])

        #data = self.deserialize(request, request.body, format=request.META.get('CONTENT_TYPE', 'application/json'))
        nombre = request.POST.get('nombre', '')
        clave = request.POST.get('clave','')
        user_id = request.POST.get('user_id','')
        apellido = request.POST.get('apellido','')
        print(user_id)
        if( user_id ):
            user = User.objects.get(pk=user_id)
            user.profile.modify(nombre,apellido,clave)
            return self.create_response(request, {
                'success': True,
                'nombre':nombre,
                'apellido':apellido,
                'clave':clave,
                'user_id':user_id,
                }, HttpForbidden )

        return self.create_response(request, {
            'success': False,
            'nombre':nombre,
            'apellido':apellido,
            'clave':clave,
            'user_id':user_id,
            }, HttpForbidden )



#Estudiantes
class StudentResource(ModelResource):
    class Meta:
        queryset = StudentModel.objects.all()
        resource_name = 'student'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']


#Cursos
class CourseResource(ModelResource):
    class Meta:
        queryset = CourseModel.objects.all()
        resource_name = 'course'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']

#Experiencia - Curso
class ExpcourseResource(ModelResource):
    class Meta:
        queryset = ExpCourseModel.objects.all()
        resource_name = 'expcourse'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']
