[Image: image]

# 캐릭터의 움직임을 위한 스크립트 작성

Tutorial

Beginner

+10XP

60 mins

7

(250)

Unity Technologies

[Image: 캐릭터의 움직임을 위한 스크립트 작성]Summary

지난 튜토리얼에서는 게임 플레이어 캐릭터를 생성했습니다. 이번에는 캐릭터의 움직임을 제어하기 위한 커스텀 스크립트를 작성해 보겠습니다.

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- Unity에서 새로운 스크립트 에셋을 만듭니다.
- 제공된 기본 스크립트를 살펴봅니다.
- 캐릭터의 위치를 변경하는 데 사용할 벡터를 만듭니다.
- 캐릭터에 수직 및 수평 이동과 회전을 적용합니다.
- 변경 사항이 Unity 물리 시스템과 제대로 작동하는지 확인합니다.

이번 튜토리얼을 마치면 존 레몬이 유령의 집을 살금살금 돌아다닐 수 있게 됩니다.

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. 플레이어 캐릭터와 스크립트

Q&A (0)

이전 튜토리얼에서는 JohnLemon 프리팹에 애니메이션 시스템과 여러 컴포넌트를 추가하여 캐릭터가 물리 시스템에 맞춰 작동하도록 했습니다.  이번에는 커스텀 컴포넌트인 **스크립트**를 처음으로 생성해 보겠습니다.

### 스크립트란?

스크립트는 컴퓨터에 대한 일련의 명령어를 포함하고 있는 텍스트 문서입니다.  이러한 명령어를 보통 코드라고 부릅니다.  명령어는 컴퓨터가 이해할 수 있는 방식으로 쓰여 있으며, 여기에서는 **C#**(C샵)이라는 프로그래밍 언어로 작성됩니다.

C# 은 명령어를 작성하는 방식과 용어를 정의합니다.  다행히 C# 용어는 영어 단어와 의미가 유사한 경우가 많습니다.  예를 들어 우리가 처음으로 접하게 되는 C# 용어는 "**using**"으로, 이는 스크립트가 다른 파일에 있는 코드를 사용한다는 것을 의미합니다. 또 다른 예는 "**public**"으로, 스크립트 외부에서도 해당 대상에 접근할 수 있음을 의미합니다. 이러한 예는 수없이 많지만 본 튜토리얼에서는 용어가 등장할 때마다 하나씩 살펴보겠습니다.

본 프로젝트에서 작성하게 될 스크립트는 모두 **MonoBehaviour** 형식입니다.  MonoBehaviour는 컴포넌트와 마찬가지로 게임 오브젝트에 연결할 수 있는 특수한 유형의 스크립트로,  직접 작성할 수 있는 컴포넌트에 해당합니다.

스크립트는 프리팹과 상당히 유사하게 작동합니다.

- 스크립트는 프리팹과 마찬가지로 에셋으로 생성됩니다.
- 게임 오브젝트에 스크립트를 컴포넌트로 추가하면 스크립트가 인스턴스화됩니다. 씬에 프리팹을 추가하면 프리팹이 인스턴스화되는 것과 마찬가지입니다.

하지만 스크립트는 여러 가지 측면에서 매우 다르기도 합니다. 스크립트에 대해 더 자세히 알아보겠습니다.

단계를 완료로 표시

## 2. 첫 번째 스크립트(PlayerMovement) 작성

Q&A (0)

다음 단계에 따라 새로운 스크립트 에셋을 생성합니다.

**1.**프로젝트 창에서 **Asset > Scripts**폴더를 찾습니다.  폴더를 오른쪽 클릭하고 **Create > C# Script**를 선택합니다.  스크립트의 이름을 "**PlayerMovement**"로 설정합니다.

**참고:** 컴포넌트로 사용할 때는 스크립트 에셋의 이름과 스크립트 자체의 **클래스명**이 동일해야 합니다.  Unity는 스크립트 파일을 생성할 때 처음에 설정된 에셋 이름과 동일한 클래스명을 부여합니다. 나중에 에셋의 이름을 변경해도 클래스명은 변경되지 않습니다.

