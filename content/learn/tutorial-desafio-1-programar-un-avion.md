[Image: image]

# Desafío 1: Programar un avión

Tutorial

Beginner

+10XP

30 mins

7

(1211)

Unity Technologies

[Image: Desafío 1: Programar un avión]Summary

**Descripción general del desafío:**

Utiliza las habilidades que has aprendido en el simulador de conducción para pilotar un avión y esquivar obstáculos en el cielo. Para controlar el ángulo de inclinación del avión hacia arriba y hacia abajo, tendrás que utilizar las teclas de arriba y abajo. También tendrás que hacer que la cámara siga al avión para poder mantenerlo a la vista.

**Resultado del desafío:**

- El avión avanza a una velocidad constante.
- Las flechas arriba y abajo inclinan la punta del avión hacia arriba y hacia abajo.
- La cámara sigue al avión mientras vuela.

Resources

- [Challenge 1 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/913574fa-af65-4d95-abe8-d90282b27a83/Challenge%201%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954551321)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general del desafío 1

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

- Abre el proyecto **Prototype 1.**
- Haz clic para descargar los [archivos de inicio del Challenge 1](https://connect-prd-cdn.unity.com/20210506/913574fa-af65-4d95-abe8-d90282b27a83/Challenge%201%20-%20Starter%20Files.zip?_ga=2.201148398.1186801097.1620052249-59568313.1601905412), **extrae** la carpeta comprimida, y luego **importa** el .unitypackage en el proyecto.
Si olvidas cómo hacer esto, revisa la [Lección 1.1, paso 2.](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)
- En la carpeta *Project Window > Assets > Challenge 1 > **Instructions***, utiliza el video demostrativo Challenge 1 como guía para completarlo.

Marcar paso como completado

## 2. Advertencia

Q&A (0)

Cuando importes el desafío a tu proyecto, se **supone que tenga errores**.

El propósito del desafío es que corrijas esos errores, los cuales se mencionan a continuación. También hay pistas en la parte inferior de la página para ayudarte si te quedas atascado.

Si no puedes arreglar los errores y prefieres eliminar los archivos del desafío del proyecto, en la ventana Project, haz clic derecho en**Assets > **Challenge 1**y selecciona **Delete (Eliminar).**

¡Buena suerte!

Marcar paso como completado

## 3. El avión se mueve hacia atrás

Q&A (0)

- **Haz que el avión vaya hacia delante.**

Marcar paso como completado

## 4. El avión se mueve demasiado rápido

Q&A (0)

- **Reduce la velocidad del avión a una más manejable.**

Marcar paso como completado

## 5. El avión se inclina automáticamente

Q&A (0)

- **Haz que el avión se incline solamente si el usuario presiona las teclas arriba y abajo**

Marcar paso como completado

## 6. La cámara está frente al avión

Q&A (0)

- **Reubícala para que esté a un lado del avión.**

Marcar paso como completado

## 7. La cámara no sigue al avión

Q&A (0)

- **Haz que la cámara siga al avión.**

Marcar paso como completado

## 8. Bono: la hélice del avión no gira

Q&A (0)

- **Crea un script que haga girar la hélice del avión.**

Marcar paso como completadoPaso opcional

## 9. Pistas

Q&A (0)

- **Haz que el avión vaya hacia delante.***Pista: Vector3.back hace que un objeto se mueva haca atrás, Vector3.forward lo hace que vaya hacia delante.*
- **Reduce la velocidad del avión a una más manejable.*****Pista: si multiplicas el valor por Time.deltaTime, cambiará de 1x/frame a 1x/second.*
- **Haz que el avión se incline solo cuando el usuario pulse las teclas arriba y abajo.*****Pista: en PlaneController.cs, en Update(), el valor de verticalInput está asignado, pero nunca se usa cuando se llama Rotate().*
- **Reubica la cámara para que esté a un lado del avión.*****Pista: para cambiar la posición de la cámara, prueba X=30, Y=0, Z=10 y para la rotación de la cámara, prueba X=0, Y=-90, Z=0.*
- **Haz que la cámara siga al avión.*****Pista: en FollowPlane.cs, ni la variable del avión ni la de desplazamiento tienen un valor asignado, asigna la variable del avión en el inspector de la cámara, y asigna offset = new Vector3(30, 0, 10) en el código.*
- **Bono: haz que gire la hélice.*****Pista: hay un objeto secundario llamado «Propeller» dentro del avión, debes crear un nuevo script llamado «SpinPropellerX.cs» y hacer que gire en cada frame alrededor del eje Z.*

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
