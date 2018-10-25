"""webumvral URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url, include
from tastypie.api import Api
from api.resources import ExperienceResource
from api.resources import MessageResource
from api.resources import ExpdispResource
from api.resources import ClientResource
from api.resources import StudentResource
from api.login import UserResource
from api.resources import CourseResource
from api.resources import ExpcourseResource

experience = ExperienceResource()
message = MessageResource()
expdisp = ExpdispResource()
user = UserResource()
client = ClientResource()
student = StudentResource()
course = CourseResource()
expcourse = ExpcourseResource()

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('/', include(administration.urls)) TO BE CREATED
    #path('api/', include('api.urls')),
    path('web/', include('web.urls')),
    url(r'^api/', include(experience.urls)),
    url(r'^api/', include(message.urls)),
    url(r'^api/', include(expdisp.urls)),
    url(r'^api/', include(user.urls)),
    url(r'^api/', include(client.urls)),
    url(r'^api/', include(student.urls)),
    url(r'^api/', include(course.urls)),
    url(r'^api/', include(expcourse.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
