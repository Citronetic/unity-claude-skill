[Image: image]

# 과제 3 - 풍선, 폭탄, 부울

Tutorial

Beginner

+10XP

60 mins

1

(182)

Unity Technologies

[Image: 과제 3 - 풍선, 폭탄, 부울]SummarySkills

**과제 개요:**

지금까지 배운 물리, 배경 스크롤, 특수 효과에 대한 내용을 마을의 떠다니는 풍선에 적용하여, 폭탄을 피하며 토큰을 획득해 보세요. 이 프로젝트에는 오류가 많기 때문에 많은 문제점을 해결해야 합니다.

**과제 결과:**

- 플레이어가 스페이스바를 누르면 풍선이 위로 떠오릅니다.
- 배경을 매끄럽게 반복하여 풍선의 움직임을 시뮬레이션합니다.
- 폭탄과 돈 토큰이 타이머에서 무작위로 생성됩니다.
- 돈과 충돌하면 파티클 효과와 음향 효과가 재생됩니다.
- 폭탄과 충돌하면 폭발이 일어나고 배경이 멈춥니다.

Resources

- [Challenge 3 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/13b7b5f4-501e-43a6-9e67-cc9f71a7e406/Challenge%203%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956234145)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 개요

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 한국어, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

- **Prototype 3**프로젝트를 엽니다.
- [Challenge 3 Starter Files](https://connect-prd-cdn.unity.com/20210506/13b7b5f4-501e-43a6-9e67-cc9f71a7e406/Challenge%203%20-%20Starter%20Files.zip?_ga=2.230508380.1186801097.1620052249-59568313.1601905412)를 클릭하여 다운로드하고, 압축된 폴더의 **압축을 해제**한 후 .unitypackage를 프로젝트로 **임포트**합니다. 방법이 기억나지 않는 경우 [1.1강, 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)를 참조합니다.
- *프로젝트 창에서 Assets > Challenge 3 > **Instructions*** 폴더로 이동해서 'Challenge 3 - Outcome' 영상을 가이드로 사용하여 과제를 완료합니다.

단계를 완료로 표시

## 2. 경고

Q&A (0)

프로젝트로 임포트한 과제에서는 **버그가 발생**할 것입니다.

이 과제의 목적은 아래에 나열된 버그를 해결하는 것입니다. 진전이 없을 경우 도움이 되도록 페이지 하단에 힌트도 제공됩니다.

버그를 해결하지 못하고 프로젝트에서 과제 파일을 삭제하려는 경우 프로젝트 창에서 Assets > **Challenge 3**를 오른쪽 클릭하고 **Delete**를 선택하세요.

행운을 빕니다!

단계를 완료로 표시

## 3. 플레이어가 풍선을 제어할 수 없음

Q&A (0)

- 플레이어가 스페이스바를 누르면 풍선이 떠올라야 합니다.

단계를 완료로 표시

## 4. 게임이 끝날 때만 배경이 이동

Q&A (0)

- 배경은 시작할 때 움직여야 하며, 게임이 끝나면 *멈춰야* 합니다.

단계를 완료로 표시

## 5. 오브젝트가 생성되지 않음

Q&A (0)

- 몇 초 간격으로 폭탄이나 돈 오브젝트가 생성되어야 합니다.

단계를 완료로 표시

## 6. 폭죽 효과가 풍선 옆에서 나타남

Q&A (0)

- 폭죽이 풍선의 위치에 표시되도록 해야 합니다.

단계를 완료로 표시

## 7. 배경이 제대로 반복되지 않음

Q&A (0)

- 배경이 원활하게 반복되어야 합니다.

단계를 완료로 표시

## 8. 보너스: 풍선이 너무 높이 떠오를 수 있음

Q&A (0)

- 플레이어가 풍선을 지나치게 높이 띄우지 못하도록 방지합니다.

단계를 완료로 표시

## 9. 보너스: 풍선이 지면 아래로 내려갈 수 있음

Q&A (0)

- 풍선이 바닥에서 튀어 오르는 것처럼 만들어 화면 밑으로 사라지지 않도록 합니다. 풍선이 지면과 부딪힐 때 음향 효과도 있어야 합니다.

단계를 완료로 표시선택 단계

## 10. 힌트

Q&A (0)

- **플레이어가 스페이스바를 누르면 풍선이 떠올라야 합니다.***힌트 - 플레이어의 rigidBody 변수에 NullReferenceExcepton 오류가 있습니다. GetComponent<> 메서드를 사용하여 Start()에 할당해야 합니다.*
- **배경은 시작할 때 움직여야 하며, 게임이 끝나면 멈춰야 합니다.***힌트 - MoveLeftX.cs에서 오브젝트는 게임이 끝나지 않은 경우에만 왼쪽으로 이동해야 합니다.*
- **몇 초 간격으로 폭탄이나 돈 오브젝트가 생성되도록 해야 합니다.***힌트 - "Trying to Invoke method: SpawnManagerX.PrawnsObject couldn't be called"라는 오류 메시지가 표시됩니다. 철자를 잘 확인해야 합니다.*
- **폭죽이 풍선의 위치에 표시되도록 해야 합니다.***힌트 - 폭죽 파티클은 Player의 자식 오브젝트이며, 파티클의 위치는 같은 위치에 설정해야 합니다.*
- **배경이 원활하게 반복되어야 합니다.***힌트 - repeatWidth 변수는 배경 높이의 절반이 아닌 배경 너비의 절반이어야 합니다.*
- **보너스 - 플레이어가 풍선을 지나치게 높이 띄우지 못하도록 방지합니다.***힌트 - 부울을 추가하여 풍선이 isLowEnough인지 확인하고, 부울이 true인 경우에만 플레이어가 위쪽으로 힘을 더하도록 해야 합니다.*
- **보너스 - 풍선이 바닥에서 튀어 오르는 것처럼 만들어 화면 밑으로 사라지지 않도록 합니다. 풍선이 지면과 부딪힐 때 음향 효과도 있어야 합니다.***힌트 - 풍선이 지면 오브젝트와 충돌하는지 테스트하는 방법을 찾은 다음, 충돌할 경우 위쪽으로 튀어 오르는 충격력을 추가합니다.*

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
