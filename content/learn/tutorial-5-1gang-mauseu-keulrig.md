[Image: image]

# 5.1강 - 마우스 클릭

Tutorial

Beginner

+10XP

60 mins

3

(142)

Unity Technologies

[Image: 5.1강 - 마우스 클릭]SummarySkills

**개요:**

이제 마지막 단원입니다. 먼저 새로운 프로젝트를 만들고 시작 파일을 임포트한 후 게임의 뷰를 2D로 전환합니다. 그런 다음 플레이어가 클릭할 수 있는 타겟 오브젝트의 목록을 만듭니다. 세 개는 착한 오브젝트, 하나는 나쁜 오브젝트입니다. 이 타겟은 지도 하단의 무작위 위치에서 생성된 후 공중으로 던져집니다. 마지막으로, 플레이어가 공중으로 던져진 타겟 오브젝트를 클릭해 파괴할 수 있도록 해 보겠습니다.

**프로젝트 결과:**

착한 타겟 오브젝트 3개와 나쁜 타겟 오브젝트 1개가 화면 하단의 무작위 위치에서 생성된 후 무작위 힘과 토크가 적용되어 공중으로 날아오릅니다. 이러한 타겟은 플레이어가 타겟을 클릭하거나 타겟이 경계를 벗어나면 파괴됩니다.

Resources

- [Prototype 5 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210507/c7c2c2ce-f2f4-492e-819c-58096e11ab9f/Prototype%205%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949705712)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 프로젝트 생성 및 2D 뷰로 전환

Q&A (0)

> *이제 마지막으로 새로운 프로젝트를 만들고 시작 파일을 다운로드하여 실행할 준비를 마쳐야 합니다.*

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

