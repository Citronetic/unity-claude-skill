[Image: image]

# 4.3강 - 파워업 및 카운트다운

Tutorial

Beginner

+10XP

60 mins

1

(147)

Unity Technologies

[Image: 4.3강 - 파워업 및 카운트다운]SummarySkills

**개요:**

이제 적이 섬에서 플레이어를 추적하지만, 적이 더 추가된다면 플레이어는 더 좋은 방어 수단이 필요합니다. 이 수업에서는 플레이어의 힘을 일시적으로 강화하여 다가오는 적을 밀어내는 파워업을 만들어 보겠습니다. 파워업 아이템은 섬의 무작위 위치에 생성되며, 플레이어가 아이템을 획득하면 표시기로 플레이어를 강조 표시합니다. 멋진 게임 에셋을 선택하여 파워업 표시기와 파워업 아이템을 표현해 보겠습니다.

**프로젝트 결과:**

플레이어가 획득할 수 있는 파워업이 지도의 무작위 위치에 생성됩니다. 플레이어가 파워업과 충돌하면 파워업은 사라지고 표시기가 플레이어를 강조 표시합니다. 파워업은 획득 후 5초 동안 효과가 지속되며, 플레이어에게 적을 날려 버릴 수 있는 엄청난 힘을 부여합니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 파워업 선택 및 준비

Q&A (0)

> *이 프로젝트에 완전히 새로운 게임플레이 메카닉을 추가하기 위해 플레이어에게 일시적으로 엄청난 힘을 부여하는 새로운 파워업 오브젝트를 추가해 보겠습니다.*

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

1. *Library*에서 **Powerup** 오브젝트를 씬으로 드래그하고, 이름을 Powerup으로 변경하고 오브젝트의 **스케일**과 **위치**를 수정합니다.
2. 파워업에 **박스 콜라이더**를 추가하고, **Edit Collider**를 클릭하여 오브젝트의 크기와 같게 만든 다음, **Is Trigger** 체크박스를 선택합니다.
3. 새 Powerup **태그**를 만들고 **파워업**에 적용합니다.
4. **Powerup**을 **Prefabs** **폴더**로 드래그하여 새 Original Prefab을 생성합니다.

단계를 완료로 표시

## 2. 충돌 시 파워업 파괴

Q&A (0)

> *파워업을 작동시키는 첫 단계로, 플레이어가 파워업과 충돌하면 파워업을 사라지게 만들고 플레이어가 파워업을 획득했는지 추적하는 새로운 부울 변수를 설정해 보겠습니다.*

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

1. **PlayerController.cs**에서 새 ***OnTriggerEnter()*** 메서드를 추가합니다.
2. 충돌 시 ***other.CompareTag("Powerup")*** 파워업을 파괴하는 **if 문**을 추가합니다.
3. 새 ***public bool hasPowerup;***을 만들고 파워업과 충돌할 때 ***hasPowerup = true;***로   설정합니다.

[Image: image]단계를 완료로 표시

## 3. 적 및 파워업 테스트

Q&A (0)

> *파워업은 플레이어가 파워업을 가진 상태에서 적과 충돌하는 특정한 상황에서만 작동하므로, 먼저 이러한 조건으로 테스트하겠습니다.*

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

1. 새 Enemy 태그를 만들고 **Enemy Prefab**에 적용합니다.
2. **PlayerController.cs**에서 ***OnCollisionEnter()*** 함수를 추가합니다.
3. Enemy 태그와 hasPowerup 부울에 대한 **이중 조건**을 테스트하는 **if 문**을 만듭니다.
4. **Debug.Log**를 만들어 제대로 작동하는지 확인합니다.

[Image: image]단계를 완료로 표시

## 4. 파워업을 통한 추가 넉백 효과 적용

Q&A (0)

> *파워업을 위한 조건이 완벽하게 설정되었으니, 이제 파워업 상태의 플레이어에게 적이 충돌하면 날아가 버리는 파워업 성능을 실제로 프로그래밍해 보겠습니다.*

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

1. ***OnCollisionEnter()***에서 새 **로컬 변수**를 선언하여 Enemy의 **Rigidbody** 컴포넌트를 가져옵니다.
2. 새 변수를 선언하여 **플레이어**로부터 멀어지는 **방향**을 가져옵니다.
3. 새 **powerupStrength**변수를 사용하여 **적**에게 **충격력**을 추가합니다.

[Image: image]단계를 완료로 표시

## 5. 파워업을 위한 카운트다운 루틴 생성

Q&A (0)

> *파워업의 효과가 영원히 지속되면 공평한 게임이 아닐 것입니다. 따라서 플레이어가 파워업을 획득할 때 시작되고 지정된 시간이 경과하면 파워업 능력을 제거하는 카운트다운 타이머를 프로그래밍해 보겠습니다.*

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

1. 새 ***IEnumerator PowerupCountdownRoutine () {}***을 추가합니다.
2. ***PowerupCountdownRoutine*** 내에서 7초 동안 기다린 다음 파워업을 **비활성화**합니다.
3. 플레이어가 파워업과 **충돌**하면 **코루틴**을 시작합니다.

[Image: image]단계를 완료로 표시

## 6. 파워업 표시기 추가

Q&A (0)

> *게임플레이 환경을 개선하려면 플레이어가 파워업을 보유 중이거나 보유 중이지 않은 시점이 명확해야 하므로, 사용자에게 파워업 보유 여부를 표시하는 시각적 표시기를 프로그래밍해 보겠습니다.*

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

1. *Library*에서 **Powerup** **오브젝트**를 씬으로 드래그하고 이름을 Powerup Indicator로 변경한 후 오브젝트의 **스케일**을 수정합니다.
2. 인스펙터에서 **Active** 체크박스를 **선택 해제**합니다.
3. **PlayerController.cs**에서 새 ***public GameObject powerupIndicator***변수를 선언하고 인스펙터에서 **Powerup Indicator** 변수를 할당합니다.
4. 플레이어가 파워업과 충돌하면 표시기 오브젝트를 **Active**로 설정하고, 파워업이 끝나면 **Inactive**로 설정합니다.
5. ***Update()***에서 Indicator의 위치를 플레이어 위치에 **오프셋 값**을 더한 값으로 설정합니다.

[Image: image]단계를 완료로 표시

## 7. 수업 요약

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

새로운 기능:

- 플레이어가 파워업을 획득하면 시각적 표시기가 표시됩니다.
- 플레이어가 파워업을 가지고 있는 상태로 적과 충돌하면 적이 날아가 버립니다.
- 일정 시간이 지나면 파워업 능력과 표시기가 사라집니다.

새로운 개념 및 기술**:**

- 디버그 연결
- 로컬 컴포넌트 변수
- IEnumerators 및 WaitForSeconds()
- 코루틴
- SetActive(true/false)

다음 수업**:**

- 다음 수업에서는 플레이어가 방어해야 하는 적 웨이브를 생성해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
