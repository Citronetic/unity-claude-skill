[Image: image]

# ¿Cómo controlar la animación con un Animador?

Tutorial

Beginner

+10XP

50 mins

1

Unity Technologies

[Image: ¿Cómo controlar la animación con un Animador?]Summary

En este tutorial, crearás una puerta que se animará según la proximidad del jugador. Al hacerlo, aprenderás sobre los Animadores, los Controles de animadores y las Máquinas de estado básicas. Al finalizar este tutorial, podrás hacer lo siguiente:

- Configurar un nuevo Clip de animación.
- Grabar una animación de GameObject mediante el Record Mode (Modo de grabación)
- Agregar fotogramas clave a un Clip de animación.
- Identificar la finalidad de un parámetro especificado.
- Describir la relación entre parámetros y transiciones.

Resources

- [Animator Component](https://docs.unity3d.com/6000.0/Documentation/Manual/class-Animator.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953344479)
- [Animator Controller](https://docs.unity3d.com/6000.0/Documentation/Manual/class-AnimatorController.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953344479)
- [Colliders](https://docs.unity3d.com/6000.0/Documentation/Manual/CollidersOverview.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953344479)

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

En todos estos tutoriales hasta el momento, has creado animaciones que se reproducen en bucle continuamente tan pronto como se reproduce la Scene (Escena). Sin embargo, hay muchas situaciones en las que es posible que solo quieras que una animación se reproduzca una vez o que quieras controlar en qué momento se debe reproducir.

En este tutorial, crearás una puerta que se animará según su proximidad al jugador. Al hacerlo, aprenderás sobre los Animadores, los Controles de animadores y **Máquinas de estado** básicas.

Marcar paso como completado

## 2. ¿Cómo crear la animación de la puerta?

Q&A (0)

Si bien crearás una función para que la puerta se abra y se cierre, solo tendrás que crear una animación para la puerta abriéndose. A partir de esa animación, podrás crear todo lo demás en los siguientes pasos.

**1.**En Unity, abre **Animation_Door_Scene** que se encuentra en la carpeta Scenes.

**2.**  Selecciona el GameObject Door (Puerta) en la Hierarchy (Jerarquía).

Antes de comenzar a animar, es importante verificar dónde está el **punto pivote o punto eje** de la puerta. Un punto pivote es el punto de un objeto donde se produce el movimiento. En los ejercicios de animación anteriores, la ubicación del punto pivote no importaba, pero las puertas son diferentes porque se mueven de una forma muy específica. Es importante reproducir el tipo de movimiento adecuado para que la animación no se vea extraña. Para las puertas, el punto pivote es donde la puerta se uniría al marco en la pared. La puerta de tu Escena está configurada con el punto pivote adecuado, pero es importante verificar que Unity haga referencia de forma adecuada.

**3.** Selecciona la puerta. Cuando se selecciona, el widget de movimiento debe aparecer en el borde de la puerta. Si aparece en el centro, selecciona el botón **Toggle Tool Handle Position (Alternar posición del control de la herramienta)** en la parte superior del Editor, sobre la Hierarchy, para cambiar el valor de selección de Center (Centro) a Pivot o Pivote.

[Image: image]

Ten en cuenta que el GameObject Door tiene varios objetos secundarios anidados. Asegúrate de animar solo el objeto Door y no uno de sus GameObjects secundarios.

**4.**  En el Editor de animación, haz clic en el botón Create (Crear) para crear un nuevo Clip de animación. Cuando se te solicite, guarda la animación como "Door_Open" en la carpeta de animación del proyecto.

**5.**  Haz clic en el botón **Record (Grabar)** en el Editor de animación.

**6.**  Haz clic en el botón Add Property (Agregar propiedad) y selecciona **Transform >** **Rotation.**

**7.**Haz avanzar el Indicador de reproducción al fotograma clave generado en la marca 1:00 y gira la rotación de Y de la puerta a 90.

**8.** Obtén una vista previa de la animación al presionar Play (Reproducir) en el Editor de animación. La puerta debe girar a una posición abierta. Si prefieres que la puerta se abra en el sentido opuesto, edita el fotograma clave final para que gire -90.

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

**9.**  Vuelve a pulsar el botón **Record** para salir del modo de edición.

**10.**  En la ventana Project, dirígete a la carpeta Animations (Animaciones) y selecciona la animación Door_Open que acabas de crear.

**11.**  En el Inspector, desactiva **Loop Time (Tiempo del bucle)**. Con esta opción desactivada, la animación solo se reproducirá una vez, en lugar de hacerlo en un bucle sin fin cuando se reproduzca la Escena.

[Image: image]Marcar paso como completado

## 3. ¿Cómo explorar el Controlador de animador?

Q&A (0)

Ahora, selecciona el objeto Door. Puedes ver que se ha agregado un nuevo componente Animator (Animador) en el Inspector. Los componentes Animator se crean automáticamente siempre que se crea el primer Clip de animación para cierto GameObject seleccionado. El Animator es responsable de asignar la animación; sin embargo, no controla los Clips de animación reales. Esta tarea le corresponde al Controlador de animador, que también se crea automáticamente con el primer Clip de animación. En el componente Animator de Door, puedes ver que un recurso de Controlador de animador llamado Door se ha asignado automáticamente. Puedes utilizar este recurso para crear la función de la puerta abriendo y cerrando.

**1.**  En la carpeta Animations, selecciona el Controlador de animador Door y cámbiale el nombre a "Door_Controller".

[Image: image]

En la ventana del **Proyecto**, observa que el ícono del **Controlador de Animación (Animator Controller)** son dos rectángulos conectados por líneas, lo que indica que puede controlar las transiciones entre estados de animación. El ícono de **Clip de Animación (Animation Clip)**es un triángulo en movimiento, representando un único movimiento.

Al hacer doble clic en un asset de **Controlador de Animación**, se abrirá la ventana del **Animador (Animator)**, mientras que al hacer doble clic en un asset de **Clip de Animación**, se abrirá la ventana de **Animación (Animation)**. La diferencia entre estas dos ventanas es sutil pero importante.

**2.**  Haz doble clic en Door_Controller para abrir la ventana Animator.

[Image: image]

**3.**  Arrastra la ventana Animator hacia abajo para acoplarla al Editor de animación y ver la vista de Escena y la ventana Animator al mismo tiempo.

**4.** Selecciona Door en la Hierarchy y luego Play para iniciar la Escena.

[Image: image]

Cuando se reproduce la Escena, se abre la puerta y, al mismo tiempo, una barra de progreso azul se ejecuta en la parte inferior del nodo con la etiqueta Door_Open: este es tu Clip de animación y el Animator te muestra lo que ocurre en el Controlador de animación en tiempo real.

**5.** Sal del modo Play.

Marcar paso como completado

## 4. ¿Cómo explorar las máquinas de estado?

Q&A (0)

Los Controladores de animación se ejecutan en un tipo de sistema especial llamado **Máquina de estado**. Una Máquina de estado realiza un seguimiento de todas las acciones posibles que puede realizar un objeto y selecciona la adecuada según lo que requiere la situación (o el estado) actual. La lógica que comunica el estado actual se controla de forma externa, con frecuencia mediante un script, pero el proceso de pasar de una acción a otra lo maneja de manera directa una Máquina de estado y se llama **Transición.**

Para entender mejor cómo funcionan las Máquinas de estado, primero considera todas las acciones que puede realizar una puerta:

- Abrir
- Cerrar

Y estos son los estados en los que puede estar la puerta:

- Abriéndose
- Cerrándose
- Abierta
- Cerrada

Los dos últimos de la lista pueden ser inesperados. Después de todo, *estar*abierta y cerrada no *son* acciones en sí mismas, pero *son*estados en los que una puerta puede estar y, por lo tanto, se deben tener en cuenta. Con todos los estados identificados, ahora se pueden representar en función de cómo se interactuará con la puerta:

[Image: image]

Como se mencionó antes, la puerta se configurará para que se abra según su proximidad al personaje jugador. Esto significa que el estado predeterminado de la puerta será «cerrada». Cuando el personaje jugador se acerque lo suficiente, la Máquina de estado pasará a su estado «abriéndose» y luego, inmediatamente, al estado «abierta». La puerta permanecerá en este estado hasta que el personaje jugador se vaya, momento en el que pasará a su estado «cerrándose» y luego al estado «cerrada», para reiniciar todo el proceso.

Con base en este análisis, hay dos transiciones que requerirán algún tipo de entrada lógica (detectar cuando el jugador se acerca y se va), y dos estados que pasarán automáticamente de uno al siguiente (de «abriéndose» a «abierta» y de «cerrándose» a «cerrada»).

Marcar paso como completado

## 5. ¿Cómo crear el estado predeterminado?

Q&A (0)

Con lo que aprendiste en el paso anterior, crearás la Máquina de estado para la puerta. Actualmente, la animación Door_Open se reproduce automáticamente tan pronto como se ejecuta la Escena. Esto se debe a que actualmente es la única animación asociada con la puerta y se agregó de forma automática como estado predeterminado del Controlador. Sin embargo, el estado inicial de la puerta debería ser «Cerrada», que no tiene ninguna animación asociada. Para tener esto en cuenta, agrega un nodo Closed (Cerrada) al Controlador y configúralo como el estado predeterminado.

**1.**  En el área de trabajo de la malla del Animator, haz clic derecho y selecciona **Create State**> **Empty.**

**2.** Selecciona el nuevo nodo de estado y, en el Inspector, cambia el nombre de New State (Nuevo estado) a Closed.

**3.** Haz clic derecho en el estado Closed y selecciona Set as Layer Default State (Establecer como estado predeterminado de la capa).

[Image: image]

El estado Cerrada se volverá naranja y se conectará con el nodo Entry (Entrada) mediante una línea naranja que representa una transición. El nodo Entry representa lo que debe suceder al inicio de la Máquina de estado. Se ejecutará automáticamente tan pronto como se reproduzca la Escena, así como siempre que se utilice el **nodo Exit (Salida)**, que se explorará más adelante en el tutorial.

**4.**Prueba la Escena.

La puerta ya no se abre y la barra de estado se ejecuta repetidas veces en el estado Closed. La primera parte de la Máquina de estado funciona.

Marcar paso como completado

## 6. ¿Cómo abrir la puerta?

Q&A (0)

El siguiente estado se determinará por la proximidad del personaje jugador. La lógica para detectar el personaje jugador será con un script y un Colisionador activador, pero eso se configurará más adelante. Por ahora, terminarás la Máquina de estado y agregarás referencias para que las utilice el script.

**1.**  Haz clic derecho en el nodo Closed y selecciona Make Transition (Hacer transición). Aparecerá una flecha de transición blanca en el cursor del mouse.

**2.**  Selecciona el nodo Door_Open. La flecha de transición se adjuntará al nodo.

**3.**  Prueba la Escena.

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

El Controlador de animación se ejecutará mediante el nodo Closed una vez. Cuando termine, pasará inmediatamente a la animación Door_Open y luego se mantendrá inactivo al final de la animación. Para evitar que un nodo pase inmediatamente a otro, se debe colocar algún tipo de puerta lógica en la transición. Esto es lo que buscará el script que utilizarás en la versión final. Se logrará mediante el uso de **Parámetros**. Los Parámetros son variables que se crean directamente en el Animator y se pueden encontrar en la pestaña Parameters (Parámetros), en el lado izquierdo del Editor del animador.

**4.** Selecciona la pestaña Parameters para acceder a la lista de parámetros que está vacía.

**5.**  En la parte superior de la lista de Parámetros, haz clic en **+** y selecciona Trigger (Desencadenador).

Un parámetro Trigger realizará una transición inmediata tan pronto como se le llame mediante un script. Los parámetros de activación (Trigger) son útiles cuando quieres iniciar una acción o evento inmediato en respuesta a una condición específica o a una entrada del usuario, que es exactamente la situación en el caso de esta puerta.

[Image: image]

**6.**  Nombra el Trigger "PlayerProximity" y asegúrate de escribirlo y usar las mayúsculas exactamente como está aquí. Se hará referencia a este en el script más adelante.

**7.** Selecciona la Transición entre Closed y Door_Open con un clic en la flecha blanca. En el Inspector, busca la sección Conditions (Condiciones).

**8.**  Selecciona **+** en la parte inferior de la lista Conditions. Como es el único parámetro, PlayerProximity se completará automáticamente en la lista.

**9.**  Reproduce la Escena.

**10.** Selecciona el botón de **radio** al lado de PlayerProximity en la lista de parámetros para desencadenarlo.

Ahora, el Controlador del personaje permanece en el estado Closed hasta que se selecciona PlayerProximity, momento en el que pasa al estado Door_Open y la puerta se anima.

#### Otros tipos de parámetros

Aunque acabas de usar un parámetro de activación (Trigger) para abrir la puerta, será útil familiarizarte con los otros tres tipos de parámetros, que pueden usarse en diferentes situaciones.
 En la pestaña **Parameters**, selecciona el botón **Add (+)** para ver los diferentes tipos de parámetros. Los tipos **Float**, **Int** y **Bool** están destacados a continuación.

[Image: image]

- **Bool:** Un parámetro bool representa un estado binario, ya sea verdadero o falso. Los parámetros bool son útiles cuando quieres controlar transiciones entre diferentes estados de animación basados en condiciones simples de encendido/apagado. Por ejemplo, un parámetro bool llamado "IsRunning" puede usarse para cambiar entre las animaciones de caminar y correr según si el jugador se mueve a mayor velocidad.
- **Int:** Un parámetro int representa un valor entero y es útil para controlar diferentes estados o variaciones de animación. Los parámetros int son útiles cuando deseas controlar variaciones o estados de animación basados en valores enteros discretos. Por ejemplo, un parámetro int llamado "Health" puede usarse para activar diferentes animaciones según el nivel de salud actual del jugador (por ejemplo, animación de inactividad si la salud > 75, animación de herido si la salud <= 50, etc.).
- **Float:** Un parámetro float representa un valor decimal y se usa típicamente para controlar transiciones continuas y mezclas entre animaciones. Los parámetros float son útiles cuando deseas realizar transiciones suaves o mezclar animaciones basadas en valores numéricos continuos. Por ejemplo, un parámetro float llamado "Speed" puede usarse para realizar transiciones suaves entre las animaciones de caminar y correr según la velocidad de movimiento del jugador.

Marcar paso como completado

## 7. ¿Cómo cerrar la puerta?

Q&A (0)[Image: image]

Como puedes ver arriba, tan pronto como la puerta se abre, debe pasar inmediatamente al estado «abierta». La forma en que animaste la puerta ya lo explica. La animación termina con la puerta abierta y con el bucle de la animación desactivado, permanece inactiva en el fotograma clave final. Esto significa que el siguiente paso para la Máquina de estado es crear el estado de la puerta «cerrando». En lugar de crear una nueva animación, puedes reutilizar Door_Open y solo revertirla.

**1.**  Selecciona el nodo Door_Open en el Animator y presiona **Ctrl**/**Cmd**+**D** en el teclado para duplicarlo.

**2.**  En el Inspector, cambia el nombre del nuevo nodo a Door_Close.

**3.** Aun en el Inspector, busca el parámetro Speed (Velocidad) y configúralo en -1. Esto revertirá la animación.

[Image: image]

**4.** Haz clic derecho en el nodo Door_Open y selecciona Make Transition.

**5.**  Selecciona el nodo Door_Close para conectar la Transición entre los dos nodos.

**6.**  Selecciona la nueva transición y, en el Inspector, haz clic en el botón **+** en la lista Conditions. PlayerProximity se completará automáticamente.

[Image: image]

**7.**  Prueba la Escena. Presiona el botón de radio de PlayerProximity para abrir la puerta, y de nuevo para cerrarla.

Los parámetros de desencadenador en el Animator se deshabilitan inmediatamente después de que se completa la transición de un estado al siguiente, lo que significa que puedes reutilizar el mismo parámetro de forma segura para situaciones como la puerta abriéndose y cerrándose. Esto significa que, más adelante, el script aplicado para detectar si el personaje jugador está cerca de la puerta solo necesita hacer referencia a un único parámetro.

Marcar paso como completado

## 8. ¿Cómo restablecer la Máquina de estado?

Q&A (0)

Ya está completo el progreso de los diferentes estados de la puerta; sin embargo, tal como está ahora, solo se puede interactuar con la puerta una vez. Para reutilizar la puerta infinitamente, la Máquina de estado debe restablecerse a su estado original una vez que se complete la animación de cierre de la puerta. Podrás lograr esto al hacer uso del **nodo Exit**. Cuando se realiza la transición, el nodo Exit pasa de forma automática al nodo Entry, que regresa al estado predeterminado. Esto te permitirá reiniciar la Máquina de estado de la puerta infinitamente.

**1.**  Haz clic derecho en el nodo Door_Close y selecciona Make Transition.

**2.**  Haz clic en el nodo Exit para conectar la transición entre los dos nodos.

**3.**  Prueba la Escena.

Ahora, cuando presiones PlayerProximity para cerrar la puerta, se reproducirá la animación Door_Close y pasará automáticamente a Exit, para luego regresar al estado Closed. Es posible que hayas notado que a veces hay un pequeño retraso entre el momento en que presionas PlayerProximity y el momento en que se abre la puerta. Esto se debe a que, de forma predeterminada, un nodo de estado completará su tiempo de reproducción activo (representado por la barra de progreso) antes de realizar una transición. Esto se puede desactivar para que la transición al estado Door_Open sea inmediata.

**4.**  Selecciona la transición entre los nodos Closed y Door_Open.

**5.**  En el Inspector, deshabilita Has Exit Time (Tiene tiempo de salida).

[Image: image]

**6.**  Reproduce la Escena y prueba la Máquina de estado. La puerta debe abrirse inmediatamente cada vez que presiones PlayerProximity.

Marcar paso como completado

## 9. ¿Cómo crear el desencadenador de proximidad?

Q&A (0)

Si bien presionar manualmente el desencadenador PlayerProximity funciona para probar la Máquina de estado, no funciona para la experiencia real. En su lugar, se utilizará un Colisionador activador con un script para llamar al parámetro cuando el controlador del jugador esté dentro del alcance. A diferencia de los colisionadores normales que evitan que otros objetos atraviesen aquello a lo que están asignados, los Colisionadores activadores detectan cuando otro objeto ha interactuado con el objeto que tiene adjunto el desencadenador, y un script puede utilizar esta información para hacer que sucedan cosas específicas.

**1.**  En la Hierarchy, haz clic derecho y selecciona Create Empty (Crear vacío).

**2.**  Cambia el nombre del GameObject Empty a "Door Trigger".

**Importante:** Asegúrate de que el objeto **Door Trigger** no sea un hijo del objeto **Door**, ya que, de ser así, el disparador (trigger) de la puerta se moverá junto con la puerta al abrirse.

**3.**  Con Door Trigger (Desencadenador de puerta) seleccionado, haz clic en el botón **Add Component o Agregar componente** en el Inspector, busca Box Collider (Colisionador de caja) y agrégalo.

**4.**  En el componente Box Collider, habilita**Is Trigger**. Esto cambiará el Box Collider a un Trigger.

**5.**  Aumenta el tamaño del Box Collider a 3 en el eje Z.

**6.**Organiza el Door Trigger de modo que se superponga a la malla de la puerta, con medio desencadenador a cada lado de ella. Esto creará una zona de buen tamaño para que el controlador del jugador entre para activar la puerta.

[Image: image]

**7.**Busca el Script DoorTrigger en la carpeta Project Script (Script del proyecto) y agrégalo al GameObject Door Trigger.

**8.** Arrastra el GameObject Door al parámetro Anim del Script DoorTrigger. Esto asignará automáticamente el animador de la puerta al parámetro.

[Image: image]

**9.**  Prueba la Escena y camina hacia la puerta.

Cuando el controlador del jugador ingresa a Trigger, el script accede al Controlador de animador de la puerta y desencadena PlayerProximity. Lo mismo sucederá cuando el controlador del jugador salga de Trigger. Ahora la puerta es totalmente funcional en la Escena.

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

Marcar paso como completado

## 10. Explora: Animación más desencadenada

Q&A (0)

Una puerta que se abre cuando el controlador del jugador se acerca es útil, pero no es particularmente emocionante. Una de las mejores cosas del uso de desencadenadores con animación es que el usuario no puede ver cuando ingresa un desencadenador, por lo que es posible que no se dé cuenta de inmediato de que al ingresar a un área específica, algo sucede.

Para practicar lo que acabas de aprender, crea un desencadenador que haga que el sol se ponga en el cielo cuando el usuario entre en una zona determinada con el controlador del jugador y se levante cuando se vaya.

Para lograrlo, deberás hacer lo siguiente:

- Animar la Directional Light (Luz direccional) de la Escena.
- Crear un Controlador de animador con estados para gestionar el sol saliendo, el sol ya afuera, el sol puesto y el sol poniéndose.
- La Máquina de estado debería hacer bucle sin fin.
- Crear un desencadenador que llame a la Máquina de estado para que se ejecute.

Recuerda, puedes controlar el tamaño del área que hace que el sol salga y se ponga al cambiar el tamaño del desencadenador.

Marcar paso como completado

## 11. Próximos pasos

Q&A (0)

Cada objeto en Unity con al menos una animación tendrá un componente Animador y un Controlador de animador. En este tutorial, analizaste los requisitos para una Máquina de estado y la recreaste en Unity. Si bien lo que creaste fue simple, trabajaste con todos los componentes principales necesarios para crear una Máquina de estado a mayor escala y más compleja. Aprendiste a controlar y modificar animaciones en un Controlador de animador y cómo hacer la transición entre ellas según la finalización de la animación y los parámetros. En el siguiente tutorial, comenzarás a explorar el segundo tipo de animación de Unity: Animación importada.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
