[Image: image]

# 게임 커스터마이징

Tutorial

Beginner

+10XP

0 mins

1

Unity Technologies

[Image: 게임 커스터마이징]Summary

이 튜토리얼은 크리에이터 키트: 코딩의 기초 게임을 추가로 커스터마이징하기 위한 참조용 가이드입니다.

이 과정에서 스크립트 템플릿을 사용해 만드는 콘텐츠는 다음과 같습니다.

- 사용 효과가 적용된 소모성 아이템(마지막 튜토리얼의 체력 물약 등)
- 장착 효과가 적용된 장비 아이템
- 무기 공격 효과가 적용된 무기

Languages available:

한국어English日本語한국어简体中文한국어

## 1. 게임 커스터마이징

Q&A (0)

이 튜토리얼은 크리에이터 키트: 코딩의 기초 게임을 추가로 커스터마이즈하는 데 사용하는 참조용 가이드입니다.

여기에 제공된 스크립트 템플릿으로 만들 수 있는 콘텐츠는 다음과 같습니다.

- 사용 효과가 적용된 소모성 아이템(마지막 튜토리얼의 체력 물약 등)
- 장착 효과가 적용된 장비 아이템
- 무기 공격 효과가 적용된 무기

#### 가이드 구조

이 가이드는 게임에 대한 이해를 정리하고 직접 만들며  시험해 보는 데 도움이 되는 도구로, 단계별 가이드는 아닙니다. 다른 Unity 튜토리얼에서 학습한 내용을 응용할 때도 활용할 수 있습니다.

이 가이드는 다음과 같은 구조로 이루어져 있습니다.

**1.** Unity 에디터에서 아이템 유형을 만드는 방법

**2.** 아이템의 커스텀 효과 스크립트를 작성하는 방법 및 사용에 대한 기본 가이드

**3.**  아이템에 효과를 적용하는 방법

#### 커뮤니티 참여

크리에이터 키트: 코딩의 기초 튜토리얼을 마쳤거나 진행 중인 다른 학습자들도 있습니다. 학습 과정이나 내용에 대해 궁금한 점이 있거나 다른 학습자들은 어떻게 하고 있는지 알아보려면 [Unity 포럼의 공식 스레드](https://forum.unity.com/threads/creator-kit-beginner-code-beta.724871/)에 참여해 보세요.

단계를 완료로 표시

## 2. 소모성 아이템 만들기

Q&A (0)

#### 소모성 아이템이란?

소모성 아이템은 체력 물약처럼 인벤토리에서 더블 클릭하여 사용할 수 있는 아이템입니다.

#### Unity 에디터에서 소모성 아이템 만들기

에디터에서 소모성 아이템을 만드는 방법은 다음과 같습니다.

**1.** 프로젝트 창에서 *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem* 폴더로 이동합니다.

**2.**  프로젝트 창에서 오른쪽 클릭하고 컨텍스트 메뉴에서 **Create > Beginner Code > Usable Item**을 선택합니다. 아니면 메인 메뉴의 **Assets**에서 이 메뉴에 액세스할 수 있습니다.

[Image: image]

이를 통해 새로운 소모성 아이템 에셋이 생성됩니다.

**3.** 프로젝트 창에서 새 소모성 아이템을 오른쪽 클릭하고 **Rename**을 선택한 다음, 기억하기 쉬운 이름으로 변경합니다.

**4.**Usable Item은 계속 선택된 상태여야 합니다. 인스펙터에서 다음과 같은 필드(표시된 변수)를 확인할 수 있습니다.

- **Item Sprite:** 인벤토리에서 아이템에 사용될 스프라이트입니다. World Object Prefab이 설정되지 않은 경우 월드에 오브젝트를 표시하는 데도 사용됩니다(아래 참조).
- **Item Name:**게임에서 아이템 위에 표시되거나, 플레이어 인벤토리의 툴팁에 표시될 아이템의 이름입니다.
- **Description:**아이템에 대한 설명으로, 플레이어 인벤토리의 툴팁에 표시됩니다.
- **World Object Prefab:**게임 월드에 생성된 소모성 아이템을 나타내는 3D 게임 오브젝트입니다. 이 필드가 비어 있으면(null) 아이템 스프라이트가 대신 사용됩니다.
- **Add New Effect:** 작성한 **사용 효과**를 나열하는 드롭다운 메뉴로, 새로운 효과를 작성하면 여기에 표시됩니다. 소모성 아이템에 추가할 사용 효과를 선택합니다.

[Image: image]

다음 단계에서는 사용 효과 스크립트를 작성하여 소모성 아이템에 적용하는 방법을 알아보겠습니다.

단계를 완료로 표시

## 3. 사용 효과 스크립트 작성

Q&A (0)

#### 사용 효과 스크립트란?

사용 효과 스크립트는 플레이어의 인벤토리에서 소모성 아이템을 더블 클릭할 때 발생하는 동작을 지정합니다. 에디터를 통해 소모성 아이템 에셋에 추가됩니다.

#### 새로운 사용 효과 스크립트 작성

크리에이터 키트: 코딩의 기초 템플릿으로 새로운 사용 효과 스크립트를 작성하는 방법은 다음과 같습니다.

**1.**상단의 메뉴에서 **Beginner Code > Create Item Effect**로 이동합니다.

[Image: image]

**2.**NameWindow 대화 상자가 열리면 사용 효과 스크립트에 이름을 지정하고 **Create**를 선택합니다.

그러면 *Assets/Scripts/ItemEffect* 폴더에 스크립트가 생성되고 에디터에서 선택됩니다.

**3.** 프로젝트 창에서 스크립트를 더블 클릭하여 코드 에디터로 엽니다.

미리 작성된 템플릿 스크립트에서 아이템의 사용 효과를 작성할 수 있습니다.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SceneKitCode;

public class EFFECTNAME : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        return false;
    }
}
```

**EFFECTNAME**은 사용 효과 스크립트 이름이 들어가는 플레이스홀더입니다.

#### 사용 효과를 커스터마이즈하는 방법

사용 효과를 커스터마이즈하려면 **Use**함수에 명령어를 추가해야 합니다.

```csharp
public override bool Use(CharacterData user)
    {
        return false;
    }
