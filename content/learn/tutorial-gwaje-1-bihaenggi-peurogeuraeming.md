[Image: image]

# 과제 1 - 비행기 프로그래밍

Tutorial

Beginner

+10XP

30 mins

1

(470)

Unity Technologies

[Image: 과제 1 - 비행기 프로그래밍]Summary

**과제 개요:**

자동차 주행 시뮬레이션에서 학습한 기술을 사용하여 공중에서 장애물 주위로 비행기를 조종합니다. 위쪽 및 아래쪽 화살표를 통해 사용자 입력을 받아 비행기의 상승 및 하강을 제어합니다. 또한 비행기가 시야에 계속 보이도록 카메라가 비행기를 따라가도록 합니다.

**과제 결과:**

- 비행기가 일정한 속도로 전진합니다.
- 위쪽/아래쪽 화살표로 비행기 앞부분을 위아래로 움직입니다.
- 카메라가 날고 있는 비행기 옆을 따라갑니다.

Resources

- [Challenge 1 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/913574fa-af65-4d95-abe8-d90282b27a83/Challenge%201%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956230602)

Languages available:

한국어English日本語한국어한국어

## 1. 과제 1 개요

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

- **Prototype 1 프로젝트**를 엽니다.
- [Challenge 1 시작 파일](https://connect-prd-cdn.unity.com/20210506/913574fa-af65-4d95-abe8-d90282b27a83/Challenge%201%20-%20Starter%20Files.zip?_ga=2.201148398.1186801097.1620052249-59568313.1601905412)을 클릭하여 다운로드하고, 압축된 폴더의 **압축을 해제**한 후 .unitypackage를 프로젝트로 **임포트**합니다.
방법이 기억나지 않는 경우 [1.1강, 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)를 참조합니다.
- *프로젝트 창에서 Assets > Challenge 1 > **Instructions*** 폴더로 이동하여 Challenge 1 - Outcome 영상을 참조해서 과제를 완료합니다.

단계를 완료로 표시

## 2. 경고

Q&A (0)

과제를 프로젝트로 임포트할 때 **버그가 발생하도록 했습니다**.

이 과제의 목적은 아래에 나열된 버그를 해결하는 것입니다. 진전이 없을 경우 도움이 되도록 페이지 하단에 힌트도 제공됩니다.

버그를 해결하지 못하고 프로젝트에서 과제 파일을 삭제하려는 경우, 프로젝트 창에서 **Assets 아래에 있는 **Challenge 1**을 오른쪽 클릭하고 **Delete**를 선택합니다.

행운을 빕니다!

단계를 완료로 표시

## 3. 비행기가 뒤로 이동

Q&A (0)

- **비행기를 앞으로 가게 합니다.**

단계를 완료로 표시

## 4. 비행기가 너무 빠름

Q&A (0)

- **비행기 속도를 감당할 수 있는 수준으로 낮춥니다.**

단계를 완료로 표시

## 5. 비행기가 자동으로 기울어짐

Q&A (0)

- **사용자가 위쪽/아래쪽 화살표를 누르는 경우에만 비행기가 기울어지도록 합니다.**

단계를 완료로 표시

## 6. 카메라가 비행기 전면에 위치함

Q&A (0)

- **카메라 위치가 비행기 옆으로 오도록 재조정합니다.**

단계를 완료로 표시

## 7. 카메라가 비행기를 따라가지 않음

Q&A (0)

- **카메라가 비행기를 따라가게 합니다.**

단계를 완료로 표시

## 8. 보너스: 비행기의 프로펠러가 회전하지 않음

Q&A (0)

- **비행기의 프로펠러를 회전시키는 스크립트를 생성합니다.**

단계를 완료로 표시선택 단계

## 9. 힌트

Q&A (0)

- **비행기를 앞으로 가게 합니다.***힌트: Vector3.back은 오브젝트를 뒤로 가게 하고, Vector3.forward는 앞으로 가게 합니다.*
- **비행기 속도를 감당 가능한 속도로 늦춥니다.*****힌트: 값을 Time.deltaTime으로 곱하면 1x/프레임에서 1x/초로 속도가 변경됩니다.*
- **사용자가 위쪽/아래쪽 화살표를 누르는 경우에만 비행기가 기울어지도록 합니다.*****힌트: PlaneController.cs의 Update()에 verticalInput 값이 할당되지만, 실제로 Rotate() 호출에는 사용되지 않습니다.*
- **카메라 위치가 비행기 옆으로 오도록 재조정합니다.*****힌트: 카메라 위치로 X=30, Y=0, Z=10을, 카메라 회전으로 X=0, Y=-90, Z=0을 사용해 보세요.*
- **카메라가 비행기를 따라가게 합니다.*****힌트: FollowPlane.cs에서 비행기 또는 오프셋 변수 값을 할당하지 말고, 카메라의 인스펙터에서 비행기 변수를 할당하고 코드에서 offset = Vector3(30, 0, 10)을 할당합니다.*
- **보너스 - 프로펠러를 회전시킵니다.*****힌트: 비행기의 "Propeller" 자식 오브젝트가 있습니다. 새로운 "SpinPropellerX.cs" 스크립트를 생성하고 프레임마다 Z축을 중심으로 회전하도록 합니다.*

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
