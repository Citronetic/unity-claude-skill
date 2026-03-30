[Image: image]

# 3.1강 - 점프력

Tutorial

Beginner

+10XP

90 mins

3

(222)

Unity Technologies

[Image: 3.1강 - 점프력]SummarySkills

**개요:**

이 수업의 목표는 이 프로토타입에 활용할 기본 게임플레이를 설정하는 것입니다. 먼저 새로운 Unity 프로젝트를 만들고 시작용 파일을 임포트합니다. 그런 다음 아름다운 배경과 플레이어가 제어할 캐릭터를 선택하고, 스페이스바를 누르면 캐릭터가 점프할 수 있도록 만듭니다. 플레이어가 피해야 할 장애물을 선택하고, 그러한 장애물을 일정한 시간 간격으로 플레이어의 경로에 배치하는 생성 관리자를 제작합니다.

**프로젝트 결과:**

원하는 캐릭터, 배경, 장애물을 설정합니다. 화면 가장자리에서는 장애물이 생성되어 플레이어의 경로를 막으며, 플레이어는 스페이스바를 눌러 캐릭터가 점프하도록 할 수 있습니다.

Resources

- [Prototype 3 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210507/12fe5762-ea5d-48ce-aff7-71c3dd0ec6a0/Prototype%203%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949497985)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 프로토타입 열기 및 배경 변경

Q&A (0)

> *우선 새 프로젝트를 설정하고, 시작 파일을 임포트한 후 게임의 배경을 선택해야 합니다.*

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

