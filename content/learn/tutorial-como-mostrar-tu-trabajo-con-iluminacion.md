[Image: image]

# ¿Cómo mostrar tu trabajo con iluminación?

Tutorial

Beginner

+10XP

35 mins

1

Unity Technologies

[Image: ¿Cómo mostrar tu trabajo con iluminación?]Summary

En los tutoriales anteriores de esta experiencia de aprendizaje, iluminaste una Escena al aire libre y una interior y, al mismo tiempo, comprendiste el funcionamiento de la iluminación en Unity. Es momento de aplicar lo aprendido sobre la iluminación en Unity a un contexto ligeramente diferente: la exhibición de un producto.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar los temas de investigación y los recursos para comprender los principios del diseño y la ciencia de la iluminación.
- Configurar los componentes de Iluminación para mostrar un objeto en Unity.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

En los tutoriales anteriores de esta experiencia de aprendizaje, iluminaste una Escena al aire libre y una interior y, al mismo tiempo, comprendiste el funcionamiento de la iluminación en Unity.

Es momento de aplicar tus conocimientos sobre la iluminación en Unity a un contexto un poco diferente. Un caso de uso de las experiencias en tiempo real es la exhibición de productos; por ejemplo, [automóviles en una sala de exhibición digital](https://blog.unity.com/manufacturing/take-a-ride-with-the-auto-showroom-sample-template-and-volvo-xc40-recharge) o artículos en una galería (como el ejemplo del espacio interior para esta experiencia de aprendizaje).

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar los temas de investigación y los recursos para comprender los principios del diseño y la ciencia de la iluminación.
- Configurar los componentes de Iluminación para mostrar un objeto en Unity.

Incluso si no estás trabajando en una experiencia en tiempo real basada en el producto, mostrar tu trabajo a otras personas a través de imágenes atractivas puede ser una excelente forma de mejorar tu portafolio o de atraer a posibles usuarios.

Marcar paso como completado

## 2. ¿Cómo examinar la Escena del estudio de ejemplo?

Q&A (0)

En este tutorial, elegirás un objeto y lo iluminarás para crear imágenes del producto en una Escena especial que reproduzca un espacio de estudio básico del mundo real. Primero, tómate un tiempo para explorar la Escena del estudio que hemos creado para este desafío:

**1.**Abre el proyecto **Habilidades básicas para creadores artísticos: Iluminación** en el Editor de Unity, si aún no lo has hecho.

**2.**  En la ventana del proyecto, ve a **Assets**> **CreativeCore_Lighting**> **Scenes** y abre la Escena **FinalScene_Lighting_Studio**.

**3.**  En el menú de control de la vista de Escena, establece la vista de Escena en **3D View (Vista en 3D).**

[Image: image]

**4.**  ¿Cómo revisar la Escena en la vista de Escena?

[Image: image]

El fondo del estudio te ayudará a crear tomas enfocadas del producto.

**5.**  Selecciona **Play (Reproducir)**para ingresar al modo Play y revisa la forma en que las luces muestran la manzana. Considera las siguientes preguntas:

- ¿Cómo se ilumina el objeto?
- ¿Cuál es el propósito de esta iluminación?

**6.**Cuando termines, selecciona **Play** de nuevo para salir del modo Play.

#### Revisar tu trabajo

El modelo de la manzana en la Escena se muestra como una toma de marketing de producto. Está muy iluminado, pero todavía hay sombras interesantes. El propósito de esta iluminación es llamar y retener la atención, lo que facilita la visualización de las características clave del objeto.

Marcar paso como completado

## 3. Iluminación de tres puntos

Q&A (0)

Al evaluar la Escena de ejemplo, es posible que hayas notado que había tres fuentes de luz enfocadas de forma específica en la esfera roja. Esta es una versión adaptada de una técnica de iluminación específica y común llamada **iluminación de tres puntos**.

Si quieres saber más detalles de esta técnica antes de revisar la forma en que hemos configurado las luces en la Escena del estudio, los recursos siguientes te resultarán útiles:

- [**¿Qué es la iluminación de tres puntos?**](https://vimeo.com/blog/post/your-quick-and-dirty-guide-to-3-point-lighting/) (Vimeo)
- [**Iluminación de tres puntos para renderizados en 3D**](http://www.3drender.com/light/3point.html) (3DRender)

Marcar paso como completado

## 4. ¿Cómo revisar la configuración de iluminación del estudio?

Q&A (0)

Cada una de las tres luces de la Escena desempeña un papel específico en la composición visual de esta, adaptado del enfoque de iluminación de tres puntos. Para seguir la explicación a continuación:

**1.** En la ventana Hierarchy (Jerarquía), expande el GameObject **Lighting (Iluminación)**.

**2.** Selecciona cada GameObject de luz numerado para ver su configuración y ángulo en la vista de Escena.

**3.**  Ingresa al modo Play para revisar la configuración de la iluminación final. Puedes utilizar la ventana Light Explorer (Explorador de luz) para desactivar y activar las luces, de modo que puedas examinar el impacto de cada una en la imagen del producto.

**4.** Cuando termines, recuerda salir del modo Play.

#### Luces naranja y azul

La **Light1 (Blue)**y **Light2 (Orange)**proporcionan la iluminación principal del objeto. Se colocan en lados opuestos del objeto, en el mismo ángulo. Una es azul frío y la otra naranja cálido. En la iluminación tradicional de tres puntos, una sería la **luz clave**(la luz más intensa) y la otra la **luz de relleno** (una luz menos intensa para llenar las sombras que crea la primera). En esta configuración, ambas tienen la misma intensidad.

[Image: image]

Enciende cada luz por separado y luego en conjunto para ver el impacto que tienen al iluminar la manzana.

#### Luz de fondo

La **Light3 (White)**es la **luz de fondo**(o **luz del aro**). Proporciona un borde de luz alrededor de la manzana que crea una sensación de profundidad entre el objeto y el fondo. Esta luz ayuda a agregar matices a la composición de la Escena o imagen fija. Esta luz en la Escena se acerca más a la técnica tradicional de iluminación de tres puntos.

[Image: image]

#### Unificación de la Escena

Cuando una Escena se centra en un objeto particular, ya sea un personaje de una película o un objeto que se muestra en un pedestal en una galería en tiempo real, la iluminación de tres puntos tiene como objetivo llamar y mantener la atención del espectador. También puedes ajustar cada una de las luces y la iluminación ambiental adicional en la Escena para concretar tu visión creativa general.

Marcar paso como completado

## 5. ¿Cómo establecer el estado de ánimo con tu iluminación?

Q&A (0)

En los tutoriales anteriores de esta experiencia de aprendizaje, tuviste la oportunidad de personalizar las Escenas de ejemplo que te proporcionamos. Parte de esa personalización, en particular el color y la intensidad de la iluminación en tu Escena, tiene un impacto significativo en el estado de ánimo de la experiencia general.

Considera esta captura de pantalla del [modelo de muestra de la sala de exhibición del automóvil](https://blog.unity.com/manufacturing/take-a-ride-with-the-auto-showroom-sample-template-and-volvo-xc40-recharge): ¿cómo afecta la iluminación a la atmósfera general del espacio? ¿Qué pensamientos o sensaciones crees que pretende evocar?

[Image: image]

#### Identifica el objetivo de estado de ánimo que quieres lograr

En este tutorial, iluminarás un objeto de enfoque en un espacio de estudio. Hay un requisito funcional clave para esa iluminación: el espacio debe estar suficientemente iluminado y el objeto que elijas debe estar resaltado con luz. Sin embargo, el estado de ánimo sigue siendo un elemento importante.

Piensa en la publicidad de un producto que hayas visto recientemente; puede ser una sola imagen, un video o un anuncio interactivo. ¿Qué emociones crees que intentaba hacerte sentir?

Algunos ejemplos son:

- Un anuncio de un reloj con fotografía tradicional en alta resolución e iluminación enfocada brillante para enfatizar los detalles finos del diseño y la elaboración del reloj.
- Un anuncio cinemático de un automóvil con una fuerte [iluminación motivada](https://learn.unity.com/tutorial/673d2b19edbc2a1b66b9f986?language=es#6774005eedbc2a3c5dbc6883) mejorada, diseñada para crear una sensación de más realismo mientras el automóvil se mueve por un paisaje dramático.
- Una animación con iluminación dramática y de alto contraste que promociona un juego de roles, diseñada para emocionarte y enfatizar lo épico del juego.
- Un video publicitario con iluminación de ensueño para un vestido en una plataforma de redes sociales con una paleta en colores pastel, lo suficientemente brillante como para que la ropa pueda verse con claridad, pero que no resalte como el objeto principal de enfoque.

A medida que planees el enfoque para este estudio, piensa en el tipo de estado de ánimo y las emociones que quieres generar con la iluminación.

Marcar paso como completado

## 6. ¿Cómo personalizar tu propio estudio de iluminación de producto?

Q&A (0)

Creamos la Escena básica para que la utilices en este estudio de iluminación, pero puedes personalizarla como quieras, ya sea con recursos adicionales o con ProBuilder. (Si no has utilizado ProBuilder antes, empezarás a utilizarlo en [**Habilidades básicas para creadores artísticos: Creación de prototipos**](https://learn.unity.com/mission/creative-core-prototyping)).

Para personalizarla para tu propio estudio de iluminación de producto, haz lo siguiente:

**1.**Duplica la Escena **FinalScene_Lighting_Studio** y asígnale un nuevo nombre.

**2.**  Agrega a la Escena el objeto de enfoque de tu elección. Podría ser utilería que ya hemos incluido u otra que quieras importar, o incluso un modelo de personaje.

**Consejo:** Si esculpes tus propios modelos, podrías aprovechar la oportunidad para tomar algunas fotos para tu portafolio.

**3.**  Vuelve a configurar los Spot Lights (Focos de luz) en la Escena.

[Image: image]

Experimenta con el impacto de lo siguiente:

- Ajustar **Range (Alcance)**, **Intensity (Intensidad)**y **Color** de las luces.
- Cambiar los valores del **Inner / Outer Spot Angle (Ángulo del foco interior o exterior)** que controla los ángulos interior y exterior en grados desde la base del cono de un Spot Light.
- Cambiar **StudioBackdrop** (elemento secundario del GameObject **Environment o Ambiente**). Puedes aplicar nuevos materiales o ajustar el color del material actual para obtener una experiencia del estudio más personalizada.
- Mover las luces más cerca o más lejos de sus posiciones actuales.
- Modificar la **Directional Light (Luz direccional)**.

**Consejo:** Recuerda guardar los cambios con regularidad.

#### Toma algunas fotos refinadas

Si quieres tomar fotos más refinadas, en lugar de solo usar la captura de pantalla en tu computadora, puedes usar el [**paquete de grabación de Unity**](https://docs.unity3d.com/Packages/com.unity.recorder@5.1/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953777879) para capturar y guardar datos en el modo Play. Este paquete puede grabar videos, imágenes fijas, GIF y más.

**Consejos:**

- [Revisa las instrucciones de la instalación de paquetes](https://learn.unity.com/tutorial/project-setup-processes#60ed7a6aedbc2a002520b6ec) si necesitas repasar el proceso.
- Consulta la [documentación del paquete de grabación](https://docs.unity3d.com/Packages/com.unity.recorder@2.0/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953777879) para obtener una descripción general o un recordatorio de cómo usarla.

Marcar paso como completado

## 7. Explora: ¿Cómo configurar la iluminación tradicional de tres puntos?

Q&A (0)

Si quieres explorar la técnica tradicional de iluminación de tres puntos, consulta la lectura de ampliación e intenta volver a configurar las tres luces en la Escena según la técnica. Esta es una gran oportunidad para poner en práctica las técnicas de iluminación y desarrollar tu confianza en la configuración de fuentes de luz en Unity.

**Consejos:**

- En la iluminación tradicional de tres puntos, la luz clave debe ser más intensa que la luz de relleno.
- Presta atención a los ángulos recomendados para las luces y a su impacto en la iluminación del estudio.

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

Aunque en este tutorial has trabajado en un entorno de estudio artificial, también puedes aplicar estos principios para iluminar un objeto de enfoque importante en una Escena en cualquier tipo de experiencia en tiempo real.

Ahora que completaste este último tutorial de iluminación, estás listo para el último desafío de esta experiencia de aprendizaje: tu propio estudio de iluminación cinemática.

#### Amplía tu aprendizaje

Si te interesa continuar tu recorrido por la iluminación más allá de esta experiencia de aprendizaje, es posible que [**la elección y la configuración de un canal de renderizado y una solución de iluminación**](https://docs.unity3d.com/6000.0/Documentation/Manual/choose-a-lighting-setup.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953777879) sean un recurso de referencia útil. ¡Disfruta creando!

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
