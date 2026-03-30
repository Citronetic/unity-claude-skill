[Image: image]

# 3.1 - 편리성 및 접근성

Tutorial

Beginner

+10XP

90 mins

1

Unity Technologies

[Image: 3.1 - 편리성 및 접근성]SummarySkills

이 수업에서는 시뮬레이터 멀미의 위험을 줄이고 앱의 포용성을 늘려 최대한 많은 사용자가 앱을 즐길 수 있도록 하는 방법을 학습합니다. 이 수업을 마치면 앱의 편리성과 접근성을 더 향상할 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 페이드에 사용할 간단한 검은 캔버스 만들기

Q&A (0)

씬이 로드될 때 새로운 월드에서 약간 부자연스럽게 보일 수 있습니다. 보통은 페이드인 방식으로 새로운 환경에 진입하는 방식이 바람직합니다.

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

**1.  페이드인이 시작될 새로운 스크린 공간 캔버스를 만듭니다.**

- 계층 구조(Hierarchy)에서 **Create** > **UI** > **Canvas**로 이동해 이름을 'Fade_Canvas'로 변경합니다.

**2.  카메라 바로 앞에 캔버스를 렌더링합니다.**

- **캔버스**오브젝트의 Canvas 컴포넌트에서 **Render Mode**를 **Screen Space - Camera**로 설정합니다.
- **Render Camera** 프로퍼티를 **Main Camera**로 설정합니다.

**3.  캔버스를 검은색으로 만듭니다.**

- **Fade_Canvas**오브젝트를 오른쪽 클릭하고 **UI** > **Image**를 생성합니다.
- **Color** 프로퍼티를 검은색으로 설정합니다**.**
- 캔버스가 시야각(FOV) 전체에 들어가도록 **X Scale**및**Y Scale**프로퍼티를 큰 수치(예: 100)로 설정합니다.

**4.  캔버스가 Main Camera 바로 앞과 다른 모든 오브젝트 앞에 표시되도록 합니다.**

- Canvas 컴포넌트에서**Plane Distance**를 0.1로 설정합니다.
- 그런 다음 **Order in Layer**를 1로 설정합니다.

[Image: image]

이제 프로그램을 실행하면 검은 캔버스가 시야각(FOV)을 완전히 덮습니다.

단계를 완료로 표시

## 2. 씬 로드 시 페이드인

Q&A (0)

검은 캔버스를 설정했으니 이제 씬이 로드될 때 검은 캔버스에서 페이드하도록 해야 합니다.

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

**1.  캔버스 및 캔버스의 모든 요소가 페이드되도록 합니다.**

- **Fade_Canvas** 오브젝트에서 Canvas Group과 Fade Canvas 컴포넌트를 추가합니다.

**2.  씬이 로드될 때 이를 감지하는 이벤트를 만듭니다.**

- 계층 구조에서 빈 오브젝트를 추가하고 이름을 'Scene Loader'로 변경합니다. 여기에는 씬 로딩 이벤트가 포함됩니다.
- On Scene Load 컴포넌트를 **Scene Loader** 오브젝트에 추가합니다.

**3.  씬 로드 시 검은색 캔버스에서 페이드합니다.**

- **Scene Loader** 오브젝트의 **On Load** 이벤트에서 **+**를 클릭하여 새 함수를 추가합니다.
- **Canvas_Fade** 오브젝트를 할당합니다.
- **FadeCanvas > StartFadeOut ()** 함수를 선택합니다.

**4.  기본적으로 씬 뷰에서 검은색 이미지를 숨깁니다.**

- Canvas Group 컴포넌트의 **Alpha** 값을 0으로 설정합니다.

[Image: image]

이제 씬이 로드될 때 검은색 캔버스에서 페이드인되어 나타납니다. 만들어 둔 씬 재설정 UI 화면을 사용해 테스트할 수 있습니다.

**관련 리소스:**

