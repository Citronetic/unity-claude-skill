[Image: image]

# ¿Cómo trabajar con GameObjects en una Escena en 2D?

Tutorial

foundational

+10XP

60 mins

4

(457)

Unity Technologies

[Image: ¿Cómo trabajar con GameObjects en una Escena en 2D?]SummarySkills

En este tutorial, podrás realizar lo siguiente:

- Crear un nuevo Sprite.
- Cambiar una imagen de Sprites usando el componente Sprite Renderer.
- Seleccionar objetos en 2D en las ventanas Hierarchy y en la vista de Escena del Editor de Unity.
- Mover y girar objetos en 2D, y cambiar su tamaño con valores numéricos usando el componente Transform en la ventana Inspector.
- Mover y girar objetos en 2D, y cambiar su tamaño en la vista de Escena usando las herramientas Transform de Unity.
- Identificar la relación entre las propiedades que se muestran en la ventana Inspector y la pantalla de GameObjects en la Escena.
- Usar la herramienta Rect Transform para manipular un Sprite en la Escena.
- Cambiar los colores de tinta de un Sprite.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Al igual que los proyectos en 3D, los proyectos en 2D están organizados en **Escenas**, que contienen todos los elementos de la experiencia que estás creando. Los GameObjects de las Escenas en 2D se llaman **Sprites**. Los Sprites son imágenes que habitualmente se importan con propiedades específicas que les permiten funcionar como GameObjects interactivos en 2D.

De hecho, un proyecto en 2D es una vista lateral de un espacio en 3D. Entonces, si bien el usuario final verá una vista plana en 2D, el espacio real en el que trabajas es en 3D. Este enfoque te proporciona más flexibilidad y permite crear proyectos híbridos como el estilo del juego [Ori and the Will of the Wisps](https://www.orithegame.com/) de Microsoft.

[Image: image]

En este tutorial, crearás Sprites y los analizarás en las ventanas Hierarchy e Inspector. Manipularás esos Sprites usando las herramientas de Unity Transform y observarás cómo la ventana Inspector refleja tus cambios.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

Durante este proyecto, nos basaremos en la información cubierta en el proyecto [Primeros pasos en 3D en tiempo real (en inglés)](https://learn.unity.com/project/foundations-of-real-time-3d). Te recomendamos completar ese proyecto primero.

Para configurar tu proyecto de Unity:

**1.**  Abre el **Unity Hub**.

**2.** [Crea un proyecto nuevo de Unity (en inglés)](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) usando el **modelo 2D**.

Marcar paso como completado

## 3. ¿Cómo crear tu primer Sprite?

Q&A (0)

**1.** En la ventana Hierarchy, haz clic derecho y selecciona **2D Object > Sprite** para crear un Sprite vacío que funcionará como marcador.  En este momento, no puedes ver el Sprite en la vista de Escena, pero podrás verlo cuando le asignes una imagen.

[Image: image]

**2.**En Hierarchy, selecciona el Sprite que creaste y cambia su nombre a «Circle» en la ventana Inspector.

[Image: image]

Verás el nuevo nombre en la ventana Hierarchy.

[Image: image]

**3.**En la ventana Inspector, busca el componente **Sprite Renderer**. En la propiedad **Sprite,** haz clic en el ícono del círculo para abrir el panel Assets (Recursos).

[Image: image]

**4.**Selecciona la imagen **Knob**en el panel Assets. El Sprite ahora incluye la imagen Knob.

[Image: image][Image: image]

**.**El componente Transform incluye los valores Position (Posición), Rotation (Rotación) y Scale (Tamaño) del Sprite seleccionado. Puedes modificar estos valores en la ventana Inspector y ver los cambios en la Escena, o puedes manipular el Sprite en la Escena y estos valores cambiarán, respectivamente. Selecciona el Sprite círculo y modifica los valores de Scale a 10, 10, 1. Observa el cambio del Sprite en la vista de Escena.

[Image: image]

**Nota:** Unity usa un **sistema de coordenadas Y vertical**, que se aplica a 2D, así como a 3D. El eje Y es hacia arriba y el eje Z es hacia el punto de vista del jugador y en dirección contraria a este punto. Por lo tanto, el jugador no puede ver los cambios que se realizan en el tamaño en la dirección Z. Al cambiar la posición en Z, los Sprites se ubicarán uno atrás del otro o uno delante del otro (como el orden en Z en otras aplicaciones).

**6.**Selecciona la herramienta Move (Mover) en la barra de herramientas (tecla de acceso rápido W) y usa el *mouse* para mover el Sprite a una nueva posición en la Escena.

[Image: image]

Observa cómo se refleja la nueva posición en las propiedades Position del componente Transform. (Nota: Tus resultados pueden ser diferentes).

[Image: image]

**7.**La herramienta **Rect Transform** ofrece una manera rápida y sencilla de cambiar la forma y posición de tus Sprites. Al elegir un Sprite y, luego, seleccionar la herramienta Rect Transform en la barra de herramientas (tecla de acceso rápido T), verás un borde rectangular con puntos de control en las esquinas.

[Image: image]

Mueve el Sprite por la Escena con el *mouse*. Para hacerlo, arrástralo desde cualquier punto sobre el objeto. Ajusta el tamaño del Sprite en las dimensiones X o Y. Para hacerlo, arrastra los controles de las esquinas.

Marcar paso como completado

## 4. ¿Cómo cambiar el color del Sprite?

Q&A (0)

**1.**Para cambiar el color del Sprite, selecciónalo y luego elige la propiedad Color en el componente **Sprite Renderer**.

[Image: image]

**2.**Usa el selector de color para cambiar la tinta del Sprite.

[Image: image]Marcar paso como completado

## 5. Próximos pasos

Q&A (0)

Has visto cómo agregar GameObjects simples, llamados primitivos, a tu Escena y cómo estos GameObjects se representan en las ventanas Hierarchy e Inspector. Has visto cómo mover y girar GameObjects, y cómo cambiar su tamaño de dos formas: con números en la ventana Inspector o al modificarlos físicamente en la vista de Escena.

A continuación, veremos los componentes que puedes agregar a los Sprites.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
