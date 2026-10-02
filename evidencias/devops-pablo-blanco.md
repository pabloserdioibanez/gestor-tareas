# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta: Permite que cada persona trabaje en una funcionalidad de forma independiente sin modificar directamente la rama principal. Así se reducen los conflictos y se pueden integrar los cambios después de revisarlos.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Permite revisar los cambios antes de integrarlos en develop, detectando posibles errores y asegurando que el código cumple con lo acordado por el equipo.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Permite combinar correctamente los cambios realizados por diferentes personas cuando modifican las mismas líneas del archivo. Así se evita perder trabajo y se mantiene una versión coherente del proyecto.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request:

Respuesta: Al hacer push o abrir un Pull Request se podrían ejecutar automáticamente pruebas, comprobar que el proyecto funciona correctamente y detectar errores de código antes de integrar los cambios.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta: Después de superar las comprobaciones, se podría generar una nueva versión de la aplicación y desplegarla automáticamente en el entorno correspondiente.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Comprobar automáticamente que el proyecto funciona y que las funcionalidades de las tareas pasan las pruebas.
2. Comprobar que el código no contiene errores o problemas de calidad antes de aceptar el Pull Request.



## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida:

Justificación (2-3 líneas):
Está integrada directamente con GitHub y permite ejecutar automáticamente pruebas y otras comprobaciones cuando se abre o modifica un Pull Request. Es adecuada para un equipo pequeño porque no necesita mantener un servidor de automatización independiente.

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida:

Justificación (2-3 líneas):
Jenkins permite instalar y administrar la plataforma de automatización en servidores propios. Además, permite crear pipelines y conectarlos con repositorios y diferentes entornos internos.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría: Comprobaría la calidad y seguridad del código, buscando problemas como errores, vulnerabilidades, código duplicado y posibles malas prácticas.
