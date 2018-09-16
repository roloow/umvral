from django.urls import path, re_path
from . import views
from .views.course import CourseListJson
from django.conf.urls import url, include
from django.contrib.auth.decorators import login_required

app_name="web"

urlpatterns = [
    re_path(r'home/$', views.home, name='home'),
    re_path(r'logout/$', views.logout_method, name='logout'),
    re_path(r'login/$', views.login_method, name='login'),
    re_path(r'register/$', views.register, name='register'),
    re_path(r'course/list$', views.courses_list, name='course_list'),
    re_path(r'course/edit/$', views.course_edit, name='course_edit'),
    re_path(r'course/edit/(?P<course>\w+)$', views.course_edit, name='course_edit'),
    re_path(r'course/delete/$', views.course_delete, name='course_delete'),
    re_path(r'course/delete/(?P<course>\w+)$', views.course_delete, name='course_delete'),
    url(r'^my/datatable/data/$', login_required(CourseListJson.as_view()), name='course_list_json')
] 
