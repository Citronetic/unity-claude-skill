[Image: image]

# 4.1 일반 애니메이션 스크립팅 소개

Tutorial

Beginner

+10XP

50 mins

1

(7)

Unity Technologies

[Image: 4.1 일반 애니메이션 스크립팅 소개]Summary

이 튜토리얼에서는 애니메이션 스크립팅의 기초를 살펴보겠습니다. 특히 Animator 컨트롤러에서 어떻게 데이터를 가져오고 설정하는지 배울 수 있습니다.

이 튜토리얼은 C# 스크립팅 경험이 있는 학습자를 위한 일반 애니메이션 스크립팅 소개 자료입니다. 애니메이션 스크립팅에 대한 단계별 안내는 이 교육 과정의 범위에 해당하지 않습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 애니메이션 스크립팅의 기초를 살펴보겠습니다. 특히 Animator 컨트롤러에서 어떻게 데이터를 가져오고 설정하는지 배울 수 있습니다.

여기서 다루는 대부분의 스크립팅은 Animator 컴포넌트에 나오는 메서드에 관한 것입니다. 이러한 메서드를 사용하기 전에 Animator 컴포넌트에 대한 레퍼런스를 찾아보세요.

이 튜토리얼은 C# 스크립팅 경험이 있는 학습자를 위한 일반 애니메이션 스크립팅 소개 자료입니다. 애니메이션 스크립팅에 대한 단계별 안내는 이 교육 과정의 범위에 해당하지 않습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.**프로젝트 창에서 **Assets** > **4.1 - Introduction to general animation scripting**으로 이동합니다.

단계를 완료로 표시

## 3. 애니메이터 파라미터 값 제어

Q&A (0)

애니메이션에 영향을 주는 가장 기초적인 스크립팅 기법은 애니메이터 파라미터의 값을 가져오고 설정하는 것일 수 있습니다.

애니메이터 파라미터는 애니메이터 작동 방식을 제어할 때 다양한 용도로 사용됩니다.

- 전환 시작 시기
- 블렌드 트리의 블렌딩 값 및 블렌딩 위치
- 상태에 관한 다양한 설정

단계를 완료로 표시

## 4. 애니메이터 파라미터 값 설정

Q&A (0)

런타임 시 애니메이터 파라미터 값을 제어할 수 있어야 하는데, 이때 다음 4가지 메서드를 사용할 수 있습니다.

- animator.SetBool()
- animator.SetFloat()
- animator.SetInteger()
- animator.SetTrigger()

메서드가 제대로 작동하려면 다음 두 가지를 파악하고 있어야 합니다.

- 설정 대상 파라미터
- 설정 중인 값

트리거 파라미터는 예외입니다. 트리거 파라미터에는 값이 없으며, 설정할 파라미터만 알면 됩니다.

메서드에 어떤 파라미터를 설정하고 있는지 알리는 방법은 다음과 같은 두 가지가 있습니다.

1. 이름 문자열 사용
2. 해시라는 이름의 정수 표현 사용

플로트 파라미터의 값을 설정하기 위한 호출을 예로 들면 다음과 같습니다.

```csharp
animator.SetFloat(“Speed”, 5f);
```

아니면 다음과 같습니다.

```csharp
animator.SetFloat(speedParameterHash, 5f);
```

#### 문자열 해시

두 번째 사례에서 **speedParameterHash**는 찾은 다음 사용할 수 있는 속도 파라미터 이름의 해시입니다. 가능하면 항상 문자열 대신 이름 해시를 사용하는 것이 좋습니다.

Animator 컨트롤러에서 문자열에 대한 해시를 생성하려면 다음 정적 메서드를 사용합니다.

```csharp
Animator.StringToHash()
```

이 메서드는 하나의 문자열 파라미터, 즉 전환하려는 이름을 사용합니다.

이 메서드는 정적이며 컴파일-시간 상수입니다. 즉, 아래와 같이 멤버 변수를 초기화하는 데 사용할 수 있습니다.

```csharp
int speedParameterHash = Animator.StringToHash(“Speed”);
```

