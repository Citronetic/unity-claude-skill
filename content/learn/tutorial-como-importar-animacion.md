[Image: image]

# ¿Cómo importar animación?

Tutorial

Beginner

+10XP

30 mins

1

Unity Technologies

[Image: ¿Cómo importar animación?]Summary

En este tutorial, aprenderás a configurar una animación importada y a usarla en un proyecto existente. Al finalizar este tutorial, podrás hacer lo siguiente:

- Definir los diferentes tipos de esquemas y sus usos.
- Describir cómo se usa un avatar con un esquema humanoide para compartir animación.
- Describir cómo se usa un avatar con un Controlador de animador para controlar la animación.
- Aplicar los clips de animación importados a modelos de esquemas de Unity.
- Configurar una plataforma humanoide para compartir animaciones entre personajes.
- Recortar los Clips de animación para acceder a secuencias específicas de fotogramas clave incluidos en ellas.
- Crear un nuevo Controlador de animador para un esquema importado.
- Compartir los Controladores de animador entre esquemas humanoides.
- Identificar la finalidad de un parámetro especificado.
- Describir la relación entre parámetros y transiciones.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Si bien las herramientas de animación en Unity son poderosas, las animaciones complicadas o muy largas a menudo se realizan en creación de contenidos digitales (Digital Content Creation, DCC) externa. Esto es particularmente cierto cuando se trata de animar personajes que suelen requerir controles complejos para ayudar en el proceso de animación. Debido a esto, a menudo tendrás la necesidad de importar animación externa a Unity. En este tutorial, aprenderás a configurar una animación importada y a usarla en un proyecto existente.

Marcar paso como completado

## 2. ¿Se puede compartir la animación?

Q&A (0)

