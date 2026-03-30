[Image: image]

# ¿Cómo gestionar GameObjects con Prefabs?

Tutorial

foundational

+10XP

0 mins

7

(827)

Unity Technologies

[Image: ¿Cómo gestionar GameObjects con Prefabs?]Summary

En este tutorial, usarás Prefabs para diseñar, crear y organizar muchos GameObjects en una Escena. Al finalizar este tutorial, podrás realizar lo siguiente:

- Explicar cómo usar Prefabs en una Escena.
- Agregar un Prefab a un proyecto.
- Editar un Prefab en el modo Prefab.
- Crear una variante de un Prefab.
- Aplicar o revertir los cambios en una variante de un Prefab.
- Anidar Prefabs.
- Describir el proceso y los resultados al cambiar un Prefab anidado o una variante de un Prefab.

Languages available:

EspañolEnglishEspañol한국어Español

## 1. Descripción general

Q&A (0)

En los proyectos de Unity que creas, por lo general, tendrás que gestionar múltiples GameObjects. En muchos casos, tus GameObjects serán copias de otros; por ejemplo, en un juego de disparos en primera persona, podría haber muchas copias del mismo personaje enemigo, los mismos bloques de piedra para esconderse y los mismos árboles, armas y objetos para agarrar.

Cuando diseñes estos GameObjects, te recomendamos realizar cambios en todas las copias de un elemento. Incluso podrías cambiar todos los árboles y convertirlos en cactus. Si hay muchos árboles, un cambio así podría implicar demasiado trabajo. Pero, en lugar de gestionar muchas copias de elementos, puedes organizar tus GameObjects duplicados al usar Prefabs.

Un **Prefab**es un recurso que funciona como modelo de un GameObject. A partir del Prefab, puedes crear múltiples copias, llamadas **instancias**. Si realizas un cambio en el Prefab, también se modificarán todas sus instancias. Para convertir muchos árboles en cactus, tendrías que modificar un solo árbol Prefab.

En este tutorial, te familiarizarás con los Prefabs. Usarás Prefabs para crear y gestionar muchos objetos que caen en tu proyecto actual.

Marcar paso como completado

## 2. ¿Cómo crear un Prefab?

Q&A (0)

Para que tu Escena sea más divertida, usa Prefabs para crear muchas más bolas que reboten y caigan. Primero, crea un Prefab para usarlo como el prototipo de la bola que rebota:

**1.**Asígnale el nuevo nombre «BouncyBall» al GameObject esfera original que cae.

**2.**Asegúrate que la **BouncyBall**tenga un material regular y un material físico. Modifica el tamaño también, si quieres. Estás por crear muchas copias de esta esfera.

**3.**Como hiciste con los materiales, crea una carpeta para los Prefabs. En la ventana Project, selecciona la carpeta **Assets (Recursos)**y haz clic derecho para seleccionar**Create**>**Folder**.

**4.**Asígnale el nombre «Prefabs» a la nueva carpeta.

**5.**Abre la carpeta para que el panel correspondiente de la ventana Project (en un diseño de dos columnas) muestre la carpeta vacía, donde verás el mensaje «This folder is empty» (Esta carpeta está vacía).

**6.**Desde la ventana Hierarchy (Jerarquía), arrastra **BouncyBall**a la carpeta **Prefabs**. El nuevo recurso en tu carpeta **Prefabs**con el ícono en forma de cubo azul es tu Prefab.

En Hierarchy, el GameObject **BouncyBall** ahora también está de color azul para que sepas que este objeto es una instancia de tu Prefab.

[Image: image]Marcar paso como completado

## 3. ¿Cómo crear instancias de un Prefab?

Q&A (0)

Después de crear tu Prefab, es fácil hacer muchas bolas que reboten y caigan en tu estructura:

**1.**Desde la carpeta **Prefabs**en la ventana Project, arrastra el Prefab **BouncyBall**a tu Escena.

**2.**Arrastra muchas más instancias a tu Escena, hasta 10.