```

**user** 파라미터는 아이템을 사용한 캐릭터의 **CharacterData**를 포함합니다. 이 게임에는 아이템을 사용할 수 있는 캐릭터가 하나뿐입니다(무스). 이 파라미터를 사용하여 스탯, 인벤토리와 장비 아이템에 액세스해 수정할 수 있습니다.

#### 커스텀 CharacterData 클래스에 대해 자세히 알아보는 방법

**CharacterData** 클래스에 대한 자세한 내용을 알아보는 방법은 다음과 같습니다.

**1.**  Unity 에디터에서 메인 메뉴의 **Beginner Code > Open Documentation**메뉴를 선택합니다.

**2.**  로컬 기술 자료 가이드의 상단 메뉴 바에서 **API Documentation**을 선택합니다.

**3.**  필터 바에서 '**CharacterData**'를 검색합니다.

**4.**  **왼쪽 메뉴**에서 링크를 선택합니다.

#### 소모성 아이템의 반환 값 설정 방법

**Use** 함수는 부울 값(true 또는 false)을 반환합니다. 다음과 같이 설정합니다.

- **True**: 오브젝트가 사용되어 플레이어의 인벤토리에서 제거되는 경우. 여러 개로 구성된 오브젝트이면 한 개씩 차감됩니다.
- **False**: 오브젝트를 사용할 수 없는 경우. 예를 들어 체력을 추가하기 전에 체력이 이미 최대치인지 테스트하고, 최대이면 false를 반환하여 체력 물약이 낭비되지 않도록 합니다.

단계를 완료로 표시

## 4. 사용 효과 스크립트를 소모성 아이템에 적용

Q&A (0)

수정한 사용 효과 스크립트는 에디터에서 소모성 아이템에 추가할 수 있습니다.

**1.**  프로젝트 창에서 생성한 소모성 아이템을 선택합니다(파일 경로: *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem*).

**2.**  인스펙터에서 **Add New Effect**필드를 찾습니다. 드롭다운 메뉴에서 사용 효과를 선택합니다.

**3.** 사용 효과의 **설명**을 추가합니다.

**4.**  **Ctrl + S**(Windows) 또는 **Cmd + S**(macOS)를 눌러 변경 사항을 저장합니다.

**5.** 플레이 모드에서 소모성 아이템을 테스트합니다.

**팁:** 사용 효과를 제거하려면 인스펙터의 **Script** 필드 오른쪽에 있는 빼기 버튼(**-**)을 선택합니다.

단계를 완료로 표시

## 5. 장비 아이템 만들기

Q&A (0)

#### 장비 아이템이란?

장비 아이템은 플레이어 캐릭터가 장착했을 때 특정한 속성을 부여하는 아이템입니다. (무기는 추가 기능이 있는 특수한 유형의 장비 아이템으로, 이 가이드 뒷부분에서 별도로 살펴보겠습니다.)

장비 아이템에 부여할 수 있는 속성은 다음과 같습니다.

- 최소 필요 스탯: 플레이어가 필요 조건을 달성할 때까지 장비가 장착되지 않도록 합니다(예: 플레이어의 HP가 5 이상인 경우에만 장착할 수 있는 아이템).
- 장착 효과: 아이템이 장착되어 있는 동안 플레이어 캐릭터에 효과를 추가합니다(예: 스탯 상승).

#### Unity 에디터에서 장비 아이템을 만드는 방법

에디터에서 장비 아이템을 만드는 방법은 다음과 같습니다.

**1.** 프로젝트 창에서 *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem* 폴더로 이동합니다.

**2.**  프로젝트 창에서 오른쪽 클릭하고 컨텍스트 메뉴에서 **Create > Beginner Code > Equipment Item**을 선택합니다. 아니면 상단 메뉴의 **Assets**에서 이 메뉴에 액세스할 수 있습니다.

[Image: image]

이렇게 하면 새로운 장비 아이템 에셋이 생성됩니다.

**3.**프로젝트 창에서 새 장비 아이템을 오른쪽 클릭하고 **Rename**을 선택한 다음, 기억하기 쉬운 이름으로 변경합니다 .

**4.**장비 아이템이 선택되어 있어야 합니다. 인스펙터에서 다음과 같은 필드(표시된 변수)를 확인할 수 있습니다.

- **Item Sprite:** 인벤토리에서 아이템에 사용될 스프라이트입니다. World Object Prefab이 설정되지 않은 경우 월드에 오브젝트를 표시하는 데도 사용됩니다(아래 참조).
- **Item Name:**게임에서 아이템 위에 표시되거나, 플레이어 인벤토리의 툴팁에 표시될 아이템의 이름입니다.
- **Description:**아이템에 대한 설명으로, 플레이어 인벤토리의 툴팁에 표시됩니다.
- **World Object Prefab:**게임 월드에 생성된 소모성 아이템을 나타내는 3D 게임 오브젝트입니다. 이 필드가 비어 있으면(null) 아이템 스프라이트가 대신 사용됩니다.
- **Slot:**장비 아이템을 착용할 수 있는 장비 슬롯입니다(예: 머리).
- **Minimum Stats:**아이템 착용에 필요한 최소의 **힘**, **민첩성**, **방어** 등의 스탯입니다. 플레이어가 필요 스탯을 충족하지 못하면 인벤토리에서 아이템을 더블 클릭해도 아무 동작이 발생하지 않습니다.
- **Add New Effect:** 작성한 **장착 효과**를 나열하는 드롭다운 메뉴로, 새로운 효과를 작성하면 여기에 표시됩니다. 장비 아이템에 추가할 장착 효과를 선택합니다.

다음 단계에서는 장착 효과 스크립트를 작성하여 장비 아이템에 적용하는 방법을 알아보겠습니다.

단계를 완료로 표시

## 6. 장착 효과 스크립트 작성

Q&A (0)

#### 장착 효과 스크립트란?

장착 효과****스크립트는****플레이어가 아이템을 장착할 경우 커스텀 효과가 활성화되게 합니다. 에디터에서 장비 아이템이나 무기에 장착 효과 스크립트를 추가할 수 있습니다.

#### 새 장착 효과 스크립트를 작성하는 방법

크리에이터 키트: 코딩의 기초 템플릿으로 새로운 장착 효과 스크립트를 작성하는 방법은 다음과 같습니다.

**1.**상단의 메뉴에서 **Beginner Code > Create Equipped Effect**로 이동합니다.

[Image: image]

**2.**NameWindow 대화 상자가 열리면 장착 효과 스크립트에 이름을 지정하고 **Create**를 선택합니다.  그러면 *Assets/Scripts/EquippedEffect* 폴더에 스크립트가 생성되고 에디터에서 선택됩니다.

**3.** 프로젝트 창에서 스크립트를 더블 클릭하여 코드 에디터로 엽니다.

미리 작성된 템플릿 스크립트에서 장착 효과를 작성할 수 있습니다.

```csharp
public class EFFECTNAME : EquipmentItem.EquippedEffect
{
     public override void Equipped(CharacterData user)
     {

     }

