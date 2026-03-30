[Image: image]

# Detect when the user touches a plane spanish

Tutorial

Beginner

+10XP

60 mins

2

(20)

Unity Technologies

[Image: Detect when the user touches a plane spanish]Summary

El objetivo es que se genere un portal cuando el usuario toque un plano. En este tutorial, primero determinarás si el usuario tocó correctamente un plano detectado en el entorno.

Para implementar esta función, utilizarás una técnica llamada emisión de rayos.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

La aplicación puede detectar planos verticales u horizontales en el entorno. También puede detectar la posición donde un usuario toca la pantalla. Ahora, usarás esas dos características para determinar si el usuario tocó correctamente uno de los planos.

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

Más adelante, cuando el usuario toque un plano, se generará un portal para que el usuario pueda ver un mundo virtual a través de una superficie en su entorno físico.

Para implementar esta función, utilizarás una técnica llamada emisión de rayos.

Marcar paso como completado

## 2. ¿Qué es la emisión de rayos?

Q&A (0)

La **emisión de rayos** es el proceso de proyectar una línea recta invisible (es decir, un **rayo**) desde un punto de origen a través de una Scene (Escena) para determinar con qué objeto chocaría la línea. Es algo similar a la pesca, donde se lanza una línea de sedal para intentar que un pez entre en contacto con ella. La emisión de rayos se trata de emitir un rayo para averiguar con qué objeto chocaría dentro de la Escena.

Cuando se utiliza la emisión de rayos, todos los objetos con los que choca el rayo se suelen almacenar en una variable de **lista**. Luego puedes acceder a los objetos que forman parte de esa lista y hacer lo que desees con ellos.

[Image: image]

La emisión de rayos es muy útil en programación. Por ejemplo, la emisión de rayos te puede ayudar a determinar si el disparo de un arma haría contacto con el objetivo o si hay algún objeto cerca.

En la aplicación, las emisiones de rayos te ayudarán a determinar si el usuario toca correctamente algún elemento en pantalla. Cuando el usuario toque la pantalla, la aplicación emitirá un rayo hacia la Escena y utilizará la posición del toque como punto de origen. Si el rayo choca con un plano, la aplicación lo registrará como un toque correcto.

Marcar paso como completado

## 3. ¿Cómo agregar un AR Raycast Manager?

Q&A (0)

Anteriormente, agregaste un AR Plane Manager (Administrador de planos de AR) para administrar los planos detectados en la Escena. De forma similar, necesitarás un componente [AR Raycast Manager (Administrador de emisiones de rayos de AR)](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.0/manual/raycast-manager.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953570184) para administrar los rayos emitidos en la Escena. El AR Raycast Manager realiza la función que necesitas: emite un rayo desde la posición donde el usuario toca la pantalla y determina si ese rayo choca con un objeto que se pueda rastrear, como un plano horizontal o vertical.

Sigue estas instrucciones para agregar el nuevo componente:

**1.**  En la ventana Hierarchy (Jerarquía), selecciona el GameObject **AR Session Origin (Origen de la sesión de AR)**.

**2.** En la ventana Inspector, agrega un nuevo componente AR Raycast Manager.

[Image: image]Marcar paso como completado

## 4. ¿Cómo agregar la biblioteca de nodos de AR Foundation?

Q&A (0)

Para poder completar esta función, deberás utilizar el nodo de Visual Scripting **AR Raycast Manager: Raycast (Emisión de rayos)**.

[Image: image]

Sin embargo, si intentas agregar este nodo a un gráfico de script, no lo encontrarás en la biblioteca de nodos. Intenta buscar el nodo en la ventana Graph Editor (Editor de gráficos) y verás que no aparece ningún resultado.

[Image: image]

Hasta ahora, no has utilizado ningún nodo que sea exclusivo para el desarrollo de AR o que solo aparezca en el paquete de AR Foundation. La biblioteca de Visual Scripting no incluye los nodos específicos para AR de forma predeterminada. Debes importar manualmente la biblioteca de nodos de AR Foundation y luego podrás agregar los nodos específicos para AR.

Mira el video o sigue estas instrucciones para importar la biblioteca de nodos de AR Foundation:

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

**1.**En el menú principal, ve a **Edit**> **Project Settings**.

**2.**  En el panel izquierdo de la ventana Project Settings, selecciona **Visual Scripting**.

**3.**Expande la sección **Node Library (Biblioteca de nodos)** con el ícono desplegable (triángulo) y desplázate hasta la parte inferior de la lista de ensamblajes de nodos.

