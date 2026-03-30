[Image: image]

# Build a new scene with glasses spanish

Tutorial

Beginner

+10XP

45 mins

1

(30)

Unity Technologies

[Image: Build a new scene with glasses spanish]Summary

En este proyecto, aprenderás a implementar varios filtros que se puedan seleccionar y personalizar por medio de una interfaz de usuario. Los usuarios podrán elegir entre diferentes pares de anteojos y seleccionar el color que más les guste.

En este tutorial, harás lo siguiente:

- Descargar e importar los Assets (Recursos) proporcionados.
- Configurar el proyecto para la detección y el seguimiento de caras.
- Seleccionar los pares de anteojos que podrán elegir los usuarios.
- Crear y probar la aplicación para ver los anteojos.

Languages available:

EspañolEnglishEspañolFrançais日本語한국어Español

## 1. Descripción general

Q&A (0)

En el proyecto anterior, diseñaste y creaste un solo filtro facial con diferentes características, como texturas de caras, mallas y animaciones. Aunque agregaste varias características diferentes al filtro, era una sola opción. Las aplicaciones suelen ofrecer varias opciones para que los usuarios experimenten y elijan entre ellas.

En este proyecto, aprenderás a implementar varios filtros que se puedan seleccionar y personalizar por medio de una interfaz de usuario (UI). Durante el proceso, explorarás diferentes opciones para crear una interfaz de usuario en Unity, ampliarás tus conocimientos sobre los filtros faciales en AR (Realidad aumentada) y, lo que es más importante, crearás tus primeras características interactivas con Visual Scripting.

Echemos un vistazo a la aplicación que vas a crear:

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

Marcar paso como completado

## 2. ¿Cómo configurar una nueva Escena?

Q&A (0)

