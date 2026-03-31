[Image: image]

# Lección 2.1: Posición del jugador

Tutorial

Beginner

+10XP

60 mins

14

(887)

Unity Technologies

[Image: Lección 2.1: Posición del jugador]Summary

**Descripción general:**

Al inicio de esta unidad, crearás un nuevo proyecto para tu segundo prototipo y harás funcionar el movimiento básico del jugador. Primero elegirás qué personaje quieres, con qué tipos de animales te gustaría interactuar y qué comida te gustaría darles. Le darás al jugador un movimiento básico de lado a lado como hiciste en el prototipo 1, pero luego usarás enunciados «if-then» para mantener al jugador dentro de los límites.

**Resultado del proyecto:**

El jugador podrá moverse de izquierda a derecha en la pantalla según las pulsaciones de las teclas izquierda y derecha del usuario, pero no podrá salir de la zona de juego por ningún lado.

Resources

- [Prototype 2 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210507/bfd26de3-a68a-4a16-8cf6-8eacf2bb7f75/Prototype%202%20-%20Starter%20Files.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035301102)

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. ¿Cómo crear un proyecto nuevo para el prototipo 2?

Q&A (0)

> *Lo primero que tenemos que hacer es crear un nuevo proyecto e importar los archivos de inicio del prototipo 2.*

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

1. Abre **Unity Hub** y crea un proyecto «Prototype 2» vacío en la carpeta de este curso y en la versión correcta de Unity.
Si olvidaste cómo hacerlo, consulta las instrucciones en la [Lección 1.1, paso 1](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cb7a1acedbc2a10b7261d15)
2. Haz clic para descargar [Prototype 2 Starter Files](https://connect-prd-cdn.unity.com/20210507/bfd26de3-a68a-4a16-8cf6-8eacf2bb7f75/Prototype%202%20-%20Starter%20Files.zip?_ga=2.29238268.1186801097.1620052249-59568313.1601905412), **extrae** la carpeta comprimida y luego **importa** el .unitypackage a tu proyecto.
Si olvidaste cómo hacerlo, consulta las instrucciones en la [Lección 1.1, paso 2.](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)
3. Desde la ventana Project, abre la **Escena del prototipo 2**y **elimina** la Escena de muestra.
4. En la parte superior derecha del Editor de Unity, cambia tu **Layout** por defecto a tu Layout personalizado.

Marcar paso como completado

## 2. ¿Cómo añadir al jugador, los animales y la comida?

Q&A (0)

> *Vamos a colocar todos nuestros objetos en la Escena, incluyendo al jugador, los animales y la comida.*

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

1. Si quieres, arrastra otro **material** desde *Course Library > Materials* hacia el objeto del suelo.
2. Arrastra 1 **humano**, 3 **animales** y 1 **alimento** hasta Hierarchy.
3. Renombra el personaje «Player», luego **reubica** los animales y la comida para que puedas verlos.
4. Ajusta la **escala** XYZ de la comida para que puedas verla fácilmente desde arriba.

Marcar paso como completado

## 3. ¿Cómo obtener la entrada horizontal del usuario?

Q&A (0)

> *Si queremos mover el jugador de izquierda a derecha, necesitamos una variable que siga la entrada del usuario.*

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

1. En la carpeta **Assets** crea una carpeta «Scripts» y un Script denominado «PlayerController» dentro.
2. **Adjunta** el Script al jugador para abrirlo.
3. En la parte superior de PlayerController.cs, define un nuevo ***public float horizontalInput*.**
4. En ***Update()***, establece ***horizontalInput =  Input.GetAxis(“Horizontal”)***, y luego haz una prueba para asegurarte de que funciona en el Inspector.

[Image: image]Marcar paso como completado

## 4. ¿Cómo mover al jugador de izquierda a derecha?

Q&A (0)

> *Tenemos que utilizar la entrada horizontal para desplazar al jugador a la izquierda y a la derecha.*

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

1. Define un nuevo ***public float speed = 10.0f;*.**
2. En ***Update()***, desplaza al jugador de lado a lado con base en ***horizontalInput*** y a ***speed*.**

[Image: image]Marcar paso como completado

## 5. ¿Cómo mantener al jugador dentro de los límites?

Q&A (0)

> *Tenemos que evitar que el jugador se salga de la pantalla con un enunciado condicional.*

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

1. En ***Update()***, escribe un enunciado**condicional**para comprobar si la posición izquierda X del jugador es **menor que** un valor dado.
2. En el enunciado condicional, establece la posición del jugador a su posición actual, pero con una **ubicación X fija.**

[Image: image]Marcar paso como completado

## 6. ¿Cómo limpiar el código y las variables?

Q&A (0)

> *Tenemos que hacer que esto funcione también en el lado derecho, y luego limpiar nuestro código.*

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

1. Repite este proceso para el **lado derecho**de la pantalla.
2. Define una nueva variable ***xRange*** y sustituye los valores codificados por estos.
3. Agrega **comentarios** a tu código.

[Image: image]Marcar paso como completado

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

- El jugador puede moverse de izquierda a derecha en la pantalla con base en las pulsaciones de las teclas izquierda y derecha.
- El jugador no podrá salir de la zona de juego por ningún lado.

Nuevos conceptos y habilidades

- Ajustar el tamaño de un objeto
- Enunciados condicionales
- Operadores de mayor o menor

Siguiente lección

- Aprenderemos a crear y lanzar cantidades interminables de comida para alimentar a los animales.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