**2.**스크립트를 선택하고 인스펙터 창을 확인합니다. 다음과 같은 코드가 표시됩니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    // Start는 첫 프레임 업데이트 이전에 호출됩니다.
    void Start()
    {

    }

    // Update는 프레임마다 한 번씩 호출됩니다.
    void Update()
    {

    }
}
```

'**public class PlayerMovement**'로 시작하는 라인을 찾습니다.  이 라인에 클래스명이 정의되어 있습니다.  스크립트에 PlayerMovement라고 쓰여 있지 않은 경우 스크립트 에셋을 삭제한 다음 PlayerMovement라는 이름의 새로운 스크립트 에셋을 생성합니다.

**3.**이제 스크립트 에셋을 생성했으니 열어서 편집해 보겠습니다. 에셋을 더블 클릭하거나 인스펙터 창에서 "Open..." 버튼을 클릭합니다.

[Image: image]

스크립트는 Unity 내부에서 편집되는 것이 아니라 **Visual Studio**라는 별도의 프로그램에서 열립니다. 스크립트가 열리면 편집할 수 있습니다.

### 기본 스크립트 살펴보기

Visual Studio에 보이는 기본 스크립트를 살펴보겠습니다.

**1.**코드의 처음 세 라인은 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

이를 **using 지시문**이라고 합니다.  이를 통해 다른 파일에서 구현된 코드를 이 스크립트 파일에서 사용할 수 있습니다.  예를 들어 여기에 "using UnityEngine;"이 적혀 있지 않으면 다음 줄에 있는 "MonoBehaviour"를 사용할 수 없게 됩니다.  대부분의 경우 Unity에 기본적으로 포함되어 있는 using 지시문으로 충분히 작업할 수 있습니다.

**2.**다음 라인은 아래와 같습니다.

```csharp
public class PlayerMovement : MonoBehaviour
```

여기는 **클래스 선언**이 시작되는 부분입니다.  클래스는 오브젝트라고 하는 인스턴스에 대한 계획과 같습니다.  클래스가 인스턴스화되면(예를 들어 게임 오브젝트에 스크립트를 컴포넌트로 연결), 이러한 인스턴스를 **오브젝트**라고 합니다.  오브젝트는 코드의 기본 토대이며 지금까지 튜토리얼을 통해 완료한 작업에도 다수 포함되어 있습니다.

이미 살펴본 클래스로는 Animator, Rigidbody, GameObject, Transform이 있습니다. 이런 클래스들은 이미 프로젝트에 포함되어 있습니다.  클래스는 공장에 자재가 투입되고, 공정을 거쳐 결과물이 생산되는 것과 유사하게 작동합니다. 클래스뿐만 아니라 나중에 설명하게 될 다른 코드 요소들도 공장과 비유할 수 있습니다.

**3.**다음 라인은 여는 중괄호인 **{**입니다.

본 튜토리얼 시리즈에서는 이를**중괄호**라고 부르겠습니다.  중괄호는 **코드 블록**을 정의하기 때문에 C# 언어에서 필수적인 부분입니다.  코드 블록은 여는 중괄호와 닫는 중괄호 사이에 있는 코드 라인입니다.  중괄호는 반드시 쌍으로 존재해야 합니다.

클래스 선언 코드 블록의 경우, 하단에 닫는 중괄호가 위치하고 클래스 선언 내에 2개의 코드 블록이 더 있습니다.  클래스 선언에 포함된 이 2개의 코드 블록에는 들여쓰기가 적용되어 있습니다.  들여쓰기가 꼭 필요한 것은 아니지만 이를 통해 코드 블록이 어디에서 시작되고 끝나는지를 손쉽게 파악할 수 있습니다.

**4.**다음 라인은 아래와 같습니다.

```csharp
// Start는 첫 프레임 업데이트 이전에 호출됩니다.
```

이와 같이 이중 슬래시로 시작하는 텍스트를 **주석**이라고 합니다.  주석은 컴퓨터가 완전히 무시하는 부분입니다.  대부분의 경우 이는 주변의 코드에 대해 설명하는 일종의 레이블 역할을 합니다.  여기에서 주석은 그 아래에 선언되는 코드에 대한 간략한 설명을 제공합니다.

**5.**주석 다음에는 다음과 같이 첫 번째 메서드가 선언됩니다.

```csharp
void Start()
```

다시 공장에 비유해 보겠습니다. 클래스가 공장이라면 메서드는 공장 안에 있는 기계에 해당합니다.  메서드는 데이터를 받아 작업을 수행한 다음 데이터를 반환합니다.

모든 메서드 선언의 형식은 동일합니다.

- 첫째로 **반환 유형**을 명시합니다.  이는 메서드가 완료된 후 반환될 데이터의 유형을 말합니다. 본 예시에서 반환 유형은 **void**입니다.  이는 특수한 C# 용어로 메서드에서 아무것도 반환하지 않는다는 것을 의미합니다.
- 반환 유형 다음에는 **메서드 이름**이 오며, 본 예시에서는 메서드 이름으로 **Start**가 적혀 있습니다.
- 메서드 이름 다음에는 여는 소괄호와 닫는 소괄호 쌍인 **()**가 옵니다.  본 튜토리얼 시리즈에서는 이를 **소괄호**라고 부르겠습니다.  이러한 소괄호 내에서 메서드는 받고자 하는 데이터의 유형을 선언할 수 있습니다.  이러한 데이터 조각을 가리켜 **파라미터**라고 합니다.  지금은 소괄호 안에 아무것도 적혀 있지 않으며 선언된 파라미터가 없습니다.

위의 3가지 정보(반환 유형, 이름, 파라미터)가 메서드의 **서명**을 구성합니다.  대부분의 경우 메서드의 서명은 원하는 대로 지정할 수 있습니다. 하지만 MonoBehaviour 클래스에서는 특정 서명이 필요한 특수한 메서드를 사용할 수 있습니다.  이러한 특수 메서드는 코드에서 호출할 필요가 없으며 대신 Unity에서 특정 시간에 호출합니다.  특수한 메서드의 예로 Start가 있습니다.  Start 메서드는 해당 메서드가 포함된 게임 오브젝트가 시작되자마자 호출되며, 이는 보통 씬이 시작되는 시점과 일치합니다.  따라서 설정과 같이 반복을 원하지 않는 작업에 적합합니다.

**6.**Start 메서드 서명 다음에는 코드 블록이 있습니다.  코드 블록은 메서드가 호출될 때마다 실행되는 모든 코드를 정의합니다.  메서드는 호출을 통해 사용할 수 있으며, 나중에 직접 호출해 보겠습니다.  공장 비유로 돌아가 보면, 메서드 선언은 공장에서 기계가 작동하는 방식이며, 메서드 호출은 기계를 실제로 사용하는 것입니다.

메서드 서명 선언과 그 뒤에 오는 코드 블록을 합쳐 **메서드 정의**라고 합니다.  메서드 선언과 메서드 정의는 동시에 발생하기 때문에 C#에서는 흔히 이 두 용어가 혼용되기도 합니다.  C++ 등의 다른 언어에서는 구별하여 사용합니다.

**7.**이번에는 클래스 내부의 코드 작성 순서를 알아보겠습니다.  공장과 기계의 비유로 계속 설명하자면, 공장 안의 기계 위치는 중요하지 않은 반면 기계의 작업 순서는 매우 중요합니다.

C# 에서도 클래스에서 메서드가 선언되는 순서는 중요하지 않지만, 메서드가 작업을 수행하는 순서는 매우 중요합니다.

**8.**스크립트의 마지막 두 부분은 또 하나의 주석과 또 하나의 메서드 정의입니다.

**Update** 메서드도 MonoBehaviour에 포함된 특수 메서드입니다.  이 메서드는 오브젝트가 화면에 렌더링되기 전에 프레임마다 호출됩니다.

이제 기본 스크립트에 대한 기초적인 이해를 바탕으로 게임의 스크립트를 커스터마이즈해 보겠습니다.

단계를 완료로 표시

## 3. 수평 및 수직 축을 위한 변수 만들기

Q&A (0)

PlayerMovement 스크립트는 사용자 입력을 받아 이를 캐릭터 이동으로 변환해야 합니다.

우선 Unity의 입력 시스템에서 데이터를 가져와야 합니다. 스크립트에서는 항상 입력 상황을 확인해야 하며, Update는 프레임마다 호출되므로 Update 메서드에서 입력값을 확인하면 됩니다.  하지만 구체적으로 무엇을 확인해야 할까요?

플레이어는 **화살표 키** 또는 **WASD** 키를 사용하여 캐릭터를 이동하기 때문에 스크립트는 이러한 특정 키의 값을 확인해야 합니다. 스크립트를 통해 이러한 키들 각각이 개별적으로 눌러져 있는지, 캐릭터가 무엇을 수행해야 하는지 결정하는 대신 더 쉬운 방법이 있습니다.

Unity에는**입력 관리자**가 다양한 버튼 및 축을 정의해 두었기 때문에 이름으로 쉽게 찾을 수 있습니다.  예를 들어 **Horizontal**이라고 명명된 축은 A 및 D 키 또는 왼쪽 및 오른쪽 화살표 키를 말합니다.  이를 확인함으로써 플레이어의 컴퓨터는 캐릭터가 왼쪽으로 이동해야 할지 오른쪽으로 이동해야 할지 판단할 수 있습니다.

#### 변수를 생성하기 위한 코드 작성

시작해 보겠습니다. Update 메서드 중괄호 안에 다음 라인을 추가합니다.

```csharp
float horizontal = Input.GetAxis ("Horizontal");
```

작성한 코드가 아래와 동일한지 확인하세요.

```csharp
// Update는 프레임마다 한 번씩 호출됩니다.
    void Update()
    {
        float horizontal = Input.GetAxis ("Horizontal");
    }
