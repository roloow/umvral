from tastypie.resources import ModelResource
from web.models import ExperienceModel
from web.models import MessageModel
from web.models import AvailabilityModel
from web.models import ClientModel
from web.models import StudentModel
from web.models import CourseModel
from web.models import CalificationModel
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
        allowed_methods = ['get','post']

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/curso%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('curso'), name="api_expcurso"),
            url(r"^(?P<resource_name>%s)/detalle%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('detalle'), name="api_exp_detalle"),
            url(r"^(?P<resource_name>%s)/video%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('video'), name="api_exp_video"),

        ]

    def curso(self,request, **kwargs):
        self.method_check(request, allowed=['post'])
        student_id=request.POST.get('student_id','')
        try:
            st = StudentModel.objects.get(pk=student_id)
        except:
            return self.create_response(request, {
                'error': 'sin cursos',
                'student_id': student_id
                })
        expCourse = ExpCourseModel.objects.filter( course__pk= st.course.pk , visible = True )
        experiencias = []
        for exp in expCourse:
            experiencias.append([{'exp_name':exp.available.experience.name,'exp_course_id':exp.pk,'position':exp.available.position  }])
        return self.create_response(request, {
            'student_id': student_id,
            'experiencias': experiencias,
            } )

    def detalle(self,request, **kwargs):
        self.method_check(request, allowed=['post'])
        student_id=request.POST.get('student_id','')
        exp_course_id=request.POST.get('exp_course_id')
        test_id = 'Null'
        try:
            expCourse= ExpCourseModel.objects.get(pk=exp_course_id)
            if expCourse.test.visible != False :
                test_id = expCourse.test.pk

        except:
            return self.create_response(request, {
                'student_id': student_id,
                'exp_course_id': exp_course_id,
                'test_id': 'Null'
                })

        return self.create_response(request, {
            'student_id': student_id,
            'exp_course_id': exp_course_id,
            'test_id': test_id
            })

    def video(self,request, **kwargs):
        self.method_check(request, allowed=['post'])
        student_id=request.POST.get('student_id','')
        exp_course_id=request.POST.get('exp_course_id')
        video_url = 'Null'
        try:
            expCourse= ExpCourseModel.objects.get(pk=exp_course_id)
            student= StudentModel.objects.get(pk=student_id)
            expCourse.available.video
        except:
            return self.create_response(request, {
                'student_id': student_id,
                'exp_course_id': exp_course_id,
                'video_url': 'Null'
                })


        return self.create_response(request, {
            'student_id': student_id,
            'exp_course_id': exp_course_id,
            'video_url': expCourse.available.video
            })

#Mensajes
class MessageResource(ModelResource):
    class Meta:
        queryset = MessageModel.objects.all()
        resource_name = 'message'
        authentication = Authentication()
        authorization = Authorization()
        allowed_methods = ['get','post']

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/recibidos%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('recibidos'), name="api_recibidos"),
            url(r"^(?P<resource_name>%s)/enviados%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('enviados'), name="api_enviados"),

        ]

    def enviados(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        user_id = request.POST.get('user_id','')
        mensajesrecibidos = MessageModel.objects.filter(sender__pk = user_id)
        arrayMensajes =[]
        for msg in mensajesrecibidos:
            arrayMensajes.append([{'id':msg.pk , 'topic':msg.topic, 'name':msg.receiver.full_name,'content':msg.content ,'id_receiver':msg.receiver.pk}])
        return self.create_response(request, {
            'usuario': user_id,
            'mensajes': arrayMensajes,
            } )


    def recibidos(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        user_id = request.POST.get('user_id','')
        mensajesrecibidos = MessageModel.objects.filter(receiver__pk = user_id)
        arrayMensajes =[]
        for msg in mensajesrecibidos:
            arrayMensajes.append([{'id':msg.pk , 'topic':msg.topic, 'name':msg.sender.full_name,'content':msg.content ,'id_sender':msg.sender.pk}])
        return self.create_response(request, {
            'usuario': user_id,
            'mensajes': arrayMensajes,
            } )





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
            url(r"^(?P<resource_name>%s)/notas%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('notas'), name="api_notas"),
            url(r"^(?P<resource_name>%s)/notas/create%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('crearNota'), name="api_nota_inserct"),
            url(r"^(?P<resource_name>%s)/notas/delete%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('deleteNota'), name="api_nota_delete"),
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
                } )

        return self.create_response(request, {
            'success': False,
            'nombre':nombre,
            'apellido':apellido,
            'clave':clave,
            'user_id':user_id,
            } )




    def notas(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        user_id = request.POST.get('user_id','')
        notas=[]
        califications = CalificationModel.objects.filter(owner__pk=user_id)
        for calification in califications :
            notas.append({"nombre":calification.name,"valor":calification.value, "id":calification.pk})
        return self.create_response(request, {
            'user_id': user_id,
            'notas': notas
            })

    def crearNota(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        user_id = request.POST.get('user_id','')
        nameNota = request.POST.get('nombre_nota','')
        nota = request.POST.get('nota','')
        try:
            client = ClientModel.objects.get(pk=user_id)
        except:
            return self.create_response(request, {
                'user_id': user_id,
                'error':'incorrecto'
                })
        nuevaCalificacion= CalificationModel(name=nameNota,value=nota,owner=client)
        nuevaCalificacion.save()
        notas=[]
        califications = CalificationModel.objects.filter(owner__pk=user_id)
        for calification in califications :
            notas.append({"nombre":calification.name, "valor":calification.value, "id":calification.pk})
        return self.create_response(request, {
            'user_id': user_id,
            'notas': notas
            })

    def deleteNota(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        user_id = request.POST.get('user_id','')
        nota_id = request.POST.get('nota_id','')
        try:
            CalificationModel.objects.get(pk=nota_id).delete()
        except:
            return self.create_response(request, {
                'nota_id': nota_id,
                'error':'incorrecto'
                })
        notas=[]
        califications = CalificationModel.objects.filter(owner__pk=user_id)
        for calification in califications :
            notas.append({"nombre":calification.name, "valor":calification.value, "id":calification.pk})
        return self.create_response(request, {
            'user_id': user_id,
            'notas': notas
            })


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
        allowed_methods = ['get','post']

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/misCursos%s$" %
                (self._meta.resource_name, trailing_slash()),
                self.wrap_view('misCursos'), name="api_misCursos"),

        ]

    def misCursos(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        user_id = request.POST.get('user_id','')
        students = StudentModel.objects.filter(profile__pk=user_id)
        cursos=[]
        for st in students:
            cursos.append([{'nombre_curso': st.course.name ,'curso_id':st.course.pk ,'profesor':st.course.professor ,'descripcion':st.course.description, 'student_id': st.pk}])

        return self.create_response(request, {
            'user_id': user_id,
            'cursos':cursos
            })



#Experiencia - Curso
class ExpcourseResource(ModelResource):
    class Meta:
        queryset = ExpCourseModel.objects.all()
        resource_name = 'expcourse'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']
