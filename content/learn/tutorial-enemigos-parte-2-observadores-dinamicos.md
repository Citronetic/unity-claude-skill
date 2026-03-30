[Image: image]

# Enemigos, Parte 2: observadores dinámicos

Tutorial

Beginner

+0XP

40 mins

4

(161)

Unity Technologies

[Image: Enemigos, Parte 2: observadores dinámicos]Summary

Has creado un enemigo al que tiene que evadir John Lemon, pero eso no es un gran reto. Es hora de crear otro enemigo que va a incrementar la dificultad para el jugador.

En este tutorial tú:

- Crearás un enemigo dinámico tipo fantasma.
- Escribirás un script personalizado para que los fantasmas patrullen la casa embrujada.
- Poblarás tu juego con enemigos.

Cuando hayas terminado el tutorial, tu juego estará lleno de enemigos y ¡estará casi listo!

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. ¿Cómo se configura el Prefab del fantasma?

Q&A (0)

En el tutorial anterior creaste un enemigo tipo gárgola para la casa embrujada. Ahora vas a incrementar el nivel de complejidad de tu nivel al crear enemigos dinámicos (móviles). Ahora vas a crear un fantasma o Ghost que deambule los pasillos de la casa buscando a JohnLemon.

El primer paso es usar el modelo del fantasma, o Ghost, para crear un Prefab. Ya deberías estar familiarizado con este proceso.

1. En la ventana Project, abre la carpeta **Assets > Models > Characters** y ubica el recurso **Ghost**.

[Image: image]

2. Arrastra el modelo Ghost desde la ventana Project a la ventana Hierarchy para crear un ejemplo del modelo.

3. Arrastra el GameObject Ghost desde la ventana Hierarchy a la carpeta **Assets > Prefabs** en la ventana Project. Cuando la casilla de diálogo Create Prefab (Crear un Prefab) aparezca, selecciona **Original Prefab**(Prefab original)

4. Abre el Prefab para editarlo.

Marcar paso como completado

## 2. ¿Cómo se le da movimiento al fantasma?

Q&A (0)

El siguiente paso es el darle movimiento a tu enemigo. El fantasma, o Ghost, también tendrá un controlador de animación simple, ya que estará reproduciendo una sola animación repetidamente.

Para darle movimiento al fantasma:

1. En la ventana Project, ve a la carpeta **Assets > Animations > Animators** y haz clic derecho en ella.

2. En el menú contextual, selecciona **Create > Animator > Controller**. Ponle el nombre «**Ghost»** al nuevo controlador de animación o Animator Controller.

3. Haz clic doble en **Ghost** para abrir la ventana Animator.

4. En la ventana Project, navega hacia **Assets > Animation > Animations**.

5. Expande el recurso modelo o Model Asset **Ghost@Walk** (fantastma caminando).

[Image: image]

6. Arrastra la animación **Walk** desde la ventana Project a la ventana Animator.

7. En la ventana Project, ve a la carpeta **Assets > Animation > Animator**.

8. En la Ventana Hierarchy, selecciona el GameObject **Ghost**.

9. Arrastra el controlador de animación del fantasma o Ghost Animator Controller desde la ventana Project a la propiedad **Controller**del componente Ghost Animator (Animador del fantasma) en el Inspector.

10. Guarda la escena.

Marcar paso como completado

## 3. ¿Cómo se le agrega un colisionador al fantasma?

Q&A (0)

Al igual que JohnLemon y las gárgolas (aunque parezca un poco contradictorio), los fantamas o Ghosts necesitan una presencia física dentro de la escena. Esto significa que necesitarán un colisionador o Collider.

Para agregar el colisionador:

1. Asegúrate de que el Editor Unity todavía esté en el modo Prefab. Si no lo está, puedes usar la combinación de acceso rápido que aprendiste cuando creaste el Prefab para la gárgola o Gargoyle Prefab.

2.  En el Inspecto, agrega un componente de colisionador en forma de cápsula o **Capsule Collider component** al GameObject Ghost.

