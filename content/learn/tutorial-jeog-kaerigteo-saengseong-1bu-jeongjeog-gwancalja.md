[Image: image]

# 적 캐릭터 생성, 1부: 정적 관찰자

Tutorial

Beginner

+10XP

55 mins

4

(124)

Unity Technologies

[Image: 적 캐릭터 생성, 1부: 정적 관찰자]Summary

지금까지 튜토리얼을 따라 게임을 개발하면서 꽤 오랜 시간 동안 C#  스크립팅에 대해 학습했습니다. 하지만 아직 스텔스 게임에 필수적인 적 캐릭터를 생성하지 않았습니다.

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 움직이지 않는 가고일 적을 생성합니다.
- 가고일이 JohnLemon을 찾을 수 있도록 하는 커스텀 스크립트를 작성합니다.
- JohnLemon이 잡히면 게임을 재시작하도록 설정합니다.

본 튜토리얼을 마치면 레벨에 적합한 적 유형 1개가 생성됩니다.

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. 가고일 프리팹 설정

Q&A (0)

게임이 점점 형태를 갖추고 있습니다. 카메라는 주변 환경을 돌아다니는 JohnLemon을 따라다니며, JohnLemon이 집을 나가면 게임이 끝납니다. 하지만 빠진 것이 하나 있습니다. 게임이 완성되려면 적이 필요합니다.

본 튜토리얼에서는 유령의 집에 움직이지 않는 가고일을 적 캐릭터로 추가합니다.

먼저 JohnLemon을 만들 때와 마찬가지로 가고일 모델을 씬으로 가져옵니다.

**1.**프로젝트 창에서 **Assets > Models** 폴더로 이동하여 **Gargoyle** 에셋을 찾습니다.

[Image: image]

**2.**프로젝트 창에서 에셋을 계층 창으로 드래그하여 모델의 인스턴스를 생성합니다.

**3.**유령의 집에는 가고일 여러 마리가 필요합니다. 모델은 읽기 전용이기 때문에 프리팹을 생성한 후 변경할 수 있습니다.

Gargoyle 게임 오브젝트를 계층 창에서 프로젝트 창의 **Assets > Prefabs** 폴더로 드래그합니다. Create Prefab 대화 상자가 나타나면 **Original Prefab**을 선택합니다.

**4.**이제 가고일 프리팹을 생성했으니 열어서 변경해 보겠습니다. 이번에는 숏컷을 사용하겠습니다. 계층 구조에서 다음과 같이 **Gargoyle 게임 오브젝트 오른쪽에 있는 화살표**를 클릭합니다.

[Image: image]

프리팹이 열려 변경 가능한 상태가 됩니다.

게임에 가고일이 추가되었으니 이제 가고일을 설정해야 합니다. 우선 가고일을 애니메이션화해 보겠습니다.

단계를 완료로 표시

## 2. 가고일 애니메이션화

Q&A (0)

JohnLemon과 마찬가지로 가고일에도 특징적인 움직임이 있어 개성을 부여하고 게임의 분위기를 고조합니다. 가고일 캐릭터의 주된 목적은 플레이어를 잡는 것입니다.

가고일이 플레이하는 애니메이션은 하나밖에 없기 때문에 애니메이션 컨트롤러는 다음과 같이 매우 간단합니다.

**1.**프로젝트 창에서 **Assets > Animation > Animators** 폴더로 이동하여 오른쪽 클릭합니다.

**2.**컨텍스트 메뉴에서 **Create > Animator Controller**를 선택합니다. 새로운 애니메이션 컨트롤러의 이름을 “**Gargoyle**”로 설정합니다.

**3.  Gargoyle**을 더블 클릭하여 Animator 창을 엽니다.

**4.**프로젝트 창에서 **Assets > Animation > Animations**로 이동합니다.

**5.  Gargoyle@Idle** 모델 에셋을 펼칩니다.

[Image: image]

**6.  Idle**애니메이션을 프로젝트 창에서 Animator 창으로 드래그합니다. 애니메이터의 Idle 상태가 생성됩니다.

가고일의 간단한 애니메이션 컨트롤러가 생성되었지만 아직 Animator 컴포넌트에 할당되지 않았습니다.

**7.**프로젝트 창에서 **Assets > Animation > Animators** 폴더로 이동합니다.

**8.**계층 창에서 **Gargoyle** 게임 오브젝트를 선택합니다.

**9.**프로젝트 창의 가고일 Animator 컨트롤러를 인스펙터 창에 있는 가고일 Animator 컴포넌트의 **Controller**프로퍼티로 드래그합니다.

**10.**씬을 저장한 후 플레이 모드에서 가고일의 움직임을 확인합니다. 완료되면 플레이 모드를 종료합니다.

단계를 완료로 표시

## 3. 가고일에 콜라이더 추가

Q&A (0)

