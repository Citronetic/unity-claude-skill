[Image: image]

# Update your graph to switch between glasses spanish

Tutorial

Beginner

+10XP

45 mins

1

(24)

Unity Technologies

[Image: Update your graph to switch between glasses spanish]Summary

En el tutorial anterior, creaste la función para que la aplicación muestre diferentes anteojos según el botón que seleccione el usuario. Sin embargo, las mallas de los anteojos se mantienen activas incluso si el usuario selecciona otro botón, por lo que los nuevos anteojos aparecen encima de los anteriores.

En este tutorial, harás lo siguiente:

- Ampliar la función del gráfico para que solo se pueda mostrar un par de anteojos a la vez.
- Aprender a usar eventos personalizados para que los scripts sean más eficientes.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

En el tutorial anterior, creaste la función para que la aplicación muestre diferentes anteojos según el botón que seleccione el usuario. Sin embargo, las mallas de los anteojos se mantienen activas incluso si el usuario selecciona otro botón, por lo que los nuevos anteojos aparecen encima de los anteriores. En este tutorial, ampliarás la función del gráfico para que solo se pueda mostrar un par de anteojos a la vez.

Marcar paso como completado

## 2. ¿Cómo desactivar los Mesh Renderers de los anteojos?

Q&A (0)

Ya aprendiste que el nodo **Mesh Renderer (Renderizador de mallas): Set Enabled (Establecer como activado)** se puede usar para controlar la visibilidad de un GameObject. En tus gráficos principales, utilizaste este nodo para activar la visibilidad de la malla. Ahora, lo usarás para desactivarla.

Mira el video o sigue estas instrucciones para desactivar los Mesh Renderers de los anteojos:

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

**1.**  En la ventana Graph Editor (Editor de gráficos), haz clic y arrastra el mouse sobre los tres conjuntos de nodos**Find With Tag (Buscar con etiqueta)**y **Set Enabled** para seleccionarlos como grupo.

**2.**Presiona Ctrl + D (macOS: Cmd + D) a fin de duplicar estos nodos y muévelos hacia un lado del conjunto original para que no haya nodos superpuestos.

**3.**Desactiva el **booleano**de cada uno de los nuevos nodos **Set Enabled** (la casilla que está junto al ícono de círculo morado).

[Image: image]

Vas a cambiar la función del script para que, cada vez que el usuario seleccione un botón en la aplicación, se desactiven los Mesh Renderers de todos los pares de anteojos. No es posible desactivar todos los Mesh Renderers al mismo tiempo, por lo que debes hacerlo mediante una secuencia. Sin embargo, el script visual se ejecutará tan rápidamente que parecerá como si todos los Mesh Renderers se desactivaran al mismo tiempo.

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

**4.**Organiza los conjuntos de nodos**Find With Tag** y **Set Enabled** para que todos estén en la misma fila horizontal. No importa el orden, pero asegúrate de mantener juntos los pares de nodos existentes.

**5.**Conecta la salida de flujo del primer nodo **Set Enabled** a la entrada de flujo del segundo nodo **Find with Tag**.

**6.**Conecta la salida de flujo del segundo nodo **Set Enabled**a la entrada de flujo del tercer nodo **Find with Tag**.

[Image: image]

A continuación, debes integrar esta secuencia en las demás funciones del gráfico.

Marcar paso como completado

## 3. ¿Cómo crear un evento personalizado?

Q&A (0)

La secuencia para desactivar todos los Mesh Renderers se debe llevar a cabo justo después de que el usuario seleccione un botón, pero antes de que el gráfico busque el Mesh Renderer que se debe activar. Por lo tanto, la función que acabas de crear se debe colocar entre los nodos **On Button Click (Al hacer clic en el botón)** y **Find with Tag**.

[Image: image]

Sin embargo, la nueva secuencia ya es más larga que los demás gráficos que has creado y, si la integras en el gráfico de cada botón, la ventana Graph Editor se verá saturada y difícil de entender. Además, esta secuencia sería idéntica en los tres gráficos. En estos casos, en lugar de duplicar muchas veces los nodos, puedes convertir la secuencia en un evento personalizado. Luego, puedes llamar a ese evento como si fuera un solo nodo en los demás gráficos.