3. Vamos a ajustar las configuraciones de tal manera que el colisionador o Collider le quede mejor al modelo del fantasma:

- Cambia la propiedad **Center**(centro) del colisionador en forma de cápsula o Capsule Collider a **(0; 0,6; 0)**.
- Cambia la propiedad **Radius**(radio) a **0,25**.
- Cambia la propiedad **Height** (altura) a **1,2**.

[Image: image][Image: image]

¡Ahora el colisionador le queda bien!

Marcar paso como completado

## 4. ¿Cómo se le añade un componente de cuerpo rígido (Rigidbody) al GameObject Ghost?

Q&A (0)

El fantasma o Ghost también necesitará un cuerpo rígido porque es móvil. Necesitas tener cuidado con estas configuraciones: un choque con JohnLemon no debería causar que el fantasma se mueva.

Puedes evitar cualquier movimiento al habilitar todas las limitaciones o Constraints para la posición o rotación, pero hay una manera más fácil para configurar el Rigidbody o cuerpo rígido como algo cinemático o **kinematic**.

En el Inspector ubica el componente Rigidbody y habilita la casilla **Is Kinematic** (es cinemático).

[Image: image]

Un cuerpo rígido cinemático no puede ser afectado por fuerzas externas tales como colisiones, pero todavía puede chocar con otros GameObjects. La raqueta en el juego Breakout es un ejemplo perfecto de un cuerpo rígido cinemático: la pelota rebota de la raqueta, pero a la raqueta no le afecta el rebote.

Marcar paso como completado

## 5. ¿Cómo se hace que el fantasma sea un observador?

Q&A (0)

El Prefab Ghost ahora tiene todo lo básico, pero actualmente no se mueve ni puede ver a JohnLemon. Ya has creado un GameObject para el Prefab Gargoyle, el mismo que controla este proceso. Vamos a crear un Prefab de ese en vez de hacer todo ese trabajo de nuevo.

Para hacer que el fantasma o Ghost sea un observador:

1. Primero, guarda los cambios que hiciste en el Ghost Prefab.

[Image: image]

2. En la ventana Project, abre la carpeta **Assets > Prefabs** y selecciona el **Prefab Gargoyle**.

3. En la ventana Inspector, abre el botón **Open Prefab**.

4. En Hierarchy, ubica el GameObject **PointOfView** que creaste como un hijo jerárquico de Gargoyle.

Vas a convertir este GameObject en un Prefab; de esa manera, tanto los prefabs para la gárgola (Gargoyle) y para el fantasma (Ghost) puedan usarlo como referencia.

5. Arrastra el GameObject PointOfView desde la ventana Hierarchy a la carpeta Assets > Prefabs en la ventana Project.

6. Deberías ver que el GameObject PointOfView en Hierarchy ahora está representado por un cubo azul en vez de uno gris y el nombre está en azul y no en gris. Esto se debe a que es un ejemplo de un Prefab.

[Image: image]

7. Guarda el Prefab Gargoyle

8. En la ventana Project, ve a **Assets > Prefabs** y selecciona el Prefab Ghost. Haz clic en el botón Open Prefab (abrir Prefab).

9. Arrastra el Prefab PointOfView desde la carpeta Assets > Prefabs al GameObject **Ghost**en la ventana Hierarchy.

[Image: image]

Ahora el fantasma o Ghost también tiene un PointOfView (punto de vista) ¡y puede usar todas sus funcionalidades! No obstante, hay un par de ajustes que hacer para que el PointofView funcione de manera adecuada para este enemigo. La gárgola es más alta que el fantasma y mira hacia abajo mientras que el fantasma necesita mirar hacia el frente.

10. En la ventana Hierarchy, selecciona el GameObject PointOfView.

11. En el Inspector, encuentra el componente Transform

- Cambia la propiedad Position a **(0; 0,75; 0,4)**.
- Cambia la propiedad Rotaiton a**(0, 0, 0)**

[Image: image]