이번에는 콜라이더를 사용하여 플레이어가 가고일과 부딪히고, 또 가고일이 손전등 불빛으로 JohnLemon을 볼 수 있도록 만들어 보겠습니다.

콜라이더를 추가하는 방법은 다음과 같습니다.

**1.**Unity 에디터가 프리팹 모드인지 확인합니다. 프리팹 모드가 아닌 경우에는 가고일 프리팹을 생성할 때 배웠던 숏컷을 사용하면 됩니다.

**2.**인스펙터에서 Gargoyle 게임 오브젝트에 **Capsule Collider 컴포넌트**를 추가합니다.

[Image: image]

캡슐 콜라이더는 현재 적에 적합한 형태를 가지고 있습니다.

**3.**가고일 모델에 더욱 적합하도록 다음과 같이 설정을 변경합니다.

- Capsule Collider의 **Center** 프로퍼티를 (**0**, **0.9**, **0**)으로 변경합니다.
- **Radius** 프로퍼티를 **0.3**으로 변경합니다.
- **Height** 프로퍼티를 **1.8**로 변경합니다.

[Image: image][Image: image]

적 캐릭터의 모양과 훨씬 잘 들어맞습니다. 이제 플레이어가 가고일과 부딪힐 수 있게 되었습니다.

단계를 완료로 표시

## 4. 가고일 가시선 시뮬레이션을 위한 트리거 생성

Q&A (0)

아직 가고일은 JohnLemon을 찾아내지 못합니다. 게임의 엔딩을 생성할 때 캐릭터의 물리적 위치를 사용하여 이벤트를 트리거한 적이 있는데, 여기에서도 동일한 방법을 사용합니다. 우선 트리거를 생성한 후 가고일이 벽 너머를 보지 못하도록 하는 커스텀 스크립트를 작성해 보겠습니다.

위치 지정을 좀 더 쉽게 하기 위해 Gargoyle 게임 오브젝트의 자식으로 추가 게임 오브젝트를 생성하고 거기에 트리거를 배치하겠습니다.

트리거를 생성하는 방법은 다음과 같습니다.

**1.**계층 창에서 Gargoyle 게임 오브젝트를 오른쪽 클릭하고 Create Empty를 선택합니다.

[Image: image]

**2.**이 게임 오브젝트는 월드에 대한 가고일의 시점 역할을 하기 때문에 이름을 '**PointOfView**'로 설정합니다.

[Image: image]

**3.**애니메이션이 적용된 가고일은 고개를 약간 숙이고 정면을 향하고 있으므로, PointOfView 게임 오브젝트의 위치를 다시 지정해야 합니다. 인스펙터에서 해당 **Transform** 컴포넌트를 찾습니다.

- **Position**프로퍼티를 (**0**, **1.4**, **0.4**)로 변경합니다.
- **Rotation**프로퍼티를 (**20**, **0**, **0**)으로 변경합니다.

[Image: image]

**참고:** 씬 창의 Transform 핸들이 약간 아래를 향하고 있지 않다면 **Local**이 아니라 Global로 설정되어 있기 때문일 수 있습니다. 다음과 같이 툴바에서 핸들 회전 토글을 클릭하여 설정을 변경할 수 있습니다.

[Image: image]

가고일의 시점을 설정했으니 트리거를 추가하고 설정합니다.

**4.**인스펙터에서 **Capsule Collider**컴포넌트를 추가합니다.

**5.**컴포넌트의**Is Trigger** 체크박스를 활성화합니다.

**6.**이제 트리거의 설정을 조정해 보겠습니다.

- Capsule Collider의 **Center** 프로퍼티를 (**0**, **0**, **0.95**)로 변경합니다.
- **Radius** 프로퍼티를 **0.7**로 변경합니다.
- **Height** 프로퍼티를 **2**로 변경합니다.
- **Direction** 프로퍼티를 Y-Axis에서 **Z-Axis**
 로 변경합니다.

[Image: image]

이제 콜라이더가 가고일의 손전등 불빛과 일치합니다.

단계를 완료로 표시

## 5. 커스텀 Observer 스크립트 작성

Q&A (0)

트리거 생성이 완료되었으니 이제 JohnLemon이 트리거 영역으로 걸어 들어갔을 때 벌어질 일에 대한 스크립트를 작성해야 합니다.

새로운 스크립트를 생성하는 방법은 다음과 같습니다.

**1.**프로젝트 창에서 **Assets > Scripts**로 이동합니다.

**2.**Scripts 폴더를 오른쪽 클릭하고 **Create > C# Script**를 선택합니다. 새로운 스크립트의 이름을 '**Observer**'로 설정합니다.

이 이름은 스크립트의 역할, 즉 플레이어의 캐릭터를 관찰하고 이를 감지하면 게임을 재시작하는 역할을 나타냅니다. 이 스크립트는 다른 적에도 재사용될 수 있기 때문에 이름에 가고일을 포함하지 않도록 합니다.

