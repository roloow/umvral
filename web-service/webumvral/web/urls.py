from django.urls import path, re_path
from . import views

app_name="web"
handler404 = "web.views.404"

urlpatterns = [
    re_path(r'home/$', views.home, name='home'),
    re_path(r'logout/$', views.logout_method, name='logout'),
    re_path(r'login/$', views.login_method, name='login'),
    re_path(r'register/$', views.register, name='register'),
    re_path(r'404/$', views.page404, name='404'),
    re_path(r'user/(?P<client_id>\d+)/profile/$', views.profile, name='profile'),
    re_path(r'user/(?P<client_id>\d+)/profile/edit$', views.profile_edit, name='profile_edit'),
    re_path(r'user/(?P<client_id>\d+)/inbox/(?P<inbox_type>\d+)/$', views.message_view, name='msg_view'),
]
