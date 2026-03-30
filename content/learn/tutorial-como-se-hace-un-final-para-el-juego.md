[Image: image]

# ¿Cómo se hace un final para el juego?

Tutorial

Beginner

+0XP

45 mins

2

(194)

Unity Technologies

[Image: ¿Cómo se hace un final para el juego?]Summary

El siguiente paso para desarrollar El paseo encantado de John Lemon es el crear un final para el juego. Con esto podrás crar una experiencia completa para los jugadores y también podrás sentirte más seguro al escribir código.

En este tutorial tú vas a:

- usar las herramientas de la interfaz de usuario (UI) para crear una pantalla para el final del juego;
- crear un desencadenante (Trigger) para el final del juego (GameEnding);
- escribir un script personalizado para el final del juego.

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. ¿Cómo se configura la interfaz de usuario o UI?

Q&A (0)

Ya has hecho mucho de lo que se requiere para configurar el personaje, el entorno y la cámara para tu juego. Ahora necesitas crear un final, de tal manera que el juego realmente termine cuando John Lemon escapa de la casa. Una vez que hayas hecho esto, estarás listo para popular tu juego con enemigos y hacer algunas mejoras finales.

Antes de que empieces a crear cualquier cosa, es importante que sepas lo que estás tratando de lograr.

Cuando JohnLemon llega a la salida, el juego debería disiparse y cerrarse, pero necesitas tener cuidado con esto. Cerrar en el Editor Unity y cerrar en la generación final del juego son cosas muy diferentes.

Primero, necesitas que el juego comience a disiparse. Para hacerlo vas a usar el sistema de interfaz de usuario de Unity o el **UI system.**

1. En la ventana Hierarchy, haz clic en el botón **Create**(Crear).

2. Ve a **UI > Image**. Una imagen de interfaz de usuario puede estirarse a través de toda la pantalla del jugador y su opacidad puede cambiare para crear un efecto de desvanecimiento. ¡Perfecto!

[Image: image]

Esto va a agregar algunos GameObjects nuevos a tu escena.

[Image: image]

**3.**En la ventana Scene, haz clic en el botón 2D en la barra superior para habilitar el modo 2D. Esto te va a permitir ver los nuevos GameObjects de manera adecuada.

[Image: image]

**4.**En Hierarchy selecciona el GameObject **Canvas**. Coloca tu cursor sobre la escena y pulsa **F**.

**5.**Haz zum para poder ver la imagen y el lienzo de manera más cercana. Puedes usar la rueda de desplazamiento en tu ratón o pulsar Alt, hacer clic derecho y arrastrar.

[Image: image]

**6.**En Hierarchy, selecciona el GameObject **EventSystem**.

Este GameObject tiene componentes anexados que trabajan juntos para permitir que cualquier elemento UI en la pantalla interactúe con los ingresos del usuario. Sin embargo, en tu juego el jugador no necesita interactuar con la interfaz de usuario.

**7.**Haz clic derecho en el GameObject EventSystem y selecciona **Delete** (Borrar).

[Image: image]

Luego, vas a usar los dos GameObjects que quedan, Canvas (Lienzo) e Image (Imagen) para crear el efecto de desvanecimiento.

Marcar paso como completado

## 2. ¿Cómo se configura el lienzo o Canvas?

Q&A (0)

1. En Hierarchy, cámbiale el nombre a Canvas (Lienzo) y ponle **FaderCanvas** (Lienzo de desvanecimiento).

2. En el Inspector échales un vistazo a los componentes anexados a FaderCanvas (Lienzo de disipación).

[Image: image]

Deberías tomar en cuenta que su componente Transform es diferente a los que ya has visto. Los GameObjects que son parte del sistema de la interfaz de usuario, o UI, necesitan tener mejor control de su posición; por lo tanto, tienen un componente **Rect Transform** (Transformación rectangular). Un lienzo que está en la raíz de una jerarquía de interfaz de usuario, las configuraciones del Rect Transform son de tipo solo lectura.

**3.**Los componentes Canvas (Lienzo) controlan cómo los elementos que pertenecen a ese lienzo se reproducen. Esta reproducción se controla principalmente desde las configuraciones de **Render Mode**(Modo de reproducción).

