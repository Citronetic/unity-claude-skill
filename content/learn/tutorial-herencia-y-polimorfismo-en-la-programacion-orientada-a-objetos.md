[Image: image]

# Herencia y polimorfismo en la programación orientada a objetos

Tutorial

foundational

+10XP

20 mins

2

(112)

Unity Technologies

[Image: Herencia y polimorfismo en la programación orientada a objetos]Summary

En este tutorial, aprenderás sobre la herencia y el polimorfismo, dos pilares de la OOP estrechamente relacionados.

- Explicar cómo se utiliza la herencia para compartir funcionalidades entre una clase primaria y una clase secundaria.
- Definir la relación entre una clase primaria y una clase secundaria, incluido lo que una clase secundaria puede o no puede hacer en relación con su clase primaria.
- Reconocer oportunidades en las cuales la herencia podría utilizarse para simplificar el código.
- Describir cómo el polimorfismo se utiliza para modificar la funcionalidad de la clase primaria en una clase secundaria.
- Describir cómo el polimorfismo puede aplicarse al tiempo de compilación (sobrecargas de métodos) y al tiempo de ejecución (omisiones de métodos).
- Recomendar una arquitectura de sistema de alto nivel para un proyecto dado.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

Los siguientes dos pilares de la programación orientada a objetos, la herencia y el polimorfismo, están estrechamente relacionados. **Herencia**, como su nombre implica, se enfoca en las relaciones entre los distintos objetos primarios y secundarios. **Polimorfismo**es un resultado de la herencia y se refiere al proceso en el que una clase secundaria modifica lo que hereda de una clase primaria. Al usarse en conjunto, la herencia y el polimorfismo pueden reducir la cantidad de código que tienes que escribir en una aplicación.

Marcar paso como completado

## 2. ¿Qué es la herencia?

Q&A (0)[Image: image]

**Herencia**es el proceso de crear una clase primaria (también conocida como **clase principal**) desde la cual otras clases (conocidas como **clases secundarias**) pueden crearse. Una clase secundaria toma o hereda todas las características de la clase primaria de forma automática. Es común tener distintas clases que compartan funciones similares en una aplicación. Por ejemplo, un video juego podría tener varios tipos de clases de enemigos, pero es probable que compartan las mismas funciones básicas, tales como administrar su propia vitalidad y la capacidad de hacer daño al jugador. Con la herencia, se elimina la necesidad de escribir esa funcionalidad de vitalidad y daño para cada clase de enemigo, de forma que puedas enfocarte en escribir las funcionalidades que sean únicas de cada clase.

[Image: image]

Ya has utilizado de la herencia con cada Script que has escrito en Unity hasta el momento. Por defecto, cada vez que creas una nueva clase, hereda de MonoBehaviour:

```csharp
public class SomeClass : MonoBehaviour { }
```

MonoBehaviour es la clase base de la cual heredan todas las funcionalidades básicas de creación de *scripts* de Unity. Sin MonoBehaviour, no podrías llamar OnTriggerEnter, GetComponent o siquiera utilizar Start o Update.

En el diagrama anterior, podría parecer que todas las clases secundarias de enemigos perderían su capacidad de obtener acceso a la funcionalidad de Unity porque cambiaron su clase heredada de MonoBehaviour a Enemy. Por fortuna, dado que la clase Enemy hereda de Monobehaviour, los elementos secundarios de la clase Enemy también se consideran elementos secundarios de MonoBehaviour.

Marcar paso como completado

## 3. ¿Qué es polimorfismo?

Q&A (0)[Image: image]

Aunque la funcionalidad básica heredada de una clase primaria puede ser útil, hay muchas situaciones donde no querrás que la clase secundaria realice exactamente la misma acción que la case primaria. El polimorfismo te permite cambiar la funcionalidad de lo que un objeto hereda de su clase primaria.

```csharp
public class Enemy : MonoBehaviour
{
    public void DealDamage ()
    {
        Player.Health -= 10;
    }
}
```

En el ejemplo anterior, la clase Enemy tiene un método DealDamage que elimina 10 puntos de la vitalidad del jugador cada vez que se llama. La clase Thief, un elemento secundario de Enemy, puede llamar este método sin declararlo en la clase.

```csharp
public class Thief : Enemy
{
    private void Update()
    {
        if (Player.isSeen)
        {
            DealDamage(); // method from parent class can be called
        }
    }
}
```

