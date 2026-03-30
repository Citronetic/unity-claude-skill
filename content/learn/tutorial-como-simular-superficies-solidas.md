[Image: image]

# ¿Cómo simular superficies sólidas?

Tutorial

Beginner

+10XP

30 mins

1

(12)

Unity Technologies

[Image: ¿Cómo simular superficies sólidas?]Summary

Los materiales definen las formas en que la luz se comporta en un objeto. En este tutorial, comenzarás a aprender sobre los materiales al saber cómo se comporta la luz con los objetos sólidos. Durante el proceso, crearás materiales para objetos sólidos y podrás simular objetos en el mundo real.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Explicar la reflectancia Especular y Difusa.
- Distinguir entre las propiedades Especular y Metálica, y explicar cómo se configura cada una.
- Ajustar el Base Map (Mapa base) de un material usando un color.
- Aplicar los flujos de trabajo especular y metálico para lograr los efectos deseados.
- Identificar las características de una superficie del mundo real que se va a configurar en un nuevo material.
- Ajustar las propiedades del material para simular una sustancia sólida determinada.

Resources

- [Materials Chart](https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderMaterialCharts.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953880473)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Para crear materiales que se parezcan a las superficies de los objetos del mundo real, debes conocer algunos principios fundamentales de la luz y cómo actúa sobre esos objetos. Después de todo, para ver un objeto, nuestros ojos deben percibir la luz que ha interactuado con él. Las propiedades de los materiales se basan en estos principios.

En este tutorial, aprenderás sobre las superficies de color sólido. Luego, puedes aplicar lo que has aprendido a superficies más complejas.

Marcar paso como completado

## 2.  ¿Cómo se comporta la luz?

Q&A (0)

Cuando la luz entra en contacto con cualquier objeto, puede hacer una de estas tres cosas: rebotar en él, lo que se conoce como reflexión; atravesarlo, si el objeto es transparente o translúcido; o ser absorbida por él.

La manera en que un objeto se ve para el ojo humano depende de cómo responde a la luz en alguna combinación de estas formas. Usaremos la manzana en tu mesa de trabajo para demostrar el comportamiento de la luz en las superficies y las formas en que Unity simula ese comportamiento.

Marcar paso como completado

## 3. Reflexiones Especulares y Difusas

Q&A (0)

Hay dos formas en que la luz se refleja de un objeto: **reflexiones especulares** y **reflexiones difusas**.

Una **reflexión especular** es la reflexión directa más visible en los objetos brillantes. En la imagen de ejemplo a continuación, la reflexión especular es blanca, lo que indica que la fuente de luz es blanca.

Pero no toda la luz que llega a la manzana rebota en ella directamente. Otra luz penetra la superficie y atraviesa o rebota alrededor de las capas externas de la manzana. Parte de esta luz se absorbe y otra rebota. La luz que se escapa es la **reflexión difusa**.

[Image: image]

La reflexión difusa de un objeto determina su color visible. En la manzana, la luz que no es roja se absorbe y la luz roja se refleja en nuestros ojos.

En conjunto, las reflexiones especulares y difusas conforman la reflectancia total de la superficie. Toda la luz reflejada es especular o difusa.

Marcar paso como completado

## 4. Reflectancia difusa: Base Map

Q&A (0)

Ahora sabes que la reflectancia difusa significa el color visible de un objeto, es decir, el color que se refleja en su superficie. En Unity, para representar la reflectancia, el sombreador iluminado o URP requiere un **Base Map**, que ya has usado. Otros sombreadores con frecuencia llaman a esta propiedad **Albedo**o**Mapa difuso** (aunque, técnicamente, estos términos no significan exactamente lo mismo).

#### ¿Qué es albedo?

El término **albedo**describe la medida de la reflexión difusa. Por lo general, se especifica como un color regular que se expresa como tres valores para rojo, verde y azul (valores RGB). Los valores RGB se pueden convertir en valores de tono, saturación y luminosidad (brillo). La luminosidad del color del albedo corresponde a la cantidad de reflexión difusa, y el tono y la saturación describen la calidad de la luz que se escapa de la superficie.

#### ¿Por qué se llama mapa?

