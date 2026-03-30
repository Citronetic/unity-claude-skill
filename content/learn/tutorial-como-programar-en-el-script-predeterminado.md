[Image: image]

# ¿Cómo programar en el script predeterminado?

Tutorial

foundational

+10XP

30 mins

3

(634)

Unity Technologies

[Image: ¿Cómo programar en el script predeterminado?]Summary

En este tutorial, podrás realizar lo siguiente:

- Identificar los componentes del *script* predeterminado de un *script* nuevo.
- Editar el componente de un *script* en tu entorno de desarrollo integrado (Integrated Development Environment, IDE).
- Mostrar un mensaje de un *script* en la ventana Console (Consola) del Editor de Unity.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Cada vez que creas un *script* nuevo, Unity inicia tu sesión con un ***script* predeterminado** que incluye las líneas de código básicas que necesitarás. En este tutorial, te mostraremos el *script* predeterminado, escribiremos algo de código para usar las funciones proporcionadas y te ofreceremos materiales para que sigas aprendiendo.

Marcar paso como completado

## 2. El script predeterminado

Q&A (0)

Cuando creas un *script* nuevo, también creas una clase pública nueva que se deriva de la clase incorporada llamada **MonoBehaviour**. Cuando le asignaste un nombre al componente, el mismo nombre se aplicó a esta clase y al nombre de archivo de tu *script*. Es importante que esos nombres coincidan.

En el código, verás una **public class** ya configurada. Se llama «HelloWorld», al igual que el nombre del *script*. Estos nombres siempre tienen que ser iguales. Si cambias el nombre del *script*, también tienes que cambiar el nombre de esta clase.

Este *script* también contiene dos**funciones**, `Start()` y `Update()`.

[Image: image]

La función Start se ejecuta una vez al inicio del juego y la función Update se ejecuta en cada fotograma del juego (veremos más sobre fotogramas más adelante).

Marcar paso como completado

## 3. ¿Cómo editar la función Start?

Q&A (0)

**1.**Agrega el siguiente código a la función Start, entre las dos {} llaves:

```csharp
Debug.Log("Hello World");
```

[Image: image]

**2.**Guarda el *script* con Ctrl + S (Windows) o Cmd + S (Mac).

**3.**Si la ventana Console no se muestra en el Editor de Unity, ábrela con Ctrl + Shift + C (Windows) o Cmd + Shift + C (Mac). La **ventana Console** es donde puedes leer los mensajes de los *scripts*, incluidos los errores y las advertencias, mientras se ejecutan los *scripts*.

**4.** Ejecuta el juego y observa la ventana Console. Aparece el mensaje «Hello World» ahí.

[Image: image]Marcar paso como completado

## 4. ¿Cómo editar la función Update?

Q&A (0)

**1.**Abre el *script* otra vez y mueve la línea Debug.Log a la función Update.

[Image: image]

**2.**Guarda el *script* con Ctrl + S (Windows) o Cmd + S (Mac).

**3.**Selecciona la opción **Collapse (Contraer)**en la ventana Console, si no está seleccionada. Esta opción simplificará la pantalla durante el próximo paso.

**4.**Ejecuta el juego y observa la ventana Console. Esta vez, un contador aparece al lado del mensaje «Hello World». Este contador muestra la cantidad de veces que el *script* ha ejecutado y mostrado el mensaje.

[Image: image]

Como el *script* ahora está adentro de la función Update, se ejecuta una vez por cada fotograma del juego. Un **fotograma**es una sola imagen en una serie, como un fotograma de una película de animación que crea el movimiento en la pantalla. Al presionar el botón **Play**y al mirar el juego en la vista de Juego, la función Update se ejecuta muchas veces continuamente.

Marcar paso como completado

## 5. ¿Cómo agregar una propiedad con una variable?

Q&A (0)

Para demostrar el concepto de componentes con *script*, agregarás una variable a tu *script* y modificarás su valor en la ventana Inspector. Una **variable**contiene un valor que puede variar. El tipo de valor que es más probable que encuentres es int (números enteros), float (números de punto flotante, es decir, números que pueden tener decimales), string (texto) y Boolean (valores verdadero o falso). En los componentes Transform que has usado, los valores float para X, Y y Z de la propiedad Scale son variables. En tu *script*, reemplazarás el mensaje «Hello, World!» con una variable string que puedes modificar en la ventana Inspector mediante el componente HelloWorld. Con esta variable, tu GameObject tendrá una propiedad que puedes manipular desde el Editor de Unity.

**1.**Abre el *script* en Visual Studio otra vez.

**2.**Agrega una nueva variable como se muestra a continuación:

```csharp
public string myMessage;
```

**3.**Cambia el comando Debug.Log de la siguiente manera:

```csharp
Debug.Log(myMessage);
```

[Image: image]

**4.**Guarda el *script* (Ctrl + S/Cmd + S).

**5.**En el Editor de Unity, selecciona el GameObject ScriptObject y observa el componente HelloWorld en el Inspector. Aparece una nueva propiedad donde puedes escribir un mensaje personalizado.

[Image: image]

Ingresa el mensaje que quieras.

**6.**Ejecuta el juego y observa la ventana Console. ¡Ahora aparece tu mensaje personalizado!

[Image: image]Marcar paso como completado

## 6. Próximos pasos

Q&A (0)

Como puedes ver, los *scripts* en Unity pueden ser muy eficaces: puedes hacer que algo suceda durante la experiencia del usuario y puedes agregar variables para que estén disponibles en la ventana Inspector del Editor de Unity, de modo que puedas modificar los valores más tarde sin editar tu *script*. A continuación, usaremos un *script* para hacer que algo suceda en la Escena.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
