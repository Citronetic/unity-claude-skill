[Image: image]

# ¿Cómo explorar las vistas de la cámara?

Tutorial

Beginner

+10XP

15 mins

1

Unity Technologies

[Image: ¿Cómo explorar las vistas de la cámara?]Summary

En este tutorial, explorarás algunas de las vistas de la cámara más populares y aprenderás cuándo utilizarlas.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar casos de uso para una vista de la cámara en perspectiva en una Scene (Escena) en 2D o 3D.
- Identificar casos de uso para una vista de la cámara ortográfica en una Escena en 2D o 3D.
- Explorar los efectos de la configuración de la cámara en la experiencia del usuario.
- Distinguir entre los diferentes puntos de vista de la cámara para ofrecer a los usuarios finales la orientación adecuada a la Escena.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Si estuvieras haciendo una película, tendrías el control total sobre lo que vería el espectador. Pero en los juegos y otras experiencias interactivas, los usuarios pueden explorar con libertad, lo que crea el riesgo de que vean algo que no deberían o, por el contrario, que no vean algo que deberían. Por esta razón, debes considerar con cuidado qué vista de cámara funciona mejor para tu proyecto.

Con los años, se han estandarizado varias vistas diferentes dentro de los medios interactivos. En este tutorial, explorarás algunas de las vistas de cámara más populares y aprenderás la mejor forma de utilizarlas. Las explorarás en una sola Escena especial, donde hay zonas dedicadas que cambiarán a diferentes cámaras automáticamente.

Marcar paso como completado

## 2. Vistas de la cámara en tercera persona

Q&A (0)

Comencemos la observación de las diferentes vistas mediante la exploración de la vista de cámara en tercera persona.

**1.**  Dirígete a la sección llamada **3rd Person Camera (Cámara en tercera persona)**.

**2.** Entra en modo Play y usa las teclas WASD para navegar la zona llamada **3rd Person Camera**.

**3.**  Usa el cursor para girar la cámara alrededor del personaje jugador mientras te desplazas por esta área.

[Image: image]

Las vistas de la cámara **en tercera persona**son populares para las experiencias interactivas en las que tanto el personaje como el entorno comparten la misma importancia. Por lo general, el usuario tiene cierto control sobre la cámara, lo que le permite ver el entorno y el personaje desde diferentes ángulos. Esto es beneficioso para las experiencias en las que el usuario tiene la capacidad de personalizar su personaje o cuando el personaje tiene habilidades o características únicas que vale la pena ver, como animaciones complejas.

A nivel funcional, la vista de la cámara en tercera persona puede facilitar la navegación del usuario por un entorno. Poder ver al personaje como un punto de referencia da la capacidad de estimar el tamaño y la distancia, lo cual es útil para experiencias con desafíos ambientales, como escalar y saltar entre plataformas.

Desde una perspectiva narrativa, esta vista crea una capa de separación entre el usuario y el personaje principal al que controla. Como pueden ver al personaje, los usuarios se apegan e identifican con él, pero no es probable que se sitúen directamente en el papel del personaje de la misma manera que lo harían al utilizar la perspectiva en primera persona.

Marcar paso como completado

## 3. Vistas de la cámara en primera persona

Q&A (0)

La siguiente vista de la cámara es en primera persona. Esta vista se puede encontrar al ingresar a la cafetería al lado izquierdo de la Escena.

**1.** Ingresa al modo Play (Reproducir) y guía al personaje jugador hacia la cafetería para activar la cámara en primera persona.

**Consejo**: Puedes mantener presionada la tecla Shift para hacer que tu personaje acelere.

[Image: image]

La vista de cámara**en primera persona** es una de las más comunes en las experiencias interactivas. Coloca al usuario directamente en el mundo de la experiencia y es ideal cuando el énfasis está en la exploración del entorno.

Esta vista da al usuario control completo sobre lo que ve la cámara. Esto quiere decir que los entornos deben ser más detallados que con muchas otras vistas de la cámara. Cuando los usuarios se acercan a los objetos, es más probable que noten modelos y texturas de baja calidad.

