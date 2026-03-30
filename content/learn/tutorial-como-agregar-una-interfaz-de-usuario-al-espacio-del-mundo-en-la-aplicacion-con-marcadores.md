[Image: image]

# Add world space UI to your marker-based app spanish

Tutorial

Beginner

+10XP

45 mins

1

(30)

Unity Technologies

[Image: Add world space UI to your marker-based app spanish]Summary

Los diseños de espacio del mundo te permiten colocar elementos de interfaz de usuario e imágenes en el espacio de AR (Realidad aumentada) del mundo real en lugar de unirlos a la pantalla. A diferencia del Canvas de espacio en pantalla, puedes colocar un Canvas de espacio del mundo en cualquier parte de la Scene (Escena).

En este tutorial, crearás una etiqueta que flotará cerca del modelo cuando aparezca sobre el marcador. También crearás un botón con el que el usuario podrá activar y desactivar la etiqueta.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Los diseños de espacio del mundo te permiten colocar elementos de interfaz de usuario y Sprites en el espacio de AR del mundo real en lugar de unirlos a la pantalla. A diferencia del Canvas de espacio en pantalla, puedes colocar un Canvas de espacio del mundo en cualquier parte de la Escena.

En este tutorial, crearás una etiqueta que flotará cerca del modelo cuando este aparezca sobre el marcador. También crearás un botón con el que el usuario podrá activar y desactivar la etiqueta.

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

## 2. ¿Cómo agregar un Canvas de espacio del mundo?

Q&A (0)

El primer paso es agregar un Canvas de espacio del mundo a la Escena. Te proporcionamos un Prefab para este Canvas.

Sigue estas instrucciones a fin de agregar los Assets (Recursos) proporcionados para la interfaz de usuario de espacio del mundo a la Escena:

**1.**  En la ventana Project (Proyecto), abre el Prefab de modelObject en modo Prefab.

**2.**  En la ventana Project, ve a **Assets** > **_ARMarker** > **Prefabs** > **UI**.  Haz clic en el Prefab **CanvasPopup** y arrástralo a la ventana Hierarchy (Jerarquía) como GameObject secundario del GameObject **[tu modelo]Mesh o Malla**.

**3.**  En la vista de Escena, cambia la ubicación, la rotación y el tamaño del Canvas en relación con el modelo.

[Image: image]

**4**.  Quédate en modo Prefab para el siguiente paso.

**Importante**: el Canvas debe ser un GameObject secundario del GameObject **[tu modelo]Mesh** o, de lo contrario, no se verá afectado por los botones para girar.

Marcar paso como completado

## 3. ¿Cómo personalizar la interfaz de usuario de espacio del mundo?

Q&A (0)

Después de colocar el Canvas en la posición que desees dentro del mundo, haz que se vea un poco más elegante.

Sigue estas instrucciones para personalizar la interfaz de usuario de espacio del mundo:

**1.** En la ventana Hierarchy, selecciona el GameObject secundario **Panel** debajo de **CanvasPopup**.

**2.**  En la ventana Inspector, en el componente Image (Imagen), utiliza el selector (círculo) para cambiar la **Source Image o Imagen de origen** a un Sprite diferente. También puedes crear o descargar tu propia imagen de interfaz de usuario.

**3.**  En la ventana Hierarchy, selecciona el GameObject secundario **Text o Texto (TMP)** del GameObject **Panel**y, en la ventana Inspector, cambia el texto de **Text Input (Entrada de texto)**para describir alguna característica del GameObject.

**4.**Personaliza la fuente, el tamaño y el estilo del texto en el componente TextMeshPro.

**5.**Si deseas ajustar el tamaño de los GameObjects **Panel** o **Text**, utiliza la herramienta Rect.

**6.**Cuando termines de personalizar el diseño y estilo, sal del modo Prefab.

[Image: image]Marcar paso como completado

## 4. ¿Cómo actualizar el botón de la interfaz de usuario?

Q&A (0)

A continuación, harás que uno de los botones active y desactive el Canvas de espacio del mundo para que los usuarios puedan ver u ocultar el texto que aparece junto al modelo. En este paso, también personalizarás el aspecto del botón.

Sigue estas instrucciones a fin de personalizar el botón para la interfaz de usuario de espacio del mundo:

**1.**En la ventana Hierarchy, selecciona **ButtonCanvas** > **Button3** y cambia el nombre a «ButtonPopup».

**2.**  Si lo deseas, personaliza el Sprite del botón.

**3.**En el GameObject secundario **Text (TMP)**, cambia el texto a «Info» o algo que dé al usuario una idea de lo que hace este botón.

**4.**  Personaliza el estilo, la fuente y otras propiedades del texto como desees.