Al igual que como lo hiciste en el proyecto anterior, primero crearás y configurarás una nueva Scene (Escena) con el modelo en AR proporcionado. Estos primeros pasos son los mismos que seguiste antes, por lo que puedes intentar completarlos con estas instrucciones más breves para ver qué tanto recuerdas. Si tienes dificultades, puedes revisar el [tutorial de configuración anterior](https://learn.unity.com/tutorial/set-up-a-face-tracking-project)para ver más detalles.

Sigue estas instrucciones para configurar la nueva Escena:

**1.**  Selecciona **File**> **New Scene** para [crear una nueva Escena](https://learn.unity.com/tutorial/configure-your-ar-development-environment?uv=2021.3&courseId=6346b7e5edbc2a7caec0f8fc&projectId=633b041bedbc2a6de5496294#633c1a5fedbc2a1cb018accb) con el modelo de AR.

**2.**  Selecciona **File**> **Save As** y guarda la Escena con el nombre «InteractiveFilter» en la carpeta **Scenes**.

**3.**  En la ventana Hierarchy (Jerarquía), elimina el GameObject **Cube (Cubo)**.

**4.**  En la ventana Hierarchy, selecciona el GameObject **AR Camera (Cámara de AR)** (que es un elemento secundario de **AR Session Origin u Origen de la sesión de AR**).

**5.**  En la ventana Inspector, busca al componente AR Camera Manager (Administrador de la cámara de AR) y, en la opción**Facing Direction (Dirección de enfoque),**selecciona **User o Usuario.**

**6.**  Guarda la Escena.

Ahora, la Escena está lista.

[Image: image]Marcar paso como completado

## 3. ¿Cómo configurar los ajustes de creación?

Q&A (0)

También debes agregar la nueva Escena a los ajustes de creación y asegurarte de que sea la única que incluya en el proceso. Puedes hacer esto en cualquier momento antes de completar la primera prueba de creación. Sin embargo, la práctica recomendada es agregar la Escena inmediatamente después de crearla, para que no se te olvide más adelante y no pierdas tiempo si se crea una Escena anterior.

Sigue estas instrucciones para actualizar los ajustes de creación:

**1.**  Abre la ventana de ajustes de creación (**File** > **Build Settings**).

**2.**  En la sección Scenes in Build (Escenas en la versión), selecciona **Add Open Scenes (Agregar Escenas abiertas).** De esta manera, la nueva Escena **InteractiveFilter** se agregará a la lista de Scenes In Build.

**3.**  Si la Escena **BasicFaceFilter**está activada, desactívala en la misma lista.

[Image: image]

**Consejo**: también puedes hacer clic derecho en una Escena de la lista y seleccionar **Remove Selection (Eliminar selección)**para eliminarla por completo de la lista.

Ahora podrás crear la aplicación cuando tengas todo listo para probar tus avances.

Marcar paso como completado

## 4. ¿Cómo importar los nuevos Assets?

Q&A (0)

Al igual que en el proyecto anterior, te proporcionamos un conjunto de Assets iniciales para que los personalices como quieras mientras creas la aplicación.

Sigue estas instrucciones para importar los Assets:

**1.**  Descarga el archivo [Interactive Face Filter Assets (Assets de filtros faciales interactivos)](https://connect-prd-cdn.unity.com/20221012/320decc0-2e9e-4d0a-b7ce-fd60a1a2b4e5/Interactive_Face_Filter_Assets.zip).

**2.**  Descomprime la carpeta que descargaste y busca el archivo **InteractiveFaceFilter.unitypackage**.

**Nota**: es importante que descomprimas por completo la carpeta en lugar de hacer doble clic para explorar su contenido. Si intentas importar archivos comprimidos, se producirá un error.

**3.**  Arrastra el archivo **InteractiveFaceFilter.unitypackage** a la ventana Project (Proyecto) del Editor de Unity. Esta técnica es diferente a la que utilizaste para importar Assets en el tutorial anterior (las dos alternativas funcionan).

**4.**  Cuando aparezca la ventana de diálogo Import Unity Package (Importar paquete de Unity), selecciona **Import (Importar)**.

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

De esta manera, los nuevos Assets se importarán en tu proyecto.

Marcar paso como completado

## 5. ¿Cómo explorar los nuevos Assets?

Q&A (0)

Antes de continuar, dedica un momento a explorar los Assets que acabas de importar:

**1.**  Familiarízate con el contenido del paquete en la ventana Project. Hay cuatro carpetas:

- **Meshes (Mallas)**: contiene cinco pares de anteojos con estilos únicos.
- **Prefabs**: contiene un GameObject **AR_Canvas (Canvas de AR)**, que es el punto de partida para la interfaz de usuario de la aplicación.
- **Resources (Recursos)**: contiene un modelo en formato PSD con el que puedes crear tu propio ícono de anteojos para la interfaz de usuario.

**Sprites**: contiene los Sprites que utilizarás para crear el diseño de la interfaz de usuario.

[Image: image]

**2.**  Abre la carpeta **Meshes**y selecciona los Assets uno por uno para revisarlos en la ventana Inspector (pronto elegirás tres de ellos para agregarlos a la aplicación).

[Image: image]Marcar paso como completado

## 6. ¿Cómo agregar un Face Manager?

Q&A (0)

Los filtros de esta aplicación estarán completamente basados en mallas y funcionarán de manera un poco similar a los accesorios del proyecto anterior. La principal diferencia entre las dos aplicaciones será la manera en que se crean los Prefabs.

Antes de eso, debes configurar el GameObject **AR Session Origin:**

**1.**  En la ventana Hierarchy, selecciona el GameObject **AR Session Origin**.

**2.**  En la ventana Inspector, selecciona **Add Component (Agregar componente)**.

**3.**  Busca el componente AR Face Manager (Administrador de caras en AR) y agrégalo.

[Image: image]

Utilizaste el Face Manager en el proyecto anterior. Este componente administra las caras humanas que se detectan en la Escena.

Marcar paso como completado

## 7. ¿Cómo crear el GlassesGroup?

Q&A (0)

En lugar de crear un Prefab para cada par de anteojos, crearás un solo Prefab que contenga todos los anteojos que seleccionaste para la aplicación, el cual se llamará GlassesGroup. Más adelante, ampliarás las características de este Prefab y crearás un script visual para activar y desactivar la visibilidad de cada par de anteojos en tiempo real según el botón que seleccione el usuario.

Sigue estas instrucciones para crear un solo GameObject que contenga todos los pares de anteojos:

**1.**  En la ventana Project, ve a **Assets** > **_InteractiveFaceFilter** > **Meshes**.

**2.**  Arrastra los tres pares de anteojos que desees agregar a la aplicación desde la ventana Project a la ventana Hierarchy.

**3.**  En la ventana Hierarchy, selecciona cada par de anteojos y revisa que su propiedad **Transform Position (Posición de Transform)** tenga los valores**0,0,0** en la ventana Inspector.

[Image: image]

**4.**  Selecciona los tres pares de anteojos en la ventana Hierarchy. Luego, haz clic derecho y selecciona **Create Empty Parent (Crear elemento primario vacío)**. De esta manera, se creará un nuevo GameObject primario para los GameObjects anteojos.

**Consejo**: si deseas seleccionar varios GameObjects, mantén presionado Ctrl (macOS: Cmd) al hacer clic en ellos.

**5.**  Cambia el nombre del nuevo GameObject primario a «GlassesGroup».

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

Marcar paso como completado

## 8. ¿Cómo configurar el GlassesGroup como Prefab AR Face?

Q&A (0)

Para que el GlassesGroup aparezca sobre tu cara, debes convertirlo en un Prefab que se pueda aplicar sobre la cara del usuario.

Sigue estas instrucciones para configurar el **GlassesGroup** como Prefab **AR Face (Cara en AR)**:

**1.**  En la ventana Inspector, selecciona el **GlassesGroup**, haz clic en **Add Component** y agrega un componente AR Face.

[Image: image]

Este componente permitirá que el GlassesGroup haga el seguimiento de las caras detectadas.

**2.**  En la ventana Project, ve a **Assets** > **_InteractiveFaceFilter** > **Prefabs**.

**3.**  Arrastra el GameObject **GlassesGroup** desde la ventana Hierarchy a la carpeta ubicada en la ventana Project para convertirlo en Prefab. Al terminar este paso, el GameObject debe aparecer de color azul en la ventana Hierarchy.

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

**4.**En la ventana Hierarchy, selecciona el GameObject **AR Session Origin**. En la ventana Inspector, busca su componente AR Face Manager (Script).

**5.**Arrastra el Prefab **GlassesGroup** desde la ventana Project y asígnalo a la propiedad **Face Prefab (Prefab Cara)** en el componente AR Face Manager.

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

**Importante**: arrastra el Prefab **GlassesGroup** desde la ventana Project y no desde la ventana Hierarchy.

Marcar paso como completado

## 9. ¿Cómo preparar el entorno de prueba?

Q&A (0)

A lo largo de este proyecto, harás pruebas en el Editor de Unity y en tu dispositivo móvil. Ambos métodos de prueba tienen pros y contras:

- En el Editor de Unity, las pruebas son muy rápidas y puedes evaluar con precisión el funcionamiento de las interacciones creadas. Sin embargo, no podrás ver los filtros que tengas en proceso directamente sobre tu cara.
- En el dispositivo móvil, las pruebas te permitirán ver cómo funciona el filtro sobre tu cara, pero el proceso para crear la aplicación puede tardar varios minutos. Si algo no funciona de la manera esperada, también puede ser mucho más difícil entender por qué.

Si utilizas ambos métodos de prueba, podrás aprovechar sus fortalezas y minimizar el impacto de sus debilidades.

Primero prepararás el Editor de Unity para las pruebas en general y luego prepararás la Escena para las pruebas en el dispositivo. Sigue estas instrucciones para preparar el entorno de prueba:

**1.**Selecciona la pestaña **Game (Juego)**.

**2.**En la barra de control de la **vista de Juego**, ve a **Aspect Ratio (Relación de aspecto)** y elige **16:9 Portrait (16:9 vertical)** en el menú desplegable. La relación de aspecto de la vista de Juego cambiará para simular la pantalla de un teléfono en modo vertical.

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

**3.**En la ventana Hierarchy, selecciona el GameObject **GlassesGroup**.

**4.**En la ventana Inspector, busca el componente Transform y, en la propiedad **Position (Posición)**, cambia el valor de **Z** a **0.4**. Cuando hagas esto, los anteojos aparecerán centrados en la vista de Juego.

[Image: image]

**5.**Selecciona el Prefab **GlassesGroup** en la ventana Project y, en la propiedad **Position**, cambia el valor de **Z** a **0.4,**como lo hiciste con el Prefab en la ventana Hierarchy.

[Image: image]

Ahora, ambos entornos de prueba están completos. Para hacer pruebas en el Editor de Unity, utilizarás el Prefab **GlassesGroup** en la ventana Hierarchy. Para hacer pruebas en tu dispositivo móvil, desactivarás el Prefab **GlassesGroup** y crearás la aplicación en tu dispositivo. Si esto suena complicado por ahora, no te preocupes. Te guiaremos en cada paso.

Marcar paso como completado

## 10. ¿Cómo crear y probar la aplicación?

Q&A (0)

Ahora tienes todo listo para crear tu primera versión de prueba:

**1.**  En la ventana Hierarchy, selecciona el Prefab **GlassesGroup**.

**2.**  En la ventana Inspector, desactiva el Prefab **GlassesGroup** con la casilla de selección ubicada en la parte superior de la ventana que está junto a su nombre.

**Importante**: si no desactivas el Prefab**GlassesGroup** al crear la aplicación, verás un par de anteojos flotantes en el centro de la pantalla del dispositivo móvil.

**3.**  Guarda la Escena.

**4.**  Abre la ventana Build Settings (**File** > **Build Settings**).

**5.**  Asegúrate de que el dispositivo esté conectado. Luego, selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

**6.** La aplicación se abrirá automáticamente en el dispositivo. Cuando se detecte una cara, los tres anteojos que seleccionaste deberían aparecer sobre ella.

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

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o [iOS.](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641)

Marcar paso como completado

## 11. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas.

Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: modifica los anteojos existentes

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

El tamaño y las características actuales de los anteojos que forman parte del proyecto hacen que se vean normales sobre todo tipo de caras. Uno de los aspectos divertidos de los filtros es que se pueden usar para agregar elementos alocados o graciosos. Modifica las propiedades de Transform de los anteojos proporcionados para cambiar su tamaño o rotación y hacer que las pruebas sean más divertidas.

#### Medio: importa otros anteojos desde un recurso en línea

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

En algunos sitios web, como[Sketchfab](https://sketchfab.com/), puedes descargar muchos modelos de anteojos para importarlos en tu proyecto. Visita uno de esos sitios y busca un par de anteojos que se pueda agregar a tu proyecto de filtro. Al seleccionar los modelos, debes tener en cuenta tres factores importantes:

- **Formato del modelo:** asegúrate de elegir un modelo que tenga un formato compatible con Unity. El Manual de Unity (en inglés) contiene información sobre los[tipos de archivos compatibles con Unity.](https://docs.unity3d.com/2021.3/Documentation/Manual/3D-formats.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953414658)
- **Complejidad de los modelos:** al seleccionar y descargar estos archivos, es importante tener en cuenta la complejidad de cada modelo. También es importante buscar modelos con geometría simple para facilitar la optimización.
- **Licencia de uso del modelo:** es importante poner atención al tipo de licencia que se ofrece para el archivo y seguir las indicaciones de uso adecuado. Muchos modelos disponibles en línea tienen una licencia Creative Commons (CC) que permite su uso, y muchas licencias CC indican específicamente lo que el artista te permite hacer con su modelo. Puedes encontrar más información sobre las licencias CC en el[sitio web de Creative Commons](https://creativecommons.org/).

El proyecto de ejemplo anterior utiliza «steampunk glasses» ([https://skfb.ly/6QX6V](https://skfb.ly/6QX6V)), de Kisielev Mikhail, que tiene la licencia de atribución Creative Commons ([http://creativecommons.org/licenses/by/4.0/](http://creativecommons.org/licenses/by/4.0/)).

#### Difícil: crea tus propios anteojos

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

No solo tienes que usar los anteojos que te proporcionamos. Si eres artista 3D, puedes crear tus propios pares de anteojos e incluirlos en este proyecto. Puedes diseñar anteojos personalizados a tu gusto. Aquí tienes algunos consejos para comenzar:

- Incluye únicamente la parte frontal del armazón: todas las partes de los anteojos estarán a la vista en todo momento, por lo que, cuando el usuario voltee la cabeza, las patas del armazón podrían encimarse a las orejas del usuario e interrumpir la inmersión. Tal vez hayas visto esto en el ejemplo del desafío de nivel medio de esta sección. Puedes hacer que tu modelo termine en el punto donde los anteojos pasarían por detrás de la oreja, pero es posible que el modelo no toque la oreja del usuario si este tiene la cara un poco más larga que el promedio. Si quieres incluir el armazón completo, intenta encontrar una solución creativa para mostrarlo de forma realista sobre la cabeza del usuario.
- Mantén una cantidad de polígonos baja: recuerda que, al crear una aplicación móvil, los modelos deben tener la mayor optimización posible. Debido a que esta aplicación solo tiene tres Assets en 3D, puedes usar más polígonos de lo normal. ¡Aprovéchalos! Si necesitas repasar los consejos de optimización para dispositivos móviles, revisa la [guía de optimización de mallas.](https://learn.unity.com/tutorial/add-accessories-to-your-filter#633d929dedbc2a54931ccfa1)
- Utiliza un solo material en el modelo: en los siguientes tutoriales, implementarás la función para cambiar el color de los anteojos. El script visual que crearás buscará un solo material en la malla y lo cambiará por el color que haya seleccionado el usuario. Al limitarte a un solo color, podrás asegurarte de que tus modelos sean compatibles con esta función.

**Requisitos de los modelos**

Si quieres crear tus propios modelos de anteojos, ya deberías saber cómo se usa el software para crear modelos en 3D. Todos los anteojos creados por ti deben tener el punto de eje en el punto de origen de la Escena y luego se deben desplazar para alinearse con el GameObject AR Face. Para hacer esto, puedes importar el GameObject **Face_Reference_Mesh** en el programa de modelado en 3D y usarlo para alinear los anteojos.

Cuando importes el GameObject **Face_Reference_Mesh** en el programa de modelado en 3D, déjalo en el punto de origen de la Escena. Esto puede provocar que atraviese la cuadrícula del programa de modelado en 3D, como puedes ver en el siguiente video de Maya. Como puedes ver, los anteojos de gato tienen un eje de desfase en el punto de origen de la Escena. La malla incluye un rig muy sencillo conectado a la frente y nariz. La articulación raíz de este rig estará en el punto de origen de la Escena, donde también deben estar los ejes de los anteojos.

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

Después de crear los anteojos y establecer sus puntos de eje, sigue estos pasos:

**1.**  Exporta los nuevos anteojos como archivo FBX.

**2.**En la ventana Project del Editor de Unity, ve a **Assets** > **_InteractiveFaceFilter**> **Models**.

**3.**  Arrastra el archivo FBX a la carpeta **Meshes**.

**4.**  Actualiza el Prefab para que incluya los anteojos que creaste.

Marcar paso como completado

## 12. Próximos pasos

Q&A (0)

En este tutorial, configuraste una nueva Escena y creaste el Prefab básico para la aplicación de anteojos. En el siguiente tutorial, configurarás la interfaz de usuario de la aplicación para que los usuarios puedan personalizar los anteojos que elijan.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
