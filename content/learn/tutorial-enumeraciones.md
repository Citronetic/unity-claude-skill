[Image: image]

# Enumeraciones

Tutorial

Beginner

+0XP

5 mins

32

(157)

Unity Technologies

[Image: Enumeraciones]Summary

Las enumeraciones te permiten crear una colección de constantes relacionadas entre sí. En este video aprenderás a crear una colección de constantes relacionadas entres sí dentro de tu código.

Este tutorial está incluido en el proyecto [*Scripting*para principiantes.](https://learn.unity.com/project/scripting-para-principiantes)

Previo: Invocar

Siguiente: Estructuras Switch

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Enumeraciones

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

#### **EnumScript**

```csharp
using UnityEngine;
using System.Collections;

public class EnumScript : MonoBehaviour
{
    enum Direction {North, East, South, West};

        void Start ()
    {
        Direction myDirection;

        myDirection = Direction.North;
    }

    Direction ReverseDirection (Direction dir)
    {
        if(dir == Direction.North)
            dir = Direction.South;
        else if(dir == Direction.South)
            dir = Direction.North;
        else if(dir == Direction.East)
            dir = Direction.West;
        else if(dir == Direction.West)
            dir = Direction.East;

        return dir;
    }
}
```

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
