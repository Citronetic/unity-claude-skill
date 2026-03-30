[Image: image]

# 게임 제작 마무리 및 다음 단계

Tutorial

Beginner

+10XP

20 mins

0

Unity Technologies

[Image: 게임 제작 마무리 및 다음 단계]Summary

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

- 게임 레벨 설계
- Unity Playground 스크립트

**게임 아이디어**

- 두 플레이어의 공중 대전 게임
- 우주선 정밀 비행 게임
- 우주선 레이싱 게임

**과제 아이디어:**

- 이제 Unity Playground를 시작했으니 창의적인 구출 미션 게임이나 완전히 색다른 게임을 제작해 보세요.
- 완전히 색다른 캐릭터와 배경을 사용해 보려면, [https://kenney.nl/](https://www.google.com/url?q=https://kenney.nl/&sa=D&ust=1560170071350000)에서 Kenney의 무료 게임 에셋을 확인해 보세요.

Languages available:

한국어English한국어한국어

## 1. 화면에 구출 대상 외계인 추가

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

*게임을 구출 미션으로 바꾸며 제작을 마무리해 보겠습니다.*

1. 프로젝트 창에서 Assets > Images > Creatures로 이동하여 계층 구조로 외계인을 드래그 앤 드롭합니다.
2. 인스펙터에서 Polygon Collider 2D를 추가하고 Trigger 옵션에 체크 표시합니다. Auto Rotate 스크립트도 추가합니다.
3. 자동으로 추가된 Rigidbody 2D에서 Gravity 값을 0으로, Friction을 0으로, Angular Friction을 0.5로 변경합니다.
4. Collectable Attribute (Script)를 추가해 플레이어가 외계인에 닿으면 1포인트를 획득하고 화면에서 외계인이 없어지게 설정합니다.
5. 플레이 버튼을 누르고 플레이어가 외계인에게 닿으면 외계인이 사라지고 플레이어가 1포인트를 획득하는지 확인합니다.

용어 정의

- Auto Rotate 스크립트: 게임 오브젝트를 자동 생성합니다.
- Collectable Attribute 스크립트: 오브젝트를 점수 획득용 수집 대상으로 만듭니다.

단계를 완료로 표시

## 2. 게임 레벨 설계

Q&A (0)[Image: image][Image: image]

*게임에 레벨을 추가합니다.*

1. 계층 구조에서 외계인과 소행성을 프로젝트 창의 Prefab 폴더로 드래그합니다.
2. 오브젝트를 복제하여 게임 씬에 배치합니다. 더 재미있고 어려운 게임을 만들 수 있습니다.
3. 이제 직접 게임 디자인을 마칠 순서입니다. 구출 미션이나 레이싱 게임, 격투 게임으로 전환할 건가요? Playground Project Design 기술 문서를 활용해 아이디어를 기록합니다. 언제든 Playground 스크립트 커닝 페이퍼에서 미리 제작된 스트립트에 대한 정보를 확인할 수 있습니다.
4. Getting Started, Reference Guide 등의 문서와 예제 게임도 잊지 말고 확인해 보세요. 게임을 완성하면 #UnityPlayground 해시태그를 사용해 Twitter 등에 공유해 보시길 바랍니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
