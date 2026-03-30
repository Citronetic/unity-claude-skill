[Image: image]

# Turn on the glasses with buttons spanish

Tutorial

Beginner

+10XP

60 mins

1

(23)

Unity Technologies

[Image: Turn on the glasses with buttons spanish]Summary

Ya aprendiste cómo detectar los clics en un botón con gráficos de scripts. Ahora, veamos cómo hacer que algo suceda cuando se detecte un clic. En este tutorial, harás que los botones de la interfaz de usuario controlen la visibilidad de cada par de anteojos.

En este tutorial, harás lo siguiente:

- Crear etiquetas que ayuden a identificar cada par de anteojos.
- Crear la funcionalidad completa para un par de anteojos.
- Duplicar y modificar el gráfico para los otros dos pares de anteojos.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Ya aprendiste cómo detectar los clics en un botón con gráficos de scripts. Ahora, veamos cómo hacer que algo suceda cuando se detecte un clic. En este tutorial, harás que los botones de la interfaz de usuario controlen la visibilidad de cada par de anteojos. Primero crearás la funcionalidad completa para un par de anteojos, y luego duplicarás y modificarás el gráfico para los otros dos.

Marcar paso como completado

## 2. ¿Cómo hacer que los anteojos sean invisibles de forma predeterminada?

Q&A (0)

Cuando se abra la aplicación, los anteojos no deben aparecer en la pantalla sino hasta que el usuario escoja una opción. Por ahora, sucede lo contrario: los tres pares de anteojos aparecen en la pantalla al mismo tiempo.

Para hacer que los anteojos sean invisibles cuando se abra la aplicación, deberás desactivar los componentes Mesh Renderer (Renderizador de mallas). El componente Mesh Renderer administra la visibilidad del GameObject al que está asignado. Si desactivas este componente, el GameObject será invisible en la Scene (Escena), pero los scripts visuales aún podrán acceder a él.

Sigue estas instrucciones para desactivar los Mesh Renderers de los anteojos:

**1.**En la ventana Hierarchy (Jerarquía), expande el Prefab **GlassesGroup** con el ícono desplegable para mostrar los GameObjects secundarios.

**2.** Selecciona el GameObject del primer par de anteojos y mantén presionada la tecla Shift mientras seleccionas el último para seleccionar los tres pares.

**3.**En la ventana Inspector, busca y desactiva el componente Mesh Renderer.

[Image: image]

Ahora, los anteojos ya no están visibles en la vista de Escena, pero los GameObjects siguen presentes y activos en la ventana Hierarchy.

Marcar paso como completado

## 3. ¿Cómo crear y asignar etiquetas personalizadas?

Q&A (0)

En Unity, puedes utilizar varios métodos para que un script busque objetos específicos en una Escena. Una opción es asignar un tipo de referencia especial a un objeto llamada **etiqueta**. Las etiquetas se crean de forma manual y se asignan a los GameObjects directamente en el Editor de Unity, y es muy sencillo hacer referencias a ellas por medio de un script.

**Nota**: en este paso, los nombres de las etiquetas estarán basados en los anteojos incluidos en la Escena de muestra. Si utilizas otros pares de anteojos diferentes, asegúrate de que los nombres de las etiquetas sean adecuados para ellos.

Sigue estas instrucciones para crear etiquetas personalizadas:

**1.**Selecciona el primer par de anteojos en el GameObject primario **GlassesGroup**.

**2.**En la ventana Inspector, busca y selecciona el menú desplegable **Tag (Etiqueta)**.

[Image: image]

**3.**Selecciona **Add Tag… (Agregar etiqueta…)** . Cuando hagas esto, se abrirá la ventana Tag & Layer Inspector (Inspector de etiquetas y capas).

**4.**En la sección Tags, selecciona **Add**(**+) o Agregar (+**).

**5.**Asigna a la etiqueta un nombre que corresponda con el tipo de anteojos seleccionado (una sola palabra en minúsculas) y guárdalo.

[Image: image]

**6.**Repite el proceso y agrega etiquetas para los otros dos pares de anteojos que seleccionaste.

[Image: image]

**7.**En la ventana Hierarchy, selecciona el primer par de anteojos para salir de la ventana Tag & Layer Inspector.

**8.**En la ventana Inspector, selecciona el menú desplegable **Tag**y asigna la etiqueta correspondiente a los anteojos. Por ejemplo, asigna la etiqueta **cat (Gato)** a **Glasses_Cat**.

[Image: image]

**9.** Repite este proceso para los otros dos pares de anteojos.

