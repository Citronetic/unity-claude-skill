[Image: image]

# Add spatial audio to your marker-based app spanish

Tutorial

Beginner

+10XP

45 mins

2

(30)

Unity Technologies

[Image: Add spatial audio to your marker-based app spanish]Summary

El audio hace que una aplicación cobre vida. El audio ayuda a que las experiencias se sientan completas, ya sea con el sonido que producen los botones cuando el usuario los presiona, la música de fondo que realza las emociones, los efectos de sonido que se activan cuando los objetos se mueven, etc.

En los entornos en 3D, puedes utilizar el audio espacial para agregar un efecto en 3D donde el volumen de los efectos sea mayor cuando la fuente esté cerca y menor cuando esté lejos. El audio espacial ayuda a los usuarios a sentirse inmersos en la aplicación.

En este tutorial, harás que el modelo emita audio espacial cuando el usuario haga clic en un botón.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

El audio hace que una aplicación cobre vida. El audio ayuda a que las experiencias se sientan completas, ya sea con el sonido que producen los botones cuando el usuario los presiona, la música de fondo que realza las emociones, los efectos de sonido que se activan cuando los objetos se mueven, etc.

En los entornos en 3D, puedes utilizar el **audio espacial** para agregar un efecto en 3D donde el volumen de los efectos sea mayor cuando la fuente esté cerca y menor cuando esté lejos. El audio espacial ayuda a los usuarios a sentirse inmersos en la aplicación.

En este tutorial, harás que el modelo emita audio espacial cuando el usuario presione un botón.

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

