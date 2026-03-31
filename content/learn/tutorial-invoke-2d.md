[Image: image]

# Invoke

Tutorial

Beginner

+10XP

5 mins

425

(1731)

Unity Technologies

[Image: Invoke]Summary

The Invoke functions allow you to schedule method calls to occur at a later time. In this video you will learn how to use the Invoke, InvokeRepeating, and CancelInvoke functions in your Unity scripts.

This tutorial is included in the [Beginner Scripting project](https://learn.unity.com/project/beginner-gameplay-scripting).

Previous: [Arrays](https://learn.unity.com/tutorial/arrays-9o?projectId=5c8920b4edbc2a113b6bc26a)

Next: [Enumerations](https://learn.unity.com/tutorial/enumerations?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

EnglishEnglishEspañol日本語한국어简体中文English

## 1. Invoke

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

#### **InvokeScript**

```csharp
using UnityEngine;
using System.Collections;

public class InvokeScript : MonoBehaviour
{
    public GameObject target;


    void Start()
    {
        Invoke ("SpawnObject", 2);
    }

    void SpawnObject()
    {
        Instantiate(target, new Vector3(0, 2, 0), Quaternion.identity);
    }
}
```

#### **InvokeRepeating**

```csharp
using UnityEngine;
using System.Collections;

public class InvokeRepeating : MonoBehaviour
{
    public GameObject target;


    void Start()
    {
        InvokeRepeating("SpawnObject", 2, 1);
    }

    void SpawnObject()
    {
        float x = Random.Range(-2.0f, 2.0f);
        float z = Random.Range(-2.0f, 2.0f);
        Instantiate(target, new Vector3(x, 2, z), Quaternion.identity);
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
