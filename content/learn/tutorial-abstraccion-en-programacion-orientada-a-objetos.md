[Image: image]

# Abstracción en programación orientada a objetos

Tutorial

foundational

+10XP

20 mins

4

(109)

Unity Technologies

[Image: Abstracción en programación orientada a objetos]Summary

En este tutorial, aprenderás sobre el primer pilar de la programación orientada a objetos: la abstracción.

Al finalizar este tutorial, podrás realizar lo siguiente:

- Explicar cómo se utiliza la abstracción para exponer solo los componentes necesarios del *script.*
- Exponer solo los detalles importantes de un objeto al reconocer las oportunidades para implementar la abstracción.

Languages available:

EspañolEnglishEspañol한국어Español

## 1. Descripción general

Q&A (0)

Estamos listos para trabajar con nuestro código existente y mejorarlo sin cambiar su funcionalidad externa en un proceso llamado **refactorización**. La refactorización es un paso importante en el proceso de desarrollo, en el cual puedes refinar el código que escribiste y también volver a examinar las formas en las que tu código podrá usarse en futuras iteraciones del proyecto. En otras palabras, en la fase de desarrollo escribes código que «funciona bien por el momento» y en la fase de refactorización revisas el código para que «funcione bien después».

En la última misión, presentamos el concepto de programación orientada a objetos y durante todo el Trayecto de Programador júnior has implementado algunas de sus prácticas recomendadas. Ahora examinaremos cada uno de los principales pilares (abstracción, herencia, polimorfismo y encapsulación) en profundidad y utilizaremos el paradigma como guía para refactorizar eficazmente tu código, comenzando por la abstracción.

Mientras trabajas en esta última misión, refinarás el proyecto del inventario que creaste en la misión anterior.

Marcar paso como completado

## 2. ¿Qué es la abstracción?

Q&A (0)[Image: image]

El primer pilar de la OOP se trata de mantener tu código limpio y simple para el programador que lo utiliza, ya seas tú o alguien más. Abstracción es el proceso de eliminar código complejo de los *scripts* donde otros programadores lo verán y solo exponer la funcionalidad que otros programadores realmente necesitarán. Cuando «excluyes» los detalles, reduces el código duplicado y proporcionas fácil acceso a las funciones más útiles. De hecho, ya estás bastante familiarizado con este pilar porque te has beneficiado de ello con frecuencia durante este trayecto. Cada vez que llamas un método para realizar una tarea, en lugar de escribir todo el código de forma manual, te beneficias de la abstracción.

