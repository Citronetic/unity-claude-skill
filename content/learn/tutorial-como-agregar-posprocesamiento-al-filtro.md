[Image: image]

# Add post-processing to your filter spanish

Tutorial

Beginner

+10XP

30 mins

1

(44)

Unity Technologies

[Image: Add post-processing to your filter spanish]Summary

El posprocesamiento te permite cambiar la apariencia y sensaciones que transmite (look and feel) la aplicación con un solo clic. El posprocesamiento es como agregar un filtro a una foto en tu teléfono.

En este tutorial, harás lo siguiente:

- Configurar un volumen de posprocesamiento para el filtro.
- Agregar efectos de posprocesamiento al volumen.
- Crear y probar la aplicación actualizada.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Ya agregaste varios efectos diferentes al filtro de AR (Realidad aumentada). El último paso es hacer que se vea increíble. El **posprocesamiento** es un término genérico para describir el efecto de procesamiento de imágenes en pantalla completa que se presenta después de que la cámara captura una Scene (Escena) y antes de que la Escena se procese en la pantalla. Los efectos de posprocesamiento pueden cambiar el enfoque de la cámara, hacer que brillen las áreas iluminadas de la Escena, oscurecer los contornos de la vista de la cámara y mucho más. Es una herramienta excelente para mejorar el contenido visual de cualquier aplicación.

En este tutorial, harás lo siguiente:

- Configurar un volumen de posprocesamiento para el filtro.
- Agregar efectos de posprocesamiento al volumen.

También aprenderás un poco sobre las limitaciones del hardware móvil cuando se aplica el posprocesamiento. Los efectos de posprocesamiento pueden utilizar muchos recursos, por lo que el conocimiento de las limitaciones del hardware móvil puede ser determinante al elegir los efectos que desees utilizar en las aplicaciones de AR.

