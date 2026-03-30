[Image: image]

# 과제 1 - 건축물 검토

Tutorial

Beginner

+10XP

60 mins

1

Unity Technologies

[Image: 과제 1 - 건축물 검토]SummarySkills

이 과제에서는 VR Room을 만들면서 배운 기술을 건축물 검토 앱에 적용합니다. 이 프로토타입에서 사용자는 실제 크기의 건물을 살펴보고, 해당 건물의 미니어처 3D 모형과 평면도를 검사하고, 건물을 둘러보면서 자를 사용해 측정할 수도 있습니다.

이 과제에서는 다음 수업에서 배운 기술을 평가합니다.

- [VR 이동](https://learn.unity.com/tutorial/vr-locomotion)
- [잡을 수 있는 오브젝트](https://learn.unity.com/tutorial/grabbable-objects)
- [소켓](https://learn.unity.com/tutorial/sockets-g)

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

**1.  문제가 있는 건축물 검토 프로토타입 씬 열기**

- **프로젝트**창에서 **Assets** > **Challenges** > **01_Architecture** > **Scenes**를 엽니다.
- **Architecture_Prototype_Broken** 씬을 더블 클릭하여 엽니다.

**2.  과제 작업 수행**

- 아래 단계에 나열된 작업을 진행합니다.
- 추가 보너스 과제에 도전하면 기술을 더욱 향상할 수 있습니다.
- 진행하다 막히는 경우 페이지 하단에서 각 작업에 대한 힌트를 참조할 수 있습니다.

단계를 완료로 표시

## 3. 과제 작업

Q&A (0)

**1.  측정용 막대기와 클립보드가 왼쪽 손목에 제대로 붙어 있지 않습니다.**

- 클립보드는 뒤집어져야 하며 측정용 막대기는 클립보드 왼쪽 위치에 스내핑되어 있어야 합니다.

**2.  집 모형이 지지대에서 아주 멀리 떨어진 곳에 스내핑되어 있습니다.**

- 집 모형을 지지대 위에 배치하면 지지대에 스내핑되어 있어야 합니다.

**3.  현재 자와 클립보드를 지지대에, 집 모형을 왼쪽 손목에 각각 스내핑할 수 있습니다.**

- 집 모형은 지지대 위에만 배치할 수 있어야 하고, 클립보드와 측정용 막대기는 손목에만 스내핑할 수 있어야 합니다.

**4.  식탁이 너무 높습니다.**

- 식탁 높이는 0.74미터(29인치)여야 합니다.

**5.  지지대 옆에 있는 텔레포트 앵커가 플레이어를 거꾸로 세워 지지대 바깥 쪽을 향하게 합니다.**

- 여기로 텔레포트하면 플레이어는 똑바로 선 채로 지지대를 향해야 합니다.

단계를 완료로 표시

## 4. 보너스 작업

Q&A (0)

**6.  오른손의 광선이 모든 기본 설정을 사용합니다.**

- 광선의 모양을 부드러운 베지어 곡선으로 변경하여 텔레포트를 편하게 만들고, 투명에서 불투명으로 페이드하도록 유효 색상과 무효 색상을 편집합니다.

**7.  씬에 배경음이 있어야 합니다.**

- 배경에 주변의 바람 소리와 집 근처에서 새가 지저귀는 듯한 소리를 무작위로 추가합니다.

단계를 완료로 표시

## 5. 힌트

Q&A (0)

**주요 작업 힌트**

**1.**왼손 소켓에 사용되는 연결 트랜스폼의 위치와 회전을 살펴봅니다.

**2.** 지지대 소켓에 적용되는 스피어 콜라이더의 크기를 살펴봅니다.

**3.**소켓과 잡을 수 있는 오브젝트의 인터랙션 레이어 마스크를 확인합니다.

**4.**높이가 정확한 측정용 막대기를 만들어서 테이블 옆에 배치해 봅니다.

**5.**앵커의 로컬 방향과 Teleportation Anchor 컴포넌트의 Match Orientation 설정을 살펴봅니다.

**보너스 작업 힌트**

**6.**XR Ray Interactor 컴포넌트에서 선의 모양을 편집하고, XR Interactor Line Visual 컴포넌트에서 색상을 편집합니다.

**7.**오디오 소스를 3D Spatial Blend로 설정한 다음 원하는 경우 OnTimedInterval 및 PlaySoundsFromList 컴포넌트를 사용하여 새 소리를 무작위화합니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
