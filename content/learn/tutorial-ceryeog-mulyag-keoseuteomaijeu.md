[Image: image]

# 체력 물약 커스터마이즈

Tutorial

Beginner

+10XP

25 mins

0

(10)

Unity Technologies

[Image: 체력 물약 커스터마이즈]Summary

튜토리얼을 진행하며 이전 프로젝트에서 배운 내용을 다음과 같이 응용해 보겠습니다.

- 커스텀 체력 효과 스크립트를 만듭니다.
- 템플릿 스크립트의 콘텐츠를 살펴봅니다.
- 플레이어의 체력(HP)을 높이기 위한 새 명령어를 작성합니다.
- HP 증가 값을 public 변수로 변경합니다.

이번 튜토리얼을 마치면 크리에이터 키트 게임에서 체력 물약에 커스텀 효과를 작성할 수 있습니다.

Languages available:

한국어English日本語한국어简体中文한국어

## 1. 플레이어 경험 커스터마이즈

Q&A (0)

Unity용 C# 스크립트를 작성하는 기본 개념을 살펴보았으니 게임플레이를 스크립트로 작성해 보겠습니다.

이 튜토리얼에서는 물약 사용 시 플레이어 캐릭터에게 체력 10포인트를 부여하는 물약 효과를 작성해 보겠습니다.

[Image: image]단계를 완료로 표시

## 2. 새로운 스크립트 파일 생성 및 열기

Q&A (0)

이 크리에이터 키트에는 아이템 효과를 작성하는 데 사용할 수 있는 간단한 템플릿 스크립트가 있습니다.

템플릿에서 새로운 스크립트를 만들고 여는 방법은 다음과 같습니다.

**1.** 상단의 메뉴에서 **Beginner Code** > **Create Item Effect**로 이동합니다.

[Image: image]

**2.**'AddHealthEffect'와 같이 공백 없이 이름을 입력하고 **Create**를 선택합니다.

**3.** 프로젝트 창에서*****Assets/Creator Kit - Beginner Code/Scripts/ItemEffects* 폴더로 이동합니다.

[Image: image]

**4.**  **AddHealthEffect.cs** 스크립트 파일을 더블 클릭하여 스크립트 에디터에서 엽니다.

기본 코드는 다음과 같습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using CreatorKitCode;
using UnityEngine;

public class AddHealthEffect : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        return false;
    }
}
```

단계를 완료로 표시

## 3. 템플릿 스크립트의 내용 살펴보기

Q&A (0)

지금까지 학습한 모든 내용을 사용하여 이 간단한 스크립트의 요소를 살펴보겠습니다.

- **using**으로 시작하는 1~4번 줄은 지금은 신경쓰지 않아도 됩니다.
- 6번 줄은 효과와 같은 이름을 가진 클래스 선언으로, 대화창을 통해 추가되어 있습니다.

이 새로운 클래스는 본 크리에이터 키트를 위해 작성된 클래스인 **UsableItem.UsageEffect**라는 다른 클래스에서 파생되었으며 게임 내 아이템과 관련된 모든 것을 제어합니다. 이러한 효과에 필요한 공통 코드를 제공하므로, 사용자는 직접 만든 효과의 특정 기능에 집중할 수 있습니다.

#### Use 함수

8번 줄은 **Use**라는 함수를 선언하고 있습니다. 함수를 자세히 살펴보겠습니다.

- **Use**는 public 부울 유형의 함수입니다. bool 변수 유형은 true 또는 false 중 하나의 부울 값을 저장합니다.
- 선언에는 **override**라는 생소한 키워드가 있습니다. 이 키워드는 그 이름에서 알 수 있듯이 기본 클래스(UsableItem.UsageEffect)에서 동일한 함수를 오버라이드하는 데 사용되며 이를 통해 모든 Use 함수에 적합한 제네릭 코드를 작성할 수 있습니다.

오브젝트를 사용하는 경우 게임에서 이 함수를 호출해 함수에 있는 모든 명령어를 실행합니다. 게임에서 오브젝트 사용 여부를 확인하므로 부울 값이 반환되며, 사용된 오브젝트는 인벤토리에서 제거됩니다.

이 기능을 사용하면 플레이어의 체력이 가득 차 있을 때 물약이 사용되지 않도록 false를 반환합니다.

단계를 완료로 표시

## 4.  체력 물약에 효과 추가

Q&A (0)

이제 이 스크립트가 Assets 폴더에 있으므로 컴파일되어 게임 코드의 일부가 됩니다. 즉, 게임의 체력 물약에 스크립트를 할당할 수 있습니다.

**1.**Unity 에디터로 돌아갑니다.

**2.**프로젝트 창에서 *Assets/Creator Kit - Beginner Code/Prefabs /ItemDatabase* 폴더로 이동합니다. **Potion 프리팹**을 선택합니다.

**3.**인스펙터에서 **Add New Effect** 드롭다운 메뉴를 사용하여 **AddHealthEffect**를 선택합니다.  그러면 아래의 Script 필드에 선택한 스크립트가 표시됩니다.

[Image: image]

**4. Description** 필드에 효과의 설명을 추가합니다(예: 'HP 10 부여').

이 필드가 표시되는 이유는 기본 클래스에 인벤토리 UI를 채우는 데 사용하는 description 변수가 있기 때문이며, 효과가 이 클래스에서 파생되므로 여기에도 Description 필드가 있습니다.

**5.**  **Ctrl + S**(Windows) 또는 **Cmd + S**(macOS)를 눌러 변경 사항을 저장합니다.

단계를 완료로 표시

## 5.  효과 함수 작성

Q&A (0)

이제 **AddHealthEffect** 스크립트로 돌아가서 직접 효과 함수를 작성해 보겠습니다.

함수가 수행해야 할 작업과 사용 가능한 툴을 살펴보겠습니다.

#### 크리에이터 키트 StatSystem

이 크리에이터 키트에서는 **StatSystem**이라는 특별한 시스템으로 캐릭터의 스탯을 제어합니다. 게임 오브젝트는 **CharacterData** 스크립트가 크리에이터 키트 **StatSystem**에 컴포넌트로 연결되면 StatSystem에 액세스할 수 있습니다.

캐릭터의 체력은**ChangeHealth()** 함수를 사용하여 변경할 수 있습니다. 이 함수를 활용하면 **StatSystem**이 포함된 게임 오브젝트의 체력을 변경할 수 있습니다.

#### 함수가 수행해야 하는 작업

체력 물약을 사용할 때 플레이어 캐릭터의 체력을 변경하는 효과 함수가 수행할 작업은 다음과 같습니다.

**1.** 플레이어의 **CharacterData 스크립트에 액세스합니다.**

**2.**  도트 연산자를 사용하여 **Stats** 클래스에 액세스합니다.

**3.**  두 번째 도트 연산자를 사용하여 Stats에 포함된 **ChangeHealth() 함수**에 액세스합니다.

**4.** int 값을 전달하여 플레이어 캐릭터의 체력을 얼마나 회복할지를 함수의 파라미터로 선언합니다.

또한 이 함수는 'return false;'가 아닌 '**return true;**'로 끝나야 하며 아이템은 소모되어 플레이어의 인벤토리에서 사라집니다.

#### 과제: 함수 작성

도트 연산자를 사용하여 효과 함수를 작성해 보고 다음 단계로 계속 진행하여 솔루션을 확인합니다. 혼자 작성하기 어려울 경우, 다음 단계에서 솔루션을 살펴보세요.

단계를 완료로 표시

## 6. 효과 함수 확인

Q&A (0)

효과 함수는 다음과 같아야 합니다.

```csharp
public class AddHealthEffect : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        user.Stats.ChangeHealth(10);
        return true;
    }
}
```

단계를 완료로 표시

## 7. 체력 값을 변수로 변경

Q&A (0)

이제 체력 증가 값을 변수로 변경해 보겠습니다. 다음 내용을 참조하세요.

- 변수는 **int** 유형이며 범자연수를 저장해야 합니다.
- 변수를 **public**으로 설정하면 Unity 에디터의 인스펙터에서 필드로 표시됩니다.
- **Use**함수 선언 위에 변수를 선언합니다.

**팁:**내용을 이해하기 어려우면 [변수에 대해 설명하는 튜토리얼](https://learn.unity.com/tutorial/write-your-own-instruction?projectId=5d48025dedbc2a0020e85be2)을 참조하며 진행해 보세요.

변경을 마쳤으면 다음 단계에서 솔루션을 확인합니다.

단계를 완료로 표시

## 8. 스크립트 변경 사항 확인

Q&A (0)

조정된 스크립트는 다음과 같아야 합니다.

```csharp
public class AddHealthEffect : UsableItem.UsageEffect
{
    public int HealthAmount;

