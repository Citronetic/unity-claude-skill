[Image: image]

# Unity 에디터에서 Unity Version Control 설정

Tutorial

Beginner

+10XP

20 mins

2

(22)

Unity Technologies

[Image: Unity 에디터에서 Unity Version Control 설정]Summary

이 튜토리얼에서는 Unity ID에 연결된 Unity Version Control 계정을 생성합니다. Unity에서 Unity Version Control과 연동되는 Unity Version Control Cloud Edition 클라이언트 애플리케이션도 설치하고, 계정과 클라우드 스토리지 공간도 설정합니다(최대 세 명까지 또는 5GB 미만의 공간을 사용하는 경우 무료).

이 튜토리얼을 완료하면 Unity에서 Unity Version Control을 설정하고 사용할 준비를 마칠 수 있습니다.

Languages available:

한국어English한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 Unity 에디터 내에서 Unity Version Control 및 컴패니언 클라이언트 애플리케이션인 Unity Version Control Cloud Edition을 설정합니다.

**참고**: 조직에서 Unity Version Control Enterprise Edition을 사용하는 경우에는 다른 과정을 거치게 됩니다.

#### Unity Version Control 업데이트 및 사용자 경험

[Unity Version Control](https://unity.com/solutions/version-control)(이전 명칭: Plastic SCM)은 Unity Gaming Services의 [Unity DevOps 솔루션](https://unity.com/products/unity-devops)에 속한 버전 관리 시스템입니다. UVCS(Unity Version Control)는 다른 Unity DevOps 툴과 통합되어 크리에이터가 더 효과적으로 작업하고 워크플로를 최적화할 수 있도록 설계되었습니다.

다음 3가지 인터페이스를 통해 Unity Version Control을 사용할 수 있습니다.

- Unity 또는 언리얼 게임 엔진의 에디터 플러그인: Version Control 패키지를 사용해 Unity 에디터 플러그인에 액세스할 수 있습니다.
- [Unity DevOps 웹 대시보드](https://dashboard.unity3d.com/devops?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949751587)
- Unity Version Control 클라이언트 애플리케이션(Windows, Mac, Linux 운영체제에서 사용 가능)

이 학습 경험에서는 기본적으로 Unity 에디터 플러그인을 참조합니다. 하지만 현재 Unity DevOps 대시보드를 통해서만 완료할 수 있는 단계도 있습니다. 이 튜토리얼을 진행하며 사용자 경험이 지침과 일치하지 않는 경우가 발생하면 [Unity Version Control 기술 자료](https://docs.unity.com/devops/en/manual/unity-version-control)를 참조하세요.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

#### Unity를 처음 사용하시나요?

Unity를 처음 사용하는 경우, [**Unity 필수 과정 학습 길잡이**](https://learn.unity.com/pathway/unity-essentials)를 통해 기초를 다지고 Unity 에디터에서 제작을 시작할 수 있습니다. **Unity Version Control 시작하기**를 계속하기 전에 이 학습 길잡이를 완료하는 것이 좋습니다.

#### Unity Hub 업데이트

Unity 프로젝트 설정을 시작하기 전에 Unity Hub를 최신 릴리스로 업데이트하는 것이 좋습니다. 이전 버전의 Hub를 사용할 경우 여기에 제공된 지침과 실제 경험하는 내용에 차이가 있을 수 있습니다.

#### Unity 에디터 기초 확인

Unity 에디터의 기초를 다시 확인하고 싶을 때는 언제든지 [**Unity 에디터 둘러보기**](https://learn.unity.com/tutorial/explore-the-unity-editor-1)를 살펴보세요.

#### Version Control 패키지 업데이트

Unity Version Control은 패키지 관리자의 **Version Control** 패키지에 있으며 Unity 에디터에 자동으로 설치됩니다.

패키지 관리자에서 이 패키지의 버전을 살펴보고 버전 1.17.2 이상을 설치해 두세요. 필요한 경우 [패키지 관리자에서 이 패키지를 업데이트](https://learn.unity.com/tutorial/6273ee10edbc2a0232556f10#6273ee10edbc2a0232556f18)합니다.

단계를 완료로 표시

## 3. Unity Version Control의 작동 방식

Q&A (0)

Unity Version Control은 Unity 에디터에 통합되어 있는 소스 관리(버전 관리라고도 함) 애플리케이션입니다. Unity 프로젝트에서 다른 사람과 협업하는 경우에도, 또는 단독 프로젝트에서 여러 변경 사항을 추적하는 경우에도 소스 관리는 프로젝트 관리 툴로 유용하게 활용할 수 있습니다.

이 제품의 정식 명칭은 Unity Version Control Cloud Edition입니다. 본인과 협업자가 액세스할 수 있고 안전하게 백업되는 클라우드에 Unity 프로젝트의 마스터 원본이 저장되기 때문입니다.

Git에 익숙하다면 Unity Version Control도 유사합니다. Unity Version Control은 Unity 프로젝트 폴더의 현재 상태와 이전에 저장된 수정본 간의 차이인 **체인지 세트**를 계산하는 방식으로 작동합니다. Unity Version Control에는 변경 사항만 저장되므로 필요한 스토리지 공간을 최소화할 수 있습니다. 또한 어떤 체인지 세트로도 돌아갈 수 있으므로 자신의 작업과 협업자의 작업 간 충돌을 더 효과적으로 해결할 수 있습니다.

다음은 Unity Version Control의 작동 방식 및 알아 두어야 할 기본 용어입니다.

- 로컬 디스크에 있는 Unity 프로젝트 폴더와 파일은 **작업 공간**, 즉 작업하는 공간이 됩니다.
- **저장소**는 여러분과 협업자가 사용할 프로젝트 데이터가 저장되는 파일 모음집입니다. 이론적으로는 로컬 드라이브에 저장소가 있을 수 있지만, 대부분은 여러 협업자가 프로젝트 파일에 액세스할 수 있도록 클라우드의 **원격 저장소**로 존재합니다.
- 데이터는 특정 수정본과 그 다음 수정본 간의 변경 사항 목록인 **체인지 세트**로 저장됩니다. Unity Version Control은 체인지 세트를 기록함으로써 모든 협업자의 변경 사항을 동시에 관리할 수 있으며, 사용자는 원하는 이전 수정본으로 돌아갈 수 있습니다.

단계를 완료로 표시

## 4. Unity Version Control Cloud Edition 설치

Q&A (0)

어떤 소프트웨어도 추가하지 않고 Unity 에디터에서 여러 일반적인 Unity Version Control 작업을 수행할 수 있습니다. 하지만 Unity Version Control Cloud Edition 외부 클라이언트 애플리케이션에서 수행해야 할 다른 작업도 있습니다.

Unity Version Control Cloud Edition을 설치하는 방법은 다음과 같습니다.

**1**.  브라우저에서 [Unity Version Control 다운로드 페이지](https://www.plasticscm.com/download?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949751587)로 이동합니다.

**2**.  **Cloud Edition**에서 Try now 버튼이 아닌 **Download** 버튼을 선택합니다.

**3**.  설치 파일을 실행하고 모든 기본 설정을 수락해 설치를 완료합니다.

Unity Version Control Cloud Edition은 팀이 최대 3명의 사용자로 구성되고 총 클라우드 스토리지가 5GB 미만인 경우 무료로 제공됩니다. 해당 제한이 초과되면 요금이 부과됩니다. 요금제 정보는 Unity 웹사이트의 [Unity Version Control 페이지](https://unity.com/products/plastic-scm)에서 확인할 수 있습니다.

단계를 완료로 표시

## 5. Unity Version Control 계정 및 조직 생성

Q&A (0)

Unity Version Control 계정 및 조직을 생성하는 방법은 다음과 같습니다.

**1**.  Unity Hub에서 일반 Unity ID를 사용하여 로그인한 상태여야 합니다.

**2.**  [새 Unity 프로젝트](https://learn.unity.com/tutorial/6273ee10edbc2a0232556f10#6273ee10edbc2a0232556f16)를 생성하고 이름을 "TestProject"로 지정합니다.

**3.**  계층 구조에서 TestProject를 오른쪽 클릭한 다음 **3D Object**> **Cube**를 선택하여 큐브 프리미티브를 추가합니다.

**4.**  메인 툴바로 이동하여 **Unity Version Control** 버튼을 선택하거나, 메인 메뉴로 이동하여 **Windows** > **Unity Version Control**을 선택합니다.

[Image: image]

아래와 같이 Unity Version Control 창이 열리며 콘솔(Console) 창 옆에 배치됩니다.

[Image: image]

**5**.  Unity Version Control 창에 숫자 1 대신 체크 표시가 있다면 Unity Version Control 계정 및 조직이 이미 있다는 의미입니다. 이 튜토리얼의 남은 부분을 건너뛰고 **Unity Version Control 작업 공간 및 저장소 생성**을 진행하세요.

**중요**: 드물지만 DevOps를 구독하지 않았는데도 1단계에서 이미 초록색 체크 표시가 보이는 경우도 있습니다. 이 경우 [DevOps 포털](https://dashboard.unity3d.com/gaming/login?redirectTo=L2Rldm9wcy8=&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949751587)에 로그인하여 Unity ID에 연결된 DevOps 조직이 있는지 확인하세요.

**6**.  **Login or sign up**을 선택합니다. 창이 업데이트되어 로그인 또는 가입할 수 있는 옵션이 표시됩니다.

[Image: image]

**7**.  **Sign in with Unity ID**를 선택하면 새 브라우저 창이 열리며 Unity ID를 사용해 Unity Version Control에 로그인할 수 있습니다.

**8**.  [Unity DevOps 대시보드](https://service-store.unity.com/order/create?sku=UTY-CLD-BLD)로 이동하여 새 클라우드 조직을 생성합니다.

**중요**: 이전에는 Unity Version Control 앱과 Unity 에디터 플러그인에서 조직을 생성할 수 있었지만 지금은 DevOps 대시보드를 통해서만 이 작업이 가능합니다. 이 프로세스는 개발 중입니다. 이 단계의 지침이 현재 경험과 일치하지 않는 경우 Unity Version Control 기술 자료를 참조하세요.

단계를 완료로 표시

## 6. 다음 단계

Q&A (0)

Unity Version Control 계정 및 클라우드 조직을 설정했으니 앞으로 이 프로세스를 반복할 필요가 없습니다. 다음 튜토리얼에서는 각각의 새 Unity 프로젝트를 Unity Version Control에 추가하는 데 사용되는 프로세스를 설명합니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
