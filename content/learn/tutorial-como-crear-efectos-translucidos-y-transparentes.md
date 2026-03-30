[Image: image]

# ¿Cómo crear efectos translúcidos y transparentes?

Tutorial

Beginner

+10XP

20 mins

1

(13)

Unity Technologies

[Image: ¿Cómo crear efectos translúcidos y transparentes?]SummarySkills

La luz no solo rebota en los objetos, a veces pasa a través de ellos. En este tutorial, usarás la transparencia para crear un objeto translúcido que se vea como el vidrio y la técnica del recorte alfa para crear hojas de aspecto realista a partir de mallas rectangulares simples.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Aplicar más mapas que se puedan configurar en el sombreador iluminado o de URP.
- Aplicar el recorte alfa en un material.
- Aplicar el tipo de superficie transparente a un material.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Entre las muchas cosas maravillosas que puede hacer un sombreador se encuentra el renderizado de lo que sea que esté del otro lado de una malla, junto con la malla misma o incluso en lugar de ella. Un sombreador puede crear la apariencia de vidrio u otras sustancias transparentes al agregar una reflexión especular y un poco de tinte a una malla que, de otro modo, sería transparente.

En este tutorial, aprenderás a agregar efectos transparentes y translúcidos a tus materiales. Para hacer esto, agregarás un frasco de vidrio con algo de vegetación a la galería. Utilizarás un proceso llamado **recorte alfa** para crear hojas detalladas a partir de mallas muy simples.

Marcar paso como completado

## 2. Transparencia con el canal alfa

Q&A (0)

La transparencia se controla con el canal alfa del Base Map o Mapa base (la A en RGBA). Los valores bajos hacen que el color del Base Map sea menos visible y los valores altos lo hacen más visible. Puedes hacer que una malla sea totalmente invisible al establecer los valores del canal alfa en cero, o puedes crear efectos translúcidos al establecer los valores alfa en el rango medio.

Marcar paso como completado

## 3. ¿Cómo crear un material de vidrio?

Q&A (0)

Con lo que sabes sobre la reflectancia especular y difusa, ¿cómo describirías un objeto translúcido, como un frasco de vidrio? ¿Cuál es su reflexión especular? ¿Cuál es su reflexión difusa?

Un panel de vidrio completamente claro y plano no tiene una reflexión difusa: toda la luz pasa a través de él y ningún color se refleja en tus ojos. Sin embargo, tiene una reflexión especular: la luz brilla en su superficie lisa. En el mundo real, el vidrio casi nunca es totalmente transparente; tiene un tinte y algunas imperfecciones que crean una ligera reflexión difusa.

En el mundo real, las sustancias translúcidas refractan la luz, lo que significa que cambian su dirección. La refracción es un efecto de sombreador avanzado que no intentaremos aquí; sin embargo, podemos crear un objeto de vidrio translúcido que se vea bastante convincente.

Comencemos con un objeto simple y transformémoslo en vidrio.

**1.**  En la ventana Project, abre la carpeta **Materials**y crea un nuevo material. Asígnale el nombre «Glass Jar».

**2.**  En la vista de Escena, en tu mesa de trabajo, busca un frasco blanco con un palo dentro. Parece que el palo tiene pequeños trozos de papel. Este es nuestro GameObject **PlantInJar**, que tiene bastantes objetos secundarios. Selecciona el objeto secundario **Jar (Frasco)**.

**3.**  Aplica tu nuevo material **Glass Jar (Frasco de vidrio)** al objeto secundario **Jar**.

**4.**  En el Inspector, en el material del Glass Jar, busca las **Surface Options (Opciones de superficie)** en la parte superior de la sección Material, y la propiedad **Surface Type (Tipo de superficie)**. Cambia este valor de **Opaque (Opaco)**a **Transparent (Transparente)**.

**5.**  Desactiva la propiedad **Preserve Specular (Conservar especular)** para garantizar reflejos y destellos más realistas. Dado que el vidrio es transparente, la interacción dinámica con la luz debería cambiar naturalmente con las irregularidades y transparencias, en lugar de mostrar siempre reflejos fijos e intensos.

