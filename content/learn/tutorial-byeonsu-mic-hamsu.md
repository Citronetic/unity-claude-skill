[Image: image]

# 변수 및 함수

Tutorial

Beginner

+10XP

10 mins

5

(132)

Unity Technologies

[Image: 변수 및 함수]Summary

변수와 함수란 무엇이며, 이를 통해 어떻게 정보를 저장하고 처리할 수 있을까요?

이 튜토리얼은 [스크립팅의 기초 프로젝트](https://learn.unity.com/project/beginner-gameplay-scripting)에 포함되어 있습니다.

이전: [동작 컴포넌트로 사용되는 스크립트](https://learn.unity.com/tutorial/scripts-as-behaviour-components?projectId=5c8920b4edbc2a113b6bc26a)

다음: [규칙 및 구문](https://learn.unity.com/tutorial/conventions-and-syntax?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. 변수 및 함수

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

public class VariablesAndFunctions : MonoBehaviour
{
    int myInt = 5;


    void Start ()
    {
        myInt = MultiplyByTwo(myInt);
        Debug.Log (myInt);
    }


    int MultiplyByTwo (int number)
    {
        int result;
        result = number * 2;
        return result;
    }
}
```

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
