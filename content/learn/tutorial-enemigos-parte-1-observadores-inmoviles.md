[Image: image]

# Enemigos, parte 1: observadores inmóviles

Tutorial

Beginner

+0XP

55 mins

4

(169)

Unity Technologies

[Image: Enemigos, parte 1: observadores inmóviles]Summary

Has pasado mucho tiempo desarrollando tu juego y en ese proceso has mejorado tu entendimiento de la escritura de *scripts* en C#. Pero falta algo: ¿qué constituye un juego de sigilio sin enemigos a quienes evadir?

En este tutorial tú:

- crearás un enemigo inmóvil tipo Gargoyle (gárgola);
- escribirás un *script*personalizado para que la gárgola pueda encontrar a JohnLemon;
- configurarás el juego para que reinicie si se atrapa a JohnLemon.

Una vez que hayas completado este tutorial, tendrás un tipo de enemigo listo para tu nivel.

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. ¿Cómo se configura el prefabricado Gargoyle (Gárgola)?

Q&A (0)

Tu juego está comenzando a tomar forma. JohnLemon se puede mover a través de un entorno con la cámara que lo sigue y cuando sale de la casa, el juego termina. Sin embargo, falta algo: ¡enemigos para que salir de la casa sea un reto!

En este tutorial vas a agregar un enemigo inmóvil de tipo Gargoyle (gárgola) a la casa embrujada.

El primer paso es traer el modelo Gargoyle (gárgola) a la escena, exactamente como lo hiciste con JohnLemon.

1. En la ventana Project, navega hacia la carpeta **Assets > Models**y ubica el Asset (recurso) **Gargoyle**.

[Image: image]

2. Arrastra el Asset desde la ventana Project a la ventana Hierarchy para crear un ejemplo del modelo.

3. Esta casa embrujada necesita muchas gárgolas. Recuerda, un modelo es un archivo de solo lectura. Para hacer ediciones necesitas crear un Prefab.

Arrastra el GameObject Gargoyle desde la ventana Hierarchy a la carpeta Assets > Prefabs   en la ventana Project. Cuando la casilla de diálogo Create Prefab aparezca, selecciona **Original Prefabs**.

4. Ahora que tienes un Prefab Gargoyle, puedes abrirlo para editarlo. Esta vez vas a usar una combinación rápida. En Hierarchy, haz clic la flecha a la derecha del GameObject Gargoyle.

[Image: image]

El Prefab se abrirá para poder ser editado.

Ahora que has agregado la Gargoyle a tu juego, es hora de configurarla. Primero ¡vamos a animarlo!

Marcar paso como completado

## 2. ¿Cómo se le da movimiento a la gárgola?

Q&A (0)

Al igual que JohnLemon, la gárgola tiene un movimiento distintivo que le otorga su personalidad e incrementa el ambiente del juego. Va a tratar de capturar al jugador.

La gárgola solo tiene una animación que se reproduce; por lo tanto, su Animation Controller (Controlador de animación) será muy simple:

**1.** En la ventana Project, ve a la carpeta **Assets > Animation > Animators** y haz clic derecho en ella.

**2.** En el menú contextual, selecciona **Create > Animator Controller**. Ponle «Gargoyle»

**3.** Haz clic doble en**Gargoyle** para abrir la ventana Animator.

**4.** En la ventana Project, navega a Assets > Animation > Animations.

**5.** Expande el recurso modelo **Gargolyle@Idle** (Gárgola en reposo).

[Image: image]

**6.** Arrastra la animación **Idle**(en reposo) desde la ventana Project a la ventana Animator. Esto creará un Idle Animator State (Estado de animación en reposo).

El controlador de animación de la gárgola (Gargoyle Animation Controller) está listo, pero todavía necesita que se lo asigne al componente Animator.

**7.**En la ventana Project ve a la carpeta **Assets > Animation > Animator**.

**8.**En la ventana Hierarchy selecciona el GameObject **Gargoyle**.

**9.**Arrastra el controlador de animación de la gárgola (Gargoyle Animation Controller) de la ventana Project a la propiedad **Controller** (controlador) del componente animador en el Inspector.

**10.**Guarda la escena y luego ingresa al modo Play para así poder ver a tu gárgola en acción. Asegúrate de salir del modo Play cuando hayas terminado.

