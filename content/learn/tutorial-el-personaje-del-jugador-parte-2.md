[Image: image]

# El personaje del jugador: Parte 2

Tutorial

Beginner

+0XP

60 mins

8

(334)

Unity Technologies

[Image: El personaje del jugador: Parte 2]Summary

Ahora que has pasado tiempo desarrollando el personaje del jugador para tu juego, estás listo para crear un script personalizado para controlar sus movimientos.

En este tutorial tú podrás:

- crear un nuevo script Asset en Unity;
- explorar el script por defecto que se produce;
- construir un vector el mismo que puede usarse para cambiar la posición del personaje;
- aplicar movimiento y rotación horizontal y vertical a tu personaje;
- verificar que tus cambios trabajen con el sistema de física de Unity.

Cuando hayas terminado, John Lemon estará listo para caminar sigilosamente a través de una casa embrujada.

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Continuación del personaje del jugador

Q&A (0)

En el tutorial previo comenzaste a trabajar en el Prefab JohnLemon añadiendo un sistema para animarlo y componentes para hacerlo trabajar con el sistema de física. ¡Ahora vas a crear un componente personalizado: tu primer ***script***!

#### ¿Qué es un script?

Un script es un documento de texto que contiene una serie de instrucciones para la computadora. Comúnmente a estas instrucciones se les llama código. Las instrucciones están escritas de tal manera que la computadora pueda entenderlas, en este caso usando el lenguaje de programación llamado **C#** (Si sharp).

C# define la manera en la que las instrucciones están escritas y algunas de las palabras que se usan. Afortunadamente, las palabras que se usan a menudo tienen el mismo significado en C# del que tienen en inglés. Por ejemplo, la primera palabra con la que nos toparemos en C# es «**using**» (usando)—esto quiere decir que el script está escrito usando código de algún otro lugar. Otro ejemplo es «**public**» (público), lo cual significa que cualquier cosa puede acceder a algo. Hay demasiados ejemplos de analizar, pero en estos tutoriales explorarás cada uno de ellos cuando se presenten.

Todos los scripts que escribirás para este proyecto tomarán la forma de **MonoBehaviours** (Comportamientos únicos). MonoBehaviours son tipos especiales de *scripts* que pueden ser anexados a GameObjects, tal como se puede hacer con los componentes. Esto se debe a que son un tipo específico de componente que tú mismo puedes escribir.

Los scripts comparten algunas similitudes con los Prefabs (Prefabricados):

- Un script se crea como un Asset (recurso), igual como se hace con un Prefab.
- Añadir un script a un GameObject como un componente es realmente una ejemplificación del script, al igual que el añadir un Prefab a una escena es una ejemplificación de ese Prefab.

Sin embargo, los scripts son diferentes en muchos aspectos ¡Vamos a entrar en materia para aprender más sobre esto!

Marcar paso como completado

## 2. ¿Cómo puedes crear tu primer script (PlayerMovement)?

Q&A (0)

Primero, crea tu nuevo script como un Asset (Recurso):

1. Encuentra la carpeta **Assets > Scripts** (Recursos > *Scripts*) en la ventana Project (Proyecto). Haz clic en la carpeta y escoge **Create > C# Script** (Crear > *Script*en C#). Ponle el nombre «PlayerMovement» a tu script.

Ojo: Los scripts que se van a usar como un componente necesitan que su *asset* tenga el mismo nombre que el **nombre de la clase** en el mismo script. Cuando Unity crea un archivo *script*, le da el nombre de una clase que es igual al primer nombre que se le dio al Asset. Aun así, cuando se cambia el nombre del Asset, el nombre de la clase no cambia.

