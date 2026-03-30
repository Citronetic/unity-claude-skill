[Image: image]

# 함수 소개

Tutorial

Beginner

+10XP

30 mins

0

(18)

Unity Technologies

[Image: 함수 소개]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 게임 시작 시 또 다른 체력 물약을 생성하는 코드를 작성합니다.
- 코드에서 함수와 그 역할에 대해 알아봅니다.
- 기존의 SpawnerSample 스크립트에 있던 함수를 식별합니다.

이 튜토리얼을 마치면 사용할 함수를 직접 생성할 수 있습니다.

Languages available:

한국어English日本語한국어简体中文한국어

## 1.  과제: 게임 시작 지점에 다른 물약 생성

Q&A (0)

이전 튜토리얼에서는 게임 캐릭터를 돕는 체력 물약 3개가 생성되는 거리를 SpawnerSample 스크립트로 간단히 조정해 보았습니다.

다음 과제는 이미 가지고 있는 코드를 사용하여 나머지 3개의 물약보다 더 먼 거리에 네 번째 물약을 생성하는 것입니다.

다음 프로세스를 사용해 과제를 해결할 수 있습니다.

**1.**  Unity 에디터에서 프로젝트 창으로 이동하여 *Assets/Creator Kit - Beginner Code/Scripts/Tutorial* 파일 경로에서 **SpawnerSample** 스크립트를 선택합니다.

**2.**  인스펙터에서 **Save State** 버튼을 클릭합니다. 의도치 않은 변경 사항을 보존하지 않도록 현재 상태로 스크립트를 저장합니다.

[Image: image]

필요한 경우 언제든지 인스펙터로 돌아가서 **Restore** 버튼을 선택하여 스크립트를 이전 버전으로 되돌릴 수 있습니다.

[Image: image]

**3.** 게임 시작 지점에 **4** **개의 물약**을 생성하도록 스크립트를 수정합니다. 스크립트를 망쳤을까 걱정하지 않아도 됩니다. 파일 복사본을 만들어 두었으므로 언제든지 스크립트를 기존 상태로 복구할 수 있습니다.

**팁:** 새로운 물약을 어디에 배치할지 생각해 보세요. 명령어 하나를 조정해 일정한 방식으로 물약을 배치할 수 있을지 살펴보세요.

**4.**  **Ctrl + S**(Windows) 또는 **Cmd + S**(macOS)를 사용하여 변경 사항을 저장한 다음 Unity 에디터의 플레이 모드에서 변경 사항을 테스트합니다.

**5.**  모든 변경 사항을 확인했으면 다시 플레이 버튼을 클릭하여 플레이 모드를 종료합니다.

다음 단계에서 솔루션을 확인하세요.

단계를 완료로 표시

## 2. 도전 과제 솔루션 검토

Q&A (0)

게임 시작 지점에 다른 물약을 생성하는 방법은 다음과 같습니다.

**1.** 게임 시작 지점에 새로운 물약을 생성하는 명령을 컴퓨터에 전달하는 명령어 4줄을 복사하여 붙여넣습니다(총 4묶음의 코드 생성).

```csharp
angle = 95;
direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
spawnPosition = transform.position + direction * radius;
Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
```

**2.** 네 번째 코드 묶음에서 각도 값을 조정해 새로운 물약의 위치를 변경합니다.

```csharp
// 생성 시 네 번째 물약이 만들어짐
angle = 135;
direction = Quaternion.Euler(0, angle, 0) * Vector3.right;
spawnPosition = transform.position + direction * radius;
Instantiate(ObjectToSpawn, spawnPosition, Quaternion.identity);
```

