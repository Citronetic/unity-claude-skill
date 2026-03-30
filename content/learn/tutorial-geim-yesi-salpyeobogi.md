[Image: image]

# 게임 예시 살펴보기

Tutorial

intermediate

+10XP

20 mins

1

(7)

Unity Technologies

[Image: 게임 예시 살펴보기]Summary

이 튜토리얼에서는 AR 게임 예시를 살펴보고 기본적인 설정을 커스터마이즈해 보겠습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 Mars 템플릿으로 샘플 플랫포머 게임을 프로젝트에 추가해 보겠습니다. Unity 에디터에서 해당 게임을 살펴보고 설정을 변경해 보면서 Unity Mars의 주요 개념에 대한 이해를 다져 봅니다.

단계를 완료로 표시

## 2. 게임 템플릿 설정하기

Q&A (0)

아래 설명을 따라 Unity 프로젝트에 샘플 게임을 설치하세요.

**1.**  메인 메뉴에서 **Window** > **Content Manager**로 이동합니다.

**2.**  **Unity MARS Platformer Template**을 선택합니다.

**3.**  **Install**을 선택합니다.

**4.**  Import Unity Package 대화 창이 나타나면 모든 에셋이 포함되었는지 확인한 다음 **Import**를 선택합니다.

**5.**  메인 메뉴에서 **Window** > **MARS** > **Choose Template**으로 이동합니다.

**6.**  **Game - Simple** 템플릿을 선택합니다. 게임 씬이 씬(Scene) 뷰에 로드됩니다.

템플릿을 열면 작은 로봇 캐릭터 1개와 파란색 크리스털 9개가 씬 뷰의 수평면에 그리드 패턴으로 표시됩니다. 이 디지털 오브젝트는 Simulation View와 Device View 창에도 나타납니다.

단계를 완료로 표시

## 3. 샘플 게임의 주요 특징

Q&A (0)

Unity Mars용 간단 샘플 게임에서 플레이어는 로봇 캐릭터를 조종하여 다양한 표면 위의 크리스털을 모을 수 있습니다.

이 샘플 게임의 목적은 다음과 같이 Unity Mars의 주요 개념을 시연하는 것입니다.

- 게임에서 수집형 오브젝트의 위치를 변경하는 등 AR 경험에서 디지털 오브젝트를 복제하고 설정하는 방법.
- 디지털 오브젝트를 사용하여 추적된 평면에 표면을 생성하고 해당 표면을 사용하도록 동적 캐릭터를 설정하는 방법(예: 디지털 캐릭터가 앱 사용자의 공간에 존재하는 물리적 테이블 위를 거닐 수 있게 만들기).
- 프록시를 **프록시 그룹**으로 구성하여 복잡한 AR 경험을 만들고 더욱 정교하게 제어하는 방법.

이 튜토리얼에서는 기본부터 시작하여 첫 두 가지 개념을 살펴보겠습니다. 이번에는 프록시 그룹으로 게임을 커스터마이즈해 보고 다음 튜토리얼에서 Unity Mars 관련 개념을 추가로 학습하겠습니다.

단계를 완료로 표시

## 4. 디지털 오브젝트 복제하기

Q&A (0)

사용자는 자신이 만든 AR 앱이 디지털 오브젝트 프리팹의 단일 인스턴스를 앱에서 찾은 특정 프록시(또는 프록시 그룹)와 연결하도록 명령할 수 있습니다. 하지만 프리팹의 여러 인스턴스를 그와 일치하는 실제 환경의 여러 오브젝트와 연결하려면 리플리케이터를 사용하는 것이 가장 효율적입니다.

**리플리케이터**를 사용하면 설정한 일치 조건이 충족될 때마다 프록시를 복제할 수 있습니다. 예를 들어 평면 조건으로 프록시를 설정함으로써 일치 시에 AR 앱의 디지털 환경이 부분적으로 그 위에 표시되게 할 수 있습니다. 이때 해당 프록시를 리플리케이터에 넣으면 조건과 일치하는 모든 실제 오브젝트에 해당 프록시가 복제됩니다.

게임의 수집형 크리스털 오브젝트에 대한 프록시는 리플리케이터가 제어합니다. 아래 설명을 따라 크리스털 오브젝트를 위한 리플리케이터를 설정하세요.

**1.**  MARS Panel의 Content Hierarchy에서 폴드아웃을 선택하여 **Place crystals on all reasonable sized surfaces**를 펼칩니다.

[Image: image]

**2.**  Content Hierarchy에서 **Horizontal Surface** 게임 오브젝트를 선택합니다.

