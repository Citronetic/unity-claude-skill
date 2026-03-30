[Image: image]

# 1.1강 - 3D 엔진 시작

Tutorial

Beginner

+10XP

80 mins

7

(664)

Unity Technologies

[Image: 1.1강 - 3D 엔진 시작]Summary

**개요:**

이 수업에서는 Unity Hub에서 첫 번째 게임 프로젝트를 만들어 보겠습니다. 플레이어가 운전할 차량 및 부딪히거나 피할 장애물을 선택하고 위치를 지정합니다. 또한 플레이어가 씬을 완전히 볼 수 있도록 카메라를 설정합니다. 이 과정을 통해 Unity 에디터에서 이동하는 방법을 배우고 3D 공간 내에서의 움직임에 익숙해질 수 있습니다. 마지막으로, Unity 에디터의 창 레이아웃을 커스터마이즈합니다.

**프로젝트 결과:**

도로 위에 차량과 장애물을 배치하고 정확히 차량 뒤쪽에 카메라를 설정합니다. 또한 편집에 완벽하게 최적화된 커스텀 Unity 레이아웃을 새롭게 배치하게 됩니다.

Resources

- [Prototype 1 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210923/c709e76b-3e93-4140-8675-f694b9f04399/Prototype%201%20-%20Starter%20Files.zip?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930895482)

Languages available:

한국어English日本語한국어한국어

## 1. 교육 과정 폴더 및 새 프로젝트 만들기

Q&A (0)

> 우선 모든 교육 과정 프로젝트를 포함할 폴더를 생성한 다음, 그 안에 새로운 Unity 프로젝트 Prototype 1을 생성해야 합니다.

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

1. **바탕 화면**이나 기억하기 쉬운 다른 위치에서 *오른쪽 클릭하여 **새 폴더***를 만든 후 "Create with Code"로 이름을 지정합니다.
2. **Unity Hub**를 열고 왼쪽 사이드바에서 **프로젝트**탭을 선택합니다.
3. **새로 만들기**를 선택하여 지원되는 Unity 버전(2018.4LTS, 2019.4LTS 또는 2020.3LTS)을 사용하는 새 프로젝트를 생성합니다.
4. **3D**템플릿을 선택하고 프로젝트 이름은 "Prototype 1"로, 저장 위치는 새로운 "**Create with Code**" 폴더로 지정합니다.
5. **프로젝트 생성**을 선택한 다음, Unity에서 새 프로젝트가 열릴 때까지 기다립니다.

단계를 완료로 표시

## 2. 에셋 임포트 및 Prototype 1 열기

Q&A (0)

> 빈 프로젝트를 열었으면 Prototype 1 에셋을 임포트하고 씬을 열어야 합니다.

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

