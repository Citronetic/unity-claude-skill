[Image: image]

# Bucles

Tutorial

Beginner

+0XP

5 mins

0

Unity Technologies

[Image: Bucles]Summary

How to use the For, While, Do-While, and For Each Loops to repeat actions in code.

Aprende a cómo usar los bucles For, While, Do-While, y For Each para repetir acciones dentro de tu código.

Este tutorial está incluido en el proyecto [*Scripting*para principiantes.](https://learn.unity.com/project/scripting-para-principiantes?language=es&publish=true)

Previo: Sentencias condicionales IF

Siguiente: Modificadores de ámbito y de acceso

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Bucles

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

#### **ForLoop**

```csharp
using UnityEngine;
using System.Collections;

public class ForLoop : MonoBehaviour
{
    int numEnemies = 3;


    void Start ()
    {
        for(int i = 0; i < numEnemies; i++)
        {
            Debug.Log("Creating enemy number: " + i);
        }
    }
}
```

#### **WhileLoop**

```csharp
using UnityEngine;
using System.Collections;

public class WhileLoop : MonoBehaviour
{
    int cupsInTheSink = 4;


    void Start ()
    {
        while(cupsInTheSink > 0)
        {
            Debug.Log ("I've washed a cup!");
            cupsInTheSink--;
        }
    }
}
```

#### **DoWhileLoop**

```csharp
using UnityEngine;
using System.Collections;

public class DoWhileLoop : MonoBehaviour
{
    void Start()
    {
        bool shouldContinue = false;

        do
        {
            print ("Hello World");

        }while(shouldContinue == true);
    }
}
```

#### **ForeachLoop**

```csharp
using UnityEngine;
using System.Collections;

public class ForeachLoop : MonoBehaviour
{
    void Start ()
    {
        string[] strings = new string[3];

        strings[0] = "First string";
        strings[1] = "Second string";
        strings[2] = "Third string";

        foreach(string item in strings)
        {
            print (item);
        }
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