Tiene tres modos posibles:

- Screen Space – Overlay (Espacio en la pantalla – revestimiento) en el cual el lienzo llena la pantalla y todos los elementos de la interfaz de usuario se reproducen encima de todo lo demás.
- Scren Space – Camera (Espacio en la pantalla – cámara) en el cual el lienzo llena la pantalla, pero se reproduce para una cámara específica y está sujeto a cierta distancia de la cámara.
- World Space (Espacio en el mundo) donde existe la interfaz de usuario o UI y está reproducida en frente o detrás de otros objetos; por ejemplo, etiquetas de nombre sobre los personajes en un mundo en 3D.

Necesitas estirar una imagen a lo largo de la pantalla y hacer que se reproduzca encima de todo lo demás. Esto significa que el modo por defecto de reproducción **Screen Space – Overlay** (Espacio en la pantalla – revestimiento) es la mejor opción para ti.

**4.**El próximo componente dentro del GameObject FaderCanvas (Lienzo de disipación) es el **Canvas Scaler** (Herramienta para poner el lienzo a escala). Este se usa como una manera muy fácil de controlar el tamaño relativo de los componentes de la interfaz de usuario (UI) cuando se muestran en pantallas de tamaños distintos. Se estirará la imagen a lo largo de toda la pantalla; de esa manera, tú no tendrás que preocuparte de ponerla a escala con respecto al tamaño de la pantalla.

Haz clic en el ícono con un engranaje en la parte superior derecha del componente Canvas Scaler para abrir el menú de contexto. Selecciona **Remove Component**(Eliminar componente)

[Image: image]

**5.**El componente final dentro del GameObject FaderCanvas es el **Graphic Raycaster**(Lanzarrayos). Eso se usa para detectar eventos en la interfaz de usuario como los clics. Va a determinar sobre qué elemento de la interfaz de usuario se hizo clic y enviará el evento a ese elemento para que el componente adecuado pueda reaccionar. El jugador no interactuará con la interfaz de usuario en tu juego, así que no necesitas este componente.

Haz clic en el ícono con un engranaje en la parte superior derecha del componente Graphic Raycaster para abrir el menú de contexto. Selecciona **Remove Component**(Eliminar componente).

Marcar paso como completado

## 3. ¿Cómo se estira una imagen?

Q&A (0)

El paso siguiente es cómo se estira una imagen a lo largo de la pantalla:

**1**. En Hierarchy, selecciona el GameObject Image.

**2.**Selecciona la herramienta rectangular o **Rect Tool** de la barra de herramientas o pulsa **T**.

[Image: image]

**3.**¡Espera un momento! Algo está mal. ¿Por qué la imagen no está donde la herramienta rectangular dice que está?

[Image: image]

Es porque la ventana Scene está usando el posprocesamiento que configuraste en el tutorial anterior.

**4.**Haz clic en el botón **Effects** en la ventana Scene para habilitar todos los efectos, luego haz clic nuevamente para deshabilitar todos los efectos.

[Image: image]

Ahora tu imagen debería mostrarse correctamente.

[Image: image]Marcar paso como completado

## 4. Explora el componente de transformación rectangular o Rect Transform:

Q&A (0)

Vamos a explorar detenidamente el componente Rect Transform:

La posición de un GameObject en 3D se representa con un solo punto en el eje del GameObject. La posición de este eje en un componente Transform es relativa al GameObject padre jerárquico. La herramienta de transformación rectangular trabaja de manera similar; pero desde que los elementos de la interfaz de usuario pueden representar un área, tienen algunas diferencias. En vez de que la posición de la herramienta de transformación rectangular (RectTransform) sea relativa a un punto eje de su padre jerárquico, es relativa a un área de su padre jerárquico. Esta área del padre se representa con las anclas de la herramienta de transformación rectangular o **Rect Transform Anchors**.

Tal vez habrás vista un *gizmo* en la ventana Scene, el mismo que se parece a una flor:

[Image: image]

