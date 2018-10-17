# -*- coding: utf-8 -*-

from django.core.management.base import BaseCommand, CommandError
from web.models import *
from django.contrib.auth.models import User
import codecs

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
            return 0

        if (options['import']):
            #Importamos un archivo de preguntas, llamado questions.csv
            print("Importando preguntas...")
            preguntas = open('questions.csv', encoding='utf-8')
            if not preguntas:
                print("Error: archivo questions.csv no encontrado")
                return -1
            for pregunta in preguntas:
                pregunta = pregunta.strip().split(';')
                #print(pregunta[0])
                q = QuestionModel()
                q.statement = pregunta[1]
                q.optionA = pregunta[2]
                q.optionB = pregunta[3]
                q.optionC = pregunta[4]
                q.optionD = pregunta[5]
                q.correct = pregunta[6]
                experiencia = ExperienceModel.objects.filter(name=pregunta[0])
                #print(experiencia[0].pk)
                q.experience = experiencia[0]
                q.save()