Marcar paso como completado

## 3. ¿Cómo se le añade un colisionador (collider) a la gárgola?

Q&A (0)

Luego, necesitas asegurarte de que el jugador pueda chocar contra la gárgola y que pueda ver a JohnLemon con su rayo de luz. Esta es una tarea para los colisionadores o Colliders.

Para añadir un colisionador:

**1.** Asegúrate de que el Editor Unity todavía esté en el modo Prefab. Si no lo está, puedes usar la combinación de acceso rápido que aprendiste cuando creaste el Prefab Gargoyle.

**2.** En el Inspector, agrega un **componente Capsule collider** (Colisionador en forma de cápsula) al GameObject Gargoyle.

[Image: image]

Un colisionador en forma de cápsula o Capsule Collider es la forma correcta (aproximadamente) para este enemigo.

**3.**  Ahora ajusta las coniguraciones para que le quede mejor al modelo Gargoyle:

- Cambia la propiedad **Center** (centro) del colisionador en forma de caja (Capsule Collider) a (**0; 0,9; 0**).
- Cambia la propiedad **Radius** (radio) a **0,3**.
- Cambia la propiedad **Height** (altura) a 1,8.

[Image: image][Image: image]

¡Eso le queda mucho mejor! Ahora el jugador puede chocar con la gárgola.

Marcar paso como completado

## 4. ¿Cómo se crea un desencadenante para simular la línea de visión de la gárgola?

Q&A (0)

La gárgola todavía necesita una manera de encontrar a John Lemon. Has usado la locación del personaje para desencadenar eventos antes cuando estabas creando un final para tu juego. Puedes hacer lo mismo aquí.  Vas a escribir un *script* personalizado para asegurarte de que la gárgola no pueda ver a través de las paredes, pero primero necesitas crear un Trigger o desencadenante.

Para hacer el posicionarlo un poco más fácil, vas a crear otro GameObject como un hijo jerárquico del GameObject Gargoyle y vas a ubicar el desencadenante o Trigger en ese.

Para crear el desencadenante o Trigger:

**1.** En la ventana Hierarchy, haz clic derecho en el GameObject Gargoyle y selecciona Create Empty (crear uno vacío).

[Image: image]

**2.** Este GameObject va a funcionar como el punto de vista de la gárgola (Gargoyle); por ende, cámbiale el nombre a «**PointOfView**» (punto de vista).

[Image: image]

**3.**La animación Gargoyle la muestra mirando hacia el frente y un poco hacia abajo; por eso, necesitas cambiar la posición del GameObject PointofView. En el Inspector, encuentra su componente Transform (Transformación).

- Cambia la propiedad Position a (0,1; 1,4; 0,4).
- Cambia la propiedad Rotation a (20, 0, 0).

[Image: image]

**Ojo:** Si las manijas de la herramienta Transform en la ventana Scene no están apuntando hacia abajo un poquito, podría ser poque todavía están configuradas a Global en vez de Local. Puedes cambiar esto haciendo clic en el conmutador Handle Rotation (rotación de la manija) que está en la barra de herramientas:

[Image: image]

Now you have set up the Gargoyle’s point of view, you can add and configure the Trigger.

**4.**In the Inspector, add a **Capsule Collider**component.

**5.**Enable the component’s**Is Trigger** checkbox.

**6.**Let’s adjust the settings for the Trigger.

- Change the Capsule Collider’s **Center** property to (**0**, **0**, **0.95**)
- Change the **Radius** property to **0.7**
- Change the **Height** property to **2**
- Change the **Direction** property from Y-Axis to **Z-Axis**

[Image: image]

Has configurado el colisionador (Collider) para que coincida con el rayo de la linterna de la gárgola. ¡Perfecto!

Marcar paso como completado

## 5. ¿Cómo se crea un script personalizado de observación?

Q&A (0)

Ya que has creado un desencadenante (Trigger), necesitas escribir un *script* personalizado para lo que pasa cuando JohnLemon se choca contra él.

Para crear el nuevo *script*:

**1.** En la ventana Project, ve a Assets > Scripts.

**2.** Haz clic derecho en la carpeta Scripts y selecciona Create > C# Script. Ponle al nuevo *script***«Observer»**.

