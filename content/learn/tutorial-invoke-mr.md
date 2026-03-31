[Image: image]

# Invoke

Tutorial

Beginner

+10XP

5 mins

8

(35)

Unity Technologies

[Image: Invoke]Summary

Invoke 함수를 사용하면 메서드가 나중에 호출되도록 예약할 수 있습니다. 이 영상에서는 Unity 스크립트에서 Invoke, InvokeRepeating, CancelInvoke 등의 함수를 사용하는 방법을 알아봅니다.

이 튜토리얼은 [스크립팅의 기초 프로젝트](https://learn.unity.com/project/beginner-gameplay-scripting)에 포함되어 있습니다.

이전: [배열](https://learn.unity.com/tutorial/arrays-9o?projectId=5c8920b4edbc2a113b6bc26a)

다음: [열거형](https://learn.unity.com/tutorial/enumerations?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. Invoke

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 한국어

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

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
