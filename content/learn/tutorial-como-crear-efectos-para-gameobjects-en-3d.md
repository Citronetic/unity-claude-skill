[Image: image]

# ¿Cómo crear efectos para GameObjects en 3D?

Tutorial

foundational

+10XP

30 mins

10

(904)

Unity Technologies

[Image: ¿Cómo crear efectos para GameObjects en 3D?]SummarySkills

En este tutorial, explorarás algunos de los efectos visuales y físicos que puedes lograr en una Escena en 3D. Podrás realizar lo siguiente:

- Crear y configurar un material nuevo para agregar propiedades visuales a un GameObject.
- Crear y configurar un material físico para agregar propiedades físicas a un GameObject.
- Configurar la Luz direccional.

Resources

- [Herringbone_Brick_baseColor.png](https://unity-connect-prd.storage.googleapis.com/20201001/26e9117a-554a-406c-824e-a4fa4e649738/Herringbone_Brick_baseColor.png?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953421236)

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Los **Materials (Materiales)**son componentes que definen las características de la superficie de los objetos y cómo esas superficies interactúan con la luz. En cada Escena en 3D nueva, se incluye **Luz direccional** para simular la luz del sol. En este tutorial, crearás un material simple para cambiar la apariencia visual de un GameObject y también usarás un material para cambiar las propiedades físicas. La Luz direccional rebotará en el GameObject con su material para crear un efecto visualmente realista.

[Image: image]Marcar paso como completado

## 2. Antes de comenzar

Q&A (0)

La apariencia visual del material se obtendrá de un archivo de imagen. Puedes descargar el archivo Herringbone_Brick_baseColor.png, que se usa en los pasos a continuación, seleccionando **Materiales del tutorial (en inglés)** en la parte superior de este tutorial.

Marcar paso como completado

## 3. ¿Cómo importar un archivo de imagen?

Q&A (0)

**1.**Para que tus ventanas en Unity coincidan con los ejemplos a continuación, haz clic derecho en la pestaña de la ventana Project y selecciona **Two Column Layout (Diseño de dos columnas)** si esta opción no está seleccionada. Las carpetas de tu proyecto aparecen en la columna izquierda y los contenidos de la carpeta seleccionada aparecen en la columna derecha.

**2.**Haz clic derecho en la carpeta Assets (Recursos) en la ventana Project y selecciona **Create > Material**.

[Image: image]

**3.**Asígnale el nombre «BrickMaterial» al material nuevo. La vista previa del material nuevo es una esfera en 3D para que puedas ver cómo interactúa la luz con el material en diferentes ángulos. Al seleccionar el material en la ventana Project, aparece una vista previa más precisa en un panel redimensionable de la ventana Inspector.

[Image: image]

**4.**Descarga el archivo Herringbone_Brick_baseColor.png desde **Files (Archivos)**que aparece en la parte superior de este tutorial.

**5.**Para importar el archivo al proyecto, simplemente puedes mover el archivo descargado a la carpeta Assets para este proyecto de Unity, que aparece en la ventana Project. Para ver los contenidos de la carpeta Assets en tu explorador de archivos, haz clic derecho en la carpeta Assets y selecciona **Show in Explorer (Mostrar en el explorador)**.

[Image: image]

**6.**En el explorador de archivos, mueve el archivo Herringbone_Brick_baseColor.png a tu carpeta Assets. Cuando vuelvas a Unity, verás su ícono.

[Image: image]Marcar paso como completado

## 4. ¿Cómo crear el material de ladrillo?

Q&A (0)

**1.**Selecciona BrickMaterial.

**2.**En la ventana Inspector, selecciona el ícono del círculo al lado de la propiedad Albedo. **Albedo**abarca las propiedades reflectivas del material, en función de un color liso o una imagen.

**3.**Selecciona **Herringbone_Brick_baseColor** en la lista de imágenes de tu proyecto.

La imagen ahora está aplicada al material como el **mapa Albedo** y aparecerá en la vista previa Material.

[Image: image]

**4.**Crea un nuevo GameObject cubo en la Escena.

**5.**Arrastra el material al cubo en la vista de Escena.

[Image: image]

**6.**El cubo ahora muestra el Material de ladrillo.

[Image: image]

**7.**Para modificar el tamaño del Material, selecciona el cubo, abre el componente BrickMaterial en la ventana Inspector y cambia las propiedades Tiling X e Y. Los números más bajos hacen que los ladrillos se vean más grandes.

[Image: image]Marcar paso como completado

## 5. ¿Cómo agregar un material físico?

Q&A (0)

Previamente, agregaste un componente Rigidbody a un GameObject para otorgarle propiedades físicas. También puedes agregar características físicas con otro tipo de material llamado **Physic Materials (Materiales físicos)**. Con Physic Materials, puedes hacer que un objeto rebote y cambie sus propiedades de fricción y arrastre. Estas propiedades entran en acción cuando el objeto está bajo los efectos de la gravedad. Los Physic Materials no cambian las propiedades visuales de la malla del GameObject.

**1.**En la ventana Project,****crea una nueva carpeta con el nombre «Materials». Haz clic derecho en la carpeta Materials en la ventana Assets y selecciona **Create > Physic Material***.*

**2.**Asígnale el nombre «BouncyBall» al material.

[Image: image]

**3.**Selecciona el nuevo Physic Material.

**4.**Modifica el valor Bounciness (Rebote) a 1 en la ventana Inspector.

[Image: image]

**5.**Selecciona el cubo. En la ventana Inspector, selecciona **Add Component (Agregar componente)** y agrega un componente Rigidbody.

[Image: image]

**6.**El cubo ya debería tener un componente Box Collider agregado. Este componente se agrega automáticamente cuando creas el cubo en la Escena. Arrastra el nuevo material físico Bounce que creaste previamente al espacio *Material* en el componente Box Collider.

[Image: image]

**7.**Ejecuta el juego. Ahora el cubo debería caer a la plataforma y rebotar un poco cuando toca el piso.

**8.**Experimenta con el cubo que rebota: prueba girarlo, duplicarlo y hacer que caigan cubos unos sobre otros.

Marcar paso como completado

## 6. ¿Cómo modificar la luz en la Escena?

Q&A (0)

En cada Escena en 3D nueva, se incluye un objeto que se llama **Directional Light (Luz direccional)** para simular la luz del sol. Puedes manipular esta luz con las herramientas Transform como cualquier otro GameObject.

**1.**Selecciona **Directional Light** en la ventana Hierarchy.

[Image: image]

**2.**Cambia la rotación de la luz usando las herramientas Transform: Move o Mover (tecla de acceso directo «w») y Rotate o Girar (tecla de acceso directo «e»). Las luces direccionales simulan una fuente de luz que ilumina toda la Escena con luz que proviene de una dirección específica. Si cambias la posición de la luz, la Escena no se modificará, pero, si cambias la rotación, cambiará el ángulo de la luz en la Escena. Observa cómo se modifica la luz del cielo y del ambiente cuando cambias el ángulo de la luz.

[Image: image]

La Luz direccional es solo un tipo de luz. Si te interesan otros tipos, consulta [Tipos de luz (en inglés)](https://docs.unity3d.com/Manual/Lighting.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953421236).

Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

En este tutorial, repasaste cómo los materiales y la luz trabajan en conjunto para que los GameObjects parezcan realistas. También usaste un material para agregar propiedades físicas a un GameObject y ajustaste la Luz direccional. No obstante, en las aplicaciones del mundo real, necesitarás más esferas y cubos. En el próximo tutorial, verás cómo lograr GameObjects más sofisticados en tus proyectos sin tener que crearlos desde cero.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