1. **Unity Hub**를 열고 올바른 Unity 버전의 교육 과정 디렉토리에 빈 Prototype 5 프로젝트를 생성합니다.
방법이 기억나지 않는 경우 [1.1강 - 1단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cb7a1acedbc2a10b7261d15)의 지침을 참조합니다.
2. [Prototype 5 Starter Files](https://connect-prd-cdn.unity.com/20210507/c7c2c2ce-f2f4-492e-819c-58096e11ab9f/Prototype%205%20-%20Starter%20Files.zip?_ga=2.33909089.1186801097.1620052249-59568313.1601905412)를 클릭하여 다운로드하고 압축된 폴더의 **압축을 해제**한 후 .unitypackage를 프로젝트로 **임포트**합니다.
방법이 기억나지 않는 경우 [1.1강 - 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)의 지침을 참조합니다.
3. **Prototype 5**씬을 열고 **샘플 씬**을 저장하지 않고 삭제합니다.
4. 씬 뷰에서 **2D 아이콘**을 클릭하여 씬 뷰를 **2D**로 전환합니다.
5. (선택 사항) **배경**의 텍스처 및 색상과 **경계**의 색상을 변경합니다.

단계를 완료로 표시

## 2. 착한 타겟과 나쁜 타겟 만들기

Q&A (0)

> *게임에는 우선 수집해야 할 착한 오브젝트 3개와 피해야 할 나쁜 오브젝트 1개가 필요합니다. 이롭거나 나쁜 기준을 정하는 것은 여러분의 몫입니다.*

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

1. **Library**에서 착한 오브젝트 3개와 나쁜 오브젝트 1개를 씬으로 드래그하고, 이름을 Good 1, Good 2, Good 3, Bad 1으로 변경합니다.
2. **Rigidbody** 및 **Box Collider** 컴포넌트를 추가한 후 콜라이더가 오브젝트 주변을 적절히 둘러싸도록 합니다.
3. 새 Scripts 폴더를 생성하고, 새 Target.cs 스크립트를 그 안에 생성하고, **타겟 오브젝트**에 연결합니다.
4. 4개의 타겟을 모두 **Prefabs 폴더**로 드래그하여 원본 프리팹을 생성한 후 씬에서 **삭제**합니다.

단계를 완료로 표시

## 3. 오브젝트를 무작위로 공중에 던지기

Q&A (0)

> *동일한 스크립트를 사용하는 타겟 프리팹이 4개 있으므로, 이제 이를 무작위 힘, 토크 및 위치를 적용해 공중에 던져야 합니다.*

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

1. **Target.cs**에서 새로운 ***private Rigidbody targetRb;***를 선언하고 **Start()**에서 초기화합니다.
2. **Start()**에 **무작위 속도**를 곱하여 **상승력**을 추가합니다.
3. 무작위 **xyz 값**을 부여해 **토크**를 추가합니다.
4. 무작위**X 값**을 부여해 **위치**를 설정합니다.

[Image: image]단계를 완료로 표시

## 4. 복잡한 코드를 새 메서드로 바꾸기

Q&A (0)

> *Start() 함수를 복잡하고 판독하기 어렵게 만드는 무작위 힘, 토크 및 위치를 그대로 두는 대신, 각각을 명확하게 명명된 새로운 커스텀 메서드로 저장해 보겠습니다.*

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

1. ***minSpeed, maxSpeed, maxTorque,*** ***xRange, ySpawnPos*** 등을 새로운 private float 변수로 선언하고 초기화합니다.
2. ***Vector3 RandomForce()*** 함수를 새로 만들고 **Start()**에서 호출합니다.
3. ***float RandomTorque()*** 함수를 새로 만들고 ***Start()***에서 호출합니다.
4. ***RandomSpawnPos()*** 함수를 새로 만들고 이 함수에서 새 ***Vector3***를 반환하도록 하고 ***Start()***에서 이 함수를 호출합니다.

[Image: image]단계를 완료로 표시

## 5. 게임 관리자에서 오브젝트 목록 생성

Q&A (0)

> *다음 할 일은 이러한 오브젝트를 생성할 목록을 만드는 것입니다. 이러한 생성 기능을 위한 생성 관리자를 만드는 대신, 나중에 게임 상태도 제어할 수 있는 게임 관리자를 만들어 보겠습니다.*

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

1. 새 Game Manager **빈 오브젝트**를 만들고 새 **GameManager.cs** 스크립트를 연결한 후 엽니다.
2. 새로운 ***public List<GameObject> targets;***를 선언한 후 Game Manager 인스펙터에서 목록의 **Size**를 4로 변경하고 **프리팹**을 할당합니다.

단계를 완료로 표시

## 6. 오브젝트 생성을 위한 코루틴 만들기

Q&A (0)

> *오브젝트 프리팹 목록이 생성되었으므로, 이제 코루틴과 새로운 루프 유형을 사용하여 이를 게임에서 인스턴스화해야 합니다.*

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

1. ***private float spawnRate*** 변수를 새로 선언하고 초기화합니다.
2. 새로운 ***IEnumerator SpawnTarget ()*** 메서드를 만듭니다.
3. 새 메서드 안에 ***while(true)***를 배치하고, **1초**를 대기하고, **무작위 인덱스**를 생성하고,  무작위 **타겟**을 생성합니다.
4. **Start()**에서 ***StartCoroutine*** 메서드를 사용하여 오브젝트 생성을 시작합니다.

[Image: image]단계를 완료로 표시

## 7. 클릭과 센서를 이용한 타겟 파괴

Q&A (0)

> *타겟이 생성되고 공중에 던져지므로, 이제 플레이어는 공중으로 던져진 타겟을 클릭 한 번으로 파괴할 수 있어야 합니다. 화면 아래로 떨어지는 타겟도 파괴해야 합니다.*

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

1. **Target.cs**에서 ***private void OnMouseDown() { }*** 메서드를 새로 추가하고, 이 메서드 안에서 게임 오브젝트를 파괴합니다.
2. ***private void OnTriggerEnter(Collider other)*** 메서드를 새로 추가하고 해당 함수 안에서 게임 오브젝트를 파괴합니다.

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

- 무작위 오브젝트를 일정한 간격으로 공중에 던짐
- 오브젝트에 무작위 속도, 위치, 토크가 부여됨
- 오브젝트를 클릭하면 오브젝트가 파괴됨

새로운 개념 및 기술**:**

- 2D 뷰
- 토크 추가
- 게임 관리자
- List
- While 루프
- 마우스 이벤트

다음 수업**:**

- 몇 가지 효과를 추가하고 점수를 추적해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