Realmente son puntos múltiples juntos. Cada uno de estos puntos es un ancla. El rectángulo creado por los cuatro puntos de anclaje es una proporción del área total del padre jerárquico.

[Image: image]

Tu imagen es un hijo jerárquico del FaderCanvas (Lienzo de disipación), lo mismo que llena toda la pantalla. Esto significa que la posición de tu imagen es relativa a un área de la pantalla entera.

La posición de los elementos de la interfaz de usuario se mide en píxeles. Esto es muy importante, especialmente porque no todas las pantallas tienen el mismo número de píxeles. Esto es lo que hace el sistema de anclaje muy poderoso. Cuando las anclas están juntas y muestran un punto, la herramienta de transformación rectangular muestra una posición en píxeles en la que el elemento de la interfaz de usuario está alejado de ese punto.

[Image: image]

Sin embargo; si las anclas están separadas, la herramienta de transformación rectangular mostrará una posición lejos de los lados del área de anclaje.

[Image: image]

Te preguntarás entonces ¿qué tiene que ver esto con tu juego? Bien, necesitas que toda la pantalla se disipe. Eso significa que tu imagen (Image) debería cubrir toda la pantalla sin que importe su tamaño o forma. Para poder logarlo necesitas asegurarte de que el área de anclaje sea la pantalla entera y que no haya ninguna distancia de alejamiento desde esa área.

Marcar paso como completado

## 5. ¿Cómo se configura el componente de transformación rectangular o Rect Transform?

Q&A (0)

Para configurar el componente de transformación rectangular o Rect Transform:

1. En la ventana Hierarchy, selecciona el GameObject Image.

2. En el inspector, encuentra el componente **Rect Transform**. Expande las configuraciones para **Anchors** (anclas o puntos de anclaje).

3. Configura **el valor mínimo de x y y a 0**. Configura los **valores máximos de x y y a 1**.

[Image: image]

Recuerda que los puntos de anclaje o Anchors son relativos a sus padres jerárquicos: 0 significa la extrema izquierda de la pantalla, 1 significa la extrema derecha o la parte superior de la pantalla.

Ahora que has configurado los puntos de anclaje o Anchors, deberías ver que la posición de tu imagen ha cambiado. La posición ahora está enlistada como Left (Izquierda), Top (Arriba), Pos Z, Right (Derecha) y Bottom (Abajo). Con excepción de Pos Z (el mismo que puedes ignorar), estas son la distancias entre el GameObject y el área de los puntos de anclaje en píxeles. Un valor negativo indica que el elemento está fuera del área de los puntos de anclaje. Un cero significa que no hay ninguna distancia de alejamiento del área de los puntos de anclaje.

En el ejemplo anterior, el lado izquierdo de la imagen está a 394 píxeles del lado izquierdo del área de los puntos de anclaje; el lado derecho de la imagen está a 942 píxeles del lado derecho de los puntos de anclaje; el lado de arriba está a 487 píxeles de la parte superior de los puntos de anclaje y la parte de debajo de la imagen está a 145 píxeles de la parte inferior de los puntos de anclaje.

**4.**Dado que el área de los puntos de anclaje o Anchor de tu imagen es la pantalla entera, no se necesita una distancia de alejamiento. En la herramienta de **transformación** rectangular (Rect Transform Tool) configura las propiedades **Left** (Izquierda), **Right**(Derecha) y **Bottom**(Abajo) a **0**.

[Image: image]

**5.**La imagen ahora está distribuida a lo largo de la pantalla.

[Image: image]

Esta imagen es del tamaño correcto, pero no es del color adecuado.

**6.**En el Inspector ubica el componente **Image**(Imagen).

[Image: image]

La primera propiedad se llama Source Image (Imagen original). Esto te permite mostrar una imagen específica. Si se deja en blanco, el resultado es un rectángulo de un solo color. Esto se puede configurar a través de la propiedad **Color**.

**7.**Abre la ventana Color Picker. Configura los canales RGB a 0, dejando A al máximo (1 si el rango es de 0 a 1, o 255 si el rango es de 0 a 255) Esto configurará el color a negro.

