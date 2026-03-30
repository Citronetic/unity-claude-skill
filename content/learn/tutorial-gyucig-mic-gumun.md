[Image: image]

# 규칙 및 구문

Tutorial

Beginner

+10XP

5 mins

11

(94)

Unity Technologies

[Image: 규칙 및 구문]Summary

도트 연산자, 세미콜론, 들여쓰기, 주석 처리 등 코드 작성의 기본 규칙과 구문에 대해 알아보세요.

이 튜토리얼은 [스크립팅의 기초 프로젝트](https://learn.unity.com/project/beginner-gameplay-scripting)에 포함되어 있습니다.

이전: [변수 및 함수](https://learn.unity.com/tutorial/variables-and-functions?projectId=5c8920b4edbc2a113b6bc26a)

다음: [If 문](https://learn.unity.com/tutorial/if-statements?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. 규칙 및 구문

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

```csharp
using UnityEngine;
using System.Collections;

public class BasicSyntax : MonoBehaviour
{
    void Start ()
    {
        //이 행은 오브젝트의 x 위치를 나타냅니다.

        /*안녕하세요.
         * 두 줄로 구성된 주석입니다.
         * */
        Debug.Log(transform.position.x);

        if(transform.position.y <= 5f)
        {
            Debug.Log ("I'm about to hit the ground!");
        }
    }
}
```

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
