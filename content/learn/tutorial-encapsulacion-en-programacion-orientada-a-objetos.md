[Image: image]

# Encapsulación en programación orientada a objetos

Tutorial

foundational

+10XP

20 mins

1

(104)

Unity Technologies

[Image: Encapsulación en programación orientada a objetos]Summary

En este tutorial, aprenderás sobre el segundo pilar de la programación orientada a objetos: la encapsulación.

- Explica cómo se utiliza la encapsulación para escribir código que solo pueda utilizarse para los fines diseñados por el programador.
- Controla el acceso a los datos dentro de una clase al aplicar encapsulación con getters y setters.
- Distingue entre variables públicas (propiedades), variables privadas (campos) y variables locales.
- Activa una depuración y legibilidad más fáciles al organizar correctamente las clases para incluir código de propósito singular.

Languages available:

EspañolEnglishEspañol日本語Español

## 1. Descripción general

Q&A (0)

De forma muy similar a la abstracción, la encapsulación se enfoca mucho en mantener un nivel de separación entre la complejidad subyacente de tu código y otro código que lo utiliza. Debido a su similitud, algunas veces verás que algunos seguidores de las prácticas de la OOP agrupan la abstracción y la encapsulación en un solo pilar, por lo general con el título de encapsulación. Sin embargo, hacemos una distinción que consideramos importante: aunque la abstracción se trata de resumir el código con el fin de simplificarlo para otros programadores, la encapsulación consiste en proteger los valores y los datos, como si estuviesen resguardados en una cápsula, de manera que puedas controlar quiénes tienen o no acceso a ellos.

Marcar paso como completado

## 2. ¿Qué es la encapsulación?

Q&A (0)[Image: image]

Un tema fundamental de la encapsulación es la seguridad del código. En otras palabras, el proceso de garantizar que el código solo se utilice para lo que fue diseñado y que los valores y los datos que manipules no puedan corromperse. En el código encapsulado, los demás programadores no pueden cambiar fácilmente los valores de las variables ni las propiedades de los objetos. Es imposible mencionar todas las distintas formas en que otros Scripts pueden obtener acceso a tu código; por ello, es mucho mejor encapsular lo que creaste para que solo funcione según lo diseñaste.

