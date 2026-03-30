[Image: image]

# 3.2: Optimización

Tutorial

Beginner

+10XP

90 mins

1

(12)

Unity Technologies

[Image: 3.2: Optimización]SummarySkills

En esta lección, aprenderás sobre las diferentes métricas de rendimiento clave para VR (fotogramas por segundo, cantidad de polígonos, llamadas de dibujo) y cómo asegurarte de que estén optimizadas. Al terminar esta lección, tu aplicación estará más optimizada para el rendimiento.

Esta lección forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr)

Languages available:

EspañolEnglishEspañol한국어Español

## Video de descripción general

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 1. ¿Cómo revisar el valor actual de FPS?

Q&A (0)

Antes de empezar a optimizar tu código, debes identificar tus objetivos de rendimiento y cómo evaluar si tu aplicación los cumple.

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

**1.  Determina el valor objetivo de FPS (Fotogramas por segundo) para tu dispositivo:**

- Utiliza los siguientes enlaces como referencia y escribe el valor de FPS que tienes como objetivo.

**2.  Determina el valor de FPS de tu dispositivo:**

- Desde la **Course Library** > **Prefabs** > **Testing**, arrastra el **FPS Overlay UI** en tu Hierarchy.
- Asigna tu **Main Camera (Cámara principal)** a la propiedad **Render Camera (Cámara de procesado)**.
- Ejecuta tu aplicación para ver cuál es el valor de FPS.
- **Nota**: Si ejecutas la aplicación con el Editor de Unity, el valor de FPS mostrado no representa una predicción precisa.

**3.  Revisa el valor de FPS en la ventana Stats (Estadísticas) de Unity:**

- En la **vista de Juego**, en la esquina superior derecha, habilita la ventana **Stats** y busca el número de FPS.

**4.  Explora el Profiler (Generador de perfiles) de Unity:**

- Haz clic en el botón Play (Reproducir).
- Desde la barra del menú superior, selecciona **Window** > **Analysis** > **Profiler**.
- Haz clic en el botón de grabación con un círculo rojo en la ventana Profiler.

**5.  Para probar el valor real de fotogramas por segundo que se ejecuta en un casco móvil:**

- Crea y ejecuta la aplicación en tu dispositivo sin conectarlo a la computadora.

[Image: image][Image: image]

Ahora debes saber dónde encontrar las métricas objetivo para tu dispositivo y cómo encontrar el valor de fotogramas por segundo en tu dispositivo.

**Recursos relacionados:**

- Métricas de rendimiento objetivo

