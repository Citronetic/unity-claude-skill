[Image: image]

# Unity Version Control 작업 공간 및 저장소 생성

Tutorial

Beginner

+10XP

15 mins

1

(14)

Unity Technologies

[Image: Unity Version Control 작업 공간 및 저장소 생성]Summary

Unity 에디터에서 새 Unity 프로젝트를 Unity Version Control에 추가할 때마다 가장 처음에 하는 작업은 작업 공간과 저장소를 설정하는 것입니다. 이 튜토리얼에서는 그러한 프로세스를 단계별로 학습하고 첫 번째 체인지 세트를 만들어 봅니다.

**중요**: Unity Version Control의 이전 명칭은 Plastic SCM입니다. 이 학습 콘텐츠는 변경된 이름 및 사용자 인터페이스 변경 사항을 모두 반영하도록 곧 업데이트될 예정이지만, 지금은 이전 이름과 사용자 인터페이스 비주얼이 참고용으로 함께 게시되어 있습니다. 본 교육 과정의 Unity Version Control 사용 지침은 정확하게 제시됩니다.

Languages available:

한국어English한국어한국어

## 1. 개요

Q&A (0)

Unity 프로젝트를 Unity Version Control에 추가할 때마다 가장 처음에 하는 작업은 새로운 작업 공간과 저장소를 설정하는 것입니다. 작업 공간은 로컬 디스크의 Unity 프로젝트 폴더가 되며 저장소는 Plastic SCM 클라우드에서 해당 프로젝트의 체인지 세트 컬렉션이 됩니다.

Unity Version Control 계정과 클라우드 조직을 생성했으므로, 프로젝트가 Unity Version Control에 미리 설정되어 있지 않은 경우 Unity 에디터에서 Unity Version Control을 열면 항상 프로세스의 이 지점에서 시작하게 됩니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼을 계속하려면 이 학습 경험에서 이전 튜토리얼을 완료해야 합니다. 또한 다음 작업을 완료한 상태여야 합니다.

- Unity Version Control Cloud Edition 클라이언트 애플리케이션을 다운로드하여 설치합니다.
- Unity Version Control 계정 및 클라우드 조직을 생성합니다.

단계를 완료로 표시

## 3. 새 작업 공간 및 저장소 생성

Q&A (0)

Unity Version Control 설정 프로세스의 이 단계에서는 **작업 공간**(프로젝트의 로컬 복사본) 및 **저장소**(프로젝트의 원격 복사본)를 모두 설정합니다. 다음과 같은 창에서 시작하게 됩니다.

[Image: image]

최초로 작업 공간 및 저장소를 설정하는 방법은 다음과 같습니다.

**1.**TestProject에서 **Unity Version Control**탭을 선택합니다.

**2**.  **Create workspace**를 선택합니다. 다음 창이 나타납니다.

[Image: image]

