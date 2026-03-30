[Image: image]

# Instantiate

Tutorial

Beginner

+10XP

5 mins

496

(1892)

Unity Technologies

[Image: Instantiate]Summary

How to use Instantiate to create clones of a Prefab during runtime.

This tutorial is included in the [Beginner Scripting project](https://learn.unity.com/project/beginner-gameplay-scripting).

Previous: [Classes](https://learn.unity.com/tutorial/classes-5?projectId=5c8920b4edbc2a113b6bc26a)

Next: [Arrays](https://learn.unity.com/tutorial/arrays-9o?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

日本語EnglishEspañol日本語한국어简体中文日本語

## 1. Instantiate

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

#### **UsingInstantiate**

```csharp
using UnityEngine;
using System.Collections;

public class UsingInstantiate : MonoBehaviour
{
    public Rigidbody rocketPrefab;
    public Transform barrelEnd;


    void Update ()
    {
        if(Input.GetButtonDown("Fire1"))
        {
            Rigidbody rocketInstance;
            rocketInstance = Instantiate(rocketPrefab, barrelEnd.position, barrelEnd.rotation) as Rigidbody;
            rocketInstance.AddForce(barrelEnd.forward * 5000);
        }
    }
}
```

#### **RocketDestruction**

```csharp
using UnityEngine;
using System.Collections;

public class RocketDestruction : MonoBehaviour
{
    void Start()
    {
        Destroy (gameObject, 1.5f);
    }
}
```

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