Hablaremos de los mapas con más detalle pronto. Los mapas pueden ser de colores sólidos o pueden especificarse con imágenes en 2D para agregar variaciones a una superficie. El selector de color que has estado usando para establecer la propiedad del Base Map aplica el color seleccionado solo como sólido.

Marcar paso como completado

## 5. Metales en el flujo de trabajo especular

Q&A (0)

Observa los objetos de metal que puedes ver en el mundo real que te rodea en este momento. Estos pueden incluir un bolígrafo, un remache en tu bolso o tu ropa, o algunas joyas. ¿Cómo explicarías el metal en términos de reflectancia especular y difusa? Es una pregunta capciosa, porque los metales no tienen mucha reflexión difusa, si es que la tienen.

¿Y si la manzana en tu Scene (Escena) fuera un pisapapeles con forma de manzana hecho de acero? Ya no tendría el color rojo, toda su reflexión es especular, ya sea que provenga directo de la fuente de luz o indirectamente del entorno. De hecho, verías cada fuente de luz directa o indirecta como reflexiones especulares sobre toda la superficie.

La propiedad de una superficie que la hace ver como metal se llama **especularidad**.

Puedes saber que una reflexión es especular cuando puedes ver la fuente de la luz reflejada en el objeto. Con los metales sin teñir, como la plata y el acero, la luz que vemos tiene los colores de la luz que incide en la superficie, como un espejo.

La especularidad es diferente de la suavidad. Podríamos pulir una manzana roja hasta que esté muy lisa, pero nunca se convertiría en metal de esa manera. Sin embargo, para tener una reflexión especular, un objeto liso debe tener cierta especularidad.

Las manzanas de la imagen siguiente tienen la misma suavidad, pero niveles crecientes de especularidad.

[Image: image]

Al igual que las superficies difusas, los metales absorben la luz. Puedes ver que esto es cierto si dejas un objeto de metal al sol: se calienta. Pero en los metales de color, como el oro y el cobre, la luz de color que vemos no es en realidad una reflexión difusa, es una reflexión especular teñida. Debe ser especular porque puedes ver las fuentes de luz en esa reflexión. El tinte que ves se debe a que el objeto absorbe parte del espectro visible de la luz y solo refleja el color del tinte.

#### Flujo de trabajo especular

La especularidad, como propiedad de un material, es una forma de especificar que una superficie se ve metálica. Hay dos **flujos de trabajo**que puedes utilizar para especificar una apariencia metálica en tus materiales. Cuando utilizas la propiedad **Specularity (Especularidad)** en el sombreador iluminado o URP, estás utilizando el **flujo de trabajo especular**. (Explicaremos otro, el **flujo de trabajo metálico**, a continuación).

En el flujo de trabajo especular, los materiales lisos con una configuración **Specular (Especular)**mayor que 0 tendrán alguna reflexión especular.

En el flujo de trabajo especular:

- Un metal brillante tiene una configuración alta de **Specularity**y una configuración alta de **Smoothness (Suavidad)**.
- Un material brillante que no sea metal tiene una configuración baja de **Specularity**y una configuración alta de **Smoothness**.
- **Smoothness** enfoca la reflexión especular****y el **Specular Map (Mapa especular)** controla la cantidad y el color de la reflexión especular.
- El **Specular Map** puede utilizar colores RGB.

Experimentemos con la reflexión especular sobre la manzana.

**1.** Selecciona una manzana y visualiza el Material del Inspector.

**2.** Asegúrate de que la propiedad **Workflow Mode (Modo de flujo de trabajo)**en el Material del Inspector esté configurada como **Specular**.

**3.** Ajusta **Smoothness**a un valor de 1.

**4.** Cambia el color del **Specular Map** de la manzana a blanco para crear un efecto metálico similar a un espejo.

Observa lo que le ha pasado al color difuso de tu manzana (Base Map). ¿Qué le pasó a tu Golden Delicious amarilla o a tu Granny Smith verde? En el flujo de trabajo especular, a medida que el valor Specular aumenta (se acerca al blanco), se ignora la cantidad de color base (color difuso).

**5.** Experimenta con el color Specular, incluso cambiándolo de blanco a un color. Puedes obtener algunos efectos extraños. Ten en cuenta que estás jugando con dos tipos de luz reflejada: difusa, con el Base Map, y especular, con el Specular Map.

