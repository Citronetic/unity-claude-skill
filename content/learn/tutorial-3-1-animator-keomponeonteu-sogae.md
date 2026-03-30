[Image: image]

# 3.1 Animator 컴포넌트 소개

Tutorial

Beginner

+10XP

20 mins

0

(10)

Unity Technologies

[Image: 3.1 Animator 컴포넌트 소개]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- Animator 컨트롤러의 구조를 알아보고, Animator 컨트롤러와 Animator 컴포넌트의 관계를 살펴봅니다.
- Animator 컴포넌트의 여러 가지 프로퍼티에 대한 정보와 각 프로퍼티를 적용해야 하는 경우를 알아봅니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서 살펴볼 내용은 다음과 같습니다.

- Animator 컨트롤러의 구조 및 Animator 컨트롤러와 Animator 컴포넌트의 관계
- Animator 컴포넌트의 여러 가지 프로퍼티에 대한 정보와 각 프로퍼티를 적용해야 하는 경우

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼을 완료하기 위해 '3D 애니메이션 시스템 소개'의 Unity 프로젝트를 사용하지 않아도 됩니다.

단계를 완료로 표시

## 3. 애니메이터 시스템의 구조 살펴보기

Q&A (0)

세부적인 내용으로 넘어가기 전에 애니메이터 시스템이 어떤 구조로 이루어져 있는지 단계별로 살펴보겠습니다.

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

개요 동영상에 나오는 모든 내용은 이 학습 프로젝트 전반에 걸쳐 더 자세히 다룰 예정입니다.

단계를 완료로 표시

## 4. 애니메이터 파라미터

Q&A (0)

Animator 컨트롤러의 또 다른 중요한 부분은 애니메이터 파라미터입니다.

애니메이터 파라미터에는 다음 네 가지 유형이 있습니다.

1. 플로트
2. 정수
3. 부울 값
4. 트리거

플로트, 정수, 부울 값 파라미터는 애니메이터에 데이터를 저장하며, 다양한 방법으로 활용될 수 있습니다. 반면 트리거 파라미터는 전환을 시작하는 용도로만 사용됩니다.

파라미터 데이터를 활용할 수 있는 용도의 예는 다음과 같습니다.

- 전환 조건 정의
- 상태 프로퍼티 제어
- 블렌드 트리 제어

