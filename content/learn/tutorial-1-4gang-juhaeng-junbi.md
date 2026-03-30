[Image: image]

# 1.4강 - 주행 준비

Tutorial

Beginner

+10XP

50 mins

3

(475)

Unity Technologies

[Image: 1.4강 - 주행 준비]SummarySkills

**개요:**

이 수업에서는 주행을 시작하고 차량을 제어하게 됩니다. 이를 위해 플레이어가 화살표 키를 누르는 시점을 감지하여 해당 입력에 따라 차량을 가속하고 방향을 전환해야 합니다. 새로운 메서드, 벡터, 변수를 사용하여 차량을 앞뒤로 이동하고 좌우로 방향을 전환할 수 있습니다.

**프로젝트 결과:**

플레이어가 위/아래 화살표 키를 누르면 차량이 앞뒤로 이동합니다. 플레이어가 왼쪽/오른쪽 화살표 키를 누르면 차량이 방향을 전환합니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 차량의 좌우 이동

Q&A (0)

> *지금까지는 차량이 도로를 따라 직진으로만 이동할 수 있었습니다. 장애물을 피하려면 차량을 좌우로 이동할 수 있어야 합니다.*

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

1. PlayerController.cs 맨 위에 ***public float turnSpeed;*** 변수를 추가합니다.
2. ***Update()***에   ***transform.Translate(Vector3.right * Time.deltaTime * turnSpeed);*를 추가합니다.**
3. 게임을 실행하고 ***turnSpeed*** **변수 슬라이더**를 사용하여 차량을 좌우로 이동합니다.

[Image: image]단계를 완료로 표시

## 2. 입력에 따른 기본 좌우 이동

Q&A (0)

> *현재는 인스펙터에서만 차량을 좌우로 조종할 수 있습니다. 플레이어에게 좌우 방향 전환을 직접 제어할 수 있는 기능을 부여해야 합니다.*

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

1. 상단 메뉴에서 **Edit***>***Project Settings**를 클릭하고 왼쪽 사이드바에서 **Input Manager**를 선택한 후 **Axes**를 펼쳐 입력값을 살펴봅니다.
2. **PlayerController.cs**에 ***public float horizontalInput*** 변수를 새로 추가합니다.
3. ***Update***에 ***horizontalInput = Input.GetAxis("Horizontal");*를 할당한 후**, 인스펙터에서 테스트하여 확인합니다.
4. ***horizontalInput*** 변수를 좌우 **Translate 메서드**에 추가하여 차량 제어를 지원합니다.
5. 인스펙터에서 ***turnSpeed*** 및 ***speed*** 변수를 편집하여 속도감을 조정합니다.

[Image: image]단계를 완료로 표시

## 3. 차량 속도 제어

Q&A (0)

> *플레이어가 핸들을 제어할 수 있도록 했지만 가속 페달과 브레이크도 제어할 수 있어야 합니다.*

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

1. public ***forwardInput*** 변수를 새로 선언합니다.
2. ***Update***에 ***forwardInput = Input.GetAxis("Vertical");*을 할당합니다.**
3. ***forwardInput*** 변수를 **forward Translate 메서드**에 추가한 후 테스트합니다.

[Image: image]단계를 완료로 표시

## 4. 차량이 미끄러지지 않고 방향을 전환하도록 만들기

Q&A (0)

> *차량이 좌우로 방향을 전환하지 않고 미끄러지며 움직임이 어색해 보입니다.  실제 차량처럼 차량의 방향을 전환*해 보겠습니다.

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

1. ***Update***에서 ***transform.Rotate(Vector3.up**, **horizontalInput)***을 호출한 후 테스트합니다.
2. **오른쪽으로 이동**하는 코드 라인을 **삭제**한 후 테스트합니다.
3. **** turnSpeed * Time.deltaTime***을 추가한 후 테스트합니다.

[Image: image]단계를 완료로 표시

## 5. 코드 및 계층 구조 정리

Q&A (0)

> *이 수업에서 많은 요소를 추가했습니다. 다음으로 넘어가기 전에 더욱 전문가답게 스크립트와 계층 구조를 깔끔하게 정리해야 합니다.*

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

1. 계층 구조에서 *오른쪽 클릭한 후 Create Empty*를 클릭하여 빈 게임 오브젝트를 생성하고 이름을 "Obstacles"로 지정한 후 모든 장애물을 여기로 **드래그**합니다.
2. **PlayerController** 값으로 변수를 **초기화**한 후 모든 변수를 **private**으로 만듭니다(**player** 변수 제외).
3. ***//***를 사용하여 각 코드 섹션에 **주석**을 추가합니다.

[Image: image]단계를 완료로 표시

## 6. 수업 요약

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

- 플레이어가 위쪽/아래쪽 화살표 키를 누르면 차량이 앞뒤로 이동합니다.
- 플레이어가 왼쪽/오른쪽 화살표 키를 누르면 차량이 방향을 전환합니다.

새로운 개념 및 기술

- 빈 오브젝트
- 사용자 입력 받기
- 이동 및 회전

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
