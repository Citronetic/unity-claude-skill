[Image: image]

# Configure your AR development environment spanish

Tutorial

Beginner

+10XP

45 mins

4

(181)

Unity Technologies

[Image: Configure your AR development environment spanish]Summary

Para desarrollar contenido de AR (Realidad aumentada), necesitarás una configuración un poco más específica que para los proyectos típicos de Unity porque utilizarás dos máquinas independientes: la computadora y el dispositivo de AR.

En este tutorial, te asegurarás de tener todo el software necesario configurado en la computadora y en el dispositivo móvil. Luego, abrirás y explorarás un nuevo proyecto de Unity configurado específicamente para el desarrollo de AR.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Para desarrollar contenido de AR (Realidad aumentada), necesitarás una configuración un poco más específica que para los proyectos típicos de Unity porque utilizarás dos máquinas independientes: la computadora y el dispositivo de AR.

En este tutorial, te asegurarás de tener todo el software necesario configurado en la computadora y en el dispositivo móvil. Luego, abrirás y explorarás un nuevo proyecto de Unity configurado específicamente para el desarrollo de AR.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

#### ¿No tienes experiencia con Unity?

Para aprovechar esta experiencia de aprendizaje, lo ideal es que tengas experiencia previa con el Editor de Unity. Si es la primera vez que usas Unity, te recomendamos completar el [trayecto de aprendizaje Aspectos básicos de Unity](https://learn.unity.com/pathway/unity-essentials), que está diseñado para ayudarte a hacer todos los preparativos necesarios a fin de empezar a crear en el Editor de Unity.

#### Actualiza el Unity Hub

Antes de empezar a configurar tu proyecto de Unity, considera la opción de actualizar el Unity Hub a la versión más reciente. Si utilizas una versión anterior del Hub, es posible que encuentres diferencias entre los consejos proporcionados en esta guía y tu experiencia.

#### Revisa los fundamentos del Editor de Unity

Si necesitas repasar los fundamentos del Editor de Unity, puedes revisar el tutorial[**¿Cómo explorar el Editor de Unity? (en inglés)**](https://learn.unity.com/tutorial/explore-the-unity-editor-1) en cualquier momento.

Marcar paso como completado

## 3. ¿Cómo determinar el sistema operativo objetivo?

Q&A (0)

El proceso de configuración varía según el tipo de dispositivo que tengas:

- Si tienes un iPhone o iPad, trabajarás con iOS, que es el sistema operativo patentado de Apple.
- Si tienes cualquier otro teléfono o tablet (que no sean Apple), probablemente trabajarás con Android, que es el sistema operativo móvil de Google.

Toma nota del sistema operativo que planeas utilizar, ya que esto determinará las instrucciones que deberás seguir durante el resto del proceso.

Marcar paso como completado

## 4. ¿Cómo descargar Xcode? [solo iOS]

Q&A (0)

Este paso solo es relevante para el desarrollo en iOS. Si planeas desarrollar contenido para Android, puedes omitir este paso.

Si quieres desarrollar contenido para un dispositivo portátil iOS, deberás tener un ID de Apple y una aplicación llamada Xcode instalada en la computadora Apple. **Xcode**es el entorno de desarrollo integrado (IDE) personalizado de Apple, y te permite crear y probar aplicaciones para iOS y MacOS.

Sigue estos pasos para instalar Xcode en la computadora Mac:

**1.**Asegúrate de tener un [ID de Apple](https://appleid.apple.com/sign-in) y conocer tus credenciales de inicio de sesión. Si no tienes un ID de Apple, puedes [crear uno aquí](https://appleid.apple.com/account).

**2.**Abre la aplicación App Store en la computadora Mac.

**3.**Busca «Xcode» y selecciona **Descargar**para comenzar el proceso de descarga e instalación.

[Image: image]

**Nota**: Xcode es una aplicación extremadamente grande (más de 12 GB), por lo que el proceso de descarga e instalación puede tardar mucho tiempo. Puedes avanzar al siguiente paso mientras la descarga de Xcode continúa en segundo plano.

Marcar paso como completado

## 5. ¿Cómo instalar Unity con los módulos de creación de Android o iOS?

Q&A (0)

Para poder seguir este curso, necesitarás la versión **2021.3.1f1 LTS** de Unity, junto con el módulo de creación de la plataforma que hayas elegido como objetivo (iOS o Android). Estos módulos adicionales te permitirán crear aplicaciones para la plataforma que desees con Unity.

Sigue estos pasos para instalar la versión requerida de Unity:

**1.**  Instala **Unity 2021.3.1f LTS**. Puedes encontrar esta versión específica de Unity en el [archivo de descarga de Unity](https://unity3d.com/get-unity/download/archive?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631).

**Precaución**: debes usar esta versión específica de Unity, y no la versión 2021.3 LTS más reciente, para poder completar los proyectos que forman parte de esta experiencia de aprendizaje.

**2.** Cuando se te pregunte si deseas agregar módulos durante el proceso de instalación, selecciona **Android Build Support (Soporte de creación de Android)** junto con sus submódulos o **iOS Build Support (Soporte de creación de iOS).**

[Image: image]

**Nota**: si ya habías instalado la versión 2021.3.1f1 de Unity, puedes [agregar módulos a una instalación existente](https://learn.unity.com/tutorial/project-setup-processes#60ed7a4cedbc2a002096b758).

Marcar paso como completado

## 6. ¿Cómo descargar y abrir el proyecto inicial de AR?

Q&A (0)

Cuando termine la instalación de Unity junto con todos los módulos de creación correspondientes, tendrás todo listo para abrir el proyecto inicial de AR.

Sigue estos pasos para abrir el proyecto con el Unity Hub:

**1.** Descarga el archivo [**AR_Template_Zip**](https://connect-prd-cdn.unity.com/20221012/0101d577-2bc9-4b30-9b05-c7872e76e902/AR_Template_Zip.zip) y haz doble clic en él para ver su contenido.

**2.**  Busca la carpeta **AR_Template_Project** en el interior de la carpeta comprimida y muévela a una ubicación adecuada de la computadora.

**3.**Cambia el nombre de la carpeta **AR_Template_Project** por algo más adecuado, como «**[tu-nombre]_AR_Project**».

**4.** [Agrega el proyecto de Unity al Unity Hub](https://learn.unity.com/tutorial/project-setup-processes#60ed7a5aedbc2a002520b6ea) y ábrelo.

Si ves un ícono de advertencia junto a la versión del Editor de tu proyecto, quiere decir que no tienes instalada la versión correcta de Unity. Si esto sucede, deberás volver al paso anterior e instalar la versión específica de Unity que se requiere para este proyecto.

[Image: image]

Ahora, el proyecto de AR debería estar abierto en Unity.

Marcar paso como completado

## 7. ¿Cómo explorar el proyecto inicial?

Q&A (0)

Este proyecto inicial está preconfigurado con todos los paquetes y ajustes necesarios para el desarrollo de AR, lo que te permite ahorrar tiempo al crear tu primer proyecto de AR. Examinemos el proyecto para entender por qué está listo para trabajar con AR.

#### Paquetes

Sigue estos pasos para explorar los paquetes que necesitarás en tus proyectos de AR:

**1.**En el menú principal, selecciona **Window** > **Package Manager**.

**2.**En el menú desplegable **Packages (Paquetes)**, selecciona **In Project (En el proyecto)** para ver únicamente los paquetes incluidos en el proyecto actual.

**3.**Como puedes ver, hay cuatro paquetes que no forman parte de los proyectos predeterminados de Unity: AR Foundation, ARCore, ARKit y XR Plugin Management (Administración de complementos de XR o Realidad extendida).

[Image: image]

- El paquete [**AR Foundation**](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.2/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631) proporciona todos los GameObjects y las clases que necesitas para desarrollar rápidamente experiencias de AR interactivas en Unity.
- [**ARCore**](https://developers.google.com/ar/develop) es el marco de AR de Android. AR Foundation se comunica con ARCore para obtener las características de AR en los dispositivos Android.
- [**ARKit**](https://developer.apple.com/documentation/arkit/) es el marco de AR de Apple. AR Foundation se comunica con ARKit para obtener las características de AR en los dispositivos Apple.
- El paquete [**XR Plugin Management**](https://docs.unity3d.com/Manual/com.unity.xr.management.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631) es una herramienta sencilla que administra todos los complementos de XR específicos para determinadas plataformas, como ARKit y ARCore.

[Image: image]

En Unity, puedes utilizar AR Foundation a fin de desarrollar características de AR para iOS y Android. Sin embargo, estas dos plataformas no ofrecen el mismo nivel de compatibilidad. Si lo deseas, puedes obtener más información sobre la [compatibilidad de características específicas por plataforma](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.2/manual/index.html#platform-support?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631). Actualmente, ARKit admite más características que ARCore, incluidos el seguimiento de objetos en 3D y el seguimiento del cuerpo.

#### Ajustes del reproductor

Algunos ajustes del reproductor también están preconfigurados para el desarrollo de AR. Sigue estos pasos para explorar los ajustes del reproductor:

**1.**Ve al menú principal y selecciona **Edit**> **Project Settings**.

**2.**En el panel izquierdo, selecciona **Player (Reproductor)**.

**3.** En la sección de configuración de **Player**, elige la pestaña **iOS**o **Android**, según tu objetivo.

**4.**  Busca y explora la sección **Other Settings (Otras configuraciones)**.

[Image: image]

La mayoría de estas opciones de configuración son bastante técnicas, por lo que no es necesario que las entiendas por completo ni que las recuerdes por ahora. Si te interesa aprender más sobre el tema, estos son algunos de los ajustes realizados previamente para el desarrollo de AR:

- Se eliminaron las interfaces de programación de aplicaciones (API) de gráficos Vulkan para Android, ya que aún no son compatibles con ARCore.
- Se establecieron los niveles de API mínimos para iOS y Android.
- Se configuró la opción Scripting Backend (Backend de creación de scripts) con el valor IL2CPP, en lugar de Mono, para habilitar la compatibilidad con sistemas de 64 bits.
- Se configuró la opción Target Architecture (Arquitectura objetivo) con el valor ARM64 (64-bit ARM) para cumplir con el requisito de 64 bits impuesto por Google Play.

También puedes obtener más información sobre estas configuraciones predeterminadas en la [documentación de Google sobre cómo configurar un proyecto de AR](https://developers.google.com/ar/develop/unity-arf/getting-started-ar-foundation#android_2).

Marcar paso como completado

## 8. ¿Cómo crear una nueva Escena de AR?

Q&A (0)

Además del proyecto preconfigurado, te proporcionamos una Scene (Escena) modelo preconfigurada. Esto también te ayudará a preparar tus nuevos proyectos de AR de la manera más rápida posible.

A continuación, crearás una nueva Escena con este modelo y la explorarás para entender su configuración:

**1.**En el menú principal, selecciona **File**> **New Scene**.

**2.** En la ventana New Scene (Nueva Escena), selecciona la miniatura de la Escena modelo de **AR**y luego selecciona **Create (Crear)**.

[Image: image]

**3.**Se creará una nueva Escena sin título. Para guardarla, selecciona **File**>**Save As**. Cuando se abra la ventana del explorador de archivos, ve a la carpeta **Scenes (Escenas)** ubicada en el interior de la carpeta **Assets** de tu proyecto.

**4.**Dale a la Escena un nombre como «AR Template Scene» y guárdala en la carpeta **Scenes**.

Ahora, deberías tener una nueva copia de la Escena modelo de AR abierta en la vista de Escena.

[Image: image]Marcar paso como completado

## 9. ¿Cómo explorar la Escena modelo?

Q&A (0)

Esta Escena modelo te puede servir como punto de partida para cualquier aplicación de AR que quieras crear. Incluye un cubo giratorio que se muestra en el entorno.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Las Escenas en 3D típicas de Unity solo tienen dos GameObjects: Main Camera (Cámara principal) y Directional Light (Luz direccional). Veamos las razones por las que esta Escena está lista para el desarrollo de AR:

**1.**En la ventana Hierarchy, identifica los tres GameObjects que no suelen aparecer en otros proyectos: AR Session Origin (Origen de la sesión de AR), AR Camera (Cámara de AR) y AR Session o Sesión de AR. Deberás expandir el elemento para ver el GameObject AR Camera.

[Image: image]

El GameObject [**AR Session Origin**](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@1.0-preview.8/api/UnityEngine.XR.ARFoundation.ARSessionOrigin.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631) representa el dispositivo en el espacio. Cuando el usuario se mueve o gira en el mundo real, el GameObject AR Session Origin se mueve de la manera correspondiente en la Escena de Unity. Y, así como el dispositivo real tiene una cámara, **AR Session Origin** tiene el GameObject **AR Camera** conectado.

El GameObject **AR Camera**(que es un objeto secundario de **AR Session Origin**) es la cámara principal de la aplicación de AR y se debe configurar con la etiqueta «**MainCamera**». Este GameObject tiene algunos componentes adicionales que permiten que la cámara funcione para AR. Si lo deseas, puedes obtener más información sobre ellos en la documentación: se llaman [AR Pose Driver (Controlador de la pose de AR)](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/api/UnityEngine.XR.ARFoundation.ARPoseDriver.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631), [AR Camera Manager (Administrador de la cámara de AR)](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/api/UnityEngine.XR.ARFoundation.ARCameraManager.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631) y [AR Camera Background o Fondo de la cámara de AR](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.0/api/UnityEngine.XR.ARFoundation.ARCameraBackground.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631). Te recomendamos que elimines todas las demás cámaras de la Escena para evitar conflictos.

El GameObject [**AR Session**](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.2/api/UnityEngine.XR.ARFoundation.ARSession.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631) administra cada sesión individual de la experiencia de AR, lo que incluye la frecuencia de imagen y la comunicación con el dispositivo, entre otras cosas. Solo puede haber un GameObject AR Session activo en una Escena.

**2.**Selecciona **Play (Reproducir)** y observa los GameObjects que aparecen en la ventana Hierarchy mientras estás en modo Play.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**3.**Observa que el cubo giratorio aparece centrado en la vista de Juego con un fondo negro. El fondo se reemplazará con el entorno del mundo real cuando ejecutes la aplicación en el dispositivo.

**4.**Observa el nuevo GameObject llamado **Trackables (Objetos que se pueden rastrear)** que aparece como objeto secundario de **AR Session Origin**. Este GameObject almacenará todos los objetos detectados en el entorno del mundo real, como las caras, los planos y los puntos rastreados.

**5.**Mientras la Escena esté en ejecución, selecciona el GameObject **AR Session Origin** y ajusta sus valores de posición y rotación en la ventana Inspector. Verás que el cubo giratorio parece cambiar de lugar, pero lo que se mueve en realidad es el dispositivo simulado, como si movieras o giraras un dispositivo portátil en el mundo real.

**6.**Vuelve a seleccionar **Play** para detener la aplicación. Se restablecerán todos los cambios que hayas hecho en la posición y rotación del GameObject **AR Session Origin**.

El proyecto modelo proporcionado ya incluye los GameObjects **AR Session** y **AR Session Origin**. Sin embargo, los puedes agregar a tu propia Escena de forma sencilla. Si deseas ver las instrucciones detalladas para configurar una Escena de AR y obtener más información sobre cada uno de estos objetos, consulta la [documentación de AR Foundation](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@4.1/manual/index.html#scene-setup?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953291631).

Marcar paso como completadoPaso opcional

## 10. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas.

Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### (Fácil) Revisa otros ejemplos de AR

Las aplicaciones de AR se pueden usar con fines de diversión, educación, mercadotecnia, arte y mucho más. Algunas veces, el contenido de AR se muestra en dispositivos móviles, como los teléfonos, y otras veces se utiliza con cascos de realidad virtual (HMD). Ya que estás en las primeras etapas de tu recorrido de AR, este puede ser un buen momento para conocer otras experiencias de AR que se han creado con Unity. Aquí tienes algunos ejemplos más de aplicaciones de AR creadas con Unity:

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

#### (Medio) Edita la velocidad y dirección de rotación

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Puedes ajustar la velocidad de rotación del GameObject **Cube (Cubo)** con el componente SceneTemplate_RotateCube. Recuerda que, si haces pruebas en el Editor antes de crear en el dispositivo, no se guardará ninguno de los cambios que hagas mientras estés en modo Play.

#### (Difícil) Reemplaza el cubo por otro primitivo

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

Es hora de hacer algo diferente. Reemplaza el cubo incluido en la Escena por otro tipo de forma en 3D primitiva. Si quieres que el objeto gire como el cubo, recuerda agregar el Script **SceneTemplate_RotateCube** y cambiar los valores de Rotation Speed (Velocidad de rotación) y Object Rotation (Rotación del objeto).

Marcar paso como completado

## 11. Próximos pasos

Q&A (0)

En este tutorial, configuraste la computadora, el dispositivo móvil y tu proyecto de Unity a fin de prepararte para el desarrollo de AR. En el siguiente tutorial, crearás y probarás este proyecto en el dispositivo iOS o Android. De esta manera, podrás asegurarte de que el entorno de desarrollo de AR esté bien configurado y funcione a la perfección antes de empezar a diseñar tus propias aplicaciones de AR.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
