# -*- coding: utf-8 -*-

from django.db import models

class AnswerModel(models.Model):
    test = models.ForeignKey('TestModel', on_delete=models.CASCADE, related_name='answers')
    student = models.ForeignKey('StudentModel', on_delete=models.CASCADE, related_name='myanswers')
    content = models.CharField(max_length=100, null=True, blank=True)
    score = models.IntegerField(null=True, blank=True)
