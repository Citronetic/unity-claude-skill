[Image: image]

# 이동을 위해 텔레포터 추가

Tutorial

Beginner

+0XP

20 mins

1

(10)

Unity Technologies

[Image: 이동을 위해 텔레포터 추가]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 프로토타입 룸 씬을 직접 만들어 봅니다.
- 새 텔레포터를 만듭니다.
- 텔레포터를 설정합니다.
- VR에서 변경 사항을 테스트합니다.

Languages available:

한국어English日本語한국어简体中文한국어

## 1. 개요

Q&A (0)

이제 프로토타입 룸의 예제를 살펴보았으므로 여러분만의 VR 경험을 구현할 수 있습니다. 이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 프로토타입 룸 씬을 직접 만들어 봅니다.
- 새 텔레포터를 만듭니다.
- 텔레포터를 설정합니다.
- VR에서 변경 사항을 테스트합니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼에서는 VR 기초 학습 Unity 프로젝트와 VR 하드웨어를 사용합니다. 시작하기 전에 다음 단계를 따르세요.

**1.**  VR Beginner Unity 프로젝트를 엽니다.

**2.** 하드웨어가 준비되었는지 확인합니다. Oculus Link를 Oculus Quest와 함께 사용하는 경우 Oculus 앱을 통해 활성화하고 연결합니다.

단계를 완료로 표시

## 3. 새로운 프로토타입 룸 씬 만들기

Q&A (0)

이 Unity 프로젝트에는 간단한 프로토타입 룸 씬 템플릿이 포함되어 있기 때문에 완전히 비어 있는 씬부터 시작할 필요가 없습니다.

이 템플릿을 사용하여 새 씬을 만들려면 다음 단계를 따르세요.

**1.**  상단 메뉴에서 **VR Kit** > **Create new Prototype Scene**을 누릅니다.

[Image: image]

**2.**  새 씬의 이름을 지정한 다음 **Save**를 선택합니다. 씬은 기본적으로 **Assets** > **MyScenes**에 저장됩니다.

**3.**  저장하면 새 씬이 자동으로 로드되고 씬(Scene) 뷰에서 열립니다.

[Image: image]단계를 완료로 표시

## 4. 새 텔레포터 만들기

Q&A (0)

이제 여러분만의 프로토타입 룸이 생겼으니 커스텀 VR 경험을 만들 수 있습니다. 첫 번째 단계는 텔레포터를 만들어 플레이어가 두 개의 박스 테이블 중 하나로 더 가까이 이동할 수 있도록 하는 것입니다. 이렇게 하면 플레이어가 인터랙터블 오브젝트를 씬에서 더 쉽게 집어들 수 있습니다.

씬에서 사용할 새 텔레포터 베이스를 만들려면 다음 단계를 따르세요.

**1.**  프로젝트 창에서 **Assets** >**VR Beginner**>**Prefabs**>**Tutorial**로 이동합니다.

**2.**  **TeleporterBase** 프리팹을 선택합니다.

[Image: image]

**3.**  프로젝트 창의 **TeleporterBase** 프리팹을 씬 뷰로 드래그합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**4.**  툴바에서 **이동 툴**을 선택하고 **TeleporterBase**를 두 개의 박스 테이블 중 하나 옆에 배치합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**5.**Ctrl+**S**를 눌러 변경 내용을 저장합니다.

단계를 완료로 표시

## 5. 새로운 텔레포터 설정

Q&A (0)

새로운 텔레포터를 설정하려면 다음 단계를 따르세요.

**1.**  계층 구조(Hierarchy)에서 **TeleporterBase** 게임 오브젝트 왼쪽에 있는 화살표를 선택하여 자식 게임 오브젝트의 뷰를 확장합니다. 이때 **TeleporterBase**가 여전히 선택된 상태여야 합니다.

[Image: image]

**2.**  인스펙터(Inspector)에서 **Add Component** 버튼을 선택합니다.

**3.**  'Teleportation Anchor'를 검색하고 목록에서 컴포넌트를 선택합니다.

[Image: image]

**4.**  컴포넌트의 Interactable Events 섹션 상단에서 **On First Hover Enter** 목록을 찾습니다. **추가** 버튼(**+**)을 선택합니다.

[Image: image]

**5.** TeleporterBase의 **TeleporterBeam** 자식 게임 오브젝트를 계층 구조에서 **On First Hover Enter** 목록 항목의 **None (Object)** 필드로 드래그합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**6.**  Function 필드에서 드롭다운 메뉴 화살표를 선택합니다. **TeleporterAnim** > **StartHighlight**로 이동합니다. 이는 페이드 인 및 페이드 아웃 효과를 제공하는 커스텀 스크립트입니다.

[Image: image]

**7.**  **Teleportation Anchor** 컴포넌트의 Interactive Events 섹션에서 **On Last Hover Exit** 목록을 찾습니다. **+** 버튼(목록에 추가)을 선택합니다.

**8.**  이전과 같이 계층 구조에서 **TeleporterBeam** 게임 오브젝트를 선택하고 새 목록 항목의 **None (Object)** 필드로 드래그합니다.

**9.**  Function 필드에서 드롭다운 메뉴 화살표를 선택합니다. **TeleporterAnim** > **StopHighlight**로 이동합니다. 이렇게 하면 텔레포터를 사용한 후 특수 효과가 중지됩니다.

[Image: image]

**10.**Ctrl+**S**를 눌러 변경 내용을 저장합니다.

단계를 완료로 표시

## 6. 새로운 텔레포터 테스트

Q&A (0)

텔레포터가 올바르게 작동하는지 확인하려면 다음 단계를 따르세요.

**1.** Oculus Link가 없는 Oculus Quest의 경우 [Android 빌드를 만들어](https://learn.unity.com/tutorial/explore-the-prototype-room?projectId=5e4abf44edbc2a09bf60dceb#5e4e8d67edbc2a1abc3bbbf9) 변경 사항을 테스트합니다. 다른 모든 기기의 경우 툴바에서 **플레이** 버튼을 눌러 플레이 모드를 실행합니다. 헤드셋을 착용해야 합니다.

**2.** 컨트롤러의 방향 입력기를 앞으로 밀어 텔레포터 빔을 활성화합니다.

**3.** 컨트롤러를 사용하여 텔레포터 빔이 텔레포터 베이스에 닿도록 합니다.

**4.** 방향 입력을 놓아 새로운 위치로 이동합니다.

**5.** Unity 에디터에서 테스트하는 경우, 테스트를 마쳤으면 툴바에서 **플레이** 버튼을 다시 눌러 플레이 모드를 종료합니다. Unity 에디터에서 플레이 모드를 실행하는 동안 변경한 내용은 저장할 수 없습니다.

단계를 완료로 표시

## 7. 요약

Q&A (0)

이 튜토리얼에서는 VR 경험을 위한 텔레포터를 생성, 설정 및 테스트했습니다. 다음으로는 선택한 오브젝트를 추가하고 설정하겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
