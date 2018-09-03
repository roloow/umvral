## Sistema

Para este proyecto utilizaremos el framework Web de **Python** llamado **Django** el cual será utilizado como *Front y Back-end*, a su vez para *Front-End* nos basaremos en su mayoría en *Django Templates* pero añadiremos el uso de *JavaScript*, más puntualmente **VueJS**, para acciones dinámicas.

### Pre-requisitos obligatorio

Es imperativo la instalación de *Python* que en nuestro caso utilizaremos [Python 3.6](https://www.python.org/downloads/)

### Pre-requisitos opcional

Aconsejamos la utilización de dos herramientas *virtualenv* y *pip*, dado que se instalarán algunos paquetes de python se aconseja la utilización de un ambiente virtual para no instalar globalmente paquetes posiblemente basura, y pip (gestor de paquetes) permitirá la instalación más sencilla de estos mismos.

Lo primero será crear y activar el ambiente de desarrollo en la carpeta donde se encuentre nuestro proyecto (*WINDOWS*)

```
:> cd CarpetaDestino
:CarpetaDestino> virtualenv .
:CarpetaDestino> .\Scripts\activate
(CARPET) :CarpetaDestino>
```
### Paquetes y configuraciones iniciales

Una vez aparesca el **(CARPET)** significará que se ha activado correctamente. Es tiempo de instalar los paquetes de python

```
(CARPET) :CarpetaDestino> pip3 install -r requirements.txt
```
Habiendo realizado esto podemos proceder a los ajustes iniciales de la aplicación. Para esto deberemos utilizar comandos* del sistema. (*Los comandos se encuentran más detallados en la sección Comandos*)

```
(CARPET) :CarpetaDestino> cd webumvral
(CARPET) :CarpetaDestino\webumvral> python manage.py makemigrations
(CARPET) :CarpetaDestino\webumvral> python manage.py migrate
```

**Si no se crean las carpetas** de las sub-aplicaciones con nombre *migrations*, usted puede realizar una migración particular.

```
(CARPET) :CarpetaDestino\webumvral> python manage.py makemigrations app
(CARPET) :CarpetaDestino\webumvral> python manage.py migrate
```

Si por algún motivo llegase a generarse un error sobre la base de datos o migraciones, se aconseja la eliminación de las carpetas "migrations" de cada sub-aplicación además de eliminar la base de datos (sqlite) y luego proceder a realizar los pasos anteriores.


## Servidor

El servidor, una vez realizadas las configuraciones anteriores debe ser corrido mediante runserver quien puede obtener como parametro el puerto que se desee abrir para correr el sistema o utilizará el puero 8000 por defecto
```
(CARPET) :CarpetaDestino\webumvral> python manage.py runserver
```