1. **Unity Hub**를 열고 올바른 Unity 버전의 교육 과정 디렉토리에 빈 Prototype 3 프로젝트를 생성합니다.
방법이 기억나지 않는 경우 [1.1강 - 1단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cb7a1acedbc2a10b7261d15)의 지침을 참조합니다.
2. [Prototype 3 Starter Files](https://connect-prd-cdn.unity.com/20210507/12fe5762-ea5d-48ce-aff7-71c3dd0ec6a0/Prototype%203%20-%20Starter%20Files.zip?_ga=2.193866605.1186801097.1620052249-59568313.1601905412)를 클릭하여 다운로드하고, 압축된 폴더의 **압축을 해제**한 후 .unitypackage를 프로젝트로 **임포트**합니다.
방법이 기억나지 않는 경우 [1.1강 - 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)의 지침을 참조합니다.
3. Prototype 3 씬을 열고 **SampleScene**을 저장하지 않고 **삭제**합니다.
4. 계층 구조에서 **Background** 오브젝트를 선택하고, **Sprite Renderer** *컴포넌트 > Sprite에서 _City, _Nature 또는 _Town 이미지*를 선택합니다.

단계를 완료로 표시

## 2. 플레이어 캐릭터 선택 및 설정

Q&A (0)

> *프로젝트를 시작하고 배경을 선택했으니, 이제 플레이어가 제어할 캐릭터를 설정해야 합니다.*

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

1. *Course Library > Characters*에서 캐릭터를 계층 구조로 **드래그**하고 캐릭터의 **이름**을 Player로 **변경**한 다음, Y 축으로 **회전**하여 오른쪽을 향하도록 합니다.
2. **Rigidbody** 컴포넌트를 추가합니다.
3. **Box Collider**를 추가하고, 콜라이더 경계를 **편집**합니다.
4. Assets에 새 Scripts 폴더를 만들고,  내부에 PlayerController 스크립트를 만들어 플레이어에 **연결**합니다.

단계를 완료로 표시

## 3. 게임 시작 시 플레이어의 점프 동작 구현

Q&A (0)

> *지금까지는 게임 오브젝트나 Transform 컴포넌트 전체에 대해서만 메서드를 호출했습니다. 플레이어의 힘과 중력을 더욱 세세하게 제어하려면 플레이어의 Rigidbody 컴포넌트에서 메서드를 호출해야 합니다.*

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

1. **PlayerController.cs**에서 새 ***private Rigidbody playerRb;*** 변수를 선언합니다.
2. ***Start()***에서 ***playerRb = GetComponent<Rigidbody>();***를 초기화합니다.
3. ***Start()***에서 AddForce 메서드를 사용하여 플레이어가 게임을 시작할 때 점프하도록 만듭니다.

[Image: image]단계를 완료로 표시

## 4. 스페이스바를 누르면 플레이어가 점프하도록 만들기

Q&A (0)

> *플레이어가 게임 시작 시 점프하는 것이 아니라, 스페이스바를 누를 때만 점프하도록 구현해야 합니다.*

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

1. **Update()**에서 스페이스바를 눌렀는지 확인하는 **if-then 문**을 추가합니다.
2. Start()에서 AddForce 코드를 **잘라내어 if 문에 붙여 넣습니다**.
3. ***ForceMode.Impulse*** 파라미터를 ***AddForce*** 호출에 추가하고 힘 멀티플라이어 값을 **줄입니다**.

[Image: image]단계를 완료로 표시

## 5. 점프력 및 중력 조정

Q&A (0)

> *플레이어가 깔끔하게 점프하도록 점프력과 씬의 중력, 캐릭터의 질량을 조정해야 합니다.*

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

1. 하드 코딩된 값을 새 ***public float jumpForce*** 변수로 **변경**합니다.
2. 새 ***public float gravityModifier*** 변수를 추가하고 ***Start()***에 ***Physics.gravity *= gravityModifier;***를 추가합니다.
3. 인스펙터에서 ***gravityModifier**,**jumpForce***, **Rigibody** 질량 값을 조정하여 게임에 재미를 더합니다.

[Image: image]단계를 완료로 표시

## 6. 플레이어의 2단 점프 방지

Q&A (0)

> *눈치채셨겠지만, 플레이어가 스페이스바를 연속으로 누르면 캐릭터가 하늘로 솟아오를 수 있습니다. 점프를 악용하는 것을 막고 점프가 더욱 사실적으로 보이도록 만들려면 플레이어가 점프하기 전에 바닥에 닿아 있는지 확인하는 if 문을 사용해야 합니다.*

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

1. 새***public bool isOnGround***변수를 추가하고 값을***true***로 설정합니다.
2. 플레이어가 점프하도록 하는 if 문에서 ***isOnGround = false***로 설정하고 **테스트**합니다.
3. **if 문**에 ***&& isOnGround*** 조건을 추가합니다.
4. 새 ***void OnCollisionEnter*** 메서드를 추가하고 메서드에서 ***isOnGround = true***로 설정한 다음 **테스트
합니다.**

[Image: image]단계를 완료로 표시

## 7. 장애물을 만들고 왼쪽으로 옮기기

Q&A (0)

> *플레이어를 공중으로 점프하도록 구현했으니, 이제 점프해서 넘어갈 장애물을 만들어야 합니다. 몇 가지 익숙한 코드를 사용하여 장애물을 인스턴스화하고 플레이어의 경로에 장애물을 배치해 보겠습니다.*

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

1. *Course Library > Obstacles*에서 장애물을 추가하고 장애물의 이름을 Obstacle로 변경한 다음,  장애물을 생성되어야 하는 위치에 **배치**합니다.
2. **Rigidbody** 컴포넌트와 **Box Collider** 컴포넌트를 적용하고 콜라이더 경계를 장애물에 맞게 **편집**합니다.
3. 새 Prefabs 폴더를 만들고 드래그하여 새 **Original Prefab**을 만듭니다.
4. 새 MoveLeft 스크립트를 만들고 장애물에 스크립트를 **적용**한 다음 **엽니다**.
5. MoveLeft.cs에서 속도 변수에 따라 장애물을 왼쪽으로 **이동**시키는 코드를 작성합니다.
6. MoveLeft 스크립트를 **배경**에 추가합니다.

[Image: image]단계를 완료로 표시

## 8. 생성 관리자 만들기

Q&A (0)

> *지난 프로젝트와 유사하게 장애물 프리팹을 인스턴스화할 빈 오브젝트 생성 관리자를 만들어야 합니다.*

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

1. 빈 오브젝트를 새로 만든 다음  Spawn Manager라는 이름을 붙이고, 새로운 **SpawnManager.cs** 스크립트를 적용합니다.
2. **SpawnManager.cs**에서 ***public GameObject obstaclePrefab;***을 선언하고 인스펙터에서 새 변수에 프리팹을 **할당**합니다.
3. 생성 위치에서 새 ***private Vector3 spawnPos***를 선언합니다.
4. ***Start()***에서 새 장애물 프리팹을 **인스턴스화**하고 씬에서 프리팹을 **삭제**한 다음 테스트합니다.

[Image: image]단계를 완료로 표시

## 9. 일정 기간별로 장애물 생성

Q&A (0)

> *생성 관리자는 시작할 때 프리팹을 인스턴스화하지만, 타이머를 기반으로 장애물을 생성하려면 새 함수를 작성하고 InvokeRepeating을 사용해야 합니다. 마지막으로 캐릭터의 리지드바디가 넘어지지 않도록 수정해야 합니다.*

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

1. 새 ***void SpawnObstacle*** 메서드를 생성하고 **Instantiate** 호출을 메서드 내부로 옮깁니다.
2. ***startDelay***와 ***repeatRate***에 대한 새 **플로트 변수**를 생성합니다.
3. ***InvokeRepeating()*** 메서드를 사용하여 장애물이 일정한 **기간**을 두고 생성되도록 합니다.
4. Player의 Rigidbody 컴포넌트에서 **Constraints**를 확장하고 Y 위치를 제외한 모든 값을 **고정**합니다.

[Image: image]단계를 완료로 표시

## 10. 수업 요약

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

- 스페이스바를 누를 때 플레이어가 점프
- 플레이어의 2단 점프 방지
- 장애물과 배경을 왼쪽으로 움직이기
- 간격을 두고 장애물 생성

주요 개념 및 기술

- GetComponent
- ForceMode.Impulse
- Physics.Gravity
- Rigidbody 제약
- Rigidbody 변수
- 부울
- Multiply/Assign("*) 연산자
- And(&&) 연산자
- OnCollisionEnter()

다음 수업

- 배경을 왼쪽으로 이동시켜서 발생한 어색한 효과를 수정하기 위해 코드를 사용하여 배경이 계속 스크롤되도록 만들어 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
