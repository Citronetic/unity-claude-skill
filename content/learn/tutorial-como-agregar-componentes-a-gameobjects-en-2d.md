[Image: image]

# ¿Cómo agregar componentes a GameObjects en 2D?

Tutorial

foundational

+10XP

60 mins

2

(447)

Unity Technologies

[Image: ¿Cómo agregar componentes a GameObjects en 2D?]SummarySkills

En este tutorial, verás cómo los componentes agregan funcionalidad a los Sprites. El componente que verás en acción aquí, Rigidbody 2D, le permite a un Sprite comportarse como un objeto físico, en lugar de flotar en el espacio. En este tutorial, podrás realizar lo siguiente:

- Posicionar la Main Camera (Cámara principal) para mostrar la acción en la vista de Juego.
- Agregar propiedades físicas a un GameObject en 2D aplicando el componente Rigidbody 2D.
- Experimentar con la física en 2D en Unity.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Los **componentes**agregan comportamientos y funcionalidad a un GameObject. Los GameObjects tienen componentes por defecto, como los componentes Transform y Sprite Renderer que puedes ver automáticamente cuando creas un Sprite nuevo. En este tutorial, agregarás otro componente, el Rigidbody 2D, que otorga a un Sprite propiedades físicas para que interactúe con la gravedad y otros Sprites. Posicionarás la Main Camera para ver cómo un Sprite responde a la gravedad en 2D.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

