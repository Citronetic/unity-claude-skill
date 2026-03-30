[Image: image]

# Test the frame rate of the portal world spanish

Tutorial

Beginner

+0XP

60 mins

2

(20)

Unity Technologies

[Image: Test the frame rate of the portal world spanish]Summary

Cuando el usuario toca un plano detectado en el entorno, aparece un portal en ese plano. En este tutorial, diseñarás todo el mundo digital que aparece en el interior del portal. La ventana del portal aún no funcionará, pero podrás ver toda la Scene (Escena), incluso desde fuera del portal. Esta es una buena oportunidad inicial para ver cómo aparece el entorno del mundo del portal en los planos. En este tutorial, también aprenderás sobre los requerimientos de rendimiento móvil y las técnicas de optimización.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Ya desarrollaste casi toda la funcionalidad de esta aplicación: cuando el usuario toca un plano detectado en el entorno, aparece un portal en ese plano. En este tutorial, diseñarás todo el mundo digital que aparece en el interior del portal. La ventana del portal aún no funcionará, pero podrás ver toda la Escena, incluso desde fuera del portal. Esta es una buena oportunidad inicial para ver cómo aparece el entorno del mundo del portal en los planos.

Este es un ejemplo del aspecto que podría tener un plano horizontal:

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

La Escena creada por ti puede incluir modelos en 3D, texturas, iluminación y personajes animados. Sin embargo, es necesario buscar un buen equilibrio: puedes hacer que los Assets (Recursos) se vean fabulosos, pero también recuerda que la aplicación debe tener un buen rendimiento en dispositivos móviles. Por lo tanto, en este tutorial, también aprenderás sobre los requerimientos de rendimiento móvil y las técnicas de optimización.

Marcar paso como completado

## 2. ¿Cómo definir la posición del mundo del portal? (para portales horizontales)

Q&A (0)

El proceso para definir la posición del mundo en un portal horizontal es un poco diferente al proceso para los portales verticales. Si utilizas un portal horizontal, sigue este paso. Si utilizas un portal vertical, omite este paso y pasa al siguiente.

El proceso para agregar el mundo en el interior del portal es muy sencillo: solo tienes que colocarlo detrás del Prefab de la **ventana del portal**. Luego, cuando crees una instancia del Prefab, también se creará una instancia del mundo junto con el portal.

Para ayudarte a ahorrar tiempo, te proporcionamos niveles prediseñados de cada tema. Sin embargo, puedes modificar los niveles proporcionados o incluso crear tu propia versión desde cero más adelante.

Sigue estas instrucciones para agregar el nivel del Prefab **portal**:

**1.**En la ventana Project (Proyecto), abre **_ARPortal**> **Prefabs**> **Portals** y haz doble clic en el portal que hayas decidido utilizar para abrir el Prefab en la vista de Escena.

**2.** En la ventana Project, ve a **_ARPortal**> **Prefabs**> **Levels** y arrastra el Prefab **[Tema]_Level o [Tema]_Nivel** a la ventana Hierarchy como GameObject secundario del Prefab **portal**.

[Image: image]

**3.**Utiliza las herramientas Move (Mover), Rotate (Girar) y Scale o Ajustar tamaño en la vista de Escena para reubicar el nivel y colocarlo debajo de la ventana del portal.

**Importante**: no reubiques ni gires el portal mismo: mueve el GameObject secundario del nivel correspondiente al GameObject primario del **portal**.

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

**4.**  Crea y ejecuta la aplicación para acceder a la vista previa de la nueva función. Cuando se genere un portal, también se debe generar el nivel completo detrás de él. Si es necesario, puedes ajustar la posición del nivel en relación con el portal hasta que se vea perfecto.

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

**Nota**: aún verás el nivel fuera de la ventana del portal. No te preocupes, corregirás esto en el siguiente tutorial.

Marcar paso como completado

## 3. ¿Cómo definir la posición del mundo del portal? (para portales verticales)

Q&A (0)

Este paso indica cómo definir la posición del mundo del portal en relación con un portal vertical. Si utilizas un portal horizontal, puedes omitir este paso. Si utilizas un portal vertical, debes completar este paso.

El proceso para agregar el mundo en el interior del portal es muy sencillo: solo tienes que colocarlo detrás del Prefab de la **ventana del portal**. Luego, cuando crees una instancia del Prefab, también se creará una instancia del mundo junto con el portal.

Para ayudarte a ahorrar tiempo, te proporcionamos niveles prediseñados de cada tema. Sin embargo, puedes modificar los niveles proporcionados o incluso crear tu propia versión desde cero más adelante.

