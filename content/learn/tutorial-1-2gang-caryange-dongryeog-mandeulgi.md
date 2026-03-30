[Image: image]

# 1.2강 - 차량에 동력 만들기

Tutorial

Beginner

+10XP

70 mins

5

(535)

Unity Technologies

[Image: 1.2강 - 차량에 동력 만들기]Summary

**개요:**

이 수업에서는 주행 시뮬레이터를 작동해 보겠습니다. 먼저 차량의 위치를 변경하고 차량이 전진할 수 있도록 C#으로 첫 번째 코드 라인을 작성합니다. 다음으로, 물리 컴포넌트를 오브젝트에 추가하여 서로 충돌하게 합니다. 마지막으로, 계층 구조에서 오브젝트를 복제하여 도로를 따라 배치하는 방법을 알아보겠습니다.

**프로젝트 결과:**

자체적인 C# 스크립트를 통해 이동하는 차량과 오브젝트로 가득 찬 도로를 구현하고, 물리 컴포넌트를 사용하여 도로의 모든 오브젝트가 서로 충돌할 수 있도록 만듭니다.

Languages available:

한국어English日本語한국어한국어

## 1. 첫 번째 스크립트 생성 및 적용

Q&A (0)

> *이 수업에서는 먼저 차량의 움직임을 제어하는 첫 번째 C# 스크립트를 생성합니다.*

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

1. 프로젝트 창에서 *오른쪽 클릭한 후* *Create**> Folder***를 클릭하여 "Scripts"라는 이름의 폴더를 생성합니다.
2. "Scripts" 폴더에서 *오른쪽 클릭한 후  Create >* ***C# Script***를 클릭하여 "PlayerController"라는 이름의 스크립트를 생성합니다.
3. 새 스크립트를 **Vehicle 오브젝트로 드래그**합니다.
4. Vehicle 오브젝트를 **클릭**하여 인스펙터에서 **컴포넌트**가 오브젝트에 추가되었는지 확인합니다.

단계를 완료로 표시

## 2. Update() 메서드에 주석 추가

Q&A (0)

> *차량이 전진하려면 먼저 새 스크립트를 열고 개발 환경에 익숙해져야 합니다.*

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

1. **Visual Studio**에서 열 스크립트를 **더블 클릭**합니다.
2. ***Update()*** 메서드에 다음 주석을 추가합니다.  ***// 차량 전진***

[Image: image]단계를 완료로 표시

## 3. 차량의 전진 모션 구현

Q&A (0)

> *프로그래밍 내용에 대한 주석을 추가했으니, 이제 실제로 차량의 전진을 구현하는 코드 라인을 작성해야 합니다.*

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

1. 새 주석 아래에 ***transform.tr***을 입력한 후 자동 완성 메뉴에서 **Translate**를 선택합니다.
2. **(**를 입력하고 괄호 안에 **0, 0, 1**을 추가하고 세미콜론(**;**)으로 라인을 완성합니다.
3. **Ctrl/Cmd+S**를 눌러 스크립트를 저장한 후 게임을 실행하여 테스트합니다.

[Image: image]단계를 완료로 표시

## 4. Vector3를 사용하여 차량 전진

Q&A (0)

> *차량이 Z축을 따라 이동하도록 프로그래밍했지만, 사실 더 깔끔한 코딩 방법이 있습니다.*

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

1. 입력한 0, 0, 1을 **삭제**하고 자동 완성을 사용하여 ***Vector3.forward***로 **교체**합니다.

[Image: image]단계를 완료로 표시

## 5. 차량 속도 커스터마이즈

Q&A (0)

> *지금은 차량 속도를 제어할 수 없습니다. 속도를 조정하려면 코드를 변경해야 합니다.*

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

1. **** Time.deltaTime***을 추가하고 게임을 실행합니다.
2. **** 20***을 추가하고 게임을 실행합니다.

[Image: image]단계를 완료로 표시

## 6. 오브젝트에 Rigidbody 컴포넌트 추가

Q&A (0)

> *지금은 차량이 상자를 뚫고 지나갑니다. 더 사실적으로 만들려면 물리를 추가해야 합니다.*

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

1. **Vehicle**을 선택한 후 계층 구조에서 **Add Component**를 클릭하고 **Rigidbody**를 선택합니다.
2. **Obstacle**을 선택한 다음, 계층 구조에서 **Add Component**를 클릭하고 **Rigidbody**를 선택합니다.
3. Rigidbody 컴포넌트 프로퍼티에서 **킬로그램** 단위로 차량과 장애물의 **질량**을 증가시킨 후 다시 테스트합니다.

단계를 완료로 표시

## 7. 장애물 복제 및 위치 지정

Q&A (0)

> *마지막으로, 장애물을 복제하여 차량에 더욱 위험한 도로를 만들어야 합니다.*

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

1. 장애물을 클릭하여 계층 구조의 **목록 하단**으로 드래그합니다.
2. **Ctrl/Cmd+D**를 눌러 장애물을 복제하고 **Z축**을 따라 아래로 내립니다.
3. 이 단계를 몇 번 더 반복하여 장애물을 추가로 생성합니다.
4. 장애물을 여러 번 복제한 후 계층 구조에서 하나를 선택합니다. 그런 다음 **Ctrl을 누른 채** **여러 개의 장애물을 클릭하여**선택한 후 **복제**합니다.

단계를 완료로 표시

## 8. 수업 요약

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

- 차량이 일정한 속도로 도로를 달림
- 차량이 장애물과 충돌하는 경우 장애물이 공중으로 날아감

새로운 개념 및 기술

- C# 스크립트
- Start와 Update 비교
- 주석
- 메서드
- 전달 파라미터
- Time.deltaTime
- 곱셈(*) 연산자
- 컴포넌트
- 콜라이더 및 리지드바디

다음 수업

- 플레이어가 도로를 따라 주행할 때 플레이어를 따라가도록 카메라에 코드를 추가합니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
