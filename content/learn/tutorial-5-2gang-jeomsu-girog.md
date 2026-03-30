[Image: image]

# 5.2강 - 점수 기록

Tutorial

Beginner

+10XP

70 mins

2

(129)

Unity Technologies

[Image: 5.2강 - 점수 기록]SummarySkills

**개요:**

오브젝트가 씬으로 날아오고 플레이어가 이를 클릭해 파괴할 수 있게 되었지만, 아무 일도 일어나지 않습니다. 이 수업에서는 사용자 인터페이스를 통해 플레이어의 점수를 추적해서 표시하겠습니다. 각 타겟 오브젝트에 다른 포인트 값을 부여하여 클릭 시 포인트를 더하거나 뺍니다. 마지막으로 각 타겟이 파괴될 때 표시되는 멋진 폭발 효과를 추가해 보겠습니다.

**프로젝트 결과:**

0부터 시작하는 'Score: ' 섹션이 UI에 표시됩니다. 플레이어가 타겟을 클릭하면 점수가 업데이트되며, 타겟이 파괴되면 파티클이 폭발합니다. 착한 타겟은 각각 점수에 서로 다른 포인트 값을 더하지만 나쁜 타겟은 점수를 차감합니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 화면에 점수 텍스트 위치 추가

Q&A (0)

> *점수를 화면에 표시하려면 가장 먼저 UI 요소를 추가해야 합니다.*

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

1. 계층 구조에서 *Create > UI > **TextMeshPro - Text***를 선택한 후 메시지가 표시되면 **Import TMP Essentials** 버튼을 클릭합니다.
2. 새 오브젝트의 이름을 Score Text로 변경한 후 씬 뷰에 **캔버스**가 보이도록 **축소**합니다.
3. **왼쪽 상단** **모서리**에 고정되도록 **앵커 포인트**를 변경합니다.
4. 왼쪽 상단 모서리에 위치하도록 인스펙터에서 **Pos X** 및 **Pos Y**를 변경합니다.

단계를 완료로 표시

## 2. 점수 텍스트 프로퍼티 편집

Q&A (0)

> *기본 텍스트를 씬의 올바른 위치에 배치했으므로, 이제 제대로 멋지에 표시되도록 프로퍼티를 편집해야 합니다.*

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

1. 텍스트를 Score:로 변경합니다.
2. 배경에 어울리는 **Font Asset**, **Style**, **Size**, **Vertex Color** 등을 선택합니다.

단계를 완료로 표시

## 3. 점수 텍스트 및 변수 초기화

Q&A (0)

> *UI에 점수를 표시하기에 적절한 위치를 잡았지만, 아직 아무 내용도 표시되지 않습니다. 점수 변수를 UI로 표시해야 플레이어가 자신의 점수를 확인할 수 있습니다.*

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

1. **GameManager.cs** 맨 위에 using TMPro;를 추가합니다.
2. 새로운 ***public*** ***TextMeshProUGUI scoreText**를 추가한 후,* 인스펙터에서 해당 변수를 할당합니다.
3. 새로운 ***private int score*** 변수를 생성하고 ***Start()***에서 ***score = 0;***으로 초기화합니다.
4. 또한 **Start()**에서 ***scoreText.text = "Score: " + score;***를 설정합니다.

[Image: image]단계를 완료로 표시

## 4. 새로운 UpdateScore 메서드 생성

Q&A (0)

> *점수 텍스트에 점수 변수가 완벽하게 표시되지만, 아직 업데이트되지는 않습니다. 포인트를 집계하여 UI에 표시하는 새 함수를 작성해야 합니다.*

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

1. 새로운 ***private void UpdateScore*** 메서드를 생성합니다. 이 메서드에는 하나의 ***int scoreToAdd***파라미터가 필요합니다.
2. ***scoreText.text = "Score: " + score;***를 잘라 새 메서드에 붙여 넣은 후 ***UpdateScore(0)***을 ***Start()***에서 호출합니다.
3. ***UpdateScore()***에서
***score += scoreToAdd;*를 추가하여 점수를 높입니다.**
4. ***UpdateScore(5)***를 **spawnTarget()** 함수에서 호출합니다.

[Image: image]단계를 완료로 표시

## 5. 타겟이 파괴될 때 점수 추가

Q&A (0)

> *점수를 업데이트하는 메서드를 생성했으므로, 이제 타겟이 파괴될 때마다 타겟 스크립트에서 이 메서드를 호출해야 합니다.*

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

1. GameManager.cs에서 ***UpdateScore*** 메서드를 ***public***으로 만듭니다.
2. Target.cs에서 ***private GameManager gameManager;***에 대한 레퍼런스를 생성합니다.
3. ***Start()***에서 ***Find()*** 메서드를 사용하여 GameManager를 초기화합니다.
4. 타겟이 **파괴**되면 ***UpdateScore(5);***를 호출한 후 SpawnTarget()에서 메서드 호출을 **삭제**합니다.

[Image: image]단계를 완료로 표시

## 6. 각 타겟에 포인트 값 할당

Q&A (0)

> *타겟을 클릭하면 점수가 업데이트되지만, 각 타겟에 서로 다른 값을 부여하려고 합니다. 착한 오브젝트는 서로 다른 포인트 값을 더하고, 나쁜 오브젝트는 포인트를 차감해야 합니다.*

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

1. Target.cs에서 새로운 ***public int pointValue***변수를 생성합니다.
2. 각 **타겟 프리팹의** 인스펙터에서 나쁜 타겟의 **음수 값**을 포함하여 적절한 **Point Value**를 설정합니다.
3. 새 변수를 ***UpdateScore(pointValue);***에 추가합니다.

[Image: image]단계를 완료로 표시

## 7. 파티클 폭발 추가

Q&A (0)

> *점수 시스템은 제대로 작동하지만, 타겟을 클릭하면 여전히 아쉬운 점이 있습니다. 박진감을 더하기 위해 타겟을 클릭할 때마다 폭발 파티클을 추가해 보겠습니다.*

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

1. Target.cs에서 새로운 ***public ParticleSystem explosionParticle*** 변수를 추가합니다.
2. *Course Library > Particles*에 있는 **파티클 프리팹**을 각 타겟 프리팹의 **Explosion Particle** 변수에 할당합니다.
3. ***OnMouseDown()*** 함수에서 새 폭발 프리팹을 **인스턴스화**합니다.

[Image: image]단계를 완료로 표시

## 8. 수업 요약

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

- 화면에 점수 UI 요소 추가
- 타겟을 맞히면 플레이어의 점수가 추적되어 점수 텍스트로 표시
- 플레이어가 오브젝트를 파괴할 때 폭발 파티클 효과 발생

새로운 개념 및 기술:

- TextMeshPro
- 캔버스
- 앵커 포인트
- 라이브러리 임포트
- 파라미터를 포함한 커스텀 메서드
- 다른 스크립트에서 메서드 호출

다음 수업:

- 일부 UI 요소를 다시 사용해 플레이어에게 게임 종료를 알리고 게임을 초기화해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
