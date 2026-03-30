[Image: image]

# El personaje del jugador: primera parte

Tutorial

Beginner

+0XP

30 mins

2

(436)

Unity Technologies

[Image: El personaje del jugador: primera parte]Summary

En este tutorial tú podrás:

- crear un Prefab para tu personaje;
- comenzar a animar al personaje;
- asegurarte de que tu personaje reaccione a la física.

Al final de este tutorial podrás escribir tu primer*script*para controlar los movimientos de John Lemon.

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. ¿Cómo se guarda una Escena?

Q&A (0)

En el tutorial anterior exploraste el diseño, o *layout*, del Editor de Unity. También descubriste que una Escena (Scene) está formada de GameObjects (objetos de juego) los cuales tienen componentes que especifican cómo funcionan en un juego.

¡Es hora de agregar GameObjects a tu propia Escena!

Cuando se crea un nuevo Project (Proyecto), Unity automáticamente creará una Escena vacía llamada «Untitled» (sin título).

[Image: image]

Ve a **File > Save** (Archivo > Guardar) o pulsa Ctrl + S y luego selecciona dónde quieres que se guarde el archivo. Ya existe una carpeta llamada Scenes, entonces vamos a guardar esta Scene en esa carpeta con el nombre de «**MainScene**» (escena principal).

Verás que esto crea un Scene Asset (recurso de escena) llamado MainScene en la ventana Project.

[Image: image]

Ahora tienes una Scene en donde trabajar. Usaremos esta Scene para el resto de los tutoriales. ¡Recuerda pulsar Ctrl/Cmd + S a menudo para guardar los cambios que has hecho!

Marcar paso como completado

## 2. ¿Cómo se agrega un modelo del personaje?

Q&A (0)

En el tutorial anterior importaste todos los Assets que vas a necesitar para hacer este juego. El primer Asset que usarás es un **3D model**(modelo 3D).

La mayoría de las cosas que verás en un juego 3D son modelos, lo que incluye a los personajes, el entorno y la decoración. Usualmente se crean fuera de Unity y luego se importan y se les da funcionalidad para crear un juego. Para usar estos modelos necesitas agregarlos como GameObjects (esto se llama crear un **instancia** del modelo).

Vamos a añadir John Lemon, el personaje del jugador.

- En la ventana Project, ve a **Assets > Models > Characters**y busca el modelo llamado **JohnLemon**.
- Arrastra el modelo desde la ventana Project a la **vista Scene**. Esto te permite escoger exactamente dónde quieras ubicar al modelo. (También puedes arrastrar modelos a la Hierarchy para crear GameObjects en la posición por defecto).
- Con tu cursor sobre la vista Scene, pulsa **F** para enfocar.

¡Ahora deberías ver el personaje del jugador en la Escena! También puedes encontrar información sobre los GameObjects que acabas de ejemplificar en el **Inspector**. Actualmente tiene dos componentes:

- un componente**Transform**, lo cual significa que tiene una ubicación y tamaño en la Escena;
- un componente**Animator**, lo cual significa que puede ser animado.

[Image: image]

Pero este personaje tiene mucho más que estas características. Por ejemplo, puedes ver el personaje en la vista Scene, pero ninguno de estos componentes explica esto.

- En la **ventana Hierarchy** ubica el GameObject John Lemon.

[Image: image]

Hay una flecha junto al nombre del GameObject —esto significa que un GameObject tiene hijos (jerárquicos).

- Haz clic en la flecha para expandir JohnLemon y ver sus hijos.

Este GameObject tiene dos hijos: un GameObject llamado JohnLemon y otro llamado Root. Selecciona el GameObject hijo llamado**JohnLemon**.

[Image: image]

Este GameObject tiene un componente llamado **Skinned Mesh Renderer.**Esto es lo que te permite ver al personaje.

