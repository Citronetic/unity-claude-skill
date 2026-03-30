[Image: image]

# 1.2 - VR 이동

Tutorial

Beginner

+10XP

90 mins

1

(39)

Unity Technologies

[Image: 1.2 - VR 이동]SummarySkills

이 수업에서는 다양한 VR 이동 유형을 구현하는 방법을 알아보겠습니다. 이 수업을 마치면 새롭게 가구가 비치된 방으로 텔레포트하여 모든 각도에서 방을 감상할 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 가구로 방 채우기

Q&A (0)

현재 방은 있지만 내부가 비어 있습니다. VR 상호 작용이 발생할 수 있는 공간을 방에 추가해야 합니다.

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

**1.  가구 프리팹 찾기**

- 프로젝트 창에서 **Course Library**>**_Prefabs**를 엽니다.

**2.  입구 설정**

- 방의 구석 한쪽에 **거울** 오브젝트와 **옷걸이**오브젝트를 추가합니다.

**3.  거실 공간 설정**

- 방의 절반에 **의자**오브젝트**,** **TV**오브젝트, **벽난로**오브젝트**를 추가합니다.**

**4.  기타 공간 설정**

- **러그**오브젝트, 그리고 **테이블** 오브젝트 또는 **수납장** 오브젝트를 추가하여 표면을 제공합니다.

[Image: image]

이제 옷걸이와 거울이 있는 입구, 의자, 텔레비전과 벽난로가 있는 거실 공간, 그리고 오브젝트를 두기 위한 표면 공간이 있는 기타 공간이 생겼습니다.

단계를 완료로 표시

## 2. 스냅 턴 기능 추가

Q&A (0)

다음으로는 몸을 물리적으로 움직이거나 회전하지 않고도 방을 체험할 수 있도록 제자리에서 돌 수 있는 기능을 설정합니다.

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

**1.  XR 릭(Rig) 이동 기능 부여**

- 계층 구조에서 **XR Rig** 오브젝트를 선택하고 Locomotion System 컴포넌트를 추가합니다.
- **XR Origin** 프로퍼티의 경우 인스펙터에서 XR Origin 컴포넌트를 None이라는 슬롯으로 드래그합니다.
- **참고**: 오브젝트 피커를 선택하고 XR Rig 오브젝트를 더블 클릭해도 됩니다.

**2.  XR 릭이 회전하도록 설정**

- **XR Rig**오브젝트를 선택한 상태에서****Snap Turn Provider (Action-based) 컴포넌트를 추가합니다.
- **System** 프로퍼티의 경우 Locomotion System 컴포넌트를 슬롯에 드래그 앤 드롭합니다.

**3.  스냅 턴 경험 조정**

- **Turn Amount**와 **Debounce Time**프로퍼티를 테스트합니다.
- **Enable Turn Around** 프로퍼티를 선택하여 사용자가 조이스틱을 눌렀을 때 180도 회전하도록 합니다.

**4.  연속 턴 테스트**

- Snap Turn Provider 컴포넌트를 제거하고 Continuous Turn Provider (Action Based) 컴포넌트를 추가합니다.

[Image: image]

이제 양손 컨트롤러의 조이스틱을 사용하여 특정 각도만큼 회전할 수 있습니다. 이를 통해 프로젝트에 정적인 경험을 제공할 수 있습니다.

**참고:** XR 디바이스 시뮬레이터를 사용하는 경우, T 키 또는 Y 키를 사용하여 컨트롤러 하나를 토글한 다음 A 키 또는 D 키를 사용하여 스냅 턴을 시뮬레이션하는 방식으로 이동을 시뮬레이션할 수 있습니다.

단계를 완료로 표시

## 3. 러그에 텔레포트 영역 생성

Q&A (0)

회전할 수 있으므로 이제 특정 영역 내 임의의 위치로 텔레포트할 수도 있어야 합니다.

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

**1.  사용자가 텔레포트할 수 있도록 설정**

- **XR Rig** 오브젝트를 선택하고 Teleportation Provider 컴포넌트를 추가합니다.
- **System** 프로퍼티의 경우 Locomotion System 컴포넌트를 드래그 앤 드롭하여 해당 프로퍼티에 할당합니다.

**2.  러그를 텔레포트 영역으로 만들기**

- **Rug**오브젝트를 선택하고 Teleportation Area 컴포넌트를 추가합니다.
- Teleportation Area 컴포넌트 하단의 **Teleportation Provider**프로퍼티의 경우 **XR Rig**오브젝트를 계층 구조에서 빈 슬롯으로 드래그 앤 드롭하여 해당 프로퍼티에 할당합니다.

[Image: image]

이제 러그 위의 아무 곳이나 가리키면 라인 렌더러가 흰색으로 변하며, 이때 컨트롤러의 그립 버튼을 사용하면 해당 위치로 텔레포트할 수 있습니다. 그립 버튼은 컨트롤러 내부의 가장 아래에 있는 버튼으로, 보통 가운데 손가락으로 누릅니다.

**참고:**  XR 디바이스 시뮬레이터를 사용하는 경우, T 키 또는 Y 키를 사용하여 컨트롤러 하나를 토글하고 마우스 가운데 버튼을 사용하여 광선을 조준한 후 G 키를 누르면 그립 버튼을 누르는 동작을 시뮬레이션할 수 있습니다.

단계를 완료로 표시

## 4. 매트에 텔레포트 앵커 생성

Q&A (0)

사용자가 특정 방향을 향하며 특정 지점으로 텔레포트하도록 만들 수도 있습니다.

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

**1.  씬에 텔레포트 앵커 추가**