꼭 필요한 사항은 아니지만, 메서드의 모든 인스턴스에 걸쳐 파라미터의 이름이 똑같을 가능성이 높기 때문에 이 해시를 정적으로 만들었습니다.

해시는 항상 동일하므로 실수로 변경되지 않도록 읽기 전용으로 만들 수 있습니다. 이와 같이 수정하면 다음과 같은 코드가 생성됩니다.

```csharp
static readonly int speedParameterHash = Animator.StringToHash(“Speed”);
```

#### 예제 살펴보기

전체 예제를 확인하는 방법은 다음과 같습니다.

**1.**  프로젝트 창에서 **Assets** > **4.1 - Introduction to general animation scripting**으로 이동합니다.

**2.**  **SetParametersExample** 에셋을 더블 클릭해 코드 에디터에서 메서드를 엽니다.

```csharp
using UnityEngine;
public class SetParametersExample : MonoBehaviour
{
   public Animator animator;
   static readonly int speedParameterHash = Animator.StringToHash("Speed");
   void Update()
   {
       animator.SetFloat(speedParameterHash, 5f);
   }
}
```

단계를 완료로 표시

## 5. 애니메이터 파라미터 값 가져오기

Q&A (0)

파라미터의 경우 이미 설정하는 방법을 배웠습니다. 하지만 그 값을 가져오는 것이 도움이 될 때도 있습니다. 다음 메서드를 사용하면 값을 가져올 수 있습니다.

- animator.GetBool()
- animator.GetFloat()
- animator.GetInteger()

트리거 파라미터에는 값이 없기 때문에 값을 가져오는 메서드가 없습니다.

이러한 메서드는 값을 설정하는 메서드와 매우 비슷한 원리로 작동합니다. 검색되는 값이 속한 파라미터의 이름이 필요하다는 점에서는 차이가 있습니다.

#### 예시

각 메서드는 해당 파라미터의 값을 반환합니다. 부울 파라미터의 값을 가져오기 위한 호출을 예로 들면 다음과 같습니다.

```csharp
bool isCharacterGrounded = animator.GetBool(“IsGrounded”);
```

아니면 다음과 같습니다.

```csharp
bool isCharacterGrounded = animator.GetBool(isGroundedParameterHash);
```

애니메이터 파라미터의 값을 가져와야 하는 가장 일반적인 이유 중 하나로, 스크립트가 아니라 임포트된 애니메이션에 의해 설정된 경우를 들 수 있습니다.

임포트된 애니메이션의 경우 추가 애니메이션 커브를 사용하는 옵션이 있고, 이러한 추가 애니메이션 커브 각각에는 이름이 있어야 합니다. 이 이름이 플로트 애니메이터 파라미터와 같으면 애니메이션이 평가되는 동안 파라미터의 값이 애니메이션 커브의 값으로 설정됩니다.

이 애니메이션 커브는 가중치의 영향을 받으므로, 애니메이션 두 개가 블렌딩될 경우 애니메이터 파라미터의 값은 각 애니메이션의 값 사이의 블렌딩이 됩니다.

단계를 완료로 표시

## 6. 애니메이터 레이어 가중치 제어

Q&A (0)

애니메이터 파라미터를 가져오고 설정할 때와 비슷한 기법을 사용해 애니메이터 레이어의 가중치를 가져오고 설정할 수 있습니다.

다음 메서드를 사용하면 됩니다.

- animator.SetLayerWeight()
- animator.GetLayerWeight()

이러한 메서드를 사용하려면 애니메이터 파라미터 메서드에서와 비슷한 정보가 필요합니다. 무엇을 가져오거나 설정하는지, 가중치를 어떤 값으로 설정할지 알아야 합니다.

#### 예시

이 메서드를 사용하는 최종 코드는 아래와 같습니다.

```csharp
animator.SetLayerWeight (1, 0.5f);
```

아니면 다음과 같습니다.

```csharp
float shootingLayerWeight = animator.GetLayerWeight (2);
```

