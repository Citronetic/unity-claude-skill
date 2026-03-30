[Image: image]

# 2.3 - 다이렉트 인터랙터와 레이 인터랙터

Tutorial

Beginner

+10XP

90 mins

1

Unity Technologies

[Image: 2.3 - 다이렉트 인터랙터와 레이 인터랙터]SummarySkills

이 수업에서는 다이렉트 인터랙터를 실행하는 방법과 더불어 같은 컨트롤러에서 인터랙터를 전환하는 방법을 알아보겠습니다. 이 수업을 마치고 나면 사용자가 사물을 자신의 손으로 직접 잡을 수 있고, 필요한 경우 레이를 다시 표시하여 사물을 가리킬 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 오른쪽 컨트롤러에 다이렉트 인터랙터 추가

Q&A (0)

릭에 기본 설정된 레이 인터랙터를 사용하는 대신 컨트롤러 하나에 다이렉트 인터랙터를 설정할 수 있습니다.

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

**1.  오른쪽 컨트롤러에서 레이 인터랙터를 제거합니다.**

- 계층 구조에서 **RightHand Controller**오브젝트를 선택합니다.
- 레이 인터랙터와 관련된 3개의 컴포넌트(XR Interactor Line Visual 컴포넌트, Line Renderer 컴포넌트, XR Ray Interactor 컴포넌트)를 제거합니다**.**

**2.  오른쪽 컨트롤러에서 다이렉트 상호 작용을 활성화합니다.**

- **RightHand Controller**에 XR Direct Interactor 컴포넌트를 추가합니다.
- **Hide Controller on Select** 체크박스를 선택하여 사용자가 오브젝트를 주우면 사용자의 손 모양이 해당 오브젝트로 바뀌도록 합니다.

**3.  다이렉트 인터랙터의 감지를 활성화합니다.**

- Sphere Collider 컴포넌트를 추가합니다.
- **Is Trigger** 체크박스를 선택합니다.
- **Radius**를 0.05로 줄입니다.

[Image: image]

이제 다이렉트 인터랙터를 사용하여 씬에 있는 모든 잡을 수 있는 오브젝트를 손으로 주울 수 있습니다.

단계를 완료로 표시

## 2. 다이렉트 인터랙터에 햅틱 및 오디오 피드백 추가

Q&A (0)

레이 인터랙터에 추가했던 것과 동일한 방식으로, 오브젝트 위에 손을 올려 놓거나 오브젝트를 잡는 동작에 햅틱 및 오디오 피드백을 추가해야 합니다.

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

**1.  원래 햅틱 및 오디오 피드백을 설정했던 방법을 떠올리고 반복합니다.**

- 계층 구조에서 **LeftHand Controller** 오브젝트(여전히 Ray Interactor 컴포넌트가 있어야 함)를 선택합니다.
- XR Ray Interactor 컴포넌트에서 **Audio Events**와 **Haptic Events**를 펼칩니다.
- Audio Events에서 선택한 햅틱 이벤트 및 오디오 클립의 강도와 지속 시간을 확인합니다.

**2.  새 다이렉트 인터랙터에 햅틱 및 오디오 이벤트 설정을 적용합니다.**

- 계층 구조에서 **RightHand Controller**오브젝트를 선택합니다.
- XR Direct Interactor 컴포넌트에서 동일한 햅틱 및 오디오 이벤트 설정을 적용하여 다른 컨트롤러와 일치시킵니다.

[Image: image]

이제 다이렉트 인터랙터에서 오브젝트 위에 손을 올려 놓거나 오브젝트를 잡을 때 햅틱 및 오디오 피드백을 경험할 수 있습니다.

단계를 완료로 표시

## 3. 레이가 오브젝트를 줍지 못하도록 설정

Q&A (0)

지금은 레이로 모든 것을 주울 수 있는데, 이러한 동작은 자연스럽지 않습니다. 따라서 레이로는 텔레포트만 할 수 있고 오브젝트는 손으로 직접 주워야만 하도록 설정해야 합니다.

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

**1.  레이에 새 레이어를 추가합니다.**

