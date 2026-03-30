[Image: image]

# ¿Cómo modificar un GameOject con script?

Tutorial

foundational

+10XP

30 mins

2

(592)

Unity Technologies

[Image: ¿Cómo modificar un GameOject con script?]SummarySkills

En este tutorial, aplicarás lo que has aprendido sobre la creación de *script* para modificar un GameObject y realizar un cambio visible en la Escena.

En este tutorial, podrás realizar lo siguiente:

- Editar el código predeterminado generado dentro de un script de C# creado recientemente.
- Usar scripts para modificar las propiedades Transform de un GameObject.
- Escribir el código que utilizan las API de Unity.

Languages available:

EspañolEnglishEspañol日本語한국어Español

## 1. Descripción general

Q&A (0)

En este tutorial, te presentaremos la [API de creación de *scripts* de Unity](https://docs.unity3d.com/ScriptReference/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953769106), que define las clases, así como las funciones y propiedades, que puedes usar en tus *scripts*. (Si no conoces estos conceptos, no te preocupes, te guiaremos).

La API de creación de *scripts*de Unity es extensa, pero Unity proporciona mucha documentación integral y tu IDE te guiará en el proceso. Si te interesa programar en Unity, aprenderás sobre la API al intentar solucionar los problemas nuevos con los *scripts*.

Aquí usarás *scripts* para modificar el tamaño de la bola de tu proyecto [¡El piso es lava!](https://learn.unity.com/tutorial/challenge-the-floor-is-lava) La bola se agrandará a medida que descienda. También te mostraremos cómo modificar la posición y rotación, por si quieres experimentar más por tu cuenta.

Marcar paso como completado

## 2. ¿Cómo crear tu script?

Q&A (0)

**1.**Selecciona el GameObject para tu bola rodante.

**2.**Como lo hiciste en el tutorial anterior, [agrega un nuevo *script* a tu GameObject](https://learn.unity.com/tutorial/get-started-with-scripts#5fa1c722edbc2a002191f052). Asígnale el nombre «BallTransform» al *script* nuevo y haz doble clic en tu carpeta Assets o Recursos (ventana Project) para abrirla en Visual Studio.

**Consejo:**Puedes cerrar las ventanas en la parte derecha de la ventana de tu IDE.

[Image: image]Marcar paso como completado

## 3. ¿Cómo incrementar el tamaño?

Q&A (0)

Para agrandar la bola, incrementaremos el valor de la propiedad Scale (Tamaño) en cada fotograma. Puedes experimentar cómo agrandarla en cada fotograma ajustando las propiedades del componente en la ventana Inspector.

Para hacerlo, vamos a inicializar una variable pública para mantener los incrementos de la propiedad Scale en las dimensiones X, Y y Z. Luego, agregaremos esos incrementos a la propiedad Scale de la bola en cada fotograma.

**1.**Entre el paréntesis de apertura de la instrucción Class y el comentario de la función Start(), agrega esta línea para inicializar una variable con el nombre scaleChange:

```csharp
public Vector3 scaleChange;
```

Esta variable es pública, así que aparecerá en la ventana Inspector. El tipo de variable, Vector3, es un tipo de datos para mantener los tres valores.

**2.**En la función Update(), inicia una nueva línea y escribe:

```csharp
transform.
```

Esto hace referencia al componente Transform de tu GameObject. Al escribir el punto, verás una ventana emergente de todas las propiedades y funciones del componente Transform.

**4.**Escribe o selecciona localScale y luego completa esta línea de código de la siguiente manera:

```csharp
transform.localScale += scaleChange;
```

**Nota:** Si localScale no aparece como opción en el menú emergente, asegúrate de [verificar que Visual Studio esté definido como tu IDE](https://learn.unity.com/tutorial/get-started-with-scripts#5fa1c722edbc2a002191f051).

El operador += sumará los valores en scaleChange a los valores actuales del tamaño del GameObject para agrandar la bola.

**5.**Guarda tu *script* con Ctrl + S/Cmd + S.

El resultado final se verá así:

[Image: image]Marcar paso como completado

## 4. ¿Cómo experimentar con el tamaño?

Q&A (0)

**1.**Regresa al Editor de Unity y selecciona la bola. En la ventana Inspector, verás el componente BallTransform.

[Image: image]

Observa cómo Unity convierte automáticamente el nombre de la variable scaleChange en el *script* a **Scale Change (Cambio de tamaño)** en el Inspector. Puedes aprovechar esta función usando siempre camelCase para tus variables públicas.

**2.**Debido a las propiedades Scale actuales de tu bola, como se muestra en el componente Transform, piensa en cuánto modificar el tamaño en cada fotograma. Hay casi 24 fotogramas por segundo. Por lo tanto, si la propiedad Scale de la bola tiene 1,1,1, entonces, los valores de Scale Change de 1, 1, 1 multiplicarían el tamaño de la bola por 24 en cada segundo. Experimenta con números bajos (como 0.01) y haz clic en el botón Play para probarlos.

**3.**A continuación, encontrarás más opciones para probar:

- ¿Cuándo la bola se agranda demasiado para tu pista? Intenta ajustar las superficies sobre la que rueda para adaptarlas a su tamaño más grande.
- Usa diferentes números para los tres valores en Scale Change y observa cómo la bola se convierte en un esferoide oblongo que se desploma en lugar de rodar.
- ¿Hay otros GameObjects que puedes agrandar?

Marcar paso como completado

## 5. ¿Cómo probar más transformaciones?

Q&A (0)

Estas son algunas líneas de código que puedes usar para modificar la rotación y posición de los GameObjects del mismo modo que cambiamos el tamaño. Aplícalas a los GameObjects en tu propio proyecto para que tu pista de obstáculos sea más interesante.

### Incrementar posición

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TrackPosition : MonoBehaviour
{
    public Vector3 positionChange;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        transform.position += positionChange;
    }
}
```

### Incrementar rotación

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlatformRotate : MonoBehaviour {

    public Vector3 rotateChange;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate (rotateChange);
    }
}
```

**Nota:**El *script* para incrementar la rotación es un poco diferente. La función Rotate() incrementa la rotación del GameObject, mientras que los otros *scripts* modifican las propiedades que se calculan en el *script* con el operador +=.

Mira el video a continuación para ver un ejemplo de las formas de usar estos *scripts* Transform en el proyecto del desafío.

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

Marcar paso como completado

## 6. Otras fuentes para programar

Q&A (0)

Recién empiezas a descubrir el poder de la creación de *scripts* en Unity. Si no tienes mucho conocimiento sobre programación y quieres obtener más información, consulta el **Trayecto Programador júnior** después de completar los **Aspectos básicos de Unity**. Allí aprenderás más términos y conceptos de programación, además de los que acabas de aprender aquí.

Si bien saber programar es una habilidad útil al desarrollar proyectos con interactividad compleja en Unity, no es necesario ser programador para crear con Unity. Por ejemplo:

- Ciertos tipos de proyectos, como las animaciones y visualizaciones en 3D, no requieren de programación en absoluto.
- Existen recursos como [Bolt (en inglés)](https://docs.unity3d.com/bolt/1.4/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953769106) para obtener información sobre Scripting Visual que permiten a los desarrolladores implementar lógica en sus proyectos usando conectores gráficos con la función arrastrar y soltar sin conocimientos de programación ni IDE.
- La [Tienda de recursos de Unity](https://assetstore.unity.com/) proporciona *scripts*prefabricados y herramientas para el desarrollo de funciones comunes, como «First Person Controller» o un sistema de inventario.
- Con Google, junto con sitios como [Respuestas de Unity (en inglés)](https://answers.unity.com/), [Foros de Unity (en inglés)](https://forum.unity.com/) y [Stack Overflow (en inglés)](https://stackoverflow.com/), los desarrolladores pueden copiar, pegar y modificar las soluciones de programación proporcionadas por otros desarrolladores. (Es sorprendente lo lejos que puedes llegar con un poco de investigación en Google y mucha perseverancia).

Marcar paso como completado

## 7. Resumen

Q&A (0)

En este proyecto de aprendizaje, repasaste una breve introducción a la creación de *scripts*con Unity. Has mejorado tu proyecto del desafío con *scripts*: aprendiste sobre el *script* predeterminado y sus funciones Start() y Update(), y viste algo de la API de creación de *scripts* de Unity al usar código para modificar el componente Transform de los GameObjects. Los *scripts* otorgan a Unity posibilidades infinitas. Incluso si no eres programador, ahora puedes ser testigo de todo lo que se puede lograr en Unity.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