Sigue estas instrucciones para agregar el nivel del Prefab **portal**:

**1.**En la ventana Project (Proyecto), abre **_ARPortal**> **Prefabs**> **Portals** y haz doble clic en el portal que hayas decidido utilizar para abrir el Prefab en la vista de Escena.

**2.** En la ventana Project, ve a **_ARPortal**> **Prefabs**> **Levels** y arrastra el Prefab **[Tema]_Level o [Tema]_Nivel** a la ventana Hierarchy como GameObject secundario del Prefab **portal**.

[Image: image]

Verás que la orientación de la ventana en relación con el mundo es incorrecta. Recuerda que, en un tutorial anterior, giraste la ventana del portal vertical para que quedara plana sobre el suelo y se generara correctamente sobre un plano vertical.

Sería muy difícil girar y definir la posición del nivel en relación con esta ventana girada artificialmente, además de que esto desorientaría al usuario. En lugar de eso, girarás temporalmente la ventana en sentido vertical y luego la volverás a girar después de definir la posición del nivel y unirlo a la ventana.

**3.**En la ventana Hierarchy, selecciona el GameObject **Window (Ventana)**.

**4.**En la ventana Inspector, restablece la rotación del GameObject para que su parte superior quede alineada con la línea verde del eje Y del Gizmo (Dispositivo) en la Escena y la parte posterior quede alineada con la línea azul del eje Z.

[Image: image]

**5.**En la ventana Hierarchy, selecciona el GameObject **[Tema]_Level**. Utiliza las herramientas Move (Mover), Rotate (Girar) y Scale o Ajustar tamaño en la vista de Escena para reubicar el nivel en relación con la ventana del portal.

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

**6.**En la ventana Hierarchy, arrastra el GameObject **[Tema]_Level** sobre el GameObject **Window**para convertirlo en GameObject secundario del GameObject **Window**.

[Image: image]

**7.**Selecciona el GameObject **Window** y restablece su rotación para que vuelva a quedar plano boca arriba. Ahora que el Prefab del nivel es un GameObject secundario del GameObject **Window**, girará junto con la ventana.

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

La cara exterior de la ventana debe apuntar en la dirección de la línea verde del eje Y del Gizmo en la Escena y la parte superior de la ventana debe apuntar en la dirección de la línea azul del eje Z.

**Nota**: ahora que toda la Escena está girada 90 grados, el desplazamiento por la vista de Escena podría desorientarte. Si lo deseas, puedes restablecer la rotación de la ventana para hacer cualquier cambio y volver a colocarla en posición horizontal cuando tengas todo listo para probar la aplicación.

**8.**  Crea y ejecuta la aplicación para acceder a la vista previa de la nueva función. Cuando se genere un portal, también se debe generar el nivel completo detrás de él. Si es necesario, puedes ajustar la posición del nivel en relación con el portal hasta que se vea perfecto.

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

**Nota**: aún verás el nivel fuera de la ventana del portal. No te preocupes, corregirás esto en el siguiente tutorial.

Marcar paso como completado

## 4. ¿Cómo probar la frecuencia de imagen?

Q&A (0)

Desde la perspectiva del usuario, la medida más importante del rendimiento de una aplicación es la frecuencia de imagen, la cual se mide en fotogramas por segundo (fps). Si una aplicación tiene una frecuencia de imagen alta, como 60 fps, se ejecuta de manera muy fluida. Si una aplicación tiene una frecuencia de imagen baja, como 15 fps, se generan retrasos y vibraciones, por lo que la experiencia del usuario es muy desagradable.

60 fps es el nivel recomendado para la mayoría de las aplicaciones, especialmente si incluyen elementos interactivos, como los que implementaste en esta aplicación de portales. Se recomienda una frecuencia de imagen mínima de 30 fps para las aplicaciones donde la calidad de la imagen es más importante que la interactividad, como las de videografía o producción virtual.

Creamos para ti una interfaz de usuario sencilla que muestra la frecuencia de imagen actual de la aplicación.

Sigue estas instrucciones para agregar el GameObject **FPS Overlay UI (Interfaz de usuario de superposición de fps)**a la Escena y probar la frecuencia de imagen de la aplicación:

**1.**Si la interfaz de usuario de depuración sigue activa en la ventana Hierarchy, elimínala o desactívala. Ya no necesitarás esta interfaz de usuario.

**2.**En la ventana Project, ve a **_ARPortal** > **Prefabs** > **Testing** y arrastra el Prefab **FPS Overlay UI** a la ventana Hierarchy.

