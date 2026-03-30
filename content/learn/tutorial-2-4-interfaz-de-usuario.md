[Image: image]

# 2.4: Interfaz de usuario

Tutorial

Beginner

+10XP

90 mins

1

(29)

Unity Technologies

[Image: 2.4: Interfaz de usuario]SummarySkills

En esta lección, aprenderás cómo implementar interfaces de usuario en el espacio del mundo en VR. Al final de esta lección, el usuario verá una pantalla de bienvenida que brinda instrucciones básicas. También podrá abrir un menú simple de reinicio que le permitirá volver a cargar la Escena.

Esta lección forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr)

Languages available:

EspañolEnglishEspañol한국어Español

## Video de descripción general

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

## 1. ¿Cómo agregar una interfaz de usuario al espacio del mundo en el espacio?

Q&A (0)

Para crear un texto de pantalla de bienvenida, lo primero que hay que hacer es añadir un canvas con texto y situarlo en la sala.

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

**1.  Añade un nuevo canvas a tu Scene (Escena):**

- Añade un nuevo objeto vacío en tu Hierarchy (Jerarquía), restablece su posición y cámbiale el nombre a «INTERFACE».
- Crea un objeto **XR** > **UI Canvas** dentro de ese objeto organzador.

**2.  Coloca el canvas adecuadamente en el espacio:**

- En el componente Rect Transform del canvas, configura el **Scale (Tamaño)** a 0.01.
- Configura las propiedades **Pos Y (Posición Y)**y **Pos Z (Posición Z)** para que el canvas esté en el fondo del espacio.

**3.  Agrega un fondo negro semitransparente para la interfaz de usuario:**

- En la Hierarchy, crea un **UI** > **Image** y nómbralo «Welcome Background».
- En el componente Image (Imagen), haz clic en la casilla **Color**.
- Cambia el color a negro.
- Utiliza el deslizador Alfa (A) para reducir la transparencia del color.

**4.  Si las ventanas se están procesando encima de tu texto:**

- En el componente Canvas, establece la propiedad **Order in Layer (Orden por capa)** en «1».

**5.  Añade texto al panel como objeto secundario:**

- En la Hierarchy, haz clic derecho a **Welcome Background**y crea un **UI** > **Text - TextMeshPro** como objeto secundario.
- **Nota:** es posible que tengas que hacer clic en **Import** **TMP Essentials (Importar aspectos básicos de TMP)** si se solicita.

[Image: image]

Ahora debería haber un cuadro semitransparente en el espacio con un enorme texto descentrado que dice «New Text».

**Recursos relacionados:**