- 다른 쪽 손의 **XR Ray Interactor** 컴포넌트로 이동하여 **Interaction Layer Mask** 드롭다운에서 **Add Layer**를 선택합니다.
- 첫 번째 빈 슬롯에 새 Raycasts 레이어를 추가합니다.
- 참고: 레이 인터랙터는 아직 이 레이어로 설정되지 않습니다. 이 시점에는 레이어를 생성하기만 한 것입니다.

**2.  레이가 잡을 수 있는 오브젝트와 상호 작용하지 못하도록 설정합니다.**

- 컨트롤러 오브젝트의 XR Ray Interactor 컴포넌트에서 **Interaction Layer Mask** 프로퍼티에 **Raycasts** 레이어만 할당합니다.
- 이렇게 하려면 먼저 Nothing을 선택한 다음 Raycasts 레이어를 다시 선택해야 합니다.

**3.  레이가 텔레포트 오브젝트와만 상호 작용할 수 있도록 설정합니다.**

- Teleportation Anchor 및 Teleportation Area 오브젝트 각각에 대해 **Interaction Layer Mask**프로퍼티에 **Raycasts** 레이어를 활성화합니다**.**

**4.  텔레포트할 때 손 모델이 사라지지 않도록 설정합니다.**

- XR Ray Interactor 컴포넌트에서 **Hide Controller On Select** 설정을 비활성화합니다.

**참고:**여전히 레이를 사용하여 오브젝트를 주울 수 있는 경우, 잡을 수 있는 오브젝트가 Raycasts Interaction Layer에 없는지 확인하세요.

[Image: image][Image: image]

더 이상 레이 인터랙터로 오브젝트를 주울 수 없으며, 대신 텔레포트에만 사용할 수 있습니다.

단계를 완료로 표시

## 4. 양손 각각에 다이렉트 인터랙터와 레이 인터랙터 생성

Q&A (0)

양손 중 어느 손으로나 오브젝트를 주울 수 있게 하려면 양쪽 모두에 다이렉트 인터랙터를 설정해야 하며, 그렇게 설정한 다음 조이스틱이 움직일 때만 레이가 활성화되도록 할 수 있습니다. 이렇게 설정하려면 양손 모두에 다이렉트 인터랙터와 레이 인터랙터를 생성해야 합니다.

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

**1.  각 손에 대체 레이 컨트롤러를 생성합니다.**

- 레이 인터랙터가 포함된 컨트롤러를 **두 번** 복제합니다.
- 오브젝트의 이름을 각각 LeftHand Ray와 RightHand Ray로 변경합니다.

**2.  각 레이가 올바른 손으로 제어되도록 설정합니다.**

- 새로운 **RightHand Ray** 및 **LeftHand Ray** 오브젝트에 대해 XR Controller 컴포넌트에서 **Input Action References** 프리셋이 각 오브젝트별로 Left 또는 Right로 올바르게 설정되어 있어야 합니다.
- 프리셋을 편집하려면 컴포넌트의 오른쪽 상단에서 **Presets** 버튼을 클릭하고 해당 손에 적합한 프리셋을 선택합니다.

**3.  왼손 컨트롤러가 다이렉트 인터랙터로 작동하도록 설정합니다.**

- **LeftHand Controller** 오브젝트에서 레이 인터랙터와 관련된 컴포넌트(XR Ray Interactor 컴포넌트, Line Renderer 컴포넌트, XR Interactor Line Visual 컴포넌트)를 제거합니다.
- Direct Interactor와 Sphere Collider 컴포넌트를 **RightHand Controller**에서 **LeftHand Controller**로 복사합니다.

**참고**: 컴포넌트를 복사하는 방법은 다음과 같습니다.

- 컴포넌트의 오른쪽 상단에서 컨텍스트 메뉴를 선택하고 **Copy Component**를 클릭합니다.
- 컴포넌트를 다른 오브젝트에 붙여 넣으려면 복사 대상인 오브젝트의 컴포넌트 중 하나의 컨텍스트 메뉴를 선택하고 **Paste Component As New**를 클릭합니다.

**4.  각 손에 하나의 손 모델만 표시되도록 설정합니다.**

- 새로운 **LeftHand Ray**와 **RightHand Ray** 오브젝트의 XR Controller 컴포넌트에서 **Model Prefab**오브젝트를 **None**으로 변경합니다.

