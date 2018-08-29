from django.urls import path
from . import views

app_name="web"

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_method, name='login'),
    path('logout/', views.logout_method, name='logout'),
    path('register/', views.register, name='register'),
]
