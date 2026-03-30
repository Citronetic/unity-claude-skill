[Image: image]

# 2D 게임 키트 설명

Tutorial

Beginner

+10XP

60 mins

18

(47)

Unity Technologies

[Image: 2D 게임 키트 설명]Summary

이 가이드는 게임 키트를 사용하여 비어 있는 씬을 설정하여 새 레벨을 생성하는 방법을 보여줍니다. 여기서는 이 키트에서 사용되는 몇 가지 기초적인 작업을 수행하여 게임플레이를 만들어 보겠습니다. 이 키트에는 아이디어가 떠오르지 않을 때 사용해볼 수 있도록 키트의 모든 구성에 대한 예제가 포함된 사전 제작된 게임이 함께 제공됩니다.

이미 키트를 익숙하게 사용할 수 있고 빠른 정보가 필요한 경우, [레퍼런스 가이드](https://learn.unity.com/tutorial/2d-game-kit-reference-guide)와 [고급 주제](https://learn.unity.com/tutorial/2d-game-kit-advanced-topics)를 확인하세요. 프로젝트 내 Documentation 폴더에서도 확인할 수 있습니다.

Resources

- [2D Game Kit](https://assetstore.unity.com/packages/essentials/tutorial-projects/2d-game-kit-107098)

Languages available:

한국어EnglishEspañol日本語한국어简体中文한국어

## 1. 새로운 씬 만들기

Q&A (0)

프로젝트를 사용하면 새로운 기본 씬을 자동으로 만들 수 있습니다. 이 씬에는 주인공인 엘렌, 작은 플랫폼, 체력(Health) UI 및 주변 이동과 공격에 필요한 모든 요소가 포함되어 있습니다.

이제 새로운 씬을 만들어 보겠습니다.

- 상단 메뉴에서 **Kit Tools**를 클릭합니다.
- **Create New Scene...**을 선택합니다.

[Image: image]

- 새로운 창이 열립니다.

[Image: image]

- **New Scene Name** 옆에 있는 빈 필드에 씬 이름을 입력합니다.
- **Create**를 클릭합니다.

이렇게 하면 프로젝트 루트에 새 씬이 만들어지고 [Build Settings](https://docs.unity3d.com/Manual/BuildSettings.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931743540)에 씬이 추가됩니다.

[Image: image]

작업을 시작할 수 있도록 에디터에서도 새 씬이 열립니다.

[Image: image]단계를 완료로 표시

## 2. 레벨 페인트하기

Q&A (0)

2D 게임 키트에서는 Unity의 [타일맵 기능](https://unity3d.com/learn/tutorials/topics/2d-game-creation/intro-2d-world-building-w-tilemap?playlist=17093&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931743540)을 사용합니다. 이 기능을 사용해 레벨을 빠르고 간편하게 그릴 수 있습니다. 이 키트에는 모든 것이 이미 설정되어 있으므로 바로 시작할 수 있습니다.

레벨 디자인을 시작해 보겠습니다.

- 상단 메뉴에서 **Window > 2D > Tile Palette**로 이동합니다.

[Image: image]

Tile Palette 창이 다음과 같이 표시됩니다.

[Image: image]

사전에 2개의 **타일 팔레트**를 만들어 레벨을 그릴 수 있도록 해 놓았습니다. 이 타일에는 Unity **타일맵**의 **스크립터블 타일(Scriptable Tile)** 시스템이 사용됩니다. 즉 플랫폼에 맞는 스프라이트가 선택됩니다. 현재 선택할 수 있는 스프라이트 스타일은 두 가지로, 풀로 덮인 바위(Grassy Rocks)와 이형 구조물(Alien Structure)입니다.

**Tile Palette**에서 타일 세트가 제대로 선택되어 있는지 확인해야 합니다.

- **Tile Palette Menu**를 클릭합니다.
- **Tileset_Gamekit**를 선택합니다.
- 레벨에 가장 알맞는 타일 유형을 선택합니다.

[Image: image]

이제 씬에서 타일 몇 개를 페인트하여 레벨을 생성해 보겠습니다.

- **Tile Palette**에서 타일 하나를 클릭하여 선택합니다.
- **씬 뷰**로 이동합니다.
- 레벨을 클릭한 다음 드래그하여 그립니다.

실수를 했을 경우에는 Shift 키를 누른 채로 클릭하거나 드래그하여 타일을 지우면 됩니다.

[Image: image]단계를 완료로 표시

## 3. 레벨 테스트하기

Q&A (0)

이제 한 레벨을 생성했으니 레벨 주변을 뛰어다녀보겠습니다.

[Image: image]

- 에디터 상단에서 **플레이** 버튼을 클릭합니다.

[Image: image]

여기에는 디버그 메뉴가 포함되어 있습니다. **게임 뷰**에서 엘렌이 보유한 각 무기를 활성화하거나 비활성화할 수 있는 옵션을 불러오려면 키보드에서 **F12** 키를 누릅니다.

단계를 완료로 표시

## 4. 움직이는 플랫폼 추가하기

Q&A (0)

**씬 뷰**에서 **게임 오브젝트**를 조작하기 위해서는 페인트 모드에 있으면 안 됩니다. 게임 오브젝트를 조작하려면 **Tile Palette**를 닫거나 에디터 왼쪽 상단에서 **Move Tool(이동 툴)**을 선택합니다. 키보드에서 **W** 키를 눌러 **이동 툴**을 선택할 수도 있습니다.

[Image: image]

이제 레벨에 움직이는 플랫폼을 추가해 보겠습니다.

[Image: image]

- **프로젝트** 창으로 이동합니다.
- **Prefabs** > **Interactables**로 이동합니다.
- **MovingPlatform**을 클릭하여 **씬 뷰**로 드래그합니다.
- **계층** 창에서 **MovingPlatform**이 선택되어 있는지 확인합니다.
- W를 눌러 **이동 툴**을 사용합니다.

**MovingPlatform**에서 **이동 툴**을 사용하여 레벨에서 원하는 위치에 놓습니다.

**MovingPlatform**을 선택한 경우 빨간색 점선이 나타나며, **이동 툴** 기즈모가 점선 끝부분에 함께 표시됩니다(빨간색 화살표). 이 선은 게임을 플레이할 때 플랫폼이 움직이는 경로를 나타냅니다.

[Image: image]

- 빨간색 점선 끝에 있는 이동 툴 기즈모를 사용하여 플랫폼이 따라갈 경로를 지정합니다.

[Image: image]

**MovingPlatform**이 따라갈 경로를 미리 보려면 **MovingPlatform**을 선택하고 다음 단계를 수행합니다.

- **인스펙터**로 이동합니다.
- **Moving Platform** 컴포넌트에서 **Preview Position** 슬라이더를 찾습니다.
- 스크럽을 클릭하고 드래그하여 **MovingPlatform**이 이동하게 될 위치를 확인합니다.

사각형 범위 내에서 이 플랫폼 경로에 반복을 설정하여 경로를 약간 더 복잡하게 만들어 보겠습니다. **노드**를 추가하면 이 작업이 가능합니다.

**노드**는 **Moving Platform** 컴포넌트에 대한 추가 내비게이션 지점입니다.

[Image: image]

- **인스펙터**에서 **Moving Platform** 컴포넌트를 찾습니다.
- **Add Node**를 두 번 클릭합니다.

[Image: image]

이렇게 하면 별도로 두 개의 빨간색 점선과 기즈모가 추가됩니다. 해당 기즈모를 사용하여 정사각형 모양 안에 추가 **노드**의 위치를 지정하세요.

마지막 노드에서 첫 부분까지 되돌아가는 경로가 없음을 알 수 있습니다. 이제 플레이를 누르면 마지막 지점에서 멈추고, 경로를 거꾸로 진행하다가 다시 시작됩니다.

플랫폼 설정을 변경하여 루프를 형성하도록 할 수 있습니다.

- **Moving Platform** 컴포넌트에서 **Looping** 옵션을 찾습니다.
- **BACK_FORTH**라고 되어 있는 드롭다운을 클릭합니다.
- **Loop**를 선택합니다.

[Image: image]

이렇게 하면 기즈모에서 루프가 형성되어 플랫폼이 이 경로로 이동합니다.

*참고: 미리보기 슬라이더에서는 전체 루프를 미리 볼 수 없으므로 전체 작동을 확인하려면 플레이를 눌러야 합니다.*

[Image: image]

키트에서 제공하는 모든 컴포넌트에는 작동 방식을 커스터마이즈할 수 있는 다양한 옵션이 있습니다. **Moving Platform** 컴포넌트에서 각 옵션의 역할에 대한 자세한 정보는 [컴포넌트 기술 자료](https://unity3d.com/learn/tutorials/projects/2d-game-kit/moving-platform?playlist=49633&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931743540)에서 움직이는 플랫폼 섹션을 확인하시기 바랍니다.

단계를 완료로 표시

## 5. 이벤트를 사용하여 문 열기

Q&A (0)

2D 게임 키트에서는 이벤트를 사용하여 액션을 만들 수 있습니다. 이벤트를 사용하여 플레이어가 압력 패드를 발로 밟을 때, 문을 여는 동작을 트리거하도록 해보겠습니다.

우선 문을 추가해 보겠습니다.

- **프로젝트** 창에서 **Prefabs > Interactables**로 이동합니다.
- **Door Prefab**을 찾아 **씬 뷰**로 드래그합니다. 플레이어의 경로를 방해하는 곳에 문을 배치합니다.

[Image: image]

이제 씬에 압력 패드를 추가해 보겠습니다.

- **프로젝트** 창에서 **Prefabs > Interactables**로 이동하여 **PressurePad** 프리팹을 찾습니다.
- **문** 앞 쪽의 바닥으로 압력 패드를 드래그합니다.

*참고: 플레이어가 압력 패드를 발로 밟으려 할 때, 패드가 진로를 방해한다고 여겨지면 패드의 높이를 약간 낮추세요. 콜라이더로 인해 플레이어가 움직이지 못 하게 될 수 있습니다.*

[Image: image]

몇 가지 이벤트는 이미 정의되어 있습니다. 예를 들어 **PressurePad**를 발로 밟으면 사운드가 재생되며 빛이 납니다. 이제 **문**에 **PressurePad**를 연결해 보겠습니다.

- **계층** 창에서 **PressurePad**를 선택합니다.
- **인스펙터**에서 **Pressure Pad** 컴포넌트를 찾습니다.
- **On Pressed** 목록에서 오른쪽 하단에 있는 +를 클릭하여 새 이벤트를 추가합니다.
- **계층** 창에서 **Door** **게임 오브젝트**를 이벤트의 None(Object) 필드로 드래그합니다.
- **No Function** 드롭다운에서 **Animator > Play(string)**를 찾습니다.

[Image: image]

- 드롭다운 아래에 표시되는 텍스트 상자에 **DoorOpening**이라고 입력합니다.

[Image: image]

- **플레이**를 누르고 이동 키(**A** 및 **D**)를 사용하여 압력 패드 위로 달려 보게 하세요. 문이 열릴 것입니다!

모든 **애니메이션 클립**은 **프로젝트** 창의 **Art > Animations > Animation Clips**에 저장되어 있습니다. 이벤트에서 다른 애니메이터를 플레이하려면 **애니메이션 클립**의 이름(문자열)을 정확하게 매칭하면 됩니다.

[Image: image]

압력 패드를 배치하는 대신 스위치 슈팅을 원한다면 동일한 단계를 사용하여 작업합니다. 단, Prefabs 폴더에서 **ResusableSwitch**를 선택하면 됩니다. 한 번 시도해 보세요!

단계를 완료로 표시

## 6. 적

Q&A (0)

키트에는 촘퍼(Chomper)와 스피터(Spitter)라는 두 종류의 사전 제작된 적이 포함되어 있습니다. 프로젝트 창의 **Prefabs > Enemies**에서 찾을 수 있습니다.

[Image: image]

두 적 모두 인스펙터의 **Enemy Behaviour** 컴포넌트를 통해 제어됩니다. 이 컴포넌트를 사용하여 적의 속도, 시야각(FOV), 체력 등의 프로퍼티를 조정할 수 있습니다. 두 적 모두 컴포넌트는 동일합니다. 단지 약간 다르게 설정되어 있을 뿐입니다. 특정 값을 입력할 수도 있고, 컴포넌트 프로퍼티를 클릭하고 왼쪽/오른쪽으로 움직여 값을 변경할 수 있습니다.

씬에 **촘퍼**를 추가하고 플레이해 보면서 속도와 시야각(FOV) 설정을 확인해 보세요. 플레이 모드에 있는 동안에는 **F12** 키를 눌러 무기를 사용할 수 있는 상태인지 확인하고 **O** 또는 **K**를 사용하여 공격할 수 있습니다.

[Image: image]

위의 씬에서 **촘퍼**가 선택되어 있습니다. 촘퍼가 돌아서기 전에는 엘렌을 알아채지 못하게 **View FOV**와 **View Direction**을 조정해 두었습니다.

[Image: image]

**Enemy Behaviour** 컴포넌트에 대한 좀 더 자세한 내용은 [컴포넌트 기술 자료](https://unity3d.com/learn/tutorials/projects/2d-game-kit/introduction-reference-guide?playlist=49633&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931743540)를 확인하시기 바랍니다.

단계를 완료로 표시

## 7. 오브젝트를 사용하여 데미지 입히기

Q&A (0)

이 섹션에서는 데미지 시스템에 대해 살펴보겠습니다. 스피터에 박스를 떨어뜨려 제거하는 방법을 단계별로 진행해 볼 텐데, 스피터에게는 좀 미안하네요.

[Image: image]

다음과 같이 엘렌이 위에 있고, 스피터가 한 층 아래에 있는 플랫폼에 위치하도록 레벨을 그립니다.

[Image: image]

- **Prefabs > Enemies**로 이동하여 스피터를 **씬 뷰**로 드래그합니다.
- 스피터를 레벨 하단의 절벽에 가까운 위치에 배치합니다.
- **스피터**를 선택한 상태로 **Enemy Behaviour 스크립트**를 찾습니다.
- **View Distance** 값을 줄여 게임플레이를 테스트하는 동안 **스피터**가 플레이어를 바로 공격하지 않도록 설정합니다.

[Image: image]

- **프로젝트** 창에서 **Prefabs > Interactables**로 이동한 다음 **PushableBox** 프리팹을 클릭해 **씬 뷰**로 드래그합니다.
- **계층** 창에서 **PushableBox**를 선택한 다음 **인스펙터**에서 **Add Component**를 클릭합니다.
- **검색 상자**에 **Damage**를 입력합니다.
- **Damager**를 클릭하여 **PushableBox**에 추가합니다.

**Damager** 컴포넌트는 **Damageable** 컴포넌트가 있는 게임 오브젝트(스피터나 촘퍼 등)에 데미지를 입히게 합니다. 이 시스템의 좀 더 자세한 내용은 [컴포넌트 기술 자료](https://unity3d.com/learn/tutorials/projects/2d-game-kit/introduction-reference-guide?playlist=49633&ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931743540)를 확인하시기 바랍니다.

[Image: image]

**Damager**는 위에서 보이는 것처럼 녹색 충돌 상자로 표시됩니다. 이 상자가 데미지를 주는 영역입니다. 지금은 이 상자에 **PushableBox**가 포함되어 있지 않으므로 스피터 위로 상자를 밀어도 데미지를 입지 않습니다.

이제 이 상자를 **PushableBox**의 크기와 위치에 맞게 옮겨 보겠습니다. 두 가지 방법으로 옮길 수 있습니다.

- 충돌 상자 가장자리에 있는 녹색 점을 선택한 채로 **PushableBox** 위로 드래그합니다.

[Image: image]

- 인스펙터에서 **Damager** 컴포넌트를 찾습니다.
- **Offset** 및 **Size**를 조정하여 충돌 상자의 포지션과 크기를 조절합니다. 텍스트를 클릭한 다음 왼쪽 또는 오른쪽으로 움직이면 가장 간단한 방법으로 값을 조정할 수 있습니다.

[Image: image]

마지막으로 데미지가 해당 게임 오브젝트에 가해지는지 확인해야 합니다. Unity 에디터에서는 다음과 같이 오브젝트를 별도의 ***레이어***로 구분하여 쉽게 찾고 분리할 수 있습니다.

- **PushableBox**를 선택합니다.
- 인스펙터에서 **Damager** 컴포넌트를 찾습니다.
- **HittableLayers** 드롭다운에서 **Enemy 레이어**를 선택합니다.

[Image: image]

이제 **PushableBox**는 스피터처럼 **Enemy** 레이어에 있는 모든 아이템에 데미지를 줍니다.

다른 적이나 엘렌에게도 데미지를 주면서 실습해 보세요!

단계를 완료로 표시

## 8. 데코레이션하기

Q&A (0)

게임 키트에는 데코레이션용 스프라이트가 포함되어 있습니다. 이 스프라이트는 게임 키트에 포함된 예제 게임 "The Explorer"에서 전부 사용되었습니다.

팁: 예제 게임에서 눈에 띄는 스프라이트가 있으면 프로젝트 뷰에서 이름을 확인하고 검색할 수 있습니다.

프로젝트 뷰의 **Art > Sprites > Environment**에서 더 많은 데코레이션을 찾아 인스타그램에서 주목받을 만한 레벨로 꾸며 보세요. 하위 폴더에 많은 항목이 저장되어 있습니다. 작은 화살표를 확장하여 해당 카테고리에 있는 다른 스프라이트를 확인해보세요.

[Image: image]단계를 완료로 표시

## 9. 플레이어 텔레포트하기

Q&A (0)

씬 내의 한 영역에서 다른 영역으로, 또는 서로 다른 레벨 간에 플레이어를 텔레포트할 수 있습니다.

#### **씬 내에서 텔레포트하기**

씬 내에서 플레이어를 텔레포트하려면 **전환(transition)** 설정을 해야 합니다. 이를 위해 다음과 같은 두 가지 프리팹을 만들겠습니다.

- TransitionStart
- TransitionEnd

우선 전환의 시작 지점을 설정해야 합니다.

- 프로젝트 창에서 **Prefabs > SceneControl**로 이동합니다.
- **TransitionStart** 프리팹을 찾습니다.
- **TransitionStart**를 **씬 뷰**로 드래그합니다. 플레이어가 걸어갈 때 콜라이더(녹색 상자)에 접촉하는 위치에 배치합니다. 위의 예제에서는 문 반대편에 배치했습니다.

[Image: image]

목표 지점을 설정하려면

- **SceneControl** 폴더에서 **TransitionStart** 프리팹을 하나 더 **씬 뷰**로 드래그합니다.
- 인스펙터에서 이 프리팹의 이름을 **TransitionEnd**로 변경합니다.

[Image: image]

이제 두 프리팹을 서로 연결하겠습니다.

- **계층** 창에서 **TransitionStart** 게임 오브젝트를 선택합니다.
- **인스펙터**에서 **Transition Point** 컴포넌트를 찾습니다.
- 계층에서 **엘렌** 게임 오브젝트를 **Transition Point** 컴포넌트의 **Transitioning Game Object** 슬롯으로 드래그합니다.
- **Transition Type**을 **Same Scene**으로 설정합니다.

[Image: image]

이렇게 하면 텔레포트하는 오브젝트는 엘렌뿐이며 같은 씬 내에서 텔레포트됩니다.

이제 목표 지점을 설정하겠습니다.

- **TransitionEnd** 게임 오브젝트를 **TransitionPoint** 컴포넌트의 **DestinationTransform** 슬롯으로 드래그합니다.
- **Transition When**을 **On Trigger Enter**로 설정합니다.

**On Trigger Enter**로 설정하면 플레이어가 콜라이더에 접촉했을 경우에만 전환이 활성화되며, 키 입력으로는 동작하지 않습니다. 플레이어가 상호작용 키(**E**)를 눌렀을 경우에만 텔레포트하도록 하려면 **Transition When**을 **Interact Pressed**로 설정하세요.

#### **다른 씬으로 텔레포트하기**

플레이어를 새 씬으로 텔레포트하려면, 다음 두 개의 프리팹이 필요합니다.

- **TransitionStart**는 이전 섹션에서 사용한 것과 같은 프리팹으로, 플레이어를 목표 지점으로 “보냅니다”. 이 프리팹에는 **Transition Point** 컴포넌트가 포함되어 있으며, 텔레포트가 시작되는 위치와 텔레포트를 통해 플레이어를 보낼 위치에 대한 모든 프로퍼티를 정의합니다. 이 프리팹을 전환이 시작되는 위치에 배치합니다.
- **TransitionDestination**은 플레이어를 “수신하는” 프리팹입니다. 여기에는 **Transition Destination** 컴포넌트가 포함되어 있습니다. 이 프리팹을 전환이 끝나는 다른 씬에 배치합니다.

#### **TransitionDestination 설정하기**

시작 지점을 설정할 때 목표 지점에 대한 정보가 필요하므로 먼저 목표 지점을 설정하겠습니다. 씬에 전환을 추가하려면 해당 씬을 열고 프로젝트 창으로 이동한 다음 **Prefabs > SceneControl > TransitionDestination**으로 이동합니다. TransitionDestination을 씬에서 텔레포터가 이동시킬 위치에 배치합니다.

**TransitionDestinaton** 프리팹에는 **Scene Transition Destination** 컴포넌트가 포함되어 있습니다.

[Image: image]

- 먼저 **Destination Tag**를 문자로 지정합니다. 어떤 문자를 사용해도 상관없으며, 씬에서 해당 문자로 설정한 **Scene Transition Destination** 컴포넌트가 하나만 존재하면 됩니다.
- 다음으로 수신할 게임 오브젝트를 지정합니다. 계층 창에 있는 플레이어 게임 오브젝트(엘렌)를 **Transitioning Game Object** 슬롯으로 드래그합니다.
- 마지막으로 목표 씬이 에디터의 빌드 설정에 포함되어 있는지 확인합니다. 이 설정을 확인하려면 **File > Build Settings**으로 이동하여 **Add Open Scenes**을 클릭합니다.

#### **TransitionStart** **설정**하기

이 설정은 몇 가지 사항을 제외하면 이전 섹션과 거의 같습니다.

[Image: image]

- **Transition Type**을 **Different Level**로 설정합니다.
- **New Scene Name**을 엘런을 보낼 씬으로 설정합니다.
- **Transition Destination** 태그를 **Transition Destination** 컴포넌트에서 설정한 **Destination Tag** 문자로 설정합니다.

#### 예

플레이어가 게임의 첫 번째 레벨로 텔레포트되도록 만들어보겠습니다. **Transition Start** 컴포넌트에서 다음과 같이 설정을 변경합니다.

- **Transition Type**을 **Different Level**로 설정합니다.
- **New Scene Name**을 Zone1로 설정합니다.
- **Transition Destination**을 A로 설정합니다.

[Image: image]

플레이를 누르고 전환이 설정된 위치로 걸어갑니다. 플레이어가 Zone1 시작 지점으로 이동할 것입니다.

단계를 완료로 표시

## 10. 활용해보기

Q&A (0)

게임 키트에 있는 대부분의 오브젝트는 압력 패드를 설정할 때 설명했던 이벤트 시스템에서 설정할 수 있습니다.

기존의 씬(Zone 1~5)을 살펴보며 다른 오브젝트들이 이벤트와 트리거를 사용하여 어떻게 설정되는지 확인해 보세요.

모든 컴포넌트와 파라미터에 대한 자세한 내용은 [컴포넌트 기술 자료](https://learn.unity.com/tutorial/2d-game-kit-reference-guide)를 참고하시기 바랍니다.

이제 쉽게 레벨 디자인을 즐겨 보세요!

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
