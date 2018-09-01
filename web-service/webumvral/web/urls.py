from django.urls import path, re_path
from . import views

app_name="web"

urlpatterns = [
    re_path(r'home/$', views.home, name='home'),
    re_path(r'logout/$', views.logout_method, name='logout'),
    re_path(r'login/$', views.login_method, name='login'),
    re_path(r'register/$', views.register, name='register'),
]
