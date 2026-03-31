[Image: image]

# 크리에이터 키트: 코딩의 기초 시작

Tutorial

Beginner

+0XP

10 mins

4

(38)

Unity Technologies

[Image: 크리에이터 키트: 코딩의 기초 시작]Summary

첫 번째 튜토리얼에서 배울 내용은 다음과 같습니다.

- Unity 에디터에서 크리에이터 키트를 설정합니다.
- Unity 에디터 내비게이션 및 기능을 검토합니다.
- 예제 크리에이터 키트 게임을 테스트합니다.

이번 과정을 완료하면 Unity에서 사용하는 프로그래밍을 더 살펴볼 수 있습니다.

Languages available:

한국어English日本語한국어简体中文한국어

## 1. 개요

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 2:12Loaded: 0.00%0:00Remaining Time -2:121xPlayback Rate

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

크리에이터 키트: 코딩의 기초 튜토리얼에 오신 것을 환영합니다. 이 프로젝트에서는 액션 RPG 게임을 통해 Unity에서 사용되는 코드 작성의 기초를 학습합니다.

이 프로젝트는 다음과 같은 내용에 중점을 둔 튜토리얼로 구성되어 있습니다.

- **10단계 튜토리얼을 통해** **크리에이터 키트 에셋 임포트부터 시작해** 커스텀 스크립트 첫 작성까지, Unity용 C# 스크립트 편집의 기초를 배울 수 있습니다.
- **참조용 튜토리얼로**미리 제작된 템플릿을 활용해 게임을 추가로 커스터마이즈할 수 있습니다.

#### 선행 학습

코드 작성 없이 Unity로 디지털 콘텐츠를 제작하는 방법을 소개하는 다음 과정 중 하나를 미리 배워 두면 이 프로젝트의 학습 효과를 높일 수 있습니다.