**Nota**: también puedes consultar los tutoriales de [**Habilidades básicas para creadores artísticos: audio,**](https://learn.unity.com/project/creative-core-audio) a fin de obtener más información sobre el audio en Unity.

Marcar paso como completado

## 2. ¿Cómo agregar una fuente de audio?

Q&A (0)

Utilizarás fuentes de audio y clips de audio para reproducir sonidos en la aplicación de AR (Realidad aumentada). Los **clips de audio** son archivos de audio específicos, mientras que la **fuente de audio** indica a Unity cómo debe reproducir los clips que selecciones. Las fuentes de audio tienen muchas opciones diferentes que puedes configurar, como el volumen, la prioridad y la configuración de sonido espacial. Si deseas más información sobre las [fuentes de audio](https://docs.unity3d.com/Manual/class-AudioSource.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952880128), consulta el Manual de Unity (en inglés).

Sigue estas instrucciones para agregar una fuente de audio al Prefab del modelo:

**1.**  En la ventana Project (Proyecto), busca el Prefab del modelo que seleccionaste y ábrelo en modo Prefab.

**2.**  En la ventana Hierarchy (Jerarquía), crea un GameObject vacío como GameObject secundario de **Mesh (Malla)** y dale el nombre «Audio». El GameObject **Audio**debe estar justo después del GameObject **CanvasPopup** en la ventana Hierarchy.

[Image: image]

**3.**  En la ventana Inspector, agrega un componente Audio Source (Fuente de audio) al GameObject **Audio**.

**4.**  Busca la propiedad **AudioClip (Clip de audio)** del componente Audio Source y utiliza el selector (círculo) para elegir el archivo de sonido que desees reproducir en la aplicación. Los archivos del proyecto incluyen varios clips.

**5.**  Activa la opción **Loop (Bucle)** para probar la aplicación.

**6.**  En el campo **Spatial Blend (Mezcla de audio espacial)**, elige **1**, lo que indica que se activará el audio espacial en 3D. Con la opción 3D Spatial Blend, el volumen del audio aumentará cuando la cámara esté más cerca de la fuente de audio y disminuirá cuando se aleje.

**7.**En el campo **Volume Rolloff (Atenuación de volumen)**, elige **Linear Rolloff (Atenuación lineal)**. En el campo **Min Distance (Distancia mínima)**, escribe **0.1**. Y, en el campo **Max Distance (Distancia máxima)**, escribe **2.0**. Con estos valores, el audio se reproducirá con el volumen máximo si estás a 0.1 m o menos del modelo, y el volumen disminuirá gradualmente conforme te alejes hasta llegar a los 2 m de distancia, donde no podrás escucharlo en absoluto.

[Image: image]

**8.**  Crea y prueba la aplicación para ver la manera en que la configuración de audio afecta la experiencia. También puedes probar el audio en Unity al seleccionar **Play (Reproducir)** y aumentar o reducir poco a poco la distancia entre el modelo y la cámara.

**9.**Probablemente deberás modificar las propiedades **Min Distance** y **Max Distance** del componente Audio Source conforme te acostumbres al funcionamiento del audio espacial. Tal vez debas crear y probar la aplicación varias veces para lograr que los sonidos se reproduzcan exactamente como lo desees.

**10.**  Cuando estés conforme con la configuración del audio espacial, sal del modo Prefab.

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

Marcar paso como completado

## 3. ¿Cómo actualizar el botón de la interfaz de usuario?

Q&A (0)

Sigue estas instrucciones para ajustar el botón que se encargará de reproducir el audio:

**1.**  En la ventana Hierarchy, selecciona **Button4 (Botón 4)** y cambia su nombre a «ButtonAudio»**.**

**2.**  En la ventana Inspector, busca el componente **Image (Imagen)** del botón y utiliza el selector (círculo) para cambiar el Sprite.

**3.**  En la ventana Hierarchy, selecciona el GameObject secundario **Text (TMP) o Texto (TMP)** del GameObject **ButtonAudio** y cambia el texto a algo como «Audio» o «Play Audio».

**4.**  Personaliza el estilo, la fuente y otras propiedades del texto como desees.

[Image: image]Marcar paso como completado

## 4. ¿Cómo configurar y asignar nuevas variables?

Q&A (0)

El botón está listo, pero aún no hace nada. Para hacer que el botón funcione, deberás seguir dos pasos de Visual Scripting. En el primer paso, crearás las referencias del botón y el audio; y, en el segundo paso, harás que el audio se reproduzca cuando el usuario presione un botón. Este proceso es casi igual al que utilizaste para implementar la funcionalidad del Canvas emergente.

Mira el video o sigue estas instrucciones para crear un script visual que controle el audio:

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

**1.**  En la ventana Hierarchy, selecciona el GameObject **Script Manager (Administrador de scripts)** y abre el gráfico Setup (Configuración).

**2.**  En la ventana Blackboard (Pizarra), crea una nueva variable de tipo **Object (Objeto)** llamada «buttonAudio»**,**elige **Button** en el campo **Type o Tipo**y, en el campo **Value o Valor,**elige el botón **ButtonAudio**.

**3.**  En la ventana Blackboard, crea una nueva variable de tipo **Object** llamada «audioSource» y elige **Audio Source** en el campo **Type**, pero deja el campo **Value** sin asignar.

[Image: image]

**4.**Agrega un nodo **Get Component in Children (Type, Include Inactive) u Obtener componentes en GameObjects secundarios (tipo, Incluir inactivos)** al final del gráfico. En el campo **Type**, selecciona **Audio Source** y activa la opción **Include Inactive (Incluir inactivos)**.

**5.**Arrastra la variable **modelObject** desde la ventana Blackboard a la ventana Graph Editor (Editor de gráficos) y conecta la salida a la entrada de objeto del nodo **Get Component in Children**.

**6.**  Agrega un nodo **Set Object Variable (Establecer variable de objeto)** al final del gráfico. Selecciona **audioSource** para que cumpla el rol del GameObject. Conecta el nodo de tipo salida al nodo de entrada inferior (que no tiene etiqueta) del nodo **Set Variable (Establecer variable)**.

[Image: image]

**7.**  Ingresa al modo Play en el Editor y revisa si el componente Audio Source llena la variable en el gráfico de script cuando se detecte el GameObject modelo.

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

Marcar paso como completado

## 5. ¿Cómo hacer que el botón reproduzca audio?

Q&A (0)

El último paso es crear un nuevo script que active el audio cuando el usuario presione el botón.

Mira el video o sigue estas instrucciones para hacer que el botón reproduzca audio cuando el usuario lo presione:

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

**1.**En la ventana Hierarchy, busca el GameObject **VisualScripts**y crea un nuevo componente Script Machine (Máquina de scripts) llamado «PlayAudio»**.**

**2.**Escribe el nombre «Play Audio» y la descripción «Controls the audio on button press», que indica que este componente controla el audio cuando el usuario presiona el botón. Luego, selecciona **Edit Graph (Editar gráfico)**.

[Image: image]

**3.**  Elimina los nodos **On Start (Al inicio)** y **On Update (Al actualizar)**.

**4.**  Arrastra la variable **buttonAudio** desde la ventana Blackboard a la ventana Graph Editor.

**5.**En la ventana Graph Editor, agrega un nodo **On Button Click (Al hacer clic en el botón)** y conecta la salida de flujo del nodo **Get Variable (Obtener variable):**buttonAudio a la entrada del nodo **On Button Click**.

**6.** Arrastra la variable **audioSource** desde la ventana Blackboard a la ventana Graph Editor.

**7.**  En la ventana Graph Editor, agrega un nodo **Audio Source Play** y conecta la salida de flujo del nodo **On Button Click** a la entrada de flujo de este nodo.

**8.**  Conecta la salida del nodo **Get Variable**: audioSource a la entrada de sonido del nodo **Audio Source Play**.

[Image: image]

**9.**  En la ventana Project, busca el Prefab que seleccionaste, ábrelo en modo Prefab, selecciona el GameObject secundario **Audio** y desactiva la propiedad **Loop** del componente Audio Source si no deseas que el audio se reproduzca en bucle.

**10.**Si lo deseas, desactiva la propiedad **Play On Awake (Reproducir está activo)**. Si esta propiedad está activada, el audio se reproducirá en cuanto el GameObject se genere en la Escena, lo que podría ser un efecto interesante según el tipo de sonido.

**11.**  Crea y prueba la aplicación en el dispositivo. El botón debería reproducir el audio.

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

Marcar paso como completado

## 6. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Cada actividad tiene una etiqueta de Fácil, Medio o Difícil para indicar su nivel de dificultad.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas. Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: descarga archivos de música gratuitos de la Asset Store (Tienda de recursos) de Unity y agrega uno a tu proyecto

Hay muchos sonidos gratuitos fabulosos en la Asset Store de Unity. El siguiente ejemplo utiliza una pista de la colección [Free Game Music Collection](https://assetstore.unity.com/packages/audio/music/orchestral/free-game-music-collection-177094), creada por The Indie Devs Nation. Explora la Asset Store de Unity hasta que encuentres un paquete que te guste y agrega música de fondo a tu experiencia.

Luego, agrega un botón a la interfaz de usuario con el que se pueda activar la música.

#### Medio: descarga audio de otro sitio web e impleméntalo en tu experiencia

Los archivos de audio pueden tener diferentes tipos de licencias. Una de las opciones más accesibles para obtener audio de gran calidad y usarlo en tus creaciones es buscar música y efectos de sonido que tengan una licencia Creative Commons (CC). Cada año se publican muchos archivos con diferentes tipos de licencias Creative Commons. Puedes encontrar más información sobre las licencias CC en el[sitio web de Creative Commons](https://creativecommons.org/). Puedes encontrar música y efectos de sonido con licencias CC en una gran variedad de sitios web, como [Free Music Archive](https://freemusicarchive.org/home), [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) o [Internet Archive](http://www.archive.org/).

También puedes encontrar otros archivos de audio fabulosos con diferentes licencias que te permiten utilizarlos de forma gratuita. Un recurso excelente de este tipo es el sitio web[Royalty Free Sound Effects Archive: GameAudioGDC](https://sonniss.com/gameaudiogdc) de Sonniss. Aquí puedes encontrar muchos GB de archivos de audio y efectos de sonido de alta calidad. Con tantas horas de contenido, el único problema puede ser el tiempo que te tardes en encontrar lo que necesitas. Cada paquete incluye una lista de pistas para ayudarte a encontrar el efecto adecuado de una manera más sencilla.

Hay muchos archivos fabulosos y artistas geniales que quieren que utilices su trabajo. Independientemente del archivo de audio que elijas, asegúrate de seguir las normas de la licencia para que el artista pueda seguir con su trabajo y tú evites meterte en problemas.

Para este desafío, intenta buscar, descargar e implementar algunos archivos de audio que hagan que tu experiencia suene increíble.

#### Difícil: haz que el botón active y desactive el audio

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

Aunque reproducir el audio es un excelente primer paso, desactivarlo también podría resultar útil, especialmente con los archivos en los que el audio se reproduce en bucle. La buena noticia es que ya conoces la mitad del proceso para hacer que el botón alterne entre activar y desactivar el audio. Para desactivar el audio, deberás modificar el gráfico PlayAudio al agregar los siguientes nodos:

- Un nodo que revise si la reproducción del audio está en curso.
- Un nodo condicional **If**.
- Un nodo que detenga el componente Audio Source si su reproducción está en curso.

Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

¡Felicitaciones! Creaste una aplicación en AR que detecta un marcador, genera un modelo sobre ese marcador y permite que el usuario interactúe con el modelo. Para lograrlo, hiciste lo siguiente:

- Implementase el seguimiento de marcadores de imágenes en AR para generar un modelo en 3D.
- Implementaste una interfaz de usuario de espacio en pantalla y espacio del mundo en una aplicación en AR.
- Implementaste audio espacial en AR.

Llegó el momento de utilizar todas tus habilidades y todos tus conocimientos en un nuevo desafío. Crearás tu propia aplicación en AR única para cumplir con un resumen de proyecto. Cuando tengas una nueva experiencia en AR que cumpla con tus expectativas, compartirás tu trabajo con otras personas.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
