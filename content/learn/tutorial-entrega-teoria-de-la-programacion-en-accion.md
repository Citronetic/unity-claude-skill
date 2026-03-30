[Image: image]

# Entrega: Teoría de la programación en acción

Ejercicio

foundational

+60XP

30 mins

31

Unity Technologies

[Image: Entrega: Teoría de la programación en acción]SummarySkills

Ahora que comprendes los pilares de la programación orientada a objetos y cómo se implementan, estás listo para aplicarlos en un nuevo proyecto. También es una buena oportunidad para practicar la ramificación y la fusión en un repositorio de control de versiones.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. ¡Esta misión se actualizó!

Q&A (0)

Por si acaso, actualizamos esta misión mientras no nos veías. Asegúrate de haber completado este contenido antes de intentar esta entrega:

- Misión [Programador júnior: Administra los datos y el flujo de la Escena.](https://learn.unity.com/mission/5f751af7edbc2a0022cdbbb6)
- [Abstracción en programación orientada a objetos.](https://learn.unity.com/tutorial/abstraction-in-object-oriented-programming)
- [Herencia y polimorfismo en programación orientada a objetos.](https://learn.unity.com/tutorial/inheritance-and-polymorphism-in-object-oriented-programming)
- [Encapsulación en programación orientada a objetos.](https://learn.unity.com/tutorial/encapsulation-in-object-oriented-programming)
- [Perfilar el código para identificar problemas.](https://learn.unity.com/tutorial/profile-code-to-identify-issues)

Marcar paso como completado

## 2. Descripción general

Q&A (0)

En los tutoriales anteriores, aprendiste acerca de los cuatro pilares de la programación orientada a objetos y cómo se aplican:

- **Abstracción**: reduce el código duplicado al «excluir» detalles o información repetidos.
- **Encapsulación**: «encapsula» en una misma clase los datos y los métodos que manipulan dichos datos para evitar que otras clases hagan mal uso de ellos.
- **Herencia**: clases secundarias que derivan (o «heredan») comportamiento de clases primarias.
- **Polimorfismo**: convertir («mutar») los métodos a muchas («poli») formas (es decir, sobrecarga y anulación de métodos).

En este desafío de entrega, crearás un nuevo proyecto desde el principio para demostrar cada uno de estos pilares en el código.

Planifica cuidadosamente la arquitectura de tu programa en términos generales antes de comenzar a programar. En el proceso, tendrás la oportunidad de practicar la ramificación y fusión de código mediante software de control de versiones.

Este desafío no será fácil, pero serás un programador más consciente y estratégico cuando lo finalices.

Una entrega exitosa incluirá:

- Un enlace al repositorio de GitHub de tu proyecto que muestre varias entregas con mensajes específicos para cada una y al menos dos ramificaciones.
- Demostración de abstracción (métodos de alto nivel que abstraen detalles innecesarios).
- Demostración de herencia (clases primarias y secundarias).
- Demostración de polimorfismo (sobrecarga y anulación de código).
- Demostración de encapsulación (getters y setters).

Marcar paso como completado

## 3. ¿Cómo crear un nuevo repositorio y hacer tu entrega inicial?

Q&A (0)

Antes de sumergirte en constructos teóricos de programación, asegúrate de que tu proyecto esté configurado adecuadamente para el control de versiones.

**1.** Crea un nuevo repositorio configurado para Unity y dale un nombre como «Programming-Theory-Repo».

[Image: image]

**2.**Crea un nuevo proyecto vacío de Unity 3D en tu repositorio y dale un nombre como «Programming Theory Project».

**3.**Después de crear tu proyecto, haz una entrega inicial al repositorio.

[Image: image]

Ahora debes tener un proyecto vacío de Unity respaldado en un nuevo repositorio de control de versiones.

Si necesitas un recordatorio sobre cómo hacer cualquier de las tareas anteriores, consulta los detalles en los [pasos en la entrega anterior](https://learn.unity.com/tutorial/submission-data-persistence-in-a-new-repo#60b7cec1edbc2a00200b00e3).

Marcar paso como completado

## 4. ¿Cómo diseñar tu proyecto?

Q&A (0)

Con tu proyecto y repositorio ya preparados, invierte un tiempo en idear un concepto para tu proyecto que te permitirá demostrar los cuatro pilares de la programación orientada a objetos.

Considera que este proyecto puede ser un prototipo en lugar de un proyecto completo real. Puede utilizar formas primitivas o incluso estar basado completamente en texto. Tampoco tienes que iniciar con un lienzo totalmente en blanco. Si finalizaste ¿Cómo crear con código?, puedes reutilizar los recursos de uno de los prototipos o desafíos. El objetivo no es crear una obra maestra visual de la nada. Solo idea algo creativo que demuestre los pilares de la OOP: abstracción, encapsulación, herencia y polimorfismo.

[Image: image]

Mientras desarrollas tu concepto, describe y da seguimiento a tus ideas en un **documento de diseño** o **resumen del proyecto**. Si finalizaste ¿Cómo crear con código?, obtén inspiración del modelo que utilizaste durante los [laboratorios de tu proyecto personal](https://learn.unity.com/tutorial/lab-1-personal-project-plan?uv=2020.3&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63). También puedes inspirarte en el [resumen de diseño](https://connect-prd-cdn.unity.com/20210602/7105725f-6cb4-4171-a399-ba1b485a7e96/Project_Brief.pdf?_gl=1*wjdq4t*_ga*NDI3MDM1NDEuMTU5MjI0OTM3NA) del proyecto de Administración de recursos en el que acabas de trabajar. Tu documento puede incluir una descripción general con viñetas, diagramas y bocetos... cualquier cosa que te permita organizar e iterar tus ideas.

Se sobreentiende que, en el proceso normal del desarrollo de un proyecto, nunca basarías las características de tu proyecto en la necesidad de demostrar conceptos de programación. Sería lo opuesto: la necesidad de utilizar conceptos de programación surgiría de las características del proyecto. Sin embargo, invertir las prioridades presenta un divertido desafío de diseño. ¿Cómo puedes diseñar un proyecto que utilice estos cuatro conceptos de programación? Lo más útil podría ser pensar en los pilares en el siguiente orden:

**1.  Herencia: elige tus objetos.**

Para comenzar la lluvia de ideas, ¿en qué objetos puedes pensar que deriven comportamientos de un objeto más genérico? ¿Qué objetos piensas que son subtipos de otros objetos? Por ejemplo:

- Animal → Gato, perro
- Vehículo → Avión, automóvil, barco
- Tostadora → Tostadora básica, tostadora de lujo, tostadora de alta calidad

Estos solo son ejemplos de relaciones entre elementos primarios y secundarios que podrías implementar con herencia en tu código. Para consultar más detalles sobre este pilar, revisa el [tutorial sobre herencia](https://learn.unity.com/tutorial/inheritance-and-polymorphism-in-object-oriented-programming).

En tu **documento de diseño o resumen del proyecto**:

Anota los objetos que quieres utilizar como punto de partida para el concepto de tu proyecto.

**2.  Polimorfismo: elige tus comportamientos.**

Después de decidir sobre los tipos y subtipos de objetos que podrías utilizar para tu proyecto, piensa sobre los tipos de comportamientos que esos objetos podrían presentar en tu programa y cómo esos comportamientos podrían «mutar» en función del subtipo de objeto. Por ejemplo:

- Todos los animales podrían tener una función Jump(), pero un gato tendría distintas capacidades de salto en comparación con un perro.
- Todos los vehículos tendrían una función Move(), pero un avión se mueve en las tres dimensiones y no puede ir en reversa.
- Todas las tostadoras tienen una función Toast(), pero la tostadora de alta calidad también podría tener un ajuste especial para «bagels».

Como ya lo sabes, el polimorfismo se refiere al hecho de que los métodos con el mismo nombre pueden sobrecargarse con distintos tipos de parámetros para que tengan varias formas («poli» + «morfismo»). También puedes considerar las distintas entradas de parámetros que uno de estos métodos podría aceptar. Por ejemplo, una función Jump() podría tomar la altura máxima del salto [Jump(float maxHeight)] o la fuerza que se le aplica [Jump(Vector3 jumpForce)].

Para consultar más detalles sobre este pilar, revisa el [tutorial sobre polimorfismo](https://learn.unity.com/tutorial/inheritance-and-polymorphism-in-object-oriented-programming).

En tu **documento de diseño o resumen del proyecto**:

Haz una lista de los tipos de funciones o comportamientos que te gustaría programar en tu aplicación.

**3.  Encapsulación: elige tus datos.**

La encapsulación consiste en proteger los datos en una clase para que no puedan utilizarse erróneamente y dañar la aplicación. Piensa en cuáles datos quieres proteger de esta forma, al tiempo que permite que otras clases puedan obtenerlos o definirlos. Por ejemplo:

- Para un animal, podrías necesitar obtener o definir su nombre, pero evitar que dicho nombre sea demasiado largo.
- Para un vehículo, podrías necesitar obtener o definir su año, pero asegurarte de que no sea un número negativo.
- Para una tostadora, podrías necesitar obtener o definir el tipo de pan, pero asegurarte que sea una opción de pan válida.

Para consultar más detalles sobre este pilar, revisa el [tutorial sobre encapsulación](https://learn.unity.com/tutorial/encapsulation-in-object-oriented-programming).

En tu **documento de diseño o resumen del proyecto**:

Registra los tipos de funciones o datos que quieres encapsular en tu proyecto.

**4.  Abstracción: elige tus funciones.**

Posiblemente, la abstracción será el concepto más fácil de implementar cuando ya estés programando, pero podría ser útil pensar en algunas funciones generales que quieres en tu proyecto antes de comenzar. Por ejemplo:

- Para los animales, podrías tener las funciones Walk(), Jump() y Talk().
- Para los vehículos, podrías tener las funciones TurnOn(), Move() y TurnOff().
- Para las tostadoras, podrías tener las funciones Start(), SetLevel() y Cancel().

Para consultar más detalles sobre este pilar, revisa el [tutorial sobre abstracción](https://learn.unity.com/tutorial/abstraction-in-object-oriented-programming).

En tu **documento de diseño o resumen del proyecto**:

Toma nota de algunas de las funciones generales que podrían ser útiles para reutilizar en tu código.

En este punto, ya debes tener una idea de lo que quieres lograr en tu proyecto, incluso si todavía se siente muy conceptual, y debes tener esas ideas guardadas en un documento.

Si todavía no tienes una noción clara de lo que quieres hacer en tu proyecto, aquí hay una idea de un proyecto extremadamente simple:

- Hay tres formas geométricas de distintos colores que heredan de una clase «shape» (forma) base (herencia).
- Cuando haces clic en cada forma, imprime algo distinto en la pantalla mediante la función DisplayText() anulada (polimorfismo).
- Cada forma contiene datos, tales como nombre o color, los cuales se almacenan como propiedades en getters y setters (encapsulación).
- El código se organiza de forma que reduce el código duplicado mediante métodos generales (abstracción).

Marcar paso como completado

## 5. ¿Cómo crear una ramificación para tu pantalla de título y guardar los cambios?

Q&A (0)

En especial cuando trabajas con varios desarrolladores, las **ramificaciones** son muy útiles para el control de versiones. Por lo general, los desarrolladores comienzan una nueva ramificación cuando implementan una nueva característica y no quieren interferir con el código de otros desarrolladores mientras experimentan.

Después de implementar la nueva función, **fusionarás** la ramificación con la principal y después solucionarás cualquier **conflicto de integración** que surja. Si no recuerdas qué son los conflictos de integración, puedes consultar el tutorial [Configura un control de versiones](https://learn.unity.com/tutorial/set-up-version-control).

Para facilitar este proceso, crea y fusiona una nueva ramificación para la pantalla de título de tu proyecto. Si tu aplicación no requiere una pantalla de título, utiliza otra característica simple de tu proyecto para tal fin.

**1.**Crea una nueva ramificación en tu repositorio y dale un nombre como «title-screen». Si no estás seguro de cómo crear una nueva ramificación, sigue las [instrucciones en la documentación de GitHub](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches#creating-a-branch). En esta ramificación, podrás experimentar con seguridad con tu nueva característica sin interferir con el trabajo de ningún otro desarrollador.

[Image: image]

Ahora deberías poder ver que la «ramificación activa» es tu nueva ramificación.

[Image: image]

**2.**Desarrolla tu pantalla de título en la nueva ramificación. En tu proyecto, crea una pantalla de título simple para tu entrega. Debe ser relevante para el concepto del proyecto que elegiste y debe ser muy simple, como el ejemplo a continuación.

[Image: image]

Conforme desarrollas y guardas tu trabajo, deberás ver todas las ediciones y adiciones a tu ramificación reflejadas en el panel **Changes** en tu software de control de versiones.

**3.**Para fusionar los cambios de esta ramificación con la ramificación principal, **entrega**los cambios que realizaste. En el software de control de versiones, agrega un resumen y una descripción y después selecciona **commit to [al nombre de la ramificación]**.

[Image: image]

Tus cambios ya se guardaron en tu ramificación y están listos para fusionarse con la ramificación principal.

Marcar paso como completado

## 6. ¿Cómo fusionar tu ramificación con la ramificación principal?

Q&A (0)

Después de completar tu pantalla de título (o cualquier otra característica), estás listo para fusionar tu ramificación experimental con la ramificación principal de desarrollo.

**1.**Para regresar a la ramificación principal, utiliza el menú desplegable **Current Branch** para seleccionar la ramificación **principal**.

[Image: image]

Después de regresar a la ramificación principal, verás que todos los cambios desaparecen de tu Escena de Unity. No te preocupes. Es de esperarse, dado que regresas al estado de tu proyecto antes de comenzar a implementar tu nueva función. La función aparecerá en el proyecto después de la fusión.

Si hiciste cambios desde tu última entrega, se te podría pedir que elijas entre Leave changes (Dejar los cambios) en la ramificación o Bring changes (Integrar los cambios) con la ramificación principal. Esto quiere decir que hay cambios en tu ramificación que todavía no se guardan. Cancela, asegúrate de que todos los cambios estén guardados en tu ramificación e intenta cambiar nuevamente a la ramificación principal.

[Image: image]

**2.**Desde la lista desplegable de ramificaciones, selecciona **Choose a branch to merge into main (Elige una ramificación para fusionar a la principal).**Después, selecciona tu otra ramificación y selecciona **Merge [branch-name] into main** (Fusionar <nombre de la ramificación> a la principal).

[Image: image][Image: image]

Cuando regreses a tu Escena de Unity, verás reflejados en la ramificación principal los cambios que realizaste en tu ramificación. Felicitaciones por una fusión adecuada.

Marcar paso como completado

## 7. ¿Cómo seguir con el trabajo en tu entrega?

Q&A (0)

Ahora que te has familiarizado con la ramificación y fusión en tu repositorio, debes continuar desarrollando tu proyecto con estas técnicas.

Recuerda, tu proyecto debe demostrar cada uno de los cuatro pilares de la OOP en tu código, lo cual no será una tarea fácil. Como mínimo, espera dedicar varias horas, muchas de las cuales probablemente las pasarás resolviendo problemas y consultando Google.

Marcar paso como completado

## 8. ¿Cómo enviar tu proyecto?

Q&A (0)

Después de implementar los cuatro pilares de la OOP en tu proyecto, envíalo y compártelo. Pero antes de hacerlo, asegúrate de que probaste la jugabilidad por completo, o incluso mejor, haz que un amigo o familiar la pruebe.Una entrega exitosa incluirá:

- Un enlace al repositorio de GitHub del proyecto que muestre varias entregas con mensajes y al menos dos ramificaciones.
- Demostración de herencia (clases primarias y secundarias). Agrega un comentario en el código que diga «// INHERITANCE» para indicar dónde se implementó.
- Demostración de polimorfismo (sobrecarga y anulación de métodos). Agrega un comentario en el código que diga «// POLYMORPHISM» para indicar dónde se implementó.
- Demostración de encapsulación (getters y setters). Agrega un comentario en el código que diga «// ENCAPSULATION» para indicar dónde se implementó.
- Demostración de abstracción (métodos generales que abstraen detalles innecesarios). Agrega un comentario en el código que diga «// ABSTRACTION» para indicar dónde se implementó.

Toma una captura de pantalla de tu proyecto o graba la pantalla con una guía y después publícala aquí para compartir lo que has hecho. Te recomendamos que al menos hagas un comentario en una de las entregas de otro creador. ¿Completó correctamente el desafío? ¿Qué te gustó acerca del proyecto? ¿Cuál sería una buena función que el creador podría agregar?

#### Por favor inicia sesión para enviar

Iniciar sesión

## Complete this Tutorial

Marcar todos los pasos como completados

Submission Gallery

[[Image: Arkanoid]

Arkanoid

Now with extra features

Aanderzr00](https://learn.unity.com/submission/69b70567edbc2a0bbfe95b6d)[[Image: Juego]

Juego

Juego hcho por gian

Uunity_0555gflores00](https://learn.unity.com/submission/69a0acb6edbc2a04f166abd6)[[Image: Teoría de la programación en acción]

Teoría de la programación en acción

Teoría de la programación en acción

Rrobertomoramoreno300](https://learn.unity.com/submission/699edb0eedbc2a03b173d953)[[Image: Junior Programmer Final Project]

Junior Programmer Final Project

My final course project which implements object-oriented programming

MMefistofeles4580](https://learn.unity.com/submission/6939c1f4edbc2a0021a18178)[[Image: PROYECTO FINAL prototipo mini rpg sencillo]

PROYECTO FINAL prototipo mini rpg sencillo

prototipo sencillo tipo rpg en el cual se emplearon los pilares de la programacion orientada a objetos
https://play.unity.com/en/games/649aeff2-5fcb-4e5e-abf8-8b3dfc7d9e54/prototipo-basico-rpgproyecto-final

Zzauzer971360](https://learn.unity.com/submission/6935d603edbc2a0aca8b13f4)[[Image: POO Theory]

POO Theory

implementé los cuatro pilares de la OOP en mi proyecto

DDan0pal80](https://learn.unity.com/submission/69322ea8edbc2a22aad10f36)Load More
