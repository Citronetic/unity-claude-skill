[Image: image]

# Activating GameObjects

Tutorial

Beginner

+10XP

5 mins

469

(2676)

Unity Technologies

[Image: Activating GameObjects]Summary

How to handle the active status of GameObjects in the scene, both independently and within Hierarchies, using SetActive and activeSelf / activeInHierarchy.

This tutorial is included in the [Beginner Scripting project](https://learn.unity.com/project/beginner-gameplay-scripting).

Previous: [Enabling and Disabling GameObjects](https://learn.unity.com/tutorial/enabling-and-disabling-components?projectId=5c8920b4edbc2a113b6bc26a)

Next: [Translate and Rotate](https://learn.unity.com/tutorial/translate-and-rotate?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

EnglishEnglishEspañol日本語한국어简体中文English

## 1. Activating GameObjects

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

#### **ActiveObjects**

```csharp
using UnityEngine;
using System.Collections;

public class ActiveObjects : MonoBehaviour
{
    void Start ()
    {
        gameObject.SetActive(false);
    }
}
```

#### **CheckState**

```csharp
using UnityEngine;
using System.Collections;

public class CheckState : MonoBehaviour
{
    public GameObject myObject;


    void Start ()
    {
        Debug.Log("Active Self: " + myObject.activeSelf);
        Debug.Log("Active in Hierarchy" + myObject.activeInHierarchy);
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
