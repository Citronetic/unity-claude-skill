[Image: image]

# Explore the Unity project spanish

Tutorial

Beginner

+10XP

60 mins

1

(16)

Unity Technologies

[Image: Explore the Unity project spanish]Summary

Ahora que te has familiarizado con el concepto del juego, puedes explorar el proyecto de Unity.

En este tutorial harás lo siguiente:

- Revisar el documento de diseño técnico del juego
- Explorar todas las Escenas del juego
- Explorar las principales máquinas de scripts y los gráficos de scripts.

Resources

- [UFO Game Technical Design Document.pdf](https://unity-connect-prd.storage.googleapis.com/20230220/41d2663d-8a14-4e0d-ac96-44f01b99dcfa/UFO%20Game%20Technical%20Design%20Document.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955036313)

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Antes de comenzar a tomar decisiones de diseño o cambios importantes en el proyecto, debes entender exactamente cómo está creado el proyecto. Luego, cuando llegue el momento de portar el proyecto, sabrás exactamente dónde buscar cualquier funcionalidad.

[Image: image]

En este tutorial, explorarás a fondo todas las Escenas, los scripts y los componentes del juego OVNI de escritorio y tomarás nota de los descubrimientos relevantes durante el proceso.

Marcar paso como completado

## 2. Revisa la documentación de referencia

Q&A (0)

Aunque este juego parece relativamente simple, te sorprenderá la complejidad de algunos de sus scripts visuales. Mira el script visual que gestiona el movimiento OVNI, por ejemplo.

[Image: image]

Si has completado [**¿Cómo crear con AR?: Filtros faciales**](https://learn.unity.com/course/create-with-ar-face-filters) y [**¿Cómo crear con AR?: Marcadores y Planos**](https://learn.unity.com/course/create-with-ar-markers-and-planes), muchos de los conceptos de Visual Scripting de este tutorial te resultarán familiares, pero muchos nodos seguirán siendo nuevos. Afortunadamente, muchos de los scripts más complejos no deberían modificarse para el puerto AR.

Para ayudarte a entender estos scripts, hay varios recursos disponibles, los cuales se describen a continuación.

#### El documento de diseño técnico

Hemos proporcionado un [documento de diseño técnico](https://docs.google.com/document/d/1-_JglxXgbJDPE5SlOJ6Hn93R3qwGImzyHY0HY7IGZ6w/export?format=pdf) (TDD, por sus siglas en inglés) que acompaña al proyecto Unity del juego OVNI. Este TDD describe los detalles técnicos de todas las State Machine y Script Machine en el juego. Abre ese documento ahora.

No es necesario leer el TDD de principio a fin; En su lugar, debes usarlo como punto de referencia mientras trabajas en tu puerto.

#### Resúmenes de Script Machine

Cada una de las Script Machine del proyecto incluye un resumen descriptivo que te ayudará a recordar cuál es la función principal de cada gráfico. Puedes encontrar estos resúmenes en los componentes de Script Machine.

[Image: image]

#### Grupos y comentarios de Script Graph

Cada uno de los Script Graphs está organizado en grupos para ayudar a organizar y explicar las secuencias de nodos.

[Image: image]

**Los grupos** se usan en los scripts visuales del mismo modo que los comentarios se usan en la programación tradicional: para hacer que los scripts sean más fáciles de entender, mantener y compartir entre los desarrolladores. Lee la [documentación sobre grupos](http://groups/) en el manual de creación de Visual Scripting para aprender a crear, editar y eliminar grupos.

No has utilizado grupos hasta este momento, pero pueden ser muy útiles y es posible que desees utilizarlos en el futuro.

#### Documentación de creación de Visual Scripting

Si encuentras un nodo sobre el que quieras obtener más información, puedes seleccionarlo y ver información sobre él en el Graph Inspector. Sin embargo, a menudo hay información más detallada sobre los nodos en [la Referencia de creación de scripts de Unity (Scripting Reference)](https://docs.unity3d.com/ScriptReference/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955036313), ya que los nodos se basan en funciones dentro de la Interfaz de programación de aplicaciones (API) principal de Unity.

Por ejemplo, puedes ver la información sobre la aplicación: El nodo Editor está en el Graph Inspector.

[Image: image]

Pero si encuentras la misma [página de Application.IsEditor](https://docs.unity3d.com/ScriptReference/Application-isEditor.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955036313) en la documentación en línea, verás que hay aún más información disponible.

#### ¿Cómo utilizar la documentación disponible?

Al explorar este proyecto de Unity, utiliza la combinación de los recursos disponibles que te resulte más útil. Los pasos a continuación te guiarán a lo largo del proyecto para asegurarte de haber explorado las partes más importantes, pero dependerá de ti si deseas utilizar la combinación de la documentación anterior para asegurarte de que comprendes la funcionalidad en su totalidad.

Marcar paso como completado

## 3. Revisa la Escena de inicio

Q&A (0)

La Escena de inicio es la primera Escena que el usuario experimenta cuando inicia el juego. Si aún no tienes la Escena de inicio abierta, ve a la carpeta **Assets**> **Scenes** y abre **StartScene**.

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

#### Desafío de comprensión del proyecto

Explora la Escena y usa la documentación disponible para intentar el siguiente desafío. Completar el desafío confirmará que te sientes lo suficientemente cómodo trabajando con **StartScene**.

Cuando el usuario selecciona INICIO, el OVNI se va volando y la Escena se desvanece durante un período de aproximadamente un segundo. Intenta cambiar el color del desvanecimiento, la duración o la hora de inicio. En el siguiente ejemplo, la pantalla se vuelve verde durante un período de tiempo más largo, comenzando justo después de presionar el botón Start (Inicio).

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

## 4. Revisión de WinScene y LoseScene

Q&A (0)

**WinScene** y **LoseScene** son las Escenas más simples e incluyen una funcionalidad casi idéntica.

[Image: image]

Los siguientes dos botones existen en ambas Escenas:

- **Reiniciar**: Este botón carga **MainScene** de nuevo.
- **Salir**: Este botón cerrará la aplicación o, si se ejecuta dentro del Editor de Unity, registrará un mensaje en la consola.

#### Desafío de comprensión del proyecto

Explora las Escenas y usa la documentación disponible para intentar el siguiente desafío. Completar el desafío confirmará que te sientes lo suficientemente cómodo al trabajar con estas Escenas.

En **LoseScene**, el sonido de una oveja se reproduce a intervalos aleatorios. Intenta cambiar el tiempo mínimo y máximo entre los sonidos de las ovejas.

Marcar paso como completado

## 5. Revisa el flujo del juego en la MainScene

Q&A (0)

La**Escena principal** contiene toda la jugabilidad, incluidos los comportamientos únicos del OVNI, el granjero y las ovejas.

[Image: image]

El [documento de diseño técnico](https://docs.google.com/document/d/1-_JglxXgbJDPE5SlOJ6Hn93R3qwGImzyHY0HY7IGZ6w/export?format=pdf) incluye secciones sobre el flujo general del juego, cada uno de los GameObjects clave de la ventana Hierarchy y el Canvas del juego.

Es posible que algunos de los detalles de estas secciones te resulten confusos en este momento, pero te resultaría útil leerlos en su totalidad en esta etapa como orientación inicial.

Marcar paso como completado

## 6. Revisa el elemento del juego OVNI

Q&A (0)

El OVNI contiene cuatro Script Machines que administran el rayo tractor, el movimiento del OVNI, su visibilidad y sus efectos de audio.

[Image: image]

El movimiento OVNI es el desafío de diseño más obvio para tu puerto AR, ya que las teclas WASD no funcionarán en dispositivos móviles. Es fundamental que comprendas cómo se logra la funcionalidad de movimiento en el proyecto.

#### Revisión de comprensión del proyecto

El jugador actualmente usa las teclas WASD como entrada para mover el OVNI y la barra espaciadora como entrada para hacer que el OVNI asciende por una oveja. Intenta reemplazar los controles WASD con las teclas de flecha y luego reemplaza el control de la barra espaciadora con una tecla diferente.

Marcar paso como completado

## 7. ¿Qué son los gráficos de estado?

Q&A (0)

A lo largo de esta experiencia de aprendizaje, has creado varias máquinas de scripts para agregar interactividad a tus aplicaciones de AR. Las máquinas de scripts son ideales para pequeñas funciones independientes, como activar y desactivar GameObjects, desencadenar animaciones o reproducir sonido.

[Image: image]

En algunas circunstancias, es posible que debas crear varios gráficos de scripts en el mismo objeto para realizar una serie de tareas relacionadas entre sí. Para situaciones como estas, un gráfico de estado puede ser una mejor opción que varias máquinas de scripts. **Los gráficos de estado** te permiten crear varias funcionalidades en el mismo gráfico y organizarlos en estados individuales. Luego, estos estados se pueden activar según lo que ocurra en la aplicación.

[Image: image]

Hemos incluido dos State Graphs como ejemplos en esta aplicación: uno para las ovejas y otro para el granjero. Tanto la oveja como el granjero tienen estados distintos en los que entran y salen según los eventos que ocurren en el juego.

La oveja, por ejemplo, hace la transición entre estar inactiva, ser levantada por el OVNI y soltada.

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

No es necesario que te preocupes por crear State Machine por tu cuenta si no te sientes cómodo al hacerlo. Para cualquier funcionalidad adicional o modificación de este juego, Script Machines funcionará a la perfección.

Para obtener más información sobre la diferencia entre State Machine y Script Machine, consulta la [documentación de Visual Scripting](https://docs.unity3d.com/Packages/com.unity.visualscripting@1.8/manual/vs-graph-types.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955036313). Las State Machine también se usan en el proyecto [Visual Crypting de Clive the Cat](https://learn.unity.com/project/visual-scripting-application-clive-the-cat-s-visual-crypting) .

Marcar paso como completado

## 8. Revisa el gráfico de estado de la oveja

Q&A (0)

Sigue estas instrucciones para abrir y navegar por el State Graph de la oveja:

**1.**En la Hierarchy para la MainScene, expande el **GameObject** SheepGroup y selecciona uno de los **Sheep**.

**2.**En el Inspector, busca el componente State Machine y selecciona **Edit Graph** para abrir el recurso Sheep State Graph.

**3.**Sigue las flechas en el State Graph para descubrir la lógica del comportamiento de las ovejas:

- Al **inicio**, la oveja entra en el estado **inactivo**.
- Si se produce la transición BeamedUp, la oveja entra en el estado **BeamedUp**.
- Desde el estado BeamedUp, la oveja puede ser **Abducida** o **Liberada**.
- Si se suelta la oveja, la oveja regresa al estado **inactivo** .

[Image: image]

**4.**Haz doble clic en uno de los estados o transiciones para examinar o editar su unidad de estado. Puedes regresar al gráfico principal usando las rutas de navegación en la barra de herramientas del gráfico.

[Image: image]

**5.**Revisa la sección **Sheep** del documento de diseño técnico. Esta documentación te dará una descripción general de cada uno de los estados de las ovejas.

**6.**En cada unidad de estado o transición de estado, lee los comentarios de cualquier grupo de nodos. Para obtener más información sobre cualquier nodo específico que no reconoces, usa el Inspector de gráficos y [la Referencia de creación de Scripts de Unity](https://docs.unity3d.com/ScriptReference/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955036313).

[Image: image]

#### Revisión de comprensión del proyecto

La velocidad a la que la oveja se mueve hacia el OVNI está directamente relacionada con la dificultad del juego. Cuanto más rápido el secuestro, más fácil es el juego. Probablemente puedas imaginarte un potenciador que aumentaría la velocidad de abducción del OVNI. Intenta hacer el juego más fácil al aumentar la velocidad de la abducción. Para un desafío adicional, convierte esto en una variable que se pueda editar fácilmente en el Inspector.

Marcar paso como completado

## 9. Revisa el State Graph del granjero

Q&A (0)

El granjero hace la transición de un estado a otro: durmiendo, despertando y despierto. Al igual que con las ovejas, un State Graph era una solución adecuada para gestionar el comportamiento del granjero.

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

#### Revisión de comprensión del proyecto

De forma predeterminada, el granjero duerme entre 8 y 16 segundos, tardará 1 segundo en despertarse y luego permanecerá despierto entre 4 y 8 segundos. Intenta hacer el juego más difícil reduciendo su tiempo para dormir y para levantarse, pero incrementando el tiempo que pasa cuando está despierto.

Marcar paso como completado

## 10. Revisa el Game Manager

Q&A (0)

El GameObject Game Manager es responsable del inicio y la administración de los estados principales del juego. El Game Manager tiene cuatro máquinas de scripts: **Scene Setup, Cutscene Manager, Game Over**y**Sheep Counter.**

#### Revisión de comprensión del proyecto

Después de secuestrar a todas las ovejas y ganar el juego, la Escena se vuelve oscura de la misma manera que lo hace cuando pierdes el juego. Agrega un indicador más claro, como un efecto de sonido, después de que se haya abducido la última oveja para que el usuario sepa que ha ganado el juego.

Marcar paso como completado

## 11. Más cosas por probar

Q&A (0)

Si deseas desarrollar aún más tus habilidades o explorar nuevos conceptos, consulta algunas de las actividades opcionales que aparecen abajo. Cada actividad se identifica como Fácil, Medio o Difícil, para que sepas el nivel de dificultad que puedes esperar.

Estas actividades son totalmente opcionales, por lo que si no te interesa, no hay problema, omite este paso.

Te recomendamos intentar al menos uno de ellos para aprovechar al máximo esta experiencia de aprendizaje. ¡Buena suerte!

#### Fácil: Haz pequeños ajustes al juego.

Puede haber algunos elementos estéticos de la aplicación que crees que se pueden mejorar. Tómate un tiempo para hacer que el juego se vea, se reproduzca y se reproduzca de la mejor manera. Puedes cambiar la fuente, los efectos de sonido, la velocidad del OVNI, el color del posprocesamiento durante el proceso de abducción o cualquier otra cosa.

En el siguiente ejemplo, el granjero se despierta con más frecuencia, pero las ovejas se iluminan mucho más rápido. Los efectos de posprocesamiento durante la sustracción también son más intensos.

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

#### Difícil: ¿Cómo establecer al azar el número o la posición de las ovejas?

Cuando juegas el juego varias veces, es un poco decepcionante ver que las ovejas están exactamente en la misma posición. Haría que el juego fuera un poco más jugable si el tablero de juego fuera diferente cada vez, con un número aleatorio de ovejas en posiciones aleatorias en la finca.

En el siguiente ejemplo, la primera ronda del juego tiene 4 ovejas en ubicaciones aleatorias, mientras que la segunda ronda del juego tiene 13.

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

#### Difícil: Haz del juego una experiencia sincronizada

Este juego es casual y relajante, pero se podría hacer más emocionante con un poco de presión al tiempo. Si puedes capturar todas las ovejas antes de que se acabe el tiempo, ganas. Si se acaba el tiempo o si el granjero te pilla en el acto de sustracción, pierdes.

Observa el temporizador de 60 segundos que solo comienza la cuenta regresiva después de que comienza la jugabilidad en el video a continuación.

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

## 12. Próximos pasos

Q&A (0)

Has completado el importante trabajo de explorar a fondo el proyecto para entender cómo está organizado. Cuando llegue el momento de realizar ajustes en los Script Graphs o State Graphs, ahora sabrás exactamente a dónde dirigirte y qué buscar. En el siguiente tutorial, comenzarás el proceso de portabilidad real creando un nuevo proyecto compatible con AR, moviendo los recursos a ese proyecto y creando una compilación inicial en tu dispositivo móvil para ver cómo se ejecuta.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
