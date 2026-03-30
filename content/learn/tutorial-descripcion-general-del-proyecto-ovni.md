[Image: image]

# UFO project overview spanish

Tutorial

Beginner

+10XP

15 mins

1

(22)

Unity Technologies

[Image: UFO project overview spanish]SummarySkills

En esta experiencia de aprendizaje, portarás un juego de escritorio existente a tu dispositivo móvil y lo rediseñarás para que sea un juego de AR de calidad. Antes de empezar a cambiar el juego, es importante entender bien cómo existe en su forma actual.

En este tutorial harás lo siguiente:

- Revisar el concepto del juego de OVNIs
- Descargar y explorar el proyecto existente
- Investigar otras experiencias de AR
- Comenzar un documento de diseño para tu puerto de AR

Resources

- [UFO_Game_Desktop_Zip.zip](https://unity-connect-prd.storage.googleapis.com/20230227/43a417b5-5aae-4a47-b638-75b5e289136b/UFO_Game_Desktop_Zip.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954622756)

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

En este proyecto, pondrás a prueba tus habilidades de diseño de experiencias en AR . Utilizarás un juego de escritorio existente sobre extraterrestres que secuestran ovejas y lo adaptarás para la AR móvil. El proceso de tomar una aplicación que se diseñó para una plataforma y modificarla para otra se llama **portabilidad**.

[Image: image]

Al transferir un proyecto de una plataforma a otra, hay muchas cosas que debes tener en cuenta.

Si la plataforma original y la nueva plataforma de destino son muy similares (como la portabilidad de macOS a Windows), el traslado puede ser relativamente simple. Cuando las plataformas son muy diferentes, por ejemplo, al transferir un juego de Windows a Nintendo Switch, el proceso de portabilidad puede ser muy complicado.

Por ejemplo, el popular juego en 2D creado con Unity (Made With Unity), [Among Us](https://store.steampowered.com/app/945360/Among_Us/), se traspasó a VR y se lanzó como [Among Us VR](https://store.steampowered.com/app/1849900/Among_Us_VR/) en 2022. Cada recurso e interacción tuvieron que ser rediseñados por completo para que este puerto fuera exitoso.

[Image: image]

La portabilidad es solo una de las muchas formas de crear nuevo contenido para el mercado de AR . En el siguiente video, los creadores consolidados hablan sobre los tipos de oportunidades que ofrece la industria de la AR y por qué es tan importante poder crear muchos tipos diferentes de proyectos.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- Español

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

En este primer tutorial, abrirás la versión de escritorio del proyecto del juego OVNI (UFO), jugarás el juego y notarás cualquier característica obvia que deba adaptarse en gran medida para la AR móvil.

Marcar paso como completado

## 2.  Descripción general del juego

Q&A (0)

Antes de abrir el juego en Unity y experimentarlo por tu cuenta, revisa las siguientes secciones para aprender la jugabilidad básica, entender la historia de fondo y apreciar algunas de las ilustraciones del concepto.

#### Jugabilidad

El juego que portarás a AR se llama «Close Encounters of the Wool Kind». Es un juego relativamente simple. El jugador controla un OVNI e intenta secuestrar ovejas de un campo sin que el granjero se de cuenta. Si el granjero se despierta y te atrapa secuestrando ovejas, pierdes. Si logras secuestrar a todas las ovejas sin que el granjero se de cuenta, ¡ganas! Mira el video a continuación para ver parte de la jugabilidad.

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

#### Arte de fondo y concepto

Nada mejor que un suéter tejido a mano, y eso es doblemente cierto en el frío del espacio. Después de años de estudiar a la humanidad, los extraterrestres han aprendido a tejer y quieren llevar este pasatiempo tranquilo a su mundo de origen.

[Image: image]

El único problema es que no hay ovejas en su planeta extraterrestre, por lo que los extraterrestres no pueden crear estambre. Para alcanzar sus objetivos, se ha enviado a una tripulación extraterrestre a la Tierra para buscar un rebaño de ovejas para llevar a casa. Localizaron una finca con un rebaño muy lindo y han monitorizado los hábitos del viejo granjero: se levanta con el sol y se acuesta con el sol. ¡Qué suerte! Los extraterrestres solo tienen que hacer una visita rápida al establo después de la puesta del sol y el rebaño será de ellos.

[Image: image]

La noche en que los extraterrestres llegan para obtener su premio, ¡descubren que el granjero ha cambiado su hábito! Al parecer, sus ovejas tenían más hambre hoy, porque las sacó después del anochecer para tener un bocadillo de medianoche. ¿Están arruinados los planes de los extraterrestres? ¡Afortunadamente no!

Está claro que el pobre granjero nunca ha salido tan tarde después de su hora de acostarse: ¡se sigue durmiendo en el campo! En lugar de tomar las ovejas del establo, los extraterrestres pueden usar su rayo tractor para arrebatarlas directamente del campo.

La regla número uno para los extraterrestres es no permitir que los humanos los vean. Entonces, para protegerse, los extraterrestres han activado su tecnología de encubrimiento, haciendo que el OVNI sea casi invisible. Sin embargo, hay un pequeño problema: ¡la tecnología de camuflaje debe estar desactivada para utilizar el rayo tractor!

[Image: image]

Ahora, el secuestro de las ovejas se ha convertido en un juego de paciencia táctica. Los extraterrestres deben usar las horas de noche para su ventaja y esperar a que el viejo granjero se duerma y luego secuestrar una oveja. Si parece que el granjero se va a despertar, los extraterrestres pueden soltar el rayo tractor para ocultarse una vez más.

[Image: image]

Una vez que hayan recolectado todas las ovejas, ¡los extraterrestres podrán partir a casa! ¡No pueden dejar que el granjero los vea!

Marcar paso como completado

## 3. Abrir el proyecto de escritorio en Unity

Q&A (0)

Es hora de abrir la versión de escritorio del juego en Unity. Sigue estas instrucciones para descargar el proyecto y abrirlo en Unity:

**1.**Descarga el archivo [**UFO_Game_Desktop_Zip**](https://connect-prd-cdn.unity.com/20230227/43a417b5-5aae-4a47-b638-75b5e289136b/UFO_Game_Desktop_Zip.zip) y descomprímelo o extrae el archivo.

**2.**Busca la carpeta **UFO_Game_Desktop_Project** dentro de la carpeta zip y muévela a una ubicación adecuada en tu computadora.

**3.** [Agrega el proyecto de Unity al Unity Hub](https://learn.unity.com/tutorial/project-setup-processes#60ed7a5aedbc2a002520b6ea) y ábrelo.

Si ves un ícono de advertencia al lado de la versión del Editor de tu proyecto, significa que no tienes la versión correcta de Unity instalada. Debes instalar la versión específica requerida de Unity; puede que esta no sea la versión más reciente de LTS . Selecciona el ícono de advertencia para obtener más información.

[Image: image]

El proyecto ahora debería estar abierto en Unity.

[Image: image]Marcar paso como completado

## 4. Jugar el juego

Q&A (0)

El juego se compone de cuatro Escenas: **StartScene**, **MainScene**, **WinScene**y **LoseScene**. **StartScene** es la primera Escena que el jugador encuentra, es donde debes empezar si quieres tener la experiencia del juego completa.

Sigue estas instrucciones para experimentar el juego de principio a fin:

**1.**En la ventana Project, dirígete a la carpeta **Assets**> **Scenes** .

**2.**Abre **StartScene**.

**3.**Selecciona **Play** para comenzar el juego.

**4.**Durante el juego, usa las teclas **WASD** para mover el OVNI y mantén presionada la **barra espaciadora** para transportar una oveja.

**5.**Para experimentar todas las pantallas del juego, asegúrate de ganar y perder el juego al menos una vez.

[Image: image]Marcar paso como completado

## 5. Investiga otras experiencias de AR

Q&A (0)

Hay muchas formas creativas y atractivas de interactuar con el contenido de AR . Antes de comenzar a diseñar el puerto de Close Encounters of the Wool Kind, debes buscar inspiración en las aplicaciones, y específicamente en los juegos, que están marcando el camino en el diseño de experiencias en AR .

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Investiga un poco en línea ahora mismo, incluida la descarga y la experiencia de algunas aplicaciones de AR en tu dispositivo. Toma nota de las interacciones interesantes que podrían ser relevantes para tu portabilidad de AR .

Esta es una lista de aplicaciones que quizás quieras explorar:

- Angry Birds: AR - [iOS](https://apps.apple.com/us/app/angry-birds-ar-isle-of-pigs/id1456120259) | [Android](https://play.google.com/store/apps/details?id=com.rovio.abar)
- Cosmic Frontline AR - [iOS](https://apps.apple.com/us/app/cosmic-frontline-ar/id1441521950) | [Android](https://play.google.com/store/apps/details?id=com.hofli.cosmicfrontline)
- Jurassic World Alive - [iOS](https://apps.apple.com/us/app/jurassic-world-alive/id1231085864) | [Android](https://play.google.com/store/apps/details?id=com.ludia.jw2)
- Pokémon Go - [iOS](https://apps.apple.com/us/app/pok%C3%A9mon-go/id1094591345) | [Android](https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo)

Marcar paso como completado

## 6. Agrega tus ideas iniciales a un nuevo documento

Q&A (0)

Al revisar los siguientes tutoriales, deberás registrar tus ideas, enumerar las preocupaciones y esbozar conceptos.

Sigue estas instrucciones para crear un documento dedicado y escribe algunas de tus ideas iniciales.

**1.**Crea un nuevo documento de texto y asígnale un título como «UFO Game Port - Design Document».

**2.**Agrega una nueva sección llamada «impresiones iniciales».

**3.** En la sección Impresiones iniciales, enumera las interacciones del juego OVNI que serían problemáticas en la AR y que deben rediseñarse para la portabilidad de tu juego.

Para generar ideas, piensa en cómo sería cada pantalla e interacción si estuviera en un dispositivo móvil. Luego, intenta imaginarte qué aspectos de la aplicación serían apropiados como experiencias de AR .

[Image: image]

Tendrás mucho tiempo más adelante para pensar en los detalles de la portabilidad de cada elemento del juego, pero es útil tener estas preguntas en mente ahora para que puedas comenzar a intercambiar ideas.

Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

Has abierto y experimentado la versión de escritorio del juego OVNI, y has hecho una lluvia de ideas inicial sobre cómo podrías trasladar esta experiencia a la AR móvil.

En el siguiente tutorial, examinarás el contenido del proyecto de Unity en sí. Deberás entender en profundidad cómo los recursos, las Escenas y los scripts trabajan en conjunto para poder portar correctamente el proyecto.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
