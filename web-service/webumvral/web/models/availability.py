# -*- coding: utf-8 -*-

from django.db import models
from django.contrib.auth.models import User

class AvailabilityModel(models.Model):
    professor = models.ForeignKey('ClientModel', on_delete=models.CASCADE, related_name='myexperiences')
    experience = models.ForeignKey('ExperienceModel', on_delete=models.CASCADE, related_name='professors')
    video = models.CharField(max_length=30, null=True, blank=True)
    position = models.IntegerField(null=True, blank=True)
