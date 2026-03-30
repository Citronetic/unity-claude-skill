[Image: image]

# 1.3강 - 빠르게 이동하는 물체 추적하기

Tutorial

Beginner

+10XP

50 mins

5

(471)

Unity Technologies

[Image: 1.3강 - 빠르게 이동하는 물체 추적하기]Summary

**개요:**

차량에서 눈을 떼지 마세요. 이 수업에서는 카메라에 대한 새로운 C# 스크립트를 코딩하여 카메라가 도로를 달리는 차량을 따라가고 플레이어가 씬을 제대로 볼 수 있도록 만들어 보겠습니다. 이 작업을 수행하려면 프로그래밍에서 매우 중요한 개념인 변수를 사용해야 합니다*.*

**프로젝트 결과:**

씬에서 카메라가 도로를 달리는 차량을 따라가므로 플레이어가 차량이 어디로 향하는지 볼 수 있습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 차량의 속도 변수 추가

Q&A (0)

> *차량의 속도를 더 쉽게 변경하고, 인스펙터에서 차량의 속도에 더 쉽게 접근하려면  '변수'가 필요합니다.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. PlayerController.cs에서 **클래스 맨 위에 *public float speed = 5.0f;***를 추가합니다.
2. **speed** **변수**를 Translate 메서드의 **속도 값**과 교체한 후 테스트합니다.
3. 스크립트를 **저장**한 후 **인스펙터**에서 speed 값을 원하는 속도로 편집합니다.

[Image: image]단계를 완료로 표시

## 2. 새 카메라 스크립트 생성

Q&A (0)

> *현재 카메라는 하나의 위치에 고정되어 있습니다. 카메라가 플레이어를 따라가도록 만들려면 새 카메라 스크립트를 생성해야 합니다.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. FollowPlayer라는 새 **C# 스크립트를 생성하고** **카메라**에 추가합니다.
2. ***public GameObject player;***를 스크립트 맨 위에 추가합니다.
3. **Main Camera를 선택한 후** 플레이어 오브젝트를 인스펙터의 **빈 Player 변수**로 **드래그**합니다.
4. ***Update()***에서 카메라의 위치를 플레이어의 위치에 할당한 후 테스트합니다.

[Image: image]단계를 완료로 표시

## 3. 카메라 위치에 오프셋 추가

Q&A (0)

> *플레이어가 게임에서 시야를 원활하게 확보할 수 있도록 카메라의 위치를 차량 위로 이동해야 합니다.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. Update 메서드의 라인에 ***+ new Vector3(0, 5, -7)***을 추가한 후 테스트합니다.

[Image: image]단계를 완료로 표시

## 4. Vector3 변수에 대한 오프셋 만들기

Q&A (0)

> *카메라의 위치를 수정했지만 나중에 변경할 수도 있습니다. 오프셋에 접근할 더 쉬운 방법이 필요합니다.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. **FollowPlayer.cs** 맨 위에 ***private Vector3 offset;*을 선언합니다.**
2. ***new Vector3()*** 코드를 복사하여 해당 변수에 **할당**합니다.
3. 원래 코드를 ***offset*** 변수로 **교체**합니다.
4. **테스트**하고 **저장**합니다.

[Image: image]단계를 완료로 표시

## 5. LateUpdate를 사용하여 카메라를 부드럽게 움직이기

Q&A (0)

> *차량이 도로를 달릴 때 카메라가 흔들리는 현상을 해결해 보겠습니다.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. 프로토타입을 테스트하여 차량 주행에 따른 카메라 흔들림을 확인합니다.
2. **FollowPlayer.cs**에서 ***Update()***를 ***LateUpdate()*로 변경합니다.**
3. **저장**하고 카메라 흔들림이 줄어들었는지 **테스트**합니다.

[Image: image]단계를 완료로 표시

## 6. 플레이 모드 틴트 컬러 편집

Q&A (0)

> *변수를 생성하고 편집할 때, 플레이 모드에서 변경하는 실수를 피해야 합니다.*

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

1. 상단 메뉴에서 *Edit > Preferences*(**Windows**) 또는 *Unity > Preferences*(**Mac**)로 이동합니다.
2. 왼쪽 메뉴에서 **Colors**를 선택한 후 "**Playmode tint**" 색상을 *연한 색*으로 편집합니다.
3. 프로젝트를 **플레이**하여 테스트한 후 환경 설정을 닫습니다.

단계를 완료로 표시

## 7. 수업 요약

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

새 기능

- 카메라가 설정된 오프셋 거리로 도로를 달리는 차량을 따라감

새로운 개념 및 기술

- 변수
- 데이터 유형
- 액세스 한정자
- 변수 선언 및 초기화

다음 수업

- 다음 수업에서는 차량을 씬에서 주행하는 차량을 제어할 수 있게 만드는 코드를 추가해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