- [크리에이터 키트: FPS](https://learn.unity.com/project/creator-kit-fps)
- [크리에이터 키트: 퍼즐](https://learn.unity.com/project/creator-kit-puzzle)
- [크리에이터 키트: RPG](https://learn.unity.com/project/creator-kit-rpg)

키트별로 제공하는 입문자용 환경은 서로 다르지만, Unity 에디터에 대해 배운 내용은 모두 이 프로젝트를 배우는 데에도 도움이 됩니다. 아직 둘러보지 않았다면 가장 재미있어 보이는 키트를 진행해 본 다음 이 프로젝트로 돌아오세요.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

#### Unity Hub 업데이트

Unity 프로젝트 설정을 시작하기 전에 Unity Hub를 최신 릴리스로 업데이트하는 것이 좋습니다. 이전 버전의 Hub를 사용할 경우 제공된 지침과 실제 경험하는 내용에 차이가 있을 수 있습니다.

#### Unity 에디터 기초 확인

Unity 에디터의 기본 사항을 다시 확인하고 싶을 때는 언제든지 [**Unity 에디터 둘러보기**](https://learn.unity.com/tutorial/explore-the-unity-editor-1)를 살펴보세요.

#### Unity 프로젝트 설정

Unity 프로젝트를 설정하는 방법은 다음과 같습니다.

**1.**  **Unity Hub**를 엽니다.

**2.** [새로운 Unity 프로젝트를](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) **주요 템플릿** 중 하나(2D 또는 3D)를 사용해서 생성합니다.  어떤 주요 템플릿을 선택해도 좋습니다. 임포트하는 패키지가 기본 템플릿 설정을 오버라이드하게 됩니다.

**3.**  Unity 에셋 스토어의 [**크리에이터 키트: 코딩의 기초** 에셋](https://assetstore.unity.com/packages/templates/tutorials/creator-kit-beginner-code-151986)으로 이동합니다.

**4.** [에셋을 다운로드하고 Unity 프로젝트로 임포트합니다.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)

단계를 완료로 표시

## 3. Unity에서 진행하는 작업의 주요 개념 살펴보기

Q&A (0)

게임 스크립트 편집에 대해 알아보기에 앞서, 코드 작성 없이 진행했던 크리에이터 키트에서 살펴봤던 주요 개념을 다시 확인해 보겠습니다.

#### 씬

Unity에서는 플레이어와 상호 작용할 수 있는 게임 영역이 일반적으로 1개 이상의****씬(Scene)으로 구성되어 있습니다. 작은 게임에는 1개의 씬만 사용할 수도 있고, 큰 게임에는 수백 개를 사용할 수도 있습니다. 크리에이터 키트: 코딩의 기초에서 사용된 예제 게임은 몇 가지 다양한 씬을 사용하여 만들어졌으며, 이 튜토리얼에서는 게임을 플레이하고 커스터마이즈하는 데 사용하는 씬을 **예제 씬**이라고 합니다.

#### 게임 오브젝트 및 컴포넌트

Unity에서는 게임 월드 내 모든 오브젝트가 **게임 오브젝트**로 존재합니다. 게임 오브젝트에 알맞은 **컴포넌트**를 설정하면 다양한 기능을 부여할 수 있습니다.

새 게임 오브젝트는 트랜스폼 컴포넌트가 추가된 상태로 생성됩니다. 이 컴포넌트는 3D 또는 2D 게임스페이스에서 게임 오브젝트의 위치 프로퍼티를 제어합니다. 다른 컴포넌트는 모두 인스펙터에서 수동으로 추가해야 합니다.

#### 프리팹

프리팹은**** 게임에서 재사용할 게임 오브젝트를 구성하고 저장하는 데 매우 유용합니다. 프리팹은 특정 게임 오브젝트의 컴포넌트와 프로퍼티를 저장하고 씬 내에서 여러 인스턴스를 생성할 수 있도록 하는 템플릿 역할을 합니다.

하나의 씬 안에서 복사한 프리팹은 모두 서로 연결됩니다. 즉, 체력 물약 프리팹의 오브젝트 값을 변경하면 같은 씬에 복사한 프리팹도 값이 모두 동일하게 변경됩니다. 하지만 게임 오브젝트의 특정 인스턴스를 기본 프리팹 설정과 다르게 만들 수도 있습니다.

단계를 완료로 표시

## 4. 게임 테스트

Q&A (0)

이제 Rancho Rodadora 게임을 체험해 보겠습니다.

**참고:**이 크리에이터 키트의 시스템을 커스터마이즈하면 보다 완전한 플레이 환경을 만들 수 있지만, 커스터마이즈는 대부분 사용자가 직접 수행해야 합니다. 따라서 이 튜토리얼은 약간 미완성처럼 느껴질 수 있지만, 제공되는 단계별 지원을 완료하면 코드를 한 줄로 정리할 수 있도록 참조용 가이드를 준비했습니다.

다음 단계를 따라 기본 게임을 플레이해 보세요.

**1.  프로젝트 창**에서 *Assets/Creator Kit - Beginner Code/Scenes* 폴더로 이동합니다.

**2.  ExampleScene** 씬 아이콘을 더블 클릭하여 씬을 엽니다.

[Image: image]

**3.** 툴바의 **플레이** 버튼을 클릭하면 플레이 모드가 시작되고 게임을 테스트할 수 있습니다.

[Image: image]

(게임 테스트를 완료하면 다시 플레이 버튼을 클릭하여 플레이 모드를 종료합니다.)

#### **내비게이션**

이 게임은 포인트 앤 클릭 컨트롤 시스템 기반의 핵 앤 슬래시 RPG 게임입니다. 클릭할 수 있는 대상은 다음과 같습니다.

- 움직이려는 위치를 클릭하여 이동합니다.
- 대상을 클릭하여 공격합니다.
- 아이템을 클릭하여 인벤토리에 추가합니다.

이제 시작입니다.
사악한 **훈련용 더미**를 공격해 보세요. 스크롤 휠을 사용하여 확대하거나 축소할 수 있습니다.

[Image: image]

#### **인벤토리와 캐릭터 스탯**

화면 왼쪽 하단 코너에서 **인벤토리 가방**을 클릭하여 다음을 수행합니다.

- 캐릭터 스탯(체력과 방어력, 민첩성 등)을 확인합니다.
- 장비와 인벤토리 아이템을 확인합니다. 아이템 위에 커서를 올리면 자세한 내용이 표시됩니다.
- 아이콘을 더블 클릭하여 아이템을 사용하거나 장착합니다.

인벤토리는 키보드 단축키 **I**로 열거나 닫을 수도 있습니다.

[Image: image]단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
