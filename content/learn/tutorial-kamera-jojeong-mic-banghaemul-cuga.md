[Image: image]

# 카메라 조정 및 방해물 추가

Tutorial

Beginner

+10XP

30 mins

1

Unity Technologies

[Image: 카메라 조정 및 방해물 추가]Summary

카메라로 플레이어의 동작을 추적하고 플레이어가 게임에서 상호 작용할 수 있는 장애물을 추가합니다.

**튜토리얼 성과**

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 카메라로 플레이어 추적
- 게임에 장애물 추가
- 플레이어가 장애물과 상호 작용하도록 설정

**주요 개념:**

- Camera Follow 스크립트
- 폴리곤 콜라이더 2D

**과제 아이디어:**

- 프로젝트 창의 Images > Asteroids에 있는 소행성을 활용해 게임에 두 개 이상의 장애물을 추가합니다.

Languages available:

한국어English한국어한국어

## 1. 카메라 조정

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

*Camera Follow 스크립트를 추가하여 뷰 프레임을 조정하고 카메라로 오브젝트를 추적합니다.*

1. 계층 구조에서 Main Camera를 선택하고 인스펙터 창에서 Frame Size 값을 변경해 화면에 표시될 부분을 원하는 대로 지정합니다.
2. 계층 구조에서 Main Camera를 선택한 상태에서 인스펙터로 이동한 다음 Add Camera Follow Script를 클릭합니다.
3. 계층 구조의 SpaceshipRed를 인스펙터 창의 Camera Follow (Script) > Object to follow > Target의 빈 상자로 드래그 앤 드롭합니다.
4. 플레이 버튼을 누르고, 이동하면서 카메라가 빨간색 우주선을 어떻게 추적하는지 확인합니다.

[Image: image]

알고 계셨나요?

- Playground를 사용하면 Unity 인터페이스가 단순화되어 초보자도 쉽게 읽을 수 있습니다. 원본 Unity 인터페이스를 사용하려면 좌측 상단 화면으로 이동하여 Playground > Turn Playground Off를 클릭하면 됩니다.

단계를 완료로 표시

## 2. 장애물 추가

Q&A (0)[Image: image]

*물리와 충돌을 테스트하며 게임에 장애물을 추가합니다.*

1. 프로젝트 창에서 Images > Asteroids로 이동하여 아무 소행성이나 하나 선택하고 계층 구조로 드래그합니다.
2. 인스펙터에서 Add Component를 클릭하고 Rigidbody 2D를 추가한 다음 Gravity 값을 0으로, Friction을 1로 설정하면 소행성은 조금 이동한 후 멈추게 됩니다.
3. 우주선과 소행성이 서로 밀어내도록 소행성과 우주선 양쪽에 Polygon Collider 2D를 추가합니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