위 버전에서는 이중 슬래시(**//**) 뒤에 코드에 대한 설명이 적혀 있는데, 이는 주석이라고 합니다.

주석은 스크립트를 읽는 사람의 편의를 위해 작성한 메시지이며, 컴파일러는 이중 슬래시 뒤에 오는 모든 내용을 무시합니다. 코드를 다른 사람에게 설명하거나 자신이 나중에 확인할 메모를 작성하는 데 주석을 사용할 수 있습니다.

**3.**게임을 테스트하면 다음과 유사하게 나타날 것입니다(네 번째 코드 묶음에서 추가한 각도에 따라 다름).

[Image: image]

그러나 코드를 이런 식으로 작성하는 것은 그다지 효율적이지 않습니다. 예를 들어 게임 시작 지점에 10개의 물약을 이런 식으로 생성하면, 같은 내용이 많이 반복되며 스크립트가 매우 길어질 것입니다. 그렇기 때문에 효율적인 코드 작성법을 찾아야 합니다.

단계를 완료로 표시

## 3. 함수 소개

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- 한국어

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

함수를 이용하면 코드를 반복해서 작성하지 않아도 됩니다.

함수는 여러 명령어의 묶음입니다. 컴파일러가 함수에 도달하면 스크립트의 나머지 부분을 진행하기 전에 해당 묶음의 모든 명령어를 처리(실행)할 것을 컴퓨터에 명령합니다.

아래 예제에서 컴퓨터는 스크립트에서 함수(2)를 실행한 다음 이어지는 나머지 명령어를 처리해야 합니다.

[Image: image]

먼저 예제 함수를 살펴보겠습니다.

```csharp
void AddingNumbers(float num1, float num2)
{
  float resultingNumber;
  resultingNumber = num1 + num2;
}
```

단계를 완료로 표시

## 4. 함수 선언 검토

Q&A (0)

이 함수가 수행하는 작업을 파악하기 위해 첫 번째 줄부터 분석해 보겠습니다.

```csharp
void AddingNumbers(float num1, float num2)
```

이는 함수 선언으로, 컴퓨터에게 함수를 생성하도록 명령합니다. 함수 선언은 변수 선언과 비슷합니다. 함수를 선언할 때 항상 포함되는 내용은 다음과 같습니다.

**1.**  먼저 함수의 **유형**입니다. **void**는 특수한 함수 유형으로, 어디에도 저장되지 않기 때문에 'no type(유형 없음)' 또는 'empty(비어 있음)'를 의미합니다. int 함수를 호출하면 정수 값을 반환하지만 void 유형 변수는 값을 반환하지 않습니다.

**2.**  함수의 **이름**은 컴퓨터에게 함수의 명령어를 실행하도록 지시할 때마다 사용됩니다. 이 함수의 이름은 **AddingNumbers**입니다.

**3.** 괄호 사이의****변수 선언은 **파라미터**라고 합니다. 파라미터를 쉼표로 구분하여 원하는 만큼 포함할 수 있습니다. 함수에 변수를 지정하지 않는 경우에도 괄호는 필요합니다.

여기에서 변수는 float 유형 변수입니다. float 변수는 정수나 범자연수인 int 변수와 달리 실수형 변수입니다. 소수점 양쪽에 숫자가 있으며 정확도를 높이는 데 사용할 수 있습니다.

학사모 아이콘 위에 마우스를 올려놓으면 float 변수의 다른 예를 살펴볼 수 있습니다.

단계를 완료로 표시

## 5. 함수 본문 검토

Q&A (0)

함수를 선언한 다음에는 다음 내용이 이어집니다.

1. 여는 중괄호
2. 명령어
3. 닫는 중괄호

이 두 중괄호 사이의 모든 내용을 함수 본문이라고 합니다**.**

```csharp
{
  float resultingNumber;
  resultingNumber = num1 + num2;
}
```

함수 본문에는 함수 이름 아래에 묶인 명령어가 포함되어 있습니다. 컴퓨터는 다른 명령어에서 함수 이름을 만나면 이러한 명령어를 실행합니다.

이 예제 함수에 포함된 명령어를 자세히 분석할 필요는 없습니다. 다만 함수에 포함된 모든 단일 명령어 뒤에 세미콜론이 붙는다는 점만 기억하시기 바랍니다.

단계를 완료로 표시

## 6. 스크립트에서 함수 사용

Q&A (0)

함수의 작동 방식을 살펴보았으므로 명령어에 함수를 직접 사용할 수 있습니다. 이를 함수 호출이라고 합니다.

다음 함수 호출 예시를 살펴보겠습니다.

```csharp
AddingNumbers(5.5f, 18.9f);
```

이 함수 호출은 다음과 같이 구성되었습니다.

1. 함수 이름
2. 두 개의 값을 포함하는 소괄호 한 쌍
3. 명령어의 끝을 나타내는 세미콜론

함수를 호출하면 함수에 포함된 모든 명령어를 실행한 다음 스크립트의 나머지 부분을 순서대로 진행하도록 컴퓨터에 명령합니다.

단계를 완료로 표시

## 7. 호출한 함수의 동작 조정

Q&A (0)

이 튜토리얼에서 살펴본 스크립트 예시에서는 두 개의 변수를 선언합니다.

```csharp
void AddingNumbers(float num1, float num2)
```

이 변수 이름을 다른 변수와 마찬가지로 함수 본문에서 사용할 수 있습니다. 함수를 호출할 때마다 해당 변수에 값을 할당할 수도 있으며 이를 값 전달이라고 합니다.

예를 살펴보겠습니다.

- **AddingNumbers(5.5f, 18.9f);**라고 작성하여 함수를 호출하면, 컴퓨터는 함수 본문 내에서 변수 **num1**을 5.5로 대체하고 변수 **num2**를 18.9로 대체합니다.
- 반면 **AddingNumbers(10.0f, 10.0f);**를 호출하는 경우 컴퓨터는 함수 본문의 모든 명령어에 사용된 변수 이름을 10.0으로 대체합니다.

이를 통해 함수 내에 일반적인 명령어를 작성하고 스크립트에서 함수를 호출할 때마다 실제 동작을 조정할 수 있습니다.

단계를 완료로 표시

## 8. 스크립트에 이미 존재하는 함수 식별

Q&A (0)

함수가 무엇인지 살펴보았으므로 이제 SpawnerSample 스크립트에서도 함수가 사용되었다는 것을 알 수 있습니다. 지금까지 살펴보고 조정한 모든 명령어는 **Start**라는 함수의 일부입니다.

Unity에서는 특별한 이름과 기능을 가진 함수를 사용해 게임의 특정 부분에서 호출할 수 있습니다. Start는 이러한 특별한 함수 중 하나입니다. 이름에서 알 수 있듯이 Start 함수는 씬이 시작될 때 호출되므로, 플레이 버튼을 눌러 게임을 시작하면 즉시 4개의 체력 물약이 나타납니다.

Start 함수 선언을 살펴보겠습니다.

```csharp
void Start()
```

이 함수에는 파라미터가 없지만 소괄호가 필요합니다. 소괄호가 없는 경우 컴파일러는 **void Start**가 Start라는 이름의 변수를 선언한다고 인식하기 때문입니다.

단계를 완료로 표시

## 9. 튜토리얼 요약

Q&A (0)

이 튜토리얼에서 학습한 내용은 다음과 같습니다.

- Unity 에디터에 SpawnerSample 스크립트 상태를 저장했습니다.
- 게임 시작 시 또 다른 물약을 생성하도록 스크립트를 조정했습니다.
- 함수의 의미와 함수를 사용하여 코드를 보다 효율적으로 만드는 방법을 알아보았습니다.
- 함수 선언 및 호출 방법을 검토했습니다.
- SpawnerSample 스크립트에 이미 있던 함수를 식별했습니다.

정말 많은 내용을 학습하였습니다. 기초를 충분히 둘러봤으니, 다음 튜토리얼에서는 물약을 생성하는 함수를 직접 작성해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
