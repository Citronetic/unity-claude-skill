[Image: image]

# Lección 1.4: Al volante

Tutorial

Beginner

+10XP

50 mins

8

(1268)

Unity Technologies

[Image: Lección 1.4: Al volante]Summary

**Descripción general:**

En esta lección, tenemos que salir a la carretera y controlar el vehículo. Para ello, tenemos que detectar cuándo el jugador pulsa las teclas de dirección, y luego acelerar y girar el vehículo según esa entrada. Empleando nuevos métodos, vectores y variables, harás que el vehículo avance o retroceda y gire de izquierda a derecha.

**Resultado del proyecto:**

Cuando el jugador pulse las flechas arriba/abajo, el vehículo se moverá hacia delante y hacia atrás. Cuando el jugador pulse las teclas izquierda/derecha, el vehículo va a girar.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. ¿Cómo permitir que el vehículo se mueva hacia la izquierda o derecha?

Q&A (0)

> *Hasta ahora, el vehículo solo podía avanzar en línea recta por la carretera. Necesitamos que se pueda mover de izquierda a derecha para evitar los obstáculos.*

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

1. En la parte superior de PlayerController.cs, añade ***public float turnSpeed;*** como variable.
2. En ***Update()***, añade  ***transform.Translate(Vector3.right * Time.deltaTime * turnSpeed);*.**
3. Inicia el juego y utiliza el ***deslizador de la variable*** **turnSpeed** para mover el vehículo de izquierda a derecha.

[Image: image]Marcar paso como completado

## 2. ¿Cómo hacer que el jugador controle el movimiento de izquierda a derecha según lo que presione?

Q&A (0)

> *Actualmente, solo podemos controlar el movimiento de izquierda a derecha del vehículo en el Inspector. Tenemos que conceder algún poder al jugador y permitirle controlar ese movimiento por sí mismo.*

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

1. Desde el menú superior, haz clic en **Edit***>***Project Settings**, selecciona **Input Manager** en la barra lateral y luego despliega **Axes** para explorar las entradas.
2. En **PlayerController.cs**, añade ***public float horizontalInput*** como variable.
3. En ***Update***, asigna ***horizontalInput = Input.GetAxis("Horizontal");***, luego haz una prueba para verlo en el Inspector.
4. Añade la variable ***horizontalInput*** a la izquierda y derecha del **método Desplazar** para ganar control del vehículo.
5. En el Inspector, edita las variables ***turnSpeed*** y ***speed*** para corregir la sensibilidad.

[Image: image]Marcar paso como completado

## 3. ¿Cómo tomar el control de la velocidad del vehículo?

Q&A (0)

> *Hemos permitido que el jugador controle el volante, pero también queremos que controle el acelerador y el freno.*

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

1. Define ***forwardInput*** como una nueva variable «public».
2. En ***Update***, asigna ***forwardInput = Input.GetAxis("Vertical");*.**
3. Añade la variable ***forwardInput*** al método **forward Translate**, y luego haz una prueba.

[Image: image]Marcar paso como completado

## 4. ¿Cómo hacer que el vehículo rote en vez de deslizarse?

Q&A (0)

> *Hay algo extraño sobre el movimiento del vehículo... se desliza de izquierda a derecha en vez de girar. Hagamos que el vehículo gire como un auto real.*

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

1. En ***Update***, llama ***transform.Rotate(Vector3.up**, **horizontalInput)*** y haz una prueba.
2. **Elimina** la línea de código **translates Right**, luego haz una prueba.
3. Añade **** turnSpeed * Time.deltaTime*** y haz una prueba.

[Image: image]Marcar paso como completado

## 5. ¿Cómo limpiar el código y la Hierarchy?

Q&A (0)

> *Agregamos muchas cosas nuevas en esta lección. Antes de continuar y para ser más profesionales, necesitamos limpiar nuestros scripts y la Hierarchy para organizarlos mejor.*

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

1. En Hierarchy, *haz clic derecho > Create Empty* y renómbralo como «Obstacles», luego **arrastra** todos los obstáculos adentro.
2. **Inicializa** los valores de las variables en **PlayerController**, luego haz que todas las variables sean **private** (excepto por la variable **player**).
3. Usa ***//*** para agregar **comentarios** a cada sección del código.

[Image: image]Marcar paso como completado

## 6. Resumen de la lección

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

- Cuando el jugador presiona las teclas arriba y abajo, el vehículo se mueve hacia adelante y hacia atrás.
- Cuando el jugador presiona las teclas izquierda y derecha, el vehículo gira.

Nuevos conceptos y habilidades

- Objetos vacíos
- Recibir datos del usuario
- Desplazar frente a rotar

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