Veamos una situación donde ya utilizaste la abstracción. Durante[¿Cómo crear con código? En la Unidad 4: Mecánicas de jugabilidad](https://learn.unity.com/project/unit-4-gameplay-mechanics?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f), creaste algunas funcionalidades para generar una oleada de enemigos.

[Image: image]

Cuando escribiste el código por primera vez, pusiste en el método Start lo siguiente:

```csharp
private void Start()
{
    for (int i = 0; i < 3; i++)
    {
        Instantiate(enemyPrefab, GenerateSpawnPosition(),
        enemyPrefab.transform.rotation);
    }
}
```

Dado que Start solo se ejecuta cuando el juego se carga, si quisieras generar otra oleada de enemigos, tendrías que copiar esa línea de código en otro lugar del *script* donde quieres que ocurra. Tener que reescribir (o copiar y pegar) las mismas líneas de código una y otra vez es ineficiente y aumenta la posibilidad de errores. También significa que la posterior refactorización será difícil, ya que tendrás que buscar en todos tus *scripts*y reescribir todas las referencias de nuevo.

En cambio, separaste la funcionalidad de generación en su propio método y *lo*llamaste en Start:

```csharp
void SpawnEnemyWave() // create new higher-level method
{
    for (int i = 0; i < 3; i++)
    {
        Instantiate(enemyPrefab, GenerateSpawnPosition(),
        enemyPrefab.transform.rotation);
    }
}

private void Start()
{
    SpawnEnemyWave(); // call higher-level method in Start()
}
```

Creaste una función más general, más «abstracta» llamada SpawnEnemyWave. Después pudiste generar enemigos en cualquier lugar de tu Script con una sola línea de código. Y, si necesitabas refactorizar después, podrías hacerlo en una sola ubicación. Además, tú y tus compañeros programadores ya no necesitaban preocuparse por los detalles específicos de *cómo*se generaban los enemigos. Lo que importa es el concepto más abstracto: si llamas SpawnEnemyWave(), se generarán los enemigos.

Tu experiencia con la abstracción no está limitada a métodos que tú creaste. De hecho, te beneficias de la abstracción cada vez que llamas un método integrado en Unity:

```csharp
rb.AddForce(Vector3.up * Random.Range(12, 16), ForceMode.Impulse);
```

Agregar una fuerza a RigidBody involucra una gran cantidad de matemáticas que interactúan con el sistema de física. Sin embargo, dado que Unity te proporcionó esta simple función de alto nivel «abstracta» (AddForce), solo necesitas llamar al método AddForce y darle los parámetros relevantes para tus necesidades. Ni siquiera necesitas comprender la física de Unity para agregar fuerzas a tu objeto de forma adecuada.

Marcar paso como completado

## 3. Abstracción y refactorización de scripts

Q&A (0)

Recuerda que una parte importante de refactorizar código es mejorar su funcionalidad sin cambiar la forma en que otros programadores interactúan con él. La abstracción juega un rol clave en ello. Mientras la llamada del método y el resultado no cambien, puedes ajustar el contenido del método sin que otros programadores lo noten. Eso quiere decir que puedes refactorizar tu código de forma segura sin riesgo de dañar otra cosa dentro de tu proyecto.

Veamos un ejemplo simple:

```csharp
int TripleResult (int inputNumber)
{
    int outputNumber = inputNumber + inputNumber + inputNumber;
    return outputNumber;
}
```

En el método anterior, el Script que llama transmite un número entero y obtiene un resultado triplicado. El enfoque para obtener el resultado numérico es un poco ineficaz, así que podrías refactorizar el código para que se vea así:

```csharp
int TripleResult (int inputNumber)
{
    int outputNumber = inputNumber * 3;
    return outputNumber;
}
```

Aunque el contenido del método se reescribió, la forma en que se llama al método es idéntica y produce el resultado esperado. Por lo tanto, funcionará cualquier llamada al método en todo el proyecto.

Marcar paso como completado

## 4. ¿Cómo implementar la abstracción en el proyecto?

Q&A (0)

Implementemos los principios de abstracción que acabamos de aprender al refactorizar UserControl en el proyecto del inventario. Toda la funcionalidad relacionada con seleccionar el montacargas y moverlo al recurso que se desea se encuentra en el método Update. Pero ¿qué pasaría si más adelante quisiéramos que otros factores controlaran estas acciones y selecciones? Para lograrlo, abstraigamos esa funcionalidad en dos nuevos métodos.

**1.** De ser necesario, abre el proyecto Inventory de la misión anterior.

**2.**Localiza el Script UserControl en la carpeta Scripts y ábrelo en Visual Studio.

**3.**Arriba de Update, define dos nuevos métodos públicos sin retornos y nómbralos «HandleSelection» y «HandleAction».

```csharp
public void HandleSelection ()
{

}

public void HandleAction ()
{

}
```

HandleSelection controlará todo lo que ocurre cuando el usuario hace clic izquierdo en los montacargas dentro de la aplicación. Todavía necesitamos revisar el botón izquierdo del *mouse* (Input.GetMouseButtonDown(0)) en Update, pero todo lo demás se moverá a nuestro nuevo método.

**4.**En el método Update, selecciona el contenido del enunciado condicional if (Input.GetMouseButtonDown()) y muévelo a HandleSelection.

```csharp
public void HandleSelection()
{
    // start of code cut from GetMouseButtonDown(0) check
    var ray = GameCamera.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
    if (Physics.Raycast(ray, out hit))
    {
        // the collider could be children of the unit, so we make sure to check in the parent
        var unit = hit.collider.GetComponentInParent<Unit>();
        m_Selected = unit;

        // check if the hit object have a IUIInfoContent to display in the UI
        // if there is none, this will be null, so this will hid the panel if it was displayed
        var uiInfo = hit.collider.GetComponentInParent<UIMainScene.IUIInfoContent>();
        UIMainScene.Instance.SetNewInfoContent(uiInfo);
    }
    // end of code cut from GetMouseButtonDown(0) check
}

private void Update()
{
    // ...

    if (Input.GetMouseButtonDown(0))
    {
        // code cut from here
    }

    // ...
}
```

**5.**En el enunciado condicional if (Input.GetmouseButtonDown()), llama a HandleSelection();

```csharp
if (Input.GetMouseButtonDown(0))
{
    HandleSelection(); // method now called from here
}
```

Ahora, repitamos este proceso para HandleAction().

**6.**En Update, localiza el enunciado condicional else if (m_Selected != null && Input.GetMouseButtonDown(1)) y mueve su contenido a HandleAction().

```csharp
public void HandleAction()
{
    // start of code cut from GetMouseButtonDown(1) check
    var ray = GameCamera.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
    if (Physics.Raycast(ray, out hit))
    {
        var building = hit.collider.GetComponentInParent<Building>();

        if (building != null)
        {
            m_Selected.GoTo(building);
        }
        else
        {
            m_Selected.GoTo(hit.point);
        }
    }
    // end of code cut from GetMouseButtonDown(1) check
}

private void Update()
{
    // ...

    else if (m_Selected != null && Input.GetMouseButtonDown(1))
    {
        // code cut from here
    }

    // ...
}
```

**7.**En el enunciado condicional else if (m_Selected != null && Input.GetMouseButtonDown(1)) llama a HandleAction().

```csharp
else if (m_Selected != null && Input.GetMouseButtonDown(1))
{
    HandleAction(); // method now called from here
}
```

**8.**Guarda el Script, regresa a Unity y prueba la Escena.

La funcionalidad no debe cambiar: debes poder hacer clic izquierdo en un montacargas y hacer clic derecho en un conjunto de recursos, y el montacagras debe transportar los recursos de la misma manera que antes. La diferencia ahora es que, si tú o cualquier otro programador necesitan esta funcionalidad en algún otro lugar de la aplicación en otro momento, está disponible con mayor facilidad.

Marcar paso como completado

## 5. Resumen

Q&A (0)

La abstracción simplifica tu código y lo mantiene limpio, lo cual facilita que otros programadores lo usen. El principio fundamental de la abstracción es ocultar la complejidad innecesaria de los demás programadores y solo exponerla cuando se requiera para que el código se ejecute como se espera. Eso significa tomar los complejos mecanismos internos y reemplazarlos con trozos de código más abstractos y reutilizables.  Seguir este principio también simplifica el proceso de refactorización más adelante. Ahora que aprendiste sobre cómo aplicar la abstracción en el proyecto de inventario, piensa cómo podrías utilizarlo en tus propias aplicaciones... o incluso intenta hacerlo.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