Está bien si quieres que Thief haga exactamente la misma cantidad de daño que la clase Enemy, pero, ¿qué pasa si quieres que sea un valor distinto? Estos cambios se logran mediante el proceso conocido como **omisión de método.**

El método que quieres anular en la clase principal primero debe estar marcado para anularse. Esto se logra con un método **virtual**:

```csharp
public class Enemy : MonoBehaviour {

    public virtual void DealDamage () { // virtual keyword allows overriding

        Player.Health -= 10;
    }
}
```

Identificar un método como virtual indica que puede anularse, pero no es necesario hacerlo. Esto es perfecto para el ejemplo actual, ya que, aunque la clase secundaria Thief podría necesitar modificar el método DealDamage, para otra clase secundaria, como la clase Scoundrel, podría no ser necesario.

Cuando DealDamage se define como virtual, la clase Thief puede anularlo al crear su propio  método para DealDamage. Aquí, en lugar de virtual, utilizaremos la anotación **anular**. Ahora puedes agregar una nueva funcionalidad al método, específicamente para la clase Thief:

```csharp
public class Thief : Enemy
{
    public override void DealDamage() // can override virtual methods from parent class
    {
        Player.Health -= 2;
        CommitPettyTheft();
    }
    private void Update()
    {
        if (Player.isSeen)
        {
            DealDamage();
        }
    }
}
```

La clase Thief ahora hace una cantidad de daño menor que la clase Enemy primaria, y también llama a uno de los métodos específicos de Thief. Ahora, cuando un objeto Thief llama a DealDamage en Update, el método personalizado DealDamage se llamará en lugar del método primario.

Marcar paso como completado

## 4. ¿Cómo crear un nuevo tipo de unidad?

Q&A (0)

En la tarea del proyecto, verás que uno de los elementos por desarrollar es una unidad de productividad. Esta unidad debe aumentar la productividad de cualquier tipo de recurso que el usuario seleccione en la Escena. El usuario seleccionará el recurso de la misma forma en que selecciona el montacargas: se hace clic izquierdo para seleccionar la unidad y clic derecho para seleccionar el recurso hacia el cual se moverá. La productividad de un recurso solo debe aumentarse mientras la unidad de productividad trabaja activamente en él; si la unidad abandona el recurso, debe regresar a una tasa de producción normal.

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

El montacargas es controlado por el Script TransporterUnit, que es un elemento secundario de la clase Unit. Si observas la clase Unit, verás que ahí está toda la funcionalidad que necesitamos para el movimiento, así que tiene lógica que nuestra unidad de producción se convierta en otra clase secundaria de Unit.

**1.** En la carpeta Prefabs, localiza el Prefab ProductivityUnit y agrégalo a la Escena. Este es el trabajador que mejorará la calidad de tus pilas de recursos.

[Image: image]

**2**. Crea un nuevo Script de C# y dale el nombre ProductivityUnit.

**3.**Haz doble clic para abrirlo en Visual Studio. Elimina los métodos Start y Update.

**4.**Para lograr que la clase ProductivityUnit herede de Unit, elimina MonoBehaviour de la declaración de clase y reemplázalo con Unit.

```csharp
public class ProductivityUnit : Unit // replace MonoBehaviour with Unit
{

}
```

Aparecerá un error en tu Script que dice: ‘ProductivityUnit’ does not implement inherited abstract member ‘Unit.BuildingInRange()’. No te preocupes, lo arreglaremos de inmediato.

**5.**Si miras en Unit.cs, verás el siguiente código:

```csharp
protected abstract void BuildingInRange();
```

A diferencia de los métodos virtuales donde la anulación es opcional, este método utiliza la notación **abstracta,**lo cual indica que debe anularse. Los métodos abstractos son útiles cuando reconoces que todas las clases secundarias necesitarán cierto tipo de funcionalidad, pero esa funcionalidad debe programarse por separado en cada clase secundaria. En este caso, BuildingInRange tiene el objetivo de administrar todo lo que ocurre cuando una unidad interactúa con un conjunto de recursos (que es un elemento secundario de la clase building), pero lo que ocurre cambiará con base en cuál clase secundaria llama al método.

Así, de regreso a ProductivityUnit.cs, lo único que necesitas es anular ese método:

```csharp
protected override void BuildingInRange()
{

}
```

**6.**Con ese error resuelto, exploremos la funcionalidad que obtenemos de forma automática simplemente con ampliar la clase Unit. Guarda el Script ProductivityUnit y regresa a Unity.

