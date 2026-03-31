[Image: image]

# Lección 2.3: Estampida de animales aleatorios

Tutorial

Beginner

+10XP

60 mins

4

(781)

Unity Technologies

[Image: Lección 2.3: Estampida de animales aleatorios]Summary

**Descripción general:**

Nuestros animales Prefabs caminan por la pantalla y se destruyen al salir de los límites, pero no aparecen en el juego a menos que los arrastremos. En esta lección haremos que los animales aparezcan por sí solos, en un lugar aleatorio de la parte superior de la pantalla. Para ello, crearemos un nuevo objeto y un nuevo Script para gestionar todo el proceso de generación.

**Resultado del proyecto:**

Cuando el usuario pulse la tecla S, un animal elegido al azar aparecerá en una posición aleatoria en la parte superior de la pantalla, caminando hacia el jugador.

Resources

- [Lesson Plan 2.3 - Random Animal Stampede.pdf](https://unity-connect-prd.storage.googleapis.com/20190516/ebd9ef79-cece-4b54-be5d-8afa9f7fb147_Lesson_Plan_2.3___Random_Animal_Stampede.pdf?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035303617)

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Crea un gestor de generación

Q&A (0)

> *Si vamos a hacer toda esta compleja generación de objetos, deberíamos tener un script dedicado a gestionar el proceso, así como un objeto al que adjuntarlo.*

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

1. En Hierarchy, crea un **Empty object (Objeto vacío)** llamado «SpawnManager».
2. Crea un nuevo script llamado «SpawnManager», adjúntalo al **gestor de generación** y ábrelo.
3. Define ***public GameObject[ ] animalPrefabs;***
4. En el Inspector, cambia el **tamaño del arreglo** para que sea igual a la cantidad de animales, luego **asigna** los animales **arrastrándolos**desde la ventana Project hacia los espacios vacíos.

**Nota:**asegúrate de arrastrarlos desde la **ventana Project**, no desde Hierarchy. Si vas a generar objetos, debes asegurarte de que estás usando Prefabs, que se guardan en la ventana Project.

Marcar paso como completado

## 2. Genera un animal cuando se pulsa la tecla S

Q&A (0)

> *Hemos creado un arreglo y le hemos asignado nuestros animales, pero eso no sirve de mucho hasta que tengamos una forma de generarlos durante el juego. Vamos a crear una solución temporal para elegir y generar los animales.*

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

1. En ***Update()***, escribe una sentencia if para **posicionar** un nuevo animal Prefab en la parte superior cuando la tecla **S**se pulsa.
2. Define una nueva variable ***public int animalIndex*** e incorpórala en la llamada. **Coloca una instancia**y haz una prueba editando el valor en el Inspector.

[Image: image]Marcar paso como completado

## 3. Generar animales aleatorios desde el arreglo

Q&A (0)

> *Podemos generar animales pulsando la tecla S, pero al hacerlo solo se genera un animal dentro del índice del arreglo que especifiquemos. Tenemos que aleatorizar la selección para que la tecla S pueda generar un animal aleatorio basado en el índice, sin nuestra especificación.*

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

1. En la sentencia if que comprueba si se pulsa S, genera un int aleatorio en ***animalIndex***entre 0 y la longitud del arreglo.
2. Elimina la variable global ***animalIndex***, ya que solo se necesita localmente en la **sentencia if.**

[Image: image]Marcar paso como completado

## 4. Establece al azar la ubicación de la generación

Q&A (0)

> *Podemos pulsar S para generar animales aleatorios desde animalIndex, pero todos aparecen en el mismo lugar. Tenemos que aleatorizar su ubicación de generación, para que no avancen por la pantalla en línea recta.*

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

1. **Reemplaza** el valor de X para Vector3 por ***Random.Range(-20, 20)***, luego haz una prueba.
2. Dentro de la **sentencia if**, crea ***Vector3 spawnPos*** como una variable local.
3. En la parte superior de la clase, crea una nueva variable ***privada float*** para ***spawnRangeX*** y ***spawnPosZ.***

[Image: image]Marcar paso como completado

## 5. Cambia la perspectiva de la cámara

Q&A (0)

> *Nuestro Spawn Manager está progresando muy bien, así que vamos a tomarnos un descanso y a jugar con la cámara. Cambiar la perspectiva de la cámara puede ofrecer una visión más adecuada para este juego de vista superior.*

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

1. Alterna entre **Perspective** e **Isometric** en Scene View (Escena) para apreciar la diferenci.a
2. Selecciona la **cámara** y cambia **Projection** de «Perspective» a «Orthographic».

Marcar paso como completado

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

- El jugador puede pulsar la tecla S para generar un animal
- La selección de animales y ubicación de generación son aleatorias
- Seleccionar el modo de proyección (Perspective/Orthographic)

Nuevos conceptos y habilidades

- Spawn Manager
- Arreglos
- Códigos clave
- Generación aleatoria
- Variables locales frente a globales
- Perspective frente a proyecciones Isometric

Siguiente lección

- Utilizar colisiones para alimentar a nuestros animales

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
