[Image: image]

# 5.4강 - 난이도 설정

Tutorial

Beginner

+10XP

60 mins

1

(120)

Unity Technologies

[Image: 5.4강 - 난이도 설정]SummarySkills

**개요:**

이제 마지막 수업입니다. 게임을 완성하기 위해 메뉴와 타이틀 화면 등을 추가합니다. 나만의 타이틀을 제작하고 스타일을 적용하여 텍스트를 보기 좋게 표현해 보겠습니다. 또한 게임 난이도를 설정하는 세 가지 새로운 버튼을 구현합니다. 난이도가 높을수록 타겟이 빠르게 생성됩니다.

**프로젝트 결과:**

게임을 시작하면 타이틀이 강조되어 표시되고 화면 하단에 세 개의 난이도 버튼이 있는 멋진 메뉴 화면이 나타납니다. 각 난이도는 타겟의 생성 속도에 영향을 미치므로 착한 타겟이 떨어지지 않도록 하려면 더 높은 실력이 필요합니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 타이틀 텍스트 및 메뉴 버튼 구현

Q&A (0)

> *먼저 할 일은 필요한 모든 UI 요소를 구현하는 것입니다. 여기에는 큰 타이틀과 세 가지 난이도 버튼이 포함됩니다.*

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

1. **Game Over 텍스트**를 복제하여 **Title Text를 만들고**이름, 텍스트 및 모든 속성을 편집합니다.
2. **Restart Button**을 복제하고 속성을 편집하여 Easy Button 버튼을 만듭니다.
3. 새로운 Easy **Button**을 편집하고 복제하여 Medium Button과 Hard Button을 만듭니다.

단계를 완료로 표시

## 2. DifficultyButton 스크립트 추가

Q&A (0)

> *난이도 버튼이 그럴듯하게 표시되지만, 아직 어떤 역할도 하지 않습니다. 버튼에 커스텀 기능을 부여하려면 먼저 새 스크립트를 제공해야 합니다.*

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

1. 새로운 버튼 3개에 대해 Button 컴포넌트의 **On Click ()** 섹션에서 **마이너스**(**-**) 버튼을 클릭하여 RestartGame 기능을 제거합니다.
2. 새로운 **DifficultyButton.cs** 스크립트를 만들고 **세 개 버튼**에 모두 추가합니다.
3. ***using UnityEngine.UI***를 임포트 항목에 추가합니다.
4. 새로운 ***private Button button;*** 변수를 추가하고 ***Start()***에서 초기화합니다.

[Image: image]단계를 완료로 표시

## 3. 버튼 클릭 시 SetDifficulty 호출

Q&A (0)

> *버튼 스크립트가 있으므로, 이제 SetDifficty 메서드를 만들고 이 메서드를 버튼 클릭과 연동할 수 있습니다.*

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

1. 새로운 ***void SetDifficulty*** 함수를 만들고 그 안에 ***Debug.Log(gameObject.name + " was clicked");*를 생성합니다.**
2. ***SetDifficulty*** 함수를 호출하는 **버튼 리스너**를 추가합니다.

[Image: image]단계를 완료로 표시

## 4. 게임 시작 버튼 만들기

Q&A (0)

> *타겟 오브젝트가 여기저기서 튀어 오른다는 점만 제외하면 타이틀 화면은 괜찮아 보입니다. 하지만 게임을 실제로 시작할 방법이 아직 없습니다. SetDifficulty와 커뮤니케이션할 수 있는 StartGame 함수가 필요합니다.*

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

1. GameManager.cs에서 새로운 ***public void StartGame()*** 함수를 만들고 ***Start()***의 모든 내용을 이 함수로 옮깁니다.
2. DifficultyButton.cs에서 새로운 ***private GameManager gameManager;***를 만들고 ***Start()***에서 초기화합니다.
3. ***SetDifficulty()** 함수에서 **gameManager.StartGame();***을 호출합니다.

[Image: image]단계를 완료로 표시

## 5. 게임 시작 시 타이틀 화면 비활성화

Q&A (0)

> *게임 시작 시 타이틀 화면이 사라지도록 하려면 개별적으로 비활성화하는 것이 아니라 빈 오브젝트에 저장해야 합니다. 빈 부모 오브젝트 하나만 비활성화하면 되므로 작업이 훨씬 더 쉬워집니다.*

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

1. Canvas를 오른쪽 클릭하고, *Create > Empty Object*를 선택하고, 이름을 Title Screen으로 변경하고, 여기로 **3개의 버튼**과 **타이틀**을 드래그합니다.
2. GameManager.cs에서 새로운 ***public GameObject titleScreen;***을 만들고 인스펙터에서 할당합니다.
3. ***StartGame()***에서 타이틀 화면 오브젝트를 비활성화합니다.

[Image: image]단계를 완료로 표시

## 6. 파라미터를 사용하여 난이도 변경

Q&A (0)

> *난이도 버튼을 누르면 게임이 시작되지만, 아직 게임의 난이도가 바뀌지는 않습니다. 마지막으로 할 일은 난이도 버튼이 타겟 오브젝트가 생성되는 속도에 영향을 주도록 하는 것입니다.*

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

1. DifficultyButton.cs에서 새로운 ***public int difficulty***변수를 만든 후 인스펙터에서 **Easy** 난이도를 1로, **Medium**을 2로, **Hard**를 3으로 할당합니다.
2. ***int difficulty*** 파라미터를 ***StartGame()*** 함수에 추가합니다.
3. ***StartGame()***에서 ***spawnRate /= difficulty;***를 설정합니다.
4. 난이도 파라미터를 ***StartGame(difficulty)***에 전달하여 DifficultyButton.cs의 오류를 해결합니다.

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

새 기능

- 타이틀 화면을 통해 사용자가 게임을 시작할 수 있음
- 생성 속도에 영향을 미치는 난이도 선택

새로운 개념 및 기술:

- AddListener()
- 스크립트 간 파라미터 전달
- 나누기/할당(/=) 연산자
- 자식 오브젝트 그룹화

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
