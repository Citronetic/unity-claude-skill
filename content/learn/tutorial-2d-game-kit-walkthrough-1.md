[Image: image]

# Guía para el Kit de Juego en 2D

Tutorial

Beginner

+0XP

60 mins

122

(233)

Unity Technologies

[Image: Guía para el Kit de Juego en 2D]Summary

- Esta guía te mostrará cómo establecer una Escena vacía para empezar a crear un nuevo nivel con el Kit de Juego. Te guiará a través de algunas de las herramientas fundamentales que se usan en este Kit para crear jugabilidad. El Kit viene con un juego terminado, el cual contiene ejemplos de cada parte del Kit en uso, en caso de que te quedes sin ideas.
- Si ya estás familiarizado con el Kit y necesitas acceder a algún dato rápidamente, échale un vistazo a la [guía de referencia](https://learn.unity.com/tutorial/2d-game-kit-reference-guide) y a la de los [temas avanzados](https://learn.unity.com/tutorial/2d-game-kit-advanced-topics) (en inglés), los cuales se pueden encontrar en la carpeta de Documentación en el proyecto.

Resources

- [2D Game Kit](https://assetstore.unity.com/packages/essentials/tutorial-projects/2d-game-kit-107098)

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Crear una nueva Escena

Q&A (0)

El proyecto nos permite crear una nueva Escena por defecto automáticamente. Esta Escena contiene a Ellen (nuestro personaje principal), una pequeña plataforma, la interfaz de Unity con la vida del personaje y todo lo que necesitas para moverte y atacar.

Vamos a crear una nueva Escena:

- En el menú, en la parte superior, haz clic en **Kit Tools (Herramientas del Kit)**.
- Elige **Create New Scene** **(Crear una nueva Escena)**.

[Image: image]

- Se abre una nueva ventana

[Image: image]

- En el campo vacío junto a **New Scene Name (Nombre de la nueva Escena)**, ingresa el nombre que quieres ponerle a tu nueva Escena.
- Haz clic en **Create (Crear)**.

Unity crea una nueva Escena en la raíz de tu proyecto y añade la Escena a las [Build Settings](https://docs.unity3d.com/Manual/BuildSettings.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931751295) (Configuraciones generadas) por ti.

[Image: image]

Unity también abre la nueva Escena en el Editor, de esa manera podrás comenzar a trabajar en ella.

[Image: image]Marcar paso como completado

## 2. Pintar un nivel

Q&A (0)

El Kit de Juego en 2D usa la herramienta [Tilemap](https://unity3d.com/learn/tutorials/topics/2d-game-creation/intro-2d-world-building-w-tilemap?playlist=17093&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931751295)(Mapa de mosaicos), la cual está diseñada para ayudarte a pintar un nivel de manera rápida y fácil. El Kit tiene todo lo que necesitas ya establecido, así que podrás comenzar de inmediato.

Vamos a empezar a diseñar un nivel:

- En la barra de menús, ve a **Window > 2D > TilePalette.**

[Image: image]

La ventana de Tile Palette (Paleta de mosaicos) luce así:

[Image: image]

Hemos creado dos **Tile Palettes** **(Paletas de mosaicos)** que te permiten pintar niveles. Estos mosaicos usan los sistemas de **Scriptable Tile** **(Comandos secuenciales de mosaicos)** del **Tilemap (Mapa de mosaicos)**de Unity. Eligen el *sprite* (bloque de objetos móviles) correcto automáticamente para una plataforma. Tenemos dos estilos de *sprites*: Las rocas con césped y las estructuras extraterrestres.

Necesitamos asegurarnos de que el conjunto de mosaicos correcto esté elegido en la **Tile Palette**:

- Haz clic en el **Tile Palette Menu (Menú de la paleta de mosaicos)**.
- Selecciona el **Tileset_Gamekit**.
- Elige el tipo de mosaico que más te guste para tu nivel.

[Image: image]

Ahora pintemos algunos mosaicos en la Escena para crear un nivel:

- Haz clic en un mosaico en la **Tile Palette**para seleccionarlo.
- Navega a la **vista Escena**.
- Haz clic y arrastra el cursor para dibujar tu nivel.

Si cometes un error puedes mantener pulsada la tecla Shift y hacer clic o arrastrar el cursor para borrar mosaicos.

[Image: image]Marcar paso como completado

## 3. Testear el nivel

Q&A (0)

Ya que has creado un nivel, es hora de probarlo.

[Image: image]

- Pulsa **Play** **(Jugar)** en la parte superior del Editor

Los controles para Ellen (nuestro personaje) son los siguientes:

[Image: image][Image: image]

Hemos incluido un menú para eliminar fallos. Pulsa F12 en tu teclado para que aparezca la opción para habilitar o deshabilitar cada una de las armas de Ellen en la **vista de Juego**.

Marcar paso como completado

## 4. Añadir una plataforma móvil

Q&A (0)

Antes de empezar a manipular **GameObjects**en la **vista Escena**, asegúrate de que no estés en el modo pintar. Para hacerlo, cierra la **TilePalette (Paleta de mosaicos)** o selecciona **Moving Tool (Herramienta Mover)** en la parte izquierda de la barra de herramientas del Editor (también puedes seleccionar la herramienta Moving —Moving Tool— pulsando W en tu teclado).

[Image: image]

Ahora vamos a añadir una plataforma móvil a nuestro nivel;

[Image: image]

- Navega a la **Project Window** **(Ventana Proyecto)**.
- Ve a**Prefabs > Interactables.**
- Haz un clic izquierdo y arrastra la **Moving Tool**a la **vista Escena.**
- Asegúrate de que la **MovingPlatform** **(Plataforma móvil)** esté seleccionada en la **Hierarchy.**
- Pulsa W para usar la **Moving Tool**.

Usa la **Moving Tool**en la Moving Platform para ponerla donde gustes en tu nivel.

Cuando selecciones la **MovingPlatform**, una línea punteada roja aparecerá con un *gizmo*de la Moving Tool al final (la flecha roja). Esto indica el camino que la plataforma tomará cuando se esté jugando el juego.

[Image: image]

- Usa el *gizmo* de la **Moving Tool** al final de la línea punteada roja para indicar el camino que te gustaría que tome la plataforma.

[Image: image]

Para tener una vista preliminar del camino que tomará la **MovingPlatform**, selecciona **MovingPlatform** y sigue los siguientes pasos:

- Navega hacia el **Inspector.**
- En el componente **MovingPlatform**, encuentra el deslizador para la **Preview Position Slider (Posición de vista preliminar)**.
- Haz clic y arrastra para ver hacia dónde irá la **MovingPlatform**.

Ahora haremos que el camino que tome la plataforma sea algo más complejo, haciéndola que tome una trayectoria en forma de cuadrado. Esto es posible al añadir nodos.

Los **Nodes** **(Nodos)** son puntos de navegación adicionales para el componente **MovingPlatform**.

[Image: image]

- En el Inspector ubica el componente **MovingPlatform.**
- Haz clic en **Add Node (Añadir nodo)** dos veces.

[Image: image]

Esto añade dos líneas rojas punteadas y *gizmos*. Usa los *gizmos* para hacer un cuadrado con los **Nodos**adicionales que creaste.

Te darás cuenta de que no hay un camino desde el último nodo de vuelta al comienzo de la trayectoria. Si presionamos **Play** ahora, la plataforma se detendrá en el último punto, retrocederá hacia el comienzo y comenzará nuevamente.

Puedes cambiar la configuración de la plataforma para hacer que forme un circuito:

- En el componente **MovingPlatform** ubica la opción **Looping.**
- Haz clic en el menú desplegable que dice **Back_Forth** **(Ida y vuelta)**.
- Selecciona **Loop** **(Bucle)**.

[Image: image]

Esto forma un circuito con los *gizmos* y la plataforma toma este camino.

*Nota: El deslizador para la posición de vista preliminar no completa el bucle, así que tendrás que presionar Play para verlo en acción.*

[Image: image]

Cada componente que te hemos proporcionado en el Kit tiene muchas opciones para personalizar la manera en la que trabajan. Para obtener más información sobre lo que cada opción hace en el componente **MovingPlatform**, échale un vistazo a la Documentación sobre componentes y busca la sección sobre la **MovingPlatform**.

Marcar paso como completado

## 5. Abrir una puerta usando Events

Q&A (0)

En el Kit de Juegos en 2D, Events (Eventos) nos permite crear acciones. Usaremos Events para lograr que se abra una puerta cuando el jugador pise una almohadilla de presión.

Vamos a comenzar añadiendo una Puerta (Door):

- En la **Project Window (Ventana Proyecto)** ve a **Prefabs > Interactables**.
- Ubica la **Prefab Door** **(Puerta prefabricada)** y arrástrala a la Scene view (vista Escena). Ponla en algún lugar en donde obstruya el camino del jugador.

[Image: image]

Ahora vamos a añadir una almohadilla de presión a la Escena:

- En la ventana de Proyecto, ve a  **Prefabs > Interactables**  y ubica en los Prefabricados **PressurePad** **(Almohadilla de presión).**
- Arrástrala al suelo en frente de **Door**.

*Nota: Si parece que la almohadilla de presión obstruye el paso del jugador en vez de permitirle que pise sobre ella, bájala un poco. El jugador se podría quedar atascado contra el colisionador.*

[Image: image]

Algunos eventos ya están definidos; por ejemplo, cuando se pisa, **PressurePad**reproduce un sonido y se enciende. Ahora vamos a conectar a **PressurePad** con **Door**.

- En la ventana **Hierarchy**, selecciona **PressurePad.**
- En el **Inspector** ubica el componente **Pressure Pad.**
- En la lista **On Pressed**, haz clic en el + en la parte inferior para añadir un nuevo evento.
- Arrastra el **Door GameObject** **(Objeto de juego Puerta)** desde la ventana **Hierarchy** al campo que dice None(Object) en el evento.
- En el menú desplegable **No Function** **(Sin función)**, ubica **Animator > Play(string)**.

[Image: image]

- En el campo de texto vacío que aparece bajo el menú desplegable, ingresa el texto **DoorOpening (Puerta abriéndose).**

[Image: image]

- Pulsa Play y usa las teclas de movimiento (A y D) para correr sobre **PressurePad**. La puerta debería abrirse.

Todos los **Animation Clips** **(Clips de animación)** están guardados en la **ventana Proyecto**, en **Art > Animations > Animation Clips**. Para reproducir otras Animaciones en un evento, debes asegurarte de que el nombre (string) corresponda exactamente al del **Animation Clip.**

[Image: image]

Si quieres dispararle a un interruptor con tu arma, en vez de poner una almohadilla de presión para activarlo, puedes hacerlo usando las mismas instrucciones, pero en vez de seleccionar la almohadilla, selecciona el **ResusableSwitch** **(Interruptor reutilizable)**. ¡Anímate a probarlo!

Marcar paso como completado

## 6. Enemigos

Q&A (0)

Tenemos dos enemigos terminados en el Kit: Chomper (Masticador) y Spitter (Escupidor). Puedes encontrarlos en la ventana Proyecto, en **Prefabs > Enemies.**

[Image: image]

Ambos son controlados por el componente de **Enemy Behavior** **(Comportamiento del enemigo)**en el Inspector. Puedes usar este componente para ajustar las propiedades como la velocidad del enemigo, el campo de visión (FOV), la vitalidad y muchísimo más. Cada enemigo tiene el mismo Component (Componente) solo que están configurados de una manera un poco diferente. Vale la pena mencionar que puedes configurar valores específicos o puedes hacer clic y arrastrar hacia la derecha o la izquierda en las propiedades del Component para pasar a través de varios valores.

Intenta añadir a **Chomper** a tu Escena. Juega con la configuración para ajustar su velocidad y su campo de visión (FOV). No olvides que cuando estás en el Modo Play (Jugar) puedes pulsar **F12** para asegurarte de que las armas de Ellen estén habilitadas y atacar con **O** o con **K**.

[Image: image]

En la Escena de arriba, hay un **Chomper** seleccionado. Hemos ajustado su **View FOV (Visión CDV)** y la **View Direction** **(Dirección de visión)**, de esa manera no verá a Ellen hasta que se voltee.

[Image: image]

Para más información sobre el componente **Enemy Behavior**, dale un vistazo a la [Documentación sobre los Componentes](https://unity3d.com/learn/tutorials/projects/2d-game-kit/introduction-reference-guide?playlist=49633&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931751295).

Marcar paso como completado

## 7. Dañar con objetos

Q&A (0)

En esta sección vamos a explorar el sistema para dañar. Para hacerlo iremos a través de los pasos para tirar una caja en un Spitter (Escupidor) para matarlo. ¡Pobrecito!

[Image: image]

Vamos a empezar dibujando un nivel en donde Ellen esté en la parte superior y el Spitter esté en una plataforma debajo de una caída, como esta:

[Image: image]

- Ve a **Prefabs > Enemies**y arrastra a Spitter a la **vista Escena.**
- Ponlo en la parte inferior de tu nivel, cerca de la pared del acantilado.
- Con el Spitter seleccionado, encuentra la **Enemy Behaviour Script** **(Secuencia de comportamiento del enemigo).**
- Reduce el valor de la **View Distance** **(Distancia de visión)**, de tal manera que el Spitter no te dispare inmediatamente mientras estás probando este modo de juego.

[Image: image]

- En la **ventana Proyecto** ve a **Prefabs > Interactables**, haz clic y arrastra el Prefab **PushableBox (Caja empujable)** a la vista Escena.
- Selecciona **PushableBox**en la ventana **Hierarchy** y y en el **Inspector** haz clic en **Add Component (Añadir componente)**.
- En el **Campo de Búsqueda** **(Search Box)** ingresa **Damage (Daño).**
- Haz clic en **Damager** **(Hacer daño)**para añadirlo a  **PushableBox**.

El componente **Damager** le dice a cualquier **GameObject**que tiene un **Damageable Component** —como un Spitter o Chomper— que le cause daño. Hay información más detallada sobre este sistema en la[Documentación sobre Componentes](https://unity3d.com/learn/tutorials/projects/2d-game-kit/introduction-reference-guide?playlist=49633&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931751295).

[Image: image]

El componente **Damager** está representado a través de una caja verde de colisión. Esta es el área que causa daño. Ahora no está cubriendo **PushableBox;** de tal manera que si nosotros empujamos la caja para que caiga sobre Spitter, no le causará daño.

Movamos esta caja para que sea del mismo tamaño y esté en la misma posición que **PushableBox**. Hay dos maneras de lograr esto:

- Selecciona y arrastra los puntos verdes a los lados de la caja de colisión verde para que estén sobre **PushableBox.**

[Image: image]

- En el Inspector ubica el componente **Damager.**
- Ajusta el ***Offset*** y el **Size (Tamaño)** para ubicarlo y ajustar la caja de colisión. La manera más fácil de hacerlo es hacer clic en las palabras y arrastrar hacia la izquierda o la derecha para pasar a través de varios valores y encontrar el que mejor te convenga.

[Image: image]

Por último, necesitamos asegurarnos de dañar al **GameObject** correcto. Necesitamos separar objetos en **Layers (Capas)** en el Editor de tal manera que puedan encontrarse fácilmente y ser separados:

- Selecciona **PushableBox.**
- En el Inspector, ubica el componente **Damager.**
- En el menú desplegable **Hittable Layers**selecciona la **Enemy Layer** **(Capa enemigo)**.

[Image: image]

**PushableBox**ahora causará daño a cualquier cosa que esté en la **Enemy Layer**, como nuestro Spitter.

Trata de dañar a otros enemigos ¡e incluso a Ellen!

Marcar paso como completado

## 8. Decorar

Q&A (0)

El Kit incluye *sprites* (bloques de objetos móviles) decorativos, los cuales hemos usado en el juego de muestra «El Explorador» que se incluye en el Kit.

Sugerencia: Si algo te llama la atención dentro del juego de muestra, puedes buscar el nombre y ubicarlo en la ventana Proyecto.

Para asegurarte de que tu nivel sea digno de Instragram, encuentra las decoraciones en la ventana Proyecto en **Art > Sprites > Environment**. Muchos están guardados en subcarpetas, por lo tanto no olvides desplegar los menús señalados por las flechas pequeñas y ver qué otros *sprite*s están en esa categoría.

[Image: image]Marcar paso como completado

## 9. Teletransportar al jugador

Q&A (0)

Es posible teletransportar a un jugador desde un área a otra en una Escena, o entre distintos niveles

#### **Teletransportarse en la misma Escena**

Para teletransportar al jugador en la misma Escena necesitamos establecer una transición. Para esto vamos a hacer dos Prefabs:

- TransitionStart (Comienzo de transición);
- TransitionEnd (Fin de transición).

Primero necesitamos establecer el punto de partida para la transición:

- En la ventana Proyecto ve a **Prefabs > SceneControl.**
- Encuentra el Prefab **TransitionStart.**
- Arrastra el **TransitionStart** a la **vista Escena**. Ponlo en una posición en la que el jugador toque el colisionador (la caja verde) cuando camine. En el ejemplo anterior lo hemos puesto al otro lado de la puerta.

[Image: image]

Para establecer el destino:

- Arrastra otro Prefab **TransitionStart** de la carpeta **SceneControl** a la **vista Escena**.
- En el **Inspector**, cámbiale el nombre a **TransitionEnd**.

[Image: image]

Ahora vamos a enlazar a ambos:

- En la ventana Hierarchy selecciona el GameObject **TransitionStart.**
- En el Inspector, encuentra el componente **TransitionPoint** **(Punto de transición).**
- Arrastra el GameObject **Ellen** de la ventana Hierarchy al espacio del **TransitioningGameObject** **(Objeto de juego transitorio)**del componente del **TransitionPoint.**
- Configura el **Transition Type** **(Tipo de transición)** a **Same Scene**.

[Image: image]

Esto asegura que Ellen sea el único objeto teletransportado y que ella sea teletransportada a la misma Escena.

Ahora vamos a configurar el destino:

- Arrastra el GameObject **TransitionEnd**al **TransitionPoint.**
- Configura el espacio **Transition When** a **On Trigger Enter**.

**On Trigger Enter** significa que la transición solo se activa cuando el jugador entra al colisionador y no cuando se pulsa una tecla. Si prefieres que se teletransporte solo cuando el jugador pulsa la tecla de interactuar E, configura **Transition When** a **Interact Pressed.**

#### **Teletransportarse a otra Escena**

Para hacer que el destino del jugador sea otra Escena necesitamos dos Prefabs:

- **TransitionStart** **(Comienzo de transición)**es el mismo Prefab que usamos en la sección anterior; envía al jugador al destino. Contiene un componente.
- **TransitionPoint** **(Punto de transición)**es el mismo que define todas las propiedades, como dónde comienza la teletransportación y dónde la teletransportación debería llevar al jugador. Coloca este Prefab donde quieras que comience la transición.
- **Transition Destination** **(Destino de transición)**es un Prefab que «recibe» al jugador. Contiene un componente de **Transition Destination**. Coloca este Prefab en una Escena diferente, donde quieras que termine la transición.

#### **Configurar TransitionDestination**

Vamos a configurar el destino primero, de esa manera tendremos toda la información que necesitaremos más adelante cuando configuremos el punto de partida. Para añadir una transición a una Escena, abre esa Escena, navega a la ventana Proyecto y ve a **Prefabs > SceneControl > TransitionDestination**. Colócalo en tu Escena, en la ubicación que quieras que use el teletransportador.

El Prefab **TransitionDestination** contiene un componente **Scene Transition Destination (Destino de transición de Escena)**:

[Image: image]

- Primero, configura la **Destination Tag** **(Etiqueta de destino)** con una letra. No importa qué letra uses siempre y cuando sea el único componente **Transition Destination** (**Destino de transición**) de Escena con esa letra.
- Luego, debes indicar cuál es el GameObject que esperas recibir. Arrastra el **Player’s GameObject (Objeto de juego del jugador)**, Ellen, de la ventana Hierarchy al espacio de **Transitioning GameObject** **(Objeto de juego transferible).**
- Por último, asegúrate de que la Escena de destino esté en la Configuración de tu Editor de Generación. Para hacerlo debes ir a **File > Build Settings**y haz clic en **Add Open Scenes** **(Añadir Escenas abiertas)**.

#### **Configurar Transition Start**

Estas configuraciones son en su mayoría muy similares a la sección anterior, con algunos cambios:

[Image: image]

- Configura el **Transition Type** **(Tipo de transición)** a **Different Level (Otro nivel).**
- Configura el **New Scene Name** (**Nombre de la nueva Escena).**
- Configura la Etiqueta**Transition Destination** **(Destino de transición)** a la letra de la  **Destination Tag (Etiqueta de destino)** que configuraste en el **Transition Destination Component (Componente de destino de transición)**.

#### Ejemplo

Vamos a hacer que el jugador se teletransporte al primer nivel del juego. En tu componente Transition Start, cambia la configuración a lo siguiente:

- Configura el **Transition Type** a **Different Level.**
- Configura el **New Scene Name**a Zona1.
- Configura el **Transition Destination** a A.

[Image: image]

Pulsa Play (Jugar) y camina a donde esté la transición. ¡Deberías ser capaz de ir hasta el principio de la Zona1!

Marcar paso como completado

## 10. ¡Diviértete!

Q&A (0)

La mayoría de los objetos en el Kit interactúan con los System Events (Eventos de sistema) que hemos visto en la configuración de Pressure Pad (Almohadilla de Presión).

Explora las Escenas existentes (Zonas 1 a 5) y mira cómo otros objetos están configurados para usar eventos y los mecanismos que los desencadenan.

Puedes acceder a la [Documentación sobre Componentes](https://learn.unity.com/tutorial/2d-game-kit-reference-guide) para obtener más detalles sobre los componentes y sus parámetros.

¡Esperamos que te diviertas diseñando niveles para tu juego!

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