```

이 새로운 라인의 역할은 무엇일까요?

간단히 말하자면, 이 새로운 코드는 컴퓨터에 '새로운 플로트 변수를 생성하고 이를 horizontal이라고 선언한 다음, 해당 변수를 이 메서드 호출의 결과와 같은 값으로 설정하라'는 명령을 내립니다.

클래스가 공장이고 메서드가 기계라면, **변수**는 물건을 담고 있는 상자입니다.  즉, 변수는 데이터를 저장하는 수단입니다.  여기서 저장해야 하는 데이터는 수평 입력 축의 값입니다.  Unity에서 입력 축은 -1과 1 사이의 수를 반환하며 이러한 유형의 데이터를 **플로트**라고 합니다.  플로트는 소수점을 포함한 수를 나타냅니다.

이 코드 라인에는 다음과 같이 중요한 구문(구조)이 포함되어 있습니다.

- C#에서 **등호**는 왼쪽 변수(새로 생성된 플로트 변수)에 오른쪽에 있는 값(메서드 결과)을 할당하라는 의미입니다.
- Input과 GetAxis 사이의 **마침표**는 앞에 적힌 오브젝트 내의 다른 정보에 접근한다는 뜻입니다. GetAxis는 Input 내 메서드이므로 Input에서 GetAxis로 이동하기 위해 마침표를 사용합니다.
- C#  코드는 **문**(statement)이라는 단위로 구성되어 있습니다.  각 문은 명령어를 1개 이상 포함하고 있으며 문장과 유사합니다.  **세미콜론**은 문이 끝나는 지점을 표시하여 문장 끝의 마침표와 같은 기능을 합니다.

단계를 완료로 표시

## 4. 변수 생성 과정

Q&A (0)

작성한 코드의 역할을 좀더 자세히 살펴보겠습니다.

먼저, Input 클래스 안에서 GetAxis라는 메서드를 찾습니다. 그런 다음 이름 뒤에 소괄호를 넣어 해당 메서드를 호출합니다.  하지만 Start나 Update 메서드와는 달리 GetAxis에는 **파라미터**, 즉 작업을 수행하기 위한 데이터 조각이 필요합니다. 구체적으로 말하면 GetAxis에는 우리가 찾는 축의 이름이 필요합니다. 여기에서는 Horizontal 축 값이 필요하므로 이를 파라미터로 지정했습니다.

이러한 정보 조각의 데이터 유형을 **문자열**이라고 합니다. 이는 단어나 문장과 같이 연속된 글자를 의미합니다.  Horizontal이라는 단어 앞뒤에 따옴표를 붙이면 이를 문자열로 처리하도록 컴퓨터에 지시하게 됩니다.

컴퓨터가 축 값을 검색해서 가져오면 이를 저장할 공간이 필요합니다. 메서드 호출 왼쪽에 horizontal이라는 새로운 플로트 변수를 생성하고 여기에 GetAxis에서 찾은 값을 저장합니다.

다음으로, **Vertical**이라는 축의 값을 찾는 코드 라인을 추가하고 이를 **vertical**이라는 변수에 저장합니다.

이제 Update 메서드에는 다음과 같이 코드가 추가되었습니다.

```csharp
// Update는 프레임마다 한 번씩 호출됩니다.
    void Update()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");
    }
```

이제 수평 및 수직 축 값을 찾았습니다. 다음 단계는 이 값을 **벡터**로 통합하여 위치 변경에 사용할 수 있도록 하는 것입니다.

단계를 완료로 표시

## 5. 벡터 만들기

Q&A (0)

Unity에서 3D 공간은 하나의 벡터를 형성하는 3개의 좌표를 통해 표현됩니다.  Unity에서 벡터를 나타내는 데이터 유형을 **Vector3**라고 합니다.  이를 통해 게임 오브젝트의 위치를 나타내므로 Vector3형 변수를 하나 만들어 변경 사항을 반영하도록 해야 합니다. 이동은 이 클래스에서 사용자 입력을 나타내는 기본적인 사항이며 이 정보는 다른 용도로 사용해야 할 수도 있습니다.

따라서 생성해야 하는 변수의 **범위**를 고려해야 합니다.

변수의 범위는 변수를 사용할 수 있는 코드의 영역을 말합니다. 일반적으로는 변수가 선언된 코드 블록이 그 범위에 해당됩니다.  예를 들어, 방금 선언한 플로트 변수(horizontal 및 vertical)는 Update 메서드 내에서 선언되었으므로 범위는 Update 메서드 전체입니다.  이러한 변수를 Update 메서드의 **로컬**변수라고 합니다.

서로 다른 여러 메서드에서 하나의 변수를 사용하려면 해당 메서드의 범위 밖에서 변수를 생성하면 됩니다. 이러한 변수는 **클래스**의 로컬 변수입니다.

메서드 정의 위에 다음 라인을 추가합니다.

```csharp
Vector3 m_Movement;
```

이제 스크립트는 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Vector3 m_Movement;

    // Start는 첫 프레임 업데이트 이전에 호출됩니다.
    void Start()
    {

    }

    // Update는 프레임마다 한 번씩 호출됩니다.
    void Update()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");
    }
}
```

새로운 코드 라인은 PlayerMovement 클래스 내 어디에서나 사용할 수 있는 **m_Movement**라는 Vector3 변수를 생성하도록 컴퓨터에 지시합니다.

#### 명명 규칙

그런데 이름 앞의 **m_**은 무엇을 의미할까요?  이는 **명명 규칙**의 일부입니다.  명명 규칙은 특정 오브젝트나 오브젝트의 클래스를 식별하는 데 사용합니다. 본 프로젝트에서는 Unity의 내부 명명 규칙을 사용하겠습니다. 모든 변수는 소문자로 시작하지만 다음에 이어지는 단어는 대문자로 시작합니다. 이를 **낙타 대문자(camelCase)**라고 합니다.

