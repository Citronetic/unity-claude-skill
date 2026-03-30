[Image: image]

# Desafío 4: Creación de scripts de fútbol

Tutorial

Beginner

+10XP

60 mins

2

(362)

Unity Technologies

[Image: Desafío 4: Creación de scripts de fútbol]Summary

**Descripción general:**

Utiliza las habilidades que aprendiste en el prototipo Sumo Battle en un contexto completamente distinto: un campo de fútbol. Al igual que en el prototipo, controlarás una pelota al rotar la cámara a su alrededor y aplicando una fuerza hacia adelante, pero en lugar de empujarlas por el borde, tu objetivo es lanzarlas dentro de la red del oponente mientras que él intenta hacer lo mismo en tu red. Al igual que en Sumo Battle, después de cada ronda se generará una nueva oleada con más pelotas enemigas para desafiar a tu defensa. Sin embargo, casi nada funciona en este proyecto. Es tu trabajo hacer que funcione correctamente.

**Resultado del desafío:**

- Los enemigos se mueven hacia tu red, pero puedes golpearlos para desviarlos lejos de ella.
- Los potenciadores aplican un aumento de fuerza y desaparecen después de 5 segundos.
- Cuando no hay más pelotas enemigas, una nueva oleada se genera con 1 enemigo adicional.

Resources

- [Challenge 4 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/2b28387c-9037-4e20-916d-de47efdd852d/Challenge%204%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954552032)

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

- Abre tu proyecto **Prototype 4.**
- Haz clic para descargar los [archivos iniciales de Desafío 4](https://connect-prd-cdn.unity.com/20210506/2b28387c-9037-4e20-916d-de47efdd852d/Challenge%204%20-%20Starter%20Files.zip?_ga=2.230508380.1186801097.1620052249-59568313.1601905412), **extrae** la carpeta comprimida y después **importa** el .unitypackage a tu proyecto. Si olvidaste cómo hacerlo, consulta la [Lección 1.1. Paso 2.](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)
- En la carpeta *Project Window > Assets > Challenge 4 > **Instructions,*** usa el video Desafío 4. Resultado como guía para completar el desafío.

Marcar paso como completado

## 2. Advertencia

Q&A (0)

Cuando importas el desafío a tu proyecto, se **supone que debe tener errores**.

El propósito del desafío es que corrijas esos errores, los cuales se mencionan a continuación. También hay pistas en la parte inferior de la página para ayudarte si te atascas.

Si no puedes corregir los errores y quieres eliminar de tu proyecto los archivos del desafío, en la ventana Project haz clic derecho en Assets > **Challenge 4**y selecciona **Delete.**

¡Buena suerte!

Marcar paso como completado

## 3. Al golpear a un enemigo lo envías directamente hacia ti

Q&A (0)

- Cuando golpeas a un enemigo, se debe *alejar* del jugador.

Marcar paso como completado

## 4. Una nueva oleada se crea cuando el jugador obtiene un potenciador

Q&A (0)

- Se debe crear una nueva oleada cuando todas las pelotas enemigas han desaparecido.

Marcar paso como completado

## 5. El potenciador nunca desaparece

Q&A (0)

- El potenciador debe durar solo por un tiempo limitado y después desaparecer.

Marcar paso como completado

## 6. Se generan 2 enemigos en cada oleada

Q&A (0)

- Se debe generar un enemigo en la oleada 1, dos en la oleada 2, tres en la oleada 3, etc.

Marcar paso como completado

## 7. Las pelotas enemigas no se mueven hacia ningún lado

Q&A (0)

- Las pelotas enemigas deben moverse hacia el objeto «Player Goal».

Marcar paso como completado

## 8. Extra: El jugador necesita un potenciador turbo.

Q&A (0)

- El jugador debe obtener un potenciador de velocidad cuando presione la barra espaciadora y un efecto de partículas debe aparecer cuando lo utilice.

Marcar paso como completado

## 9. Extra: Los enemigos nunca se vuelven más difíciles

Q&A (0)

- La velocidad de los enemigos debe aumentar poco a poco con cada nueva oleada.

Marcar paso como completadoPaso opcional

## 10. Pistas

Q&A (0)

- **Cuando golpeas a un enemigo, debe enviarlo lejos del jugador.***Pista: En PlayerControllerX.cs, para obtener un Vector lejos del jugador, debes restar la [posición del enemigo] menos la [posición del jugador], no a la inversa.*
- **Una nueva oleada debe generarse cuando todas las pelotas enemigas se hayan eliminado.***Pista: En SpawnManagerX.cs, verifica que la variable enemyCount se defina correctamente.*
- **El potenciador debe durar solo un poco tiempo y después debe desaparecer.***Pista: En PlayerControllerX.cs, el código de la corrutina PowerupCoolDown se ve bien, pero esta corrutina nunca se llama en realidad con el método StartCoroutine().*
- **Un enemigo debe generarse en la oleada 1, dos en la oleada 2, tres en la oleada 3, etc.***Pista: En SpawnManagerX.cs, el for-loop que genera enemigos debe utilizar el parámetro enemiesToSpawn.*
- **Las pelotas enemigas deben moverse hacia el objeto «Player Goal».***Pista: Hay un error en EnemyX.cs: «NullReferenceException: Object reference not set to an instance of an object». Parece que el objeto playerGoal nunca se asigna.*
- **Extra: El jugador debe obtener un potenciador de velocidad cuando presione la barra espaciadora y un efecto de partículas debe aparecer cuando lo utilice.***Pista: En PlayerController, agrega un simple enunciado condicional if que agregue una fuerza «impulse» si se presiona la barra espaciadora. Para agregar un efecto de partículas, primero adjúntalo como un objeto secundario en el punto focal.*
- **Extra: La velocidad de los enemigos debe aumentar poco a poco con cada nueva oleada.***Pista: Necesitarás monitorizar y aumentar la velocidad de los enemigos en SpawnManagerX.cs. Entonces en EnemyX.cs, haz referencia a esa variable speed y defínela en Start().*

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