A es el cuarto canal que constituye el color **Alpha**(alfa). El alfa de un color indica su nivel de transparencia. Mientras el color alfa sea más bajo, el GameObject es más transparente. Ajustar el Alpha de tu imagen será la clave para que se desvanezca.

**8.** Haz clic en algún otro lugar del Editor para cerrar la ventana Color Picker.

¡Ahora tienes una pantalla completamente oscura!

Marcar paso como completado

## 6. ¿Cómo se añade una imagen para cuando se gana el juego?

Q&A (0)

Ahora vas a agregar una foto para que se muestre encima de la pantalla negra:

**1.**En Hierarchy, cámbiale el nombre a tu GameObject Image actual y pone **ExitImageBackground** (Fondo de la imagen de salida).

**2.**Haz clic derecho en el GameObject **ExitImageBackground**. Verás que un menú contextual aparecerá. Selecciona **UI > Image**.

[Image: image]

Al hacer clic derecho en un GameObject para crear otro GameObject automáticamente hace que el nuevo GameObject que se ha creado sea un hijo jerárquico del otro en el que se había hecho el clic. Porque este nuevo GameObject ExitImage es un hijo jerárquico del GameObject ExitImageBackground se muestra encima de este último.

**3.**Cámbiale el nombre a este nuevo GameObject Image y ponle **ExitImage**.

**4.**Vamos a agregar una foto. En el Inspector, ubica el componente **Image** (imagen).

**5.**Haz clic en el botón circular de selección para la propiedad **Source Image**. En la casilla de diálogo, busca y selecciona la imagen con el nombre **Won**(Ganó).

**6.**Ahora hay configuraciones adicionales disponibles en el componente Image:

[Image: image]

Vas a necesitar estas configuraciones para solucionar un problema muy importante: la imagen se verá mejor si llena lo que más sea posible de la pantalla, pero necesita retener la proporción de aspecto correcta. Para solucionar este problema, vamos a cambiar el tamaño del Rect Transform al igual como lo hicimos con su padre jerárquico.

**7.** En el Inspector, encuentra el componente **Rect Transform**. Expande la configuración **Anchors**(puntos de anclaje).

**8.** Configura los valores mínimos de **x y y**a **0**. Configura los valores máximos de **x y y**a **1**.

**9.** Configura las propiedades Left (Izquierda), Right (Derecha), Top (Arriba), Bottom (Abajo) a **0**. La foto va a parecer estirada.

[Image: image]

**10.**En el componente Image (Imagen), ubica la propiedad **Image Type** (Tipo de imagen). Habilita la casilla **Preserve Aspect**(Mantener aspecto). Esto hace que la imagen sea tan grande como sea posible en el Rect Transform sin que se distorsione.

[Image: image]Marcar paso como completado

## 7. ¿Cómo se agrega un componente Grupo de lienzo o Canvas Group?

Q&A (0)

Luego, consideremos cómo hacer que estos elementos de la interfaz de usuario se desvanezcan cuando quieras que lo hagan. Ya sabes que puedes ajustar el valor Alpha de un componente Image para hacer que se desvanezca. Pero, porque ahora hay dos imágenes, necesitarás cambiar ambos colores en vez de cambiar el valor de solo uno de ellos. Hay un componente llamado **Canvas Group** (Grupo del lienzo) que te ayudará a hacer que ese proceso sea más fácil.

Un Canvas Group te va a ayudar a controlar algunos aspectos de los elementos visibles de la interfaz de usuario de un GameObject y todos sus hijos jerárquicos.

Para agregar un componente Canvas Group:

**1.**En la ventana Hierarchy, selecciona el GameObject ExitImageBackground.

**2.**En el Inspector, agrega un componente Canvas Group.

[Image: image]

Cambia la propiedad **Alpha** a **0**.

1. Ahora que has terminado de hacer la interfaz de usuario o UI, vamos a poner la ventana Scene de regreso al primer nivel. Primero, **deshabilita** **el modo 2D o 2D Mode** en la ventana Scene.

2. En la ventana Hierarchy selecciona el GameObject JohnLemon. Con tu cursor sobre la vista Scene, pulsa **F** para enfocar.

