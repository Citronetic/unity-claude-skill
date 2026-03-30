[Image: image]

# 4.4강 - For Loop를 사용한 웨이브 설정

Tutorial

Beginner

+10XP

50 mins

1

(139)

Unity Technologies

[Image: 4.4강 - For Loop를 사용한 웨이브 설정]SummarySkills

**개요:**

이제 멋진 게임을 제작하는 데 필요한 모든 요소를 갖췄습니다. 자유롭게 굴러다니는 플레이어와 회전하는 카메라, 플레이어에게 강력한 힘을 부여하는 파워업, 플레이어를 집요하게 추적하는 적까지 모두 준비되었습니다. 이 수업에서는 이러한 요소들을 한데 모아 게임을 완성해 보겠습니다.

먼저 적 생성 관리자를 개선하여, 여러 적을 생성하고 플레이어가 한 웨이브의 적을 모두 처치할 때마다 적의 수가 늘어나도록 만들어 보겠습니다. 마지막으로 웨이브마다 파워업을 생성하여 플레이어가 계속 늘어나는 적 무리에 맞서 싸울 수 있도록 구현할 것입니다.

**프로젝트 결과:**

생성 관리자는 웨이브마다 작동하며 매번 다수의 적과 새로운 파워업을 생성합니다. 적의 수가 0이 될 때마다 새로운 웨이브가 생성되고 적의 수가 늘어납니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 3개의 적을 생성하는 for loop 작성

Q&A (0)

> *둘 이상의 적을 생성하여 플레이어를 추적하도록 해야 합니다. 둘 이상의 적을 생성하기 위해 루프로 적 인스턴스화를 반복해 보겠습니다.*

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

1. SpawnManager.cs의 ***Start()***에서 하나의 **Instantiation**을 3개의 적을 생성하는 **for loop**로 변경합니다.
2. for loop를 새 ***void SpawnEnemyWave()*** 함수로 옮기고, ***Start()***에서 해당 함수를 호출합니다.

[Image: image]단계를 완료로 표시

## 2. for loop에 파라미터 지정

Q&A (0)

> *현재 SpawnEnemyWave는 정확히 3개의 적을 생성하지만, 게임플레이 중에 생성되는 적의 수를 동적으로 늘리려면 해당 메서드에 정보를 전달할 수 있어야 합니다.*

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

1. ***int enemiesToSpawn*** 파라미터를 ***SpawnEnemyWave*** 함수에 추가합니다.
2. ***i &lt __***를 ***i < enemiesToSpawn***으로 변경합니다.
3. 새 변수를 ***Start()***: ***SpawnEnemyWave(___);***의 함수 호출에 추가합니다.

[Image: image]단계를 완료로 표시

## 3. 떨어진 적 파괴

Q&A (0)

> *플레이어가 모든 적을 제거하면 혼자 남게 됩니다. 떨어진 적을 모두 파괴하고, 마지막 적이 제거되면 새로운 적 웨이브를 생성해야 합니다.*

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

1. Enemy.cs에서 적의 위치가 **-Y 값**보다 작은 경우 적을 **파괴**합니다.
2. SpawnManager.cs에서 새 ***public int enemyCount***변수를 선언합니다.
3. ***Update()***에서 ***enemyCount = FindObjectsOfType<Enemy>().Length;***를 설정합니다.
4. ***enemyCount == 0***이면 ***SpawnEnemyWave***를 호출하고 ***Start()***에서 이를 제거하는 **if 문**을 작성합니다.

[Image: image]단계를 완료로 표시

## 4. 웨이브마다 enemyCount 늘리기

Q&A (0)

> *생성되는 적의 수를 제어했으니, 이제 웨이브에서 출현하는 적의 수를 늘려야 합니다. 플레이어가 모든 적을 처치하며 웨이브를 거듭할수록 더 많은 수의 적이 생성되어야 합니다.*

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

1. ***public int waveNumber = 1;***을 새로 선언하고 ***SpawnEnemyWave(waveNumber);***에 적용합니다.
2. 남은 적의 수가 0인지 확인하는 if 문에서 **waveCount를 1 증가시킵니다.**

[Image: image]단계를 완료로 표시

## 5. 새 웨이브마다 파워업 생성

Q&A (0)

> *이제 게임이 거의 완성되었지만, 누락된 부분이 한 가지 있습니다. 적은 웨이브마다 계속 생성되지만, 파워업은 한 번 사용하면 영원히 사라지므로 플레이어는 약해질 수밖에 없습니다. 플레이어가 대항할 수 있도록 웨이브마다 임의의 위치에 파워업이 생성되도록 해야 합니다.*

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

1. SpawnManager.cs에서 새 ***public GameObject powerupPrefab***변수를 선언하고 인스펙터에서 **프리팹**을 할당하고 씬에서 **삭제**합니다.
2. **Start()**에서 새 파워업을 **인스턴스화**합니다.
3. ***SpawnEnemyWave()***를 호출하기 전에 새 파워업을 **인스턴스화**합니다.

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

새 기능:

- 웨이브마다 적 생성
- 웨이브를 완료할 때마다 생성되는 적의 수 증가
- 웨이브마다 새 파워업 생성

새로운 개념 및 기술**:**

- For loop
- Increment (++) 연산자
- 커스텀 메서드에서 파라미터 활용
- FindObjectsOfType

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
