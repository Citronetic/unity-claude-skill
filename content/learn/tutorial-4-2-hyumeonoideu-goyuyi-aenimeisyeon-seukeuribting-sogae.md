[Image: image]

# 4.2 휴머노이드 고유의 애니메이션 스크립팅 소개

Tutorial

Beginner

+10XP

40 mins

0

(7)

Unity Technologies

[Image: 4.2 휴머노이드 고유의 애니메이션 스크립팅 소개]Summary

이 튜토리얼에서는 휴머노이드 릭에만 제공되는 몇 가지 기능에 대해 알아봅니다.

이 튜토리얼은 C# 스크립팅 경험이 있는 학습자를 위한 휴머노이드 고유의 애니메이션 스크립팅 소개 자료입니다. 애니메이션 스크립팅에 대한 단계별 안내는 이 교육 과정의 범위에 해당하지 않습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 휴머노이드 릭에만 제공되는 몇 가지 기능에 대해 알아봅니다. 휴머노이드 릭에는 예측 가능한 구조체가 있고, Unity에서 트랜스폼 값을 설정하기 전에 이 구조체의 애니메이션이 '근육 공간'으로 전환됩니다. 따라서 IK 및 타겟 매칭 같은 기능을 빌트인할 수 있습니다.

이 튜토리얼은 C# 스크립팅 경험이 있는 학습자를 위한 휴머노이드 고유의 애니메이션 스크립팅 소개 자료입니다. 애니메이션 스크립팅에 대한 단계별 안내는 이 교육 과정의 범위에 해당하지 않습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.**프로젝트 창에서 **Assets** > **4.2 - Introduction to humanoid-specific animation scripting**으로 이동합니다.

단계를 완료로 표시

## 3. 타겟 매칭 및 IK 기초

Q&A (0)

정상적인 상황에서는 트랜스폼 계층 구조가 순운동학(줄여서 FK)이라는 시스템에서 작동합니다.

각 트랜스폼의 위치와 회전은 부모를 기준으로 설정되기 때문에, 부모의 위치나 회전을 변경하면 자식의 전역 위치와 회전이 영향을 받습니다. 휴머노이드 릭에서는 애니메이션에 이런 종류의 동작을 구현해야 합니다. 캐릭터의 어깨 위치를 변경하면 어깨부터 팔꿈치를 거쳐 손가락 끝까지 모든 부분의 위치가 바뀝니다.

하지만 계층 구조 맨 아래 근처(**이펙터**라고 함)에서 뼈대 위치나 회전을 따로 설정해야 하는 경우도 종종 있습니다. 이 경우 이펙터의 위치나 회전에 맞춰 계층 구조의 나머지 부분을 변경해야 합니다.

다음 두 가지 방법 중 하나를 활용하면 됩니다.

1. 타겟 매칭
2. 역운동학(줄여서 IK)

단계를 완료로 표시

## 4. 타겟 매칭 소개

Q&A (0)

타겟 매칭을 사용하면 계층 구조의 나머지 부분을 변경하지 않고도 이펙터에 올바른 위치나 회전을 적용하도록 계층 구조의 루트를 옮길 수 있습니다.

예를 들어, 게임 플레이어가 골목을 뛰어다니는 휴머노이드를 조종하는 상황을 생각해 보세요. 골목길에 낮은 울타리가 하나 있고 캐릭터가 울타리 위를 손으로 짚고 점프해서 넘어야 한다면, 플레이어가 정확히 어디에서 점프해야 할지 알기는 어렵겠지만 그 위치에 상관없이 캐릭터의 손은 반드시 울타리를 짚어야 합니다.

이 상황은 타겟 매칭의 좋은 사례입니다. 캐릭터의 포즈가 바뀌면 안 되고 애니메이션에서 점프 포즈가 설정된 상태를 유지해야 하지만, 캐릭터의 손은 게임 월드에서 특정한 지점에 위치해야 합니다.

단계를 완료로 표시

## 5. 역운동학 소개

Q&A (0)

IK는 계층 구조의 루트를 옮기지 않지만 캐릭터의 포즈는 변경합니다. IK에 사용되는 알고리즘이 아주 많은데, 이 모든 알고리즘의 공통점은 이펙터에 원하는 위치나 회전을 적용하도록 계층 구조 맨 위까지 뼈대의 위치나 회전을 설정한다는 것입니다.