Este nombre describe lo que el *script* hará: observar el personaje del jugador y causará que el juego reinicie si se lo descubre. Serás capaz de reusar este *script* para otros enemigos también; por lo tanto, sería buena idea no vincular su nombre a la gárgola.

**3.** Arrastra el recurso *script* Observer de la carpeta Scripts al GameObject PointOfView en la ventana Hierarchy para agregarlo como un componente.

**4.** Haz clic doble en el *script* Asset (recurso) para abrirlo para edición.

Marcar paso como completado

## 6. ¿Cómo se agrega una clase para detectar el personaje del jugador?

Q&A (0)

Vamos a comenzar tu nuevo *script* agregando una clase para detectar al personaje del jugador:

**1.** Tal como lo hiciste con el *script*GameEnding, elimina los métodos Start y Updates con sus comentarios. Tu *script*debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{

}
```

**2.**Primero, necesitas la clase Observer (Observador) para detectar el personaje del jugador. Agrega la siguiente línea a tu *script*, entre las llaves:

```csharp
public Transform player;
```

Esto es un poco diferente al acercamiento que tomaste para el desencadenante para el final del juego (GameEnding Trigger). Este *script* va a verificar la propiedad Transform del personaje del jugador en vez de su GameObject. Hará más fácil el acceder a la posición de John Lemon y determinar si hay un campo visual despejado para verlo.

**3.**Previamente habías usado el método especial OnTriggerEnter (Entrar al desencadenar) para detectar al personaje del jugador y para guardar si el personaje estaba en el rango del desencadenante usando una variable tipo Bool. Puedes reusarlo aquí.

Agrega la línea siguiente directamente debajo de la declaración de la herramienta Transform del jugador:

```csharp
bool m_IsPlayerInRange;
```

**4.**Ahora agrega el método OnTriggerEnter directamente debajo de lo anterior:

```csharp
void OnTriggerEnter (Collider other)
    {

    }