- [Render Modes de canvas](https://docs.unity3d.com/2020.1/Documentation/Manual/UICanvas.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931482309)

Marcar paso como completado

## 2. ¿Cómo editar el texto de bienvenida?

Q&A (0)

Ahora que tienes el canvas en su lugar, es el momento de crear un mensaje de bienvenida más útil.

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

**1.  Edita la forma y la ubicación de la imagen de fondo:**

- En el componente Rect Transform del objeto de imagen, edita las propiedades **Width (Ancho), Height (Altura), Pos X** y **Pos Y (Posición Y)**.

**2.  Edita la apariencia del texto:**

- En el objeto de texto, en el componente TextMeshPro - Text (UI), cambia las propiedades **Font Asset o Recurso de fuente,** **Font Size o Tamaño de fuente**, **Vertex Color o Color de vértice** y **Alignment o Alineación.**

**3.  Cambia el contenido del texto:**

- En el componente TextMeshPro - Text (UI), cambia «New Text» por un mensaje de bienvenida corto pero informativo sobre la Escena.

**4.  Edita el tamaño y el espaciado del cuadro de texto:**

- En el componente Rect Transform, establece los valores **Width**, **Height**, **Pos X**y**Pos Y** para el posicionamiento del componente Rect Transform del texto.
- **Nota**: Asegúrate de dejar algunos márgenes y espacio para un botón «OK».

[Image: image]

Ahora, el texto de bienvenida se muestra en la Escena tal y como quieres.

Marcar paso como completado

## 3. ¿Cómo agregar un botón OK al panel?

Q&A (0)

El texto de bienvenida no tiene por qué mostrarse siempre, así que añadirás un botón «OK» para ocultarlo.

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

**1.  Agrega un botón al panel como objeto secundario:**

- En el Hierarchy, haz clic derecho en **Welcome Background**y haz clic en**UI** > **Button - TextMeshPro.**

**2.  Edita el texto del botón:**

- Selecciona el objeto Text secundario del botón.
- Cambia el texto a «OK» o «Aceptar».
- Edita la configuración de texto para que coincida con el otro texto.

**3.  Coloca el botón de forma adecuada:**

- En el componente Rect Transform, edita la posición, la anchura y la altura del botón.

**4.  Si quieres cambiar el color del botón al interactuar con él:**

- En el componente Button, edita las propiedades Normal, Highlighted (Resaltado) y Pressed Color (Color de presión).

**5.  Evita que tu rayo aparezca activo cuando está sobre el panel de fondo:**

- En el componente Background Image, desactiva el ajuste **Raycast Target (Objetivo Raycast)**.
- En el componente TextMeshPro del objeto **Text, en la sección Extra Settings (Configuraciones adicionales), desactiva el ajuste Raycast Target**.

[Image: image]

Ahora, el botón «OK» debería cambiar de color cuando se resalta y cuando se hace clic en él con el desencadenador.

Marcar paso como completado

## 4. ¿Cómo hacer que el botón OK quite el panel de bienvenida?

Q&A (0)

Ahora que el botón tiene el aspecto que deseas, debes hacer que elimine el panel de bienvenida cuando se haga clic en él.

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

**1.  Localiza el evento On Click (Al hacer clic) del botón.**

- En el objeto **Button**, en la parte inferior del componente Button, localiza el evento **On Click**.

**2.  Desactiva el panel de bienvenida:**

- En el evento **On Click**, haz clic en el botón **+** para añadir una nueva acción.
- Asigna Welcome Background a la ranura Object.
- E el menú desplegable «No Function», selecciona **GameObject** > **función Set Active (bool)** y asegúrate de que la casilla de verificación no esté marcada para que quede desactivada.

[Image: image]

Cuando seleccionas el botón OK con el desencadenador, el  panel de bienvenida debería desaparecer.

Marcar paso como completado

## 5. ¿Cómo hacer el canvas de una interfaz de usuario de reinicio?

Q&A (0)

Ahora que la interfaz de usuario de bienvenida funciona perfectamente, será fácil duplicar y reutilizar sus elementos para hacer una interfaz de usuario de reinicio que vuelva a cargar la Escena.

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

**1.  Crea un nuevo texto para tu pantalla de reinicio:**

- En Hierarchy, duplica el objeto **Welcome_Background** y cambia el nombre del nuevo objeto a «Reset_Background».
- Desactiva temporalmente **Welcome Background** para poder editarlo más fácilmente.
- Edita el texto para que haga referencia al restablecimiento de la Escena a su estado original.

**2.  Agrega un segundo botón a tu pantalla de reinicio:**

- Duplica el botón y vuelve a colocarlo junto al original.
- Cambia el nombre de los botones y edita su texto para que en uno se lea «Cancel» y en el otro, «Yes».

**3.  Haz que el botón «Yes» reinicie efectivamente la Escena:**

- Agrega un componente Load Scene (Carga de Escena) al objeto del botón «Yes».
- En el evento **On Click** , asigna el componente Load Scene y elige la función **Load Scene**>**ReloadCurrentScene ()**.

[Image: image]

Desde el canvas de reinicio, ahora puedes hacer clic en «Cancel» para ocultar el panel o en «Yes» para volver a cargar la Escena actual.

Marcar paso como completado

## 6. ¿Cómo mostrar el panel de reinicio al presionar el botón secundario?

Q&A (0)

Actualmente no hay forma de volver a la pantalla de reinicio. Para ejecutar un reinicio, puedes teletransportar al jugador al punto inicial al pulsar el botón secundario.

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

**1.  Muestra solo el panel de bienvenida al inicio:**

- Vuelve a activar el objeto **Welcome Background**y desactiva el objeto **Reset_Background**.

**2.  Prueba la pulsación del botón secundario:**

- En el objeto **XR Rig**, agrega un componente On Button Press.
- Haz clic en **+**para añadir un nuevo **Action Binding (Nexo de acción)**.
- Asigna el camino vinculante a **XR Controller**>**Optional Controls**>**secondaryButton.**

**Nota**: Los distintos controles tienen diferentes botones, desencadenadores y paneles táctil. Si no utilizas un Oculus Quest, es probable que tengas que elegir una ruta de nexo diferente que funcione con tu dispositivo. Por ejemplo, echa un vistazo a los perfiles de control OpenXR para el [HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931482309) o el [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931482309).

**3.  Muestra el panel de reinicio al presionar el botón:**

- En el evento **On Press**, haz clic en **+** para añadir una nueva acción.
- Asigna el objeto **Reset_Background**.
- Selecciona la función **GameObject** > **Set Active (bool),** y asegúrate de que la casilla de verificación esté **activada.**

**4.  Oculta el panel de bienvenida al presionar el botón:**

- Haz clic en **+**para añadir una nueva acción.
- Asigna el objeto**Welcome Background**.
- Selecciona el **GameObject** > **función Set Active (bool) ,** y asegúrate deque la casilla de verificación esté **desactivada.**

[Image: image]

Al pulsar el botón secundario, debería desaparecer el panel de bienvenida y aparecer el panel de reinicio.

Marcar paso como completado

## 7. ¿Cómo regresar a la posición inicial mediante teletransportación cuando se presiona un botón?

Q&A (0)

Si el jugador no se encuentra en la posición inicial cuando pulsa el botón secundario, se debe teletransportar a la posición inicial para ver el panel de reinicio.

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

**1.  Asegúrate de tener un Teleportation Anchor (Delimitador de teletransporte) al principio de la Escena:**

- Si aún no tienes uno, duplica y reposiciona un Teleportation Anchor en la posición en la que quieres que tu jugador comience en la sala.

**2.  Haz que tu jugador comience en el lugar correcto:**

- Haz coincidir la **posición** y la **rotación** del objeto**XR Rig** con la posición y la rotación del Anchor (Delimitador) inicial.

**3.  Agrega un nuevo comportamiento de teletransporte a XR Rig:**

- En el objeto **XR Rig**, agrega un componente Teleport Player (Teletransportar jugador).
- Para la propiedad **Teleport Destination (Destino de teletransporte)**, asigna el Teleportation Anchor al inicio de la Escena.
- Para la propiedad **Provider (Proveedor)**, asigna tu proveedor de teletransporte.

**4.  Conecta la acción de teletransporte con el clic del botón:**

- En el componente On Button Press del objeto **XR Rig**, para el evento **On Press**, haz clic en **+**para añadir una nueva función.
- Asigna el objeto **XR Rig**.
- Selecciona el **TeleportPlayer** > **función Teleport ()**.

[Image: image]

Al pulsar el botón secundario, el jugador debería teletransportarse a la posición inicial de la Escena para ver la interfaz de usuario de reinicio.

Marcar paso como completado

## 8. Resumen

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**Nueva funcionalidad:**

- Pantalla de bienvenida con botón OK
- Pantalla de reinicio para recargar la Escena

**Nuevos conceptos y habilidades:**

- Mejores prácticas de interfaz de usuario de VR
- Interfaz de usuario Worldspace frente a Screenspace

**Siguiente lección:**

- Comfort & Accessibility

Marcar paso como completadoPaso opcional

## 9. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Añadir texto del mundo real a la Escena [Fácil]**

Agrega texto a un objeto del mundo real, como un cuaderno, para proporcionar información adicional al usuario:

- Haz que un objeto «TexMeshPro - Text» sea un objeto secundario de cualquier objeto en el que quieras que se muestre.
- Asegúrate de que el canvas esté configurado en el espacio mundial Render Mode
- Extra: agrega una narración de audio que lea el texto al tomar el objeto.

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

**2.  Añade interfaces de usuario de varios pasos [Medio]**

En lugar de tener un único párrafo de instrucciones al principio del espacio de VR con un botón «OK», añade un botón «Siguiente» que recorra unas cuantas cadenas de texto más cortas:

- En su componente «TextMeshPro - Text», añade el componente ShowMessagesFromList, que se proporcionó en la Course Library (Biblioteca del curso), y luego utiliza la función NextMessage() para recorrerlos. Observa el evento «On Complete ()» de este componente, que entra en acción cuando ya no hay más mensajes que mostrar.

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

**3.  Añade información contextual sobre herramientas [Hard]**

Agrega una pequeña pantalla de interfaz de usuario para guiar al usuario en una tarea concreta en tu espacio:

- La pantalla de la interfaz de usuario solo debe aparecer cuando sea relevante.
- Extra: si se trata de una tarea de varias etapas, como tomar un sombrero y ponérselo en la cabeza, prueba a mostrar varios mensajes en la interfaz de usuario, en función de la etapa en la que se encuentre el usuario.
- Extra: lo ideal es que la interfaz de usuario solo se muestre la primera vez que se complete esa tarea.

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

## Complete this Tutorial

Marcar todos los pasos como completados
