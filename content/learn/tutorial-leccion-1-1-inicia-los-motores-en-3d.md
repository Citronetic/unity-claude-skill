[Image: image]

# Lección 1.1: Inicia los motores en 3D

Tutorial

Beginner

+10XP

80 mins

7

(667)

Unity Technologies

[Image: Lección 1.1: Inicia los motores en 3D]Summary

**Descripción general:**

En esta lección, crearás tu primer proyecto de juego en el Unity Hub. Elegirás y colocarás un vehículo para que el jugador lo conduzca y un obstáculo que pueda evadir o chocar. Además, colocarás una cámara por la que verá el jugador, ofreciéndole una perspectiva perfecta de la Scene (Escena). A lo largo de este proceso, aprenderás a navegar dentro del Editor de Unity y a sentirte cómodo al moverte en un espacio en 3D. Por último, personalizarás tu propio diseño de ventanas para el Editor de Unity.

**Resultado del proyecto:**

Tendrás un vehículo y un obstáculo colocados en la carretera, y una cámara posicionada a la perfección detrás del vehículo. También tendrás un nuevo Layout personalizado de Unity, perfectamente optimizado para la edición.

Resources

- [Prototype 1 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210507/6c595e73-affa-42f7-ae53-9d7e33e7247a/Prototype%201%20-%20Starter%20Files.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035298346)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. ¿Cómo crear una carpeta para el curso y un nuevo proyecto?

Q&A (0)

> Lo primero que tienes que hacer es crear una carpeta que contenga todos los proyectos de este curso, y luego crear un nuevo proyecto de Unity dentro de esta para el Prototipo 1.

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

1. En tu **escritorio** (u otro lugar de fácil acceso), *haz clic derecho y crea una **nueva carpeta***, luego nómbrala «Create with Code».
2. Abre el **Unity Hub** y selecciona la pestaña **Projects (Proyectos)**en la barra lateral izquierda.
3. Selecciona **New (Nuevo)** para crear un nuevo proyecto con una de las versiones compatibles de Unity (2018.4LTS, 2019.4LTS o 2020.3LTS).
4. Selecciona la plantilla **3D,** nombra tu proyecto «Prototype 1» y guárdalo donde creaste la carpeta **Create with Code**.
5. Selecciona **Create** **(Crear)** y espera a que Unity abra tu nuevo proyecto.

Marcar paso como completado

## 2. ¿Cómo importar los Assets y abrir Prototype 1?

Q&A (0)

> Ahora que tenemos abierto un proyecto vacío, necesitamos importar los Assets (Recursos) de Prototype 1 y abrir la Escena.

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

