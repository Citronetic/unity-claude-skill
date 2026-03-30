[Image: image]

# Add animations to your filter spanish

Tutorial

Beginner

+10XP

30 mins

1

(47)

Unity Technologies

[Image: Add animations to your filter spanish]Summary

Después de agregar modelos 3D al filtro facial, puedes darles vida por medio de la animación.

En este tutorial, harás lo siguiente:

- Identificar y explorar las animaciones en el Editor de Unity.
- Agregar animaciones a los accesorios que seleccionaste.
- Crear y probar la aplicación actualizada.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Las animaciones dan vida a un juego o una experiencia de software. Esta vez, creamos animaciones para todos los accesorios disponibles en el proyecto.

En este tutorial, harás lo siguiente:

- Identificar y explorar las animaciones en el Editor de Unity.
- Agregar animaciones a los accesorios que seleccionaste.
- Crear y probar los accesorios animados en la aplicación.

**Importante**: en este tutorial, agregarás las animaciones existentes en lugar de aprender cómo animar objetos. Si quieres más información sobre cómo animar en Unity, consulta [**Habilidas básicas para creadores artísticos: animación**](https://learn.unity.com/project/creative-core-animation).

Marcar paso como completado

## 2. ¿Cómo explorar las animaciones?

Q&A (0)

Cuando nos referimos a las animaciones en Unity, hay dos elementos clave que debes conocer: los Animation Clips (Clips de animación) y los Animation Controllers (Controladores de animación).

**Los Animation Clips** son [datos de animación que se pueden utilizar para los personajes animados o las animaciones simples](https://docs.unity.cn/Manual/Glossary.html#AnimationClip). Son unidades básicas de movimiento, como una instancia específica de una animación en la que un personaje camina, corre o se queda inactivo.

Los **Animator Controllers** [sirven para controlar la manera en que se reproducen los Animation Clips](https://docs.unity.cn/Manual/class-AnimatorController.html). Puedes usar un Animator Controller a fin de organizar y mantener un conjunto de Animation Clips con las Animation Transitions (Transiciones de animación) relacionadas para un personaje u objeto. Los Animation Controllers pueden ser simples o muy complejos. Si deseas más información sobre los [Animator Controllers](https://docs.unity.cn/Manual/class-AnimatorController.html), consulta el Manual de Unity (en inglés).

En la ventana Project (Proyecto), ve a **Assets**>**_BasicFaceFilter**>**Animations** y examina el contenido de la carpeta.

[Image: image]

Los Assets que tienen el ícono triangular son Animation Clips. Los Assets que tienen un ícono de dos cuadrados conectados son los Animator Controllers relacionados.

Marcar paso como completado

## 3. ¿Cómo adjuntar animaciones al Prefab AR Default Face?

Q&A (0)

Vamos a adjuntar las animaciones relacionadas con el accesorio (o los accesorios) que seleccionaste para la aplicación al Prefab **AR Default Face (Cara predeterminada en AR)**. Sigue estos pasos:

**1.**  En la ventana Project, ve a **Assets**> **_BasicFaceFilter**>**Prefabs**y abre el Prefab **AR Default Face**.

**2.**  En la ventana Hierarchy (Jerarquía), identifica el accesorio que desees animar y selecciona la flecha ubicada al lado derecho del nombre del GameObject para abrir el Prefab.

[Image: image]

**3.**  En la ventana Inspector, busca el componente Animator (Animador) del accesorio. La propiedad **Controller (Controlador)** aún no tendrá asignado un Animator Controller.

**4.**  Utiliza el selector de objetos de la propiedad Controller para seleccionar el Animator Controller correspondiente. Por ejemplo, el GameObject Props_HiHat tiene un Animator Controller correspondiente llamado Props_HiHat.

[Image: image]

**5.**  Selecciona la flecha a la izquierda ubicada junto al nombre del Prefab en la ventana Hierarchy para salir del modo de edición de Prefab del accesorio. Repite este paso para salir del modo de edición de Prefab de **AR Default Face**.

Marcar paso como completado

## 4. ¿Cómo crear y probar la aplicación?

Q&A (0)

Si creas y pruebas la aplicación, el accesorio que agregaste debería reproducir las animaciones correspondientes cuando se detecte una cara.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Sigue estas instrucciones para crear y probar la aplicación:

**1.**  Guarda la Scene (Escena).

**2.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**3.**  Asegúrate de que el dispositivo esté conectado y selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

**4.** La aplicación se abrirá automáticamente en el dispositivo. Cuando se detecte una cara, la aplicación debería mostrar todo lo que hayas agregado hasta ese momento y se deberían reproducir las animaciones del accesorio.

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o [iOS.](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641)

Marcar paso como completado

## 5. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas. Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: editar los fotogramas clave de animación existentes

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Abre las animaciones en el proyecto y ajusta los fotogramas clave o agrega otros. El Manual de Unity tiene [información sobre los fotogramas clave](https://docs.unity3d.com/Manual/animeditor-AnimatingAGameObject.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952871540) y es un recurso muy útil.

#### Medio: agrega otras propiedades a la animación

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Puedes animar otras propiedades además de la posición de un objeto. Prueba este ejercicio:

- Asegúrate de que la ventana Animation esté abierta.
- Abre uno de los accesorios incluidos y selecciona **Add Property (Agregar propiedad)** en la ventana Animation.
- Busca la propiedad Mesh Renderer.Material.Base Color y utiliza las animaciones de fotogramas clave para cambiar el color del objeto durante la animación.
- Selecciona **Record (Grabar)** para agregar los cambios a la animación.

#### Difícil: crea nuevas animaciones

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Probablemente se te ocurren muchas maneras de animar los accesorios incluidos u otros modelos importados desde la Asset Store (Tienda de recursos). ¡Llegó el momento de convertir todas esas ideas en una realidad animada! Selecciona uno o más accesorios y crea tus propias animaciones para darles vida en el filtro.

Si necesitas algo de inspiración, aquí tienes algunas ideas para animar los accesorios incluidos:

- Modifica el accesorio Props_CrazyEyes para que junte los ojos.
- Haz que el accesorio Props_CatNose se contraiga repentinamente.
- Haz que el accesorio Props_GoblinEars gire como si escuchara algo.

Si deseas aprender a crear tus propias animaciones en Unity, consulta [**Habilidades básicas para creadores artísticos: animación**](https://learn.unity.com/project/creative-core-animation).

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

¡Felicidades, ahora tienes un filtro facial con accesorios animados! En el siguiente tutorial, agregarás efectos de posprocesamiento a la aplicación para refinar las características visuales.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
