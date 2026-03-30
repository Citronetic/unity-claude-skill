[Image: image]

# ECS용 물리: Havok Physics for Unity와 Unity Physics

Tutorial

intermediate

+10XP

25 mins

10

Unity Technologies

[Image: ECS용 물리: Havok Physics for Unity와 Unity Physics]Summary

이 튜토리얼에서는 Unity의 ECS(엔티티 컴포넌트 시스템) 프레임워크를 이용하는 프로젝트에서 사용 가능한 두 가지 고급 물리 솔루션인 Havok Physics for Unity와 Unity Physics에 대해 알아보겠습니다.

**중요**: 이 튜토리얼은 2023년 초의 튜토리얼 버전에 반영되는 Unity 2022.2 테크 스트림 이후에만 해당합니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

프로젝트마다 물리 시뮬레이션에 필요한 사항이 다릅니다. Unity에는 다양한 물리 엔진이 있어서 프로젝트의 필요에 맞는 엔진을 선택할 수 있습니다. 이 튜토리얼에서는 Unity의 엔티티 컴포넌트 시스템 프레임워크를 이용하는 프로젝트에서 사용 가능한 두 가지 고급 물리 솔루션인 Havok Physics for Unity와 Unity Physics에 대해 알아보겠습니다.

이 튜토리얼을 완료하면 다음을 수행할 수 있습니다.

- Havok Physics for Unity와 Unity Physics의 주요 이점을 설명합니다.
- Unity Physics와 Havok Physics for Unity의 관계를 설명합니다.
- ECS용 물리 솔루션이 프로젝트에 적합한 경우를 파악합니다.

