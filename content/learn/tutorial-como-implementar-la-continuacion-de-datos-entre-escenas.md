[Image: image]

# ¿Cómo implementar la continuación de datos entre escenas?

Tutorial

foundational

+10XP

20 mins

40

(186)

Unity Technologies

[Image: ¿Cómo implementar la continuación de datos entre escenas?]Summary

En este tutorial, aprenderás a usar la continuación de datos para conservar información en diferentes escenas al tomar un color que el usuario seleccione en la Escena menú y aplicarlo a las unidades de transporte en la Escena principal. Al finalizar este tutorial, podrás realizar lo siguiente:

- Garantizar que los datos se conserven durante toda una sesión de la aplicación mediante el método DontDestroyOnLoad de Unity.
- Reconocer cuándo utilizar clases estáticas, *singletons* y variables estáticas para implementar la continuación de datos.
- Modificar un GameObject con un *script*que contenga las variables que se guardarán entre escenas.

Languages available:

EspañolEnglishEspañolEspañol

## 1. Descripción general

Q&A (0)

Ya configuraste algunos de los botones en la aplicación para que el usuario pueda hacer lo siguiente:

- Moverse entre las escenas Menu y Main.
- Salir de la aplicación (o finalizar el modo Play en el Editor).

A continuación, configuremos la aplicación para que cuando el usuario seleccione un color con los botones personalizados ColorPicker (Selector de color), ese color se aplique a los montacargas en la bodega cuando ejecuten la Escena.

Así es como podría verse en tu proyecto:

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

Para hacerlo, primero necesitas comprender algunos conceptos básicos de la **continuación de datos**.

Marcar paso como completado

## 2. ¿Qué es continuación de datos?

Q&A (0)

**Continuación de datos** significa hacer que los datos duren más que el proceso que se usó para crearlos. Algunos ejemplos de continuación de datos son los siguientes:

- El ícono específico del jugador seleccionado en un juego multijugador no recurrente (por ejemplo, un juego de trivias).
- La entrada de nombre al inicio de una aplicación y su visualización durante la sesión (por ejemplo, en una herramienta de encuestas).
- Tus avances en juegos de larga duración (por ejemplo, un RPG en una consola).
- Tu trabajo en un procesador de texto.

#### Continuación de datos entre escenas

En Unity, los datos creados dentro de una Escena están disponibles fácilmente dentro de esa Escena. Sin embargo, cuando un usuario pasa a otra Escena, ¿qué ocurre? Por lo general, los datos se pierden. La continuación de datos entre escenas es el proceso de transferir datos de una Escena a otra para darle al usuario una experiencia coherente mientras avanza a través de tu aplicación. En los primeros dos ejemplos, hay instancias de continuación de datos entre escenas; por lo general son experiencias de una sesión que utilizan varias escenas.

[Image: image]

**Continuación de datos entre sesiones**

Los otros dos ejemplos (juegos continuos y aplicaciones de procesamiento de palabras) por lo general son experiencias de varias sesiones. Los usuarios quieren guardar el avance que logran durante una sesión y después restaurarlo para continuar donde se quedaron. Estos son ejemplos de **continuación de datos entre sesiones**.

[Image: image]

Con frecuencia encontramos ambos tipos de continuación de datos en aplicaciones más complejas; los datos tienen que seguir al usuario mientras se mueve entre las Escenas y eso también tiene que guardarse y restaurarse en varias sesiones.

Marcar paso como completado

## 3. ¿Cómo revisar tu tarea?

Q&A (0)

Tu tarea para el proyecto de simulación de administración de recursos incluye hacer posible seleccionar colores en el menú inicial (Escena menú) y aplicarlos a los montacargas en la bodega (Escena principal).

Por el momento, los botones existen porque proporcionamos un *script* personalizado para ello. Los revisaste cuando configuraste otros botones en el tutorial anterior. Ahora vamos a implementar la continuación de datos entre escenas al hacer que los datos del color seleccionado estén disponibles en la Escena principal.

Para lograrlo, utilizarás lo siguiente:

- **DontDestroyOnLoad**: un método en Unity que marca un GameObject para que se guarde en la memoria, incluso cuando se carga o descarga una nueva Escena.
- **Clases estáticas** y **miembros de clases**: se puede obtener acceso a los miembros de clases estáticas desde cualquier lugar sin necesidad de referenciar un objeto específico. Quizás ya hayas usado algunas de ellas, tales como **Time.deltaTime** o **Vector3.forward**. No son un*time object* específico o un vector3 específico: el formato para los miembros de clases estáticas es ClassName.memberName.

¡Vamos a empezar!

Marcar paso como completado

## 4. ¿Cómo crear un nuevo Script?

Q&A (0)

Primero, necesitas crear un nuevo Script para que sea la clase estática donde almacenarás los datos que quieres continuar entre escenas:

**1.**  En la ventana Project, ve a **Assets** > **Scripts**.

**2.**   En la Escena menú, crea un nuevo Script y nómbralo «MainManager».

**3.**  En la Hierarchy, crea un nuevo GameObject vacío y nómbralo «MainManager». Asigna tu nuevo Script al GameObject y después abre el Script en tu IDE elegido.

**4.**  Elimina los métodos Start() y Update() predeterminados y después agrega el siguiente código para crear un miembro estático en la clase MainManager:

```csharp
public class MainManager : MonoBehaviour
{
    // Start() and Update() methods deleted - we don't need them right now

    public static MainManager Instance;

    private void Awake()
    {
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }
}
```

Este código te permite obtener el acceso al objeto MainManager desde cualquier otro Script.

Marcar paso como completado

## 5. ¿Cómo revisar el código?

Q&A (0)

Revisemos ese código línea por línea:

#### Declaración de miembro de clase.

```csharp
public static MainManager Instance;
```

Esta es la declaración del miembro de la clase estática. Nota la palabra clave **static** después de la palabra clave **public**. Estas palabras clave significan que los valores almacenados en este miembro de clase se compartirán con todas las instancias de esa clase.

Por ejemplo, si hubiese diez instancias de MainManager en tu Escena, todas compartirían el mismo valor almacenado en Instance. Si cualquiera de esos 10 MainManagers cambiaran su valor, también se cambiaría para los otros nueve.

#### Código del método Awake

A continuación, agregaste código al método Awake, al cual se llama tan pronto como se crea el objeto:

```csharp
Instance = this;
DontDestroyOnLoad(gameObject);
```

Esta primera línea de código almacena «this» en la Instance de miembro de clase: la instancia actual de MainManager. Ahora puedes llamar a MainManager.Instance desde cualquier otro Script (por ejemplo, el Script Unit) y obtener un enlace a esa instancia específica. No necesitas tener una referencia como la tendrías cuando asignas GameObjects a propiedades del Script en el Inspector.

La segunda línea de código marca el GameObject MainManager adjunto a este Script para que no se destruya cuando cambie la Escena.

Marcar paso como completado

## 6. ¿Cómo hacer pruebas en el Editor de Unity?

Q&A (0)

Probemos esos cambios en el Editor:

**1.** Regresa al Editor de Unity, abre la Escena menú e ingresa el modo Play.

**2.**  Revisa los GameObjects en la Hierarchy. El MainManager se movió de tu Escena normal a una Escena especial llamada DontDestroyOnLoad.

[Image: image]

**Nota:** Esta Escena también tiene un nuevo GameObject llamado [DebugUpdater]. Es un GameObject de depuración usado por Unity; puedes ignorarlo.

**3.** Selecciona **Start** para ejecutar la Escena principal. El GameObject MainManager sigue ahí. ¡Éxito!

**4.**  Selecciona **Back to menu** para regresar a la Escena anterior y revisar la Hierarchy.

[Image: image]

¡Oh no, ahora hay dos GameObjects MainManager! Esto ocurre porque MainManager nos acompañó desde la Escena principal hasta el menú, donde se encuentra la instancia original de MainManager. Esto podría causar problemas más adelante. Corrijámoslo.

Marcar paso como completado

## 7. ¿Cómo modificar el método Awake?

Q&A (0)

Necesitas un solo GameObject MainManager en todo momento, así que modifiquemos el método Awake para lograrlo:

**1.**  Regresa a MainManager.cs en tu IDE.