```

**5.**Al igual que con el *script*GameEnding, es importante verificar que JohnLemon esté realmente en el rango cuando se invoque OnTriggerEnter.

Agrega una sentencia condicional IF dentro de las llaves del método OnTriggerEnter para verificarlo::

```csharp
if(other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
```

**6.**El personaje del jugador que entra a este desencadenante o Trigger no necesariamente significaría el final del juego; por ejemplo, podría haber una pared en el medio. Esto significa que también es importante detectar cuando JohnLemon salga del desencadenante o Trigger.

Esto puede hacerse de una forma más simple con el método especial OnTriggerExit (Salir al desencadenar), lo cual es lo opuesto a OnTriggerEnter (Entral al desencadenar).

Copia y pega el método OnTriggerEnter directamente debajo de sí mismo, luego cambia Enter (entrar) con Exit (salir) y cambia true o verdadero a false o falso como se muestra en el siguiente ejemplo:

```csharp
void OnTriggerExit (Collider other)
    {
        if(other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }
```

**7.** Tu *script*debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{
    public Transform player;

    bool m_IsPlayerInRange;

    void OnTriggerEnter (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
    }

    void OnTriggerExit (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }
}
```

Marcar paso como completado

## 7. Verifica que el campo visual del enemigo esté despejado

Q&A (0)

En este juego, es importante verificar que el campo visual del enemigo hacia JohnLemon esté despejado. De otra manera, el final del juego podría ser desencandenado cuando hay realmente una pared de por medio. Desde que la posición del personaje del jugador puede cambiar en cualquier momento, esta verificación necesita ocurrir en cada marco.

Vamos a continuar tu *script*:

1. Añade un método Update justo debajo de OnTriggerExit (Cerrar al desencadenar) de la manera siguiente:

```csharp
void Update ()
    {

    }
```

**2.**Tiene sentido verificar el campo visual solo si el personaje está en el radio de alcance. Agrega la sentencia condicional IF siguiente dentro de las llaves del método Update:

```csharp
if(m_IsPlayerInRange)
        {

        }
```

Hasta ahora todo va bien, pero ¿cómo puedes verificar el campo de visión?

En Unity es posible verificar si hay algún colisionador o Collider a lo largo de una línea que comienza en un punto determinado. Esta línea que empieza desde un punto específico se llama un **Ray**(rayo). El verificar que haya colisionadores a lo largo de ella se llama un **Raycast**.

Tu rayo, o Ray, necesita un origen y una dirección. El origen es solo la posición del GameObject PointofView, pero figurar la dirección es un poco más complicado.

**3.** Agrega la siguiente línea de código entre las llaves de la sentencia condicional IF dentro de IsPlayerinRange (¿está el jugador dentro del radio de alcance?).

```csharp
Vector3 direction = player.position - transform.position + Vector3.up;
```

Este código crea un nuevo Vector3 llamado direction (dirección). De las lecciones en matemáticas para vectores sabemos que un vector de A a B es B – A. Esto significa que la dirección desde el GameObject PointOfView a JohnLemon en JohnLemon menos la posición del GameObject PointOfView.

Tal vez recuerdes que la posición de JohnLemon está en el piso, entre sus pies. Para asegurarte de que el Observer pueda ver el centro de masas de JohnLemon, estás apuntando la dirección hacia arriba por una unidad al agregar el Vector3.up. El Vector3.up es una combinación rápida que representa (0, 1, 0).

**4.**Ya que tienes la dirección, puedes crear un rayo o Ray. Agrega la siguiente línea de código debajo de la variable direction (dirección):

```csharp
Ray ray = new Ray (transform.position, direction);
```

Esta línea incluye una palabra reservada que no has visto antes: **new** (nuevo). Esta palabra reservada se usa cuando se crea un nuevo ejemplo de algo al invocar un método especial que se llama el **constructor** del tipo.

Invocar el constructor siempre usa la sintaxis siguiente:

- la palabra reservada **new**;
- el tipo;
- los paréntesis;
- los parámetros para el constructor (en este caso, la dirección del Ray (rayo) y el origen.

**5.** Ya que has creado un Ray, puedes ejecutar el Raycast. Hay muchos tipos de métodos Raycast en Unity, pero todos tienen dos cosas en común: necesitan definir el Ray (rayo) a lo largo del cual ocurre el Raycast y las restricciones sobre qué tipo de colisionadores necesitan detectar.

El método Raycast que usarás regresa una variable tipo bool que es *true*, o verdadero, cuando ha chocado con algo y *false*, o falso, cuando no haya chocado con nada. Desde que este método regresa una variable tipo bool, es muy conveniente poner el método Raycast dentro de una sentencia condicional IF. El bloque de código de la sentencia condicional IF solo se ejecutará si el Raycast ha chocado con algo.

Debajo de donde se creó el Ray (rayo), pero todavía dentro de la sentencia condicional IF que escribiste, agrega el código siguiente:

```csharp
if(Physics.Raycast(ray))
            {

            }
```

**6.**Has definido un Ray (rayo) y no estás restringiendo los colisionadores que pueden detectarse a través del Raycast. Las restricciones en los colisionadores funcionan como filtros que pueden identificar un solo colisionador. Lo que necesitas es información sobre exactamente qué se choca con el Raycast, de tal manera que puedas verificar si este es el personaje del jugador o no.

Pero hay un problema: la manera en la que obtienes información de un método es con lo que regresa y este Raycast solo regresa una variable tipo bool. Sin embargo, afortunadamente existe un método método Raycast que usa un parámetro *out*.

Los parámetros *out*funcionan de la misma manera que los parámetros normales, excepto que tienen la palabra reservada out escrita antes de ellos. Se modifican o configuran los valores de estos parámetros a través de su método, de tal manera que puedan usarse por lo que sea que los invoque. El parámetro *out* tiene un tipo llamado RaycastHit y el método Raycast configura sus datos a información sobre lo que sea que el Raycast haya chocado.

Entre la línea que crea el Ray y la sentencia condicional IF, agrega el código siguiente:

```csharp
RaycastHit raycastHit;
```

Esta línea define la variable RaycastHit.

**7.**Luego, necesitas cambiar el método Raycast para asegurarte que use esta variable. Cambia la sentencia condicional IF con el método Raycast a lo siguiente:

```csharp
if(Physics.Raycast(ray, out raycastHit))
            {

            }
```

Este es un método Raycast diferente que funciona de manera muy similar al anterior, pero usa el parámetro *out* para regresar información.

**8.**El *script* ahora puede identificar si el personaje del jugador está en el radio de alcance, ejecutar un Raycast y saber si se ha chocado con algo. Luego, necesita verificar contra lo que ha chocado.

Dentro de la sentencia condicional IF del Raycast, agrega el código siguiente:

```csharp
if(raycastHit.collider.transform == player)
                {

                }
```

**9.**Ahora necesitas terminar el juego. Para hacerlo, vas a necesitar una referencia a la clase GameEnding.

Entre las declaraciones de la variable player y m_isPlayerinRange hacia la parte superior del *script*, agrega el código siguiente:

```csharp
public GameEnding gameEnding;
```

GameEnding es una clase al igual que GameObject y Transform. Cada una de ellas tiene métodos y variables diferentes, pero usarlas como referencia funciona exactamente de la misma manera.

**10.**¡Tu *script* Observer ya casi está terminado! Vamos a revisar lo que has hecho hasta ahora:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{
    public Transform player;
    public GameEnding gameEnding;

    bool m_IsPlayerInRange;

    void OnTriggerEnter (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
    }

    void OnTriggerExit (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }

    void Update ()
    {
        if (m_IsPlayerInRange)
        {
            Vector3 direction = player.position - transform.position + Vector3.up;
            Ray ray = new Ray(transform.position, direction);
            RaycastHit raycastHit;

            if(Physics.Raycast(ray, out raycastHit))
            {
                if (raycastHit.collider.transform == player)
                {

                }
            }
        }
    }
}
```

**11.**Por el momento, esta clase GameEnding no tiene nada que invocar para cuando el personaje del jugador ha sido capturado por un enemigo. Necesitas agregar algo más de funcionalidad para lograrlo.

Guarda el *script* Observer y abre tu *script* GameEnding para editarlo. Puedes acceder el *script* GameEnding directamente desde tu editor de código o tal vez necesitarías regresar al Editor Unity y abrirlo de la manera habitual.

Marcar paso como completado

## 8. Revisa tu Script GameEnding

Q&A (0)

Este juego necesita dos maneras diferentes para terminar el nivel: una, si JohnLemon escapa y una si se lo captura. Actualmente, solo su escape se incluye en el *script* GameEnding. En esta sección vas a revisar tu *script*para habilitar al jugador quienes están capturando enemigos a reiniciar el nivel en vez de cerrar el juego.

Antes de empezar, revisa tu *script* GameEnding:

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

Marcar paso como completado

## 9. Crea dos maneras para terminar el nivel

Q&A (0)

Vamos a empezar agregando a tu *script* las dos formas diferentes en las que puedes terminar el nivel:

1. Primero, agrega el siguiente código debajo de la declaración de la variable **exitBackgroundImageCanvasGroup.**

```csharp
public CanvasGroup caughtBackgroundImageCanvasGroup;
```

Esto creará otro CanvasGroup (Grupo de lienzo) para las nuevas imágenes que va a mostrar si JohnLemon ha sido capturado.

**2.**Agrega lo siguiente debajo de la declaración de la variable **m_isPlayerAtExit:**

```csharp
bool m_IsPlayerCaught;
```

Esta variable verificará si JohnLemon ha sido capturado, de la misma manera que creaste una para verificar si ha llegado a la salida o no.

**3.**Ahora tiene dos nuevas variables, pero ¿cómo deben usarse? El nivel debería terminar cuando JohnLemon haya sido capturado, pero de una manera diferente.

  Primero, vamos a agregar una **instrucción de selección** **else-if** al método Update. Una sentencia condicional if-else puede usarse después de una sentencia condicional IF para continuar verificando cosas. Agrega la siguiente línea de código debajo de la sentencia condicional IF en el método Update:

```csharp
else if(m_IsPlayerCaught)
    {
        EndLevel ();
    }
```

Tu método Update debería verse así:

```csharp
void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel ();
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel ();
        }
    }
```

Este método está diciéndole a la computadora, «si m_IsPlayeratExit es verdadero (true), invoca EndLevel (fin de nivel). Si no es verdadero; entonces, verifica si m_isPlayerCaught es verdadero; si lo es, invoca EndLevel (fin de nivel).

Esto necesita ajustarse, ya que ambos métodos son lo mismo actualmente. Si m_isPlayerAtExit es verdadero (true), necesitas que desaparezca en el exitBackgroundImageCanvasGroup. Si **m_IsPlayerCaught** es verdadero (true); entonces, necesitas que desaparezca en el **caughtinBackgroundImageCanvasGroup**.

**4.**Para ajustarlo, necesitas introducir un parámetro de CanvasGroup al método EndLevel para que pueda cambiar el valor Alpha (alfa) del nuevo parámetro.

 Cambia el métodoEndLevel de la siguiente manera:

```csharp
void EndLevel (CanvasGroup imageCanvasGroup)
    {
        m_Timer += Time.deltaTime;

        imageCanvasGroup.alpha = m_Timer / fadeDuration;

        if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit ();
        }
    }
