[Image: image]

# 2.4강 - 충돌 판정

Tutorial

Beginner

+10XP

50 mins

3

(278)

Unity Technologies

[Image: 2.4강 - 충돌 판정]SummarySkills

**개요:**

게임이 순조롭게 제작되고 있지만 마무리하기 전에 추가해야 할 중요한 요소가 있습니다. 먼저 S 키를 눌러 동물을 생성하는 대신, 몇 초 간격으로 나타나도록 타이머를 기반으로 동물을 생성합니다. 다음으로, 동물에게 발사체를 발사하여 충돌 시 파괴되도록 모든 프리팹에 콜라이더를 추가합니다. 마지막으로, 동물이 플레이어를 지나치면 "Game Over" 메시지를 표시합니다.

**프로젝트 결과:**

동물은 일정한 시간 간격에 따라 생성된 후 화면을 가로질러 걸어 내려오며, 플레이어를 지나치면 "Game Over" 메시지가 트리거됩니다. 플레이어가 먹이 발사체로 동물을 맞추면 동물이 파괴됩니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 동물 생성을 위한 새 메서드 작성

Q&A (0)

> *생성 관리자가 제대로 기능하는 것 같지만, 작동을 위해서는 여전히 S 키를 눌러야 합니다. 동물을 자동으로 생성하려는 경우 먼저 첫 번째 커스텀 함수를 작성해야 합니다.*

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

1. **SpawnManager.cs**에서 새로운 ***void SpawnRandomAnimal() {}*** 함수를 ***Update()*** 아래에 생성합니다.
2. **if-then 문**에서 코드를 잘라 **새 함수**에 붙여 넣습니다.
3. **S** 키를 누르는 경우 ***SpawnRandomAnimal();***을 호출합니다.

[Image: image]단계를 완료로 표시

## 2. 일정 시간 간격으로 동물 생성

Q&A (0)

> *커스텀 함수에 생성 코드를 저장했지만 아직도 S 키를 눌러야 합니다. 몇 초 간격으로 임의로 나타나도록 타이머를 기반으로 동물을 생성해야 합니다.*

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

1. ***Start()***에서 ***InvokeRepeating***을 사용하여 시간 간격에 따라 동물을 생성한 후 **테스트**합니다.
2. **S** 키 누름 여부를 검사하는**if-then 문**을 제거합니다.
3. 새로운 ***private startDelay*** 및 ***spawnInterval*** 변수를 생성한 후 플레이 테스트를 진행하여 변수 값을 조정합니다.

[Image: image]단계를 완료로 표시

## 3. Collider 및 Trigger 컴포넌트 추가

Q&A (0)

> *동물이 완벽히 생성되고 플레이어가 발사체를 동물에게 발사할 수 있지만, 두 오브젝트가 서로 충돌해도 아무런 일이 발생하지 않습니다. 충돌 시 발사체와 동물을 파괴하려면 콜라이더를 부여해야 합니다. 아마 익숙한 컴포넌트일 것입니다.*

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

1. **동물 프리팹** 중 하나를 더블 클릭한 후 *Add Component > Box Collider*로 이동합니다.
2. **Edit Collider**를 클릭한 후 오브젝트를 둘러싸도록 콜라이더 핸들을 **드래그**합니다.
3. "**Is Trigger**" 체크박스를 선택합니다.
4. 각 **동물**과 **발사체**에 대해 이 과정을 반복합니다.
5. **Rigidbody 컴포넌트**를 발사체에 추가하고 "use gravity"를 선택 해제합니다.

단계를 완료로 표시

## 4. 충돌 시 오브젝트 파괴

Q&A (0)

> *동물과 발사체에 트리거가 포함된 박스 콜라이더가 있으므로, 이제 충돌 시 파괴되도록 만드는 새 스크립트를 코딩해야 합니다.*

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

1. 새로운 **DetectCollisions.cs** 스크립트를 추가하고 각 동물 프리팹에 추가한 후 **엽니다**.
2. **자동 완성**을 사용하여 마지막 **}** 앞에 ***OnTriggerEnter*** 함수를 추가합니다.
3. ***OnTriggerEnter***에 ***Destroy(gameObject)*;**를 배치한 후 테스트합니다.
4. ***OnTriggerEnter***에 ***Destroy(other.gameObject);*를 배치합니다.**

[Image: image]단계를 완료로 표시

## 5. "Game Over" 메시지 트리거

Q&A (0)

> *플레이어는 원하는 만큼 오래 자신의 들판을 지킬 수 있지만,  동물이 플레이어를 지나치면 "Game Over" 메시지를 표시하여 플레이어에게 임무에 실패했음을 알려야 합니다.*

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

1. DestroyOutOfBounds.cs에서 동물이 화면 맨 밑에 도달했는지 검사하는 **else-if 조건**에 Game Over 메시지를 추가합니다.
***Debug.Log("Game Over!")***
2. **주석**으로 코드를 정리합니다.
3. Visual Studio를 사용하는 경우 *Edit > Advanced >**Format document***를 클릭하여 들여쓰기 문제를 해결합니다
(**Mac**의 경우 *Edit > Format > Format Document 클릭).*

[Image: image]단계를 완료로 표시

## 6. 수업 요약

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

새 기능

- 동물이 일정 시간 간격으로 생성되어 화면을 가로질러 걸어 내려옵니다.
- 동물이 플레이어를 지나치면 "Game Over" 메시지가 트리거됩니다.
- 발사체가 동물과 충돌하면 두 오브젝트가 모두 제거됩니다.

새로운 개념 및 기술

- 커스텀 메서드/함수 생성
- 코드를 반복하는 InvokeRepeating()
- 콜라이더 및 트리거
- 오버라이드 함수
- 디버그 메시지를 콘솔에 기록

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
