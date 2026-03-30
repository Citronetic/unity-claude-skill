[Image: image]

# La configuración necesaria para el principiante en 3D

Tutorial

Beginner

+0XP

25 mins

9

(648)

Unity Technologies

[Image: La configuración necesaria para el principiante en 3D]Summary

En este primer tutorial tu podrás:

- configurar el Editor de Unity;
- crear un nuevo proyecto (Project) para tu juego;
- explorar el Editor de Unity.

Cuando hayas terminado, estarás listo para empezar a crear tu propio juego.

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. ¿Cómo se configura el Editor de Unity?

Q&A (0)

¡Te damos la bienvenida al proyecto para principiantes en 3D: El paseo encantado de John Lemon! En este proyecto, no solo descubrirás **cómo** crear un juego de sigilo, sino que también cada uno de los 10 tutoriales explica **el principio detrás de cada paso que vayas a tomar**. No se requiere experiencia previa, lo que hace que El paseo encantado de John Lemon sea el juego perfecto para emprender tu viaje con Unity.

En este primer tutorial explorarás el Editor Unity y te prepararás para comenzar a hacer tu propio juego de sigilo.

Antes de que puedas crear un nuevo proyecto necesitas tener la versión 2019.1 del Editor Unity instalada. Para hacerlo puedes instalar el Unity Hub visitando el siguiente enlace: [Descarga la versión personal de Unity](https://store.unity.com/download?ref=personal&_ga=2.136136305.118855196.1542622276-1567279079.1524726059) en el sitio web de Unity. Para obtener información sobre cómo usar el Unity Hub consulta la [Documentación sobre el Unity Hub.](https://docs.unity3d.com/Manual/GettingStartedInstallingHub.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953965650)

**Ten en cuenta lo siguiente:**Si **ya has**descargado *John Lemon's Haunted Jaunt* a través de la pestaña Learn del Hub, necesitas indicar que tu Editor de Unity preferido es 2019.1.

Marcar paso como completado

## 2. ¿Cómo se crea un proyecto (Project)?

Q&A (0)

Para crear un nuevo proyecto para tu juego:

- Abre el Unity Hub.
- Inicia sesión con tu cuenta.
- Haz clic en el botón **New**(Nuevo) en la esquina superior derecha.

[Image: image]

- Ingresa un **Project name** (Nombre del proyecto) — vamos a ponerle el nombre «Principiante 3D».
- Configura la **versión de Unity** a **2019.1**.
- Escoge la carpeta en la que quieras guardar tu proyecto.
- Asegúrate de que el formato sea en **3D**.
- Haz clic en **Create project (Crear Proyecto)**.

[Image: image]Marcar paso como completado

## 3. ¿Cómo importamos Assets (Recursos)?

Q&A (0)

Antes de que explores el Editor de Unity, vamos a importar los archivos Assets (Recursos) que necesitarás para este proyecto. Todos estos archivos están en la Unity Asset Store (Tienda de recursos de Unity), la cual le permite a los creadores de Assets proveer herramientas o archivos a otros usuarios de Unity. Para acceder a la tienda ve a **Window > General > Asset Store**.

La Asset Store (Tienda de recursos) se abrirá dentro de tu Editor.

[Image: image]

Los pasos a seguir para cargar los Assets dentro de la Escena (Scene):

1. En la barra de búsqueda ingresa "3D Beginner: Tutorial Resources" y haz clic en el resultado de la búsqueda.
2. En la página 3D Beginner: Tutorial Resources (Principiante en 3D: Recursos para el tutorial), haz clic en**Download**y espera que termine la descarga.
3. Haz clic en **Import. (Importar).**
4. Una casilla de diálogo aparecerá diciendo que tus Project Settings (Configuración del proyecto) serán reemplazados. Esto es lo que necesitas— haz clic en **Import**para continuar. Esta acción abre la ventana Import Unity Package (Paquete de Importación de Unity).
5. Haz clic en **Import** para traer estos archivos a tu Unity Project (Proyecto de Unity).

¡Eso es todo! Ahora que estás listo para comenzar, vamos a explorar para entender cómo funciona el Editor.

Marcar paso como completado

## 4. La interfaz del Editor de Unity

Q&A (0)

El Editor de Unity puede ser intimidante o abrumante cuando estás comenzando a explorarlo, pero esta guía te ayudará a familiarizarte con ello fácilmente. Si alguna vez te olvidas en dónde algo está ubicado, puedes regresar a este tutorial en cualquier momento.

[Image: image]

#### La ventana Project

La ventana Project enlista todos los archivos y directorios que están en tu proyecto actual. Estos archivos incluyen todas las imágenes, sonidos, modelos 3D y otros artículos que se usan en tu proyecto. Se los conoce en conjunto como **Assets (Recursos)**.

[Image: image]

#### La ventana Console

La ventana Console te mostrará las advertencias y errores que está produciendo tu juego y puede darte información útil para corregir esos errores. Por defecto, la pestaña de la ventana Console está junto a la de la ventana Project. Puedes moverla al arrastrando y soltando la pestaña para anclar la ventana junto a la ventana Project.

[Image: image]

#### La ventana Hierarchy

En Unity los juegos están compuestos de Escenas (Scenes). Considera que una Escena es un nivel en tu juego o un entorno diferente. En cada Escena, tienes una lista de objetos que tiene un lugar en esa Escena (por ejemplo los personajes y la decoración). Estos objetos se llaman **GameObjects**en Unity.

[Image: image]

#### La vista Scene

La vista Scene es una ventana donde podemos ver una presentación preliminar en vivo de lo que hay en esa ventana. Muestra todas las Escenas que están cargadas actualmente y todos los GameObjects en la ventana Hierarchy. Puedes usar esta ventana para ubicar y mover un GameObject en tu Escena. Hacer clic en GameObject en la vista Escena va a resaltarlo en la ventana Hierarchy.

[Image: image]

#### La ventana Game

La vista Game está escondida en forma de pestaña junto a la vista Escena por defecto. Mientras la vista Escena te permite mover GameObjects y echarle un vistazo a la Escena entera, la vista Game te muestra lo que el jugador verá cuando esté jugando el juego. Esto es determinado por lo que está viendo la cámara dentro de tu Scene. En este momento no hay nada visible en la Escena, por lo tanto no puedes ver nada en la imagen de ejemplo:

[Image: image]

#### La ventana Inspector

Cuando seleccionas un GameObject en otra ventana, la ventana Inspector mostrará todos los datos relacionados con ese objeto. Unity usa un **modelo Object - Component (Objeto - Componente)**, lo que significa que puedes añadir diferentes componentes a GameObjects para cambiar sus características. Por ejemplo, un componente Camera (Cámara) le permite al jugador tener una vista dentro de la Escena.

[Image: image]

Todos los GameObjects empiezan con un componente Transform (Transformación) que te permite especificar su posición y rotación en la Escena. Otros componentes son opcionales y puedes añadirlos cuando sean necesarios.

Marcar paso como completado

## 5. La barra de herramientas y la interfaz de usuario de navegación

Q&A (0)

### La barra de herramientas

La barra de herramientas incluye una gama de botones con herramientas útiles que te ayudan a diseñar y a testear tu juego.

[Image: image]

#### Los botones Play (Reproducción)

[Image: image]

**Play (Jugar/Reproducir)**

Se usa Play (Jugar/Reproducir) para testear la Scene que está cargada en este momento en la ventana Hierarchy y la cual te permite testear tu juego en vivo en el Editor.

**Pause (Pausar)**

Pause (Pausar), como lo habrás adivinado, te permite pausar el juego que está rodando en la ventana Game. Esto te ayuda a visualizar problemas o asuntos relacionados a la jugabilidad del juego que de otra manera no serías capaz de ver.

**Step (paso por paso)**

Step se usa para revisar la Escena pausada paso a paso. Esto funciona muy bien cuando estás buscando cambios en vivo en el mundo del juego en los que ayudaría mucho verlos en tiempo real.

#### Cómo manipular objetos

[Image: image]

Estas herramientas mueven y manipulan los GameObjects en la ventana Escena. Puedes hacer clic en los botones para habilitarlos o usar una tecla de acceso rápido.

**La herramienta Hand (Mano)**

Puedes usar esta herramienta para mover tu Escena de un lado al otro dentro de la ventana. Puedes usar el botón de en medio en el ratón para acceder a esta herramienta.

[Image: image]

**La herramienta Move (Mover)**

Esta herramienta te permite seleccionar artículos y moverlos individualmente.

[Image: image]

**La herramienta Rotate (Rotar)**

Selecciona artículos y rótalos con esta herramienta.

[Image: image]

**La herramienta Scale (Poner a escala)**

Como te habrás dado cuenta, con esta herramientas puedes seleccionar artículos y ponerlos a la escala que quieras.

[Image: image]

**La herramienta Rect Transform (Transformación rectangular)**

Esta herramienta hace muchas cosas. Combina las acciones de mover, rotar y ponear a escala en una sola herramienta especializada para objetos 2D y UI (Interfaz de Usuario).

[Image: image]

**Rotar, Mover o Poner a escala.**

Una vez más, esta herramienta hace muchas cosas. También te permite mover, rotar o poner a escala GameObject, pero está especializada para objetos en 3D.

[Image: image]

Otra combinación de acceso rápido muy útil que tal vez querrás recordar es la tecla **F**, la cual te permite enfocarte en un objeto seleccionado. Si te olvidas dónde está un GameObject en tu Scene, selecciónalo en Hierarchy, mueve tu cursor sobre la ventana Scene y pulsa **F** para centrarlo en ella.

[Image: image]

#### Cómo navegar con el ratón

Cuando estás en la ventana Scene, también puedes:

- hacer clic para seleccionar tu GameObject en la Escena;
- hacer clic con el botón medio del ratón para mover el visor de la cámara de la Escena usando la herramienta mano.
- hacer clic derecho y rotar la cámara de la vista Scene usando el modo flythrough (vuelo de pájaro) una variación de la herramienta mano. Mientras haces esto también puedes mover la cámara hacia la izquierda y la derecha usando A y D, hacia adelante y hacia atrás usando W y S, y hacia abajo o hacia arriba usando Q y E.

Para obtener más información sobre cómo mover GameObjects en la vista Scene, consulta [Scene View Navigation (Navigación de la vista Scene)](https://docs.unity3d.com/Manual/SceneViewNavigation.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953965650).

Marcar paso como completado

## 6. Las disposiciones de pantallas o Layouts

Q&A (0)

**Disposiciones de pantallas o *layouts* por defecto**

Puedes disponer la posición de tu Editor de Unity de distintas maneras. Cada disposición de pantalla o *layout* tiene sus propias ventajas y tú encontrarás la que funcione mejor para ti.

Para cambiar la disposición de tu pantalla selecciona **Window > Layouts (Ventana > Disposición de pantalla)** (o usa el menú desplegable Layout en la parte superior derecha del Editor). Puedes escoger entre las disposiciones de pantalla siguientes:

**2 by 3 (2 por 3)**

Esta disposición de pantalla te permite ver tu vista Scene y tu vista Game juntas con tu Inspector. La vista Project y la vista Hierarchy están ubicadas en columnas a la derecha.

**4 Split (División en 4)**

Esta disposición de pantalla es muy útil para ver a los modelos 3D desde diferentes ángulos.

**Tall (Alta)**

Esta disposición de pantalla hace que la vista Scene y el Inspector sean muy claros y agradables a la vista.

**Wide (Ancha)**

Esta disposición de pantalla empuja las ventanas Hierarchy, Project y Assets hacia el fondo del Editor.

**Default (Por defecto)**

Esta disposición de pantalla hace que tu vista Scene o tu vista Game tomen la mayor parte del Editor y también que haya espacio para las ventanas Assets, Hierarchy e Inspector en ambos lados. Se trata de adaptar la disposición de pantalla a las preferencias personales de los usuarios. Todos los tutoriales para John Lemon's Haunted Jaunt usan la disposición de pantalla Default con la ventana Console al costado de la ventana Project (como has visto en la sección de este tutorial que habla sobre la ventana Console).

### **Resumen**

Ahora que sabes un poco más sobre la manera en la que el Editor Unity está organizado —cuando los tutoriales se refieran a la ventana Project, sabrás exactamente dónde buscar para encontrarla. También has añadido Assets (Recursos) al proyecto para tu juego. En el iguiente tutorial comenzarás a trabajar en tu juego al empezar a crear tu personaje jugador.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