하지만 m_ 접두사로 시작하고 모든 단어가 대문자로 시작하는 **non-public 멤버 변수**는 예외이며, 이를 **파스칼 대문자(PascalCase)**이라고 합니다.  멤버 변수는 특정 메서드가 아닌 클래스에 속한 변수입니다.  non-public 멤버 변수의 m_ 부분은 '멤버(member)' 변수라는 데서 유래한 것입니다.

단계를 완료로 표시

## 6. 변수 값 설정

Q&A (0)

이제 캐릭터 이동을 저장하는 변수가 있으므로 변수의 값을 설정해야 합니다.  이 값은 프레임마다 변경될 수 있으므로 프레임마다 값을 설정해야 하며, Update 메서드에서 이 작업을 수행해야 합니다.

Update 메서드에서 horizontal 및 vertical 변수를 생성한 후에 다음 라인을 추가합니다.

```csharp
m_Movement.Set(horizontal, 0f, vertical);
```

3D 공간의 벡터에는 3개의 값이 있는데, 이 **Set** 메서드를 통해 각각에 값이 할당됩니다.  여기에는 벡터의 각 좌표에 해당하는 파라미터가 3개 있습니다.  이제 이동 벡터에서 x축에는 수평 입력 값, y축에는 0, z축에는 수직 입력 값이 들어갑니다.  두 번째 파라미터의 0 다음에 오는 f는 이 수를 플로트로 처리하도록 컴퓨터에 지시합니다.

이제 작은 문제 하나를 해결해야 합니다. 이동 벡터는 최대 1의 값을 가질 수 있는 2개의 숫자로 구성되어 있습니다. 피타고라스 정리에 따라 2개의 숫자 모두 값이 1이면 벡터의 길이(크기)가 1을 초과합니다.

[Image: image]

따라서 캐릭터가 단일 축을 따라 이동하는 것보다 대각선 방향으로 더 빨리 이동하게 됩니다.  이를 방지하기 위해서는 이동 벡터가 항상 같은 크기를 유지할 수 있도록  크기를 **정규화**하면 됩니다.  벡터를 정규화한다는 것은 벡터의 방향을 동일하게 유지하면서 크기를 1로 변경하는 것을 말합니다.

이미 작성한 라인 아래에 다음 스크립트를 추가하여 벡터 자체에 대한 메서드를 호출합니다.

```csharp
m_Movement.Normalize ();
```

이제 전체 스크립트의 모습은 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Vector3 m_Movement;

    // Start는 첫 프레임 업데이트 이전에 호출됩니다.
    void Start()
    {

    }

    // Update는 프레임마다 한 번씩 호출됩니다.
    void Update()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();
    }
}
```

본 예시에는 입력을 받는 부분과 이동 벡터를 설정하는 부분이 서로 떨어져 있습니다.  하지만 기능상 차이는 없으며 코드를 깔끔하게 해 줍니다.

단계를 완료로 표시

## 7. Animator 컴포넌트 설정

Q&A (0)

이동 벡터를 생성한 후에는 프레임별로 수행해야 할 추가 작업이 남아 있습니다. 컴퓨터에 지시해야 하는 내용은 다음과 같습니다.

- 캐릭터가 걷고 있는지 여부를 Animator 컴포넌트에 알립니다.
- 플레이어 입력에서 캐릭터 회전 값을 받아 옵니다(이동을 구한 방식과 유사).
- 캐릭터에 이동과 회전을 적용합니다.

Animator 컴포넌트부터 시작해 보겠습니다.

#### 플레이어의 입력 감지

플레이어 입력이 있다면 캐릭터가 걷고 있는 상태여야 하고, 없다면 대기 상태여야 합니다.

**1.**우선 수평 입력이 있는지 여부를 파악하는 코드를 작성합니다.  이동 벡터를 정규화하는 코드 아래에 다음 내용을 추가합니다.

```csharp
bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
```

여기에서는 hasHorizontalInput이라고 하는 **부울 변수**(참 또는 거짓인 변수)를 생성합니다.  그리고 나서 이 변수를 메서드의 반환 값과 동일하게 설정합니다.  이 메서드는 Approximately라고 하며 Mathf 클래스에서 가져온 것입니다. 이 메서드는 2개의 플로트 파라미터를 취하여 부울 1개를 반환합니다(2개의 플로트 값이 유사하면 참, 그렇지 않으면 거짓을 반환함).  따라서 horizontal 변수가 0에 가까우면 메서드가 참을 반환합니다.

자세히 살펴보면 이 라인에는 메서드 호출 앞의 느낌표가 처음으로 등장합니다. 이는 **논리 부정 연산자**로서, 부울을 반전하여 참을 거짓으로, 거짓을 참으로 설정합니다.  따라서 수평값이 0에 가깝지 않으면 hasHorizontalInput은 참으로 설정됩니다.  즉, 수평값이 0이 아니면 hasHorizontalInput은 참이 됩니다.

**2.**이제 수평 축에 대한 코드가 완성되었으니 수직 축에도 다음과 같이 유사한 라인을 추가합니다.

```csharp
bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
```

이 라인은 수직 축에 동일한 작업을 수행합니다.

**3.**이제 위에서 작성한 수직, 수평 축에 대한 코드를 하나의 부울로 결합해야 합니다.  다음 코드 라인을 추가합니다.

```csharp
bool isWalking = hasHorizontalInput || hasVerticalInput;
```

이 라인은 isWalking이라는 새로운 부울 변수를 생성하는데, 이 변수는 hasHorizontalInput 또는 hasVerticalInput으로 설정됩니다.  2개의 세로줄은 **논리 OR 연산자**입니다. 이 연산자는 양쪽의 부울을 비교한 후 둘 중 하나 또는 둘 모두 참이면 참으로, 둘 모두 거짓이면 거짓으로 표시합니다.  따라서 hasHorizontalInput 또는 hasVerticalInput이 참이면 isWalking이 참이고, 그렇지 않으면 거짓이 됩니다.

단계를 완료로 표시

## 8. Animator 컴포넌트에 대한 레퍼런스를 저장하는 변수 생성

Q&A (0)

다음으로, 방금 생성한 부울을 사용하여 캐릭터가 걷고 있어야 하는지 여부를 Animator 컴포넌트에 알려야 합니다. 이를 위해서는 Animator 컴포넌트에 액세스해야 합니다.

Input이나 Mathf에 대한 메서드를 호출할 때와 달리 이번에는 왜 Animator 컴포넌트에 접근하기 위해 특별한 작업을 수행해야 할까요?  이는 Input과 Mathf 클래스에 대한 메서드가 정적이기 때문입니다.

**정적 메서드**는 클래스의 인스턴스가 아니라 클래스의 **유형**에 대해 호출됩니다.  입력은 글로벌 컨셉에 더 가깝기 때문에 축 값을 판단하기 위해 Input 클래스의 단일 인스턴스가 필요하지 않습니다.  따라서 이러한 값을 구하는 메서드는 정적 메서드가 됩니다.  마찬가지로, Mathf 클래스는 헬퍼 메서드(다른 메서드의 작업 수행을 지원하는 메서드)로 가득 차 있는데, 헬퍼 메서드에는 Mathf의 특정 인스턴스에 대한 구체적인 데이터가 포함되어 있지 않아 이들 역시 정적 메서드가 됩니다.

반대로 m_Movement 변수를 생각해 보세요. 특정 Vector3 인스턴스에 값을 설정해야 했으므로 이들은 정적 메서드가 아닙니다. 이처럼 정적 메서드는 유형 이름을 사용하여 호출되고, 비정적 메서드(또는 '인스턴스' 메서드)는 인스턴스 이름을 사용하여 호출됩니다.

단계를 완료로 표시

## 9. Animator 컴포넌트에 대한 레퍼런스 구하기

Q&A (0)

Animator 컴포넌트에 접근하기 위해서는 레퍼런스가 필요하며, 이 레퍼런스는 **GetComponent** 메서드를 사용하여 구할 수 있습니다.  이 레퍼런스는 단일 메서드뿐 아니라 클래스 전체에서 사용되기 때문에, 범위가 클래스에 대해 로컬이 되도록 멤버 변수(이동 벡터와 마찬가지)로 유지해야 합니다.

클래스 상단에서 이동 벡터 선언과 클래스 선언의 사이에 다음 라인을 추가합니다.

```csharp
Animator m_Animator;
```

이제 스크립트는 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Animator m_Animator;
    Vector3 m_Movement;

    void Start ()
    {

    }

    void Update ()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();

        bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
        bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
        bool isWalking = hasHorizontalInput || hasVerticalInput;
    }
}
```

