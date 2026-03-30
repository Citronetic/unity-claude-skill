[Image: image]

# Set up a scene with plane detection spanish

Tutorial

Beginner

+10XP

45 mins

3

(34)

Unity Technologies

[Image: Set up a scene with plane detection spanish]Summary

En este proyecto, crearás una aplicación de AR (Realidad aumentada) que utilice tecnología de detección de planos.

Puedes usar la detección de planos para crear un entendimiento aproximado del entorno físico que rodea al usuario en AR, como el piso, las paredes y cualquier superficie plana grande (mesas, sillones, etc.).

La detección de planos resulta extremadamente útil en las aplicaciones de AR. Con frecuencia, las aplicaciones les piden a los usuarios que coloquen objetos en superficies reales del entorno para que parezca que esos objetos forman parte del mundo real.

En este primer tutorial, configurarás una nueva Scene (Escena) en tu proyecto de Unity. Luego configurarás la Escena para detectar planos en el entorno.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

En este proyecto, crearás una aplicación de AR (Realidad aumentada) que utilice tecnología de detección de planos. ARKit (para dispositivos iOS) y ARCore (para dispositivos Android) pueden detectar superficies planas (o **planos**) en el entorno físico. Pueden ser planos horizontales, como el piso o una mesa, o planos verticales, como las paredes.

En tu aplicación, el usuario podrá tocar un plano vertical (probablemente una pared) o un plano horizontal (como una mesa o el piso) para colocar un portal en él. Este portal será una ventana a un entorno virtual en 3D que el usuario podrá ver y explorar.

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

En este primer tutorial, configurarás una nueva Escena en el proyecto de Unity que creaste para el proyecto con marcadores. Luego configurarás la Escena para detectar planos en el entorno. Al finalizar este tutorial, tu proyecto tendrá un aspecto similar al del siguiente ejemplo.

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

## 2. ¿Para qué sirve la detección de planos?

Q&A (0)

Puedes usar la detección de planos para crear un entendimiento aproximado del entorno físico que rodea al usuario en AR, como el piso, las paredes y cualquier superficie plana grande (mesas, sillones, etc.).

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

La detección de planos resulta extremadamente útil en las aplicaciones de AR. Con frecuencia, las aplicaciones les piden a los usuarios que coloquen objetos en superficies reales del entorno para que parezca que esos objetos forman parte del mundo real.

Explora los siguientes ejemplos de uso de detección de planos:

