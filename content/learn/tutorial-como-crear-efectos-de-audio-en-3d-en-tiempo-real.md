[Image: image]

# ¿Cómo crear efectos de audio en 3D en tiempo real?

Tutorial

foundational

+10XP

20 mins

5

(493)

Unity Technologies

[Image: ¿Cómo crear efectos de audio en 3D en tiempo real?]Summary

El sonido en 3D en tiempo real debe tener el mismo comportamiento que en el mundo real: es más fuerte al acercarte a la fuente e incluso rebota en los objetos. En este tutorial, explorarás las funciones de Unity que dan vida al audio.

En este tutorial, podrás realizar lo siguiente:

- Definir el sonido en 3D.
- Explicar el rol de un receptor de sonido en una Escena.
- Ajustar Audio Clip a Loop.
- Convertir audio de fondo en sonido en 3D.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

La **música de fondo** que has agregado se reproduce con el mismo volumen en cualquier lugar de la Escena. También puedes agregar audio que cambia de volumen, o incluso de tono, según dónde estés en la Escena, del mismo modo que el sonido se comporta en un espacio real. Esto se llama **sonido en 3D**.

Para explorar cómo funciona el sonido en 3D en Unity, es importante entender cómo se reproduce y recibe el audio en la Escena. Del mismo modo en que la cámara funciona como los ojos del usuario, el **receptor de sonido** funciona como los oídos. Detecta los sonidos audibles en una ubicación determinada y los reproduce para el usuario. Es importante aclarar que solo puede haber un receptor de sonido en una Escena. Cada Escena predeterminada de Unity tiene un receptor de sonido incorporado a la Main Camera (Cámara principal), de modo que los «ojos» y los «oídos» del usuario están juntos.

Marcar paso como completado

## 2. Rol del receptor de sonido

Q&A (0)

En esta Escena, hemos preparado un GameObject llamado Character para representar al usuario que se mueve por la cocina. El GameObject Character incluye a la Main Camera (ojos) con el receptor de sonido incorporado (oídos) y un componente Capsule Collider (cuerpo; como una cápsula primitiva, pero invisible, y, como Collider, choca con otros GameObjects, en lugar de atravesarlos).

**1.**En la ventana Hierarchy, selecciona el GameObject Character.

**2.**Selecciona la flecha hacia la izquierda al lado de Character para expandir el GameObject Character y ver sus GameObjects secundarios.

[Image: image]

**3.**Si no puedes ver el GameObject Main Camera, selecciona la flecha hacia la izquierda al lado de CharacterRoot para mostrar la Main Camera.

[Image: image]

**4.**Observa el GameObject Character. Verás el contorno del Collider y la Main Camera ubicada más o menos donde estaría la cabeza del personaje.

[Image: image]

**5.**En la ventana Hierarchy, selecciona el GameObject Main Camera.

**6.**En la ventana Inspector, verás el componente Audio Listener. Ten en cuenta que este componente no tiene propiedades.

[Image: image]Marcar paso como completado

## 3. ¿Cómo crear audio en 3D?

Q&A (0)

En el audio en 3D, los clips de audio suenan diferente según la ubicación del receptor de sonido en la Escena. En esta Escena de ejemplo, hemos proporcionado un GameObject que emite sonido para demostrar el audio en 3D.

**1.**En la ventana Hierarchy, selecciona el GameObject BoilingPot (Olla hirviendo).

[Image: image]

**2.**En la ventana Inspector, selecciona la casilla de selección al lado del campo del nombre BoilingPot para habilitar el GameObject en tu Escena.

[Image: image]

**3.**Haz clic en el botón **Play**para probar. Notarás que ahora hay una olla de cobre con agua hirviendo que emite sonido en tu Escena. Sin embargo, independiente de dónde estés en la Escena, el audio tendrá el mismo volumen.

**4.**Sal del modo Play. En la ventana Hierarchy, expande el GameObject BoilingPot para ver los elementos secundarios del GameObject.

[Image: image]

**5.**Selecciona el GameObject BoilingWaterAudio que es el elemento secundario de BoilingPot.

**6.**En la ventana Inspector, examina las propiedades disponibles del componente Audio Source. Para este Audio Source, hemos activado la configuración **Loop (Bucle)** para obtener el sonido permanente de la olla hirviendo.

[Image: image]

**7.**Para convertir este Audio Source en sonido en 3D, selecciona y arrastra el control deslizante **Spatial Blend** completamente a la derecha o establece su valor en 1.

[Image: image]

**8.**Ingresa al modo Play y mueve al Character alrededor de la cocina, acércalo y aléjalo. El volumen del audio de BoilingPot ahora aumenta cuando te acercas al GameObject BoilingPot.

Marcar paso como completado

## 4. Configurar la atenuación del audio

Q&A (0)

La **atenuación**de un clip de audio define su alcance en un espacio en 3D y la intensidad a la que se desvanece a mayor distancia y se vuelve inaudible. Puedes establecer la atenuación de tus sonidos para simular las formas en que los diferentes sonidos se transportan.

**1.**Con el GameObject AudioSource seleccionado, haz clic en la flecha a la izquierda de**3D Sound Settings (Configuración de sonido en 3D)** para expandir las propiedades en el Inspector.

[Image: image]

Esta configuración controla cómo puede cambiar el volumen y el tono según las posiciones de los componentes Audio Source y Audio Listener.

**2.**Establece el parámetro **Min Distance (Distancia mínima)** en 0.5 y el parámetro **Max Distance (Distancia máxima)** en 1. Dentro del parámetro Min Distance, el componente Audio Source reproducirá el clip al volumen máximo. Fuera de esta distancia, el volumen bajará hasta la distancia máxima, donde el usuario dejará de escuchar el audio.

[Image: image]

En la vista de Escena, Min Distance y Max Distance se representan con dos esferas con contorno azul. Esto te brindará una indicación visual del lugar exacto en la Escena donde el usuario podrá escuchar el audio.

[Image: image]

**3.**Ingresa al modo Play para probar los cambios. Experimenta con la atenuación para que el sonido de BoilingPot sea muy alto o apenas audible cuando el personaje se encuentra en una distancia determinada.

Marcar paso como completado

## 5. Próximos pasos

Q&A (0)

Has agregado dos tipos de audio a una Escena en 3D: música de fondo y sonido en 3D. A continuación, busca algunos recursos de audio interesantes para agregar a este proyecto y a otros.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