IK는 휴머노이드 릭에 사용될 경우 팔이나 다리에 두 개의 뼈대를 사용합니다. 예를 들어, 플레이어가 테이블에 앉아 있고 손을 뻗어 무언가를 잡아야 하는 캐릭터를 조종하고 있는 상황을 떠올려 보세요. 캐릭터가 어디에 앉아 있는지, 잡으려는 아이템이 정확히 어디에 위치해 있는지 모른다면 IK를 사용해 아이템에 닿을 수 있도록 손 위치를 조정해야 합니다.

단계를 완료로 표시

## 6. 타겟 매칭

Q&A (0)

타겟 매칭은 Animator 컨트롤러의 MatchTarget 메서드를 사용해 실행됩니다. 매칭을 시작하기 전에 언제라도 타겟 매칭을 하려는 상태 도중에 메서드를 한 번 호출해야 합니다.

MatchTarget 메서드의 파라미터는 3개 그룹으로 나눌 수 있으며, 각 그룹에 2개의 파라미터가 있습니다. 3개의 그룹은 다음과 같습니다.

1. 매칭할 타겟에 대한 정보
2. 매칭할 이펙터에 대한 정보
3. 타겟 매칭이 발생해야 하는 상황에 대한 정보

타겟 정보 파라미터는 매칭할 월드 공간 위치와 매칭할 월드 공간 회전을 말합니다.

#### AvatarTarget

첫 번째 이펙터 정보 파라미터는 어떤 신체 부위가 이펙터인지 결정하기 위한 열거입니다. 이 파라미터를 AvatarTarget이라고 부르는 이유는 휴머노이드 아바타의 어떤 부위를 타겟에 매칭할지 결정하는 데 사용되기 때문입니다. AvatarTarget은 다음 값으로 구성됩니다.

- Root
- Body
- LeftFoot
- RightFoot
- LeftHand
- RightHand

Hand, Foot은 손과 발에 해당합니다. Root는 캐릭터의 루트, 보통 발 사이를 말하며, Body는 캐릭터의 무게 중심을 뜻합니다.

#### MatchTargetWeightMask

두 번째 이펙터 정보 파라미터는 MatchTargetWeightMask라는 구조체입니다. 이 파라미터는 이펙터가 원래 위치와 대상 위치 사이에서 어떻게 균형을 잡아야 할지 결정합니다.

다음 두 부분으로 나뉩니다.

- 위치 가중치
- 회전 가중치

위치 가중치(positionXYZWeight)는 Vector3로, 이펙터가 대상 위치의 축을 얼마나 사용할지 제어하기 위해서는 각 축에 0과 1 사이의 값이 있어야 합니다.

회전 가중치(rotationWeight라고 함)는 원래 회전과 대상 회전 간 선형 보간을 허용하는 플로트입니다.

마지막 파라미터 두 개는 상태의 정규화된 시간을 제공하는 플로트입니다. 이 시간에 맞춰 타겟 매칭을 시작하고 타겟에 도달해야 합니다.

단계를 완료로 표시

## 7. 타겟 매칭 예제 살펴보기

Q&A (0)

낮은 울타리 예제를 활용해서 MatchTarget을 사용해 보겠습니다.

**1.**프로젝트 창에서 **Assets** > **4.2 - Humanoid-specific animation scripting > Scenes**로 이동합니다.

**2.**  **HumanoidAnimation**씬을 더블 클릭해 로드합니다.

**3.** 계층 구조에서 **MazeLowMan** 게임 오브젝트를 선택합니다.

**4.**  인스펙터에서 **Vault Target Matching** 스크립트를 비활성화합니다. 이렇게 하면 설정된 타겟 매칭이 사용되지 않으므로 일반적으로 어떻게 표시되는지 확인할 수 있습니다.

[Image: image]

**5.**  **플레이** 버튼을 눌러 플레이 모드를 시작합니다.

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

**참고:**캐릭터가 벽을 살짝 통과하는 경우, 캐릭터의 왼쪽 손을 벽 위에 매칭해 수정할 수 있습니다.

**6. 플레이** 버튼을 눌러 플레이 모드를 종료합니다.

**7.**  인스펙터에서 **Vault Target Matching** 스크립트를 다시 활성화합니다.

**8. 플레이**버튼을 다시 눌러 플레이 모드를 다시 시작합니다.

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