**2.**Actualiza el método **Awake**con el siguiente código:

```csharp
private void Awake()
{
    // start of new code
    if (Instance != null)
    {
        Destroy(gameObject);
        return;
    }
    // end of new code

    Instance = this;
    DontDestroyOnLoad(gameObject);
}
```

**3.**  Guarda los cambios.

**4.**  Regresa al Editor de Unity y averigua lo que pasa ahora cuando sigues el mismo proceso de prueba.

#### Revisa el nuevo código

Agregaste un enunciado condicional para revisar si Instance es null o no. La primera vez que ejecutas la Escena menú, ningún MainManager tendrá rellenada la variable Instance. Esto quiere decir que será nula, de manera que la condición no se cumplirá y el Script continuará como se escribió anteriormente.

Sin embargo, si después cargas la Escena menú nuevamente, ya habrá un MainManager en existencia de forma que la Instancia no será nula. En tal caso, la condición se cumple: el MainManager adicional se destruye y el Script sale ahí.

A este patrón se le llama **singleton**. Lo utilizas para asegurarte de que una **sola instancia**del MainManager pueda existir a la vez, de manera que actúe como punto de acceso central.

Marcar paso como completado

## 8. ¿Cómo almacenar y transmitir el color seleccionado?

Q&A (0)

Ya definiste un sistema para transmitir datos entre escenas en tu aplicación. Agreguemos un nuevo miembro público en MainManager para transmitir el color que el usuario seleccione:

**1.**  Regresa a MainManager.cs en tu IDE.

**2.**  Agrega un nuevo miembro de clase pública llamado TeamColor arriba del método Awake:

```csharp
public class MainManager : MonoBehaviour
{
    public static MainManager Instance;

    public Color TeamColor; // new variable declared

    private void Awake()
    {
        if (Instance != null)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        DontDestroyOnLoad(gameObject);
    }
}
```

**3.**  Guarda los cambios y regresa al Editor de Unity. Abre el Script MenuUIHandler.cs en tu IDE.

En este Script hay un método llamado **NewColorSelected**, al que se llama cuando el usuario elige un nuevo color. Obtengamos ese color y almacenémoslo en MainManager.

**4.**  Actualiza el método **NewColorSelected**con el siguiente código:

```csharp
public void NewColorSelected(Color color)
{
    // agrega código aquí para gestionar cuando se selecciona un color
    MainManager.Instance.TeamColor = color;
}
```

Y listo. El color que el usuario seleccione ahora se almacena en MainManager, de forma que puedes acceder a la variable TeamColor desde la Escena principal para obtenerlo. Ahora solo necesitas aplicarlo al montacargas en la bodega.

**5.**  Guarda los cambios y luego regresa al Editor de Unity. Abre el Script Unit.cs en tu IDE.

**6.**  Agrega un nuevo método **Start** con el siguiente código:

```csharp
private void Start()
{
    if (MainManager.Instance != null)
    {
        SetColor(MainManager.Instance.TeamColor);
    }
}
```

**7.**  Guarda los cambios.

Revisa el nuevo código

**SetColor**es un método que escribimos para ti, para definir un color para la unidad (el montacargas).

Ten en cuenta que verifica si MainManager.Instance es null antes de ajustar el color. MainManager estará ahí dado que se crea en la Escena menú inicial, entonces ¿para qué lo necesitamos?

Bien, si quieres realizar una prueba rápida, podrías querer iniciar la Escena principal directamente en el Editor sin pasar por la Escena menú. En tal caso, MainManager no existiría y MainManager.Instance será null. Este código evita un error en caso de que el programador ejecute la Escena principal por sí misma sin pasar por el menú principal para que sea más fácil realizar pruebas rápidas.

#### Prueba el resultado

Intenta probar de nuevo en el Editor de Unity: selecciona un color del menú antes de ejecutar la Escena principal y mira lo que ocurre.

Marcar paso como completado

## 9. Próximos pasos

Q&A (0)

Ya lograste la primera parte de la implementación de continuación de datos en la aplicación **continuación de datos entre escenas**.

En el siguiente tutorial, ampliarás sobre esto al implementar continuación de datos entre sesiones de la aplicación.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
