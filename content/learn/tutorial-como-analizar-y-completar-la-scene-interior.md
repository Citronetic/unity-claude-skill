[Image: image]

# ¿Cómo analizar y completar la Scene interior?

Tutorial

Beginner

+10XP

35 mins

1

Unity Technologies

[Image: ¿Cómo analizar y completar la Scene interior?]Summary

Ahora que trabajaste en la implementación de la iluminación en una Scene (Escena) al aire libre, es hora de centrar tu atención en el interior. Los mismos principios básicos de iluminación se aplican a los entornos en interiores, pero así como la luz en el interior y el exterior suele ser diferente en el mundo físico, hay algunas consideraciones que es importante tener en cuenta al iluminar un espacio interior para una experiencia en tiempo real.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar las consideraciones clave para iluminar las Escenas en interiores de forma realista.
- Agregar materiales con emisividad a una Escena.
- Revisar los materiales con emisividad en una vista de diagnóstico.
- Colocar las Sondas de luz en una disposición de volumen 3D dentro de una Escena.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Ahora que trabajaste en la implementación de la iluminación en una Escena al aire libre, es hora de centrar tu atención en el interior. Los mismos principios básicos de iluminación se aplican a los entornos en interiores, pero así como la luz en el interior y el exterior suele ser diferente en el mundo físico, hay algunas consideraciones que es importante tener en cuenta al iluminar un espacio interior para una experiencia en tiempo real.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar las consideraciones clave para iluminar las Escenas en interiores de forma realista.
- Agregar materiales con emisividad a una Escena.
- Revisar los materiales con emisividad en una vista de diagnóstico.

También practicarás la colocación de Sondas de luz en una Escena. Cuando hayas completado este tutorial, estarás listo para perfeccionar la Escena y solucionar sus problemas.

Marcar paso como completado

## 2. ¿Qué caracteriza a un gran artista de iluminación?

Q&A (0)

Hasta el momento, en esta experiencia de aprendizaje, has estado probando lo que significa trabajar con iluminación en Unity. También has aplicado tus ideas y perspectivas creativas para generar tus propias variaciones en la Escena.

Actualmente estás desarrollando tus habilidades de iluminación de principiante, pero tomemos un momento para pensar en llevar la iluminación al siguiente nivel. ¿Qué crees que caracteriza a un gran aficionado o artista de iluminación profesional de experiencias en tiempo real? Tómate un momento para pensar en esta pregunta por tu cuenta y luego reflexiona sobre las ideas que nuestros creadores expertos han compartido con base en su propia experiencia y carreras.

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

## 3. ¿Cómo identificar las fuentes de luz en el interior?

Q&A (0)

