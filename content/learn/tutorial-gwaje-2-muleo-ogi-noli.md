[Image: image]

# 과제 2 - 물어 오기 놀이

Tutorial

Beginner

+10XP

60 mins

1

(259)

Unity Technologies

[Image: 과제 2 - 물어 오기 놀이]SummarySkills

**과제 개요:**

이 과제에서는 배열과 난수 생성 기술을 사용한 프로그래밍을 통해 개를 보내서 하늘에서 무작위로 떨어지는 공이 땅에 닿기 전에 물어 오도록 만들어야 합니다. 이 과제를 완료하려면 변수를 적절하게 할당하고, if 문을 올바르게 프로그래밍하고, 충돌을 완벽하게 감지하고, 오브젝트를 무작위로 생성해야 합니다.

**과제 결과:**

- 화면 위 임의의 X 위치에 세 가지 공 중 하나가 무작위로 생성됩니다.
- 사용자가 스페이스바를 누르면 개가 생성되고 달려가서 공을 잡습니다.
- 개가 공과 충돌하면 공이 파괴됩니다.
- 공이 지면에 닿으면 "Game Over" 디버그 메시지가 표시됩니다.
- 개와 공이 화면에서 벗어나면 씬에서 제거됩니다.

Resources

- [Challenge 2 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/b167f1c0-bbb1-4537-9b9b-c9e599ed16a0/Challenge%202%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956233251)

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

- **Prototype 2**프로젝트를 엽니다.
- [Challenge 2 시작 파일](https://connect-prd-cdn.unity.com/20210506/b167f1c0-bbb1-4537-9b9b-c9e599ed16a0/Challenge%202%20-%20Starter%20Files.zip?_ga=2.234701662.1186801097.1620052249-59568313.1601905412)을 클릭하여 다운로드하고, 압축된 폴더의 **압축을 해제**한 후, .unitypackage를 프로젝트로 **임포트**합니다. 방법이 기억나지 않는 경우 [1.1강, 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)를 참조합니다.
- *프로젝트 창에서 Assets > Challenge 2 > **Instructions*** 폴더로 이동하여 Challenge 2 - Outcome 영상을 참조해서 과제를 완료합니다.

단계를 완료로 표시

## 2. 경고

Q&A (0)

과제를 프로젝트로 임포트할 때 **버그가 발생**하도록 했습니다.

이 과제의 목적은 아래에 나열된 버그를 해결하는 것입니다. 진전이 없을 경우 도움이 되도록 페이지 하단에 힌트도 제공됩니다.

버그를 해결하지 못하고 프로젝트에서 과제 파일을 삭제하려는 경우, 프로젝트 창에서 Assets 아래에 있는 **Challenge 2**를 오른쪽 클릭하고 **Delete**를 선택합니다.

행운을 빕니다!

단계를 완료로 표시

## 3. 개가 화면 맨 위에서 생성됨

Q&A (0)

- 화면 맨 위에서 공이 생성되도록 합니다.

단계를 완료로 표시

## 4. 플레이어가 개 대신 녹색 공을 생성

Q&A (0)

- 플레이어가 개를 생성하게 합니다.

단계를 완료로 표시

## 5. 공이 개 근처에 가면 파괴됨

Q&A (0)

- 공은 개와 직접 접촉하는 경우에만 파괴되어야 합니다.

단계를 완료로 표시

## 6. 화면에서 벗어나는 어떤 것도 파괴되지 않음

Q&A (0)

- 공은 화면 아래를 벗어나면 파괴되어야 하며 개는 화면 왼쪽을 벗어나면 제거되어야 합니다.

단계를 완료로 표시

## 7. 한 가지 유형의 공만 생성됨

Q&A (0)

- Ball 1, 2, 3이 무작위로 생성되어야 합니다.

단계를 완료로 표시

## 8. 보너스: 생성 간격이 항상 똑같음

Q&A (0)

- 생성 간격을 3~5초 사이의 무작위 값으로 설정합니다.

단계를 완료로 표시

## 9. 보너스: 플레이어가 스페이스바 키를 연속으로 누를 수 있음

Q&A (0)

- 플레이어가 특정 시간이 지난 후에만 새로운 개를 생성할 수 있게 합니다.

단계를 완료로 표시선택 단계

## 10. 힌트

Q&A (0)

- **공이 화면 맨 위에서 생성되도록 합니다.***힌트 - Spawn Manager 오브젝트를 클릭하고 "Ball Prefabs" 배열을 살펴봅니다.*
- **플레이어가 개를 생성하게 합니다.***힌트 - Player 오브젝트를 클릭하고 "Dog Prefab" 변수를 살펴봅니다.*
- **공은 개와 직접 접촉하는 경우에만 파괴되어야 합니다.***힌트 - 개 프리팹의 박스 콜라이더를 확인합니다.*
- **공은 화면 아래를 벗어나면 파괴되어야 하며 개는 화면 왼쪽을 벗어나면 파괴되어야 합니다.***힌트 - DestroyOutOfBounds 스크립트에서 lowerLimit 및 leftLimit 변수, 초과 및 미만 기호, 테스트 대상 위치(x,y,z)를 확인합니다.*
- **Ball 1, 2, 3이 무작위로 생성되어야 합니다.***힌트 - SpawnRandomBall() 메서드에서 새로운 무작위 int 인덱스 변수를 선언한 후 해당 변수를 Instantiate 호출에 포함해야 합니다.*
- **보너스 - 생성 간격을 3~5초 사이의 무작위 값으로 설정합니다.***힌트 - SpawnRandomBall 메서드의 spawnInterval 값을 3~5초 사이의 새로운 무작위 숫자로 설정합니다.*

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