이제 캐릭터가 벽을 올바르게 뛰어넘습니다. 캐릭터가 벽을 뛰어넘는 애니메이션을 보통 게임에서 하는 것보다 약간 더 늘렸습니다. 이는 스크립트에서 변경된 사항을 보여 주기 위해 의도적으로 늘린 것입니다. 프로젝트에 비슷한 시스템을 구현할 때에는 타겟 매칭을 이보다 약간 근접하게 설정해야 합니다.

**9.**  **플레이**버튼을 눌러 플레이 모드를 종료합니다.

단계를 완료로 표시

## 8. 휴머노이드 역운동학

Q&A (0)

애니메이터가 사용하는 2-뼈대 역운동학(IK) 알고리즘과 함께 사용되는 중요한 변수 세 가지는 다음과 같습니다.

1. 대상 위치
2. 대상 회전
3. 힌트 위치

대상 위치와 회전은 손이나 발이 도달하려는 위치와 회전을 말합니다. 힌트 위치는 팔꿈치나 무릎이 도달하려는 위치를 말합니다.

예를 들어, 테이블에 앉아서 책상에 있는 부채를 잡으려는 휴머노이드의 모습을 상상해 보세요. 여기서 대상 위치는 부채입니다. 대상 위치, 어깨와 힌트 위치가 평면을 형성합니다. 팔꿈치는 이 평면상에서 힌트 위치와 최대한 가까운 곳에 있습니다.

[Image: image]단계를 완료로 표시

## 9. IK 메서드 살펴보기

Q&A (0)

세 가지 중요 변수는 저마다 가중치가 다르고, 팔이나 다리 중 하나에 적용할 수 있습니다. Animator 컨트롤러에는 이 각각의 변수와 가중치를 설정할 수 있는 총 6개의 메서드가 있습니다. 메서드는 다음과 같습니다.

- SetIKHintPosition
- SetIKHintPositionWeight
- SetIKPosition
- SetIKPositionWeight
- SetIKRotation
- SetIKRotationWeight

이 메서드는 모두 패턴을 따르며, 다음과 같은 두 개의 파라미터로 구성됩니다.

- 영향을 줄 신체 부위
- 설정할 값

신체 부위를 나타내는 타입과 값은 메서드마다 차이가 있습니다. 힌트에 영향을 주는 메서드의 경우 신체 부위가 AvatarIKHint라는 열거로, 왼쪽이나 오른쪽 무릎 또는 팔꿈치에 해당할 수 있습니다.

다른 메서드의 경우 신체 부위가 AvatarIKGoal이라는 열거이며, 왼쪽이나 오른쪽 발 또는 손에 해당할 수 있습니다.

가중치를 설정하는 메서드는 플로트를 값으로 사용합니다. 위치를 설정하는 메서드는 Vector3를 값으로 사용하고, SetIKRotation 메서드는 쿼터니언을 값으로 사용합니다.

#### OnAnimatorIK 메서드 사용

이 메서드는 애니메이터의 IK Pass 중에 호출해야 합니다. 이를 위해서는 MonoBehaviour의 OnAnimatorIK 메서드를 사용해야 합니다.

OnAnimatorIK는 MonoBehaviour의 Update와 매우 유사하게 작동합니다. Update 또는 FixedUpdate(애니메이터의 업데이트 모드에 따라 다름) 바로 다음에 발생하는 애니메이터 업데이트 중에 호출됩니다.

OnAnimatorIK는 IK Pass가 활성화되어 있는 모든 애니메이터 레이어에서 업데이트당 한 번 호출됩니다. 호출할 때마다 레이어의 인덱스가 파라미터로 전달되기 때문에, IK를 사용하는 다양한 상황을 따로 처리할 수 있습니다.

단계를 완료로 표시

## 10. 요약

Q&A (0)

이 튜토리얼에서는 휴머노이드 릭에 특수하게 적용되는 스크립팅에 대해 알아보았습니다. 살펴본 내용은 다음과 같습니다.

- 타겟 매칭과 역운동학(IK) 간의 차이와 각각을 사용해야 하는 경우
- 스크립팅을 사용해 타겟 매칭과 IK를 설정하는 방법

이것으로 3D 애니메이션 소개 과정을 마쳤습니다. 멋진 `결과물`을 기대하겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
