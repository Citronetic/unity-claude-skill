[Image: image]

# 배경 음악 추가

Tutorial

foundational

+10XP

15 mins

1

(156)

Unity Technologies

[Image: 배경 음악 추가]SummarySkills

이 튜토리얼에서는 Audio Source 컴포넌트를 소개하고 씬에 오디오를 어떻게 추가하는지 살펴보며 오디오를 사용해 보겠습니다.

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- Audio Source 컴포넌트를 게임 오브젝트에 추가합니다.
- Audio Source에 오디오 클립을 추가합니다.
- 3D 씬에 배경 음악을 구현합니다.

Resources

- [Foundations of Audio](https://assetstore.unity.com/packages/essentials/tutorial-projects/foundations-of-audio-183075)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 Unity의 오디오 기능을 살펴보겠습니다. 오디오는 시뮬레이션된 환경을 더 실감나게 표현하는 데 매우 중요한 요소입니다.

이전 과제에서는 오브젝트가 상호 작용하는 방식을 시뮬레이션하는 데 Unity가 어떤 역할을 하는지 확인했습니다. 또한 Unity는 물리적 환경에서 음파가 상호 작용하는 방식을 시뮬레이션합니다. 가청음은 오디오 소스와 리스너 사이의 거리에 따라 달라질 뿐만 아니라 그 사이에 있는 머티리얼의 물리적 특성에 따라서도 달라집니다.

이 소개 튜토리얼에서는 Unity에서 오디오를 통해 현실감을 더할 수 있는 방법을 살펴봅니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

Unity 프로젝트를 설정하는 방법은 다음과 같습니다.

**1.**  **Unity Hub**를 엽니다.

**2.** **URP 템플릿**을 사용하여 [새로운 Unity 프로젝트를 만듭니다](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196).

**3.**  Unity 에셋 스토어에서 [Foundations of Audio 에셋](https://assetstore.unity.com/packages/essentials/tutorial-projects/foundations-of-audio-183075)으로 이동합니다.

**4.** [에셋을 다운로드하고 Unity 프로젝트로 임포트합니다.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)

이제 다 됐습니다. 모든 준비를 마쳤으니 씬을 열어 테스트해 보겠습니다.

단계를 완료로 표시

## 3. 예시 씬 열기 및 테스트

Q&A (0)

**1.**프로젝트(Project) 창에서 Scenes 폴더를 열고 **EssentialsAudioScene**을 더블 클릭하여 예시 씬을 엽니다.

[Image: image]

**2.  플레이** 버튼을 선택하여 씬을 테스트합니다.

**3.**마우스를 클릭하지 않은 상태로 드래그하여 씬을 둘러볼 수 있습니다. WASD 키를 사용(W: 앞으로, S: 뒤로, A: 왼쪽으로, D: 오른쪽으로 이동)하여 씬 뷰를 살펴봅니다.

**4.  플레이** 버튼을 다시 선택하여 예시 씬 테스트를 중지합니다.

단계를 완료로 표시

## 4. 빈 게임 오브젝트 생성

Q&A (0)

빈 게임 오브젝트를 배경 오디오의 플레이스홀더이자 컨테이너로 사용할 수 있습니다. 설정 방법은 다음과 같습니다.

**1.**계층 구조에서 오른쪽 클릭하고 **Create Empty**를 선택합니다.

[Image: image]

**2.**인스펙터에서 게임 오브젝트의 이름을 Music으로 변경합니다.

[Image: image]

**3.**  인스펙터에서 오른쪽에 있는 세 개의 점을 선택하고 **Reset Position**을 선택하여 위치를 재설정합니다. 그러면 게임 오브젝트의 중심 위치가 0,0,0으로 설정되어 씬의 중심에 정렬됩니다.

[Image: image][Image: image]단계를 완료로 표시

## 5. 빈 게임 오브젝트에 오디오 추가

Q&A (0)

게임 오브젝트가 씬에서 오디오를 재생하려면 게임 오브젝트에 **Audio Source 컴포넌트**를 추가해야 합니다.

**1.**계층 창에서 Music 게임 오브젝트를 선택합니다.

**2.**인스펙터 창에서 **Add Component** 버튼을 선택합니다.

[Image: image]

**3.**검색창을 사용해 **Audio Source** 컴포넌트를 검색하고 선택합니다.

[Image: image]

**4.**인스펙터에서 Audio Source 컴포넌트에 있는 여러 프로퍼티를 살펴봅니다.

[Image: image]

Audio Source에서 사운드를 재생하려면 **오디오 클립**을 추가해야 합니다.

**5.**프로젝트 창에서 Audio 폴더를 열어 이 예제 프로젝트에서 제공하는 오디오 클립을 확인하고 **Music**을 선택합니다.

[Image: image]

**6.**인스펙터 창에서 Music 오디오 클립에 대한 임포트 설정을 확인할 수 있습니다. 인스펙터 창 하단에서 선택한 오디오 클립의 파형 프리뷰를 확인할 수 있습니다. 프리뷰가 표시되지 않는 경우, 하단의 프리뷰 헤더를 클릭하고 위로 드래그하여 프리뷰 패널을 표시할 수 있습니다.

[Image: image]

**7.  플레이**버튼을 선택하여 Music 오디오 클립을 미리 볼 수 있습니다. 파형을 클릭하여 재생할 부분을 건너뛸 수 있으며, 클릭하고 드래그하여 파형을 스크럽할 수 있습니다. 미리 보기가 끝나면 플레이 버튼을 다시 선택합니다.

[Image: image]

**8.**계층 창에서 Music 게임 오브젝트를 선택합니다.

**9.**인스펙터 창에서 AudioClip 오른쪽에 있는 원 아이콘을 클릭합니다.

[Image: image]

**10.**Select AudioClip 창이 열리고 이 프로젝트에서 사용할 수 있는 모든 오디오 클립이 표시됩니다. Music 오디오 클립을 선택하여 Music Audio Source의 오디오 클립으로 할당합니다.

[Image: image]

**11.  플레이**버튼을 선택하여 테스트합니다. 음악이 재생되지 않으면 게임 뷰의 Mute Audio 버튼을 확인해 보세요. 이 버튼이 활성화되어 있지 않아야 합니다. 플레이 모드에서 음소거와 음소거 해제를 토글하려면 **Mute Audio** 버튼을 클릭합니다.

**참고:** 음소거를 해제해도 음악이 재생되지 않으면 Audio Source 컴포넌트의 **Play On Awake** 설정이 활성화되어 있도록 하세요.

[Image: image]단계를 완료로 표시

## 6. 다음 단계

Q&A (0)

지금까지 씬에 오디오를 통합했습니다. 하지만, 오디오를 사용해 더 많은 것을 구현할 수 있습니다. 다음 튜토리얼에서는 실시간 3D 프로젝트에서 오디오의 역할에 대해 알아보고, 3D 환경을 위한 사실적인 사운드를 제작해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
