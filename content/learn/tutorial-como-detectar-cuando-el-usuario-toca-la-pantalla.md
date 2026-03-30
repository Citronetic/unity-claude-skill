[Image: image]

# Detect the user’s touch spanish

Tutorial

Beginner

+10XP

60 mins

1

(21)

Unity Technologies

[Image: Detect the user’s touch spanish]Summary

Un solo toque en la pantalla es una de las interacciones más simples e intuitivas que se pueden realizar con un dispositivo móvil. De forma instintiva, la mayoría de los usuarios intentan tocar los elementos con los que creen que pueden interactuar en la pantalla.

En este tutorial, harás lo siguiente:

- Crear un nuevo script visual.
- Detectar si el usuario toca la pantalla.
- Detectar la posición donde un usuario toca la pantalla.
- Agregar una interfaz de usuario que muestre información sobre el toque del usuario en la pantalla.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Un solo toque en la pantalla es una de las interacciones más simples e intuitivas que se pueden realizar con un dispositivo móvil. De forma instintiva, la mayoría de los usuarios intentan tocar los elementos con los que creen que pueden interactuar en la pantalla.

La aplicación ya puede detectar planos en el entorno y mostrarlos. Al finalizar este proyecto, cuando el usuario toque uno de estos planos, se generará un portal hacia un mundo virtual. El primer paso para obtener ese resultado es detectar si el usuario toca la pantalla y dónde.

En este tutorial, harás lo siguiente:

- Crear un nuevo script visual.
- Detectar si el usuario toca la pantalla.
- Detectar la posición donde un usuario toca la pantalla.
- Agregar una interfaz de usuario que muestre información sobre el toque del usuario en la pantalla.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 2. ¿Cómo crear un nuevo gráfico de script?

Q&A (0)

Primero, sigue estas instrucciones para crear un nuevo gráfico de script:

**1.**En la ventana Hierarchy (Jerarquía), haz clic derecho y selecciona **Create Empty (Crear vacío)**.

**2.**  Asigna el nombre «Visual Scripts» al nuevo GameObject.

**3.**En la ventana Inspector, selecciona **Add Component (Agregar componente)** y agrega un componente Script Machine (Máquina de scripts).

[Image: image]

**4.**En el componente Script Machine, busca la propiedad **Graph (Gráfico)** y selecciona **New (Nuevo)**.

**5.**Cuando aparezca la ventana de diálogo Save Graph (Guardar gráfico), crea una nueva carpeta dentro de la carpeta **_ARPortal**  y asígnale el nombre «Visual Scripts».

**6.**Asigna el nombre «TapToPlace» al nuevo gráfico y selecciona **Save (Guardar)**.

[Image: image]

**7.**En el componente Script Machine, actualiza los campos de texto del gráfico de la siguiente manera:

- **Título**: Tap to place (Tocar para colocar)
- **Resumen**: Detects touch on an AR plane and places a portal object (lo que indica que detecta cuando un usuario toca un plano en AR o Realidad aumentada y coloca un objeto de portal)

[Image: image]

**8.**Selecciona **Edit Graph (Editar gráfico)** para abrir el gráfico del Script **TapToPlace**.

Marcar paso como completado

## 3. ¿Cómo agregar una interfaz de usuario de depuración a la aplicación?

Q&A (0)

Antes de empezar a trabajar en el script visual, debes prepararte para depurar la aplicación en el dispositivo.

El desarrollo de aplicaciones para teléfonos introduce desafíos únicos en el proceso de depuración. Cuando la aplicación se ejecuta en el dispositivo, no existe ningún método sencillo para ver los errores en la consola cuando se presenten.

En este tipo de situaciones, puede resultar útil implementar una interfaz de usuario (UI) de depuración sencilla que se muestre directamente en el dispositivo mientras se ejecute la aplicación. Esta interfaz puede ser un cuadro de texto simple en el que puedas mostrar mensajes para asegurarte de que la aplicación funcione de la manera esperada.

[Image: image]

Te proporcionamos una interfaz de usuario sencilla que puedes utilizar. Si lo deseas, también puedes personalizar su aspecto.

#### ¿Cómo implementar la interfaz de usuario de depuración?

Sigue estas instrucciones para agregar una interfaz de usuario de depuración a la aplicación y mostrar un mensaje:

**1.**En la ventana Project (Proyecto), ve a **_ARPortal** > **Prefabs**>**Testing**.

