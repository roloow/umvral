from django.shortcuts import render, redirect
from .common import get_base_context
from ..models import *
from django.utils.html import escape
from django.http import HttpResponse

def course_experience(request, course):
    context = get_base_context(request)
    context['course_id'] = course
    context['course_name'] = CourseModel.objects.get(pk=course).name
    try:
        experiences = ExpCourseModel.objects.filter(course__pk=course).order_by("position")
        context['experiences'] = experiences
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

def experience_test(request, course, experience):
    context = get_base_context(request)
    context['course_id'] = course
    context['course_name'] = CourseModel.objects.get(pk=course).name
    context['experience_id'] = experience
    context['experience_name'] = ExperienceModel.objects.get(pk=experience).name

    print("Course "+course)
    print("Experience "+experience)

    #Vamos a recibir POST cuando hayamos creado la prueba y la estemos guardando
    if (request.method == "POST"):
        #Obtenemos las preguntas seleccionadas para la Prueba
        id_preguntas = list(request.POST.getlist('preguntas_select'))
        print(id_preguntas)

        #Creamos la prueba (TestModel)
        prueba = TestModel()
        prueba.total_questions = len(id_preguntas)
        prueba.visible = False #Por defecto, la prueba no es visible
        prueba.save()

        #Agregamos cada pregunta, en orden, a la prueba
        position = 0
        for id_pregunta in id_preguntas:
            pregunta = ConfigurationModel()
            pregunta.test = prueba
            pregunta.question = QuestionModel.objects.get(pk=int(id_pregunta))
            pregunta.position = position
            pregunta.save()
            position += 1

        #Agregamos la prueba recién creada a ExpCourseModel
        exp = ExpCourseModel.objects.filter(course__pk = course, available__experience__pk = experience)[0]
        exp.test = prueba
        exp.save()

        #Y listo!
        return redirect('web:course_experience', course=course)

    #De otra forma, en GET mostraremos las preguntas disponibles para crear la prueba.
    try:
        exp = ExpCourseModel.objects.filter(course__pk = course, available__experience__pk = experience)[0]
        print("Encontrada experiencia con pk =",exp.available.experience.pk)
        #La experiencia tiene una prueba asociada?
        if exp.test:
            print("Encontrado test con pk =",exp.test)
            return redirect('web:course_experience', course=course)
        print("La experiencia no tiene test asociado, continuando...")
        #Buscamos todas las preguntas disponibles para esta experiencia
        available_questions = QuestionModel.objects.filter(experience__pk=experience).all()
        print("Encontradas",len(available_questions),"preguntas")
        context['questions'] = available_questions
    except:
        return('web:404')

    return render(request, 'web/experience_test.html', context)

def experience_test_edit(request, course, experience):
    context = get_base_context(request)
    context['course_id'] = course
    context['course_name'] = CourseModel.objects.get(pk=course).name
    context['experience_id'] = experience
    context['experience_name'] = ExperienceModel.objects.get(pk=experience).name
    print("Course "+course)
    print("Experience "+experience)

    #Vamos a recibir POST cuando hayamos editado la prueba y la estemos guardando
    if (request.method == "POST"):
        #Obtenemos las preguntas seleccionadas para la Prueba
        id_preguntas = list(request.POST.getlist('preguntas_select'))
        print(id_preguntas)

        #Buscamos la prueba (TestModel) para cambiar el total de preguntas
        test_pk = ExpCourseModel.objects.filter(course__pk = course, available__experience__pk = experience)[0].test.pk
        prueba = TestModel.objects.get(pk = test_pk)
        prueba.total_questions = len(id_preguntas)
        prueba.save()

        #Debemos reconstruir los ConfigurationModel con las nuevas preguntas de esta prueba
        #Para ello, eliminamos los ConfigurationModel existentes y creamos nuevos con las nuevas preguntas de la prueba
        ConfigurationModel.objects.filter(test__pk = test_pk).delete()

        position = 0
        for id_pregunta in id_preguntas:
            pregunta = ConfigurationModel()
            pregunta.test = prueba
            pregunta.question = QuestionModel.objects.get(pk=int(id_pregunta))
            pregunta.position = position
            pregunta.save()
            position += 1

        #Y listo!
        return redirect('web:course_experience', course=course)

    #De otra forma, en GET mostraremos las preguntas disponibles para editar la prueba, además de las ya existentes
    try:
        exp = ExpCourseModel.objects.filter(course__pk = course, available__experience__pk = experience)[0]
        print("Encontrada experiencia con pk =",exp.available.experience.pk)

        #La experiencia no tiene una prueba asociada?
        if not exp.test:
            print("La experiencia no tiene test asociado, abortando...")
            return redirect('web:course_experience', course=course)
        print("Encontrado test con pk =",exp.test.pk)

        #Buscamos las preguntas que están ya incluidas en este test
        selected_questions = ConfigurationModel.objects.filter(test__pk=exp.test.pk).order_by("position").all()
        print("Encontradas",len(selected_questions),"preguntas en prueba")
        ids = [q.question.pk for q in selected_questions]

        #for q in selected_questions:
        #    print(q.position, q.question.pk, q.question.statement)

        #Buscamos todas las preguntas disponibles para esta experiencia, que NO HAYAN sido ya seleccionadas
        available_questions = QuestionModel.objects.filter(experience__pk=experience).exclude(pk__in = ids).all()
        print("Encontradas",len(available_questions),"preguntas disponibles")

        #for q in available_questions:
        #    print(q.pk, q.statement)

        context['available_questions'] = available_questions
        context['selected_questions'] = selected_questions
    except:
        return('web:404')

    return render(request, 'web/experience_test_edit.html', context)

