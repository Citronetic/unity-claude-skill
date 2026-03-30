[Image: image]

# Unity Version Control을 사용하여 협업

Tutorial

intermediate

+10XP

20 mins

1

(10)

Unity Technologies

[Image: Unity Version Control을 사용하여 협업]Summary

Unity Version Control의 진정한 강점은 자신의 변경 사항을 계속 체계적으로 관리하고 파일을 백업하며 Unity 프로젝트에 대한 협업을 진행할 수 있다는 점입니다. 이 튜토리얼에서는 Unity Version Control을 사용하여 협업자를 초대하고 함께 작업하는 방법을 학습합니다.

Languages available:

한국어English한국어한국어

## 1. 개요

Q&A (0)

Unity Version Control 같은 소스 관리 툴은 하나의 프로젝트에서 협업하는 Unity 크리에이터들에게 반드시 필요합니다. 이제 Unity Version Control을 통한 협업의 기초에 대해 학습하겠지만, 이는 단지 시작에 불과합니다. Unity Version Control은 많은 기능을 갖춘 강력한 소스 관리 애플리케이션입니다. 본 튜토리얼의 마지막 부분에서 더 자세한 정보가 담긴 리소스를 확인해 보세요.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼을 계속하려면 이 학습 경험에서 이전 튜토리얼을 완료해야 합니다. 또한 다음 작업을 완료한 상태여야 합니다.

- Unity Version Control Cloud Edition 클라이언트 애플리케이션을 다운로드하여 설치합니다.
- Unity Version Control 계정을 생성합니다.
- 새 작업 공간 및 저장소를 생성합니다.
- 간단한 Unity 프로젝트를 저장소에 체크인합니다.
- 체인지 세트를 저장소에 몇 개 정도 추가합니다.

단계를 완료로 표시

## 3. 구성원을 조직에 초대

Q&A (0)

협업자를 조직의 구성원으로 초대하고 저장소에 대한 액세스 권한을 부여하는 방법은 다음과 같습니다.