Debido a que en esta vista la cámara representa los ojos del usuario, las cámaras en primera persona también se benefician de un campo de visión más amplio para evitar el mareo, como se describe en el tutorial que abarca [los tipos de proyección de la cámara](https://learn.unity.com/tutorial/66fd9e15edbc2a06f73501d8). Curiosamente, aunque esta vista coloca al usuario en la experiencia, a menudo dificulta la estimación de la profundidad, lo que hace que acciones como saltar a ubicaciones precisas sean más difíciles en esta vista que en otras.

A nivel narrativo, una perspectiva en primera persona coloca al usuario en el centro de la historia. Parecerá que todas las cosas que ocurren en la experiencia le suceden a él, lo que hará que las situaciones sean más impactantes. Esta perspectiva también es útil para las simulaciones de capacitación, ya que recrea de manera más precisa cómo los usuarios verán los escenarios del mundo real e interactuarán con ellos.

Marcar paso como completado

## 4. Vistas de la cámara aérea

Q&A (0)

La siguiente vista que exploraremos es la de la cámara aérea. Se puede encontrar al ingresar al laberinto en el centro de la Escena.

**1.** Navega con el personaje jugador por el laberinto para activar la vista de la cámara aérea.

**2.** Muévete por la zona con las teclas WASD.

[Image: image]

La vista de la cámara **aérea** suele colocarse por encima del usuario y del entorno. Se utiliza mejor para experiencias en las que el enfoque está en la tarea que el usuario debe realizar. La vista aérea puede ser ortográfica o en perspectiva y, por lo general, ofrece al usuario un gran campo de visión. Puede ser estática y mostrar siempre una sola Escena, estar vinculada al usuario para que se muestre más del entorno a medida que el usuario se mueva, o el usuario puede controlarla de forma independiente.

Debido a que este tipo de cámara limita la vista del usuario a un solo ángulo, entender la perspectiva puede ser un desafío. Se usa con mayor frecuencia en experiencias en las que el usuario necesita tomar decisiones sobre situaciones a gran escala, en lugar de aquellas en las que explora el entorno. Por esta razón, la vista aérea es habitual en los juegos tácticos.

Marcar paso como completado

## 5. Vistas de la cámara isométrica

Q&A (0)

La siguiente vista de la cámara es isométrica. Es la única que utiliza una cámara ortográfica, que, como aprendiste antes, no renderiza la profundidad. Se encuentra al lado del comedor donde exploraste la vista en primera persona.

**1.**  Navega a la sección llamada **Ortho View (Vista ortográfica)**.

**2.**  Muévete por la zona con las teclas WASD.

[Image: image]

Las vistas de cámara **isométrica**se crearon originalmente para juegos en 2D y se usan para simular la profundidad en las cámaras **ortográficas**. Con frecuencia, están colocadas para enfrentar los elementos ambientales en un ángulo de 45 grados y levantadas 35 grados por encima del área de enfoque. Esto crea la apariencia de una vista de tres cuartos. En la actualidad, se usan con más frecuencia en términos de estilo y se pueden encontrar en juegos en 3D y 2D con cámaras ortográficas o en perspectiva.

Al igual que la vista aérea, una cámara isométrica puede ser estática, moverse con el usuario o ser controlada por completo por este. Se utiliza mejor en escenarios en los que el usuario no tiene la tarea de enfrentar desafíos basados en la navegación, porque la perspectiva puede ser difícil de entender con una sola mirada.

Marcar paso como completado

## 6. Vistas de la cámara fija

Q&A (0)

A continuación, explorarás dos vistas de la cámara fija. Estas vistas se encuentran en el callejón, directamente a la derecha del laberinto.

**1.**  Dirígete al callejón detrás del edificio. Una vez que ingreses a esta área, las vistas de la cámara estática se activarán y cambiarán según el lugar donde camine el personaje jugador.

**2.**  Muévete por la zona con las teclas WASD.

[Image: image]

Como creador, las vistas de la cámara **fija**te permiten tener un control completo sobre lo que el usuario ve en tu experiencia interactiva. Originalmente, esta vista se creó para aprovechar al máximo los recursos limitados de los primeros videojuegos. Al fijar la cámara en una parte específica de una Escena, los diseñadores podían diseñar sus entornos para que se vieran lo mejor posible para la cámara, e ignorar todo lo que no se veía. Es un concepto similar al diseño de un escenario para una obra: desde la perspectiva del espectador, un escenario puede configurarse como un exuberante jardín con topiarios de animales cuidadosamente cortados, pero desde la parte posterior, puedes ver que esos topiarios son en realidad paneles planos de madera pintados para que parezcan reales.

Las vistas de cámara fija también se pueden utilizar para controlar el momento en que un usuario descubre información importante en la experiencia. Las vistas de la cámara seleccionadas con cuidado pueden ocultar aspectos de un entorno: un usuario puede pensar que está atravesando un pasillo vacío, pero la vista de cámara cambia y revela que hay algo a la vuelta de la esquina.

Marcar paso como completado

## 7. ¿Cómo combinar vistas de la cámara?

Q&A (0)

Si bien suele ser recomendable limitar el número de vistas de la cámara en tu experiencia para minimizar las interrupciones para el usuario, está bien utilizar más de un tipo de cámara si es necesario. Un buen ejemplo de esto son los juegos en los que la cámara predeterminada está configurada en tercera persona, pero hay una opción controlada por el usuario para cambiar a una cámara en primera persona si necesita ver algo con mayor detalle o realizar una tarea específica. Lo más importante al determinar qué vistas de la cámara usar es identificar con claridad las necesidades del usuario en la experiencia y seleccionar las vistas que tengan más sentido para él.

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

En este tutorial, aprendiste sobre algunas vistas de la cámara populares en las experiencias interactivas. Tómate un tiempo para evaluar las que más te gustaron y piensa en la manera en que pueden ser útiles en tus propios proyectos. Piensa en algunos juegos u otras experiencias que hayas probado en el pasado. ¿Comparten los mismos tipos de ángulos de la cámara que te interesaron en este tutorial? En el siguiente tutorial, continuarás explorando las configuraciones populares de la cámara al aprender sobre los diferentes tipos de tomas.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
