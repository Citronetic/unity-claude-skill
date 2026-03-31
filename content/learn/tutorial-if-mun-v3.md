[Image: image]

# IF 문

Tutorial

Beginner

+10XP

5 mins

5

(77)

Unity Technologies

[Image: IF 문]Summary

코드에 IF 문을 사용하여 조건을 설정하는 방법을 알아봅니다.

이 튜토리얼은 [스크립팅의 기초 프로젝트](https://learn.unity.com/project/beginner-gameplay-scripting)에 포함되어 있습니다.

이전: [규칙 및 구문](https://learn.unity.com/tutorial/conventions-and-syntax?projectId=5c8920b4edbc2a113b6bc26a)

다음: [루프](https://learn.unity.com/tutorial/loops-z2b?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. IF 문

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

public class IfStatements : MonoBehaviour
{
    float coffeeTemperature = 85.0f;
    float hotLimitTemperature = 70.0f;
    float coldLimitTemperature = 40.0f;


    void Update ()
    {
        if(Input.GetKeyDown(KeyCode.Space))
            TemperatureTest();

        coffeeTemperature -= Time.deltaTime * 5f;
    }


    void TemperatureTest ()
    {
        // 커피 온도가 가장 뜨거운 섭취 온도보다 높은 경우
        if(coffeeTemperature > hotLimitTemperature)
        {
            // 다음을 실행합니다.
            print("Coffee is too hot.");
        }
        // 그렇지 않고 커피 온도가 가장 차가운 섭취 온도보다 낮은 경우
        else if(coffeeTemperature < coldLimitTemperature)
        {
            // 다음을 실행합니다.
            print("Coffee is too cold.");
        }
        // 둘 다 해당하지 않는 경우
        else
        {
            // 다음을 실행합니다.
            print("Coffee is just right.");
        }
    }
}
```

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
