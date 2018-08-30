# -*- coding: utf-8 -*-
# Esta entidad fue pensada como una entidad relacion de muchos a muchos, pero
# para una mejor implementación de sus caracteristicas se define como una
# entidad nueva.

from django.db import models

class StudentModel(models.Model):
    profile = models.ForeignKey('ClientModel', on_delete=models.CASCADE, related_name='classprofile')
    course = models.ForeignKey('CourseModel', on_delete=models.CASCADE, related_name='students')