    public override bool Use(CharacterData user)
    {
        user.Stats.ChangeHealth(HealthAmount);
        return true;
    }
}
```

**** **Ctrl + S**(Windows) 또는 **Cmd** **+ S**(macOS)를 눌러 변경 사항을 저장합니다.

****이제 Unity 에디터에서 이 변수를 수정할 수 있습니다.**1.**  인스펙터에서 Description 필드 아래에 표시된 변수의 **Health Amount**필드를 확인합니다.

[Image: image]

**2.**  값을 변경한 다음 **Ctrl + S**(Windows) 또는 **Cmd + S**(macOS)를 눌러 씬의 변경 사항을 저장합니다.

**3.**  **플레이** 버튼을 눌러 플레이 모드에서 게임에 적용한 변경 사항을 테스트합니다.

이번 과정은 여기까지입니다.

단계를 완료로 표시

## 9. 튜토리얼 요약

Q&A (0)

튜토리얼을 진행하며 이 프로젝트에서 배운 내용을 다음과 같이 적용해 보았습니다.

- 커스텀 체력 효과 스크립트를 만들었습니다.
- 플레이어의 체력(HP)을 높이는 새 명령어를 작성했습니다.
- HP 증가 값을 Unity 에디터에서 변경할 수 있는 변수로 설정했습니다.

축하합니다! Unity용 C# 코드를 처음으로 작성해 보았고, 크리에이터 키트: 코딩의 기초 튜토리얼을 완료하셨습니다.

[Image: image]

#### Rancho Rodadora 더 살펴보기

이 프로젝트의 기본 튜토리얼을 완료했지만, 살펴볼 내용이 아직 많이 남았습니다.

마지막 튜토리얼은 이 크리에이터 키트에서 사용할 수 있는 스크립트 템플릿으로 게임을 커스터마이징해 보는 참조용 가이드입니다. 참조용 가이드를 활용해 다양한 아이템과 효과를 만들 수 있습니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

#### 추천 튜토리얼

크리에이터 키트: 코딩의 기초는 Unity와 C# 스크립팅의 기본을 배우는 과정이었습니다.

다음 두 개의 튜토리얼도 진행해 보세요.

- [존 레몬의 공포 체험(John Lemon’s Haunted Jaunt): 3D 초급자용](https://learn.unity.com/project/john-lemon-s-haunted-jaunt-3d-beginner)
 과정에서 3D 스텔스 게임 만들기
- [Ruby’s Adventure(루비의 모험): 2D 초급자용](https://learn.unity.com/project/ruby-s-2d-rpg) 과정에서 직접 2D RPG 제작하기

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