**1**.  Unity 에디터의 Unity Version Control 창에서 **Settings**(기어 모양) 버튼을 찾습니다. 버튼을 선택하고 **Invite Members to Workspace**를 선택합니다. 브라우저 창이 열리고 [plasticscm.com](https://www.plasticscm.com/account/login?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949772018)의 페이지가 열립니다. 메시지가 표시되면 Unity ID로 로그인합니다(가능한 경우). 그러면 **Users & Groups** 페이지가 열립니다.

[Image: image]

**2**.  브라우저에서 **Add new user**를 선택합니다.

**3**.  협업자의 이메일 주소를 입력합니다. 협업자의 Unity ID(있는 경우)와 연결된 이메일 주소를 사용하면 협업자가 더 쉽게 참여할 수 있습니다.

**4**.  이 튜토리얼에서는 **Administrator**옵션을 활성화하지 않습니다.

**5**.  **Save**를 선택하면 협업자는 아래와 같은 이메일 초대를 받습니다.

[Image: image]단계를 완료로 표시

## 4. 협업자로 프로젝트에 참여

Q&A (0)

이 단계는 필수는 아니며, 저장소를 공유하고 협업하려는 동료가 있는 경우에만 해당합니다. 본 학습 경험을 완료하기 위해 협업할 인원을 구할 필요는 없습니다.

이전 튜토리얼에서 이미 조직과 저장소를 생성했으므로 협업자는 해당 작업을 생략할 수 있으며, 여러분이 이미 생성해 놓은 Unity 프로젝트를 다운로드하여 작업 공간을 생성하면 됩니다.

**참고**: 최상의 결과를 얻으려면 모든 협업자가 동일한 Unity 버전을 사용해야 합니다.

조직에 참여하기 위한 이메일 초대를 수신하면 다음 단계를 직접 따르거나 협업자가 따르도록 하세요.

**1**.  이메일에 있는 조직 이름을 기록해 둡니다(예: **chrisjones@cloud**).

**2**.  이메일의 **Install Cloud Edition**을 선택합니다. 그러면 브라우저 창이 열립니다.

**3**.  **Cloud Edition**에서 Try now 버튼이 아닌 **Download** 버튼을 선택합니다.

**4**.  설치 파일을 실행하고 모든 기본 설정을 수락해 설치를 완료합니다.

**5**.  Unity Version Control 애플리케이션을 엽니다. 홈 화면이 열리지 않는 경우 **Home**으로 이동합니다.

**참고**: Unity Version Control은 레거시 버전과 새로운 버전의 사용자 인터페이스를 모두 사용할 수 있습니다. 아래 이미지는 새로운 사용자 인터페이스를 나타냅니다.

[Image: image]

**6**.  왼쪽에서 협업하려는 Unity 프로젝트의 저장소를 선택합니다(둘 이상인 경우).

**7**.  **Download repository**를 선택합니다. 그러면 팝업 창이 나타납니다.

[Image: image]

**8**.  원하는 경우 로컬 디스크의 Unity 프로젝트 폴더 이름과 동일하게 표시될 **Name of the new workspace**를 변경할 수 있습니다. **Browse**를 선택해 디스크의 폴더 위치를 변경할 수도 있습니다.

**9**.  **Download**를 선택합니다.

새로운 Unity 프로젝트를 다운로드했지만 Unity에서 생성한 프로젝트가 아니므로 Unity Hub에 나열되지 않습니다.

**10**.  [새 프로젝트를 Unity Hub에 추가합니다](https://learn.unity.com/tutorial/6273ee10edbc2a0232556f10#6273ee10edbc2a0232556f15). 최상의 결과를 얻으려면 프로젝트와 동일한 Unity 버전을 사용하시기 바랍니다.

**11**.  Unity Hub에서 프로젝트를 엽니다.

**12**.  Unity 에디터에서 평소 사용하는 Unity ID로 로그인한 상태임을 확인합니다.

**13**.  Unity 에디터에서 해당 프로젝트가 열린 상태로 메인 툴바로 이동하여 **Unity Version Control** 버튼을 선택하거나, 메인 메뉴로 이동하여 **Windows** > **Unity Version Control**을 선택합니다.

**참고**: 프로젝트를 보려면 다른 씬을 열어야 할 수 있습니다.

이 튜토리얼의 나머지 부분은 본인과가 협업자가 모두 따라야 할 수 있습니다.

단계를 완료로 표시

## 5. Branch Explorer에서 체인지 세트 관리

Q&A (0)

Unity Version Control 클라이언트 앱의 **Branch Explorer**에서는 본인 또는 협업자가 만든 모든 체인지 세트를 그래픽 뷰 형태로 볼 수 있습니다. 보려면 Unity Version Control 툴바에서 **Branches**버튼을 오른쪽 클릭하고 **Branch Explorer**를 선택합니다. 그러면 Branch Explorer가 새 창에 나타납니다.

[Image: image]

**참고**: 새로운 Unity Version Control 사용자 인터페이스에서는 왼쪽 메뉴에서 저장소 및 Branch Explorer 옵션을 선택해야 할 수 있습니다.

[Image: image]

Branch Explorer 다이어그램의 각 노드는 체인지 세트를 나타냅니다. 각 노드 위에 마우스 커서를 올리면 세부 정보를 볼 수 있습니다. 지금은 행이 하나뿐이지만 이 튜토리얼의 후반부가 되면 다수의 브랜치가 있을 것입니다.

Branch Explorer에서 흥미로운 점은 현재 작업 공간에 다운로드되어 있는 체인지 세트를 나타내는 홈 아이콘입니다.

**중요**: 협업자가 저장소에 적용한 변경 사항을 볼 수 있으려면 Branch Explorer 창으로 돌아갈 때마다 새로고침 버튼을 선택해야 합니다.

[Image: image]단계를 완료로 표시

## 6. 협업자가 적용하는 변경 사항 받기

Q&A (0)

협업자와 함께 작업하면서 프로젝트에 각자의 변경 사항을 적용하다 보면, 일정 간격으로 서로의 변경 사항을 다운로드할 필요를 느낄 것입니다. Unity 에디터의 Unity Version Control 창 및 Branch Explorer에서 Changesets 탭에 나열된 체인지 세트를 볼 수 있습니다.

작업 중인 브랜치(브랜치에 대해서는 다음에 학습할 예정)에서 다른 사람이 체인지 세트를 체크인하는 경우 변경된 파일은 Incoming Changes 탭에 나열됩니다. Unity Version Control 창의 탭에 저장소 업데이트가 있음을 알리는 아이콘이 표시됩니다.

[Image: image]

그러면 **Update workspace** 버튼을 선택하여 변경 사항을 수락하고 작업 공간을 최신 체인지 세트로 업데이트할 수 있습니다.

Incoming Changes 탭을 사용하는 방법을 알아보려면 다음 단계를 따르세요.

**1**.  저장소에 설정된 실제 협업자가 있는 경우 체인지 세트에 체크인하도록 합니다. 그리고 다음 지침은 건너뜁니다.

**2**.  협업자가 없는 경우 Branch Explorer에서 이전 체인지 세트 노드(맨 오른쪽 노드 앞)를 오른쪽 클릭하고 **Switch workspace to this changeset**를 선택합니다. 그러면 홈 아이콘이 선택한 체인지 세트로 이동합니다.

[Image: image]

이 시연의 목적을 고려하여, 여러분이 여기서 계속 작업 중이었고 협업자가 새 체인지 세트를 체크인했다고 가정하겠습니다.

**3**.  이제 Unity 에디터의 Incoming Changes 탭에 여러 파일이 나열됩니다. 이 파일들은 작업 공간의 파일보다 저장소에서 더 최신 버전으로, 실제 또는 가상의 협업자가 변경한 파일입니다.

[Image: image]

**4**.  **Update workspace** 버튼을 선택하여 변경 사항을 수락하고 작업 공간을 새 체인지 세트로 업데이트합니다.

**5**.  Unity Version Control을 사용하여 작업 공간을 업데이트할 때마다 Unity 에디터에서 변경 사항을 수락하고 씬을 다시 로드하라는 메시지가 하나 이상 표시됩니다. 모든 변경 사항을 허용하는 옵션을 선택합니다.

그러면 변경 사항을 나타내도록 씬이 업데이트됩니다.

**6**.  Branch Explorer로 돌아가서 새로 고칩니다. 변경 사항을 작업 공간으로 다운로드했기 때문에 홈 아이콘이 새 체인지 세트로 이동합니다.

#### 변경 사항 관리: 검토

Unity Version Control 창에서 첫 두 개의 탭을 사용해 봤으므로, 이제 해당 탭에 어떤 요소가 표시되고 그러한 요소를 어떻게 사용하는지 검토해 보겠습니다.

- Pending Changes 탭에는 아직 저장소에 업로드되지 않은 작업 공간 및 현재 브랜치의 변경 사항이 나열됩니다. 이 탭을 사용하면 저장소를 작업 공간과 일치하도록 업데이트(새 체인지 세트 체크인)할 수 있습니다.
- Incoming Changes 탭에는 저장소 및 현재 브랜치에 적용했지만 아직 작업 공간에 다운로드되지는 않은 변경 사항이 나열됩니다. 이 탭을 사용하면 작업 공간을 저장소와 일치하도록 업데이트할 수 있습니다.

단계를 완료로 표시

## 7. 이전 체인지 세트 검토

Q&A (0)

언제든지 **Switch workspace to changeset** 옵션을 사용해 체인지 세트가 표시되도록 작업 공간을 업데이트할 수 있습니다. 예를 들어 씬에서 원래 있던 파란색 의자를 초록색 의자로 교체한 경우, 빠르게 이전 체인지 세트로 전환해 파란색 의자를 한 번 더 살펴보고 다시 기존 체인지 세트로 전환할 수 있습니다.

Switch workspace to changeset 기능을 확인하는 방법은 다음과 같습니다.

**1**.  Changesets 탭으로 이동하여 이전 체인지 세트를 선택하고 오른쪽 클릭하여 **Switch workspace to this changeset**를 선택합니다. Branch Explorer에서 체인지 세트 노드를 오른쪽 클릭해도 됩니다.

**2**.  그런 다음 Incoming Changes 탭을 엽니다. 더 최신 상태의 체인지 세트에서 이루어진 변경 사항 목록을 볼 수 있습니다.

**3**.  **Update workspace** 버튼을 선택해 모든 변경 사항을 수락하고 작업 공간을 최신 체인지 세트로 복원합니다.

이 기능을 사용하면 다른 브랜치의 체인지 세트를 포함한 어떤 체인지 세트로든 다시 전환할 수 있습니다. 프로젝트 개발 중 원하는 시점에서 진행 중인 작업을 확인하는 데 유용한 기법입니다.

단계를 완료로 표시

## 8. 추가로 시도해 볼 만한 작업

Q&A (0)

이 학습 경험은 Plastic SCM을 시작하기에 충분한 기능만 소개하고 있습니다. 더 많은 기능을 살펴보세요.

Unity 에디터의 Plastic SCM은 Transparent SCM이라는 단순화된 워크플로를 제공합니다. [Plastic SCM 기술 자료에서 투명성 높은 워크플로에 대해 자세히 알아보세요](https://www.plasticscm.com/documentation/labs/main?term=switch%20workspace#Lesson4-TransparentSCM&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949772018).

완전한 Plastic SCM 클라이언트 애플리케이션은 어떤 소스 관리 요구 사항도 충족하는 고급 기능을 제공합니다. 자세히 알아보려면 [클라이언트 앱의 Plastic SCM 워크플로 기초 및 커맨드 라인 인터페이스](https://www.plasticscm.com/book/#_a_plastic_scm_primer?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949772018)(영문)를 읽어 보세요.

Plastic SCM의 고급 활용 방법은 [Plastic SCM 웹사이트의 관련 기술 자료 전문](https://www.plasticscm.com/documentation/?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949772018)을 살펴보시기 바랍니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