2. Selecciona tu scrip y mira la ventana Inspector. Deberías ver el siguiente código:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }
}
```

Encuentra la línea que comienza con «**public class PlayerMovement**». Esto es lo que define el nombre de la clase. Si tu *script* no dice PlayerMovement, borra el *script* Asset y luego crea uno nuevo llamado PlayerMovement.

3. Ya que has creado tu *script* Asset, ábrelo para editarlo. Puedes hacer doble clic en el Asset o hacer clic en el botón «Open...» en la ventana Inspector.

[Image: image]

La edición de *script*s no se hace dentro de Unity —en su lugar los *script*s se abren en otro programa llamado Visual Studio. Una vez que esté abierto podrás editarlo.

### Analicemos el *script* por defecto

Vamos a analizar el *script* por defecto que puedes ver en Visual Studio ahora.

**1.** Las tres primeras líneas de código son:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

Se les llama **using directives** (directrices de uso). Te permiten usar código implementado en otro lado dentro de este archivo *script*. Por ejemplo, la palabra «MonoBehaviour» en la línea siguiente no se podría usar si no tuvieras «using UnityEngine» aquí. En la mayoría de los casos, las directrices de uso que Unity incluye por defecto son suficientes; por ende, no necesitas preocuparte mucho acerca de ellas.

**2.** La línea siguiente es:

```csharp
public class PlayerMovement : MonoBehaviour
```

Esto es el comienzo de una **declaración de clase** o *class declaration*. Las clases son como planes para ejemplificaciones que se llaman Objetos u *Objects*. Cuando una clase es ejemplificada (por ejemplo, al anexar un *script* como un componente a un GameObjet), esa ejemplificación se llama un **objeto**. Los objetos son los cimientos del código ¡y existen a través de todo el trabajo que ya has hecho!

Las clases que ya sabes y con las que estás familiarizado incluyen Animator, Rigidbody, GameObject y Transform. Ya están en tu código. Otra manera en la que podemos pensar sobre las clases es que son fábricas en las que se toma una materia prima, se hace algo con ella y que luego produce un resultado. Regresaremos a la analogía sobre las fábricas con otros elementos de código.

**3.**La línea siguiente es simplemente una llave abierta: {

En esta serie de tutoriales las llamaremos **llaves**. Las llaves son un elemento esencial del lenguaje C# porque definen **bloques de código**. Los bloques de código son líneas de código que existen entre una llave de apertura y una de cierre. Las llaves siempre deben estar en pares.

Para la declaración del bloque de código, la llave de cierre está al fondo, pero también hay dos bloques de código más dentro de la declaración. Los dos bloques de código que están contenidos dentro de la clase están sangrados. La sangría no es algo técnicamente necesario, pero es muy útil para definir dónde el código empieza y dónde termina.

**4.** La siguiente línea es:

```csharp
// Start is called before the first frame update
```

Cualquier texto que esté precedido de una barra doble, como esta, se llama un comentario. Un comentario es cualquier cosa que quieras que sea ignorada completamente por la computadora. En la mayoría de los casos funcionan como una especie de etiqueta para explicar algo sobre el código que los rodea. En este caso, el comentario da una explicación breve de lo que está declarado debajo suyo.

**5.** Después del comentario está el comienzo de la primera declaración de método:

```csharp
void Start()
```

Vamos a regresar a la analogía de la fábrica. Si una clase es una fábrica; entonces, un método es una máquina dentro de esa fábrica. Los métodos pueden asimilar datos, ejecutar una operación y luego emitir (o regresar) datos.

Todas las declaraciones de métodos tienen el mismo formato:

- Primero declaran el **tipo de retorno**o *return type*. Esto es el tipo de datos que se va a emitir una vez que el método acabe. En este ejemplo el tipo de retorno es ***void***. Esta es una palabra especial de C# que significa «nada»—el método no retorna nada, literalmente.
- Después del tipo de dato viene el **nombre del método**, en este caso **Start**(comienzo).
- Después del nombre hay un par de paréntesis. En esta serie de tutoriales los llamaremos paréntesis. Entre los paréntesis, los métodos tienen una oportunidad de declarar qué tipo de datos quieren asimilar. Estos trozos de datos se llaman **parámetros**. Ya que no hay nada dentro de los paréntesis, no hay ningún parámetro declarado.

Estos tres elementos (el tipo de retorno, el nombre y los parámetros) forman la **firma** de un método. En la mayoría de los casos, un método puede tener cualquier firma que quieras. Sin embargo, las clases MonoBehavior pueden usar algunos métodos especiales los que necesitan tener firmas específicas. Estos métodos especiales no necesitan invocarse desde tu código. En su lugar Unity los invoca en momentos específicos. El método Start es un ejemplo de esos métodos especiales. Se invoca tan pronto como el GameObject en el que está comienza, lo cual es usualmente tan pronto como empieza la Scene. Esto lo hace la opción ideal para hacer cosas que no quieras repetir, como la configuración.

**6.** Después de la firma del método Start hay un bloque de código. Esto define todo el código que se ejecuta cuando se invoca el método. El invocar un método es cómo se usa el método (harás esto más adelante). Para regresar a la analogía de la fábrica: la declaración del método es cómo funciona la máquina en la fábrica e invocar el método es como realmente se usa la máquina.

A la firma de declaración de método seguida del bloque de código se los conoce juntos como una **definición de método**. Los términos «declaración de método» y «definición de método» se intercambian mucho cuando se habla de C# porque ocurren al mismo tiempo. La diferencia realmente solo importa en otros lenguajes (tal como C++).

**7.** Ahora es un momento oportuno para hablar sobre el orden en el que se escriben las cosas en una clase. Siguiendo con la analogía sobre las fábricas y las máquinas, no importa dónde estén las máquinas dentro de tu fábrica, pero el orden en el cual las máquinas ejecutan sus operaciones en muy importante.

En C# no importa en qué order los métodos se declaran en una clase, pero el orden en el que los métodos se ejecutan sus operaciones importa mucho.

**8.** Las dos últimas partes del *script* son otro comentario y otra definición de método.

El método **Update**es otro método especial para MonoBehaviors. Se invoca en cada marco, antes de algo sea reproducido en la pantalla.

Ahora que tienes un entendimiento básico de algunas de las partes del *script* por defecto, vamos a personalizar este *script* para tu juego.

Marcar paso como completado

## 3. ¿Cómo podemos crear variables para los ejes horizontal y vertical?

Q&A (0)

Tu *script* PlayerMovement necesita tomar el ingreso o las entradas que hace el usuario y traducirlo al movimiento del personaje.

Lo primero que necesitas hacer es obtener algunos datos del sistema de ingresos de Unity (Unity's input system). El *script* necesita verificar lo que ocurren con los ingresos todo el tiempo y desde que Update se invoca en cada marco, tiene sentido verificar los ingresos allí. Pero ¿qué es lo que específicamente necesita verificar?

Tiene sentido mover al personaje usando las **teclas WASD** o las **flechas**; por lo tanto, el *script* necesita verificar los valores de esas teclas específicas en el teclado. Podría verificar si alguna de esas teclas está siendo pulsada individualmente o no y decidir lo que el personaje debería hacer (o no), pero hay una alternativa que lo hará un poco más fácil.

Unity tiene un **administrador de ingresos** (input manager) que define varios botones y ejes que pueden encontrarse a través de su nombre. Por ejemplo, tiene un eje llamado **Horizontal**, el cual es representado por las teclas A y D y las flechas izquierda y derecha. Entonces, al verificar eso la computadora del jugador podría decidir si el personaje se mueve hacia la izquierda o la derecha.

#### Escribe el código para crear tus variables

¡Vamos a empezar! Añade la línea siguiente dentro de los corchetes del método Update:

```csharp
float horizontal = Input.GetAxis ("Horizontal");
```

Debería verse así

```csharp
// Update is called once per frame
    void Update()
    {
        float horizontal = Input.GetAxis ("Horizontal");
    }
