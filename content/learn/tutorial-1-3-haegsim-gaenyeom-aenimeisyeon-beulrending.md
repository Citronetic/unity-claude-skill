[Image: image]

# 1.3 핵심 개념: 애니메이션 블렌딩

Tutorial

Beginner

+10XP

40 mins

0

(22)

Unity Technologies

[Image: 1.3 핵심 개념: 애니메이션 블렌딩]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- Unity 3D 애니메이션 시스템의 핵심 개념 살펴보기
- Unity 에디터에서 간단한 애니메이션을 살펴보고 설정하기

튜토리얼을 마치고 나면 3D 애니메이션 기초 교육 과정의 나머지 부분을 완료할 수 있습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 Unity로 애니메이션을 생성할 때 알아야 할 두 가지 핵심 개념 중 애니메이션 블렌딩을 살펴봅니다. 두 가지 핵심 개념을 모두 이해하고 있으면 Unity의 모든 애니메이션 기능에 그동안 쌓은 지식을 적용할 수 있습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.** 프로젝트 창에서 **Assets** > **1.3 - Core Concepts Animation Blending**으로 이동합니다.

이 튜토리얼에 필요한 모든 에셋이 이 폴더에 있습니다.

단계를 완료로 표시

## 3. 애니메이션 블렌딩 소개

Q&A (0)