Veamos una situación en la que utilizaste encapsulación durante ¿Cómo crear con código? Remontémonos hasta la [Unidad 1: Control del jugador](https://learn.unity.com/project/unit-1-driving-simulation?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f). Las siguientes son variables que se utilizaron para controlar un vehículo que recorre un camino.

[Image: image]

```csharp
public float speed = 20.0f;
public float turnSpeed = 45.0f;
public float horizontalInput;
public float forwardInput;
```

La primera vez que escribiste este código, definiste todas tus variables como «public» para poder ver cómo se actualizaban en el Inspector durante el modo Play. Dado que en ese momento apenas comenzabas a programar, te ayudó a comprender mejor cómo los cambios a los valores de tus variables modificaban la jugabilidad. Hacer que tus variables fueran públicas también te permitió ajustar con precisión el movimiento del vehículo al probar los valores speed y turnSpeed en tiempo real.

Después de definir los números finales, cambiaste tus variables a «private» para «fijar» sus valores.

```csharp
// all variables now private instead of public
private float speed = 20.0f;
private float turnSpeed = 45.0f;
private float horizontalInput;
private float forwardInput;
```

Ya no querías que cualquiera pudiera cambiar fácilmente, o quizás por error, los valores que habías definido. Así de simple, esa fue tu primera experiencia con la encapsulación.

La accesibilidad de las variables y los métodos son una consideración fundamental en la encapsulación. Como regla general, querrás mantener tus variables privadas siempre que sea posible y definir métodos como públicos solo cuando tengas la certeza de que necesitarás llamarlos desde cualquier lugar. De otra forma, cualquiera puede utilizarlos.

Cuando trabajas en un proyecto pequeño por tu cuenta, la encapsulación puede parecer irrelevante; de hecho, hacer todo público podría incluso ser más cómodo. Sin embargo, si trabajas con otras personas, o si otras personas trabajarán en tu código más adelante, podrían surgir problemas inesperados si se utilizan variables y métodos cuando no es indicado.

Marcar paso como completado

## 3. Variables privadas y visibilidad en el Inspector

Q&A (0)

Si una variable es pública se expone en el Inspector, pero también está disponible para que pueda cambiarse en cualquier otro método de tu aplicación. Buenas noticias: hay una forma de poner a disposición los valores en el Inspector, también llamados **serializados**, sin exponerlos a otro código. Esto te da la libertad de modificar las variables en el Inspector al tiempo que las mantienes seguras. De hecho, el modificador de acceso de una variable (public, private) no controla la serialización, pero las variables públicas se serializan por defecto. Puedes exponer tus variables privadas en el Inspector con facilidad si agregas la etiqueta [SerializeField].

```csharp
public class Rabbit : MonoBehaviour
{
    [SerializeField] // exposes private variables in the inspector
    private Color furColor;
}
```

[Image: image]Marcar paso como completado

## 4. ¿Cómo encontrar una variable «public» vulnerable en tu proyecto?

Q&A (0)

Sería fácil hacer que todas tus variables sean privadas para evitar el mal uso de los valores, pero ¿qué ocurre con las variables que de verdad necesitan ser públicas? ¿Cómo las protegemos? Trabajamos con un ejemplo en nuestro proyecto.

En MainManager.cs, agregaste la siguiente variable pública:

```csharp
public static MainManager Instance;
```

No puedes hacer privada esta variable porque causaría errores en otros *scripts* que necesitan acceso a ella, pero dejarla cómo pública significa que es vulnerable a un posible mal uso. Hagamos una travesura para demostrar el problema:

**1.**Para experimentar, en MenuUIHandler.cs, agrega una línea de código al final del método Start() que defina la instancia de MainManager a null.

```csharp
MainManager.Instance = null;
```

**2.**  Prueba tu aplicación al seleccionar los botones de elección de colores. Obtendrás una Null Reference Exception en la Console.

[Image: image]

Necesitamos una forma para evitar este tipo de mal uso, pero sin eliminar el acceso público a la variable.

Marcar paso como completado

## 5. ¿Cómo crear una propiedad con un Getter y un Setter?

Q&A (0)

En esencia, lo que queremos hacer es convertir la variable a «solo lectura» para que otras clases puedan **obtener** el valor, pero no puedan **definirlo**. Para ello, podemos utilizar los métodos C# get y set, los cuales controlarán cómo y cuándo puede utilizarse una variable.

**1.**En MainManager.cs, agrega un descriptor de acceso get al final de la variable de la instancia de MainManager:

```csharp
public static MainManager Instance { get; } // add getter to the end of the line
```

Tan pronto como agregas un descriptor de acceso get o set a una variable, esa variable se convierte en una **Property**(Propiedad): un tipo especial de variable que proporciona acceso a los datos internos mediante estos métodos especializados.

**2.** Sin un descriptor de acceso set, esta propiedad es estrictamente de solo lectura: su valor no puede definirse en ningún lugar. Debido a ello, ahora hay un error en esa línea de código traviesa que agregamos en MenuUIHandler.cs. Eso es bueno. No queremos que ninguna otra clase pueda restablecerla, así que ahora puedes eliminar esa línea de código.

```csharp
// MainManager.Instance = null; - delete or comment out this line of code
```

**3.**  Sin embargo, todavía hay un problema: como la propiedad es de solo lectura, ni siquiera su propia clase puede definirla, lo cual causa un error más adelante en MainManager.cs, en la línea Instance = this;. Para solucionarlo, agrega un private setter a la propiedad, lo cual deberá resolver este error:

```csharp
public static MainManager Instance { get; private set; } // add private setter
```

Con este código, ahora puedes **asignar (set)** el valor de la propiedad dentro de la clase, pero solo **obtenerlo (get)** fuera de la clase. Está encapsulado para solo aceptar modificaciones de su propia clase, a salvo del mal uso y la corrupción del mundo exterior.

Marcar paso como completado

## 6. ¿Cómo localizar la necesidad de validación del setter?

Q&A (0)

El getter y el setter que agregaste arriba representan la forma más básica de encapsulación, una donde solo defines y obtienes el valor, nada muy sofisticado. Esta implementación simple se llama **propiedad autoimplementada.**

```csharp
{ get; private set; }
```

Pero además de restringir si el valor puede definirse, y dónde, podrías también restringir cómo un valor puede definirse de una forma manual más personalizada. Por ejemplo, en una aplicación que permite que otra clase defina la fecha, podrías restringir el mes a un número entre 1 y 12. O quizás quieras evitar el uso de números negativos.

En nuestro proyecto de la bodega, hay un lugar donde puedes hacer eso: tenemos una variable Production Speed cuyo valor nunca debe definirse como un número negativo.

**1.**En ResourcePile.cs, localiza la variable public ProductionSpeed expuesta.

```csharp
public float ProductionSpeed = 0.5f;
```

También localiza la línea en ProductivityUnit.cs donde esa variable pública se multiplica por una constante.

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier;
```

Nada detiene que una versión de nosotros mismos en el futuro o algún otro desarrollador descuidado defina este valor como un número negativo, lo cual podría causar problemas en este proyecto.

**2.**Con el fin de experimentar, modifiquemos maliciosamente esta línea de código para restar la velocidad de producción en lugar de multiplicarla.

```csharp
m_CurrentPile.ProductionSpeed -= ProductivityMultiplier; // replace '*=' with '-='
```

Después prueba tu aplicación y utiliza la Productivity Unit para producir un resultado negativo:

[Image: image]

Lo que necesitamos es un setter personalizado, con el cual podamos asegurarnos de que esta variable nunca vuelva a definirse con un valor negativo.

Marcar paso como completado

## 7. ¿Cómo crear una propiedad con un campo de respaldo?

Q&A (0)

Para realizar validaciones o cálculos dentro de un getter o setter, necesitas un **campo de respaldo** para tu propiedad: un campo privado (variable) que almacene los datos expuestos por la propiedad pública.

Veámoslo en contexto.

**1.** En ResourcePile.cs, agrega una variable miembro privada (campo de respaldo) con el mismo nombre que ProductionSpeed, pero almacena el valor en este nuevo campo privado:

```csharp
private float m_ProductionSpeed = 0.5f; // add new private backing field
public float ProductionSpeed; // remove value from public property
```

**2.** Con la declaración del campo de respaldo, ahora puedes agregar manualmente las funciones get y set, las cuales obtienen o asignan el campo de respaldo cuando alguien obtiene acceso a la propiedad pública.

```csharp
private float m_ProductionSpeed = 0.5f;
public float ProductionSpeed // delete semicolon
{
    get { return m_ProductionSpeed; } // getter returns backing field
    set { m_ProductionSpeed = value; } // setter uses backing field
}
```

Dado que estos no serán métodos get y set simples, no es posible utilizar la versión breve «{ get; set; }» que usamos antes con la propiedad autoimplementada.

En cambio, lo haremos de forma manual. Cuando alguien obtenga la propiedad ProductionSpeed, devolverá el campo de respaldo. Cuando alguien defina la propiedad ProductionSpeed, el campo de respaldo se definirá como el valor que ingresaron.

**3.**Después, dado que los datos ahora se almacenan en el campo de respaldo en lugar de la propiedad pública, las referencias a la propiedad deben cambiarse con el campo privado. En ResourcePile.cs, reemplaza las dos referencias a ProductionSpeed con m_ProductionSpeed.

```csharp
...
m_CurrentProduction += m_ProductionSpeed * Time.deltaTime; // swap in m_ version
...
return $"Producing at the speed of {m_ProductionSpeed}/s"; // swap in m_ version
```

Ahora, cada vez que alguien intente obtener o definir la propiedad pública, obtendrá acceso al campo de respaldo encapsulado en la clase mediante el getter y el setter. Sin embargo, aún no hemos implementado una validación del setter, así que todavía es posible que se defina un número negativo. Lo arreglaremos de inmediato.

Marcar paso como completado

## 8. ¿Cómo implementar una validación al setter para evitar números negativos?

Q&A (0)

Por último, con todo configurado, podemos ahora implementar una verificación de validez dentro del método set para garantizar que Production Speed (Velocidad de producción) siempre sea un número positivo. De hecho, podemos incluso mostrar un mensaje de advertencia en la consola si se intenta ingresar un número negativo.

**1.**  Dentro del método set, agrega un enunciado condicional if-else que muestre un mensaje de advertencia si el valor es negativo, pero que defina correctamente el valor si es positivo.

```csharp
set
{
    if (value
```

**2.**  Prueba de nuevo tu aplicación y observa lo que ocurre cuando la velocidad de producción se define a un número negativo. Debe mostrar el mensaje de error.

[Image: image]

**3.**  Con la validación del setter completamente implementada y probada, ahora puedes regresar la ProductivityUnit para que funcione de forma normal con un operador de multiplicación en lugar de substracción.

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier; // revert '-=' to '*='
```

Marcar paso como completado

## 9. Resumen

Q&A (0)

La encapsulación protege tu código al controlar las formas en que se obtiene acceso a los valores y se modifican, de forma que tu código solo se utilice para lo que se diseñó. Al igual que la abstracción, la encapsulación coloca una capa que separa la complejidad subyacente de tu código de los programadores que podrían acceder a él.

En el proyecto, utilizaste una propiedad autoimplementada para que una variable fuera de solo lectura para las clases externas. Después, escribiste un getter y un setter para una propiedad con un campo de respaldo para evitar que se definiera a un número negativo. Ahora puedes dormir con tranquilidad al saber que ambos datos están encapsulados, protegidos del mal uso y de las malas intenciones.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