```

Si las clases son fábricas y los métodos son máquinas en esas fábricas, las **variables** son cajas que contienen las cosas en esas fábricas. Es decir, las variables son una manera de guardar datos. Los datos que necesitas guardar es el valor del ingreso del eje horizontal. En Unity los ejes de ingreso regresan un número entre -1 y 1 —este tipo de dato se llama **dato de punto flotante** o float. Un dato de punto flotante representa un número con decimales.

Hay algunas partes importantes sobre la sintaxis o estructura de esta línea de código:

- En C#, un **signo igual** significa que se debe asignar lo que sea que esté a la derecha (el resultado de un método) a la variable a la izquierda (una variable nueva de tipo float).
- El **punto** entre Input y GetAxis le permite a la computadora acceder algo dentro del objeto anterior (GetAxis es un método dentro de Input; por lo tanto, para ir de Input a GetAxis se usa un punto).
- El código de C# está constituido de cosas llamadas instrucciones. Cada instrucción contiene una o más instrucciones para la computadora y pueden considerarse oraciones. Los dos puntos marcan el final de la instrucción y funciona como un punto al final de una oración.

Marcar paso como completado

## 4. ¿Cómo creaste esa variable?

Q&A (0)

Vamos a explorar lo que hace tu código más detalladamente:

Tienes la clase Input y estás navegando a través de la clase para encontrar el método que se llama GetAxis. Entonces estás invocando ese método al poner paréntesis tras su nombre. No obstante; al contrario de Start y Update, GetAxis tiene un **parámetro** —un dato que necesita para ejecutar su tarea. Específicamente, GetAxis necesita el nombre del axis para el cual está tratando de encontrar un valor. Estás tratando de encontrar el valor del eje horizontal aquí; por lo tanto, se lo has dado como un parámetro.

El tipo de dato para este tipo de información se llama una **cadena** o *string*. Esto se refiere a una cadena de caracteres, por ejemplo, una palabra o una oración. Al poner marcas de discurso alrededor de la palabra Horizontal, le estás diciendo a la computadora que debe tratarla como una cadena.

Una vez que la computadora ha obtenido los valores del eje necesitará guardarlos en algún lugar. A la izquierda de la invocación del método has introducido una nueva variable llamada horizontal y la has configurado a que sea igual al valor que se encuentra de GetAxis.

Luego, añade otra línea de código para encontrar el valor del eje llamado **Vertical** y guardarlo en una variable llamada **vertical**.

El método Update debería verse así

```csharp
// Update is called once per frame
    void Update()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");
    }
```

Ahora tienes los valores para los ejes horizontal y vertical. El siguiente paso es combinarlos dentro de un **vector**, de esa manera pueden usarse para cambiar posición.

Marcar paso como completado

## 5. ¿Cómo podemos hacer un vector?

Q&A (0)

En Unity, el espacio en 3D se representa con tres coordenadas las cuales hacen un vector. El tipo de dato que representa un vector en Unity se llama **Vector3**. Esto es lo que representa la posición de un GameObject y necesitarás hacer un Vector3 que representa ese cambio. El movimiento que el usuario representa es fundamental para esta clase y lo podrías necesitar para otras cosas también.

Con esto en mente, es importante considerar el **ámbito** de la variable que necesites crear.

El ámbito de la variable es el área de código donde puede utilizarse. Usualmente esto es tan simple como el bloque de código en el cual está declarado. Por ejemplo, ambas variables de punto flotante (floats) que acabas de declarar (horizontal y vertical) están en el ámbito para el método Update entero porque ese es el bloque de código donde fueron declaradas. Se dice que son **locales** para el método Update.

Si quieres usar una variable en muchos métodos diferentes, puedes crear variables fuera del ámbito del método. En cambio, estas son locales a la **clase**.

Añade la siguiente línea sobre las definiciones de los métodos:

```csharp
Vector3 m_Movement;
```

Tu *script* debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Vector3 m_Movement;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");
    }
}
```

La nueva línea de código está instruyendo a la computadora que cree una variable tipo Vector3 llamada **m_Movement** que puedes usar donde quieras en la clase PlayerMovement (Movimiento del jugador).

#### Convenciones para la nomenclatura

¿Pero qué significa esa _m al principio del nombre? Esto es parte de algo que se llama una **convención de nomenclatura**. Las convenciones de nomenclatura se usan para identificar un objeto o la clase de un objeto. En este proyecto usarás las convenciones internas de Unity. Todas las variables comienzan con una letra minúscula pero las palabras que le siguen comienzan con una mayúscula —esto se llama **camelCase** o caja camello.

La excepción a esto son las **variables de un miembro privado**, las cuales comienza con el prefijo m_ y todas las palabras comienzan con una letra mayúscula. Esto se llama **PascalCase**. Las variables de instancia o miembro de dato son aquellas que pertenecen a una clase antes que a un método específico. La parte m_ de una variable privada de instancia viene de que son variables «miembro».

Marcar paso como completado

## 6. Configura los valores de tu variable

Q&A (0)

Ya que tienes una variable para guardar el movimiento de tu personaje, necesitas configurar un valor para ella. Desde que esto puede cambiar en cada marco, necesitas configurarla cada marco —deberías hacerlo en el método Update.

En el método Update, después de que las variables vertical y horizontal hayan sido creadas, añade la línea siguiente:

```csharp
m_Movement.Set(horizontal, 0f, vertical);
```