Los modelos están constituidos por una malla de triángulos y un Mesh Renderer que «reproduce» esa malla de manera que puedas verla. El Skinned Mesh Renderer es un tipo especial de Mesh Renderer (Reproductor de malla) que permite que la malla cambie de forma basada en las posiciones y rotaciones de todos los huesos de un modelo. Estos huesos son GameObjects hijos del modelo —los huesos de JohnLemon son todos hijos del GameObject **Root.**

- En la ventana Hierarchy selecciona el GameObject**Root**. Pulsa Alt (Windows) o Option (macOs) y haz clic en la flecha a la izquierda de su nombre para expandir todos sus GameObjects hijos.

[Image: image]

Cada uno de estos GameObjects representa una parte del cuerpo de JohnLemon.

- Haz clic en el botón **Play** en la barra de herramientas para entrar al modo Play.

[Image: image]

- En la ventana Hierarchy selecciona el GameObject llamado **LeftForeArm**. En su componente Transform, encuentra el campo **Rotation** (rotación)y configura el valor de **Y** a **90**.

[Image: image]

En la vista Scene deberías ver que el brazo izquierdo de John Lemon se ha doblado 90 grados. Fundamentalmente así es como animarás a JohnLemon: el componente Animator en el GameObject padre del personaje cambiará la rotación de todos los componentes Transform de los GameObjects que conforman los huesos y todos estos cambios juntos animarán el personaje.

- Sal del modo Play pulsando el botón Play otra vez. Ten en cuenta que cualquier cambio que hagas mientras estés en el modo Play no será guardado al salir.
- Colapsa todos los GameObjects nuevamente pulsando Alt (Windows) o Option (macOS) y haciendo clic en la flecha junto al GameObject principal JohnLemon.

Antes de que avances más en la creación del personaje, vamos a echarle un vistazo a los Prefabs y cómo te pueden ayudar a crear tu juego.

Marcar paso como completado

## 3. ¿Qué son los Prefabs?

Q&A (0)

Los Prefabs son un tipo de Asset (recurso) especial que representa un GameObject o un conjunto de GameObjects con componentes que ya están configurados. Son como un plano que puedes utilizar para hacer copias de la misma cosa fácilmente. Cada caso de un Prefab está vinculado al Asset del Prefab; por lo tanto, el cambiar el Asset cambiará todas las versiones de los Prefabs en todas las Scenes.

El primer uso de este sistema en tu Project (proyecto) será hacer que el personaje sea un Prefab. Esto significa que, si continúas y haces múltiples niveles para el juego, no necesitarás rehacer un JohnLemon para cada nivel —puedes solo colocar un nuevo Prefab.

Los Prefabs pueden ser identificados en la ventana Hierarchy a través de su nombre en azul y su icono:

[Image: image]

Pero ¡espera un segundo! El GameObject JohnLemon tiene un nombre azul y un icono en forma de cubo azul, pero hay un pedazo de papel blanco sobre el cubo. ¿Ya es el GameObject JohnLemon un Prefab?

Es algo parecido. En Unity los modelos funcionan como Prefabs de solo lectura. Son moldes para crear copias de ese modelo, pero el plano mismo no se puede cambiar.

Marcar paso como completado

## 4. ¿Cómo transformar el personaje en un Prefab?

Q&A (0)

Necesitas poder cambiar cosas en este Prefab, entonces vamos a convertirlo en uno que puedas ajustar:

- Arrastra el GameObject desde la ventana Hierarchy a la carpeta **Assets > Prefabs**  (Recursos > Prefabs)  en la **ventana Project**. Una casilla de diálogo aparecerá preguntándote si queires hacer un Original Prefab (Prefabricado original) o una Prefab Variant (Variante del prefabricado). Selecciona el **Original Prefab** (Prefab original).

[Image: image]

Arrastrar un GameObject de esta manera hace un Prefab sin importar a qué carpeta sea arrastrado. Para mantener los Projects organizados es muy útil guardar todos los Prefabs en la carpeta Prefabs.

