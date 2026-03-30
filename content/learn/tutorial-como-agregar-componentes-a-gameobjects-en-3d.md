[Image: image]

# ¿Cómo agregar componentes a GameObjects en 3D?

Tutorial

foundational

+10XP

25 mins

46

(939)

Unity Technologies

[Image: ¿Cómo agregar componentes a GameObjects en 3D?]SummarySkills

En este tutorial, verás cómo los componentes agregan funcionalidad a los GameObjects. El componente que verás en acción aquí, RigidBody, le permite a un GameObject comportarse como un objeto físico, en lugar de flotar en el espacio. En este tutorial, podrás realizar lo siguiente:

- Posicionar la Main Camera (Cámara principal) para mostrar la acción en la vista de Juego.
- Explorar la relación entre GameObjects y componentes.
- Identificar componentes específicos en la ventana Inspector.
- Agregar propiedades físicas a un GameObject en 3D aplicando el componente RigidBody y configurando sus propiedades.
- Ingresar al modo Play para obtener una vista previa de la Escena en la vista de Juego.
- Experimentar con la física en 3D en Unity.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Los **componentes**agregan comportamientos y funcionalidad a un GameObject. Has usado el componente Transform ¡y eso es solo el comienzo! En este tutorial, agregarás otro componente, RigidBody, que otorga a un GameObject propiedades físicas para que interactúe con la gravedad y otros GameObjects. También posicionarás la Main Camera para ver cómo un GameObject responde a la gravedad en 3D.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

**1.**En la ventana Hierarchy, crea un nuevo GameObject Sphere.

[Image: image]

**2.**Mueve la esfera al espacio adentro del monumento para que quede suspendida en el aire sobre los escalones. Puedes usar las herramientas Transform, el componente Transform en la ventana Inspector, o los dos.

[Image: image]Marcar paso como completado

## 3. ¿Cómo posicionar la Main Camera?

Q&A (0)

En cada Escena nueva, hay una **cámara,**como la que se muestra a continuación.

[Image: image]

Esta cámara, que se llama Main Camera en Hierarchy, captura tu Escena y la muestra al jugador como aparece en la **vista de Juego**. Mientras que la vista de Escena es donde creas las Escenas, la vista de Juego es una vista previa de cómo ve el juego el jugador.

La cámara en tu Escena es un GameObject como cualquier otro. Al seleccionarla, verás su componente Transform en la ventana Inspector. Puedes modificar esta configuración como lo harías con cualquier otro GameObject. Ten en cuenta que si modificas el tamaño de una cámara, no notarás ningún efecto.

Al seleccionar una cámara, verás los contornos de una forma piramidal que se llama **campo de visión**. El campo de visión te muestra qué parte de tu Escena enfoca la cámara. La cámara no captura lo que queda afuera del campo de visión.

[Image: image]

Cuando una cámara está seleccionada **(1)**, puedes extender el componente Camera en la ventana Inspector **(2)**para abrir una ventana **Camera Preview (Vista previa de la cámara)** **(3)** que te muestra lo que la cámara captura en la Escena.

[Image: image]

Mueve la cámara a una posición donde pueda «ver» la esfera y los escalones debajo de ella.

**Consejo:** También puedes mover la cámara para alinearla con tu vista de Escena actual. Para hacerlo, selecciónala en la ventana Hierarchy y luego presiona Ctrl + Shift + F (teclado en inglés).

Haz clic en el botón Play para ejecutar el juego. Ten en cuenta que no ocurre nada en este momento. Esto se debe a que todavía tienes que aplicar un componente a la esfera para indicarle cómo interactuar con la física del juego. En este caso, necesitas que sea sólida para que reaccione a la gravedad.

Marcar paso como completado

## 4. ¿Cómo volver sólida la esfera?

Q&A (0)

¿Recuerdas cuando creaste una esfera que estaba adentro de un cubo? Los objetos del mundo físico no están adentro de otros objetos de ese modo, pero, en una Escena de Unity, por defecto, los GameObjects no tienen masa ni responden a la gravedad. Para que un GameObject se comporte como un objeto físico del mundo real, puedes otorgarle propiedades físicas agregándole un componente **Rigidbody**.

Para agregar un componente Rigidbody al GameObject Sphere:

**1.**En la ventana Hierarchy, selecciona Sphere.

**2.**  Selecciona el botón **Add Component (Agregar componente)** en la ventana Inspector.

[Image: image]

**3.**Usa la barra de búsqueda para buscar un componente **Rigidbody** y selecciónalo. Ten en cuenta que hay dos opciones disponibles: **Rigidbody**y **Rigidbody 2D***.*Asegúrate de seleccionar el componente **Rigidbody**y no el 2D.

[Image: image]

**4.**En el componente Rigidbody en la ventana Inspector, selecciona Use Gravity (Usar gravedad) si esta opción no está seleccionada.

[Image: image]

**5.**Para ver el efecto de estas propiedades, inicia el juego presionando el botón Play, que mostrará la vista de Juego.

La esfera cae y rueda hacia abajo por los escalones. Si no rueda, prueba moverla a una nueva posición con las herramientas Transform y ejecuta el juego nuevamente.

**Nota:**Para conocer las [Prácticas recomendadas sobre física, consulta este tutorial (en inglés)](https://learn.unity.com/tutorial/physics-best-practices) para obtener más información.

Marcar paso como completado

## 5. ¿Cómo experimentar con GameObjects que caen?

Q&A (0)

Prueba otras variaciones de este ejercicio. Mueve el GameObject Sphere y la Main Camera para conseguir los resultados que buscas.

Más opciones para probar:

- Agrega más esferas con componentes Rigidbody en diferentes alturas.
- Agrega otros primitivos y observa cómo se comportan.
- Haz caer objetos en diferentes lugares.
- Gira el GameObject Monument.

Algo para aclarar es que puedes cambiar las propiedades, los valores y la posición de un GameObject seleccionado mientras el juego se ejecuta, pero, cuando el juego se detenga, todos los valores se revertirán a los valores previos al inicio del juego. Esto es útil para probar diferentes parámetros durante el tiempo de ejecución, pero, si quieres que los cambios sean permanentes, tienes que realizarlos cuando el juego está detenido.

Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

Has visto cómo agregar propiedades a los GameObjects a través de componentes y usaste el componente Rigidbody para hacer que un GameObject responda a la gravedad en la vista de Juego. También repasaste cómo la vista de Juego difiere de la vista de Escena y manipulaste la Main Camera para cambiar la pantalla de la vista de Juego.

A continuación, agregarás componentes adicionales para que los GameObjects se vean más reales en un espacio en 3D.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
