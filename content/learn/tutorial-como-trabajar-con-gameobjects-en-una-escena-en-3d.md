[Image: image]

# ¿Cómo trabajar con GameObjects en una Escena en 3D?

Tutorial

foundational

+10XP

60 mins

57

(970)

Unity Technologies

[Image: ¿Cómo trabajar con GameObjects en una Escena en 3D?]SummarySkills

En este tutorial, comenzarás a trabajar en el Editor de Unity con más independencia que en los microjuegos. Al usar un proyecto nuevo de Unity y una Escena en 3D que crearás desde cero, trabajarás con GameObjects y explorarás las distintas formas de manipularlos en el Editor de Unity. En este tutorial, podrás realizar lo siguiente:

- Crear nuevos GameObjects en 3D.
- Seleccionar objetos en 3D en las ventanas Hierarchy e Inspector del Editor de Unity.
- Mover y girar objetos en 3D, y cambiar su tamaño con valores numéricos usando el componente Transform en la ventana Inspector.
- Mover y girar objetos en 3D, y cambiar su tamaño en la vista de Escena usando las herramientas Transform de Unity.
- Vincular GameObjects en relaciones «elemento primario-elemento secundario» usando la ventana Hierarchy para crear GameObjects complejos.
- Identificar la relación entre las propiedades que se muestran en la ventana Inspector y la pantalla de GameObjects en la Escena.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

En este tutorial, aplicarás lo que has aprendido sobre el Editor de Unity para crear y manipular GameObjects en una Escena. Adquirirás más habilidades esenciales al aprender a usar las ventanas Hierarchy e Inspector para organizar y configurar tus GameObjects.

Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

#### ¿Cómo familiarizarse con los controles del Editor?

En este tutorial, comenzarás a usar las técnicas que aprendiste en los microjuegos y en la misión anterior sobre los Aspectos básicos de Unity. Mientras recorremos los próximos proyectos de aprendizaje, daremos por sentado que puedes manipular GameObjects y navegar en un espacio en 3D.