La mitad delantera del frasco desaparece. Parece recortada. Esto ocurre debido a la configuración **Render Face (Renderizar cara)**. **Render Face** generalmente está configurada en **Front (Frontal)**porque el sombreador solo tiene que renderizar la superficie de la malla que mira hacia el espectador. Sin embargo, con los objetos transparentes, el sombreador debe renderizar tanto la frontal como la posterior.

**6.**  Configura **Render Face** en **Both (Ambos)**.

El frasco todavía se ve extraño porque le estamos dando instrucciones contrarias: El **Surface Type**es Transparent, pero el canal alfa aún tiene los valores predeterminados que indican no transparencia.

**7.**  Para ajustar los valores del canal alfa, elige el selector de color para el **Base Map**. De forma predeterminada, el canal**A** está configurado en el valor más alto, 255, que no permite transparencia. Usa el deslizador o ingresa un número menor que 255 para configurar la transparencia en un nivel que haga que el frasco se vea como vidrio. Ten cuidado: en 0, se vuelve totalmente invisible cuando la propiedad **Preserve Specular Lighting (Conservar iluminación especular)** está desactivada.

**8.**  Mientras estás en el selector de color, puedes cambiar el color base a un tinte azul o azul verdoso para simular un frasco de vidrio real.

**9.** ¿Qué falta? ¡Un reflejo especular! Configura las propiedades **Smoothness (Suavidad)** y **Metallic (Metálico)**con los valores que prefieras. Dale un poco de **metalizado**, aunque no sea un metal, para mejorar la reflexión especular.

Has creado vidrio. Tu frasco debería verse como el siguiente.

[Image: image]

A continuación, utilizarás la transparencia en una técnica diferente que te permite agregar detalles de bordes a una malla.

Marcar paso como completado

## 4. ¿Cómo agregar detalles con recorte alfa?

Q&A (0)

Considera un objeto como el siguiente. Es un objeto simple que un artista de modelado podría crear al hacer una malla con forma de hoja.

[Image: image]

Sin embargo, para un objeto que será pequeño en la Escena y que incluso se podría usar miles de veces (en un árbol, por ejemplo), la malla de esta hoja requeriría mucha potencia de cómputo para renderizarse.

En lugar de modelar mallas de elementos como estos, los artistas usan el **recorte alfa** en sus texturas para hacer que parte de una malla simple sea invisible. El recorte alfa es una forma mucho más eficiente de crear objetos detallados: es más fácil de crear y más fácil para la computadora procesar en el tiempo de ejecución.

Esos pequeños trozos de papel en el palo se van a convertir en hojas. Aplica el recorte alfa al material de estas hojas:

**1.**  En la ventana Project, abre la carpeta **Materials**y crea un nuevo material. Asígnale el nombre «Leaf».

**2.**  En la Hierarchy, expande el GameObject **PlantInJar** y busca los GameObjects secundarios que tienen «Leaf» en sus nombres. Selecciona todas las hojas y el **PlantStem (Tallo de la planta)**.

**3.**  En el Inspector, en el componente Mesh Renderer (Renderizador de malla), puedes usar el ícono del círculo debajo de **Materials (Materiales)**para seleccionar un material para todos los GameObjects seleccionados. Selecciona **Leaf**.

Ahora, solo necesitas tener una hoja seleccionada para poder editar este material en todas las hojas.

**4.**  Observa la planta desde todos los ángulos. Las hojas se ven desde arriba, pero no desde abajo. Esto ocurre porque estas mallas son de un solo lado: no hay una malla separada en la parte posterior del objeto (como en un cubo, por ejemplo).

**5.**  En el Inspector, en el material de Leaf, cambia el **Render Face** a **Both** para que el sombreador renderice ambos lados de cada malla.