[이 학습 프로젝트](https://learn.unity.com/project/the-animator?uv=2019.4&courseId=5eba874aedbc2a00219550ff)의 튜토리얼에서 애니메이터 파라미터의 각 용도를 살펴볼 수 있습니다.

단계를 완료로 표시

## 5. Animator 컴포넌트

Q&A (0)

Animator 컴포넌트는 바인딩 시스템의 루트 역할을 합니다.

바인딩은 다음 두 부분으로 구성됩니다.

1. 트랜스폼 경로
2. 프로퍼티 이름

트랜스폼 경로는 다음을 포함하는 문자열입니다.

- 게임 오브젝트에 도달하기 위해 반드시 통과해야 하는 계층 구조의 트랜스폼 이름
- 애니메이션화해야 하는 컴포넌트와 프로퍼티

Animator 컴포넌트와 동일한 게임 오브젝트에 있는 프로퍼티의 경우 경로가 비어 있습니다. 이 프로퍼티에 도달하기 위해 통과해야 할 트랜스폼이 없기 때문입니다. Animator 컴포넌트가 있는 게임 오브젝트의 직속 자식의 프로퍼티에는 해당 자식의 이름을 포함하는 트랜스폼 경로가 있습니다. 다른 게임 오브젝트의 계층 구조에서도 이런 패턴이 계속됩니다.

바인딩의 이런 패턴에서 기억해야 할 점은, Animator 컴포넌트와 동일한 게임 오브젝트 및 계층 구조에서 그 아래에 있는 프로퍼티만 애니메이터로 제어할 수 있다는 것입니다.

단계를 완료로 표시

## 6. Animator 컴포넌트 프로퍼티와 용도

Q&A (0)

애니메이터 시스템의 구조를 살펴볼 때 Animator 컴포넌트의 Controller 프로퍼티에 대해 배웠습니다. 이번에는 다른 프로퍼티가 어떤 역할을 하는지 알아보겠습니다.

#### Avatar 설정

휴머노이드 릭으로 캐릭터를 애니메이션화하지 않는 이상, Animator 컴포넌트의 **Avatar** 설정은 옵션입니다. 이 설정에서는 애니메이션화할 트랜스폼을 정의할 수 있습니다.

[Image: image]

#### Apply Root Motion

**Apply Root Motion** 설정은 루트 노드의 위치나 방향에 대해 변경한 내용을 적용할지 여부를 결정합니다. 활성화할 경우 변경 사항이 적용되고 애니메이션에서 루트 노드를 옮길 수 있습니다.

[Image: image]

루트 노드는 Animator 컴포넌트가 적용된 트랜스폼이 아닐 수도 있습니다. 아바타를 사용하는 계층 구조의 트랜스폼일 수도 있습니다.

#### Update Mode

Animator 컴포넌트의 **Update Mode**는 제어되는 프로퍼티를 업데이트하기 위해 애니메이터의 코드를 실행하는 시기에 영향을 줍니다.

[Image: image]

Update Mode를 **Normal**로 설정하면 업데이트가 렌더 시스템에 맞춰 진행됩니다(Update와 LateUpdate 메서드 호출 사이). 대부분의 경우 이 설정을 Normal에서 변경하지 않아도 됩니다.

Update Mode를 **Animate Physics**로 설정하면 업데이트가 FixedUpdate 메서드 호출 이후 물리 시스템에 맞춰 진행됩니다. 이 설정은 콜라이더가 이동되는 경우와 같이 애니메이션화하는 프로퍼티가 물리 엔진과 상호 작용해야 하는 경우에 유용합니다.

마지막 옵션은 **Unscaled Time**입니다. 이 설정이 활성화된 상태에서는 업데이트가 렌더 시스템에 맞춰 실행되지만, Time.timeScale의 영향을 받지 않습니다. 따라서 애니메이션의 속도가 바뀌지 않습니다. 이 설정은 UI 같은 요소의 속도를 동일하게 유지하되 게임의 나머지 부분은 속도를 낮추거나 높이려 할 때 유용합니다.

#### Culling Mode

마지막 설정은 **Culling Mode**입니다. 이 설정은 애니메이터가 효율을 위해 업데이트를 일시 중지하게 만드는 데 영향을 줍니다.

[Image: image]

기본 옵션은 **Always Animate**입니다. 이 옵션을 선택하면 애니메이터가 컬링되지 않습니다.

**Cull Update Transforms** 옵션을 선택하면 애니메이터 아래 모든 렌더러의 바운딩 박스가 현재 렌더링 중인 카메라의 절두체 바깥에 위치하는 동안 Transform 프로퍼티에 대한 작성을 모두 중단합니다. 단 한 가지 예외는 루트 모션이 여전히 적용된다는 것입니다. 이 옵션은 카메라를 통해 보이지 않을 때도 있는 애니메이션화된 캐릭터와 같은 경우에 사용할 수 있습니다. 그러면 캐릭터의 팔과 다리가 대부분의 시간 동안 처리되지 않다가 캐릭터가 나타나면 처리되기 때문에 성능이 향상됩니다.

마지막 옵션인 **Cull Completely**를 선택하면 애니메이터 아래 모든 렌더러의 바운딩 박스가 현재 렌더링 중인 카메라의 절두체 바깥에 위치하는 동안 모든 프로퍼티에 대한 작성이 중단됩니다.  이 옵션은 애니메이션화되었으며 고정된 상태의 게임 오브젝트에 사용해야 합니다.

단계를 완료로 표시

## 7. 요약

Q&A (0)

이 튜토리얼에서는 Animator 컴포넌트의 구조를 살펴보았습니다. 다음과 같은 내용도 배웠습니다.

- Animator 파라미터의 4가지 유형(플로트, 정수, 부울 값, 트리거)과 각 유형을 사용해야 하는 경우
- Animator 컴포넌트에서 바인딩과 트랜스폼 경로를 사용하는 방식
- 다양한 Animator 프로퍼티 및 모드와 각각을 사용해야 하는 경우

이어지는 다음 튜토리얼 [**3.2 애니메이션 블렌딩 소개**](https://learn.unity.com/tutorial/3-2-introduction-to-animation-blending?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f)에서는 애니메이션 블렌딩이 무엇이고 어떻게 작동하는지 알아봅니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