     public override void Removed(CharacterData user)
     {

     }
}
```

**EFFECTNAME**은 장착 효과 스크립트 이름이 들어가는 플레이스홀더입니다.

#### 장착 효과를 커스터마이즈하는 방법

다음 두 가지 함수를****장착 효과 스크립트에서 커스터마이즈할 수 있습니다.

**1.  void Equipped(CharacterData user)**

이 함수는 플레이어(사용자)가 아이템을 장착할 때 호출됩니다. 이 함수를 사용해 효과를 추가합니다(예: 캐릭터에 +1 힘 스탯 수정자 부여).

**팁:** private 변수를 사용하여 선택한 조정값을 저장할 수 있습니다.

**2.  void Removed(CharacterData user)**

이 함수는 플레이어(사용자)가 장착한 아이템을 해제할 때 호출됩니다. 이 함수를 사용해 플레이어 캐릭터에 추가된 효과를 제거합니다.

단계를 완료로 표시

## 7. 장착 효과 스크립트를 장비 아이템에 적용

Q&A (0)

수정한 장착 효과 스크립트는 에디터에서 장비 아이템에 추가할 수 있습니다.

**1.**  생성한 장비 아이템을 프로젝트 창에서 선택합니다(파일 경로: *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem*).

**2.**  인스펙터에서 **Add new Effect**필드를 찾습니다. 드롭다운 메뉴에서 장착 효과를 선택합니다.

**3.** 장착 효과에 대한 **설명**을 추가합니다.

**4.**  **Ctrl + S**(Windows) 또는 **Cmd + S**(macOS)를 눌러 변경 사항을 저장합니다.

**5.** 플레이 모드에서 장비 아이템을 테스트합니다.

**팁:** 장착 효과를 제거하려면 인스펙터의 **Script** 필드 오른쪽에 있는 빼기 버튼(**-**)을 선택합니다.

단계를 완료로 표시

## 8.  무기 만들기

Q&A (0)

#### 무기의 정의

무기는 캐릭터의 무기 슬롯에 장착할 수 있는 특별한 장비 아이템입니다.

무기에는 일반적인 장비 아이템의 특징 외에 다음과 같은 특징도 부여할 수 있습니다.

- 공격 행동과 관련된 스탯: **사거리**, **속도**, **최소 대미지**, **최대 대미지**
- **무기 공격 효과**: 무기가 적 캐릭터에게 대미지를 줄 때 발생하는 커스텀 동작

#### Unity 에디터에서 무기를 만드는 방법

에디터에서 무기를 만드는 방법은 다음과 같습니다.

**1.** 프로젝트 창에서 *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem* 폴더로 이동합니다.

**2.**  프로젝트 창에서 오른쪽 클릭하고 컨텍스트 메뉴에서 **Create > Beginner Code > Weapon**을 선택합니다. 아니면 상단 메뉴의 **Assets**에서 이 메뉴에 액세스할 수 있습니다.

[Image: image]

이렇게 하면 새로운 무기 에셋이 생성됩니다.

**3.** 프로젝트 창에서 새 무기를 오른쪽 클릭하고 **Rename**을 선택한 다음, 기억하기 쉬운 이름으로 변경합니다.

**4.**무기가 선택되어 있어야 합니다. 인스펙터를 확인하면 장비 아이템에서 보았던 필드(표시된 변수) 외에도 다음과 같은 필드가 표시됩니다.

- **Weapon Stats:**

- **Speed:** 무기의 공격 속도입니다. 공격 사이의 대기 시간으로, 값이 낮을수록 다음 공격까지의 시간이 더 짧습니다. 값이 0이면 첫 번째 애니메이션이 완료되는 즉시 다음 공격을 수행합니다.
- **Minimum Damage:** 캐릭터 조정값을 추가하기 전에 무기가 줄 수 있는 최소 대미지입니다. **최종 대미지**는 Minimum Damage와 Maximum Damage 사이에서 임의로 결정됩니다.
- **Maximum Damage:** 캐릭터 조정값을 추가하기 전에 무기가 줄 수 있는 최대 대미지입니다. **최종 대미지**는 Minimum Damage와 Maximum Damage 사이에서 임의로 결정됩니다.
- **Range:**무기가 적 캐릭터에게 대미지를 줄 수 있는 거리입니다. 공격 시 타겟 캐릭터가 Range를 벗어나면 대미지를 줄 수 없습니다.
- **Add New Weapon Attack Effect:**작성한 **무기 공격 효과**를 나열하는 드롭다운 메뉴로, 새로운 효과를 작성하면 여기에 표시됩니다. 무기에 추가할 무기 공격 효과를 선택합니다.

다음 단계에서는 무기 공격 효과 스크립트를 작성하여 무기에 적용하는 방법을 알아보겠습니다.

단계를 완료로 표시

## 9. 무기 공격 효과 스크립트 작성

Q&A (0)

#### 무기 공격 효과 스크립트란?

무기 공격 효과 스크립트는 무기가 타겟에 명중한 경우에 커스터마이즈된 효과를 활성화하며, 무기에 추가할 수 있는 스크립트입니다.

#### 새 무기 공격 효과 스크립트를 작성하는 방법

크리에이터 키트: 코딩의 기초 템플릿으로 새로운 무기 공격 효과 스크립트를 작성하는 방법은 다음과 같습니다.

**1.**상단의 메뉴에서 **Beginner Code > Create Weapon Attack Effect**로 이동합니다.

[Image: image]

**2.**NameWindow 대화 상자가 열리면 무기 효과 스크립트에 이름을 지정하고 **Create**를 선택합니다. 그러면 *Assets/Scripts/WeaponEffect* 폴더에 스크립트가 생성되고 에디터에서 선택됩니다.

**3.** 프로젝트 창에서 스크립트를 더블 클릭하여 코드 에디터로 엽니다.

미리 작성된 템플릿 스크립트에서 아이템의 무기 공격 효과를 작성할 수 있습니다.

```csharp
public class EFFECTNAME : Weapon.WeaponAttackEffect
{
    public override void OnAttack(CharacterData target, CharacterData user, ref Weapon.AttackData attackData)
    {

    }

