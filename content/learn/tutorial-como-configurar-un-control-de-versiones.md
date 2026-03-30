[Image: image]

# ¿Cómo configurar un control de versiones?

Tutorial

foundational

+10XP

15 mins

19

(176)

Unity Technologies

[Image: ¿Cómo configurar un control de versiones?]SummarySkills

En este tutorial, aprenderás lo básico del control de versiones y las razones para implementarlo en tus propios proyectos, incluso si desarrollas aplicaciones por tu cuenta. También aprenderás sobre las distintas opciones de control de versiones disponibles para usar con Unity y pondrás tus nuevas habilidades en práctica al descargar el proyecto que utilizarás en los próximos tutoriales.

Al finalizar este tutorial, podrás realizar lo siguiente:

- Identificar las distintas soluciones de control de versiones que pueden utilizarse para mantener un proyecto.
- Describir cómo el control de versiones se utiliza para mantener un proyecto

Resources

- [Junior-Programmer-Starter-Files.zip](https://unity-connect-prd.storage.googleapis.com/20250128/5641396f-871d-4fdf-88d2-4d15de1a0c78/Junior-Programmer-Starter-Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953277327)

Languages available:

EspañolEnglishEspañol한국어Español

## 1. Descripción general

Q&A (0)

Ya sea que trabajes por tu cuenta o en equipo, un aspecto importante del desarrollo del proyecto es decidir cómo administrarás los archivos de tu proyecto. Si desarrollas por tu cuenta, siempre hay un nivel de riesgo asociado con conservar una sola instancia de tu proyecto en un disco duro local; si el disco falla, tu proyecto se pierde. El proceso de actualización se puede complicar si mantienes varias copias de seguridad de tu proyecto en distintos discos o almacenadas en la nube. Si desarrollas en equipo, tienes que determinar cómo todos podrán obtener acceso al proyecto y cómo se garantizará que el trabajo que una persona haga no sobrescriba o dañe el trabajo de alguien más.

Por fortuna, la solución a todos estos problemas es bastante simple: **control de versiones**.

Si la idea de trabajar con control de versiones parece intimidante, no te preocupes. Muchas personas se sienten abrumadas por la idea cuando apenas comienzan a desarrollar. Los inicios en falso y la confusión al intentar configurar ese primer repositorio puede hacer que los nuevos desarrolladores duden sobre intentarlo nuevamente, a pesar de lo útil que el control de versiones resultaría. Si entras en esta categoría, considera que hay muchos otros como tú e intenta nuevamente en este proyecto.

Marcar paso como completado

## 2. ¿Qué es el control de versiones?

Q&A (0)

**El control de versiones** (que a veces se llama control de código fuente) es un sistema que administra y monitoriza información. Los sistemas de control de versiones pueden configurarse para almacenar, administrar y monitorizar cambios a todo tipo de archivos, software, sitios web y otros datos.

Las personas, pequeños equipos o grandes organizaciones por lo general usarán un sistema de control de versiones para ayudar a respaldar y administrar proyectos complejos. Dado que los sistemas de control de versiones trabajan con servicios de almacenamiento en la nube, puedes aprovechar útiles características como:

- Almacenamiento de respaldo
- Monitorización de revisiones
- Administración de proyecto

En este tutorial, aprenderás sobre los sistemas de control de versiones que utilizan almacenamiento en la nube, en comparación con los que utilizan almacenamiento localizado, que es más adecuado para circunstancias de equipos especiales.

Marcar paso como completado

## 3. ¿Quién utiliza control de versiones?

Q&A (0)

Cuando varios miembros del equipo se involucran en el desarrollo coordinado de proyectos o software, puede ser difícil administrar sin un sistema de control de versiones definido. ¡Todos lo necesitan!

Conforme el proyecto se vuelve más complejo, los miembros del equipo necesitan mantenerse al tanto de los cambios que realizan sus compañeros de equipo. Si no se coordinan de forma coherente, se enfrentarán a ineficacias, cuellos de botella, código perdido, retrabajo y mucha frustración. El propósito del control de versiones es evitar esos problemas.

Marcar paso como completado

## 4. ¿Cómo seleccionar tu herramienta de control de versiones?

Q&A (0)

Los sistemas de control de versiones varían en función de las necesidades de tu proyecto. Unity tiene su propia solución de control de versiones llamada **Collaborate**, disponible como paquete. Sin embargo, para este proyecto de aprendizaje utilizaremos **Github**, una solución de control de versiones extremadamente popular que probablemente encuentres durante tu carrera de desarrollo. También es fácil trabajar con ella, en especial para quienes se inician en el control de versiones.

Para simplificar las cosas aun más, te guiaremos para utilizar **GitHub Desktop**, una aplicación fácil de usar que te permite acceder a proyectos de GitHub mediante una interfaz de usuario gráfica en lugar de una línea de comando con comandos Git. Si ya conoces GitHub o prefieres trabajar con la línea de comandos, siéntete con la libertad de omitir el siguiente paso.

Si te interesa leer más sobre cómo Unity se integra con otros sistemas de control de versiones, consulta nuestros tutoriales sobre [Introducción a Unity Collaborate](https://learn.unity.com/tutorial/introduction-to-unity-collaborate?uv=2020.1&pathwayId=5f7e17e1edbc2a5ec21a20af&missionId=5f779f1eedbc2a00201f3e5e&projectId=5fadaa43edbc2a0020bdedfd) y [Trabajo con Unity y Helix Core Perforce](https://learn.unity.com/tutorial/working-with-unity-and-helix-core-perforce?uv=2020.1&pathwayId=5f7e17e1edbc2a5ec21a20af&missionId=5f779f1eedbc2a00201f3e5e&projectId=5fadaa43edbc2a0020bdedfd).

Marcar paso como completado

## 5. ¿Cómo comenzar a usar GitHub Desktop?

Q&A (0)

Para crear un repositorio de GitHub, necesitas crear una cuenta gratuita de GitHub e instalar GitHub Desktop.

Para configurarlo, realiza lo siguiente:

**1.**  Crea una cuenta gratuita de GitHub en [github.com](https://github.com/) si todavía no tienes una.

**2.**  Descarga e instala GitHub Desktop en [desktop.github.com](https://desktop.github.com/), disponible para Mac y PC. El sitio debe detectar automáticamente qué plataforma utilizas o puedes seleccionarla manualmente.

**3.**  Después de la instalación, inicia sesión en GitHub Desktop con tu cuenta.

- En Windows, selecciona **File** > **Options**> **Account**.
- En Mac, selecciona **GitHub Desktop** > **Preferences**.

Puedes obtener más información acerca de cómo iniciar sesión y autenticar tu cuenta en la [documentación de GitHub](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/authenticating-to-github).

Si todavía no tienes repositorios asociados con tu cuenta, deberás ver ahora esta pantalla de bienvenida que te invita a comenzar.

[Image: image]Marcar paso como completado

## 6. ¿Cómo crear un nuevo repositorio en tu disco duro?

Q&A (0)

Un repositorio de GitHub (usualmente abreviado como «repo») es una carpeta en la que se aloja un proyecto. Dentro de esta carpeta, tu software de control de versiones monitoriza todos los cambios cuidadosamente. Lo primero que debes hacer es crear un repositorio vacío que esté configurado específicamente para un proyecto de Unity.

**1.**En la pantalla de bienvenida de GitHub Desktop, selecciona **Create a New Repository on your Hard Drive (Crea un nuevo repositorio en tu disco duro)**.

[Image: image]

También puedes hacer clic en **File**>**New Repository** en el menú superior de GitHub Desktop.

**2.**En la ventana **Create a New Repository** que aparece, configura los ajustes de tu repositorio:

- Dale un **Name (Nombre)** a tu repositorio, algo como «Jr-Programmer-Project». Considera que los espacios se reemplazarán con guiones.
- Selecciona la **Local Path (Dirección de acceso)** donde quieres guardar tu repositorio. Una carpeta con el nombre que acabas de escribir se creará ahí.

En el menú desplegable **Git Ignore** selecciona la opción **Unity.**Esto creará un archivo .gitignore preconfigurado en tu repositorio que enumera todos los tipos de archivos que no quieres que se almacenen en el control de versiones. Para Unity, esto significa que solo se enfocará en los archivos específicos de tu proyecto e ignorará todo lo demás.

[Image: image]

**3.**Selecciona **Create Repository (Crear repositorio)**. Esto definirá el menú desplegable **Current Repository (Repositorio actual)** a tu nuevo repositorio. En la ventana principal, verás que por el momento No local changes (No hay cambios locales). Se debe a que es un nuevo repositorio que todavía no editas.

[Image: image]

**4.**Abre la carpeta que se acaba de crear en tu computadora en la ubicación que especificaste. Si tu computadora está configurada para ver archivos ocultos, verás que contiene tres elementos:

- .git folder
- .gitattributes
- .gitignore

[Image: image]

La carpeta .git indica a GitHub que es, de hecho, un repositorio de GitHub. El .gitignore y los .gitattributes especifican la configuración de tu repositorio. No es necesario, pero si quieres ver estos archivos ocultos, puedes buscar en Google la forma de hacerlo en Windows o Mac.

Para darle a GitHub algo que monitorizar, pondrás un proyecto de Unity real en esta carpeta en el siguiente paso.

Marcar paso como completado

## 7. ¿Cómo descargar, abrir y comenzar a monitorizar tu proyecto?

Q&A (0)

Con tu repositorio vacío pacientemente a la espera de cambios por monitorizar, agreguémosle un proyecto de Unity y abrámoslo por primera vez.

**1.**[Descarga la carpeta zip del proyecto](https://unity-connect-prd.storage.googleapis.com/20250128/5641396f-871d-4fdf-88d2-4d15de1a0c78/Junior-Programmer-Starter-Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953277327), extráela y abre la carpeta **Junior-Programmer-Starter-Files**. En ella encontrarás las siguientes carpetas:

- Assets
- Packages
- ProjectSettings

**2.**Utiliza **Ctrl + A** (Windows) o **Cmd + A** (Mac) para seleccionar las tres carpetas y después copiarlas y pegarlas en tu carpeta repositorio, junto a tus archivos ocultos .git. La carpeta ya está lista para abrirse como un proyecto de Unity.

[Image: image]

**3.**[Agrega tu carpeta repositorio del proyecto al Unity Hub](https://learn.unity.com/tutorial/project-setup-processes#60ed7a5aedbc2a002520b6ea) y después abre el proyecto en el Editor de Unity.

Considera que este proyecto requiere Unity 2020.3 LTS. Si no está instalado, se mostrará una notificación de advertencia bajo su listado en el Unity Hub con una invitación para instalar la versión correcta.

[Image: image]

**4.**En tu ventana Github Desktop, ahora aparece una larga lista de nuevos archivos en el panel **Changes** con un pequeño ícono de más (+) color verde junto a cada archivo para indicar que es nuevo.

[Image: image]

¡Felicitaciones! Tu proyecto ya está listo para el control de versiones. GitHub monitorizará cualquier cambio que realices a este proyecto.

Marcar paso como completado

## 8. ¿Cómo realizar una entrega inicial y publicar tu repositorio?

Q&A (0)

El primer conjunto de archivos que entregas a tu repositorio se incluirá en la **entrega inicial**. Por lo general realizarás una entrega inicial después de configurar tu proyecto por primera vez, así que hagamos eso ahora.

**1**.  En el campo **Summary (Resumen)** bajo los cambios enumerados en tu repositorio, escribe «initial commit» y rellena la **Description (Descripción)** (p. ej., “archivos de inicio del proyecto”). Después selecciona **Commit to main (Entregar a principal)** para guardar tus cambios en la ramificación «principal» del proyecto. Si no sabes qué son las ramificaciones, no te preocupes, hablaremos de ello en un próximo tutorial.

[Image: image]

Después de hacer clic en **Commit (Entregar)**, todos los cambios enumerados deben desaparecer dado que ahora se almacenaron con seguridad en el control de versiones.

Sin embargo, aunque todos tus cambios se monitorizarán localmente en tu disco duro, ¿qué pasa si por accidente arrojas tu computadora por un acantilado? ¡Todo tu trabajo se perderá! Respaldemos tu proyecto en la nube, por si acaso.

**2**.  En la interfaz de GitHub Desktop, selecciona **Publish Repository (Publicar archivo)**.

[Image: image]

**3.**En la ventana que se abre, confirma el nombre de tu proyecto y si quieres que tu código sea público o privado. Después selecciona **Publish Repository**.

[Image: image]

**4.** Para ver tu repositorio respaldado y publicado en GitHub.com, ve al menú superior de GitHub Desktop y selecciona **Repository**>**View on GitHub**. Aquí puedes explorar todos los archivos, ver el historial de entregas, registrar problemas y mucho más. Siéntete con la libertad de explorar la interfaz para sentirte un poco más cómodo.

Marcar paso como completado

## 9. ¿Cómo funciona el control de versiones?

Q&A (0)

**Carga y descarga cambios**

Cuando utilizas control de versiones, guardarás los cambios a tu proyecto mediante un repositorio en la nube (o un directorio de almacenamiento de archivos) con una nota que documente los cambios que realizaste.

Eso significa que podrás **bajar** (descargar) y abrir la versión más reciente de un proyecto, realizarle cambios de forma local y después **subir** (cargar) tus cambios de regreso al repositorio en la nube.

**Combina cambios**

Cuando varias personas trabajan en el mismo proyecto de forma simultánea, a veces pueden realizar distintos cambios al mismo archivo. Por ejemplo, una persona podría cambiar la textura asignada a un recurso de decorado en un proyecto de Unity y otra podría cambiar su posición en la Escena. El control de versiones administra los archivos del proyecto para combinar y unificar todos los cambios en un proceso conocido como **integración**. Ocasionalmente, los cambios realizados a un archivo del proyecto pueden afectar a los mismos valores. Cuando eso ocurre, el sistema de control de versiones no puede integrar los cambios, lo cual provoca un **conflicto de integración** que requiere la intervención del desarrollador. El sistema de control de versiones identificará el conflicto y por lo general mostrará una comparación de los dos valores. El desarrollador después determinará cuál conservar para resolver el conflicto.

**Revierte a versiones anteriores**

Uno de los principales beneficios del control de versiones es dar seguimiento a todos los cambios de forma cronológica. Si cualquier cambio está en conflicto, o si decides que es mejor revertir a una versión anterior, puedes regresar a cualquier versión previa de tu proyecto en cualquier momento y restaurarla.

Marcar paso como completado

## 10. Resumen

Q&A (0)

El control de versiones tiene grandes beneficios para los desarrolladores independientes y para quienes trabajan en un equipo. Aunque podría parecer intimidante al inicio, los sistemas de control de versiones son poderosas herramientas para mantener un proyecto mientras trabajas. En este tutorial:

- Aprendiste sobre la teoría básica del control de versiones.
- Implementaste esa teoría al hacer lo necesario para trabajar dentro del ecosistema de GitHub.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