3. En la ventana Hierarchy colapsa el GameObject FaderCanvas. Guarda la escena pulsando Ctrl + S en Windows o CMD + S en macOS.

Eso es mucho mejor. Ahora puedes ver el nivel nuevamente. Luego, vas a necesitar una manera de desencadenar y control el desvanecimiento de la interfaz de usuario o UI.

Marcar paso como completado

## 8. ¿Cómo se crea un desencadenante para el fin de juego?

Q&A (0)

La computadora necesita una manera de reconocer que JohnLemon ha salido de la casa embrujada; de tal manera que sepa cuando cambiar el valor de la propiedad Alpha del Canvas Group (Grupo del lienzo). Una técnica común para detectar cuando un objeto físico (como el personaje JohnLemon) haa entrado un área específica es el usar un desencadenante o **Trigger**.

Los desencadenantes o Triggers son colisionadores (Colliders) que no impiden movimiento. Al contrario, permiten que objetos físicos pasen a través suyo libremente, pero reportan el evento desencadenante para que otras acciones puedan ocurrir.

Primero vamos a crear un desencadenante o Trigger:

1. En la ventana Hierarchy haz clic en el menú Create y selecciona **Create Empty**. Cámbiale el nombre a este GameObject a **GameEnding**.

2. Configura la posición del Transform de GameEnding a (18, 1, 1,5). Esto está a la mitad de la salida del nivel.

[Image: image]

3. Ahora necesitas agregar el desencadenante o Trigger. En el Inspector, agrega un componente **Box Collider**(colisionador en forma de caja) al GameObject GameEnding. (Ten cuidado de no agregar un Box Collider 2D ¡no va a funcionar!).

4. Habilita la casilla **Is Trigger**(está desencadenado). Esto cambia el colisionador a un desencadenante.

[Image: image]

5. Luego, necesitas cambiarle el tamaño al desencadenante para que cubra la salida. JohnLemon tendrá que entrar en ella para poder escapar. Hay dos maneras de lograrlo: haz clic en el botón Edit Collider (Editar colisionador) y cámbiale el tamaño del colisionador en forma de caja en la ventana Scene o configura las propiedades Center (centro) y Size (Tamaño) manualmente. Vamos a intentar editar el desencadenante en la ventana Scene.

Haz clic en el botón **Edit Collider** (Editar colisionador); aparecerán unas manijas a los lados del desencadenante en la ventana Scene.

6. Para cambiar alguna de las caras del Box Collider (Colisionador en forma de caja), haz clic y arrástrala a la posición que quieras. Necesitas que el desencadenante (Trigger) llene el pasillo; de tal manera que John Lemon no pueda salir sin pasar por él.

Cuando hayas terminado, haz clic en el botón **Edit Collider** otra vez. Cuando las manijas hayan desaparecido de la ventana Scene, ya no estás editando el colisionador.

7. Otra manera de editarlo es configurar el tamaño del colisionador a (**1**, **1**, **3,5**).

[Image: image]

Ahora has terminado de configurar el desencadenante o Trigger, pero necesitas escribir un script para usarlo.

Marcar paso como completado

## 9. ¿Cómo se crea un nuevo Script?

Q&A (0)

Para comenzar, vamos a crear el Asset *script*:

1. En la ventana Project, ve a **Assets > Scripts**.

2. Ve al menú **Create**(Crear) y selecciona **C# Script**(Script en C#). Ponle el nombre «**GameEnding**».

Recuerda que el nombre del recurso o Asset debe ser exactamente igual al nombre de la clase que está dentro del *script*. Si cometes un error, borra el recurso y créalo nuevamente.

3. Arrastra el recurso *script* de la ventana Project al GameObject **GameEnding** en la ventana Hierarchy. Esto lo agregará como un componente.

4. Ahora puedes empezar a editar el *script* para darle un poco de funcionalidad. Haz clic doble en el recurso *script* para poder abrirlo y editarlo.

Marcar paso como completado

## 10. Comienza a escribir el script GameEnding o Final de juego

Q&A (0)

Para empezar el *script*:

