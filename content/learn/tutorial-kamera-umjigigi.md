[Image: image]

# 카메라 움직이기

Tutorial

Beginner

+10XP

10 mins

1

(210)

Unity Technologies

[Image: 카메라 움직이기]Summary

세 번째 Roll-a-ball 튜토리얼에서 배울 내용은 다음과 같습니다.

- 카메라 위치 설정
- 카메라가 고정 오프셋으로 플레이어 구체를 따라가도록 스크립트 작성

Resources

- [Set_the_Camera_position-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/798f152b-b423-4b19-bd35-a5c598819b8c/Set_the_Camera_position-Transcript.txt?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035166513)
- [Write_a_CameraController_script-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/3cd8af1b-f4bb-416e-8347-9212c22812e6/Write_a_CameraController_script-Transcript.txt?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035166513)
- [Reference_the_Player_GameObject-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/ef137e2f-3ffd-40f8-9254-a9944eb95d4d/Reference_the_Player_GameObject-Transcript.txt?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035166513)

Languages available:

한국어English日本語한국어한국어

## 1. 카메라 위치 설정

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

[대본 다운로드](https://connect-prd-cdn.unity.com/20200716/798f152b-b423-4b19-bd35-a5c598819b8c/Set_the_Camera_position-Transcript.txt?_ga=2.73947674.943030393.1594530423-42703541.1592249374)

단계를 완료로 표시

## 2. CameraController 스크립트 작성

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

[대본 다운로드](https://connect-prd-cdn.unity.com/20200716/3cd8af1b-f4bb-416e-8347-9212c22812e6/Write_a_CameraController_script-Transcript.txt?_ga=2.11648572.943030393.1594530423-42703541.1592249374)

#### **CameraController 스크립트**

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour
{
    public GameObject player;

    private Vector3 offset;

    // Start는 첫 프레임 업데이트 이전에 호출됩니다.
    void Start()
    {
        offset = transform.position - player.transform.position;
    }

    // Update는 프레임마다 한 번씩 호출됩니다.
    void LateUpdate()
    {
        transform.position = player.transform.position + offset;
    }
}
```

단계를 완료로 표시

## 3. 플레이어 게임 오브젝트 레퍼런스

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

[대본 다운로드](https://connect-prd-cdn.unity.com/20200716/ef137e2f-3ffd-40f8-9254-a9944eb95d4d/Reference_the_Player_GameObject-Transcript.txt?_ga=2.118984961.943030393.1594530423-42703541.1592249374)

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