```

En vez de cambiar el Alpha (alfa) del exitBackgroundImageCanvasGroup, el *script* cambiará el Alpha de lo que sea que se haya pasado como parámetro.

**5.**Te habrás dado cuenta que tu editor de código te dice que hay un problema con las dos invocaciones para los métodos EndLevel y Update. Esto pasa porque tu método EndLevel requiere que pases un parámetro que todavía no has pasado.

Para ajustarlo, necesitas pasar o asignar el parámetro exitBackgroundImageCanvasGroup para la primera invocación y pasar caughtBackgroundImageCanvasGroup a la segunda invocación.

Ajusta tu método Update de la siguiente manera:

```csharp
void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel (exitBackgroundImageCanvasGroup);
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel (caughtBackgroundImageCanvasGroup);
        }
    }
```

Ahora tienes dos formas distintas de salir del juego, pero todavía hay algunos ajustes que necesitas hacer.

Marcar paso como completado

## 10. ¿Cómo se le permite al jugador reiniciar el nivel?

Q&A (0)

Actualmente, el terminar el nivel causa que el juego cierre. Sería muy agravante si cada vez que un enemigo atrape a JohnLemon, el jugador tiene que reabrir el juego. Reiniciar el nivel creará una mejor experiencia para el jugador.

Para añadir esta funcionalidad:

**1.** Si el jugador se escapa del nivel, el juego debería cerrarse. Por ende, vas a necesitar otro parámetro para el método EndLevel para ayudarlo a decidir qué hacer.

Agrega un parámetro tipo bool al método EndLevel de la siguiente manera:

```csharp
void EndLevel (CanvasGroup imageCanvasGroup, bool doRestart)
```

**2.**Antes de que empieces a usar este parámetro, vamos a asegurarnos de que las invocaciones al método EndLevel sean correctas.

Si el personaje del jugador ha llegado a la salida, el juego debería terminar. Esto debería pasar el parámetro como**false** o falso:

```csharp
EndLevel (exitBackgroundImageCanvasGroup, false);
```

Si se atrapa a JohnLemon, el juego debería reiniciarse. Esto debería pasar el parámetro como **true** o verdadero:

```csharp
EndLevel (caughtBackgroundImageCanvasGroup, true);
```

**3.**Ahora necesitas usar este parámetro. Actualmente, la sentencia condicional IF en el método EndLevel solo cierra el juego. Necesitas ajustarlo de tal manera que solo ocurra si el juego no va a reiniciar.

Cambia el bloque de código de la sentencia condicional IF de la siguiente manera:

```csharp
if (doRestart)
            {

            }
            else
            {
                Application.Quit ();
            }
