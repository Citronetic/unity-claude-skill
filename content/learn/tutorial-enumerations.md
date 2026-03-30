[Image: image]

# Enumerations

Tutorial

Beginner

+10XP

5 mins

497

(2380)

Unity Technologies

[Image: Enumerations]Summary

Enumerations allow you to create a collection of related constants. In this video you will learn how to declare and use enumerations in your code.

This tutorial is included in the [Beginner Scripting project](https://learn.unity.com/project/beginner-gameplay-scripting).

Previous: [Invoke](https://learn.unity.com/tutorial/invoke-2d?projectId=5c8920b4edbc2a113b6bc26a)

Next: [Switch Statements](https://learn.unity.com/tutorial/switch-statements?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

EnglishEnglishEspañol日本語한국어简体中文English

## 1. Enumerations

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

Mark step as complete

## Complete this Tutorial

Mark all steps complete
