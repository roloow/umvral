# -*- coding: utf-8 -*-

from django.db import models

class ExpCourseModel(models.Model):
    available = models.ForeignKey('AvailabilityModel', on_delete=models.CASCADE, related_name='courses')
    course = models.ForeignKey('CourseModel', on_delete=models.CASCADE, related_name='experiences')
    test = models.ForeignKey('TestModel', on_delete=models.SET_NULL, null=True, blank=True)
    date_visible = models.DateTimeField(null=True, blank=True)
    visible = models.BooleanField(default=False)
