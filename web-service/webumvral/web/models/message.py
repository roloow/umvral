# -*- coding: utf-8 -*-

from django.db import models
from django.contrib.auth.models import User


class MessageModel(models.Model):
    sender = models.ForeignKey('ClientModel', on_delete=models.SET_NULL, related_name='sentmsg', null=True, blank=True)
    receiver = models.ForeignKey('ClientModel', on_delete=models.SET_NULL, related_name='receivedmsg', null=True, blank=True)
    important = models.BooleanField(default=False)
    topic = models.CharField(max_length=50, null=True, blank=True)
    content = models.CharField(max_length=300, null=True, blank=True)
    read = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)
