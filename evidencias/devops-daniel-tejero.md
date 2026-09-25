# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta: Creamos por cada acción que necesitemos añadir una rama feature desde la padre (develop). Cuando terminemos esa acción que estamos haciendo subiremos la rama y haremos merge request a la rama develop. De esta manera podemos trabajar simultaneamente con otros compañeros y evitar pisar el trabajo del otro.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Un pull request fusiona los cambios de una rama a otra permitiendo que los compañeros revisen y comenten el codigo. Suele hacerse cuando terminas de tabajar en la rama develop y quieros subir todos los cambios a la main.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Ocurre cuando editas la misma linea del mismo archivo en dos ramas distintas. Te marcaran los cambios realizados en una rama y en la otra y tu decides con lo que quedarte (o fusionarlo).

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request:

Respuesta: Se podria comprobar que todo funcione correcto mediante tests y que la sintaxis del codigo cumpla con el formato dado en la empresa/entorno de trabajo.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta:

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Revisión de sintaxis del codigo
2. Revisión de funcionamiento del codigo

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida: La opción mas adecuada seria usar Git-Hub Actions ya que estamos trabajando en Git-Hub y seria mas sencillo implementarlo. Ademas nos quitariamos de problemas ya que si usamos otra herramienta deberiamos comprar un servidor o pagar por una herramienta externa (jenkins).

Justificación (2-3 líneas): 

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida:

Justificación (2-3 líneas): Usaria Jenkins ya que se puede hostear en un servidor propio, configurar automatizaciones y conectarlo con varios repositorios

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría: Añadiria SonarQube ya que te ayuda a mejorar la calidad, seguridad y mantenibilidad de tu codigo. Te marca malas practicas, malas optimizaciones de codigo y posibles riesgos de seguridad. Todo esto lo acompaña con un breve texto explicativo y una posible solución.