**6.**  En la ventana Project, busca el Texture (Textura) **Plant_Albedo**. Aplica esta Texture como **Base Map** en el material de Leaf.

Ahora el tallo es sólido. Mira de cerca la textura y verás una raya verde en el lado izquierdo que está asignada solo al objeto **PlantStem**, mientras que el resto de la textura está asignada a los objetos secundarios de **Leaf**. El mapeo de varios objetos en un Texture es una técnica que utilizan los artistas para reducir el número de archivos y el tamaño general de un proyecto.

Ahora las hojas se ven como impresiones de hojas en papel. Puedes arreglar eso con el recorte alfa.

**7.**  En el Inspector, examina el canal alfa del Texture **Plant_Albedo**. Es un recorte de la hoja. Utilizaremos este canal alfa para «recortar» la hoja en este material.

**8.**  En la vista de Escena, selecciona el material Leaf (Hoja) y busca la sección **Surface Options** en la parte superior del Inspector de materiales. Luego, habilita **Alpha Clipping (Recorte alfa)**.

**9.**  Aparece el deslizador **Threshold (Límite)**. Mientras examinas una hoja de cerca, mueve el deslizador. En algún valor límite, el «papel» alrededor de las hojas desaparecerá.

**10.** Ajusta este valor para que los bordes de las hojas se vean bien. Si el Threshold es demasiado bajo, entonces los píxeles en los valores más bajos del canal alfa serán visibles y aparecerá un borde blanco. Si es demasiado alto, algunos de los valores más altos del canal alfa serán invisibles y cortarán los bordes demasiado cerca, lo que causará algunos agujeros.

**11.** Quizás notes que el lado inferior de las hojas se ve más claro en comparación con el lado superior. Para corregir esto, reduce el valor de la propiedad **Smoothness** a un valor cercano a 0.

**Nota:** Este problema sucede porque, en el motor de renderizado de Unity, las normales de geometría (que definen la forma en que la luz interactúa con una superficie) apuntan en una única dirección: hacia el lado superior. Si renderizas ambos lados, el de abajo muestra los reflejos especulares de manera diferente porque sus normales están invertidas. Cuando se reduce el valor de **Smoothness**, disminuye la intensidad del reflejo de la luz en el lado inferior, lo que corrige la discrepancia visual.

Esta pieza está completa. Debe tener un aspecto similar al de la siguiente imagen.

[Image: image]

Has utilizado los efectos de transparencia de dos maneras: al hacer que todo el objeto del frasco sea transparente con el Surface Type Transparent y al hacer que las hojas de la planta sean parcialmente transparentes mediante el recorte alfa. ¡Bien hecho!

Marcar paso como completado

## 5. Explora los efectos transparentes

Q&A (0)

¿Qué más puedes hacer con estas nuevas técnicas para tu obra de arte final? Explora estas técnicas por tu cuenta:

#### Más recorte alfa

La textura **ChainFence_Albedo** en la carpeta **Textures >** **Tiled Textures**es otra textura diseñada para el recorte alfa. Experimenta con esta textura o busca otras con valores 0 (negro) en el canal alfa para recortar partes de una malla.

#### Grados de transparencia

En un objeto transparente, como el frasco de vidrio, la variación en el canal alfa del Base Map base puede crear efectos translúcidos. Intenta usar una textura de Base Map con valores en el canal alfa que no sean todos en negro o blanco, como **Plastic_Albedo** en la carpeta **Texturas >** **Tiled Textures**, en un objeto con el **Surface Type** **Transparent**. Busca otras texturas con variaciones en el canal alfa y experimenta.

#### Crea tus propios efectos transparentes

Si tienes una herramienta de edición de imágenes, edita el canal alfa de un archivo de textura y usa el recorte alfa y la transparencia para crear algunos objetos detallados a partir de primitivos u objetos en tu mesa de trabajo.

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

Hay más para explorar al usar texturas en los materiales. A continuación, agregarás textura física y características a las mallas sin modificar la malla, mediante el mapeo de protuberancias.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