Los vectores en un espacio de 3D tienen tres valores —el método **Set** (configurar) le asigna un valor a cada uno. Tiene tres parámetros, uno para cada coordenada del vector. El vector de movimiento ahora tiene un valor del ingreso horizontal en el eje horizontal, 0 en el eje y el ingreso verticales en el eje z. También hay una f después del 0 en el segundo parámetro, la cual le dice al computador que trate este número como un dato de punto flotante o *float*.

Ahora necesitas resolver un pequeño problema. El vector de movimiento está compuesto de dos números que pueden tener un valor máximo igual a 1. Si el valor de ambos es 1, la longitud del vector, (que también se conoce como su magnitud) será más de 1. Esta es la relación entre los lados de un triángulo que se describe en el teorema de Pitágoras.

[Image: image]

Esto significa que tu personaje se moverá más rápido diagonalmente que si lo hace a lo largo de un solo eje. Para asegurarte de que esto no ocurra, necesitas asegurarte de que el vector de movimiento siempre tenga la misma magnitud. Puedes hacer esto al **normalizarlo**. Normalizar un vector significa mantener la misma dirección del vector, pero cambiar su magnitud a 1.

Añade el *script* siguiente debajo de la línea que escribiste anteriormente para llamar a un método en el mismo vector:

```csharp
m_Movement.Normalize ();
```

Tu *script* completo debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Vector3 m_Movement;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();
    }
}
```

Este ejemplo incluye un espacio entre obtener las entradas y configurar el vector de movimiento. Esto no es importante, solo hace que se vea más ordenado

Marcar paso como completado

## 7. ¿Cómo se configura el componente Animator (animador)?

Q&A (0)

Ya que has creado un vector de movimiento, hay otras tareas que necesitan hacerse en cada marco. Necesitas decirle a la computadora que haga lo siguiente:

- Dile al componente Animator si el personaje está caminando o no.
- Obtén una rotación para el personaje desde una entrada del jugador (de manera similar a cómo obtuviste su movimiento).
- Aplica movimiento y rotación a tu personaje

Vamos a comenzar con el componente Animator.

#### ¿Cómo se identifica si hay entradas del teclado del jugador o no?

Si hay alguna entrada del jugador en el teclado entonces tu personaje debería caminar y si no hay entonces debería quedarse quieto.

**1.** Para comenzar, necesitas escribir una línea de código que determine si hay entradas horizontales o no. Añade el siguiente cóidgo después de la línea que normaliza el movimiento del vector:

```csharp
bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
```

Aquí estás creando una **variable tipo**«**bool**» (la que puede ser true o false) y le estás dando el nombre de ithasHorizontalInput (Tiene entrada horizontal). Luego estás configurándola a que sea igual al valor que regresa un método. Este método se llama Approximately (aproximadamente) y es de la clase Mathf. Toma dos parámetros de tipo punto flotante y regresa una variable tipo «bool» —verdadero si los dos puntos flotantes son aproximadamente iguales y falso si no lo son. Por lo tanto; en este escenario, el método regresará el valor true si la variable horizontal es aproximadamente cero.

¡Pero espera! Hay otro carácter en esta línea con el que no te has topado antes: el signo de exclamación de cierre en frente de la invocación del método. Este es el **operador lógico de negación** e invierte una variable tipo bool poniendo true a false (verdadero a falso) y false a true (falso a verdadero). Esto significa que hasHorizontalInput se configura a true (verdadero) cuando la variable horizontal no es aproximadamente igual a 0. Es decir, hasHorizontalInput es verdadero cuando horizontal no es cero.

**2.** Pero no solo te debe importar el eje horizontal. Añade una línea similar para el eje vertical:

```csharp
bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
```

This line is doing exactly the same thing, but for the vertical axis.

Esta línea está haciendo exactamente lo mismo, pero para el eje vertical.

**3.** Ahora sabes que cuando obtienes entradas en los ejes, necesitas combinarlos en una sola variable tipo «bool». Añade la siguiente línea de código:

```csharp
bool isWalking = hasHorizontalInput || hasVerticalInput;
```

Esta línea crea otra variable tipo bool llamada isWalking, la cual está configurada a los valores de hasHorizontalInput o hasVerticalInput. Las dos líneas verticales son los **operadores lógicos OR**. Esto compara la variable bool en cada lado. Si uno de ellos, o si ambos son verdaderos; entonces, es igual a true. De otra manera es igual a false. Eso significa que si hasHorizontalInput o hasVerticalInput son verdaderos; entonces, isWalking es true y si no lo son, es false o falso.

Marcar paso como completado

## 8. ¿Cómo se crea una variable para guardar una referencia hacia el componente Animator (Animador)?

Q&A (0)

Luego, necesitas decirle al componente Animator si el personaje debería estar caminando o no usando la variable tipo «bool» que acabas de crear. Para hacerlo, necesitas acceder al componente Animator.

Pero, espera un momento, ¿por qué necesitas hacer algo especial para acceder al componente Animator cuando no necesitaste hacerlo para invocar métodos en Input o Mathf? Esto se debe a que los métodos Input y Mathf son estáticos.

**Los métodos estáticos** son métodos que se invocan en el tipo de una clase en vez de uno de los casos de esa clase. No hay necesidad de tener un solo caso de la clase Input para determinar el valor de los ejes porque Input es un concepto más global. Por definición, los métodos que obtienen esos valores son estáticos. De la misma manera, la clase Mathf está llena de métodos auxiliares (métodos que ayudan a otro método a ejecutar su tarea) los que no involucran ningún dato específico para un caso específico de Mathf; por lo tanto, esos métodos también son estáticos.

Sin embargo, toma en consideración tu variable m_Movement. Tuviste que configurar valores específicos para ese caso en particular de Vector3; por lo tanto, esos métodos no son estáticos. The important thing to remember is that static methods are called using a type name and non-static methods (or 'instance' methods) are called using an instance name.

Marcar paso como completado

## 9. 9. ¿Cómo se hace una referencia que apunte  hacia el componente Animator?

Q&A (0)

Antes de que puedas acceder al componente *Animator* necesitas configurar una referencia que apunte hacia ello y esto se obtiene a través del método **GetComponent**(Obtener componente). Esta referencia se usará a través de la clase y no solo en un solo método. Tiene sentido mantenerlo como una variable de instancia (igual que el vector de movimiento); de tal manera que su ámbito sea local a la clase.

En la parte superior de la clase, encima de la declaración del vector de movimiento, pero debajo de la declaración de la clase, añade la siguiente línea

```csharp
Animator m_Animator;
```

El *script* debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Animator m_Animator;
    Vector3 m_Movement;

    void Start ()
    {

    }

    void Update ()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();

        bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
        bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
        bool isWalking = hasHorizontalInput || hasVerticalInput;
    }
}
```