def experience_test_visibility(request, course, experience):
    context = get_base_context(request)
    context['course_id'] = course
    context['course_name'] = CourseModel.objects.get(pk=course).name
    context['experience_id'] = experience
    context['experience_name'] = ExperienceModel.objects.get(pk=experience).name
    print("Course "+course)
    print("Experience "+experience)

    try:
        #Buscamos la prueba (TestModel) para cambiar su estado de activación
        test_pk = ExpCourseModel.objects.filter(course__pk = course, available__experience__pk = experience)[0].test.pk
        test = TestModel.objects.get(pk = test_pk)
        #Cambiamos el estado de activacion
        test.visible = not test.visible
        test.save()
    except:
        return redirect('web:404')
    return redirect('web:course_experience', course=course)

def experience_test_delete(request, course, experience):
    context = get_base_context(request)
    context['course_id'] = course
    context['course_name'] = CourseModel.objects.get(pk=course).name
    context['experience_id'] = experience
    context['experience_name'] = ExperienceModel.objects.get(pk=experience).name
    print("Course "+course)
    print("Experience "+experience)

    try:
        #Buscamos la prueba (TestModel) para cambiar su estado de existencia (osea, su bool de borrada)
        #Además de hacer el cambio en TestModel, cambiaremos el atibuto test de ExpCourseModel a NULL para romper la relación.
        #De esta forma, estamos "borrando" la prueba de los ojos del profesor sin tener que borrar la prueba de la BD.
        exp_course = ExpCourseModel.objects.filter(course__pk = course, available__experience__pk = experience)[0]
        test = TestModel.objects.get(pk = exp_course.test.pk)
        #Cambiamos el estado de existencia
        test.erase = True
        test.save()
        #Y borramos la relación
        exp_course.test = None
        exp_course.save()
    except:
        return redirect('web:404')
    return redirect('web:course_experience', course=course)

def change_position(lista):
    for i in range(len(lista)):
        expcou= lista[i]
        expcou.position = i
        expcou.save()
    return lista

def experience_video(request, course):
    context = get_base_context(request)
    context['course_id'] = int(course)
    context['course'] = CourseModel.objects.get(pk=int(course))
    print(course)
    if (request.method == 'GET'):
        context['experiences'] = AvailabilityModel.objects.filter(professor=request.user.profile)
        context['filtered'] = filter_available(int(course))
        return render(request, 'web/experience_video.html', context)
    if (request.method == 'POST'):
        # Quito todas las experiencias de su curso
        if ("my_multi_select1[]" not in request.POST):
            request.POST['my_multi_select1[]'] = list()
        lista = request.POST.getlist('my_multi_select1[]')
        avs = list()
        for ID in lista:
            avs.append(AvailabilityModel.objects.get(pk=int(ID)))
        expcs= ExpCourseModel.objects.filter(course__pk=int(course))
        alter_course(expcs, avs, course)
        return redirect('web:course_experience', course=course)
    return render(request, 'web/experience_video.html', context)

def alter_course(expcs, avas, course_id):
    aux = list()
    course = CourseModel.objects.get(pk=int(course_id))
    for obj in avas:
        if (obj in expcs):
            aux.append(obj)
        else:
            expC = ExpCourseModel()
            expC.available = obj
            expC.course = course
            expC.save()
    for obj in expcs:
        if (obj in aux):
            pass
        else:
            obj.delete()
    expcs= ExpCourseModel.objects.filter(course__pk=int(course_id))
    change_position(expcs)
    return True

def filter_experiences(professor_id):
    availables = AvailabilityModel.objects.filter(professor__id = professor_id)
    myExps = []
    for av in availables:
        myExps.append(av.experience)
    experiences = ExperienceModel.objects.all()
    filtered = []
    for exp in experiences:
        if (exp in myExps):
            continue
        filtered.append(exp)
    return filtered

def filter_available(course_id):
    expcourses = ExpCourseModel.objects.filter(course__pk = course_id)
    expcs = list()
    for expc in expcourses:
        expcs.append(expc.available)
    return expcs

def delexpcourse(request, course, expcourse):
    expc = ExpCourseModel.objects.get(pk=int(expcourse))
    expc.delete()
    expcs = ExpCourseModel.objects.filter(course__pk=int(course)).order_by("position")
    change_position(expcs)
    return redirect('web:course_experience', course=course)
