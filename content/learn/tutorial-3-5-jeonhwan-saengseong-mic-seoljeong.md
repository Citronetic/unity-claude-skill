[Image: image]

# 3.5 전환 생성 및 설정

Tutorial

Beginner

+10XP

45 mins

0

(8)

Unity Technologies

[Image: 3.5 전환 생성 및 설정]Summary

이 튜토리얼에서는 플레이할 애니메이터 상태를 변경하는 방법을 알아보겠습니다. 여기에는 보통 전환을 사용합니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 플레이할 애니메이터 상태를 변경하는 방법을 알아보겠습니다. 여기에는 보통 전환을 사용합니다.

많은 애니메이션 기능과 마찬가지로 전환은 애니메이션 재생과 블렌딩을 제어하는 방법입니다. 블렌딩이 어떻게 이루어지고 이를 제어하는 데 전환 설정이 어떻게 사용되는지 알아보겠습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.** 프로젝트 창에서 **Assets** > **3.5 - Creating and configuring Transitions** > **Scenes로 이동합니다.**

**3.**  **TransitionExample**씬을 더블 클릭해 엽니다.

**4.**  Animator 창이 열리지 않으면 **Windows** > **Animation** > **Animator**로 이동합니다.

**5.**  계층 구조에서 **Ellen**게임 오브젝트를 선택합니다.

단계를 완료로 표시

## 3. 현재 및 다음 상태

Q&A (0)

전환은 두 애니메이터 상태 간의 블렌딩입니다. 전환이 시작되면 해당 전환의 대상이 되는 애니메이션 상태(**다음 상태**라고 함)가 플레이를 시작합니다.

이때 다음 상태는 가중치가 **0**이고, 전환이 시작되는 애니메이션 상태(**현재 상태**라고 함)는 가중치가 **1**입니다.

전환이 계속되면 두 애니메이션 상태 모두 계속해서 플레이되고, 점차 현재 상태의 가중치가 줄어들며 다음 상태의 가중치가 늘어나기 시작합니다. 현재 상태의 가중치가**0**에 도달하면(전환이 끝날 때 발생함) 플레이가 중지되고 다음 상태가 새로운 현재 상태로 바뀝니다.

단계를 완료로 표시

## 4. 전환 생성

Q&A (0)

이 프로젝트의 예제에는 현재 **EllenRunForward**에서 **EllenQuickTurnLeft**로 연결되는 전환이 없습니다.

다음 단계에 따라 전환을 생성하겠습니다.

**1.**Animator 창에서 **EllenRunForward** 상태를 오른쪽 클릭하고 **Make Transition**을 선택합니다.

그러면 애니메이션 상태와 마우스 커서 사이에 화살표가 나타납니다.

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

**2.  EllenQuickTurnLeft** 상태(전환이 이어져 도달하는 상태)를 클릭합니다.

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

여러 가지 조건을 적용하려는 경우에 동일한 두 개의 애니메이션 상태 사이에 전환이 여러 개 있을 수 있습니다. 전환이 여러 개일 경우 하나의 화살표가 아니라 삼중 화살표로 표시됩니다. 이와 같이 설정하려면 1~2단계를 반복합니다. 그러나 이 예제에서는 전환이 여러 개 필요하지 않습니다.

[Image: image]

전환 설정을 사용하면 전환이 언제, 어떻게 발생하는지 제어할 수 있습니다.

**3.** 방금 전에 **EllenRunForward**와 **EllenQuickTurnLeft** 간에 만든 전환을 선택합니다.

**4.** 인스펙터에서 **Settings** 폴드아웃을 확장합니다.

단계를 완료로 표시

## 5. 종료 시간 설정 조정

Q&A (0)

전환이 언제 발생하는지 제어하려면 **조건** 및 **종료 시간** 설정을 사용하면 됩니다.

조건은 애니메이터 파라미터의 값에 대한 논리문으로, 이 문이 충족되면 전환이 시작됩니다. 이 예제에서는 조건이 사용되지 않습니다. 자세한 내용은 이 튜토리얼 후반에 다루겠습니다.

종료 시간은 전환이 시작되는 시간이며, 현재 상태의 정규화된 시간 단위로 측정됩니다.

조건과 달리 전환은 다음 두 가지 조건이 충족되어야만 시작됩니다.

1. 이전 프레임의 정규화된 시간이 종료 시간보다 작습니다.
2. 현재 프레임의 정규화된 시간이 종료 시간보다 큽니다.

