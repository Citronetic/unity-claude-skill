[Image: image]

# ¿Cómo mejorar los reflejos en tu Scene?

Tutorial

Beginner

+10XP

25 mins

1

Unity Technologies

[Image: ¿Cómo mejorar los reflejos en tu Scene?]Summary

Casi has completado tu trabajo en la Scene (Escena) interior, pero queda un poco más por hacer. Antes de terminar la Escena interior, debes hacer que sea más realista mediante el abordaje de los problemas de reflexión presentes en ese momento.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Explicar cómo las Sondas de reflexión mejoran la precisión de las reflexiones en una Escena.
- Configurar una Sonda de reflexión.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Casi has completado tu trabajo en la Escena interior, pero queda un poco más por hacer. Antes de terminar la Escena interior, debes hacer que sea más realista mediante el abordaje de los problemas de reflexión presentes en ese momento.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Explicar cómo las Sondas de reflexión mejoran la precisión de las reflexiones en una Escena.
- Configurar una Sonda de reflexión.

Marcar paso como completado

## 2. ¿Cómo funciona la reflexión en Unity?

Q&A (0)

Tal vez hayas notado que la manzana del pedestal de la esquina está hecha de un material brillante y reflectante, pero los reflejos que se muestran en ella son muy extraños. Refleja los dos Spot Lights (Focos de luces) de colores colocados sobre ella en la galería, pero también refleja el Skybox fuera del espacio interior. Eso definitivamente no está bien.

[Image: image]

Antes de abordar este problema, debes aprender un poco sobre cómo funciona la reflexión en Unity.

#### Reflexiones en Unity

En juegos y experiencias interactivos en tiempo real similares, el **mapeo de reflexiones** es un enfoque que simula las reflexiones al asumir que todos los objetos reflectantes en una Escena pueden ver o recibir (y así reflejar) el mismo entorno. Esto puede funcionar bien en un espacio abierto simple, como la Escena al aire libre. No funciona tan bien para Escenas interiores o en otros espacios con un entorno más complejo (donde hay un aumento de variables que podrían afectar los reflejos).

Por ejemplo, imagina un juego de conducción en el que parte de la carretera está cubierta por un túnel. La inmersión del jugador podría interrumpirse si los automóviles en el túnel todavía tuvieran el cielo reflejado en las ventanas.

En Unity, puedes usar las **Sondas de reflexión** para mejorar la calidad de las reflexiones en una Escena si tomas muestras del entorno en los puntos críticos de esta en los que una reflexión cambiaría de forma perceptible.

Marcar paso como completado

## 3. ¿Cómo funcionan las Sondas de reflexión?

Q&A (0)

