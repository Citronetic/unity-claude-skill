[Image: image]

# ¿Cómo agregar música de fondo?

Tutorial

foundational

+10XP

15 mins

5

(527)

Unity Technologies

[Image: ¿Cómo agregar música de fondo?]Summary

En este tutorial, empezarás a usar audio al aprender sobre el componente Audio Source y al agregar audio a una Escena.

En este tutorial, podrás realizar lo siguiente:

- Agregar un componente Audio Source a un GameObject.
- Agregar un clip de audio a un Audio Source.
- Implementar música de fondo a una Escena en 3D.

Resources

- [Foundations of Audio](https://assetstore.unity.com/packages/essentials/tutorial-projects/foundations-of-audio-183075)

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

En este tutorial, explorarás las funciones de audio de Unity. El audio es esencial para que los entornos simulados parezcan reales.

En desafíos anteriores, viste cómo Unity ayuda a simular los modos en que los objetos interactúan entre sí. Unity también simula la forma en que las ondas de sonido interactúan en un entorno físico. Los sonidos audibles cambian según la distancia entre el receptor y la fuente e, incluso, según las características físicas de los materiales que se encuentran entre la fuente y el receptor.

Este tutorial de introducción te ayudará a explorar cómo Unity mejora el realismo a través del audio.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

Para configurar tu proyecto de Unity:

**1.**  Abre el **Unity Hub**.

**2.** [Crea un proyecto nuevo de Unity](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) usando el **modelo de URP**.

**3.**  Ve a los recursos [Primeros pasos en audio (en inglés)](https://assetstore.unity.com/packages/essentials/tutorial-projects/foundations-of-audio-183075) en la Tienda de recursos de Unity.

**4.** [Descarga los recursos e impórtalos a tu proyecto de Unity.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)

¡Eso es todo! Ahora que tienes todo listo, vamos a abrir y probar la Escena.

Marcar paso como completado

## 3. ¿Cómo abrir y probar la Escena de ejemplo?

Q&A (0)

**1.**Abre la carpeta Scenes (Escenas) en la ventana Project y haz doble clic en **EssentialsAudioScene**para abrir la Escena de ejemplo.

[Image: image]

**2.**Haz clic en el botón **Play (Reproducir)** para probar la Escena.

**3.**Arrastra el *mouse*, sin hacer clic, para observar la Escena. Usa las teclas WASD (W adelante, S atrás, A izquierda, D derecha) para mover la vista por la Escena.

**4.**Haz clic en **Play** para detener la prueba de la Escena de ejemplo.

Marcar paso como completado

## 4. ¿Cómo crear un GameObject vacío?

Q&A (0)

Usarás un GameObject vacío como marcador y contenedor para el audio de fondo. Para configurarlo harás lo siguiente:

**1.**Haz clic derecho en Hierarchy y selecciona **Create Empty (Crear vacío)**.

[Image: image]

**2.**Asígnale el nombre «Music» a este GameObject en la ventana Inspector.

[Image: image]

**3.**  En la ventana Inspector, restablece la posición seleccionando los tres puntos a la derecha y, luego, seleccionando **Reset Position (Restablecer posición)**. De este modo, se establece la posición del centro del GameObject en 0,0,0 y esto lo alinea en el centro de tu Escena.

[Image: image][Image: image]Marcar paso como completado

## 5. ¿Cómo agregar audio al GameObject vacío?

Q&A (0)

Para que un GameObject reproduzca audio en tu Escena, tienes que agregar un **componente Audio Source:**

**1.**En la ventana Hierarchy, selecciona el GameObject Music.

**2.**Selecciona el botón **Add Component (Agregar componente)** en la ventana Inspector.

[Image: image]

**3.**Usa la barra de búsqueda para encontrar un componente **Audio Source** y selecciónalo.

[Image: image]

**4.**En el componente Audio Source en la ventana Inspector, examina las propiedades disponibles.

[Image: image]

Para que el Audio Source reproduzca el sonido, tendrás que agregar un **clip de audio**.

**5.**En la ventana Project, abre la carpeta Audio para ver los clips de audio que incluye este proyecto de ejemplo. Selecciona **Music (Música).**

[Image: image]

**6.**En la ventana Inspector, verás Import Settings (Configuración de importación) para el clip de audio Music. En la parte inferior de la ventana Inspector, verás una vista previa de la forma de onda del clip de audio seleccionado. Si no la ves, haz clic en el encabezado Preview (Vista previa) que está en la parte inferior y arrástralo hacia arriba para abrir el panel de vista previa.

[Image: image]

**7.**Haz clic en el botón **Play**para obtener una vista previa del clip de audio Music. Puedes hacer clic en la forma de onda para adelantar la reproducción. También puedes hacer clic y arrastrar para mover el cabezal de reproducción por la forma de onda. Haz clic en el botón Play de nuevo cuando quieras finalizar la vista previa.

[Image: image]

**8.**En la ventana Hierarchy, selecciona el GameObject Music.

**9.**En la ventana Inspector, haz clic en el ícono del círculo a la derecha de Audio Clip.

[Image: image]

**10.**Se abrirá la ventana Select (Seleccionar) y mostrará todos los clips de audio disponibles en este Project. Selecciona el clip de audio Music para asignarlo como clip de audio para el Audio Source Music.

[Image: image]

**11.**Haz clic en el botón **Play**para probar. Si no escuchas música, asegúrate de que el botón Mute Audio (Silenciar audio) de la vista de Juego no esté activado. Haz clic en el botón **Mute Audio** para intercambiar entre el modo de audio silenciado y activado en el modo Play.

**Nota:**Si sigues sin poder escuchar música, asegúrate de que la configuración **Play on Awake (Reproducir está activo)** en el componente Audio Source esté activada.

[Image: image]Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

Has incorporado audio a una Escena, pero puedes hacer mucho más con la función de audio. En el próximo tutorial, aprenderás sobre el rol del audio en un proyecto en 3D en tiempo real y crearás sonido realista en un entorno en 3D.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