**중요**: 이 튜토리얼은 Unity의 ECS용 물리 솔루션을 소개합니다. 해당 내용은 DOTS의 일환으로 중급 이상의 경험을 보유한 사용자에게 적합합니다. DOTS는 Unity의 데이터 지향 기술 스택으로서 고도로 최적화된 성능의 복잡한 프로젝트를 만들어야 하는 고급 사용자를 위한 데이터 지향 기술 모음입니다. DOTS 자체에 대해 자세히 알아보려면 새로 출시된 [DOTS 가이드](https://github.com/Unity-Technologies/EntityComponentSystemSamples/tree/master/DOTS_Guide)(GitHub)를 참조하세요.

단계를 완료로 표시

## 2. Unity의 물리

Q&A (0)

Unity의 고급 물리 솔루션에 대해 자세히 알아보기 전에 먼저 기본 사항을 살펴보겠습니다.

개괄적으로 실시간 경험의 물리란 오브젝트의 프로퍼티와 오브젝트가 힘에 반응하는 방식을 의미합니다. 일부 프로젝트는 현실을 모방하는 물리 시뮬레이션을 목적으로 합니다. 예를 들어 레이싱 카를 운전하는 경험을 최대한 사실적으로 모방하고자 하는 게임이 이에 해당합니다. 또 다른 프로젝트는 보다 유연한 접근법을 취하여 오브젝트가 충돌할 때 예기치 못한 동작이 일어나거나 플레이어 캐릭터가 현실에서는 불가능한 방식으로 도약하는 등 게임에서 물리 규칙을 현실과 다르게 구현합니다.

Unity 프로젝트에서 물리를 시뮬레이션하는 방법은 물리 엔진에 의해 결정됩니다. 실시간 엔진이 게임과 시뮬레이션 같은 경험을 만들기 위한 프레임워크인 것과 마찬가지로, **물리 엔진**은 물리 법칙을 프로젝트에서 구현할 수 있도록 게임 엔진과 통합된 프레임워크입니다.

Unity에서는 다양한 물리 엔진 중에서 각 프로젝트에 알맞은 엔진을 선택할 수 있습니다.

#### 객체 지향 프로젝트용 물리 엔진

객체 지향 프로젝트의 경우 [빌트인 3D 물리 엔진](https://docs.unity3d.com/Manual/PhysicsOverview.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067)이나 [빌트인 2D 물리 엔진](https://docs.unity3d.com/Manual/Physics2DReference.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067)을 사용할 수 있습니다.

#### 데이터 지향 프로젝트용 물리 엔진

Unity의 ECS(엔티티 컴포넌트 시스템)는 기존의 객체 지향식이 아닌 데이터 지향식으로 프로젝트를 구성합니다. ECS 기반 프로젝트를 개발하고 있다면 ECS와 호환되는 물리 패키지를 설치해야 합니다. 현재 사용할 수 있는 패키지는 두 가지입니다.

- [Unity Physics](http://docs.unity3d.com/Packages/com.unity.physics@latest/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067): 모든 ECS 프로젝트에서 물리를 시뮬레이션하는 ECS 호환 물리 엔진입니다. Unity Physics는 모든 Unity 에디션의 사용자가 이용할 수 있습니다.
- [Havok Physics for Unity](https://docs.unity3d.com/Packages/com.havok.physics@latest/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067): Havok Physics 엔진을 Unity용으로 구현한 버전으로 Unity Physics 패키지의 확장으로 사용할 수 있습니다. Unity Pro 또는 Unity Enterprise 구독 시 Havok Physics for Unity를 사용할 수 있습니다.

단계를 완료로 표시

## 3. Unity의 DOTS 물리 기본 사항

Q&A (0)

숙련된 크리에이터는 DOTS(데이터 지향 기술 스택)를 활용하여 다량의 요소를 표시하는 게임이나 애플리케이션(예: 각각의 공을 별도의 요소로 표시해야 하는 대형 볼풀 시뮬레이션)의 성능을 대폭 개선할 수 있습니다. 단 DOTS는 항목 수가 적은 프로젝트의 성능에는 큰 영향을 미치지 않습니다.

#### 엔티티 컴포넌트 시스템

엔티티 컴포넌트 시스템은 Unity 데이터 지향 기술 스택의 핵심입니다. 이 시스템은 기본적으로 다음 세 가지 부분으로 구성됩니다.

- [엔티티](https://docs.unity3d.com/Packages/com.unity.entities@latest?subfolder=/manual/concepts-entities.html&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067): 엔티티는 애플리케이션을 채우는 요소입니다. 기본적으로 엔티티는 서로 연결된 데이터 조각을 식별하는 ID와 같습니다. 엔티티는 자체적인 동작이나 데이터가 없습니다.
- [컴포넌트](https://docs.unity3d.com/Packages/com.unity.entities@latest?subfolder=/manual/concepts-components.html&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067): 엔티티와 연결된 데이터로서 엔티티가 아닌 데이터 자체에 의해 구성됩니다. 이러한 구성법은 객체 지향 설계와 데이터 지향 설계의 주요 차이점 중 하나입니다.
- [시스템](https://docs.unity3d.com/Packages/com.unity.entities@latest?subfolder=/manual/concepts-systems.html&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067): 컴포넌트 데이터를 현재 상태에서 다음 상태로 변환하는 로직입니다. 예를 들어 시스템은 엔티티의 속도와 이전 프레임 이후의 시간 간격을 곱한 값을 사용하여 움직이는 모든 엔티티의 위치를 업데이트할 수 있습니다.

#### ECS 물리 워크플로

ECS를 사용하는 프로젝트의 물리 작업을 위한 개괄적 워크플로를 살펴보겠습니다.

1. ECS를 사용하여 프로젝트를 개발할 때는 다른 프로젝트와 마찬가지로 Unity 에디터에서 게임 오브젝트를 만든 다음 [베이킹을 사용하여 게임 오브젝트 데이터를 엔티티 씬에 작성된 엔티티로 변환할 수 있습니다](https://docs.unity3d.com/Packages/com.unity.entities@latest?subfolder=/manual/baking.html&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067).
2. 엔티티 변환 프로세스에서는 물리 저작(authoring) 컴포넌트와 모든 조인트 스크립트의 정보를 엔티티 데이터로 변환합니다.
3. Build Physics World 시스템은 물리 데이터를 런타임 및 다수의 랜덤 액세스 쿼리에 최적화된 포맷으로 변환합니다.
4. 이제 물리 데이터를 처리할 물리 엔진을 Unity Physics와 Havok Physics for Unity 중에서 선택할 수 있습니다.
5. 물리 엔진의 작업이 끝나면 Export Physics World 시스템이 런타임에 최적화된 물리 데이터를 다시 ECS 데이터로 변환합니다.

[Image: image]단계를 완료로 표시

## 4. ECS 워크플로용 물리에 대한 심층적인 이해

Q&A (0)

DOTS 물리 워크플로를 자세히 알아보고 싶은 숙련된 사용자는 유나이트 코펜하겐 2019에서 Unity의 Havok Physics 사용에 관해 나눴던 대화를 녹화한 영상을 시청하세요.

**중요**: 이 영상은 고급 사용자에게 적합합니다. ECS를 사용하는 프로젝트를 위한 물리 엔진 옵션을 개략적으로 이해하려는 경우에는 이 영상을 시청하지 않아도 됩니다.

#### ECS용 물리 — ECS 개요

이 영상에서는 이전 단계에서 설명한 프로세스를 보다 상세하게 알아봅니다.

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

#### ECS용 물리 — 데이터

이 영상에서는 ECS를 사용하는 프로젝트용으로 선택한 물리 엔진에 입력하거나 해당 엔진에서 출력되는 데이터를 설명합니다.

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

단계를 완료로 표시

## 5. 두 ECS 호환 물리 엔진 간의 차이점은 무엇인가요?

Q&A (0)

지금까지 ECS를 사용하는 프로젝트에는 Havok Physics for Unity와 Unity Physics의 두 가지 물리 엔진 중에서 하나를 선택하여 사용할 수 있다는 점을 알아보았습니다. 두 물리 솔루션 모두 Unity의 ECS 프레임워크를 기반으로 하므로 동일한 데이터 프로토콜을 사용합니다. 즉, 콘텐츠나 게임 코드를 리빌드하지 않고도 프로젝트를 두 물리 엔진 간에 전환할 수 있습니다.

Unity Physics와 Havok Physics for Unity 중 하나를 사용하든 두 물리 엔진을 함께 사용하든, 통합 데이터 프로토콜을 통해 한 번만 저작하고 원하는 ECS 호환 물리 시스템을 사용하여 물리를 시뮬레이션할 수 있습니다.

#### Unity Physics

Unity Physics는 Unity의 ECS 프레임워크를 기반으로 만들어졌습니다. 네트워크와 함께 사용할 수 있고 완전히 커스터마이즈 가능하며 바로 사용해도 높은 성능을 얻을 수 있습니다. Unity Physics는 [버스트 컴파일러](https://docs.unity3d.com/Packages/com.unity.burst@latest?subfolder=/manual/index.html&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067)와 [Unity의 C# 잡 시스템](https://docs.unity3d.com/Manual/JobSystem.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067)을 사용하여 다양한 디바이스에서 물리 시뮬레이션의 성능을 최적화합니다.

Unity Physics는 현재 프리뷰 릴리스 상태로 패키지 관리자를 통해 사용할 수 있으며 Unity 2022.2 이후 버전과 호환됩니다. Unity Physics는 Unity 구독과 관계없이 무료로 사용할 수 있습니다.

#### Havok Physics for Unity

Havok Physics for Unity는 복잡한 물리 시뮬레이션을 만들려는 크리에이터를 위한 고급 솔루션입니다. 이 솔루션은 Unity Physics와 동일한 ECS 프레임워크를 사용하여 작성되었으나 클로즈드 소스인 전용 Havok Physics 엔진의 기능과 성능을 포함합니다. Havok Physics 엔진은 네이티브 C++로 작성되었습니다.

Unity Pro 또는 Unity Enterprise를 구독해야만 Havok Physics for Unity를 사용할 수 있습니다.

Havok Physics는 대개 물리적 상호 작용이 많은 복잡한 씬으로 구성된 고사양 그래픽 게임의 물리 시뮬레이션에 고도로 최적화되었습니다. Havok Physics for Unity를 사용하면 다음과 같은 이점이 있습니다.

- 물리 바디의 안정적인 스태킹
- 빠르게 움직이는 물리 바디가 있는 경우 결함 최소화
- 전반적으로 보다 제어된 동작을 얻을 수 있음(특히 최적화되지 않은 충돌 지오메트리로 작업하는 경우)

다음 영상에서는 유니티와 Havok이 협력하여 Unity의 ECS 프레임워크를 기반으로 Havok Physics for Unity를 제작한 방법을 설명합니다.

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

단계를 완료로 표시

## 6. 두 ECS 호환 물리 엔진의 차이점 평가

Q&A (0)

Unity의 [DOTS 샘플 저장소](https://github.com/Unity-Technologies/EntityComponentSystemSamples/)에 있는 Physics Samples 프로젝트를 사용하여 Unity Physics와 Havok Physics for Unity를 모두 테스트할 수 있습니다(해당 에디션에서 액세스할 수 있는 경우).

다음 지침에 따라 두 물리 엔진의 차이점을 평가하세요.

**1.** 아직 설치하지 않은 경우 [Unity 2022.2를 설치](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa)합니다.

**2.** [Physics Samples 프로젝트](https://github.com/Unity-Technologies/EntityComponentSystemSamples/tree/release/samples-1.0-exp)를 다운로드하고 에디터에서 UnityPhysicsExample 프로젝트를 엽니다.

**2 -1**. 압축 경로가 너무 길다는 오류 메세지가 발생할 경우, C드라이브에 압축을 해제해주시길 바랍니다. 해당 저장소는 Main 브랜치가 아닌 **release/sample-1.0exp** 입니다. [최신으로 유지되는 Main 브랜치](https://github.com/Unity-Technologies/EntityComponentSystemSamples/tree/master)에서 다수의 새로운 샘플을 확인하실 수 있습니다.

**3.** 아직 설치하지 않은 경우 패키지 매니저에서 [Havok Physics for Unity 패키지를 설치](https://learn.unity.com/tutorial/project-setup-processes#60ed7a6aedbc2a002520b6ec)합니다.

**4.**프로젝트(Project) 창의 **Assets > Tests > Pyramids > Pyramids**에서**Pyramids**테스트 씬을 엽니다.

**5.**계층 구조에서 **Physics Settings** 게임 오브젝트를 선택합니다**.**

**6.**인스펙터에서 Physics Step 컴포넌트로 이동하여 **Enable Contact Solver Stabilization Heuristic** 설정이 비활성화되었는지 확인합니다.

[Image: image]

안정적인 스태킹을 위해 접촉 속도 교정에 기반하여 Unity Physics의 Contact Solver Stabilization Heuristic을 사용할 수 있습니다. 스태킹 외의 상황에서 이 프로퍼티가 활성화되면 비물리적 동작이 프로젝트에 적용될 수 있습니다.

**7.**  **Play**를 선택하여 Unity Physics 엔진을 사용해 시뮬레이션 씬을 실행한 다음, 한 번 더 선택하여 시뮬레이션을 중지하고 피라미드 스택을 재설정합니다.

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

**8.**  계층 구조에서 **Physics Scene Basic Elements** 게임 오브젝트의 폴드아웃을 펼친 다음 **Physics Settings** 자식 게임 오브젝트를 선택합니다**.**

**9.**인스펙터에서 Physics Step 컴포넌트로 이동하여 **Simulation Type** 프로퍼티를 찾습니다. 이 프로퍼티를 **Havok Physics**로 설정합니다.

[Image: image]

**참고**: 런타임 시 물리 엔진을 전환할 수도 있습니다.

**10.**  피라미드 시뮬레이션을 다시 실행하려면 **Play**를 선택합니다.

**11.**  게임(Game) 뷰에서 다음을 수행할 수 있습니다.

- 왼쪽 클릭으로 동적 게임 오브젝트를 선택하고 드래그합니다.
- 오른쪽 클릭하고 드래그하여 게임 뷰의 보기를 변경합니다.

Havok Physics for Unity는 시뮬레이션 캐시를 사용하므로 Unity Physics에서 Contact Solver Stabilization Heuristic을 활성화하지 않을 때보다 시뮬레이션이 훨씬 더 안정적이라는 사실을 확인할 수 있습니다.

#### 심화 평가

이 단계에서 확인한 동작의 차이는 **Assets** > **Tests** > **Stacking**에 위치한 **ComplexStacking** 씬에서도 볼 수 있습니다. 스태킹 오브젝트에 서로 다른 마찰값을 적용하면 이러한 차이를 확인할 수 있습니다. ComplexStacking 씬 예시의 기본 마찰값은 가장 가까운 것부터 가장 먼 것 순으로 각각 0.4, 0.2, 0.0입니다. Havok Physics는 모든 경우에 기대된 동작을 보여 주는 반면, Unity Physics의 경우 솔버 안정화로 인해 동작이 상당히 개선되지만 여전히 스태킹 불안정성이 일부 존재합니다.

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

## 7. 다음 단계

Q&A (0)

지금까지 ECS용 물리의 기본 사항을 알아보았습니다. 다음을 비롯한 여러 리소스를 활용하여 계속 학습할 수도 있습니다.

- DOTS에 대한 전반적인 이해를 늘리려면 새로운 [DOTS 가이드(GitHub)](https://github.com/Unity-Technologies/EntityComponentSystemSamples/tree/master/DOTS_Guide)와 [DOTS 베스트 프랙티스](https://learn.unity.com/course/dots-best-practices?) 교육 과정부터 시작해 보세요.
- Unity의 [DOTS 물리 솔루션](https://unity.com/unity/physics)에 대해 자세히 알아보려면 [유나이트 코펜하겐 2019의 Havok Physics for Unity 개요 세션 영상](https://www.youtube.com/watch?v=Uv7DWq6KFbk)(YouTube) 전체를 시청하세요.
- ECS용 물리를 이용한 작업을 시작하려면 [Unity Physics](http://docs.unity3d.com/Packages/com.unity.physics@latest?subfolder=/index.html&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067) 및 [Havok Physics for Unity](https://docs.unity3d.com/Packages/com.havok.physics@latest?subfolder=/index.html&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954711067) 패키지 기술 자료를 살펴보세요. 유니티의 [ECS용 물리 포럼](https://forum.unity.com/forums/dots-physics.422/)에서 다른 크리에이터와 소통하는 것도 좋은 방법입니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