**2.**  Arrastra el Prefab **Debug UI (Interfaz de usuario de depuración)** desde la ventana Project a la ventana Hierarchy.

**3.**En la ventana Hierarchy, expande la interfaz de usuario de depuración y el GameObject secundario **Panel** y luego selecciona el GameObject **Text (Texto)**.

**4.**En la ventana Inspector, busca el componente Text. Intenta editar la propiedad **Text** para cambiar el texto que aparece en la vista de Juego.

[Image: image]

**Nota**: el tamaño de la fuente se puede ver diferente al de la captura de pantalla anterior, según la relación de aspecto y la resolución que tengas en la ventana de la vista de Juego. Esta diferencia de tamaño es un comportamiento normal.

**4.**  Guarda la Scene (Escena).

**5.**  Crea y ejecuta la aplicación para acceder a la vista previa de la interfaz de usuario de depuración en el dispositivo.

Marcar paso como completado

## 4. ¿Cómo crear una nueva variable para el mensaje de depuración?

Q&A (0)

La interfaz de usuario de depuración está lista para mostrar cualquier mensaje que desees. Ahora, debes asegurarte de poder cambiar el contenido del mensaje mientras la aplicación se ejecuta desde un script visual. Puedes hacer esto con una variable.

Sigue estas instrucciones para configurar el texto de la interfaz de usuario de depuración como una variable:

**1.**En la ventana Script Graph (Gráfico de script), ve a la sección Blackboard (Pizarra) y selecciona la pestaña **Object (Objeto)**.

[Image: image]

**2.**En el campo**(New Variable Name) o Nombre de la nueva variable**, escribe «debugText» y selecciona **Add o Agregar** (**+**).

**3.**En la propiedad **Type (Tipo)**, elige **Text**.

**4.**En la propiedad **Value (Valor)**, haz clic en el selector de objetos (círculo) y selecciona **Text**.

[Image: image]Marcar paso como completado

## 5.  ¿Cómo registrar un mensaje en la interfaz de usuario de depuración?

Q&A (0)

Ahora que tienes la variable configurada, puedes cambiar el mensaje de depuración que se muestra al inicio del Script visual.

Mira el video o sigue estas instrucciones para hacerlo:

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Sigue estas instrucciones para cambiar la variable **debugText** al inicio del Script visual:

**1.**En la ventana Graph Editor (Editor de gráficos), utiliza el buscador de concordancias para agregar un nodo **Text: Set Text (Establecer texto)**. Conecta la salida de flujo del nodo **On Start (Al inicio)** al nuevo nodo.

**2.**Haz clic en el ancla de la variable **debugText**, arrástrala a la ventana Graph Editor y conéctala a la entrada **Text**del nodo **Set Text**.

**3.**En la entrada **String (Secuencia de caracteres)** del nodo **Set Text**, escribe un mensaje personalizado. Por ejemplo, puedes escribir «application started», lo que indica que se inició la aplicación.

[Image: image]

**4.**  Crea y ejecuta la aplicación para acceder a la vista previa del nuevo mensaje de depuración inicial.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 6. ¿Cómo detectar si el usuario toca la pantalla?

Q&A (0)

A continuación, agregarás la funcionalidad para detectar si el usuario toca la pantalla del dispositivo y enviar un mensaje a la interfaz de usuario de depuración a fin de verificar que la detección de toque funcione correctamente. El mensaje debe tener una descripción precisa, como «touch detected» (que indica que se detectó un toque).

Deberás usar el evento **On Update (Al actualizar)** para detectar si el usuario toca la pantalla en la aplicación. **On Update** se ejecuta de manera constante (cada vez que se actualiza la aplicación), por lo que es ideal para una situación como esta, donde el usuario podría tocar la pantalla en cualquier momento.

Mira el video o sigue estas instrucciones para detectar el toque y registrar el evento en la interfaz de usuario de depuración.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**1.**En la ventana Graph Editor, utiliza el buscador de concordancias para agregar un nodo **Input Get Touch (Index) u Obtener toque (Índice)**. Conecta la salida de flujo del nodo **On Update** al nuevo nodo.

**Index (Índice)**representa el número de toques simultáneos en la pantalla. El valor de Index es 0 cuando no se detecta ningún toque. Si se detecta un toque, el valor de Index cambia a 1. El segundo toque simultáneo aumenta el valor de Index a 2, y así sucesivamente.