- **Course Library**> **Prefabs**> **Rugs**로 이동한 후 방의 주요 위치에 더 작은 Mat 오브젝트를 추가합니다.
- 로컬 Z축(파란색) 화살표가 사용자가 텔레포트할 때의 방향을 바라보도록 오브젝트를 회전합니다.
- **참고**: 오브젝트의 로컬 전방을 보려면 **Local** 좌표를 사용해야 합니다.
Unity 2021.3 LTS에서 Local/Global 설정은 씬(Scene) 뷰의 왼쪽 상단에 지구본 또는 큐브 버튼 드롭다운으로 표시됩니다.

[Image: image]

**2.  프리팹 모드로 전환 시 모든 매트에 대한 변경 사항 저장**

- 매트 오브젝트 중 하나를 선택하고 인스펙터 상단의 **Open** 버튼을 클릭합니다.
- 씬 뷰 오른쪽 상단에서 변경 사항을 저장하고 **Auto-save** 설정을 활성화합니다.

**3.  매트 프리팹을 텔레포트 앵커로 전환**

- 매트 프리팹에서 새로운 Teleportation Anchor 컴포넌트를 추가합니다.
- **참고**: 앱 실행 시 자동으로 할당되므로 **Teleportation Provider**프로퍼티를 할당할 필요는 없습니다.

**4.  텔레포트 시 앵커 방향 일치시키기**

- Teleportation Anchor 컴포넌트에서 **Match Orientation** 프로퍼티를 **Target Up And Forward**로 설정합니다.

**5.  프리팹 모드 종료**

- 계층 구조 왼쪽 상단의 뒤로 가기 화살표를 선택합니다.

[Image: image]

이제 방에 있는 러그로 텔레포트할 수 있고, 도착 시 러그 쪽으로 시선이 바뀝니다.

**참고:**씬 뷰에서 색상이 적용된 오브젝트 외곽선을 숨기려면 씬 뷰 창의 오른쪽 상단에서 **기즈모** 버튼을 클릭하여 씬 뷰 기즈모를 숨깁니다. 기즈모 버튼 옆의 드롭다운 화살표를 클릭하여 특정 요소를 표시하거나 숨길 수도 있습니다.

단계를 완료로 표시

## 5. 텔레포트 레티클 커스터마이즈

Q&A (0)

손의 라인 렌더러는 다른 곳으로 텔레포트할 수 있는 경우에 색상이 변합니다. 레티클을 활용하면 사용자에게 더욱 시각적으로 명확한 피드백을 제공할 수 있습니다.

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

**1.  사용할 레티클 찾기**

- **Course Library**> **Prefabs** > **Reticles** > **VR**로 이동하여 원하는 레티클을 정합니다.

**2.  텔레포트 영역 러그에 사용할 커스텀 레티클 할당**

- Teleportation Area 컴포넌트가 적용된 큰 **Rug**오브젝트를 선택합니다.
- Teleportation Area 컴포넌트 하단에 있는 **Custom Reticle**프로퍼티의 경우 선택한 레티클을 드래그 앤 드롭하여 해당 프로퍼티를 할당합니다.

**3.  텔레포트 앵커 매트에 사용할 커스텀 레티클 할당**

- 매트 오브젝트의 프리팹을 엽니다.
- Teleportation Anchor 컴포넌트에서 **Custom Reticle**프로퍼티에 해당 레티클을 할당합니다.
- 프리팹 모드를 종료합니다.

[Image: image]

이제 라인 렌더러가 텔레포트 대상과 만나는 위치에 커스텀 레티클이 나타나야 합니다.

단계를 완료로 표시

## 6. 요약

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

- 방 디자인
- 릭 회전
- 릭 텔레포트

**새로운 개념 및 기술**

- 이동 유형
(방 규모/연속/텔레포트)
- 벡션 및 시뮬레이터 멀미
- 텔레포트 영역과 앵커의 관계

**다음 수업**

- 잡을 수 있는 오브젝트

단계를 완료로 표시선택 단계

## 7. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요. 각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 해당하는 경우 [프로그래밍 필요] 태그도 포함됩니다.

전적으로 필수는 아니지만, VR 개발 기술을 한 단계 더 높이려면 이러한 활동을 하는 것이 좋습니다.

**1. 다른 VR 이동 방식 알아보기 [쉬움]**

발사체 순간이동, 스크립트 기반 이동, 투영된 아바타, 월드 풀링 등을 비롯하여 일반적이지 않은 형태의 VR 이동 방식을 알아봅니다.

- VR용 콘텐츠 설계, 개발 및 배포 교육 과정에서 이동 유형을 소개하는 [동영상](https://learn.unity.com/tutorial/unit-4-locomotion-and-ergonomics?courseId=5d955b5dedbc2a319caab9a0#5d969198edbc2a001f9f7588)을 시청합니다.
- 'VR 이동 유형'을 Google에 검색해 보고 VR 이동에 대한 다른 흥미로운 전략을 찾아 봅니다.

**2. 자신만의 아트 만들기 [보통]**

자신만의 커스텀 아트를 방에 추가하여 독창성을 살려 봅니다.

- 독창적인 작품을 만들거나 온라인에서 사용 가능한 아트를 찾을 수 있습니다('creative commons 0' 검색).
- 힌트: 새로운 **머티리얼**을 생성하고, 이미지를 해당 머티리얼의 **기본 맵**으로 할당한 후, 해당 머티리얼을 오브젝트에 적용합니다.

[Image: image]

**3. 애니메이션 레티클 [보통] [프로그래밍 필요]**

텔레포트 레티클을 회전시키거나 확대 또는 축소하여 경험을 더욱 역동적으로 느껴지게 합니다.

- 힌트: 커스텀 회전 스크립트를 생성하여 레티클 프리팹에 적용합니다.

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
