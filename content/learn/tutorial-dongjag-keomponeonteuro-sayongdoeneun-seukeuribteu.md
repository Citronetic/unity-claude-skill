[Image: image]

# 동작 컴포넌트로 사용되는 스크립트

Tutorial

Beginner

+10XP

5 mins

16

(225)

Unity Technologies

[Image: 동작 컴포넌트로 사용되는 스크립트]Summary

Unity에서 스크립트란 무엇일까요? Unity 스크립트인 동작 컴포넌트에 대해 알아보고, 이 컴포넌트를 생성하고 오브젝트에 연결하는 방법을 배워 보세요.

이 튜토리얼은 [스크립팅의 기초 프로젝트](https://learn.unity.com/project/beginner-gameplay-scripting)에 포함되어 있습니다.

다음: [변수 및 함수](https://learn.unity.com/tutorial/variables-and-functions?projectId=5c8920b4edbc2a113b6bc26a)

[이 주제에 대해 자세히 알고 싶으신가요? 커뮤니티 전문가의 온라인 1:1 강좌를 들어 보세요.](https://livehelp.unity.com/?utm_campaign=connect_americas_acquisition_2019-LiveHelp-Launch&utm_content=LIVEHELP_LEARN-01-all&utm_medium=link&utm_source=learn)

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. 동작 컴포넌트로 사용되는 스크립트

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

public class ExampleBehaviourScript : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            GetComponent<Renderer> ().material.color = Color.red;
        }
        if (Input.GetKeyDown(KeyCode.G))
        {
            GetComponent<Renderer>().material.color = Color.green;
        }
        if (Input.GetKeyDown(KeyCode.B))
        {
            GetComponent<Renderer>().material.color = Color.blue;
        }
    }
}
```

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
