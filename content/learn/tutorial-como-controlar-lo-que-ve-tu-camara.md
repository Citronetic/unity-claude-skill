[Image: image]

# ¿Cómo controlar lo que ve tu cámara?

Tutorial

Beginner

+10XP

15 mins

1

Unity Technologies

[Image: ¿Cómo controlar lo que ve tu cámara?]Summary

En este tutorial, aprenderás a ajustar lo que aparece en la vista de la cámara con planos de recorte, máscaras de eliminación y propiedades del entorno. Al finalizar este tutorial, podrás hacer lo siguiente:

- Rellenar el fondo de la vista de la Main Camera (Cámara principal).
- Controlar el campo de visión de la Main Camera mediante el ajuste del fondo.
- Controlar la profundidad de visión de la Main Camera al configurar los planos de recorte.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Ahora sabes cómo utilizar las propiedades de proyección para controlar el modo en que una cámara renderiza una Scene (Escena). Con estas habilidades, tienes cierto control sobre lo que aparece dentro y fuera de una toma, pero puedes hacer más configuraciones para ajustar la manera en que aparecen o no los objetos dentro del campo de visión de una cámara, según sea el caso. En este tutorial, aprenderás a utilizar los **planos de recorte**, las **máscaras**de eliminación y**las propiedades del entorno**.

Marcar paso como completado

## 2. ¿Cómo definir los límites de la vista de la cámara con planos de recorte?

Q&A (0)

Los **planos de recorte** definen el alcance de lo que una cámara puede ver en una Escena. Hay razones de estilo para limitar la distancia hasta la que puede llegar la vista de una cámara, pero la edición de los planos de recorte se utiliza principalmente con fines de optimización. Entre menos tenga que renderizar la cámara en una Escena, más liviana será la carga de procesamiento para una aplicación.

Hay dos valores en el plano de recorte: cerca, que define la distancia a la que un objeto puede llegar a la cámara mientras renderiza, y lejos, que define la distancia a la que puede estar un objeto antes de que deje de ser visible en la pantalla. Una estructura blanca en la vista de Escena muestra las ubicaciones de estos planos. Para las cámaras en perspectiva, la estructura es una forma piramidal, y para las ortográficas, un rectángulo.

[Image: image]

Configuremos los planos de recorte en nuestra cámara.

**1.** En la carpeta Scenes, busca y abre **Camera_Limits_Scene.**

**2.** Cambia a la vista de Juego para poder ver a través de la Main Camera con un mayor tamaño.

**3.**  Con la Main Camera seleccionada, haz clic en el parámetro del plano de recorte **Far (Lejos)** en el Inspector para activarlo.

**4.**  Elimina uno de los 0 en el valor del plano de recorte **Far** para cambiarlo de 100 a 10. Elimina otro 0 para cambiar el valor de 10 a 1.

Observa que a medida que se reduce el valor **Far**, la cantidad de contenido visible en el fondo disminuye. En lugar de los objetos que se veían previamente, el área vacía se llena con el fondo, en este caso, el Skybox predeterminado. Según las apariencias, los objetos de fondo que existían antes dejan de existir en la Escena.

**5.**  En la vista de Juego y con la Main Camera seleccionada, haz clic izquierdo y arrastra el valor de la posición Z para mover la cámara hacia adelante.

**6.**  Continúa con el desplazamiento hacia adelante hasta que los objetos del fondo vuelvan a aparecer.

Al desplazarte por la Escena, los objetos que parecían estar ausentes aparecerán de forma repentina cuando entren en el plano de recorte de lejos de la cámara, como si se materializaran en el Skybox. Si bien este efecto puede ser interesante desde el punto de vista de estilo, en la mayoría de las circunstancias, los espectadores lo encontrarían visualmente desigual y difícil de entender. A menos que este efecto sea parte de un diseño específico, se recomienda mantener el plano de recorte de lejos en un valor alto para que el usuario no se dé cuenta cuando los objetos comiencen a renderizarse en la pantalla. El valor predeterminado de 1000 suele ser correcto. Restaura este valor ahora.

**7.**El plano de recorte de cerca funciona con un principio similar. En la vista de Escena, mueve la cámara cerca del personaje hasta que una parte de este parezca estar cortada.

[Image: image]

Si juegas muchos videojuegos, esto puede resultarte familiar. Cuando los objetos se acercan demasiado a la cámara, partes de ellos se mueven fuera del plano de recorte de cerca, lo que ofrece al usuario una vista del interior de la malla. Debido a que los objetos en este escenario tienden a ocupar una gran cantidad de la pantalla, esto puede distraer tanto como los objetos que se desvanecen de repente en el plano de recorte de lejos. En términos generales, debes evitar este problema mediante el ajuste del controlador del personaje para que los objetos nunca se acerquen tanto, pero si eso no es práctico, puedes reducir el valor del plano de recorte de cerca.

