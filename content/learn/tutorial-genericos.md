[Image: image]

# Genéricos

Tutorial

intermediate

+0XP

5 mins

20

(115)

Unity Technologies

[Image: Genéricos]SummarySkills

Cómo se crear y se usan los métodos y clases genéricos.

Languages available:

EspañolEnglishEspañol日本語简体中文Español

## 1. Genéricos

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**SomeClass**

```csharp
using UnityEngine;
using System.Collections;

public class SomeClass
{
    //Here is a generic method. Notice the generic
    //type 'T'. This 'T' will be replaced at runtime
    //with an actual type.
    public T GenericMethod<T>(T param)
    {
        return param;
    }
}
```

**SomeOtherClass**

```csharp
using UnityEngine;
using System.Collections;

public class SomeOtherClass : MonoBehaviour
{
    void Start ()
    {
        SomeClass myClass = new SomeClass();

        //In order to use this method you must
        //tell the method what type to replace
        //'T' with.
        myClass.GenericMethod<int>(5);
    }
}
```

**GenericClass**

```csharp
using UnityEngine;
using System.Collections;

//Here is a generic class. Notice the generic type 'T'.
//'T' will be replaced with an actual type, as will also
//instances of the type 'T' used in the class.
public class GenericClass <T>
{
    T item;

    public void UpdateItem(T newItem)
    {
        item = newItem;
    }
}
```

**GenericClassExample**

```csharp
using UnityEngine;
using System.Collections;

public class GenericClassExample : MonoBehaviour
{
    void Start ()
    {
        //In order to create an object of a generic class, you must
        //specify the type you want the class to have.
        GenericClass<int> myClass = new GenericClass<int>();

        myClass.UpdateItem(5);
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
