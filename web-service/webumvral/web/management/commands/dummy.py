from django.core.management.base import BaseCommand, CommandError
from web.models import *
from django.contrib.auth.models import User
from random import choice

class Command(BaseCommand):
    help = 'Fill the database with dummy info'

    def add_arguments(self, parser):
        parser.add_argument(
            '--create',
            action='store_true',
            dest='create',
            help='Crea info dummy.',
        )
        parser.add_argument(
            '--delete',
            action='store_true',
            dest='delete',
            help='Elimina la base de datos y deja un usuario <user> admin@umvral.cl <password> admin',
        )
        parser.add_argument(
            '--extra',
            action='store_true',
            dest='extra',
            help='genera experiencias',
        )
    def handle(self, *args, **options):
        firstnames = ["Alonso","Martina","Fernanda","Camilo","Carlos","Felipe","Andrés","Francisca","Francisco","Pablo","Bastian","Pedro","Osvaldo","Vladimir","Alejandro","Alejandra","Marcelo","Rolando","Cristobal","Fernando","Ignacio","Ignacia","Alexander","Hector","Ricardo","Juan","Aquiles","Carlos","Nefesto","Adolfo","Nefertitis","Orion","Pia","Paloma","Sofia","Isidora","Belen","Leonor","Montserrat","Catalina","Josefa","Maximiliano","Santiago","Jan","Guillermo","Catalina","Nicolas","Jose","Eustaquio","Jacqueline","Constanza","Renate","Renato","Karina","Karin","Doris","Ana","Maria","Paulina","Alfonso","Lucia","Ramiro"]
        lastnames = ["Abad","Adadia","Abascal","Abella","Abellán","Abril","Acedo","Acevedo","Acero","Acosta","Acuña","Adán","Aguado","Agudo","Aguilar","Aguilera","Aguiló","Aguirre","Agullo","Agustí","Agustín","Álamo","Alarcón","Alba","Alberdi","Albero","Alberola","Alberto","Alcalá","Alcalde","Alcántara","Alcaraz","Alcázar","Alcolea","Alegre","Alegria","Alemán","Alemany","Alfaro","Alfonso","Aliaga","Almagro","Almansa","Almazán","Almeida","Alonso","Alsina","Alvarado","Álvarez","Álvaro","Aller","Amador","Amat","Amaya","Amigó","Amo","Amor","Amores","Amorós","Anaya","Andrade","Andrés","Andreu","Ángel","Anglada","Angulo","Anguita","Antón","Antúnez","Aparicio","Aragón","Aragonés","Aramburu","Arana","Aranda","Araujo","Arce","Arco","Arcos","Arellano","Arenas","Arévalo","Arias","Ariño","Ariza","Arjona","Armas","Armengol","Arnaiz","Arnal","Arnau","Aroca","Arranz","Arregui","Arribas","Arrieta","Arroyo","Arteaga","Artigas","Asenjo","Asensio","Atienza","Ávila","Avilés","Ayala","Ayllón","Ayuso","Azcona","Aznar","Azorin","Badía","Baena","Báez","Baeza","Balaguer","Ballester","Ballesteros","Baños","Baquero","Barba","Barberá","Barbero","Barceló","Bárcena","Barco","Baró","Barón","Barragán","Barral","Barranco","Barreda","Barrena","Barrera","Barriga","Barrio","Barrios","Barros","Barroso","Bartolomé","Bas","Bastida","Batalla","Batlle","Bautista","Bauzà","Bayo","Bayón","Bayona","Becerra","Bejarano","Belda","Belmonte","Beltrán","Bellido","Bello","Benavent","Benavente","Benavides","Benet","Benítez","Benito","Berenguer","Bermejo","Bermúdez","Bernad","Bernal","Bernat","Berrocal","Bertrán","Bilbao","Blanca","Blanco","Blanch","Blanes","Blasco","Blázquez","Boada","Boix","Bolaños","Bonet","Bonilla","Borja","Borrás","Borrego","Borrell","Bosch","Botella","Bou","Bravo","Briones","Bru","Buendía","Bueno","Burgos","Busquets","Bustamante","Bustos","Caballero","Cabanillas","Cabañas","Cabello","Cabeza","Cabezas","Cabo","Cabrera","Cabrero","Cáceres","Cadenas","Cal","Calatayud","Calderón","Calvet","Calvo","Calleja","Calzada","Camacho","Cámara","Camino","Campillo","Campo","Campos","Campoy","Camps","Canales","Canals","Canet","Cano","Cánovas","Cantero","Cantón","Cañas","Cañellas","Cañete","Cañizares","Caparrós","Capdevila","Carballo","Carbajo","Carbó","Carbonell","Cárdenas","Cardona","Carlos","Carmona","Carnero","Caro","Carpio","Carranza","Carrasco","Carreño","Carrera","Carreras","Carretero","Carrillo","Carrión","Carro","Carvajal","Casado","Casal","Casals","Casanova","Casanovas","Casares","Casas","Cases","Castañeda","Castejón","Castell","Castellanos","Castelló","Castells","Castilla","Castillo","Castrillo","Castro","Catalá","Catalán","Cazorla","Cepeda","Cerdá","Cerdán","Cerezo","Cerro","Cervantes","Cervera","Céspedes","Cid","Cifuentes","Cisneros","Clavero","Clemente","Cobo","Cobos","Coca","Codina","Coello","Colom","Coloma","Colomer","Coll","Collado","Comas","Company","Conde","Conesa","Contreras","Corbacho","Cordero","Córdoba","Cornejo","Corominas","Coronado","Corral","Correa","Cortés","Cortina","Costa","Cózar","Criado","Crespi","Crespo","Cruz","Cuadrado","Cuéllar","Cuenca","Cuervo","Cuesta","Cueto","Cuevas","Chacón","Chamorro","Chaparro","Chaves","Checa","Chico","Dalmau","Dávila","Daza","Delgado","Díaz","Diego","Diéguez","Díez","Doménech","Domingo","Domínguez","Donaire","Donoso","Duarte","Dueñas","Duque","Durán","Echevarría","Echeverría","Egea","Elías","Elorza","Enríquez","Escalona","Escamilla","Escobar","Escolano","Escribano","Escrivá","Escudero","Espada","España","Español","Esparza","Espejo","Espinosa","Esteban","Esteve","Estévez","Estrada","Expósito","Fabra","Fábregas","Fabregat","Fajardo","Falcó","Falcón","Farré","Feijoo","Feliu","Fernández","Ferrán","Ferrández","Ferrándiz","Ferrando","Ferrer","Ferrera","Ferrero","Ferreras","Figueras","Figueroa","Figuerola","Fiol","Flor","Flores","Folch","Fonseca","Font","Fortuny","Franch","Francisco","Franco","Franch","Frías","Frutos","Fuente","Fuentes","Fuertes","Fuster","Gabaldón","Galán","Galiano","Galindo","Galván","Gálvez","Gallardo","Gallart","Gallego","Gallo","Gámez","Gárate","Garay","Garcés","García","Gargallo","Garmendia","Garrido","Garriga","Garzón","Gascón","Gaya","Gelabert","Gibert","Gil","Gilabert","Giménez","Gimeno","Giner","Giralt","Girón","Girona","Gisbert","Godoy","Goicoechea","Gómez","Gomila","Gomis","González","Gonzalo","Goñi","Gordillo","Gracia","Granados","Grande","Gras","Grau","Gual","Guardia","Guardiola","Guerra","Guerrero","Guijarro","Guillén","Guitart","Gutiérrez","Guzmán","Haro","Heras","Heredia","Hernández","Hernando","Herranz","Herrera","Herrero","Hervás","Hervia","Hidalgo","Hierro","Higueras","Hoyos","Hoz","Huerta","Huertas","Huguet","Hurtado","Ibáñez","Ibarra","Iborra","Iglesia","Iglesias","Infante","Iniesta","Íñigo","Iñiguez","Iriarte","Isern","Izaguirre","Izquierdo","Jaén","Jara","Jaume","Jáuregui","Jerez","Jiménez","Jódar","Jordá","Jordán","Jove","Jover","Juan","Juárez","Juliá","Julián","Jurado","Lago","Laguna","Lamas","Landa","Lara","Larrañaga","Larrea","Lasa","Lastra","Leal","Ledesma","Leiva","León","Lerma","Lillo","Linares","Lobato","Lobo","López","Lorenzo","Losa","Losada","Lozano","Lucas","Lucena","Luís","Luján","Lumbreras","Luna","Luque","Luz","Llabrés","Lladó","Llamas","Llano","Llanos","Lledó","Llobet","Llopis","Llorens","Llorente","Lloret","Lluch","Macías","Machado","Madrid","Madrigal","Maestre","Maldonado","Malo","Mancebo","Manjón","Manrique","Manso","Manuel","Manzanares","Manzano","Marco","Marcos","Marí","Marín","Mariño","Mariscal","Mármol","Marqués","Márquez","Martí","Martín","Martínez","Martorell","Mas","Mascaró","Mata","Matas","Mate","Mateo","Mateos","Mateu","Mayo","Mayol","Mayoral","Maza","Medina","Meléndez","Melero","Mena","Méndez","Mendizábal","Mendoza","Menéndez","Mercader","Merino","Mesa","Miguel","Milla","Millán","Mínguez","Mir","Miralles","Miranda","Miró","Moles","Molina","Moliner","Molins","Moll","Monreal","Montalbán","Montaña","Montenegro","Montero","Montes","Montesinos","Montoya","Montserrat","Mora","Moraleda","Morales","Morán","Morante","Morata","Morcillo","Morell","Moreno","Morera","Morillo","Mosquera","Moya","Múgica","Mulet","Múñiz","Muñoz","Mur","Murcia","Murillo","Muro","Nadal","Naranjo","Narváez","Navarrete","Navarro","Navas","Nebot","Neira","Nevado","Nicolau","Nicolás","Nieto","Niño","Nogueira","Noguera","Nogués","Noriega","Novoa","Núñez","Ocaña","Ochoa","Ojeda","Oliva","Olivares","Olivé","Oliver","Olivera","Oliveras","Olmedo","Olmo","Oller","Ordóñez","Orozco","Ortega","Ortiz","Ortuño","Osorio","Osuna","Otero","Pablo","Pacheco","Padilla","Páez","Pagès","Palacio","Palacios","Palau","Palma","Palmer","Palomar","Palomares","Palomino","Palomo","Pallarès","Paniagua","Pardo","Paredes","Pareja","Parejo","Parra","Pascual","Pastor","Patiño","Pavón","Paz","Pazos","Pedraza","Pedrero","Pedro","Pedrosa","Peinado","Peiró","Peláez","Pelayo","Pellicer","Peña","Peñalver","Peñas","Pera","Peral","Perales","Peralta","Perea","Pereira","Perelló","Perera","Pérez","Pi","Pina","Pineda","Pinedo","Pinilla","Pino","Pinto","Pintor","Piña","Piñeiro","Piñol","Piquer","Pizarro","Pla","Plana","Planas","Plaza","Pol","Polo","Pomares","Pombo","Ponce","Pons","Pont","Porcel","Porras","Porta","Portero","Portillo","Posada","Pou","Poza","Pozo","Pozuelo","Prada","Prado","Prat","Prats","Priego","Prieto","Puente","Puerta","Puga","Puig","Pujadas","Pujol","Pulido","Quero","Querol","Quesada","Quevedo","Quintana","Quintanilla","Quintero","Quiroga","Quirós","Ramírez","Ramis","Ramón","Ramos","Raya","Real","Rebollo","Recio","Redondo","Reguera","Reig","Reina","Requena","Revilla","Rey","Reyes","Riba","Ribas","Ribera","Ribes","Ricart","Rico","Riera","Rincón","Río","Ríos","Ripoll","Riquelme","Rius","Rivero","Robledo","Robles","Roca","Rocamora","Rocha","Roda","Ródenas","Rodrigo","Rodríguez","Roig","Rojas","Roldán","Roma","Román","Romero","Romeu","Ropero","Ros","Rosa","Rosado","Rosales","Rosell","Roselló","Rosselló","Roura","Rovira","Royo","Rozas","Ruano","Rubio","Rueda","Ruiz","Saavedra","Sabater","Sacristán","Sáenz","Sáez","Sainz","Sala","Salamanca","Salas","Salazar","Salcedo","Saldaña","Sales","Salgado","Salinas","Salmerón","Salom","Salvà","Salvador","Samper","Sanabria","Sánchez","Sancho","Sandoval","Sanjuan","Sanmartín","Sanmiguel","Sans","Santamaría","Santos","Sanz","Sarabia","Sarmiento","Sastre","Saura","Sebastián","Seco","Sedano","Segarra","Segovia","Seguí","Segura","Serna","Serra","Serrano","Sevilla","Sevillano","Sierra","Silva","Simó","Sobrino","Sola","Solana","Solano","Solé","Soler","Solera","Solís","Solsona","Somoza","Soria","Soriano","Sosa","Sotelo","Soto","Suárez","Sureda","Taboada","Talavera","Tamarit","Tamayo","Tapia","Tejada","Tejedor","Tejera","Tejero","Téllez","Tello","Tena","Tenorio","Terrón","Teruel","Tirado","Toledo","Tolosa","Tomás","Tomé","Tormo","Toro","Torralba","Torre","Torrecilla","Torrens","Torrent","Torrents","Torres","Torrijos","Tovar","Trillo","Trujillo","Tudela","Tur","Ugarte","Ureña","Uría","Uriarte","Uribe","Urrutia","Valbuena","Valcárcel","Valderrama","Valdés","Valencia","Valenciano","Valentín","Valenzuela","Valera","Valero","Valverde","Vall","Valle","Vallejo","Vallés","Valls","Vaquero","Vara","Varela","Vargas","Vázquez","Vega","Velasco","Velázquez","Vélez","Vendrell","Vera","Verdejo","Verdú","Verdugo","Vergara","Viana","Vicente","Vicens","Vidal","Vigil","Vila","Vilanova","Vilalta","Vilaplana","Vilar","Villa","Villalba","Villalobos","Villalonga","Villanueva","Villar","Villaverde","Villegas","Villena","Viña","Viñas","Vives","Vizcaíno",
        "Yáñez","Yuste","Zabala","Zabaleta","Zamora","Zamorano","Zapata","Zaragoza","Zorrilla"]

        USERS = 1000
        PROFESSOR = 100
        MESSAGE = 30
        IMPORTANT = 4
        READ = 10
        DELETED = 4
        if (options['create']):
            # USERS
            clients = []
            students = []
            professors = []
            for i in range(USERS):
                u = User()
                mail = str(i) + '@umvral.cl'
                u.username = mail
                u.email = mail
                u.first_name = choice(firstnames)
                u.last_name = choice(lastnames)
                u.set_password('qwerty')
                u.save()
                c = ClientModel()
                if (PROFESSOR != 0):
                    c.isProfessor = True
                    PROFESSOR -= 1
                c.auth_user = u
                c.save()
                clients.append(c)
                if (c.isProfessor):
                    professors.append(c)
                    continue
                students.append(c)

            for c in clients:
                for i in range(MESSAGE):
                    m = MessageModel()
                    m.sender = c
                    m.receiver = choice(clients)
                    if (IMPORTANT != 0):
                        m.important = True
                        IMPORTANT -= 1
                        m.topic = "Asunto N. " + str(i)
                        m.content = "Contenido del mensaje"
                        m.save()
                        continue
                    if (READ != 0):
                        m.read = True
                        m.topic = "Asunto N. " + str(i)
                        m.content = "Contenido del mensaje"
                        m.save()
                        continue
                    if (DELETED != 0):
                        m.deleted = True
                        m.topic = "Asunto N. " + str(i)
                        m.content = "Contenido del mensaje"
                        m.save()
                        continue
                    m.topic = "Asunto N. " + str(i)
                    m.content = "Contenido del mensaje"
                    m.save()

            courses = []
            for p in professors:
                c1 = CourseModel()
                c1.name = "Curso numero 1"
                c1.description = "Curso dummy 1"
                c1.erase = True
                c1.professor = p
                c1.save()
                c2 = CourseModel()
                c2.name = "Curso numero 2"
                c2.description = "Curso dummy 2"
                c2.professor = p
                c2.save()
                courses.append(c2)
            reals = []
            for s in students:
                sm = StudentModel()
                sm.profile = s
                sm.course = choice(courses)
        if (options['extra']):
            e1 = ExperienceModel()
            e1.name = "Caida Libre"
            e1.description = "Fenomeno fisico, donde se puede apreciar un pelota caer en distintos escenarios y bajo distintas variables involucradas."
            e1.save()
            e2 = ExperienceModel()
            e2.name = "Lanzamiento de proyectil"
            e2.description = "Fenomeno fisico, donde se puede apreciar un objeto siendo lanzado mediante distintos factores, hacia distintos objetivos."
            e2.save()
            e3 = ExperienceModel()
            e3.name = "Dilatación y calor"
            e3.description = "Fenomeno fisico, donde se puede apreciar como el calor afecta los materiales y objetos dependientes de su temperatura."
            e3.save()
            e4 = ExperienceModel()
            e4.name = "Efecto Doppler"
            e4.description = "Fenomeno fisico, donde se puede apreciar como las ondas viajan a través de los espacios físicos y como su distacia afecta su sonido."
            e4.save()
            e5= ExperienceModel()
            e5.name = "Conservación de energía"
            e5.description = "Fenomeno fisico, donde se puede apreciar como en distintos ambientes la energía se transforma más nunca se crea ni destruye."
            e5.save()
            usuarios = ClientModel.objects.filter(isProfessor=True)
            for u in usuarios:
                courses = u.courses.all()
                if (not courses):
                    continue
                av1 = AvailabilityModel()
                av1.professor = u
                av1.experience = e1
                av1.video = "Video 1"
                av1.position = 0
                av1.save()
                av2 = AvailabilityModel()
                av2.professor = u
                av2.experience = e2
                av2.video = "Video 2"
                av2.position = 1
                av2.save()
                av3 = AvailabilityModel()
                av3.professor = u
                av3.experience = e3
                av3.video = "Video 3"
                av3.position = 2
                av3.save()
                av4 = AvailabilityModel()
                av4.professor = u
                av4.experience = e4
                av4.video = "Video 4"
                av4.position = 3
                av4.save()
                for j in courses:
                    course = j
                    ex1 = ExpCourseModel()
                    ex1.available = av1
                    ex1.course = course
                    ex1.visible = True
                    ex1.save()
                    ex2 = ExpCourseModel()
                    ex2.available = av2
                    ex2.course = course
                    ex2.visible = True
                    ex2.save()
                    ex3 = ExpCourseModel()
                    ex3.available = av3
                    ex3.course = course
                    ex3.visible = False
                    ex3.save()
                    ex4 = ExpCourseModel()
                    ex4.available = av4
                    ex4.course = course
                    ex4.visible = False
                    ex4.save()
