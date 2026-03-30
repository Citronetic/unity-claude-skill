[Image: image]

# Set up a face tracking project spanish

Tutorial

Beginner

+10XP

30 mins

2

(83)

Unity Technologies

[Image: Set up a face tracking project spanish]Summary

El primer paso para desarrollar una aplicación de filtro facial con AR (Realidad aumentada) es configurar el proyecto para el seguimiento facial.

En este tutorial, harás lo siguiente:

- Descargar e importar los Assets (Recursos) proporcionados.
- Configurar el proyecto para la detección y el seguimiento de caras.
- Crear y probar la función de seguimiento facial de la aplicación.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

En esta experiencia, aprenderás a crear tus propias aplicaciones de filtros faciales con AR. La primera aplicación que crearás es un filtro simple que coloque materiales y modelos 3D en la cara del usuario.

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

En este tutorial, darás el primer paso para desarrollar una aplicación de filtro facial con AR. Configurarás el proyecto a fin de detectar y hacer el seguimiento de los rasgos faciales del usuario, y para visualizar la función de seguimiento con una superposición de material verde.

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

## 2. Escucha a algunos creadores consolidados

Q&A (0)

Mientras te preparas para empezar a desarrollar en AR, puede resultarte útil escuchar cómo es la experiencia de otros creadores en su trabajo cotidiano. En el siguiente video, algunos creadores expertos de AR hablan sobre su proceso de desarrollo personal y sobre lo que significa para ellos el hecho de trabajar con XR (Realidad extendida) a nivel profesional.

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

Marcar paso como completado

## 3. Antes de comenzar

Q&A (0)