- Ahora que el Prefab John Lemon ha sido creado, cualquier cambio que hagas a ese Prefab será reflejado en los casos del Prefab John Lemon dentro de la Scene. Para hacer cambios a un Prefab necesitas abrir el Prefab para editarlo en el modo Prefab. Antes de que lo hagas, guarda la Scene pulsando Ctrl + S (Windows) o Cmd + S (macOS).

¡Ahora puedes abrir el Prefab JohnLemon!

[Image: image]

- En la ventana Inspector haz clic en el botón Open Prefab (abrir el Prefab).

Ahora el Editor Unity está en el modo Prefab. Este modo te saca fuera de la Scene que estabas editando antes y te pone en una Scene temporal que solo tiene el Prefab. La vista Scene ha cambiado un poco: en la parte superior hay una nueva barra que dice **Scenes | JohnLemon** a la izquierda y tiene una casilla con el nombre de Auto Save (autoguardar)a la derecha.

[Image: image]

Scenes | JohnLemon es la miga de pan para el Prefab que está siendo editado actualmente en el modo Prefab. En este caso solo estás editando el Prefab JohnLemon y el regresar a donde estabas desde aquí te llevaría a la Scene que estabas editando.

- Deshabilita la casilla Auto Save (habilitar esto te restará velocidad). El botón Save o Guardar aparecerá de tal manera que puedas guardar manualmente cualquier cambio que hagas en el Prefab.
- La ventana Hierarchy también tiene una nueva barra en la parte superior.

[Image: image]

A la izquierda hay una flecha la que te regresará junto a la migaja de pan. Si haces clic en la flecha ahora te llevaría de regreso a MainScene (Escena principal).

A través de este Proyecto para principiantes en 3D vas a editar Prefabs y la mayoría de las veces lo harás entrando en el modo Prefab. Acostumbrarse a cambiar entre la edición de GameObjects en la Scene y la edición de Prefabs es fundamental para usar Unity.

Ahora estás listo para hacer los primeros cambios a tu Prefab JohnLemon al animarlo.

Marcar paso como completado

## 5. ¿Cómo animar tu personaje?

Q&A (0)

Tu personaje del jugador va a tener dos animaciones diferentes en este juego: una animación de andar para cuando el jugador se mueva y una animación en reposo para cuando no se esté moviendo.

Selecciona el GameObject JohnLemon y échale un vistazo a su componente Animator en el Inspector. La primera propiedad se llama **Controller** (controlador). Esto lleva una referencia a un tipo de Asset llamado un Animator Controller, el cual vas a usar para lograr que JohnLemon se mueva.

Los Animator Controllers (Controladores de animación) contienen una **máquina de estado** la que determina qué animación el componente Animator debería configurar para su jerarquía en cualquier tiempo determinado. Esta animación se base en clips animados que han sido configurados en el Animator Controller.

Marcar paso como completado

## 6. ¿Como se crea el Animator Controller (Controlador de animación)?

Q&A (0)

Primero, vamos a hacer un Animator Controller (controlador de animación)

- En la ventana Project, encuentra la carpeta **Assets > Animation > Animator**(Recursos > Animación > Animador)**.** Haz clic y selecciona **Create > Animator Controller**(Crear > Controlador de animación)**.**

[Image: image]

- Ponle el nombre «JohnLemon» al AnimatorController, luego haz clic doble en él para editarlo en la **ventana Animator**. La ventana Animator tiene dos secciones principales:

La ventana Animator tiene dos secciones principales:

- Un panel para editar Animator Layers (capas de animación) y Animator Parameters (parámetros de animación) a la izquierda.
- Un área la cual muestra la máquina de estado misma a la derecha.

Haz clic en la pestaña **Parameters** (Parámetros) en la parte superior izquierda de la ventana Animator.

La máquina de estado del Animator Controller toma decisiones basadas en los valores actuales de sus **Animator Parameters** (parámetros de animación). Estos Animator Parameters tienen valores configurados por un *script*. Necesitarás un parámetro por cada variable independiente que pueda afectar la animación que el personaje está reproduciendo.