Aquí tienes la opción de darles diferentes colores a estos dos tipos de reflexión. El efecto resultante es inusual, pero no insólito en el mundo real. (Piensa en un automóvil rojo metalizado bajo una luz azul, por ejemplo).

**6.**  Cuando termines de experimentar, configura el color Specular para crear una manzana de oro. En este caso, simularás la forma en que el oro refleja especularmente la luz amarillenta y absorbe todos los demás colores.

Marcar paso como completado

## 6. Metales en el flujo de trabajo metálico

Q&A (0)

Unity proporciona dos formas de hacer que los objetos se vean metálicos. El flujo de trabajo especular que has estado usando es el más científico de los dos. El **flujo de trabajo metálico** es más simple, pero no sigue estrictamente las reglas de la luz basadas en la física.

El color del Base Map en el flujo de trabajo metálico sigue siendo visible en los objetos con una configuración de Metallic (Metálica) alta. Compara las manzanas del flujo de trabajo especular anterior con las del flujo de trabajo metálico a continuación.

[Image: image]

En el flujo de trabajo metálico:

- Un metal brillante tiene una configuración **Metallic**alta y una configuración alta de **Smoothness**.
- Un no metal brillante tiene un valor **Metallic**nulo o bajo y un valor alto de **Smoothness**.
- La **Smoothness**controla el enfoque de la reflexión especular.
- El **mapa Metallic** solo usa escala de grises.

Aquí hay una tabla para compararlos:

[Image: image]

Prueba el flujo de trabajo metálico en una nueva manzana:

**1.**  Selecciona una manzana y visualízala en el Inspector. Abre la sección Material si aún no está abierta.

**2.**  Abre el selector de color del Specular Map. Escribe el código hexadecimal del color que seleccionaste en el paso anterior; por ejemplo, # ECCC15.

**3.**  Duplica el objeto de la manzana para que tengas dos manzanas en el pedestal.