1. Elimina los métodos Start y Update y sus comentarios. Tu script limpio debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{

}
```

**2.**Pensemos sobre la información que necesitas:

Primero, necesitas que la pantalla se desvanezca en un período de tiempo específico Debería ser una **variable pública**; de tal manera que puedas ajustarla desde el Inspector. También debería permitir el ingreso de números decimales; por lo tanto, necesita ser un dato de punto flotante o **float**.

Un valor por defecto que tiene sentido para que el desvanecimiento ocurra es 1 segundo; por lo tanto, vamos a configurar eso por defecto. Agrega la siguiente línea a tu *script*, entre las llaves:

```csharp
public float fadeDuration = 1f;
```

**3.**Luego, necesitas especificar que el desvanecimiento debería ocurrir cuando el personaje del jugador choca con el desencadenante o Trigger. Para asegurarte de que esto solo ocurra cuando JohnLemon choque con el desencadenante, necesitarás una referencia a ese GameObject. Una vez más, esta debería ser una variable pública para ajustarla desde el Inspector.

Añade la línea siguiente debajo de la declaración de la variable fadeDuration:

```csharp
public GameObject player;
```

Ahora tienes dos variables principales declaradas:

**4.** Una de las tareas esenciales de esta clase es detectar el GameObject que controla el jugador. Luego, vas a usar otro método especial para MonoBehaviours llamado **OnTriggerEnter**(Desencadenar al entrar). Agrega la definición de método siguiente debajo de la declaración de las variables:

```csharp
void OnTriggerEnter (Collider other)
    {

    }
```

**5.**Para asegurarte de que el final solo se desencadena cuando JohnLemon choca contra el Box Collider o colisionador en forma de caja, agrega la siguiente sentencia condicional IF al método OnTriggerEnter, entre las llaves:

```csharp
if (other.gameObject == player)
        {

        }
```

Esto usa un operador nuevo llamado operador de equivalencia o **equivalency operator**. Se representa con dos iguales y resulta en una variable tipo bool. El valor que se retorna es verdadero o *true* si las cosas en ambos lados de ellos son idénticas, o falso o *false* si no lo son.

El código anterior está diciéndole a la computadora «si el otro GameObject colisionador (el que ha entrado al desencadenante) es equivalente a nuestra referencia al GameObject JohnLemon; entonces, haz lo que sea que esté en el bloque de código».

**6.** Revisemos tu *script*:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public GameObject player;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {

        }
    }
}
```

Recuerda que en C# no importa en qué orden están declarados los métodos en una clase. Tal vez tu usaste un orden un poco diferente, pero no importa.

Marcar paso como completado

## 11. ¿Cómo se añade un método Update?

Q&A (0)

Ahora necesitas agregar código para la sentencia condicional IF, la cual comienza el desvanecimiento de la interfaz de usuario y luego cierra el juego cuando se termina. Actualmente hay un problema: OnTriggerEnter (Desencadenar al entrar) solo se invoca una vez cuando los colisionadores se superponen por primera vez. Necesitas algo que se invoque en cada marco, para que puedas cambiar el Alpha del Canvas Group (Grupo del lienzo) gradualmente.

En el tercer tutorial usaste el método Update, el cual se invoca en cada marco. Puedes usarlo aquí:

**1**. Agrega un método Update a OnTriggerEnter de la siguiente manera:

```csharp
void Update ()
    {

    }
```

**2.**Necesitas una manera de saber cuando comenzar a desvanecer el Canvas Group. Desde que el Canvas Group debería estar desvaneciéndose o no, una variable tipo bool es la mejor opción para esto. Crea una variable tipo bool llamada m_IsPlayeratExit entre las declaraciones de la variable pública y la definición de OnTriggerEnter de la siguiente manera:

```csharp
bool m_IsPlayerAtExit;
```

**3.**Vamos a usar la variable tipo bool. Primero necesitas configurarla. En el bloque de código de la sentencia condicional IF en tu método OnTriggerEnter, configura m_IsPlayeratExit a *true* de la siguiente manera:

```csharp
m_IsPlayerAtExit = true;
```