JohnLemon tendrá dos animaciones: una animación en reposo para cuando no se está moviendo y una animación andante para cuando se mueve. Entonces hay dos estados en los que puede estar: caminando o en reposo. Hay cuatro tipos de parámetros:

Hay cuatro tipos de parámetros:

- Un parámetro **float** tiene el valor de una variable de punto flotante (un número con decimales).
- Un parámetro **int**tiene el valor de un entero (un número sin decimales).
- Un parámetro **bool** tiene el valor de un booleano (el que puede ser true —verdadero— o false —falso—).
- Un parámetro **trigger** es un tipo especial de parámetro que no contiene un valor —causa un cambio de una animación a otra.

En este caso sabes que el personaje está caminando o está inmóvil; por lo tanto, un parámetro **bool** es lo más lógico.

- Haz clic en el botón y selecciona **Bool**del menú desplegable y crea un nuevo Bool Animator Parameter (Parámetro de animación booleano).

[Image: image]

- Ponle al nuevo Animator Parameter el nombre de «**IsWalking**» (está caminando). Es importante que escribas y uses las mayúsculas de manera exacta —entenderás por qué en el próximo tutorial cuando escribas tu primer script.

A la derecha del nombre del parámetro IsWalking hay una casilla deshabilitada.

[Image: image]

Este es el valor por defecto del parámetro. Sin el ingreso de datos del jugador tu personaje va a estar inmóvil; por lo tanto, IsWalking debería ser falso. Esto significa que no tienes que cambiar nada aquí.

Marcar paso como completado

## 7. ¿Cómo se configuran las animaciones?

Q&A (0)

Ahora tienes una manera de determinar qué animación reproducir, pero no hay ninguna animación lista aún —vamos a configurarlas.

- En la ventana Project ve a la carpeta**Assets > Animation > Animation window** (Recursos > Animación > Ventanta Animación) **.**

Actualmente las animaciones tienen iconos mostrando a lo que se parecen. Sin embargo, en este caso será más fácil si puedes ver los Assets en un listado. Encuentra el deslizador en la parte inferior derecha de la ventana Project y arrástralo hacia la izquierda, hasta que llegues al final.

[Image: image]

Deberías ver cinco modelos, dos de los cuales comienzan con **John@.** Esta manera de nombrar te permite saber que estas son animaciones para JohnLemon.

[Image: image]

Expand both **John@Idle** and **John@Walk,** so you can see their sub-Assets.

Los subrecursos muestran los hijos del GameObject padre (recuerda, los modelos son ejemplificados como GameObjects), las mallas y las animaciones. Para estos modelos, las animaciones son Idle (en reposo) y Walk (caminar) respectivamente.

- Para usar esas animaciones en tu Animator Controller arrástralas desde la ventana Project a la ventana Animator. Comienza con **Idle**.

[Image: image]

- Las animaciones existen en un Animator Controller en **Animator States** (estados de animación). Cuando arrastras las animaciones Idle y Walk, el Animator Controller crea dos estados que los contiene y les pone el nombre de las animaciones.

Un Animator State es parte de la máquina de estado que contiene un Animator Controller. La máquina de estado contiene lógica, la cual determina qué estado es el actual. El estado actual luego determina la animación que se está reproduciendo.

[Image: image]

El estado por defecto se muestra en **anaranjado**. En este caso el estado por defecto es **Idle** porque lo arrastraste primero. El estado por defecto puede cambiarse al hacer clic en un estado y seleccionando Set As Layer Default State (Configurar como el estado de la capa por defecto).

Tu máquina de estado ahora tiene dos estados dentro de ella, pero no tiene ninguna lógica que define que estado debe reproducir. Actualmente la máquina de estado comenzará en el estado por defecto y no cambiará nunca; por lo tanto, JohnLemon siempre estará en reposo. Para añadir un poco de lógica necesitas crear **Animator Transitions** (Transiciones de animación).

