[Image: image]

# ¿Cómo gestionar materiales en un proyecto?

Tutorial

Beginner

+10XP

25 mins

1

(17)

Unity Technologies

[Image: ¿Cómo gestionar materiales en un proyecto?]SummarySkills

Harás gran parte de tu trabajo más artístico al utilizar materiales para dar color, textura y estilo a tus objetos en 3D. En este tutorial, aprenderás cómo funcionan los materiales y la forma de usarlos, a solucionar problemas relacionados con estos y a organizarlos en tus proyectos.

Al finalizar este tutorial, podrás hacer lo siguiente:

- Definir material.
- Crear un nuevo material.
- Asignar un material a un GameObject.
- Administrar los materiales como recursos del proyecto.
- Arreglar materiales (magenta).

Resources

- [Project window](https://docs.unity3d.com/6000.0/Documentation/Manual/ProjectView.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953744703)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Aunque los sombreadores son una parte crucial del proceso de renderizado, los utilizarás para la mayoría de tu creación. Los materiales son recursos (almacenados con tu proyecto y administrados en la carpeta Project) que contienen los colores, las imágenes y otras propiedades que definen la apariencia de una malla.

En este tutorial, cuando comiences a crear con materiales, aprenderás a gestionarlos en tus proyectos. Una buena gestión de tus recursos de materiales te garantizará que siempre obtengas los resultados que esperas y que tu proyecto se mantenga organizado. En el proceso, comenzarás a crear tu composición de naturaleza muerta.

Marcar paso como completado

## 2. ¿Cuál es la relación entre los sombreadores y los materiales?

Q&A (0)

Los sombreadores pueden ser muy específicos o bastante versátiles. Un sombreador puede establecer el color de los GameObjects o puede permitir que el color sea configurable por los materiales. De hecho, un sombreador puede hacer que muchos objetos se vean como sustancias completamente diferentes y, al mismo tiempo, darle a la Escena un aspecto unificado.

En nuestra galería, todo lo que ves utiliza el sombreador URP o iluminado. Lo que hace que cada uno de estos GameObjects se vea diferente son las propiedades que proporcionan los materiales al sombreador, incluidos el color y la suavidad.

Los sombreadores y los materiales trabajan en equipo: el sombreador define cómo*se puede ver* una superficie, mientras que el material define cómo *se ve*.

Marcar paso como completado

## 3. ¿Cómo arreglar materiales magenta?

Q&A (0)

Hay un problema en tu mesa de trabajo que requiere atención: algunos objetos magenta brillantes. Estos objetos no se diseñaron para tener este color; el magenta (rosa) indica un error que debe corregirse.

[Image: image]

Cada material está escrito específicamente para un sombreador determinado. Es una práctica común importar recursos de un proyecto a otro, pero a veces los canales de renderizado de esos proyectos no coinciden y, por lo tanto, los sombreadores tampoco. Cuando un material tiene un sombreador que no coincide con el canal de renderizado actual, se ilumina en magenta (rosa) brillante para alertarte.

Arregla el limón:

**1.** En la vista de Escena, selecciona el limón magenta brillante.

**2.** En el Inspector, examina su material. Su sombreador está establecido en **Standard (Estándar)**. Cuando ves Standard como el nombre de un sombreador de Unity, es probable que sea el sombreador estándar para el Canal de renderizado incorporado, que no funciona en el Canal de renderizado universal. Tenemos que cambiar esto a un sombreador de URP.

**3.**  En el menú desplegable Shader (Sombreador), selecciona **Universal Render Pipeline > Lit.** El limón se ve bien.

[Image: image]

El material roto ahora está arreglado, pero no todos los materiales rotos son tan fáciles de arreglar. En este caso, el material fue fácil de convertir porque las propiedades del material de los dos sombreadores son similares. En otros casos, es posible que encuentres propiedades del material con nombres muy diferentes, o propiedades totalmente diferentes, y tendrás que restablecerlas manualmente.

#### Mejora automática de material para el URP

Varios materiales de este proyecto también están rotos, así que podemos demostrar la herramienta de URP incorporada para convertir materiales rotos. Puedes ver estos materiales en la ventana del Proyecto, en la carpeta **Assets > CreativeCore_Shaders > Materials > Standard**.

Sigue estas instrucciones para actualizar todos los materiales en un proyecto:

**1.**  Desde el menú principal, ve a **Window > Rendering > Render Pipeline Converter** para abrir la ventana del Convertidor de Render Pipeline. Esta ventana te permite actualizar varios tipos de assets a los estándares más recientes de URP.

**2.**  Cerca de la parte superior de la ventana hay un menú desplegable que, por defecto, muestra **Built-in to URP**. Asegúrate de que esté configurado en esta opción.

**3.** Desplázate hacia abajo para encontrar la sección **Material Upgrade** en la ventana y habilita esa sección.

**4.** Selecciona **Initialize Converters** en la parte inferior de la ventana. La lista de materiales que se van a actualizar aparecerá en la sección **Material Upgrade**.

[Image: image]

**5.**  Selecciona el botón **Convert Assets** en la parte inferior de la ventana para actualizar los materiales a URP. Los materiales cambiarán de magenta a sus colores y texturas originales.

Esta función está disponible en proyectos de Unity que usan el Universal Render Pipeline. Recuerda este truco cuando importes paquetes de assets desarrollados en otro pipeline de renderizado o cuando conviertas un proyecto de un pipeline de renderizado diferente a URP.

**Consejo:** También puedes actualizar un único material. Selecciona el material en la ventana del Proyecto y luego, en el menú principal, ve a **Edit > Rendering > Materials > Convert Selected Built-in Materials to URP**.

Marcar paso como completado

## 4. Observa el material predeterminado

Q&A (0)

Ahora, vamos a crear una obra de arte. A continuación, crearás un nuevo objeto en 3D para trabajar en tu mesa de trabajo, de modo que puedas aplicarle un material. Como GameObject nuevo, tendrá el **material predeterminado**.

Echa una mirada al material de un nuevo GameObject:

**1.**  Coloca la vista de Escena de tal manera que tengas un espacio despejado para trabajar en la mesa de trabajo.

**2.**  En la Hierarchy (Jerarquía), usa el botón **más** (**+**) en la parte superior y selecciona **3D Object** **> Sphere**(u otra forma primitiva).

**3.**  En la vista de Escena, selecciona tu nueva forma primitiva y ajusta su posición para que puedas verla con claridad.

**4.**  En la ventana Inspector, expande el Inspector de materiales. Verás que el material aplicado a tu nueva forma primitiva se llama **Lit (Iluminado)**y está utilizando el sombreador iluminado o Canal de renderizado universal. Este es el material predeterminado para el Canal de renderizado universal.

**Nota:**Todo lo que aparece aquí está atenuado porque este material iluminado es el material predeterminado del sombreador. No puedes editarlo (excepto a través de código). Siempre que crees un nuevo GameObject, verás este material predeterminado.

Luego, reemplacemos el material predeterminado con un material diferente.

Marcar paso como completado

## 5. ¿Cómo buscar materiales en la ventana Project?

Q&A (0)

Tradicionalmente, los proyectos de Unity incluyen una carpeta**Materials** a la que puedes acceder a través de la ventana Project. Sin embargo, al importar recursos desde la Tienda de recursos u otras fuentes, también puedes importar carpetas de materiales adicionales de otro lugar. Hay algunas cosas que puedes hacer para encontrar cualquier material en tu proyecto. Necesitarás estos consejos y técnicas para encontrar los materiales necesarios para tus obras de arte.

#### Favoritos

En la ventana Project, con el [diseño de dos columnas](https://docs.unity3d.com/Manual/ProjectView.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953744703), selecciona **Favorites > All Materials** para ver todos los materiales de tu proyecto.

[Image: image]

Al seleccionar esto, aparece **t:Material** en el cuadro de búsqueda de la ventana Project. La búsqueda que utiliza **t:** indica el **tipo** de recurso. (Puedes usar esto para buscar todos los scripts de tu proyecto al escribir **t:Script**). Déjalo como está por ahora.

Puedes seleccionar las opciones en la parte superior de la ventana Project para limitar la búsqueda a los materiales **In Packages o En paquetes**, **In Assets o En recursos** (tu carpeta Assets) o en una carpeta seleccionada. Para ver solo los materiales del proyecto, selecciona **In Assets**.

[Image: image]

#### Búsquedas

En la barra de búsqueda de la ventana Project, agrega «red» a tu búsqueda para que la consulta **t: Material red** encuentre todos los materiales con «red» en sus nombres.

Ubica **AppleRed**.

[Image: image]Marcar paso como completado

## 6. ¿Cómo aplicar un material a un GameObject?

Q&A (0)

Aunque ya has aplicado un material a un GameObject, es posible que te interese aprender más formas de hacerlo. Se enumeran a continuación en caso de que aún no hayas descubierto la que prefieras.

Intenta aplicar un material de cada una de las formas siguientes:

**1.**  Arrastra un material desde la ventana Project a un objeto en la vista de Escena.

**2.**  Arrastra un material desde la ventana Project a la propiedad **Materials** del componente **Mesh Renderer (Renderizador de malla)** en la ventana Inspector.

**3.**  En la ventana Inspector, usa el selector de objetos (⊙) para abrir una ventana de diálogo en la que puedes desplazarte o buscar un material y seleccionarlo.

**4.**  Selecciona un GameObject que tenga el material deseado aplicado y arrastra la vista en miniatura de ese material desde la ventana Inspector al GameObject en la vista de Escena.

Aplica el material AppleRed a tu nuevo GameObject y también a la manzana blanca. Aplícalo a otros objetos si lo deseas.

**Nota:** Los GameObjects de la manzana son objetos primarios con un elemento secundario llamado **AppleBody**. El objeto secundario AppleBody tendrá el material.

#### Un material, muchos GameObjects

Es cómodo utilizar un material en muchos GameObjects. Puedes ahorrar tiempo y darle a los GameObjects una apariencia uniforme. Sin embargo, es importante recordar que los materiales son recursos almacenados en tu proyecto. Cuando cambias un material en un GameObject, cambiará en cada GameObject donde se utilice.

Además, puedes usar un material en múltiples GameObjects y en muchas escenas, y un cambio de material en una Escena se mostrará en todas.

Esto puede ser problemático si no sabes cómo usas y organizas tus materiales. En el siguiente paso, verás esto en acción y aprenderás a gestionarlo.

Marcar paso como completado

## 7. ¿Cómo cambiar un material?

Q&A (0)

Cambia el color del material AppleRed:

**1.**  Asegúrate de haber aplicado el material AppleRed a más de un objeto en tu mesa de trabajo.

**2.**  Selecciona la manzana (el objeto secundario AppleBody) y visualiza el Inspector de materiales en la ventana Inspector.

**3.**  Busca la propiedad **Base Map (Mapa base)**, que tiene un selector de color. Utiliza este selector de color para cambiar el color del material AppleRed. Los otros objetos con este material también cambiarán.

Es importante recordar que cuando seleccionas un GameObject y usas el Inspector de materiales, estás cambiando el material en todos los lugares donde se usa, no solo para el GameObject seleccionado.

Por ahora, selecciona un nuevo color de manzana: haz que sea una Granny Smith verde o una Golden Delicious amarilla.

Marcar paso como completado

## 8. ¿Cómo ubicar un material aplicado a un GameObject?

Q&A (0)

Ahora que has cambiado el color, el nombre AppleRed ya no se ajusta a este material. A continuación, busca el material entre los recursos de tu proyecto y cambia su nombre.

Puedes utilizar la vista de Escena para buscar un material en tu proyecto:

**1.**  Selecciona tu objeto primitivo.

**2.**  En el Inspector, busca la subsección **Materials**del componente Mesh Renderer.

**3.**  Localiza el elemento donde se aplica el material AppleRed y selecciónalo. En la ventana Project, verás que la carpeta que contiene ese material se abrirá y el nombre del material estará resaltado.

[Image: image]

**4.**  En la ventana Project, haz clic derecho en el material AppleRed, selecciona **Rename (Volver a nombrar)** y dale al material un nombre que describa su nuevo color.

Marcar paso como completado

## 9. ¿Cómo crear un nuevo material?

Q&A (0)

Ahora tienes al menos dos (tal vez más) objetos que son del mismo color, pero una buena composición tendrá una variedad de colores.

A continuación, duplica una manzana y crea un nuevo material para ella:

**1.**  En la vista de Escena, selecciona una de las manzanas y presiona **Ctrl +** **D** (Windows) o **Cmd +** **D** (macOS) para duplicarla.

**2.**  Reubicar la nueva manzana en un espacio vacío de tu mesa de trabajo.

**3.**  En la ventana Project, abre la carpeta **Assets > CreativeCore_Shaders >** **Materials** para crear tu nuevo material en esta ubicación.

**4.**  En la carpeta Materials, haz clic derecho y selecciona **Create > Material**.

**5.**  Nombra este material «AppleRed 2».

**6.**  Con el selector de color en la propiedad **Base Map**, selecciona un tono de rojo que se vea bien en una manzana.

**7.**  Aplica este material a tu nueva manzana.

Marcar paso como completado

## 10. ¿Cómo duplicar un material?

Q&A (0)

Otra forma de cambiar la apariencia de un objeto en lugar de varios es duplicar un material existente, aplicarlo a un objeto y modificar el duplicado.

Crea un nuevo material para añadir más variedad a la escena duplicando el material **AppleRed 2**:

**1.**  En la vista de Escena (**Scene view**), selecciona tu nueva manzana roja (asegúrate de seleccionar el objeto principal o padre).

**2.** Duplica la manzana roja usando **Ctrl/Cmd+D**.

**3.**  Mueve la nueva manzana para que puedas ver ambas manzanas rojas una al lado de la otra. Ahora tienes dos manzanas idénticas que usan el mismo material.

**4.**En la ventana del Proyecto (**Project window**), vuelve a la carpeta **Materials**, selecciona el material **AppleRed 2** y duplícalo usando **Ctrl/Cmd+D**.

**5.**  Renombra el nuevo material como **AppleRed Light** o elige otro nombre que describa cualquier color que prefieras.

**6.** Aplica este nuevo material a la manzana duplicada. Por ahora, ambas se verán iguales.

**7.** Cambia el color del **Base Map** de tu nuevo material. Observa cómo tu cambio solo afecta a la manzana nueva.

Ahora tienes varias manzanas que puedes usar en tu composición de bodegón. Siempre que te sientas inspirado para agregar nuevos objetos a tu composición, simplemente muévelos al pedestal vacío.

[Image: image]Marcar paso como completado

## 11. Explora los materiales y comienza a crear

Q&A (0)

En tu mesa de trabajo, intenta aplicar otros materiales a este proyecto que te parezcan interesantes (sin cambiar sus propiedades). Observa las diferentes propiedades de cada material. Es posible que obtengas algunos resultados extraños al aplicar varios materiales a diferentes objetos, pero para cuando completes estos tutoriales, entenderás cómo y por qué cada material cambia el aspecto de un GameObject.

Marcar paso como completado

## 12. Próximos pasos

Q&A (0)

Cuando creaste las manzanas para tu composición, aprendiste a buscar, aplicar, cambiar, crear y duplicar materiales. Con estas habilidades, podrás trabajar hábilmente con los materiales a medida que aprendas y crees más con ellos en los tutoriales que siguen.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