방금 전에 EllenRunForward에서 EllenQuickTurnLeft로 생성한 전환의 경우 종료 시간을 사용해야 합니다. 이와 같이 설정하는 방법은 다음과 같습니다.

**1.**인스펙터에서 **Has Exit Time**이 활성화되어 있는지 확인합니다.

[Image: image]

**2.**전환이 달리기 애니메이션 끝 무렵에 시작해야 하므로, 이에 맞게 **Exit Time**의 값을 **0.81**로 변경합니다.

단계를 완료로 표시

## 6. 전환 기간 설정 조정

Q&A (0)

전환에 걸리는 시간을 제어하려면 **전환 기간** 설정을 사용해야 합니다.

전환 기간은 다음 단위로 측정할 수 있습니다.

- **Fixed Duration**이 활성화된 경우 초 단위
- **Fixed Duration**이 비활성화된 경우 현재 상태의 정규화된 시간 단위

현재 상태의 정규화된 시간을 사용해 기간을 설정할 경우, 값이 **1**이면 전환이 상태와 동일한 시간만큼 지속된다는 뜻입니다.

마찬가지로 값이 **0.5**이면 전환 지속 시간이 현재 상태의 절반이 되고, 값이 **2**이면 전환 지속 시간이 현재 상태의 2배가 됩니다.

EllenRunForward에서 EllenQuickTurnLeft로 이어지는 전환은 EllenRunForward 애니메이션이 끝날 때 완료되어야 합니다. 달리기가 81% 진행된 시점에 전환이 시작되도록 이미 설정했기 때문에, 전환이 EllenRunForward 길이의 마지막 19% 동안 지속되도록 설정해야 합니다.

전환에 이 기간을 사용하는 방법은 다음과 같습니다.

**1.**인스펙터에서 **Fixed Duration**프로퍼티를 비활성화합니다.

**2.** **Transition Duration** 프로퍼티를 **0.19**로 설정합니다.

단계를 완료로 표시

## 7. 전환 테스트

Q&A (0)

이로써 전환 설정을 마쳤습니다. 이제 다음과 같은 방법으로 테스트해 보겠습니다.

**1. 플레이** 버튼을 눌러 플레이 모드를 시작합니다. Ellen 캐릭터가 앞뒤로 뛰고 있는 것을 볼 수 있습니다.

**2.** **플레이** 버튼을 다시 눌러 플레이 모드를 종료합니다.

**3.**검토해야 할 전환 설정이 몇 개 더 남아 있습니다. 생성한 전환이 더 이상 선택되지 않고 인스펙터에 표시되지 않으면 Animator 창을 열고 다시 선택합니다.

단계를 완료로 표시

## 8. 전환 오프셋 살펴보기

Q&A (0)

전환에도 오프셋이 있습니다. 오프셋은 전환이 발생할 때 플레이를 시작하는 다음 상태의 정규화된 시간입니다.

[Image: image]

오프셋은 전환이 시작될 때 애니메이션을 동기화하려는 경우, 예를 들어 캐릭터 애니메이션에서 다리를 비슷한 위치에 배치하는 용도로 사용할 수 있습니다.

Ellen의 다리가 이미 자연스럽게 위치하고 있기 때문에 이 애니메이션의 경우 여기서 아무것도 변경할 필요가 없습니다.

단계를 완료로 표시

## 9. 전환 중단 설정 살펴보기

Q&A (0)

전환은 다른 전환에 의해 중단될 수 있습니다. 이 같은 상황이 발생하면 전환의 현재 프레임에서 애니메이션의 값이 저장되고, 이 값이 중단 전환에 대한 현재 상태 역할을 합니다. 즉. 중단 전환의 블렌딩이 원래 전환의 단일 시간과 중단 전환의 다음 상태 사이에서 발생합니다.

**Interruption Source**와 **Ordered Interruption** 설정을 사용하면 다른 전환에 의해 전환이 중단되는 방식을 제어할 수 있습니다.

#### Interruption Source

Animator 컨트롤러는 각 애니메이션 레이어에 대해 현재 수행할 수 있는 전환 목록을 유지합니다. 이러한 전환에서는 조건 및 종료 시간이 프레임마다 확인됩니다. 기본적으로 이 목록에는 Any State에서 출발하는 전환만 포함되고, 그 다음으로 현재 상태의 전환 목록이 표시됩니다.

그러나 애니메이션 레이어가 전환 중일 때에는 이 전환 목록이 Any State의 전환과 현재 전환의 중단 소스에 의해 정의되는 추가 전환으로 바뀝니다.

