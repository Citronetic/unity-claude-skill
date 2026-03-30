[Image: image]

# ¿Cómo medir el rendimiento del código para identificar problemas?

Tutorial

foundational

+10XP

30 mins

3

(112)

Unity Technologies

[Image: ¿Cómo medir el rendimiento del código para identificar problemas?]Summary

En este tutorial, aprenderás a utilizar el Generador de perfiles para analizar una escena e identificar dónde ocurren cuellos de botella de la optimización.

Al finalizar este tutorial, podrás realizar lo siguiente:

- Deducir el método de Script que utiliza el mayor tiempo de CPU (en comparación con un método de Script que no lo hace) mediante el Generador de perfiles en la ventana Profiler.
- Distinguir entre un bucle que recorre una colección una vez de forma eficaz en una llamada de Update() y muchos bucles que recorren la misma colección en una llamada de Update().
- Reconocer las posibles causas de problemas de rendimiento (p. ej., demasiados componentes RigidBody, demasiados colisionadores, demasiadas sombras, etc.) en una situación dada.
- Investigar los problemas de rendimiento causados por conteo de polígonos, tamaño de texturas o demasiados objetos en la pantalla mediante la ventana Stats de Unity.
- Identificar enunciados condicionales if anidados innecesarios.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

Mientras trabajas para finalizar tu proyecto y prepararlo para su publicación, es importante identificar y resolver, ya sea durante o después de la refactorización, cualquier obstáculo que permanezca en tu código. La herramienta de generación de perfiles de Unity es ideal para localizar problemas difíciles de encontrar que podrían estar reduciendo tu frecuencia de imagen. El Generador de perfiles produce un informe detallado de lo que ocurre en una aplicación fotograma por fotograma, incluidos los *scripts*que se llaman, cuánta memoria se asigna, cómo se muestran los visuales en pantalla y más. Puedes ver cualquier cosa que afecte el rendimiento de tu proyecto en el Generador de perfiles.

El rendimiento de tu proyecto depende en gran medida de la computadora donde se ejecute, por lo cual es importante generar un perfil para tu proyecto en un dispositivo meta específico o, si tu objetivo es un rango de hardware compatible, tal como una PC, generar perfiles en varios dispositivos con distintas especificaciones. Si ejecutas este proyecto en una nueva PC diseñada para juegos de alto nivel, es posible que obtengas una excelente frecuencia de imagen, mientras que la experiencia sería completamente distinta en una *laptop* de cinco años de antigüedad con una tarjeta de gráficos integrada.

Para que sea más fácil identificar los problemas comunes de optimización, creamos una Escena muy poco optimizada para que la revises mientras exploras el Profiler por primera vez. Con esto en mente, considera que los números que veas en este tutorial no serán exactamente los mismos que verás en tu propia computadora. Pero, sin importar cuál sea tu frecuencia de imagen, podrás ver resultados mensurables cuando optimices los*scripts*.

Marcar paso como completado

## 2. ¿Cómo explorar en la Escena?

Q&A (0)

Veamos un ejemplo de un problema de rendimiento que podemos examinar con el Profiler. Como se mencionó anteriormente, usaremos una Escena personalizada que se creó justo para este tutorial, la cual se encuentra en una carpeta dedicada para optimización en tu proyecto.

**1.**  Localiza la **carpeta Optimization (Optimización)** en el proyecto y abre la Escena Optimization en la carpeta Scenes.

**2**. Cuando abras la Escena por primera vez, solo verás un plano gris. En la Hierarchy, también verás un GameObject Manager (Administrador) con un Script OptimManager adjunto.

**3**. Presiona Play y observa la Escena.

[Image: image]

**4.** En el modo Play, miles de montacargas aparecen en el plano y todos giran y se mueven dentro de un límite definido. Abre la pestaña **Stats**y toma nota de los fotogramas por segundo (FPS) actuales en tu computadora.

**5.** Sal del modo Play y observa el Script OptimManager en el Inspector. Este Script es responsable de generar el campo de los montacargas. Nota la variable del Prefab del montacargas, un contador de instancias y el tamaño del límite.

**6.** Selecciona el objeto Manager en la Hierarchy; después, en el componente Optim Manager, cambia el contador de la instancia a 200. Vuelve a entrar al modo Play y nota el cambio en tus FPS.

[Image: image]

