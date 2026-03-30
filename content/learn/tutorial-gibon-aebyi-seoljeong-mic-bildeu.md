[Image: image]

# 기본 앱의 설정 및 빌드

Tutorial

intermediate

+10XP

30 mins

1

(8)

Unity Technologies

[Image: 기본 앱의 설정 및 빌드]Summary

이 튜토리얼에서는 선택한 모델을 수평 표면에 표시하는 기본적인 AR 앱을 빌드해 보겠습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이전 튜토리얼에서는 실제 환경의 수평면을 대신하는 수평면 게임 오브젝트인 프록시를 포함한 샘플 씬을 만들고 빌드해 봤습니다. 이 튜토리얼에서는 규칙 워크플로와 Unity Mars 컴포넌트를 사용하여 프록시에 조건을 추가해 기본 앱을 개선하면서 Unity Mars에 대해 더욱 자세히 알아보겠습니다.

단계를 완료로 표시

## 2. 새로운 규칙 만들기

Q&A (0)

우리는 이미 계층(Hierarchy) 창의 MARS 메뉴 옵션을 사용해 프록시를 만들었습니다. 하지만 Unity Mars를 처음 접하는 크리에이터를 위한 안내가 제공되는 프록시 생성 및 설정 방법이 있습니다. 이를 규칙(Rule) 워크플로라고 합니다.

**규칙** 워크플로는 사용자에게 AR 콘텐츠 설정 과정을 안내하는 워크플로입니다. 규칙 워크플로 외부에서 안내 없이 AR 오브젝트를 생성할 수 있습니다만 그러기 위해선 Unity Mars의 개념 및 오브젝트에 대해 상세히 알고 있어야 합니다.

아래 설명을 따라 새로운 규칙을 만들어 보세요.

**1.**   계층 창에서 기존의 **Horizontal Plane** 게임 오브젝트와 해당 자식 **Sphere**를 삭제합니다. 이 요소는 테스트 씬에서 사용했던 것이며 이번에는 기본 앱을 위한 새로운 프록시를 만들 것입니다.

**2.**  메인 메뉴에서 **Window** > **MARS** > **Proxy Rule Set**로 이동해 Proxy Rule Set 창을 엽니다.

**3.**  **Add Rule**을 선택합니다. MARS는 "On Every Horizontal Surface (Proxy)"라는 이름을 지니고 있으며 내용이 존재하지 않는 규칙을 기본적으로 생성합니다. Simulation View에는 평면 프록시를 위한 시각화 도구가 나타나고 씬(Scene) 뷰의 모든 일치하는 표면 위에는 제네릭 프록시 기즈모가 나타날 것입니다.

**4.  새로 생성한 규칙의 오른쪽으로 커서를 가져갑니다. Add Content to 'Horizontal Surface'**를 선택한 다음 **'Spawn Object'**를 선택합니다.

[Image: image][Image: image]

**5.**  일치하는 표면에 생성할 오브젝트를 선택합니다. 오브젝트를 선택하면 규칙 아래의 들여쓰기가 적용된 행에 해당 오브젝트가 나열됩니다. 이 튜토리얼에서는 사과 모델을 선택하겠습니다.

**6.**  Simulation View에서 오른쪽 클릭한 상태로 WASD 키를 사용해 씬을 둘러봅니다. 선택한 오브젝트가 의자, 소파, 커피 테이블, 협탁 등 모든 수평면에 표시된 것을 확인할 수 있습니다.

[Image: image]

**7.**  Proxy Rule Set 창에서 드롭다운을 사용해 규칙의 빈도를 **Every**에서 **One**으로 변경합니다.

[Image: image]

이렇게 설정하면 MARS가 규칙과 일치하는 것을 하나만 찾아서 생성하며 Simulation View에 반영됩니다. 이 예시의 Simulation View에서 사과 모델은 창가에 있는 협탁 평면에만 표시됩니다.

[Image: image]