**참고**: 위 단계를 진행하려면 [**Unity 에디터에서 Unity Version Control 설정**](https://learn.unity.com/tutorial/set-up-plastic-scm-in-the-unity-editor?uv=2022.1&courseId=6401bbfcedbc2a22aaebd59b&projectId=630e728fedbc2a33c08442cd)을 완료한 상태여야 합니다.

처음으로 작업 공간을 설정하면 Unity Version Control에서 **Repository Name** 상자에 **[프로젝트 이름]@[Unity 조직]@cloud**라는 이름의 새 저장소가 생성됩니다.

**참고**: macOS에서 새 작업 공간을 생성할 때에는 저장소 및 작업 공간 이름을 직접 입력해야 합니다.

**More (...)** 및 **New** 버튼을 사용하여 이 프로젝트를 다른 저장소에 추가하거나, 다른 이름의 새 저장소를 생성할 수 있습니다. 예를 들어 다른 사람이 이미 설정한 프로젝트에 대해 작업을 하고 있다면 다른 저장소를 선택할 수 있습니다.

기본적으로 **작업 공간 이름**은 Unity 프로젝트 이름으로 지정됩니다. 원하는 경우 이름을 변경할 수 있으며, 작업 공간은 이름이 어떻게 바뀌더라도 현재 프로젝트를 계속 참조합니다.

로컬 작업 공간은 Unity 프로젝트 폴더입니다.

**3.  How do you prefer to work?**에서 **I need branching, merging, and the ability to push/pull (Unity VCS workspace)**을 선택합니다. 이 옵션은 모든 기능이 갖춰진 워크플로로 연결되며, 두 번째 옵션인 Gluon 작업 공간에서는 아티스트에게 적합한 간소화된 워크플로가 제공됩니다.

**4.**  **Create workspace**를 선택합니다. Unity Version Control 창에는 **Pending Changes**, **Incoming Changes**, **Changesets**, **Branches**라는 4개의 탭이 있습니다. 아래 단계에서 각 탭을 사용하게 됩니다.

[Image: image]

**중요**: 체크인하기 전까지는 파일이 저장소에 업로드되지 않습니다. 다음 단계에서 자세히 알아보세요.

단계를 완료로 표시

## 4. 대기 중인 변경 사항 체크인

Q&A (0)

Unity Version Control에서 클라우드에 저장소를 생성했지만 현재 저장소는 아직 비어 있는 상태입니다. Pending Changes 탭에는 프로젝트의 모든 파일 목록이 있으며 따라서 모든 파일을 저장소에 체크인해야 합니다.

#### 메타 파일

Pending Changes 탭에는 +meta 표기가 있는 파일이 여러 개 있습니다. 이러한 파일에는 Unity 메타데이터가 포함되어 있습니다. 파일 탐색기를 사용해 작업 공간에서 해당 파일을 살펴보면 많은 프로젝트 파일에 Unity에서 생성된 **.meta** 파일이 있음을 알 수 있습니다.

Unity Version Control에서는 이러한 모든 파일을 별도로 나열하지 않고 **+meta** 표기를 추가합니다. Unity 에셋이 포함된 **.meta** 파일을 항상 체크인해야 합니다.

#### 저장소에 체크인

프로젝트 파일을 저장소에 체크인하는 방법은 다음과 같습니다.

**1.**  Unity Version Control 창의**Pending Changes** 탭에서 **Item** 체크박스를 선택하여 나열된 모든 파일을 선택합니다.

**2.**  **Your checkin comment**상자를 선택하고 적용하려는 변경 사항의 설명을 입력합니다. 여기서는 ‘Original files’를 입력합니다.

**3.  Check in changes**를 선택합니다. **Pending Changes** 탭의 항목 목록이 사라집니다.

**4.**  **Changesets** 탭을 선택합니다. 이제 새 체인지 세트가 목록 상단에 나타나고 **Comment**열에 "Original files"가 있습니다.

Unity Version Control은 첫 두 개의 체인지 세트를 자동으로 추가합니다. "Root dir" 코멘트가 있는 첫 번째가 기존의 빈 저장소이고 "Add packages and project settings to Unity Version Control" 코멘트가 있는 두 번째에는 프로젝트의 패키지와 프로젝트 설정이 포함되어 있습니다.

**참고**: Unity는 첫 두 개의 체인지 세트에서 필요한 파일만 클라우드에 업로드합니다. 저장소의 루트 폴더에 있는 **.collabignore** 파일에 나와 있는 것처럼 로드 시 Unity 자체에 의해 빌드되는 모든 파일은 업로드되지 않습니다. 이렇게 하면 머신을 시작할 때 Unity 에디터가 자체적으로 생성할 수 있는 파일로 클라우드 저장소가 불필요하게 가득 차는 일이 발생하지 않습니다.

단계를 완료로 표시

## 5. 변경 사항을 프로젝트에 저장

Q&A (0)

작업 공간과 저장소가 설정되고 원본 프로젝트 파일이 체크인되었으니 이제 변경 사항을 프로젝트에 적용하고 다른 체인지 세트를 체크인해 보겠습니다.

**1**.**** 계층 구조를 오른쪽 클릭한 다음 **3D Object**> **Cube**를 선택합니다.

**중요**: 머티리얼과 같은 일부 에셋의 경우 인스펙터(Inspector) 창에 **Checkout**버튼이 있습니다. 이 에셋을 변경하려면 Unity Version Control에서 체크아웃해야 합니다. **Checkout**버튼을 사용하면 파일을 변경하는 동안 다른 사람이 사용할 수 없도록 파일을 잠글 수 있습니다.

변경 사항을 적용하기 전에 **Checkout**을 선택합니다. 이때 **Checkin**버튼을 사용할 필요가 없으며, 평소와 같이 Pending Changes 탭에서 체인지 세트 하나의 모든 변경 사항을 체크인할 수 있습니다.

**2**.  Unity 에디터에서 변경 사항을 저장합니다. 키보드 단축키는 **Ctrl+S**(macOS: **Cmd+S**)입니다.

Unity Version Control은 Unity 에디터가 아닌 디스크의 작업 공간에서 변경 사항을 감지하므로 저장이 중요합니다. 에셋에는 자체 파일이 있지만 씬의 변경 사항은 **.unity**파일에 있으며 반드시 저장되어야 합니다.

**3**.  Unity Version Control 창을 열고 **Pending Changes** 탭을 선택합니다. 그러면 변경 사항의 영향을 받는 파일이 나열됩니다.

**4**.  **Assets\Scenes\SampleScene.unity**체크박스를 선택합니다.

**5**.  Your check-in comment... 상자에 "Cube prefab"을 입력하고 **Check in Changes**를 선택합니다.

**6**.  **Changesets**탭을 선택하여 나열된 새로운 체인지 세트를 확인합니다.

#### 대기 중인 변경 사항 실행 취소

Pending Changes 탭에서 **Undo**버튼을 사용해 변경 사항을 실행 취소할 수 있습니다. 체크박스를 사용해 원래 상태로 되돌리려는 파일을 선택하고 **Undo**를 선택합니다.

**중요**: 많은 변경 사항이 동일한 파일에서 변경되기 때문에 Unity에서 Undo를 사용하기가 까다로운 경우도 있을 수 있습니다. 예를 들어 씬에서 게임 오브젝트의 위치를 변경하면 이렇게 변경한 모든 내용이 **.unity** 파일에 저장됩니다. Unity 씬 파일에서 Undo를 사용하면 해당 파일의 모든 변경 사항이 실행 취소되며, 이에 따라 예기치 않은 작업 손실이 발생할 수 있습니다.

#### 테스트용으로 더 많은 체인지 세트 만들기

아래 실습에서 테스트를 진행할 수 있도록 체인지 세트를 더 만들어 보세요. 방법은 아주 간단합니다. 큐브나 구체와 같은 프리미티브를 추가하거나 게임 오브젝트를 이동, 회전, 확대/축소하거나 게임 오브젝트의 색상을 변경하면 됩니다. 여러 체인지 세트로 테스트할 수 있도록 각 변경 사항을 체인지 세트로 체크인하세요.

단계를 완료로 표시

## 6. 다음 단계

Q&A (0)

지금까지 첫 번째 저장소와 작업 공간을 생성했습니다. 이어지는 튜토리얼에서는 Unity 프로젝트에서 다른 크리에이터와 협업하는 데 도움이 될 Unity Version Control의 기초적인 소스 관리 작업에 대해 알아보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
