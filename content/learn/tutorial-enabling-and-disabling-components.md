[Image: image]

# Enabling and Disabling Components

Tutorial

Beginner

+10XP

5 mins

491

(3391)

Unity Technologies

[Image: Enabling and Disabling Components]Summary

How to enable and disable components via script during runtime.

This tutorial is included in the [Beginner Scripting project](https://learn.unity.com/project/beginner-gameplay-scripting).

Previous: [Vector Maths](https://learn.unity.com/tutorial/vector-maths?projectId=5c8920b4edbc2a113b6bc26a)

Next: [Activating GameObjects](https://learn.unity.com/tutorial/activating-gameobjects?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

EnglishEnglishEspañol日本語한국어简体中文English

## 1. Enabling and Disabling Components

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

public class EnableComponents : MonoBehaviour
{
    private Light myLight;


    void Start ()
    {
        myLight = GetComponent<Light>();
    }


    void Update ()
    {
        if(Input.GetKeyUp(KeyCode.Space))
        {
            myLight.enabled = !myLight.enabled;
        }
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
