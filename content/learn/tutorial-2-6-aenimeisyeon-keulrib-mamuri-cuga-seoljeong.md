[Image: image]

# 2.6 애니메이션 클립 마무리: 추가 설정

Tutorial

Beginner

+10XP

30 mins

0

(11)

Unity Technologies

[Image: 2.6 애니메이션 클립 마무리: 추가 설정]Summary

이 튜토리얼에서는 휴머노이드와 제네릭 릭을 모두 애니메이션화하는 데 유용하게 사용할 만한 다양한 추가 설정을 살펴봅니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

[**임포트한 애니메이션 클립의 루트 모션 설정**](https://learn.unity.com/tutorial/2-5-setting-the-root-motion-of-imported-animation-clips)에서는 휴머노이드 달리기 예시 애니메이션 클립에 적용되는 다양한 설정을 살펴보았습니다.

이 튜토리얼에서는 휴머노이드와 제네릭 릭을 모두 애니메이션화하는 데 유용하게 사용할 만한 몇 가지 추가 설정을 살펴봅니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.** 프로젝트 창에서 **Assets** > **2.6** **Finishing Imported Animation Clips**로 이동합니다.

이 튜토리얼에 필요한 모든 에셋이 이 폴더에 들어 있습니다.

단계를 완료로 표시

## 3. Mirror 설정 구성

Q&A (0)

이 튜토리얼에서 가장 먼저 살펴볼 설정은**Mirror** 설정입니다. 이 설정은 휴머노이드 리깅을 거친 애니메이션만을 위한 전용 설정입니다.

[Image: image]

Mirror 설정을 활성화하면 캐릭터 정가운데를 기점으로 YZ 평면상의 애니메이션이 뒤집힙니다. 이때 포즈와 루트 모션 모두가 뒤집히므로, 예를 들면 좌회전을 우회전으로 바꾸려는 경우에 이용할 수 있습니다.

Mirror 설정은 의도한 쪽 다리를 위치에 두어도 적절한 시작 포즈가 나오지 않지만 다른 쪽 다리로는 적절한 결과물을 얻을 수 있는 경우에도 유용합니다.

방법은 다음과 같습니다.

**1.**인스펙터에서 **Cycle Offset**을 설정해 반대 포즈를 만듭니다.

**2.  Mirror** 설정을 활성화합니다.

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

## 4. Additive Reference Pose 설정 활성화

Q&A (0)

폴드아웃 전의 마지막 애니메이션 설정은 Unity에서 Additive Reference Pose를 사용해야 하는지 여부를 제어하는 것입니다.

[Image: image]

일반 애니메이션의 경우 애니메이션 커브 값이 바인딩 각각에 대한 기본값을 덮어씁니다. 애디티브 애니메이션을 사용하면 기존 애니메이션을 토대로 개조해 나갈 수 있습니다.

예를 들어, 여러 방향으로 기울어져 있는 캐릭터의 애니메이션이 있다고 가정하고, 이 같은 기울기를 일반 달리기 애니메이션에 추가해 방향을 바꾸는 순간을 강조할 수 있습니다.

애디티브 애니메이션은 기존 애니메이션에 **추가**되었으므로, 레퍼런스 포즈에서 나온 델타로 저장됩니다. 델타는 작은 차이 또는 변화입니다. 기울어져 있는 캐릭터 예제에서 레퍼런스 포즈는 곧은 몸통이고, 애니메이션 데이터는 곧은 몸통과 현재 프레임의 기울기 간 차이입니다.

애니메이션을 애디티브 애니메이션으로 취급하도록 만드는 과정은 다음과 같습니다.

**1.**인스펙터에서 **Additive Reference Pose**를 활성화합니다.

**2.**레퍼런스 포즈 역할을 해야 하는 프레임 번호를 선택합니다.

**참고:** 이 튜토리얼용 예제는 애디티브 애니메이션으로 취급하지 않습니다. **[3.7 애니메이션 레이어 생성 및 설정](https://learn.unity.com/tutorial/3-7-creating-and-configuring-animator-layers?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa062edbc2a001f65dc6f)에서 애디티브 애니메이션에 대해 자세히 살펴보세요.**

단계를 완료로 표시

## 5. 커브 추가

Q&A (0)

애니메이션 클립을 임포트하면 커브가 잠기고 읽기 전용으로 표시됩니다. 하지만 임포트 프로세스의 일부로 더 많은 커브를 추가해 편집할 수 있습니다. 이 같은 커브는 애니메이션 제작 중에 달라질 수 있는 데이터를 저장하는 데 사용되며, 애니메이션 클립을 생성하고 편집할 때 사용한 표준 애니메이션 커브와 혼동해서는 안 됩니다.

커브는 애니메이션 임포터 하단에 있는 **Curves** 폴드아웃에서 생성하고 편집할 수 있습니다.

[Image: image]

커브를 생성하는 방법은 다음과 같습니다.

**1.  Curves** 폴드아웃 아래에서 **추가**(**+**) 버튼을 선택합니다.

[Image: image]

**2.**커브 값을 런타임에 찾을 수 있도록 커브 이름을 지정합니다.

**3.**연계된 Animator 컨트롤러에 커브와 동일한 이름의 파라미터가 있도록 합니다.

이 단계를 올바로 수행하면 커브가 포함된 애니메이션 클립이 플레이되는 동안 Animator 컨트롤러의 파라미터 값이 새로운 커브의 값으로 자동 설정됩니다.

#### 사이클 오프셋 참고 사항

이러한 방식으로 애니메이션 클립에 추가된 커브는 사이클 오프셋을 감안하지 않습니다. 대신 사이클 오프셋을 적용하기 전에 애니메이션의 원본 컷에 맞춰 플레이됩니다.

따라서 커브의 값을 설정하기 위해 프리뷰 창을 이용하는 경우(예: 커브가 발을 내딛을 때의 IK 가중치를 나타내야 하는 경우) 다음과 같이 해야 합니다.

**1.**임시로**Cycle Offset**을 다시 **0**으로 설정합니다.

**2.**커브를 생성합니다.

**3.  Cycle Offset**을 원하는 값으로 재설정합니다.

단계를 완료로 표시

## 6. 커브 편집

Q&A (0)

**커브 에디터**를 노멀로 사용하여 커브를 편집할 수 있습니다. **커브 에디터**를 열려면 커브 이름 오른쪽에 있는 커브의 이미지를 클릭합니다. 커브 이름은 폴드아웃을 확장하면 표시됩니다.

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

키프레임 버튼을 사용하여 애니메이션에 맞춰 커브를 편집할 수도 있습니다. 방법은 다음과 같습니다.

**1.**프리뷰 타임라인 바(프리뷰 창 상단)를 클릭해 애니메이션을 스크럽합니다.

**2. New Keyframe**버튼을 클릭해 새 키프레임을 생성합니다.

**3.**값 필드에서 키프레임의 값을 설정합니다. 왼쪽, 오른쪽 화살표를 사용해 키프레임 사이를 이동할 수 있습니다.

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

**팁:** 프리뷰를 사용했다가 이후에 다시 원하는 값으로 설정하려면 잊지 말고 **Cycle Offset**을 다시 **0**으로 설정하세요.

단계를 완료로 표시

## 7. 임포트 관련 추가 지침

Q&A (0)

#### 애니메이션 이벤트

Unity는 임포트한 애니메이션의 애니메이션 이벤트를 지원합니다. 애니메이션 이벤트에 대한 더 자세한 내용은 [**2.7 애니메이션 이벤트 생성**](https://learn.unity.com/tutorial/2-7-creating-and-configuring-animation-events?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69)을 참조하세요.

#### 트랜스폼 및 아바타 마스킹

애니메이션 클립을 임포트할 때 모델의 계층 구조에서 트랜스폼의 일부만 사용할 수 있습니다.

이 과정은 아바타 마스킹과 비슷하게 진행되지만, 클립 단위로 사용되며 에셋을 필요로 하지 않습니다. 애니메이션의 일부만 필요할 경우에 이 설정을 사용해야 합니다. 아바타 마스킹에 대해서는 [**2.9 휴머노이드 릭 설정**](https://learn.unity.com/tutorial/2-9-configuring-humanoid-rigs?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69)에서 더 자세히 살펴보겠습니다.

#### 루트 모션 오버라이드

Motion 탭에서 릭의 일부로 선택한 루트 모션 노드에 대한 오버라이드를 선택할 수 있습니다. 루트 모션 오버라이드에 대한 자세한 내용은 [**2.8 제네릭 릭 설정**](https://learn.unity.com/tutorial/2-8-configuring-generic-rigs?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69)에서 다룹니다.

#### 임포트 메시지

Import Messages 폴드아웃에는 아무 설정도 들어 있지 않습니다. 대신 임포트 프로세스로 인해 변경되었을 수 있는 내용에 대한 정보가 포함되어 있습니다. 애니메이션이 생성된 DCC(디지털 콘텐츠 제작) 소프트웨어와 Unity에서 해당 애니메이션이 다르게 보일 경우, 임포트 메시지를 확인해 이유가 무엇인지에 대한 정보를 알아보세요.

단계를 완료로 표시

## 8. 요약

Q&A (0)

이 튜토리얼에서는 휴머노이드와 제네릭 릭을 모두 애니메이션화하는 데 유용하게 사용할 만한 여러 추가 설정을 살펴보았습니다. 살펴본 내용은 다음과 같습니다.

- Mirror 설정을 설정하는 방법
- Additive Reference Pose를 사용하는 방법과 애니메이션을 애디티브 포즈로 설정하는 방법
- 사이클 오프셋 및 키프레임을 사용하여 커브를 추가하고 편집하는 방법

이어지는 다음 튜토리얼에서는 애니메이션 이벤트를 생성하고 설정합니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
