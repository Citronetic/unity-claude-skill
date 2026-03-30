[Image: image]

# 비주얼 스크립팅 시작

Tutorial

Beginner

+10XP

15 mins

0

(65)

Unity Technologies

[Image: 비주얼 스크립팅 시작]Summary

이번 튜토리얼에서는 첫 번째 스크립트에 활용할 비주얼 스크립팅 설정을 시작합니다. 이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 그래프와 스크립트 머신 정의
- 게임 오브젝트에 Script Machine 컴포넌트 추가
- 비주얼 스크립팅 그래프를 프로젝트 에셋으로 저장
- Unity 에디터에서 Visual Scripting 창 열기
- Script Graph 창의 패널 설명 및 정렬
- Script Graph 창에서 이동, 확대/축소 및 중앙으로 돌아가기

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼을 학습하면 Unity를 처음 접하는 사용자와 이미 Unity 작업 경험이 있는 사용자 모두 Visual Scripting의 사용자 인터페이스를 숙지할 수 있습니다. 먼저, 새 Unity 프로젝트를 만들고 첫 번째 비주얼 스크립트 에셋을 만들어 보겠습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

#### 알림: Unity 버전 확인

이 튜토리얼에서는 Unity 2021.1 버전 이상을 사용하고, Unity에 기본 설치된 Visual Scripting 패키지를 사용하는 것이 좋습니다.

