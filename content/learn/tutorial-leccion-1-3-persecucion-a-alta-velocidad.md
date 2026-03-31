[Image: image]

# Lección 1.3: Persecución a alta velocidad

Tutorial

Beginner

+10XP

50 mins

24

(1300)

Unity Technologies

[Image: Lección 1.3: Persecución a alta velocidad]Summary

**Descripción general:**

Mantén la vista en el camino. En esta lección vas a programar un nuevo Script de C# para tu cámara, que le permitirá seguir al vehículo por la carretera y ofrecer al jugador una vista adecuada de la Escena. Para hacer esto, debes utilizar un concepto muy importante en la programación: las variables*.*

**Resultado del proyecto:**

La cámara seguirá al vehículo por la carretera en la Escena, permitiendo que el jugador sepa qué sucede.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. ¿Cómo agregar una variable de velocidad al vehículo?

Q&A (0)

> *Necesitamos una forma más fácil de cambiar la velocidad del vehículo y hacer que sea accesible desde el Inspector. Para hacerlo, necesitamos algo que se denomina variable.*

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

1. En PlayerController.cs, añade ***public float speed = 5.0f;***  en la parte superior de la **clase.**
2. Reemplaza el **valor** **speed** en el método Translate con la **variable** **speed**, y haz una prueba.
3. **Guarda** el*script*y edita el valor de speed en el **Inspector** para conseguir la velocidad que quieras.

[Image: image]Marcar paso como completado

## 2. ¿Cómo crear un nuevo script para la cámara?

Q&A (0)

> *La cámara se encuentra bloqueada en una posición. Si queremos que siga al jugador, tenemos que hacer un nuevo*script *para la cámara.*

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

1. Crea un nuevo **Script de C#** denominado FollowPlayer y adjúntalo a la **cámara.**
2. Añade ***public GameObject player;*** en la parte superior del Script.
3. Selecciona la **cámara principal y** **arrastra** el objeto jugador a la **variable vacía de jugador**en el Inspector.
4. En ***Update()***, asigna la posición de la cámara a la posición del jugador y haz una prueba.

[Image: image]Marcar paso como completado

## 3. ¿Cómo agregar un desplazamiento a la posición de la cámara?

Q&A (0)

> *Tenemos que mover la posición de la cámara por encima del vehículo para que el jugador pueda tener una vista adecuada del juego.*

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

1. En la línea del método Update, agrega ***+ new Vector3(0, 5, -7)***y haz una prueba

[Image: image]Marcar paso como completado

## 4. ¿Cómo convertir el desplazamiento en una variable Vector3?

Q&A (0)

> *Arreglamos la posición de la cámara, pero podríamos querer cambiarla más tarde. Necesitamos una forma más fácil de acceder al desplazamiento.*

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

1. En la parte superior de **FollowPlayer.cs**, escribe ***private Vector3 offset;*.**
2. Copia el código ***new Vector3()*** y **asígnalo** a esa variable.
3. **Reemplaza** el código original con la ***variable*** offset.
4. **Haz una prueba** y **guarda.**

[Image: image]Marcar paso como completado

## 5. ¿Cómo suavizar la cámara con LateUpdate?

Q&A (0)

> *Puede que hayas notado que la cámara está algo inestable mientras el auto circula por la carretera: vamos a solucionarlo.*

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

1. Prueba tu prototipo para ver el movimiento de la cámara cuando el vehículo se desplaza.
2. En **FollowPlayer.cs**, reemplaza ***Update()*** con ***LateUpdate()*.**
3. **Guarda** y **prueba** si el movimiento de la cámara es más estable.

[Image: image]Marcar paso como completado

## 6. ¿Cómo editar el color de tinte del modo de juego?

Q&A (0)

> *Si vamos a crear y editar variables, debemos asegurarnos de no hacer cambios accidentalmente en el «Modo juego»*

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

1. En el menú superior, *ve a Edit > Preferences* **(Windows)** o *Unity > Preferences* **(Mac)**.
2. En el menú izquierdo, elige **Colors (Colores)**, luego edita el color de **Playmode tint (Tinte del modo de juego)** para tener un *color* diferente.
3. **Inicia** tu proyecto para probarlo, luego cierra tus preferencias.

Marcar paso como completado

## 7. Resumen de la lección

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

- La cámara sigue al vehículo por la carretera con una determinada distancia de desplazamiento

Nuevos conceptos y habilidades

- Variables
- Tipos de datos
- Modificadores de acceso
- Declarar e inicializar variables

Siguiente lección

- En la próxima lección, añadiremos nuestras últimas líneas de código para tomar el control de nuestro auto y poder conducirlo por la Escena.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
