[Image: image]

# 클래스 소개

Tutorial

Beginner

+10XP

25 mins

1

(16)

Unity Technologies

[Image: 클래스 소개]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 코드 구성에서 **클래스**의 역할을 알아봅니다.
- 다른 변수 내의 변수와 같이 도트 연산자를 사용하여 서로 다른 위치에 있는 데이터에 액세스하는 방법을 이해합니다.
- SpawnerSample 스크립트에서 도트 연산자의 사용 예시를 검토합니다.
- 유형으로 사용되는 클래스를 검토합니다.

이 튜토리얼을 마치면 SpawnerSample 스크립트에서 사용할 클래스를 직접 작성할 수 있습니다.

Languages available:

한국어English日本語한국어简体中文한국어

## 1. 지금까지의 학습 진행 상황

Q&A (0)

지금까지 이 크리에이터 키트: 코딩의 기초 튜토리얼 과정에서는 변수라는 간단한 컨테이너에 대한 학습부터 함수를 통해 그룹화된 명령어 묶음을 사용하는 방법에 이르기까지 다양한 내용을 배워 보았습니다. 이제 스크립트 파일과 코드에서 주요 정보를 식별하는 데 필요한 거의 모든 내용을 배운 셈입니다.

이 프로젝트에서 어떤 스크립트 파일을 열더라도 다음과 같은 내용을 식별할 수 있습니다.

- 스크립트를 작성한 사람의 주석
- 명령어
- 변수 선언 및 할당
- 함수

각 명령어가 수행하는 구체적인 내용을 정확하게 설명할 수는 없지만 함수와 변수의 이름을 보고 합리적으로 추측할 수는 있습니다. 다음 단계를 진행하기 전에 프로젝트 창에서 다른 스크립트 파일을 열고 연습해 보세요.

단계를 완료로 표시

## 2.  함수의 상위 수준 식별

Q&A (0)

이전 단계에서 열어본 새로운 스크립트에는 함수보다 상위 수준의 정보가 있었습니다.

함수는 한 쌍의 중괄호로 묶여 있습니다. 그러나 **SpawnerSample** 스크립트를 다시 확인해 보면 두 개의 함수를 묶는 또 다른 중괄호 묶음이 있음을 알 수 있습니다.

첫 번째 여는 중괄호 윗줄에 선언이 있습니다.

```csharp
public class SpawnerSample : MonoBehaviour
```

이것을 클래스****선언이라고 하며 **class**라는 키워드를 사용하여 식별할 수 있습니다.

지금은 키워드와 이름을 제외한 나머지는 무시해도 됩니다.

```csharp
class SpawnerSample
```

단계를 완료로 표시

## 3.  클래스란?

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

함수를 활용하면 명령어를 그룹화할 수 있습니다. 마찬가지로 클래스를 활용하면 관련 함수와 변수를 함께 그룹화할 수 있습니다.

변수는 가방으로, 함수는 통으로 이해한 것과 마찬가지로, 클래스는 관련 콘텐츠가 담겨 있는 수레와 같은 것으로 이해할 수 있습니다. 여러 수레가 열차처럼 연결되어 함께 움직일 수 있는 것처럼 클래스는 여러 스크립트로 구성되어 함께 작동할 수 있습니다.

[Image: image]

SpawnerSample 스크립트에서 7번째 줄 이후 중괄호 안의****모든 내용은 **SpawnerSample**이라는 클래스의 범위에 속합니다.

함수와 변수를 함께 그룹화하면 코드를 효율적으로 구성할 수 있습니다.

단계를 완료로 표시

## 4. 도트 연산자를 사용하여 변수에 액세스

Q&A (0)

클래스는 지난 튜토리얼에서 이미 살펴본 다른 수준의 구성보다 약간 더 복잡합니다. 한 클래스 안에 다양한 함수와 변수의 계층 구조를 포함할 수 있으며, 다른 변수를 포함하는 변수를 만들 수도 있습니다.