**Nota**: si aparece la ventana de diálogo TMP Importer (Importador de TMP), selecciona **Import TMP Essentials (Importar elementos básicos de TMP)**y cierra la ventana. No es necesario que importes la opción TMP Essentials and Extras (Elementos básicos y adicionales de TMP).

**3.**En la ventana Hierarchy, haz doble clic en el GameObject **FPS Overlay UI** para averiguar cómo se verá en la pantalla del dispositivo.

[Image: image]

**4.**Asegúrate de que el GameObject**FPS Overlay UI** esté seleccionado y luego ve a la ventana Inspector y busca el componente Display FPS (Script) o Mostrar FPS (Script).

**5.**  Revisa los valores de las propiedades **Good Fps Threshold (Umbral aceptable de fps)** y **Bad Fps Threshold (Umbral inaceptable de fps)**.

[Image: image]

Estos valores de umbral controlan el color del texto que se muestra en **FPS Overlay UI**:

- Si los valores de fps son mayores que el valor de **Good Fps Threshold**, el texto se mostrará de color verde.
- Si los valores de fps son menores que el valor de **Bad Fps Threshold**, el texto se mostrará de color rojo.
- Si los valores de fps están entre los dos valores de umbral, el texto se mostrará de color amarillo.

**5.**  Crea y ejecuta la aplicación para acceder a la vista previa de la nueva función. La frecuencia de imagen actual se debe mostrar en la interfaz de usuario ubicada en la parte inferior de la pantalla.

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

Lo ideal es que la frecuencia de imagen esté cerca de los 60 fps durante toda la experiencia y se muestre en texto de color verde.

Marcar paso como completado

## 5. ¿Cómo optimizar las aplicaciones móviles?

Q&A (0)

La superposición de una Escena digital completa sobre una transmisión de cámara en vivo es mucho trabajo para un procesador. El renderizado de modelos complejos, texturas detalladas, luces en tiempo real o materiales semitransparentes puede sobrecargar rápidamente el dispositivo del usuario, lo que puede provocar que disminuya la frecuencia de imagen y se agote la batería.

La optimización es indispensable al desarrollar contenido para plataformas móviles, ya que los dispositivos móviles no tienen la misma potencia de procesamiento que las consolas o las plataformas de escritorio. La **optimización** es el proceso de revisar que todos los elementos de la aplicación se ejecuten de la manera más eficiente posible, lo que incluye los scripts, los modelos en 3D, las texturas, los materiales, etc. Algunas personas que trabajan en la industria del contenido 3D en tiempo real se dedican exclusivamente a la optimización.

La optimización es un tema profundo y complejo que no exploraremos con mucho detalle en este tutorial, pero aquí tienes algunas recomendaciones para cuando importes nuevos Assets y diseñes Escenas para tus proyectos de AR (Realidad aumentada) móvil:

- Utiliza Assets con pocos polígonos. Los modelos en 3D con pocos polígonos (o «Low Poly») son más sencillos y requieren menos trabajo del procesador.
- Reduce el número de luces en tiempo real. Las luces en tiempo real se actualizan constantemente e interactúan entre sí conforme los objetos se mueven en la Escena.
- Reduce el uso de materiales semitransparentes. El renderizado de objetos a través de varias superficies semitransparentes puede sobrecargar rápidamente el procesador.
- Reduce el número total de materiales utilizados en la Escena. Puedes lograr esto mediante la creación de un Texture Atlas o Atlas de texturas (a veces conocido como [Sprite Atlas o Atlas de Sprites](https://docs.unity3d.com/Manual/SpriteAtlasWorkflow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953988528)), el cual permite que muchos objetos diferentes compartan una sola textura y un solo material.

Si deseas obtener más información sobre las técnicas de optimización para dispositivos móviles, consulta nuestra publicación en el blog titulada  [Optimize your mobile game performance (Optimiza el rendimiento de tu juego móvil)](https://blog.unity.com/technology/optimize-your-mobile-game-performance-expert-tips-on-graphics-and-assets) o descarga el libro electrónico gratuito titulado [Optimize Your Mobile Game Performance](https://create.unity.com/optimize-mobile-game-eBook) (ambos en inglés).

Marcar paso como completado

## 6. ¿Cómo obtener una frecuencia de imagen baja en la aplicación?

Q&A (0)

Los Assets que te proporcionamos para este proyecto ya estaban optimizados para el rendimiento móvil, por lo que es probable que hayas tenido una frecuencia de imagen alta desde el principio. Sin embargo, será útil experimentar con una frecuencia de imagen baja para que conozcas su efecto negativo en la experiencia del usuario.

En los Assets del proyecto, te proporcionamos un Particle System (Sistema de partículas) diseñado para generar a propósito un efecto negativo en el rendimiento. El sistema está compuesto por partículas grandes, superpuestas y semitransparentes que se combinan para crear un efecto de niebla.

[Image: image]

Estas imágenes superpuestas y semitransparentes provocan **overdraw**, que es lo que sucede cuando un solo píxel se debe dibujar (calcular) muchas veces. Cada vez que el renderizador de Unity encuentra una superficie semitransparente, debe volver a dibujar cada uno de los píxeles afectados. Cuando hay muchas superficies semitransparentes seguidas, el overdraw aumenta exponencialmente, lo que reduce drásticamente la velocidad de procesamiento.

Sigue estas instrucciones para agregar el Particle System sin optimizar a la Escena y ver su efecto:

**1.**En la ventana Project, haz doble clic en el Prefab **portal** para abrirlo en la vista de Escena.

**2.**En la ventana Project, ve a **_ARPortal**> **Prefabs**> **Testing**y luego arrastra el Prefab **Unoptimized Particle System (Particle System sin optimizar)** a la ventana Hierarchy y agrégalo como GameObject secundario del GameObject **[Tema]_Level**.

**3.**Coloca el Particle System en alguna parte de la Escena que vaya a quedar visible a través de la ventana del portal.

[Image: image]

**4.**  Crea y ejecuta la aplicación para acceder a la vista previa de la nueva función. Revisa el valor de fps cuando apuntes la cámara hacia las partículas sin optimizar y hacia otras partes.

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

**5.**Cuando termines de hacer pruebas, elimina el GameObject **Unoptimized Particle System**.

Marcar paso como completado

## 7. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas.

Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Medio: agrega audio espacial al mundo del portal

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

Si ya completaste el proyecto de marcadores en AR, ya conoces el audio espacial y ya sabes cuánto mejora la AR. Cuando te acercas al objeto que emite el sonido, el volumen aumenta. Cuando te alejas, el volumen del audio disminuye. Este efecto dinámico genera una experiencia en AR más envolvente y realista. Si necesitas ayuda para completar este desafío, utiliza la siguiente guía:

- Descarga archivos de audio en la Asset Store (Tienda de recursos) de Unity u otras fuentes en línea. Probablemente, la mejor opción es hacer un bucle de audio que se pueda reproducir continuamente en la Escena.
- Agrega uno o más GameObjects **Audio Source (Fuente de audio)** al mundo del portal y asigna sonidos a la propiedad **Audio Clip (Clip de audio)**.
- Recuerda elegir la opción **3D** en la propiedad **Spatial Blend (Mezcla espacial)** y ajustar el volumen y la atenuación de volumen a tu gusto.
- Si tienes audio que se reproduce en bucle, activa la propiedad **Loop (Bucle)** en el componente Audio Source.

Si quieres un repaso de cómo implementar el audio espacial en una aplicación en AR, revisa el [tutorial de audio espacial del proyecto de marcadores de AR.](https://learn.unity.com/tutorial/add-spatial-audio-to-your-marker-based-app)

#### Difícil: agrega animación al mundo del portal

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

Si agregas movimiento y vida al mundo del portal, el usuario disfrutará una experiencia mucho más fascinante y atractiva al explorarlo. Intenta incluir un objeto o personaje en movimiento en el mundo del portal (idealmente, utiliza un movimiento en bucle para que el usuario pueda verlo más de una vez).

Si necesitas ayuda para completar este desafío, utiliza la siguiente guía:

- Crea un nuevo clip de animación.
- Agrega la nueva animación al componente Animator Controller (Control de animación).
- Si deseas que la nueva animación se reproduzca de forma automática, haz clic derecho en el nuevo nodo de animación y selecciona **Set as layer default state (Establecer como estado predeterminado de la capa)**.

Si deseas reproducir dos animaciones al mismo tiempo, utiliza la siguiente guía:

- En el Animator Controller, crea una nueva capa y agrégale una animación.
- En la configuración de mezcla de capas de la nueva animación, selecciona Override (Anular) y establece un valor de 1 en la opción Weight (Peso).

[Image: image]

Si necesitas más ayuda, puedes obtener más información sobre los efectos visuales en [**Habilidades básicas para creadores artísticos: animación**](https://learn.unity.com/project/creative-core-animation).

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

En este tutorial, agregaste una Escena dinámica al otro lado de la ventana del portal y te aseguraste de que la aplicación mantuviera una frecuencia de imagen alta. En el siguiente tutorial, completarás la funcionalidad de la ventana del portal y te asegurarás de que el usuario únicamente pueda ver el contenido del portal a través de la ventana.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