[Image: image]

이제 손마다 설정된 레이 인터랙터를 사용할 때는 텔레포트할 수 있고, 다이렉트 인터랙터를 사용할 때는 오브젝트를 잡을 수 있습니다.

단계를 완료로 표시

## 5. 버튼을 눌러 레이 토글

Q&A (0)

이제 각 손에 다이렉트 인터랙터와 레이 인터랙터가 모두 설정되어 있으므로 버튼을 눌렀을 때 레이가 켜지고 꺼지는 토글 기능을 추가해 보겠습니다.

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

**1.  왼쪽 레이를 전환하는 기능을 추가합니다.**

- **LeftHand Ray** 오브젝트에서 Toggle Ray 컴포넌트를 추가합니다.
- **Direct Interactor** 프로퍼티에 **LeftHand Controller**오브젝트를 할당합니다.

**2.  버튼이 눌리는 것을 감지하도록 하는 방법은 다음과 같습니다.**

- **LeftHand Controller**오브젝트에 On Button Press 컴포넌트를 추가합니다.

**3.  버튼이 이 동작에 바인드되도록 지정합니다.**

- On Button Press 컴포넌트의 **Action** 상자에서 **+** 버튼을 클릭하고 **Add Binding**을 선택합니다. 참고로 Action 상자를 보지 못하고 지나치기 쉬우므로 자세히 살펴보세요.
- **No Binding**이라고 표시된 부분을 더블 클릭합니다.
- **Path**드롭다운에서 **XR Controller**>**XR Controller (Left Hand)**>**Optional Controls**>**primaryButton**을 선택합니다.

**참고**: 컨트롤러에 따라 사용되는 버튼과 트리거, 패드가 다릅니다. 사용 중인 디바이스가 Oculus Quest가 아닌 경우, 올바른 작동을 위해 바인딩 경로를 다르게 설정해야 할 수 있습니다. 예를 들어, [HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449648) 또는 [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449648)를 사용 중인 경우 OpenXR 컨트롤러 프로필을 확인하세요.

**4.  버튼을 누를 때 레이를 활성화합니다.**

- **On Press**이벤트에서 **+** 버튼을 클릭하여 새 동작을 추가합니다.
- **LeftHand Ray** 오브젝트를 할당합니다. 이 오브젝트에 Toggle Ray 컴포넌트가 있기 때문입니다.
- 함수 드롭다운에서 **ToggleRay** > **ActivateRay ()**함수를 선택합니다.

**5.  버튼을 놓을 때 레이를 비활성화합니다.**

- **On Release** 이벤트에서 **+** 버튼을 클릭하여 새 동작을 추가합니다.
- **LeftHand Ray** 오브젝트를 할당합니다.
- **ToggleRay** > **DeactivateRay ()**함수를 선택합니다.

[Image: image]

이제 왼손의 레이는 기본 버튼을 터치하는 동안에만 나타나고 버튼을 놓으면 사라집니다.

단계를 완료로 표시

## 6. 바인딩을 추가하고 다른 쪽 손에 반복

Q&A (0)

현재 하나의 컨트롤러가 하나의 버튼으로 작동하고 있습니다. 플레이어에게 자신의 환경 설정에 따라 누를 수 있는 버튼 옵션을 추가로 제공하고 이 기능을 다른 쪽 손에 적용할 수 있습니다.

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

**1.  아날로그 스틱을 감지하는 바인딩을 추가합니다.**

- On Button Press 컴포넌트의 Action 상자에서 **+** 버튼을 클릭하여 이 동작에 바인딩을 추가합니다.
- 이전 단계와 동일한 지침에 따라 바인딩을 선택하되 **XR Controller**>**XR Controller (Left Hand)**>**Optional Controls**>**thumbstickTouched**를 선택합니다(**primaryButton** 대신).

**참고**: 컨트롤러에 따라 사용되는 버튼과 트리거, 패드가 다릅니다. 사용 중인 디바이스가 Oculus Quest가 아닌 경우, 올바른 작동을 위해 바인딩 경로를 다르게 설정해야 할 수 있습니다. 예를 들어, [HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449648) 또는 [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449648)를 사용 중인 경우 OpenXR 컨트롤러 프로필을 확인하세요.