Las Sondas de reflexión registran el entorno visual y la iluminación desde un punto dado de una Escena, como un **mapa de cubos**; puedes pensar en esto como un cubo con seis texturas que registran las reflexiones desde un punto particular de una Escena en sus superficies internas. Ya te encontraste con algo como esto antes: puedes usar un mapa de cubos para [generar un Skybox](https://learn.unity.com/tutorial/673d2b19edbc2a1b66b9f986?language=es).

[Image: image]

#### ¿Cómo funcionan las Sondas de reflexión?

Cuando el sombreador de un GameObject tiene acceso al mapa de cubos de la Sonda de reflexión, cada punto de la superficie del objeto podrá ver una pequeña área del mapa de cubos en la dirección a la que apunta la superficie. El sombreador usa el color del mapa de cubos en este punto para calcular de qué color debe ser la superficie del GameObject. Por ejemplo, un espejo reflejaría la Escena a su alrededor casi con exactitud, pero un automóvil brillante podría teñir y disolver el reflejo.

Cada Escena en Unity tiene una Sonda de reflexión secreta para probar el Skybox. Esto es lo que proporciona los reflejos básicos en una Escena, y es lo que actualmente proporciona el reflejo en la manzana metálica.

#### Zona de efecto (cubo)

Las Sondas de reflexión también tienen un cubo invisible a su alrededor en la Escena, que funciona como zona de efecto. Puedes configurar el tamaño de este cubo.

Un objeto reflectante que pasa dentro de la zona de una Sonda de reflexión tiene su mapa de cubos de reflexión proporcionado temporalmente por esa Sonda. A medida que el objeto se mueve de una zona a otra, el mapa de cubos cambia en consecuencia. Esta es una forma de abordar el ejemplo del paso anterior en el que los automóviles de un juego de carreras entran y salen de un túnel. El túnel podría tener su propia Sonda de reflexión y todos los automóviles dentro del túnel estarían en la zona de efecto.

Marcar paso como completado

## 4. ¿Cómo colocar y configurar una Sonda de reflexión?

Q&A (0)

Arregla los extraños reflejos en la manzana metálica mediante una Sonda de reflexión en tu Escena:

**1.**En la Hierarchy (Jerarquía), selecciona **Add** (**+**) y elige **Light >** **Reflection Probe**. Esto creará un nuevo GameObject con el componente Reflection Probe (Sonda de reflexión) agregado.

**2.**Coloca la Reflection Probe frente a la manzana sobre su pedestal. Cuanto más cerca esté de la posición real de la manzana, más precisos serán los reflejos.

Notarás que, aparte de los reflejos del foco de luz, la manzana parecerá negra cuando coloques la Reflection Probe aquí. Esto se debe a que está en la zona de efecto de la Reflection Probe.

[Image: image]

**Consejo:**Si tienes dificultades para mover la Reflection Probe a la ubicación correcta, intenta configurar las propiedades **Position (Posición)** en su componente Transform (Transformar) cerca de las del modelo Apple o Manzana como primer paso.

**3.**En el Inspector, ve al componente Reflection Probe y verifica que su **Type (Tipo)** esté configurado en **Baked (Integrado)**.

**4.**En la sección **Runtime Settings (Ajustes del tiempo de ejecución)**, habilita la propiedad **Box Projection (Proyección del cubo)**.

[Image: image]

Esto significa que las reflexiones sobre la manzana se simularán según el lugar donde esta se encuentre dentro de la zona de efecto de la Sonda de reflexión.

**5.**Ajusta los valores del eje **Box Size (Tamaño del cubo)** hasta que el cubo que representa la zona de efecto de la Sonda de reflexión ocupe la mayor parte de la mitad posterior de la galería donde se encuentra la manzana.

[Image: image]

**Consejo:**Abre **FinalScene_Lighting_Indoor** y revisa la configuración y ubicación de **Reflection Probe (1)** si deseas examinar un ejemplo más de cerca.

**6.** Selecciona **Bake (Integrar)** para integrar la Sonda de reflexión que se encuentra en la parte inferior del componente Reflection Probe.

[Image: image]

**Importante:** Las Sondas de reflexión se deben crear por separado de los mapas de luz para la Escena, a menos que tengas habilitada la opción de integración automática (**Auto Generate o Generación automática** en la ventana Lighting). Esto se debe a que, si vas a realizar cambios, puede tomar bastante tiempo volver a crear una Escena. Si haces cambios a una Reflection Probe, recuerda integrarla.

Marcar paso como completado

## 5. ¿Cómo probar la Sonda de reflexión?

Q&A (0)

Después de la integración, debes notar de inmediato que el reflejo en la manzana ha cambiado para mostrar el espacio a su alrededor.

[Image: image]

Sin embargo, puedes examinar la precisión de las reflexiones proporcionadas por la Sonda de reflexión con un poco más de detalle:

**1.** Selecciona **Play (Reproducir)** para ingresar al modo Play.

**2.**Notarás que la manzana está animada para moverse hacia arriba y hacia abajo. Observa cómo cambian los reflejos sobre ella de acuerdo con su posición cambiante.

**3.** Cuando termines, recuerda salir del modo Play.

La manzana metálica refleja el espacio de la galería a su alrededor y el reflejo cambia a medida que la manzana se mueve. Eso es una gran mejora.

Marcar paso como completado

## 6. ¿Por qué adoptar este enfoque de reflexión?

Q&A (0)

El cálculo de las reflexiones precisas puede requerir un gran procesamiento, por lo que las experiencias en tiempo real que no apuntan a niveles altos de realismo a menudo determinan cuándo y dónde invertir en un mapeo de reflexión más preciso. Con frecuencia, los diferentes objetos reflectantes de una Escena comparten una Sonda de reflexión cuidadosamente colocada, en lugar de que cada uno tenga la suya propia, aunque esa sería la mejor manera de lograr las simulaciones de reflexión más precisas.

Como en muchas otras áreas, a menudo tendrás que elegir el equilibrio adecuado entre la optimización y la simulación realista para tu proyecto. El proyecto de esta experiencia de aprendizaje es relativamente pequeño y poco exigente en términos de procesamiento, pero si agregas muchos objetos reflectantes y Sondas de reflexión, es posible que notes un impacto negativo en el rendimiento.

Marcar paso como completado

## 7. Explora: ¿Cómo establecer una atmósfera misteriosa en la galería?

Q&A (0)

Cuando trabajaste en la Escena al aire libre, dedicaste tiempo a personalizarla según tu propia visión. Hasta ahora, en la Escena interior, has completado y perfeccionado la iluminación de la Escena en lugar de personalizarla.

Si lo deseas, tómate un tiempo para considerar cómo podrías utilizar la iluminación para desarrollar una atmósfera más misteriosa en este espacio.

Toma en cuenta lo siguiente:

- La hora del día y el uso de los tragaluces.
- El uso del color.
- El realismo de las sombras.
- Cambios en el entorno que puedan tener un impacto significativo en la iluminación (por ejemplo, duplicar la partición parcial del espacio y ubicarla alrededor de este).

Puedes mantener esto como un experimento mental o tomarte el tiempo necesario para implementar los cambios en la Escena. También puedes regresar a estas Escenas en cualquier momento y usarlas para practicar o experimentar con la iluminación.

**Consejo:** Recuerda guardar los cambios con frecuencia.

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

Terminaste de trabajar en la Escena interior y de explorar los fundamentos de la iluminación en Unity en esta experiencia de aprendizaje.

En el tutorial del desafío final, aprenderás sobre un enfoque de iluminación artístico clave para desarrollar tu oficio y luego aplicarás lo que has aprendido para crear un estudio de iluminación en una nueva Escena.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
