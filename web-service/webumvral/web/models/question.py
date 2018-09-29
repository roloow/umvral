# -*- coding: utf-8 -*-

from django.db import models

class QuestionModel(models.Model):
    statement = models.CharField(max_length=200, null=True, blank=True)
    optionA = models.CharField(max_length=30, null=True, blank=True)
    optionB = models.CharField(max_length=30, null=True, blank=True)
    optionC = models.CharField(max_length=30, null=True, blank=True)
    optionD = models.CharField(max_length=30, null=True, blank=True)
    correct = models.CharField(max_length=5, null=True, blank=True)
    experience = models.ForeignKey('ExperienceModel', on_delete=models.CASCADE, related_name='questions')
