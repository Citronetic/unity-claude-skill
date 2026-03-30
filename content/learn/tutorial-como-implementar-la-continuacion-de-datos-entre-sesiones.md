[Image: image]

# ¿Cómo implementar la continuación de datos entre sesiones?

Tutorial

foundational

+10XP

20 mins

2

(127)

Unity Technologies

[Image: ¿Cómo implementar la continuación de datos entre sesiones?]Summary

En este tutorial, escribirás código para guardar y cargar el color que el usuario seleccione para que continúe entre las sesiones de la aplicación. Al finalizar este tutorial, podrás realizar lo siguiente:

- Llamar los métodos de inicio adecuados en la secuencia de inicialización de la aplicación.
- Almacenar y organizar datos al aplicar estructuras de datos tales como listas y diccionarios.
- Guardar datos de usuario en la secuencia de apagado de la aplicación.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

En este momento, cuando pruebes la aplicación en proceso en el Editor de Unity, el color que selecciones para los montacargas en la bodega no se guardarán la siguiente vez que pruebes la aplicación. Si creas una compilación de esta aplicación, será una experiencia independiente cada vez que el usuario la ejecute.

Sería útil guardar el último color elegido por el usuario para que se seleccione automáticamente cuando inicia la aplicación. En este tutorial, desarrollarás sobre el trabajo previo para implementar la continuación de datos entre escenas y **entre sesiones**.

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