규칙 워크플로에 대해 자세히 알고 싶다면 [규칙에 대한 Unity Mars 기술 자료를 확인해 보세요](https://docs.unity3d.com/Packages/com.unity.mars@1.5/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956163129).

단계를 완료로 표시

## 3. Unity Mars 컴포넌트란?

Q&A (0)

규칙 설정이 프록시를 설정하는 유일한 방법은 아닙니다. 특정 Unity Mars 컴포넌트를 사용하여 디지털 콘텐츠가 실제 환경과 일치하는 방식을 정의, 제한, 제어하는 것도 가능합니다.

Unity Mars에는 세 가지 유형의 컴포넌트가 존재합니다.

- **Unity Mars Condition**: Condition 컴포넌트는 프록시가 실제 오브젝트와 일치하기 위해 충족해야 하는 요건을 정의할 수 있습니다.
- **Unity Mars Action**: Action 컴포넌트는 프록시의 조건이 일치하거나 조건에 대한 Mars 데이터가 바뀔 때 일어날 반응을 정의할 수 있습니다.
- **Unity Mars Force**: Force 컴포넌트는 프록시 게임 오브젝트를 최종 위치로 밀거나, 당기거나, 고정하는 유연한 스프링 같은 힘의 연결 구조를 표현할 수 있습니다. 하나의 게임 오브젝트에 작용하는 여러 힘을 결합해 다른 오브젝트 배치에 영향을 미칠 수 있습니다.

이 튜토리얼에서는 기본 앱을 위해 설정한 프록시에 Unity Mars Condition 컴포넌트를 추가해 보겠습니다.

#### Unity Mars Condition 컴포넌트

**조건(Condition)**은 오브젝트 크기나 컬러 등 실제 오브젝트의 단일 프로퍼티를 정의하는 컴포넌트 유형입니다.

각 조건에는 하나의 특성과 그 특성이 지닌 값 유형의 단일 인스턴스가 지정된 값과 얼마나 일치하는지 평가하는 방법이 포함되어 있습니다. Unity Mars가 프록시를 일치시키고 배치하기 위해 주어진 환경에서 충족해야 하는 제한 조건이라고 생각하면 됩니다.

보통은 실제 오브젝트의 복잡한 정의를 세우기 위해서 프록시에 여러 조건을 연결해야 합니다. 먼저 일반적인 조건으로 시작해서 더욱 상세한 내용을 추가해 나가는 것이 좋습니다. 예를 들면 평면 조건을 먼저 추가하고 해당 조건이 일치하기 위한 크기와 방향을 정의하는 것입니다.

단계를 완료로 표시

## 4. 프록시에 조건 추가하기

Q&A (0)

아래 설명을 따라 Unity Mars Condition을 추가하여 선택한 오브젝트가 생성될 수평면의 크기를 지정하세요.

**1.** Proxy Rule Set 창(**Window** > **Mars** > **Proxy Rule Set**)에서 규칙을 선택합니다. 그러면 규칙이 인스펙터(Inspector)에 나타날 것입니다.

**2.**  인스펙터에서 Proxy (Script) 컴포넌트의 맨 아래로 이동해 **Add MARS Component…**> **Condition** > **Plane Size**를 선택합니다.

이 조건을 활용해 Unity Mars가 지정된 크기의 표면을 발견할 때만 프록시가 나타나게 할 수 있습니다.

**3.**  Proxy (Script Inspector) 컴포넌트의 Mars 컴포넌트 목록 마지막에서 **Plane Size Condition**을 찾습니다. Mars 컴포넌트 프로퍼티가 표시되어 있지 않다면 폴드아웃 화살표를 선택해 펼칩니다.

[Image: image]

**4.** **Minimum Size** **X** 및 **Y** 값을 **0.3**으로 설정합니다. 이렇게 하면 선택한 모델이 수평 표면에 맞아떨어지게 됩니다.

**참고**: 이 앱에서는 최대 크기 제한이 필요하지 않으므로 **Maximum Size** 프로퍼티를 활성화하지 마세요.

단계를 완료로 표시

## 5. Simulation View에서 앱 확인하기

Q&A (0)

실제 기기에서 콘텐츠를 테스트하기 전에 Simulation View를 사용하여 반복 작업(iteration)을 수행하고 프록시가 의도한 대로 작동하는지 확인할 수 있습니다.

아래 설명을 따라 빌드 전에 앱을 점검해 보세요.

**1.**커스텀 Unity 에디터 레이아웃에서 씬 뷰의 아래에 배치한 Simulation View로 이동합니다. Simulation View가 닫혀 있다면 메인 메뉴에서 열 수 있습니다(**Window** > **MARS** > **Simulation View)**.

**2.**  Simulation View 창을 오른쪽으로 펼쳐서 더욱 많은 콘텐츠가 창에 표시되게 하는 것도 좋습니다. 이렇게 하면 Device View 창의 폭이 줄어듭니다.

**3.**  선택한 모델이 창가의 테이블에만 표시되는지 확인합니다.

**중요**: Proxy Rule Set를 다르게 설정했다면 Simulation View 창에 표시되는 콘텐츠에 해당 선택 사항이 반영됩니다.

Simulation View를 통한 테스트에 대해 자세히 알고 싶다면 [Unity Mars 기술 자료](https://docs.unity3d.com/Packages/com.unity.mars@1.5/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956163129)를 확인하세요.

단계를 완료로 표시

## 6. 앱 빌드 및 실행

Q&A (0)

Simulation View에서 모든 것을 설정하고 테스트했으니 [AR 기기에 프로젝트를 빌드](https://learn.unity.com/tutorial/6389eb20edbc2a3fd87aef5a?preview=true#6389ed31edbc2a3dbacac4ac)할 차례입니다.

앱을 실행했을 때 Unity Mars가 최소 30x30cm의 표면을 찾아내면 선택한 모델을 그 위에 배치할 것입니다.

단계를 완료로 표시

## 7. 다음 단계

Q&A (0)

Unity Mars를 사용해 기본적인 AR 앱을 만들고 빌드했습니다. 마지막 두 편의 입문자용 튜토리얼에서는 Unity Mars의 주요 개념을 자세히 알아볼 것이며 게임 템플릿 예시를 살펴보고 커스터마이즈할 것입니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
