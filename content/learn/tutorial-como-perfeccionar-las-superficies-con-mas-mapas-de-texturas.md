[Image: image]

# ¿Cómo perfeccionar las superficies con más mapas de texturas?

Tutorial

Beginner

+10XP

25 mins

1

(14)

Unity Technologies

[Image: ¿Cómo perfeccionar las superficies con más mapas de texturas?]Summary

Una vez que te familiarices con las propiedades básicas del sombreador iluminado o de URP, sabrás cómo utilizar muchos sombreadores, materiales y texturas que encontrarás como creador en 3D. Este tutorial completará tu educación sobre este sombreador.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Explicar el uso de Detail Inputs (Entradas de detalles) para el sombreador iluminado o de URP.
- Explicar el color del High Dynamic Range (Alto rango dinámico).

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Ahora tienes todas las habilidades que necesitas para trabajar con texturas en Unity: puedes identificarlas y aplicarlas a tus materiales. Sin embargo, hay algunos tipos de texturas más para que descubras.

En este tutorial, te mostraremos estos tipos adicionales de texturas y te dejaremos trabajar por tu cuenta para aplicarlas a las piezas de la galería. Luego, pondrás a prueba tus conocimientos con un desafío creativo.

Marcar paso como completado

## 2. ¿Cómo intensificar las sombras con mapas de oclusión?

Q&A (0)

**La oclusión**, en los gráficos 3D, es el bloqueo de la luz por parte de un objeto. Una grieta en una acera y la línea de sombra oscura y fina entre los dedos de un puño cerrado son ejemplos de oclusión.

Incluso en PBR, la luz ambiental puede reflejarse de formas extrañas donde se debe ocluir. Un **mapa de oclusión** agrega sombras a estas áreas ocluidas.

Los mapas de oclusión se generan junto con la mayoría de los modelos en el software de modelado 3D. Los efectos a veces son sutiles, pero hacen que la luz en las superficies sea más realista y pueden mejorar las sombras detalladas de formas que los mapas base y el mapeo de protuberancias no pueden.

Para el modelo de Ellen, el mapa de oclusión se muestra en la Textures Exhibit (Exhibición de texturas). Es un mapa en escala de grises (un solo canal) que indica simplemente la luz y las sombras, y es el segundo desde la derecha.

Para ver el efecto de un mapa de oclusión, haz lo siguiente:

**1.**  En la Hierarchy (Jerarquía), busca el GameObject **Ellen**y selecciona el objeto secundario **Ellen_Body**. Haz doble clic en él en la Hierarchy para acercarlo.

**2.**  Orienta tu vista para ver de cerca el cuello de Ellen en la parte frontal del modelo.

**3.**  En el Inspector, busca el material **Ellen_Body** y expande Material.

**4.**  Ajusta el **Occlusion Map (Mapa de oclusión)** de 1 a 0 y regresa para ver el efecto del mapa de oclusión.

[Image: image]

Sin el mapa de oclusión, no hay sombra en ninguno de los lados del cuello de Ellen, lo que hace que el área se vea plana. De hecho, sin el mapa de oclusión, parece que la luz proviene de detrás de su cuello a corta distancia. Con las sombras adicionales, el cuello se ve más redondo y la sombra da la apariencia de que el cuello y el chaleco son dos objetos diferentes (aunque en este modelo son uno).

Ahora es tu turno de aplicar un mapa de oclusión. En tu mesa de trabajo, regresa a tu hervidor. Abre la carpeta **Texturas >** **Kettle**e intenta identificar el mapa de oclusión. Aplícalo al hervidor y compara el efecto con y sin el mapa de oclusión.

Marcar paso como completado

## 3. ¿Cómo agregar detalles con mapas de microsuperficies?

Q&A (0)

Observa muy de cerca un objeto del mundo real que tenga una superficie lisa, como el vidrio de tu smartphone, cubierta de huellas dactilares, o tu taza de café favorita que esté rayada y gastada. Si deseas modelar estos elementos e incluir detalles como las huellas dactilares o los rasguños, puedes utilizar el **mapeo de microsuperficies** para agregar un nivel de detalle que, de otra manera, no se captura en tu mapa base o en el mapa de normales.

Investiga un mapa de microsuperficies en Ellen de la siguiente manera:

**1.**  Acerca el rostro de Ellen.

**2.**  En la Hierarchy, selecciona el objeto **Ellen >** **Ellen_Body**.

**3.**  En el Inspector, abre el Inspector del Material **Ellen_Head**.

**4.**  En la sección **Detail Inputs** (debajo de la sección **Surface Inputs o Entradas de superficies** donde has estado trabajando), busca el **Normal Map o Mapa de normales**. Ajusta el deslizador para ver el efecto de este mapa en la piel de Ellen. Esta es una textura en mosaico que funciona sobre el mapa de normales regular.

**5.**  Compara los dos mapas de normales que se usan en las secciones **Surface Inputs** y **Detail Inputs** del material, y verás cómo estos dos mapas pueden trabajar juntos para crear un efecto muy detallado. Para hacer esto, selecciona las imágenes en miniatura en el Inspector del Material para encontrar los archivos de texturas en la ventana Project.

Hay dos texturas adicionales en la sección Detail Inputs de los materiales del sombreador iluminado o de URP:

- Un **mapa base de Detail Inputs** puede agregar color detallado, como los hilos en la tela.
- La **Mask (Máscara)**es un mapa de canal alfa que protege áreas específicas de los mapas de microsuperficies del mapa base y del mapa de normales.

[Image: image]Marcar paso como completado

## 4. ¿Cómo iluminar superficies con mapas de emisión?

Q&A (0)

Los materiales **emisores**parecen emitir su propia luz. Puedes utilizar un **mapa de emisión** para especificar las áreas donde tu superficie se iluminará.

Observa el mapa de emisión de Ellen: es el último que aparece en la Textures Exhibit de nuestra galería. Es mayormente negro, pero fíjate bien y verás tres puntos verdes. Los puntos en este mapa se alinean con las luces en la parte posterior del cuello de Ellen y la parte superior de su brazo robótico.

Para ver cómo se aplica, ve a la sección **Surface Inputs** del material Ellen_Body. El color del mapa afecta el color de la luz. Además, el selector de color **HDR**proporciona a las áreas que no son negras en el mapa una luz de color brillante.

HDR son las iniciales en inglés de **alto rango dinámico**. Los colores de HDR tienen una luminosidad adicional fuera del rango normal de colores de la pantalla. Son útiles para objetos brillantes y reflexiones especulares intensas. El selector de color de HDR tiene un deslizador de intensidad para controlar la cantidad de luminosidad adicional que se agrega al color.

[Image: image]

Usarás un mapa de emisión en el siguiente tutorial, **¿Cómo comenzar a usar el gráfico sombreador?**

Marcar paso como completado

## 5. Próximos pasos

Q&A (0)

Este tutorial fue un recorrido rápido por los mapas de texturas que puedes usar para perfeccionar tus materiales y agregar detalles interesantes. Ahora conoces todas las propiedades (excepto la sección **Advanced o Avanzada**) de los materiales para el sombreador iluminado o de URP.

A continuación, aplicarás tu conocimiento integral de los Sombreadores y materiales para crear tu propio sombreador en el Shader Graph (Sombreador gráfico).

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
