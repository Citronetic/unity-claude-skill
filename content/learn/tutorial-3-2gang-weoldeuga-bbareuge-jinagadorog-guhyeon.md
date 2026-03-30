[Image: image]

# 3.2강 - 월드가 빠르게 지나가도록 구현

Tutorial

Beginner

+10XP

70 mins

5

(218)

Unity Technologies

[Image: 3.2강 - 월드가 빠르게 지나가도록 구현]SummarySkills

**개요:**

지금까지 플레이어가 스페이스바를 눌러 다가오는 장애물을 뛰어넘는 게임의 핵심 메카닉을 구현했습니다. 그러나 처음 몇 초 동안은 플레이어가 달리는 것처럼 보이지만, 곧 배경이 사라지게 됩니다. 이 문제를 해결하려면 배경이 매끄럽게 반복되도록 구현하여 월드가 빠르게 지나가는 것처럼 보이게 만들어야 합니다. 또한 플레이어가 장애물과 충돌하면 게임을 멈춰 배경이 반복되고 장애물이 생성되는 것을 중지해야 합니다. 마지막으로 플레이어를 지나친 모든 장애물을 파괴해야 합니다.

**프로젝트 결과:**

배경이 장애물과 동시에 완벽하게 움직이고, 장애물은 게임 경계를 벗어나면 제거됩니다. 스크립트 커뮤니케이션 덕분에 플레이어가 장애물과 충돌할 때 배경과 생성 관리자가 멈춥니다. 장애물과 충돌하면 콘솔 로그에 게임 오버 메시지가 트리거되고 배경과 생성 관리자가 멈춥니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 배경을 반복하는 스크립트 생성

Q&A (0)

> *배경을 반복하고 장애물과 같은 속도로 왼쪽으로 움직여 월드가 실제로 빠르게 지나가는 것처럼 보이게 해야 합니다. 이미 왼쪽으로 움직이는 스크립트가 있지만, 반복하려면 새 스크립트가 필요합니다.*

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

1. **RepeatBackground.cs**라는 새 스크립트를 만들고 **Background 오브젝트**에 연결합니다.

단계를 완료로 표시

## 2. 배경 위치 재설정

Q&A (0)

> *배경을 반복하고 월드가 빠르게 지나가는 것처럼 보이게 하려면 배경 오브젝트의 위치를 재설정하여 완벽하게 반복되도록 조정해야 합니다.*

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

1. 새 ***private Vector3 startPos;*** 변수를 선언합니다.
2. ***Start()***에서 ***startPos*** 변수를***= transform.position;***으로 할당하여 실제 시작 위치로 설정합니다.
3. ***Update()***에서 특정 거리를 이동하면 위치를 재설정하도록 **if 문**을 작성합니다.

[Image: image]단계를 완료로 표시

## 3. 콜라이더로 배경 반복 수정

Q&A (0)

> *배경이 몇 초마다 반복되지만, 전환이 매우 어색해 보입니다. 몇 가지 새로운 변수를 사용하여 배경 루프를 완벽하고 매끄럽게 만들어야 합니다.*

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

1. **배경**에 **Box Collider** 컴포넌트를 추가합니다.
2. 새 ***private float repeatWidth*** 변수를 선언합니다.
3. ***Start()***에서 **박스 콜라이더**의 너비를 2로 나눈 값을 가져옵니다.
4. ***repeatWidth*** 변수를 **repeat 함수**에 통합합니다.

[Image: image]단계를 완료로 표시

## 4. 새 게임 오버 트리거 추가

Q&A (0)

> *플레이어가 장애물과 충돌하면 게임을 멈추는 'Game Over' 상태를 트리거해야 합니다.  그렇게 하려면 플레이어가 충돌하는 모든 게임 오브젝트에 레이블을 지정하고 식별해야 합니다.*

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

1. 인스펙터에서 Ground 태그를 **Ground**에 추가하고 Obstacle 태그를 **Obstacle 프리팹**에 추가합니다.
2. PlayerController에서 새 ***public bool gameOver;***를 선언합니다.
3. ***OnCollisionEnter***에서 **if-else 문**을 추가하여 플레이어가 Ground나 Obstacle과 충돌했는지 테스트합니다.
4. 플레이어가 Ground와 충돌했다면 ***isOnGround = true***로 설정하고 Obstacle과 충돌했다면 ***gameOver = true***로 설정합니다.

[Image: image]단계를 완료로 표시

## 5. gameOver 시 MoveLeft 중지

Q&A (0)

> *작동하는 것처럼 보이는 gameOver 부울을 추가했지만,  플레이어가 장애물과 충돌해도 배경과 오브젝트가 계속해서 움직입니다. MoveLeft 스크립트는 PlayerController와 커뮤니케이션하고, 플레이어가 gameOver를 트리거하면 멈추어야 합니다.*

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

1. **MoveLeft.cs**에서 새 ***private PlayerController playerControllerScript;***를 선언합니다.
2. ***Start()***에서 **Player**를 찾고 PlayerController 컴포넌트를 가져와서 변수를 초기화합니다.
3. 게임이 종료되지 않았음을 확인하는 **if 문**에서 **Translate 메서드**를 래핑합니다.

[Image: image]단계를 완료로 표시

## 6. gameOver 시 장애물 생성 중지

Q&A (0)

> *gameOver == true일 때 배경과 장애물이 움직이지 않지만, 생성 관리자는 계속해서 장애물을 생성하게 됩니다. 생성 관리자 스크립트와 커뮤니케이션하고 게임이 종료되면 중지되도록 명령해야 합니다.*

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

1. **SpawnManager.cs**에서 MoveLeft.cs에서 사용한 것과 같은 방식으로 **playerControllerScript**에 대한 레퍼런스를 가져옵니다.
2. ***gameOver*** ***== false***인 경우에만 오브젝트를 인스턴스화하는 조건을 추가합니다.

[Image: image]단계를 완료로 표시

## 7. 경계를 벗어나는 장애물 파괴

Q&A (0)

> *2단원의 동물들처럼 경계를 벗어나는 모든 장애물을 파괴해야 합니다. 장애물을 파괴하지 않으면 장애물이 끝도 없이 멀리 이동할 것입니다.*

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

1. **MoveLeft**의 ***Update()***에서 위치가 ***leftBound*** 변수보다 작은 경우 장애물을 **파괴**하는 if 문을 작성합니다.
2. 코드의 **가독성**을 높이기 위해 필요한 경우 **주석**을 추가합니다.

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

새 기능

- 매끄러운 배경 반복
- 플레이어가 장애물에 충돌했을 때 배경 중지
- 플레이어가 장애물에 충돌했을 때 장애물 생성 중지
- 화면을 벗어난 장애물 파괴

새로운 개념 및 기술:

- 배경 반복
- 콜라이더 너비 가져오기
- 스크립트 커뮤니케이션
- Equal to (==) 연산자
- 태그
- CompareTag()

다음 수업:

- 캐릭터의 내부는 잘 만들어졌지만 겉모습은 약간 딱딱해 보이므로, 애니메이션을 적용해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