각 중단 소스의 추가 전환 옵션은 다음과 같습니다.

- **None:**목록에 전환이 추가되지 않습니다.
- **Current State:** 현재 상태의 정렬 가능한 목록에 있는 전환이 목록에 추가됩니다.
- **Next State:** 다음 상태의 정렬 가능한 목록에 있는 전환이 목록에 추가됩니다.
- **Current State Then Next State:**현재 상태와 다음 상태의 정렬 가능한 목록에서 전환이 이 순서대로 목록에 추가됩니다.
- **Next State Then Current State:** 다음 상태와 현재 상태의 정렬 가능한 목록에서 전환이 이 순서대로 목록에 추가됩니다.

#### Ordered Interruption

**Ordered Interruption**은 현재 상태에서 우선순위가 낮은 전환이 전환을 중단할 수 있는지 여부를 제어합니다. 이 프로퍼티가 활성화되어 있으면 현재 상태에서 우선순위가 더 낮은 전환이 순서가 밀리기 때문에 전환을 중단할 수 없습니다.

단계를 완료로 표시

## 10. 전환 조건 살펴보기

Q&A (0)

종료 시간 설정 조정에서 언급했듯이 조건은 애니메이터 파라미터의 값에 대한 논리문으로, 조건이 충족되면 전환을 시작합니다. 각 전환에 여러 개의 조건이 있을 수 있고, 각 조건이 동시에 충족되어야만 전환이 시작할 수 있습니다.

[Image: image]

파라미터 유형마다 다음과 같은 여러 다른 유형의 조건 논리문이 있습니다.

- **플로트:** 선택한 숫자보다 크거나 작은 것으로 비교됩니다.
- **정수:**선택한 숫자보다 크거나 작거나 같거나 같지 않은 것으로 비교됩니다.
- **트리거:**비교가 필요하지 않습니다. 이러한 유형의 조건은 트리거가 설정된 경우에 충족됩니다.
- **부울:** 파라미터가 true 또는 false인지 여부입니다.

조건은 유형에 관계없이 비슷하게 생성됩니다. 조건을 생성하는 방법은 다음과 같습니다.

**1.**Conditions 목록 하단에서 **새 조건**(**+**)을 클릭합니다.

**2.**드롭다운 목록에서 조건의 기준으로 삼아야 하는 파라미터를 선택합니다.

**3.** 파라미터가 플로트 또는 정수이면 비교 유형을 선택합니다.

**4.** 파라미터가 플로트, 정수, 부울 중 하나이면 파라미터를 비교해야 하는 대상 값을 선택합니다.

단계를 완료로 표시

## 11. Any State

Q&A (0)

Animator 컨트롤러의 각 레이어에는 **Any State**라는 특수한 노드가 있습니다. 이 노드에서 전환을 만드는 것은 가능하지만 이 노드를 향한 전환을 만들 수는 없으므로, 현재 어떤 상태가 플레이되고 있는지에 상관없이 전환이 발생할 수 있습니다.

Any State 노드는 편의를 위해 모든 상태 머신에 표시되지만 전환 목록은 하나밖에 없습니다. 애니메이션 레이어에서 Any State 노드의 각 인스턴스는 동일합니다.

Animator 컨트롤러는 시작해야 하는 전환이 있는지 확인하기 위해 모든 프레임마다 전환 목록을 검사합니다. Any State 노드의 모든 전환부터 시작해 현재 상태의 모든 전환까지 순서대로 검사를 거칩니다.

Interruption Source와 Ordered Interruption 설정을 사용해 이 목록을 수정할 수 있습니다. 하지만 Any State에서 출발하는 전환은 항상 이 목록의 맨 처음에 배치됩니다.

Any State를 사용할 때에는 목록에 있는 모든 전환이 프레임마다 검사되므로 각별히 주의하세요. Any State에서 출발하는 전환에 대한 검사가 프레임마다 이루어져도 무관한 경우에만 사용해야 합니다.

단계를 완료로 표시

## 12. 요약

Q&A (0)

이 튜토리얼에서는 상태 전환이 어떻게 이루어지는지 살펴보았습니다. 다음과 같은 내용을 배웠습니다.

- Unity에서 전환이 작동하는 방식
- 전환을 생성하고 설정하는 방법

이어지는 다음 튜토리얼에서는 Animator 컨트롤러의 핵심 구조 중 하나인 [상태 머신을 살펴보겠습니다](https://learn.unity.com/tutorial/3-6-creating-a-state-machine?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f).

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
