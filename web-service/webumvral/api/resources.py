from tastypie.resources import ModelResource
from web.models import ExperienceModel
from tastypie.authorization import Authorization
from tastypie.authentication import Authentication


class ExperienceResource(ModelResource):
    class Meta:
        queryset = ExperienceModel.objects.all()
        resource_name = 'experience'
        authentication = Authentication()
        authorization = Authorization()
        #allowed_methods = ['get']