**4.**  [Crea un nuevo material](https://learn.unity.com/tutorial/manage-materials-in-a-project#64d0b04fedbc2a112766ce7c) y aplícalo a la segunda manzana.

**5.**  Configura el **Workflow Mode** del material de la segunda manzana en **Metallic**.

**6.**  Utiliza el selector de color para establecer el color del Base Map con el color que escribiste.

En el flujo de trabajo metálico, el color del Base Map no es estrictamente el color difuso, sino que permanece visible tanto si la superficie es puramente metálica como si no. En lugar de especularidad, a esto se le llama **metalicidad**.

**7.**  Experimenta con los valores de Smoothness y Metallic hasta que las dos manzanas coincidan lo más posible.

Ten en cuenta que, a diferencia del Specular Map, la propiedad Metallic no usa un color, pero tiene un deslizador. Siempre se expresa como un valor único (escala de grises), no como tres (color RGB ). Simplemente indica una cantidad de metalicidad.

Independientemente de si Metallic tiene un valor alto o bajo, toda la luz reflejada, que representa tanto reflexiones especulares como difusas, retiene el color base.

#### ¿Qué flujo de trabajo deberías utilizar?

Cuando importas recursos, ves que algunos usan el flujo de trabajo especular y otros usan el metálico. Cuando tengas una opción, puedes utilizar la que prefieras. El flujo de trabajo metálico es más común porque es más fácil trabajar con él, pero no es tan científico. El flujo de trabajo especular se basa en los principios de reflectancia del mundo real, pero el Specular Map de color lo hace más desafiante.

Marcar paso como completado

## 7. Suavidad

Q&A (0)

Observa los materiales de colores sólidos en tu propio mundo: plástico, papel, cerámica. Observa los reflejos especulares. ¿Están borrosos o enfocados? ¿Puedes ver la fuente de luz en el reflejo? ¿Qué te dice esto sobre la suavidad o aspereza de cada objeto?

Ahora piensa en las manzanas de tu mesa de trabajo. Sus reflexiones especulares son reflejos borrosos, lo que nos indica que sus superficies son un poco ásperas. Pero si pulimos la manzana para hacer que la superficie sea más brillante, podemos ver la forma de la fuente de luz reflejada en la superficie.

**La suavidad**, también llamada **brillo**o **brillantez** enfoca la reflexión especular. Desde una superficie lisa, la luz se refleja de forma uniforme para que puedas ver la forma de la fuente de luz en el reflejo.

Desde una superficie rugosa, todavía hay una reflexión especular, pero está esparcida. Las pequeñas superficies en toda la manzana emiten una reflexión especular.

La suavidad aumenta la reflexión especular, pero es importante no confundir las dos. La alta especularidad hace que un objeto se vea como metal. Una superficie puede ser muy lisa o tersa, como nuestra pulida manzana roja, pero aún así no tener el aspecto de metal.

En la imagen a continuación, las cinco manzanas tienen una configuración de Metallic de 0.5, con una suavidad en aumento. En la más tersa, podemos ver las luces y el reflejo de la mesa.

[Image: image]

#### Explora la suavidad

En el sombreador iluminado o URP, puedes establecer la suavidad para toda la superficie con un valor. (También hay otras opciones que analizaremos pronto).

**1.**  Experimenta con la suavidad de tus manzanas y ajusta el valor de **Smoothness**.

**2.**  Mueve o gira la manzana y observa su reflexión especular en diferentes niveles de suavidad.

**3.**  Experimenta con la suavidad y la especularidad o metalicidad:

- ¿Qué ocurre cuando la manzana de tu flujo de trabajo metálico tiene Smoothness de 1 y una configuración Metallic de 0?
- ¿Qué ocurre cuando tu manzana de flujo de trabajo especular tiene Smoothness de 1, pero un Specular Map de 0 (negro)?

Al trabajar con modelos importados a Unity, encontrarás todas las combinaciones de configuraciones en estos dos flujos de trabajo. Al entender cada flujo de trabajo, podrás trabajar en cada uno para obtener los resultados que deseas.

Marcar paso como completado

## 8. Explora: ¿Cómo crear un material sólido?

Q&A (0)

Ahora conoces varios conceptos que son clave para los materiales de base física: reflectancia difusa, reflectancia especular y suavidad. Conoces la diferencia entre suavidad y metalicidad o especularidad, y puedes utilizar los flujos de trabajo especular y metálico.

Es hora de un pequeño desafío: simular un material del mundo real.

**1.**  Busca un objeto de color sólido en el mundo real. Puede estar hecho de papel, plástico, metal o algo pintado. Busca algo que tenga un color y una textura física uniformes.

**2.**  Crea un nuevo primitivo (una esfera, una cápsula o un cilindro son los mejores) con curvas para que puedas ver la reflexión especular con facilidad.

**3.**  [Crea un nuevo material](https://learn.unity.com/tutorial/manage-materials-in-a-project#64d0b04fedbc2a112766ce7c)en la carpeta **Materials**.

**4.**  [Aplica el nuevo material](https://learn.unity.com/tutorial/manage-materials-in-a-project#64d0b04fedbc2a112766ce79)a la pieza de tu galería.

**5.**  Replica el aspecto de tu material del mundo real en Unity.

**Consejo:** En el mundo real, intenta colocar tu objeto del mundo real bajo una luz que sea similar al foco de nuestra galería para que puedas comparar las reflexiones especulares y difusas.

Tendrás éxito si puedes simular tu objeto del mundo real de una manera que te parezca convincente.

Para obtener ilustraciones detalladas que muestren los flujos de trabajo especular y metálico en varios materiales, examina estos [gráficos de materiales en el Manual de Unity.](https://docs.unity3d.com/6000.0/Documentation/Manual/StandardShaderMaterialCharts.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953880473)

No te preocupes si no queda perfecto, hay más propiedades y técnicas de los materiales basados en la física en los próximos tutoriales. Lo importante ahora es que sepas cómo aplicar estas propiedades para hacer que un objeto en Unity parezca real.

Marcar paso como completado

## 9. Próximos pasos

Q&A (0)

Ahora puedes reproducir muchas superficies sólidas y metálicas. Sin embargo, la mayoría de las superficies no son perfectamente sólidas y uniformes. En el siguiente tutorial, aprenderás a usar imágenes en 2D como mapas para proporcionar detalles específicos a tus superficies.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
