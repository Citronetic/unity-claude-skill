[Image: image]

# Entrega: Continuación de datos en un nuevo repositorio

Ejercicio

foundational

+60XP

30 mins

40

Unity Technologies

[Image: Entrega: Continuación de datos en un nuevo repositorio]SummarySkills

Ahora que sabes cómo guardar datos entre escenas y entre sesiones en una aplicación, puedes poner esas habilidades en uso en un nuevo proyecto. También es una buena oportunidad para configurar un nuevo repositorio y utilizar control de versiones.

Resources

- [Data-Persistence-Starter-Files.zip](https://unity-connect-prd.storage.googleapis.com/20210602/29d6df2f-7766-4564-be87-b1e22c49c5eb/Data-Persistence-Starter-Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954836448)

Languages available:

EspañolEnglishEspañol한국어Español

## 1. ¡Esta misión se actualizó!

Q&A (0)

Por si acaso, actualizamos esta misión mientras no nos veías. Asegúrate de haber completado este contenido antes de intentar esta entrega:

- [¿Cómo configurar el control de versiones?](https://learn.unity.com/tutorial/set-up-version-control)
- [¿Cómo explorar el proyecto de muestra?](https://learn.unity.com/tutorial/explore-the-sample-project)
- [Principios de la programación orientada a objetos.](https://learn.unity.com/tutorial/principles-of-object-oriented-programming)
- [¿Cómo crear un flujo de Escena?](https://learn.unity.com/tutorial/create-a-scene-flow)
- [¿Cómo implementar la continuación de datos entre escenas?](https://learn.unity.com/tutorial/implement-data-persistence-between-scenes)
- [¿Cómo implementar la continuación de datos entre sesiones?](https://learn.unity.com/tutorial/implement-data-persistence-between-sessions)

Marcar paso como completado

## 2. Descripción general

Q&A (0)

En los tutoriales anteriores, implementaste la continuación de datos tanto [entre escenas](https://learn.unity.com/tutorial/implement-data-persistence-between-scenes) como [entre sesiones](https://learn.unity.com/tutorial/implement-data-persistence-between-sessions) en un proyecto de ejemplo.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

En este desafío de entrega, aplicarás ambas técnicas en un nuevo proyecto de juego. Guardarás el nombre de usuario entre escenas y guardarás su puntaje más alto entre sesiones.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Para ayudar a enfocarte en tus habilidades de continuación de datos, te proporcionamos un juego simple de estilo Breakout que es funcional pero no tiene continuación de datos implementada. A pesar de ello, se acepta y sugiere que en cambio crees tu propio juego simple desde cero; lo único que debe poder hacer es monitorizar y mostrar el puntaje del usuario.

En esta entrega, podrás realizar lo siguiente:

- Crear un nuevo repositorio.
- Hacer una entrega inicial.
- Importar un proyecto al control de versiones y entrégalo.
- Implementar la continuación de datos entre escenas y sesiones.

Marcar paso como completado

## 3. ¿Cómo crear un nuevo repositorio?

Q&A (0)

Para asegurarte de que tu proyecto esté respaldado y listo para el control de versiones, crea un nuevo repositorio. Esto también te permitirá compartir código de manera más fácil con tus compañeros estudiantes más adelante.

**1.**Crea un nuevo repositorio para tu proyecto mediante [GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/creating-your-first-repository-using-github-desktop) y asegúrate de seleccionar **Unity** para la lista desplegable **Git Ignore**. Es un archivo de configuración que excluirá automáticamente los archivos específicos de Unity que no son necesarios en tu repositorio. Dale a tu repositorio un nombre como «Data-Persistence-Project».

[Image: image]

**2.** En tu computadora, localiza la carpeta que acabas de crear. Debe contener una **carpeta .git**, que es como GitHub la reconoce como un repositorio, y un archivo **.gitignore**, que incluye una lista de archivos y tipos de archivo que debe ignorar. La posición de la carpeta .git indica a GitHub que todos los archivos en ese directorio deben monitorizarse. Los archivos .git pueden ser invisibles en función de los ajustes de tu computadora.

[Image: image]

**Nota:** También puedes crear el repositorio directamente de GitHub.com y después clonar ese repositorio, pero se requieren [algunos pasos adicionales](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository). Si no recuerdas qué es GitHub o el control de versiones, consulta el tutorial sobre control de versiones.

Marcar paso como completado

## 4. ¿Cómo abrir tu proyecto y hacer una entrega inicial?

Q&A (0)

El primer conjunto de archivos que entregas a tu repositorio se incluirá en la **entrega inicial**. Por lo general realizarás una entrega inicial después de configurar tu proyecto por primera vez, así que hagamos eso ahora.

**1.**Descarga la [carpeta comprimida del proyecto](https://connect-prd-cdn.unity.com/20210602/29d6df2f-7766-4564-be87-b1e22c49c5eb/Data-Persistence-Starter-Files.zip?_gl=1*tj35ph*_ga*NDI3MDM1NDEuMTU5MjI0OTM3NA), extrae sus contenidos y abre la carpeta **Data-Persistence-Starter-Files**. En ella, encontrarás las siguientes carpetas:

- Assets
- Packages
- ProjectSettings

**2.**Utiliza **Ctrl + A** (Windows) o **Cmd + A**(Mac) para seleccionar las tres carpetas y después copiarlas y pegarlas en tu carpeta repositorio, junto a tus archivos ocultos .git. La carpeta ya está lista para abrirse como un proyecto de Unity.

[Image: image]

**3.**Para ejecutar el proyecto desde el **Unity Hub**, ve a la pestaña **Projects**y**agrega** tu carpeta repositorio y después abre el proyecto en el Editor de Unity.

Considera que este proyecto requiere Unity 2020.3 LTS. Si no está instalado, se mostrará una notificación de advertencia bajo su listado en el Unity Hub con una invitación para instalar la versión correcta.

**4.**En la ventana Project, abre **Scenes** > **Main** y después presiona **Play**para probar el juego. Presiona la barra espaciadora para lanzar la pelota y utiliza las teclas de flecha izquierda y derecha para controlar la raqueta. Considera que tu puntaje se muestra en la parte superior de la pantalla, pero el Best Score (Mayor puntaje) no funciona.

[Image: image]

En tu ventana Github Desktop, ahora aparece una larga lista de nuevos archivos en el panel **Changes (Cambios)**con un pequeño ícono de más (+) color verde junto a cada archivo para indicar que es nuevo.

[Image: image]

**5**.  En el campo **Summary**, bajo los cambios enumerados en tu repositorio, escribe «initial commit» y rellena la **descripción** (p. ej., «archivos de inicio de breakout importados»). Después selecciona **Commit to main**para guardar tus cambios en la ramificación «principal» del proyecto.

[Image: image]

**6.**Selecciona Publish repository, después cancela la selección de la casilla **Keep this code private (Mantén este código privado)**. Esto te permitirá compartir tu código en esta entrega.

[Image: image]Marcar paso como completado

## 5. ¿Cómo implementar la continuación de datos?

Q&A (0)

Ya puedes comenzar el desafío de implementar la continuación de datos en esta aplicación. Las funciones clave que necesitas lograr son las siguientes:

- Guardar datos **entre escenas**, un fragmento de datos definidos en una escena se almacenará y utilizará en otra.
- Guardar datos **entre sesiones**, un fragmento de datos durante el tiempo de ejecución se guardará y utilizará la siguiente vez que se ejecute la aplicación.

[Image: image][Image: image]

Aunque hay muchas formas para implementar estas funciones en una aplicación, aquí presentamos nuestra sugerencia para implementarlas en este desafío en particular:

**Nombre del jugador (guardar datos entre escenas)**

- Crea una nueva escena Start Menu para el juego con un campo de entrada de texto que pida al usuario ingresar su nombre y con un botón Start.
- Cuando el usuario haga clic en el botón Start, la Escena principal del juego se cargará y su nombre se mostrará junto al puntaje.

**Mayor puntaje (guardar datos entre sesiones):**

- Mientras el usuario juega, el puntaje mayor actual se mostrará en la pantalla junto con el nombre del jugador que alcanzó dicho puntaje.
- Pero si se supera ese mayor puntaje, se mostrarán el nuevo puntaje y el nombre del jugador.
- El mayor puntaje se guardará entre sesiones, de manera que si el jugador cierra y vuelve a abrir la aplicación, el puntaje mayor y el nombre del jugador se conservarán.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Si te sientes ambicioso, también podrías agregar funciones de continuación de datos adicionales. Por ejemplo:

- Crea una Escena High Score (Mejor puntaje) aparte que muestre el mayor puntaje.
- Muestra varios mayores puntajes en lugar de solo uno.
- Crea una Escena Settings (Ajustes) que permita a los usuarios configurar la jugabilidad y utilizar esa información entre sesiones.

Marcar paso como completado

## 6. ¿Cómo entregar tu proyecto?

Q&A (0)

Después de implementar la continuación de datos, envía y comparte tu proyecto. Pero antes de hacerlo, asegúrate de que probaste la jugabilidad por completo, o incluso mejor, haz que un amigo o familiar la pruebe.Una entrega exitosa incluirá lo siguiente:

- Un enlace al repositorio GitHub del proyecto que muestre varias entregas con mensajes.
- Cierto tipo de continuación de datos entre escenas.
- Cierto tipo de continuación de datos entre sesiones.

Toma una captura de pantalla de tu proyecto o graba la pantalla con una guía y después publícala aquí para compartir lo que has hecho. Te recomendamos que al menos hagas un comentario en una de las entregas de otro creador. ¿Completó correctamente el desafío? ¿Qué te gustó acerca del proyecto? ¿Cuál sería una buena función que el creador podría agregar?

#### Por favor inicia sesión para enviar

Iniciar sesión

## Complete this Tutorial

Marcar todos los pasos como completados

Submission Gallery

[[Image: Simple Arkanoid]

Simple Arkanoid

Arkanoid with best score system

Aanderzr00](https://learn.unity.com/submission/69b6feb2edbc2a0bfaa8b4ac)[[Image: Juego]

Juego

Juego hecho por gian

Uunity_0555gflores00](https://learn.unity.com/submission/69a0ababedbc2a04dc33d3ca)[[Image: Data-Persistence-Project]

Data-Persistence-Project

Data-Persistence-Project

Rrobertomoramoreno380](https://learn.unity.com/submission/699debcfedbc2a00fd135b7c)[[Image: Data-Persistent]

Data-Persistent

Apart from the tasks I was asked to do, I added music and sounds (of my own composition) and a ranking scene with the top 5 that persists between scenes and between sessions.

AAngelMusicArtist20](https://learn.unity.com/submission/698f3e65edbc2a0af5319874)[[Image: Prueba]

Prueba

Completacion de requisitos de la prueba asi como otras integraciones personales como power-up's a el juego y efectos de sonido y partículas, agradeceria cualquier orientacion al respecto pues solo soy alguien intentando aprender, cualquier critica es bienvenida

Ssimontoledo29916109140](https://learn.unity.com/submission/694df72fedbc2a2b9fcea9d5)[[Image: Exercise_Data_Persistence_Project]

Exercise_Data_Persistence_Project

a project where data continuation is applied between scenes and between sessions

MMefistofeles45140](https://learn.unity.com/submission/6934aa38edbc2a069104beca)Load More
