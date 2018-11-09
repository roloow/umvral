from django.urls import path, re_path
from . import views
from .views import CourseListJson, StudentListJson
from django.conf.urls import url, include
from django.contrib.auth.decorators import login_required

app_name="web"
handler404 = "web.views.404"

urlpatterns = [
    re_path(r'home/$', views.home, name='home'),
    re_path(r'logout/$', views.logout_method, name='logout'),
    re_path(r'login/$', views.login_method, name='login'),
    re_path(r'register/$', views.register, name='register'),
    re_path(r'course/list$', views.courses_list, name='course_list'),
    re_path(r'course/create/$', views.course_edit, name='course_create'),
    re_path(r'course/edit/$', views.course_edit, name='course_edit'),
    re_path(r'course/edit/(?P<course>\w+)$', views.course_edit, name='course_edit'),
    re_path(r'course/delete/$', views.course_delete, name='course_delete'),
    re_path(r'course/delete/(?P<course>\w+)$', views.course_delete, name='course_delete'),
    re_path(r'course/read/(?P<course>\w+)$', views.course_read, name='course_read'),
    re_path(r'course/read/(?P<course>\w+)/students/$', views.course_students, name='course_students'),
    re_path(r'course/read/(?P<course>\w+)/students/invite$', views.course_invite, name='course_invite'),
    re_path(r'course/read/(?P<course>\w+)/students/(?P<student_id>\w+)/ban$', views.course_ban, name='course_ban'),
    url(r'^my/datatable/data/stud$', login_required(StudentListJson.as_view()), name='course_student_list_json'),
    re_path(r'course/read/(?P<course>\w+)/experiences/$', views.course_experience, name='course_experience'),
    re_path(r'course/read/(?P<course>\w+)/experiences/(?P<experience>\w+)$', views.course_exp_visibility, name='course_exp_visibility'),
    re_path(r'course/read/(?P<course>\w+)/experiences/(?P<experience>\w+)/test$', views.experience_test, name='experience_test'),
    re_path(r'course/read/(?P<course>\w+)/experiences/(?P<experience>\w+)/test/edit$', views.experience_test_edit, name='experience_test_edit'),
    re_path(r'course/read/(?P<course>\w+)/experiences/(?P<experience>\w+)/test/visibility$', views.experience_test_visibility, name='experience_test_visibility'),
    re_path(r'course/read/(?P<course>\w+)/experiences/(?P<experience>\w+)/test/delete$', views.experience_test_delete, name='experience_test_delete'),
    url(r'^my/datatable/data/$', login_required(CourseListJson.as_view()), name='course_list_json'),
    re_path(r'404/$', views.page404, name='404'),
    re_path(r'user/(?P<client_id>\d+)/profile/$', views.profile, name='profile'),
    re_path(r'user/(?P<client_id>\d+)/profile/edit$', views.profile_edit, name='profile_edit'),
    re_path(r'user/(?P<client_id>\d+)/inbox/(?P<inbox_type>\d+)/$', views.message_view, name='msg_view'),
    re_path(r'user/(?P<client_id>\d+)/inbox/message/(?P<msg_id>\d+)/(?P<action>\d+)$', views.msg_actions, name='msg_actions'),
    re_path(r'user/(?P<client_id>\d+)/inbox/message/direct$', views.msg_direct, name='msg_direct'),
    re_path(r'course/read/(?P<course>\w+)/experiences/video/$', views.experience_video, name="video"),
    re_path(r'course/read/(?P<course>\w+)/experiences/(?P<available>\w+)/delete/$', views.erase_video, name="erase_video"),
    re_path(r'user/(?P<client_id>\d+)/experiences/$', views.myexperiences, name="myexps"),
    re_path(r'user/(?P<client_id>\d+)/experiences/add$', views.addexperiences, name="addexps"),
    re_path(r'user/(?P<client_id>\d+)/experiences/(?P<ava_id>\d+)/edit$', views.editexperiences, name="editexps"),
    re_path(r'user/(?P<client_id>\d+)/experiences/(?P<ava_id>\d+)/delete$', views.delexperiences, name="delexps"),
]