**4.**En la parte inferior de la lista, selecciona **Add o Agregar** (**+**) para agregar un nuevo elemento a la lista.

**5.**Selecciona el menú desplegable del nuevo ensamblaje, luego busca «AR Foundation» y selecciona **Unity.XR.ARFoundation**.

**6.**Debajo de la lista, selecciona **Regenerate Nodes (Regenerar nodos)**para poder acceder a los nuevos nodos en la ventana Script Graph.

[Image: image]

**7.**En la ventana Graph Editor, utiliza el buscador de concordancias para buscar «AR Raycast Manager» y revisa que los nodos específicos de AR ahora estén disponibles.

Marcar paso como completado

## 5. ¿Cómo agregar variables para la emisión de rayos?

Q&A (0)

Para completar esta función, necesitarás dos nuevas variables de **objeto** en el script visual: una para el componente AR Raycast Manager que acabas de agregar y otra para la **lista** que almacenará los objetos con los que choque el rayo emitido.

Recuerda que, cuando un rayo emitido entra en una Escena con el objetivo de chocar con objetos, produce una lista de los objetos con los que choca. Debes prepararte para almacenar esa lista en una nueva variable. En este caso, utilizarás un tipo de lista específico llamado **lista Aot**. Aot quiere decir Ahead Of Time (Antes de tiempo), pues la lista se define antes de tiempo, es decir, antes de que se ejecute la aplicación.

Sigue estas instrucciones a fin de crear nuevas variables para el componente AR Raycast Manager y la lista Aot:

**1.**Revisa que el Script **TapToPlace** esté abierto en la ventana Script Graph.

**2.**  En la ventana Blackboard (Pizarra), selecciona la pestaña de variables **Object (Objeto)**.

**3.**Crea una nueva variable llamada «arRaycastManager» y, en el campo **Type (Tipo)**, selecciona **AR Raycast Manager**.

**4.**Haz clic en el selector de objetos (círculo) del campo **Value o Valor** y elige **AR Session Origin** (que contiene el componente AR Raycast Manager).

**5.**Crea otra nueva variable llamada «hits» y, en el campo **Type**, selecciona **Aot List (Lista Aot)**, pero deja el campo **Value** vacío. La emisión de rayos agregará objetos a la lista mientras la aplicación esté en ejecución.

[Image: image]

Ahora tienes todas las variables que necesitas para implementar la emisión de rayos.

Marcar paso como completado

## 6. ¿Cómo agregar el nodo Raycast a la secuencia de nodos?

Q&A (0)

La aplicación realizará la emisión de rayos justo después de determinar la posición en la que el usuario tocó la pantalla, pero antes de enviar un mensaje a la interfaz de usuario de depuración.

Mira el video o sigue estas instrucciones para agregar el nodo **Raycast** al gráfico:

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

**1.**En la ventana Graph Editor, asegúrate de que haya suficiente espacio para el nuevo nodo **Raycast** después de los nodos **Get Touch (Obtener toque)** y **Get Position (Obtener posición)**.

**2.**Agrega un nodo **AR Raycast Manager: Raycast (Screen Point o Punto de pantalla, Hit Results o Resultados de impacto, Trackable Types o Tipos de elementos rastreables)** con el buscador de concordancias.

**Importante**: asegúrate de seleccionar el nodo **Raycast** con las entradas específicas mencionadas, pues hay otros nodos con entradas muy similares que no proporcionan las mismas funciones.

**3.**Desconecta y reconecta los nodos para que la emisión de rayos se lleve a cabo después del nodo **Get Touch**, pero antes del nodo **To String**.

[Image: image]

Ahora, el nodo **Raycast** tiene la posición correcta en la secuencia.

Marcar paso como completado

## 7. ¿Cómo configurar las entradas del nodo Raycast?

Q&A (0)

Ahora tienes todo listo para configurar la emisión de rayos con tus entradas específicas. Puedes revisar todas las entradas requeridas para este nodo en la ventana Graph Inspector al seleccionar el nodo **Raycast**.

[Image: image]

Mira el video o sigue estas instrucciones para configurar las entradas del nodo **Raycast**:

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

**1.**Ve a la pestaña **Object** de la ventana Blackboard. Haz clic en las variables **arRaycastManager** y **hits** y arrástralas a la ventana Graph Editor.

