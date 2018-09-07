from tastypie.resources import ModelResource
from web.models import ExperienceModel
from web.models import MessageModel
from web.models import AvailabilityModel
from tastypie.authorization import Authorization
from tastypie.authentication import Authentication


class ExperienceResource(ModelResource):
    class Meta:
        queryset = ExperienceModel.objects.all()
        resource_name = 'experience'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']


class MessageResource(ModelResource):
    class Meta:
        queryset = MessageModel.objects.all()
        resource_name = 'message'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']


class ExpdispResource(ModelResource):
    class Meta:
        queryset = AvailabilityModel.objects.all()
        resource_name = 'expdisp'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']
