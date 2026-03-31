[Image: image]

# Lección 2.2: Comida voladora

Tutorial

Beginner

+10XP

70 mins

9

(840)

Unity Technologies

[Image: Lección 2.2: Comida voladora]Summary

**Descripción general:**

En esta lección, harás que el jugador pueda lanzar un proyectil a través de la Escena. Primero escribirás un nuevo *script* para lanzar el proyectil hacia adelante. A continuación, guardarás el proyectil junto con todos sus *scripts* y propiedades utilizando un nuevo e importante concepto en Unity llamado Prefabs. El jugador podrá lanzar un proyectil Prefab con un toque de la barra espaciadora. Por último, hay que añadir límites a la Escena, eliminando cualquier objeto que salga de la pantalla.

**Resultado del proyecto:**

El jugador podrá pulsar la barra espaciadora y lanzar un proyectil Prefab a la Escena, el cual se destruirá cuando salga de los límites del juego. Los animales también se eliminarán de la Escena cuando abandonen los límites del juego.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. ¿Cómo hacer que el proyectil vuele hacia adelante?

Q&A (0)

> *Lo primero que debemos hacer es darle al proyectil algo de movimiento hacia adelante para que pueda recorrer la Escena cuando el jugador lo lance.*

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

1. Crea un nuevo Script llamado «MoveForward», **adjúntalo** al objeto Food y ábrelo.
2. Define ***public float speed*** como una nueva variable;
3. En ***Update()***, agrega ***transform.Translate(Vector3.forward * Time.deltaTime * speed);***, luego **guarda.**
4. En el **Inspector**, establece la variable **speed** del proyectil, y luego haz una prueba.

[Image: image]Marcar paso como completado

## 2. ¿Cómo convertir el proyectil en un Prefab?

Q&A (0)

> *Ahora que el proyectil tiene el comportamiento que queremos, necesitamos convertirlo en un Prefab para poder reutilizarlo en cualquier momento y donde sea que lo necesitemos, incluyendo su comportamiento.*

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

1. Crea una nueva carpeta llamada «Prefabs» y arrastra la comida y selecciona **Original Prefab**.
2. En PlayerController.cs, define ***public GameObject projectilePrefab;*** como una nueva variable.
3. **Selecciona** al jugador en Hierarchy y **arrastra** el objeto de la carpeta de Prefabs a **Projectile Prefab box** en el Inspector.
4. Haz una prueba **arrastrando** el proyectil a la Escena en tiempo de ejecución para comprobar que vuela.

Marcar paso como completado

## 3. ¿Cómo probar la pulsación de la barra espaciadora?

Q&A (0)

> *Ahora que tenemos un proyectil Prefab asignado a PlayerController.cs, el jugador necesita una forma de lanzarlo con la barra espaciadora.*

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

1. En PlayerController.cs, en ***Update()***, agrega un **enunciado** **condicional** que compruebe si se pulsa la barra espaciadora:
***if (Input.GetKeyDown(KeyCode.Space)) {*.**
2. En el enunciado condicional, añade un comentario que diga ***// Launch a projectile from the player*.**

[Image: image]Marcar paso como completado

## 4. ¿Cómo lanzar un proyectil cuando se pulsa la barra espaciadora?

Q&A (0)

> *Hemos creado el código que comprueba si el jugador pulsa la barra espaciadora, pero ahora tenemos que generar un proyectil cuando eso ocurra.*

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

1. En el enunciado condicional, usa el método **Instantiate** para generar un proyectil en la ubicación del jugador con la rotación del Prefab.

[Image: image]Marcar paso como completado

## 5. ¿Cómo convertir los animales en Prefabs?

Q&A (0)

> *Ahora el proyectil es un Prefab, pero ¿qué pasa con los animales? También deben ser Prefabs para que se pueda colocar una instancia durante el juego.*

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

1. **Rota** todos los animales en el eje Y **180 grados** para que estén al final.
2. **Selecciona** los tres animales en Hierarchy y selecciona ***Add Component >** **Move Forward***
3. Edita los valores **speed** y **haz una prueba** para revisar cómo se ve.
4. Arrastra los tres animales hacia la **carpeta Prefabs** y elige el Prefab original.
5. **Haz una prueba** arrastrando los Prefabs a la vista de Escena durante el juego.

Marcar paso como completado

## 6. ¿Cómo destruir los proyectiles fuera de la pantalla?

Q&A (0)

> *Cada vez que generamos un proyectil, este se desplaza más allá de la zona de juego hacia la eternidad. Para mejorar el rendimiento del juego, tenemos que destruirlos cuando salgan de los límites.*

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

1. Crea el Script «DestroyOutOfBounds» y aplícalo al **proyectil.**
2. Agrega ***private float topBound***como una nueva variable e inicialízala como ***= 30;*.**
3. Escribe el código para destruir el proyectil si sale del límite superior ***if (transform.position.z > topBound) {***
***Destroy(gameObject); }*.**
4. En el menú desplegable **Overrides (Anular)** del Inspector, haz clic en **Apply all (Aplicar todo)** para aplicar el código en el Prefab.

[Image: image]Marcar paso como completado

## 7. ¿Cómo destruir los animales fuera de la pantalla?

Q&A (0)

> *Si destruimos los proyectiles que se salen de los límites, deberíamos hacer lo mismo con los animales. No queremos que estos animales se pierdan en el interminable abismo del Editor de Unity...*

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

1. Crea **un enunciado condicional else-if** para comprobar que los objetos estén debajo del ***lowerBound***:
***else if (transform.position.z > topBound)*.**
2. **Aplica** el Script a todos los animales y usa **Override** en los Prefabs.

[Image: image]Marcar paso como completado

## 8. Resumen de la lección

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

- El jugador podrá pulsar la barra espaciadora para lanzar un proyectil Prefab.
- Los proyectiles y los animales se retiran de la Escena si salen de la pantalla.

Nuevos conceptos y habilidades

- Crear Prefabs
- Anular Prefabs
- Probar pulsaciones de teclas
- Crear objetos
- Destruir objetos
- Enunciados condicionales else if

Siguiente lección

- En lugar de soltar todos estos animales Prefabs en la Escena, crearemos una manada de animales vagando por la llanura.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
