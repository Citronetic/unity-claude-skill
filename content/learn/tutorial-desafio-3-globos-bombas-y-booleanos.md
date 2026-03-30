[Image: image]

# Desafío 3: Globos, bombas y booleanos

Tutorial

Beginner

+10XP

60 mins

3

(475)

Unity Technologies

[Image: Desafío 3: Globos, bombas y booleanos]Summary

**Descripción general:**

Aplica tus conocimientos de física, fondos con desplazamiento lateral y efectos especiales a un globo que flota a través de un pueblo mientras recolecta *tokens*y esquiva explosivos. Tendrás que resolver muchos problemas en este proyecto porque tiene una gran cantidad de errores.

**Resultado del desafío:**

- El globo flota hacia arriba cuando el jugador mantiene presionada la barra espaciadora.
- El fondo se repite sin errores y simula el movimiento del globo.
- Se generan bombas y*tokens* monetarios de manera aleatoria a intervalos.
- Cuando colisionas con los *tokens*monetarios, hay un efecto de sonido y partículas.
- Cuando colisionas con la bomba, hay una explosión y el fondo se detiene.

Resources

- [Challenge 3 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/13b7b5f4-501e-43a6-9e67-cc9f71a7e406/Challenge%203%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954552665)

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

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

- Abre tu proyecto **Prototype 3.**
- Haz clic para descargar los [archivos de inicio del Desafío 3](https://connect-prd-cdn.unity.com/20210506/13b7b5f4-501e-43a6-9e67-cc9f71a7e406/Challenge%203%20-%20Starter%20Files.zip?_ga=2.230508380.1186801097.1620052249-59568313.1601905412), **extrae** la carpeta comprimida y después **importa** el .unitypackage a tu proyecto. Si olvidaste cómo hacerlo, consulta la [Lección 1.1. Paso 2.](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)
- En la carpeta *Project Window > Assets > Challenge 3 > **Instructions*** usa el video Desafío 3. Resultado como guía para completar el desafío.

Marcar paso como completado

## 2. Advertencia

Q&A (0)

Cuando importas el desafío a tu proyecto, se **supone que debe tener errores**.

El propósito del desafío es que corrijas esos errores, los cuales se mencionan a continuación. También hay pistas en la parte inferior de la página para ayudarte si te atascas.

Si no puedes corregir los errores y quieres eliminar de tu proyecto los archivos del desafío, en la ventana Project haz clic derecho en Assets > **Challenge 3**y selecciona **Delete.**

¡Buena suerte!

Marcar paso como completado

## 3. El jugador no puede controlar el globo

Q&A (0)

- El globo debe flotar hacia arriba cuando el jugador presiona la barra espaciadora.

Marcar paso como completado

## 4. El fondo solo se mueve cuando el juego termina

Q&A (0)

- El fondo debe moverse al inicio y *detenerse* cuando el juego termine.

Marcar paso como completado

## 5. No se genera ningún objeto

Q&A (0)

- Haz que se generen objetos bomba o monetarios cada ciertos segundos.

Marcar paso como completado

## 6. Los fuegos artificiales aparecen a un costado del globo

Q&A (0)

- Haz que los fuegos artificiales se muestren en la posición del globo.

Marcar paso como completado

## 7. El fondo no se repite correctamente

Q&A (0)

- Haz que el fondo se repita sin errores.

Marcar paso como completado

## 8. Extra: El globo puede flotar demasiado alto

Q&A (0)

- Evita que el jugador pueda hacer flotar su globo demasiado alto.

Marcar paso como completado

## 9. Extra: El globo puede atravesar el suelo

Q&A (0)

- Haz que parezca que el globo rebota en el suelo para evitar que salga por la parte inferior de la pantalla. También debe haber un efecto de sonido cuando esto ocurra.

Marcar paso como completadoPaso opcional

## 10. Pistas

Q&A (0)

- **El globo debe flotar hacia arriba mientras el jugador presiona la barra espaciadora.***Pista: Hay un error «NullReferenceExcepton» en la variable Rigidbody del jugador; debe asignarse en Start() con el método GetComponent<>.*
- **El fondo debe moverse al inicio y detenerse cuando el juego termine.***Pista: En MoveLeftX.cs, los objetos solo deben desplazarse a la izquierda cuando el juego NO ha terminado.*
- **Haz que se generen bombas y objetos monetarios cada ciertos segundos.***Pista: Hay un mensaje de error que dice «Trying to Invoke method: SpawnManagerX.PrawnsObject couldn't be called»; la ortografía es importante.*
- **Haz que los fuegos artificiales se muestren en la posición del globo.***Pista: La partícula de los fuegos artificiales es un objeto secundario del jugador, pero aun así su ubicación debe definirse para que sea la misma.*
- **Haz que el fondo se repita sin errores.***Pista: La variable repeatWidth debe ser la mitad del ancho del fondo, no la mitad del alto.*
- **Extra: Evita que el jugador pueda hacer flotar su globo demasiado alto.***Pista: Agrega un booleano para verificar que el globo esté en isLowEnough, después solo permite que el jugador pueda agregar fuerza ascendente si ese booleano es true.*
- **Extra: Haz que el globo parezca rebotar en el suelo para evitar que salga por la parte inferior de la pantalla. También debe haber un efecto de sonido cuando esto ocurra.***Pista: Descubre una forma de probar si el globo colisiona con el suelo; de ser así, agrega una fuerza que lo impulse hacia arriba.*

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
