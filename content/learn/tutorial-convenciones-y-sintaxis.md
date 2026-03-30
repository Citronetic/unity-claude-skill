[Image: image]

# Convenciones y sintaxis

Tutorial

Beginner

+0XP

5 mins

40

(424)

Unity Technologies

[Image: Convenciones y sintaxis]Summary

Aprende sobre algunas convenciones básicas y la sintaxis que se debe usar para escribir código como los operadores de asignación, el punto y coma, el sangrado y los comentarios.

Este tutorial está incluido en el proyecto [*Scripting*para principiantes.](https://learn.unity.com/project/scripting-para-principiantes)

Previo: [Variables y funciones](https://learn.unity.com/tutorial/variables-and-functions-1?language=es&publish=true)

Siguiente: Sentencias condicionales IF

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Convenciones y sintaxis

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

public class BasicSyntax : MonoBehaviour
{
    void Start ()
    {
        Debug.Log(transform.position.x);

        if(transform.position.y <= 5f)
        {
            Debug.Log ("I'm about to hit the ground!");
        }
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
