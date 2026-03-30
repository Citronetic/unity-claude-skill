[Image: image]

# ¿Cómo agregar fuentes de luz a tu escena?

Tutorial

Beginner

+10XP

25 mins

2

Unity Technologies

[Image: ¿Cómo agregar fuentes de luz a tu escena?]Summary

Por el momento, el espacio del anfiteatro en la Scene (Escena) al aire libre está iluminado con luz natural en la Escena en que estás trabajando. Ahora estás listo para agregar fuentes de luz adicionales.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar las diferencias entre los distintos tipos del componente Light (Luz).
- Configurar los componentes Light para lograr efectos de iluminación comunes.
- Configurar la luz ambiental (ambiental difusa) en tu Escena.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Por el momento, el espacio del anfiteatro en la Scene (Escena) al aire libre está iluminado con luz natural en la Escena en que estás trabajando. Ahora estás listo para agregar fuentes de luz adicionales.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar las diferencias entre los distintos tipos del componente Light (Luz).
- Configurar los componentes Light para lograr efectos de iluminación comunes.
- Configurar la luz ambiental (ambiental difusa) en tu Escena.

Marcar paso como completado

## 2. ¿Cómo agregar un farol?

Q&A (0)

Además de las Directional Lights, hay algunas fuentes adicionales de luz que puedes usar en tu Escena y que pueden ser útiles en gran variedad de escenarios.

Puedes utilizar los dos tipos diferentes de fuentes de luz a continuación para hacerlo:

- **Luces de punto.**Envían luz en todas las direcciones por igual desde un punto en el espacio. Puedes utilizarlas para simular fuentes de luz, como lámparas.
- **Focos de luces.**Envían luz en forma de cono desde un punto en el espacio. Puedes usarlos para simular fuentes de luz, como linternas.

**Nota:** Las luces de colores de la Escena de ejemplo que exploraste son **luces de área**, las cuales deben estar integradas. Están representadas en la vista de **Escena** con un icono cuadrado. Aprenderás sobre ellas en el próximo tutorial.

En la imagen de ejemplo que aparece a continuación, puedes ver los cuatro tipos de luz diferentes, incluida la luz direccional. Observa que cada luz tiene un ícono distintivo que te ayuda a identificarla y que coincide con el color de la luz que emite.

[Image: image]

Ahora, has oscurecido la Escena del anfiteatro para que parezca tarde en la noche. Los faroles iluminarán mejor el espacio.

Para comenzar, agrega una nueva fuente de luz:

**1.** Abre el proyecto **Habilidades básicas para creadores artísticos: Iluminación**en el Editor de Unity, si aún no lo has hecho.

**2.**  En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**>**Scenes** y abre **TutorialScene_Lighting_Outdoor**.

**3.**  Ve a **Assets**> **CreativeCore_Lighting**> **Prefabs** y arrastra el **Prefab StreetLamp** a la vista de Escena para crear una instancia. Colócalo en cualquier lugar que quieras del anfiteatro.

[Image: image]

**4.**  En la Hierarchy (Jerarquía), expande el GameObject **StreetLamp** primario y selecciona el GameObject **Spot Light**. Esta es la fuente de luz para el objeto que apareció cuando se creó una instancia.

**Nota:** Si estuvieras agregando una luz sin usar un Prefab de utilería, puedes crear un GameObject con un componente Light ya agregado mediante el menú **Add o Agregar** (**+**) en la Hierarchy. También puedes agregar un componente Light a cualquier GameObject.

**5.** En el Inspector, busca el componente Light y deshabilítalo. Esto apaga la luz en la vista de Escena. Habilita el componente de nuevo antes de continuar.

[Image: image]

**6.** En el componente Light, busca la propiedad **Type (Tipo)** y cámbiala a **Point (Punto)** en el menú desplegable. Observa la diferencia que esto genera en la forma de la luz que emite el farol: la luz que emite ahora se envía en todas las direcciones por igual, en lugar de estar limitada por la forma de cono de un foco de luz.

[Image: image]

**7.**Cambia el **Type** de nuevo a **Spot (Foco)** por ahora.

Marcar paso como completado

## 3. Configura tu farol

