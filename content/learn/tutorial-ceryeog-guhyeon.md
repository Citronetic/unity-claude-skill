[Image: image]

# 체력 구현

Tutorial

Beginner

+10XP

30 mins

1

Unity Technologies

[Image: 체력 구현 ]Summary

체력을 추가하고 게임의 승리 조건을 정의합니다.

**튜토리얼 성과**

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 스크립트를 추가하여 플레이어의 체력 추적
- 장애물로 플레이어의 체력 감소
- 플레이어의 체력 표시
- 게임에 사용자 인터페이스 디자인 추가
- 게임 오브젝트 태그 지정
- 승리 조건 정의

**주요 개념:**

- Health System Attribute 스크립트
- Modify Health Attribute 스크립트

**과제 아이디어:**

- 플레이어의 체력 포인트를 회복할 수는 게임 오브젝트를 구현해 봅니다. 힌트: Modify Health Attribute 스크립트의 Health Change 섹션에서 양수 값을 사용하는 것이 중요합니다.

Languages available:

한국어English한국어한국어

## 1. 체력 구현

Q&A (0)[Image: image]

*충돌 시 오브젝트가 서로 대미지를 입힐 수 있도록 체력을 구현합니다.*

1. 계층 구조에서 SpaceshipRed를 클릭하고 인스펙터 창으로 이동한 다음 Health System Attribute 스크립트를 추가하여 플레이어의 체력을 추적합니다.
2. 계층 구조로 이동한 다음 소행성을 클릭합니다. 이 인스펙터 창에서 Modify Health Attribute 스크립트를 추가합니다.
3. 빨간색 우주선과 소행성이 충돌하면 빨간색 우주선의 체력이 -1만큼 감소합니다. Modify Health Attribute (Script)에서 Health Change 값을 조정하여 이 값을 변경할 수 있습니다.

알고 계셨나요?

- Health Change 값을 양수로 변경하면 회복/복구 기능을 하는 오브젝트를 게임에 구현할 수 있습니다.

단계를 완료로 표시

## 2. 승리 조건 정의

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

[Image: image]

*게임의 승리 조건을 정의하고 프로그래밍합니다.*

1. 프로젝트 창에서 Prefabs로 이동하여 UserInterface를 계층 구조로 드래그하여 미리 마련된 디자인을 추가해 플레이어 체력의 변경 사항을 표시합니다.
2. 기본적으로 플레이어는 5포인트를 얻으면 게임에서 승리합니다. 이를 변경하려면 인스펙터에서 UI Script (Script)로 이동하여 Score To Win의 값을 변경합니다.
3. 이제 계층 구조로 이동하여 SpaceshipRed를 선택합니다. 인스펙터로 이동하여 Tag를 Untagged에서 Player로 변경합니다.
4. 플레이 버튼을 클릭하여 게임을 테스트합니다. 플레이어와 소행성이 충돌하면 체력이 1포인트 줄어드는 것을 볼 수 있습니다. 포인트가 0에 도달하면 게임 오버 텍스트가 나타납니다.

[Image: image]

용어 정의

- 게임 오브젝트 태그 지정: 스크립트에서 게임 오브젝트를 분류, 식별하거나 구별하는 데 활용됩니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
