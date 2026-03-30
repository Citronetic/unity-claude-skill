[Image: image]

# 과제 2 - 3D 그림

Tutorial

Beginner

+10XP

60 mins

1

Unity Technologies

[Image: 과제 2 - 3D 그림]SummarySkills

이 과제에서는 VR Room을 만들면서 배운 기술을 3D 그림 앱에 적용합니다. 이 앱에서 사용자는 그림을 그릴 셰이프를 고르고 핸드헬드 팔레트에서 브러시의 색상과 크기를 선택한 다음 멋진 그림 한 점을 완성할 수 있습니다.

이 과제에서는 다음 수업에서 배운 기술을 복습합니다.

- [오디오 및 햅틱](https://learn.unity.com/tutorial/2-1-audio-and-haptics)
- [활성화 이벤트](https://learn.unity.com/tutorial/2-2-activation-events)
- [다이렉트 인터랙터와 레이 인터랙터](https://learn.unity.com/tutorial/2-3-direct-and-ray-interactors)
- [사용자 인터페이스](https://learn.unity.com/tutorial/2-4-user-interface)

이 과제는 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 과제 가이드

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

단계를 완료로 표시

## 2. 시작하기

Q&A (0)

**1.  문제가 있는 3D 그림 프로토타입 씬을 엽니다.**

- 프로젝트(Project) 창에서 **Assets** > **Challenges** > **02_3DPainting** > **Scenes**를 펼칩니다.
- **3DPainting_Prototype_Broken** 씬을 더블 클릭하여 엽니다.

**2.  과제에 포함된 작업을 시작합니다.**

- 아래 단계에 명시된 작업을 진행합니다.
- 추가 보너스 과제에 도전하면 기술을 더욱 향상할 수 있습니다.
- 진행하다 막히는 경우 페이지 하단에서 각 작업에 대한 힌트를 참조할 수 있습니다.

단계를 완료로 표시

## 3. 과제에 포함된 작업

Q&A (0)

**1.  캔버스에서 지지대 위에 나타나는 셰이프를 변경할 수 있으며 캔버스는 카메라를 따라갑니다.**

- 이 캔버스는 지지대 옆에 고정되어 있어야 합니다.

**2.  토글된 레이 및 팔레트 캔버스는 반대쪽 손을 따라갑니다.**

- 팔레트는 왼쪽 손을 따라 움직여야 하며, 오른쪽 컨트롤러의 아날로그 스틱이나 기본 버튼을 누르면 토글된 레이가 오른쪽 손에서 방출되어야 합니다.

**3.  페인트 브러시 활성화는 반대로 작동하여 트리거를 놓으면 활성화가 시작되고 트리거를 누르면 활성화가 중지됩니다.**

- 트리거를 누르고 있는 동안에는 페인트 브러시가 궤적을 생성하고 트리거를 놓으면 생성이 중지되어야 합니다.

**4.  중간 브러시 크기 버튼을 누르면 궤적의 크기가 거대해지며, 버튼은 사라집니다.**

- 다른 버튼을 눌렀을 때와 마찬가지로 이 버튼을 누르면 버튼 색상이 회색으로 바뀌고 궤적의 크기가 작은 브러시와 큰 브러시 사이의 크기로 변경되어야 합니다.

**5.  페인트 브러시 음향 효과는 페인트 브러시와 사용자 간의 거리와 상관없이 그대로 유지됩니다.**

- 페인트 브러시 음향은 얼굴 가까이에서는 최대 볼륨이고 팔을 뻗었을 때에는 약 50% 볼륨이어야 합니다.

단계를 완료로 표시

## 4. 보너스 작업

Q&A (0)

**6.  UI에서 오디오 피드백이 나오지 않습니다.**

- UI의 모든 버튼에 음향 효과를 추가하고, 페인트 브러시를 사용하는 동안 지속적으로 플레이되는 음향 효과를 추가합니다.

**7.  지지대를 완전히 숨길 방법이 없습니다.**

- 지지대 오브젝트를 켜기/끄기로 토글해 표시하거나 숨기는 토글 UI를 지지대 옆의 메뉴에 추가합니다.

**8.  작업한 그림을 저장할 방법이 없습니다.**

- 옆 테이블에 3D 제작물의 미니어처 버전을 생성하는 프린트 버튼을 추가합니다.

**9.  오브젝트의 뒷면 또는 측면에 그림을 그릴 방법이 없습니다.**

- UI에 전체 지지대를 회전하여 뒷면에도 그릴 수 있도록 해 주는 슬라이더를 추가합니다.

단계를 완료로 표시

## 5. 힌트

Q&A (0)

**주요 작업 힌트**

**1.**캔버스 렌더 모드는 Screen Space가 아닌 World Space여야 합니다.

**2.**XR Controller 컴포넌트의 입력 매핑에서 LeftHand와 RightRay를 살펴봅니다.

**3.**페인트 브러시의 XR Grab Interactable 컴포넌트에서 Activated와 Deactivated 이벤트의 함수를 살펴봅니다.

**4.**버튼 틴트의 알파(투명도) 값을 확인합니다. 작은 브러시와 큰 브러시의 함수를 살펴보고 참조하여 이상적인 궤적의 너비를 결정하세요.

**5.**3D 음향이 활성화되어 있는지 확인하고 3D 음향 롤오프 커브를 점검하여 소스에서 약 1미터 떨어진 거리에서 음향이 50%로 낮아지게 설정합니다.

**보너스 작업 힌트**

**6.**PlayQuickSound 또는 PlaySoundsFromList 스크립트를 사용합니다.

**7.**ToggleVisibility 스크립트에서 Toggle() 함수를 사용합니다.

**8.**힌트가 제공되지 않습니다. Google 검색을 활용하세요.

**9.**힌트가 제공되지 않습니다. Google 검색을 활용하세요.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
