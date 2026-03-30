[Image: image]

# 5.3강 - 게임 오버

Tutorial

Beginner

+10XP

70 mins

1

(128)

Unity Technologies

[Image: 5.3강 - 게임 오버]SummarySkills

**개요:**

게임에 멋진 점수 카운터를 추가했지만 그 외에도 여러 획기적인 게임 UI 요소를 추가할 수 있습니다. 이 수업에서는 착한 타겟 오브젝트가 센서 밑으로 떨어질 때 표시되는 'Game Over' 텍스트를 구현합니다. 게임 오버 시 타겟 생성이 중지되고 점수가 초기화됩니다. 또한 플레이어가 패배한 후에 게임을 재시작할 수 있도록 'Restart Game' 버튼을 추가합니다.

**프로젝트 결과:**

착한 타겟이 화면 하단의 센서 밑으로 떨어지면 타겟 생성이 중지되며 'Game Over' 메시지가 화면에 표시됩니다. 'Game Over' 메시지 바로 아래에는 플레이어가 게임을 처음부터 다시 즐길 수 있도록 게임을 다시 시작하고 점수를 초기화하는 'Reset Game' 버튼이 있습니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. Game Over 텍스트 오브젝트 생성

Q&A (0)

> *게임 종료 시 'Game Over' 텍스트를 표시하기 위해 가장 먼저 할 일은 'Game Over'라고 표시하는 새 UI 텍스트 요소를 생성하고 커스터마이즈하는 것입니다.*

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

1. **Canvas**를 오른쪽 클릭하고 *UI > **TextMeshPro - Text*** 오브젝트를 새로 생성하고 이름을 Game Over Text로 변경합니다.
2. 인스펙터에서 해당 **Text**, **Pos X**, **Pos Y**, **Font Asset**, **Size**, **Style**, **Color**, **Alignment**를 편집합니다.
3. 'Wrapping' 설정을 'Disabled'로 설정합니다.

단계를 완료로 표시

## 2. Game Over 텍스트 표시

Q&A (0)

> *멋진 Game Over 텍스트가 화면에 표시되지만, 지금은 화면을 차지하고 시야를 가립니다. 게임 종료 시 다시 표시되도록 이를 비활성화해야 합니다.*

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

1. GameManager.cs에서 새로운 ***public TextMeshProUGUI gameOverText;***를 생성하고, 인스펙터에서 **Game Over** 오브젝트를 여기에 할당합니다.
2. Active 체크박스를 **선택 해제**하여 Game Over 텍스트를 기본적으로 **비활성화**합니다.
3. ***Start()***에서 Game Over 텍스트를 활성화합니다.

[Image: image]단계를 완료로 표시

## 3. GameOver 함수 만들기

Q&A (0)

> *임시로 게임이 시작될 때 'Game Over' 텍스트가 표시되도록 구현했지만, 원래 의도는 착한 오브젝트가 화면 아래로 떨어졌을 때 텍스트가 표시되도록 하는 것입니다.*

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

1. 새로운 ***public void GameOver()*** 함수를 만들고 게임 오버 텍스트를 활성화하는 코드를 이 함수 내부로 **이동**합니다.
2. Target.cs에서 타겟이 **센서**와 충돌하는 경우 ***gameManager.GameOver()***를 호출합니다.
3. Bad 태그를 새로 만들어 **나쁜 오브젝트**에 추가하고, Bad 오브젝트가 *아닌* 경우에만 게임 오버를 트리거하는 조건을 추가합니다.

[Image: image]단계를 완료로 표시

## 4. 게임 오버 시 오브젝트 생성과 점수 집계 중지

Q&A (0)

> *'Game Over' 메시지가 올바른 시점에 정확히 표시되지만, 게임 자체는 계속 플레이할 수 있습니다. 게임을 완전히 중지하고 이 'Game Over'를 호출하려면 타겟의 생성과 플레이어의 점수 획득을 중지해야 합니다.*

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

1. 새로운 ***public bool isGameActive;***를 만듭니다.
2. ***Start()***에서 **첫 번째 줄**에 ***isGameActive = true;***를 설정하고 ***GameOver()***에서 ***isGameActive = false;***를 설정합니다.
3. 생성을 방지하기 위해 ***SpawnTarget()*** 코루틴에서 ***while (true)***를 ***while (isGameActive)***로 변경합니다.
4. 점수 획득을 방지하기 위해 Target.cs에서 ***OnMouseDown()*** 함수에 ***if (gameManager.isGameActive) {*** 조건을 추가합니다.

[Image: image]단계를 완료로 표시

## 5. Restart 버튼 추가

Q&A (0)

> *게임 오버 메카닉은 잘 작동하지만, 게임을 다시 플레이할 방법이 없습니다. 플레이어가 게임을 재시작할 수 있도록 첫 번째 UI 버튼을 구현해 보겠습니다.*

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

1. **Canvas**를 오른쪽 클릭하고 *Create > UI > Button*을 선택합니다.
**참고: Button - TextMeshPro**를 사용하여 버튼의 텍스트를 더 세밀하게 제어할 수도 있습니다.
2. 버튼 이름을 Restart Button으로 변경합니다.
3. 텍스트를 고려해 Restart Button의 위치를 올바르게 지정하기 위해 임시로 Game Over 텍스트를 **재활성화**한 후 다시 **비활성화**합니다.
4. Text 자식 오브젝트를 선택한 후 Restart라고 나오도록 해당 **Text**를 편집하고, 해당 **Font, Style**및 **Size**를 편집합니다.

단계를 완료로 표시

## 6. Restart 버튼 활성화

Q&A (0)

> *Restart 버튼을 씬에 보기 좋게 추가했지만, 이제 실제로 버튼을 누르면 게임이 다시 시작되도록 만들어야 합니다.*

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

1. GameManager.cs에서 ***using UnityEngine.SceneManagement;***를 추가합니다.
2. 현재 씬을 다시 로드하는 새 ***public void RestartGame()*** 함수를 만듭니다.
3. **Button**의 인스펙터에서 **+**를 클릭하여 새로운 **On Click 이벤트**를 추가하고, **Game Manager** 오브젝트에 드래그하고, ***GameManager.RestartGame*** 함수를 선택합니다.

[Image: image]단계를 완료로 표시

## 7. 게임 오버 시 Restart 버튼 표시

Q&A (0)

> *Restart 버튼이 올바르게 구현되었더라도 게임플레이 내내 계속 표시되어서는 안 됩니다. 'Game Over' 메시지와 마찬가지로 게임플레이 중에는 Restart Button을 비활성화합니다.*

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

1. GameManager.cs 맨 위에 ***using UnityEngine.UI;***를 추가합니다.
2. 새로운 ***public Button restartButton;***을 선언하고 인스펙터에서 **Restart Button**을 여기에 할당합니다.
3. 인스펙터에서 **Restart Button**의 'Active' 체크박스를 **선택 해제**합니다.
4. ***GameOver*** 함수에서 **Restart Button**을 활성화합니다.

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

새 기능**:**

- 동작하는 게임 오버 화면과 Restart 버튼
- Restart 버튼 클릭 시 게임 초기화

새로운 개념 및 기술**:**

- 게임 상태
- 버튼
- On Click 이벤트
- 씬 관리 라이브러리
- UI 라이브러리
- 게임 상태를 제어하기 위한 부울

다음 수업:

- 다음 수업에서는 버튼을 사용하여 게임에 난이도 선택 옵션을 추가해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