이 연산은 두 개 이상의 애니메이터 레이어를 사용하는 Animator 컨트롤러에서 중요합니다. 여기에 대한 자세한 내용은 [**애니메이터 레이어 생성 및 설정**](https://learn.unity.com/tutorial/3-7-creating-and-configuring-animator-layers?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f)을 참조하세요.

단계를 완료로 표시

## 7. 플로 제어 소개

Q&A (0)

전환을 제어하는 것이 애니메이터 파라미터의 주된 역할 중 하나이지만, 주로 개별적으로 플레이되는 애니메이션의 플로를 제어하는 용도로 활용하려는 때도 가끔 있습니다. 그럴 때에는 다음 메서드를 사용하면 됩니다.

- Play()
- PlayInFixedTime()
- CrossFade()
- CrossFadeInFixedTime()

단계를 완료로 표시

## 8. Play 및 PlayInFixedTime 사용

Q&A (0)

**Play()** 및 **PlayInFixedTime()** 모두 지정된 이름의 상태를 플레이하는 동일한 기능을 하며, 그 방법만 약간 다릅니다.

두 메서드 모두 최대 3개의 파라미터를 포함할 수 있습니다.

- 플레이할 상태의 이름(상태 이름의 해시 또는 문자열)
- 플레이할 상태가 위치한 레이어의 인덱스
- 상태가 플레이를 시작해야 하는 시간

Play()의 시간 파라미터는 0~1의 정규화된 시간 단위이고, PlayInFixedTime()의 시간 파라미터는 초 단위라는 차이가 있습니다.

따라서 Play() 메서드에서 마지막 파라미터의 값이 **0.5f**이면 상태 중간쯤에 전환이 플레이되기 시작합니다. PlayInFixedTime()의 경우 상태가 0.5초 진행되었을 때 플레이가 시작됩니다.

#### 예시

이 메서드에 대한 호출은 다음과 같이 표시될 수 있습니다.

```csharp
animator.Play(“Run”, 0, 0.1f);
```

아니면 다음과 같습니다.

```csharp
animator.PlayInFixedTime(shootStateHash, 1, 0f);
```

두 번째 사례에서 **shootStateHash**는 플레이할 상태 이름의 해시입니다.

단계를 완료로 표시

## 9. CrossFade 및 CrossFadeInFixedTime 사용

Q&A (0)

**CrossFade()**및 **CrossFadeInFixedTime()** 메서드는 Play() 및 PlayInFixedTime()과 매우 비슷하지만 작동 원리는 전환과 더 비슷합니다. 때문에 Play() 및 PlayInFixedTime() 메서드보다 더 많은 정보를 요합니다.

CrossFade() 및 CrossFadeInFixedTime() 메서드 모두 최대 5개의 파라미터를 포함할 수 있습니다.

- 크로스 페이드할 대상 상태의 이름(상태 이름의 문자열 또는 해시)
- 페이드에 걸리는 시간
- 크로스 페이드할 대상 상태의 레이어의 인덱스
- 전환되는 대상 상태까지의 오프셋
- 페이드가 시작되기까지 걸리는 시간

Play() 및 PlayInFixedTime()의 경우처럼 두 메서드 사이의 차이점은 CrossFade()가 파라미터에 정규화된 시간 단위를 사용하는 반면, CrossFadeInFixedTime()은 초 단위를 사용한다는 것입니다.

여기서 한 가지 예외는 최종 파라미터(페이드가 시작되기까지 걸리는 시간)가 두 메서드에서 모두 정규화된 시간 단위여야 한다는 것입니다.

단계를 완료로 표시

## 10. 플로 제어 예제 살펴보기

Q&A (0)

메서드가 사용되는 몇 가지 예를 살펴보겠습니다.

```csharp
animator.CrossFade(walkStateHash, 1f, 0, 0.1f, 0f);
```

위의 예는 walkStateHash로 표시되는 이름의 상태로 크로스 페이드되는 상황입니다. 이 크로스 페이드에 걸리는 시간은 페이드가 시작되는 상태의 시간과 동일합니다. **정규화된 전환 기간 파라미터**가 **1**이기 때문입니다.

애니메이터 레이어 인덱스에 **0**으로 표시된 것처럼 **기본 애니메이터 레이어**의 두 상태 사이에서 페이드가 일어나고 있습니다. 크로스 페이드가 시작되면 다음 세 가지 현상이 발생합니다.

1. 페이드를 통해 변하는 상태가 일반적인 전환처럼 플레이되기 시작합니다.
2. **시간 오프셋**에 대한 파라미터가 **0.1f**이기 때문에 전환을 통해 변하는 상태가 10분의 1 정도 진행되면 플레이되기 시작합니다.
3. **0f**의 **정규화된 시간**으로 시작하기 때문에 전체 전환이 플레이됩니다.

#### 예제 살펴보기

Unity 에디터에서 예시 스크립트를 살펴보는 방법은 다음과 같습니다.

**1.**프로젝트 창에서 **Assets**> **4.1 -** **Introduction to general animation scripting**으로 이동합니다.

**2.** **FlowControlExample**에셋을 더블 클릭해 코드 에디터에서 메서드를 엽니다.

```csharp
using UnityEngine;
public class FlowControlExample : MonoBehaviour

{
   public Animator animator;
   static readonly int shootStateHash = Animator.StringToHash("Shoot");
   static readonly int walkStateHash = Animator.StringToHash("Walk");
   void Start()
   {
       animator.Play("Run", 0, 0.1f);
   }
   void Update()
   {
       if(Input.GetKeyDown(KeyCode.Space))
           animator.PlayInFixedTime(shootStateHash, 1, 0f);
       if(Input.GetKeyDown(KeyCode.LeftShift))
           animator.CrossFade(walkStateHash, 1f, 0, 0.1f, 0f);
   }
}
```

단계를 완료로 표시

## 11. MonoBehaviour 메시지

Q&A (0)

파라미터를 가져오고 설정하거나 여러 다른 상태를 플레이하거나 그러한 상태로 크로스 페이드하는 경우와 같은 대부분의 애니메이션 스크립팅은 MonoBehaviour의 Update 또는 FixedUpdate 호출에서 수행할 수 있습니다. 그러나 OnAnimatorMove와 OnAnimatorIK처럼 MonoBehaviour에 속하는 메시지 메서드는 다른 위치에서 수행해야 합니다.

#### OnAnimatorIK

OnAnimatorIK 메서드는 Animator 컴포넌트에 휴머노이드 아바타가 있는 경우에만 호출되며, IK의 경우에 사용해야 합니다. 이 메서드에 대해서는 [**4.2 휴머노이드 고유의 애니메이션 스크립팅 소개**](https://learn.unity.com/tutorial/4-2-introduction-to-humanoid-specific-animation-scripting?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa08eedbc2a00215c11c3)에서 자세히 알아볼 수 있습니다.

#### OnAnimatorMove

OnAnimatorMove 메서드는 휴머노이드와 제네릭 애니메이션의 경우에 호출됩니다. 보통 루트 모션은 Animator 컴포넌트에서 활성화되거나 비활성화되지만, MonoBehaviour가 OnAnimatorMove 메서드를 호출하면 이를 통해 루트 모션을 제어하게 됩니다. 이는 Animator 컴포넌트가 변경되는 것으로 간주할 수 있습니다.

[Image: image]

OnAnimatorMove 메서드가 비어 있으면 애니메이터가 마치 루트 모션이 없는 것처럼 동작합니다. 그러나 animator.deltaPosition 및 animator.deltaRotation 프로퍼티를 사용하면 이러한 동작을 변경할 수 있습니다.

이 같은 변경 사항을 OnAnimatorMove 메서드의 루트 트랜스폼에 적용하면 Animator 컨트롤러가 루트 모션을 정상적으로 적용하는 것처럼 동작합니다. 사용 중인 Animator 컨트롤러에 필요한 대로 이러한 부분을 알맞게 변경할 수 있습니다.

#### 호출 순서

이 메시지가 Animator 컨트롤러의 내부 업데이트 프로세스 시기에 맞춰 호출된다는 점을 기억해야 합니다. 이 프로세스는 Animator 컴포넌트에서 설정된 Update Mode를 기준으로 바뀝니다.

[Image: image]

**Update Mode**가 **Normal**로 설정되면 Update 메서드가 먼저 호출되고 그 뒤에 OnAnimatorMove, OnAnimatorIK, LateUpdate가 차례로 호출됩니다.

**Update Mode**가 **Animate Physics**로 설정되면 FixedUpdate가 먼저 호출되고 그 뒤에 OnAnimatorMove가 호출된 다음, 물리 시스템이 내부 업데이트를 실행해 충돌이 있는지 확인하고 해결한 뒤 최종적으로 OnAnimatorIK를 호출합니다.

단계를 완료로 표시

## 12. 상태 및 애니메이션 클립 정보

Q&A (0)

경우에 따라서 파라미터 값 외에도 Animator 컨트롤러에서 현재 어떤 일이 발생하고 있는지에 대해 더 많은 정보를 알면 도움이 됩니다. Animator 컨트롤러의 상황을 알아내는 데 사용할 수 있는 몇 가지 메서드가 있습니다.

#### 전환 중인지 여부

Animator 컨트롤러의 특정 애니메이션 레이어가 상태 사이에서 전환 중인지 확인하기 위해 다음을 사용할 수 있습니다.

```csharp
animator.IsInTransition()
```

이 메서드는 확인하려는 애니메이터 레이어의 인덱스에 대한 정수 파라미터를 가져가 **애니메이터 레이어가 현재 전환 중**이면 **true**를, 그렇지 않으면 false를 반환합니다.

#### 플레이 중인 상태

Animator 컨트롤러가 현재 어떤 상태인지 확인하고, 해당 애니메이터 레이어에서 Animator 컨트롤러가 전환 중일 경우 다음 상태가 무엇이 될지도 확인하려는 경우도 있습니다. 다음 두 메서드를 사용하면 가능합니다.

1. **animator.GetCurrentAnimatorStateInfo()**
2. **animator.GetNextAnimatorStateInfo()**

위의 메서드는 쿼리해야 하는 애니메이터 레이어의 인덱스에 대한 정수를 가져가 AnimatorStateInfo라는 구조체를 반환합니다. 여기에는 상태에 대한 간단한 정보가 포함됩니다.

- 길이
- 이름 및 태그의 해시
- 속도

애니메이터 레이어가 전환 중이지 않은 상태에서 다음 상태에 대한 정보를 얻으려 하면(다음 상태가 없음) AnimatorStateInfo의 내용이 모두 기본값으로 반환됩니다.

#### 애니메이션 클립에 대한 정보 가져오기

플레이 중인 애니메이션 클립에 대한 정보를 얻으려면 다음 두 메서드를 사용합니다.

1. **animator.GetCurrentAnimatorClipInfo()**
2. **animator.GetNextAnimatorClipInfo()**

이 메서드는 AnimatorStateInfo를 가져오는 데 사용한 메서드와 비슷한 원리로 작동합니다. 둘 다 애니메이터 레이어에 대한 인덱스 파라미터가 있지만, AnimatorClipInfos 배열을 대신 반환합니다.

플레이되고 있는 애니메이션 클립과 그 가중치에 대한 레퍼런스가 있는 구조체입니다. 이 가중치는 블렌딩 가중치로, 블렌드 트리와 전환을 모두 고려하지만 애니메이터 레이어의 가중치는 고려하지 않습니다.

단계를 완료로 표시

## 13. 요약

Q&A (0)

이 튜토리얼에서는  Unity의 제네릭 애니메이션용 스크립팅을 살펴보았습니다. 스크립팅을 사용해 다음 작업을 수행하는 방법을 알아보았습니다.

- 애니메이터 파라미터 값 제어 및 설정
- 애니메이터 레이어 가중치 제어
- Play 및 PlayInFixedTime 사용
- CrossFade 및 CrossFadeInFixedTime 사용
- 플로 제어 살펴보기
- Monobehaviour 메시지 제어
- 상태 및 애니메이션 클립 정보 찾기

다음으로 [**휴머노이드 애니메이션으로 작업할 때에만 사용되는 스크립팅**](https://learn.unity.com/tutorial/4-2-introduction-to-humanoid-specific-animation-scripting?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa08eedbc2a00215c11c3)에 대해 알아보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
