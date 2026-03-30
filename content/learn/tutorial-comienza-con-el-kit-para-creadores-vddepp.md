[Image: image]

# Comienza con el kit para creadores: VDDEPP

Tutorial

Beginner

+0XP

5 mins

12

(279)

Unity Technologies

[Image: Comienza con el kit para creadores: VDDEPP]Summary

Cuando hayas completado este proyecto, podrás compartir tu videojuego de disparos en primera persona (VDDEPP) con tus amigos y desarrollarlo más por tu cuenta. También habrás salvado al paciente de un ataque de gérmenes. ¡Una victoria doble!

En este primer tutorial tú vas a:

- configurar el Editor Unity;
- explorar el Editor Unity;
- probar el juego muestra en el kit para creadores.

Cuando hayas terminado, estarás listo para comenzar a hacer tu propio VDDEPP.

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Actualiza tu versión de Unity

Q&A (0)

Doctor, antes de que descargues el proyecto y comiences a batallar gérmenes, vas a necesitar hacer lo siguiente:

- Descargar el Unity Hub.
- Descargar el último lanzamiento oficial de Unity Personal
- Iniciar sesión con tu Unity ID

Si no tienes el último lanzamiento oficial, selecciona la pestaña Installs del menú a la izquierda de la ventana Unity Hub y descárgala.

Marcar paso como completado

## 2. Descarga el proyecto Kit para creadores: VDDEPP

Q&A (0)

Cuando tengas la última versión de Unity, descarga el proyecto para este Kit para creadores:

1. Abre el **Unity Hub**.

2. Selecciona la pestaña **Learn** que está al lado izquierdo de la ventana.

[Image: image]

****

3. Desplaza el cursor hacia abajo y selecciona el proyecto correcto.

4. En la ventana de diálogo, selecciona **Download Project**(Descargar proyecto).

[Image: image]

5. Cuando lo hayas descargado completamente, selecciona **Open Project** (Abrir proyecto).

[Image: image]

El Editor Unity va a importar el proyecto y actualizará cualquier paquete que lo necesite.

6. En el menú en la parte superior, ve a **File > Save** para guardar tu versión del proyecto. También puede usar la combinación de acceso rápido **Ctrl + S** (Windows) o **Cmd + S**(macOS).

¡Eso es todo! Ahora que todo está listo, vamos a explorar cómo funciona el Editor Unity.

Marcar paso como completado

## 3. Importante: En caso de que no puedas guardar tu proyecto en Unity

Q&A (0)

**Ojo:** A algunos usuarios les aparece un error que no les permite guardar proyectos de Unity a través del Hub. Si te ocurre esto, puedes usar la siguiente alternativa:

1. En el menú superior, ve a **File > Close**

2. En la ventana de diálogo Keep Project? Selecciona **Keep**.

[Image: image]

**** 3. Guarda tu proyecto usando la ventana para guardar de tu sistema operativo (OS). Escoge una locación accesible para tu proyecto, tal como una carpeta dedicada solamente a proyectos o tu carpeta Documentos.

4. Una vez que hayas guardado el proyecto, abre el Unity Hub nuevamente.

5. Selecciona **Add** (Agregar) y navega a la locación del proyecto que guardaste. Esto va a agregar tu proyecto a la lista de proyectos o Project List en el Hub.

[Image: image]

6. Haz clic en el proyecto en la lista de proyectos, ábrelo y continúa con el tutorial.

Podrás guardar el proyecto normalmente después de completar este proceso.

Marcar paso como completado

## 4. Un paseo rápido a través del Editor Unity

Q&A (0)

El Editor Unity puede ser intimidante cuando estás comenzando a explorarlo, pero solo necesitas usar cuatro ventanas y la barra de herramientas para completar esta guía y hacer tu juego.

[Image: image]

El Editor Unity tiene cuatro secciones principales:

**1.** **Scene view o la vista de escena**

