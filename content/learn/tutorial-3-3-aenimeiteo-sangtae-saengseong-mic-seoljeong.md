[Image: image]

# 3.3 애니메이터 상태 생성 및 설정

Tutorial

Beginner

+10XP

35 mins

0

(7)

Unity Technologies

[Image: 3.3 애니메이터 상태 생성 및 설정]Summary

이 튜토리얼에서는 보통 줄여서 '상태'라고도 부르는 애니메이터 상태에 대해 알아보겠습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 보통 줄여서 '상태'라고도 부르는 애니메이터 상태에 대해 알아보겠습니다.

각 애니메이터 상태에는 모션이 포함되는데, 모션은 애니메이션 클립 또는 블렌드 트리에서 결합된 애니메이션 클립의 컬렉션입니다. 애니메이터 상태가 플레이되면 그 안에 포함된 모션도 플레이됩니다.

애니메이터 상태는 상태 머신의 핵심 구성 요소이자, 나아가 Animator 컨트롤러의 핵심 구성 요소 중 하나입니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.** 프로젝트 창에서 **Assets** > **3.3 - Creating and configuring Animation States** > **Scenes**로 이동하고 **AnimatorStateSettingsExample**을 더블 클릭해 씬을 엽니다.

단계를 완료로 표시

## 3. 애니메이터 상태 생성

Q&A (0)

애니메이션 상태를 생성하는 프로세스부터 살펴보겠습니다. 주로 다음 두 가지 방법으로 애니메이터 상태를 생성할 수 있습니다.

- 애니메이션 클립이 들어 있는 상태를 생성하려면 프로젝트 창에서 Animator 창의 그리드 배경으로 애니메이션 클립 에셋을 드래그합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:01Loaded: 59.64%0:00Remaining Time -0:011xPlayback Rate

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

- 모션 없이 상태를 생성하려면 Animator 창의 그리드 배경을 오른쪽 클릭하고 **Create State** > **Empty**

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

애니메이터 상태에 넣을 모션에 따라 둘 중 하나의 접근 방법을 선택하면 됩니다.

**참고:** 애니메이터 상태를 생성하는 다른 기법도 있지만 이 두 방법이 가장 일반적입니다.

단계를 완료로 표시

## 4. 애니메이션 클립에서 새로운 애니메이터 상태 생성

Q&A (0)

단일 애니메이션 클립에서 애니메이터 상태를 생성하는 방법은 다음과 같습니다.

**1.** 상단 메뉴에서 **Window** > **Animation**> **Animator**로 이동해 Animator 창을 엽니다.

**2.** 계층 구조에서 **MazeLowMan** 게임 오브젝트를 선택합니다.

**3.** 프로젝트 창에서 **Assets** > **3.3 - Creating and configuring Animator States** > **AnimationClips**로 이동합니다.

**4.**  **HumanoidRun** 모델을 확장해 **Run** 애니메이션 클립을 찾습니다.

**5.** 프로젝트 창에서 Animator 창의 그리드 배경으로 **Run** 애니메이션 클립을 드래그해 **Run**이라는 새로운 애니메이터 상태를 생성합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## 5. 기본 애니메이터 상태 설정: 이름 및 태그

Q&A (0)

이미 배운 것처럼, Unity의 애니메이션 기능 중 대부분은 애니메이션 플레이를 조작하거나 애니메이션을 블렌딩하기 위한 용도입니다. 하지만 보다 손쉬운 작업을 위해 제공되는 몇 가지 예외적인 기능도 있습니다. 그러한 예외 중 하나가 애니메이터 상태입니다.

상태를 생성할 때 처음 나타나는 두 개의 프로퍼티는 **이름**과 **태그**입니다.

[Image: image]

둘 다 오로지 식별을 위해서만 사용되는 문자열입니다. 현재 플레이하고 있는 애니메이터 상태에 특정한 이름이나 태그가 있는지 알아볼 수 있습니다.

