[Image: image]

# 데이터 유형

Tutorial

Beginner

+10XP

5 mins

3

(32)

Unity Technologies

[Image: 데이터 유형]Summary

변수의 작동 방식을 정확히 이해할 수 있도록 값과 레퍼런스 데이터 유형의 주요 차이점에 대해 알아보세요.

이 튜토리얼은 [스크립팅의 기초 프로젝트](https://learn.unity.com/project/beginner-gameplay-scripting)에 포함되어 있습니다.

이전: [델타 시간](https://learn.unity.com/tutorial/delta-time?projectId=5c8920b4edbc2a113b6bc26a)

다음: [클래스](https://learn.unity.com/tutorial/classes-5?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. 데이터 유형

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

#### **DatatypeScript**

```csharp
using UnityEngine;
using System.Collections;

public class DatatypeScript : MonoBehaviour
{
    void Start ()
    {
        //값 유형 변수
        Vector3 pos = transform.position;
        pos = new Vector3(0, 2, 0);

        //레퍼런스 유형 변수
        Transform tran = transform;
        tran.position = new Vector3(0, 2, 0);
    }
}
```

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
