[Image: image]

# 4.1강 - 시점 설정

Tutorial

Beginner

+10XP

60 mins

1

(143)

Unity Technologies

[Image: 4.1강 - 시점 설정]SummarySkills

**개요:**

먼저 새 프로토타입을 만들고 시작 파일을 다운로드합니다. 아름다운 섬과 하늘, 파티클 효과 등 다양한 에셋이 있으며, 모두 커스터마이즈할 수 있습니다. 이제 플레이어가 섬을 중심으로 완벽한 반경에서 카메라를 회전시킬 수 있도록 하여 씬의 멋진 모습을 표시할 수 있습니다. 플레이어는 구체로 표현되며, 세밀한 텍스처로 래핑되어 있습니다. 마지막으로, 플레이어에게 힘을 추가하여 플레이어가 카메라 방향의 앞뒤로 이동하도록 구현해 보겠습니다.

**프로젝트 결과:**

플레이어가 수평 이동을 입력하면 카메라는 섬 중앙의 초점을 중심으로 균일하게 회전합니다. 플레이어는 텍스처가 적용된 구체를 제어하고 앞서 언급한 초점 방향의 앞뒤로 움직입니다.

Resources

- [Prototype 4 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210507/c8291200-b024-4de8-8c86-2bfd0f323be3/Prototype%204%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949682041)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 프로젝트 생성 및 씬 열기

Q&A (0)

> *이전에 했던 작업인데, 다시 진행해 보겠습니다. 먼저 새 프로젝트를 시작하고 시작 파일을 임포트해야 합니다.*

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

1. **Unity Hub**를 열고 올바른 Unity 버전의 교육 과정 디렉토리에 빈 Prototype 4 프로젝트를 생성합니다.
방법이 기억나지 않는 경우 [1.1강 - 1단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cb7a1acedbc2a10b7261d15)의 지침을 참조합니다.
2. [Prototype 4 Starter Files](https://connect-prd-cdn.unity.com/20210507/c8291200-b024-4de8-8c86-2bfd0f323be3/Prototype%204%20-%20Starter%20Files.zip?_ga=2.33909089.1186801097.1620052249-59568313.1601905412)를 클릭하여 다운로드하고 압축된 폴더의 **압축을 해제**한 후 .unitypackage를 프로젝트로 **임포트**합니다.
방법이 기억나지 않는 경우 [1.1강 - 2단계](https://learn.unity.com/tutorial/set-up-your-first-project-in-unity?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f&projectId=5caccdfbedbc2a3cef0efe63#5cca0230edbc2a635ca5d6d2)의 지침을 참조합니다.
3. **Prototype 4 씬**을 열고 저장하지 않은 채로 **Sample Scene**을 삭제합니다.
4. **Run**을 클릭하여 **파티클 효과**를 확인합니다.

단계를 완료로 표시

## 2. 플레이어 설정 및 텍스처 추가

Q&A (0)

> *게임을 플레이할 수 있는 섬이 준비되었으니, 이제 플레이어가 제어하고 굴릴 구체가 필요합니다.*

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

1. **계층 구조**에서 *3D Object > **Sphere*****를 생성**합니다.
2. 이름을 Player로 변경하고, **위치**를 재설정하고 XYZ **스케일**을 1.5로 확장합니다.
3. **Rigidbody** 컴포넌트를 **플레이어**에 추가합니다.
4. *Library > Textures*에서 **텍스처**를 **구체**로 드래그합니다.

단계를 완료로 표시

## 3. 카메라 초점 생성

Q&A (0)

> *카메라가 게임 주위를 영화처럼 사실적으로 부드럽게 회전하도록 하려면 초점을 사용하여 섬 중앙에 카메라를 고정해야 합니다.*

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

1. 새로운 **빈 오브젝트**를 생성하고 이름을 'Focal Point'로 변경합니다.
2. 위치를 원점(0, 0, 0)으로 재설정하고, Camera를 **자식 오브젝트**로 만듭니다.
3. 새 Scripts 폴더를 생성하고, 그 안에 RotateCamera 스크립트를 새로 만듭니다.
4. RotateCamera 스크립트를 **Focal Point**에 **연결**합니다.

단계를 완료로 표시

## 4. 사용자 입력으로 초점 회전

Q&A (0)

> *이제 카메라를 초점에 연결했으니, 플레이어가 수평 입력을 통해 섬 주위로 초점과 카메라 자식 오브젝트를 회전할 수 있어야 합니다.*

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

1. ***rotationSpeed***와 ***horizontalInput***을 기반으로 카메라를 회전시키는 코드를 작성합니다.
2. 원하는 속도에 맞춰 ***rotation speed*** 값을 조정합니다.

[Image: image]단계를 완료로 표시

## 5. 플레이어에 전방을 향하는 힘 추가

Q&A (0)

> *카메라가 섬 주변을 완벽하게 회전하고 있으니, 이제 플레이어를 움직여야 합니다.*

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

1. 새 'PlayerController' 스크립트를 생성하고 **Player**에 적용하고 엽니다.
2. 새 ***public float speed*** 변수를 선언하고 초기화합니다.
3. 새 ***private Rigidbody playerRb*** 변수를 선언하고 ***Start()***에서 초기화합니다.
4. ***Update()***에서 '**Vertical**' 입력을 기반으로 새 ***forwardInput*** 변수를 선언합니다.
5. ***forwardInput***을 기반으로 플레이어를 앞으로 움직이는 **AddForce()** 메서드를 호출합니다.

[Image: image]단계를 완료로 표시

## 6. 초점 방향으로 이동

Q&A (0)

> *이제 구체가 굴러가지만, 전방 또는 후방으로만 움직일 수 있습니다. 구체는 카메라와 초점 방향으로 움직여야 합니다.*

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

1. 새 ***private GameObject focalPoint;***를 선언하고 ***Start()***에서 *focalPoint = GameObject.Find("Focal Point");*와 같이 초기화합니다.
2. ***AddForce*** 호출에서 ***Vector3.forward***를 ***focalPoint.transform.forward***로 바꿉니다.

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

새로운 기능:

- 수평 입력을 기반으로 섬 주위를 회전하는 카메라
- 수직 입력을 기반으로 카메라 방향으로 구르는 플레이어

새로운 개념 및 기술**:**

- 텍스처 래핑
- 카메라를 자식 오브젝트로 지정
- 글로벌 좌표 및 로컬 좌표
- 다른 오브젝트의 방향 가져오기

다음 수업**:**

- 다음 수업에서는 게임에 플레이어를 추적하는 적을 추가해 게임을 더 어렵게 만들어 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