La animación puede requerir mucho tiempo. A menudo, los animadores tienen que decidir dónde invertir mejor su tiempo en un proyecto y pueden optar por utilizar animaciones preconstruidas para los personajes de fondo o para los conjuntos de animación que no tienen que ser únicos. Esto les permite trabajar en lo que será más visible para el usuario en la experiencia interactiva. No todos los tipos de personajes pueden hacer uso de la animación creada para otro esquema, pero en Unity, cualquier personaje que siga una forma humanoide básica (una cabeza, dos piernas, dos brazos) puede hacer uso del **Sistema de animación humanoide**. En este sistema, Unity traduce la animación existente de un personaje humanoide a otro, según las uniones del esquema. Esto significa que incluso los personajes que se ven drásticamente diferentes pueden compartir el mismo conjunto de animación.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Además de crear la animación por tu cuenta en una DCC, hay cientos de conjuntos de animación disponibles para usar en línea, en especial en la [Tienda de recursos de Unity](https://assetstore.unity.com/3d/animations?category=3d%2Fanimations&free=true&orderBy=1&rows=264). Siempre que las animaciones se creen originalmente con un esquema que cumpla con los requisitos de los humanoides, podrás integrarlas a tu proyecto de Unity. Como siempre, revisa las licencias de cualquier animación que descargues para asegurarte de que puedas usarla en tu proyecto.

Marcar paso como completado

## 3. ¿Cómo compartir el Controlador?

Q&A (0)

**1.**  Abre Animation_SharedAnimation_Scene que se encuentra en la carpeta Scenes (Escenas).

**2.**Ingresa en el **Play mode (Modo Play)** y observa la Escena.

Esta Escena tiene varios personajes juntos en la plataforma en un grupo, pero por ahora solo el del frente está animado. Antes de comenzar a agregar nuevas animaciones al Controlador, asegurémonos de que los otros personajes también puedan animarse.

**3.**  Sal del **Play mode**.

**4.**Localiza el grupo Characters (Personajes) en la Hierarchy (Jerarquía) y amplíalo para ver todos los personajes.

**5.**  Selecciona todos los personajes del grupo y usa el selector de objetos en el Inspector para seleccionar el Controlador de animador Shared_Controller para el parámetro Controller.

**6.**  Ingresa al **Play mode** de nuevo.

Todos los personajes comenzarán a animarse. Aunque todos comparten el mismo Controlador de animador, notarás que se animan de forma diferente. Esto se debe a que el Controlador de animador tiene tres animaciones inactivas entre las que selecciona aleatoriamente. Cada personaje tiene su propia instancia del Controlador de animación (en otras palabras, los personajes individuales tienen su propia copia del Controlador en lugar de funcionar todos desde el mismo), lo que significa que la animación aleatoria seleccionada para el inactivo puede diferir.

Marcar paso como completado

## 4. ¿Cómo configurar el tipo de animación?

Q&A (0)

Al preparar una animación para importarla a Unity, un animador puede crear diferentes archivos para cada animación individual o animarlo todo en uno solo. Cuando se importa un solo archivo que contiene varias animaciones a Unity, se puede dividir en la configuración de importación en la sección Clips. Aquí, puedes definir el fotograma clave de inicio y finalización de cada animación individual, y Unity los separará para su uso.

**1.**  Dirígete a la carpeta **Imported Animations (Animaciones importadas)**, anidada en la carpeta **Animations (Animaciones)**, y selecciona **Dance_x3**.

**2.**  En el Inspector, selecciona la pestaña **Rig (Esquema)** para revelar la configuración de importación de los esquemas.

[Image: image]

Por defecto, incluso los rigs compatibles con el sistema de animación humanoide (**Humanoid Animation System**) tendrán el tipo de animación (**Animation Type**) configurado como **Generic**. El rig **Generic** es útil cuando se trabaja con personajes personalizados que tienen estructuras óseas no estándar, ya que evita compartir las animaciones con otros rigs humanoides. Por otro lado, el tipo de rig **Humanoid** es ideal para personajes humanoides con estructuras óseas estándar; te permite aprovechar las capacidades de retargeting y compartir animaciones que ofrece el sistema de animación humanoide de Unity.

**3.** Selecciona el menú desplegable de Animation Type y elige **Humanoid (Humanoide)** en la lista.

**4.** Haz clic en **Apply (Aplicar)**.

Ahora, las animaciones están configuradas para usarse con el Sistema de animación humanoide.

**Nota:** También puede haber un tipo de animación **Legacy** disponible, pero está relacionado con un sistema de animación más antiguo en Unity. Se considera una característica obsoleta y ya no se desarrolla activamente ni se recomienda para proyectos nuevos.

Marcar paso como completado

## 5. ¿Cómo configurar el primer Clip de animación?

Q&A (0)

Echemos un vistazo a las animaciones que estás importando.

**1.** Con el archivo Dance_x3 todavía seleccionado, selecciona la pestaña **Animation**en la parte superior del Inspector para mostrar la configuración de importación de la animación.

**2.** En la parte inferior del Inspector, selecciona el botón **Play (Reproducir)** para obtener una vista previa de la animación.

El conjunto de animación importado contiene tres secuencias de baile distintas en un Clip de animación. Actualmente, no se puede acceder a estas animaciones de forma individual, así que arreglaremos eso a continuación. La mitad superior de la configuración de importación de Animation contiene la sección Clips, donde puedes definir los Clips de animación individuales.

**3.** En la sección Clips, haz clic en el botón **+** dos veces para duplicar el Clip de animación existente.

**4.**Selecciona el primer clip con la etiqueta Dance_x3 para seleccionarlo en la sección de edición de clips, debajo de Clips, y cambia el nombre de Dance_x3 a Dance_01.

[Image: image]

Este clip será para la primera secuencia de baile, por lo que los fotogramas inicial y final deben definirse para ese movimiento específico.

**5.**  Explora la animación en la ventana de vista previa en la parte inferior de la ventana Inspector y observa dónde comienza y dónde termina la animación.

Justo debajo de la sección donde se cambia el nombre del Clip de animación, hay una línea de tiempo con un parámetro para los fotogramas inicial y final. Esta es la primera animación del clip, por lo que el fotograma inicial puede permanecer en 1, pero es necesario definir el fotograma final.

**6.**  En el parámetro End Frame (Fotograma final), escribe 150.

**7.**  Obtén una vista previa de la animación y asegúrate de que se reproduzca sin interrupciones. Ajusta el fotograma final si es necesario.

La animación se reproduce en bucle en la vista previa, pero en la experiencia real, está configurada para animarse una sola vez.

**8.**  Habilita **Loop Time (Tiempo de bucle)** para que la animación se reproduzca en bucle.

Si obtienes una vista previa de la animación ahora, verás que el plano del suelo en el que está bailando el personaje parece moverse. Esto indica que hay movimiento raíz asociado a esta secuencia de animación. Si se deja como está, cuando se aplica al animador, los personajes se verán como si se deslizaran por el suelo mientras se animan. El movimiento raíz es un tema avanzado que no cubriremos en este proyecto, por lo que simplemente puedes deshabilitar su uso en este Clip de animación integrando los datos en el clip. Esto eliminará el efecto de deslizamiento.

**9.**  Habilita la opción **Bake into Pose (Integrar en la pose)** en Root Transform Rotación (Rotación de transformación de raíz), Root Transform Position o Posición de transformación de raíz (Y) y Root Transform Position (XZ).

Ahora, el plano del suelo en la vista previa estará estable.

Marcar paso como completado

## 6. Configurar los dos clips restantes

Q&A (0)

El proceso que acabas de completar para el primer clip debe repetirse para los dos restantes.

**1.**  Selecciona el segundo clip en la lista Clips, que actualmente se llama "Take 001", y cámbiale el nombre a "Dance_02".

**2.**  Configura Start frame (Fotograma de inicio) en 151.

**3.**  Configura el valor de End frame en 260.

**4.** Habilita **Loop Time**.

**5.**  Habilita la opción **Bake into Pose** en Root Transform Rotation, Root Transform Position (Y) y Root Transform Position (XZ).

**6.**  Selecciona el clip final en la lista Clips y cámbiale el nombre a "Dance_03".

**7.**  Configura Start frame en 261 y deja End frame en 350.

**8.**  Habilita **Loop Time**.

**9.**  Habilita la opción **Bake into Pose** en Root Transform Rotation, Root Transform Position (Y) y Root Transform Position (XZ).

**10.** Desplázate hacia la parte inferior del Inspector y selecciona Apply para guardar todos los cambios de importación.

Marcar paso como completado

## 7. Agrega los nuevos clips al Controlador de animación.

Q&A (0)

Los nuevos clips ahora están totalmente configurados y se pueden agregar al Controlador de animador existente.

**1.** En la carpeta Animations, busca el Controlador de animación Shared_Controller y haz doble clic para abrirlo en el Animator.

**2.** Acopla el Animator justo debajo de la vista de Escena para tener acceso a la ventana Project y al Animator al mismo tiempo.

[Image: image]

**3.**  Busca la animación Dance_x3 en la carpeta Imported Animations y amplíala para ver los tres nuevos Clips de animación.

[Image: image]

**4.** Arrastra los tres clips de baile al Animator sobre algún lugar del nodo **Any State**.

Cuando arrastras un clip de animación sobre el Animator, automáticamente se cera un State Animation de ese clip.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Cada uno de los personajes de la Escena tiene adjunto un script llamado DanceParty. Si quieres revisarlo en Visual Studio, hazle doble clic para abrirlo. La funcionalidad del script es simple; cuando se ejecuta la aplicación, el script accede al animador de cada personaje y comienza a buscar la entrada de teclado del usuario. Si el usuario presiona Q, W o E, el script llamará a un parámetro Trigger llamado Dance_01, Dance_02 o Dance_03, respectivamente.

Vamos a crear esos parámetros en el Animator y conectarlos a los nuevos Clips de animación.

**5.**  Selecciona el botón **+** en la pestaña Parameters (Parámetros) del Animator y selecciona Trigger en la lista.

**6.**  Nombra al nuevo Trigger como «Dance_01» y asegúrate de deletrearlo y escribirlo exactamente como está aquí, de lo contrario el script no funcionará.

**7.**  Crea dos Triggers más y asígnales los nombres Dance_02 y Dance_03.

[Image: image]

Cuando el usuario presione la tecla Q, W o E en el teclado, el personaje deberá detener lo que esté haciendo y bailar. Dado que esto debe suceder en cualquier momento, se utilizará el nodo **Any State (Cualquier estado)**. El nodo Any State puede interrumpir cualquier transición en una Máquina de estado y llamar las animaciones asociadas a él.

**8.**  Haz clic derecho en el nodo Any State, selecciona Make Transition (Hacer transición) y conéctalo al nodo Dance_01.

**9.**  Selecciona la nueva transición y, en el Inspector, haz clic en el botón **+** en la sección de condiciones y selecciona Dance_01 en la lista.

**10.** Haz clic derecho en el nodo Dance_01, selecciona Make Transition y conéctalo al nodo Exit (Salir).

**11.** Repite este proceso para Dance_02 y Dance_03.

**12.** Prueba el juego y presiona Q, W y E

Siempre que presiones Q, W o E en el teclado, los personajes harán la transición de inmediato al baile asociado, lo completarán y luego volverán a la posición inactiva.

Marcar paso como completado

## 8. Explora: Fiesta de baile

Q&A (0)

¡Sigamos con esta fiesta de baile! El Script DanceParty adjunto a los personajes está configurado para tres secuencias de animación más, por lo que puedes agregar un toque personal al Controlador de animador.

- Busca o crea tres nuevas secuencias de animación de baile para la fiesta de baile. Si no sabes dónde buscar, recuerda que hay muchos recursos en la [Tienda de recursos de Unity](https://assetstore.unity.com/3d/animations?category=3d%2Fanimations&free=true&orderBy=1&rows=264).
- Importa las animaciones a Unity y configúralas según sea necesario.
- Agrega los Clips de animación al Controlador de animador.
- Crea tres nuevos parámetros de desencadenador: Dance_04, Dance_05 y Dance_06. Estos parámetros corresponden a las teclas R, T e Y
- Crea transiciones para tus nuevos Clips de animación y recuerda hacer la transición al nodo Exit para que puedas regresar a las animaciones inactivas.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