La reducción en la cantidad de montacargas en la Escena aumenta los FPS totales. En una situación donde la frecuencia de imagen es más importante que cualquier otra cosa en una aplicación, esta podría ser una solución de optimización viable. Sin embargo, ¿qué pasa si la aplicación requiriera 2000 montacargas y una frecuencia de imagen de 60 FPS?

Con estos requisitos en mente, es importante descubrir dónde se encuentra exactamente el obstáculo. ¿Fue la frecuencia de imagen más baja en el primer ejemplo solo porque había 10 veces más mallas en pantalla? ¿Fue porque todas se movían? ¿O fue algo más? Encontrar la respuesta te dirá exactamente qué debes resolver.

La generación de perfiles te dará una imagen de todo lo que ocurre y exactamente cuánto tiempo toma cada operación para que puedas tomar una decisión informada sobre cómo mejorar tu frecuencia de imagen.

Marcar paso como completado

## 3. ¿Cómo reunir datos de perfil?

Q&A (0)

Veamos más en profundidad y averigüemos cómo procesa Unity esta Escena.

**1**. Establece el contador de instancia en OptimManager otra vez a 2,000.

**2**. Abre Profiler al seleccionar **Window > Analysis > Profiler.**

**3**. Acopla la ventana Profiler junto a tu ventana Project.

**4**. Actualmente, Profiler está en blanco porque todavía no se han recopilado datos sobre la Escena. Profiler comienza a trabajar cuando inicias el modo Play. Asegúrate de que el botón para grabar (botón rojo) de Profiler esté activo y después presiona Play.

[Image: image]

**5**. El Profiler comenzará a registrar una gráfica codificada por colores de los datos de rendimiento.  Después de uno o dos segundos, sal del modo Play. Ahora ya tienes una descripción detallada de todo lo que ocurre en la aplicación durante ese periodo.

[Image: image]

La parte superior del Profiler está dividida en módulos; el primero es **CPU Usage**. Este será el único módulo que usaremos en este tutorial.

El módulo contiene una gráfica que representa varias categorías de operaciones y cómo utilizan el CPU. En la parte izquierda del módulo hay una clave de color para estas categorías. Las aristas muestran cuando una de estas categorías de operaciones, tal como el Rendering (Renderizado), toma más tiempo para trabajar en un fotograma específico.

Ten en cuenta que el fondo azul no es en realidad un fondo, si no una representación de los *scripts* que se ejecutan. Incluso desde este nivel muy general, puedes reconocer que hay algo que muy probablemente no funciona bien en nuestros *scripts*, ya que utilizan mucho más procesamiento que incluso el renderizado de toda la Escena. Inspeccionaremos los Scripts en breve.

Marcar paso como completado

## 4. ¿Cómo establecer un balance de milisegundos?

Q&A (0)

La parte inferior del Profiler muestra un desglose visual de lo que ocurre en cada fotograma con exactitud. Si no puedes ver la gráfica de barras en la mitad inferior del Profiler, selecciona **Timeline**en el menú desplegable directamente debajo de la sección Profiler Module (Módulos del Profiler).

[Image: image]

La línea vertical blanca en la gráfica de CPU Usage representa un fotograma que se ejecutó en la aplicación. Haz clic izquierdo y arrastra esta línea al módulo CPU Usage para ver cómo cambia el uso de fotograma a fotograma. Selecciona un fotograma donde haya una frecuencia de ondas en el uso del CPU.

[Image: image]

En el ejemplo anterior, puedes ver la anotación **CPU: 117.26ms** (resaltado). Este representa la cantidad total de tiempo, en milisegundos, que todo lo contenido en este fotograma tarda en completarse.

Cuando se genera un perfil, queremos prestar atención específicamente a esta tasa de compleción en milisegundos, ya que es la clave para alcanzar el objetivo de frecuencia de imagen. En función de la frecuencia de imagen objetivo, tendrás un balance específico en milisegundos por fotograma. La forma de calcularlo es la siguiente:

**1000 ms/fotogramas por segundo objetivo = balance en ms**

Para alcanzar un objetivo de 60 FPS, cada fotograma tiene un balance de 16 milisegundos. Esto significa que el fotograma del que se genera un perfil en este momento es siete veces más de lo que debe ser.

Marcar paso como completado

## 5. ¿Cómo explorar el Timeline del Profiler?

Q&A (0)