- En [Jurassic World: Alive](https://youtu.be/JWk1RE-m_Kg?t=15), los usuarios pueden ver dinosaurios a su alrededor en la calle.
- En [Angry Birds AR: Isle of Pigs](https://play.google.com/store/apps/details?id=com.rovio.abar), los usuarios pueden colocar el área del juego en cualquier superficie plana que sea lo suficientemente grande.
- En la aplicación [Wayfair AR](https://www.youtube.com/watch?v=BrZUEL3LJtU&ab_channel=Wayfair.com), los usuarios pueden colocar y visualizar muebles virtuales en espacios físicos.

#### ¿Por qué crear un portal?

Un portal es un caso de uso ideal para la tecnología de AR porque no es una experiencia que se puede replicar en el monitor de una computadora o en VR (Realidad virtual). El usuario puede generar uno de estos portales en el piso de su sala, en su escritorio o en la pared exterior de un edificio, y lo puede hacer en cualquier momento, siempre y cuando tenga su dispositivo móvil a la mano.

Mientras configuras el proyecto en este tutorial, piensa en algunos portales de la cultura popular que podrían servir como inspiración para el portal que vas a crear. Si necesitas ayuda, utiliza los siguientes ejemplos para comenzar:

- El armario de Las crónicas de Narnia
- La TARDIS de Dr. Who
- Los portales de la serie de videojuegos Portal
- Los portales creados por Dr. Strange en las películas de Avengers

Marcar paso como completado

## 3. ¿Cómo importar los Assets de portales en AR?

Q&A (0)

Ahora que entiendes qué es la detección de planos y para qué se puede usar, puedes empezar a trabajar en tu propio proyecto de detección de planos.

Sigue estas instrucciones para importar los Assets (Recursos) de portales:

**1.**Si aún no tienes abierto el proyecto de Unity de la aplicación en AR con marcadores, ábrelo ahora.

**2.**  Descarga y descomprime el archivo [AR Portal assets](https://connect-prd-cdn.unity.com/20221201/bca4773d-1907-4cdd-b645-e2fceed5a2cb/AR_Portal_Assets.zip)[.](https://learn.unity.com/project/create-a-plane-detection-ar-app)

**3.**  En Unity, ve al menú principal y selecciona **Assets**> **Import Package** > **Custom package**.

**4.** Ve a la ubicación donde se descomprimió el archivo, selecciona el archivo **ARPortalAssets.unitypackage** y haz clic en **Open (Abrir)**.

**5.**  En la ventana Import Unity Package (Importar paquete de Unity), revisa que todos los Assets estén seleccionados y haz clic en **Import (Importar)**.

**6.**  En Unity, ve a la ventana Project (Proyecto) y luego ve a **Assets** > **_ARPortal**> **Prefabs**. Antes de continuar, explora los Assets que acabas de importar.

[Image: image]Marcar paso como completado

## 4. ¿Cómo seleccionar el tema del portal?

Q&A (0)

El paquete que importaste contiene tres conjuntos de Assets distintos que forman parte de otro contenido de aprendizaje de Unity. Seleccionarás uno de estos entornos temáticos para que los usuarios de la aplicación lo vean dentro del portal.

#### John Lemon

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

Los Assets de John Lemon forman parte de [El paseo encantado de John Lemon: 3D para principiantes](https://assetstore.unity.com/packages/templates/tutorials/3d-beginner-complete-project-143846). Este proyecto para principiantes en 3D incluye el interior de una mansión encantada de caricatura llena de fantasmas alocados, retratos divertidos y John Lemon, el personaje principal amable y tímido.

#### La calle

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

Los Assets de la calle provienen de la muestra funcional del curso [Practical Game Accessibility (Accesibilidad práctica para juegos)](https://assetstore.unity.com/packages/essentials/tutorial-projects/practical-game-accessibility-case-study-223056). Los Assets generan una escena fantástica en una calle exterior que llega a una biblioteca.

#### La cabaña de la bruja

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

Los Assets de la cabaña de la bruja forman parte del proyecto [VR para principiantes: Habitación de escape](https://assetstore.unity.com/packages/templates/tutorials/vr-beginner-the-escape-room-163264). El proyecto de VR para principiantes incluye el interior de una cabaña de bruja ecléctica con una gran variedad de objetos mágicos fascinantes.

#### Explora las opciones de entornos para el portal

Sigue estas instrucciones para explorar las tres opciones de entornos y elegir la que más te guste:

**1.**En la carpeta Project, ve a **Assets**>**_ARPortal**>**Source Files** > **Sample Scenes**.

**2.**Abre las tres Escenas y explóralas en la vista de Escena.

**3.**Decide cuál de los tres conjuntos de Assets de entorno quieres usar para el portal.

**Nota**: también puedes importar Assets personalizados para el entorno del portal, pero te recomendamos intentarlo hasta después de haber implementado correctamente la funcionalidad del portal con los Assets que te proporcionamos.

Marcar paso como completado

## 5. ¿Cómo crear una nueva Escena?

Q&A (0)

Ahora que seleccionaste un conjunto de Assets, sigue estas instrucciones para crear una nueva Escena:

**1.**  Selecciona **File**> **New Scene** para [crear una nueva Escena](https://learn.unity.com/tutorial/configure-your-ar-development-environment?uv=2021.3&courseId=6346b7e5edbc2a7caec0f8fc&projectId=633b041bedbc2a6de5496294#633c1a5fedbc2a1cb018accb) con el modelo de AR.

**2.**  Selecciona **File**> **Save As** y guarda la Escena con el nombre «AR_Portal» en **Assets**>**_ARPortal**>**Scenes**.

[Image: image]

**3.**En la ventana Hierarchy (Jerarquía), selecciona el GameObject **Cube (Cubo)** y elimínalo. Este GameObject solo se incluye con el fin de hacer pruebas.

Marcar paso como completado

## 6. ¿Cómo configurar un Default Plane con un nuevo material?

Q&A (0)

AR Foundation incluye un GameObject **Default Plane (Plano predeterminado)**, el cual se utiliza para mostrar los planos detectados en el entorno físico del usuario.

[Image: image]

Primero, debes crear un nuevo Prefab **AR Default Plane (Plano predeterminado en AR)**, el cual se colocará en la Escena cada vez que se detecte un plano.

Sigue estas instrucciones para crear el Prefab y personalizar el color de su material:

**1.**En la ventana Hierarchy, haz clic derecho y selecciona **XR**>**AR Default Plane**.

**2.** Selecciona el nuevo GameObject **AR Default Plane** y examina los siguientes componentes en la ventana Inspector:

- El componente AR Plane (Script) o Plano en AR (Script) representa un plano detectado por un dispositivo de AR que se puede colocar cuando se detecta una superficie plana.
- El componente AR Plane Mesh Visualizer (Script) o Visualizador de mallas de planos en AR (Script) se encarga de mostrar el material y el contorno de un plano en AR detectado.
- El componente Mesh Renderer (Renderizador de mallas) tiene un material **DebugPlane** asignado.
- El componente Line Renderer (Renderizador de líneas) administra la apariencia del contorno del plano.

[Image: image]

**3.**En el componente Mesh Renderer, expande la sección **Materials (Materiales)**.

**4.**  Haz clic en el selector de objetos (círculo) de **Element 0** y elige uno de estos tres materiales alternativos: **Plane_Green**, **Plane_Blue** o **Plane_Red**. El material que selecciones será el color con el que resaltarán los planos detectados.

[Image: image]

**Importante**: el material predeterminado **DebugPlane** no funciona. Si no sigues la instrucción anterior, no se mostrarán los planos.

**5.**  En la ventana Project, ve a **Assets** > **_ARPortal** > **Prefabs**.

**6.**  Haz clic en el GameObject **AR Default Plane** y arrástralo desde la ventana Hierarchy a la carpeta **Prefabs** en la ventana Project.  Ahora, el ícono y el nombre del GameObject deben aparecer de color azul claro en la ventana Hierarchy.

[Image: image]

**7.**En la ventana Hierarchy, elimina el GameObject **AR Default Plane**. Cuando se detecte un plano, AR Foundation generará un GameObject **AR Default Plane** con el Prefab que acabas de crear.

Marcar paso como completado

## 7. ¿Cómo configurar el AR Plane Manager?

Q&A (0)

A continuación, debes especificar cuál GameObject deseas mostrar sobre un plano cuando lo detecte la aplicación. Para esto, utilizarás un nuevo componente llamado AR Plane Manager (Administrador de planos en AR). El proceso de configuración del AR Plane Manager es igual al que utilizaste para el AR Face Manager en otros proyectos anteriores.

Sigue estas instrucciones para configurar el componente AR Plane Manager:

**1.**En la ventana Hierarchy, selecciona el GameObject **AR Session** **Origin (Origen de la sesión de AR)**.

**2.**  En la ventana Inspector, selecciona **Add Component (Agregar componente)** y luego busca y agrega el componente AR Plane Manager. Este componente [creará un GameObject para cada plano que se detecte en el entorno](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.0/manual/plane-manager.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953324609).

[Image: image]

**3.**En el componente AR Plane Manager, busca la propiedad **Plane Prefab (Prefab Plano)**.

**4.**  Haz clic en el Prefab **AR Default Plane**, arrástralo desde la ventana Project (en **Assets**>**_ARPortal**>**Prefabs**) y asígnalo a la propiedad **Plane Prefab**.

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

**5.**En el componente AR Plane Manager, en la propiedad **Detection Mode (Modo de detección)**, elige **Vertical** u **Horizontal**, pero no elijas Everything (Todo).

[Image: image]

Sí deseas que el portal aparezca en la pared como una ventana, selecciona Horizontal en el campo Detection Mode. Sí deseas que el portal aparezca en el piso o en la mesa como si vieras la Escena desde arriba, selecciona Vertical en el campo Detection Mode.

Marcar paso como completado

## 8. ¿Cómo crear y probar la aplicación?

Q&A (0)

Llegó la hora de probar el proyecto. El siguiente video muestra cómo debería funcionar la aplicación en el dispositivo.

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

Sigue estas instrucciones para crear el proyecto en el dispositivo y probarlo en su estado actual:

**1.**En la ventana Hierarchy, revisa que se haya eliminado el GameObject **AR Default Plane**. Recuerda que la aplicación colocará el Prefab cuando se detecte un plano.

**2.**  Guarda la Escena.

**3.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**4.**Selecciona **Add Open Scenes (Agregar Escenas abiertas)**para agregar la Escena actual al proceso de creación. Si ves otras Escenas anteriores en esta sección, desmárcalas para que no se incluyan en la nueva versión que vas a crear.

[Image: image]

**5.**  Asegúrate de que el dispositivo esté conectado a la computadora y selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o [iOS](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641).

**6.** La aplicación se abrirá automáticamente en el dispositivo. Apunta lentamente la cámara hacia diferentes puntos de la Escena hasta que se detecte un plano vertical u horizontal.

**Nota**: puede ser difícil detectar planos en algunos entornos, como los espacios con paredes completamente blancas. Si tienes problemas, intenta cambiar temporalmente la opción Detection Mode del AR Plane Manager a Everything para que detecte los planos verticales y los horizontales.

Marcar paso como completado

## 9. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas.

Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: experimenta con los diferentes modos de detección de planos

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

Tal vez elegiste un portal vertical u horizontal porque prefieres ese diseño. Sin embargo, resulta útil entender cómo funciona la detección de planos del dispositivo para superficies horizontales y verticales. En el componente AR Plane Manager, en la propiedad **Detection Mode**, elige temporalmente **Everything** para ver qué tipos de superficies detecta la aplicación.

#### Medio: edita el material del AR Default Plane

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

En los Assets de este proyecto, te proporcionamos algunos materiales simples para el AR Default Plane, como Plane_Green, Plane_Red y Plane_Blue. Puedes usar cualquiera de esas tres opciones, o puedes crear tu propio material nuevo y usarlo en su lugar. El AR Default Plane tiene un componente Line Renderer que controla la apariencia del contorno del plano. También puedes editar este componente.

#### Difícil: experimenta con las nubes de puntos

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

Los **aspectos destacados** son características que resaltan en el entorno y que el dispositivo puede rastrear entre cada fotograma, como un abultamiento en una mesa de madera. Un conjunto de varios aspectos destacados se conoce como una [**nube de puntos**](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@3.0/manual/point-cloud-manager.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953324609). Las nubes de puntos simples se pueden utilizar para realizar tareas sencillas, como generar un objeto virtual en el entorno. Las nubes de puntos más complejas y detalladas se pueden utilizar para realizar tareas avanzadas, como mapear o modelar un entorno.

Para poder implementar nubes de puntos en la aplicación, necesitas el componente AR Point Cloud Manager (Administrador de nubes de puntos en AR) y un Prefab **AR Default Point Cloud (Nube de puntos predeterminada en AR)**. Este proceso es muy similar al que seguiste al configurar los componentes AR Plane Manager y AR Face Manager.

**Nota**: tal vez te convenga desactivar temporalmente el componente AR Plane Manager para poder ver la nube de puntos con claridad.

[Image: image]Marcar paso como completado

## 10. Próximos pasos

Q&A (0)

En este tutorial, seleccionaste a un conjunto de Assets para el portal y creaste una aplicación básica de detección de planos. ¡Muy bien! En el siguiente tutorial, comenzarás a trabajar en la funcionalidad de colocación del portal al detectar el momento en que el usuario toque la pantalla en la aplicación.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