1. Haz clic para descargar los[Archivos de inicio de Prototype 1](https://connect-prd-cdn.unity.com/20210507/6c595e73-affa-42f7-ae53-9d7e33e7247a/Prototype%201%20-%20Starter%20Files.zip?_ga=2.24002682.1186801097.1620052249-59568313.1601905412), luego **extrae** la carpeta comprimida.
**Windows**: haz clic derecho en el archivo > Extract All.
**Mac**: haz doble clic en el archivo.
2. En el menú de la parte superior en Unity, selecciona **Assets** > **Import** **Package** >**Custom Package**, luego desplázate a la carpeta que extrajiste y selecciona el archivo Prototype-1_Starter-Files.unitypackage.
3. En la ventana emergente **Import Unity Package (Importar paquete de Unity),**selecciona **Import (Importar)** y espera a que se importen los Assets.
4. En la ventana **Project**en *Assets > Scenes >*haz doble clic en **Escena de Prototype 1** para abrirla.
5. Elimina****la**Sample Scene (Escena de muestra)** sin guardar.
6. **Haz clic derecho y arrastra** para ver el comienzo de la carretera.

Marcar paso como completado

## 3. ¿Cómo añadir tu vehículo a la Escena?

Q&A (0)

> Ya que estamos haciendo un simulador de conducción, tenemos que añadir nuestro propio vehículo a la Escena.

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

1. En la **ventana Project**, abre *Assets > Course Library > Vehicles* y arrastra un vehículo a **Hierarchy (Jerarquía).**
2. **Mantén pulsado el** **botón derecho y WASD** para ir hasta el vehículo e intenta rotarlo.
3. Con el vehículo seleccionado y el *mouse*en la vista de Escena, **presiona F** para enfocarlo.
4. Luego, usa la **rueda del *mouse*** para acercarte o alejarte y **mantén presionada la rueda** para girar.
5. **Mantén presionado Alt + clic izquierdo** para rotar alrededor del punto focal o **mantén Alt + clic derecho**para acercarte o alejarte.
6. Si algo sale mal, presiona **Ctrl/Cmd + Z**para deshacer hasta arreglarlo.

Marcar paso como completado

## 4. ¿Cómo añadir un obstáculo y reubicarlo?

Q&A (0)

> Lo siguiente que necesita nuestro juego es un obstáculo. Tenemos que elegir uno y ubicarlo en frente del vehículo.

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

1. Ve a *Course Library > Obstacles*y **arrastra un obstáculo** directamente a la **ventana Escena.**
2. En el Inspector del obstáculo, en la parte superior derecha del componente Transform, haz clic en el botón de más opciones*y selecciona**Reset Position (Restablecer posición).***
**Nota**: el botón de más opciones puede aparecer como tres puntos verticales o un ícono de engranaje, según tu versión de Unity.
3. En el **Inspector,** cambia la **XYZ Location (Ubicación XYZ)** a **X=0, Y=0,** **Z=25.**
4. En Hierarchy, *haz clic derecho y **renombra*** tus dos objetos como «Vehicle» y «Obstacle».

Marcar paso como completado

## 5. ¿Cómo ubicar la cámara y ejecutar el juego?

Q&A (0)

> Ahora que configuramos nuestro vehículo y un obstáculo, intentemos ejecutar el juego y mirar a través de la cámara.

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

1. Selecciona la **cámara** en Hierarchy y **presiona F** para enfocarla.
2. Presiona el **botón Play** para ejecutar tu juego, luego presiona Play otra vez para **detenerlo.**

Marcar paso como completado

## 6. ¿Cómo mover la cámara detrás del vehículo?

Q&A (0)

> Para que el jugador pueda visualizar el juego correctamente, tenemos que ubicar la cámara en un ángulo óptimo detrás del vehículo.

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

1. Usa las herramientas **Move (Mover)**y**Rotate (Girar)** para mover la cámara detrás del vehículo mientras lo ves desde arriba.
2. **Mantén presionado Ctrl/Cmd** para mover la cámara en unidades enteras.

Marcar paso como completado

## 7. ¿Cómo personalizar el Layout de la interfaz?

Q&A (0)

> Por último, tenemos que personalizar el Layout (Diseño) del Editor de Unity para que se adapte perfectamente a la edición de nuestro proyecto.

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

1. En la esquina superior derecha, cambia el Layout de Default (Por defecto) a **Tall** (Alto).
2. Mueve la **vista de Juego** debajo de la ventana Escena.
3. En la ventana **Project,**haz clic en el pequeño menú desplegable de la parte superior derecha y elige **One-column layout (Diseño de una columna).**
4. En el menú desplegable de Layout, **guarda el nuevo Layout** y nómbralo «My Layout».

Marcar paso como completado

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

**Nueva funcionalidad**

- Proyecto configurado con Assets importados
- Vehículo ubicado al comienzo de la carretera
- Obstáculo ubicado frente al vehículo
- Cámara ubicada detrás del vehículo

**Nuevos conceptos y habilidades**

- Crear un nuevo proyecto
- Importar Assets
- Añadir objetos a la Escena
- Ventana Escena frente a vista de Juego
- Ventanas Project, Hierarchy e Inspector
- Navegar en el espacio en 3D
- Herramientas Move y Rotate
- Personalizar el Layout

**Siguiente lección**

- Haremos que sea realmente interactiva y escribiremos nuestra primera línea de código en C# para hacer que el vehículo se mueva y choque con otros objetos en la Escena.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