Ahora tu fantasma está configurado para ser un observador u Observer. También puedes cambiar el Prefab PointOfView para que actualice a ambos enemigos en tu juego, si alguna vez lo necesitas.

Marcar paso como completado

## 6. ¿Cómo se configura un componente Nav Mesh Agent?

Q&A (0)

Ahora estás listo para configurar al fantasma o Ghost para que pueda deambular a través del entorno de tu juego.

Vas a usar dos componentes para lograrlo:

- Un Nav Mesh Agent (agente de navegación de malla) el que le permitirá al fantasma encontrar senderos alrededor del Nav Mesh del que has hecho un *bake* en el tutorial sobre el entorno.
- Un *script* que le dice al Nav Mesh Agent a dónde debería ir el fantasma.

Vamos a comenzar creando un Nav Mesh Agent:

1. En el Inspector, agrega un componente Nav Mesh Agent al GameObject Ghost.

[Image: image]

Por la mayor parte, podrás usar las configuraciones por defecto para este componente, pero hay algunas cosas que tendrás que ajustar.

2. En la vista Scene, deberías ver una representación cilíndrica del Nav Mesh Agent que rodea al fantasma.

[Image: image]

Está muy grande. En el Inspector, cambia la propiedad **Radius**del componente Nav Mesh Agent a **0,25.**

La altura del Nav Mesh Agent también es mucho mayor que la del fantasma, pero ya que el entorno no tiene un techo, no importa cuán alto sea.

3. Cambia la propiedad **Speed** del Nav Mesh a 1,5. La velocidad por defecto de 3,5 metros por segundo es muy rápida para un fantasma y hará que tu juego sea muy difícil.

4. Cambia la propiedad **Stopping Distance** del componente Nav Mesh agent a 0,2. No necesitas ser muy preciso en cuán cera de los puntos de navegación o *waypoints* llega el fantasma; de tal manera que, puedes incrementar la distancia en la que el Nav Mesh Agent puede estar de su destino y todavía considerará que ha llegado a él.

[Image: image]

5. Guarda tus cambios.

El Nav Mesh Agent ha sido configurado, pero no hará nada por sí mismo. Necesita tener su destinación configurada y para hacerlo, necesitas que el destino esté configurado y para hacerlo necesitas escribir un *script*.

Marcar paso como completado

## 7. ¿Cómo se crea un script WaypointPatrol?

Q&A (0)

Los fantasmas en tu juego se moverán haciendo una patrulla repetitiva a través de una colección de puntos de navegación o *waypoints*; por lo tanto, tiene sentido nombrarlo WaypointPatrol (Patrulla de puntos de navegación). No te olvides de guardar los cambios que hagas mientras estés trabajando en el *script*.

Para crear el nuevo *script*:

1. En la ventana Project ve a **Assets > Scripts**.

2. Haz clic derecho en la carpeta Scripts y selecciona **Create > C# Script**. Ponle el nombre «**WaypointPatrol**» al nuevo script.

3. En Hierarchy, selecciona el GameObject Ghost

4. Arrastra el script WaypointPatrol desde la ventana Project a la ventana Inspector para agregarla como componente al fantasma o Ghost.

5. Haz clic doble en el *script*WaypointPatrol para editarlo.

Marcar paso como completado

## 8. ¿Cómo se configura el destino del Nav Mesh Agent?

Q&A (0)

Antes de que empieces a editar el *script*, considera brevemente lo que necesitas que haga. Debería configurar el destino del Nav Mesh Agent cuando la escena se carga por primera vez y cuando sea que el fantasma haya llegado a su destino. Para saber cuando haya llegado a su destino, necesitarás verificar cada marco.

Vamos a empezar a editar tu *script*:

1. Necesitas los métodos Start y Update en este *script*; por lo tanto, no tiene sentido eliminarlos como lo hiciste antes. Al contrario, solo necesitas eliminar los **comentarios** que están sobre ellos.

