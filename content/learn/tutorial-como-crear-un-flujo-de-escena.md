[Image: image]

# ¿Cómo crear un flujo de Escena?

Tutorial

foundational

+10XP

20 mins

3

(137)

Unity Technologies

[Image: ¿Cómo crear un flujo de Escena?]Summary

En este tutorial configurarás un flujo de Escena entre las Escenas menú y principal, y el flujo de salida de la aplicación en la aplicación.

Al finalizar este tutorial, podrás realizar lo siguiente:

- Llamar los métodos de inicio apropiados en la secuencia de inicialización de la aplicación.
- Cargar la siguiente Escena cuando se desencadena por un evento.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Como viste en el tutorial anterior, la aplicación con la que trabajarás en esta misión tiene varias Escenas distintas por las que el usuario necesita navegar.

En este momento, la aplicación inicia directamente en la Escena principal. En una aplicación en tiempo real, habría un menú al inicio de la aplicación donde el usuario podría modificar los ajustes o salir. En este tutorial, podrás crear ese menú.

Marcar paso como completado

## 2. ¿Cómo revisar el flujo de Escena requerido?

Q&A (0)

Preparamos un menú básico Canvas de interfaz de usuario en la Escena principal, pero no funciona desde el principio.

Si necesitas refrescar tu memoria, tómate el tiempo de revisar la descripción general de todo el flujo de la Escena en la [tarea del proyecto](https://connect-prd-cdn.unity.com/20210602/7105725f-6cb4-4171-a399-ba1b485a7e96/Project_Brief.pdf?_gl=1*wjdq4t*_ga*NDI3MDM1NDEuMTU5MjI0OTM3NA).

[Image: image]

Comencemos por ajustar la aplicación para que el usuario pueda realizar lo siguiente:

- Ejecutar la Escena principal.
- Salir de la aplicación.

Marcar paso como completado

## 3. ¿Cómo revisar el menú en la interfaz de usuario?

Q&A (0)

Revisemos el Canvas de la interfaz de usuario que ya se creó para este proyecto:

**1.**  Si todavía no lo haces, abre tu proyecto en Unity Hub.

**2.**  En la ventana Project, ve a **Assets** > **Scenes** y abre la Escena menú.

**3.**  En la barra de control de la vista de Escena, define la vista de Escena a **modo 2D**.

[Image: image]

**4.** En la Hierarchy, expande el Canvas y después el GameObject Container, el cual contiene dos GameObjects más: StartContainer y Exit.

[Image: image]

**5.** Expande el GameObject StartContainer.

[Image: image]

StartContainer contiene cuatro GameObjects de botones agrupados en la sección StartContainer del Canvas:

- **Botón Start (Inicio)**(StartButton)
- Un misterioso recuadro blanco (ColorPicker)
- **Botón Save Color (Guardar color)** (Save)
- **Botón Load Color (Cargar color)**(Load)

El menú todavía no es funcional, pero puedes revisar el funcionamiento de los botones de selección de color. Intentémoslo.

**6.**  En la barra de herramientas, selecciona **Play** para iniciar el modo Play. Notarás que ahora hay cuatro botones de selección de colores disponibles en el rectángulo blanco.

[Image: image]

**7.**  Sal del modo Play.

Los botones de selección de colores se controlan en el Script MenuUIHandler.cs en el GameObject Canvas. Es un Script personalizado que se escribió para este proyecto. Por el momento, lo único que hace es inicializar los botones de colores. Agreguemos dos métodos: uno para iniciar la Escena principal y otro para salir de la aplicación.

Marcar paso como completado

## 4. ¿Cómo escribir un método para cargar la Escena principal?

Q&A (0)

Comencemos por escribir el método para cargar la Escena principal en el menú:

**1.**  En la ventana Project, ve a **Assets** > **Scripts**. Haz doble clic en MenuUIHandler.cs para abrir el Script en tu IDE predeterminado. Encontrarás el siguiente Script preparado para ti:

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Sets the script to be executed later than all default scripts
// This is helpful for UI, since other things may need to be initialized before setting the UI
[DefaultExecutionOrder(1000)]

public class MenuUIHandler : MonoBehaviour
{
    public ColorPicker ColorPicker;

    public void NewColorSelected(Color color)
    {
        // add code here to handle when a color is selected
    }

    private void Start()
    {
        ColorPicker.Init();
        // this will call the NewColorSelected function when the color picker has a color button clicked
        ColorPicker.onColorChanged += NewColorSelected;
    }
}
```

**2.**  En el método **Start**, agrega el siguiente nuevo método llamado **StartNew**:

```csharp
public void StartNew()
{
    SceneManager.LoadScene(1);
}
```

**SceneManager** es la clase que maneja todo lo relacionado con cargar y descargar escenas.

**3.**  Guarda tu archivo y regresa al Editor de Unity.

Toma un momento para revisar la Consola. Podrías ver el siguiente mensaje de error: «The name 'SceneManager' does not exist in the current context». Esto ocurre porque SceneManager está agrupado en un **espacio de nombres** distinto (es decir, en un grupo de código diferente) del que se incluye en este archivo de *script*.

Si no ves este error, tu IDE podría haberlo agregado automáticamente cuando escribiste «SceneManager». Realiza los siguientes pasos para confirmar que se agregó el espacio de nombres.

**4.**  Regresa al editor de *scripts*. Los espacios de nombres incluidos en un *script* pueden encontrarse en la parte superior del archivo en las líneas que comienzan con **«using»**.

```csharp
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

Ya hay diversos espacios de nombres en este Script. La línea **using UnityEngine;**, por ejemplo, quiere decir que todo en el espacio de nombres UnityEngine (es decir, todas las clases que has usado hasta ahora, tales como **Vector3** y **Transform**) puede usarse en este archivo de *script*.

**5.** Agrega el siguiente espacio de nombres a la lista en el Script y después guarda tus cambios:

```csharp
using UnityEngine.SceneManagement;
```

Ahora el espacio de nombres SceneManagement se incluye en este Script y puede usarse en la Escena.

Marcar paso como completado

## 5. ¿Cómo definir el índice de la Escena menú?

Q&A (0)

A continuación, preparémonos para configurar el botón **Start**al ajustar el índice de la Escena menú:

**1.** Antes de regresar al Editor, toma un momento para revisar la instrucción que escribiste en tu nuevo método para cargar la Escena: SceneManager.LoadScene(1);

El parámetro LoadScene (Cargar escena) es un número, pero ¿a qué se refiere? Es el **índice** de la Escena que quieres cargar. Puedes definir el índice de una Escena en la ventana Build Settings (Ajustes de versión).

**2.**En el menú superior del Editor de Unity, ve a **File** > **Build Settings.**En la sección superior en la ventana es **Scenes In Build (Escenas en la versión)**, donde se define el índice de la Escena. Por el momento, solo la Escena principal se incluye en la lista.

**3.** En la ventana Project, navega a la carpeta **Scenes**, después arrastra y suelta la Escena menú en la sección **Scenes in Build**. **Menu**necesita estar arriba de **Main**en la lista para que tenga el valor menor en el índice (**0**). Si lo necesitas, selecciona y arrastra los elementos de la lista para cambiar su orden.

[Image: image]Marcar paso como completado

## 6. ¿Cómo configurar el botón Start?

Q&A (0)

Ahora ya estás listo para configurar el botón **Start**:

**1.** En la Hierarchy, selecciona el GameObject StartButton (que es un elemento secundario del StartContainer).

**2.** En el Inspector, encuentra el componente Button.

**3.**  Encuentra la propiedad **On Click ()**. Ahí es donde puedes definir los eventos que Unity llamará cuando el usuario seleccione el botón. Selecciona **Add** (**+**) para agregar un nuevo conjunto de Eventos.

**4.** Arrastra y suelta el GameObject Canvas al campo destino en el evento On Click, bajo la lista desplegable **Runtime Only** para asignarlo.

[Image: image]

El GameObject Canvas tiene el componente MenuUIHandler anexado.

**5.**En el menú desplegable **Function (Función)**, selecciona **MenuUIHandler** > **StartNew**.

[Image: image]

**6.**Guarda los cambios, ve a la barra de herramientas y selecciona **Play** para iniciar el modo Play.

**7.**  Intenta seleccionar el botón **Start**; verás que ejecuta la Escena principal. Por el momento no podrás regresar de esa Escena. Cuando termines, recuerda salir del modo Play.

Marcar paso como completado

## 7. ¿Cómo escribir un método para salir de la aplicación?

Q&A (0)

Ahora configuremos el botón**Exit** en la Escena menú:

**1.**  Regresa a MenuUIHandler.cs en tu IDE.

**2.**En el método **StartNew**, agrega el siguiente método llamado **Exit (Salir)**:

```csharp
public void Exit()
{
    Application.Quit();
}
```

Las instrucciones llaman al método para cerrar una aplicación: **Application.Quit()**.

**3.**Guarda y regresa al Editor de Unity, después prueba el botón **Exit** en el modo Play. ¿Funciona? Antes de continuar, toma un momento para considerar por qué ocurre esto.

#### ¿Cuál es el problema aquí?

El botón no funciona en este momento porque **Application.Quit** solo funciona en la aplicación creada, no al realizar pruebas en el Editor. Para hacer que funcione de forma similar ahí, necesitas utilizar un método especial para detener el PlayMode. Pero, ¿cómo puedes cambiar el código para que ejecute diferentes líneas en función de dónde se ejecuta la aplicación?

Ahí es donde la **compilación condicional** entra en juego. Puedes utilizar la compilación condicional para diversificar el código con base en dónde se compiló: en el Editor o en una versión.

Marcar paso como completado

## 8. ¿Cómo revisar tu método con compilación condicional?

Q&A (0)

Revisa tu método con compilación condicional:

**1.**  Regresa a MenuUIHandler.cs en tu IDE.

**2.**Actualiza el método **Exit**con el siguiente código:

```csharp
public void Exit()
    {
#if UNITY_EDITOR
        EditorApplication.ExitPlaymode();
#else
        Application.Quit(); // original code to quit Unity player
#endif
    }
```

**3.**  Guarda los cambios.

#### Revisa el nuevo código condicional

Pero, ¿qué significa este código? Las líneas que comienzan con # no son «código» en realidad. No se compilarán ni se ejecutarán; en realidad son instrucciones para el compilador. Sin embargo, es similar al código que has visto anteriormente.

Convirtámoslo en algo un poco más familiar.

```csharp
if (UNITY_EDITOR)
{
    // run this code
}
else
{
    // run this code
}
```

Como este enunciado condicional **if** es una instrucción para el compilador, la parte que no es verdadera se eliminará completamente.

En tu caso:

- Cuando el código se compila dentro del Editor, entonces UNITY_EDITOR es true, conservará el código **EditorApplication.ExitPlaymode()** y descartará Application.Quit.
- Cuando compilas un perfil de juego, UNITY_EDITOR será false, y por ende conservará **Application.Quit()**y descartará EditorApplication.ExitPlaymode() !

Marcar paso como completado

## 9. ¿Cómo agregar un nuevo espacio de nombres?

Q&A (0)

Si regresas al Editor de Unity, podrías encontrar un error conocido en la Console: «The name 'EditorApplication' does not exist in the current context».

Al igual que SceneManager, **EditorApplication** está en otro espacio de nombres; esta vez, ese espacio de nombres es **UnityEditor**, que solo está disponible dentro del Editor de Unity, así que la solución es un poco diferente:

**1.**  Regresa a MenuUIHandler.cs en tu IDE.

**2.**Agrega el siguiente código al final de la lista de espacios de nombres.

```csharp
#if UNITY_EDITOR
using UnityEditor;
#endif
```

Agregaste instrucciones condicionales al compilador en relación con el espacio de nombres **#if UNITY_EDITOR**, así que ese espacio de nombres solo se incluirá cuando compiles dentro del Editor de Unity.

Si no agregaste un enunciado condicional **if** para el compilador, entonces cuando intentes compilar un perfil de juego independiente, se producirá un error que indica que no puede encontrar UnityEditor. Esto se debe a que no se incluye en una versión del jugador. (Si quieres probarlo, elimina las instrucciones condicionales y haz la prueba).

Cuando crees una versión de un jugador, descartará la línea de código y no intentará importar el espacio de nombres. Por otro lado, si seleccionas **Exit** mientras pruebas en el Editor, saldrá del modo Play.

Marcar paso como completado

## 10. Desafío: Configura la transición de regreso a la Escena menú

Q&A (0)

Ahora los usuarios pueden ir a la Escena principal y salir de la aplicación desde el menú de inicio, pero por el momento no pueden regresar desde ese menú hasta la Escena principal.

Creamos un botón **Back to menu (Regresar al menú)** en la Escena principal, pero necesitarás hacerlo funcionar.

Recuerda:

- Puedes encontrar el GameObject del botón en el GameObject Canvas.
- El GameObject Canvas tiene el componente UI Main Scene (Script) anexado; este controla la interfaz de usuario en la Escena principal.
- Puedes revisar el proceso que seguiste en [Configura el botón Start](https://learn.unity.com/tutorial/create-a-scene-flow#60b73e9cedbc2a54fb1cc8d4) si tienes algún problema.
- Prueba los cambios en el modo Play para asegurarte de que funciona correctamente.

Marcar paso como completado

## 11. Próximos pasos

Q&A (0)

¡Ya conectaste tus escenas a la interfaz de usuario para cumplir la tarea de esta misión! Pero todavía falta algo. Los botones de selección de color todavía no funcionan.

En el siguiente tutorial, agregarás esta funcionalidad al implementar continuación de datos.

#### ¡Dale un toque personal!

Si el menú que creamos es un poco aburrido para tu gusto, no te preocupes: puedes personalizar la apariencia del menú predeterminado o crear el tuyo desde cero. Es una excelente oportunidad para consolidar tu trabajo en [¿Cómo crear con código? Unidad 5. Interfaz de usuario.](https://learn.unity.com/project/unit-5-user-interface?uv=2020.3&courseId=5cf96c41edbc2a2ca6e8810f)

**Importante:** Si creas tu propio menú, asegúrate de que incluya los mismos botones que utilizamos; de no hacerlo, el usuario no podrá completar las interacciones requeridas en la aplicación.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
