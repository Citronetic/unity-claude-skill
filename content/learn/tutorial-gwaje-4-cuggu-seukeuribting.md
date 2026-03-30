[Image: image]

# 과제 4 - 축구 스크립팅

Tutorial

Beginner

+10XP

60 mins

1

(116)

Unity Technologies

[Image: 과제 4 - 축구 스크립팅]SummarySkills

**과제 개요:**

Sumo Battle 프로토타입에서 배운 기술을 축구장이라는 완전히 다른 컨텍스트에 사용해 보겠습니다. Sumo Battle 프로토타입에서와 마찬가지로 공 주변에서 카메라를 회전하고 전방으로 힘을 적용해 공을 제어하지만, 공을 가장자리로 밀어내는 것이 아니라 공을 상대편의 골대에 넣는 것이 목표입니다. 반면에 상대편은 여러분의 골대에 공을 넣으려고 시도합니다. Sumo Battle에서와 마찬가지로, 한 판이 끝날 때마다 적의 공이 늘어난 새 웨이브가 생성되어 플레이어의 수비 능력을 시험합니다. 하지만 이 프로젝트에서는 제대로 작동하는 요소가 거의 없습니다. 지금부터 이 프로젝트가 올바르게 작동할 수 있도록 만들어 보겠습니다.

**과제 결과:**

- 적이 여러분의 골대 쪽으로 이동하지만, 적을 공격해 막을 수 있습니다.
- 파워업은 일시적으로 힘을 강화한 후 5초 뒤에 사라집니다.
- 적이 모두 없어지면 적이 하나 추가된 새로운 웨이브가 생성됩니다.

Resources

- [Challenge 4 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/2b28387c-9037-4e20-916d-de47efdd852d/Challenge%204%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956238296)

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

- **Prototype 4**프로젝트를 엽니다.
- [Challenge 4 Starter Files](https://connect-prd-cdn.unity.com/20210506/2b28387c-9037-4e20-916d-de47efdd852d/Challenge%204%20-%20Starter%20Files.zip?_ga=2.230508380.1186801097.1620052249-59568313.1601905412)를 클릭하여 다운로드하고, 압축된 폴더의 **압축을 해제**한 후 .unitypackage를 프로젝트로 **임포트**합니다. 방법이 기억나지 않는 경우 [1.1강, 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)를 참조합니다.
- *프로젝트 창에서 Assets > Challenge 4 > **Instructions*** 폴더로 이동해서 Challenge 4 - Outcome 영상을 가이드로 사용하여 과제를 완료합니다.

단계를 완료로 표시

## 2. 경고

Q&A (0)

프로젝트로 임포트한 과제에서는 **버그가 발생**할 것입니다.

이 과제의 목적은 아래에 나열된 버그를 해결하는 것입니다. 진전이 없을 경우 도움이 되도록 페이지 하단에 힌트도 제공됩니다.

버그를 해결하지 못하고 프로젝트에서 과제 파일을 삭제하려는 경우 프로젝트 창에서 Assets > **Challenge 4**를 오른쪽 클릭하고 **Delete**를 선택하세요.

행운을 빕니다!

단계를 완료로 표시

## 3. 적과 부딪히면 플레이어 쪽으로 다가옴

Q&A (0)

- 적과 부딪히면 플레이어로부터 *멀어져야* 합니다.

단계를 완료로 표시

## 4. 플레이어가 파워업을 얻으면 새 웨이브가 생성됨

Q&A (0)

- 적이 모두 제거되었을 때 새 웨이브가 생성되어야 합니다.

단계를 완료로 표시

## 5. 파워업이 사라지지 않음

Q&A (0)

- 파워업은 특정 기간만 지속된 후 사라져야 합니다.

단계를 완료로 표시

## 6. 모든 웨이브에서 적이 2개 생성됨

Q&A (0)

- 웨이브 1에는 한 개, 웨이브 2에는 두 개, 웨이브 3에는 세 개 등 웨이브가 거듭될수록 적이 늘어나야 합니다.

단계를 완료로 표시

## 7. 적이 어디로도 움직이지 않음

Q&A (0)

- 적은 Player Goal 오브젝트 쪽으로 이동해야 합니다.

단계를 완료로 표시

## 8. 보너스: 플레이어에게 터보 부스트 장착

Q&A (0)

- 플레이어는 스페이스바를 누를 때마다 스피드 부스트를 얻어야 하며, 사용 시 파티클 효과가 나타나야 합니다.

단계를 완료로 표시

## 9. 보너스: 적의 난이도가 높아지지 않음

Q&A (0)

- 새 웨이브가 생성될 때마다 적의 속도가 조금씩 증가해야 합니다.

단계를 완료로 표시선택 단계

## 10. 힌트

Q&A (0)

- **적과 부딪히면 적이 플레이어로부터 멀어져야 함***힌트 - PlayerControllerX.cs에서 플레이어로부터 떨어진 벡터를 얻으려면 [적 위치]에서 [플레이어의 위치]를 빼야 합니다(반대로 빼서는 안 됨).*
- **적이 모두 제거되었을 때 새 웨이브가 생성되어야 함***힌트 - SpawnManagerX.cs에서 enemyCount 변수가 올바르게 설정되어 있는지 확인합니다.*
- **파워업은 특정 기간만 지속된 후 사라져야 함***힌트 - PlayerControllerX.cs의 PowerupCoolDown 코루틴 코드가 정상인 것처럼 보이지만, 사실 이 코루틴은 StartCoroutine() 메서드를 통해 호출되지 않습니다.*
- **웨이브 1에는 한 개, 웨이브 2에는 두 개, 웨이브 3에는 세 개 등 웨이브가 거듭될수록 적이 늘어나야 함***힌트 - SpawnManagerX.cs에서 적을 생성하는 for-loop는 enemiesToSpawn 파라미터를 사용해야 합니다.*
- **적은 Player Goal 오브젝트 쪽으로 이동해야 함***힌트 - EnemyX.cs에 다음과 같은 오류가 있습니다. "NullReferenceException: Object reference not set to an instance of an object". playerGoal 오브젝트가 할당되지 않은 것처럼 보입니다.*
- **보너스 - 플레이어는 스페이스바를 누를 때마다 스피드 부스트를 얻어야 하며, 사용 시 파티클 효과가 나타나야 함***힌트 - PlayerController에 스페이스바를 누르면 순간 속도를 높이는 간단한 if 문을 추가합니다. 먼저 Focal Point의 자식 오브젝트로 파티클 효과를 연결합니다.*
- **보너스 - 새 웨이브가 생성될 때마다 적의 속도가 조금씩 증가해야 함***힌트 - SpawnManagerX.cs에서 적의 속도를 추적하고 높여야 합니다. 그런 다음 EnemyX.cs에서 속도 변수를 참조하여 Start()에서 설정합니다.*

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