El *script* debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WaypointPatrol : MonoBehaviour
{
    void Start ()
    {

    }

    void Update ()
    {

    }
}
```

2. Necesitas decirle al Nav Mesh Agent el destino al que debe ir; por lo tanto, necesitas una referencia que apunte hacia él. Para escribir cualquier tipo de *script* con el Nav Mesh Agent necesitas incluir su *namespace*.

En la parte superior del *script*, con las otras directivas de uso, agrega el código siguiente:

```csharp
using UnityEngine.AI;
```

Al incluir el *namespace* AI, tendrás acceso a la **clase NavMeshAgent**.

3. Sobre el método Start, agrega lo siguiente:

```csharp
public NavMeshAgent navMeshAgent;
```

Esta referencia pública al componente te permitirá asignarle una referencia al Nav Mesh Agent en la ventana Inspector.

4. Luego, necesitas configurar los puntos de navegación o *waypoints* que el fantasma debe patrullar. El destino del Nav Mesh Agent es un Vector3, una posición dentro del *world space*. Pero, si haces que los puntos de navegación sean Vectores3, tendrás que configurar manualmente todas las posiciones y esperar que los números que uses sean correctos.

En vez de eso, tiene sentido tener una colección de GameObjects vacíos y usar sus posiciones como puntos de navegación. Estos GameObjects pueden moverse alrededor de la escena mucho más fácilmente y hacen que los cambios que quieras hacer sean mucho más simples. En vez de tener referencias a una colección de GameObjects, puedes tener referencias a sus componentes Transform. Podrías tener referencias a varias variables públicas Transform y luego configurar cada una de manera separada en la ventana Inspector, pero esto no te permite mucha flexibilidad con respecto a cuantos puntos de navegación cada fantasma puede tener.

Puedes usar algo llamado un ***array*** o **arreglo**. Un *array* es una colección de variables que existen juntas. Se definen usando corchetes.

Agrega la línea siguiente justo debajo de la declaración de la variable NavMeshAgent:

```csharp
public Transform[] waypoints;
```

Esta línea de código declara una variable pública llamada **waypoints**, la misma que es un *array* o arreglo de Transforms.

5. Luego, agrega una línea a tu método Start para configurar el destino inicial del Nav Mesh Agent.

```csharp
navMeshAgent.SetDestination(waypoints[0].position);
```

Marcar paso como completado

## 9. ¿Cómo funcionan los arrays o arreglos?

Q&A (0)

Vamos a explorar este tema para entender mejor cómo funcionan los *arrays* o arreglos:

Tu línea de código está invocando el método SetDestination (Configurar destino) de tu componente Nav Mesh Agent. Necesita un Vector3 como parámetro y por ende, estás usando la propiedad de posición del primer Transform de un punto de navegación en el arreglo.

Los artículos individuales que conforman un arreglo se llaman **elementos**. Los elementos individuales en un arreglo usan su índice en corchetes. Considera que los índices son los números de elementos que necesitas saltar desde el comienzo del arreglo para llegar al elemento que quieres. No necesitas saltar ningún elemento para acceder al primero; por lo tanto, su índice es **0**.

Marcar paso como completado

## 10. ¿Cómo se agregan destinos adicionales?

Q&A (0)

Vamos a continuar escribiendo tu *script*:

1. Tu fantasma necesita moverse al siguiente punto de navegación cuando haya llegado al último que tenía como destino. La mejor manera de monitorear qué punto de navegación es el siguiente sería guardar el índice actual del arreglo o *array* «waypoint».

Debajo de la declaración del *array* waypoint, agrega el código siguiente:

```csharp
int m_CurrentWaypointIndex;
```

2. Luego, vamos a continuar con el método Update para que puedas usar este índice.

En el método Update necesitas ejecutar una verificación; quieres saber si el Nav Mesh Agent ha llegado a su destino. Una manera muy fácil de verificarlo es ver si la distancia que queda al destino es menos que la distancia para parar que configuraste en la ventana Inspector anteriormente.

Agrega la siguiente sentencia condicional IF al método Update:

```csharp
if(navMeshAgent.remainingDistance < navMeshAgent.stoppingDistance)
        {

        }
