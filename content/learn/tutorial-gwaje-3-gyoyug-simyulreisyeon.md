[Image: image]

# 과제 3 - 교육 시뮬레이션

Tutorial

Beginner

+10XP

60 mins

1

Unity Technologies

[Image: 과제 3 - 교육 시뮬레이션]SummarySkills

이 과제에서는 VR 공간을 제작하며 배운 기술을 산업 교육 시뮬레이션에 적용해 봅니다. 이 앱에서 사용자는 버튼, 손잡이, 레버, 조이스틱을 사용해 공장에 떨어져 있는 상자들을 모아 가까운 플랫폼에 쌓아야 합니다.

이 과제는 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

이 과제에서는 다음 수업에서 배운 기술을 평가합니다.

- [편리성 및 접근성](https://learn.unity.com/tutorial/3-1-comfort-and-accessibility?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [최적화](https://learn.unity.com/tutorial/3-2-optimization?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)
- [조명](https://learn.unity.com/tutorial/3-3-lighting?uv=2020.2&courseId=60183276edbc2a2e6c4c7dae&projectId=6018353dedbc2a0f634b7918)

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

**1.  문제가 있는 교육 프로토타입 씬을 엽니다.**

- **프로젝트**창에서 **Assets** > **Challenges** > **03_Training** > **Scenes**를 펼칩니다.
- **Training_Prototype_Broken** 씬을 더블 클릭하여 엽니다.

**2.  과제 작업을 시작합니다.**

- 아래 단계에 명시된 작업을 진행합니다.
- 추가 보너스 과제에 도전하면 기술을 더욱 향상할 수 있습니다.
- 막히는 경우 페이지 하단에 각 작업에 대한 힌트가 있습니다.

단계를 완료로 표시

## 3. 과제 작업

Q&A (0)

**1.  공장 중앙 부분에 검은 페이드인 화면이 나타납니다.**

- 검은 페이드인 화면이 사용자의 전체 시야각(FOV)에 들어와야 합니다.

**2.  'Console Labels' 토글로 전체 콘솔을 사라지게 할 수 있습니다.**

- 토글이 비활성화되면 콘솔의 라벨만 사라져야 합니다.

**3.  바닥 조명의 상태가 매우 바람직하지 않아 보입니다.**

- 바닥 조명도 다른 표면처럼 디테일이 돋보이게 구현하세요.

**4.  뒤편 왼쪽 모서리의 상자 더미에 사실적으로 베이크된 조명과 그림자가 구현되어 있지 않습니다.**

- 모든 상자 더미의 그림자가 동일해야 합니다.

**5.  콘솔이 그 위에 있는 베이크된 광원에 반응하지 않아서 매우 어두워 보입니다.**

- 최적화를 위해 베이크된 콘솔 위쪽의 광원을 유지하면서, 해당 광원이 콘솔을 비추는 것처럼 보여야 합니다.

단계를 완료로 표시

## 4. 보너스 작업

Q&A (0)

**6.  자석에 활성 상태 또는 비활성 상태임을 나타내는 시각적인 표시기가 없습니다.**

- 활성 상태 또는 비활성 상태일 때 각각 자석이 다른 색상으로 바뀌어야 합니다.

**7.  사용자가 앱을 이용하면서 항상 레이 인터랙터와 다이렉트 인터랙터에 액세스할 수 있습니다.**

- 지침을 읽는 동안에는 사용자가 콘솔을 사용할 수 없어야 하며, 지침을 클릭하면 지침의 광선이 사라져야 합니다.

**8.  사용자가 자석의 속도를 제어할 방법이 없습니다. [전문가]**

- 자석의 속도를 제어하는 설정이 있어야 합니다.

**9.  사용자가 이 교육의 진행 상황을 추적하거나 저장할 방법이 없습니다. [전문가]**

- 들어 올리는 데 성공한 상자의 개수와 경과한 시간을 표시하는 사용자 인터페이스가 있어야 합니다.

단계를 완료로 표시

## 5. 힌트

Q&A (0)

**주요 작업 힌트:**

**1.**페이드 캔버스의 시각화 수준을 높이려면 일시적으로 Canvas Group Alpha 값을 1로 설정한 후 페이드 캔버스가 카메라로부터 너무 멀리 떨어지지 않도록 합니다.

**2.**토글로 올바른 오브젝트가 활성화/비활성화되어야 합니다.

**3.**씬 뷰 상단에서 Draw Mode를 Shaded에서 Baked Lightmap으로 변경하면 바닥의 라이트맵 해상도가 다른 오브젝트에 비해 매우 낮음을 알 수 있습니다.

**4.**오브젝트를 라이트맵으로 베이크하려면 '정적'으로 표시해야 합니다.

**5.**라이트 프로브를 사용하면 동적 오브젝트가 베이크된 조명 조건에 반응할 수 있습니다.

**보너스 작업 힌트:**

**6.**리모컨의 표시기 광원을 변경할 때와 동일한 함수를 사용할 수 있습니다.

**7.**환영 텍스트 오브젝트의 ShowMessageFromList 컴포넌트에 On Complete () 이벤트가 있습니다. 이 이벤트에서는 광선을 끄고 콘솔의 기능을 켜야 하므로, 이벤트가 기본적으로 비활성화되어야 합니다.

**8.**힌트가 제공되지 않습니다. Google 검색을 활용하세요.

**9.**힌트가 제공되지 않습니다. Google 검색을 활용하세요.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