Ojo: En este ejemplo los comentarios encima de los métodos Start y Update no han sido removidos. Si quieres podrías hacerlo, pero no es necesario —los comentarios no afectan el código en manera alguna.

Marcar paso como completado

## 10. ¿Cómo se configura la referencia que apunta hacia el componente Animator?

Q&A (0)

Has creado una variable para guardar una referencia al componente *Animator*, pero hasta ahora no has configurado algún valor para esta variable y está vacía. Cuando una variable está vacía de esta manera en C#, se dice que es ***null*** (nula). Cuando pueda haber una referencia, pero no hay una, la referencia es ***null***.

No quieres que haya una referencia nula aquí y por eso necesitas configurar la referencia de manera adecuada. También necesitas poder acceder al componente *Animator*en cualquier método; por lo tanto, sería bueno que configures la referencia tan pronto como sea posible.

Uno de los métodos que se invocan primero en un MonoBehaviour es el método Start que exploraste anteriormente en este tutorial; de tal manera, tiene mucho sentido que configures la referencia allí. Agrega la línea siguiente al método Start:

```csharp
m_Animator = GetComponent<Animator> ();
```

El método debería verse así:

```csharp
void Start ()
    {
        m_Animator = GetComponent<Animator>();
    }
```

Esta línea de código usa sintaxis que ya hemos visto y otra que es nueva:

- La variable a la que estás asignándole valor está a la izquierda.
- El nombre de un método está a la derecha (pero no tiene nada escrito antes).
- Hay signos de mayor que y menor que alrededor del Animator, antes de los paréntesis que has visto antes.
- La línea termina con un punto y coma.

#### ¿Cuál es el significado de esta referencia?

Vamos a explorar tu código:

Primero, ¿por qué no hay una clase antes de GetComponent (Obtener componente)? Cuando añadiste esto antes, estabas accediendo métodos en otros objetos (por ejemplo, el método Normalize en el vector de movimiento). Sin embargo, GetComponent es algo a lo que ya tienes acceso, es parte del MonoBehaviour y ya que tu clase es un MonoBehaviour, ya tienes acceso a ella.

Luego, los símbolos mayor que y menor que. Estos han sido añadidos porque el método GetComponent es **genérico**. Un método genérico es aquel que tiene dos configuraciones diferentes de parámetros: **parámetros normales** y **parámetros de tipo**. Los parámetros enlistados entre los símbolos de mayor y menor que son los parámetros de tipo.

En este escenario, GetComponent necesita saber qué **tipo** de componente buscas. Si buscas un componente Animator, el tipo de parámetro es Animator. La línea de código dice, «obtén una referencia que apunte hacia el componente de tipo “Animator” y asígnaselo a la variable llamad m_Animator».

#### ¿Cómo se configura el isWalking parámetro de tipo Animator?

Ahora que tienes una referencia que apunta hacia el componente Animator, puedes usarla para configurar el IsWalking parámetro de tipo Animator que creaste en el tutorial anterior.

Añade la línea de código siguiente debajo de la creación de la variable isWalking en el método Update:

```csharp
m_Animator.SetBool ("IsWalking", isWalking);
```

Este código invoca el **método SetBool** usando la referencia al componente Animator que acabas de configurar. El primer parámetro es el nombre del parámetro Animator al que quieres asignarle un valor y el segundo es el valor que les quieres asignar. Es importante que prestes atención a la ortografía y el uso de mayúsculas y que los copies exactamente; de otra manera, el método no sabrá a cuál de los parámetros Animator debe asignarle un valor.

