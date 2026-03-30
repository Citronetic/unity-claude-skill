[Image: image]

# ¿Cómo configurar la Directional Light y el Skybox?

Tutorial

Beginner

+10XP

25 mins

1

(8)

Unity Technologies

[Image: ¿Cómo configurar la Directional Light y el Skybox?]Summary

Cuando creas una nueva Scene (Escena) en el Editor de Unity, tu vista de Escena se carga con un cielo azul brillante. La Directional Light (Luz direccional) es uno de los dos GameObjects creados para ti. Ambos son los aspectos básicos de la iluminación en Unity y están presentes de forma predeterminada para ayudar a los creadores a comenzar.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar las consideraciones clave para iluminar las Escenas al aire libre de manera realista.
- Describir el papel de la Directional Light en una Escena.
- Configurar la Directional Light en una Escena para lograr efectos comunes.
- Describir el papel de un Skybox en una Escena.
- Crear un Skybox procedimental.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Cuando creas una nueva Scene (Escena) en el Editor de Unity, tu vista de Escena se carga con un cielo azul brillante. La Directional Light (Luz direccional) es uno de los dos GameObjects creados para ti. Ambos son los aspectos básicos de la iluminación en Unity y están presentes de forma predeterminada para ayudar a los creadores a comenzar.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar las consideraciones clave para iluminar las Escenas al aire libre de manera realista.
- Describir el papel de la Directional Light en una Escena.
- Configurar la Directional Light en una Escena para lograr efectos comunes.
- Describir el papel de un Skybox en una Escena.
- Crear un Skybox procedimental.

Al hacer esto, comenzarás el proceso de convertir la Escena al aire libre de iluminación a primera hora de la noche a iluminación bien tarde en la noche.

Marcar paso como completado

## 2. ¿Cómo iluminas una Escena de manera realista?

Q&A (0)