Q&A (0)

Luego, configura las propiedades del componente Light para personalizarlo:

**1.**  En el componente Light, arrastra hacia la derecha o hacia la izquierda en la propiedad **Range (Alcance)** para aumentar o disminuir la distancia a la que se puede extender la luz en la Escena. También puedes ingresar un valor de forma manual; cuanto mayor sea el número, mayor será el alcance.

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

El **Range** de un foco de luz está limitado por su forma. Aumentar el valor más allá de ese límite no dará como resultado ningún aumento adicional del alcance.

**2.**  Arrastra hacia la derecha o hacia la izquierda la propiedad **Intensity (Intensidad)** para aumentar o disminuir la intensidad de la luz dentro de su alcance establecido. Al igual que con **Range**, también puedes ingresar un valor manualmente.

En el mundo real, hay una relación inversa entre la distancia a la que te encuentras de una fuente de luz y la intensidad de la luz emitida. Por ejemplo, imagina que caminas en la oscuridad con una linterna. El área dentro del rayo de la linterna se iluminará con intensidad. Cuanto más lejos del rayo te muevas, menor será la intensidad de la luz y más débil la iluminación.

**3.**  Intenta establecer un valor de **Intensity** muy alto, más de**1500**. Puedes llevar la intensidad de una luz más allá de la intensidad natural para la fuente y el alcance en Unity, aunque para una [iluminación motivada](https://learn.unity.com/tutorial/673d2b19edbc2a1b66b9f986?language=es#), debes utilizarla con cuidado. En este caso, establecer la propiedad **Intensity** demasiado alta hace que el farol se vea más como un foco de luz que como un farol real.

[Image: image]

**4.** Configura la propiedad **Intensity** con un valor más realista, entre**200**y **600,**por ahora.

**5.** La propiedad **Indirect Multiplier (Multiplicador indirecto)** afecta la intensidad de la luz indirecta proporcionada por esta fuente de luz ([luz que rebota varias veces antes de que la reciba un sensor](https://learn.unity.com/tutorial/673d2ab0edbc2a15d3c92c15?language=es)). Si la configuras:

- Por debajo **de 1**, la luz indirecta será más tenue cada vez que rebote en un objeto. Es la forma en que se comporta la luz real, pero es posible que quieras anular ese comportamiento para lograr un efecto de iluminación particular.
- Por encima **de 1**, la luz indirecta se volverá más brillante con cada rebote. Esto no es natural, pero puede ser muy útil si intentas iluminar un espacio oscuro y cerrado de tu Escena.

Por ahora, configúralo en **1**.

**6.**  Selecciona el cuadro de la propiedad **Color** para abrir la ventana del selector de color y ajusta el color de la luz. Toma un momento para experimentar con cosas que se ajusten a [tus objetivos para la Escena al aire libre](https://learn.unity.com/tutorial/673d2b19edbc2a1b66b9f986?language=es).

Marcar paso como completado

## 4. ¿Cómo funcionan la luz y el color?

Q&A (0)

Mientras lo piensas en el contexto de tu Escena, tomemos un breve desvío hacia la ciencia de la luz y el color.

#### ¿Cómo percibes el color?

La luz blanca, al igual que la luz que emite el sol, es en realidad un espectro de colores que los humanos percibimos como blanco cuando se combinan. Se puede usar un prisma para dispersar la luz blanca hacia ese espectro; a veces, también puedes notar un efecto de arcoíris creado por la luz cuando choca con trozos de vidrio.

El color de un objeto afecta la forma en que absorbe y refleja la luz. Cuando las ondas de luz chocan con una naranja, por ejemplo, la luz naranja se refleja y la naranja absorbe el resto de los colores del espectro, por lo que no los verás. Cuando la luz reflejada choca con un sensor (como la retina del ojo), percibes la naranja como de color naranja.

[Image: image]

Puedes probar esto en el espacio físico: intenta colocar un objeto brillante de color intenso en un papel o una hoja blanca. ¿Puedes ver un poco del color reflejado en la hoja blanca?

Cuando la luz choca con un objeto negro, se absorbe casi toda la luz. Las personas han trabajado para crear sustancias negras que absorban la mayor cantidad de luz posible con fines técnicos y artísticos, pero los objetos negros comunes también lo hacen muy bien.

Si te interesa explorar esto con más detalle, puedes comenzar con el siguiente artículo breve: [**¿Por qué un pedazo de papel blanco no refleja la luz, pero un espejo sí?**](https://engineering.mit.edu/engage/ask-an-engineer/why-doesnt-a-plain-white-piece-of-paper-reflect-light-but-a-mirror-does/) (Pregunta a un ingeniero, MIT)

#### Recursos de color para la iluminación

Explorar el color en profundidad está fuera del alcance de esta experiencia de aprendizaje, pero es posible que la investigación independiente te resulte muy útil al trabajar en las experiencias de iluminación en tiempo real.

Te recomendamos comenzar con los siguientes recursos gratuitos:

- [**Pixar in a Box**es una unidad de un curso sobre la ciencia del color](https://www.khanacademy.org/computing/pixar/color)**de Khan Academy, .**Un manual fundamental que te llevará a profundizar en la ciencia del color más allá de lo que cubre esta experiencia de aprendizaje.
- **[Guía de teoría del color para artistas](https://drawpaintacademy.com/a-comprehensive-guide-to-color-theory-for-artists/) de Draw Paint Academy.**Un recorrido guiado por la teoría del color desde la perspectiva del artista, y un útil repaso para quienes tienen experiencia en arte visual.
- **[Guía de investigación de teoría del color](https://massart.libguides.com/color) del Massachusetts College of Art and Design.**Un punto de partida para ayudarte a iniciar tu propio recorrido de investigación sobre los aspectos de la teoría del color que más te interesan.
- **Stage Lighting Design de Bill Williams sobre [los métodos generales de diseño](https://billwilliams.ca/resources/sld/sld-200.htm).**Aunque está escrito con un enfoque en el diseño de iluminación de teatros, los conceptos básicos siguen siendo relevantes para la iluminación de espacios digitales en 3D.

Marcar paso como completado

## 5. ¿Cómo agregar y configurar más luces en el espacio?

Q&A (0)

Ahora que has practicado cómo agregar y configurar utilería de faroles, tómate un tiempo para agregar más fuentes de luz al espacio. Como pronto trabajarás con las sombras, asegúrate de incluir un área donde se puedan ver las sombras de los faroles.

**Consejos:**

- Si no estás seguro de la ubicación de la utilería para lograr sombras visibles, revisa la ubicación de los faroles en la Escena de ejemplo al aire libre (**FinalScene_Lighting_Outdoor**).
- Puede resultarte útil hacer que algunas de tus luces sean de color blanco o amarillo brillante por ahora para facilitar la configuración de las sombras por primera vez.
- Recuerda guardar los cambios con frecuencia.

Esta también es una gran oportunidad para comenzar a jugar y explorar cómo los colores y la intensidad que elijas afectan el estado de ánimo de tu Escena. ¿Cómo te hacen sentir las luces de colores fríos configuradas con baja intensidad? ¿Cuál es la diferencia cuando usas luces cálidas e intensas?

Marcar paso como completado

## 6. ¿Cómo revisar tu espacio de color?

Q&A (0)

La iluminación en los proyectos puede ser un trabajo delicado con muchos factores entrelazados en juego: la resolución de problemas es una actividad muy común entre los artistas de iluminación. Si las luces destellan (brillan) de forma desproporcionada o no ajustada después de la resolución de problemas, es importante verificar que tu proyecto esté configurado en el **espacio de color Linear (Lineal)**.

El espacio de color seleccionado para tu proyecto afectará la manera en que se renderiza la iluminación. A menudo, el espacio de color también puede ser la causa de que las luces que intentas arreglar se rendericen de forma extraña.

Hay dos tipos diferentes de espacio de color:

- **Gamma**, el valor predeterminado en el Modelo 3D.
- **Linear**, el valor predeterminado en el Modelo URP.

El flujo de trabajo del espacio de color Linear ofrece un renderizado más preciso, por lo que suele ser el más adecuado para ti. Este proyecto se creó con la plantilla URP, por lo que está configurado en el espacio de color Linear de forma predeterminada.

**Nota:** Esta es una referencia muy general del espacio de color. Si deseas obtener más información en el contexto de Unity, [comienza con **Color Space (Espacio de color)** en el Manual de Unity](https://docs.unity3d.com/Manual/LinearLighting.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952916110).

Si quieres obtener una vista previa de cómo se representaría una Escena en el espacio Gamma, haz lo siguiente:

**1.** En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**>**Scenes** y abre **FinalScene_Lighting_Outdoor**. Actualmente hay más elementos ahí.

**2.** En el menú principal, ve a **Edit**> **Project Settings**.

**3.** En la barra de navegación lateral, selecciona **Player (Jugador)** y expande la sección **Other settings (Otras configuraciones)**.

**4.** En la sección **Rendering**o**Renderizado** (en la parte superior), cambia la propiedad **Color Space** a **Gamma** con el menú desplegable.

**5.** Cuando hayas terminado de revisar la Escena en este espacio de color, asegúrate de restablecer la propiedad **Color Space** a **Linear** antes de cerrar la ventana Project Settings.

**6.**  Abre la Escena **TutorialScene_Lighting_Outdoor** de nuevo para seguir trabajando ahí.

A continuación, configurarás la iluminación ambiental en la Escena.

Marcar paso como completado

## 7. ¿Cómo configurar la iluminación ambiental?

Q&A (0)

**La luz ambiental**es la que está presente en tu Escena, pero que no tiene una fuente específica. Puede ser muy útil para aumentar la visibilidad o crear efectos de estilo específicos mediante tu iluminación. La iluminación ambiental en tiempo real de Unity se calcula y se guarda en un mapa de luz.

Rara vez es algo que puedas configurar una vez y olvidarlo, ya que, como ocurre con todo el diseño e implementación de la iluminación, a menudo es iterativo. Comencemos por revisar algunas de las configuraciones básicas:

**1.** Ve adonde has acoplado la ventana Lighting (o ábrela de nuevo con el menú superior: **Window**> **Rendering**> **Lighting**).

**2.** En la ventana Lighting, selecciona la pestaña **Environment (Ambiente)**.

[Image: image]

**3.** En la sección **Environment Lighting (Iluminación ambiental)**, busca la propiedad **Source (Fuente)**. Por el momento, está configurada en el Skybox que creaste antes en esta experiencia de aprendizaje, lo que significa que el Skybox proporciona iluminación ambiental en la Escena. A menudo es simple pero eficaz.

[Image: image]

**4.** La propiedad **Intensity Multiplier (Multiplicador de intensidad)** controla el brillo de la luz ambiental en una Escena y puede tener un valor entre **0** y **1**(el valor predeterminado es **1**). Experimenta con la diferencia que esto hace en la iluminación de tu Escena.

**Nota:**Los GameObjects deben marcarse como **Static (Estáticos)**para poder incluirlos en el mapa de luz para la iluminación ambiental. Esto se debe a que los datos del mapa de luz se calculan previamente y solo se pueden calcular para los GameObjects que no se mueven en el tiempo de ejecución. Aprenderás más al respecto cuando crees la iluminación para esta Escena.

**5.**  Establece la propiedad **Source** en **Gradient (Gradiente)**. Ahora puedes utilizar el selector de color para establecer colores específicos para la iluminación ambiental del **Sky (Cielo)**, **Equator (Ecuador)** y **Ground (Suelo)** en la Escena. Intenta cambiarlos y observa cuál es el impacto.

[Image: image]

Observa cómo cada objeto 3D de la escena se ve afectado por la luz ambiental, lo que le permite lograr muy rápidamente un estilo unificado.

**6.** Cuando termines de experimentar, vuelve a establecer la **Source** según tu Skybox por ahora. Si lo deseas, puedes utilizar una **Source** diferente para realizar tus personalizaciones finales en la Escena al aire libre.

**7.** Guarda los cambios.

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

Ahora que has configurado tus propias fuentes de luz en la Escena, estás listo para configurar las sombras. Este es un paso importante para hacer que tu Escena se sienta realista y que quienes la experimentan se sientan inmersos.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