**4.**Ahora que has configurado la variable tipo bool en OnTriggerEnter, necesitas verificar si ha sido configurada en el método Update. Añade una sentencia condicional IF entre las llaves del método Update:

```csharp
if(m_IsPlayerAtExit)
        {

        }
```

**5.**Ahora tu *script* debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public GameObject player;

    bool m_IsPlayerAtExit;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    void Update ()
    {
        if(m_IsPlayerAtExit)
        {

        }
    }
}
```

Vamos a analizar paso por paso lo que has puesto en código hasta ahora:

Has agregado dos métodos, OnTriggerEnter y Update. Cuando OnTriggerenter se invoca, la computadora verifica si el colisionador que entró al desencadenante (Trigger) pertenece al personaje del jugador. Update se invoca en cada marco y verifica si el personaje del jugador está a la salida. Si el personaje del jugador está a la salida, seguiría con el bloque de código de la sentencia condicional IF; si no lo está, entonces no haría nada.

Marcar paso como completado

## 12. Escribe el bloque de código para la sentencia IF

Q&A (0)

Luego, necesitas escribir ese bloque de código para la sentencia condicional IF:

**1.**Crea un nuevo método debajo de Update llamado **EndLevel** (Fin de nivel). No necesita retornar nada y no necesita ningún parámetro; por lo tanto, debería verse así:

```csharp
void EndLevel ()
    {

    }
```

Esto te ayudará a mantener las cosas ordenadas.

**2.**Añade una invocación al método EndLevel dentro de la sentencia condicional IF en el método Update.

```csharp
EndLevel ();
```

**3.**El método EndLevel necesita desvanecer el Canvas Group (Grupo del lienzo) y luego cerrar el juego. Anteriormente, cuando has encontrado referencias a componentes, usaste el método GetComponent (Obtener componente), pero este solo funciona para componentes en el mismo GameObject en el que está este *script*.

Esta vez vas a crear una variable pública para el componente Canvas Group, la misma que puede asignarse en el Inspector.

Añade esta declaración de una variable pública **debajo de la declaración de la variable del jugador**:

```csharp
public CanvasGroup exitBackgroundImageCanvasGroup;
```

**4.**También necesitas un cronómetro para asegurarte del que el juego no termine antes de que el desvanecimiento haya ocurrido. Mientras estamos declarando variables, deberíamos considerar cualquier otra que podríamos necesitar.

Agrega la siguiente declaración de variable debajo de la variable tipo bool **m_isPlayerAtExit**:

```csharp
float m_Timer;
```

**5.**Luego, el método EndLevel necesita habilitar el cronómetro para que tome el tiempo. Tal vez recuerdes del script PlayerMovement que hay una manera de obtener la cantidad de tiempo que ha pasado desde el último marco: usar el Time.deltaTime.

Podrías configurar el cronómetro a que sea equivalente a sí mismo más el deltaTime. Sin embargo, hay una combinación rápida para decir exactamente lo mismo usando el operador de asignación +=.

Agrega la siguiente línea de código a tu método EndLevel, dentro de las llaves:

```csharp
m_Timer += Time.deltaTime;
```

Aquí el operador += dice que lo que sea que esté a la izquierda es igual a sí mismo más lo que está a la derecha.

**6.**Es hora de configurar el Alpha del Canvas Group (Grupo del lienzo). El valor Alpha debería ser 0 cuando el cronómetro esté marcando 0 y 1 cuando el tiempo de fadeDuration (Duración del desvanecimiento) se haya acabado. Para obtener este valor, puedes dividir el cronómetro por la duración.

Agrega el siguiente código debajo de la línea del operador de asignación += que acabas de añadir al método EndLevel:

```csharp
exitBackgroundImageCanvasGroup.alpha = m_Timer / fadeDuration;
```

Ahora las imágenes se desvanecerán cuando JohnLemon llegue a la salida, pero todavía tienes que preparar algunas cosas antes de que termines.

**7.**Finalmente, el juego necesita cerrarse cuando el desvanecimiento haya terminado. El desvanecimiento terminará cuando el tiempo que marca el cronómetro sea más que el de la duración.

Agrega un nuevo operador debajo de la línea que acabas de añadir:

```csharp
if(m_Timer > fadeDuration)
        {

        }