Mira el video o sigue estas instrucciones para integrar un evento personalizado en la secuencia de nodos:

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

**1.** En la ventana Graph Editor, abre el buscador de concordancias y agrega un nodo **Custom Event (Evento personalizado)**.

[Image: image]

El nodo **Custom Event** admite dos entradas de tipos de datos diferentes (GameObject o secuencia de caracteres), y debes utilizar una de ellas. Utilizarás una secuencia de caracteres para darle un nombre al evento personalizado, con el que podrás llamarlo en el siguiente paso.

**2.**En el campo que admite una **secuencia de caracteres** del nodo **Custom Event**, escribe «DisableRenderers».

**3.**Conecta la salida de flujo (ícono de flecha) del nodo **Custom Event** a la entrada de flujo (ícono de flecha) del primer nodo **Find with Tag** de la secuencia.

[Image: image]Marcar paso como completado

## 4. ¿Cómo agregar el evento personalizado a los gráficos de los botones?

Q&A (0)

Ahora tienes un evento al que puedes llamar cuando necesites ejecutarlo. Para llamarlo, utilizarás un nodo **Event Trigger (Desencadenador de evento)**:

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

**1.**En la ventana Graph Editor, abre el buscador de concordancias y agrega un nodo **Custom Event Trigger**.

[Image: image]

Imagina que el nodo **Custom Event Trigger** es como un enlace. Cuando llames a este nodo, iniciará la secuencia de nodos del evento personalizado con el que está asociado.

**2.** En la entrada de secuencia de caracteres del nodo **Trigger** (ícono de círculo naranja), escribe «DisableRenderers». Al igual que el nodo **Custom Event**, el nodo **Trigger (Desencadenador)** admite dos entradas de tipos de datos diferentes y debes utilizar una de ellas. Esta entrada de datos debe ser la misma que la asociada con el evento personalizado.

**Importante**: debes escribir DisableRenderers exactamente igual (con las mismas mayúsculas y minúsculas) en los nodos **Custom Event** y **Trigger**.

**3.**En el gráfico del primer botón, haz clic derecho en la salida de flujo del nodo **On Button Click** para desconectar el flujo entre los nodos **On Button Click** y **Find With Tag**.

Consejo: haz clic derecho en los conectores para desconectar los nodos.

**4.**Mueve los nodos **Get Variable (Obtener variable)** y **On Button Click** a fin de hacer espacio para el nodo **Trigger**.

**5.**Coloca el nodo **Trigger**en el espacio y conecta la salida de flujo del nodo **On Button Click** a la entrada de flujo del nodo **Trigger**.

**6.**Conecta la salida de flujo del nodo **Trigger** a la entrada de flujo del nodo **Find With Tag**.

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

**7.**Duplica el nodo **Trigger** otras dos veces.

**8.**Repite los pasos anteriores en los gráficos de los otros dos botones.

[Image: image]Marcar paso como completado

## 5. ¿Cómo probar la actualización?

Q&A (0)

Ahora que tienes implementada la nueva función de la aplicación, llegó el momento de probarla:

**1.**Selecciona el botón **Play (Reproducir)** para probar los cambios de la aplicación en el Editor de Unity.

**2.**Selecciona cada botón y revisa que los anteojos cambien de la manera esperada.

**3.**Vuelve a seleccionar el botón **Play**para salir del modo Play.

**4.**En la ventana Hierarchy, selecciona el GameObject **GlassesGroup** y márcalo como inactivo en la ventana Inspector.

**5.**  Guarda la Scene (Escena).

**6.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**7.**  Asegúrate de que el dispositivo esté conectado y selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

**8.** La aplicación se abrirá automáticamente en el dispositivo. Ahora, cada vez que selecciones uno de los botones de la interfaz de usuario, el gráfico desactivará todos los Mesh Renderers y luego activará el que esté asociado con el botón que seleccionaste. ¡Excelente!

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

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o[iOS.](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641)

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

¡La función para cambiar de malla en la aplicación está completa! En este tutorial, aprendiste a crear grupos de scripts visuales reutilizables, llamados eventos, a los que puedes llamar desde diferentes ubicaciones de tus gráficos. En el siguiente tutorial, comenzarás a crear la función de cambio de material de los anteojos, con la que el usuario podrá elegir diferentes colores para los anteojos.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