**3.**Coloca las nuevas instancias de **BouncyBall**de modo que caigan en tu estructura. Para que reboten más, colócalas más alto (aumenta el valor de **Position Y**).

**Consejo**: Mantén presionado **Shift** en la vista de Escena o en Hierarchy para seleccionar todas las nuevas instancias de una vez y luego colócalas como grupo.

**4.**Ejecuta tu aplicación y observa cómo caen y rebotan las esferas.

Hasta ahora, esto no es muy emocionante, ¿cierto? Después de todo, podrías duplicar la **BouncyBall**varias veces y obtener los mismos resultados sin usar un Prefab. Pero continúa porque en el próximo paso descubrirás la utilidad de los Prefabs.

Marcar paso como completado

## 4. ¿Cómo actualizar instancias de un Prefab en el modo Prefab?

Q&A (0)

¿Qué pasaría, por ejemplo, si quisieras que todas las instancias de BouncyBall fueran de un color diferente? Puedes modificar el color de todas a la vez al actualizar tu Prefab en el **modo Prefab**, un estado de edición especial en el que puedes cambiar un Prefab en la ventana Escena.

Para ingresar al modo Prefab y editar tu Prefab:

**1.**En Hierarchy, elige una instancia de un Prefab y luego selecciona la flecha en la parte derecha de la fila.

[Image: image]

**Consejo**: Por defecto, el modo Prefab aparece en el contexto de tu Escena. Para editar tu Prefab por separado, presiona **Alt**al mismo tiempo que seleccionas la flecha.

En el modo Prefab, el Prefab es el único GameObject que puedes editar.

[Image: image]

**2.**  En la ventana Project, abre tu carpeta Materials y arrastra un material diferente al Prefab en la ventana Escena. Selecciona un material que se note que es diferente.

**3.**  Selecciona **Save (Guardar)** cerca de la parte superior derecha de la ventana Escena para guardar tus cambios. (Si omites este paso, aparecerá una ventana emergente para que guardes los cambios al salir del modo Prefab). También puedes activar **Auto Save (Guardado automático)** para guardar los cambios en el instante en que los realizas.

**4.**Para salir del modo Prefab, selecciona la flecha en la parte superior izquierda de la ventana Hierarchy.

[Image: image]

Todas las instancias de BouncyBall tendrán el nuevo material.

Este es un simple ejemplo, pero los Prefabs son bastante útiles. Observa estos ejemplos:

- En un modelo de una ciudad, hay 100 parquímetros. Puedes cambiar el texto de todos los parquímetros de una sola vez.
- En un prototipo de un juego, un colega modela el personaje del enemigo mientras tú trabajas en la jugabilidad. Tu marcador de posición para el enemigo es un Prefab de un primitivo con forma de cápsula. Cuando el enemigo esté listo para importar, simplemente puedes reemplazar el objeto con forma de cápsula por el nuevo modelo.

Marcar paso como completado

## 5. ¿Cómo anular propiedades de un Prefab?

Q&A (0)

Si haces un cambio a una propiedad de una instancia de un Prefab, esa propiedad se denomina **override (anulación),**ya que anula la configuración predeterminada del Prefab. La ventana Inspector te ayuda a mantener un seguimiento de los cambios de las anulaciones.

Para hacer variaciones en las instancias de tu Prefab con anulaciones:

**1.**En la vista de Escena, selecciona una de las instancias de tu Prefab BouncyBall.

Con este objeto seleccionado, observa en la parte superior de la ventana Inspector. Hay una sección adicional con el título **Prefab** que muestra los controles que puedes usar para trabajar con el Prefab. (El botón **Open [Abrir]**es otra manera de editar el Prefab en el modo Prefab).

[Image: image]

**2.**Con el componente Transform en la ventana Inspector, cambia los valores de los ejes X, Y y Z en **Scale (Ajustar tamaño)**de este BouncyBall. Haz que el cambio se note en la ventana Escena.

La línea azul en el margen izquierdo de la ventana Inspector indica que la propiedad **Scale** varía con respecto al Prefab original.

[Image: image]

