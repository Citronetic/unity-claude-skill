[Image: image]

# ¿Cómo seleccionar el tipo de proyección de tu cámara?

Tutorial

Beginner

+10XP

20 mins

1

Unity Technologies

[Image: ¿Cómo seleccionar el tipo de proyección de tu cámara?]Summary

En este tutorial, aprenderás sobre la configuración de la proyección: los parámetros que controlan la manera en que la cámara renderiza lo que aparece dentro de su fotograma. Al finalizar este tutorial, podrás hacer lo siguiente:

- Identificar casos de uso para una vista de cámara en perspectiva en una Scene (Escena) en 2D o 3D.
- Identificar casos de uso para una vista de cámara ortográfica en una Escena en 2D o 3D.
- Capturar la vista deseada de la Escena mediante el control de la posición y la rotación de la cámara principal.
- Configurar una cámara para un punto de vista específico o predeterminado.
- Configurar una vista de cámara en perspectiva en una Escena en 3D.
- Configurar una vista de cámara ortográfica en una Escena en 3D.

Resources

- [Game accessibility guidelines](https://docs.unity3d.com/6000.0/Documentation/Manual/class-Camera.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953844344)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

A primera vista, puede parecer que las cámaras de Unity tienen muchos componentes técnicos que requieren configuración, pero solo necesitas trabajar con algunas configuraciones para crear tomas dinámicas. En este tutorial, aprenderás sobre la configuración de la **proyección**: los parámetros que controlan la manera en que la cámara renderiza lo que aparece dentro de su fotograma.

Marcar paso como completado

## 2. ¿Cómo ajustar la cámara en el Editor?

Q&A (0)

Al igual que con cualquier otro objeto en la vista de Escena, puedes mover el objeto Camera (Cámara) con la herramienta **Move (Mover)**y **Rotate (Girar)**. Sin embargo, hacerlo de esta manera puede ser lento e impreciso. Más bien, puedes utilizar la cámara de la Escena y la función **Move To View (Mover a la vista)** para obtener el aspecto que deseas.

**1.**En la carpeta Scenes, busca y abre **Camera_Project_Scene.**

**2.**  Localiza la malla **PlayerArmature**en la Escena o, alternativamente, selecciónala en la Hierarchy (Jerarquía) y, con el cursor en la vista de Escena, presiona la tecla F en tu teclado para enfocarte en el personaje.

**3.** Enmarca al personaje PlayerArmature en la Escena de la manera que prefieras.

**4.**  Selecciona la Main Camera o Cámara principal en la Hierarchy y presiona **Ctrl**+**Shift**+**F** (Windows) o **Cmd**+**Shift**+**F** (macOS) en tu teclado, o ve a **GameObject**> **Align** **With** **View.**

[Image: image]

La Main Camera se ajustará a la misma posición y rotación que la vista de Escena actual. Puedes utilizar esta técnica con cualquier GameObject, pero es de especial utilidad para encuadrar las tomas.

Marcar paso como completado

## 3. ¿Cómo explorar las cualidades de una cámara en perspectiva?

Q&A (0)

Las cámaras en Unity renderizan las Escenas según uno de los dos tipos de proyección: **en perspectiva** y **ortográfica**. Cuando se crea un proyecto en 3D en Unity, todas las proyecciones de la cámara están configuradas en perspectiva de forma predeterminada.

[Image: image]

Como su nombre lo indica, una cámara en perspectiva representa todo en la Escena con profundidad. Simula la forma típica en que experimentamos el mundo que nos rodea: los objetos que están más lejos de la cámara parecen más pequeños y los más cercanos parecen más grandes. La mayoría de las experiencias interactivas en 3D, e incluso algunas en 2D, utilizan este tipo de proyección.

Marcar paso como completado

## 4. ¿Cómo configurar el campo de visión?

Q&A (0)

El **campo de visión** **(Field of view, FOV)** representa el ángulo de visión de la cámara o la parte de la Escena que es visible en la cámara a la vez. Este valor se representa en grados y, de forma predeterminada, está establecido en una medida del eje vertical de 60 grados.

**1.** Cambia a la vista de Juego para ver los siguientes pasos. Verás que el personaje jugador está centrado en la vista a cierta distancia de la cámara.

**2.** Selecciona la Main Camera en la Hierarchy y, en la ventana Inspector, establece **Field of View** en 30 grados.

Observa que la cámara parece más ampliada. La cantidad de entorno visible en la pantalla se reduce significativamente y el personaje está parcialmente cortado. Esto es más o menos equivalente a mover la cámara una unidad completa de Unity más cerca del personaje en la Escena. Sin embargo, no es lo mismo que mover físicamente la cámara.

[Image: image]

Compara la imagen anterior con la siguiente. A la izquierda, en ambas imágenes, la cámara está en la ubicación original y tiene un FOV de 30 grados. A continuación, la imagen de la derecha usa un FOV de 60 grados, pero la cámara está más cerca del personaje para simular la misma vista. Si bien los personajes pueden estar en posiciones similares, el FOV más bajo limita de forma significativa la visibilidad de los objetos en el fondo.

[Image: image]

El campo de visión de una cámara es en realidad una consideración importante para la accesibilidad. Las experiencias interactivas con un campo de visión bajo pueden hacer que los usuarios se sientan mareados. Idealmente, el valor del FOV debería ser algo que los usuarios puedan configurar por sí mismos, pero si la configuración personalizada no es posible para tu aplicación, asegúrate de establecer el FOV para que cumpla con [las pautas de accesibilidad](http://gameaccessibilityguidelines.com/if-the-game-uses-field-of-view-3d-engine-only-set-an-appropriate-default-for-the-expected-viewing-environment/).

Para los juegos que se jugarán en un televisor o dispositivo donde la distancia entre el usuario y la pantalla es de al menos un metro, el campo de visión de la cámara debe estar configurado en al menos 60 grados, lo que significa que puedes dejarla en el valor predeterminado que establece Unity. Sin embargo, si la experiencia se reproduce en un monitor u otro dispositivo donde la pantalla está mucho más cerca de los ojos del usuario, el FOV debería ser mucho más alto, con un mínimo de 90 grados.

Exploremos el parámetro**Field of View** con más profundidad:

**3.**  Cambia **Field of View** a 120 grados.

**4.**  Abre la vista de Juego para acceder a una versión más grande de la vista de la Cámara.

**5.**  Con la Main Camera seleccionada, haz clic izquierdo y arrastra sobre el valor de rotación de Y para girar la cámara hacia la izquierda y hacia la derecha mientras sigues en la vista de Juego.

Observa que cuanto más ancho se vuelve el campo de visión, más deformación verás en la vista de la Cámara a medida que se mueve. Incluso en las tomas estáticas, la Escena parecerá estirada de forma poco natural. Puedes utilizar esta distorsión para conseguir determinados efectos artísticos, pero ten en cuenta que los campos de visión más allá de los 90 grados pueden producir la misma sensación de mareo que un campo de visión más angosto.

Marcar paso como completado

## 5. ¿Cómo explorar las cualidades de una cámara ortográfica?

Q&A (0)

Las cámaras **ortográficas**, también conocidas como cámaras 2D, renderizan solo los valores X y Y de una Escena, sin tener en cuenta el eje Z o la profundidad.

**1.**Con la Main Camera seleccionada, establece el Projection type (Tipo de proyección) en **Orthographic (Ortográfica)** en el Inspector.

Puede parecer que la Escena cambia significativamente, ya que todo se ajusta para parecer que está en el mismo plano.

[Image: image]

Exploremos cómo una cámara ortográfica cambia la navegación:

**2.**  En el modo Play (Reproducir), usa las teclas WASD para hacer que el personaje jugador se aleje de la cámara.

Ten en cuenta que no importa qué tan cerca o lejos de la cámara llegue el personaje jugador, su tamaño en la pantalla nunca cambia, lo cual se debe al hecho de que el eje Z no se representa. Por este motivo, las cámaras ortográficas son útiles en experiencias como los juegos de desplazamiento lateral, donde el tercer eje se ignora por completo.

Marcar paso como completado

## 6. ¿Cómo ajustar el tamaño de la cámara?

Q&A (0)

En lugar de un campo de visión, las cámaras ortográficas tienen un valor de tamaño que se puede ajustar.

**1.** Sal del modo Play y regresa a la vista de Escena.

**2.**Selecciona la Main Camera en la Hierarchy y, en la ventana Inspector, ajusta el valor **Size (Tamaño)**.

En la ventana de vista previa de la cámara, parece que la cámara se acerca y se aleja, pero en la vista de Escena puedes ver que todo el tamaño de la cámara está cambiando. Las cámaras ortográficas solo pueden ajustar el tamaño de forma universal: no puedes cambiar el tamaño de un eje de forma independiente.

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

Marcar paso como completado

## 7. Adicional: ¿Cómo hacer que la Escena sea más dramática?

Q&A (0)

Aplica lo que aprendiste sobre los tipos de proyección para crear dos nuevos aspectos dramáticos para esta Escena.

- Selecciona una sección de la Escena que será tu área de enfoque.
- Crea dos nuevas cámaras o toma capturas de pantalla de la primera Escena antes de pasar a la siguiente.
- Crea dos tomas que se vean drásticamente diferentes entre sí mediante la modificación de las propiedades de proyección.

Marcar paso como completado

## 8. Próximos pasos

Q&A (0)

En este tutorial, aprendiste sobre las propiedades de proyección de las cámaras de Unity. La determinación de estos valores es, a menudo, el primer paso en el proceso de diseño de una toma de cámara. En el siguiente tutorial, aprenderás a controlar la visibilidad de los objetos que aparecen dentro del campo de visión de una cámara.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
