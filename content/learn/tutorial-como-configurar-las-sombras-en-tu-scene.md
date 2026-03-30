[Image: image]

# ¿Cómo configurar las sombras en tu Scene?

Tutorial

Beginner

+10XP

20 mins

1

Unity Technologies

[Image: ¿Cómo configurar las sombras en tu Scene?]Summary

Ahora que has configurado las fuentes de luz en tiempo real y la luz ambiental en tu Scene (Escena), estás listo para configurar las sombras.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Explicar la relación entre iluminación y posprocesamiento.
- Configurar las sombras en tu Escena para lograr efectos realistas.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Ahora que has configurado las fuentes de luz en tiempo real y la luz ambiental en tu Scene (Escena), estás listo para configurar las sombras. Leíste sobre sombras brevemente en el segundo tutorial cuando exploraste la diferencia entre la iluminación en tiempo real y la integrada.

Cuando las sombras se comportan como se espera, aumentan la sensación de realismo de una experiencia. No importa si una experiencia tiene una estética estilizada o no, esperamos que las sombras se comporten de cierta manera. Si se alejan demasiado de esas expectativas, se puede interrumpir la inmersión del usuario, a menos que sea una decisión muy intencional respaldada por otros aspectos de la experiencia; por ejemplo, la falta de sombras para los personajes en un juego podría ser un elemento narrativo clave y una forma de reconocer a los enemigos.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Explicar la relación entre iluminación y posprocesamiento.
- Configurar las sombras en tu Escena para lograr efectos realistas.

Marcar paso como completado

## 2. ¿Cómo configurar el recurso de canal de renderizado?

Q&A (0)

Cuando la luz no puede atravesar un objeto, este crea una sombra. Ahora que tienes varias fuentes de luz en tu Escena, puedes configurarlas.

En Unity, las sombras se almacenan en una textura llamada mapa de sombras, que aplana todo lo que hay en la Escena en una textura (imagen) y luego imprime las sombras en la parte superior. Cuanto mayor sea la resolución de la textura, mayor será la calidad de las sombras en tu Escena.

Primero, comienza por revisar la sección Shadows (Sombras) de la configuración de los recursos del Canal de renderizado universal:

**1.**  En la ventana Project, ve a **Assets**> **Settings**> **Rendering** y selecciona el recurso**UniversalRP_HighQuality**. Este es el recurso de canal de renderizado que se usa actualmente en el proyecto.

**2.** En el Inspector, busca la sección **Shadows**.

[Image: image]

**3.** La propiedad **Max Distance (Distancia máxima)** es la distancia máxima desde la cámara en la que Unity renderizará las sombras. Configura **Max Distance** en **0** y observa lo que ocurre en la Escena a medida que incrementas este valor.

Vuelve a establecer la **Max Distance** en **100**cuando termines. A veces, es posible que quieras configurar esta propiedad para lograr un efecto particular, pero por ahora funciona bien.

**4.** Las propiedades **Depth Bias (Prejuicio de profundidad)** y **Normal Bias (Prejuicio normal)** ayudan a abordar los problemas en los que los píxeles de un objeto están en la sombra, pero en realidad deberían estar iluminados (esto se conoce como acné de sombra). Por ahora, esto no debería ser un problema importante en tu Escena, pero intenta ajustar ambas configuraciones para evaluar el impacto.

**5.**Habilita **Soft Shadows (Sombras suaves)**. Esta propiedad permite un procesamiento adicional para que las sombras se vean más suaves.

