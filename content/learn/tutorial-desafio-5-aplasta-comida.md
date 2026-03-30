[Image: image]

# Desafío 5: Aplasta comida

Tutorial

Beginner

+10XP

60 mins

1

(305)

Unity Technologies

[Image: Desafío 5: Aplasta comida]Summary

**Descripción general:**

Pon a prueba tus habilidades de interfaz de usuario con este desafío estilo *whack-a-mole*, en el cual tienes que obtener toda la comida que aparezca en un cuadriculado al tiempo que evitas las calaveras. Tendrás que depurar botones, hacer clic en el *mouse*, rastrear el puntaje, secuencias de reinicio y configuración de dificultad para superar este desafío.

**Resultado del desafío:**

- Todos los botones se ven bien con el texto alineado correctamente.
- Cuando seleccionas una dificultad, la frecuencia de generación cambia según corresponde.
- Cuando haces clic en una comida, se destruye y el puntaje se actualiza en la parte superior izquierda.
- Cuando pierdes el juego, aparece un botón de reiniciar que te permite jugar de nuevo.

Resources

- [Challenge 5 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/6b85b614-5937-4211-9a5a-117378ab83d2/Challenge%205%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954553850)

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

- Abre tu proyecto **Prototype 5.**
- Haz clic para descargar los [archivos de inicio de Desafío 5](https://connect-prd-cdn.unity.com/20210506/6b85b614-5937-4211-9a5a-117378ab83d2/Challenge%205%20-%20Starter%20Files.zip?_ga=2.230508380.1186801097.1620052249-59568313.1601905412), **extrae** la carpeta comprimida y después **importa** el .unitypackage a tu proyecto. Si olvidaste cómo hacerlo, consulta la [Lección 1.1. Paso 2.](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)
- En la carpeta *Project Window > Assets > Challenge 5 > **Instructions*** usa el video Desafío 5. Resultado como guía para completar el desafío.

Marcar paso como completado

## 2. Advertencia

Q&A (0)

Cuando importas el desafío a tu proyecto, se **supone que debe tener errores**.

El propósito del desafío es que corrijas esos errores, los cuales se mencionan a continuación. También hay pistas en la parte inferior de la página para ayudarte si te atascas.

Si no puedes corregir los errores y quieres eliminar de tu proyecto los archivos del desafío, en la ventana Project haz clic derecho en Assets > **Challenge 5**y selecciona **Delete.**

¡Buena suerte!

Marcar paso como completado

## 3. Los botones de dificultad se ven mal

Q&A (0)

- Centra el texto de los botones horizontal y verticalmente.

Marcar paso como completado

## 4. La comida se destruye demasiado rápido

Q&A (0)

- La comida solo debe destruirse cuando el jugador haga clic en ella, no cuando el *mouse* la toque.

Marcar paso como completado

## 5. El puntaje se sobrescribe con la palabra «Score»

Q&A (0)

- Siempre debe decir «Score: __» y el valor se debe mostrar después de «Score:».

Marcar paso como completado

## 6. Tras perder, no hay forma de reiniciar

Q&A (0)

- Haz que aparezca el botón Restart en la pantalla de fin del juego.

Marcar paso como completado

## 7. Los botones de dificultad no cambian la dificultad

Q&A (0)

- El spawnRate siempre es demasiado rápido. Cuando haces clic en Easy, el spawnRate debe ser más lento; si haces clic en Hard, el spawnRate debe ser más rápido.

Marcar paso como completado

## 8. Extra: El juego nunca se detiene

Q&A (0)

- Agrega un elemento «Time: __» que ejecute una cuenta regresiva desde 60 en números enteros (es decir, 59, 58, 57, etc.) y que desencadene la secuencia de fin del juego cuando llegue a 0.

Marcar paso como completadoPaso opcional

## 9. Pistas

Q&A (0)

- **Centra el texto en los botones horizontal y verticalmente.***Pista: Si expandes uno de los objetos de botón en la Hierarchy, verás un objeto “Text” adentro; tienes que editar las propiedades de este objeto «Text».*
- **La comida solo debe destruirse cuando el jugador haga clic en ella, no cuando el *mouse* la toque.***Pista: OnMouseEnter() detecta cuando el mouse entra en el colisionador de un objeto; OnMouseDown() detecta cuando el mouse hace clic en el colisionador de un objeto.*
- **Siempre debe decir: «Score: __» y mostrar el valor después de «Score:».|***Pista: Cuando defines el texto del puntaje, tienes que agregar (concatenar) la palabra «Score: » y el valor real del puntaje.*
- **Haz que el botón Restart aparezca en la pantalla de fin del juego.***Pista: En el método GameOver(), asegúrate de que se reactive el botón reiniciar.*
- **La spawnRate siempre es demasiado rápida. Cuando haces clic en Easy, el spawnRate debe ser más lento; si haces clic en Hard, el spawnRate debe ser más rápido.***Pista: No hay información (o parámetro) transmitida del script del botón al Script del Game Manager, necesitas implementar un parámetro de dificultad.*
- **Extra: Agrega un elemento gráfico de «Time: __» que haga una cuenta regresiva desde 60 en números enteros (es decir, 59, 58, 57, etc.) y que desencadene la secuencia de fin del juego cuando llegue a 0.***Pista: Busca en Google «Unity Count down timer C#». Implicará restar «Time.deltaTime» y utilizar el método Mathf.Round() para mostrar solo números enteros.*

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