**7.**Agrega el Script ProductivityUnit al Prefab. Observa que, debido a que la clase es un elemento secundario de Unit, se le otorga una variable public float automáticamente para controlar su velocidad.

[Image: image]

**8.**Presiona Play. Haz clic izquierdo sobre tu nuevo trabajador y después clic derecho en una de las pilas de recursos. Tu trabajador navegará hasta el conjunto de recursos de forma automática. Si haces clic derecho en cualquier otro lugar de la Escena, también se moverá hasta ahí. Todo esto se logra sin escribir una sola línea de código adicional en la clase ProductivityUnit, la funcionalidad actual completa se heredó de Unit.

Marcar paso como completado

## 5. Anula el método BuildingInRange

Q&A (0)

La función principal de la unidad de productividad es aumentar la tasa de producción del conjunto de recursos al que está asignada actualmente. Creemos esa funcionalidad.

**1.**Para completar el método BuildingInRange, necesitarás una variable que pueda monitorizar cualquier conjunto de recursos que el usuario seleccione. En la parte superior de la clase, crea una variable ResourcePile llamada m_CurrentPile y defínela como null. También necesitarás un float que definirá por cuánta cantidad se aumentará la productividad del recurso:

```csharp
public class ProductivityUnit : Unit
{
    // new variables
    private ResourcePile m_CurrentPile = null;
    public float ProductivityMultiplier = 2;
```

**2.** Regresa al método BuildingInRange para programar lo que ocurre cuando la unidad de productividad está en el rango de un conjunto de recursos. Este código se ejecutará en cada fotograma. Queremos que la velocidad de producción aumente durante el fotograma en que la unidad de productividad entra dentro del rango de un Building (Edificio) que es un conjunto de recursos. Después queremos evitar que este código se ejecute en los siguientes fotogramas, de lo contrario la velocidad de producción seguirá en aumento.

```csharp
protected override void BuildingInRange()
{
    // start of new code
    if (m_CurrentPile == null)
    {
        ResourcePile pile = m_Target as ResourcePile;

        if (pile != null)
        {
            m_CurrentPile = pile;
            m_CurrentPile.ProductionSpeed *=  ProductivityMultiplier;
        }
    }
    // end of new code
}
```

La anotación «as ResourcePile» define la variable pile a m_Target solo si m_Target es un tipo ResourcePile. Si m_Target es una Base, estos tipos no coincidirán y el conjunto debe definirse a null. Es una forma eficiente de revisar si m_Target es un conjunto de recursos. Si es (pile != null), entonces m_CurrentPile se define a ese conjunto de recursos y su ProductionSpeed se duplica.

En el siguiente fotograma, el enunciado condicional if en la parte superior del método evitará que este código se ejecute de nuevo, porque m_CurrentPile se definirá a un valor (el conjunto de recursos).

Algo interesante que se debe considerar en este código es que puedes obtener acceso a la variable m_Target, la cual es una variable «protegida» en la clase Unit primaria. Las variables protegidas son como las variables privadas, pero cualquier clase secundaria puede obtener acceso a ellas; la única razón por la que pudiste obtener acceso es porque ProductivityUnit.cs se deriva de Unit.cs.

**3.**  Guarda el Script y regresa a Unity.

**4.**  Presiona Play y envía a tu trabajador al conjunto de recursos.

**5.**  Selecciona el conjunto de recursos antes de que se acerque la unidad de productividad y observa que la tasa de producción se duplica cuando llega.

Marcar paso como completado

## 6. ¿Cómo comprender las sobrecargas?

Q&A (0)

Para finalizar la unidad de productividad, necesitas hacer que la tasa de producción del conjunto de recursos regrese a su valor anterior tan pronto como la unidad se aleje, según se describe en la tarea. En la clase Unit, esto se controla con el método GoTo, pero si observas la clase, notarás que no hay uno, si no dos métodos que tienen ese nombre:

```csharp
public virtual void GoTo(Building target)
{
    m_Target = target;

    if (m_Target != null)
    {
        m_Agent.SetDestination(m_Target.transform.position);
        m_Agent.isStopped = false;
    }
}

public virtual void GoTo(Vector3 position)
{
    m_Target = null;
    m_Agent.SetDestination(position);
    m_Agent.isStopped = false;
}
```

Los métodos no pueden compartir nombres, ¿cierto? Así es en la mayoría de los casos, con excepción de esta circunstancia especial, que se denomina **sobrecarga de métodos**. Observa que ambos métodos GoTo tienen distintos tipos de parámetros y distinta funcionalidad. La sobrecarga de métodos hace que un solo método sea multipropósito. Cuando el usuario seleccione un objetivo, este par de **sobrecargas**controlarán la navegación en función del tipo de objeto seleccionado.

