[Image: image]

# Laboratorio 3: Control del jugador

Tutorial

Beginner

+10XP

60 mins

6

(393)

Unity Technologies

[Image: Laboratorio 3: Control del jugador]Summary

**Descripción general:**

En esta lección programarás el movimiento básico del jugador, incluido el código que limita dicho movimiento. Como hay muchas formas distintas en las que un jugador puede moverse en función del tipo de proyecto en el que trabajas, no se te darán instrucciones paso a paso sobre cómo hacerlo. Para hacerlo, necesitarás investigar, mencionar otro código y resolver problemas cuando las cosas no salgan bien.

**Resultado del proyecto:**

El jugador podrá moverse con base en la entrada de datos del usuario, pero *no* podrá moverse a donde no deba.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. ¿Cómo crear un Script PlayerController y planificar tu código?

Q&A (0)

> Sin importar qué tipo de movimiento tenga tu jugador, definitivamente necesitará un Script PlayerController.

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

1. Selecciona tu Player y agrega un componente **Rigidbody**(con o sin gravedad habilitada).
2. En tu carpeta Assets, crea una nueva carpeta «Scripts».
3. Dentro de la nueva carpeta «Scripts» crea un nuevo Script de C# «PlayerController».
4. **Adjúntalo** al jugador, después **ábrelo.**
5. Determina qué tipo de programación se requerirá para tu Player.

Al final de este paso debes tener un nuevo Script abierto y un plan preciso de lo que irá dentro.

Marcar paso como completado

## 2. Movimiento básico a partir de la entrada de datos del usuario

Q&A (0)

> Lo primero que programaremos es el movimiento más básico del jugador basado en la entrada de datos del usuario.

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

1. Declara una nueva variable ***private float speed.***
2. Si utilizas física, declara una nueva ***variable Rigidbody playerRb*** para ello e inicialízala en Start().
3. Si utilizas teclas direccionales, declara nuevas variables ***verticalInput*** o ***horizontalInput.***
4. Si basas tus movimientos en teclas presionadas, crea el **enunciado condicional if** para probar **KeyCode.**
5. Utiliza ya sea el método ***Translate*** o el método ***AddForce*** (si utilizas física) para mover tu personaje.

Al final de este paso, el jugador podrá moverse de la forma que quieras con base en la entrada de datos del usuario.

Marcar paso como completado

## 3. ¿Cómo limitar el movimiento del jugador?

Q&A (0)

> Sin importar qué tipo de movimiento tenga tu jugador, necesita estar limitado para la jugabilidad.

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

1. Si tu jugador colisiona con objetos con los que no debería (incluido el suelo), marca la casilla «**Is trigger**» en el componente Collider (Colisionador).
2. Si la posición o rotación de tu jugador debe limitarse, amplía **Constraints (Limitantes)** en el componente Rigidbody y limita ciertos ejes.
3. Si tu jugador puede **salirse de la pantalla**, escribe un **enunciado condicional if** que verifique y restablezca la ubicación.
4. Si el jugador puede realizar saltos dobles o salir volando de la pantalla, crea una **variable booleana**que limite la capacidad de hacerlo.
5. Si tu jugador debe estar limitado por barreras físicas por el borde del área de juego, crea **Planes (Planos)** o **Cubes (Cubos)** más primitivos y ajusta su tamaño para formar muros.

Al final de este paso, el movimiento del jugador deberá estar limitado de forma que permita jugar tu juego.

Marcar paso como completado

## 4. Limpieza del código y respaldo de exportación

Q&A (0)

> Ahora que la funcionalidad básica está en orden, limpiemos el código y hagamos un respaldo.

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

1. Crea nuevos objetos de juego**Empty** y anida objetos dentro para **organizar** tu Hierarchy.
2. Limpia tus métodos Update al mover los bloques de código a nuevas funciones vacías (p. ej., «MovePlayer()» o «ConstrainPlayerPosition()»).
3. Agrega comentarios para que tu código sea más legible.
4. **Prueba** para asegurarte de que todo funcione, después **guarda** tu Escena.
5. Haz clic derecho en tu carpeta *Assets > **Export Package*** después guarda una nueva versión en tu carpeta **Backups.**

Al final de este paso, tu código deberá estar comentado, organizado y respaldado.

Marcar paso como completado

## 5. Resumen de la lección

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

Nuevo avance

- El jugador puede moverse con base en la entrada de datos del usuario
- El movimiento del jugador está limitado para cumplir con los requisitos del juego

Nuevos conceptos y habilidades:

- Programa en C# de forma independiente
- Resuelve problemas de forma independiente

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