Marcar paso como completado

## 8. ¿Cómo se crean las Animator transitions (transiciones de animación)?

Q&A (0)

Para crear Animator transitions (transiciones de animación):

- Haz clic en el estado Idle y selecciona Make Transition. Esto empieza una transición que sigue el cursor del ratón.

[Image: image]

Para terminar de crear la transición haz click en el estado Walk.

- Tu personaje necesita poder regresar de un estado de reposo a uno donde camine; por lo tanto, repite este proceso para crear una transición de Walk a Idle. La máquina de estado debería parecerse a esto:

[Image: image]

- La máquina de estado tiene una manera de hacer una transición desde las dos animaciones, pero aún no sabe cuándo hacerla ¿Recuerdas haber creado el parámetro IsWalking? Esto es lo que usarás para determinar si la máquina de estado debe cambiar de animación o quedarse en la misma.

Selecciona la transición de **Idle** a **Walk** haciendo clic en la línea de conexión.

- En el Inspector, échale un vistazo a la configuración para esta transición. Lo primero que necesitas cambiar es la **casilla** **Has Exit Time**.

[Image: image]

Si Has Exit Time es verdadero (si la casilla está habilitada) luego después de que cierto tiempo haya pasado, la transición será tomada y la máquina de estado reproducirá el siguiente estado. En este juego es importante cuando se toma la transición; por lo tanto, **deshabilita** la casilla **Has Exit Time** (Tiene tiempo de salida).

Un poco más abajo de la ventana Inspector verás una advertencia que dice: «Transition needs at least one condition or an Exit Time to be valid, otherwise it will be ignored» (La transición necesita al menos una condición o un Tiempo de salida para que sea válida, de otro modo será ignorada). Porque acabas de deshabilitar la casilla Has Exit Time actualmente no hay una razón por la que se deba tomar esta transición. Necesitas darle una añadiendo una **Condition**(condición).

Marcar paso como completado

## 9. ¿Cómo se añaden Conditions (condiciones) a tu transición?

Q&A (0)

To add Conditions to your transition:

- Haz clic en el botón debajo del botón debajo de lista (actualmente vacía) Conditions.
- Se requiere la transición Idle to Walk cuando el personaje está caminando —es decir cuando **IsWalking** es **verdadero**.

[Image: image]

La Condition por defecto creada es realmente lo que necesitas aquí: si IsWalking es verdadero, JohnLemon debería transicionar de Idle a Walk. ¡No tienes que cambiar nada!

Luego, necesitas configurar la transición de Walk a Idle. Esta transición tiene requisitos similares.

- Selecciona la transición de **Walk** a**Idle** en la ventana Animator. **Deshabilita** la **casilla** **Has Exit Time** —como antes, no quieres que el estado cambie después de cierto tiempo determinado, solo cuando lo quieras.
- Ahora que la casilla Has Exit time está deshabilitada necesitas crear otra Condition.

Esta Condition también debería verificar IsWalking, pero esta vez el valor debería ser configurado como falso. Si el personaje no está caminando entonces debería transicionar de Walk a Idle.

¡El Animator Controller está listo!

Marcar paso como completado

## 10. ¿Cómo se le asigna un Animator Controller al Prefab JohnLemon?

Q&A (0)

Todavía necesitas decirle al JohnLemon Prefab que este es el Animator Controller que debe usar:

- En la ventana Project, ve a Assets > Animations > Animators (Recursos > Animations > Animators) y encuentra el Animator Controller JohnLemon.
- Selecciona el GameObject JohnLemon en la ventana Hierarchy y luego arrastra el Animator Controller a la propiedad Controller de su componente Animator en el Inspector. Este es un paso muy importante sin el cual JohnLemon no podrá moverse.
- Haz clic en el botón Save en la parte superior derecha de la ventana Scene (tal vez necesites seleccionar la pestaña Scene para hacerlo).

Ahora todos los casos del Prefab John Lemon han sido actualizados para que incluyan tus cambios.