```

3. Ahora puedes actualizar el índice actual y luego usarlo para configurar el destino del Nav Mesh Agent. Para hacerlo vas a usar un nuevo operado llamado el operador resto o **remainder operator** el que se representa por el carácter de porcentaje %.

Agrega el siguiente código dentro de la sentencia condicional IF:

```csharp
m_CurrentWaypointIndex = (m_CurrentWaypointIndex + 1) % waypoints.Length;
```

El operador resto o*remainder* toma lo que sea que esté a su izquierda y lo divide por lo que está a su derecha y luego regresa el resto. Por ejemplo, 3 % 4 regresaría 3 (porque 4 está dentro de tres 0 veces con 3 de resto). 5 % 4 regresaría 1 (porque 4 está dentro de cinco 1 veces con 1 de resto).

Tu código está diciendo: Agrega uno al índice actual, pero si ese incremento hace que el índice sea igual al número de elementos en el arreglo o *array*, configúralo a cero. Estaría configurado a cero en esta circunstancia porque el resto o *remainder* de cuando se divide un número por si mismo es cero.

4. Ahora que has incrementado el índice (y lo has regresado a cero cuando fuere necesario), necesitas usarlo. Agrega lo siguiente debajo del incremento del índice:

```csharp
navMeshAgent.SetDestination (waypoints[m_CurrentWaypointIndex].position);
```

Esto es exactamente lo que hiciste en el método Start, excepto que en vez de usar cero como el índice, vas a usar el punto de navegación al que haya llegado el fantasma actualmente en el índice.

5. ¡Eso es todo! Tu *script* completo debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class WaypointPatrol : MonoBehaviour
{
    public NavMeshAgent navMeshAgent;
    public Transform[] waypoints;

    int m_CurrentWaypointIndex;

    void Start ()
    {
        navMeshAgent.SetDestination (waypoints[0].position);
    }

    void Update ()
    {
        if(navMeshAgent.remainingDistance < navMeshAgent.stoppingDistance)
        {
            m_CurrentWaypointIndex = (m_CurrentWaypointIndex + 1) % waypoints.Length;
            navMeshAgent.SetDestination (waypoints[m_CurrentWaypointIndex].position);
        }
    }
}
```

6. Guarda tu*script*y regresa al Editor Unity.

Marcar paso como completado

## 11. Assign the Nav Mesh Agent Reference to the Ghost Prefab

Q&A (0)

Debes poder ver en la ventana Inspector lo que necesitas para asignar una referencia al Nav Mesh Agent y para algunos de los Transforms de los puntos de navegación o *waypoints*. La referencia al Nav Mesh Agent será la misma para cada ejemplo del Prefab; por lo tanto, puedes asignársela ahora. Sin embargo, los puntos de navegación o *waypoints* serán diferentes para cada fantasma y no deberían ser parte del Prefab.

1. En la ventana Hierarchy, selecciona el GameObject **Ghost.**

2. Arrastra el nombre del componente Nav Mesh agent en la ventana Inspector hacia el campo Nav Mesh Agent, que está hacia abajo. Esto va a asignar la referencia al Nav Mesh Agent.

[Image: image]

3. Guarda el Prefab Ghost y regresa a la escena.

4. Vamos a verificar que tu *script*Ghost Observer tenga las referencias que necesita. En Hierarchy, expande el GameObject Ghost y selecciona el GameObject**PointOfView**, su hijo jerárquico.

5. Arrastra el GameObject JohnLemon desde Hierarchy al campo Player del script Observer para asignarle su Transform.

6. Luego, haz clic en el botón circular de selección y asígnale el campo GameEnding. Desde que hay un solo componente GameEnding en la escena, habrá solo una opción para que selecciones.

¡Tus enemigos ya están casi listos! Solo necesitas añadir algunos fantasmas más y asignarles sus puntos de navegación y luego agregar un poco de gárgolas inmóviles.

Marcar paso como completado

## 12. ¿Cómo se ubican los fantasmas en tu escena?

Q&A (0)