El *script* debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Animator m_Animator;
    Vector3 m_Movement;

    void Start ()
    {
        m_Animator = GetComponent<Animator>();
    }

    void Update ()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();

        bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
        bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
        bool isWalking = hasHorizontalInput || hasVerticalInput;
        m_Animator.SetBool("IsWalking", isWalking);
    }
}
```

¡Esto es todo! Has configurado el valor del parámetro Animator.

Marcar paso como completado

## 11. 11. ¿Cómo puedes crear una rotación para tu personaje?

Q&A (0)

Vamos a echarle un vistazo a la tarea que necesita completarse en cada marco: la creación de una rotación para tu personaje.

En este juego el personaje debería poder caminar solo hacia el frente y necesita mirar hacia la misma dirección en la que se mueve. Sin embargo, si John Lemon se voltea rápidamente hacia la dirección que quieres se verá un poco raro; por ende, necesitas que sea un poco más despacio. Pero ¿cuánto deberías retardarlo?

Una manera más fácil de plantear esta cuestión es considerar la velocidad en la que el personaje debe voltearse.

Para ver esta velocidad, necesitas crear una nueva variable.

#### ¿Cómo crear una variable turnSpeed?

Añade la siguiente línea a la parte superior de la clase, encima de la variable de instancia:

```csharp
public float turnSpeed;
```

Vamos a explorar este código.

Has añadido la palabra ***public*** antes de la declaración de la variable. En Unity, las variables de instancia públicas aparecen en la ventana Inspector y pueden ser modificadas.

También has usado la caja de camello (en vez de PascalCase, con su prefijo m_). Esto se de be a que la variable es pública y las convenciones de nomenclatura de Unity usan este formato para las variables de instancia públicas. Las convenciones de nomenclatura pueden ser muy útiles, pero no hay una razón técnica por la que las adoptamos.

#### ¿Cómo puedes calcular el forward vector (vector delantero) de tu personaje?

Recuerda que necesitas que el personaje mire hacia la dirección de su movimiento. Todos los componentes Transform tienen un vector delantero y un buen paso intermedio sería calcular lo que quieras que sea el **forward vector** (**vector delantero**) de tu personaje.

Añade la línea siguiente de código al final del método Update:

```csharp
Vector3 desiredForward = Vector3.RotateTowards (transform.forward, m_Movement, turnSpeed * Time.deltaTime, 0f);
```

- Es una línea de código muy larga y parece muy complicada, pero incluye muchas cosas familiares. Vamos a analizarla paso por paso:
- Este código crea una variable Vector3 llamada desiredForward (dirección delantera deseada).
- Esto configura el retorno de un método que se llama RotateTowards (rotar hacia), el cual es un método estático de la clase Vector3. RotateTowards toma cuatro parámetros —los primeros dos son de tipo Vector3 y son los vectores que se rotan desde y hacia un punto respectivamente.
- El código empieza con transform.toward (transformar hacia) y apunta hacia la variable m_Movement. Transform.forward es un acceso rápido al componente Transform y obtiene su vector delantero.
- Los siguientes dos parámetros son la cantidad entre el vector de arranque y el vector meta: primero, el cambio en el ángulo (en radianes) y luego el cambio en magnitud. Este código cambia el ángulo al multiplicarlo por**turnSpeed** (velocidad de giro) * **Time.deltaTime** (tiempo por tiempo delta) y la magnitud por 0.

Time.deltaTime es el tiempo que ha pasado desde el marco anterior (puedes pensar sobre esto como el tiempo entre marcos). Entonces ¿por qué necesitas multiplicar turnSpeed por eso?

El método Update se invoca en cada marco y si tu juego está rodando a 60 marcos por segundo; entonces, eso significa que este método será invocado 60 veces en un segundo. Habría un cambio muy pequeño en cada invocación; de tal manera que, a lo largo de 50 marcos tu obtendrás el cambio que quieras por segundo. ¿Pero qué pasa si un juego rueda a 30 marcos por segundo? Solo la mitad de las invocaciones del método se harían en ese tiempo; por lo tanto, solo la mitad del giro habría sucedido. No quieres que el número de marcos por segundo afecte cuán rápido gire tu personaje —eso no sería nada bueno.

¿Qué pasaría si en vez de un cambio por marco, estás lidiando con un cambio por segundo? Eso haría las cosas mucho más fáciles. Para hacerlo, necesitas multiplicar cualquier cambio que quieras por segundo por la cantidad de tiempo que toma un marco. Esto es exactamente lo que hace esta línea de código.

Marcar paso como completado

## 12. ¿Cómo se ajusta la variable turnSpeed (Velocidad de giro)?

Q&A (0)

La variable turnSpeed es el ángulo en radianes que quieres que el personaje gire por segundo. Esto se multiplica por Time.deltaTime para obtener lo que el personaje debe girar en este marco. Los radianes son una medida diferente para un ángulo. Son similares a los grados, pero son una medida más natural. Un círculo tiene 2π dentro; por lo tanto, aproximadamente 6. Tu personaje siempre va a tomar el giro más corto; entonces, lo máximo que tu personaje giraría serían **3 radianes**.

Dado que, una turnSpeed de 3 significa que le toma a tu personaje cerca de un segundo para hacer un giro completo. Eso es muy lento. Una velocidad de giro de 5 significaría que le toma cerca de medio segundo para un giro completo, lo que es muy lento. Vamos a probar un valor de 20 y ver qué te parece —la puedes cambiar luego, si quieres.

Cambia la línea que declara la variable turnSpeed en la parte superior de la clase a:

```csharp
public float turnSpeed = 20f;
```

¡Ahora tenemos un vector para la dirección en la que quieres que mire tu personaje!

#### ¿Cómo crear y guardar una rotación?

Luego, necesitas usar el vector para obtener una rotación y guardarla; de esa manera, puedes usarla cuando quieras. Vas a guardarla al igual que lo hiciste con el vector de movimiento; por ende, tiene sentido declarar esa variable aquí.

Añade la siguiente línea debajo de la línea que declara el Vector3 llamado m_Movement:

```csharp
Quaternion m_Rotation = Quaternion.identity;
```

Los **quaternions (cuaternarios)** son una manera de guardar rotaciones; ellos evaden algunos de los problemas que conlleva guardar rotaciones como un vector 3D. Este tutorial no los explora en detalle —el saber qué son y que se usan para guardar rotaciones es todo lo que necesitas saber por el momento.

Les has dado al Quaternion un valor por defecto de Quaternion.identity. Normalmente, las variables que son parte de la clase (variable de instancia o miembros) en vez de ser parte de un método específico son configuradas a su valor por defecto cuando se crea un caso de la clase. Por ejemplo, el valor por defecto de un Vector3 es tener los valores de X, Y y Z configurados a 0. Ocurre lo mismo con un Quaternion. Sin embargo, mientras que tiene sentido tener un vector cero (ya que indica que no hay movimiento), un Quaternion cero no tiene mucho sentido. Configurar este valor de Quaternion.identity simplemente le da un valor que indica que no hay rotación, lo que tiene mucho más sentido como valor por defecto.

Ya que has creado una variable de rotación, ahora puedes configurarla. Añade la siguiente línea debajo de la creación de la variable desiredForward:

```csharp
m_Rotation = Quaternion.LookRotation (desiredForward);
```

Esta línea simplemente invoca el método LookRotation y crea una rotación que mira en la dirección del parámetro que se ha pasado.

Tu *script* debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float turnSpeed = 20f;

    Animator m_Animator;
    Vector3 m_Movement;
    Quaternion m_Rotation = Quaternion.identity;

    void Start ()
    {
        m_Animator = GetComponent<Animator>();
    }

    void Update ()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();

        bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
        bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
        bool isWalking = hasHorizontalInput || hasVerticalInput;
        m_Animator.SetBool("IsWalking", isWalking);

        Vector3 desiredForward = Vector3.RotateTowards (transform.forward, m_Movement, turnSpeed * Time.deltaTime, 0f);
        m_Rotation = Quaternion.LookRotation (desiredForward);
    }
}
```