Es importante que ya hayas completado los tutoriales de [**¿Cómo comenzar a usar AR?**](https://learn.unity.com/project/get-started-with-ar) Esos tutoriales muestran cómo completar las siguientes tareas de configuración:

- Instalar Unity 2021.3.1f1.
- Asegurarte de que los dispositivos y la computadora que utilices estén configurados para el desarrollo en AR.
- Descargar y abrir un nuevo proyecto de Unity configurado para AR.
- Implementar en el dispositivo móvil una aplicación simple de AR que muestre un cubo giratorio en el entorno físico.

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

## 4. ¿Cómo importar los Assets del proyecto?

Q&A (0)

En primer lugar, vamos a configurar el proyecto:

**1.**Si aún no abres el proyecto inicial de AR, hazlo ahora.

**2.**  Selecciona **File**> **New Scene** para [crear una nueva Scene (Escena)](https://learn.unity.com/tutorial/configure-your-ar-development-environment?uv=2021.3&courseId=6346b7e5edbc2a7caec0f8fc&projectId=633b041bedbc2a6de5496294#633c1a5fedbc2a1cb018accb) con el modelo de AR.

**3.**  Selecciona **File**> **Save As** y guarda la Escena con el nombre «Basic_Face_Filter» en la carpeta **Scenes**.

**4.**  Descarga y descomprime el archivo [Basic Face Filter Assets (Assets de filtros faciales básicos)](https://connect-prd-cdn.unity.com/20221012/64f70c02-99a3-4261-9ce6-d3324250bed5/Basic_Face_Filter_Assets.zip).

**5.**  En Unity, ve al menú principal y selecciona **Assets**> **Import Package** > **Custom package**.

**6.** Ve a la ubicación donde se descomprimió el archivo, selecciona el archivo **BasicFaceFilterAssets.unitypackage** y haz clic en **Open (Abrir)**.

**7.**  En la ventana Import Unity Package (Importar paquete de Unity), revisa que todos los Assets estén seleccionados y haz clic en **Import (Importar)**.

**8.**  En Unity, ve a la ventana Project (Proyecto) y luego ve a **Assets** > **_BasicFaceFilter**. Antes de continuar, explora los Assets que acabas de importar.

[Image: image]Marcar paso como completado

## 5. ¿Cómo crear un Prefab AR Default Face?

Q&A (0)

Las experiencias de realidad aumentada que superponen contenido digital sobre la cara del usuario requieren la capacidad de seguimiento facial. El **seguimiento facial** indica al dispositivo móvil dónde está la cara del usuario cuando la cámara apunta hacia ella. Afortunadamente, existen fragmentos de código prediseñados que te ayudan a implementarlo. Ya importaste una parte de ese código, pero ahora debes configurar la Escena para que el código funcione y para poder visualizar las caras cuando se haga el seguimiento en la aplicación.

Utilizarás el GameObject **AR Default Face (Cara predeterminada en AR)** para visualizar el seguimiento de tu cara. Para poder ver el GameObject **AR Default Face** cuando hagas pruebas, crearás un Prefab que se activará cuando la cámara detecte tu cara. También deberás asignar un material al GameObject **AR Default Face** para que aparezca. Hay un material especial incluido en el proyecto.

Sigue estas instrucciones para configurar el Prefab **AR Default Face**:

**1.**  En la ventana Hierarchy (Jerarquía), haz clic derecho y selecciona **XR**>**AR Default Face** para agregar un nuevo GameObject **AR Default Face** a la Escena. Puedes personalizar el GameObject **AR Default Face** para crear tus propios filtros faciales.

[Image: image]

**2.**  A continuación, debes asegurarte de que el GameObject **AR Default Face**aparezca cuando la cámara del teléfono detecte una cara. En la ventana Project, ve a **Assets**>**_BasicFaceFilter**>**Materials** y busca el material Face Debug MAT (Material de depuración facial).

**3.**  Arrastra el material **Face Debug MAT** desde la ventana Project al GameObject **AR Default Face** ubicado en la ventana Hierarchy para asignar el material. Para revisar si se asignó el material, ve a la ventana Inspector del GameObject **AR Default Face** y desplázate hacia abajo para ver la sección Inspector del material. En esta sección, deberías ver la opción Face Debug MAT (Material).

[Image: image]

**4.**  En la ventana Project, ve a **Assets** > **_BasicFaceFilter** > **Prefabs**.

**5.**  Arrastra el GameObject **AR Default Face** desde la ventana Hierarchy a la carpeta **Prefabs** en la ventana Project. Ahora, el ícono y el nombre del GameObject deben aparecer de color azul claro en la ventana Hierarchy.

Esto quiere decir que convertiste el GameObject **AR Default Face** en un Prefab. Los Prefabs son modelos que te permiten reutilizar los GameObjects configurados de una manera específica.

Marcar paso como completado

## 6. ¿Cómo configurar el AR Face Manager?

Q&A (0)

A continuación, debes indicar al componente **AR Session Origin (Origen de la sesión de AR)** cuál GameObject debe mostrar sobre la cara detectada. Para esto, utilizarás un nuevo componente llamado AR Face Manager (Administrador de caras en AR).

Sigue estas instrucciones para configurar el **AR Face Manager**:

**1.**  En la ventana Hierarchy, elimina el GameObject **Cube (Cubo)**, pues solo se utiliza para hacer pruebas.

**2.**Selecciona el GameObject **AR Session** **Origin**.

**3.**  En la ventana Inspector, selecciona **Add Component (Agregar componente)** y luego busca y agrega el componente AR Face Manager. Este componente te permitirá [administrar las acciones de agregar, actualizar y eliminar GameObjects para representar las caras](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@1.0/manual/face-tracking.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953303077).

[Image: image]

**4.**En la ventana Inspector, ve al componente AR Face Manager y busca la propiedad **Face Prefab (Prefab Cara)**.

**5.**  Arrastra el Prefab **AR Default Face** que creaste desde la ventana Project (en **Assets**>**_BasicFaceFilter**>**Prefabs**) a la propiedad **Face Prefab**.

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

**6.**  En la ventana Hierarchy, elimina el GameObject **AR Default Face**. Cuando la aplicación detecte una cara, AR Foundation generará un GameObject **AR Default Face** con el Prefab que acabas de crear.

Marcar paso como completado

## 7. ¿Cómo actualizar la dirección en la que apunta la cámara?

Q&A (0)

La aplicación que creaste con el cubo giratorio utilizaba la cámara posterior del dispositivo portátil. Sin embargo, esta nueva aplicación hace seguimiento facial, por lo que resulta más lógico utilizar la cámara frontal del dispositivo.

Sigue estas instrucciones para configurar la aplicación a fin de utilizar la cámara frontal:

**1.**En la ventana Hierarchy, selecciona el ícono desplegable del GameObject **AR Session Origin** para expandir los GameObjects secundarios. Los GameObjects primarios y secundarios sirven para organizar los diferentes GameObjects de una Escena.

**2.**Selecciona el GameObject **AR Camera (Cámara de AR)**.

**3.**  En la ventana Inspector, busca el componente AR Camera Manager (Script) o Administrador de la cámara de AR (Script).

**4.**En la propiedad **Facing Direction (Dirección de enfoque)**, selecciona **User (Usuario)**.

[Image: image]Marcar paso como completado

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

**1.**  Guarda la Escena.

**2.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**3.**Selecciona **Add Open Scenes (Agregar Escenas abiertas)**para agregar la Escena actual al proceso de creación. Si ves otras Escenas anteriores en esta sección, bórralas para que no se incluyan en la nueva versión que vas a crear.

[Image: image]

**4.**  Asegúrate de que el dispositivo esté conectado y selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o [iOS](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641).

**5.** La aplicación se abrirá automáticamente en el dispositivo. Cuando se detecte una cara, la aplicación debería cubrirla con un filtro facial simple de color verde.

**Nota**: si la aplicación es para iOS y aún utiliza la cámara posterior en lugar de la frontal, es posible que la opción Face Tracking (Seguimiento facial) no esté activada en la configuración del proyecto. En el menú principal, selecciona **Edit**> **Project Settings**. En el panel izquierdo, selecciona **ARKit** y asegúrate de que la opción **Face Tracking** esté activada.

Marcar paso como completado

## 9. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil o Medio para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas. Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: cambia el color del material de depuración facial

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

Aunque el material de depuración se ve muy bien de color verde, puedes elegir otro color. Una opción para cambiar de color es abrir el material de depuración y utilizar el selector de color. Otra opción para cambiar el color del material de depuración facial es crear un nuevo material y aplicarlo a la cara.

Si deseas más información sobre cómo trabajar con materiales, puedes explorar la sección [**¿Cómo administrar los materiales en un proyecto?**](https://learn.unity.com/tutorial/manage-materials-in-a-project?pathwayId=61a65568edbc2a00206076dd&missionId=619f9b6cedbc2a39aabd7b1e#619bbbfbedbc2a057ec96377) del **trayecto «Habilidades básicas para creadores artísticos»**.

#### Medio: graba la pantalla de la aplicación y comparte los videos

Compartir tus creaciones con otras personas es una excelente opción para mostrar lo que has aprendido y logrado. Una de las opciones más sencillas para compartir tu progreso en el recorrido de AR es grabar la pantalla mientras se ejecuta la aplicación.

El proceso para grabar la pantalla es diferente en [iOS](https://support.apple.com/en-gb/guide/iphone/iphc872c0115/ios) y [Android](https://support.google.com/android/answer/9075928?hl=en). ¡Graba un video y compártelo con tus amigos, tus familiares y el resto del mundo!

Marcar paso como completado

## 10. Próximos pasos

Q&A (0)

En este tutorial, creaste una aplicación básica de seguimiento facial que superpone el modelo de cara en AR predeterminado sobre la cara del usuario. ¡Muy bien! En el siguiente tutorial, agregarás materiales personalizados al modelo de cara para que la aplicación se ponga un poco más interesante.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