En la parte superior del Timeline del Profiler hay dos etiquetas alternantes: **PlayerLoop (Bucle del jugador)**y **EditorLoop (Bucle del Editor)**. Si no puedes verlas, quizás tengas que utilizar la rueda del *mouse* o panel táctil para acercarte. PlayerLoop representa todo lo que se ejecuta dentro del juego, mientras que EditorLoop representa todo lo que ocurre para ejecutar la aplicación en el Editor. En este caso, dado que nuestro usuario final no utilizará la aplicación en el Editor de Unity, es seguro ignorar EditorLoop y enfocarse solo en lo que ocurre en PlayerLoop.

Las barras que se enumeran en la parte inferior de PlayerLoop representan todo lo que ocurre en la aplicación durante ese fotograma, en orden descendente por tiempo de duración. El Timeline del Profiler está coordinado por colores para concordar con la gráfica del CPU Usage. La barra azul grande indica que hay una acción relacionada con un Script específico que ocurre en este fotograma y que toma una gran cantidad de tiempo.

[Image: image]

Haz clic en la barra para ver que el origen de esta acción es el Script OptimUnit, específicamente su método Update. Toma 98,27 ms para completar, lo cual por sí mismo supera el balance de milisegundos muchas veces. Considera también que hay 2000 instancias de este Script en ejecución en este fotograma, lo cual es importante porque sabemos que generamos 2000 montacargas en el Script OptimManager. Estos dos factores deben estar relacionados de alguna forma.

¿Por qué se ejecutaría el Script 2000 veces? Debe haber una instancia por cada montacargas. Si seleccionamos el Prefab OptimUnit en OptimManager, descubrimos que el Script OptimUnit está adjunto al Prefab mismo, lo cual significa que de hecho hay 2000 copias de este Script en ejecución.

A continuación, podemos utilizar Profiler para ayudarnos a identificar las líneas exactas de código que reducen la velocidad de este proyecto.

Marcar paso como completado

## 6. ¿Cómo agregar métodos de muestra de Profiler?

Q&A (0)

Hay muchas cosas ocurriendo en el método Update del Script OptimUnit, así que obtengamos un poco más de ayuda del Profiler. Podemos medir el rendimiento de secciones de código específicas si agregamos los métodos Profiler.BeginSample y Profiler.EndSample.

**1**. En la carpeta Optimization, localiza la carpeta Scripts y abre el Script OptimUnit.

El método Update administra cuatro tareas discretas: tiempo de manejo, rotación del Prefab del montacargas, movimiento del Prefab del montacargas y revisión del límite del Manager. Etiquetemos estas tareas para que el Profiler las monitorice.

**2**. Agrega los métodos BeginSample y EndSample justo en la parte superior y en la parte inferior del método HandleTime en la parte superior de Update:

```csharp
Profiler.BeginSample("Handling Time"); // begin profiling a piece of code with a custom label
HandleTime();
Profiler.EndSample(); // ends the current profiling sample
```

Nota que Profiler.BeginSample tiene un parámetro para declarar un nombre de etiqueta personalizado. Esta etiqueta aparecerá en el Profiler de la misma forma en que lo hace «OptimUnit.Update».

**3**. Directamente después del método Profiler.EndSample, agrega un nuevo BeginSample para Rotating:

```csharp
Profiler.BeginSample("Rotating"); // begin profiling

var t = transform;
float xRotation = currentAngularVelocity * Time.deltaTime;
float zRotation = currentAngularVelocity * Time.deltaTime;

if (transform.position.x > 0)
    xRotation *= -1;

if (transform.position.z < 0)
    zRotation *= -1;

transform.Rotate(xRotation, 0, zRotation);

Profiler.EndSample(); // end profiling
```

**4**. De nuevo, justo en la parte inferior del último EndSample, agrega un nuevo BeginSample, esta vez para Moving:

```csharp
Profiler.BeginSample("Moving"); // begin profiling

Move();

Profiler.EndSample(); // end profiling
```

**5**. Por último, agrega un último BeginSample en la parte inferior de tu anterior EndSample, esta vez para Boundary Check:

```csharp
Profiler.BeginSample("Boundary Check"); // begin profiling

//check if we are moving away from the zone and invert velocity if this is the case
if ((transform.position.x > areaSize.x && currentVelocity.x > 0)
    || (transform.position.x < -areaSize.x && currentVelocity.x < 0))
{
    currentVelocity.x *= -1;
    PickNewVelocityChangeTime(); //we pick a new change time as we changed velocity
}

if ((transform.position.z > areaSize.z && currentVelocity.z > 0)
    || transform.position.z < -areaSize.z && currentVelocity.z < 0))
{
    currentVelocity.z *= -1;
    PickNewVelocityChangeTime(); //we pick a new change time as we changed velocity
}

Profiler.EndSample(); // end profiling
```

