[Image: image]

# Desafío 2: Jugar a traer la pelota

Tutorial

Beginner

+10XP

60 mins

7

(750)

Unity Technologies

[Image: Desafío 2: Jugar a traer la pelota]Summary

**Descripción general:**

Utiliza tus habilidades para generar números aleatorios y arreglos para programar este desafío en el que caen pelotas del cielo aleatoriamente y tienes que enviar a tu perro a atraparlas antes de que lleguen al suelo. Para completar este reto, tendrás que asegurarte de que tus variables se han asignado correctamente, tus enunciados if se han programado correctamente, tus colisiones se detectan perfectamente y que los objetos se generan de forma aleatoria.

**Resultado del desafío:**

- Se genera una bola aleatoria (de 3) en una posición X aleatoria sobre la pantalla.
- Cuando el usuario pulsa la barra espaciadora, aparece un perro que corre para atrapar la pelota.
- Si el perro se encuentra con la pelota, esta se destruye.
- Si la pelota toca el suelo, se muestra un mensaje de depuración «Game Over».
- Los perros y las pelotas se eliminan de la Escena cuando salen de la pantalla.

Resources

- [Challenge 2 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/b167f1c0-bbb1-4537-9b9b-c9e599ed16a0/Challenge%202%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954550918)

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

- Abre el proyecto **Prototype 2.**
- Haz clic para descargar los [archivos de inicio del Challenge 2](https://connect-prd-cdn.unity.com/20210506/b167f1c0-bbb1-4537-9b9b-c9e599ed16a0/Challenge%202%20-%20Starter%20Files.zip?_ga=2.234701662.1186801097.1620052249-59568313.1601905412), **extrae** la carpeta comprimida, y luego **importa** el .unitypackage en el proyecto. Si olvidas cómo hacer esto, revisa la [Lección 1.1, paso 2.](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)
- En la carpeta *Project Window > Assets > Challenge 2 > **Instructions***, utiliza el video demostrativo Challenge 2 como guía para completarlo.

Marcar paso como completado

## 2. Advertencia

Q&A (0)

Cuando importes el desafío a tu proyecto, se **supone que tenga errores**.

El propósito del desafío es que corrijas esos errores, los cuales se mencionan a continuación. También hay pistas en la parte inferior de la página para ayudarte si te quedas atascado.

Si no puedes arreglar los errores y prefieres eliminar los archivos del desafío del proyecto, en la ventana Project, haz clic derecho en Assets > **Challenge 2**y selecciona **Delete (Eliminar).**

¡Buena suerte!

Marcar paso como completado

## 3. Se generan perros en la parte superior de la pantalla

Q&A (0)

- Haz que se generen pelotas en la parte superior de la pantalla

Marcar paso como completado

## 4. El jugador genera pelotas verdes en lugar de perros

Q&A (0)

- Haz que el jugador genere perros

Marcar paso como completado

## 5. Las pelotas se destruyen en cualquier lugar cerca del perro

Q&A (0)

- Las pelotas solo deben destruirse cuando entren en contacto directo con un perro

Marcar paso como completado

## 6. No se está eliminando nada afuera de la pantalla

Q&A (0)

- Las pelotas se deben destruir cuando salen de la parte inferior de la pantalla y los perros se deben destruir cuando salen del lado izquierdo de la pantalla

Marcar paso como completado

## 7. Solo se genera un tipo de pelota

Q&A (0)

- Las pelotas 1, 2 y 3 deberían aparecer aleatoriamente

Marcar paso como completado

## 8. Bono: el intervalo de generación siempre es el mismo

Q&A (0)

- Haz que el intervalo de generación sea un valor aleatorio entre 3 y 5 segundos

Marcar paso como completado

## 9. Bono: el jugador puede presionar varias veces la barra espaciadora

Q&A (0)

- El jugador solo podrá generar un nuevo perro después de un cierto periodo de tiempo

Marcar paso como completadoPaso opcional

## 10. Pistas

Q&A (0)

- **Haz que las pelotas se generen desde la parte superior de la pantalla***Pista: haz clic en el objeto Gestor de generación y mira en el arreglo «Ball Prefabs».*
- **Haz que el jugador genere perros.***Pista: haz clic en el objeto Jugador y mira la variable «Dog Prefab».*
- **Las pelotas solo deben destruirse cuando entren en contacto directo con un perro.***Pista: comprueba el Box Collider en el valor Prefab del perro.*
- **Las pelotas se deben destruir cuando salgan de la parte inferior de la pantalla y los perros se deben destruir cuando salgan del lado izquierdo de la pantalla.***Pista: en el script DestroyOutOfBounds, comprueba las variables lowerLimit y leftLimit, los signos mayor que y menor que, y la posición (X, Y y Z) que se está comprobando.*
- **Las pelotas 1, 2 y 3 deberían aparecer aleatoriamente.***Pista: en el método SpawnRandomBall(), debes definir una nueva variable aleatoria de índice int, y luego incorporar esa variable en la llamada colocada.*
- **Haz que el intervalo de generación sea un valor aleatorio entre 3 y 5 segundos.***Pista: establece el valor de spawnInterval a un nuevo número aleatorio entre 3 y 5 segundos en el método SpawnRandomBall.*

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
