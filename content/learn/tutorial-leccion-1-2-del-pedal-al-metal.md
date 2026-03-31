[Image: image]

# Lección 1.2: Del pedal al metal

Tutorial

Beginner

+10XP

70 mins

46

(1578)

Unity Technologies

[Image: Lección 1.2: Del pedal al metal]Summary

**Descripción general:**

En esta lección haremos que tu simulador de conducción cobre vida. Primero escribirás tus primeras líneas de código en C#, cambiando la posición del vehículo y permitiéndole avanzar. A continuación, añadirás componentes de física a tus objetos para que puedan encontrarse entre sí. Por último, aprenderás a duplicar objetos en Hierarchy y a ubicarlos en la carretera.

**Resultado del proyecto:**

Dispondrás de un vehículo en movimiento con su propio Script de C# y una carretera llena de obstáculos, donde todos podrán encontrarse entre sí utilizando componentes de física.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. ¿Cómo crear y aplicar tu primer script?

Q&A (0)

> *Para comenzar esta lección, crearemos nuestro primer Script de C# que controlará el movimiento del vehículo.*

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

1. En la ventana Project, **h*az clic derecho >* *Create > Folder*** y pónle el nombre «Scripts».
2. En la carpeta «Scripts»,**h*az clic derecho  > Create >*** ***C# Script*** y pónle el nombre «PlayerController».
3. **Arrastra** tu nuevo *script* hasta el **objeto Vehicle (Vehículo).**
4. **Haz clic** en el objeto Vehicle para asegurarte de que se añadió como **Componente** en el Inspector.

Marcar paso como completado

## 2. ¿Cómo agregar un comentario en el método Update()?

Q&A (0)

> *Para lograr que el vehículo se mueva, primero tenemos que abrir nuestro nuevo script y familiarizarnos con el entorno de desarrollo.*

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

1. **Haz doble clic** en el *script* para abrirlo en **Visual Studio.**
2. En el método ***Update(),*** agrega como comentario:  ***// Move the vehicle forward*.**

[Image: image]Marcar paso como completado

## 3. ¿Cómo darle al vehículo movimiento hacia adelante?

Q&A (0)

> *Ahora que contamos con el comentario que dice lo que VAMOS a programar, tenemos que escribir una línea de código que haga que nuestro vehículo avance.*

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

1. Debajo de tu nuevo comentario, escribe ***transform.tr***y selecciona **Translate (Desplazar)** en el menú de autocompletar.
2. Escribe**(**, agrega **0, 0, 1** entre paréntesis y completa la línea con un punto y coma (**;**).
3. Presiona **Ctrl/Cmd + S** para guardar tu *script*, luego ejecuta el juego para probarlo.

[Image: image]Marcar paso como completado

## 4. ¿Cómo usar Vector3 para moverte hacia adelante?

Q&A (0)

> *Programamos el vehículo para que se moviera en el eje Z, pero hay una forma más sencilla de codificarlo.*

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

1. **Elimina** 0, 0, 1 del código que escribiste y autocomplétalo para **reemplazarlo** con ***Vector3.forward***.

[Image: image]Marcar paso como completado

## 5. ¿Cómo modificar la velocidad del vehículo?

Q&A (0)

> *Ahora, la velocidad del vehículo está fuera de control. Debemos cambiar el código para arreglarlo.*

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

1. Agrega**** Time.deltaTime*** y ejecuta el juego.
2. Añade **** 20*** y ejecuta el juego.

[Image: image]Marcar paso como completado

## 6. ¿Cómo agregar un componente RigidBody a los objetos?

Q&A (0)

> *Ahora, el vehículo pasa a través la caja. Si queremos que sea más realista, tenemos que añadir física.*

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

1. Selecciona el **Vehicle** y, en Hierarchy, haz clic en **Add Component (Agregar componente)** y selecciona **RigidBody.**
2. Selecciona el **Obstacle (Obstáculo)** y, en Hierarchy, haz clic en **Add Component** y selecciona **RigidBody.**
3. En las propiedades del componente RigidBody, aumenta la **Mass (Masa)** del Vehicle y el Obstacle a lo que deberían pesar en **kilogramos** y vuelve a probar.

Marcar paso como completado

## 7. ¿Cómo duplicar y ubicar los obstáculos?

Q&A (0)

> *Por último, debemos duplicar el obstáculo para hacer que la carretera sea más desafiante para el vehículo.*

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

1. Haz clic y arrastra el Obstacle hasta el **final de la lista** en Hierarchy.
2. Presiona **Ctrl/Cmd + D** para duplicar el Obstacle y moverlo en el **eje Z**.
3. Repite el proceso unas cuantas veces para crear más obstáculos.
4. Luego de duplicarlo unas cuantas veces, selecciona uno en Hierarchy y **mantén presionado Ctrl** **+ clic**para seleccionar múltiples Obstacles, luego **duplícalos**.

Marcar paso como completado

## 8. Resumen de la lección

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

Nueva funcionalidad

- El vehículo se mueve por la carretera a una velocidad constante.
- Cuando el vehículo encuentra los obstáculos, estos vuelan por los aires.

Nuevos conceptos y habilidades

- Scripts de C#
- Inicio frente a Update
- Comentarios
- Métodos
- Aprobar parámetros
- Time.deltaTime
- Multiplicar (*) operadores
- Componentes
- Colisionador y RigidBody

Siguiente lección

- Añadiremos código a nuestra cámara para que siga al jugador mientras conduce por la carretera.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