Aquí es donde puedes editar la escena actual seleccionando y moviendo objetos en el espacio 3D para el juego. En este kit el nivel de juego se contiene en una escena.

**2.** **Hierarchy window o ventana jerarquía**

Esta es una lista de todos los GameObjects en una escena. Los gameObjects incluyen personajes, utilería y decorados que usarás para poblar tu juego. Estos pueden ser ubicados en una jerarquía de base-derivados, la misma que te permite agrupar objetos. Esto significa que cuando se mueve la base de un GameObject, todos sus derivados se moverán al mismo tiempo.

**3.** **Inspector Window o ventana Inspector**

Esta muestra todas las configuraciones que están relacionadas con el GameObject seleccionado actualmente. Tu vas a explorar esta ventana más profundamente durante el recorrido que haremos.

**4.** **Project Window o ventana Proyecto**

Esto es donde tu administras los recursos o **Assets** de tu proyecto. Los recursos son el nombre con el que llamamos a todos los archivos de materiales que se usan en un proyecto; por ejemplo, imágenes, modelos 3D y archivos de sonido). La ventana proyecto se comporta como un explorador de archivos y puede usarse para explorar y crear archivos en tu computadora. Cuando la guía te pida encontrar un recurso o **Asset** en una ruta de archivo, usa esta ventana.

**Consejo:** Si la disposición de tu Editor no concuerda con la imagen de arriba, usa el menú desplegable Layout que está en la parte superior derecha de la barra de herramientas y selecciona **Default**.

Marcar paso como completado

## 5. La barra de herramientas

Q&A (0)

La barra de herramientas incluye una variedad de botones de herramientas muy útiles que te ayudan a diseñar y a testear tu juego.

[Image: image]

#### Play buttons o botones de reproducción

**Play o Reproducir**

Play se usa para testear la escena en la que está cargada en la ventana Hierarchy y te permite testear tu juego en vivo en el Editor.

**Pause o Pausar**

Pause, como te habrás dado cuenta, te permite pausar el juego que se está reproduciendo en la vista de juego. Esto te ayuda a encontrar problemas visuales o de jugabilidad que no podrías ver de otra manera.

**Step o reproducción paso a paso**

Step o reproducción paso a paso se usa para atravesar la escena marco por marco. Esto funciona muy bien cuando estás buscando cambios en vivo en el mundo del juego que sería muy útil ver en tiempo real.ll when you’re looking for live changes in the game world that it would be helpful to see in real time.

#### Manipulación de objetos

[Image: image]

Estas herramientas mueven y manipulan los GameObjects en la vista de escena. Puedes hacer clic en los botones para activarlos o usar una tecla de acceso rápido.

**Herramienta mano**

[Image: image]

Puedes usar esta herramienta para mover tu escena alrededor de la ventana. También puedes usar el botón de en medio en el ratón para acceder a la herramienta.

**Herramienta mover**

[Image: image]

Esta herramienta te permite seleccionar artículos y moverlos individualmente.

**Herramienta rotar**

[Image: image]

Selecciona artículos y gíralos con esta herramienta.

**Herramienta poner a escala**

[Image: image]

Como lo habrás adivinado, esta es la herramienta para poner los GameObjects a escala.

**Herramienta de transformación rectangular**

[Image: image]

Esta herramienta hace muchas cosas. Combina mover, poner a escala y rotación en una sola herramienta que está especializada para 2D y para la interfaz de usuario.

**Rotación, mover o poner a escala**

[Image: image]

Una vez más, esta herramienta hace muchas cosas. También te permite mover, girar y poner a escala GameObject, pero es una herramienta que está especializada para 3D.

#### Navegación con el ratón

Cuando estás en la vista de escena puedes:

- hacer clic para seleccionar tu GameObject en la escena;
- facer clic medio para arrastrar y mover la cámara de la vista de escena usando la herramienta mano;
- hacer clic derecho y arrastrar y girar la cámara de la vista de escena usando el modo vuelo de pájaro, una variación de la herramienta de mano. Mientras lo haces, también puedes mover la cámara a la izquierda y derecha usando A y D; hacia adelante y hacia atrás usando W y S; arriba y abajo usando Q y E.