**2.**En la secuencia de nodos del evento **On Start** que creaste anteriormente, selecciona y duplica los nodos **Set Text** y **Get Variable (Obtener variable)**. Conecta la salida de flujo del nodo **Get Touch** a la entrada de flujo del nodo **Set Text** duplicado.

**3.**En el nodo **Set Text** duplicado, cambia el mensaje del valor **String**a algo diferente, como «touch detected».

[Image: image]

**4.**  Crea y ejecuta la aplicación para acceder a la vista previa de la nueva función. Cuando toques la pantalla, la interfaz de usuario de depuración debe mostrar el mensaje **touch detected**.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 7. ¿Cómo obtener la posición del toque?

Q&A (0)

Además de revisar si el usuario tocó la pantalla o no, debes determinar la ubicación del toque en la misma. Puedes utilizar las coordenadas X y Y del toque para determinar si el usuario tocó un plano horizontal o vertical.

#### El proceso para determinar la posición del toque

Utilizarás el nodo **Touch: Get Position** para obtener la ubicación del toque. Este nodo genera como resultado un **Vector2**, el cual incluye las coordenadas X y Y del toque detectado.

[Image: image]

Mostrarás estas coordenadas en el texto de la interfaz de usuario de depuración. Sin embargo, el nodo **Set Text**no aceptará ninguna entrada de tipo Vector2 para este texto, pues se requiere un valor String.

[Image: image]

Para mostrar las coordenadas Vector2 del nodo **Get Position** con la entrada String del nodo **Set Text**, primero debes convertir esas coordenadas Vector2 en un formato String compatible. Puedes hacer esto con un nodo **To String**, el cual convierte los datos en un formato String que se puede utilizar para el texto.

#### ¿Cómo mostrar las coordenadas de la posición del toque?

Mira el video o sigue estas instrucciones para obtener la posición del toque y mostrar esas coordenadas en la interfaz de usuario de depuración.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**1.** En la ventana Graph Editor, agrega un nodo **Vector 2: To String**e insértalo en la secuencia On Update, entre los nodos **Get Touch** y **Set Text**.

**2.**Agrega un nodo **Touch: Get Position** y conéctalo entre los nodos **Get Touch**y **To String**.

**3.** Conecta la salida **String**del nodo **To String**a la entrada **String**del nodo **Set Text**.

[Image: image]

**4.**  Crea y ejecuta la aplicación para acceder a la vista previa de la nueva función. Cuando toques la pantalla, la interfaz de usuario de depuración debe mostrar las coordenadas X y Y de la posición del toque.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 8. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Cada actividad tiene una etiqueta de Fácil, Medio o Difícil para que conozcas su nivel de dificultad.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas.

Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: muestra un mensaje inicial útil

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

En este tutorial, mostraste el texto «application started» en la interfaz de usuario de depuración para verificar que esta funcionara correctamente. Muchas veces, resulta útil mostrar texto al inicio de una experiencia en AR porque es una oportunidad para indicar a los usuarios cómo pueden interactuar con la aplicación. En esta aplicación, puedes indicar al usuario que mueva lentamente la cámara en su entorno para detectar una superficie vertical u horizontal. Intenta implementar un mensaje descriptivo y útil como este al inicio de la aplicación.

#### Difícil: crea un visualizador del toque en pantalla

En los videos de demostración de este tutorial, probablemente notaste un pequeño círculo blanco que sigue la posición del toque.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Este pequeño círculo puede ser muy útil para la depuración, pues muestra el momento y el lugar precisos en que el dedo entra en contacto con la pantalla.

Si necesitas ayuda para completar este desafío, utiliza la siguiente guía:

- Utiliza una imagen de interfaz de usuario de espacio en pantalla con forma de círculo para el visualizador.
- Crea un nuevo componente Script Machine llamado «TouchVisualizer» para controlar la funcionalidad. Es mejor mantener este tipo de funcionalidad adicional separada del Script principal.
- Utiliza los nodos **GameObject: Set Active (Establecer como activo)** y **Transform: Set Position (Establecer posición)** para activar y colocar el círculo de la interfaz de usuario.

Marcar paso como completado

## 9. Próximos pasos

Q&A (0)

En este tutorial, detectaste un evento de toque y registraste las coordenadas en una interfaz de usuario de depuración personalizada. Luego, utilizaste las coordenadas para verificar que los scripts visuales funcionaran de la manera esperada. En el siguiente tutorial, detectarás si el usuario toca un plano horizontal o vertical válido.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
