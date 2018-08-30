# -*- coding: utf-8 -*-

from django.db import models
from django.contrib.auth.models import User

class TestModel(models.Model):
    total_questions = models.IntegerField(null=True, blank=True)
    visible = models.BooleanField(default=False)
    erase = models.BooleanField(default=False)
