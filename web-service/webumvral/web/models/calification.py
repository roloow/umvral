# -*- coding: utf-8 -*-

from django.db import models

class CalificationModel(models.Model):
    name = models.CharField(max_length=15, blank=True, null=True)
    value = models.FloatField(blank=True, null=True)
    owner = models.ForeignKey('ClientModel', on_delete=models.CASCADE, related_name='califications')
