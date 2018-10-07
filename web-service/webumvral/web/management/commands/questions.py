from django.core.management.base import BaseCommand, CommandError
from web.models import *
from django.contrib.auth.models import User
from random import choice

class Command(BaseCommand):
    help = 'Fill the database with question for tests. The document to import must be named: questions.txt'

    def add_arguments(self, parser):
        parser.add_argument(
            '--import',
            action='store_true',
            dest='import',
            help='Crea info real.',
        )
        parser.add_argument(
            '--beta',
            action='store_true',
            dest='beta',
            help='Crea info para modo dummy.',
        )
    def handle(self, *args, **options):

        if (options['beta']):
            #TODO: https://github.com/roloow/umvral/issues/118
            return 0