**2.  오른손에 동일한 레이 토글 기능을 추가합니다.**

- 이전 단계의 모든 지침을 반복하되 이번에는 RightHand Controller와 RightHand Ray에 다음과 같이 바인딩을 추가합니다.

- Toggle Ray 컴포넌트를 **RightHand Ray**에 추가하고 RightHand Controller를 Direct Interactor 프로퍼티에 할당합니다.
- On Button Press 컴포넌트를 **RightHand Controller**에 추가하고 Right Primary Button과 Right Thumbstick에 대한 바인딩을 추가합니다.
- **On Press** 이벤트에서 **RightHand Ray** 오브젝트에 **Toggle Ray > ActivateRay()** 함수를 호출합니다.
- **On Release** 이벤트에서 **RightHand Ray**오브젝트에 **Toggle Ray > DeactivateRay()** 함수를 호출합니다.

[Image: image]

이제 양손의 레이는 기본 버튼 또는 아날로그 스틱을 터치하는 동안에만 나타납니다.

단계를 완료로 표시

## 7. 요약

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**새 기능**

- 양손 각각의 다이렉트 인터랙터
- 버튼으로 다이렉트 인터랙터 토글 켜기/끄기

**새로운 개념 및 기술**

- 다이렉트 인터랙터와 레이 인터랙터 비교
- 버튼 누름 감지

**다음 수업**

- 사용자 인터페이스

단계를 완료로 표시선택 단계

## 8. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  레이 인터랙터 라인 커스터마이즈 [쉬움]**

그레디언트와 투명도를 포함하여 레이 인터랙터 라인 색상과 투명도 색상을 편집합니다.

- 레이가 시작되는 부분을 투명하게 처리하여 손과 겹치지 않도록 하는 것이 보기에 좋습니다.
- 레이의 색상을 커스터마이즈하려면 XR Interactor Line Visual 컴포넌트의 Valid 및 Invalid 색상 그레디언트 프로퍼티를 살펴봅니다.
- Gradient Editor 창에서 색상 바 아래에 있는 마커를 사용하여 색상을 편집하고, 색상 바 위에 있는 마커를 사용하여 투명도(Alpha) 값을 편집합니다.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

**2.  물뿌리개 추가 [보통]**

기울이면 물 파티클을 생성하는 물뿌리개를 추가합니다.

- Course Library > Scripts > Conditions 폴더에 있는 OnTilt 스크립트를 사용하여 기울임을 감지합니다.
- Course Library > Prefabs > Particles 폴더에서 Particle_Water 오브젝트를 찾습니다.
- ToggleParticle > Play() 및 Stop() 함수를 사용하여 파티클을 제어합니다.
- 보너스 - PlayContinuousSound 스크립트를 사용하여 물을 뿌릴 때 음향 효과를 추가해 보세요.
- 보너스 - OnVelocity 스크립트를 사용하여 물뿌리개를 흔들 때 물이 출렁이는 음향 효과를 추가해 보세요. 힌트: 별도의 오디오 소스를 추가하여 물을 뿌릴 때 나는 소리와 충돌하지 않도록 합니다.

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

**3.  캐비닛 문에 힌지 추가 [전문가]**

Unity의 물리 힌지를 사용하여 사용자가 캐비닛 문 또는 상자 뚜껑을 열 수 있도록 설정합니다.

- [힌지 조인트](https://docs.unity3d.com/kr/Manual/class-HingeJoint.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449648)와 리지드바디를 문에 추가하고 각도 한계를 커스터마이즈해야 합니다.
- XR Grab Interactable 컴포넌트를 핸들에 추가하고 [고정 조인트](https://docs.unity3d.com/kr/Manual/class-FixedJoint.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931449648)를 문의 리지드바디에 연결해야 할 수 있습니다.
- 문의 콜라이더가 다른 콜라이더와 겹치지 않도록 해야 합니다. 콜라이더가 겹치는 경우 문이 움직이지 않을 수 있습니다.
- 경고: 조인트를 사용하는 작업은 매우 까다롭고 어려울 수 있습니다.

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

## Complete this Tutorial

모든 단계를 완료로 표시