참고: 본 예시에서는 Start 및 Update 메서드 위의 주석이 삭제되었습니다.  주석은 코드에 전혀 영향을 주지 않기 때문에 원하는 경우 주석을 삭제해도 됩니다.

단계를 완료로 표시

## 10. Animator 컴포넌트에 대한 레퍼런스 설정

Q&A (0)

이미 Animator 컴포넌트에 대한 레퍼런스를 저장하는 변수를 생성했지만, 아직 값을 설정하지 않았기 때문에 빈 상태로 남아 있습니다. C#에서 변수가 이처럼 비어 있으면, 그 값을 **null**이라고 합니다.  레퍼런스가 있어야 하는 상황에서 레퍼런스가 존재하지 않는 경우 그 값을 null이라 표현합니다.

여기에서는 null이 아닌 적절한 레퍼런스를 설정해야 합니다. 또한 모든 메서드에서 Animator 컴포넌트에 접근할 수 있어야 하기 때문에 가능한 한 이른 단계에서 레퍼런스를 설정해야 합니다.

MonoBehaviour에 대해 가장 먼저 호출되어야 하는 메서드 중 하나는 본 튜토리얼 앞쪽에서 살펴본 **Start 메서드**로, 여기에서 레퍼런스를 설정해야 합니다.  Start 메서드에 다음 라인을 추가합니다.

```csharp
m_Animator = GetComponent<Animator> ();
```

메서드에는 다음과 같이 코드가 추가됩니다.

```csharp
void Start ()
    {
        m_Animator = GetComponent<Animator>();
    }
```

이 코드 라인에는 익숙한 구문과 새로운 구문이 섞여 있습니다.

- 왼쪽에는 할당 대상인 변수가 있습니다.
- 오른쪽에는 메서드 이름이 있습니다(그 앞에는 아무것도 적혀 있지 않음).
- 소괄호 앞에 Animator를 감싼 홑화살괄호가 있습니다.
- 라인은 세미콜론으로 끝납니다.

#### 이 레퍼런스는 무엇을 의미할까요?

코드를 살펴보겠습니다.

먼저, GetComponent 앞에 클래스가 없는 이유는 무엇일까요?  이전에는 다른 오브젝트에 대한 메서드에 접근하기 위해 이를 추가했습니다(예: 이동 벡터에 대한 정규화 메서드).  하지만 GetComponent는 MonoBehaviour의 일부이고, 현재 코드를 작성하고 있는 클래스가 MonoBehaviour이므로 이미 접근 권한이 주어진 상태입니다.

다음으로 홑화살괄호를 살펴보겠습니다.  GetComponent 메서드가 **제네릭** 메서드이기 때문에 홑화살괄호가 추가되었습니다.  제네릭 메서드는 2개의 파라미터 세트, 즉 **일반 파라미터**와 **유형 파라미터**로 구성된 메서드를 말합니다.  홑화살괄호 사이에 나열된 파라미터는 유형 파라미터입니다.

이제 GetComponent에 우리가 찾고 있는 컴포넌트의 **유형**을 알려 줘야 합니다. Animator 컴포넌트를 찾고 있으므로 유형 파라미터는 Animator가 됩니다.  코드 라인에서는 "Animator 유형의 컴포넌트에 대한 레퍼런스를 구하여 m_Animator라는 변수에 할당"할 것을 지시하고 있습니다.

#### isWalking 애니메이터 파라미터 설정

이제 Animator 컴포넌트에 대한 레퍼런스가 있으므로 이를 사용하여 이전 튜토리얼에서 생성한 IsWalking 애니메이터 파라미터를 설정할 수 있습니다.

Update 메서드에서 isWalking 변수 생성 아래에 다음의 새로운 코드 라인을 추가합니다.

```csharp
m_Animator.SetBool ("IsWalking", isWalking);
```

이 코드는 방금 설정한 Animator 컴포넌트 레퍼런스를 사용하여 **SetBool** 메서드를 호출합니다.  첫 번째 파라미터는 값을 설정하고자 하는 애니메이터 파라미터의 이름이고 두 번째는 설정하고자 하는 값입니다. 첫 번째 파라미터의 철자와 대소문자가 모두 정확해야 합니다. 그렇지 않으면 메서드는 어떤 애니메이터 파라미터의 값을 설정해야 하는지 파악하지 못합니다.