**6.**  Busca la propiedad **Cascades Count (Recuento de cascadas)**. Esto controla la cantidad de [cascadas de sombras](https://docs.unity3d.com/Manual/shadow-cascades.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953264958) que se usan en tu proyecto. Estas ayudan a abordar la pixelación de las sombras cerca de la cámara creadas por la Directional Light o Luz direccional (efecto escalonado de la perspectiva). Cuantas más cascadas utilices en una Escena, menos se verán afectadas las sombras por el efecto escalonado de la perspectiva.

**7.**  Configura el **Cascade Count** en **1** y luego concéntrate en el grupo de faroles que creaste mientras arrastras el nombre de la propiedad para aumentar de forma incremental el número de cascadas de sombras a **4**. Deberías notar que cada cascada adicional mejora la calidad de las sombras en la Escena.

Marcar paso como completado

## 3. ¿Cómo habilitar sombras suaves en la Directional Light?

Q&A (0)

Ahora que has tenido en cuenta el recurso de canalización, puedes habilitar las **Soft Shadows** en la Directional Light:

**1.**Selecciona Directional Light en la ventana Hierarchy (Jerarquía).

**2.** En el Inspector, ve al componente Light (Luz) y cambia el **Shadow Type (Tipo de sombra)** a **Soft Shadows**.

[Image: image]

**Nota:**La diferencia que hace este cambio en la Escena es demasiado sutil para notarla, lo cual es común. Sin embargo, en algunos casos, esto puede cambiar la sensación general y el estilo de las sombras en una Escena; así que vale la pena incluirlo en tu proceso.

Tanto las **Soft Shadows**como las cascadas de sombras usan la memoria y el ancho de banda para el renderizado, pero requieren menos procesamiento que el uso de un mapa de sombras de alta resolución, que es un enfoque alternativo para mejorar la calidad de las sombras en una Escena.

Marcar paso como completado

## 4. ¿Cómo considerar el impacto del posprocesamiento en la iluminación?

Q&A (0)

¿Has tomado alguna vez una foto de un entorno hermoso al aire libre y has notado que los colores son mucho menos vibrantes que los que puedes ver en la realidad? No todos los sensores de la cámara se crean de la misma manera y hay muchas variables que pueden afectar exactamente lo que recibe un sensor.

Si quisieras hacer que esa foto se parezca más a tu experiencia, puedes agregarle un filtro o un efecto para aumentar la intensidad de los colores. En los editores de imágenes simples, esto puede implicar la selección de un solo ajuste predefinido, pero hay muchas propiedades y efectos que los profesionales pueden configurar para refinar una imagen y obtener el efecto preciso.

Es similar en Unity: la aplicación y el refinamiento iterativos de los efectos de posprocesamiento pueden tener un impacto significativo en la estética general de la iluminación de tu proyecto. Como te estás centrando en la iluminación, hemos agregado efectos de posprocesamiento a las dos Escenas de ejemplo. Aprenderás más sobre ellas en [**Habilidades básicas para creadores artísticos: Posprocesamiento**](https://learn.unity.com/mission/creative-core-post-processing).

Para revisar cómo se vería esta Escena sin los efectos de posprocesamiento, haz lo siguiente:

**1.** En la Hierarchy, selecciona el GameObject **PostProcessing (Posprocesamiento)**.

**2.**  En el Inspector, busca el **Volume (Volumen)** de**Post-Processing**. Deberías ver que hay cuatro efectos que se están usando actualmente en la Escena:

- Bloom (Luminosidad)
- Tonemapping (Mapeo tonal)
- Vignette (Viñeta)
- Chromatic Aberration (Aberración cromática)

**3.**  Habilita el GameObject **PostProcessing** para desactivar estos efectos y ver el impacto que esto tiene en la vista de Escena. Cuando termines, recuerda habilitarlo de nuevo.

Marcar paso como completado

## 5. Explora: ¿Cómo cambiar el estado de ánimo de tu Escena?

Q&A (0)

En este tutorial, cubriste los aspectos básicos de la implementación de iluminación en una Escena. Pero, como aprendiste al inicio de esta experiencia, el papel de un artista de iluminación también implica creatividad.

Escucha a los creadores expertos compartir cómo los hizo sentir la mejor iluminación que han experimentado:

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

Repasa tu visión para la Escena al aire libre a altas horas de la noche. Si tomas en cuenta lo que has aprendido hasta ahora, ¿cómo responde la Escena a tu visión?

Antes de continuar, tómate un tiempo para jugar con las diferentes cosas en las que has estado trabajando para ver cómo puedes desarrollar la atmósfera de la Escena:

- Luz direccional
- Skybox
- Utilería iluminada adicional
- Iluminación ambiental
- Sombras

**Consejos:**

- En el próximo tutorial, trabajarás en la implementación de iluminación integrada en esta misma Escena al aire libre. Si planeas realizar cambios drásticos, pero quieres que tu proyecto se vea igual que las imágenes de ejemplo que se proporcionan ahí, duplica tu Escena de trabajo conjunto y realiza los cambios en la copia.
- Recuerda guardar los cambios con frecuencia mientras vas experimentando.

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

Ahora iluminaste la Escena con luces en tiempo real y configuraste algunos otros aspectos de la iluminación para crear una experiencia más realista. Pero ese es solo uno de los sistemas de Iluminación global de Unity. A continuación, aprenderás sobre la iluminación integrada y la implementarás en la Escena.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