```

La llave derecha prueba si lo que sea que está a la izquierda **es mayor que** lo que sea esté a la derecha. Si lo es lo retorna verdadero o *true*y si no lo es lo retorna *false*o falso.

El bloque de código de la sentencia condicional IF solo se ejecutará si el valor alfa (Alpha) está configurado a 1; por lo tanto, todo lo que necesitas hacer is agregar la siguiente línea de código para que el juego cierre:

```csharp
Application.Quit();
```

**8.**Hay algo muy importante aquí. Este método definitivamente va a cerrar el juego, pero solo funciona para aplicaciones que estén totalmente terminadas. Actualmente el juego es solo un proyecto que se juega en el Editor y por lo tanto no hará nada. Harás la generación final de tu juego en el último tutorial de esta serie. Cuando lo hayas hecho, la línea de código funcionará adecuadamente. Hasta ese entonces, tendrás que salir del modo Play como lo has hecho anteriormente.

**9.**En el estado actual, tu *script* hará que el juego cierra tan pronto como las imágenes hayan terminado de desvanecerse. Sería mucho mejor que si las imágenes se desvanecen, el jugador las viera por un momento y luego que el juego cierre.

Todo lo que necesitas para lograrlo es añadir un poco de tiempo en la última sentencia condicional IF. Al hacer que esto sea una variable te permite cambiar la duración con la que las imágenes se muestran en el futuro, si así lo prefieres.

Debajo de la declaración de la variable fadeDuration (Duración del desvanecimiento), agrega otra declaración de duración de variable:

```csharp
public float displayImageDuration = 1f;
```

**10.**Ahora todo lo que necesitas hacer es agregar esta duración a fadeDuration dentro de la sentencia condicional IF, cambiándola a:

```csharp
if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit();
        }
```

Eso es todo! El *script*completo debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public float displayImageDuration = 1f;
    public GameObject player;
    public CanvasGroup exitBackgroundImageCanvasGroup;

    bool m_IsPlayerAtExit;
    float m_Timer;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    void Update ()
    {
        if(m_IsPlayerAtExit)
        {
            EndLevel ();
        }
    }

    void EndLevel ()
    {
        m_Timer += Time.deltaTime;

        exitBackgroundImageCanvasGroup.alpha = m_Timer / fadeDuration;

        if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit ();
        }
    }
}
```

Asegúrate de guardar tu *script*. Luego regresa al Editor Unity.

Marcar paso como completado

## 13. ¿Cómo se configuran las variables para tu script GameEnding?

Q&A (0)

En tu *script* has creado un número de variables que necesitan ser configuradas en el Editor. Esto hace que la personalización del juego sea más fácil. También te permite probar los cambios fácilmente.

Para configurar las variables:

**1.**En Hierarchy, selecciona el GameObject **GameEnding**.

[Image: image]

**2.**Arrastra el GameObject JohnLemon desde la ventana Hierarchy al *script*Game Ending en el Inspector. Esto le asignará la variable Player.

**3.**En Hierarchy, expande el FaderCanvas. Arrastra el GameObject ExitImageBackground al campo Exit Background Image Canvas Group (Imagen de salida para el grupo del lienzo) del componente GameEnding. Unity encontrará automáticamente el componente correcto al que asignar la variable **Exit Background Image Canvas Group**.

**4.**Guarda la escena.

¡Acabas de terminar de crear un final para tu juego! Ingresa al modo Play para probarlo. No te olvides de salir del modo Play cuando hayas terminado. El cierre automático no funcionará hasta que crees una generación final para tu juego en el último tutorial.

Marcar paso como completado

## 14. Resumen

Q&A (0)

En este tutorial creaste un sistema para terminar el juego. Para hacerlo, usaste las herramientas de la interfaz de usuario o UI, agregaste un desencadenante o Trigger y escribiste otro *script* personalizado. Ahora tienes un juego que funciona, pero una casa tenebrosa no es nada sin seres macabros que la acosan. En el próximo tutorial crearás enemigos estáticos para popular tu juego.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