- [커스텀 셰이더를 사용한 화면 페이더 튜토리얼](https://www.youtube.com/watch?v=OGDOC4ACfSE)

단계를 완료로 표시

## 3. 텔레포트에 페이드 효과 적용

Q&A (0)

텔레포트가 진행되는 상황에도 페이드 효과를 적용해 플레이어의 편리성을 높일 수 있습니다. 일반적으로 텔레포트 시 움직임 착시 현상(벡션)을 줄이고 더 편하게 느낄 수 있도록 짧은 페이드를 사용합니다.

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

**1.  텔레포트 영역(러그)에 페이드 기능을 추가합니다.**

- **Rug**프리팹에서 기본 Teleportation Area 컴포넌트를 제거하고 커스텀 Teleport Area With Fade 컴포넌트로 바꿉니다.
- 원래 컴포넌트와 일치하도록 새 컴포넌트 하단에서 동일한 **Interaction Layer Mask**,   **Custom Reticle** 및 **Match Orientation** 프로퍼티를 할당합니다.

**2.  텔레포트 앵커(매트)에 페이드 기능을 추가합니다.**

- 모든 매트에 동시에 변경 사항을 적용할 수 있도록 매트 중 하나의 **프리팹 모드**에 진입합니다.
- 기본 Teleportation Anchor 컴포넌트를 제거하고 커스텀 Teleport Anchor With Fade 컴포넌트로 바꿉니다.
- 원래 컴포넌트와 일치하도록 새 컴포넌트의 프로퍼티를 편집합니다.
- **참고**: 모든 매트 프리팹 또는 프리팹 배리언트에 변경 사항을 적용해야 합니다.

[Image: image]

이제 텔레포트 시 텔레포트 앵커와 텔레포트 영역이 검은색으로 빠르게 페이드됩니다.

단계를 완료로 표시

## 4. 설정 패널 추가

Q&A (0)

설정을 추가하려면 메인 메뉴 패널에서 액세스할 수 있는 새 패널을 추가해야 합니다.

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

**1.  새로운 설정 버튼을 추가합니다.**

- 계층 구조에서 **Welcome Background**오브젝트를 오른쪽 클릭하고 **UI > Button - TextMeshPro**를 선택하여 버튼을 추가합니다.
- 이름을 'Settings Button'으로 변경합니다.
- 기어 아이콘의 **Source Image** 프로퍼티를 설정합니다.
- 텍스트가 없도록 기본 텍스트를 삭제합니다.
- 메뉴의 오른쪽 하단에 잘 맞도록 버튼의 크기와 위치를 조정합니다.

**2.  새로운 설정 화면을 만듭니다.**

- 계층 구조에서 **Welcome Background**오브젝트를 **복제**합니다.
- 복사한 오브젝트의 이름을 'Settings Background'로 변경합니다.
- 쉬운 편집을 위해 설정 화면만 볼 수 있도록 환영 패널을 일시적으로 비활성화합니다.

**3.  설정 화면에 플레이스홀더 내용을 추가합니다.**

- 패널의 내용을 세 개의 플레이스홀더 텍스트 오브젝트(Setting 1/Setting 2/Setting 3)로 바꿉니다.
- 각 설정 옆에 **토글** 오브젝트를 추가하고 토글에서 생성된 기본 텍스트를 삭제합니다.
- 각 텍스트 오브젝트를 함께 그룹화하여 부모로 지정하는 것이 좋을 수도 있습니다.
- **참고**: 토글과 함께 제공되는 기본 텍스트 레이블 대신 TextMeshPro 텍스트 레이블을 사용하세요.

**4.  설정 기어 아이콘을 X 아이콘으로 교체합니다.**

- 기어 아이콘의 Image 컴포넌트에서 **Source Image** 프로퍼티를 **Icon_Gear**에서 **Icon_Close**로 변경합니다.

**5.  사용자가 이러한 메뉴를 전환하도록 구현합니다.**

- 설정 버튼의 **On Click**이벤트**에서**설정 화면은 활성으로, 환영 화면은 비활성으로 설정합니다.
- 닫기 버튼의 **On Click** 이벤트에서 설정 화면은 비활성으로, 환영 화면은 활성으로 설정합니다.

**6.  설정 메뉴가 나타날 때 이를 숨길 수 있는 재설정 메뉴를 만듭니다.**

- XR Rig의 **On Button Press**이벤트에서 설정 화면을 비활성화하는 새 동작을 추가합니다.

[Image: image][Image: image]

이제 메인 메뉴의 기어 아이콘에서 3개의 플레이스홀더 토글 설정이 있는 설정 메뉴에 액세스할 수 있습니다. 닫기 버튼을 눌러 설정에서 환영 패널로 돌아갈 수도 있습니다.

단계를 완료로 표시

## 5. 스냅 턴 설정 추가

Q&A (0)

간편하게 접근성을 높이기 위해 환경을 탐색하는 더 많은 방법을 제공할 수 있습니다. 사용자가 스냅 턴을 활성화하거나 비활성화할 수 있도록 해 보세요.

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

**1.  플레이스홀더 설정을 교체합니다.**

- 첫 번째 설정 텍스트를 'Snap Turning'으로 편집합니다.
- Toggle 컴포넌트에서 Snap Turning이 기본적으로 활성화되도록 **Is On** 프로퍼티를 활성화합니다.

**2.  토글을 Snap Turn 컴포넌트에 연결합니다.**

- Toggle 컴포넌트의 **On Value Changed**이벤트에 대해 **+**를 클릭하여 새 동작을 추가합니다.
- XR Rig에는 Snap Turn provider 컴포넌트가 포함되어 있으므로 XR Rig을 오브젝트 슬롯에 할당합니다.
- **Action Based Snap Turn Provider**> **enabled** **(Dynamic Bool)**함수를 선택합니다.

**Note**: 동적 부울인 'enabled' 프로퍼티를 선택해야 합니다. 이는 이 프로퍼티가 토글의 상태에 의해 동적으로 영향을 받음을 의미합니다.

[Image: image]

이제 스냅 턴 활성화 및 비활성화 기능을 제공하는 체크박스가 생겼습니다.

단계를 완료로 표시

## 6. 멀리서 잡기 설정 추가

Q&A (0)

접근성을 획기적으로 높이는 또 다른 설정은 광선을 사용해 먼 곳에 있는 물체를 잡을 수 있는 능력입니다.

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

**1.  기본적으로 표시할 설정을 지정합니다.**

- Toggle 컴포넌트에서 **Is On** 프로퍼티를 활성화하거나 비활성화합니다.
- 토글의 텍스트를 'Distance Grab'으로 변경합니다.

**2.  잡을 수 있는 모든 오브젝트를 동일한 레이어에서 액세스할 수 있게 만듭니다.**

- 각 오브젝트의 XR Grab Interactable 컴포넌트에서 **Interaction Layer Mask** 프로퍼티에 **Default** 레이어를 포함합니다.

**3.  광선에 다른 레이어 세트로 변경할 수 있는 기능을 부여합니다.**

- 계층 구조에서 **LeftHand Ray**및**RightHand Ray** 오브젝트를 모두 선택합니다.
- 두 오브젝트에 Set Interaction Layer 컴포넌트를 추가합니다.
- **Target Layer** 프로퍼티가 **Default** 레이어와 **Raycasts**레이어를 포함하도록 설정합니다. 그렇게 하면 두 레이어가 오브젝트를 잡을 수 있습니다.

**4.  'Distance Grab' 토글로 해당 타겟 레이어를 트리거합니다.**

- Toggle 컴포넌트의 **On Value Changed**이벤트에서 **+**를 두 번 클릭하여 새로운 두 가지 동작(한 손에 하나씩)을 추가합니다.
- 한 오브젝트 슬롯에 RightHand Ray를, 다른 오브젝트 슬롯에 Lefthand Ray를 할당합니다.
- 두 동작 모두에 대해 **SetInteractionLayer** > **ToggleTargetLayer (Dynamic bool)**함수를 선택합니다.
- **참고**: 함수를 토글 값에 연결하려면 목록의 위쪽 섹션에서 **Dynamic bool** 옵션을 선택해야 합니다.

[Image: image][Image: image]

이제 멀리서 광선으로 오브젝트를 잡는 기능을 토글로 활성화하거나 비활성화할 수 있습니다.

**관련 리소스:**

- [VR 접근성](https://www.unimelb.edu.au/accessibility/guides/vr-old)

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

**새 기능:**

- 검은색 캔버스에서 페이드인
- 텔레포트 페이드
- 설정 메뉴

**새로운 개념 및 기술:**

- VR 편리성
- VR 접근성

**다음 수업:**

- 최적화

단계를 완료로 표시선택 단계

## 8. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  보이스오버 내레이션 추가 [쉬움]**

씬이 시작될 때 메인 메뉴의 텍스트를 읽는 오디오 내레이션을 추가해 보세요.

- OnSceneLoad 스크립트를 사용해 이 기능을 트리거합니다.
- 보너스 - 오디오는 재생만 되어야 합니다.

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

**2.  자막 설정 추가 [보통]**

자막을 추가하여 오디오 접근성을 향상해 보세요.

- 벽난로와 같은 주변 소리의 경우 자막을 추가하여 소리가 나는 위치에서 어떤 소리가 나는지 나타냅니다.
- 보너스 - 플레이어가 언제든지 자막을 읽을 수 있도록 자막 빌보드를 플레이어 방향으로 배치합니다(Course Library에서 LookAtPlayer 스크립트를 사용하거나 스크립트를 직접 작성).
- 보너스 - TV의 경우 대사가 나오는 동영상을 사용하고 동영상에 나오는 대사에 맞는 자막을 추가합니다(제공되는 Unity-shape-the-world 동영상에 보이스오버가 있음) [프로그래밍 필요].

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

**3.  연속 이동 설정 추가 [보통]**

연속 이동을 토글로 켜고 끄는 설정을 추가해 보세요.

- 스냅 턴 토글과 동일한 기법을 사용합니다.
- Continuous Move Provider 컴포넌트와 Continuous Turn Provider 컴포넌트를 XR Rig에 추가해야 합니다.
- 보너스 - (a) 연속적인 이동 및 턴과 (b) 스냅 턴 및 텔레포트를 전환하는 단일 토글 또는 단일 드롭다운을 만들 수 있습니다.

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