[**1.2: 애니메이션 시스템 핵심 개념: 애니메이션 데이터**](https://learn.unity.com/tutorial/lesson-1-2-animation-systems-core-concepts-animation-data?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5eba9fffedbc2a0020b332d7)에서는 애니메이션 데이터의 두 부분(바인딩 및 값)이 애니메이션 클립에 저장되어 있다고 배웠습니다. 여러 개의 애니메이션 클립을 동시에 플레이하면 Unity에서 한꺼번에 블렌딩되며, 바인딩에 블렌딩의 결과가 적용됩니다.

애니메이션 클립을 블렌딩하기 위해 애니메이션마다 상대적 가중치가 있습니다. 이 가중치는 각 개별 애니메이션 클립이 최종 애니메이션에 얼마나 많은 영향을 주는지 계산하는 데 사용됩니다. 이 같은 계산은 다양한 알고리즘을 사용해 수행되는데, 그중에서 가장 일반적인 것이 **가중 평균**입니다. 이 알고리즘은 각각의 값에 가중치를 곱하고 그 값을 모두 더합니다.

단계를 완료로 표시

## 4. 샘플 애니메이션의 가중치 조정

Q&A (0)

애니메이션 블렌딩에 가중치가 어떻게 적용되는지 이해하기 위해 샘플 애니메이션의 가중치를 조정해 보겠습니다.

#### CoreConcepts 씬 열기

먼저 CoreConcepts 씬을 열어야 합니다. 방법은 다음과 같습니다.

**1.**프로젝트 창에서 **Assets**>**1.3 - Core Concepts Animation Blending**>**Scenes**로 이동합니다.

**2.   CoreConcepts** 씬을 더블 클릭해 로드합니다.

이 씬에는 애니메이션 클립 두 개가 동시에 움직이는 Cube 게임 오브젝트를 보여 주는 예시 애니메이션이 나옵니다. 이 두 애니메이션 클립의 가중치를 조정하는 데 사용할 수 있는 스크립트도 있습니다.

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

#### 애니메이션 클립의 가중치 조정

두 가지 애니메이션 클립의 가중치를 조정하는 방법은 다음과 같습니다.

**1.  Cube** 게임 오브젝트를 클릭해 선택합니다.

[Image: image]

**2.**인스펙터(Inspector)에서 **Blending Example** 컴포넌트를 찾습니다. **Circle** 애니메이션의 가중치는 현재 **1**로 설정되어 있고, **Square** 애니메이션의 가중치는 **0**으로 설정되어 있습니다.

[Image: image]

이 설정대로 씬을 플레이하면 게임(Game) 뷰에서 큐브가 원을 그리며 이동합니다.

**3.  플레이** 버튼을 눌러 플레이 모드를 시작하고 게임 뷰에서 애니메이션을 플레이합니다.

**4.**인스펙터에서 **Circle Weight**를 **0**으로 조정합니다.

**Circle** 애니메이션 클립의 가중치를 **0**으로 조정하면 **Square** 애니메이션 클립의 가중치가 **1**로 바뀌는 것을 확인할 수 있습니다. 또한 가중치가 Circle 애니메이션에서 Square로 변경됨에 따라 게임 뷰에서 Cube 게임 오브젝트가 원이 아닌 정사각형 패턴으로 이동하기 시작합니다.

**5.**마쳤으면 **플레이** 버튼을 다시 한 번 눌러 플레이 모드를 종료합니다.

지금까지 애니메이션 클립이 게임 오브젝트에서 어떻게 플레이되는지 살펴보았으므로, Animator 컨트롤러를 사용하여 애니메이션 블렌딩을 제어하는 방법을 알아보겠습니다.

단계를 완료로 표시

## 5. Animator 컨트롤러의 역할

Q&A (0)

Animator 컨트롤러를 사용하면 애니메이션 클립이 언제 플레이되며, 다른 애니메이션 클립과 어떻게 블렌딩되는지를 제어할 수 있습니다. Animator 컨트롤러는 특정한 게임 오브젝트 계층 구조를 통해 플레이되는 모든 애니메이션 클립을 결합하고, 애니메이션 재생을 제어하기 위해 로직을 할당하는 에셋입니다.

Animator 컨트롤러가 참조한 애니메이션 클립만 플레이할 수 있습니다. 애니메이션 클립을 참조하는 Animator 컨트롤러 역시 씬의 Animator 컴포넌트가 참조해야 합니다.

단계를 완료로 표시

## 6. Animator 컨트롤러 살펴보기

Q&A (0)

예시 씬에는 Cube 게임 오브젝트에 Animator 컴포넌트가 있습니다. Animator 컴포넌트는 CubeController Animator 컨트롤러를 참조하고 있습니다.

예제 Animator 컨트롤러를 여는 방법은 다음과 같습니다.

**1.**프로젝트 창에서 **1.3 - Core Concepts Animation Blending**>**AnimatorControllers**로 이동한 후 **CubeController**를 더블 클릭합니다.

[Image: image]

**2.**CubeController 안에서 주황색 **Blend Tree** 노드를 더블 클릭합니다.

Blend Tree가 열리고 이 노드가 Circle 및 Square 애니메이션 클립을 모두 참조하는 것을 확인할 수 있습니다. 블렌드 트리는 여러 개의 애니메이션 클립을 결합하는 상태인데, [**3.4: 블렌드 트리 생성 및 설정**](https://learn.unity.com/tutorial/3-4-creating-and-configuring-blend-trees?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f)에서 더 자세히 알아보겠습니다.

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

블렌드 트리는 계층 구조에 입력한 가중치가 애니메이션 클립에 할당되는 방식과 애니메이션 클립이 블렌딩되는 방식을 제어합니다.

#### Animator 컨트롤러: 주요 정보

Animator 컨트롤러에 대해 반드시 알아야 할 내용은 아래와 같습니다.

- 하나 이상의 애니메이션 클립이 포함되어 있는 논리적 상태의 컬렉션입니다.
- Animator 컨트롤러는 이러한 상태 간 경로를 활용하여 현재 플레이되고 있는 상태의 애니메이션 클립을 평가합니다.
- 상태는 전환에 의해 연결되는데, 이를 통해 한데 연결되는 상태의 애니메이션 클립이 블렌딩됩니다.

단계를 완료로 표시

## 7. Animator 컨트롤러 생성

Q&A (0)

Unity에서 Animator 컨트롤러가 어떤 모습인지 알아보았으므로 직접 만들어 보도록 하겠습니다.

새로운 Animator 컨트롤러를 만드는 방법은 다음과 같습니다.

**1.**  프로젝트 창에서 **Assets** >**1.3 - Core Concepts Animation Blending**>**AnimatorControllers**로 이동합니다.

**2.  Create** >**Animator Controller**를 선택합니다.

[Image: image]

**3.**새로운 Animator 컨트롤러의 이름을 **ExampleController**라고 지정합니다. 그러면 Animator 창에서 이 컨트롤러가 자동으로 열립니다.

새로운 Animator 컨트롤러에 기본 노드가 있지만 아직 상태는 없음을 확인할 수 있습니다. 플레이할 수 있는 애니메이션 클립이 없기 때문에 **ExampleController**가 현재로서는 애니메이션 클립을 플레이할 수 없습니다.

단계를 완료로 표시

## 8. ExampleController에 애니메이션 클립 추가

Q&A (0)

새로운 Animator 컨트롤러에서 애니메이션을 플레이하려면 우선 애니메이션 클립을 추가해야 합니다. 방법은 다음과 같습니다.

**1.**  프로젝트 창에서 **1.3 - Core Concepts Animation Blending**>**AnimationClips**로 이동합니다.

[Image: image]

**2.**  프로젝트 창에서 **Circle** 애니메이션 클립을 드래그하여 Animator 창의 그리드 배경에 놓습니다.

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

**3.**  프로젝트 창에서 **Square** 애니메이션 클립을 드래그하여 Animator 창의 그리드 배경에 놓습니다.

이로써 **ExampleController**에는 예제 애니메이션 클립별로 하나씩, 총 두 개의 노드가 생성되었습니다. 이 노드는 애니메이션 상태이며, Animator 컨트롤러에 추가한 애니메이션 클립을 포함하고 있습니다.

[Image: image]

**Circle** 노드는 주황색, **Square**는 회색입니다. 주황색 노드는 기본 상태를 나타내고 Entry 레이블이 붙은 노드에 연결됩니다. 씬이 시작되면 이 노드가 가장 먼저 플레이됩니다.

단계를 완료로 표시

## 9. 새로운 전환 생성

Q&A (0)

Animator 컨트롤러를 생성하고 애니메이션 클립 두 개를 추가했으므로 두 상태 사이의 전환을 생성해야 합니다.

#### 전환 소개

Circle 애니메이션은 기본 노드이기 때문에 씬이 시작되자마자 이 Animator 컨트롤러를 사용하는 모든 게임 오브젝트에서 플레이됩니다. 하지만 현재 설정된 상태에서는 Animator 컨트롤러에서 Square 애니메이션을 플레이할 수 있는 방법이 없습니다. 애니메이션 클립을 포함하고 있는 두 상태 간에 전환이 없기 때문입니다.

수많은 애니메이션 툴, 시스템과 더불어 전환을 사용하면 두 애니메이션을 블렌딩할 수 있습니다. 애니메이션의 시작점부터 끝점까지 모두 전환을 통해 블렌딩이 이뤄집니다.

#### 전환 생성

새로운 전환을 생성하는 방법은 다음과 같습니다.

**1.  Circle** 상태를 오른쪽 클릭해 컨텍스트 메뉴를 불러옵니다.

**2.  Make Transition**을 선택합니다.

**3.  Square** 상태를 선택해 해당 애니메이션에 전환을 할당합니다.

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

그러면 Circle 상태부터 Square 상태까지 이어지는 화살표가 표시됩니다. 화살표는 애니메이션 실행이 Circle 애니메이션 클립에서 Square 애니메이션 클립 플레이로 이동할 수 있음을 의미합니다.

단계를 완료로 표시

## 10. 전환 설정 구성

Q&A (0)

전환으로 Circle과 Square 애니메이션을 연결했으므로 이제 애니메이션에서 언제 전환이 발생할지 설정해야 합니다.

그러려면 일부 설정을 변경해야 합니다.

#### 종료 시간

종료 시간을 설정하는 방법은 다음과 같습니다.

**1.**Animator 창에서 방금 생성한 전환을 선택합니다. 인스펙터에 해당 설정이 표시됩니다.

[Image: image]

**2.  Settings** 폴드아웃을 확장합니다.

[Image: image]

**Exit Time**이 현재 **0.75**로 설정되어 있습니다. 이 설정대로면 Circle 상태가 Circle 애니메이션 클립의 75%를 플레이했을 때 전환이 시작됩니다.

전환이 시작되기 전에 큐브가 원형으로 한 바퀴 이상 움직이면 더 만족스러운 결과를 얻을 수 있습니다. 이와 같이 하려면 1을 초과하는 값으로 변경해야 합니다.

**3.  Exit Time**을 **1.5**로 변경합니다.

그러면 전환이 시작되기 전에 Circle 애니메이션 클립이 1.5번 플레이됩니다.

#### 전환 타이밍

애니메이션을 부드럽게 블렌딩하려면 Circle 및 Square 애니메이션 클립의 가중치를 수동으로 조정했을 때처럼 애니메이션들 사이에 **동기화**가 이뤄져야 합니다.

전환이 시작되면 전환 대상이 되는 상태의 애니메이션 클립이 플레이되기 시작합니다. 이 경우에 전환이 시작될 때쯤이면 Circle 애니메이션 클립이 반 정도 플레이된 상태입니다. 애니메이션 클립이 동기화되도록 하려면 Square 애니메이션 클립도 중간 지점에서 시작해야 합니다.

전환 타이밍을 설정하는 방법은 다음과 같습니다.

**1.**  **Transition Offset**을 **0.5**로 변경합니다. 이렇게 하면 중간 지점에서 Square 애니메이션 클립이 시작됩니다.

[Image: image]

**2. Transition Duration**을 **2**로 변경합니다. 그러면 전환 블렌딩이 더 완만해집니다.

이제 전환이 완료되는 데 2초가 걸립니다. 최종 전환 타이밍 설정은 다음과 같아야 합니다.

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

단계를 완료로 표시

## 11. 조정된 애니메이션 검토

Q&A (0)

최종 결과를 확인하려면 먼저 **Cube** 게임 오브젝트에서 방금 생성한 Animator 컨트롤러를 플레이하고 있어야 합니다.

그렇게 설정하는 방법은 다음과 같습니다.

**1.**계층 구조에서 **Cube** 게임 오브젝트를 선택합니다.

**2.**프로젝트 창에서 **1.3 - Core Concepts Animation Blending**>**AnimatorControllers**로 이동합니다.

**3.  ExampleController**를 드래그한 다음 인스펙터의 Animator 컴포넌트에 있는 **Controller**프로퍼티에 놓습니다**.**

**4.  Blending Example**컴포넌트를 찾습니다**.**컨텍스트 메뉴를 클릭하고 **Remove Component를 선택합니다.**

**5.  플레이** 버튼을 눌러 게임 뷰에서 작동하고 있는 새로운 Animator 컨트롤러를 확인합니다.

단계를 완료로 표시

## 12. 요약

Q&A (0)

이 소개 섹션에서 Unity 애니메이션 시스템의 몇 가지 기본 핵심 개념에 대해 배웠습니다. 애니메이션 데이터가 어떻게 구조화되어 있으며, 게임 오브젝트에서 어떻게 플레이 및 블렌딩되는지를 살펴보았습니다.

Unity 애니메이션 시스템을 제대로 이해하기 위해 알아야 할 주제 중 많은 부분이 서로 연결되어 있습니다. 거의 모든 툴과 시스템이 애니메이션 데이터 획득과 설정, 조작뿐 아니라 애니메이션을 블렌딩하는 방식을 제어하는 데에도 사용된다는 사실을 꼭 기억하세요.

다음 학습 프로젝트에서는 Animation 창에 대해 더 자세히 알아보고, 이 창을 활용해 애니메이션 클립을 검사하고 편집하는 방법도 배워 보겠습니다.

교육 과정을 진행하면서 Animator 컨트롤러, 블렌드 트리, Animator 컴포넌트에 대해 좀 더 자세히 이해해 가게 될 것입니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