Marcar paso como completado

## 13. ¿Cómo aplicar movimiento y rotación a tu personaje?

Q&A (0)

¡Casi has terminado! El último paso es aplicar el movimiento y la rotación a tu personaje. Hay muchas maneras en las que puedes hacerlo, pero desde que el personaje necesita ser parte del sistema de física, necesitas mover el Rigidbody en vez de usar cualquier otra técnica.

Para hacerlo, necesitas una referencia al componente Rigidbody. Puedes obtenerlo de la misma manera que lo hiciste para obtener el componente Animator.

**1.** Añade la línea de código siguiente a tu **script** inmediatamente después de la declaración de la variable Animator:

```csharp
Rigidbody m_Rigidbody;
```

**2.**  Añade otra línea de código justo después de configurar la referencia a la variable Animator:

```csharp
m_Rigidbody = GetComponent<Rigidbody> ();
```

Ahora que tienes la referencia al Rigidbody, vamos a pensar sobre los detalles que conlleva el mover un personaje animado. El personaje tiene una animación Walk (caminar) muy divertida y sería bueno usar el movimiento de raíz para ella. No obstante, la animación no tiene ningún giro y si tratas de girar el Rigidbody en el método Update, podría ser ignorado por la animación (lo que podría resultar en que el personaje no gire cuando debe hacerlo).

Lo que realmente necesitas es un poco del movimiento de raíz de la animación, pero no todo; específicamente, necesitas aplicar el movimiento, pero no la rotación. Entonces ¿cómo cambiar la manera en la que el movimiento de raíz se aplica desde el Animator? Afortunadamente, los MonoBehaviours tienen un método especial que puedes usar para cambiar cómo se aplica el movimiento de raíz desde el Animator.

Declara un nuevo método debajo del método Update:

```csharp
void OnAnimatorMove ()
    {

    }
```

Este método te permite aplicar el movimiento de raíz como quieras aplicarlo, lo que significa que el movimiento y la rotación pueden aplicarse por separado.

Marcar paso como completado

## 14. Movimiento

Q&A (0)

Vamos a comenzar con movimiento. Añade la línea siguiente al método OnAnimatorMove:

```csharp
m_Rigidbody.MovePosition (m_Rigidbody.position + m_Movement * m_Animator.deltaPosition.magnitude);
```

Esta es otra línea de código que parece un poco complicada; pero otra bez, hay muy poco que realmente sea nuevo para ti aquí.

Primero, estás usando tu referencia al componente Rigidbody para invocar su método MovePosition (mover posición) y pasándolo en un solo parámetro: su nueva posición. La nueva posición comienza en la posición actual del Rigidbody y luego añades un cambio a eso —el vector de movimiento multiplicado por la magnitud de deltaPosition (posición delta) del Animator. Pero ¿qué significa eso?

La posición delta o deltaPosition del Animator es el cambio de posición debido al movimiento que habría sido aplicado a este marco. Estás tomando la magnitud de eso (su longitud) y lo multiplicas por el vector del movimiento el cual está en la dirección actual en la que queremos que se mueva el personaje.

Marcar paso como completado

## 15. Rotación

Q&A (0)

Luego, aplica la rotación. Añade la línea siguiente justo debajo de la invocación MovePosition (mover posición) en el método OnAnimatorMove (cuando se mueva el animador…):

```csharp
m_Rigidbody.MoveRotation (m_Rotation);
```

Esto es muy similar a la invocación de MovePosition, excepto que se aplica a la rotación. Esta vez no estás aplicando un cambio a la rotación, estás configurando la rotación directamente.

¡Esta es la última línea de código en tu primer *script*! Pero hay algo más que deberías ajustar.

Marcar paso como completado

## 16. ¿Cómo puedes hacer cambios a tu método Update (actualizar)?

Q&A (0)

En el tutorial anterior aprendiste acerca del bucle Update o actualizar (que se usa para reproducción) y el bucle FixedUpdate o actualización fija (el mismo que corre las operaciones que usan física). Te has asegurado de que el Animator corra a tiempo con el bucle de física para evitar conflictos entre la física y la animación. No obstante, ahora estás ignorando el movimiento de raíz usando OnAnimatorMove (cuando se mueva el animador…). Esto significa que OnAnimatorMove realmente será invocado a tiempo con la física y no con la reproducción como tu método Update.

El vector de movimiento y rotación se configura en Update. Si se invoca primero OnAnimatorMove luego tendrás un problema porque un Quaternion (cuaternario) sin un valor no tiene ningún sentido.

Para asegurarte de que el vector de movimiento y rotación esté configurado para que funcione en conjunto con OnAnimatorMove, cambia tu método Update a uno que sea un método FixedUpdate de la manera siguiente:

```csharp
void FixedUpdate ()
```

Este es otro método especial que Unity invoca automáticamente, pero este funciona en conjunto con la física. En vez de invocarse en cada marco, FixedUpdate se invoca antes de que el sistema de física resuelva cualquier colisión y otras interacciones que hayan ocurrido. Por defecto se invoca 50 veces por segundo.

¡Eso es todo! El *script* completo debería verse así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float turnSpeed = 20f;

    Animator m_Animator;
    Rigidbody m_Rigidbody;
    Vector3 m_Movement;
    Quaternion m_Rotation = Quaternion.identity;

    void Start ()
    {
        m_Animator = GetComponent<Animator> ();
        m_Rigidbody = GetComponent<Rigidbody> ();
    }

    void FixedUpdate ()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();

        bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
        bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
        bool isWalking = hasHorizontalInput || hasVerticalInput;
        m_Animator.SetBool ("IsWalking", isWalking);

        Vector3 desiredForward = Vector3.RotateTowards (transform.forward, m_Movement, turnSpeed * Time.deltaTime, 0f);
        m_Rotation = Quaternion.LookRotation (desiredForward);
    }

    void OnAnimatorMove ()
    {
        m_Rigidbody.MovePosition (m_Rigidbody.position + m_Movement * m_Animator.deltaPosition.magnitude);
        m_Rigidbody.MoveRotation (m_Rotation);
    }
}
```

Ojo: En C# el orden en el que se declaran los métodos en una clase no importa; por ende, tus métodos tal vez estén ordenados de manera diferente.

Guarda tu *script* y felicítate a ti mismo por haber hecho un buen trabajo. Es hora de regresar a Unity y poner a prueba lo que has hecho.

Marcar paso como completado

## 17. ¿Cómo puedes poner a prueba los cambios que has hecho?

Q&A (0)

#### ¿Cómo se le añade el *script* PlayerMovement (Movimiento del jugador) a John Lemon?

Una vez que hayas regresado a Unity, necesitas añadir el botón Add Component (Añadir componente) a la ventana Inspector, pero también lo puedes hacer de otra manera :

**1.**  selecciona el GameObject John Lemon;

**2.**  en la ventana Inspector, haz clic en la opción Edit Prefab (Editar el prefab) para entrar al modo Prefab;

**3.** en la ventana Project (Proyecto), ve a **Assets > *Script*s** (Recursos > Scritps) y encuentra el ***script*PlayerMovement** (Movimiento del jugador);

**4.**  arrastra el *script*PlayerMovement desde la ventana Project a la ventana Inspector;

**5.**  si tu modo Prefab no está configurado a Auto Save (autoguardar), pulsa el botón Save (guardar);

[Image: image]

**6.**haz clic en la flecha «regresar» y regresa siguiendo la miga de pan del Prefab;

[Image: image]

**7.**si la MainScene (Escena principal) no está cargada, ve a la ventana Project y cárgala haciendo doble clic en el Scene Asset (Recurso escena) en la carpeta **Assets > Scenes** (Recursos > Escenas);

**8.**selecciona el GameObject JohnLemon dentro de la Scene —verás que tiene todos los componentes y configuraciones que le diste a su Prefab.

Marcar paso como completado

## 18. ¿Cómo se ajustan las configuraciones de tu vista Game (Juego)?

Q&A (0)

Antes de que pongas a prueba el Prefab, tal vez necesites ajustar algunas de las configuraciones para la vista Game (Juego). Si tienes un monitor de alta resolución, Unity automáticamente pone la ventana Game a escala para mejorar el rendimiento, Lo hace al configurar la escala de la ventana Game.

Actualmente, tu Scene (Escena) no es lo suficientemente complicada como para que el rendimiento sea algo de qué preocuparse; por lo tanto, si tienes este problema, lo vamos a resolver ahora.

**1.** Selecciona la pestaña de la ventana Game. Puedes ver si tu ventana Game ha sido puesta a escala en la parte superior.

[Image: image]

**2.** Haz clic en el menú desplegable de proporción, el mismo que actualmente dice **Free Aspect**(Aspecto libre).

[Image: image]

**3.** Deshabilita la casilla **Low Resolution Aspect Ratios** (Proporciones de baja resolución) y luego cambia el deslizador de escala a 1x. Si tu no puedes deshabilitar esta casilla (o si ya está deshabilitada), no te preocupes. Esto no afectará el juego cuando esté terminado y debería configurarse automáticamente para tu monitor.

¡La ventana Game ahora está como debería verse para que puedas poner a prueba JohnLemon! Haz clic en el botón Play para comenzar y usa las flechas en tu teclado para que puedas mover a John Lemon.

[Image: image]

**Ojo:** Si recibes un mensaje de error de compilación, ¡no dejes que cunda el pánico! Regresa y verifica tu código con el ejemplo muy cuidadosamente. Es muy fácil cometer errores, especialmente cuando acabas de escribir tu primer *script*. Asegúrate de que guardes cualquier enmienda que hagas a tu código y luego ponlos a prueba en el modo Play otra vez.

Marcar paso como completado

## 19. Resumen

Q&A (0)

Durante este tutorial escribiste tu primer *script* y exploraste algunos de los conceptos fundamentales del escribir código en Unity. Si no tienes experiencia codificando y has entendido todo fácilmente, ¡qué bien! Pero, si tuviste dificultades con algo la primera vez que lo trataste de hacer, no te preocupes. Puede tomar un poco de tiempo y práctica llegar a sentirse cómodo o cómoda con estos conceptos.

En el tutorial siguiente, crearás el entorno y el sistema de iluminación para tu juego; de esa manera, JohnLemon tendrá algo muy espeluznante del que escapa

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
