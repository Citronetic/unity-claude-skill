[Image: image]

# ¿Cómo crear una estructura con primitivos?

Tutorial

foundational

+10XP

45 mins

3

(1002)

Unity Technologies

[Image: ¿Cómo crear una estructura con primitivos?]SummarySkills

Este tutorial es un ejercicio en el que puedes aplicar tus conocimientos sobre GameObjects y los componentes Transform para crear una estructura con primitivos en 3D. En este tutorial, podrás realizar lo siguiente:

- Agregar primitivos a una Escena vacía.
- Crear un GameObject vacío como elemento primario para otros GameObjects.
- Duplicar GameObjects.
- Crear relaciones «elemento primario-elemento secundario» entre los GameObjects usando la ventana Hierarchy.
- Navegar por la Escena en el espacio en 3D.
- Transformar los primitivos a una posición, una rotación y un tamaño determinados.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Este tutorial es un ejercicio en el que crearás un GameObject arquitectónico formado con múltiples primitivos. En este ejercicio, adquirirás los conocimientos para crear y manipular GameObjects, y practicarás cómo navegar por una Escena.

Esta es la estructura que crearás.

[Image: image]

Al construir esta estructura, puedes cambiar la vista de la Escena para asegurarte de que los GameObjects estén alineados. Para repasar este tema, consulta [Navegar por la Escena (en inglés)](https://learn.unity.com/tutorial/explore-the-unity-editor#5fa1bfc4edbc2a01f0fae7e7).

Marcar paso como completado

## 2. ¿Cómo crear un GameObject vacío?

Q&A (0)

Un **GameObject vacío** es un objeto marcador que se puede crear en Hierarchy. No tiene una representación visible en la Escena y puede funcionar como contenedor para otros GameObjects (entre otros conceptos que se explicarán más adelante).

**1.**Haz clic derecho en Hierarchy y selecciona **Create Empty (Crear vacío)**.

[Image: image]

**2.**Asígnale el nombre «Monument» a este GameObject en la ventana Inspector.

[Image: image]

**3.**Selecciona este GameObject nuevo en la vista de Escena. En la ventana Inspector, restablece la posición seleccionando los tres puntos a la derecha y, luego, seleccionando **Reset Position (Restablecer posición)**. De este modo, se establece la posición del centro del GameObject en 0,0,0 y esto lo alinea en el centro de tu Escena.

[Image: image][Image: image]Marcar paso como completado

## 3. ¿Cómo crear los escalones?

Q&A (0)

**1.**En Hierarchy, haz clic derecho en el GameObject Monument y selecciona **3D Object > Cube**para crear un cubo nuevo como elemento secundario de Monument.

[Image: image]

**2.**Asígnale el nombre «Floor» a este GameObject nuevo.

[Image: image]

**3.**Haz clic derecho en el GameObject Floor y selecciona **Duplicate (Duplicar)**. (Acceso directo: selecciona Floor y presiona Ctrl - D). Duplica el objeto Floor seis veces más para obtener el objeto Floor original y siete duplicados, y un total de ocho pisos que son los elementos secundarios de Monument.

[Image: image]Marcar paso como completado

## 4. ¿Cómo transformar los escalones?

Q&A (0)

En estas tareas, modificarás los valores del componente Transform de cada uno de los objetos Floor para crear el efecto de escalones.

**1.**Selecciona el primer objeto Floor secundario y modifica los valores del componente Transform en el Inspector, como se muestra a continuación.

[Image: image]

**2.**Realiza lo mismo con el resto de los objetos Floor usando los valores que se indican a continuación.

Valores para el GameObject Floor (1)

[Image: image]

Valores para el GameObject Floor (2)

[Image: image]

Valores para el GameObject Floor (3)

[Image: image]

En este momento, deberías tener algo similar a esto:

[Image: image]

Valores para el GameObject Floor (4)

[Image: image]

Valores para el GameObject Floor (5)

[Image: image]

Valores para el GameObject Floor (6)

[Image: image]

Valores para el GameObject Floor (7)

[Image: image]

Ahora deberías tener los escalones del monumento.

[Image: image]Marcar paso como completado

## 5. ¿Cómo crear las paredes?

Q&A (0)

**1.**Crea otro cubo primitivo como elemento secundario del GameObject Monument y asígnale el nombre «Wall».

[Image: image]

**2.**Modifica los valores en el Inspector como se muestra a continuación.

[Image: image]

La pared ahora está girada y está en posición diagonal con el piso.

[Image: image]

**3.**Duplica la pared tres veces y modifica los valores del componente Transform como se muestra a continuación.

[Image: image]

GameObject Wall (1)

[Image: image]

GameObject Wall (2)

[Image: image]

GameObject Wall (3)

[Image: image]

Ahora vas a tener 4 paredes a 45°.

[Image: image]Marcar paso como completado

## 6. ¿Cómo crear el techo?

Q&A (0)

**1.**Crea un nuevo GameObject vacío como elemento secundario del GameObject Monument y asígnale el nombre «Platform».

[Image: image]

**2.**Arrastra todos los objetos Floor al GameObject Platform. Se creará lo que se llama un **GameObject anidado**, en el que los objetos se anidan en múltiples niveles como elementos secundarios de un GameObject. En este caso, el GameObject Monument es el elemento primario y todos los GameObjects Floor son sus elementos secundarios. Al agrupar objetos de este modo, puedes manipularlos a todos juntos y copiar todo el grupo, pero seguir manteniendo las relaciones ente ellos.

[Image: image]

**3.**Duplica el GameObject Platform. El objeto Platform duplicado incluirá los objetos secundarios duplicados. Asígnale el nombre «Roof» a esta copia de Platform.

**4.**Selecciona el objeto Roof y usa las herramientas Move (Mover) y Rotate (Girar) para colocar el techo sobre la estructura. Coloca el objeto Roof en la vista de Escena sin cambiar los números en el componente Transform, pero, cuando termines, los números deberían ser los que se muestran a continuación.

[Image: image]Marcar paso como completado

## 7. Próximos pasos

Q&A (0)

Has creado un monumento en Unity. Al hacerlo, aprendiste algunos conceptos nuevos y pusiste en práctica algunos previos, como los siguientes:

- Crear un GameObject vacío como contenedor para otros GameObjects.
- Duplicar GameObjects.
- Usar el componente Transform para manipular GameObjects secundarios.
- Anidar GameObjects en múltiples niveles.
- Usar las herramientas Move y Rotate para modificar un GameObject secundario.

A continuación, descubrirás el poder que tienes sobre los GameObjects al trabajar más con los componentes.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