Como aprendiste en [**¿Cómo comenzar a usar la iluminación?**](https://learn.unity.com/tutorial/673d2a3bedbc2a1af686c052?language=es), el funcionamiento de la luz en Unity utiliza [el renderizado basado en la física](https://learn.unity.com/tutorial/673d1087edbc2a169b9e1b83?language=es#676ee215edbc2a266cde9643) para simular el funcionamiento de la luz en el mundo real.

Iluminar un proyecto de una manera funcionalmente efectiva y evocadora es uno de los desafíos clave para los artistas de iluminación, como comparten nuestros creadores expertos:

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

Pero, ¿qué significa eso en la práctica?

Marcar paso como completado

## 3. ¿Cómo identificar los tipos de fuentes de luz?

Q&A (0)

Hay todo tipo de espacios que quizás quieras crear en una experiencia en tiempo real: espacios en el interior y al aire libre, realistas (hasta cierto punto) o totalmente fantásticos. Incluso si estás trabajando en un proyecto de fantasía o ciencia ficción, la iluminación puede ayudar a fundamentar una experiencia en tiempo real y hacerla sentir más envolvente para la persona que la experimenta.

Identificar las fuentes de luz requeridas para una Escena es un paso inicial clave para el diseño y la implementación de la iluminación. Esto incluye lo siguiente:

- **Iluminación natural**, que suele ser el sol o la luna.
- **Iluminación motivada**, que imita una fuente de luz realista específica en la Escena; por ejemplo, un farol o los faros de un automóvil.
- **Iluminación clave**, que es la luz sin una fuente identificable que ilumina un objeto de enfoque en una Escena.
- **Iluminación ambiental**(también llamada **luz ambiental difusa** en Unity), que es la otra luz que contribuye a una Escena y no proviene de un objeto fuente específico.

**Nota:**Hay más tipos de iluminación, pero estos cuatro son un excelente punto de partida para esta experiencia de aprendizaje.

Es posible que no sepas la configuración de iluminación exacta que deseas lograr de inmediato, pero al considerar este tipo de iluminación y pensar en el estado de ánimo y la estética que intentas crear, puedes elaborar un plan inicial.

#### Tus objetivos para la Escena al aire libre

Tómate un momento para pensar en la manera de convertir la Escena al aire libre para que tenga iluminación de tarde en la noche y toma nota de tus ideas:

- ¿Cuáles serán las fuentes de luz significativas?
- ¿Qué fuentes de luz adicionales te gustaría agregar?
- ¿Qué diferentes estados de ánimo podrías crear según la forma de configurar esas luces?

En los próximos tutoriales, utiliza estas ideas iniciales como guía cuando tengas la oportunidad de personalizar la Escena.

Marcar paso como completado

## 4. ¿Cómo configurar la Directional Light?

Q&A (0)

En los entornos al aire libre, una fuente natural de luz común es el sol durante el día y la luna por la noche. En Unity, siempre que creas una Escena, esta viene con una **Directional Light**ya agregada a la Hierarchy (Jerarquía); esta luz funciona como tu sol o tu luna.

Una Directional Light proyecta rayos de luz rectos y paralelos en la dirección indicada por el [gizmo](https://docs.unity3d.com/Manual/GizmosMenu.html#GizmosIcons?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953326493) (una superposición de gráficos asociada con un GameObject específico y que se muestra en la vista de Escena):

[Image: image]

De forma natural, las ondas de luz quieren extenderse, pero en el caso de la Directional Light no se obtiene ese efecto porque está muy lejos de la Escena (ya que el sol está muy lejos de la Tierra). En lugar de ello, emite rayos de luz rectos y paralelos a tu Escena.

Puedes colocar la Directional Light en cualquier lugar de tu Escena y no afectará la luz que se emite. Debes cambiar explícitamente la dirección de la luz para cambiarla en tu Escena.

Pruébalo:

**1.** Abre el proyecto **Habilidades básicas para creadores artísticos: Iluminación**en el Editor de Unity, si aún no lo has hecho.

**2.**  En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**>**Scenes** y abre **TutorialScene_Lighting_Outdoor**. La Escena anterior que revisaste era un ejemplo refinado: esta es la Escena en la que trabajarás para los primeros tutoriales. Por el momento, solo deberías ver un anfiteatro vacío con un fondo de cielo.

Si solo ves gris en la vista de Escena, usa el menú desplegable **Effects (Efectos)**en la barra de control de la vista de Escena para habilitar el Skybox.

[Image: image]

**3.**  En la ventana Hierarchy, expande el GameObject **Lighting (Iluminación)**.

**4.**  Selecciona el GameObject **Directional Light**. Deberías notarlo sobre el espacio central en el anfiteatro. Si los íconos están configurados lo suficientemente grandes, deberías ver un ícono de sol y el gizmo de dirección de la luz.

[Image: image]

**Consejo:** Si no ves el ícono y quieres verlo, selecciona el menú desplegable **Gizmos (Dispositivos)** en la barra de control de la vista de Escena y aumenta el tamaño del **3D Icon (Ícono en 3D)**con el deslizador.

**5.**Intenta mover la Directional Light a diferentes posiciones en la Escena: más cerca o más lejos. Puedes notar que no hay diferencia en la iluminación causada por estos cambios; a diferencia del sol real, la posición de la Directional Light no cambia la dirección de la luz.

**6.**  [Usa la herramienta Rotate o Girar (**R**)](https://learn.unity.com/tutorial/explore-the-unity-editor-1#612e2843edbc2a451ad00be1) para cambiar la dirección de la Directional Light. Notarás que el cielo que ya está en la Escena responde al cambio de posición.

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

**7.**  Con el GameObject **Directional Light** aún seleccionado, ve al Inspector y busca la propiedad **Color** en el componente Light (Luz).

**8.**  Selecciona el cuadro de color para abrir la ventana del selector de color y elige un nuevo tono. Presta atención a la estructura del anfiteatro: aquí es donde es más fácil ver el impacto del cambio de color. Esto puede ayudarte a crear un ambiente en la Escena.

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

Este efecto puede ser relativamente sutil y no necesariamente se adapta a la configuración actual de la Escena. Un púrpura misterioso o un rojo siniestro podrían tener mucho más impacto si esta fuera una Escena ambientada a altas horas de la noche, en lugar de a primeras horas del día. Puedes experimentar con diferentes colores ahora, pero tendrás la oportunidad de ajustar más la Directional Light al final de este tutorial.

Marcar paso como completado

## 5. Usos avanzados de las Directional Lights

Q&A (0)

Hay algunos usos más avanzados de las Directional Lights que están fuera del alcance de esta experiencia de aprendizaje introductoria. Puede que te resulte útil conocer estas situaciones y su complejidad, en especial si te interesa desarrollar más tus habilidades de iluminación. **Habilidades básicas para creadores artísticos: Iluminación**.

#### Crea múltiples soles o lunas funcionales

Puedes agregar varias Directional Lights a una Escena, pero solo una de ellas funcionará correctamente como sol o luna, a menos que configures tu proyecto de forma específica para ello.

#### Transiciones de las horas del día

Es posible que hayas probado juegos en los que la hora del día cambia a medida que juegas, en lugar de permanecer igual. Esto se puede hacer en Unity, pero está fuera del alcance de esta experiencia de aprendizaje.

Marcar paso como completado

## 6. ¿Cómo comenzar a usar el Skybox?

Q&A (0)

Ahora que has repasado los conceptos básicos de la Directional Light, es hora de centrarte en el cielo.

Los fondos de cielo en Unity se crean con un tipo especial de material llamado **Skybox**. Los Skyboxes son cubos con una textura diferente en cada cara. Cuando usas un Skybox para renderizar un cielo, Unity básicamente coloca tu Escena dentro del cubo Skybox. Unity procesa el cubo primero, por lo que el cielo se renderiza detrás de cualquier otra cosa en tu Escena.

Aunque el Skybox predeterminado para las Escenas es solo un cielo diurno básico en un día agradable, este fondo podría incluir características ambientales a la distancia. Estas ayudan a crear una sensación de espacio y profundidad, e incluyen lo siguiente:

- Características del paisaje; piensa en un set cinemático con un fondo de montaña alpina lejana.
- Edificios; por ejemplo, una gran ciudad de fantasía apenas visible en el horizonte.

El proyecto guiado de la tienda de videojuegos extraterrestre, por ejemplo, tiene un divertido Skybox que se ajusta a su estado de ánimo y al tema del espacio.

[Image: image]

Los materiales que se aplican a un cubo Skybox deben utilizar un sombreador Skybox. Hay dos categorías de Skybox:

- **Con textura.** Un grupo de sombreadores que usan texturas de material para generar el Skybox.
- **Procedimentales.** Un sombreador que utiliza propiedades del material para generar el Skybox.

En esta experiencia de aprendizaje, te enfocarás en el Skybox procedimental.

Marcar paso como completado

## 7. ¿Cómo crear un nuevo Skybox procedimental?

Q&A (0)

A continuación, cambia el Skybox predeterminado por uno procedimental personalizado:

**1.** En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**> **Materials**.

**2.**  Haz clic derecho en la ventana y selecciona **Create**> **Material**. Dale un nombre claro a tu nuevo material para que puedas encontrarlo más tarde.

**3.**  En el Inspector, ve a la propiedad **Shader (Sombreador)** y selecciona **Skybox**> **Procedural (Procedimental)**en el menú desplegable.

[Image: image]

Como otros sombreadores que has visto si completaste [**Habilidades básicas para creadores artísticos: Sombreadores y materiales**](https://learn.unity.com/tutorial/673cdbe6edbc2a1a0689a00a?language=es), este sombreador tiene cierto conjunto de propiedades que puedes configurar con un material.

**4.**  Antes de configurar tu Skybox, es útil renderizarlo en la Escena para que puedas ver el impacto de los cambios. Ve donde has [acoplado la ventana Lighting](https://learn.unity.com/tutorial/673d2ab0edbc2a15d3c92c15?language=es#6773fe74edbc2a3c5dbc6861) y selecciona la pestaña **Environment (Entorno)**.

**5.** Arrastra tu nuevo material a la propiedad **Skybox Material (Material del Skybox)**y suéltalo para asignarlo**.**

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

**6.**  Ahora regresa a la configuración de tu material personalizado en el Inspector. Toma un momento para revisar las propiedades que puedes configurar:

- **Sol.** Este es el método que usa Unity para crear un disco solar en el Skybox. Configúralo en la opción **Simple**.
- **Tamaño del sol.**Este es el modificador de tamaño para el disco solar; cuanto más alto sea el valor, más grande aparecerá en el cielo.
- **Espesor de la atmósfera.**La densidad de la atmósfera; cuanto más densa es una atmósfera, más luz absorberá.
- **Tinte del cielo.**Un tinte de color para el cielo.
- **Suelo.**El color del área debajo del horizonte (el suelo).
- **Exposición.**Esto ajusta la exposición del cielo. Los valores más altos generan un Skybox más expuesto que parece más brillante.

A continuación, experimentarás con ellos para personalizar tu Skybox.

Marcar paso como completado

## 8. ¿Cómo crear una apariencia de tarde en la noche?

Q&A (0)

Estás listo para aplicar lo aprendido a medida que comienzas a configurar esta Escena para un estilo nocturno. Aprovecha esta oportunidad para experimentar con las diferentes atmósferas que puedes conseguir con solo configurar el material de tu Skybox procedimental personalizado y la Directional Light. Los cambios relativamente pequeños a veces pueden hacer que las cosas se sientan muy diferentes.

Observa el siguiente ejemplo:

[Image: image]

Aquí el cielo tiene un tinte púrpura y todavía es bastante brillante, en especial cerca de la línea del horizonte. El color rosa-púrpura de la Directional Light ahora es fácil de ver, pero el cielo y la Directional Light actualmente ofrecen un aspecto muy estilizado. Digamos que queremos desarrollar este ejemplo para crear una apariencia de noche más realista. Podríamos intentar ajustar los colores y disminuir ligeramente el valor de **Atmospheric Thickness (Espesor atmosférico)**en el material del Skybox procedimental.

[Image: image]

¡Se ve mucho mejor! Mientras trabajas por tu cuenta, recuerda guardar los cambios con frecuencia.

**Consejos:**

- Los cambios en el Skybox pueden ser mucho más dramáticos, pero no olvides ajustar también la configuración de tu Directional Light. Los pequeños cambios en la propiedad **Color** pueden tener un impacto sutil pero eficaz en el estado de ánimo de la Escena.
- Al igual que en el ejemplo, es absolutamente normal iterar la iluminación unas cuantas (o muchas) veces hasta que logres un resultado con el que estés contento.

Marcar paso como completado

## 9. Próximos pasos

Q&A (0)

A continuación, en tu recorrido para diseñar una Escena nocturna, centrarás tu atención en otras fuentes de luz y sombras.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