[Image: image]Marcar paso como completado

## 5. ¿Cómo crear variables en el gráfico de script?

Q&A (0)

Ahora que el botón se ve genial, llegó el momento de hacer que funcione. De forma similar a lo que hiciste con la malla, debes obtener una referencia del Canvas emergente al buscarlo cuando se genere en la Escena. Esta función requiere una variable para el botón de la interfaz de usuario y una variable sin asignar para el Canvas.

Sigue estas instrucciones para crear las dos nuevas variables que requiere el gráfico de script:

**1.**  En la ventana Hierarchy, selecciona el GameObject **Script Manager (Administrador de scripts)** y abre el gráfico Setup (Configuración).

**2.** En la ventana Blackboard o Pizarra, agrega una nueva variable de GameObject llamada «buttonPopup», selecciona **Button o Botón** en el menú desplegable **Type o Tipo**y, en el campo Value o Valor, asigna la opción **ButtonPopup (Button**) con el selector (círculo).

**3.** En la ventana Blackboard, agrega una nueva variable de GameObject llamada «canvasPopup» y selecciona **GameObject**en el menú desplegable **Type**. No selecciones nada en el campo **Value**.

[Image: image]Marcar paso como completado

## 6. ¿Cómo obtener una referencia para el Canvas?

Q&A (0)

Ahora que las variables están listas, ya puedes buscar el GameObject secundario **Canvas emergente** dentro del Prefab que etiquetaste. En el Script Setup, ya tienes una referencia al GameObject que tiene la etiqueta modelObject, por lo que no es necesario buscar otra etiqueta. En lugar de eso, utilizarás el nodo **Get Component in Children (Obtener componente en GameObjects secundarios)**para buscar un componente Canvas en cualquiera de los GameObjects secundarios de ese GameObject que tiene la etiqueta **Mesh**. Debido a que el Canvas emergente es el único GameObject que tiene un componente Canvas, el nodo **Get Component in Children** encontrará correctamente el GameObject **Canvas emergente**.

Mira el video o sigue estas instrucciones para obtener una referencia al Canvas emergente y asignarlo a la variable:

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

**1.**  En la ventana Graph Editor (Editor de gráficos), al final del gráfico Setup, agrega un nodo**Get Component in Children** (Type, Include Inactive o Incluir inactivos). En el campo **Type**, cambia la opción a **Canvas** y luego activa la opción **Include Inactive**.

**Importante**: asegúrate de seleccionar el nodo **Get Component in Children**en singular y no el nodo **Get Components in Children (Obtener componentes en GameObjects secundarios)**en plural**.**

**2**.  Conecta la salida del nodo **Set Variable (Establecer variable)** modelObject a la entrada de GameObject del nodo **Get Component in Children**. El Script buscará un Canvas entre los GameObjects secundarios del GameObject **Mesh** del modelo.

**3.**  Agrega un nodo **Set Variable Object (Objeto)**después de **Get Component in Children** y selecciona **canvasPopup**.

**4.**  Conecta las salidas del nodo **Get Component in Children** al nodo **Set Variable** canvasPopup y utiliza la entrada inferior que no tiene ninguna etiqueta. Este nodo asignará la variable canvasPopup al Canvas.

[Image: image]

**5.**  Si deseas probar el Script en el Editor, ingresa al modo Play (Reproducir) y activa el modelo dentro del Editor.

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

## 7. ¿Cómo mostrar el Canvas emergente cuando el usuario hace clic?

Q&A (0)

Ahora, debemos hacer que el GameObject **CanvasPopup** se active en la Escena cuando el usuario presione el botón.

Mira el video o sigue estas instrucciones para crear un script visual que active el Canvas de espacio del mundo:

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

**1.**  En la ventana Hierarchy, selecciona el GameObject **VisualScripts** y, en la ventana Inspector, selecciona **Add Component** > **Script Machine**.

**2.**  Selecciona **New (Nuevo)**en el nuevo componente. Cuando se te indique, guarda el nuevo componente Script Machine (Máquina de scripts) en la carpeta **Visual Scripts** y dale el nombre «DisplayPopup**».**

**3.**  En la ventana Inspector, agrega información en las secciones **Title o Título** («Display Popup», lo que indica que muestra el elemento emergente) y **Summary o Resumen** («Makes an object appear and disappear», lo que indica que hace que un objeto aparezca y desaparezca). Luego, selecciona **Edit Graph (Editar gráfico)**.

[Image: image]

**4.**  Elimina los nodos **OnStart (Al inicio)** y **OnUpdate (Al actualizar)**.

**5.**  En la ventana Graph Editor, agrega un nodo **On Button Click (Al hacer clic en el botón)**.