**6**. Guarda el Script y regresa al Editor de Unity.

**7**. En el Profiler, presiona el botón Clear (Borrar) para borrar los datos capturados actualmente.

[Image: image]

**8**. Captura nuevos datos al presionar Play y dejar que la aplicación se ejecute por algunos segundos, luego sal del modo Play.

**9**. En el módulo CPU Usage de la ventana Profiler, selecciona otro fotograma con una frecuencia de ondas en CPU Usage.

**10**. Veamos las secciones de código que se etiquetaron. Justo debajo de la barra OptimUnit.Update hay una nueva barra de creación de *scripts*. Esta barra representa todo el nuevo código que se proporcionó como muestra. Selecciónalo y aparecerá una de las nuevas etiquetas de muestra.

**11**. Haz clic en el menú desplegable Timeline y selecciona Hierarchy.

[Image: image]

**12**. Los datos del fotograma cambiarán a una vista de lista, con etiquetas para las cuatro secciones de código seleccionadas de forma automática.

[Image: image]

En esta vista, de inmediato es claro en la columna **Time ms** que el problema se encuentra en el método Moving. Ahora que identificamos el problema, es momento de intentar resolverlo en el código.

Marcar paso como completado

## 7. ¿Cómo optimizar el código?

Q&A (0)

**1**. Regresa al Script OptimUnit y desplázate hacia abajo hasta que encuentres el método Move en Update. Mantén presionada la tecla Ctrl (Windows) o Cmd (Mac) y haz clic izquierdo en **Move**para ir hasta el método mismo.

```csharp
void Move()
{
    Vector3 position = transform.position;

    float distanceToCenter = Vector3.Distance(Vector3.zero, position);
    float speed = 0.5f + distanceToCenter / areaSize.magnitude;

    int steps = Random.Range(1000, 2000);
    float increment = Time.deltaTime / steps;
    for (int i = 0; i < steps; ++i)
    {
        position += currentVelocity * increment * speed;
    }

    transform.position = position;

    transform.position = transform.position + currentVelocity * Time.deltaTime;
}
```

El método Move calcula distintas variables y crea iteraciones de un bucle FOR entre 1,000 y 2,000 veces para calcular la nueva posición del montacargas. Multiplícalo por 2,000 montacargas (2-4 millones de bucles) y considera que este método se ejecuta una vez por cada fotograma. Es fácil ver por qué este método es tan lento. Estos cálculos son redundantes para currentVelocity, que se calcula en el código Boundary Check, por ello es fácil simplificar este método para que solo se haga cargo de mover el montacargas.

**2**. Reemplaza el cuerpo de Move con la siguiente línea:

```csharp
void Move()
{
    transform.position = transform.position + currentVelocity * Time.deltaTime;
}
```

**3**. Guarda el Script y regresa al Editor de Unity.

**4**. Borra los datos del Profiler y captura más datos otra vez en el modo Play.

[Image: image]

El cambio en Profiler es muy extremo. Antes, el código Move tomara  77.42 ms para completarse. Después de realizar los cambios de optimización, solo requiere  0.36. Los ms totales de CP también se redujeron a 9.75 ms, lo cual está por debajo del objetivo de 16 ms.

[Image: image]

En la vista del juego, los FPS se incrementaron hasta 143.

Marcar paso como completado

## 8. Resumen

Q&A (0)

Aunque este fue un ejemplo extremo, esta Escena de muestra ilustra cómo errores simples de creación de*scripts*pueden a veces tener un gran impacto en el rendimiento de una aplicación. En una aplicación que se produce con fines comerciales, es probable que encuentres muchos obstáculos distintos en muchos *scripts*, pero el proceso siempre será el mismo. Utiliza el Profiler para identificar Scripts problemáticos y utiliza los métodos de muestra de Profiler para aislar bloques de código de los que sospechas que podrían ser un problema. Cuando identifiques el código problemático, refactorízalo, mide de nuevo su rendimiento y repite hasta que hayas solucionado todos los problemas. Ahora tienes las herramientas para identificar código ineficiente en tus propios proyectos.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
