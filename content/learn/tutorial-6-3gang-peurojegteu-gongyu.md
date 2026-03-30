[Image: image]

# 6.3강 - 프로젝트 공유

Tutorial

Beginner

+10XP

30 mins

2

(74)

Unity Technologies

[Image: 6.3강 - 프로젝트 공유]Summary

**개요:**

이 수업에서는 Unity 인터페이스 외부에서 플레이 가능한 프로젝트를 제작하는 방법을 배웁니다. 먼저 프로젝트를 퍼블리시하는 데 필요한 익스포트 모듈을 설치합니다. 그런 다음, 프로젝트를 Mac 또는 PC 컴퓨터에서 플레이할 수 있는 스탠드얼론 앱으로 제작합니다. 마지막으로, 프로젝트를 WebGL용으로 익스포트하고, 친구와 가족에게 보낼 수 있도록 게임 공유 사이트에 업로드합니다.

**프로젝트 결과:**

프로젝트를 Mac/PC용 스탠드얼론 앱으로 익스포트하거나 온라인으로 임베드하여 플레이 가능하도록 만듭니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 익스포트 모듈 설치

Q&A (0)

프로젝트를 익스포트하려면 먼저 특정 플랫폼에 익스포트할 수 있는 익스포트 모듈을 추가해야 합니다.

1. **Unity Hub**를 열고 **설치**탭으로 이동합니다.
2. 교육 과정에서 사용 중인 Unity 버전에서 **모듈 추가**를 선택합니다.
3. **WebGL 빌드 지원**을 선택하고 **Mac** 또는 **Windows**빌드 지원을 선택한 후 **완료**를 클릭하고 설치가 완료될 때까지 기다립니다.

단계를 완료로 표시

## 2. Mac 또는 Windows용 게임 제작

Q&A (0)

익스포트 모듈을 설치했으므로, 이제 이 모듈을 사용하여 프로젝트를 익스포트할 수 있습니다.

1. 제작할 프로젝트(프로토타입 또는 개인 프로젝트)를 **엽니다**.
2. Unity에서 **File > Build Settings**를 클릭한 다음, **Add Open Scenes**를 클릭하여 씬을 추가합니다.
3. **Player Settings**를 클릭하고 원하는 설정을 조정합니다(Windowed, Resizable 및 Display Resolution Dialog 활성화 여부 등).
자세한 내용은 [플레이어 설정 구성에 대한 기술 자료](https://docs.unity3d.com/Manual/class-PlayerSettingsStandalone.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949750885)를 확인하세요.
4. **Build**를 클릭하고 프로젝트 이름을 지정한 후 Create with Code 폴더 안의 Builds라는 새 폴더 안에 저장합니다.
5. 게임을 **플레이**하여 테스트한 다음 원하는 경우 다른 설정으로 **다시 제작**합니다.

[Image: image]단계를 완료로 표시

## 3. WebGL용 게임 제작

Q&A (0)

Mac 또는 Windows에서 게임을 배포하는 작업이 매우 까다로우므로 프로젝트를 WebGL용으로 빌드하여 온라인으로 제공하는 것이 좋습니다.

1. **Build Settings** 메뉴를 다시 열고 **WebGL**을 선택한 다음 **Switch Platform**을 클릭합니다.
**참고:**WebGL Build Support 익스포트 모듈을 선택한 경우에만 이 작업을 수행할 수 있습니다.
2. **Build**를 클릭한 후, 이름에  - WebGL이 있는 Builds 폴더에 저장합니다.
3. **index.html**을 클릭하여 프로젝트를 실행합니다(여러 브라우저로 열어 봐야 할 수도 있음).
4. WebGL 빌드 폴더를 오른쪽 클릭하고 .zip 파일로 **압축**합니다.
5. 원하는 경우 Unity Play 또는 [itch.io](https://itch.io/)와 같은 게임 공유 사이트에 **업로드**합니다.

[Image: image]단계를 완료로 표시

## 4. 수업 요약

Q&A (0)

**새로운 개념 및 기술**

- 익스포트 모듈 설치
- Mac/PC용 빌드 제작
- WebGL/HTML용 빌드 제작

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