도트 연산자라는 마침표를 사용하여 계층 구조에 있는 다른 변수에 액세스할 수 있습니다.

변수가 포함되어 있는 위치를 알고 액세스가 가능하다면 도트 연산자를 사용해 스크립트에서 변수의 값을 찾을 수 있습니다.

단계를 완료로 표시

## 5. 도트 연산자 예시

Q&A (0)

이미 작업 중인 SpawnerSample 스크립트에서 몇 가지 도트 연산자 예시를 살펴보겠습니다.

**1.**  변수 **transform** 내의 변수 **position**을 읽는 코드가 있습니다.

```csharp
transform.position
```

'컨테이너 변수'가 클래스인 경우 다른 변수 내에 변수를 생성할 수도 있습니다. 위의 예시에서 **position**은 **transform** 클래스 내의 Vector3 변수입니다.

**2.**  **Vector3** 유형 내의 변수 **right**을 읽는 코드가 있습니다.

```csharp
Vector3.right
```

**3.** **Quaternion** 유형 내의 **Euler** 함수를 읽는 코드도 있습니다.

```csharp
Quaternion.Euler(0, angle, 0)
```

이 코드가 어떤 역할을 하는지 전부 알지는 못해도, 도트 연산자에 관한 지식을 활용해 정보를 더 수집하고 스크립트에서 사용하는 데이터를 보다 잘 이해할 수 있습니다.

#### 도트 연산자 사용

도트 연산자를 사용하는 경우 올바른 구문(코드 구조)을 사용하는 것이 매우 중요합니다.

- 우선 마침표의 왼쪽에는 액세스해야 할 변수를 포함하는 변수가 있습니다.
- 중간 부분에는 도트 연산자가 있습니다.
- 오른쪽에는 첫 번째 변수에 포함된 변수가 있습니다.

단계를 완료로 표시

## 6.  클래스를 유형으로 사용

Q&A (0)

마지막으로 클래스를 유형으로 사용하는 방법을 알아보겠습니다.

지금까지 새로운 int 변수를 만들 때는 다음 명령문과 같이 변수를 선언하고 할당하는 것을 확인했습니다.

```csharp
int angle = 15;
```

그러나 숫자는 기본 유형입니다. Vector3와 같은 더 복잡한 클래스에서는 구문(구조)이 약간 달라져야 합니다.

myVector라는 Vector3 변수를 만들려면 다음 구문을 사용해야 합니다.

```csharp
Vector3 myVector = new Vector3();
```

이 구문을 분석해 보겠습니다.

**1.** 메모리에 새로운 변수 공간을 만들도록 컴파일러에 명령하는 키워드 **new**

**2.** 변수의 유형

**3.**  함수와 같이 여닫는 소괄호: **()**

**4.**  명령어를 마치는 세미콜론

이렇게 구문을 작성하면 **myVector** 변수를 다른 변수처럼 사용할 수 있습니다. 단, 새 구문을 사용해야 하는 새로운 Vector3 변수를 만들려는 경우에만 해당합니다.

SpawnerSample 스크립트에는 값이 할당된 Vector3 변수가 있습니다. Vector3 변수에 대해 학습한 내용으로 이 변수를 식별할 수 있는지 확인해 보세요.

단계를 완료로 표시

## 7. 튜토리얼 요약

Q&A (0)

이 튜토리얼에서 학습한 내용은 다음과 같습니다.

- 코드 작성 시 클래스 사용의 기초를 검토했습니다.
- 도트 연산자를 사용해 다른 변수에 포함된 변수에 액세스하는 방법을 알아보았습니다.
- 클래스를 유형으로 사용하는 방법을 알아보았습니다.

다음 튜토리얼에서는 클래스를 직접 작성해 보고, 클래스를 유형으로 사용하면 함수와 어떻게 유사한지 알아보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
