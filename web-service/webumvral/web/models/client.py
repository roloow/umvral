# -*- coding: utf-8 -*-

from django.db import models
from django.contrib.auth.models import User

class ClientModel(models.Model):
    isProfessor = models.BooleanField(default=False, help_text='Indica si el usuario es profesor.')
    auth_user = models.OneToOneField(User, on_delete=models.CASCADE ,related_name='profile')

    @property
    def full_name(self):
        return u'{0} {1}'.format(self.first_name, self.last_name)

    @property
    def first_name(self):
        return self.auth_user.first_name

    @property
    def last_name(self):
        return self.auth_user.last_name

    @property
    def email(self):
        return self.auth_user.email