이제 스크립트는 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    Animator m_Animator;
    Vector3 m_Movement;

    void Start ()
    {
        m_Animator = GetComponent<Animator>();
    }

    void Update ()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();

        bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
        bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
        bool isWalking = hasHorizontalInput || hasVerticalInput;
        m_Animator.SetBool("IsWalking", isWalking);
    }
}
```

이제 다 되었습니다. 애니메이터 파라미터의 값이 설정되었습니다.

단계를 완료로 표시

## 11. 캐릭터 회전 생성

Q&A (0)

각 프레임마다 완료해야 하는 다음 작업으로 캐릭터의 회전을 생성하는 방법을 알아보겠습니다.

이 게임에서 캐릭터는 앞으로만 걸을 수 있으므로 몸체가 이동 방향과 같은 방향을 향해야 합니다. 하지만 입력에 따라 너무 빠르게 몸을 회전하면 어색해 보일 수 있으니 속도를 적절히 제어하도록 합니다. 하지만 속도를 얼마나 줄여야 할까요?

먼저 캐릭터의 회전하는 속도가 어느 정도여야 하는지 고려해 보세요.

속도를 설정하려면 새로운 변수를 생성해야 합니다.

#### turnSpeed 변수 생성

클래스 상단의 Animator 멤버 변수 위에 다음 라인을 추가합니다.

```csharp
public float turnSpeed;
```

코드를 자세히 살펴보겠습니다.

변수 선언 앞에 **public**이라는 단어를 추가했습니다. Unity에서는 인스펙터 창에 public 멤버 변수가 나타나기 때문에 미세 조정이 가능합니다.

또한 m_ 접두사가 붙는 파스칼 표기법이 아닌 낙타 표기법을 사용했습니다. 이는 변수가 public이기 때문이며, Unity 명명 규칙에서는 public 멤버 변수에 이 형식을 사용합니다.  명명 규칙은 기술적 근거는 없지만 매우 유용하게 사용할 수 있습니다.

#### 캐릭터의 전방 벡터 계산

캐릭터가 이동 방향을 향해야 한다는 것을 기억하세요. 모든 Transform 컴포넌트에는 전방 벡터가 있기 때문에 먼저 캐릭터의 **전방 벡터**로 원하는 값을 계산하도록 합니다.

Update 메서드 하단에 다음 라인을 추가합니다.

```csharp
Vector3 desiredForward = Vector3.RotateTowards (transform.forward, m_Movement, turnSpeed * Time.deltaTime, 0f);
```

코드 라인이 길고 복잡해 보이지만 익숙한 내용이 많이 포함되어 있습니다. 하나하나 자세히 살펴보겠습니다.

- 이 코드는 **desiredForward**라는 Vector3 변수를 생성합니다.
- 또한 이 코드는 이 변수를 Vector3 클래스의 정적 메서드인 **RotateTowards**라는 메서드의 반환값으로 설정합니다. RotateTowards에는 4개의 파라미터(처음 두 파라미터는 Vector3로 현재 회전 값과 목표 회전 값임)가 필요합니다.
- 코드는 **transform.forward**로 시작하여 **m_Movement**변수를 목표로 합니다. transform.forward를 이용하면 Transform 컴포넌트에 바로 접근하여 전방 벡터를 구할 수 있습니다.
- 다음 두 파라미터는 시작 벡터와 목표 벡터 사이의 변화량으로, 첫 번째는 각도의 변화(단위: 라디안)이고 두 번째는 크기의 변화입니다.  이 코드는 각도를 **turnSpeed * Time.deltaTime**만큼, 크기를 0만큼 변경합니다.

Time.deltaTime은 이전 프레임으로부터 경과된 시간(프레임 간 시간)입니다. 그러면 turnSpeed에 이 값을 곱해야 하는 이유는 무엇일까요?

프레임마다 Update가 호출되므로 게임이 초당 60프레임으로 실행된다면 이 메서드는 1초에 60번 호출됩니다. 호출 간의 변화량은 극히 작기 때문에 60프레임 동안 1초에 대해 원하는 변화량을 얻을 수 있습니다.  하지만 게임이 초당 30프레임으로 실행되는 경우는 어떨까요?  동일한 시간 동안 절반의 메서드 호출만 이루어지기 때문에 절반만큼만 회전하게 됩니다. 초당 프레임 수가 캐릭터의 회전 속도에 영향을 미쳐서는 안 되므로, 이는 바람직하지 않습니다.

그렇다면 프레임 단위가 아니라 초 단위로 변경을 수행하는 것은 어떨까요? 그러면 훨씬 쉬워질 겁니다. 이를 위해서는 초당 원하는 만큼의 변경에 한 프레임에 소요된 시간을 곱해야 합니다. 이 코드가 하는 일이 바로 이것입니다.

단계를 완료로 표시

## 12. turnSpeed 변수 조정

Q&A (0)

turnSpeed 변수는 캐릭터가 초당 회전해야 하는 각도를 라디안 단위로 나타낸 것입니다.  그런 다음 이 값에 Time.deltaTime을 곱하여 해당 프레임에서 캐릭터가 회전해야 하는 양을 구합니다.  라디안은 각도를 측정하는 또 다른 방식으로, 각도와 비슷하지만 측정이 더 자연스럽습니다. 1개의 원에는 2π 라디안이 있기 때문에 약 6이 됩니다. 캐릭터는 항상 가장 짧게 회전하게 될 것이므로 캐릭터가 회전하게 될 최대량은 약 **3라디안**입니다.

따라서 turnSpeed가 3이라면 캐릭터가 방향을 완전히 바꾸는 데는 약 1초가 소요되는데,  매우 느린 결과입니다.  회전 속도가 6이라면 방향을 바꾸는 데 약 0.5초가 소요되는데, 이것도 느립니다.  20이라는 값을 적용해서 어떻게 보이는지 확인해 보겠습니다. 원한다면 나중에 언제든지 변경할 수 있습니다.

클래스 상단에서 turnSpeed 변수를 선언하는 라인을 다음과 같이 바꿉니다.

```csharp
public float turnSpeed = 20f;
```

이제 캐릭터가 향해야 할 방향에 대한 벡터가 생겼습니다.

#### 회전 생성 및 저장

벡터를 사용하여 회전 값을 받아 저장해 두면 원할 때 사용할 수 있습니다. 이동 벡터와 동일한 방식으로 저장할 예정이므로 이동 벡터 근처에 변수를 선언합니다.

m_Movement라는 Vector3를 선언해둔 라인 아래에 다음 라인을 추가합니다.

```csharp
Quaternion m_Rotation = Quaternion.identity;
```

**쿼터니언**으로 회전을 저장할 수 있으며, 이를 통해 회전을 3D 벡터로 저장할 때 발생하는 몇 가지 문제를 해결할 수 있습니다.  본 튜토리얼에서는 이에 대한 상세한 설명은 생략하며, 지금은 회전을 저장하는 방법 중 하나라고 알아 두시면 됩니다.

쿼터니언에 기본값 Quaternion.identity를 부여했습니다.  보통, 특정 메서드가 아니라 클래스의 일부인 변수(멤버 변수)는 클래스의 인스턴스가 생성되면 기본값으로 설정됩니다.  예를 들어 Vector3의 기본값은 x, y, z 모두 0이며  쿼터니언도 동일합니다.  하지만 이동이 없을 때 제로 벡터는 일리가 있지만 제로 쿼터니언은 뭔가 이상합니다.  따라서 Quaternion.identity로 설정하면 제로 쿼터니언이 아니라 아예 회전 값을 주지 않게 되어 더 적절합니다.

회전 변수를 생성했으므로 이제 설정할 수 있습니다.  desiredForward 변수 생성 아래에 다음 라인을 추가합니다.

```csharp
m_Rotation = Quaternion.LookRotation (desiredForward);
```

이 라인은 **LookRotation** 메서드를 호출하여 해당 파라미터 방향으로 바라보는 회전을 생성합니다.

이제 스크립트는 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float turnSpeed = 20f;

    Animator m_Animator;
    Vector3 m_Movement;
    Quaternion m_Rotation = Quaternion.identity;

    void Start ()
    {
        m_Animator = GetComponent<Animator>();
    }

    void Update ()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();

        bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
        bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
        bool isWalking = hasHorizontalInput || hasVerticalInput;
        m_Animator.SetBool("IsWalking", isWalking);

        Vector3 desiredForward = Vector3.RotateTowards (transform.forward, m_Movement, turnSpeed * Time.deltaTime, 0f);
        m_Rotation = Quaternion.LookRotation (desiredForward);
    }
}
```