    public override void OnPostAttack(CharacterData target, CharacterData user, Weapon.AttackData data)
    {

    }
}
```

**EFFECTNAME**은 무기 공격 효과 스크립트 이름이 들어가는 플레이스홀더입니다.

#### 무기 공격 효과를 커스터마이즈하는 방법

무기 공격 효과 스크립트에서**다음 두 가지 함수를**커스터마이즈할 수 있습니다.

**1.  OnAttack(CharacterData target, CharacterData user, ref Weapon.AttackData attackData)**

이 함수는 무기가 적을 맞췄을 때 발생하는 동작을 제어하는 명령어에 사용됩니다.  **attackData**의 **AddDamage** 함수를사용하여 타겟에 대미지를 추가로 입히거나 속성 효과를 적용할 수 있습니다.

**2.  void OnPostAttack(CharacterData target, CharacterData user, Weapon.AttackData data)**

이 함수는 모든 OnAttack 함수 명령어가 실행된 후에 호출됩니다. 이를 통해 모든 OnAttack 효과가 적용된 후 타겟이 받는 **총** **대미지**에 대한 반응으로 발생하는 동작을 커스터마이즈할 수 있습니다.

예를 들어 이 함수를 사용해 적에게 입힌 대미지의 일부를 플레이어 캐릭터의 체력으로 되돌리는 효과를 구현할 수 있습니다.

#### 커스텀 Weapon.AttackData 클래스에 대해 자세히 알아보는 방법

커스텀 **Weapon.AttackData 클래스**를 사용하면 적에게 입힌 대미지의 양을 쿼리할 수 있습니다. **Weapon.AttackData** 클래스에 대한 자세한 내용을 알아보는 방법은 다음과 같습니다.

**1.**  Unity 에디터에서 상단 메뉴의 **Beginner Code > Open Documentation**으로 이동합니다.

**2.**  상단 메뉴 바에서 **API Documentation**을 선택합니다.

**3.**  필터 바에서 '**Weapon.AttackData'를 검색합니다.**

**4.**  왼쪽 메뉴에서 링크를 선택합니다.

단계를 완료로 표시

## 10. 무기 공격 효과 스크립트를 무기에 적용

Q&A (0)

수정한 무기 공격 효과 스크립트는 에디터에서 무기에 추가할 수 있습니다.

**1.**  생성한 무기를 프로젝트 창에서 선택합니다(파일 경로: *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem*).

**2.**  인스펙터에서 **Add New Effect**필드를 찾습니다. 드롭다운 메뉴에서 무기 공격 효과를 선택합니다.

**3.** 무기 공격 효과에 대한 **설명**을 추가합니다.

**4.**  **Ctrl + S**(Windows) 또는 **Cmd + S**(macOS)를 눌러 변경 사항을 저장합니다.

**5.** 플레이 모드에서 장비 아이템을 테스트합니다.

**팁:** 무기 공격 효과를 제거하려면 인스펙터의 Script 필드 오른쪽에 있는 빼기 버튼(**-**)을 선택합니다.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:00Loaded: 0%Remaining Time -0:001xPlayback Rate

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

## Complete this Tutorial

모든 단계를 완료로 표시
