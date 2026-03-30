[Image: image]

# Add particle effects to your filter spanish

Tutorial

Beginner

+10XP

30 mins

1

(45)

Unity Technologies

[Image: Add particle effects to your filter spanish]Summary

Los efectos de partículas agregan movimiento a una aplicación de AR (Realidad aumentada), con lo que se vuelve más dinámica y visualmente interesante. Los filtros faciales también ofrecen muchas oportunidades para hacer cosas divertidas con los efectos de partículas.

En este tutorial, harás lo siguiente:

- Agregar un Particle System (Sistema de partículas) al filtro facial.
- Personalizar el Particle System para que produzca el efecto deseado.
- Crear y probar la aplicación actualizada.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Uno de los efectos especiales que puedes utilizar en Unity es el efecto de partículas. Las **partículas** son efectos de movimiento simulados que van desde una pequeña salpicadura de agua hasta una explosión gigantesca. Los Particle Systems tienen muchos ajustes para personalizar estos efectos.

En este tutorial, harás lo siguiente:

- Agregar un Particle System (Sistema de partículas) al filtro facial.
- Personalizar el Particle System para que produzca el efecto deseado.
- Crear y probar la aplicación actualizada.

**Nota**: este tutorial introduce algunos conceptos básicos sobre los Particle Systems, pero no es una introducción detallada. Si deseas ampliar tus conocimientos sobre los Particle Systems en Unity, consulta [**Habilidades básicas para creadores artísticos: efectos visuales**](https://learn.unity.com/project/creative-core-vfx).

Marcar paso como completado

## 2. ¿Cómo explorar un Particle System?

Q&A (0)

Antes de empezar a hacer cambios en la aplicación, sigue estos pasos para explorar un Particle System:

**1.**  En la ventana Project (Proyecto), ve a **Assets**>**_BasicFaceFilter**>**Particle Effects** y haz doble clic en uno de los Particle Systems para abrirlo en la vista de Scene (Escena).

**2.**  En la ventana Hierarchy (Jerarquía), selecciona el GameObject **[Nombre]_ParticleSystem**. Se iniciará la reproducción del Particle System en la vista de Escena.

**3.**  En la ventana Inspector, expande el componente Particle System si aún no está abierto.

Las propiedades del Particle System están agrupadas en [subsecciones más pequeñas llamadas módulos](https://docs.unity3d.com/2022.1/Documentation/Manual/ParticleSystemModules.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952884713), las cuales controlan el comportamiento y el aspecto del Particle System.

**4.**Selecciona algunos módulos para expandirlos e inspeccionarlos, o utiliza la casilla de selección ubicada junto al nombre de cada módulo a fin de activarlo o desactivarlo. Puedes experimentar con los diferentes módulos del Particle System y deshacer cualquier cambio que no desees conservar.

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

## 3. ¿Cómo agregar las partículas al rastreador de caras?

Q&A (0)

Al igual que como agregaste un accesorio en 3D, ahora agregarás un Particle System al Prefab **AR Default Face (Cara predeterminada en AR)**.

Activarás la malla Face Reference (Referencia de cara) para que te sirva como guía mientras trabajas en el Prefab y luego la desactivarás cuando tengas configurado el Transform (posición, rotación y tamaño) del Particle System.

Sigue estas instrucciones para crear un nuevo Particle System:

**1.**  En la ventana Project, ve a **Assets**> **_BasicFaceFilter**>**Prefabs**y abre el Prefab **AR Default Face**.

**2.**  En la ventana Hierarchy, selecciona el GameObject **Face_Reference_Mesh** que agregaste en un tutorial anterior. Si no lo ves en la ventana Hierarchy, arrástralo desde la ventana Project.

**3.**  En la ventana Inspector, asegúrate de que el GameObject **Face_Reference_Mesh** esté marcado como activo. Si lo deseas, desactiva los accesorios en 3D que agregaste en un tutorial anterior.

[Image: image]

**4.**  En la ventana Hierarchy, haz clic derecho y selecciona **Create Empty (Crear vacío)** para crear un nuevo GameObject que funcione como delimitador para el Particle System.

La posición del Transform de este GameObject funcionará como punto de generación de las partículas (es decir, el punto donde aparecerán por primera vez).

**5.**  Haz clic derecho en el nuevo GameObject y selecciona **Rename (Cambiar nombre)**. Asigna el nombre «Particle Effects» al GameObject.

[Image: image]

**6.**  Utiliza las herramientas del Transform para desplazar el GameObject **Particle Effects** hasta la posición deseada. Si necesitas un repaso, [revisa las herramientas del Transform y sus accesos directos](https://learn.unity.com/tutorial/explore-the-unity-editor-1#6273f00fedbc2a7f158cc1f2).

**7.**  En la ventana Project, ve a la carpeta **Particle Effects (Efectos de partículas)**. Arrastra uno de los efectos de partículas al nuevo GameObject a fin de crear un GameObject secundario para el efecto.

**8.**Para reproducir la vista previa de un efecto de partícula, selecciónalo en la ventana Hierarchy. Si deseas seleccionar otros efectos al mismo tiempo, mantén presionado Ctrl (macOS: Cmd) al hacer clic en ellos. Ajusta la posición o rotación de los efectos según sea necesario.

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

## 4. ¿Cómo personalizar el Particle System?

Q&A (0)

Una de las características destacadas de los Particle Systems es la increíble variedad de opciones de personalización que ofrecen. Cada Particle System puede ser único.

Para mostrar tu creatividad, sigue estos pasos y modifica uno de los Particle Systems incluidos en el proyecto:

**1.**  Asegúrate de que el Prefab **AR Default Face**esté abierto. Si no lo está, ve a la carpeta **Prefabs** en la ventana Project y vuelve a abrirla.

**2.**  En la ventana Hierarchy, expande el GameObject **[Nombre]_VFX**y selecciona un GameObject Particle System. (Por ejemplo, el GameObject **Rain_VFX (Efecto visual de lluvia)** tiene dos GameObjects Particle Systems secundarios: **Rain_ParticleSystem** y **Clouds_ParticleSystem**).

**3.**  En la ventana Inspector, busca y expande el componente Particle System.

**4.**  Selecciona la propiedad **Start Color (Color inicial)** para abrir una ventana de selección de color.

[Image: image]

**5.**  Cambia el color y observa cómo cambia el tinte del Particle System.

**6.**  Asegúrate de que el campo **Simulation Space (Espacio de simulación)** tenga la opción **World (Mundo)**.

[Image: image]

Las partículas se pueden mover de diferentes maneras según el tipo de espacio de simulación en el que se hayan creado. El espacio de simulación World hace que las partículas cambien de posición con el movimiento del rastreador de caras.

**7.**  Experimenta con los demás ajustes para ver cómo modifican el comportamiento del Particle System. Por ejemplo, puedes ajustar la propiedad **Rate over Time (Cantidad por segundo)** en el módulo Emission (Emisión) para cambiar el número de partículas generadas. Pero ten cuidado: ¡si tienes demasiadas partículas, el rendimiento podría disminuir drásticamente!

[Image: image]

**8.**  Cuando termines de personalizar el Particle System, asegúrate de que la malla de referencia facial esté desactivada. Probablemente no quieras verla cuando pruebes la aplicación en el dispositivo. Luego, selecciona la flecha a la izquierda ubicada junto al nombre del Prefab**AR Default Face** en la ventana Hierarchy para salir del modo de edición de Prefab.

[Image: image]Marcar paso como completado

## 5. ¿Cómo crear y probar la aplicación?

Q&A (0)

Si creas y pruebas la aplicación, debería mostrar los Particle Systems que agregaste cuando se detecte una cara.

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

**4.** La aplicación se abrirá automáticamente en el dispositivo. Cuando se detecte una cara, la aplicación debería mostrar todo lo que hayas agregado hasta ese momento y se deberían reproducir los efectos de partículas.

**Nota**: si quieres un repaso de cómo crear la aplicación en el dispositivo, puedes revisar el proceso para [Android](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4b8aedbc2a4b38f955ba) o [iOS.](https://learn.unity.com/tutorial/deploy-your-project-to-ios-or-android#633d4108edbc2a49c08f0641)

Marcar paso como completado

## 6. ¿Qué más puedes hacer?

Q&A (0)

Si deseas desarrollar aún más tus habilidades, explorar nuevos conceptos o mejorar tu proyecto, echa un vistazo a algunas de las actividades opcionales que aparecen abajo. Estas actividades tienen etiquetas de Fácil, Medio o Difícil para que puedas elegir el nivel del desafío.

Estas actividades son totalmente opcionales, por lo que puedes omitir este paso si no deseas completarlas. Sin embargo, te recomendamos intentar completar al menos una de ellas para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: ajusta los Particle Systems existentes

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

Los Particle Systems incorporados en Unity tienen muchos ajustes para personalizar. Al combinar estos ajustes, puedes obtener Particle Systems sencillos o efectos muy avanzados.

Abre uno de los efectos de partículas incluidos en el proyecto e intenta modificar las propiedades en los siguientes módulos del componente Particle System, en la ventana Inspector:

- **Emission:** las propiedades de este módulo afectan la tasa y la sincronización de las emisiones del Particle System.
- **Shape (Forma):** este módulo define el volumen o la superficie desde los que se pueden emitir partículas
- **Color over Lifetime (Color durante la existencia):** este módulo especifica los cambios de color y transparencia en una partícula durante su existencia.

Puedes obtener más información sobre los Particle Systems en [**Habilidades básicas para creadores artísticos: efectos visuales**](https://learn.unity.com/project/creative-core-vfx).

#### Medio: importa y edita Particle Systems

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

Hay muchos efectos visuales y Particle Systems disponibles en la Asset Store (Tienda de recursos) de Unity. Busca un Asset de efecto visual gratuito en la Asset Store e impórtalo en tu proyecto. El **Unity Particle Pack (Paquete de partículas de Unity)** es una excelente opción, pero tal vez debas editar algunos materiales del paquete para que se muestren correctamente. Este paquete incluye muchos Particle Systems diferentes que puedes explorar para aprender cómo se hacen los Particle Systems más avanzados.

Cambia algunas propiedades de los Particle Systems para crear nuevos efectos y agrégalos a tu filtro facial.

#### Difícil: crea nuevos Particle Systems

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

Crear tus propios Particle Systems puede ser muy divertido. Agrega un nuevo Particle System a la Escena y personaliza diferentes módulos y propiedades para crear nuevos efectos.

Puedes intentar crear estos tipos de Particle Systems, entre otros:

- Estrellas alrededor de la cara
- Ojos láser de superhéroe
- Corazones que flotan hacia arriba

Si quieres obtener más información sobre las opciones disponibles para personalizar los Particle Systems, consulta [el Manual de Unity (en inglés)](https://docs.unity3d.com/Manual/class-ParticleSystem.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952884713).

Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

En este tutorial, agregaste un Particle System a tu aplicación de filtro facial y personalizaste el filtro. En el siguiente tutorial, agregarás animaciones a los accesorios que incluiste anteriormente.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
