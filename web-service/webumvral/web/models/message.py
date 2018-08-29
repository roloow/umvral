# -*- coding: utf-8 -*-

from django.db import models


class MessageModel(models.Model):
    sender = models.ForeignKey('ClientModel', on_delete=models.CASCADE, related_name='sentmsg')
    receiver = models.ForeignKey('ClientModel', on_delete=models.CASCADE, related_name='receivedmsg')
    topic = models.CharField(max_length=50, null=True, blank=True)
    content = models.CharField(max_length=300, null=True, blank=True)
