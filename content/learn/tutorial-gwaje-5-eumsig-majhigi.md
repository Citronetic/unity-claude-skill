[Image: image]

# 과제 5 - 음식 맞히기

Tutorial

Beginner

+10XP

60 mins

1

(107)

Unity Technologies

[Image: 과제 5 - 음식 맞히기]SummarySkills

**과제 개요:**

두더지 잡기 게임처럼, 해골을 피해 가며 그리드에서 생성되는 모든 음식을 맞히는 과제를 통해 사용자 인터페이스 기술을 연습해 보세요.  버튼, 마우스 클릭, 점수 추적, 재시작 시퀀스, 난이도 설정을 디버그하여 문제의 원인을 밝혀야 합니다.

**과제 결과:**

- 모든 버튼이 올바르게 표시되고 텍스트가 적절하게 정렬되어 있음
- 난이도를 선택하면 생성 속도가 그에 맞게 변경됨
- 음식을 클릭하면 음식이 파괴되고 왼쪽 상단의 점수가 업데이트됨
- 게임에서 패배하면 다시 플레이할 수 있는 Restart 버튼이 나타남

Resources

- [Challenge 5 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/6b85b614-5937-4211-9a5a-117378ab83d2/Challenge%205%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956240225)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 개요

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

- **Prototype 5**프로젝트를 엽니다.
- [Challenge 5 Starter Files](https://connect-prd-cdn.unity.com/20210506/6b85b614-5937-4211-9a5a-117378ab83d2/Challenge%205%20-%20Starter%20Files.zip?_ga=2.230508380.1186801097.1620052249-59568313.1601905412)를 클릭하여 다운로드하고, 압축된 폴더의 **압축을 해제**한 후, .unitypackage를 프로젝트로 **임포트**합니다. 방법이 기억나지 않는 경우 [1.1강, 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)를 참조합니다.
- *프로젝트 창에서 Assets > Challenge 5 > **Instructions*** 폴더로 이동해서 'Challenge 5 - Outcome' 영상을 가이드로 사용하여 과제를 완료합니다.

단계를 완료로 표시

## 2. 경고

Q&A (0)

프로젝트로 임포트한 과제에서는 **버그가 발생**할 것입니다.

이 과제의 목적은 아래에 나열된 버그를 해결하는 것입니다. 진전이 없을 경우 도움이 되도록 페이지 하단에 힌트도 제공됩니다.

버그를 해결하지 못하고 프로젝트에서 과제 파일을 삭제하려는 경우 프로젝트 창에서 Assets > **Challenge 5**를 오른쪽 클릭하고 **Delete**를 선택하세요.

행운을 빕니다!

단계를 완료로 표시

## 3. 난이도 버튼이 지저분하게 표시됨

Q&A (0)

- 버튼 텍스트를 가로 및 세로 중앙에 배치합니다.

단계를 완료로 표시

## 4. 음식이 너무 이른 시점에 파괴됨

Q&A (0)

- 음식은 플레이어가 마우스로 건드렸을 때가 아니라 클릭했을 때 파괴되어야 합니다.

단계를 완료로 표시

## 5. 점수가 'score'라는 단어로 바뀌어 있음

Q&A (0)

- 'Score:' 뒤에 값이 표시되도록 항상
'Score: __'라고 표시되어야 합니다.

단계를 완료로 표시

## 6. 게임에서 패배하는 경우 재시작할 방법이 없음

Q&A (0)

- 게임 오버 화면에서 Restart 버튼이 나타나도록 구현합니다.

단계를 완료로 표시

## 7. 난이도 버튼을 눌러도 난이도가 변경되지 않음

Q&A (0)

- spawnRate가 항상 너무 빠릅니다. Easy를 클릭하면 spawnRate가 감소하고, Hard를 클릭하면 spawnRate가 증가해야 합니다.

단계를 완료로 표시

## 8. 보너스: 게임을 무한정 계속할 수 있음

Q&A (0)

- 정수 60부터 카운트다운하여(예: 59, 58, 57 등) 0이 되면 게임 오버 시퀀스를 트리거하는 "Time: __" 디스플레이를 추가합니다.

단계를 완료로 표시선택 단계

## 9. 힌트

Q&A (0)

- **버튼 텍스트를 가로 및 세로 중앙에 배치합니다.***힌트 - 계층 구조에서 버튼 오브젝트 중 하나를 확장하면 그 안에 'Text' 오브젝트가 있으며, 해당 'Text' 오브젝트의 프로퍼티를 편집해야 합니다.*
- **음식은 플레이어가 마우스로 건드렸을 때가 아니라 클릭했을 때 파괴되어야 합니다.***힌트 - OnMouseEnter()는 마우스가 오브젝트의 콜라이더에 진입했을 때를 감지하며, OnMouseDown()은 오브젝트의 콜라이더를 마우스로 클릭했을 때를 감지합니다.*
- **'Score:' 뒤에 값이 표시되도록 항상 'Score: __'라고 표시되어야 합니다.***힌트 - 점수 텍스트를 설정할 때 'Score: ' 단어와 실제 점수 값을 추가(연결)해야 합니다.*
- **게임 오버 화면에서 Restart 버튼이 나타나도록 구현합니다.***힌트 - GameOver() 메서드에서 Restart 버튼을 재활성화해야 합니다.*
- **spawnRate가 항상 너무 빠릅니다. Easy를 클릭하면 spawnRate가 감소하고, Hard를 클릭하면 spawnRate가 증가해야 합니다***힌트 - 버튼의 스크립트에서 Game Manager의 스크립트로 전달되는 정보 또는 파라미터가 없으므로 난이도 파라미터를 구현해야 합니다.*
- **보너스 - 정수 60부터 카운트다운하여(예: 59, 58, 57 등) 0이 되면 게임 오버 시퀀스를 트리거하는 'Time: __' 디스플레이를 추가합니다.***힌트 - Google에서 'Unity Count down timer C#'을 검색하세요. 'Time.deltaTime'을 차감하고, 정수만 표시하기 위해 Mathf.Round() 메서드를 사용하게 될 것입니다.*

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