**3.**Observer 스크립트 에셋을 Scripts 폴더에서 계층 창의 **PointOfView** 게임 오브젝트로 드래그하여 컴포넌트로 추가합니다.

**4.**스크립트 에셋을 더블 클릭하여 열고 변경합니다.

단계를 완료로 표시

## 6. 플레이어 캐릭터를 감지하는 클래스 추가

Q&A (0)

다음과 같이 플레이어 캐릭터를 감지하는 클래스를 추가하여 새로운 스크립트를 시작합니다.

**1.**GameEnding 스크립트와 마찬가지로, Start 및 Update 메서드와 해당 코멘트를 삭제합니다. 정리된 스크립트는 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{

}
```

**2.**우선 플레이어 캐릭터를 감지하는 Observer 클래스가 필요합니다. 스크립트의 중괄호 사이에 다음 라인을 추가합니다.

```csharp
public Transform player;
```

이는 GameEnding 트리거에 활용했던 접근 방식과는 약간 다릅니다. 이 스크립트는 게임 오브젝트가 아닌 플레이어 캐릭터의 **Transform**을 확인합니다. 이를 통해 손쉽게 JohnLemon의 위치에 접근하고 JohnLemon에게 시선이 닿는지 감지할 수 있습니다.

**3.**이전에 OnTriggerEnter라는 특수 메서드를 사용하여 플레이어 캐릭터를 감지하고, 부울 변수를 사용하여 캐릭터가 트리거 내에 위치하는지 여부를 저장한 적이 있습니다. 여기에서 이 방법을 재사용할 수 있습니다.

플레이어 트랜스폼 선언 바로 아래에 다음 라인을 추가합니다.

```csharp
bool m_IsPlayerInRange;
```

**4.**바로 아래에 OnTriggerEnter 메서드를 추가합니다.

```csharp
void OnTriggerEnter (Collider other)
    {

    }
