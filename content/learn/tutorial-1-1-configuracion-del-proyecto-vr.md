[Image: image]

# 1.1: Configuración del proyecto VR

Tutorial

Beginner

+10XP

90 mins

1

(100)

Unity Technologies

[Image: 1.1: Configuración del proyecto VR]SummarySkills

Al terminar esta lección, tendrás un nuevo proyecto de Unity con un gran espacio vacío que podrás recorrer en VR (Realidad virtual).

Esta unidad forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr).

Resources

- [Create-with-VR_2021LTS.zip](https://unity-connect-prd.storage.googleapis.com/20220615/4e7924f6-c844-4476-9046-33286f65243e/Create-with-VR_2021LTS.zip?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899966)
- [Rig Simulator Keyboard Shortcuts.pdf](https://unity-connect-prd.storage.googleapis.com/20210604/28db6ca9-aba1-4ac3-a15a-24664daff3ea/Rig%20Simulator%20Keyboard%20Shortcuts.pdf?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899966)

Languages available:

EspañolEnglishEspañol한국어Español

## Video de descripción general

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

## 1. ¿Cómo abrir un nuevo proyecto de VR?

Q&A (0)

Lo primero que debes hacer es crear un nuevo proyecto de Unity configurado para VR.

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

**1.  Descarga y extrae el proyecto inicial del curso: ¿Cómo crear con VR?:**

- Haz clic para descargar el archivo: [Proyecto inicial del curso: ¿Cómo crear con VR?](https://connect-prd-cdn.unity.com/20220615/4e7924f6-c844-4476-9046-33286f65243e/Create-with-VR_2021LTS.zip).
- Para extraer en Mac: haz doble clic en el archivo descargado.
- Para extraer en Windows: haz clic derecho en el archivo descargado y selecciona **Extraer todo**.

**2.  Cambia el nombre y la ubicación del proyecto en tu computadora:**

- Busca la carpeta llamada «VR Room Project» en el interior de la carpeta extraída.
- Si lo deseas, cambia el nombre de la carpeta del proyecto a «VR Room - [Tu nombre]».
- Mueve la carpeta del proyecto a un directorio lógico de tu computadora (por ejemplo, a una carpeta llamada «¿Cómo crear con VR?» colocada en tu escritorio).

**3.  Agrega el proyecto VR Room al Unity Hub:**

- Abre el **Unity Hub.**
- Agrega tu proyecto VR Room a la lista de proyectos en el Unity Hub.
Si no sabes cómo hacerlo, consulta [este tutorial](https://learn.unity.com/tutorial/project-setup-processes#60ed7ae4edbc2a138163c120) para aprender a agregar proyectos al Unity Hub.
- Si aparece un ícono de advertencia junto a la versión del Editor de tu proyecto, no te preocupes.

[Image: image]

- Esto solo significa que el proyecto se creó con una versión específica de Unity que no tienes instalada en tu computadora. Mientras tengas instalada una versión de Unity que comience con 2021.3, el proyecto se podrá ejecutar sin ningún problema.

**4.  Abre el proyecto en Unity 2021.3 LTS (Soporte a largo plazo):**

- En el menú desplegable **Editor Version (Versión del Editor)**, selecciona una versión de Unity que comience con 2021.3 y luego selecciona **Open with 2021.3.X, o Abrir con 2021.3.X**.
- Si se abre una ventana con la pregunta «Change Editor Version?» (¿Deseas cambiar la versión del Editor?), selecciona **Change Version o Cambiar versión.**

[Image: image]

- Si aparece una advertencia que dice «Opening Project in a Non-Matching Editor Installation» (Estás por abrir un proyecto con una instalación del Editor que no coincide), selecciona **Continue o Continuar.**

[Image: image]

- Al hacer esto, tu proyecto se debería abrir en Unity.
- Si aparecen mensajes de advertencia amarillos relacionados con algunos de los Assets o Recursos en la ventana Console o Consola, puedes ignorarlos o borrarlos.

**5.  Explora el contenido del proyecto inicial y sus diferencias con un proyecto vacío normal:**

- En el menú que aparece en la parte superior, selecciona **Window**> **Package Manager**.
- En el panel izquierdo del Package Manager, busca los paquetes instalados en este proyecto (los que tienen marcas de verificación junto a ellos), que incluyen los siguientes:

- XR Plugin Management (Administración de complementos de XR)
- XR Interaction Toolkit, o Kit de herramientas de interacción de XR
- Universal RP o Canal de procesado universal
- **Nota:**si deseas aplicar un filtro para ver únicamente los paquetes que están instalados actualmente en el proyecto, en la esquina superior izquierda de la ventana del Package Manager, selecciona **Packages: In Project (Paquetes: dentro del proyecto)**.

[Image: image]

Al hacer esto, tendrás tu nuevo proyecto inicial de VR abierto en una Escena vacía y entenderás cuáles son los paquetes que agregan la compatibilidad con VR.

**Recursos relacionados:**

- [Blog sobre el marco de complementos de XR de Unity (en inglés)](https://blogs.unity3d.com/2020/01/24/unity-xr-platform-updates/?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899966)

Marcar paso como completado

## 2. ¿Cómo abrir y explorar la Escena inicial?

Q&A (0)

Antes de ejecutar el proyecto, elige un entorno más interesante para experimentarlo en VR.

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

**1.  Cambia el nombre de la Escena inicial y ábrela:**

- En la ventana **Project (Proyecto)**, abre la carpeta **Scenes (Escenas)**.
- Cambia el nombre de la Escena «Create-with-VR_Starter-Scene» a «[Tu_nombre] Room».
- Haz doble clic en la Escena con el nuevo nombre para abrirla.

**2.  Explora el contenido de esta Escena y sus diferencias con una Escena vacía normal:**

- En la ventana **Hierarchy (Jerarquía)**, selecciona el objeto **XR Rig o Rig de XR**, e inspecciona el componente XR Origin (Origen de XR).
- Selecciona**XR Rig**>**Camera Offset**>**Main Camera** e inspecciona el componente TrackedPoseDriver.
- Selecciona el objeto **LeftHand Controller (Control izquierdo)** o **RightHand Controller (Control derecho)**, e inspecciona el componente XR Controller o Control de XR.
- Selecciona el objeto **Input Action Manager o Administrador de acciones de entrada**, e inspecciona el componente Input Action Manager.

[Image: image]

Al hacer esto, tendrás abierta tu nueva Escena. También entenderás de manera general los componentes de la Escena que la distinguen de una Escena típica de Unity.

**Nota:**Esta Escena y sus ajustes están previamente configurados en el proyecto inicial porque son componentes necesarios para el desarrollo de VR en este curso. Si deseas aprender a configurar un proyecto compatible con VR similar a este desde cero, puedes encontrar las instrucciones en este tutorial: [Create a VR Starter Project from Scratch (¿Cómo crear un proyecto inicial de VR desde cero?, en inglés)](https://learn.unity.com/tutorial/create-a-vr-starter-project-from-scratch).

Marcar paso como completado

## 3. ¿Cómo agregar un espacio y un fondo?

Q&A (0)

Sería bastante aburrido explorar esta Escena vacía en VR, por lo que debes agregar un espacio un poco más interesante que proporcione más perspectiva cuando estés en VR.

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

**1.  Agrega un espacio a la Escena:**

- En la ventana **Project**, expande **Course Library** > **_Prefabs** > **Rooms**.
- Arrastra uno de los Prefabs **Room_[style]** hacia la Hierarchy.
- En la Hierarchy, elimina el objeto **Plane (Plano)**.

**2.  Agrega un entorno fuera de las ventanas del espacio:**

- Abre la carpeta **Course Library** > **_Prefabs** > **Environments**.
- Arrastra un objeto **Foreground (Primer plano)** y un objeto **Background (Fondo)** hacia la Hierarchy.

**3.  Ajusta la iluminación del espacio:**

- Cambia la rotación sobre los ejes X y Y del objeto **Directional Light (Luz direccional)**para modificar la manera en que la luz del sol entra en el espacio.

[Image: image]

Ahora, tendrás los objetos del espacio, el primer plano y el fondo provenientes de la biblioteca del curso en tu Escena, y la luz del sol entrará al espacio desde el ángulo deseado.

Marcar paso como completado

## 4. ¿Cómo ejecutar la aplicación con el simulador de dispositivo?

Q&A (0)

Puedes probar la Escena con un **simulador de dispositivo**. Este simulador te permite probar la aplicación en el Editor con el mouse y el teclado, en lugar de tener que conectar y ponerte un dispositivo. Esto puede resultar útil para hacer pruebas rápidas.

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

**1.  Agrega el simulador de dispositivo a la Escena:**

- En la ventana Project, abre **Samples > XR Interaction Toolkit > [version] > XR Device Simulator.**
- Arrastra el Prefab **XR Device Simulator (Simulador de dispositivo de XR)** hacia la Hierarchy.
- Haz clic en **Play (Reproducir)** para probar el simulador**.**

**2.  Experimenta con los controles del teclado y el mouse:**

- **Nota:**Para utilizar el simulador de manera efectiva, se requiere un mouse que tenga una rueda con la que se pueda hacer clic.
- Para controlar la **cámara**: mantén presionado el botón de clic derecho.
- Para utilizar el **control izquierdo**: mantén presionada la tecla Shift izquierda o intercambia con **T**.
- Para utilizar el **control derecho**: mantén presionada la barra espaciadora o intercambia con **Y**.
- Para **girar la vista** con un dispositivo: mueve el mouse.
- Para **girar** un dispositivo: mantén presionado el botón central del mouse.
- Para **restablecer** la posición y la rotación de los dispositivos: presiona V.
- Si deseas consultar una guía útil, descarga el archivo PDF [Rig Simulator Shortcut Cheat Sheet (Hoja de atajos para el simulador de Rigs, en inglés)](https://connect-prd-cdn.unity.com/20210604/28db6ca9-aba1-4ac3-a15a-24664daff3ea/Rig%20Simulator%20Keyboard%20Shortcuts.pdf).

**3.  Consulta más controles disponibles para el simulador de dispositivo:**

- En la Hierarchy, selecciona **XR Device Simulator.**
- En el componente XR Device Simulator, haz doble clic en una de las variables de Action (Acción) para abrir el Action Editor (Editor de acciones).
- Expande la sección de Actions para ver sus enlaces.
- En el panel izquierdo de Action Maps (Mapas de acción), selecciona **Main (Principal)** o **Input Controls (Controles de entrada)** para ver otros mapeos de acciones adicionales.

**4.  Importante:  Si no planeas utilizar el simulador de dispositivo, deshabilítalo:**

- Selecciona el objeto del simulador de dispositivo y deshabilítalo en la ventana del Inspector.
- Si tienes el simulador de dispositivo activo al ejecutar el proyecto en tu dispositivo, se generarán problemas.

[Image: image]

En este momento, deberías poder mirar hacia diferentes puntos de tu espacio con el mouse y el teclado al utilizar el simulador de dispositivo.

Marcar paso como completado

## 5. ¿Cómo probar tu proyecto en VR con Unity?

Q&A (0)

Si utilizas una computadora **Windows**, sigue este paso para probar el proyecto en tu dispositivo. De lo contrario, omite este paso.

Si utilizas una **Mac** para el desarrollo, este paso no es relevante. Aprenderás cómo probar tu aplicación en el siguiente paso, al compilar la aplicación directamente en tu dispositivo.

Para poder ejecutar el proyecto en tu dispositivo con Unity, deberás instalar el complemento adecuado para el desarrollo. [OpenXR](https://www.khronos.org/openxr/) es una interfaz de programación de aplicaciones (API) de código abierto que permite conectar a Unity con los dispositivos de hardware de VR compatibles. Se recomienda utilizar este complemento, ya que te permite publicar tu proyecto en varios dispositivos con una sola API estandarizada.

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

**1.  Instala el complemento de OpenXR para hacer pruebas en dispositivos de escritorio:**

- En el menú de la parte superior, selecciona **Edit > Project Settings** y luego selecciona el panel de **XR Plug-in Management** en la barra lateral.
- En la pestaña **Windows, Mac, Linux**, selecciona **OpenXR** en la lista de proveedores de complementos disponibles para instalar ese complemento.

[Image: image]

**2.  Resuelve cualquier advertencia que se presente al configurar un perfil de interacción.**

- Después de agregar el complemento de OpenXR, puede aparecer un ícono de advertencia o error junto al nombre del complemento.
Si no aparecen advertencias ni errores, puedes dirigirte al paso 3 para conectar tu dispositivo con el software Quest Link.
- Si hay alguna advertencia, haz clic en el ícono para abrir la ventana **OpenXR Project Validation (Validación de proyectos de OpenXR)**, donde se te pedirá agregar un **perfil de interacción** para el dispositivo que estás utilizando.
- Selecciona el botón **Edit o Editar** para abrir el panel de configuración de OpenXR.

[Image: image]

- En la pestaña **Windows, Mac, Linux**, asegúrate de que el **Oculus Touch Controller Profile (Perfil de control táctil de Oculus)** aparezca en la lista de perfiles de interacción, y habilita todos los **Feature Groups o Grupos de características** de**OpenXR** disponibles.
- Si utilizas un dispositivo diferente, como Valve Index o HTC Vive, agrega su perfil de interacción.

[Image: image]

- Al hacer esto, desaparecerán todas las advertencias en el panel de XR Plugin Management. Si hay alguna advertencia, selecciónala y sigue los pasos recomendados para resolverla.
- Si tienes problemas para resolver alguna advertencia o algún error, o si necesitas ayuda para resolver problemas, consulta esta [documentación detallada sobre cómo configurar el complemento de OpenXR (en inglés)](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.4/manual/index.html?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899966).

**3.  Conecta tu dispositivo con el software de Quest Link:**

- Asegúrate de que el dispositivo esté conectado a tu computadora con un cable compatible.
- Asegúrate de que la aplicación de Quest esté en ejecución y haya reconocido correctamente tu dispositivo.
- Si aún no descargas la aplicación de Quest, puedes encontrarla en la [página de configuración de Link](https://www.oculus.com/accessories/oculus-link/).

[Image: image]

**4.  Prueba el proyecto en tu dispositivo:**

- Asegúrate de que el**simulador de dispositivo de XR** presente en tu Escena esté deshabilitado. Si está habilitado, no funcionará el seguimiento de tu cabeza.
- Selecciona**Play** en el Editor de Unity y ponte tu casco.

[Image: image]

Si utilizas una computadora Windows, ahora deberías poder probar rápidamente la aplicación en tu dispositivo por medio de Unity.

Marcar paso como completado

## 6. ¿Cómo compilar y ejecutar la aplicación en tu dispositivo?

Q&A (0)

Si utilizas un Quest, sigue este paso para compilar la aplicación en tu dispositivo. De lo contrario, omite este paso.

Debido a que el Quest es un dispositivo independiente (es decir, que no tiene que estar conectado a una computadora), puedes compilar una aplicación y probarla directamente en el dispositivo sin conectarlo a una computadora.

Si estás usando una Mac y no puedes probar tu aplicación con el software de Quest para Windows como se explica en el paso anterior, este será el método principal para probar tu aplicación en el casco.

Para poder compilar tu aplicación en el casco de Quest, deberás configurar los complementos para el objetivo de la versión de Android.

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

**1.  Instala el complemento de OpenXR para las versiones de Android:**

- En la sección de configuración de XR Plug-in Management, selecciona la pestaña **Android** y luego selecciona **OpenXR** en la lista de proveedores de complementos disponibles para instalar ese complemento.
**Nota:** Únicamente verás la pestaña Android si instalaste el módulo de exportación de Android.
- Si no ves la opción de **OpenXR** en la pestaña Android, dirígete primero a la pestaña Desktop (Escritorio), selecciona OpenXR y regresa a la pestaña Android.

[Image: image]

**2.  Resuelve cualquier advertencia que se presente al configurar un perfil de interacción.**

- Haz clic en el nuevo ícono de advertencia o error que aparece en la ventana **OpenXR Project Validation**, el cual te volverá a indicar que debes agregar un **perfil de interacción**.
- Selecciona el botón **Edit** para abrir el panel de configuración de OpenXR.

[Image: image]

- En la pestaña **Android**, selecciona el botón **+**a fin de agregar el perfil adecuado para tu dispositivo, y luego habilita todos los Feature Groups de OpenXR.

[Image: image]

- Si aparece cualquier otro mensaje de error o advertencia, haz clic en el ícono correspondiente para resolverlo.

[Image: image]

**3.  Prepara tu Escena para la compilación:**

- Asegúrate de que el simulador de dispositivo de XR presente en tu Escena esté deshabilitado. Si está habilitado, no funcionará el seguimiento de tu cabeza.
- En el menú de la parte superior, haz clic en **File** > **Build Settings.**
- Haz clic en **Add Open Scenes (Agregar Escenas abiertas)** para agregar tu Escena.

**4.  Cambia a la plataforma para versiones de Android:**

- En la sección **Platform (Plataforma)**, selecciona **Android**.
- Haz clic en **Switch Platform (Cambiar plataforma)** y espera a que tu proyecto se cambie a la plataforma de Android.
- **Nota:**Android únicamente aparecerá como versión objetivo disponible si instalaste correctamente el módulo de exportación de Android durante la instalación del Editor de Unity.

**5.  Selecciona tu dispositivo como objetivo para la compilación:**

- Asegúrate de que tu dispositivo de VR esté encendido y conectado.
- Junto al menú desplegable **Run Device (Dispositivo de ejecución)**, haz clic en **Refresh (Actualizar)**y selecciona tu dispositivo de VR.
- **Nota**: Si tu dispositivo no aparece en la lista, intenta ponértelo. Al hacer esto, es posible que se te solicite **permitir la depuración USB**. Si aún no aparece en la lista, intenta reiniciar tu dispositivo y asegurarte de que esté en modo desarrollador o reiniciar Unity.

**6.  Compila y ejecuta el proyecto en tu dispositivo:**

- Haz clic en **Build and Run (Compilar y ejecutar)**.
- Cuando se te solicite elegir una ubicación, crea una nueva carpeta llamada **«**Builds**»** y selecciona **Save (Guardar)** para guardar tu proyecto con el nombre «[Tu_nombre] - VR Room - 1.1».
- **Nota:**Cuando compilas tu aplicación por primera vez, el proceso puede tardar varios minutos.

[Image: image]

Ahora debes poder probar la aplicación en tu dispositivo sin tenerlo conectado a tu computadora.

**Nota:**  La aplicación se guarda automáticamente en tu dispositivo, en la sección de fuentes desconocidas de la biblioteca de aplicaciones. Es posible que debas seguir los pasos descritos en el artículo sobre [cómo permitir contenido de orígenes desconocidos](https://support.oculus.com/632287656943461/) para poder encontrar tu aplicación.

**Consejos de resolución de problemas:**

- Si la aplicación se puede abrir, pero no abarca todo el campo de visión, es probable que esto se deba a un problema con los complementos.
- Si la aplicación se puede abrir, pero la Escena completa se mueve junto con tu cabeza, esto se puede deber a que tienes el simulador de dispositivo activo o a que no tienes el Input Action Manager configurado adecuadamente.

Marcar paso como completadoPaso opcional

## 7. ¿Cómo probar tu aplicación en otros dispositivos compatibles con OpenXR?

Q&A (0)

Si utilizas un dispositivo compatible con OpenXR diferente, como Valve Index, HTC Vive o un casco Windows Mixed Reality, sigue este paso para probar la aplicación en tu dispositivo. De lo contrario, omite este paso.
Para poder probar el proyecto en uno de estos dispositivo, deberás instalar el complemento de OpenXR y habilitar el conjunto de características para tu dispositivo específico.

**1.  Configura el complemento de OpenXR para tu dispositivo:**

- Sigue las instrucciones que aparecen en la página del [manual de OpenXR (en inglés)](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/index.html?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899966) para instalar el complemento de OpenXR, habilítalo en la sección de XR Plugin Management y configúralo para tu dispositivo particular.

**2.  Conecta tu dispositivo con la aplicación de SteamVR:**

- Asegúrate de que el dispositivo esté conectado a tu computadora con un cable compatible.
- Asegúrate de que la aplicación de SteamVR esté en ejecución y haya reconocido correctamente tu dispositivo.

**3.  Prueba el proyecto en tu dispositivo:**

- Asegúrate de que el**simulador de dispositivo** presente en tu Escena esté deshabilitado. Si está habilitado, no funcionará el seguimiento de tu cabeza.
- Selecciona**Play** en el Editor de Unity y ponte tu casco.

Ahora debes poder probar rápidamente la aplicación en tu casc con SteamVR.

Marcar paso como completado

## 8. Resumen

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

**Nuevas características:**

- Configuración del proyecto
- Configuración de la Escena con un espacio
- Pruebas del proyecto con el simulador de dispositivo
- Ejecución en el dispositivo

**Nuevos conceptos y habilidades:**

- Canales para diferentes tipos de hardware
- Paquetes requeridos para el desarrollo de VR
- Diferencias entre una Escena de VR y una Escena típica de Unity
- Diferencias entre el simulador de Rigs y las pruebas en el dispositivo
- Diferencias entre las pruebas en dispositivos conectados y las pruebas en dispositivos independientes

**Siguiente lección:**

- Traslado de VR

Marcar paso como completadoPaso opcional

## 9. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión que aparecen abajo. Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto] para indicar el nivel del desafío, así como una etiqueta que indica cuando una actividad [Requiere programación].

Estas actividades son totalmente opcionales, pero son muy recomendables para quienes desean llevar sus habilidades de desarrollo de VR al siguiente nivel.

**1.  Juega con la iluminación direccional [Fácil]**

Experimenta con la Directional Light para obtener la sombra y el color que deseas en tu espacio:

- Intenta girar la Directional Light sobre los ejes X y Y.
- Intenta ajustar el color de la Directional Light para que el color de la luz coincida con la hora del día.

[Image: image]

**2.  Práctica del simulador de dispositivo [Medio]**

Domina las funciones básicas del simulador de dispositivo:

- Consulta las instrucciones del paso anterior para configurar y utilizar el simulador de dispositivo.
- **Nota**:  Recuerda quitar o deshabilitar el simulador antes de ejecutar la aplicación en tu dispositivo.

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

**3.  Agrega un reloj que funcione [Experto] [Requiere programación]**
Agrega un reloj en la pared que (a) muestre la hora actual en la zona horaria del usuario, o (b) muestre la hora que elijas para el mundo donde se encuentra tu espacio de VR.

- Busca un Prefab reloj en la carpeta Course Library > Prefabs > Objects > Electronics.
- Pista: Para acceder a la hora actual del sistema, utiliza la propiedad [DateTime.now](https://docs.microsoft.com/en-us/dotnet/api/system.datetime.now?view=net-5.0).

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

## Complete this Tutorial

Marcar todos los pasos como completados