**3.**  인스펙터(Inspector)에서 Alignment Condition MARS 컴포넌트를 찾아 펼칩니다. Alignment는 프록시가 실제 오브젝트와 일치하는 방식을 제어할 수 있는 조건 중 하나입니다.

**4.**  **Alignment** 프로퍼티를 **Nothing**으로 설정합니다. 이렇게 하면 Simulation View에서 크리스털이 사라집니다.

**5.**  **Alignment** 프로퍼티를 **Vertical**로 설정합니다. Simulation View의 모든 수직 표면에 크리스털이 나타납니다.

[Image: image]단계를 완료로 표시

## 5. 실제 오브젝트에 표면 만들기

Q&A (0)

디지털 오브젝트가 실제 환경과 상호 작용하게 만들고 싶다면 메시 콜라이더를 사용해야 합니다. 예를 들어 샘플 게임의 로봇 캐릭터가 테이블 위를 거닐 수 있게 만들고 싶다면 캐릭터 움직임에 적합한 프록시 조건을 만족하는 모든 표면에 메시 콜라이더를 설정해야 합니다. Unity Mars에서 **Build Surface Action** Mars 컴포넌트를 사용해 이 작업을 수행할 수 있습니다.

아래 설명을 따라 샘플 게임에서 Build Surface Action이 어떻게 작동하는지 살펴보세요.

**1.**  MARS Panel의 Content Hierarchy에서 **Put colliders on all walkable surfaces**를 선택합니다.

**2.**  **Put colliders on all walkable surfaces** 게임 오브젝트를 펼치고 복제된 프록시 자식 게임 오브젝트를 확인합니다.

**3.** **Surface that can fit character (Clone)** 자식 게임 오브젝트 중 하나를 선택합니다.

**4.**  인스펙터에서 Plane Size Condition MARS 컴포넌트를 찾아 펼칩니다. 이 컴포넌트를 사용해 최소 크기를 설정하면 프록시가 해당 크기를 충족하거나 초과하는 오브젝트에만 일치하게 할 수 있습니다. 그러면 로봇 캐릭터가 충분한 넓이의 표면에만 나타나게 됩니다.

**5.**  Build Surface Action MARS 컴포넌트를 찾아 펼칩니다. 일치하는 표면에서 메시를 만드는 데 Mesh Collider 또는 Mesh Filter 컴포넌트와 함께 사용되는 요소입니다.

**6.** Mesh Collider 컴포넌트를 찾아 확인합니다.

**7.**  Build Surface Action을 Mesh Collider와 함께 사용하여 이 프록시 조건과 일치하는 모든 표면에서 메시 콜라이더를 업데이트하고 설정합니다.

**참고**: 이 과정에 대한 상세한 안내가 필요하다면 Build Surface Action 컴포넌트의 ? 아이콘을 선택하거나 [컴포넌트 기술 자료를 확인해 보세요](https://docs.unity3d.com/Packages/com.unity.mars@1.5/manual/ReferenceGuideActions.html#build-surface-action-buildsurfaceaction?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955737007).

단계를 완료로 표시

## 6. 캐릭터 움직임의 작동 방식 확인하기

Q&A (0)

샘플 게임 Unit-E의 로봇 캐릭터는 표면 위를 굴러다니거나, 다른 표면으로 점프하거나, 생성된 크리스털을 수집할 수 있습니다.

프록시 조건을 사용하여 실제 환경의 표면에서 캐릭터가 움직일 수 있게 만들었으니, 아래 설명을 따라 로봇 자체의 작동 방식을 살펴보세요.

**1.** MARS Panel의 Content Hierarchy에서 **Unit-E** 게임 오브젝트 프리팹을 선택합니다. 이 캐릭터는 Build Surface Action에서 생성된 콜라이더를 사용해 실제 환경을 누빕니다.

**2.** 인스펙터에서 Direct AR Character Controller (Script) 컴포넌트를 찾아 확인합니다.

[Image: image]

캐릭터의 가속, 감속, 속도를 조정할 수 있는 다양한 프로퍼티를 살펴보세요.

**팁**: Unit-E의 속도를 높이고 가속을 줄인 결과를 현재의 플레이어 경험과 비교해 보세요.

단계를 완료로 표시

## 7. 다음 단계

Q&A (0)

이제 샘플 게임을 살펴봤으니 몇 가지 변경 사항을 적용하면서 Unity Mars의 주요 개념을 자세히 익힐 수 있게 되었습니다. 다음 튜토리얼에서는 사전 설정된 에셋을 사용해 수집형 오브젝트를 추가로 만들고 캐릭터를 설정해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
