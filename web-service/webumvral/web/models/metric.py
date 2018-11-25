# -*- coding: utf-8 -*-

from django.db import models

class MetricModel(models.Model):
    student = models.ForeignKey('StudentModel', on_delete=models.CASCADE, related_name='student')
    experience = models.ForeignKey('ExperienceModel', on_delete=models.CASCADE, related_name='experience')
    slug = models.CharField(max_length=256, null=True)
    value = models.CharField(max_length=256, null=True)
    value_num = models.IntegerField(null=True)