- [Objetivos de rendimiento de HTC Vive](https://hub.vive.com/storage/app/doc/en-us/MobileVRperformancechecklist.html#:~:text=The%20target%20framerate%20for%20Vive,as%20Desktop%20PCs%20and%20Laptops.)
- [Objetivos de rendimiento de Oculus](https://developer.oculus.com/documentation/unity/unity-perf/)
- Herramientas de Unity

- [Ventana Stats](https://docs.unity3d.com/Manual/RenderingStatistics.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [Depurador de fotogramas](https://docs.unity3d.com/Manual/FrameDebugger.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [Profiler](https://docs.unity3d.com/Manual/ProfilerWindow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)

Marcar paso como completado

## 2. ¿Cómo minimizar las llamadas de dibujo?

Q&A (0)

Para poder procesar un solo fotograma, Unity «dibuja» los objetos en la pantalla al dividirlos en «grupos». Cada vez que Unity envía una «llamada» al motor para que «dibuje» algo en la pantalla, esta acción se conoce como una «llamada de dibujo». Al minimizar las llamadas de dibujo, puedes mejorar el rendimiento.

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

**1.  Determina el valor objetivo de llamadas de dibujo (grupos) para tu dispositivo:**

- Consulta el sitio web de tu plataforma para ver la métrica objetivo de «llamadas de dibujo».

**2.  Busca el número de llamadas de dibujo en tu Escena:**

- Abre la ventana Stats en la vista de Juego y busca el valor de «Batches» (grupos de llamada de dibujo).

**3.  Observa la manera en que la división por grupos y las llamadas de dibujo pueden afectar la frecuencia de imagen:**

- En el menú superior, selecciona **Window** > **Analysis** > **Frame Debugger**.
- Haz clic en **Enable (Habilitar)**.
- Utiliza las flechas hacia la izquierda y hacia la derecha en la ventana Frame Debugger (Depurador de fotogramas) y dirígete a la vista de Juego para ver la creación paso a paso de un solo fotograma.

**4.  Asegúrate de que la opción «Static Batching» esté habilitada:**

- Desde el menú superior, selecciona **Edit > Project Settings > panel Player** .
- En la sección**Other Settings (Otras configuraciones)**, asegúrate de que la opción **Static Batching**esté habilitada.

**5.  Mejora la división en grupos al marcar los objetos que no se mueven como «Static»:**

- Asegúrate de que tu ventana Hierarchy esté organizada de tal manera que puedas seleccionar fácilmente todos los objetos estáticos.
- Selecciona todos los objetos estáticos (incluidos los objetos de iluminación, como las lámparas y los candelabros).
- En la parte superior del Inspector, selecciona la casilla de verificación **Static**.
- Cuando aparezca el mensaje de confirmación, selecciona «**Yes, change children (Sí, cambiar objetos secundarios)**».
- Observa lo que sucede con el valor de Batches al hacer clic en **Play**.

**6.  Si aún tienes un número muy alto de Batches (más de 175):**

- Considera la opción de eliminar el objeto espejo de la Escena.

[Image: image]

Ahora debes tener un número menor de llamadas de dibujo al formar grupos con los objetos que comparten los mismos materiales.

**Recursos relacionados:**

- [Agrupación de las llamadas de dibujo en grupos](https://docs.unity3d.com/Manual/DrawCallBatching.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)

Marcar paso como completado

## 3. ¿Cómo minimizar la cantidad de polígonos?

Q&A (0)

La métrica de rendimiento más fácil de interpretar es la cantidad de polígonos. La cantidad de polígonos se suele medir en «Tris» o «Verts».

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

**1.  Determina el valor objetivo de la cantidad de polígonos (triángulos) para tu dispositivo:**

- Consulta el sitio web de tu plataforma para ver la métrica objetivo de «triángulos».

**2.  Busca el número de triángulos en tu Escena:**

- Abre la ventana Stats en la vista de Juego y busca el valor de «Tris».

**3.  Visualiza tus triángulos con mayor claridad:**

- En la vista de **Escena**, cambia del modo de dibujo «Shaded»  al modo de dibujo **Wireframe (Contorno)**.
- **Nota:**En Unity 2021 LTS, el menú desplegable de modo de dibujo se representa con un ícono circular en la parte superior de la vista de Escena:

[Image: image]

**4.  Determina el número de triángulos para un objeto individual:**

- Selecciona un objeto.
- En su componente Mesh Filter (Filtro de mallas), haz clic en su Mesh (Malla).
- Selecciona esa Mesh en la ventana Project (Proyecto) para ver su número de triángulos en el Inspector.
- **Nota:**  Cualquier valor de menos de 1,000 se considera como un número bajo de polígonos.

**5.  Observa cómo cambia tu valor de triángulos según los objetos que aparecen en el cuadro:**

- Observa lo que sucede en la ventana Stats conforme giras el XR Rig (Rig de XR).

**6.  Si no alcanzas el objetivo recomendado para el valor de triángulos:**

- Elimina o reemplaza los Assets (Recursos) que tengan cantidades de polígonos altas hasta que alcances tu objetivo.
- También puedes quitar el espejo de tu Escena.

[Image: image][Image: image]

Ahora debes alcanzar tu objetivo de triángulos y entender cuáles son los elementos que tienen los valores de triángulos más altos.

**Recursos relacionados:**

- [Eliminación de oclusión](https://docs.unity3d.com/Manual/OcclusionCulling.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)

Marcar paso como completado

## 4. ¿Cómo optimizar las texturas?

Q&A (0)

Además de evaluar las llamadas de dibujo que envía Unity, es importante tomar en cuenta el tamaño de las texturas que utilizas en tu Escena.

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

**1.  Agrega una pintura a la Escena para analizar mejor el impacto de la configuración de las texturas:**

- Desde la **Course Library** > **Prefabs** > **Art**, agrega una obra de Art (Arte) a una pared en tu Escena.

**2.  Accede al material de los objetos presentes en tu Escena:**

- En el componente Mesh Renderer (Procesador de mallas) de la pintura, expande la sección **Material**en la parte inferior del Inspector.

**3.  Busca el atlas de textura utilizado para el material:**

- En la sección **Surface Inputs (Entradas de superficie)** del material, haz clic en la miniatura que aparece junto a **Base Map (Mapa de base)**para ubicar la textura en la ventana Project.
- Haz clic en esta textura para visualizar sus propiedades de **Import Settings (Configuración de importación)**.

**4.  Experimenta con las diferentes configuraciones de la textura:**

- En la parte inferior de la sección de configuración de la textura, ajusta las propiedades **Max Size (Tamaño máximo), Resize Algorithm (Algoritmo para cambiar el tamaño),** **Format o Formato**, y **Compression** o Compresión.
- Haz clic en **Apply (Aplicar)**para ver el efecto que genera cada configuración en las características visuales de tu Escena.
- Después de observar la diferencia, regresa a la configuración original.

**5.  Habilita los «Mip Maps» para reducir automáticamente la resolución de las texturas que se ven desde lejos:**

- Busca y selecciona la textura InteriorColorSwatch en la ventana Project.
- En el Inspector, expande la sección**Advanced (Avanzado)** y selecciona **Generate Mip Maps (Generar Mip Maps).**
- Haz clic en **Apply**. Al hacer esto, se generarán y se aplicarán texturas de menor calidad en los objetos que están más lejos.

**6.  Habilita la opción «Anisotropic Filtering» para mejorar las características visuales de las texturas cuando se visualizan en un ángulo poco profundo:**

- Busca y selecciona la textura **WoodFloor_Texture**en la ventana Project.
- En el Inspector, arrastra el control deslizante para aumentar el valor de **Aniso Level (Nivel de filtro anisotrópico)**.
- Haz clic en **Apply**. Al hacer esto, el valor de Anisotropic Filtering aumentará para mejorar las características visuales de las texturas cuando se visualizan en ángulos poco profundos.

[Image: image]

Ahora debes conocer las configuraciones que existen para optimizar las texturas a fin de mejorar el rendimiento o la calidad visual.

**Recursos relacionados:**

- [¿Cómo importar texturas?](https://docs.unity3d.com/Manual/ImportingTextures.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [Configuración de importación de texturas (y mip maps)](https://docs.unity3d.com/Manual/class-TextureImporterOverride.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [Anisotropic Filtering](https://docs.unity3d.com/ScriptReference/Texture-anisoLevel.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)

Marcar paso como completado

## 5. ¿Cómo optimizar las partículas y el posprocesamiento?

Q&A (0)

Las partículas y el posprocesamiento también afectan el rendimiento. En esta sección, conocerás las maneras en que estos elementos pueden afectar los fotogramas por segundo y aprenderás cómo asegurarte de que no causen problemas de rendimiento en el proyecto.

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

**1.  Optimiza el Shader (Sombreador) de la partícula para que no responda a las luces dinámicas:**

- Selecciona el objeto Particle_Fire.
- Busca el menú desplegable de la propiedad **Shader** en la parte inferior del Inspector.
- Asegúrate de que tu partícula está usando el **Universal Render Pipeline**>**Particles**>**Unlit**shader.

**2.  Experimenta con el posprocesamiento:**

- En el componente Camera (Cámara) de tu objeto **Main Camera**, habilita la configuración **Post-processing (Posprocesamiento)**.
- Agrega un componente Volume (Volumen).
- Haz clic en el botón **New (Nuevo)** para crear un nuevo Post-Processing Profile (Perfil de posprocesamiento).
- Luego, puedes experimentar al hacer clic en el botón **Add Override (Agregar anulación)** y habilitar nuevos efectos.
- **Advertencia:**Si planeas agregar efectos de posprocesamiento, los ajustes de color son una buena opción. Las distorsiones de lente y los desenfoques de movimiento provocan mareo cibernético, por lo que es mejor no usar estos efectos.

[Image: image][Image: image]

Ahora debes tener partículas y posprocesamiento adecuados para tu aplicación.

**Recursos relacionados:**

- [¿Cómo elegir Shaders en la URP?](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/shaders-in-universalrp.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [Posprocesamiento en la canalización de procesado universal](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/integration-with-post-processing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [Procesamiento de espacio de pantalla](https://unity3d.com/how-to/optimize-mobile-VR-games?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)

Marcar paso como completado

## 6. ¿Cómo habilitar el suavizado de contorno?

Q&A (0)

Tal vez ya notaste que algunos objetos 3D parecen tener los bordes irregulares. Esto puede interrumpir la inmersión en VR. Podemos alisar estos bordes irregulares con el suavizado de contorno.

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

**1.  Accede a la configuración de la canalización de procesado:**

- En la ventana Project, busca el Asset «UniversalRenderPipelineAsset» y selecciónalo para ver sus propiedades en el Inspector.

**2.  Habilita el suavizado de contorno en el Asset Universal Render Pipeline (Canalización de procesado universal o URP):**

- En la sección **Quality (Calidad)**, cambia la configuración **Anti-Aliasing (Suavizado de contorno)** de Disabled o Deshabilitada a **4x**.

**3.  Si deseas agregar más suavizado de contorno a la cámara principal:**

- En el objeto **Main Camera**, en el componente Camera, expande la sección **Rendering (Procesado)**.
- Cambia la configuración **Anti-Aliasing** a «Fast Approximate Anti-Aliasing».
- Asegúrate de que la configuración **Post-Processing** esté habilitada para poder ver el efecto.
- **Nota:** Esto puede generar un impacto significativo en el valor de FPS.

**4.  Aplica el suavizado de contorno al espejo:**

- Busca la textura «Mirror_Texture» en tu proyecto.
- Cambia la propiedad **Anti-Aliasing** de «None» a «4 samples».

[Image: image][Image: image]

Ahora, tu cámara principal y tu espejo deben tener los bordes mucho más suaves que antes.

**Recursos relacionados:**

- [Suavizado de contorno](https://docs.unity3d.com/Packages/com.unity.postprocessing@2.3/manual/Anti-aliasing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)

Marcar paso como completado

## 7. Resumen

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

**Nueva funcionalidad:**

- Mayor frecuencia de imagen

**Nuevos conceptos y habilidades:**

- Métricas objetivo para VR
- Cantidad de polígonos
- Llamadas de dibujo
- Optimización de texturas y materiales
- Optimización de partículas y efectos
- Suavizado de contorno

**Siguiente lección:**

- Iluminación

Marcar paso como completadoPaso opcional

## 8. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Obtén más información sobre la optimización de VR [Medio]**

Obtén más información acerca de las técnicas y las estrategias de optimización para VR. Toma en cuenta que una gran parte de la optimización está relacionada con la iluminación, que es el tema de la siguiente lección:

- [¿Cuáles son las siete etapas de optimización para VR móvil?](https://unity3d.com/how-to/optimize-mobile-VR-games?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [¿Cómo optimizar tus experiencias de VR o AR?](https://learn.unity.com/tutorial/optimizing-your-vr-ar-experiences)
- [¿Cómo optimizar las aplicaciones de VR?](https://learn.unity.com/tutorial/unit-9-optimizing-vr-apps)
- [¿Cuáles son las prácticas recomendadas de VR?](https://learn.unity.com/tutorial/vr-best-practice)
- [¿Cómo optimizar el rendimiento de los gráficos?](https://docs.unity3d.com/Manual/OptimizingGraphicsPerformance.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)

**2.  Investiga herramientas específicas para la plataforma [Difícil]**

Según la plataforma que utilices, puede haber herramientas específicas disponibles para monitorear el rendimiento en tu dispositivo:

- Si se requiere la descarga de una aplicación independiente, es posible que debas transferir la aplicación a tu dispositivo en lugar de descargarla desde una tienda oficial (p. ej., al utilizar SideQuest para Oculus).
- Ejemplos:

- Oculus, [OVR Metrics Tool](https://developer.oculus.com/documentation/tools/tools-ovrmetricstool/)
- HTC Vive, [Android Systrace](https://hub.vive.com/storage/app/doc/en-us/PerformanceProfiling.html)
- Valve o SteamVR, [Frame Timing Tool](https://www.google.com/search?q=SteamVR+Frame+Timing+Tool&oq=SteamVR+Frame+Timing+Tool&aqs=chrome..69i57j33i10i160.211j0j7&sourceid=chrome&ie=UTF-8)

**3.  Explora el Profiler de Unity [Experto]**

Aumenta tu experiencia con la ventana Profiler de Unity.

- [Manual de la ventana Profiler de Unity](https://docs.unity3d.com/Manual/ProfilerWindow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [Guía de optimización mediante el uso del Profiler](https://docs.unity3d.com/Manual/BestPracticeUnderstandingPerformanceInUnity.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949659860)
- [¿Cómo diagnosticar los problemas de rendimiento?](https://learn.unity.com/tutorial/diagnosing-performance-problems#5c7f8528edbc2a002053b597)

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