**10.**En la ventana Hierarchy, selecciona el GameObject **GlassesGroup**. Ahora, debes aplicar los cambios que hiciste en el Prefab **GlassesGroup**.

**11.**En la ventana Inspector, selecciona el menú desplegable **Overrides (Anulaciones)** y luego selecciona **Apply All (Aplicar todo)**.

[Image: image]

Ahora, el Prefab también está actualizado.

Marcar paso como completado

## 4. ¿Cómo actualizar el gráfico de script visual?

Q&A (0)

Ahora, cada par de anteojos tiene un identificador que facilita el acceso mediante el gráfico de script. Para buscar las etiquetas en la Escena, utilizarás un nuevo nodo llamado **Find With Tag (Buscar con etiqueta)**.

Mira el video o sigue estas instrucciones para actualizar el gráfico:

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

**1.**En la ventana Script Graph (Gráfico de script), elimina el nodo **Debug Log (Registro de depuración)** y su secuencia de caracteres asociada, pues ya no los necesitarás.

**2.**Abre el buscador de concordancias (haz clic derecho en la ventana Graph Editor o Editor de gráficos), busca «Find With Tag» y selecciona **Game Object: Find With Tag (Tag)** en la lista de nodos.

**3.**Selecciona el nodo **Find With Tag**y lee su descripción en la ventana Graph Inspector (Inspector de gráficos).

[Image: image]

El nodo **Find With Tag** mostrará como resultado un GameObject activo en la Escena. Los anteojos que forman parte del Prefab **GlassesGroup** solo tienen el Mesh Renderer desactivado, pero siguen activos en la Escena, por lo que este nodo es exactamente lo que necesitas.

El nodo **Find With Tag** requiere una entrada de datos: el nombre de la etiqueta que debe buscar.

**4.**En el nodo **Find With Tag**, escribe el nombre de la etiqueta asociada con el primer par de anteojos en el campo **Tag**.

**Importante**: recuerda utilizar letras minúsculas, igual que como lo hiciste al crear la etiqueta.

**5.**Conecta la salida de flujo del nodo **On Button Click (Al hacer clic en el botón)** a la entrada de flujo del nodo **Find With Tag**.

[Image: image]Marcar paso como completado

## 5. ¿Cómo activar el Mesh Renderer con On Button Click?

Q&A (0)

Ahora que el script puede acceder al GameObject, puedes activar su Mesh Renderer para que se vea en la pantalla cuando el usuario seleccione el botón. Para implementar esta función, utilizarás un nodo **Mesh Renderer: Set Enabled (Establecer como activado)**.

#### Revisa el proceso

Antes de terminar de actualizar el gráfico, revisa el proceso.

A pesar de lo que indica su nombre, el nodo**Mesh Renderer: Set Enabled** se utiliza tanto para activar como para desactivar los Mesh Renderers. Necesitarás dos datos para usar el nodo:

- El Mesh Renderer que desees afectar con el nodo
- Indicar si se debe activar o desactivar el Mesh Renderer

La acción del nodo está controlada por la casilla de selección de booleano ubicada en el lado izquierdo del nodo. Un **booleano** es un tipo de datos que genera un resultado verdadero o falso. Si el booleano del nodo **Mesh Renderer: Set Enabled** tiene el valor true o verdadero (es decir, si está activado), se activará el Mesh Renderer especificado. Si el booleano tiene el valor false o falso (es decir, si está desactivado), se desactivará el Mesh Renderer.

[Image: image]

Puedes ajustar manualmente el valor del booleano en el nodo. Para esto, debes hacer referencia al Mesh Renderer específico que desees afectar. Afortunadamente, ya tienes acceso a un Mesh Renderer con el nodo **Find With Tag**.

[Image: image]

El nodo **Find With Tag** tiene dos salidas. Al igual que con las entradas, los nodos pueden tener salidas de flujo (ícono de flecha) y salidas de datos (ícono de cubo). Si seleccionas el nodo **Find with Tag**, verás que la salida de datos es el GameObject que encuentra el nodo. El nodo **Set Enabled**puede utilizar esta salida para acceder al Mesh Renderer del GameObject.

#### Termina de actualizar el gráfico de script

Mira el video o sigue estas instrucciones para configurar el nodo **Mesh Renderer: Set Enabled**.

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

**1.**Abre el buscador de concordancias y agrega un nuevo nodo **Mesh Renderer: Set Enabled**.

**2.**Conecta la salida de flujo del nodo **Find with Tag** a la entrada de flujo del nodo **Set Enabled**.

**3.**Conecta la salida de resultado de **Find With Tag** a la entrada de objetivo del nodo**Set Enabled**.

**4.**Activa la entrada de booleano del nodo**Set Enabled**.