**Consejo:** Si tomaste un descanso entre este tutorial y el anterior, podrías serte útil revisar la [introducción a la continuación de datos](https://learn.unity.com/tutorial/implement-data-persistence-between-scenes#60b740afedbc2a5522dbb288) antes de continuar.

Marcar paso como completado

## 2. ¿Cómo evaluar tu resumen?

Q&A (0)

En este tutorial, vas a escribir el color seleccionado por el usuario en un archivo. Después, vas a configurar MainManager para revisar si ese archivo existe cuando se inicia la aplicación. Si el archivo existe, entonces MainManager leerá el color almacenado y ajustará el selector de colores a ese color.

Antes de comenzar, toma algunos minutos para revisar el resumen del proyecto. Imagina que realizarás esta tarea por tu cuenta. Escribe las respuestas a las siguientes preguntas:

- ¿Qué necesitas implementar y dónde lo implementarás? Escribe tus ideas ahora para luego compararlas con el método que utilicemos.
- ¿Dónde has encontrado antes una funcionalidad similar, en «¿Cómo crear con código?» u otras experiencias de aprendizaje? Incluso si no tienes acceso al código, piensa en ejemplos de continuación de datos entre sesiones que entiendas claramente.
- Además de Unity Learn, ¿qué recursos podrían ayudarte a lograrlo? Piensa en opciones dentro del ecosistema de Unity y más allá.

Un ejercicio muy útil es tomar unos minutos para reflexionar sobre lo que ya sabes antes de comenzar una tarea, particularmente si esa tarea parece desafiante. Si finalizaste **[Aspectos básicos de Unity](https://learn.unity.com/pathway/unity-essentials),** exploraste [la mentalidad que los creadores consolidados tienen para aprender Unity](https://learn.unity.com/tutorial/how-our-established-creators-learned-unity#5fa44852edbc2a001f616c92). Es un momento excelente para recordar ese enfoque.

Identificar las herramientas a tu disposición y repasar tu conocimiento previo puede proporcionarte oportunidades realmente útiles para pensar en distintos métodos para realizar una tarea. Puedes utilizar este método para continuar con tu recorrido de aprendizaje más allá de este trayecto. No es común que haya una sola forma de hacer algo.

Marcar paso como completado

## 3. ¿Cómo puede haber continuación de datos entre sesiones?

Q&A (0)

Para que exista continuación de datos entre sesiones, necesitan almacenarse de alguna manera. En tu caso, necesitarás convertir el color que tu usuario seleccione a un formato que pueda almacenarse y después leerse cuando cargue la aplicación nuevamente.

El proceso de convertir datos complejos a un formato en el que pueda almacenarse se llama **serialización**. Cuando estés listo para acceder a los datos nuevamente, el proceso de convertirlos de regreso se llama **deserialización**.

[Image: image]

Hay distintos formatos que puedes usar para almacenar datos en función de qué son dichos datos y qué quieres hacer con ellos. En tal caso, utilizarás el formato **JSON**.

Marcar paso como completado

## 4. ¿Qué es JSON?

Q&A (0)

JSON es un formato de texto utilizado para almacenar e intercambiar datos entre plataformas. Se desarrolló originalmente para la red y su nombre completo es **J**ava**S**cript **O**bject **N**otation. Está basado en JavaScript, pero es un lenguaje independiente; puedes usarlo si programas en código C# o con cualquier otro lenguaje de programación.

El formato JSON almacena datos en un par **key:value (clave:valor)**. La clave es una secuencia de caracteres y el valor puede ser:

- un número
- una secuencia de caracteres
- un booleano (true/false)
- un conjunto de valores
- otro objeto JSON

##### ¿Cómo funciona este formato?

La siguiente secuencia de caracteres JSON codifica un objeto que almacena la información básica de una persona:

```csharp
{
  "name": "John",
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York"
  }
  "pet": [“dog”, “cat”]
}
```

Analicemos el ejemplo:

- Cada **objeto** está rodeado por paréntesis tipo llave ( **{ }** ).
- Cada **entrada** está en un formato de par key:value, separada de la siguiente por una coma.
- La entrada “pet” es un conjunto de secuencias de caracteres, los valores del conjunto se enumeran entre los corchetes ( **[ ]** ).
- El valor asociado con la entrada “address” también se encuentra en llaves debido a que es otro objeto JSON.

Marcar paso como completado

## 5. ¿Por qué JSON es una buena opción para tu tarea?

Q&A (0)

JSON se desarrolló para intercambiar datos entre sistemas muy diferentes, lo cual lo convierte en una buena opción para guardar datos en tu aplicación. Unity tiene una clase de ayuda llamada **JsonUtility**, que te permite tomar una clase serializable y transformarla en su representación JSON. Veamos cómo funciona, tanto para los datos serializados como los deserializados.

**Serialización de datos**

Considera la siguiente clase PlayerData:

```csharp
[Serializable]
public class PlayerData
{
    public int level;
    public Vector3 position;
    public string playerName;
}
```

Imagina que quieres pasar estar clase a JsonUtility con los siguientes valores:

```csharp
PlayerData myData = new PlayerData();
myData.level = 1;
myData.position = new Vector3(3.0f, 4.4f, 2.3f);
myData.playerName = "John";
```

Llamar **string json = JsonUtility.ToJson(myData);** resultará en la siguiente secuencia de caracteres JSON:

```csharp
{
    “level”: 1,
    “position”: {
        “x” : 3.0,
        “y” : 4.4,
        “z” : 2.3 },
    “playerName”: “John”
}
```

Nota que como **position**es un Vector3, está codificado como un nuevo objeto JSON con tres claves: **X**, **Y** y **Z**. Esto se debe a que la clase Vector3 (extremadamente simplificada) es:

```csharp
[Serializable]
public class Vector3
{
    public float x;
    public float y;
    public float z;
}
```

**Deserialización de datos**

JsonUtility también tiene un método que hace lo inverso al proceso que acabas de ver: FromJson<T>.

Este método tomará una secuencia de caracteres que contiene algunos datos JSON y creará una instancia del objeto con sus campos rellenados. Utiliza un argumento modelo, como habrás notado al revisar la secuencia de caracteres JSON PlayerData, el tipo original de esos datos no se almacena en el archivo JSON. Unity necesita el argumento modelo para leer el valor correcto en el campo correcto.

Para ampliar el ejemplo, si llamas a **PlayerData myData = JsonUtility.FromJson<PlayerData>(json);** rellenará **myData** con los valores en la secuencia de caracteres JSON.

**Limitaciones de JsonUtility**

Hay algunas limitaciones para la clase JsonUtility de Unity, la cual se diseñó para maximizar el rendimiento y la simplicidad. JsonUtility no funciona en diccionarios, listas, conjuntos o tipos primitivos.

Como sería de esperar, JsonUtility solo funciona en el **Serializable type** — MonoBehaviour o en las otras clases/estructuras que escribas a las que puedas agregar el atributo **[Serializable]**. Si intentas guardar una clase que contiene varios fragmentos de datos y uno de ellos no se puede guardar, probablemente sea porque no es serializable. Por ejemplo, si conviertes una clase a JSON que tiene un diccionario en el centro, el diccionario no se guardará porque no es serializable. Si algo parece que no se guarda de forma correcta en una clase, confirma que sea un tipo serializable.

Para obtener más información, consulta [la documentación de Unity sobre la Serialización JSON](https://docs.unity3d.com/Manual/JSONSerialization.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953712354).

**Soluciona problemas con el proceso de guardar datos**

Como sería de esperar, JsonUtility solo funciona en el tipo **Serializable** — MonoBehaviour o en las otras clases/estructuras que escribas a las que puedas agregar el atributo **[Serializable]**.

Si intentas guardar una clase que contiene varios fragmentos de datos y uno de ellos no se puede guardar, probablemente sea porque no es serializable. Por ejemplo, imagina que convertiste a JSON una clase que tiene muchos datos y un diccionario en medio. Ese diccionario no se guardará porque no es serializable. Si algo parece que no se guarda de forma correcta en una clase, confirma que sea un tipo serializable.

Marcar paso como completado

## 6. ¿Cómo agregar una clase SaveData?

Q&A (0)

Para guardar y cargar el último color seleccionado por el usuario, necesitarás tres cosas en la clase MainManager:

1. Una clase **SaveData** **(Guardar datos)**que almacene el color.
2. Un **método Save que** transforme esa clase a formato JSON y lo escriba en un archivo.
3. Un **método Load que** transforme los datos del archivo JSON de regreso a la clase SaveData.

Comencemos con la clase SaveData:

**1.**  Abre MainManager.cs en tu IDE.

**2.**Agrega el siguiente código al final de la clase MainManager (dentro del alcance de esta llave de cierre):

```csharp
[System.Serializable]
class SaveData
{
    public Color TeamColor;
}
```

**3.**La última línea se resaltará como error en tu IDE porque necesitamos agregar un nuevo espacio de nombres al Script. En la parte superior de tu Script, agrega lo siguiente:

```csharp
using System.IO;
```

Revisa el nuevo código

SaveData es una clase simple, que solo contiene el color que el usuario seleccionó. Considera que agregaste un atributo [System.Serializable] encima de ella. Esta línea es requerida para JsonUtility, como acabas de aprender; solo transformará cosas a JSON si están etiquetadas como Serializable.

¿Por qué creas una clase y no le otorgas la instancia MainManager directamente a JsonUtility? La mayor parte del tiempo no guardarás todo dentro de tus clases. Es más eficaz y se recomienda utilizar una clase pequeña que solo contenga los datos específicos que quieras guardar.

Marcar paso como completado

## 7. ¿Cómo agregar un método SaveColor?

Q&A (0)

A continuación, agreguemos un método SaveColor (Guardar color):

**1.**Deja una línea libre después de la clase SaveData.

**2.** Agrega el siguiente código:

```csharp
public void SaveColor()
{
    SaveData data = new SaveData();
    data.TeamColor = TeamColor;

    string json = JsonUtility.ToJson(data);

    File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
}
```

**3.**La última línea se resaltará como error en tu IDE porque necesitamos agregar un nuevo espacio de nombres al Script. En la parte superior de tu Script, agrega lo siguiente:

```csharp
using System.IO;
```

Revisa el nuevo código

Desglosemos este nuevo método en secuencia. Primero, creaste una nueva instancia de los datos guardados y rellenaste su miembro de la clase de color de equipo con la variable TeamColor guardada en MainManager:

```csharp
SaveData data = new SaveData();
data.TeamColor = TeamColor;
```

Después, transformaste esa instancia de JSON con **JsonUtility.ToJson**:

```csharp
string json = JsonUtility.ToJson(data);
```

Por último, usaste el método especial **File.WriteAllText**para escribir una secuencia de caracteres a un archivo:

```csharp
File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
```

El primer parámetro es el directorio del archivo. Usaste un método de Unity llamado **Application.persistentDataPath** que te dará una carpeta donde podrás guardar datos que sobrevivirán entre actualizaciones o reinstalaciones de la aplicación y se les adjunta el nombre de archivo savefile.json.

**Nota:** La Unity Scripting API [enumera los directorios reales por plataforma](https://docs.unity3d.com/ScriptReference/Application-persistentDataPath.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953712354).

El segundo parámetro es el texto que quieres escribir en ese archivo; en este caso, tu JSON.

Marcar paso como completado

## 8. ¿Cómo agregar un método LoadColor?

Q&A (0)

Ahora agreguemos un método LoadColor (Cargar color):

**1.**Deja una línea libre después del método SaveColor.

**2.** Agrega el siguiente código:

```csharp
public void LoadColor()
{
    string path = Application.persistentDataPath + "/savefile.json";
    if (File.Exists(path))
    {
        string json = File.ReadAllText(path);
        SaveData data = JsonUtility.FromJson<SaveData>(json);

        TeamColor = data.TeamColor;
    }
}
```

Revisa el nuevo código

Este método es una versión inversa del método SaveColor:

```csharp
string path = Application.persistentDataPath + "/savefile.json";
```

Utiliza el método**File.Exists** para verificar si existe un archivo .json. De no ser así, entonces nada se guardó y no se requiere ninguna otra acción. Si el archivo no existe, entonces el método leerá su contenido con **File.ReadAllText**:

```csharp
if (File.Exists(path))
{
    string json = File.ReadAllText(path);
```

Entonces dará el texto resultante a **JsonUtility.FromJson** para transformarlo nuevamente en una instancia de SaveData:

```csharp
SaveData data = JsonUtility.FromJson<SaveData>(json);
```

Por último, definiremos el TeamColor al color guardado en ese SaveData:

```csharp
TeamColor = data.TeamColor;
```

Verifica otra vez tu nuevo código

Antes de continuar, verifica otra vez el código que agregaste para asegurarte de que se encuentre dentro del alcance de la clase MainManager:

```csharp
[System.Serializable]
class SaveData
{
    public Color TeamColor;
}

public void SaveColor()
{
    SaveData data = new SaveData();
    data.TeamColor = TeamColor;

    string json = JsonUtility.ToJson(data);

    File.WriteAllText(Application.persistentDataPath + "/savefile.json", json);
}

public void LoadColor()
{
    string path = Application.persistentDataPath + "/savefile.json";
    if (File.Exists(path))
    {
        string json = File.ReadAllText(path);
        SaveData data = JsonUtility.FromJson<SaveData>(json);

        TeamColor = data.TeamColor;
    }
}
```

Marcar paso como completado

## 9. ¿Cómo cargar y guardar el color en la aplicación?

Q&A (0)

Ya casi terminas, pero primero necesitas cargar el color guardado (de haberlo) cuando inicie la aplicación y guardar el color al salir. Implementemos eso ahora.

**1.**  En MainManager.cs (el cual todavía debes tener abierto), encuentra el método **Awake**.

**2.**  Llama al método **LoadColor**al **final de Awake**:

```csharp
LoadColor();
```

**3.**  Guarda tus cambios y después abre MenuUIHandler.cs en tu IDE.

**4.**   Al final del método **Start**, agrega el siguiente código:

```csharp
ColorPicker.SelectColor(MainManager.Instance.TeamColor);
```

Esta línea preseleccionará el color guardado en el MainManager (si hay alguno) cuando se ejecute la pantalla del menú.

**5.**Al comienzo del método **Exit**, agrega el siguiente código:

```csharp
MainManager.Instance.SaveColor();
```

Esta línea guardará el último color seleccionado por el usuario cuando se cierre la aplicación.

Marcar paso como completado

## 10. ¿Cpomo agregar una funcionalidad de prueba?

Q&A (0)

Por último, agreguemos una funcionalidad de prueba rápida al MenuUIHandler para que puedas guardar y cargar el color desde la aplicación de forma instantánea.

**1.**  Agrega los siguientes dos métodos al MenuUIHandler.cs:

```csharp
public void SaveColorClicked()
{
    MainManager.Instance.SaveColor();
}

public void LoadColorClicked()
{
    MainManager.Instance.LoadColor();
    ColorPicker.SelectColor(MainManager.Instance.TeamColor);
}
```

**2.** Guarda los cambios.

**3.** Enlaza estos métodos a los botones Load y Save Color. Si necesitas ver el resumen de este proceso, revisa cómo [configuraste el botón Start](https://learn.unity.com/tutorial/create-a-scene-flow#60b73e9cedbc2a54fb1cc8d4).

#### Haz pruebas en el Editor

Prueba los cambios a la aplicación detenidamente, incluidos los procesos estándar de guardar al salir y cargar al iniciar.

Marcar paso como completado

## 11. Próximos pasos

Q&A (0)

En este tutorial, implementaste la continuación de datos entre sesiones en tu aplicación, de manera que el último color seleccionado por el usuario se preseleccione cuando vuelva a cargar la aplicación. ¡Excelente!

A continuación, prepararás una entrega donde aplicarás lo que has aprendido para cumplir con una tarea de juego básica en un nuevo proyecto de Unity.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