En el tutorial anterior, creaste un GameObject Sprite llamado «Circle». En este primer tutorial, vas a usar ese Sprite otra vez. Si no completaste el tutorial anterior o si no guardaste la Escena, [crea el Sprite Circle como lo hiciste en el tutorial anterior (material en inglés)](https://learn.unity.com/tutorial/create-and-manipulate-2d-gameobjects#5f7657dfedbc2a3309682578).

Marcar paso como completado

## 3. Posicionar la Main Camera

Q&A (0)

En cada Escena nueva, hay una **cámara**, que se indica con el ícono de la cámara en la vista de Escena. Esta cámara, que se llama Main Camera en Hierarchy, captura tu Escena y la muestra al jugador como aparece en la **vista de Juego**.

**1.**En la ventana Hierarchy, selecciona Main Camera.

**2.**Mueve la Main Camera para ver cómo el círculo cae hacia abajo. Puedes mover y girar la Main Camera en el espacio en 2D, como con cualquier otro Sprite, usando las herramientas Transform.

[Image: image]

**Nota:** En la vista de Escena, puedes intercambiar entre una vista en 2D y 3D seleccionando el botón **2D** en la parte superior de la ventana.

[Image: image]Marcar paso como completado

## 4. ¿Cómo otorgarle masa al Sprite?

Q&A (0)

**1.**En la ventana Hierarchy, selecciona Circle.

[Image: image]

**2.**Selecciona el botón **Add Component (Agregar componente)** en la ventana Inspector.

[Image: image]

**3.**Usa la barra de búsqueda para buscar un componente **Rigidbody 2D** y selecciónalo. Ten en cuenta que hay dos opciones disponibles: **Rigidbody**y **Rigidbody 2D***.*Asegúrate de seleccionar el componente **Rigidbody 2D**y no el convencional (3D).

[Image: image]

**4.**Para ver el efecto de estas propiedades, inicia el juego presionando el botón Play, que mostrará la vista de Juego.

El Sprite se caerá y seguirá cayendo hasta que detengas el juego.

**5.**Detén el juego seleccionando el botón Play nuevamente en la parte superior de la pantalla.

Marcar paso como completado

## 5. ¿Cómo agregar un colisionador?

Q&A (0)

Ver a un objeto chocar contra otro es más divertido que ver un objeto cayendo al infinito, por eso, analicemos los **colisionadores**, que dan a los objetos una forma en un espacio físico. En el objeto en 3D de este curso, el GameObject primitivo que creaste tenía colisionadores ya incorporados. Para el Sprite que creaste a partir de una imagen, debes agregar el colisionador por tu cuenta.

El componente Rigidbody 2D también otorga al Sprite propiedades físicas; entonces, ¿cuál es la diferencia? Las propiedades Rigidbody controlan cómo interactúa el GameObject con la gravedad y la densidad del aire. Por ejemplo, las propiedades Rigidbody del Sprite Circle lo hacen caer, pero, cuando este choque con otro GameObject, lo atravesará. El componente Collider agrega propiedades adicionales que determinan el modo en que los objetos interactúan entre sí. Al agregar un componente Collider al Circle y un Sprite debajo de este para representar el suelo, el Circle detendrá su trayectoria descendente cuando toque el suelo.

**1.**Crea un Sprite nuevo. Para hacerlo, haz clic derecho en el panel Hierarchy y selecciona **2D Object** **>** **Sprite Shape**.

**2.**Selecciona el nuevo Sprite Shape, asígnale el nombre «Ground» y cambia la propiedad Scale de Y a 0.1.

[Image: image]

**3.**Agrega un componente Rigidbody 2D al Sprite Ground.

**4.**Ejecuta el juego. Los Sprites Circle y Ground caerán. Para mantener el Sprite Ground en su lugar, ve al componente Rigidbody 2D del Sprite Ground, expande las restricciones y selecciona la casilla de selección Freeze Position (Posición congelada) para los ejes X, Y y Z. Estas opciones le indicarán al Sprite que debe permanecer en el lugar y no debe caer mientras se ejecute el juego.

**5.**Ejecuta el juego otra vez. Verás el Circle caer al Ground, pero seguirá cayendo cuando lo pase. Esto se debe a que los dos objetos no tienen límites físicos, entonces, el Circle puede pasar por el Ground. Los componentes Collider lo solucionarán.

**6.**Selecciona el Sprite Circle y, luego, el botón **Add Component (Agregar componente)** en la ventana Inspector. Agrega un componente **Circle Collider 2D** y deja la configuración por defecto como aparece.

**7.**Sigue el mismo proceso para el Sprite Ground agregando un componente **Box Collider 2D**.

**8.**Ejecuta el juego. El Circle caerá al Ground y se detendrá.

[Image: image]Marcar paso como completado

## 6. ¿Cómo experimentar con Sprites que caen?

Q&A (0)

Prueba otras variaciones de este ejercicio. Mueve el Sprite Circle y la Main Camera para conseguir los resultados que buscas.

Más opciones para probar:

- Agrega más círculos en diferentes alturas.
- Agrega otros Sprites con diferentes formas importando imágenes pequeñas.
- Haz caer objetos en diferentes lugares.

Algo para aclarar es que puedes cambiar las propiedades de un Sprite seleccionado mientras el juego se ejecuta, pero, cuando el juego se detenga, todos los valores se revertirán a los valores previos al inicio del juego. Esto es útil para probar diferentes parámetros durante el tiempo de ejecución, pero, si quieres que los cambios sean permanentes, tienes que realizarlos cuando el juego está detenido.

Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

Has visto cómo agregar propiedades a los Sprites a través de componentes y usaste el componente Rigidbody 2D para hacer que un Sprite responda a la gravedad en la vista de Juego. También repasaste cómo la vista de Juego difiere de la vista de Escena y manipulaste la Main Camera para cambiar la pantalla de la vista de Juego.

Al igual que en un proyecto en 3D, puedes editar y crear*scripts* para personalizar los componentes y controlar aún más tus GameObjects. Si quieres, puedes ver el tutorial [Primeros pasos con scripts (en inglés)](https://learn.unity.com/tutorial/get-started-with-scripts) y crear tu propio *script* en este proyecto en 2D.

A continuación, al prepararte para un desafío en 2D, descubrirás los recursos en 2D en la Tienda de recursos de Unity.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