**2.**Conecta la entrada **Target (Objetivo)** al nodo de la variable **arRaycastManager**.

**3.**Conecta la entrada **Screen Point** al nodo **Get Position**.

**4.**Conecta la entrada **Hit Results** al nodo de la variable **hits**.

**5.**En la propiedad **Trackable Types** del nodo **Raycast**, elige **None (Ninguno)** para cancelar la selección de todas las opciones disponibles y luego selecciona **Plane Within Polygon (Plano en polígono).**

[Image: image]Marcar paso como completado

## 8. ¿Cómo mostrar el resultado de la emisión de rayos en la interfaz de usuario de depuración?

Q&A (0)

Una vez más, utilizarás la interfaz de usuario de depuración para revisar que la aplicación funcione de la manera esperada. Configurarás la interfaz de usuario de depuración para que muestre **true (Verdadero)** si el usuario toca un plano válido o **false (Falso)** si toca cualquier otra cosa. Esto te ayudará a asegurarte de que la aplicación registre correctamente si el usuario selecciona o no un plano en el que la aplicación pueda colocar un portal.

Anteriormente, utilizaste el nodo **Vector 2: To String** para convertir la posición del toque en texto que se pueda mostrar en la interfaz de usuario. Sin embargo, puedes utilizar el nodo **Raycast** para aplicar un enfoque diferente.

Si seleccionas el nodo **Raycast** y revisas la ventana Graph Inspector, verás que el resultado es un Booleano (es decir, un valor verdadero o falso que indica si el rayo emitido chocó con un plano o no).

[Image: image]

En lugar de mostrar la posición del toque en la interfaz de usuario de depuración, ahora mostrarás ese Booleano. Esto significa que debes usar un nodo **Boolean: To String** en lugar del nodo **Vector 2: To String**.

Mira el video o sigue estas instrucciones para reemplazar el mensaje de la interfaz de usuario de depuración con el resultado Boolean del nodo **Raycast**:

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

**1.**En la ventana Graph Editor, haz clic derecho en el nodo **Vector 2: To String** y selecciona **Replace (Reemplazar)**. Busca y selecciona el nodo **Boolean: To String ()** para reemplazarlo.

**2.**Conecta la salida del nodo **Raycast** a la entrada del nodo **To String**. La salida del nodo **To String**debe seguir conectada al nodo **Set Text (Establecer texto)**.

[Image: image]

**3.**  Crea y ejecuta la aplicación para acceder a la vista previa de la nueva función. Cuando toques un plano válido, la interfaz de usuario debe mostrar **True**. Cuando toques la pantalla fuera de un plano válido, la interfaz de usuario debe mostrar **False**.

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

¡Felicitaciones! Utilizaste correctamente la emisión de rayos para detectar lo que un usuario toca en la pantalla.

Marcar paso como completado

## 9. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a la actividad opcional que aparece abajo.

Esta actividad es totalmente opcional, por lo que puedes omitir este paso si no deseas completarla.

Sin embargo, te recomendamos intentar completar este tipo de desafío para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Medio: utiliza concatenación para mostrar un mensaje de depuración más específico

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

En este tutorial, mostraste un valor booleano «true» o «false» en la interfaz de usuario de depuración. Este mensaje de depuración no es muy claro y debería decir algo más específico, como «plane touched: true» o «plane touched: false».

Para poder mostrar este tipo de mensaje, deberás utilizar concatenación. En programación, el término **concatenación** se suele referir al proceso de unir varias secuencias de caracteres. Con frecuencia, deberás concatenar secuencias de caracteres de texto simple (como «plane touched:») con datos más dinámicos (como el valor Booleano) para que los datos sean más legibles. Intenta implementar un mensaje de depuración concatenado que resulte más útil en la aplicación.

Si necesitas ayuda para completar este desafío, utiliza la siguiente guía:

- Usa el nodo **String (Secuencia de caracteres): Concat (arg 0, arg 1)**.
- Conecta una secuencia de caracteres sencilla que diga «plane touched:» a la primera entrada y el Booleano del nodo Raycast a la segunda entrada.
- Conecta la salida del nodo Concat al nodo **Set Text**.

Marcar paso como completado

## 10. Próximos pasos

Q&A (0)

En este tutorial, utilizaste una emisión de rayos para determinar si el usuario tocó correctamente un objetivo de plano válido en la pantalla. En el siguiente tutorial, generarás el GameObject **portal** en la Escena y lo colocarás en el plano seleccionado por el usuario.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
