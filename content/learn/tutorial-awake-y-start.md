[Image: image]

# Awake y Start

Tutorial

Beginner

+0XP

5 mins

32

(277)

Unity Technologies

[Image: Awake y Start]Summary

Cómo usar las funciones de inicialización de Unity Awake y Start.

Este tutorial está incluido en el proyecto [*Scripting*para principiantes.](https://learn.unity.com/project/scripting-para-principiantes)

Previo: [Modificadores de ámbito y de acceso](https://learn.unity.com/tutorial/modificadores-de-ambito-y-de-acceso?language=es&publish=true)

Siguiente: Update y FixedUpdate

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Awake y Start

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

public class AwakeAndStart : MonoBehaviour
{
    void Awake ()
    {
        Debug.Log("Awake called.");
    }


    void Start ()
    {
        Debug.Log("Start called.");
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