1. [Prototype 1 Starter Files](https://connect-prd-cdn.unity.com/20210507/6c595e73-affa-42f7-ae53-9d7e33e7247a/Prototype%201%20-%20Starter%20Files.zip?_ga=2.24002682.1186801097.1620052249-59568313.1601905412)를 클릭하여 다운로드한 후 압축된 폴더의 **압축을 풉니다**.
**Windows**: 파일을 오른쪽 클릭하여 압축 풀기를 선택합니다.
**Mac**: 파일을 더블 클릭합니다.
2. Unity 상단 메뉴에서 **Assets** > **Import** **Package** >**Custom Package**를 선택한 후 압축을 해제한 폴더로 이동하여 Prototype-1_Starter-Files.unitypackage 파일을 선택합니다.
3. **Import Unity Package**창이 표시되면 **Import**를 선택하고 에셋이 임포트되기를 기다립니다.
4. **프로젝트(Project)**창에서 *Assets > Scenes >***Prototype 1 씬**을 더블 클릭하여 엽니다.
5. **SampleScene**을 저장하지 않고 삭제합니다.
6. **오른쪽 클릭한 상태에서 드래그**하여 도로의 시작 부분을 살펴봅니다.

단계를 완료로 표시

## 3. 씬에 차량 추가

Q&A (0)

> 주행 시뮬레이터를 제작하고 있으므로 차량을 씬에 추가해야 합니다.

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

1. **프로젝트 창**에서 *Assets > Course Library > Vehicles*를 연 후 차량을 **계층 구조**로 드래그합니다.
2. **오른쪽 클릭한 상태에서 WASD 키를 사용해** 차량으로 이동한 후 차량 주변으로 회전합니다.
3. 차량을 선택한 상태에서 씬(Scene) 뷰에 마우스 커서를 두고 **F 키를 눌러** 초점을 맞춘 후
4. **스크롤 휠**을 사용하여 확대 및 축소하거나 **스크롤 휠을 눌러** 이동합니다.
5. **Alt 키를 누른 채 왼쪽 클릭**하여 초점 주위로 회전하거나 **Alt 키를 누른 채 오른쪽 클릭**하여 확대 및 축소합니다.
6. 문제가 발생할 경우, **Ctrl/Cmd+Z**를 눌러 문제가 해결될 때까지 실행 취소합니다.

단계를 완료로 표시

## 4. 장애물 추가 및 위치 조정

Q&A (0)

> 게임에 필요한 다음 오브젝트는 장애물입니다. 장애물을 선택하여 차량 앞에 배치해야 합니다.

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

1. *Course Library > Obstacles*로 이동하고 **장애물을** **씬 뷰**로 직접 드래그합니다.
2. 장애물의 인스펙터(Inspector)에서 Transform 컴포넌트의 오른쪽 상단에 있는 추가 옵션 버튼을 클릭한 후 ***Reset Position**을 클릭합니다.*
**참고**: 추가 옵션 버튼은 Unity 버전에 따라 세로로 있는 3개의 점이나 기어 아이콘으로 표시될 수 있습니다.
3. **인스펙터**에서 **XYZ 위치**를 **x=0, y=0,** **z=25**로 변경합니다.
4. 계층 구조에서 *오른쪽 클릭 후 **Rename***을 선택하여 두 오브젝트 이름을 "Vehicle" 및 "Obstacle"로 변경합니다.

단계를 완료로 표시

## 5. 카메라 배치 및 게임 실행

Q&A (0)

> 차량과 장애물을 설정했으므로 게임을 실행하고 카메라를 통해 씬을 살펴보겠습니다.

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

1. 계층 구조에서 **Camera**를 선택한 후 **F 키를 눌러** 초점을 맞춥니다.
2. **플레이 버튼**을 눌러 게임을 실행한 후 플레이 버튼을 다시 눌러 **중지**합니다.

단계를 완료로 표시

## 6. 차량 뒤로 카메라 이동

Q&A (0)

> 플레이어가 게임을 제대로 볼 수 있도록 차량 뒤 적절한 지점에 카메라의 위치를 지정하고 각도를 조정해야 합니다.

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

1. **이동 툴**과**회전 툴**을 사용하여 차량 뒤에서 아래로 내려다보도록 카메라를 이동합니다.
2. **Ctrl/Cmd** 키를 누른 채로 카메라 전체를 이동할 수 있습니다.

단계를 완료로 표시

## 7. 인터페이스 레이아웃 커스터마이즈

Q&A (0)

> 마지막으로, 프로젝트를 편집하는 데 적합하도록 Unity 에디터 레이아웃을 커스터마이즈해야 합니다.

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

1. 오른쪽 상단에서 레이아웃을 "Default"에서 "**Tall**"로 변경합니다.
2. **게임(Game) 뷰**를 씬 뷰 아래로 옮깁니다.
3. **프로젝트**창에서 오른쪽 상단의 작은 드롭다운 메뉴를 클릭하고 "**One Column Layout"**을 선택합니다.
4. 레이아웃 드롭다운에서 **새 레이아웃을 저장**하고 "My Layout"

단계를 완료로 표시

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

**새 기능**

- 임포트된 에셋을 사용하여 설정된 프로젝트
- 도로 시작 지점에 배치된 차량
- 차량 앞에 배치된 장애물
- 차량 뒤에 배치된 카메라

**새로운 개념 및 기술**

- 새 프로젝트 생성
- 에셋 임포트
- 씬에 오브젝트 추가
- 게임 뷰와 씬 뷰 비교
- 프로젝트 창, 계층 창, 인스펙터 창
- 3D 공간 이동
- 이동 툴 및 회전 툴
- 레이아웃 커스터마이즈

**다음 수업**

- 차량을 움직이고 씬의 다른 오브젝트와 충돌하도록 C# 으로 첫 번째 코드 라인을 작성하여 인터랙션을 만들어 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