**6.**  Haz clic en la variable **buttonPopup**, arrástrala a la ventana Graph Editor y conéctala a la entrada del nodo **On Button Click**.

**7.**  En la ventana Graph Editor, agrega un nodo **Game Object Set Active (Establecer como activo)** y conecta la entrada de flujo a la salida de flujo del nodo **On Button Click**. En el campo **Value**, selecciona **True o Verdadero** (casilla marcada) para especificar que el GameObject se debe activar.

**8.**Arrastra la variable canvasPopup a la ventana Graph Editor y conéctala a la entrada de GameObject del nodo **Game Object Set Active**.

[Image: image]

**9.**Abre el modelo en modo Prefab. Selecciona el GameObject secundario **CanvasPopup**y desactívalo en la ventana Inspector. A partir de ahora, este GameObject dejará de estar activo de forma predeterminada y los Scripts activarán el Canvas cuando el usuario presione un botón.

[Image: image]

**10.**Si deseas probar la aplicación en el Editor, activa el modelo dentro del Editor en la ventana Inspector, selecciona **Play** y luego selecciona el botón **ButtonPopup**.

**11.** Desactiva el modelo dentro del Editor en la ventana Hierarchy, crea la aplicación en el dispositivo y prueba los botones. Asegúrate de que el panel de texto se vuelva visible cuando selecciones el botón.

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

## 8. ¿Cómo hacer que el botón alterne entre mostrar y ocultar la información?

Q&A (0)

Ahora que puedes activar el Canvas emergente, también lo puedes desactivar cuando el usuario presione nuevamente el botón. Utilizarás un nodo **Negate (Negar)**para desactivar y activar el Canvas a fin de que el botón funcione como un alternador.

Mira el video o sigue estas instrucciones para ajustar el script visual a fin de que alterne entre activar y desactivar el Canvas de espacio del mundo:

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

**1.**  En el Script DisplayPopup, mueve a la izquierda el nodo **Get Object (Obtener objeto) Variable** que tiene el valor canvasPopup a fin de tener más espacio para otros nodos.

**Importante**: asegúrate de que el nodo **Get Object Variable** se mantenga conectado al nodo **Set Active**.

**2.**  En la ventana Graph Editor, agrega un nodo **GameObject: Get Active Self (Detectar si este GameObject está activo)**. Este nodo sirve para detectar si canvasPopup está activo y genera un valor Booleano como resultado. Conecta la salida del nodo **Get Object Variable** canvasPopup a la entrada del nuevo nodo.

**3.**  En la ventana Graph Editor, agrega un nodo **Negate**y conéctalo a la salida del nodo **Get Active Self**. Este nodo establecerá el valor Booleano opuesto al resultado del nodo **Get Active Self**.

**4.**  Conecta la salida de flujo del nodo **Negate** a la entrada de valor del nodo **Set Active**.

De esta manera, si el Canvas está activo, se establecerá como inactivo. Si el Canvas está inactivo, se establecerá como activo.

[Image: image]

**5.**Si deseas probar esto en el Editor, activa el modelo dentro del Editor, selecciona **Play** y luego selecciona el botón **ButtonPopup** varias veces.

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

**6.**  Desactiva el modelo dentro del Editor en la ventana Hierarchy.

**7.**  Crea la aplicación en el dispositivo y prueba los botones para asegurarte de que canvasPopup se active y se desactive cuando presiones el botón.

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

## 9. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a la actividad opcional que aparece abajo. Cada actividad tiene una etiqueta de Fácil, Medio o Difícil para indicar su nivel de dificultad.

Esta actividad es totalmente opcional, por lo que puedes omitir este paso si no deseas completarla.

Sin embargo, te recomendamos intentar completar este tipo de desafío para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Medio: haz que el Canvas se oriente hacia la cámara

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

Puede resultar útil que los Canvas de espacio del mundo se orienten hacia la cámara, ya que no están unidos a la pantalla. Para esto, tienes que hacer que el objeto gire por su cuenta a fin de orientarse hacia una cámara determinada. A veces, cuando haces esto, debes probar la aplicación para asegurarte de que el texto tenga la orientación correcta. Si la orientación es incorrecta, tal vez debas girar el texto en el Prefab.

Tal vez necesites algunos nodos nuevos para este desafío en particular:

- Transform Look At World Up (Ver mundo hacia arriba).
- Get Main Camera (Obtener cámara principal).

Marcar paso como completado

## 10. Próximos pasos

Q&A (0)

En este tutorial, hiciste que el tercero de los cuatro botones alterne entre activar y desactivar un Canvas de espacio del mundo. En el siguiente tutorial, agregarás la función del último botón de la interfaz de usuario, el cual hará que el modelo de AR genere sonido espacial.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
