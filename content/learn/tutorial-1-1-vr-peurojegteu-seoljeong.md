[Image: image]

# 1.1 - VR 프로젝트 설정

Tutorial

Beginner

+10XP

90 mins

1

(27)

Unity Technologies

[Image: 1.1 - VR 프로젝트 설정]SummarySkills

이 수업을 마치면 크고 빈 방이 있는 새 Unity 프로젝트를 VR로 경험하게 됩니다.

이 단원은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Resources

- [Rig Simulator Keyboard Shortcuts.pdf](https://unity-connect-prd.storage.googleapis.com/20210604/28db6ca9-aba1-4ac3-a15a-24664daff3ea/Rig%20Simulator%20Keyboard%20Shortcuts.pdf?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899967)
- [Create-with-VR_2021LTS.zip](https://unity-connect-prd.storage.googleapis.com/20220831/e04bb203-c0a3-4ae3-b1f3-28c32794581d/Create-with-VR_2021LTS.zip?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899967)

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 새로운 VR 프로젝트 열기

Q&A (0)

가장 먼저 VR용으로 설정된 새 Unity 프로젝트를 생성해야 합니다.

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

**1.  VR로 창작하기 시작용 프로젝트 다운로드 및 압축 해제**

- [VR로 창작하기 시작용 프로젝트](https://connect-prd-cdn.unity.com/20220615/4e7924f6-c844-4476-9046-33286f65243e/Create-with-VR_2021LTS.zip) 파일을 클릭하여 다운로드합니다.
- Mac에서 압축 해제: 다운로드한 파일을 더블 클릭합니다.
- Windows에서 압축 해제: 다운로드한 파일을 오른쪽 클릭하고 **모두 압축 풀기**를 선택합니다.

**2.  컴퓨터에서 프로젝트 이름 변경 및 위치 지정**

- 압축 해제한 폴더 내에 있는 VR Room Project 폴더를 찾습니다.
- 원하는 경우 프로젝트 폴더의 이름을 'VR Room - [사용자 이름]'으로 변경합니다.
- 프로젝트 폴더를 컴퓨터의 로직 디렉토리(예: 바탕 화면의 Create with VR 폴더)로 옮깁니다.

**3.  VR Room 프로젝트를 Unity Hub에 추가**

- **Unity Hub**를 엽니다.
- VR Room 프로젝트를 Unity Hub의 프로젝트 목록에 추가합니다.
방법을 잘 모르는 경우, Unity Hub에 프로젝트를 추가하는 방법이 나와 있는 [튜토리얼](https://learn.unity.com/tutorial/project-setup-processes#60ed7ae4edbc2a138163c120)을 참조합니다.
- 프로젝트의 에디터 버전 옆에 경고 아이콘이 표시되더라도 걱정하지 마세요.

[Image: image]

- 컴퓨터에는 없는 특정 Unity 버전으로 프로젝트가 생성되었다는 의미일 뿐입니다. Unity 2021.3 이상의 버전을 설치했다면 프로젝트가 완벽하게 실행됩니다.

**4.  Unity 2021.3 LTS(장기 지원)에서 프로젝트 열기**

- **Editor Version** 드롭다운에서 Unity 2021.3 이상의 버전을 선택한 후 **Open with 2021.3.X**를 선택합니다.
- 에디터 버전을 변경할지 묻는 창이 표시되는 경우 **Change version**을 선택합니다.

[Image: image]

- 버전이 다른 에디터에서 프로젝트를 열고 있음을 알리는 경고가 표시되면 **Continue**를 선택합니다.

[Image: image]

- 이제 프로젝트가 Unity에서 열립니다.
- 콘솔(Console) 창에 에셋에 대한 노란색 경고 메시지가 있는 경우 이를 무시하거나 지워도 됩니다.

**5.  시작용 프로젝트의 콘텐츠를 살펴보고 일반적인 빈 프로젝트와 어떻게 다른지 확인**

- 상단 메뉴에서 **Window**> **Package Manager**를 선택합니다.
- Package Manager의 왼쪽 패널에서 다음과 같이 이 프로젝트에 설치된 패키지를 찾습니다(옆의 체크 표시 참조).

- XR Plugin Management
- XR Interaction Toolkit
- Universal RP(렌더 파이프라인)
- **참고:**프로젝트에 현재 설치된 패키지만 필터링하여 보려면 Package Manager 창의 왼쪽 상단에서 **Packages: In Project**를 선택합니다.

[Image: image]

이제 새로운 VR 시작용 프로젝트의 비어 있는 씬이 열려 어떤 패키지가 VR과 호환되는지 확인할 수 있습니다.

**관련 리소스**

- [Unity XR 플러그인 프레임워크에 대한 블로그](https://blogs.unity3d.com/kr/2020/01/24/unity-xr-platform-updates/?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899967)

단계를 완료로 표시

## 2. 시작용 씬을 열고 살펴보기

Q&A (0)

프로젝트를 실행하기 전에 VR에서 더욱 흥미롭게 경험할 수 있는 환경을 선택해야 합니다.

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

**1.  시작용 씬 이름 변경 및 열기**

- **프로젝트(Project)** 창에서 **Scenes** 폴더를 엽니다.
- 'Create-with-VR_Starter-Scene'의 이름을 '[사용자 이름] Room'으로 변경합니다.
- 이름을 변경한 씬을 더블 클릭하여 엽니다.

**2.  씬의 콘텐츠를 살펴보고 일반적인 비어 있는 씬과 어떻게 다른지 확인**

- **계층 구조(Hierarchy)**에서 **XR Rig** 오브젝트를 선택하고 XR Origin 컴포넌트를 살펴봅니다.
- **XR Rig**>**Camera Offset**>**Main Camera**를 선택하고 Tracked Pose Driver 컴포넌트를 살펴봅니다.
- **LeftHand Controller** 또는 **RightHand Controller** 오브젝트를 선택하고 XR Controller 컴포넌트를 살펴봅니다.
- **Input Action Manager** 오브젝트를 선택하고 Input Action Manager 컴포넌트를 살펴봅니다.

[Image: image]

이제 새로운 씬이 열렸습니다. 이 씬과 일반적인 Unity 씬의 차이를 만드는 요소인 컴포넌트에 대한 폭넓은 이해가 필요합니다.

**참고:**이 씬의 설정은 이 교육 과정에서 VR을 개발하는 데 필수적이기 때문에 이 시작용 프로젝트에서는 사전 설정되어 있습니다. VR 프로젝트를 직접 설정하는 방법을 알아보려면 [VR 시작용 프로젝트 새로 만들기](https://learn.unity.com/tutorial/create-a-vr-starter-project-from-scratch)(영문) 튜토리얼에서 지침을 확인하세요.

단계를 완료로 표시

## 3. 방 및 배경 추가

Q&A (0)

아무것도 없는 씬을 VR에서 탐색하기는 지루하지만, 방을 추가하면 VR을 이용할 때 약간의 재미와 더 풍부한 원근감을 느낄 수 있습니다.

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

**1.  씬에 방 추가**

- **프로젝트** 창에서 **Course Library** > **_Prefabs** > **Rooms**를 확장합니다.
- **Room_[style]** 프리팹 하나를 계층 구조로 드래그합니다.
- 계층 구조에서 **Plane** 오브젝트를 삭제합니다.

**2.  방에서 보이는 창 밖의 환경 추가**

- **Course Library** > **_Prefabs** > **Environments** 폴더를 엽니다.
- **Foreground** 오브젝트 하나와 **Background** 오브젝트 하나를 계층 구조로 드래그합니다.

**3.  방에 비치는 태양광 조정**

- **Directional Light**오브젝트의 X 및 Y 회전을 변경하여 방에 태양광이 들어오는 방향을 바꿉니다.

[Image: image]

이제 씬에는 교육 과정 라이브러리에서 가져온 방, 전경, 배경 오브젝트가 생겼으며 원하는 각도로 방에 태양광이 들어옵니다.

단계를 완료로 표시

## 4. 디바이스 시뮬레이터를 사용하여 앱 실행

Q&A (0)

**디바이스 시뮬레이터**로 씬을 테스트할 수 있습니다. 이 시뮬레이터를 사용하면 디바이스를 연결하여 실행할 필요 없이 에디터 내에서 마우스와 키보드를 사용하여 앱을 테스트할 수 있으므로 빠르게 테스트할 때 유용합니다.

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

**1.  씬에 디바이스 시뮬레이터 추가**

- 프로젝트 창에서 **Samples > XR Interaction Toolkit > [버전] > XR Device Simulator를 엽니다.**
- **XR Device Simulator** 프리팹을 계층 구조로 드래그합니다.
- **플레이** 버튼을 클릭하여 시뮬레이터를 테스트합니다**.**

**2.  키보드 및 마우스 컨트롤을 통해 테스트**

- **참고:**시뮬레이터를 효과적으로 사용하려면 클릭 가능한 스크롤 휠이 탑재된 마우스가 필요합니다.
- **카메라** 제어: 오른쪽 클릭 상태를 유지합니다.
- **왼쪽 컨트롤러** 제어: 왼쪽 Shift 키를 누르고 있거나 **T** 키로 토글합니다.
- **오른쪽 컨트롤러** 제어: 스페이스바를 누르고 있거나 **Y** 키로 토글합니다.
- 디바이스 화면 **이동**: 마우스를 움직입니다.
- 디바이스 **회전**: 마우스 가운데 버튼을 누르고 있습니다.
- 디바이스의 위치 및 회전 **초기화**: V 키를 누릅니다.
- 도움말 안내가 필요한 경우에는 [릭 시뮬레이터 단축키 관련 참고 자료](https://connect-prd-cdn.unity.com/20210604/28db6ca9-aba1-4ac3-a15a-24664daff3ea/Rig%20Simulator%20Keyboard%20Shortcuts.pdf)(영문) PDF를 다운로드합니다.

**3.  디바이스 시뮬레이터에서 제공하는 추가 컨트롤 확인**

- 계층 구조에서 **XR Device Simulator**를 선택합니다.
- XR Device Simulator 컴포넌트에서 Action 변수 하나를 더블 클릭하여 Action 에디터를 엽니다.
- Actions를 확장하여 Binding을 확인합니다.
- 왼쪽 Action Maps 패널에서 **Main** 또는 **Input Controls**를 선택하여 추가 액션 매핑을 확인합니다.

**4.  중요:  사용하지 않는 경우 디바이스 시뮬레이터 비활성화**

- Device Simulator 오브젝트를 선택한 후 인스펙터(Inspector) 창에서 비활성화합니다.
- 디바이스에서 프로젝트를 실행할 때 디바이스 시뮬레이터를 활성화하면 문제가 발생합니다.

[Image: image]

이제 디바이스 시뮬레이터를 사용하여 마우스와 키보드를 통해 방을 둘러볼 수 있습니다.

단계를 완료로 표시

## 5. Unity를 통해 VR에서 테스트

Q&A (0)

**Windows** 컴퓨터를 사용하는 경우 이 단계를 따라 디바이스에서 테스트하세요. 다른 디바이스를 사용하는 경우에는 이 단계를 건너뛰세요.

**Mac**을 사용해 개발하는 경우와 이 단계는 관련이 없습니다. 앱을 디바이스에 바로 빌드하는 경우에 테스트하는 방법은 다음 단계에서 알아보겠습니다.

Unity를 통해 디바이스에서 프로젝트를 실행하려면 적절한 개발용 플러그인을 설치해야 합니다. [OpenXR](https://www.khronos.org/openxr/)은 지원되는 VR 하드웨어 디바이스에 Unity를 연동하는 오픈 소스 API입니다. 표준화된 하나의 API를 통해 여러 디바이스에 배포할 수 있으므로 이 플러그인을 사용하는 것이 좋습니다.

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

**1.  데스크톱 테스트를 위해 OpenXR 플러그인 설치**

- 상단 메뉴에서 **Edit > Project Settings**를 선택한 후 사이드바에서 **XR Plug-in Management** 패널을 선택합니다.
- **Windows, Mac, Linux** 탭의 사용 가능한 Plug-in Providers 목록에서 **OpenXR**을 선택하여 설치합니다.

[Image: image]

**2.  인터랙션 프로필을 설정하여 경고 해결**

- OpenXR 플러그인을 추가하면 플러그인 이름 옆에 경고 또는 오류 아이콘이 표시될 수 있습니다.
경고나 오류가 없는 경우에는 아래의 3단계로 건너뛰어 Quest Link 소프트웨어를 통해 디바이스를 연결하면 됩니다.
- 경고가 있는 경우에는 경고 아이콘을 클릭하여 **OpenXR Project Validation** 창을 열면 사용 중인 디바이스의 **인터랙션 프로필**을 추가해야 한다고 알려 줍니다.
- **Edit** 버튼을 선택하여 OpenXR 설정 패널을 엽니다.

[Image: image]

- **Windows, Mac, Linux** 탭의 Interaction Profiles 목록에 **Oculus Touch Controller Profile**이 표시된 상태에서, 제공되는 모든**OpenXR** **Feature Groups**를 활성화합니다.
- Valve Index 또는 HTC Vive 등의 다른 디바이스를 사용하는 경우 해당 인터랙션 프로필을 대신 추가합니다.

[Image: image]

- 더 이상 XR Plugin Management 패널에 경고가 없어야 합니다. 경고가 있다면 선택하고 권장 단계에 따라 경고를 해결합니다.
- 경고 또는 오류 해결에 문제가 있거나 문제 해결에 도움이 필요한 경우 OpenXR 플러그인 설정이 상세히 안내된 [기술 문서](https://docs.unity3d.com/Packages/com.unity.xr.openxr@1.4/manual/index.html?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899967)를 참조합니다.

**3.  Quest Link 소프트웨어를 통한 디바이스 연결**

- 호환 케이블을 사용하여 컴퓨터에 디바이스를 연결합니다.
- Quest App이 실행되고 디바이스에서 이를 성공적으로 인식하는 상태여야 합니다.
- 아직 Quest App을 다운로드하지 않은 경우 [Link Setup 페이지](https://www.oculus.com/accessories/oculus-link/)에서 앱을 찾습니다.

[Image: image]

**4.  디바이스에서 프로젝트 테스트**

- 씬에**XR Device Simulator**가 비활성화되어 있어야 합니다. 디바이스 시뮬레이터가 활성화된 경우 헤드 추적이 작동하지 않습니다.
- Unity 에디터에서**플레이** 버튼을 선택하고 헤드셋을 착용합니다.

[Image: image]

Windows 컴퓨터에서는 이제 Unity를 통해 디바이스에서 앱을 빠르게 테스트할 수 있습니다.

단계를 완료로 표시

## 6. 앱 빌드 및 디바이스에서 실행

Q&A (0)

Quest를 사용하는 경우 이 단계를 따라 디바이스에서 앱을 빌드하세요. 다른 디바이스를 사용하는 경우에는 이 단계를 건너뛰세요.

Quest는 컴퓨터에 연결할 필요가 없는 스탠드얼론 디바이스이므로 앱을 빌드하면 컴퓨터와의 연결이 해제된 디바이스에서도 바로 테스트할 수 있습니다.

Mac 사용자라서 이전 단계를 통해 Windows Quest 소프트웨어로 앱을 테스트할 수 없는 경우에는 기본적으로 이 방법을 따라 헤드셋에서 앱을 테스트합니다.

Quest 헤드셋에 앱을 빌드하려면 Android 빌드 대상에 맞는 플러그인을 설정해야 합니다.

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

**1.  Android 빌드용 OpenXR 설치**

- XR Plug-in Management 설정에서 **Android** 탭을 선택한 다음 사용 가능한 Plug-in Providers 목록에서 **OpenXR**을 선택하여 해당 플러그인을 설치합니다.
**참고:** Android 익스포트 모듈을 설치한 경우 Android 탭만 있습니다.
- Android 탭에 **OpenXR** 옵션이 표시되지 않는 경우 먼저 Desktop 탭으로 돌아가 Desktop 탭에서 OpenXR을 선택한 다음 Android 탭으로 돌아옵니다.

[Image: image]

**2.  인터랙션 프로필을 설정하여 경고 해결**

- 표시되는 새로운 경고 또는 오류 아이콘을 클릭하여 **OpenXR Project Validation** 창을 열면 **인터랙션 프로필**을 추가해야 한다는 메시지가 다시 표시됩니다.
- **Edit** 버튼을 선택하여 OpenXR 설정 패널을 엽니다.

[Image: image]

- **Android** 탭에서 **+**버튼을 선택하여 디바이스에 해당하는 프로필을 추가한 다음 OpenXR Feature Groups의 항목을 모두 활성화합니다.

[Image: image]

- 오류 또는 경고가 추가로 표시되면 해당 오류 또는 경고 아이콘을 클릭하여 해결합니다.

[Image: image]

**3.  씬 빌드 준비**

- 씬에 XR Device Simulator가 비활성화되어 있어야 합니다. 디바이스 시뮬레이터가 활성화된 경우 헤드 추적이 작동하지 않습니다.
- 상단 메뉴에서 **File** > **Build Settings를 클릭합니다.**
- **Add Open Scenes**를 클릭하여 씬을 추가합니다.

**4.  Android 빌드 플랫폼으로 전환**

- **Platform** 섹션에서 **Android**를 선택합니다.
- **Switch Platform**을 클릭하고 프로젝트가 Android 플랫폼으로 전환되기를 기다립니다.
- **참고:**Unity 에디터를 설치하는 중에 Android 익스포트 모듈을 성공적으로 설치한 경우 Android만이 빌드 가능한 대상으로 표시됩니다.

**5.  디바이스를 빌드 대상으로 선택**

- VR 디바이스가 켜져 있고 연결되어 있어야 합니다.
- **Run Device** 드롭다운 옆에 있는 **Refresh**를 클릭한 다음 VR 디바이스를 선택합니다.
- **참고**: 디바이스가 목록에 표시되지 않는 경우 디바이스를 착용해 봅니다. 그러면 디바이스에 **USB 디버깅을 허용**하라는 메시지가 표시될 수 있습니다. 디바이스가 목록에 여전히 표시되지 않으면 디바이스를 재시작하여 디바이스가 개발자 모드에 있는지 확인하거나 Unity를 재시작합니다.

**6.  프로젝트를 빌드하여 디바이스에서 실행**

- **Build and Run**을 클릭합니다.
- 위치를 선택하라는 메시지가 표시되면 새로운 **'**Builds**'** 폴더를 생성한 후 프로젝트를 '[사용자 이름] - VR Room - 1.1'로 **저장**합니다.
- **참고:**앱을 처음으로 빌드하는 경우 컴파일에 몇 분이 소요될 수 있습니다.

[Image: image]

이제 컴퓨터에 유선으로 연결하지 않은 상태로도 디바이스에서 앱을 테스트할 수 있습니다.

**참고:**  앱은 App Library의 Unknown Sources 섹션에 있는 디바이스에 자동 저장됩니다. 앱을 찾으려면 [알려지지 않은 소스의 앱을 허용](https://support.oculus.com/632287656943461/)하는 단계를 따라야 할 수도 있습니다.

**문제 해결 팁**

- 앱이 실행되지만 시야각(FOV) 전체가 확보되지 않는 경우 플러그인 문제일 수 있습니다.
- 앱이 실행되지만 헤드에 따라 씬 전체가 움직이는 경우 디바이스 시뮬레이터가 활성화된 상태이거나 Input Action Manager를 올바르게 설정하지 않은 것이 원인일 수 있습니다.

단계를 완료로 표시선택 단계

## 7. 기타 OpenXR 호환 디바이스에서 테스트

Q&A (0)

Valve Index, HTC Vive, Windows Mixed Reality 헤드셋 등의 다른 OpenXR 호환 디바이스를 사용하는 경우 이 단계를 따라 디바이스에서 테스트하세요. 다른 디바이스를 사용하는 경우에는 이 단계를 건너뛰세요.
해당되는 디바이스에서 프로젝트를 테스트하려면 OpenXR 플러그인을 설치하고 특정 디바이스에 맞는 여러 기능을 활성화해야 합니다.

**1.  디바이스에 필요한 OpenXR 플러그인 설정**

- [OpenXR 매뉴얼 페이지](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/index.html?ampDeviceId=e7259e01-5fc9-47c2-9708-55b6bda8a57c&ampSessionId=1774844489202&ampTimestamp=1774930899967)의 지침을 따라 OpenXR 플러그인을 설치하고, XR Plugin Management에서 활성화하고, 특정 디바이스에 맞게 설정합니다.

**2.  SteamVR 앱을 통해 디바이스 연결**

- 호환 케이블을 사용하여 컴퓨터에 디바이스를 연결합니다.
- SteamVR 앱이 실행되고 디바이스에서 이를 성공적으로 인식하는지 확인합니다.

**3.  디바이스에서 프로젝트 테스트**

- 씬에**Device Simulator**가 비활성화되어 있어야 합니다. 디바이스 시뮬레이터가 활성화된 경우 헤드 추적이 작동하지 않습니다.
- Unity 에디터에서 **플레이** 버튼을 선택하고 헤드셋을 착용합니다.

이제 SteamVR을 통해 헤드셋에서 앱을 빠르게 테스트할 수 있습니다.

단계를 완료로 표시

## 8. 요약

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

- 프로젝트 설정
- 씬에 방 설정
- 디바이스 시뮬레이터를 이용하여 테스트
- 디바이스에서 실행

**새로운 개념 및 기술**

- 다양한 하드웨어 유형별 파이프라인
- VR 개발에 필요한 패키지
- VR 씬과 일반적인 Unity 씬의 차이
- 릭 시뮬레이터 테스트와 디바이스 테스트의 차이
- 유선 연결 테스트와 스탠드얼론 테스트의 차이

**다음 수업**

- VR 이동

단계를 완료로 표시선택 단계

## 9. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요. 각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 해당하는 경우 [프로그래밍 필요] 태그도 포함됩니다.

전적으로 필수는 아니지만, VR 개발 기술을 한 단계 더 높이려면 이러한 활동을 하는 것이 좋습니다.

**1.  방향 광원 설정 [쉬움]**

방향 광원을 가지고 방에 필요한 그림자와 색상을 구현하는 실험을 해 봅니다.

- X 및 Y축에 따라 방향 광원을 회전합니다.
- 시간대의 광원 색상에 맞게 방향 광원 색상을 조정합니다.

[Image: image]

**2.  디바이스 시뮬레이터 실습 [보통]**

디바이스 시뮬레이터의 기본 기능을 사용하는 방법을 숙지합니다.

- 디바이스 시뮬레이터를 설정하고 사용하는 방법은 위 단계의 지침을 참조하세요.
- **참고**:  디바이스에서 앱을 실행하기 전에 시뮬레이터를 제거하거나 비활성화해야 합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**3.  작동하는 시계 추가 [전문가] [프로그래밍 필요]**
(a) 현지 시간대로 현재 시각을 사용자에게 알려 주거나 (b) 원하는 의도대로 시각을 알려 주는 용도로 VR 방 월드에 사용할 시계를 벽에 추가합니다.

- Course Library > Prefabs > Objects > Electronics 폴더에서 시계 프리팹을 찾습니다.
- 힌트: 시스템의 현재 시각을 사용하려면 [DateTime.now](https://docs.microsoft.com/en-us/dotnet/api/system.datetime.now?view=net-5.0) 프로퍼티를 사용합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