[**Bolt**](https://learn.unity.com/tutorial/about-unity-visual-scripting?uv=2021.1&projectId=604a0d68edbc2a080cd78d78#604a18a1edbc2a60192d4836)를 사용할 경우 사용자 인터페이스와 항목 이름이 이 튜토리얼과 조금 다르긴 하지만 이해하는 데 큰 문제는 없습니다.

#### Unity Hub 업데이트

Unity 프로젝트 설정을 시작하기 전에 Unity Hub를 최신 릴리스로 업데이트하는 것이 좋습니다. 이전 버전의 Hub를 사용할 경우 제공된 지침과 실제 경험하는 내용에 차이가 있을 수 있습니다.

#### Unity 에디터 기초 확인

Unity 에디터의 기초를 다시 확인하고 싶을 때는 언제든지 [**Unity 에디터 둘러보기**](https://learn.unity.com/tutorial/explore-the-unity-editor-1)를 살펴보세요.

#### Unity 프로젝트 설정

Unity 프로젝트를 설정하는 방법은 다음과 같습니다.

**1.** [최신 테크 스트림 릴리스(또는 **Unity 2021.1** 이상)를 설치합니다.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa)

**2.** **[URP(유니버설 렌더 파이프라인) 템플릿](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196)을 사용해 새 Unity 프로젝트를 생성합니다**.

단계를 완료로 표시

## 3. 씬 준비

Q&A (0)

비어 있는 새로운 씬에서 시작하겠습니다.

**1.** 비어 있는 새로운 씬에서 큐브 프리미티브를 생성합니다.

**2.** 플레이 모드에서 큐브가 잘 보이도록 큐브와 메인 카메라의 위치를 지정합니다. 큐브가 회전하는 것이 보여야 합니다.

[Image: image]단계를 완료로 표시

## 4. 스크립트 머신 생성

Q&A (0)

**머신**은 비주얼 스크립트를 실행하는 컴포넌트입니다. 머신은 컴포넌트로서, 컴포넌트의 게임 오브젝트에 대한 비주얼 스크립트의 명령을 수행합니다. 머신에는 이 프로젝트에서 사용하는 **스크립트 머신**과 다음 프로젝트에서 다룰 **상태 머신**, 두 종류가 있습니다.

비주얼 스크립트를 포함할 큐브에 **그래프**라고도 하는 새 스크립트 머신을 추가하겠습니다.

큐브를 선택한 상태에서 인스펙터로 이동하여 **Add Component** > **Visual Scripting** > **Script Machine**을 선택합니다. Script Machine 컴포넌트가 인스펙터 창에 추가되고, 게임 오브젝트가 선택되지 않았을 때는 씬(Scene) 뷰의 게임 오브젝트에 스크립팅 기호(<>)가 표시됩니다.

[Image: image]

위에서 확인할 수 있듯이 머신과 그래프는 서로 다른 개념입니다. 머신은 게임 오브젝트에 연결된 컴포넌트이고, 그래프는 프로젝트의 별도 파일에 저장된 에셋으로, 여러 머신에서 사용할 수 있습니다. 이 차이점은 나중에 중요해지니 꼭 알아두세요.

단계를 완료로 표시

## 5. 그래프 생성

Q&A (0)

이제 머신이 생성되었지만 아직 머신에 그래프가 할당되지 않았습니다. 이제 새로운 그래프를 만들어 보겠습니다.

**1.** Script Machine 컴포넌트에서 **New** 버튼을 선택하여 새 그래프를 생성합니다. **Save** 창이 나타나고 Unity 프로젝트의 Assets 폴더가 표시됩니다.

**2.** 프로젝트를 체계적으로 정리할 수 있도록 **VisualScripts**라는 폴더를 만들어 비주얼 스크립팅의 에셋을 저장하세요. 이름을 이렇게 지정하면 비주얼 스크립팅 에셋을 Unity의 다른 스크립트(예: C#  스크립트)나 그래프(예: 셰이더 그래프 및 VFX 그래프)와 구별하는 데 도움이 됩니다.

**3.** 'Rotation'이라는 이름으로 그래프를 저장하여 Rotation.asset이라는 새 파일을 생성합니다.

**팁:**Script Machine 컴포넌트에 새 그래프를 추가하는 또 다른 방법은 프로젝트 창에서 그래프를 생성하고 이름을 지정한 다음, 프로젝트 창에서 인스펙터의 Script Machine에 있는 **Graph** 필드로 드래그하는 것입니다. 뒷부분에서 이러한 방식을 사용해 보겠습니다.

**4.** 인스펙터의 Script Machine 컴포넌트에 **Title**과 **Summary** 필드가 포함됩니다. 이 필드에는 각자 해당하는 내용을 작성하면 됩니다. 이 데모에서는 Title에 'Rotate the Cube'를, Summary에 'Make the cube rotate'를 입력하겠습니다.

[Image: image]

**5.** 컴포넌트에 보이는 **Edit Graph** 버튼을 누릅니다. 그러면 Script Graph 창이 나타납니다.

단계를 완료로 표시

## 6. Script Graph 창 설정

Q&A (0)

씬에서 첫 번째 그래프를 생성하면 **Script Graph** 창이 나타납니다. 현재 창 설정에 따라 도킹이 해제될 수 있습니다. [Script Graph 탭을 프로젝트와 콘솔(Console) 창 탭 옆의 도킹 영역으로 드래그하면](https://docs.unity3d.com/Manual/CustomizingYourWorkspace.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951810236) Script Graph 창과 씬 뷰를 동시에 볼 수 있습니다.

[Image: image]

Script Graph 창에는 3개의 패널이 포함되어 있습니다.

- **Graph 창**: 그래프를 만들 격자 영역
- **Graph Inspector**: 그래프를 편집할 때 그래프의 유닛에 대한 추가 정보를 제공하는 패널
- **Blackboard**: 변수 생성 및 관리를 위한 패널

#### 패널 배치 및 컨트롤

Graph Inspector와 Blackboard 패널은 처음 열 때 수직으로 배치되는데, 오른쪽과 왼쪽 화살표 버튼을 사용하여 그래프의 양쪽으로 옮길 수 있습니다. 이 튜토리얼에서는 쉽게 찾을 수 있도록 Graph Inspector를 오른쪽으로, Blackboard를 왼쪽으로 옮겨 둘 것을 권장합니다.

[Image: image]

[추가 컨트롤과 키보드 단축키에 대한 자세한 내용은 Unity 매뉴얼을 참조하세요.](https://www.google.com/url?q=https://docs.unity3d.com/Packages/com.unity.visualscripting@1.5/manual/vs-windows-shortcuts.html&sa=D&source=editors&ust=1615469139962000&usg=AOvVaw2sYk6tFvqarjwcDQVSVPbh)

단계를 완료로 표시

## 7. 다음 단계

Q&A (0)

지금까지 비주얼 스크립팅 인터페이스를 살펴보았으니, 다음 튜토리얼에서는 실행 가능한 비주얼 스크립트를 생성해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