Ahora estás listo para añadir enemigos a tu escena. Primero, crear cuatro duplicados de los fantasmas y puebla el nivel con enemigos móviles.

1. En la ventana Hierarchy, colapsa y luego selecciona el GameObject Ghost. Duplica el GameObject pulsando Ctrl + D (Windows) o CMD + D (macOS) hasta que tengas cuatro copias de tu fantasma.

2. El primer fantasma debe ir de ida y vuelta cerca de la habitación donde JohnLemon empieza el juego. En el Inspector, configura la posición del fantasma llamado **Ghost**a (-**5,3; 0; -3,1**).

3. El segundo fantasma debe deambular un pasillo muy largo; por lo tanto, John Lemon tiene que evitarlos entrando a otras habitaciones que están a los costados para poder pasar. Configura la posición del fantasma llamado **Ghost**(**1**) a (**1,5; 0; 4**).

4. El tercer fantasma deambulará alrededor de la mesa en uno de los comedores. Configura la posición del fantasma llamado **Ghost**(**2**) a (**3,2; 0; 6,5**).

5. El último fantasma deambulará en el dormitorio cerca de la salida, de tal manera que John Lemon sería capturado si viajara en la dirección equivocada. Configura la posición del fantasma llamado **Ghost**(3) a (**7,4; 0; -3**).

Ahora que tus fantasmas están en su lugar, necesitas hacer y ubicar sus puntos de navegación.

Marcar paso como completado

## 13. ¿Cómo se crean y se ubican los puntos de navegación del fantasma?

Q&A (0)

Los puntos de navegación o *waypoints*necesitan ser GameObjects vacíos, ya que estás usando sus componentes Transform y todos los GameObjects tienen un Transform. Para ser lo más eficiente posible, vas a crear todos los puntos de navegación, vas a ubicarlos y luego asignarlos.

Para configurar y asignar los puntos de navegación”

1. En la ventana Hierarchy, haz clic en el botón Crear y selecciona **Create Empty**.

2. Cámbiale el nombre al nuevo GameObject vacío y ponle «**Waypoint**».

3. Duplica el GameObject Waypoint nueve veces para crear diez puntos de navegación en total, de Waypoint a Waypoint (9).

4. En Hierarchy, selecciona el GameObject **Ghost**.

5. En el Inspector, navega hacia abajo hasta que el componente **Waypoint Patrol** pueda verse.

6. Arrastra el GameObject **Waypoint** desde la ventana Hierarchy al nombre del campo de los puntos de navegación o *waypoints* para añadirlo al arreglo.

7. Arrastra el GameObject **Waypoint (1)** al nombre del campo Waypoints para agregarlo al arreglo también.

8. Tu primer fantasma tiene dos puntos de navegación en su arreglo, pero necesitas ubicarlos. El fantasma deambulará a través de la habitación.

En el Inspector, configura la posición de **Waypoint** a (-5,2; 0; 6,7).

Configura la posición de **Waypoint(1)**a (-5,5; 0; -4,5).

9. El segundo fantasma deambulará a lo largo del pasillo que tiene habitaciones a los lados. Selecciona el GameObject **Ghost(1)** y asígnale **Waypoint (2)**y **Waypoint (3)** a su arreglo o *array* Waypoints.

Configura la posición de **Waypoint (2)**a **(1,2; 0; 7,7).**

Configura la posición de **Waypoint (3)**a **(0,9; 0; -3.5).**

10. El tercer fantasma va a circular alrededor de la mesa en el comedor y necesitará más puntos de navegación o *waypoints*.

Selecciona el GameObject **Ghost (2)**y asígnale los **Waypoint (4), Waypoint (5), Waypoint (6)**y **Waypoint (7)** a su arreglo o *array*Waypoints.

Configura la posición de **Waypoint (4)** a **(3,2; 0; 5,6).**

Configura la posición de **Waypoint (5)**a **(3,2; 0; 12,3)**.

Configura la posición de **Waypoint (6)**a**(6,5; 0; 12,3)**.

Configura la posición de **Waypoint (5)**a **(6,5; 0; 5,6)**.

