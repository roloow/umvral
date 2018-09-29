# -*- coding: utf-8 -*-

from django.db import models

class CodeModel(models.Model):
    value = models.CharField(max_length=30, blank=True, null=True)
    course = models.ForeignKey('CourseModel', on_delete=models.CASCADE, related_name='codes')
