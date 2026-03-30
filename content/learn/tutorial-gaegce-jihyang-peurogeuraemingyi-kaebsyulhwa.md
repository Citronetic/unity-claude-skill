[Image: image]

# 객체 지향 프로그래밍의 캡슐화

Tutorial

foundational

+10XP

20 mins

1

(52)

Unity Technologies

[Image: 객체 지향 프로그래밍의 캡슐화]Summary

이 튜토리얼에서는 객체 지향 프로그래밍의 두 번째 원칙인 캡슐화에 대해 알아보겠습니다.

- 캡슐화를 사용하여 프로그래머의 의도대로만 사용할 수 있는 코드를 작성하는 방법을 설명합니다.
- 게터와 세터로 캡슐화를 적용하여 클래스 내에서 데이터에 대한 액세스를 제어합니다.
- public 변수(프로퍼티), private 변수(필드), 로컬 변수를 구별합니다.
- 단일 목적의 코드만 포함하도록 클래스를 올바르게 구성하여 가독성과 디버깅을 개선합니다.

Languages available:

한국어Español한국어한국어

## 1. 개요

Q&A (0)

추상화와 마찬가지로 캡슐화는 코드와 그 코드를 사용하는 다른 코드에 존재하는 기본적인 복잡도 간에 분리 수준을 유지하는 데 중점을 둡니다. 이들 간의 유사성으로 인해 OOP(객체 지향 프로그래밍) 방식을 선호하는 일부 사용자는 일반적으로 캡슐화 헤더에서 추상화와 캡슐화를 단일 원칙으로 그룹화합니다. 하지만 이 둘을 구별하는 것이 중요합니다. 추상화의 핵심은 다른 프로그래머를 위해 코드를 요약하여 더 단순하게 만드는 것이고, 캡슐화의 핵심은 다른 사람의 액세스 권한을 제어할 수 있도록 마치 캡슐로 둘러싼 것처럼 값과 데이터를 보호하는 것입니다.

단계를 완료로 표시

## 2. 캡슐화란?

Q&A (0)[Image: image]

캡슐화의 주요 주제는 코드의 안전성입니다. 즉, 코드가 원래 의도한 대로만 사용되고 프로그래머가 조작하는 값과 데이터가 손상되지 않도록 보장하는 프로세스입니다. 캡슐화된 코드에서 다른 프로그래머는 변수의 값이나 오브젝트의 프로퍼티를 쉽게 변경할 수 없습니다. 다른 스크립트가 코드에 액세스할 수 있는 다양한 방식을 모두 처리하기란 불가능하므로, 의도한 대로만 동작할 수 있도록 자신이 생성한 코드를 캡슐화하는 것이 훨씬 좋습니다.

