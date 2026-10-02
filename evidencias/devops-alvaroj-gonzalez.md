# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta: Trabajar en esta rama a parte, nos permite desarrollar una funcionalidad o realizar cambios sin modificar la rama principal. De esta manera se reducen los posibles problemas entre compañeros y se puede revisar el trabajao antes de subirlo

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Nos permite proponer cambios realizados para incorporarse al proyecto y que otro compañero los revise antes de aceptarlos. De esta manera se detectan errores y se mejora la calidad del codigo antes de subirlo a la rama principal.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Permite combinar correctamente los cambios realizados por diferentes personas cuando Git detecta que modifican las mismas partes del archivo. Esto nos permite resulver un cnflicto sin perder informacion y mantener una veriosn final coherente

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras qué podría automatizarse al hacer `push` o abrir un Pull Request: 

Respuesta: Nos permitiria ejecutar automaticamente comprobaciones como la compilacoin del proyecto, las pruebas automaticas, la comprobacion  de errores y analisis de calidad, de tal manera se detectan problemas antes de que se suba al main

### b) Entrega / Despliegue Continuo (CD)

Explica qué podría ocurrir automáticamente después de superar las comprobaciones:

Respuesta: Tras superar las comrpobaciones, el proyecto podria prepararse y desplegarse automaticamente en un entorno de pruebas o en el entorno de produccion y esto nos permite publicar cambios sin tener que realizar manualmente todos los cambios sin tener que realizar manualmente todos los paos del despliegue 

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1.Comprobar automaticasnte que lo cambios se puedne integrar y que no haya errores 
2. Ejecutar pruebas automaticamente para ver que el proyecto vaya correctamente para su subida

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida:
Github
Justificación (2-3 líneas):
En este caso, el equipo utilizara CD para la automatizacion de las pruebas en cada pull request. Con ello como se refiere a un equipo pequeño, es una adecuada ya que no necesita mantener un servidor de automatizacion independiente
### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida:
Jetkins
Justificación (2-3 líneas):
Jenkins permite crear pipelines personalizados y ejecutarlos en servidores propios. Es adecuado para una empresa que necesita tener un mayor control sobre su infraestructura y conectar la automatización con sus repositorios y entornos internos.
### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría:
En el caso de utilizar SonarQube, este nos permitiria analizar automaticamente el codigo para detectar los posbiles errores, vulnerabilidades, codigo duplicado y otros problemas realcionados con la calidad y el mantenimiento