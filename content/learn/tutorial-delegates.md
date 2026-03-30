[Image: image]

# Delegates

Tutorial

intermediate

+10XP

5 mins

394

(1973)

Unity Technologies

[Image: Delegates]SummarySkills

How to create and use delegates to provide complex and dynamic functionality in your scripts.

Languages available:

EnglishEnglishEspañol日本語简体中文English

## 1. Delegates

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

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

Mark step as complete

## Complete this Tutorial

Mark all steps complete
