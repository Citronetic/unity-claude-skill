[Image: image]

# Delegados

Tutorial

intermediate

+0XP

5 mins

36

(128)

Unity Technologies

[Image: Delegados]SummarySkills

Cómo se crean y se usan los delegados para proveer funcionalidades complejas y dinámicas en tus *scripts*.

Languages available:

EspañolEnglishEspañol日本語简体中文Español

## 1. Delegados

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**DelegateScript**

```csharp
using UnityEngine;
using System.Collections;

public class DelegateScript : MonoBehaviour
{
    delegate void MyDelegate(int num);
    MyDelegate myDelegate;

    void Start ()
    {
        myDelegate = PrintNum;
        myDelegate(50);

        myDelegate = DoubleNum;
        myDelegate(50);
    }

    void PrintNum(int num)
    {
        print ("Print Num: " + num);
    }

    void DoubleNum(int num)
    {
        print ("Double Num: " + num * 2);
    }
}
```

**MulticastScript**

```csharp
using UnityEngine;
using System.Collections;

public class MulticastScript : MonoBehaviour
{
    delegate void MultiDelegate();
    MultiDelegate myMultiDelegate;

    void Start ()
    {
        myMultiDelegate += PowerUp;
        myMultiDelegate += TurnRed;

        if(myMultiDelegate != null)
        {
            myMultiDelegate();
        }
    }

    void PowerUp()
    {
        print ("Orb is powering up!");
    }

    void TurnRed()
    {
        renderer.material.color = Color.red;
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