```

**5.**GameEnding 스크립트와 마찬가지로, OnTriggerEnter가 호출될 때마다 JohnLemon이 실제로 공격 범위에 있는지 확인해야 합니다.

이를 확인하기 위해 OnTriggerEnter 메서드 중괄호 안에 다음과 같이 if 문을 추가합니다.

```csharp
if(other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
```

**6.**플레이어 캐릭터가 이 트리거 영역에 들어간다고 해서 자동으로 게임이 종료되는 것은 아닙니다. 예를 들어 중간에 벽이 있을 수도 있습니다. 따라서 JohnLemon이 트리거에서 언제 나가는지 감지하는 것 또한 중요합니다.

OnTriggerEnter의 반대인 특수 메서드 OnTriggerExit를 통해 간단하게 이를 감지할 수 있습니다.

OnTriggerEnter 메서드를 복사하여 바로 아래에 붙여 넣고 다음과 같이 Enter를 **Exit**로, true를 **false**로 변경합니다.

```csharp
void OnTriggerExit (Collider other)
    {
        if(other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }
```

**7.**스크립트가 다음과 같아야 합니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{
    public Transform player;

    bool m_IsPlayerInRange;

    void OnTriggerEnter (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
    }

    void OnTriggerExit (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }
}
```

단계를 완료로 표시

## 7. 적의 가시선 확인

Q&A (0)

이 게임에서는 JohnLemon에 대한 적의 가시선이 명확한지 확인해야 합니다. 이를 확인하지 않으면 실제로는 중간에 벽이 있는데도 게임이 종료될 수 있습니다. 플레이어 캐릭터의 위치는 언제든 바뀔 수 있기 때문에 프레임마다 이를 확인해야 합니다.

스크립트를 이어서 작성해 보겠습니다.

**1.**OnTriggerExit 바로 아래에 다음과 같이 Update 메서드를 추가합니다.

```csharp
void Update ()
    {

    }
```

**2.**실제로 플레이어 캐릭터가 범위 안에 있을 때만 가시선을 확인해야 합니다. Update 메서드의 중괄호 안에 다음 if 문을 추가합니다.

```csharp
if(m_IsPlayerInRange)
        {

        }
```

기본적인 코드는 거의 다 작성했습니다. 하지만 가시선을 어떻게 확인할 수 있을까요?

Unity에서는 한 지점에서 시작하는 선의 경로를 따라 콜라이더가 존재하는지 여부를 확인할 수 있습니다.  이렇게 특정 지점에서 시작하는 선을 **레이**라고 합니다.  이러한 레이를 따라 콜라이더를 확인하는 것을 **레이캐스트**라고 합니다.

레이에는 **원점**과 **방향**이 있어야 합니다. 원점은 단순히 PointOfView 게임 오브젝트의 위치가 되지만 방향 계산은 약간 더 복잡합니다.

**3.**IsPlayerInRange if 문 중괄호 안에 다음 코드 라인을 추가합니다.

```csharp
Vector3 direction = player.position - transform.position + Vector3.up;
```

이 코드는 **direction**이라는 새로운 Vector3를 생성합니다.  벡터 수학에 따르면 A부터 B까지의 벡터는 B - A입니다.  따라서 PointOfView 게임 오브젝트에서 JohnLemon까지의 방향은 JohnLemon의 위치에서 PointOfView 게임 오브젝트의 위치를 뺀 값입니다.

JohnLemon의 위치는 두 발 사이의 지면이라는 것을 기억하실 겁니다.  관찰자가 JohnLemon의 질량 중심을 볼 수 있도록 하려면 Vector3.up을 추가하여 방향을 한 단위 위로 향하게 해야 합니다.  Vector3.up은 (0, 1, 0)을 간단히 표현한 것입니다.

**4.**방향은 생성했으니 이번에는 레이를 생성해 보겠습니다. direction 변수 아래에 다음 코드 라인을 추가합니다.

```csharp
Ray ray = new Ray (transform.position, direction);
```

이 라인에는 이전에 보지 못했던 키워드인 **new**가 들어가 있습니다.  이 키워드는 해당 유형의 **생성자**라는 특수 메서드를 호출하여 새로운 인스턴스를 생성하는 데 사용됩니다.

생성자 호출에 반드시 사용되는 구문은 다음과 같습니다.

- 키워드 **new**
- 유형
- 소괄호
- 생성자 파라미터(이 경우에는 레이의 원점과 방향)

**5.**레이를 생성했으니 레이캐스트를 수행할 수 있습니다. Unity에는 매우 다양한 레이캐스트 메서드가 있지만 모두 두 가지 공통점이 있습니다. 모든 레이캐스트 메서드는 레이캐스트가 어느 레이를 따라 발생하는지 정의해야 하며, 감지하고자 하는 콜라이더의 종류를 제한해야 합니다.

여기서 사용할 레이캐스트 메서드는 무언가에 부딪히면 참, 부딪히지 않으면 거짓인 부울 값을 반환합니다.  부울을 반환하기 때문에 레이캐스트 메서드를 if 문에 삽입하면 매우 편리합니다. 레이캐스트가 무언가에 부딪힐 때에만 if 문의 코드가 실행됩니다.

레이가 생성된 위치 아래, 이전에 작성한 if 문 안에 다음 코드를 추가합니다.

```csharp
if(Physics.Raycast(ray))
            {

            }
```

**6.**이제 레이는 정의되었으며 레이캐스트가 감지할 수 있는 콜라이더는 아직 제한되지 않았습니다. 콜라이더에 대한 제한은 단일 콜라이더를 파악하기보다는 필터와 같은 방식으로 작동합니다. 레이캐스트에 부딪히는 것이 플레이어 캐릭터인지를 확인하려면 무엇이 부딪혔는지에 관한 정보가 필요합니다.

하지만 메서드로부터 반환을 통해 얻은 정보가 부울 값이라는 문제점이 있습니다. 따라서 **out 파라미터**를 사용하는 매우 유사한 레이캐스트 메서드를 사용합니다.

out 파라미터는 일반적인 파라미터와 같은 방식으로 작동하지만 out 키워드를 앞에 쓴다는 점이 다릅니다. 이러한 파라미터는 메서드를 통해 값을 변경하거나 설정하여, 호출하는 어떤 주체든 해당 값을 사용할 수 있도록 합니다. out 파라미터에는 **RaycastHit**이라는 유형이 있으며, 레이캐스트 메서드는 레이캐스트에 부딪히는 대상에 관한 정보로 해당 데이터를 설정합니다.

레이를 생성하는 라인과 레이캐스트 if 문 사이에 다음 코드를 추가합니다.

```csharp
RaycastHit raycastHit;
```

이 라인은 RaycastHit 변수를 정의합니다.

**7.**다음으로 이 변수를 활용하기 위해 레이캐스트 메서드를 변경해야 합니다. 레이캐스트 메서드를 사용하여 if 문을 다음과 같이 변경합니다.

```csharp
if(Physics.Raycast(ray, out raycastHit))
            {

            }
```

이는 다른 레이캐스트 메서드와 매우 유사한 방식으로 작동하지만 out 파라미터를 통해 정보를 반환합니다.

**8.**이제 스크립트가 플레이어 캐릭터가 공격 범위에 있음을 식별하고, 레이캐스트를 실행하여 부딪히는 대상이 있는지 파악할 수 있습니다. 다음으로는 부딪힌 물체가 무엇인지 확인해야 합니다.

레이캐스트의 if 문 안에 다음 코드를 추가합니다.

```csharp
if(raycastHit.collider.transform == player)
                {

                }
```

**9.**이제 게임을 종료해야 합니다. 이를 위해서는 GameEnding 클래스에 대한 레퍼런스가 필요합니다.

스크립트 상단의 플레이어와 m_IsPlayerInRange 변수 선언 사이에 다음 코드를 추가합니다.

```csharp
public GameEnding gameEnding;
```

GameEnding은 GameObject 및 Transform과 유사한 클래스로, 각자 메서드와 변수는 다르지만 레퍼런스는 완전히 동일한 방식으로 실행됩니다.

**10.**Observer 스크립트 작성이 거의 끝나갑니다. 지금까지 작성한 스크립트를 검토해 보겠습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Observer : MonoBehaviour
{
    public Transform player;
    public GameEnding gameEnding;

    bool m_IsPlayerInRange;

    void OnTriggerEnter (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = true;
        }
    }

    void OnTriggerExit (Collider other)
    {
        if (other.transform == player)
        {
            m_IsPlayerInRange = false;
        }
    }

    void Update ()
    {
        if (m_IsPlayerInRange)
        {
            Vector3 direction = player.position - transform.position + Vector3.up;
            Ray ray = new Ray(transform.position, direction);
            RaycastHit raycastHit;

            if(Physics.Raycast(ray, out raycastHit))
            {
                if (raycastHit.collider.transform == player)
                {

                }
            }
        }
    }
}
```

**11.**현재 이 GameEnding 클래스에는 플레이어 캐릭터가 적에게 잡혔을 때 호출할 대상이 없습니다. 여기에 기능을 조금 추가해야 합니다.

Observer 스크립트를 저장하고 GameEnding 스크립트를 편집하기 위해 엽니다. 코드 에디터에서 바로 GameEnding 스크립트를 열거나 Unity 에디터로 돌아가 일반적인 방법으로 열 수 있습니다.

단계를 완료로 표시

## 8. GameEnding 스크립트 수정

Q&A (0)

이 게임에서는 JohnLemon이 탈출하는 경우와 잡히는 경우, 이렇게 2가지 방식으로 레벨이 종료됩니다. 현재 GameEnding 스크립트에는 탈출하는 경우만 포함되어 있습니다. 본 섹션에서는 플레이어가 적에게 잡힐 때 게임을 종료하는 대신 레벨을 재시작할 수 있도록 스크립트를 수정합니다.

시작하기 전에, 다음과 같이 GameEnding 스크립트를 검토합니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public float displayImageDuration = 1f;
    public GameObject player;
    public CanvasGroup exitBackgroundImageCanvasGroup;

    bool m_IsPlayerAtExit;
    float m_Timer;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    void Update ()
    {
        if(m_IsPlayerAtExit)
        {
            EndLevel ();
        }
    }

    void EndLevel ()
    {
        m_Timer += Time.deltaTime;

        exitBackgroundImageCanvasGroup.alpha = m_Timer / fadeDuration;

        if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit ();
        }
    }
}
```

단계를 완료로 표시

## 9. 레벨을 종료하는 2가지 방식 제작

Q&A (0)

레벨을 종료할 수 있는 2가지 방식을 스크립트에 추가해 보겠습니다.

**1.**우선 **exitBackgroundImageCanvasGroup 변수 선언** 아래에 다음 코드를 추가합니다.

```csharp
public CanvasGroup caughtBackgroundImageCanvasGroup;
```

이를 통해 JohnLemon이 잡혔을 때 나타날 새로운 이미지의 CanvasGroup이 생성되었습니다.

**2.  m_IsPlayerAtExit 변수 선언** 아래에 다음을 추가합니다.

```csharp
bool m_IsPlayerCaught;
```

이전 튜토리얼에서 JohnLemon이 출구에 도착했는지 확인하기 위한 변수를 생성한 것과 동일하게, 이 변수는 JohnLemon이 적에게 잡혔는지 확인합니다.

**3.**방금 생성한 두 개의 변수는 어떻게 사용해야 할까요? JohnLemon이 잡히면 게임이 종료되어야 하지만, 탈출과는 다른 방식으로 종료되어야 합니다.

먼저 Update 메서드에 **else-if 문**을 추가합니다. else-if 문은 추가로 확인할 사항이 있는 경우 if 문 다음에 사용할 수 있습니다.  Update 메서드의 if 문 아래에 다음 코드를 추가합니다.

```csharp
else if(m_IsPlayerCaught)
    {
        EndLevel ();
    }
```

이제 Update 메서드는 다음과 같습니다.

```csharp
void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel ();
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel ();
        }
    }
```

이 메서드는 컴퓨터에 'm_IsPlayerAtExit가 참이면 EndLevel을 호출하고,  참이 아니면 m_IsPlayerCaught 값을 확인하여 그 값이 참이면 EndLevel을 호출'하도록 지시합니다.

현재 두 메서드가 동일하기 때문에 이를 수정해야 합니다. m_IsPlayerAtExit가 참이면 exitBackgroundImageCanvasGroup을 페이드인해야 합니다. **m_IsPlayerCaught**가 참이면 **caughtBackgroundImageCanvasGroup**을 페이드인해야 합니다.

**4.**이 문제를 해결하려면 CanvasGroup 파라미터를 EndLevel 메서드에 보내 새로운 파라미터의 알파 값을 변경할 수 있도록 해야 합니다.

EndLevel 메서드를 변경하려면 다음과 같이 작성합니다.

```csharp
void EndLevel (CanvasGroup imageCanvasGroup)
    {
        m_Timer += Time.deltaTime;

        imageCanvasGroup.alpha = m_Timer / fadeDuration;

        if(m_Timer > fadeDuration + displayImageDuration)
        {
            Application.Quit ();
        }
    }
```

exitBackgroundImageCanvasGroup의 알파 값을 변경하는 대신, 이제 스크립트가 파라미터로 전달되는 대상의 알파 값을 변경합니다.

**5.**코드 에디터에서 Update 메서드의 2가지 EndLevel 호출에 문제가 있다는 알림을 확인하실 수 있을 겁니다.  왜냐하면 EndLevel 메서드에서 누락된 파라미터를 전달하도록 요청하기 때문입니다.

이 문제를 해결하려면 첫 번째 호출에 exitBackgroundImageCanvasGroup 파라미터를 할당하고 두 번째 호출에 caughtBackgroundImageCanvasGroup을 할당해야 합니다.

Update 메서드를 다음과 같이 변경합니다.

```csharp
void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel (exitBackgroundImageCanvasGroup);
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel (caughtBackgroundImageCanvasGroup);
        }
    }
```

이제 2가지 방식으로 게임을 종료할 수 있으나, 아직 몇 군데 수정해야 할 부분이 남았습니다.

단계를 완료로 표시

## 10. 플레이어의 레벨 재시작 허용

Q&A (0)

현재 상태에서는 레벨을 종료하면 항상 게임이 종료됩니다. 적이 JohnLemon을 잡을 때마다 플레이어가 게임을 다시 시작해야 한다면 매우 번거로울 겁니다. 레벨을 재시작할 수 있다면 플레이어 경험이 훨씬 개선될 것입니다.

이 기능을 추가하는 방법은 다음과 같습니다.

**1.**플레이어가 레벨을 탈출하면 게임이 종료됩니다. 따라서 EndLevel 메서드에 파라미터를 추가하여 그 다음에 취할 행동을 결정하도록 해야 합니다.

다음과 같이 EndLevel 메서드에 부울 파라미터를 추가합니다.

```csharp
void EndLevel (CanvasGroup imageCanvasGroup, bool doRestart)
```

**2.**이 새로운 파라미터를 사용하기 전에 EndLevel 메서드 호출이 정확한지 확인합니다.

플레이어 캐릭터가 출구에 도착하면 게임이 종료되어야 합니다. 따라서 다음과 같이 파라미터로 **false**가 전달되어야 합니다.

```csharp
EndLevel (exitBackgroundImageCanvasGroup, false);
```

JohnLemon이 잡히면 게임이 재시작되어야 합니다. 따라서 다음과 같이 파라미터로 **true**가 전달되어야 합니다.

```csharp
EndLevel (caughtBackgroundImageCanvasGroup, true);
```

**3.**이제 이 파라미터를 사용해 보겠습니다. 현재 EndLevel 메서드의 if 문은 게임을 바로 종료합니다. 이를 수정하여 게임이 재시작되지 않는 경우에만 게임이 종료되도록 합니다.

다음과 같이 if 문의 코드 블록을 변경합니다.

```csharp
if (doRestart)
            {

            }
            else
            {
                Application.Quit ();
            }
```

이것은 **else** 문입니다. 앞에서 사용했던 else-if 문과 유사하게 작동하지만, 따로 조건이 없으므로 if 문이 거짓이면 무조건 else 코드 블록이 실행됩니다. 따라서 doRestart 파라미터가 거짓이면 게임이 종료됩니다.

**4.**doRestart가 참이면 레벨이 다시 로드되어야 합니다. 이 튜토리얼에서 앞서 살펴보았듯이, Unity의 레벨은 씬으로 표현됩니다. 씬을 재시작하는 가장 쉬운 방법은 씬을 다시 로드하는 것입니다.

씬을 처리하기 위한 대부분의 기능은 다른 **네임스페이스**에 있기 때문에, 다음 단계로 진행하기 전에 이 네임스페이스를 스크립트에 추가해야 합니다. 네임스페이스를 사용하면 코드 일부를 필요할 때만 사용할 수 있습니다.

Unity에서 생성된 스크립트에는 기본적으로 상단에 3개의 네임스페이스가 설정되어 있습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

3개의 네임스페이스 목록 아래에 다음과 같이 하나를 더 추가합니다.

```csharp
using UnityEngine.SceneManagement;
```

**5.**이제 현재 씬을 다시 로드하는 데 필요한 다양한 클래스와 메서드에 접근할 수 있습니다. 비어 있는 if 문에 다음 코드를 추가합니다.

```csharp
SceneManager.LoadScene(0);
```

이를 통해 SceneManager 클래스에서 **LoadScene**이라는 정적 메서드가 호출됩니다.  정적 메서드는 클래스의 인스턴스가 없어도 호출할 수 있습니다.

이 메서드의 파라미터는 씬의 빌드 인덱스입니다.  본 시리즈의 마지막 튜토리얼에서 빌드 인덱스와 빌드 설정을 좀 더 자세히 살펴보겠습니다. 지금은 C# 과 대부분의 프로그래밍 언어에서 여러 아이템 컬렉션이 인덱싱되며 이러한 인덱스는 1이 아니라 0에서 시작한다는 것만 알면 됩니다. 쉽게 말해 이 숫자는 특정 아이템에 도달하기 위해 몇 개의 아이템을 지나쳐야 하는지 나타낸다고 보면 됩니다. 첫 번째 아이템은 가장 앞에 있기 때문에 여기에 도달하기 위해 0개의 아이템을 지나야 하며 인덱스 0을 사용합니다.

씬이 하나밖에 없기 때문에 씬 컬렉션의 첫 번째에 자리하므로 인덱스는 0이 됩니다.

**6.**이제 스크립트 작성이 거의 마무리되었습니다. 마지막으로 **m_IsPlayerCaught**만 설정하면 됩니다. 이를 통해 클래스의 public 요소와 private 요소 간의 차이를 나타낼 수 있습니다.

지금까지는 인스펙터에 나타나는 public 변수와 인스펙터에 나타나지 않는 기타 변수를 사용했습니다. 클래스에서 public으로 표시되지 않은 것들은 기본적으로 private입니다.

public 항목은 클래스 외부에서 접근이 가능하며 private 항목에는 접근할 수 없습니다. m_IsPlayerCaught 변수는 public으로 표시되어 있지 않으므로 **private**입니다. 이 변수는 레벨 재시작을 트리거하기 위해 클래스 외부에서 설정해야 합니다.

첫 번째 옵션은 변수를 public으로 변경하는 것이지만, 이는 바람직한 방법이 아닙니다. 모든 클래스가 JohnLemon이 잡혔는지 알 필요는 없기 때문입니다.

대신, 이 변수에 대한 액세스를 제한하고 이 변수를 참으로 설정하는 public 메서드를 생성할 수 있습니다.  이러한 방식을 통해 다른 클래스에서 JohnLemon이 잡혔을 때에는 이를 알 수 있지만, 잡히지 않았을 때는 알 수 없습니다.

이 메서드는 클래스 내 어디에든 위치할 수 있지만 OnTriggerEnter 메서드 옆에 배치하는 것이 가장 합리적입니다. 이를 통해 레벨 종료를 트리거할 수 있는 두 메서드가 나란히 위치하게 됩니다.

OnTriggerEnter 아래에 다음 메서드를 추가합니다.

```csharp
public void CaughtPlayer ()
    {
        m_IsPlayerCaught = true;
    }
```

**7.**GameEnding 스크립트 수정이 완료되었습니다. 완료된 스크립트는 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameEnding : MonoBehaviour
{
    public float fadeDuration = 1f;
    public float displayImageDuration = 1f;
    public GameObject player;
    public CanvasGroup exitBackgroundImageCanvasGroup;
    public CanvasGroup caughtBackgroundImageCanvasGroup;

    bool m_IsPlayerAtExit;
    bool m_IsPlayerCaught;
    float m_Timer;

    void OnTriggerEnter (Collider other)
    {
        if (other.gameObject == player)
        {
            m_IsPlayerAtExit = true;
        }
    }

    public void CaughtPlayer ()
    {
        m_IsPlayerCaught = true;
    }

    void Update ()
    {
        if (m_IsPlayerAtExit)
        {
            EndLevel (exitBackgroundImageCanvasGroup, false);
        }
        else if (m_IsPlayerCaught)
        {
            EndLevel (caughtBackgroundImageCanvasGroup, true);
        }
    }

    void EndLevel (CanvasGroup imageCanvasGroup, bool doRestart)
    {
        m_Timer += Time.deltaTime;
        imageCanvasGroup.alpha = m_Timer / fadeDuration;

        if (m_Timer > fadeDuration + displayImageDuration)
        {
            if (doRestart)
            {
                SceneManager.LoadScene (0);
            }
            else
            {
                Application.Quit ();
            }
        }
    }
}
```

거의 마무리되었습니다. GameEnding 스크립트를 저장하고 Observer 스크립트를 다시 열어 마지막으로 몇 가지를 조정합니다.

단계를 완료로 표시

## 11. 가고일 프리팹 완성

Q&A (0)

기존 Observer 스크립트로 실행할 수 있는 작업은 다음과 같습니다.

- 플레이어 캐릭터가 트리거에 있는 시점을 파악합니다.
- 레이캐스트를 사용하여 콜라이더에 부딪혔는지 알아봅니다.
- 콜라이더가 플레이어 캐릭터인지 여부를 식별합니다.

GameEnding 스크립트 작성을 완료했으므로 레이캐스트가 플레이어 캐릭터의 콜라이더에 부딪히면 Observer 스크립트가 호출할 대상이 있습니다.

게임에서 새로운 적을 테스트하기 전에 마지막으로 다음과 같이 몇 가지를 조정해야 합니다.

**1.  Update 메서드**의 마지막 **if 문**에 다음 코드를 추가합니다.

```csharp
gameEnding.CaughtPlayer ();
```

CaughtPlayer 메서드가 **public**이기 때문에 여기에 추가할 수 있습니다. private이면 코드 에디터에서 이 라인에 대해 오류를 표시합니다.

**2.**Observer 스크립트를 저장하고 Unity로 돌아갑니다.

**3.**이제 가고일 프리팹이 완성되었습니다. Save 버튼을 사용하여 프리팹을 저장합니다.

[Image: image]

**4.**계층 구조에서 뒤로 가기 화살표를 클릭하여 씬으로 돌아갑니다.

[Image: image]

**5.**가고일 프리팹 인스턴스는 이후에 더 추가할 수 있으며, 지금은 가지고 있는 프리팹을 제일 처음 방의 구석에 배치합니다.  인스펙터에서 해당 **Transform** 컴포넌트를 찾습니다.

- Position 프로퍼티를 (**-15.2**, **0**, **0.8**)로 변경합니다.
- Rotation 프로퍼티를 (**0**, **135**, **0**)으로 변경합니다.

**6.**이제 Observer 스크립트에 필요한 2개의 레퍼런스를 설정할 수 있습니다. 계층 창에서 Gargoyle 게임 오브젝트를 펼치고 **PointOfView**게임 오브젝트를 선택합니다.

[Image: image]

**7.**계층 창에 있는 JohnLemon 게임 오브젝트를 인스펙터 내 Observer 스크립트의 **Player**필드로 드래그합니다. 이를 통해 Transform이 할당됩니다.

**8.**계층 창에 있는 GameEnding 게임 오브젝트를 인스펙터 내 Observer 스크립트의 **Game Ending**필드로 드래그합니다.

**9.**다음으로, 플레이어가 잡혀서 레벨이 종료되는 경우의 UI를 생성해야 합니다. 계층 창에서 **FaderCanvas** 게임 오브젝트를 펼칩니다.

[Image: image]

**10.  ExitImageBackground** 게임 오브젝트를 오른쪽 클릭하고 컨텍스트 메뉴에서 **Duplicate**를 선택합니다. 복제 단축키는 Ctrl+D(Windows) 또는 CMD+D(macOS)입니다.

**11.**새로운 복사본의 이름을 **CaughtImageBackground**로 변경합니다.  계층 창에서 이 게임 오브젝트를 펼쳐 자식 오브젝트를 확인합니다.

**12.**ExitImage 게임 오브젝트의 이름을 **CaughtImage**로 변경합니다.

**13.**인스펙터 창에서 Image 컴포넌트가 계속해서 Won 스프라이트를 참조하고 있음을 확인할 수 있습니다. 이 설정만 변경하면 됩니다.

Image 컴포넌트에서 **Source Image**프로퍼티 옆의 원형 선택 버튼을 클릭합니다. 대화창이 열리면 **Caught**라는 스프라이트를 선택합니다.

**14.**마지막으로 Game Ending 스크립트의 Caught Background Image Canvas Group에 레퍼런스를 할당해야 합니다. 계층 창에서 **GameEnding** 게임 오브젝트를 선택합니다.

**15.**계층 창에 있는 CaughtImageBackground 게임 오브젝트를 인스펙터 내 Game Ending 컴포넌트의 Caught Background Image Canvas Group 필드로 드래그합니다.

**16.**씬을 저장합니다.

이제 가고일 캐릭터가 완성되었습니다. 플레이 모드에 들어가서 테스트해 보세요.

단계를 완료로 표시

## 12. 요약

Q&A (0)

본 튜토리얼에서는 움직이지 않는 적을 생성해 보았습니다. 물리 및 스크립팅을 사용하여 JohnLemon이 잡힐 수 있도록, 그리고 잡혔을 때 레벨을 재시작할 수 있도록 설정했습니다.

가고일 캐릭터는 멋지지만 멈춰 있습니다. 더욱 흥미진진한 게임이 되려면 적이 돌아다녀야 합니다. 다음 튜토리얼에서는 설정된 경로를 따라 유령이 돌아다닐 수 있도록 하고, 맵 전체에 적들을 배치해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