이 설정에서 이름은 고유해야 하지만 태그는 그렇지 않습니다.

단계를 완료로 표시

## 6. 상태 플레이 제어 설정: Motion, Speed, Multiplier

Q&A (0)

지금부터는 애니메이터 상태가 플레이되는 방식을 제어하는 데 사용할 수 있는 설정을 살펴보겠습니다.

#### Motion

애니메이터 상태를 설정할 때 다음으로 적용되는 설정은 **Motion**입니다. 애니메이션 클립 한 개, 혹은 여러 개의 애니메이션 클립이 포함된 블렌드 트리로 설정할 수 있습니다.

#### Speed 및 Multiplier

다음 설정 그룹을 사용해 모션이 플레이되는 방식을 조작할 수 있습니다. 먼저 **Speed**와 **Multiplier** 설정을 살펴보겠습니다. 두 설정 모두 모션이 플레이되는 속도를 제어하는 데 사용됩니다.

[Image: image]

**Speed**가 **2**일 경우 모션 플레이가 평소 때보다 2배 빨라지고 플레이 시간이 반으로 줄어듭니다. 마찬가지로 **Speed**가 **0.5**이면 모션 플레이 속도가 절반으로 느려져 플레이 시간이 2배 길어집니다.

인스펙터에서 기본값을 설정해 **Speed**를 조정하고,****그런 다음에 **Multiplier** 설정을 사용하도록 선택할 수 있습니다. 여기에 입력하는 값에 애니메이터 파라미터의 값을 곱하면 애니메이션 속도가 바뀝니다.

단계를 완료로 표시

## 7. 애니메이션 속도 조정

Q&A (0)

예시 Run 애니메이션의 속도를 조정하는 방법은 다음과 같습니다.

**1. Run** 상태가 선택되어 있는 Animator 창에서 Multiplier 필드 오른쪽에 있는 **Parameter**를 활성화합니다.

Animator 컨트롤러에는 이미 SpeedMultiplier라는 단일 애니메이터 파라미터가 있습니다. 이 파라미터로 드롭다운이 채워집니다.

[Image: image]

**2.** **플레이** 버튼을 눌러 플레이 모드를 시작하고 속도 제어를 테스트합니다.

튜토리얼을 위해 키보드에서 영숫자 1~4를 사용해 SpeedMultiplier의 값을 **1**부터 **4**까지 설정하는 데 사용할 수 있는 스크립트를 생성해 두었습니다. 이 숫자 중 하나를 누르면 속도가 새로운 값으로 자연스럽게 바뀝니다.

**3.** 테스트가 완료되면 **플레이**를 다시 눌러 플레이 모드를 종료합니다.

단계를 완료로 표시

## 8. 애니메이터 상태 플레이 제어 설정: Normalized Time

Q&A (0)

애니메이터 상태가 플레이되는 방식을 제어하는 또 다른 방법은 **Normalized Time**을 직접 제어하는 것입니다.

Normalized Time은 모션의 현재 시간을 0~1로 측정하는 개념으로, 그 의미는 다음과 같습니다.

- **Normalized Time**이 **0**이면 애니메이터 상태가 시작 지점에 있는 것입니다.
- 0.5이면 중간까지 진행된 것입니다.
- 1이면 애니메이터 상태가 종료 지점에 있는 것입니다.

애니메이터 파라미터의 값을 애니메이터 상태의 Normalized Time으로 사용해 애니메이터 상태의 모션 끝까지 모든 프레임이 진행되는 값을 설정할 수 있습니다.

그 방법은 다음과 같습니다.

**1.**Animator 창에서 **Motion Time** 프로퍼티의 **Parameter**를 활성화합니다.

**2.**사용할 애니메이터 파라미터를 선택합니다.

단계를 완료로 표시

## 9. 애니메이터 상태 플레이 제어 설정: Cycle Offset

Q&A (0)

마지막으로 살펴볼 설정은 **Cycle Offset**입니다.