Marcar paso como completado

## 11. ¿Cómo logras que tu personaje reaccione a la física?

Q&A (0)

Tu personaje va a estar deambulando alrededor de una casa embrujada con diferentes habitaciones y corredores que explorar. ¡Desde que no es un fantasma, es importante asegurarnos de que no pueda caminar a través de paredes!

Para hacerlo, tienes que asegurarte de que el JohnLemon Prefab reacciona a la **física**

- Abre el Prefab JohnLemon para editar en el modo Prefab. En el Inspector encontrarás dos componentes: un Transform y un Animator. Para reaccionar a la física tu personaje necesita dos componentes más: un Rigidbody (cuerpo rígido) y un Collider (colisionador).

 Un componente **Rigidbody** marca un GameObject como algo que es parte del sistema físico que puede moverse. Ya que definitivamente quieres que tu personaje pueda moverse y queremos que choquen en contra de paredes (por lo tanto, ser parte del sistema físico), el GameObject JohnLemon necesita un componente Rigidbody.
- Haz clic en el botón **Add Component**(Añadir componente).

[Image: image]

- En la barra de búsqueda que aparecerá ingresa «Rigidbody» y selecciónalo de las opciones que aparecerán.

[Image: image]

Este es un proyecto en 3D; por lo tanto, asegúrate de que hagas clic en Rigidbody y **no** en Rigidbody 2D. Si accidentalmente añades un componente, puedes removerlo usando el menú de contexto del componente —el engranaje en la parte superior derecha del componente.

[Image: image]

- Guarda lo que has hecho hasta ahora en el Prefab JohnLemon para asegurarte de que no pierdas nada.
- Desde que le has dado un componente Rigidbody al Prefab JohnLemon, va a reaccionar a los efectos físicos como la gravedad. Vamos a entrar al modo Play y verlo en acción. Regresa a la MainScene haciendo clic en **Scenes**en la parte superior de la vista Scene, luego pulsa el botón Play en la barra de herramientas.

[Image: image]

Mmmm, eso no está bien: el personaje se cae una distancia corta y luego se detiene. Pulsa el botón Play otra vez para salir del modo Play.

Esto está siendo ejemplificado por el Animator. La tercera propiedad en el componente Animator es **Apply Root Motion** (Aplicar movimiento de raíz), la cual está habilitada actualmente.

Marcar paso como completado

## 12. ¿Qué es Root Motion (Movimiento de raíz)?

Q&A (0)

Las animaciones se usan para mover y rotar todos los GameObjects en una jerarquía en particular. La mayoría de estos movimientos y rotaciones se hacen relativos a sus padres; sin embargo, el GameObject padre de la jerarquía no tiene un padre y por lo tanto sus movimientos no son relativos. Este GameObject padre también se llama Root (raíz) y por ende su movimiento se llama Root Motion (Movimiento de la raíz).

**¡Ojo!** El GameObject llamado Root en la jerarquía del Prefab JohnLemon se refiere a la raíz de su esqueleto y no a la raíz del GameObject. El GameObject llamado Root en la jerarquía del Prefab JohnLemon se refiere a la raíz de su esqueleto y no a la raíz del GameObject.

Apply Root Motion está habilitado en tu componente Animator de tal manera cualquier movimiento de la animación será aplicado a cada marco. Desde que el Animator está reproduciendo Idle no hay ningún movimiento; por ende, el Animator no aplicará ningún movimiento. Entonces ¿por qué se mueve el GameObject JohnLemon? Esto es gracias al **modo Update** (actualizar) del Animator.

Marcar paso como completado

## 13. ¿En qué consiste el bucle Update (Actualizar)?

Q&A (0)

