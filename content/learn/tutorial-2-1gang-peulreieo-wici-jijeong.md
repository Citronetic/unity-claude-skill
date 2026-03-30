[Image: image]

# 2.1강 - 플레이어 위치 지정

Tutorial

Beginner

+10XP

60 mins

4

(306)

Unity Technologies

[Image: 2.1강 - 플레이어 위치 지정]SummarySkills

**개요:**

이 단원에서는 먼저 두 번째 프로토타입이 될 새 프로젝트를 생성하고 기본 플레이어 동작을 구현합니다. 우선 원하는 캐릭터, 상호 작용할 동물 유형, 해당 동물에게 줄 먹이를 선택합니다. Prototype 1에서와 마찬가지로 플레이어가 기본 좌우 이동을 할 수 있도록 구현하되, if-then 문을 사용하여 플레이어의 화면 이탈을 방지합니다.

**프로젝트 결과:**

사용자가 왼쪽 및 오른쪽 키를 누르면 플레이어가 화면에서 좌우로 움직일 수 있지만, 어느 쪽으로든 플레이 영역을 벗어날 수는 없습니다.

Resources

- [Prototype 2 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210507/bfd26de3-a68a-4a16-8cf6-8eacf2bb7f75/Prototype%202%20-%20Starter%20Files.zip?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931414732)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. Prototype 2 새 프로젝트 생성

Q&A (0)

> *가장 먼저 새 프로젝트를 생성하고 Prototype 2 시작용 파일을 임포트해야 합니다.*

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

1. **Unity Hub**를 열고 올바른 Unity 버전으로 교육 과정 디렉토리에 빈 "Prototype 2" 프로젝트를 생성합니다.
방법이 기억나지 않는 경우 [1.1강 - 1단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cb7a1acedbc2a10b7261d15)의 지침을 참조합니다.
2. [Prototype 2 시작 파일](https://connect-prd-cdn.unity.com/20210507/bfd26de3-a68a-4a16-8cf6-8eacf2bb7f75/Prototype%202%20-%20Starter%20Files.zip?_ga=2.29238268.1186801097.1620052249-59568313.1601905412)을 클릭하여 다운로드하고 압축된 폴더의 **압축을 해제**한 후 .unitypackage를 프로젝트로 **임포트**합니다.
방법이 기억나지 않는 경우 [1.1강 - 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)의 지침을 참조합니다.
3. 프로젝트 창에서 **Prototype 2**씬을 열고 SampleScene을 **삭제**합니다.
4. Unity 에디터 오른쪽 상단에서 **Layout**을 Default에서 커스텀 레이아웃으로 변경합니다.

단계를 완료로 표시

## 2. 플레이어, 동물, 먹이 추가

Q&A (0)

> *씬에 플레이어, 동물, 먹이를 포함한 모든 오브젝트의 위치를 지정해 보겠습니다.*

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

1. 필요할 경우, *Course Library > Materials*에서 여러 **머티리얼**을 Ground 오브젝트로 드래그합니다.
2. 1명의 **사람**, 3마리의 **동물**, 1개의 **먹이** 오브젝트를 계층 구조로 드래그합니다.
3. "Player" 캐릭터의 이름을 변경한 후 동물과 먹이가 보이도록 **위치를 다시 지정**합니다.
4. 위에서 쉽게 볼 수 있도록 먹이의 XYZ **스케일**을 조정합니다.

단계를 완료로 표시

## 3. 사용자의 수평 입력 받기

Q&A (0)

> *플레이어를 좌우로 이동하려면 사용자의 입력을 추적하는 변수가 필요합니다.*

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

1. **Assets** 폴더에 "Scripts" 폴더를 생성하고 그 안에 "PlayerController" 스크립트를 생성합니다.
2. 스크립트를 Player에 **연결**하고 엽니다.
3. PlayerController.cs의 맨 위에서 새로운 ***public float horizontalInput***을 선언합니다.
4. ***Update()***에서 ***horizontalInput =  Input.GetAxis("Horizontal")***을 설정한 후, 테스트하여 인스펙터에서 작동하는지 확인합니다.

[Image: image]단계를 완료로 표시

## 4. 플레이어를 좌우로 이동

Q&A (0)

> *플레이어를 좌우로 이동시키는 수평 입력을 사용해야 합니다.*

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

1. 새로운 ***public float speed = 10.0f;***를 선언합니다.
2. ***Update()***에서 ***horizontalInput*** 및 ***speed***에 따라 플레이어를 좌우로 이동시킵니다.

[Image: image]단계를 완료로 표시

## 5. 플레이어 화면 이탈 방지

Q&A (0)

> *if-then 문을 사용하여 플레이어가 화면 밖으로 이탈하지 않도록 해야 합니다.*

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

1. ***Update()***에서 플레이어의 왼쪽 X 위치가 특정 값 **미만**인지 검사하는 **if 문**을 작성합니다.
2. if 문에 플레이어의  위치를 현재 위치로 설정하되 **X 위치를 고정**합니다.

[Image: image]단계를 완료로 표시

## 6. 코드 및 변수 정리

Q&A (0)

> *오른쪽에 대해서도 이 작업을 수행한 후 코드를 정리해야 합니다.*

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

1. 화면 **오른쪽**에 대해 이 과정을 반복합니다.
2. 새 ***xRange*** 변수를 선언한 후 하드 코딩된 값을 이 변수 값으로 바꿉니다.
3. 코드에 **주석**을 추가합니다.

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

- 플레이어는 사용자가 왼쪽 및 오른쪽 키를 누르면 화면에서 좌우로 움직일 수 있습니다.
- 플레이어는 어느 쪽으로든 플레이 영역을 벗어날 수 없습니다.

새로운 개념 및 기술

- 오브젝트 스케일 조정
- If 문
- 초과/미만 연산자

다음 수업

- 먹이를 무한으로 생성하여 동물에게 던져 주는 방법을 알아보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
