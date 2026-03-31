[Image: image]

# Sentencias condicionales IF

Tutorial

Beginner

+0XP

5 mins

21

(343)

Unity Technologies

[Image: Sentencias condicionales IF]Summary

Cómo usar las sentencias condicionales IF para habilitar condiciones dentro de tu código.

Este tutorial está incluido en el proyecto [*Scripting*para principiantes.](https://learn.unity.com/project/scripting-para-principiantes)

Previo: Convenciones y sintaxis

Siguiente: Bucles

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Sentencias condicionales IF

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

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