En estos tutoriales centrados en el interior, utilizarás el mismo espacio de la galería en el que trabajaste si completaste [**Habilidades básicas para creadores artísticos: Sombreadores y materiales**](https://learn.unity.com/mission/creative-core-shaders-and-materials).

Si no has completado esa experiencia de aprendizaje, no te preocupes, explorarás el espacio de ejemplo completado ahora:

**1.** Abre el proyecto **Habilidades básicas para creadores artísticos: Iluminación** en el Editor de Unity, si aún no lo has hecho.

**2.** En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**> **Scenes** y abre la Escena **FinalScene_Lighting_Indoor**.

**3.** Navega por el edificio de la galería y tómate un tiempo para identificar las fuentes primarias de luz y las características de interés desde la perspectiva de la iluminación. Cuando termines, sigue leyendo para revisar las respuestas.

#### Revisa tu trabajo

En la Escena interior, debes poder identificar las siguientes fuentes de luz:

- El tragaluz central, que actualmente llena de luz el espacio de la galería.
- Los Spot Lights (Focos de luces) sobre los pedestales de exhibición.
- Las Colored Area Lights (Luces de área de colores), que funcionan como pequeñas tiras de luz sobre el arte en las paredes.
- Alguna utilería de lámparas en el espacio: una lámpara de pie alta y una lámpara baja de bombilla expuesta.

Marcar paso como completado

## 4. ¿Cómo examinar la iluminación de la Escena de trabajo?

Q&A (0)

Para agilizar el proceso de trabajo en esta Escena, hemos implementado la iluminación básica en tu Escena.

Analiza la configuración básica de la Escena ahora:

**1.**  Abre la Escena **TutorialScene_Lighting_Indoor**.

**2.** Abre la ventana Light Explorer o Explorador de iluminación (menú superior: **Window**> **Rendering**> **Light Explorer**) o ve adonde lo acoplaste. Tómate un tiempo para revisar la Escena por tu cuenta y considerar la forma en que se han configurado las fuentes de luz.

**3.**  Selecciona la **Directional Light (Luz direccional)** y examina su configuración.

**4.**  En la ventana Lighting (Iluminación), selecciona la pestaña **Environment (Entorno)**y examina cómo se han configurado el Skybox y la iluminación ambiental.

Cuando hayas terminado, sigue leyendo para obtener un resumen general de la iluminación implementada en la Escena.

#### Revisa tu trabajo

Este es un resumen de la configuración de iluminación en la Escena del tutorial:

- **Directional Light.**La Directional Light es menos intensa, pero aún se puede ver a través de los grandes tragaluces de la galería.
- **Skybox.** Esta Escena utiliza el Skybox predeterminado.
- **Otras fuentes de luz.**Hay Spot Lights de color blanco en el techo que iluminan los pedestales para mostrar los objetos a la derecha del espacio. Hay Area Lights azules y rojas que iluminan las exhibiciones de las paredes en el lado izquierdo del espacio. También hay una lámpara de pie en la esquina inferior izquierda del espacio.
- **Iluminación integrada.**Se ha implementado iluminación integrada en la Escena.
- **Sombras.** Las sombras se ven un poco raras aquí, lo investigarás pronto.

Marcar paso como completado

## 5. ¿Cuáles son las consideraciones clave para la iluminación interior?

Q&A (0)

Al iluminar un espacio interior, [la luz indirecta es muy importante](https://learn.unity.com/tutorial/673d2ab0edbc2a15d3c92c15?language=es#6773fe74edbc2a3c5dbc6864). La mayor parte de la luz en el interior incidirá en varios objetos antes de llegar a los ojos (o, en este caso, a la cámara). La iluminación ambiental y la de rebote desempeñan un papel muy importante para hacer que la iluminación interior se sienta realista en las experiencias en tiempo real.

También hay algunos desafíos particulares que los espacios interiores ofrecen al artista en iluminación. Las mallas con solo las caras delanteras renderizadas (a veces llamadas geometría de un solo lado) pueden provocar algunos problemas cuando las luces no se comportan como esperas, lo cual deberás solucionar luego para lograr el resultado deseado. Al igual que con la iluminación de un espacio del mundo real, el lugar donde se colocan las fuentes de luz tiene un gran impacto en la iluminación general y el estado de ánimo que se crea en el espacio.

La iluminación básica que se ha configurado es un buen comienzo: ilumina funcionalmente el espacio y es adecuada para una galería. Sin embargo, todavía está bastante oscura y hay algunos problemas que deben abordarse para mejorar el aspecto general de la Escena.

[Image: image]

#### Define tus expectativas

Antes de continuar, tomemos un momento para aclarar tu objetivo para este tutorial. Mejorarás la iluminación en este espacio y abordarás algunos problemas de la implementación básica, pero se podría hacer mucho más aquí.

Recuerda, ser un artista de iluminación es una función valiosa y variada en el diseño y desarrollo en tiempo real. Tu objetivo en esta experiencia de aprendizaje es establecer una buena base de referencia, en lugar de lograr efectos de iluminación complejos y matizados que aún no tienes la experiencia para alcanzar.

Marcar paso como completado

## 6. ¿Cómo crear y configurar un material con emisividad?

Q&A (0)

Un tipo de fuente de luz que aún no has encontrado en esta experiencia de aprendizaje es un material con emisividad. **Los materiales con emisividad** emiten luz en su área de origen. Puedes controlar su color e intensidad, y contribuyen a la iluminación que rebota en tu Escena.

**Nota:**Si completaste **Habilidades básicas para creadores artísticos: Sombreadores y materiales**, [ya trabajaste con materiales con emisividad](https://learn.unity.com/tutorial/673d123bedbc2a1acb59663e?language=es#6772c474edbc2a3a0cf21d11). Esta es una gran oportunidad para consolidar ese trabajo antes de perfeccionar la Escena interior y solucionar sus problemas.

Agrega una tira de luz con emisividad al cielo raso en la galería:

**1.**  En la ventana Project, ve a **Assets**> **CreativeCore_Lighting**> **Materials**.

**2.** El la carpeta, haz clic derecho y selecciona **Create**> **Material**. Nombra tu nuevo material «Emissive» o algo que puedas recordar fácilmente. Si ya creaste un material con emisividad, puedes usarlo.

**3.**  En el Inspector, establece el **Workflow Mode (Modo de flujo de trabajo)** como **Specular (Especular)**.

**4.** Habilita la propiedad **Emission (Emisión)**.

**5.**  En la Hierarchy (Jerarquía), expande el GameObject anidado para ir a **Environment**>**GalleryInterior**>**LightingBeam**.

[Image: image]

**6.**  En el Inspector, comprueba que el GameObject **LightingBeam** esté configurado en **Static (Estático)**.

**Importante**: Si **LightingBeam** no está configurado en Static, esto ocasionará problemas con la integración que completarás en el paso siguiente.

**7.**  En el Inspector, ve a la sección **Materials (Materiales)**del componente Mesh Renderer (Renderizador de malla) y busca la propiedad **Element 0 (Elemento 0)**. Arrastra tu nuevo material con emisividad desde la ventana Project a esta propiedad para aplicarlo al rayo de iluminación.

[Image: image]

Ya hay una iluminación razonable en el espacio, pero debes notar la diferencia que el material con emisividad hace en tu Escena.

**8.**  En la ventana Project, selecciona tu material con emisividad.

**9.**  En el Inspector, selecciona la propiedad **HDR Color (Color HDR)**.

[Image: image]

**10.** En la ventana del selector de HDR Color, elige el **Color** para tu material con emisividad y establece su **Intensity (Intensidad)**.

**Consejo:**Para empezar, prueba con una **Intensity** de **2.5**.

Marcar paso como completado

## 7. ¿Cómo revisar la vista de diagnóstico Emissive?

Q&A (0)

Ahora estás listo para integrar tu material con emisividad y verificar tu adición a la Escena en las vistas de diagnóstico:

**1.** En la ventana Lighting, selecciona **Generate Lighting (Generar iluminación)** para volver a crear la iluminación de la Escena. Recuerda que este proceso puede tardar algún tiempo en completarse.

**2.** En la barra de control de la vista de Escena, usa el menú desplegable **Debug** **Draw Mode** para seleccionar **Emissive (Emisividad)**.

[Image: image]

**3.**  En este Draw Mode, la superposición a cuadros muestra la resolución de la textura de emisión de la Escena. Los objetos con emisividad son de color amarillo brillante: el rayo es el único objeto con emisividad en tu Escena.

[Image: image]

**Importante**: Si la vista de Draw Mode no muestra los resultados esperados, comprueba que el GameObject **LightingBeam** esté configurado como Static. Si no es así, deberás volver a integrar la iluminación.

**4.**  Cuando hayas terminado, en la barra de control de la vista de Escena, configura el **Debug** **Draw Mode** otra vez en **Shaded**.

Marcar paso como completado

## 8. ¿Cómo colocar y configurar Sondas de luz?

Q&A (0)

Los materiales con emisividad solo afectan la geometría estática en tu Escena de forma predeterminada. Si quieres que impacten en los objetos en movimiento, deberás utilizar Sondas de luz. Como aprendiste cuando las implementaste en la Escena al aire libre, las Sondas de luz también son muy útiles para mejorar la calidad de las luces integradas.

Crea un nuevo Light Probe Group (Grupo de sondas de luz) y coloca las sondas en el espacio interior de la galería. Primero intenta recordar el proceso por tu cuenta, pero si necesitas orientación, siempre puedes[consultar las instrucciones](https://learn.unity.com/tutorial/67252cf9edbc2a00b1524e1e?language=es#6776ced2edbc2a43e43807e0).

**Consejos:**

- Puedes crear una forma primitiva, como una esfera, para probar el impacto del material con emisividad antes y después, como lo hiciste la primera vez que utilizaste las Sondas de luz.
- Las Sondas de luz deben organizarse en un volumen 3D, una malla con al menos dos niveles verticales.
- Recuerda volver a crear el mapa de luz de la Escena y guardar los cambios cuando termines.

#### Ayuda adicional para situar las Sondas de luz

Si necesitas ajustar la ubicación de las Sondas de luz en tu proyecto y deseas algo más de ayuda, consulta en YouTube el video de Brackeys [High quality lighting using Light Probes](https://youtu.be/_E0JXOZDTKA) (Iluminación de alta calidad con Sondas de luz).

Marcar paso como completado

## 9. Próximos pasos

Q&A (0)

Ahora que has analizado la Escena interior y has hecho algunas pequeñas adiciones, estás listo para comenzar a perfeccionar la iluminación y solucionar algunos problemas para mejorarla aún más.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