```

Esta es una instrucción de selección ELSE. Funciona como la sentencia condicional IF que usaste antes, pero es incondicional. Siempre y cuando la sentencia condicional sea falsa o false, el bloque de código será ejecutado. Esto significa que si el parámetro doRestart es false o falso, el juego terminará.

**4.**Si doRestart es verdadero o true, el nivel necesita ser cargado nuevamente. El concepto de niveles en Unity está representado a través de Scene o escenas, tal como aprendiste anteriormente en este tutorial. La manera más fácil de reiniciar una escena es cargarla nuevamente.

La mayor parte de la funcionalidad que trata con las escenas está en un ***namespace*** (espacios ddiferente, por eso vas a necesitar añadirlo a tu *script* antes de que sigas. Los *namespaces*son una manera de organizar el código de tal manera que ciertas partes estén disponible cuando se requieren.

Por defecto, los *scripts*creados en Unity tienen tres *namespaces* en la parte superior:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

Debajo de los tres *namespace,*agrega otro a la lista:

```csharp
using UnityEngine.SceneManagement;
```

**5.**Ahora tienes acceso a las diferentes clases y métodos que necesitas para recargar la escena actual. Dentro del bloque de código en blanco de la sentencia condicional IF que creaste, agrega el siguiente código:

```csharp
SceneManager.LoadScene(0);
```

Esto está invocando un método inmóvil llamado **LoadScene** (Cargar escena) desde la clase SceneManager. Recuerda, los métodos inmóvils son aquellos que no requieren un ejemplo de la clase para ser invocados.

El parámetro para este método es la generación de un índice de una escena. Tu vas a explorar índices y generar configuraciones en más detalle en el último tutorial de esta serie. Por ahora, solo necesitas saber que en C# y en la mayoría de los lenguajes de programación, conjuntos de elementos están indexados y que estos índices empiezan en 0 y no en 1. Puedes pensar sobre ello como cuán dentro de un conjunto tienes que ir antes de llegar a un elemento específico: el primer elemento está allí inmediatamente y por lo tanto, tuviste que pasar una cantidad de cero elementos para llegar a él.

Desde que solo tienes una escena, es el primer elemento en tu conjunto de escenas y por lo tanto, tiene el índice 0.

**6.** Ya casi has terminado este *script*, lo último que necesitas hacer es realmente realizar una manera de configurar m_IsPlayerCaught. Esto ayudará a ilustrar la diferencia entre los artículos públicos y privados en una clase.

Hasta ahora has usado variables públias, las mismas que son visibles en el Inspector y otras variables que no son visibles allí. Cualquier cosa en una clase que no esté asignada como un elemento público, es privada por defecto.

La diferencia entre las dos es que las cosas públicas pueden accederse desde fuera de la clase y las privadas no. La variable **m_IsPlayerCaught** no está designada como pública y por lo tanto es privada. Esta es la variable que necesita ser configurada desde fuera de la clase para desencadenar el reinicio del nivel.

Tu primera opción es hacer que la variable sea pública en vez de privada, pero esto no es una buena costumbre. Todas las clases no necesitan saber si JohnLemon ha sido capturado.

En vez de eso, podrías limitar el acceso a esta variable y crear un método público el cual la configura a *true* o verdadero. Al hacerlo de esta manera, otras clases podrían ver que JohnLemon ha sido capturado, pero no si no ha sido capturado aún.

Este método puede ir en cualquier parte de la clase, pero tiene sentido ponerlo junto al método OnTriggerEnter (Entrar al desencadenar). De esa manera, los dos métodos que pueden desencadenar el final del nivel están juntos.

Agrega el siguiente método debajo de OnTriggerEnter:

```csharp
public void CaughtPlayer ()
    {
        m_IsPlayerCaught = true;
    }