Marcar paso como completado

## 3. ¿Cómo utilizar máscaras de eliminación para mostrar u ocultar objetos?

Q&A (0)

Ahora sabes cómo ajustar los rangos mínimo y máximo que una cámara renderiza mediante los planos de recorte, pero ¿qué ocurre con los objetos que existen dentro de esos dos valores? Hay muchas situaciones en las que podrías querer controlar la visibilidad de los objetos en una Escena sin ajustar los objetos en sí. Por ejemplo, es posible que tengas varios tipos de cámaras especializadas disponibles para que el usuario las active y desactive en una simulación de búsqueda y rescate; el usuario podría activar una cámara de imagen térmica, lo que le permitiría ver objetos que de otro modo serían invisibles. Puedes ocultar y revelar objetos con la cámara mediante el uso de **máscaras de eliminación**.

**1.**  En la vista de Escena, selecciona la cápsula roja y presiona F en tu teclado para enfocarte en ella.

**2.**  En el Inspector, selecciona **Layers >** **Add Layer.**

**3.** En **User Layer 6 (Capa de usuario 6)**, ingresa «Culled» (Eliminado).

[Image: image]

Si alguna vez creaste scripts en Unity, es posible que hayas usado etiquetas para hacer referencia a los objetos que existen en la Escena donde se usa el script. Las capas tienen un propósito similar a las etiquetas en Unity, ya que permiten agregar un identificador a un objeto o conjunto de objetos. Puedes usar estos identificadores para realizar acciones específicas en cualquier cosa a la que estén asignados. Mientras que las etiquetas están diseñadas para utilizarse únicamente con scripts, el sistema Layer (Capa) está integrado en muchos componentes predeterminados dentro del Editor, incluida la cámara.

**4.**  Vuelve a seleccionar la cápsula roja en la Escena.

**5.**  Asigna la capa Culled a la cápsula roja seleccionándola en la lista Layers del Inspector.

**6.**  Selecciona la Main Camera.

**7.**  En el Inspector, busca la opción **Culling Mask (Máscara de eliminación)** de la sección **Rendering (Renderizado)**del componente Camera y deshabilita **Culled**.

En la vista de Escena, nada parece haber cambiado, pero al mirar a través de la vista de Main Camera: se verá que el objeto colocado en la capa Culled ya no aparece en la Escena. Debido a que el objeto en la Escena todavía está presente, el usuario podrá continuar interactuando con él de la misma manera, solo es invisible para la cámara.

Marcar paso como completado

## 4. ¿Cómo cambiar el tipo de fondo?

Q&A (0)

[Como se describe en **Habilidades básicas para creadores artísticos: Iluminación**](https://learn.unity.com/tutorial/673d2b19edbc2a1b66b9f986?language=es), de forma predeterminada, todas las Escenas nuevas incluyen un Skybox procedimental. Este Skybox está asociado a la luz direccional, que también se proporciona de forma predeterminada. Juntos, estos dos objetos contribuyen a la luz ambiental de la Escena. Si bien el Skybox y la iluminación están determinados por el sombreador del Skybox y las propiedades de iluminación, es la cámara la que gestiona si el Skybox es visible o no en la Escena.

Veamos:

**1.**Ajusta la cámara para que puedas ver el Skybox en la Escena.

**2.**  En el Inspector, busca la sección **Environment (Ambiente)**del componente Camera.

**3.**Selecciona la opción **Background Type (Tipo de fondo)** y cámbiala de **Skybox**a **Solid Color (Color sólido)**.

[Image: image]

Si miras la ventana de vista previa de la cámara o cambias a la vista de Juego, verás que el Skybox se ha reemplazado con un color azul liso. Esto solo ocurre en la vista de Cámara, el Skybox todavía está presente en la Escena. Los parámetros del entorno se definen por cámara, por lo que si varias cámaras estuvieran presentes en la Escena, aún se podría configurar una para renderizar el Skybox.

**4.**  Haz clic en la muestra de color para el nuevo valor de Background (Fondo) y cámbiala a verde brillante.

[Image: image]

Es importante tener en cuenta que la configuración de **Solid Color** para el **Background Type** no afecta de ninguna manera la iluminación de la Escena, a diferencia de **Skybox**. **Solid Color** solo hace que la cámara detenga el renderizado del Skybox y lo reemplaza con el color de tu elección. Cualquier modificación que se realice en el Skybox seguirá siendo visible en el entorno, incluso cuando el Skybox no sea visible en la cámara.

Marcar paso como completado

## 5. Próximos pasos

Q&A (0)

En este tutorial, aprendiste a controlar lo que la Main Camera puede ver en la Escena. En combinación con lo que aprendiste sobre los tipos de proyección, ahora tienes todo lo que necesitas para configurar tomas básicas en tu proyecto.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