Para repasar estos temas, consulta[¿Cómo explorar el Editor de Unity?](https://learn.unity.com/tutorial/explore-the-unity-editor-1)(en inglés) para ver herramientas básicas, trucos y consejos.

#### Probar un microjuego

Si no tienes experiencia en Unity y si todavía no has realizado los tutoriales de alguno de los microjuegos disponibles en el Unity Hub, te recomendamos hacerlo, en especial, el LEGO® Microgame. Cualquiera de estos microjuegos te servirá como buena introducción al Editor de Unity.

**Nota:**Si completaste el LEGO® Microgame, utilizaste alguna funcionalidad personalizada que recrea la experiencia de usar los ladrillos físicos de LEGO® en el Editor de Unity. Aquí no verás las mejoras especiales de LEGO. Usarás el Editor de Unity sin personalizar.

Marcar paso como completado

## 3. ¿Cómo crear un proyecto y una Escena nuevos en 3D?

Q&A (0)

**Importante:** Si ya creaste un proyecto de Unity con el nombre «Essentials 3D» en una misión anterior, abre ese proyecto desde el Unity Hub y omite este paso.

Sigue estos pasos si necesitas crear un proyecto nuevo de Unity para este tutorial:

**1.**  Abre el **Unity Hub**.

**2.** [Crea un proyecto nuevo de Unity (en inglés)](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) usando el **modelo 3D**. Asígnale a este proyecto el nombre «Essentials 3D».

**Nota:**  Es posible que aparezca un mensaje para descargar el **modelo 3D** si es la primera vez que lo usas. Busca este mensaje en la tarjeta en 3D cuando la selecciones.

**3.** Crea un cubo primitivo en tu Escena vacía: haz clic derecho en una sección vacía en Hierarchy y selecciona **3D Object > Cube**.

Marcar paso como completado

## 4. La Escena en 3D por defecto

Q&A (0)

En los microjuegos, empezaste a trabajar en una Escena que ya estaba creada, con personajes que se movían y respondían a tus comandos, con un suelo rígido sobre el que se trasladaban, y con objetivos y obstáculos para que el juego fuera interesante. Pero ahora trabajarás en un espacio vacío, amplio y sin límites. Verás un plano que parece el suelo solo como referencia, ni siquiera es una superficie rígida.

[Image: image]

La Escena en 3D por defecto incluye dos GameObjects importantes, que aparecen en la ventana Hierarchy:

- **Main Camera (Cámara principal)**, que controla lo que los jugadores verán en la vista de Juego (modo Play).
- **Directional Light (Luz direccional)**, que simula el sol y proporciona la luz que se reflejará en los GameObjects en 3D para crear efectos visuales realistas.

Regresaremos a esto después de que agregues algunos GameObjects en tu Escena, de modo que la Main Camera pueda enfocar algo y la Directional Light se pueda reflejar en algo.

Marcar paso como completado

## 5. ¿Cómo trabajar con GameObjects en la ventana Inspector?

Q&A (0)

La ventana Inspector es donde verás y modificarás las propiedades de los GameObjects y de otros tipos de objetos. Para explorar las propiedades del GameObject Cube (Cubo) en el Inspector, haz lo siguiente:

**1.** En la vista de Escena, selecciona el GameObject cubo que has creado.

**2.**Con la opción Cube seleccionada, observa las propiedades del GameObject en la ventana Inspector.

[Image: image]

Cada sección de la ventana Inspector representa un **componente**, que es un conjunto de propiedades y comportamientos del GameObject seleccionado. Algunos componentes están incorporados en los primitivos, como los que ves aquí. Más adelante, agregarás componentes para proporcionar propiedades y comportamientos más sofisticados a los GameObjects.

Con la opción Cube seleccionada, el componente Transform muestra el tamaño, la rotación y la posición del cubo en la Escena usando valores X, Y y Z. Por defecto, estos valores se representan en metros.

**Nota:** Unity usa un **sistema de coordenadas Y vertical**. Esto significa que, en el espacio de la pantalla del Editor, la dirección de Y es vertical, y X y Z representan el plano horizontal (similar a norte, sur, este y oeste). Algunas aplicaciones en 3D, como 3DsMax, usan Z como plano vertical.

**3.**Selecciona F en el teclado para enfocarte en el Cubo. (Consejo: La ventana de la vista de Escena debe estar activada. Puedes seleccionar un GameObject en la vista de Escena o hacer clic derecho en cualquier lugar para activar la ventana).

[Image: image]

Por defecto, la herramienta Move (Mover) está seleccionada y su Gizmo está en el centro del cubo. Las flechas apuntan a las direcciones positivas en cada dimensión. Las dimensiones están codificadas por colores. Siempre verás las direcciones en el Gizmo de la Escena en la esquina superior derecha de la vista de Escena.

**4.**Con el cubo seleccionado, cambia a 4 el valor de Y de la propiedad Scale (Tamaño) en el componente Transform. La altura del cubo cambiará a 4. Aleja la imagen según sea necesario.

[Image: image]Marcar paso como completado

## 6. ¿Cómo organizar GameObjects en la ventana Hierarchy?

Q&A (0)

Puedes usar la ventana Hierarchy para organizar tus GameObjects y definir las relaciones entre sí. Puedes agruparlos en Hierarchy para crear GameObjects más complejos.

**1.**En la ventana Hierarchy, haz clic derecho en Cube para seleccionarlo.

**2.**Selecciona **3D Object >** **Sphere**.

[Image: image]

Como se muestra en Hierarchy, Sphere (Esfera) es un GameObject **secundario**de Cube. Ahora estos dos objetos están vinculados. Puedes operarlos como una unidad.

[Image: image]

**3.**Esta esfera está dentro del cubo donde no puedes verla. Selecciona Sphere en Hierarchy y aparecerá el Gizmo para poder moverla en la vista de Escena a un lugar donde puedas verla al menos parcialmente fuera del Cubo. Será alta, no esférica, porque sus dimensiones iniciales se basaron en su elemento primario.

[Image: image]

**4.**Selecciona el objeto primario, el cubo, y muévelo. El cubo y la esfera se moverán juntos. Prueba también cambiar el tamaño del objeto y girarlo.

Para eliminar la relación «elemento primario-elemento secundario», en la ventana Hierarchy, arrastra la esfera hacia arriba y hacia la izquierda para indicar el nivel de raíz. Ahora los dos GameObjects aparecen como GameObjects independientes en la ventana Hierarchy.

[Image: image]Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

Has visto cómo agregar GameObjects simples, llamados primitivos, a tu Escena y cómo estos GameObjects se representan en las ventanas Hierarchy e Inspector. Has visto cómo mover y girar GameObjects, y cómo cambiar su tamaño de dos formas: con números en la ventana Inspector o al modificarlos físicamente en la vista de Escena.

Ahora estás listo para un ejercicio práctico: crear una estructura usando primitivos.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