**Nota**: este tutorial introduce algunos conceptos básicos del posprocesamiento, pero no es una introducción detallada. Si deseas ampliar tus conocimientos sobre el posprocesamiento en Unity, consulta [**Habilidades básicas para creadores artísticos: posprocesamiento**](https://learn.unity.com/project/creative-core-post-processing).

Marcar paso como completado

## 2. ¿Cómo utilizar posprocesamiento en la aplicación de filtro?

Q&A (0)

En Unity, puedes agregar efectos de posprocesamiento de diferentes maneras, según el tipo de proyecto. El modelo en AR de este trayecto utiliza Universal Render Pipeline (Canal de renderizado universal o URP), que es un conjunto específico de técnicas y cálculos que permiten [tomar la información tridimensional del proyecto y mostrarla en una pantalla bidimensional](https://learn.unity.com/tutorial/get-started-on-your-guided-project#619fbf21edbc2a39aabd80eb).

El **volumen** permite agregar y administrar los efectos de posprocesamiento en las Escenas de los proyectos con URP. Por ejemplo, puedes configurar un volumen para que aplique un efecto a una Escena completa o configurar varios volúmenes para que muestren diferentes efectos en diferentes áreas de la Escena.

En este tutorial, crearás y configurarás un volumen para aplicar efectos de posprocesamiento a la aplicación de filtro.

Marcar paso como completado

## 3. ¿Cómo configurar un volumen de posprocesamiento?

Q&A (0)

Sigue estas instrucciones para configurar un volumen de posprocesamiento en la aplicación:

**1.**  En la ventana Hierarchy (Jerarquía), expande el GameObject **AR Session Origin (Origen de la sesión de AR)** y selecciona el GameObject secundario **AR Camera o Cámara de AR**.

[Image: image]

**2.**  En la ventana Inspector, busca el componente Camera (Cámara) y expande la sección **Rendering (Renderizado)** si está minimizada.

**3.**   Asegúrate de que la opción **Post Processing (Posprocesamiento)** esté activada.

[Image: image]

**4.**  En la ventana Hierarchy, haz clic derecho y selecciona **Volume**>**Global Volume**. Global (lo contrario de Local) significa que el efecto de posprocesamiento se aplicará en toda la Escena.

**5.**  En el componente Volume (Volumen), selecciona **New (Nuevo)**para crear un perfil de volumen.

[Image: image]Marcar paso como completado

## 4. ¿Cómo agregar un efecto de posprocesamiento?

Q&A (0)

Ahora que tienes un volumen de posprocesamiento en la Escena, puedes agregar efectos al volumen para cambiar el aspecto del filtro. Comienza con un tinte de color para el filtro:

**1.**  En el componente Volume, selecciona **Add Override (Agregar anulación)**.

[Image: image]

Cada efecto que agregas a un volumen está colocado en un Override independiente que ajusta la configuración del volumen.

**2.**  Busca el Override **Color Adjustments (Ajustes de color)** y selecciónalo.

[Image: image]

Este efecto aplicará un tinte de color a todo lo que vea la cámara. Es uno de los efectos de posprocesamiento que se notan más, por lo que es una buena opción para probar en la aplicación.

**3.**  Selecciona **All (Todo)** para activar todas las propiedades del módulo Color Adjustments.

[Image: image]

**4.**  Selecciona la muestra de **Color Filter (Filtro de color)** y elige el color de tinte que desees aplicar a la Escena en la ventana de diálogo.

[Image: image]Marcar paso como completado

## 5. ¿Cómo crear y probar la aplicación?

Q&A (0)

Al crear la aplicación para probarla, el tinte de color se debería aplicar a toda la vista de la cámara.

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

**1.**  Guarda la Escena.

**2.**  Abre la ventana Build Settings (Ajustes de creación) (**File** > **Build Settings**).

**3.**  Asegúrate de que el dispositivo esté conectado y selecciona **Build and Run (Crear y ejecutar)**para crear la aplicación en el dispositivo.

**4.** La aplicación se abrirá automáticamente en el dispositivo. Cuando se detecte una cara, la aplicación debería mostrar todo lo que hayas agregado hasta ese momento y se deberían reproducir las animaciones del accesorio.

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o [iOS.](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641)

Marcar paso como completado

## 6. ¿Cuáles son las limitaciones de los dispositivos móviles para el posprocesamiento?

Q&A (0)

Aunque el posprocesamiento puede mejorar el atractivo visual de las experiencias, estos efectos pueden utilizar muchos recursos y causar problemas de rendimiento significativos. Debido a que casi todas las aplicaciones de AR se ejecutan en hardware móvil, debes tener en cuenta las limitaciones del hardware al seleccionar los efectos de posprocesamiento.

Si utilizas URP para crear una experiencia, estos son los efectos que funcionan mejor en dispositivos móviles de forma predeterminada:

- Bloom (con la opción High Quality Filtering o Filtrado de alta calidad desactivada)
- Chromatic Aberration
- Color Grading
- Lens Distortion
- Vignette

Marcar paso como completado

## 7. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas. Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: crea un efecto de viñeta

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

Una **viñeta**es un efecto que sirve para dirigir la atención del usuario hacia el centro de la pantalla o para agregar una disolución suave en las orillas. El término proviene de la fotografía, donde una viñeta es el oscurecimiento o la disminución de la saturación hacia las orillas de una imagen. Agrega un Override Vignette (Viñeta) al volumen.

Intenta modificar las siguientes propiedades del Override Vignette en la ventana Inspector:

- Color: utiliza el selector de color para determinar el color de la viñeta.
- Intensity (Intensidad): determina la intensidad del efecto de viñeta
- Smoothness (Suavidad): utiliza el deslizador para elegir la suavidad de los bordes de la viñeta.

#### Medio: crea un filtro de color

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

Si cambias la manera en que los colores se muestran en la experiencia, puedes crear efectos artísticos. Agrega un Override Color Curves (Curvas de color) al volumen. Esta herramienta funciona igual que los filtros de ajuste de las aplicaciones de edición de fotos. Puedes hacer varios ajustes visuales comunes, como disminuir la intensidad de las áreas particularmente brillantes, o puedes crear efectos artísticos, como cambiar diferentes rangos de colores de forma selectiva. Si deseas más información sobre el Override Color Curves, consulta la[documentación de posprocesamiento de URP.](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/Post-Processing-Color-Curves.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952897576)

Utiliza la curva **Hue vs Saturation (Tono vs. saturación)** para ajustar rangos específicos en los colores y la saturación de la Escena. Estos son algunos filtros de color específicos que podrías crear:

- Eliminar toda la saturación para que la Escena sea monocromática.
- Eliminar todos los colores excepto el que elijas.

#### Difícil: busca un efecto de posprocesamiento y aplícalo en Unity

Ahora que entiendes un poco mejor qué es el posprocesamiento y cómo puedes aplicar efectos en Unity, prueba otros efectos disponibles y explora las maneras en que pueden mejorar tu filtro facial.

Puedes encontrar la lista de todos los efectos disponibles [en la documentación de posprocesamiento de URP](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.1/manual/EffectList.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952897576).

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

¡Felicitaciones! Creaste una aplicación de AR que, además de hacer el seguimiento de caras, utiliza animación en 3D y efectos visuales. Para lograrlo, hiciste lo siguiente:

- Aplicaste una textura de cara al filtro.
- Elegiste una animación y la aplicaste a un accesorio en 3D.
- Elegiste y agregaste un sistema de partículas.
- Configuraste efectos de posprocesamiento para dar el toque final.

Llegó el momento de utilizar todas tus habilidades y todos tus conocimientos en un nuevo desafío. Crearás tu propio filtro de AR único para cumplir con un resumen de proyecto presentado por una empresa imaginaria. Cuando tengas una nueva aplicación de filtro de AR que cumpla con tus expectativas, compartirás tu trabajo con otras personas.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