11. El último fantasma está en el dormitorio inferior derecho. Selecciona el GameObject **Ghost (3)** y asígnale **Waypoint (8)**y **Waypoint (9)** a su arreglo o *array*Waypoints.

Configura la posición de **Waypoint (8)**a **(3,2; 0; -5)**.

Configura la posición de **Waypoint (9)**a **(7,4; 0; -2)**.

¡Eso es todo! ¡Tus fantasmas están listos!

Marcar paso como completado

## 14. ¿Cómo se ponen las gárgolas en tu escena?

Q&A (0)

Luego, pon tres gárgolas en tu nivel:

1. Duplica el GameObject **Gargoyle**dos veces, para que haya tres gárgolas en total.

2. Ya has puesto la primera gárgola. La segunda debería estar al final del pasillo largo; de tal manera que JohnLemon no pueda ir muy lejos.

Configura la posición de **Gargoyle (1)** a **(-2,6; 0, -8.5)**.

Configura la rotación de **Gargoyle (1)**a **(0, 30, 0)**.

3. La tercera gárgola debería ir a la esquina del pasillo junto al comedor, de tal manera que se atrape a JohnLemon si va en el camino equivocado. Desde que será la misma esquina que la primera gárgola, no necesitas cambiar la rotación, pero tendrás que ajustar la posición.

Configura la posición de **Gargoyle (2)**a **(4,8; 0; 10,6)**.

Ahora tu nivel está poblado con una serie de enemigos que harán que el escape de JohnLemon sea un reto más difícil.

Marcar paso como completado

## 15. Clean Up the Hierarchy

Q&A (0)

Hay una cosa más que debes hacer antes de que hayas terminado completamente de lidiar con los enemigos y sus puntos de navegación: debes organizarlos. La ventana Hierarchy se ve muy desordenada por el momento:

[Image: image]

La mejor solución es crear algunos GameObjects vacíos que puedan actuar como padres jerárquicos de los enemigos y sus puntos de navegación. Esto te permitirá expandirlos o colapsarlos como lo necesite y mantiene la ventana Hierarchy ordenada.

Para ordenar la ventana Hierarchy:

1. En la ventana Hierarchy, crea un GameObject vacío. Cámbiale el nombre a **«Enemies»** (enemigos).

2. En el Inspector, configura la posición de **Enemies**a (0, 0, 0). Esto va a actuar como un padre para los GameObjects Gargoyle y Ghost.

3. Pulsa la tecla Ctrl (Windows) o la tecla CMD (macOS) y en la ventana Hierarchy haz clic en cada una de los fantasmas o gárgolas. Cuando todos estén seleccionados, arrástralos al GameObject **Enemies** para que sea su padre jerárquico.

[Image: image]

Ahora puedes expandir y colapsar los enemigos cuando quieras. Luego, necesitas hacer lo mismo para los puntos de navegación.

4. En la ventana Hierarchy, crea un GameObject vacío. Cámbiale el nombre a «**Waypoints**».

5. En el Inspector, configura la posición de **Waypoints** a **(0, 0, 0)**. Esto actuará como un padre jerárquico para todos los GameObjects de los fantasmas y gárgolas.

6. Pulsa la tecla Ctrl (Windows) o la tecla CMD (macOS) y en la ventana Hierarchy haz clic en cada uno de los puntos de navegación o *waypoints*. Cuando todos estén asignados, arrástralos al GameObject **Waypoints** para que sea su padre jerárquico.

[Image: image]

¡Eso es todo! Acabas de organizar a tus enemigos.

Guarda la escena y entra el modo Play para darle un vistazo. Cuando hayas terminado, asegúrate de salir del modo Play.

Marcar paso como completado

## 16. Resumen

Q&A (0)

En este tutorial terminamos de crear enemigos para tu juego. Está casi completo. No tiene sonido, hay algo de sonido que viene de las luces, pero sería muy bueno tener sonidos que mejoren el entorno. En el tutorial siguiente vas a agregar más audio a tu juego.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
