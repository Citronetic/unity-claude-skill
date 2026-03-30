[Image: image]

# 2.2 애니메이션 클립 편집

Tutorial

Beginner

+10XP

50 mins

0

(15)

Unity Technologies

[Image: 2.2 애니메이션 클립 편집]Summary

이 튜토리얼에서는 Unity 에디터에서 간단한 애니메이션 클립을 생성하고 편집하는 방법을 알아봅니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

[**2.1: Animation 창: 기능 및 설정**](https://learn.unity.com/tutorial/2-1-animation-window-features-and-settings)에서 Animation 창의 다양한 기능을 살펴보았습니다. 이 튜토리얼에서는 Animation 창에서 직접 애니메이션 클립을 생성하고 편집해 보겠습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.** 프로젝트 창에서 **Assets** > **2.2 - Editing Animation Clips** > **Scenes**로 이동하고 **StreetLampExample**을 더블 클릭해 씬을 엽니다.

단계를 완료로 표시

## 3. 복습: 애니메이션 클립의 데이터

Q&A (0)

애니메이션 클립에 저장된 애니메이션 데이터는 바인딩과 값으로 존재합니다.

이 튜토리얼을 시작하기 전에 이 데이터에 대한 주요 정보를 아래와 같이 정리해 보겠습니다.

- 바인딩은 게임 오브젝트 또는 컴포넌트의 필드 중 애니메이션을 재생하는 동안 변경되어야 하는 필드를 나타냅니다.
- 값은 특정 시점에 해당 필드가 변경되어야 하는 값을 나타냅니다. 일반적으로 이 값은 시간이 지나면 바뀌는 플로트(소수 값)이며 커브로 표시됩니다.

Animation 창(Animator 창과 다름)에 애니메이션 클립과 연계된 바인딩과 값이 표시됩니다. Animation 창을 사용하여 애니메이션 클립의 바인딩과 값을 모두 편집할 수 있습니다.

단계를 완료로 표시

## 4. LightFlicker 애니메이션 클립에 바인딩 추가

Q&A (0)

바인딩을 사용하면 애니메이션 클립의 여러 부분을 변경할 수 있습니다. LightFlicker 애니메이션 클립에서 광원의 컬러를 변경하는 단계를 통해 이 프로세스를 살펴보겠습니다.

LightFlicker 애니메이션 클립에 새로운 바인딩을 추가하는 방법은 다음과 같습니다.

**1.** 상단 메뉴에서 **Window** > **Animation** > **Animation**으로 이동하고 Asset Store 창 옆에 고정합니다.

**2.**계층 구조에서 **StreetLamp** 게임 오브젝트를 선택합니다. **LightFlicker**애니메이션 클립이 Animation 창에 표시됩니다.

**3.**Animation 창에서 **Add Property** 버튼을 클릭해 새로운 바인딩을 추가합니다.

[Image: image]

이렇게 하면 확장할 수 있는 여러 폴드아웃이 포함된 선택 팝업이 나타납니다.

[Image: image]

게임 오브젝트의 컴포넌트마다 폴드아웃이 하나씩 있습니다. 그 아래에는 각 자식 게임 오브젝트에 대한 폴드아웃이 있습니다.

**4.  Spot Light**자식 게임 오브젝트 폴드아웃과 **Light**폴드아웃을 차례로 확장합니다. 그러면 애니메이션 클립에 바인딩으로 추가할 수 있는 **Light** 컴포넌트의 프로퍼티가 표시됩니다.

[Image: image]

**5.Color 프로퍼티 오른쪽에 있는   추가**(**+**) 버튼을 선택해 바인딩으로 추가합니다.

[Image: image]

각 자식 게임 오브젝트 폴드아웃 안에는 부모 게임 오브젝트처럼 연결된 각 컴포넌트에 해당하는 폴드아웃이 있습니다. 그러나 자식 게임 오브젝트의 폴드아웃에는 루트 게임 오브젝트에 없는 **Is Active** 프로퍼티가 있습니다. 루트 게임 오브젝트가 비활성화되면 Animator 컴포넌트가 비활성화되고 여러 가지 문제가 발생하기 때문에 이를 막기 위한 조치입니다.

단계를 완료로 표시

## 5. 애니메이션 커브 값 편집

Q&A (0)

바인딩을 추가하고 나면 키프레임 두 개가 있는 애니메이션 커브가 생깁니다. 하나는 애니메이션 클립의 시작점에, 다른 하나는 끝점에 위치합니다.

이전 단계에서 광원에 컬러를 추가할 때 애니메이션 커브가 4개 추가되었고 각 커브마다 바인딩이 있습니다. R, G, B, A 채널 각각에 애니메이션 커브와 바인딩이 하나씩 있습니다.

[Image: image]

**Dopesheet** 모드는 애니메이션 클립의 모든 커브에 대한 키프레임을 모두 보여 줍니다.

**Curves**모드는 바인딩 각각에 대한 애니메이션 커브를 보여 줍니다. 그러나 새로 생성된 모든 애니메이션 커브의 값이 전부 1이기 때문에 한 줄로 표시됩니다.

새로운 바인딩 각각에 대한 키프레임은 모두 값이 같습니다. 이 값은 씬에서 현재 프로퍼티에 적용된 값과 관련이 있습니다.

이 단계에서는 애니메이션 커브의 값을 편집하는 프로세스를 설명합니다. 다음 단계에서는 이전 단계에서 광원에 추가한 애니메이션 커브를 편집할 수 있습니다.

애니메이션 커브의 값을 수동으로 변경하는 방법은 다음과 같습니다.

**1.**플레이헤드의 현재 시간에서 커브의 값을 찾습니다. 바인딩 오른쪽, 바인딩을 나타내는 커브에 해당하는 컬러 왼쪽에 있습니다.

**2.**이 숫자를 원하는 값으로 변경합니다. 이 숫자를 변경하면 현재 키프레임의 값이 바뀝니다.

플레이헤드의 현재 시간에 키프레임이 없으면 하나가 새로 생성되고 해당 값이 부여됩니다.

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

또는 Curves 모드에 있는 동안 다음 방법 중 하나를 이용해 애니메이션 커브에서 직접 키프레임 값을 편집할 수 있습니다.

- 키프레임을 클릭하고 드래그해 시간과 값을 변경합니다.
- 키프레임을 오른쪽 클릭하고 **Edit Key**를 선택합니다.

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

## 6. 새로운 애니메이션 커브 값 편집

Q&A (0)

애니메이션 커브를 어떻게 편집하는지 알아보았으므로, 이번에는 광원의 컬러에 대해 생성한 애니메이션 커브를 약간 변경해 보겠습니다. 여러 값을 적용해 보고 값의 변화가 애니메이션에 어떤 영향을 주는지 평가하세요.

변경해야 하는 내용에 대한 가이드라인은 아래와 같습니다.

- 컬러 애니메이션 커브 4개를 모두 편집하지 않아도 됩니다.
- 컬러 애니메이션 커브 중 하나 이상을 편집해야 합니다.
- 편집하는 애니메이션 커브에는 3개 이상의 키프레임이 있어야 합니다.
- **0:00** 및 **1:00**에 컬러 애니메이션 커브 4개 모두에 대한 키프레임이 있어야 합니다.
- 애니메이션 클립의 다른 부분(예: 플레이 시간)을 변경해서는 안 됩니다.

단계를 완료로 표시

## 7. 키프레임 설정 검토

Q&A (0)

다음으로 키프레임 설정을 검토합니다. Curves 모드에서 Animation 창을 사용하면 최상의 결과를 얻을 수 있습니다.

어느 시점이든 애니메이션 커브의 값은 이전 키프레임과 다음 키프레임 사이의 보간입니다. 이 보간의 정확한 값은 키프레임의 탄젠트를 사용해 계산됩니다.

각 키프레임에는 아래와 같은 두 개의 탄젠트가 있습니다.

1. 인 탄젠트(왼쪽)
2. 아웃 탄젠트(오른쪽)

여기서 예외는 첫 키프레임과 마지막 키프레임으로, 첫 키프레임과 마지막 키프레임의 인 탄젠트와 아웃 탄젠트는 반복되는 애니메이션을 편집하기 위한 목적으로 서로 연결되어 있습니다. 탄젠트를 임의의 각도로 설정하고 핸들을 드래그해서 조정할 수 있습니다.

[Image: image]

#### 키프레임 프리셋 설정

Unity에는 원하는 애니메이션 커브를 좀 더 쉽게 생성할 수 있게 해 주는 많은 프리셋이 있습니다. 프리셋 옵션을 보려면 편집하려는 키프레임을 오른쪽 클릭하세요. 토글을 켜거나 끌 수 있는 아래와 같은 옵션이 나타납니다.

[Image: image]

- **Clamped Auto**: 애니메이션 커브가 키프레임 값을 초과하지 않으며 부드럽게 그 값에 접근합니다.
- **Auto**: 레거시 설정입니다. Unity 3.x 버전에서 생성한 애니메이션 클립이 아니라면 Clamped Auto를 사용해야 합니다.
- **Free Smooth**: 커브를 부드럽게 만들려면 이 설정이 가장 적합합니다.

- **Flat**: Free Smooth의 배리에이션으로, 탄젠트가 정확히 수평입니다.
- **Broken**: 왼쪽 탄젠트와 오른쪽 탄젠트가 평행하지 않으며 각기 다른 방향을 가리킵니다.

- **Free**: Broken 탄젠트의 일반적인 옵션입니다.
- **Linear:** Broken의 배리에이션으로, 애니메이션 커브가 키프레임에 가까워질수록 탄젠트가 직선을 나타내려 시도합니다. 인접한 탄젠트가 모두 선형이면 키프레임 사이에서 애니메이션 커브가 직선이 됩니다.
- **Constant**: Broken의 배리에이션으로, 다음 키프레임까지 애니메이션 커브에 이전 키프레임과 동일한 값이 존재합니다. 다음 키프레임에 도달하면 해당 키프레임의 값을 취합니다.
- **Weighted**: 다른 설정에 추가로 이 설정을 적용할 수 있습니다. 탄젠트의 길이를 조정하게 해 주므로 애니메이션 커브를 더 세부적으로 제어할 수 있습니다. 고급 수준의 설정입니다.

기본적으로 가장 최근에 생성된 키프레임은 Clamped Auto와 Free Smooth 중 하나로 설정됩니다. 새로운 키프레임이 평편한 애니메이션 커브에 만들어지면 Clamped Auto, 곡면에 만들어지면 Free Smooth로 설정됩니다.

키프레임 설정에 대한 자세한 내용은 [Unity 매뉴얼](https://docs.unity3d.com/Manual/EditingCurves.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931420857)을 참조하세요.

단계를 완료로 표시

## 8. 레코딩 모드를 사용하여 애니메이션 생성

Q&A (0)

애니메이션을 생성하는 보다 직관적인 방법은 레코딩 모드를 사용하는 것입니다.

레코딩 모드가 켜져 있을 때 애니메이션화된 게임 오브젝트의 계층 구조를 변경하면 그 내용이 플레이헤드의 현재 시간에 Animation 창에 기록됩니다.

이를 활용해 특정 시점에 일부 값을 변경한 후 플레이헤드를 살짝 움직이고 다시 값을 변경하며 스톱모션 애니메이션처럼 제작할 수 있습니다. 이 과정을 반복하여 전체 애니메이션을 만들 수 있습니다.

튜토리얼의 나머지 부분에서는 튕기는 공을 구현하는 애니메이션으로 좀 더 수준 높은 애니메이션 편집 기법을 연습합니다. 하지만 이 방법으로 사소한 부분을 변경할 수도 있습니다.

단계를 완료로 표시

## 9. 한 번에 여러 키프레임 조작

Q&A (0)

키프레임을 편집할 때 여러 키프레임을 한 번에 옮겨야 하는 경우가 있습니다. 키프레임에 무엇을 하려는지에 따라서 여러 가지 방법을 이용할 수 있습니다.

키프레임 선택은 Dopesheet 모드와 Curves 모드 중 어느 쪽이든 동일하지만, 선택 조작은 모드마다 다릅니다.

#### Dopesheet 모드

Dopesheet 모드의 수직 축은 값의 변화를 나타내지 않습니다. 선택 상자를 클릭하고 드래그해 수평 축을 따라 시간순으로 키프레임을 움직이는 것만 가능합니다.

선택 상자 양쪽의 파란색 바를 드래그해 선택 상자의 크기를 가로로 조정하는 방식으로도 키프레임을 서로 가까이 혹은 멀리 옮길 수 있습니다.

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

여기서 주의할 점이 있습니다. 키프레임을 이렇게 움직이면 선택한 부분의 뒤에 이어지는 키프레임은 어떻게 할지가 문제가 됩니다. 키프레임이 원래 위치에 그대로 있어야 할까요, 아니면 선택한 키프레임의 변화에 따라 이동해야 할까요?

#### 리플 편집

키프레임이 변경 내용에 따라 움직이는 경우 리플(ripple) 편집에 해당합니다. 변경하는 내용이 리플(잔물결) 효과를 불러오기 때문입니다.

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

리플 편집을 일시적으로 활성화하려면 **R** 키를 길게 누릅니다. 더 긴 시간 동안 활성화하려면 컨텍스트 메뉴로 이동하고 **Ripple**을 선택합니다.

[Image: image]

#### Curves 모드

이와 같이 Dopesheet 모드에서 키프레임을 편집하는 고급 기능을 Curves 모드에서도 사용할 수 있습니다.

Curves 모드에서 수직 축은 값을 나타내므로 Dopesheet 모드와 달리 수직 이동과 크기 조정 역시 지원됩니다.

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

선택 상자를 수평/수직 축으로 모두 조작할 수 있기 때문에, 선택한 키프레임을 한 축에서만 옮기기가 어려울 수 있습니다.

선택 상자 상단과 오른쪽에 있는 조작 바를 사용해서 한 축을 따라 드래그하면 더 수월하게 키프레임을 옮길 수 있습니다.

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

## 10. 튕기는 공 애니메이션 편집

Q&A (0)

애니메이션 클립 편집에 대한 원리를 튕기는 공 애니메이션을 변경하는 데 적용해 보겠습니다.

이번 과제는 방금 전에 배운 기법을 사용하여 공이 한 번 더 튕기게 만드는 것입니다. 방법은 다음과 같습니다.

**1.**프로젝트 창에서 **2.2 - Editing Animation Clips** > **Scenes**로 이동하고 **BallExample**을 더블 클릭해 씬을 엽니다.

**2.**계층 구조에서 **Ball** 게임 오브젝트를 선택합니다.

**3.** Animation 창에서 Dopesheet 또는 Curves 모드를 선택합니다.

**4.**선택하려는 여러 키프레임 근처를 클릭하고 드래그해 선택 상자로 키프레임 묶음을 선택합니다.

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

**5.**키프레임을 추가하거나 제거하려면 **Shift** 키를 누른 상태에서 추가하거나 제거하려는 키프레임을 클릭합니다. 이렇게 하면 현재 선택되어 있지 않은 키프레임이 선택되거나 선택한 키프레임에서 제거됩니다.

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

**6.  Ctrl**+**C**(Windows) 또는 **Cmd**+**C**(macOS)를 눌러 선택한 내용을 복사합니다.

**7.**키프레임을 옮기려는 시간으로 플레이헤드를 옮깁니다.

**8.  Ctrl** + **V**(Windows) 또는 **Cmd** + **V**(macOS)를 눌러 새로운 시간에 붙여 넣습니다.

아래 동영상에서는 복사하고 붙여 넣는 방법만 확인할 수 있습니다. 원하는 결과를 얻으려면 어떤 키프레임을 복사해서 붙여 넣을지 직접 결정해야 합니다.

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

**9.**변경한 내용을 저장하고 플레이 모드에서 테스트합니다.

단계를 완료로 표시

## 11. 요약

Q&A (0)

이 튜토리얼에서 학습한 내용은 다음과 같습니다.

- 애니메이션 클립에 새로운 바인딩을 추가했습니다.
- 애니메이션 커브의 값을 편집했습니다.
- Dopesheet 모드와 Curves 모드에서 위의 작업을 할 때의 차이점을 살펴보았습니다.
- 기존 애니메이션 클립의 값을 조작해 이 같은 변화가 최종 애니메이션에 어떤 영향을 주는지 파악했습니다.

이어지는 다음 튜토리얼에서는 모델별 애니메이션에 대해 알아보고 애니메이션 임포트 설정을 살펴보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
