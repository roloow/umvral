# -*- coding: utf-8 -*-

from django.db import models
from django.contrib.auth.models import User

class ExperienceModel(models.Model):
    name = models.CharField(max_length=20, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    url = models.CharField(max_length=100, null=True, blank=True)