```

**7.**¡Has acabado de revisar tu *script*GameEnding! El *script* completo debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public float displayImageDuration = 1f;
    public GameObject player;
    public CanvasGroup exitBackgroundImageCanvasGroup;
    public CanvasGroup caughtBackgroundImageCanvasGroup;

    bool m_IsPlayerAtExit;
    bool m_IsPlayerCaught;
    float m_Timer;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    public void CaughtPlayer ()
    {
        m_IsPlayerCaught = true;
    }

    void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel (exitBackgroundImageCanvasGroup, false);
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel (caughtBackgroundImageCanvasGroup, true);
        }
    }

    void EndLevel (CanvasGroup imageCanvasGroup, bool doRestart)
    {
        m_Timer += Time.deltaTime;
        imageCanvasGroup.alpha = m_Timer / fadeDuration;

        if (m_Timer > fadeDuration + displayImageDuration)
        {
            if (doRestart)
            {
                SceneManager.LoadScene (0);
            }
            else
            {
                Application.Quit ();
            }
        }
    }
}
```

Ya casi has terminado. Guarda el *script* GameEnding y luego abre nuevamente el *script* Observer para hacer unos cuantos ajustes finales.

Marcar paso como completado

## 11. Completa tu prefab Gargoyle (gárgola)

