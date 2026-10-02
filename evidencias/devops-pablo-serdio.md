# Evidencias individuales - Práctica 1 DevOps

Renombra este fichero como `devops-nombre-apellido.md` y complétalo dentro de tu rama feature.

## 1. Colaboración DevOps - RA1.a

Explica en 1-2 frases qué aporta cada acción al trabajo colaborativo:

### a) Trabajar en una rama feature

Respuesta: Trabajar en ramas separadas nos permite a cada uno programar nuestra funcionalidad sin riesgo de cargarnos directamente el código de la versión principal del equipo.

### b) Abrir un Pull Request y que otro compañero lo revise

Respuesta: Sirve para que el resto del grupo pueda ver los cambios que he hecho y revisarlos a fondo antes de mezclarlos con el trabajo de los demás en la rama comun.

### c) Resolver un conflicto de README.md entre varios cambios

Respuesta: Nos obliga a ponernos de acuerdo cuando dos compañeros hemos modificado exactamente la misma parte del archivo, para decidir qué texto se queda en la versión final.

## 2. CI/CD - RA1.b

### a) Integración Continua (CI)

Explica con tus palabras que podria automatizarse al hacer `push` o abrir un Pull Request:

Respuesta: En vez de tener que probar la aplicación a mano como hemos hecho ahora, el sistema pasaria una serie de test automaticos cada vez que subimos nuestro codigo para asegurar que los cambios funcionan y no romper nada de lo anterior.

### b) Entrega / Despliegue Continuo (CD)

Explica qué podria ocurrir automáticamente después de superar las comprobaciones:

Respuesta: Una vez que el código pasa todas esas pruebas de integración continua sin errores, se empaqueta y se despliega directamente para que este disponible en un entorno de pruebas o ya en producción.

### c) Dos comprobaciones de esta práctica que automatizarías en un pipeline futuro

1. Comprobar de forma automatica que al meter texto en el input y darle a añadir, la tarea aparezca en la lista y el sistema bloquee los intentos de añadir tareas vacías.

2. Comprobar que al darle al boton de eliminar de una tarea en concreto, solo desaparece esa y las demás se queden intactas en la pantalla.

## 3. Selección de herramientas - RA1.e

Herramientas de referencia: Git, GitHub, GitHub Actions, Jenkins, SonarQube y OWASP ZAP.

### Contexto A
Equipo pequeño que ya trabaja en GitHub y quiere ejecutar pruebas automáticamente en cada Pull Request.

Herramienta principal de CI/CD elegida:

Justificación (2-3 líneas): Como el equipo ya tiene todo el proyecto alojado en GitHub, es lo mas cómodo porque la automatización viene integrada en la propia plataforma y no hace falta montar servidores aparte.

### Contexto B
Empresa que quiere administrar su propio servidor de automatización y conectarlo con repositorios y entornos internos.

Herramienta principal de CI/CD elegida:

Justificación (2-3 líneas): Es un servidor de automatización muy personalizable que la empresa puede instalar y gestionar por su cuenta, ideal para conectarlo a medida con sus propias infraestructuras y repositorios internos.

### Herramienta adicional opcional

Si añadirías SonarQube u OWASP ZAP, indica cuál y qué comprobaría: Añadiría SonarQube para que le pase un escaneo al código JavaScript automáticamente y nos avise si hay malas prácticas, fallos o código sucio antes de aceptar los cambios.
