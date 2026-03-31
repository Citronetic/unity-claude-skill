[Image: image]

# IF Statements

Tutorial

Beginner

+10XP

5 mins

637

(5087)

Unity Technologies

[Image: IF Statements]Summary

How to use IF statements to set conditions in your code.

This tutorial is included in the [Beginner Scripting project](https://learn.unity.com/project/beginner-gameplay-scripting).

Previous: [Conventions and Syntax](https://learn.unity.com/tutorial/conventions-and-syntax?projectId=5c8920b4edbc2a113b6bc26a)

Next: [Loops](https://learn.unity.com/tutorial/loops-z2b?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

EnglishEnglishEspañol日本語한국어简体中文English

## 1. IF Statements

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

```csharp
using UnityEngine;
using System.Collections;

public class IfStatements : MonoBehaviour
{
    float coffeeTemperature = 85.0f;
    float hotLimitTemperature = 70.0f;
    float coldLimitTemperature = 40.0f;


    void Update ()
    {
        if(Input.GetKeyDown(KeyCode.Space))
            TemperatureTest();

        coffeeTemperature -= Time.deltaTime * 5f;
    }


    void TemperatureTest ()
    {
        // If the coffee's temperature is greater than the hottest drinking temperature...
        if(coffeeTemperature > hotLimitTemperature)
        {
            // ... do this.
            print("Coffee is too hot.");
        }
        // If it isn't, but the coffee temperature is less than the coldest drinking temperature...
        else if(coffeeTemperature < coldLimitTemperature)
        {
            // ... do this.
            print("Coffee is too cold.");
        }
        // If it is neither of those then...
        else
        {
            // ... do this.
            print("Coffee is just right.");
        }
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