Los juegos funcionan de manera similar a las películas y a la televisión: se muestra una imagen en una pantalla y esta imagen cambia muchas veces por segundo dando la ilusión de movimiento. Estas imágenes se llama marcos o fotogramas. El proceso de dibujar estos marcos en la pantalla se llama **rendering** (representar o renderizar). En las películas o en la televisión la próxima imagen que se muestra en la pantalla a menudo está predefinida, pero en los juegos la imagen siguiente puede variar extremadamente porque el usuario tiene influencia en lo que ocurre luego. Cada imagen necesita resolverse de acuerdo en el ingreso del usuario —y desde que esta variante puede pasar cada milisegundo, la programación que resuelve lo que se muestra también trabaja a esa velocidad. Esto se llama el **bucle Update** (actualizar).

Cada vez que se muestra un marco, una lista de cosas se muestran en orden. Todo lo que necesitas saber por ahora es que componentes personalizados tienen un método Update que se invoca y una nueva imagen se reproduce en la pantalla. Estos Updates varían in longitud, dependiendo en la complejidad de las computaciones y las reproducciones. Sin embargo, hay otro bucle separado que ejectura todas las operaciones de física. Este bucle no varía cuán a menudo se actualiza y por lo tanto se llama **FixedUpdate** (Actualización fija).

Un componente Animator puede cambiar cuando ejecuta su actualización. Por defecto ejecuta esto de acuerdo con la reproducción. Esto significa que el Animator está moviendo al perosnaje en Update y el Rigidbody está moviendo el personaje simultáneamente en FixedUpdate. Esto es lo que está causando tu problema y puede ser remediado fácilmente.

Marcar paso como completado

## 14. ¿Cómo puedes arreglar los movimientos de John Lemon?

Q&A (0)

Primero regresemos a editar el Prefab:

- En la ventana Inspector haz clic en el botón Prefab **Open** (abrir el Prefab)

[Image: image]

- Ve al componente Animator. En el menú desplegable Update Mode Property, selecciona **Animate Physics**.

[Image: image]

Este cambio causará que el Animator mueva al personaje a tiempo con la física. Ahora no debe haber competición entre los bucles de actualización para mover al personaje y reaccionará a la física como es debido.

- Ya has visto que las animaciones no tienen ningún movimiento vertical de raíz, pero esto no hará que John Lemon no se mueva verticalmente después de que se chueque con algo. Hay algunas maneras en las que se puede detener.

La opción más obvia es deshabilitar Use Gravity (Usar gravedad) en el componente Rigidbody.

[Image: image]

Esto no permitiría que el personaje se caiga, pero no es exactamente lo que necesitas. Si deshabilitas Use Gravity entonces el personaje todavía podría caerse si un choque lo empuja hacia abajo —o flotaría si un choque lo empuja hacia arriba. Definitivamente no quieres que esto occura, entonces necesitas **limitar el movimiento del personaje usando la física.**

- Encuentra el componente Rigidbody y haz clic en la flecha para expandir la propiedad **Constraints**(restricciones).

[Image: image]

Estas propiedades Constraint restrigen la dirección en la que el Rigidboy puede moverse.

Vamos a explorar el sistema de coordenadas de Unity para entender exactamente cómo funcionan.

Marcar paso como completado

## 15. El sistema de coordenadas de Unity

Q&A (0)

Las posiciones y las direcciones en Unity trabajan en coordenadas 3D representadas por las letras x, y y z —juntas estas forman un vector. Descubrirás más sobre los vectores en el próximo tutorial. Una Scene tiene una definición global de estas direcciones de tal manera que puedas verlas en la parte superior derecha de la ventana Scene.

[Image: image]

Las flechas de colores representan la dirección positiva de cada eje y las líneas grises opuestas representan la dirección negativa:

- el eje horizontal (o de las equis) es rojo.
- el eje vertical (o de las yes) es verde.
- el eje z es azul.

Marcar paso como completado

## 16. Posiciones y rotación

Q&A (0)

Todos los GameObjects sin padres jerárquicos en la escena tienen **posiciones** relativas al origen de la escena (0, 0, 0). Todos los GameObjects con padres tiene posiciones relativas a su padre. Sin embargo, desde que los GameObjects pueden rotarse, la posición relativa (o local) de un hijo será en las coordenadas en rotación de su padre. Los Rigidbody Constraints se refieren a estas coordenadas locales.

