[Image: image]

# 3.3: Iluminación

Tutorial

Beginner

+10XP

90 mins

2

(14)

Unity Technologies

[Image: 3.3: Iluminación]SummarySkills

En esta lección, aprenderás cómo utilizar los modos de luz, el Lightmapping (Creación de mapas de luz) y las sondas de luz a fin de optimizar la iluminación para la VR. Al finalizar esta lección, la iluminación de tu Escena se verá hermosa y tendrá un buen rendimiento.

Esta lección forma parte del [curso: ¿Cómo crear con VR?](https://learn.unity.com/course/create-with-vr)

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

## 1. ¿Cómo experimentar con la configuración de iluminación?

Q&A (0)

Antes de empezar a editar la iluminación de la Escena, crearás un nuevo Asset (Recurso) Lighting Settings o Configuración de iluminación, y te familiarizarás con las opciones que tienes a tu disposición.

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

- En la ventana Project (Proyecto), busca y selecciona «UniversalRenderPipelineAsset».

**2.  Experimenta con la configuración de la canalización de procesado:**

- En el Inspector del Asset URP o Universal Render Pipeline (Canalización de procesado universal), en la sección **Lighting (Iluminación)**, prueba diferentes configuraciones.
- Asegúrate de experimentar con la barra deslizable **Per Object Limit (Por límite de objetos)** para ver los límites que se aplican a la iluminación compleja.

**3.  Crea nuevos Lighting Settings para tu Escena:**

- Haz clic en **Window**> **Rendering**>**Lighting** para abrir la ventana Lighting.
- Acopla la ventana junto al Inspector y haz clic en el botón **New Lighting Settings (Nuevo Lighting Settings)** para crear un nuevo perfil.

**4.  Experimenta con la iluminación ambiental en tu Escena:**

- En la parte superior de la ventana Lighting, selecciona la pestaña **Environment (Entorno).**
- Experimenta con los ajustes para ver el impacto que generan en tu Escena.

[Image: image][Image: image]

Ahora debes poder encontrar y ajustar la configuración de iluminación en la ventana Lighting y en el Asset URP.

**Recursos relacionados:**

- [Asset Universal Render Pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.0/manual/universalrp-asset.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525)

Marcar paso como completado

## 2. ¿Cómo preparar y crear tu primer mapa de luz?

Q&A (0)

Llegó el momento de intentar crear tu primer mapa de luz. Primero debes seguir algunos pasos.

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

**1.  Permite que todas tus luces se integren:**

- Busca y selecciona todas las luces de la Escena que no se van a mover, ni se van encender y apagar. Para hacerlo, puedes escribir «t:light» en la barra de búsqueda de la ventana Hierarchy (Jerarquía).
- En los componentes Light (Luz), en la sección **General**, cambia la opción **Mode (Modo)** de **Realtime o Tiempo real,** a **Baked o Integrado**.

**2.  Permite que los objetos de tu Escena tengan la luz integrada:**:

- En la ventana Hierarchy, selecciona todos los objetos que permanecen estáticos.
- En la parte superior del Inspector, asegúrate de que la casilla de verificación **Static (Estático)** esté seleccionada.
- **Nota:**Recuerda seleccionar los objetos que aparecen en la sección Lighting (p. ej., lámparas de piso y de pared, candelabros, etc.).

**3.  Elimina de tu mapa de luz los objetos del fondo y del plano principal para reducir los tiempos de creación:**

- Selecciona todos los objetos de fondo grandes.
- En el componente Mesh Renderer (Procesador de mallas) de cada objeto, busca la sección **Lightmapping** y reduce el valor de la propiedad **Scale in Lightmap (Cambiar tamaño en el mapa de luz)** a 0.

**4.  Intenta crear tus luces:**

- Dirígete a la ventana **Lighting**.
- En la parte inferior de la pestaña **Scene**, haz clic en **Generate Lighting (Generar iluminación).**
- **Nota:**si el programa se congela o parece tener algún error durante el proceso de creación, intenta cambiar el sistema de creación Lightmapper a Progressive GPU (GPU progresiva) en lugar de Progressive CPU (CPU progresiva).

**5.  Minimiza temporalmente el tiempo de generación de tu mapa de luz:**

- Reduce el valor de **Lightmap Resolution (Resolución del mapa de luz)** a entre 5 y 10.
- Reduce otros valores que afectan la calidad del mapa de luz (muestras, rebotes, etc).

[Image: image][Image: image][Image: image]

Ahora debes tener un mapa de luz de baja resolución integrado en tu Escena.

**Recursos relacionados:**

- [Modos de luz: Baked, Mixed (Mixto), Realtime](https://docs.unity3d.com/Manual/LightModes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525)

Marcar paso como completado

## 3. ¿Cómo ajustar la iluminación de la Escena y volver a crearla?

Q&A (0)

Ahora que creaste tu primer mapa de luz, puedes dedicar algún tiempo a iluminar adecuadamente tu Escena y volver a intentarlo.

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

**1.  Limpia tu mapa de luz y visualiza los cambios de iluminación en tiempo real:**

- En la parte inferior de la ventana Lighting, haz clic en el **menú desplegable** ubicado junto a Generate Lighting.
- Selecciona **Clear Baked Data (Limpiar datos creados).**

**2.  Visualiza el efecto de la mayor cantidad de luces posible:**

- Selecciona el Asset **UniversalRenderPipelineAsset**.
- Aumenta temporalmente el valor de **Additional Light** **Per Object Limit** al máximo.

**3.  Elimina las luces incluidas de forma predeterminada en el Prefab Room (Espacio):**

- En la ventana Hierarchy, expande el Prefab Room_[style].
- Elimina los dos puntos de luz secundarios.
- **Nota:** Deberás abrir el Prefab Room para poder eliminar las luces.

**4.  Agrega una iluminación más realista con fuentes de luz reales en tu Escena:**

- En la **Course Library** > **Prefabs** > **carpeta Lighting** , asegúrate de que tienes suficiente objetos que emiten luz para iluminar tu Escena.
- Para agregar objetos secundarios de Luz para los elementos de iluminación, haz clic derecho en ellos en la Hierarchy y selecciona **Light**> **Point / Spot Light**.

**5.  Haz que el espacio tenga una iluminación más equilibrada:**

- En tu **Directional Light (Luz direccional)**, intenta aumentar los valores de las opciones **Intensity o Intensidad,** e **Indirect Multiplier o Multiplicador indirecto**.
- En Lighting Settings, intenta aumentar el valor de **Indirect Intensity (Intensidad indirecta)**.

**6.  Prueba tu iluminación:**

- Vuelve a hacer clic en Generate Lighting.
- Si tienes tiempo, aumenta el valor de la opción **Lightmap Resolution** y el valor de otros ajustes de Light para averiguar cómo se vería en su estado final.
- **Nota:**Si las sombras se ven salpicadas y pixeladas, en Lighting Settings, en la propiedad **Lightmap Compression (Compresión del mapa de luz)**, elige **None (Ninguna).**

[Image: image]

Ahora debes tener una iluminación básica integrada en tu Escena, la cual se debe ver más o menos como deseas.

**Recursos relacionados:**

- [¿Cómo configurar mapas de luz?](https://learn.unity.com/tutorial/configuring-lightmaps#)

Marcar paso como completado

## 4. ¿Cómo agregar iluminación mixta?

Q&A (0)

Si deseas que tus objetos proyecten sombras en tiempo real, al mismo tiempo que aprovechas los beneficios de rendimiento de los mapas de luz integrados, puedes utilizar iluminación «mixta».

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

**1.  Obtén sombras en tiempo real además de tus mapas de luz integrados:**

- Cambia la opción **Mode** de tu **Directional Light** a «Mixed»****(en lugar de «Baked»).

**2.  Observa cómo funciona la nueva iluminación mixta:**

- En la ventana **Lighting**, haz clic en **Generate Lighting** para volver a crear tu iluminación.
- Observa el efecto de la iluminación mixta en las luces y las sombras de tus objetos dinámicos.

[Image: image]

Ahora, tus objetos dinámicos deben tener sombras en tiempo real provenientes de tu luz direccional.

**Recursos relacionados:**

- [Iluminación mixta](https://docs.unity3d.com/Manual/LightMode-Mixed.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525)

Marcar paso como completado

## 5. ¿Cómo agregar sondas de luz?

Q&A (0)

Para que todas las luces integradas en tu Escena proporcionen una iluminación en tiempo real más realista, debes tener sondas de luz.

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

**1.  Agrega un nuevo Light Probe Group (Grupo de sondas de luz) como objeto secundario del objeto Room:**

- En la Hierarchy, haz clic derecho en el objeto **Room_[style]** y selecciona **Light** > **Light Probe Group**.

**2.  Para poder editar las sondas de luz:**

- Asegúrate de que los **Gizmos (Artefactos)**con **íconos 3D** estén habilitados en la esquina superior derecha de la vista de Escena.
- Haz clic en el botón **Edit Light Probes (Editar sondas de luz)** en el Inspector del Light Probe Group.

**3.  Duplica las sondas de luz y distribúyelas por el espacio:**

- Arrastra cuadros de **selección** alrededor de las sondas para seleccionarlas.
- Utiliza la herramienta **Move (Mover)** para colocar las sondas.
- Utiliza **Ctrl/Cmd + D** para duplicar las sondas seleccionadas.
- **Nota:**Puede resultar útil cambiar a la vista isométrica al hacer clic en el ícono pequeño que aparece debajo del Gizmo de ejes, en la esquina superior derecha de la vista de Escena.

**4.  Para colocar adecuadamente tus sondas de luz:**

- Asegúrate de tener sondas en las áreas donde el color o la intensidad de la luz cambian drásticamente.
- Asegúrate de que tus sondas no estén dentro de otros objetos.

**5.  Observa el efecto de tus sondas de luz:**

- En la ventana Lighting, regenera tu iluminación y pruébala para ver la iluminación en tus objetos dinámicos.

[Image: image]

Ahora debes tener una iluminación dinámica aproximada en tu Escena, basada en la iluminación integrada calculada por las sondas de luz.

**Recursos relacionados:**

- [Sondas de luz](https://docs.unity3d.com/Manual/LightProbes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525)
- [Grupos de sondas de luz](https://docs.unity3d.com/Manual/class-LightProbeGroup.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525)
- [¿Cómo configurar las sondas de luz?](https://learn.unity.com/tutorial/configuring-light-probes-2019-3#)

Marcar paso como completado

## 6. ¿Cómo finalizar el mapa de luz?

Q&A (0)

Ahora que te iluminación está configurada aproximadamente como deseas, puedes crear un mapa de luz más definitivo con una mayor resolución.

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

**1.  Asegúrate de que tu iluminación esté optimizada adecuadamente para el dispositivo que elegiste como objetivo:**

- Prueba tu aplicación de la misma manera en que planeas que la utilicen los usuarios (es decir, si elegiste un dispositivo móvil como objetivo, pruébala en el dispositivo de forma independiente, sin conectarlo a tu computadora).
- Asegúrate de que la frecuencia de imagen tenga el valor que elegiste como objetivo.
- Si deseas obtener instrucciones para crear y ejecutar tu aplicación en el dispositivo, consulta el [tutorial de Configuración del proyecto VR](https://learn.unity.com/tutorial/vr-project-setup).

**2.  Genera un solo archivo de mapa de luz en lugar de varios archivos pequeños:**

- Aumenta la opción **Max Lightmap Size (Tamaño máximo del mapa de luz)** a 4096.
- Se recomienda tener un solo archivo de mapa de luz en lugar de varios archivos pequeños.

**3.  Si las sombras se ven salpicadas o pixeladas:**

- En la propiedad **Lightmap Compression**, elige **None.**

**4.  Si te gusta la apariencia general de tu iluminación y tienes todo listo para generar el mapa de luz final:**

- En la ventana **Lighting**, aumenta el valor de Lightmap Resolution a entre 20 y 80.
- También puedes ajustar las demás opciones de iluminación (muestras, rebotes, etc.) para obtener el resultado que deseas.

[Image: image]

Ahora, tu iluminación se debe ver como deseas y debe estar optimizada para el rendimiento.

**Recursos relacionados:**

- [¿Cómo configurar la iluminación en Unity?](https://docs.unity3d.com/Manual/BestPracticeLightingPipelines.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525)

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

- Iluminación compleja con buen rendimiento

**Nuevos conceptos y habilidades:**

- Iluminación integrada y en tiempo real
- Lightmapping
- Sondas de luz

**Siguiente lección:**

- ¿Cómo publicar?

Marcar paso como completadoPaso opcional

## 8. Actividades de extensión

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos y mejorar tu proyecto, echa un vistazo a algunas de las actividades de extensión opcionales que aparecen abajo.

Estas actividades tienen etiquetas de [Fácil], [Medio], [Difícil] o [Experto], así como una etiqueta que indica que una actividad [Requiere programación] si es necesario escribir algo de código.

**1.  Agrega un nuevo Skybox [Fácil]**

Crea o descarga un nuevo Skybox para mejorar el aspecto de tu Escena:

- Obtén más información acerca de los [Skyboxes.](https://docs.unity3d.com/Manual/skyboxes-using.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525)
- Puedes descargar Skyboxes en la Asset Store (Tienda de recursos) de Unity: busca entre los Assets gratis.
- Agrega tu Skybox en la ventana Lighting, en la pestaña Environment.
- Advertencia: Si tienes un Skybox de alta resolución y lo configuraste como la fuente de tu luz ambiental en la pestaña Environment, el lightmapping puede tardar mucho tiempo. Para evitar esto, puedes cambiar la opción Source (Fuente) a Gradient (Degradado).

[Image: image][Image: image]

**2.  Haz otros ajustes en la iluminación [Medio]**

Ajusta los detalles de la iluminación en tu Escena y las opciones de Lighting Settings para hacer que tenga el mejor aspecto y el mejor rendimiento posibles:

- Intenta ajustar los valores de [la ventana Lighting](https://docs.unity3d.com/2020.1/Documentation/Manual/lighting-window.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525) para ver qué tipo de resultados obtienes.
- Obtén más información acerca de la iluminación en Unity:

- [Introducción a la iluminación y el procesado](https://learn.unity.com/tutorial/introduction-to-lighting-and-rendering#)

[Image: image]

**3.  Explora las sondas de reflexión [Difícil]**

Agrega sondas de reflexión en tu Escena para obtener reflexiones más realistas de los objetos metálicos:

- [Consulta el manual de sondas de reflexión](https://docs.unity3d.com/Manual/class-ReflectionProbe.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525) y toda la información relacionada con el [uso de sondas de reflexión.](https://docs.unity3d.com/Manual/UsingReflectionProbes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949576525)
- Probablemente, deberás duplicar el Material_Main (Material principal) para crear un nuevo «Material_Main_Shiny» (Material principal brillante), aumentar la propiedad metálica del material y asignarlo a un objeto brillante de tu Escena que deba reflejar la luz.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