코드로 창작하기 [1단원 - 플레이어 컨트롤](https://learn.unity.com/project/unit-1-driving-simulation?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f)로 거슬러 올라가 캡슐화를 사용했던 상황을 살펴보겠습니다. 다음은 도로를 따라 달리는 차량을 제어하는 데 사용된 변수입니다.

[Image: image]

```csharp
public float speed = 20.0f;
public float turnSpeed = 45.0f;
public float horizontalInput;
public float forwardInput;
```

이 코드를 처음 작성했을 때 플레이 모드 중에 인스펙터에서 어떻게 업데이트되는지 확인하기 위해 모든 변수를 public으로 설정했습니다. 당시에는 프로그래밍을 처음 해 보는 것이었기 때문에, 이 설정을 사용한 덕분에 변수 값의 변화로 인해 게임플레이가 어떻게 수정되는지 더 잘 이해할 수 있었습니다. 또한 변수를 public으로 설정함으로써 속도와 turnSpeed 값을 실시간으로 테스트하여 차량의 움직임을 조정할 수 있었습니다.

최종 숫자를 정하고 나서는 값을 고정하기 위해 변수를 private으로 설정했습니다.

```csharp
// 이제 모든 변수가 public이 아닌 private
private float speed = 20.0f;
private float turnSpeed = 45.0f;
private float horizontalInput;
private float forwardInput;
```

여러분이 선택한 값을 다른 사람이 실수로 변경하지 않도록 하고 싶었기 때문입니다. 아주 간단한 이 과정이 여러분의 첫 번째 캡슐화 경험이었습니다.

캡슐화에서 주로 고려하는 내용은 변수와 메서드의 접근성입니다. 일반적으로 가능하면 대부분의 상황에서 변수를 private으로 유지하고, 어디에서나 호출할 필요가 있는 경우에만 메서드를 public으로 설정하는 것이 좋습니다. 그렇게 하지 않으면 누구나 사용할 수 있게 됩니다.

혼자서 소규모 프로젝트를 진행하는 경우 캡슐화를 대수롭지 않게 여기기 쉬우며, 실제로 모든 것을 public으로 설정하는 것이 편리하다고 생각할 수도 있습니다. 하지만 다른 사람과 함께 작업하거나 다른 사람이 나중에 여러분의 코드를 사용하게 되는 경우, 변수와 메서드가 사용되지 않아야 할 때 사용된다면 예기치 않은 문제가 발생할 수 있습니다.

단계를 완료로 표시

## 3. private 변수 및 인스펙터 가시성

Q&A (0)

변수를 public으로 설정하면 인스펙터에 노출될 뿐 아니라 애플리케이션의 다른 메서드에서도 변경할 수 있는 상태가 됩니다. 다행히 다른 코드에 노출하지 않고도 인스펙터에서 변수를 사용 가능하게 만드는 방법이 있습니다. 바로 **직렬화**입니다. 이 방법을 사용하면 변수를 안전하게 유지하면서 인스펙터에서 수정할 수 있습니다. 실제로는 변수의 액세스 한정자(public, private)에 의해 직렬화가 제어되는 것은 아니며, public 변수는 기본적으로 직렬화됩니다. [SerializeField] 태그를 추가하여 private 변수를 인스펙터에 쉽게 노출할 수 있습니다.

```csharp
public class Rabbit : MonoBehaviour
{
    [SerializeField] // 인스펙터에 private 변수 표시
    private Color furColor;
}
```

[Image: image]단계를 완료로 표시

## 4. 프로젝트에서 취약한 public 변수 찾기

Q&A (0)

값이 잘못 사용되는 것을 방지하려면 모든 변수를 private으로 설정하는 것이 간단한 방법이겠지만, 반드시 public이어야 하는 변수는 어떻게 해야 할까요? 이 변수를 어떻게 보호할 수 있을까요? 프로젝트의 예시를 진행하며 알아보겠습니다.

MainManager.cs에서 다음 public 변수를 추가했습니다.

```csharp
public static MainManager Instance;
```

이 변수에 액세스해야 하는 다른 스크립트에서 오류가 발생하게 되므로 private으로 설정할 수 없습니다. 하지만 public으로 두면 잘못 사용될 위험이 있습니다. 문제를 설명하기 위해 약간의 장난을 쳐 보겠습니다.

**1.**실험을 위해 MenuUIHandler.cs에서 Start() 메서드 끝에 MainManager 인스턴스를 null로 설정하는 코드 라인을 추가합니다.

```csharp
MainManager.Instance = null;
```

**2.**  색상 선택 버튼을 선택하여 애플리케이션을 테스트합니다. 그러면 콘솔에 Null Reference Exception 오류 메시지가 나타납니다.

[Image: image]

변수에 부여된 public 액세스 권한을 유지하면서 이러한 오용을 방지할 방법이 필요합니다.

단계를 완료로 표시

## 5. 게터와 세터를 사용하여 프로퍼티 생성

Q&A (0)

기본적으로 여기에서는 변수를 읽기 전용으로 설정하여, 다른 클래스에서 변수를 **가져올** 수는 있지만 **설정**할 수는 없도록 만들어야 합니다. 이렇게 하기 위해 C# get 및 set 메서드를 사용하면 변수를 언제 어떻게 사용할 수 있는지 제어할 수 있습니다.

**1.**다음과 같이 MainManager.cs에서 MainManager 인스턴스 변수 끝에 get 접근자를 추가합니다.

```csharp
public static MainManager Instance { get; } // 라인의 끝에 게터 추가
```

get 또는 set 접근자를 변수에 추가하는 즉시 해당 변수는 **프로퍼티**가 됩니다. 이 특별한 유형의 변수는 이러한 특수 메서드를 통해 내부 데이터에 대한 액세스 권한을 부여합니다.

**2.** set 접근자가 없는 한 이 프로퍼티는 절대적으로 읽기 전용이며 어디에서도 값을 설정할 수 없습니다. 그렇기 때문에 앞서 MenuUIHandler.cs에서 장난으로 추가한 코드 라인에서 오류가 발생합니다. 다른 클래스에서 재설정하기를 원하지 않으므로 이는 바람직한 현상이며, 이제 해당 코드 라인을 삭제해도 됩니다.

```csharp
// MainManager.Instance = null; - 이 코드 라인 삭제 또는 주석 처리
```

**3.**  하지만 여전히 문제가 있습니다. 프로퍼티가 절대적으로 읽기 전용이기 때문에 자체 클래스에서도 설정이 불가능하며, 이로 인해 MainManager.cs 아래쪽에서 라인에 'Instance = this;' 오류가 발생합니다. 이 문제는 private 세터를 프로퍼티에 추가하여 해결할 수 있습니다.

```csharp
public static MainManager Instance { get; private set; } // private 세터 추가
```

이 코드를 사용하면 클래스 내에서 프로퍼티 값을 **설정**할 수 있고, 클래스 밖에서는 **가져올** 수만 있습니다. 이제 이 변수는 자체 클래스에서만 수정할 수 있도록 캡슐화되었고, 외부로부터의 오용이나 손상으로부터 안전합니다.

단계를 완료로 표시

## 6. 세터 검증의 필요성 확인

Q&A (0)

위에서 추가한 게터와 세터는 단순히 값을 가져오거나 설정하는 가장 기본적인 형태의 캡슐화를 나타냅니다. 이 단순한 구현을 **자동 구현 프로퍼티**라고 합니다.

```csharp
{ get; private set; }
```

하지만 값 설정 여부와 설정 가능한 위치를 제한하는 것 외에 더 세밀하게 커스터마이즈된 수동 방식으로 값 설정 방식을 제한하려는 상황도 있을 것입니다. 예를 들어 다른 클래스에서 날짜를 설정하도록 허용하는 애플리케이션에서 월을 1에서 12 사이의 숫자로 제한하거나, 음수를 사용하지 못하도록 설정할 수 있습니다.

창고 프로젝트에는 바로 이러한 설정이 필요한 항목, 즉 음수로 설정하면 안 되는 Production Speed 변수가 있습니다.

**1.**ResourcePile.cs에서 노출된 public ProductionSpeed 변수를 찾습니다.

```csharp
public float ProductionSpeed = 0.5f;
```

ProductivityUnit.cs에서도 public 변수에 상수를 곱하는 라인을 찾습니다.

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier;
```

제작자 자신뿐 아니라 다른 개발자가 실수로 이 변수를 음수로 설정한다고 해도 막을 수 있는 방법은 없으며, 그로 인해 이 프로젝트에 문제가 발생하게 됩니다.

**2.**실험을 위해 Production Speed에서 곱셈 대신 뺄셈을 하도록 이 코드 라인을 수정합니다.

```csharp
m_CurrentPile.ProductionSpeed -= ProductivityMultiplier; // '*='을 '-='로 대체
```

그런 다음 애플리케이션을 테스트하고 Productivity Unit을 사용하여 다음과 같이 음수 결과를 생성합니다.

[Image: image]

이 변수가 음수로 설정되지 않도록 할 수 있는 커스텀 세터가 필요합니다.

단계를 완료로 표시

## 7. 지원 필드를 사용하여 프로퍼티 만들기

Q&A (0)

게터 또는 세터 내에서 확인이나 계산을 수행하려면 프로퍼티에 **지원 필드(backing field)**, 즉 public 프로퍼티에 의해 노출되는 데이터를 저장하는 private 필드(변수)가 필요합니다.

맥락과 함께 살펴보겠습니다.

**1.** ResourcePile.cs에서 ProductionSpeed와 동일한 이름을 사용하여 private 멤버 변수(지원 필드)를 추가하되 다음과 같이 새로운 private 필드에 값을 저장합니다.

```csharp
private float m_ProductionSpeed = 0.5f; // 새 private 지원 필드 추가
public float ProductionSpeed; // public 프로퍼티에서 값 제거
```

**2.** 지원 필드를 선언했으므로, 이제 다른 사용자가 public 프로퍼티에 액세스할 때 지원 필드를 가져오거나 할당하는 get 및 set 함수를 수동으로 추가할 수 있습니다.

```csharp
private float m_ProductionSpeed = 0.5f;
public float ProductionSpeed // 세미콜론 삭제
{
    get { return m_ProductionSpeed; } // 게터에서 지원 필드 반환
    set { m_ProductionSpeed = value; } // 세터에서 지원 필드 사용
}
```

단순한 get 및 set 메서드가 아니기 때문에 앞서 자동 구현 프로퍼티에서 사용한 '{ get; set; }' 약어를 사용할 수 없습니다.

대신 수동으로 작성해야 합니다. 다른 사용자가 ProductionSpeed 프로퍼티를 가져오면 지원 필드가 반환됩니다. 다른 사용자가 ProductionSpeed 프로퍼티를 설정하면 지원 필드가 입력한 값으로 설정됩니다.

**3.**이렇게 되면 데이터가 이제 public 프로퍼티가 아닌 지원 필드에 저장되므로 프로퍼티에 대한 레퍼런스가 private 필드와 교체되어야 합니다. ResourcePile.cs에서 ProductionSpeed에 대한 두 레퍼런스를 m_ProductionSpeed로 대체합니다.

```csharp
...
m_CurrentProduction += m_ProductionSpeed * Time.deltaTime; // m_ version 교체
...
return "Producing at the speed of {m_ProductionSpeed}/s"; // m_ version 교체
```

이제 다른 사용자가 public 프로퍼티를 가져오거나 설정하려고 할 때마다 게터와 세터를 통해 클래스에서 캡슐화된 지원 필드에 액세스하게 됩니다. 하지만 세터 검증이 아직 실제로 구현되지 않았기 때문에 여전히 음수를 사용할 수 있습니다. 이제 이 문제를 해결하겠습니다.

단계를 완료로 표시

## 8. 세터 검증을 구현하여 음수 방지

Q&A (0)

마지막으로, 모든 것을 설정했으니 이제 set 메서드 내에서 검사를 구현하여 Production Speed 값을 항상 양수로 유지할 수 있습니다. 음수로 설정하려고 시도하면 콘솔에 경고 메시지를 표시하도록 설정할 수도 있습니다.

**1.**  set 메서드 내에서 값이 음수이면 경고 메시지를 표시하고 양수이면 성공적으로 값을 설정하는 if-else 구문을 추가합니다.

```csharp
set
{
    if (value < 0.0f)
    {

            Debug.LogError("You can't set a negative production speed!");
    }
    else
    {
            m_ProductionSpeed = value; // 원래 세터가 현재 if/else 문에 있음
    }
}
```

**2.**  애플리케이션을 다시 테스트하여 Production Speed가 음수로 설정될 때 어떻게 되는지 확인합니다. 오류 메시지가 표시될 것입니다.

[Image: image]

**3.**  세터 검증을 완전히 구현하고 테스트했으므로, 이제 뺄셈 연산자가 아닌 곱셈을 사용하여 ProductivityUnit을 함수에 노멀로 반환할 수 있습니다.

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier; // '-='을 '*='로 되돌리기
```

단계를 완료로 표시

## 9. 요약

Q&A (0)

캡슐화는 값에 액세스하고 변경하는 방식을 제어함으로써 코드를 보호하며, 명시적으로 설계된 바에 따라서만 코드가 사용되도록 보장합니다. 추상화와 마찬가지로 캡슐화는 코드의 기본적인 복잡도와 해당 코드에 액세스할 수 있는 프로그래머를 분리시키는 역할을 합니다.

이 프로젝트에서는 자동 구현 프로퍼티를 사용하여 변수를 외부 클래스에 대해 읽기 전용으로 설정했습니다. 그런 다음, 프로퍼티의 게터와 세터를 작성하고 지원 필드를 사용하여 프로퍼티가 음수로 설정될 수 없도록 지정했습니다. 이제 여러분은 이러한 데이터가 모두 캡슐화되어 장난이나 오용으로부터 보호된다는 사실을 알고 있기 때문에 안심할 수 있습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