Para más información sobre cómo mover GameObjects en una escena, por favor consulta la [Navegación en la vista de escena (en inglés).](https://docs.unity3d.com/Manual/SceneViewNavigation.html?_ga=2.191083690.1833783302.1581355583-1968629467.1563827889&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952887989)

Marcar paso como completado

## 6. ¿Cómo se testea el juego?

Q&A (0)

Ahora estás listo para testear el juego y comenzar. Primero, abre la escena del Kit para creadores:

1. En la ventana Project navega a la carpeta Assets > Creator Kit – FPS> Scenes

2. Haz clic doble en el ícono de la escena ExampleScene.

[Image: image]

Una vez que hayas abierto la escena, puedes testear el juego. Selecciona el botón Play en la barra de herramientas para comenzar.

[Image: image]

Debería ser capaz de:

- moverte pulsando las teclas W A S D en tu teclado;
- saltar pulsando la barra espaciadora;
- correr manteniendo pulsada la tecla shift;
- apuntar tu arma usando el ratón;
- destruir gérmenes con la medicina haciendo clic en el botón del ratón cuando hayas apuntado.

[Image: image]

El destruir gérmenes te otorga puntos y usa tu munición de medicina. Puedes ver tu puntaje en la parte superior izquierda de la pantalla y la medicina que te queda para el arma en la parte inferior derecha.

3. Cuando hayas terminado de probar el juego, pulsa escape en tu teclado para que reaparezca el cursor.

4. Haz clic en botón Play otra vez para detener el juego.

Marcar paso como completado

## 7. Cambia las teclas por defecto

Q&A (0)

Si estás usando un teclado que no sea de tipo QWERTY, tal vez quieras cambiar las teclas por defecto que se usan en este juego. Para hacerlo:

1. En la barra de menús superior, ve a **Edit > Project settings** y selecciona **Input**.

2. Haz clic en la flecha para expandir la sección **Axes**.

3. Expande la sección **Horizonta**l y cambia **Alt Negative Button** y **Alt Positive Button**:

[Image: image]

4. Expande la sección vertical y cambia **Alt Negative Button** y **Alt Positive Button**:

[Image: image]

**** 5. Pulsa Ctrl + S (Windows) o Cmd + S (macOS) para guardar los cambios que hiciste.

Marcar paso como completado

## 8. Kit para creadores: VDDEPP nota de lanzamiento para Unity 2019.1

Q&A (0)

Este kit para creadores funciona mejor con el lanzamiento oficial más reciente de Unity. Si encuentras cualquier problema técnico cuando estés trabajando con los tutoriales, por favor envíanos un reporte en el fórum.

El kit para creadores ha sido creado con el propósito de crear más niveles de diseño y de exploración. En el menú de FPSKIT vas a encontrar una opción para una base de datos del juego o **Game Database**. Esta herramienta puede usarse para crear episodios, grupos de niveles que pueden usarse para organizar un juego. Esta y otras funcionalidades serán descritas completamente en un manual venidero para el kit.

Aunque este sistema puede usarse ahora, por el momento algunas de las visuales se muestran incorrectamente:

- Si usas la opción Select Level en el menú In-Game Pause para cargar una escena que creaste como parte de un episodio, se va a cargar sin iluminación.
- Si tratas de seleccionar Next Level cuando llegas al final de la pantalla de juego, este problema va a ocurrir también. Si se ha creado un segundo nivel a través de la base de datos del juego, este nivel también se cargará sin iluminación. Si no se ha creado otro nivel, el primer nivel se recargará sin iluminación.

Este problema no afectará la generación de tu juego y ha sido ajustado para lanzamientos venideros del Editor Unity. Vamos a actualizar este kit para creadores tan pronto como el manual esté disponible.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