Vamos a echarle un vistazo a los ejes locales del GameObject JohnLemon:

1. Selecciona el GameObject JohnLemon y luego échale un vistazo a la vista Scene.

[Image: image]

Verás que:

- el eje horizontal (rojo) está apuntando hacia la derecha del personaje
- el eje vertical (verde) está apuntando hacia arriba
- el eje z (azul) está apuntando hacia adelante

Entonces, ¿qué limitaciones debería tener tu personaje?

Tu personaje necesita poder moverse hacia adelante y de un lado al otro; por ende, no hay necesidad de limitar su posición x o z. Sin embargo, es importante que no se mueva hacia arriba o hacia abajo. Para eliminar esa posibilidad habilita la casilla **Freeze Position Y** (Congelar la posición Y).

- Rotation (rotación) se refiere a la rotación alrededor de un eje específico. Por ejemplo, si el personaje fuera rotado alrededor de su eje horizontal entonces parecería que estuviera acostado supino o prono:

[Image: image]

Si fuera rotado alrededor de su eje Z, parecería que estaba acostado de lado:

[Image: image]

John Lemon no se debería mover en ninguna de estas direcciones; por lo tanto, habilita las casillas **Freeze Rotation X y Z.** John Lemon necesita darse la vuelta; por lo tanto, mantén la casilla Freeze Rotation Y habilitada.

[Image: image]

El componente Rigidbody está configurado y tu personaje reaccionará al sistema de física. Sin embargo, en realidad no tiene una presencia física en la Scene todavía. Nada puede chocarse contra él y no puede chocar contra nada. Para que tenga una presencia física en la escena necesita un **Collider**(Colisionador).

Marcar paso como completado

## 17. ¿Cómo añadirle un Collider (Colisionador) a John Lemon?

Q&A (0)

Un Collider es un término general que cubre un número de componentes distintos. Los Colliders definen la forma de un objeto con el propósito de colisiones físicas, lo que le permite a tu personaje golpear cosas y que lo golpeen. Hay componentes Collider de muchas formas distintas, pero la más simple que le queda bien a JohnLemon es el **Capsule Collider** (Colisionador en forma de cápsula).

- Haz clic en el botón Add Component (Añadir componente) en la ventana Inspector y encuentra el Capsule Collider. Selecciona la opción **Capsule Collider**, asegurándote de que no hagas clic en Capsule Collider 2D.

[Image: image]

- Actualmente el Capsule Collider realmente no cubre el modelo; por lo tanto, las colisiones en el juego no funcionarían bien —necesitas cambiarlo de tamaño y de posición para que sea aproximadamente de la forma de JohnLemon.

 Cambia la propiedad**Height** (Altura) del Capsule Collider a **1,4**y la propiedad Center (Centro) a (**0, 0,7, 0**).

Estos cambios significan que el medio del colisionador está a la mitad de su altura medida desde el suelo y desde que JohnLemon mide aproximadamente 1,4 metros (o 140 cms.) la forma lo cubre bastante bien.
- Todavía está un poquito ancho —cambia la propiedad **Radius** (Radio) del Capsule Collider a **0,4**.

[Image: image]

¡Parece que logramos que la cápsula sea del tamaño correcto!

[Image: image]

Ahora tienes un personaje que reaccionará a la física tal como lo necesitas, chocando contra las paredes, pero sin caerse.

Marcar paso como completado

## 18. Resumen

Q&A (0)

En este tutorial empezaste a trabajar con el personaje para tu juego. Ahora tienes una ligera idea del poder de los Prefab y has creado un conjunto de reglas simples que gobiernan cómo se comportará JohnLemon. ¡En el siguiente tutorial explorarás la última parte del rompecabezas que forma el personaje al escribir tu propio script!

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