이 설정은 상태가 플레이를 시작하는 정규화된 시간을 설정한다는 점에서 Normalized Time과 밀접한 관계가 있습니다. 변경하려면 Float로 설정하거나 Float 파라미터를 통해 제어하세요.

단계를 완료로 표시

## 10. 휴머노이드 설정

Q&A (0)

휴머노이드 릭을 제어하는 애니메이터에서 애니메이터 상태를 생성한 경우 다음 두 가지 추가 설정을 고려해 볼 수 있습니다.

1. Mirror
2. Foot IK

#### Mirror

**Mirror**는 왼쪽에서 오른쪽으로 애니메이션을 반사합니다. 이 설정을 사용하면 우회전을 좌회전으로 변경하는 것과 같은 작업을 할 수 있습니다.

#### Foot IK

[**Foot IK**](https://learn.unity.com/tutorial/2-3-model-specific-animation-import-settings?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69#5f34a311edbc2a002129601f)는 근육 클립 데이터를 사용해 각 발이 언제 지면에 닿아야 하는지 예측합니다. Foot IK를 사용하면 발의 위치가 고정됩니다.

이 설정은 다음과 같은 상황에 유용합니다.

- 애니메이션 클립의 압축으로 인해 대기 상태 애니메이션 중에 발이 움직일 경우
- 두 개의 애니메이션을 블렌딩한 결과 고정되어야 하는 발이 이동할 경우

**참고:**이 설정은 추정치를 기반으로 하며, 모든 애니메이션 데이터에 대해 그 유효성이 보장되지는 않습니다.

단계를 완료로 표시

## 11. 추가 설정

Q&A (0)

애니메이션 상태를 설정할 때 고려해야 할 설정이 두 개 더 있습니다.

#### Write Defaults

**Write Defaults**는 Unity에서 직관적으로 이해하기가 쉽지 않은 애니메이션 설정 중 하나입니다.

작동 원리를 이해하려면 먼저 애니메이터 시스템이 애니메이션의 바인딩을 어떻게 처리하는지 알아야 합니다.

- 애니메이터는 포함하고 있는 모든 애니메이션 클립으로부터 바인딩을 모두 수집하고 프레임마다 각 바인딩에 작성합니다.
- 애니메이터 상태의 모션이 특정 바인딩에 작성하지 않으면 그 후부터 발생하는 상황이 Write Defaults 설정에 의해 결정됩니다.
- **Write Defaults**를 활성화하면 해당 바인딩의 기본값이 바인딩에 작성됩니다. 비활성화하면 바인딩에 작성되지 않으므로 이전 값이 그대로 유지됩니다.

#### Transitions 목록

마지막 설정은 선택한 상태부터 시작하는 **Transitions** 목록입니다.

[Image: image]

이 목록은 전환의 우선순위로, 목록에 표시된 순서대로 전환 조건이 확인됩니다. 전환에 대한 자세한 내용은 [**3.5** **전환 생성 및 설정**](https://learn.unity.com/tutorial/3-5-animation-blending-transitions?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f)에서 다루겠습니다.

단계를 완료로 표시

## 12. 요약

Q&A (0)

이 튜토리얼에서는 애니메이터 상태가 어떻게 작동하는지 알아보았습니다. 배운 내용은 아래와 같습니다.

- 애니메이션 클립이 포함된 애니메이터 상태를 생성하거나 모션 없이 생성할 수 있다는 점
- 애니메이션 클립이 포함된 애니메이터 상태를 생성하는 방법
- 애니메이터 상태에서 애니메이션 Speed, Normalized Time, Cycle Offset 등의 설정을 구성하는 방법
- 휴머노이드 애니메이션으로 작업할 때 사용 가능한 설정에 대한 정보

이어지는 다음 튜토리얼에서는 [**블렌드 트리**](https://learn.unity.com/tutorial/3-4-creating-and-configuring-blend-trees?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f)에 대해 자세히 알아보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
