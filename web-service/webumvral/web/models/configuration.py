# -*- coding: utf-8 -*-

from django.db import models

class ConfigurationModel(models.Model):
    test = models.ForeignKey('TestModel', on_delete=models.CASCADE, related_name='configurations')
    question = models.ForeignKey('QuestionModel', on_delete=models.CASCADE, related_name='positions')
    position = models.IntegerField(blank=True, null=True)
