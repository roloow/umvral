# -*- coding: utf-8 -*-

from django.db import models

class CourseModel(models.Model):
    name = models.CharField(max_length=20, blank=True, null=True)
    description = models.CharField(max_length=100, blank=True, null=True)
    erase = models.BooleanField(default=False, help_text="Indica si el curso ha sido eliminado")
    professor = models.ForeignKey('ClientModel', on_delete=models.CASCADE, related_name='courses')

    def createCourse(self, course):
        newcourse = CourseModel.objects.create(course)
        return newcourse

    def deleteCourse(self):
        self.erase = 1
        self.save()
        return self

    def editCourse(self, name, description):
        self.name = name
        self.description = description
        self.save()
        return self


    #def deleteCourse(self, course)
        