**3.**Con el componente Sphere Collider en la ventana Inspector, selecciona el ícono del círculo para cambiar el valor de Physic Material (Material físico) a **None (Ninguno)**. Ahora no rebotará cuando toque el suelo.

[Image: image]

**4.**Aplica un material diferente a este GameObject para que se vea visiblemente diferente de los otros.

[Image: image]

**5.**Ejecuta la aplicación. Ten en cuenta que la única esfera que no rebota y que tiene un material diferente es la que editaste. Si quieres aplicar esos cambios a todas las instancias de este Prefab, tendrás que aplicarlos al Prefab original.

Acabas de reemplazar tres propiedades: tamaño, material físico y material regular. En los siguientes pasos, harás algo diferente con cada una.

**6.**Con los controles **Prefab**en la parte superior de la ventana Inspector, selecciona **Overrides**para ver una lista de los componentes que difieren del Prefab.

[Image: image]

**7.**Supongamos que te has arrepentido de eliminar el material físico **Bouncy**. Selecciona el componente Sphere Collider (Colisionador esfera) en la lista **Overrides**para ver las dos versiones del componente: **Prefab Source** y **Override**.

[Image: image]

**8.**  Para revertir los valores de Sphere Collider a la configuración original, selecciona **Revert (Revertir)**en la parte superior de la versión **Override**del componente. Esta bola volverá a usar el material físico Bouncy (rebotar).

**9.**  Supongamos que quieres que todas las bolas que rebotan sean tan grandes como esta. Para aplicar la anulación en el componente Transform al Prefab original, regresa al menú desplegable **Overrides**y selecciona **Transform**> **Apply**> **Apply to Prefab “BouncyBall”**. Todas las bolas cambiarán de tamaño.

[Image: image]

Las anulaciones son útiles si quieres realizar variaciones a tus Prefabs de a uno por vez o si quieres probar un cambio antes de aplicarlo a múltiples GameObjects. En el próximo paso, verás cómo organizar diferentes variaciones de tus Prefabs.

Marcar paso como completado

## 6. ¿Cómo crear variantes de un Prefab?

Q&A (0)

Puedes crear redes de variaciones con las **variantes de Prefab**, que son Prefabs basados en otros Prefabs.

Las variantes de los Prefab facilitan la creación de una serie de Prefabs interrelacionados que darán a tu proyecto una apariencia uniforme. Por ejemplo, en un proyecto con muchos árboles, podrías crear un Prefab original de un árbol y luego crear variantes de árboles de manzanas y árboles de duraznos de ese Prefab.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Al realizar cambios al Prefab original del árbol, ese cambio se realizará a todos los árboles de manzanas y duraznos. Al realizar cambios a la variante del Prefab del árbol de duraznos, ese cambio solo se realizará a los árboles de duraznos.

Para crear una variante de un Prefab de la BouncyBall:

**1.**Selecciona la instancia de la BouncyBall en la que estuviste trabajando, que tiene un material diferente de las otras.

**2.**Desde Hierarchy, arrastra esta instancia a tu carpeta Prefabs. Verás una ventana emergente para crear un nuevo Prefab original o una variante de un Prefab.

[Image: image]

**3.**Selecciona **Prefab Variant (Variante de Prefab)**. (Si seleccionas **Original Prefab [Prefab original]**, los cambios que realices al Prefab original no se propagarán a la variante del Prefab).

**4.**En la carpeta **Prefabs**en la ventana Project, cámbiale el nombre a tu nuevo Prefab por algo descriptivo como «RedBouncyBall».

**5.**Para crear más de estas nuevas bolas que rebotan, arrastra las nuevas instancias de este nuevo Prefab a tu Escena y reubícalas para que caigan en tu estructura.

[Image: image]

Ahora verás cómo funcionan las variantes del Prefab en tres experimentos.

#### Experimento 1: cambia una variante de un Prefab.

**6.**Abre el Prefab nuevo (**RedBouncyBall** en nuestro ejemplo) y cambia los valores en **Scale** a algo muy grande, como 5, 5, 5, y regresa a la vista de Escena.

