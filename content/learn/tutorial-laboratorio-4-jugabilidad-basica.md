[Image: image]

# Laboratorio 4: Jugabilidad básica

Tutorial

Beginner

+10XP

90 mins

3

(301)

Unity Technologies

[Image: Laboratorio 4: Jugabilidad básica]Summary

**Descripción general:**

En este laboratorio, trabajarás con todos tus objetos que no sean jugadores para poder dar vida a tu proyecto con su jugabilidad básica. Darás a tus proyectiles, artículos acumulables o enemigos su movimiento básico y detección de colisión, los convertirás en Prefabs y harás que un Spawn Manager los genere de forma aleatoria. Al final de este laboratorio, deberás tener una noción de la funcionalidad básica de tu juego.

**Resultado del proyecto:**

Los objetos que no son jugadores se generan en ubicaciones adecuadas en la Escena con movimiento básico. Cuando los objetos colisionan unos con otros, reaccionen según lo esperado, ya sea al rebotar o destruirse.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. ¿Cómo darle a los objetos un movimiento básico?

Q&A (0)

> Antes de generar objetos en tu Escena, deben moverse en la forma que lo deseas.

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

1. De ser relevante, agrega componentes **Rigidbody** a tus objetos que no son jugadores.
2. Crea **nuevos *scripts*****para los objetos que se instanciarán durante la jugabilidad y adjúntalos a sus respectivos objetos (incluidos proyectiles o artículos acumulables).
3. Programa el **movimiento básico**de tus objetos y prueba su funcionamiento.

Al final de este paso, todos los objetos deberán moverse básicamente de la forma en que corresponde en el juego.

Marcar paso como completado

## 2. ¿Cómo destruir objetos fuera de la pantalla?

Q&A (0)

> Para asegurarnos de que nuestra Hierarchy no se sature, vamos a garantizar que estos objetos se destruyan cuando salgan de la pantalla.

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

1. Puedes ya sea crear un nuevo *script* o agregar código a tu *script* existente para asegurarte de que los objetos se destruyan cuando salgan de la pantalla

Al final de este paso, los objetos deberán eliminarse de la Hierarchy cuando ya no estén en juego.

Marcar paso como completado

## 3. ¿Cómo manejar las colisiones de los objetos?

Q&A (0)

> Ahora que tienes todos estos objetos en movimiento, es seguro que comenzarán a chocar unos con otros. Necesitamos programar lo que ocurrirá cuando las cosas colisionen.

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

1. Si aplica, edita la **Mass en el Rigidbody** de tus objetos.
2. Si aplica, para cambiar la forma en la que tus objetos chocan, crea un nuevo **Physics Materials** para tus objetos.
3. Agrega **etiquetas** a tus objetos para que puedas probar adecuadamente cuáles objetos colisionan con cuáles.
4. Utiliza ***OnCollisionEnter()***(para colisiones de Rigidbody) o ***OnTriggerEnter()*** (para colisiones basadas en desencadenadores) para mensajes **Destroy** o **Log**a la consola sobre lo que debe proceder cuando ciertas colisiones ocurren.

Al final de este paso, los objetos deberán destruirse, rebotar o no hacer nada con base en las colisiones.

Marcar paso como completado

## 4. ¿Cómo convertir los objetos en Prefabs?

Q&A (0)

> Ahora que los objetos se comportan básicamente como deben, si van a generarse durante la jugabilidad, necesitan ser Prefabs.

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

1. En el directorio Assets, crea una nueva **carpeta** llamada «Prefabs».
2. **Arrastra** a ella cada objeto para crear un **nuevo Prefab** para cada uno.
3. Después de que todos los objetos se hayan convertido en Prefabs, **elimínalos** de la Escena.
4. **Prueba** el comportamiento de los objetos al arrastrarlos desde la carpeta Prefabs hasta la Escena mientras el juego está en ejecución.

Al final de este paso, todos los objetos que se generarán durante la jugabilidad deberán ser Prefabs y ya no deberán estar en tu Escena.

Marcar paso como completado

## 5. ¿Cómo hacer que SpawnManager genere Prefabs?

Q&A (0)

> Después de configurar todos nuestros Prefabs, podemos crear un Spawn Manager para generarlos a intervalos y, si lo queremos, en ubicaciones aleatorias.

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

1. Crea un objeto «Spawn Manager» vacío y adjúntale un nuevo Script SpawnManager.cs.
2. Crea variables de **GameObject** individual **o un conjunto de GameObjects**para tus Prefabs, después **asígnalas** en el Inspector.
3. Usa los métodos ***Instantiate()***, ***Random.Range()*** y el ***InvokeRepeating()*** para generar objetos a intervalos (objetos aleatorios, ubicaciones aleatorias o ambos).
4. Haz clic derecho en tu carpeta *Assets > **Export Package*** y guarda una nueva versión en tu carpeta **Backups.**

Al final de este paso, todos los objetos deberán generarse de forma automática en la ubicación adecuada.

Marcar paso como completado

## 6. Resumen

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

- Los Prefabs de objetos que no son jugadores tienen movimiento básico
- Los objetos se destruyen cuando salen de la pantalla
- Las colisiones entre los objetos se controlan de forma adecuada
- Los objetos se generan en las ubicaciones adecuadas en intervalos temporizados

Nuevos conceptos y habilidades:

- Creación de jugabilidad básica para un proyecto de forma independiente

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