El primer método GoTo toma una clase Building como parámetro, la cual se recolecta cuando el usuario hace clic derecho sobre un conjunto de recursos o sobre la base. Después, este parámetro se transfiere al método SetTarget en el Script Unit.

El segundo método GoTo toma un parámetro Vector3 para situaciones en las que el usuario selecciona un punto aleatorio en la bodega en lugar de un conjunto de recursos.

Podrías escribirlos como métodos separados, pero entonces tendrías que recordar varias llamadas. Con la sobrecarga de métodos, solo tienes que recordar una llamada y los tipos de datos que se transfieren determinarán cuál código ejecutar.

Esta es otra función que has visto en los métodos incorporados de Unity. Cada vez que llamas a un método desde la Interfaz de programación de aplicaciones (API) de Unity y hay muchas opciones de parámetros por usar, sacas provecho de la sobrecarga de métodos. Por ejemplo, transform.Translate tiene cuatro sobrecargas separadas, algunas de las cuales utilizaste durante la primera unidad de ¿Cómo crear con código? para lograr que un vehículo avanzara por el camino:

[Image: image]

```csharp
public void Translate(Vector3 translation);
// implemented as transform.Translate(Vector3.forward);

public void Translate(float x, float y, float z);
// implemented as transform.Translate(0, 0, 1);

public void Translate(Vector3 translation, Transform relativeTo);
// implemented as transform.Translate(Vector3.forward, Space.Self);

public void Translate(float x, float y, float z, Transform relativeTo);
// implemented as transform.Translate(0, 0, 1, Space.Self);
```

Marcar paso como completado

## 7. ¿Cómo anular los métodos GoTo?

Q&A (0)

La unidad de productividad necesita verificar y observar si trabaja en un conjunto de recursos y, de ser así, realizar lo que ocurre en el método GoTo base y regresar el resultado de la producción de ese conjunto de recursos a su valor original antes de alejarse. Anulemos los métodos GoTo para lograrlo.

**1**. En el Script ProductivityUnit, crea un nuevo método llamado ResetProductivity. Ambos métodos GoTo requieren la misma funcionalidad, así que crearemos un método para llamarlos.

**2**. A continuación, verifica si la variable m_CurrentPile es null. De no ser así, entonces divide m_currentPile.ProductionSpeed entre ProductivityMultiplier para devolverla a su valor original y después definirla como nula.

```csharp
void ResetProductivity()
{
    if (m_CurrentPile != null)
    {
        m_CurrentPile.ProductionSpeed /= ProductivityMultiplier;
        m_CurrentPile = null;
    }
}
```

**3**. Crea un nuevo método public override GoTo con un Building como el parámetro objetivo:

```csharp
public override void GoTo(Building target)
{

}
```

**4**. Llama al método ResetProductivity que creaste y el método base.GoTo.

```csharp
public override void GoTo(Building target)
{
    ResetProductivity(); // call your new method
    base.GoTo(target); // run method from base class
}
```

La etiqueta **base**le indica al Script que ejecute el método original además del nuevo código en este método anular.

**5**. Repetiremos el mismo proceso para el otro GoTo:

```csharp
public override void GoTo(Vector3 position)
{
    ResetProductivity();
    base.GoTo(position);
}
```

Estos métodos se ejecutarán tan pronto como el usuario seleccione una nueva ubicación para la unidad de productividad. Antes de moverse, regresará la velocidad de producción del conjunto actual a su tasa original, si había seleccionado un conjunto de productividad en ese momento.

**6**. Guarda el Script, regresa a Unity y prueba la aplicación de nuevo.

**7**. Envía a tu trabajador a un conjunto de recursos y selecciona el conjunto antes de que el trabajador llegue.

**8**. Observa el aumento en la tasa de producción del conjunto de recursos y después envía a tu trabajador a otro conjunto.

**9**. Selecciona de nuevo el conjunto original y observa que su tasa regresó a su cantidad original.

Marcar paso como completado

## 8. Resumen

Q&A (0)

La herencia y el polimorfismo te ayudan a crear correlaciones entre tus clases que por último te ayudan a reducir la cantidad total de código que necesitas escribir. En este tutorial, creaste una nueva clase propia que amplió la funcionalidad de la clase Unit primaria.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
