[Image: image]

# Laboratorio 2: Nuevo proyecto con elementos primitivos

Tutorial

Beginner

+10XP

60 mins

5

(567)

Unity Technologies

[Image: Laboratorio 2: Nuevo proyecto con elementos primitivos ]Summary

**Descripción general:**

Crearás y configurarás un proyecto que pronto se transformará en tu propio proyecto personal. Por ahora, utilizarás formas primitivas (como esferas, cubos y planos) como marcadores de posición para tus objetos a fin de que puedas añadir funcionalidades de la manera más eficiente posible, sin que te quedes atascado con los gráficos. Para que quede claro qué objeto es cada uno, también le darás a cada uno un material de color único.

**Resultado del proyecto:**

Todos los objetos clave aparecerán en la Escena como objetos primitivos con la cámara posicionada adecuadamente para el tipo de proyecto.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. ¿Cómo crear un nuevo proyecto y cambiar el nombre de la Escena?

Q&A (0)

> *Al igual que hicimos con Prototype, lo primero que haremos será crear un nuevo proyecto en blanco.*

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

1. Abre **Unity Hub** y crea un proyecto en blanco llamado «Personal Project» en la versión correcta de Unity
Si olvidas cómo hacerlo, consulta la [Lección 1.1, paso 1](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cb7a1acedbc2a10b7261d15).
2. Después de que se abra Unity, selecciona tu **Layout personalizado.**
3. En la ventana Project, ve a *Assets > Scenes*, y cambia el nombre de «**SampleScene**» a «My Game».

Marcar paso como completado

## 2. ¿Cómo crear un plano de fondo?

Q&A (0)

> Para orientarse en la Escena y no tener la sensación de estar flotando en el aire, es conveniente empezar añadiendo un objeto de fondo o suelo.

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

1. Haz clic derecho en Hierarchy, y ve a *3D Object > **Plane*** para añadir un plano a tu Escena.
2. En el Inspector del plano, en la esquina superior derecha del componente Transform, haz clic en el ícono con 3 puntos, luego haz clic en***Reset.***
**Nota**: los tres puntos podrían aparecer como un ícono de tuerca en versiones anteriores de Unity.
3. Aumenta el **tamaño XYZ** del plano a (5, 1, 5)
4. Ajusta tu posición en la vista de Escena para tener una mejor visión del plano.

Marcar paso como completado

## 3. ¿Cómo crear un jugador primitivo con un nuevo material?

Q&A (0)

> Ahora que ya tenemos configurado el plano en blanco, podemos añadir a la estrella del espectáculo: el objeto jugador.

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

1. En Hierarchy, h*az clic derecho > 3D Object > **Sphere*****,**cambia su nombre a «Player».
2. En Assets, h*az clic derecho > Create > **Folder*** y cambia el nombre de la carpeta a «Materials».
3. En «Materials», h*az clic derecho > Create > **Material*** y renómbralo como «Blue».
4. En el Inspector de «Blue», haz clic en la casilla **Albedo color**y cambia el color a azul.
5. **Arrastra** el material desde tus Assets hacia el objeto jugador.

Marcar paso como completado

## 4. ¿Cómo ubicar la cámara en función del tipo de proyecto?

Q&A (0)

> Ahora que el jugador está dentro, necesitaremos la mejor vista del mismo, según el tipo de proyecto que tenemos.

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

1. Para un juego de**vista áerea** ubica la cámara en (0, 10, 0) directamente sobre el jugador y rótala 90 grados en el **eje X.**
2. Para un juego de **vista lateral** rota el **plano** en -90 grados en el **eje X.**
3. Para un juego en **tercera persona**, mueve la cámara hacia arriba en los **ejes Y y Z** y aumenta su **rotación en el eje X.**

Marcar paso como completado

## 5. Enemigos, obstáculos, proyectiles y materiales

Q&A (0)

> Ahora que sabemos cómo hacer objetos primitivos, vamos a hacer uno para cada objeto de nuestro proyecto.

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

1. En Hierarchy, crea nuevos **Cubes (Cubos)**, **Spheres (Esferas)**, y **Capsules (Cápsulas)** para todos los objetos principales, y **renómbralos,** **reubícalos** y cambia el **tamaño** de los mismos.
2. En tu carpeta de materiales, crea **nuevos materiales** de tantos colores como objetos únicos tengas, editando sus colores para que coincidan con su nombre, y luego **aplica** los materiales a tus objetos.
3. Coloca todos tus objetos en lugares que tengan sentido entre sí.

Marcar paso como completado

## 6. ¿Cómo exportar un archivo de respaldo de Unity Package?

Q&A (0)

> Como vamos a poner el corazón y el alma en este proyecto, siempre es bueno hacer un respaldo.

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

1. **Guarda** tu Escena.
2. En la ventana Project, haz clic derecho en *Assets folder > **Export Package***, luego haz clic en Export (Exportar).
3. Crea una **nueva carpeta llamada «Backups»**en la carpeta de tu proyecto personal, luego **guárdala** con tu nombre y el número de versión (por ejemplo, Carl_V0.1.unitypackage”).

Marcar paso como completado

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

Nuevo progreso

- Nuevo proyecto para tu proyecto personal
- Ubicación y rotación de la cámara en función del tipo de proyecto
- Todos los objetos clave de la Escena tienen materiales únicos

Nuevos conceptos y habilidades:

- Elementos primitivos
- Crear nuevos materiales
- Exportar paquetes de Unity

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