단계를 완료로 표시

## 13. 캐릭터에 이동 및 회전 적용

Q&A (0)

이제 거의 마무리되었습니다.  마지막 단계에서는 캐릭터에 이동과 회전을 적용하면 됩니다.  이를 적용할 수 있는 여러 가지 방법이 있지만, 캐릭터가 물리 시스템의 일부여야 하기 때문에 다른 기법을 사용하는 대신 리지드바디를 이동해야 합니다.

이를 위해서는 Rigidbody 컴포넌트에 대한 레퍼런스가 필요합니다. 이 레퍼런스는 Animator 컴포넌트와 동일한 방식으로 구할 수 있습니다.

**1.**스크립트에서 Animator 변수 선언 바로 다음에 아래와 같은 라인을 추가합니다.

```csharp
Rigidbody m_Rigidbody;
```

**2.**Animator 변수의 레퍼런스를 설정한 부분 아래에 다음 코드를 추가합니다.

```csharp
m_Rigidbody = GetComponent<Rigidbody> ();
```

이제 Rigidbody에 대한 레퍼런스가 있으니 애니메이션화된 캐릭터의 이동에 관해 구체적으로 생각해 보겠습니다.  캐릭터에는 재미있는 Walk 애니메이션이 있으며 이를 위해 루트 모션을 사용하는 것이 바람직합니다.  하지만 이 애니메이션에는 회전 동작이 없으며 Update 메서드에서 Rigidbody를 회전하려 하면 애니메이션에 의해 오버라이드되어 캐릭터가 필요한 시점에 회전하지 않을 수 있습니다.

따라서 애니메이션의 루트 모션 일부만 사용하여 회전이 아니라 이동을 적용해야 합니다.  그러면 애니메이터에서 루트 모션이 적용되는 방식을 어떻게 변경할 수 있을까요?  MonoBehaviour에는 애니메이터에서 루트 모션의 적용 방식을 변경하는 특수 메서드가 있습니다.

Update 메서드 아래에 아래와 같이 새로운 메서드를 선언합니다.

```csharp
void OnAnimatorMove ()
    {

    }
```

이 메서드를 통해 원하는 대로 루트 모션을 적용하여 이동과 회전을 개별적으로 적용할 수 있습니다.

단계를 완료로 표시

## 14. 캐릭터의 이동 설정

Q&A (0)

캐릭터의 이동부터 먼저 설정하겠습니다. 새로운 OnAnimatorMove 메서드에 다음 라인을 추가합니다.

```csharp
m_Rigidbody.MovePosition (m_Rigidbody.position + m_Movement * m_Animator.deltaPosition.magnitude);
```

이 코드 라인도 꽤 복잡해 보이지만, 이미 사용해 본 코드도 포함되어 있습니다.

먼저 Rigidbody 컴포넌트에 대한 레퍼런스를 사용하여 MovePosition 메서드를 호출하고 새로운 위치인 단일 파라미터를 전달했습니다. 캐릭터의 새 위치는 리지드바디의 현재 위치에서 시작하며, 이동 벡터에 애니메이터의 deltaPosition 크기를 곱한 값을 추가했습니다.  하지만 이 코드는 어떤 의미를 담고 있을까요?

애니메이터의 **deltaPosition**은 루트 모션으로 인한 프레임당 위치의 이동량을 말합니다.  여기서는 deltaPosition의 크기(길이)에 캐릭터의 이동 방향을 나타내는 이동 벡터를 곱했습니다.

단계를 완료로 표시

## 15. 캐릭터의 회전 설정

Q&A (0)

다음으로 캐릭터의 회전을 설정해 보겠습니다.  OnAnimatorMove 메서드의 MovePosition 호출 바로 아래에 다음 라인을 추가합니다.

```csharp
m_Rigidbody.MoveRotation (m_Rotation);
```

이는 회전에 적용된다는 점을 제외하고 MovePosition 호출과 매우 유사합니다. 이번에는 회전에 변경을 적용하는 것이 아니라 회전을 직접 설정하고 있습니다.

이것이 여러분이 처음으로 작성한 스크립트의 마지막 코드 라인입니다.  하지만 조정해야 할 것이 하나 남았습니다.

단계를 완료로 표시

## 16. Update 메서드 변경

Q&A (0)