**Consejo**: Puedes hacer doble clic en un Prefab en la ventana Project para abrirlo en el modo Prefab.

Como lo esperas, todas las instancias nuevas se agrandarán, pero las instancias basadas en el Prefab **BouncyBall**original seguirán teniendo el mismo tamaño.

[Image: image]

#### Experimento 2: Cambia el Prefab original.

**7.**Abre el Prefab **BouncyBall**en el modo Prefab.

**8.**En la ventana Inspector, ubica el componente Sphere (Mesh Filter) [Esfera (filtro de malla)] y su propiedad **Mesh (Malla)**. Con el selector (ícono del círculo), cambia la malla a una cápsula.

[Image: image]

Todas las bolas cambian de tamaño, tanto las grandes como las regulares, porque el Prefab RedBouncyBall es una variante del Prefab BouncyBall, entonces, todas las instancias de **RedBouncyBall**heredan estos cambios.

[Image: image]

#### Experimento 3: Cambia una propiedad reemplazada.

**9.**Abre el Prefab BouncyBall en el modo Prefab y cambia su tamaño a 1, 1, 1, y regresa a la vista de Escena.

[Image: image]

Las instancias de BouncyBall original son más pequeñas, pero las instancias de RedBouncyBall no se modifican. Esto ocurre porque las variantes del Prefab RedBouncyBall anulan a BouncyBall en la propiedad Scale. Los cambios del tamaño del Prefab original siguen anulados en la variante del Prefab.

Marcar paso como completado

## 7. ¿Cómo anidar Prefabs?

Q&A (0)

Puedes anidar los Prefabs dentro de otros Prefabs cuando necesites que un tipo de objeto esté dentro de otros. Por ejemplo, en un juego en el que el jugador recolecta frutas de los árboles, hay Prefabs de manzanas, peras y duraznos. Estas frutas crecen en árboles de manzanas, peras y duraznos que también son Prefabs. Los Prefabs de las frutas se anidan dentro de los Prefabs de los árboles.

Intenta anidar por tu cuenta Prefabs para crear formas inusuales:

**1.**Crea un GameObject 3D vacío y arrástralo a tu carpeta Prefabs. Asígnale un nombre a tu Prefab.

**2.**Edita el Prefab en el modo Prefab.

**3.**Arrastra otros Prefabs desde tu carpeta Prefabs a tu nuevo Prefab.

**4.**Agrega estos objetos a tu Escena y observa cómo caen.

**Consejo**: Si uno o más de los objetos en un Prefab anidado tienen un material físico, entonces, los Prefabs individuales tendrán comportamientos independientes y la forma compleja se dividirá cuando caiga. Sin embargo, si ninguno de los objetos tiene un material físico, las formas complejas se mantendrán unidas cuando caigan.

Marcar paso como completado

## 8. Más opciones para probar

Q&A (0)

Ahora sabes bastante sobre Prefabs para crear una colección interesante y bien organizada de primitivos para que caigan, reboten y giren en tu estructura. ¿Puedes crear una Escena con 50 objetos que caigan o tal vez más? Usa los Prefabs para crear una variedad de diferentes formas con diversos tamaños, materiales y materiales físicos. Desafía tus habilidades y prueba algunas de estas técnicas:

- Crea conjuntos de objetos que caigan con diferentes colores (materiales), masas (Mass en el componente Rigidbody) y rebotes (Physic Material), todos basados en Prefabs.
- Crea formas complejas con Prefabs anidados y luego cambia un Prefab que hayas anidado.
- Crea una variante de un Prefab a partir de otra variante y luego cambia las propiedades del Prefab original. ¿Puedes predecir lo que ocurrirá?

Marcar paso como completado

## 9. Próximos pasos

Q&A (0)

Con los Prefabs, puedes crear y gestionar muchos GameObjects. Con los componentes Transform, Physic Materials, Rigidbody y los materiales, puedes crear sofisticados mundos en 3D. No obstante, necesitarás más cubos y esferas. En el próximo tutorial, verás cómo crear GameObjects más sofisticados en tus proyectos sin tener que crearlos desde cero.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