[Image: image]

**5.**Selecciona el botón **Play (Reproducir)** para probar los cambios.

**6.**Selecciona el botón del primer par de anteojos. Los anteojos aparecerán en la vista de Juego.

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

**7.**  Vuelve a seleccionar el botón **Play**para salir del modo Play.

Marcar paso como completado

## 6. ¿Cómo duplicar el gráfico?

Q&A (0)

El proceso para activar los demás pares de anteojos es igual que el del gráfico que ya creaste. En lugar de recrear el gráfico existente desde cero, puedes duplicarlo y hacer pequeñas modificaciones para que funcione con los otros anteojos.

Mira el video o sigue estas instrucciones para duplicar los gráficos:

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

**1.**En la ventana Script Graph, haz clic y arrastra el cursor para seleccionar todos los nodos del gráfico existente.

**2.**Presiona Ctrl + D (macOS: Cmd + D) para duplicar el gráfico.

**3.**Arrastra el nuevo gráfico para colocarlo debajo del gráfico anterior sin que se superpongan.

**4.**Repite el proceso de duplicación una vez más para tener tres copias del gráfico.

[Image: image]Marcar paso como completado

## 7. ¿Cómo crear nuevas variables de botón?

Q&A (0)

Solo necesitas hacer dos modificaciones en el gráfico: la variable de botón y la etiqueta.

Primero,****mira el video o sigue estas instrucciones para****crear las dos nuevas variables de botón:

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

**1.**En la sección Blackboard de la ventana Script Graph, selecciona la pestaña **Object Variable (Variable de objeto)**.

[Image: image]

**2.**En el campo**(New Variable Name) o Nuevo nombre de la variable**, escribe «glasses2Button» y selecciona **Add** (**+**).

**3.**En el campo **Type (Tipo)**, utiliza el menú desplegable para seleccionar **Button (Botón)**.

**4.**En el campo **Value (Valor)**, haz clic en el **selector de objetos** (ícono de círculo) y selecciona **Glasses 2 Button o Botón de anteojos 2**.

**5.**Vuelve a repetir este proceso para la última variable, llamada glasses3Button.

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

**6.**En la ventana Graph Editor, busca el primer nodo **Get Variable** duplicado (la segunda fila). Selecciona el menú desplegable **Variable** y luego selecciona **glasses2Button**.

**Consejo**: si alejaste la vista de la ventana Graph Editor para duplicar los nodos, deberás volver a acercarla para poder acceder al menú desplegable.

**7.**En la variable del segundo nodo**Get Variable** duplicado (en la tercera fila), elige **glasses3Button**.

Ahora, cada gráfico deber hacer referencia a un botón diferente.

[Image: image]Marcar paso como completado

## 8. ¿Cómo elegir la segunda y tercera etiqueta?

Q&A (0)

Por último, mira el video o sigue estas instrucciones para actualizar las etiquetas de los dos gráficos duplicados:

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

**1.**Reemplaza la etiqueta del segundo nodo **Find With Tag** con la etiqueta del par de anteojos asociado con el segundo botón.

**2.**Repite este proceso en el tercer nodo **Find With Tag** para asignar el último par de anteojos al tercer botón.

[Image: image]

**3.**Selecciona el botón **Play** para ingresar al modo Play.

**4.**Selecciona uno de los botones nuevos y observa cómo aparece el par de anteojos correspondiente.

**5.**Selecciona los demás botones de anteojos y observa cómo aparecen los pares correspondientes.

**Importante**: recuerda que los anteojos aparecerán superpuestos en el orden en que los selecciones, ya que aún no implementas ninguna función para desactivar los Mesh Renderers.

**6.**Vuelve a seleccionar el botón **Play**para salir del modo Play.

**7.**Guarda la Escena.

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

Marcar paso como completadoPaso opcional

## 9. Opcional: ¿cómo probar la aplicación en el dispositivo?

Q&A (0)

Sigue estas instrucciones para probar la aplicación en el dispositivo:

**1.**En la ventana Hierarchy, selecciona el GameObject **GlassesGroup** y márcalo como inactivo en la ventana Inspector.

**2.**  Guarda la Escena.

**3.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**4.**  Asegúrate de que el dispositivo esté conectado y selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

**5.** Repite las pruebas que realizaste en el Editor.

Marcar paso como completado

## 10. Próximos pasos

Q&A (0)

Ahora, los tres pares de anteojos aparecen en la Escena, pero probablemente notaste que hay un problema: cuando seleccionas el siguiente botón de anteojos, los pares anteriores permanecen en la Escena. En el siguiente tutorial, corregirás este problema.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