이전 튜토리얼에서는 [렌더링에 사용되는 Update 루프와 물리 작업 실행에 사용되는 FixedUpdate 루프](https://learn.unity.com/tutorial/the-player-character-part-1)에 대해 배웠습니다. 애니메이터를 물리 루프에 맞추어 적시에 실행하여 물리와 애니메이션 간 충돌을 방지하는 방법을 알아보았습니다. 하지만 이번에는 OnAnimatorMove를 사용하여 루트 모션을 오버라이드합니다. 그러면 OnAnimatorMove가 Update 메서드와 같은 렌더링이 아니라 물리에 맞추어 적시에 호출됩니다.

이동 벡터와 회전은 Update에서 설정됩니다. OnAnimatorMove가 처음으로 호출되면 쿼터니언에 값이 설정되어 있지 않아 문제가 발생합니다.

OnAnimatorMove에 맞추어 이동 벡터와 회전을 적시에 설정하기 위해 Update 메서드를 다음과 같이 FixedUpdate 메서드로 변경합니다.

```csharp
void FixedUpdate ()
```

이는 Unity에서 자동으로 호출되는 또 하나의 특수 메서드로, 물리에 맞추어 적시에 호출됩니다.  FixedUpdate는 렌더링된 프레임에 맞춰 호출되는 것이 아니라 물리 시스템이 충돌 및 상호 작용을 계산하기 전 호출됩니다.  기본적으로 이는 초당 정확히 50번 호출되도록 설정되어 있습니다.

이제 다 되었습니다.  완료된 스크립트는 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float turnSpeed = 20f;

    Animator m_Animator;
    Rigidbody m_Rigidbody;
    Vector3 m_Movement;
    Quaternion m_Rotation = Quaternion.identity;

    void Start ()
    {
        m_Animator = GetComponent<Animator> ();
        m_Rigidbody = GetComponent<Rigidbody> ();
    }

    void FixedUpdate ()
    {
        float horizontal = Input.GetAxis ("Horizontal");
        float vertical = Input.GetAxis ("Vertical");

        m_Movement.Set(horizontal, 0f, vertical);
        m_Movement.Normalize ();

        bool hasHorizontalInput = !Mathf.Approximately (horizontal, 0f);
        bool hasVerticalInput = !Mathf.Approximately (vertical, 0f);
        bool isWalking = hasHorizontalInput || hasVerticalInput;
        m_Animator.SetBool ("IsWalking", isWalking);

        Vector3 desiredForward = Vector3.RotateTowards (transform.forward, m_Movement, turnSpeed * Time.deltaTime, 0f);
        m_Rotation = Quaternion.LookRotation (desiredForward);
    }

    void OnAnimatorMove ()
    {
        m_Rigidbody.MovePosition (m_Rigidbody.position + m_Movement * m_Animator.deltaPosition.magnitude);
        m_Rigidbody.MoveRotation (m_Rotation);
    }
}
```

C# 에서는 클래스에서 메서드가 선언되는 순서가 중요하지 않기 때문에 메서드 배열에는 차이가 있을 수 있습니다.

이제 스크립트를 저장한 후  Unity로 돌아가 작업한 것을 테스트해 보겠습니다.

단계를 완료로 표시

## 17. 변경 사항 테스트

Q&A (0)

#### JohnLemon에 PlayerMovement 스크립트 추가

Unity로 돌아가서 JohnLemon 오브젝트에 스크립트를 컴포넌트로 추가합니다.

인스펙터 창에서 Add Component 버튼을 클릭하여 스크립트 컴포넌트를 추가할 수 있지만, 다른 방법도 있습니다.

**1.**JohnLemon 게임 오브젝트를 선택합니다.

**2.**인스펙터 창에서 Edit prefab을 클릭하여 프리팹 모드로 진입합니다.

**3.**프로젝트 창에서 **Assets > Scripts**로 이동하여 **PlayerMovement** 스크립트를 찾습니다.

**4.**PlayerMovement 스크립트를 프로젝트 창에서 인스펙터 창으로 드래그합니다.

**5.**프리팹 모드가 Auto Save로 설정되어 있지 않은 경우 Save 버튼을 클릭합니다.

[Image: image]

**6.**뒤로 가기 화살표를 클릭하여 프리팹의 이동 경로를 따라 돌아갑니다.

[Image: image]

**7.**MainScene이 로드되어 있지 않으면 프로젝트 창으로 가서 **Assets > Scenes** 폴더에 있는 씬 에셋을 더블 클릭하여 MainScene을 로드합니다.

**8.**씬에서 JohnLemon 게임 오브젝트를 선택하면, 프리팹에 적용한 모든 컴포넌트와 설정이 적용된 것을 확인할 수 있습니다.

단계를 완료로 표시

## 18. 게임 뷰 설정 조정

Q&A (0)

프리팹을 테스트하기 전에 게임(Game) 뷰의 일부 설정을 조정해야 합니다. 모니터의 해상도가 높은 경우에는 Unity가 성능 향상을 위해 게임 창의 크기를 자동으로 조정합니다. 게임 창의 Scale을 설정하여 크기를 조정할 수 있습니다.

지금은 씬이 그다지 복잡하지 않기 때문에 성능을 우려할 필요는 없지만, 문제가 발생했다면 지금 해결해 보겠습니다.

**1.**게임 창 탭을 선택합니다. 상단에서 게임 창의 크기가 조정되었는지 확인할 수 있습니다.

[Image: image]

**2.**현재 **Free Aspect**로 되어 있는 종횡비 드롭다운 메뉴를 클릭합니다.

[Image: image]

**3.  Low Resolution Aspect Ratios 체크박스**를 비활성화하고 Scale 슬라이더를 **1x**로 변경합니다. 체크박스를 비활성화할 수 없거나 이미 비활성화되어 있더라도 걱정 마세요. 완성된 게임에는 영향을 미치지 않으며 모니터에 맞게 자동으로 설정됩니다.

이제 게임 창이 적절하게 표시되므로 JohnLemon을 테스트해 보겠습니다. 우선 플레이 버튼을 클릭하고 화살표 키를 사용하여 존 레몬을 움직입니다.

[Image: image]

**참고:** 컴파일러 오류 메시지가 나타나도 당황하지 마세요. 특히 스크립트를 처음 작성해 보았다면 오타가 포함될 수 있으니 다시 스크립트 파일로 돌아가서 예시와 대조해 보세요.  수정한 사항을 저장한 다음 플레이 모드에서 다시 테스트합니다.

단계를 완료로 표시

## 19. 요약

Q&A (0)

본 튜토리얼에서는 Unity에서 첫 번째 스크립트를 작성하고 핵심 개념을 살펴보았습니다. 코드 작성 경험이 없는데도 모든 내용을 잘 이해하셨다면 아주 훌륭합니다. 하지만 이러한 개념에 익숙해지려면 시간과 연습이 필요할 수 있습니다. 첫 번째 시도에서 어려움이 있었다고 해도 걱정하지 마세요.

다음 튜토리얼에서는 JohnLemon이 탈출해야 하는 으스스한 환경과 조명을 생성해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