Q&A (0)

Tu *script*Observer ya puede:

- identificar cuando el personaje del jugador está en el desencadenante o Trigger;
- usar Raycast y saber si ha chocado con un colisionador o Collider;
- identificar si ese colisionador o Collider era el personaje del jugador.

Ya que ajustaste el *script* GameEnding, el *script* Observer tiene algo que invocar cuando sus Raycasts chocan con el colisionador del personaje del jugador.

Hay algunos ajustes finales que tienes que hacer antes de que puedes probar tu nuevo enemigo en el juego:

1. En la última sentencia condicional IF del método Update, agrega el código siguiente:

```csharp
gameEnding.CaughtPlayer ();
```

Puedes agregar esto aquí porque el método CaughtPlayer es público. Si fuera privado, tu editor de código lo reportaría como un error con esta línea.

2. Guarda el *script*Observer y regresa a Unity.

3. ¡Tu prefab Gargoyle (gárgola) ya está terminado! Guarda el Prefab usando el botón Save (guardar).

[Image: image]

**4.**En Hierarchy, haz clic en la flecha que apunta hacia atrás para regresar a la escena.

[Image: image]

**5.**Puedes agregar más ejemplos del prefab Gargoyle luego, pero vamos a poner el que tienes actualmente en la esquina de la habitación inicial. En en Inspector, encuentra su componente Transform.

- Cambia la propiedad Position a (-15,2; **0**; **0,8**).
- Cambia la propiedad Rotation a (**0**, **135**,**0**).

**6.**Ahora puedes configurar las dos referencias que el *script* Observer requiere. En la ventana Hierarchy, expande el GameObject Gargoyle y selecciona el GameObject **PointofView**.

[Image: image]

**7.**Arrastra el GameObject JohnLemon desde la ventana Hierarchy al campo **Player** del *script*Observer en el Inspector. Esto le asignará su Transform.

**8.**Arrastra el GameObject GameEnding desde la ventana Hierarchy al campo **Game Ending** del *script* Observer en el Inspector.

**9.** Luego, necesitas crear la interfaz de usuario o UI para cuando acabe el nivel porque el jugador ha sido atrapado. Expande el GameObject **FaderCanvas**en la ventana Hierarchy.

[Image: image]

**10.** Haz clic derecho en el GameObject **ExitImageBackground** y selecciona **Duplicate**desde el menú contextual. La combinación rápida para duplicarlo es Ctrl + D (Windows) o CMD + D (macOS).

**11.** Cámbiale el nombre a la copia nueva a **CaughtImageBackground**. En la ventana Hierarchy, expande este GameObject para poder ver sus hijos jerárquicos.

**12.** Cámbiale el nombre del GameObject ExitImage a **CaughtImage**.

**13.**En la ventana Inspector debería ver que los componentes de la imagen todavía sirviendo como referencia al Caught Background Image Canvas Group (Grupo de lienzo para el fondo si el personaje es atrapado) en el *script* Game Ending. En la ventana Hierarchy, selecciona el GameObject **GameEnding**.

En el componente Image, haz clic en el botón circular para seleccionar junto a la propiedad **Source Image**(Imagen fuente). Cuando se abra una casilla de diálogo, selecciona el Sprite llamado **Caught**.

**14**. Por último, necesitas asignar una referencia al GameObject Caught Background Image Canvas Group en el *script* Game Ending. En la ventana Hierarchy, selecciona el GameObject GameEnding.

**15.**Arrastra el GameObject CaughtImageBackground desde la ventana Hierarchy al campo Caught Background Image Canvas Group del componente Game Ending en el Inspector.

**16.** Guarda tu escena.

¡Tu gárgola está completa! Ahora puedes entrar al modo Play para darle un vistazo y probarla.

Marcar paso como completado

## 12. Resumen

Q&A (0)

En este tutorial, creaste un enemigo inmóvil para tu juego. Usaste la física y los *scripts* para asegurarte de que JohnLemon podría ser atrado y configuraste que el nivel reinicie cuando lo sea.

Tu enemigo gárgola es excelente, pero es inmóvil. En el siguiente tutorial, vas a hacer un enemigo fantasma, el mismo que podrá deambular en un sendero determinado y popular el juego entero con enemigos.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
