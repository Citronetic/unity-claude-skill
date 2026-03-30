[Image: image]

# 1.2 핵심 개념: 애니메이션 데이터

Tutorial

Beginner

+10XP

15 mins

0

(24)

Unity Technologies

[Image: 1.2 핵심 개념: 애니메이션 데이터]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- Unity 3D 애니메이션 시스템의 핵심 개념 살펴보기
- Unity 에디터에서 간단한 애니메이션을 살펴보고 설정하기

튜토리얼을 마치고 나면 3D 애니메이션 기초 교육 과정의 나머지 부분을 완료할 수 있습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

입문자를 위한 이 학습 프로젝트에서는 Unity로 애니메이션을 생성할 때 알아야 할 두 가지 핵심 개념인 애니메이션 데이터와 애니메이션 블렌딩을 살펴봅니다. 이 튜토리얼에서는 애니메이션 데이터부터 알아보겠습니다.

두 가지 핵심 개념을 모두 이해하면 Unity의 다양한 애니메이션 기능에 지금까지 배운 내용을 적용하고, [**3D 애니메이션 시스템 소개**](https://learn.unity.com/course/introduction-to-3d-animation-systems) 교육 과정의 나머지 부분에서 애니메이션 기능을 더 상세히 살펴볼 수 있습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.**Project 창에서**Assets** > **1.2 - Core Concepts Animation Data**로 이동합니다.

이 튜토리얼에 필요한 모든 에셋이 이 폴더에 있습니다.

단계를 완료로 표시

## 3. 애니메이션 데이터 및 애니메이션 클립 소개

Q&A (0)

애니메이션 데이터는 애니메이션 클립이라는 에셋으로 저장됩니다**.** 애니메이션 클립에 어떤 게임 오브젝트 애니메이션이든 저장할 수 있습니다. 여기에는 캐릭터 점프나 깜박이는 불빛 같은 비교적 단순한 것부터 게임의 컷씬 애니메이션 같은 좀 더 복잡한 애니메이션이 모두 포함됩니다.

애니메이션 클립은 Unity 애니메이션 시스템의 기본 구성 요소로, 아주 기본적인 것을 넘어서 복잡한 애니메이션을 만드는 데 사용됩니다.

단계를 완료로 표시

## 4. 애니메이션 클립에서 애니메이션 데이터를 이루는 두 부분

Q&A (0)

애니메이션 클립에 저장된 데이터는 값과 바인딩의 두 부분으로 구성됩니다.

#### 값

애니메이션 클립의 값은 예외가 있기는 하나 보통 애니메이션 커브로 표현됩니다. 애니메이션 커브는 애니메이션화하는 게임 오브젝트가 변화하는 방식에 대한 정보를 담고 있습니다. 애니메이션 커브는 보통 시간에 따라 바뀔 수 있는 플로트 값, 즉 정수 혹은 소수가 될 수 있는 값입니다.

#### 바인딩

애니메이션 클립의 바인딩은 게임 오브젝트나 컴포넌트의 특정 필드에 값을 연결하는 방법을 말합니다. 바인딩은 아래와 같은 두 가지 요소로 구성됩니다.

**1.**  계층 구조를 통과하여 게임 오브젝트의 트랜스폼 컴포넌트에 이르는 경로

**2.**트랜스폼 컴포넌트에서 특정 필드까지의 경로

값과 바인딩 사이에는 일대일 관계가 성립됩니다. 즉, 각 바인딩에 값이 하나 있고, 각 값에 바인딩이 하나 있습니다. 단일 애니메이션 클립에 여러 개의 바인딩-값 쌍이 존재할 수 있으며, 실제로 보통 그렇습니다.

단계를 완료로 표시

## 5. 예시 애니메이션 클립 열기

Q&A (0)

애니메이션 클립을 이론적으로 살펴보았으므로 이제 Unity에서 어떻게 표시되는지 알아볼 차례입니다. [Animation 창](https://docs.unity3d.com/Manual/AnimationEditorGuide.html)에서 애니메이션 클립을 보고 편집할 수 있습니다.

애니메이션 클립을 여는 방법은 다음과 같습니다.

**1.** 상단 메뉴에서 **Window** > **Animation** > **Animation**으로 이동합니다. Animation 창과 [Animator 창](https://docs.unity3d.com/Manual/AnimatorWindow.html)은 다르므로 선택 시 주의하세요.

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

**2.**  **Animation 창** 헤더를 클릭한 상태로 씬(Scene) 뷰 창 헤더에 있는 **Asset Store** 탭 옆으로 드래그 앤 드롭해 Animation 창을 고정합니다.

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

**3.**  프로젝트 창에서 **Assets**> **1.2 - Core Concepts Animation Data**로 이동한 다음 **Circle** 애니메이션 클립을 선택해 Animation 창에서 엽니다.

[Image: image]단계를 완료로 표시

## 6. 애니메이션 데이터 및 애니메이션 커브 살펴보기

Q&A (0)

이어지는 다음 튜토리얼에서는 애니메이션 데이터를 변경하고 이러한 변화가 애니메이션의 결과에 어떤 영향을 주는지 알아봅니다. 그 전에 애니메이션 클립에 있는 데이터를 이해할 필요가 있습니다. 이 교육 과정에 나오는 모든 예시 애니메이션에서는 애니메이션 커브에 데이터가 들어 있습니다.

Circle 애니메이션의 애니메이션 커브를 확인하는 방법은 다음과 같습니다.

**1.** **Animation 창** 하단의 **Curves**탭을 선택해 **Curves 모드**에 들어갑니다.

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

**2.**  **Ctrl+A**(Windows) 또는 **Cmd+A**(macOS)를 눌러 애니메이션 키프레임을 모두 선택합니다.

애니메이션 커브는 키프레임 컬렉션으로 구성됩니다. 키프레임은 여러 가지로 정의되는데, 그중 하나가 값-시간 쌍입니다. 키프레임은 값이 동일할 수 있지만 시간이 동일할 수는 없습니다. 시간에 따른 키프레임 값의 배리에이션이 애니메이션 커브를 정의합니다.

**3.  F** 키를 눌러 Animation 창의 **Curves** 섹션에서 키프레임을 중앙에 표시합니다**.**

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

**4.**  **Position**프로퍼티 왼쪽에 있는 폴드아웃을 선택해 해당 **Position.x** 및 **Position.y** 데이터를 확인합니다. 이 데이터가 바인딩입니다.

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

**5.**  바인딩을 선택하면 Animation 창 오른쪽에 연계된 애니메이션 커브가 강조 표시됩니다**.**

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

Animation 창 튜토리얼에서 **Curves 모드**에 대해 좀 더 자세히 알아볼 수 있습니다.

단계를 완료로 표시

## 7. 애니메이션 데이터의 변화 확인

Q&A (0)

애니메이션이 플레이되는 동안 해당 애니메이션 클립의 현재 시간이 바뀝니다. 어느 시점이든 모든 바인딩의 값에 대한 검사가 이루어지고, 그러한 바인딩에 해당하는 필드에 값이 설정됩니다.

**Circle** 애니메이션 클립을 예로 들어 살펴보겠습니다.

시간이**0:40**(첫 1초의 40 프레임)이면 **Position.y** 값이 **3**입니다.

[Image: image]

애니메이션 클립이 0.5초간 플레이된 경우 플레이되는 게임 오브젝트의 **Position.y** 값이 **3**으로 설정된다는 뜻입니다.

단계를 완료로 표시

## 8. 요약

Q&A (0)

이 튜토리얼에서 애니메이션 데이터의 기초를 살펴보았습니다. 그 내용은 다음과 같습니다.

- 애니메이션 데이터의 특성과 애니메이션 클립에 저장되는 방식 이해
- 애니메이션 클립에 저장된 데이터 검토
- 애니메이션 클립 데이터가 결과로 생성되는 애니메이션과 어떤 관련이 있는지 확인

이어지는 다음 튜토리얼에서는 여기서 다룬 내용을 토대로 Unity 애니메이션 시스템을 사용하기 위해 알아야 할 두 번째 핵심 개념인 애니메이션 블렌딩에 대해 알아보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
