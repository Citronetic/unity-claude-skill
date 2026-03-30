[Image: image]

# 3.3강 - 생동감 있는 캐릭터 만들기

Tutorial

Beginner

+10XP

60 mins

4

(208)

Unity Technologies

[Image: 3.3강 - 생동감 있는 캐릭터 만들기]SummarySkills

**개요:**

이제 게임은 그럴싸하게 만들어졌는데, 플레이어 캐릭터의 생동감이 부족하네요. 캐릭터가 지면을 미끄러지듯 이동하는 것이 아니라, 달리고, 점프하고, 사망하는 등의 애니메이션을 만들어 보겠습니다. 또한 애니메이션의 속도를 조정하고 게임 환경에서 완벽하게 보이도록 타이밍을 지정합니다.

**프로젝트 결과:**

캐릭터는 Animator 컨트롤러의 애니메이션을 활용하여 3가지 게임 상태에서 나타나는 3가지의 새로운 애니메이션을 사용합니다. 달리기, 점프, 사망을 비롯한 상태는 모두 원활하게 전환되며 게임에서 어울리는 상황별로 연출됩니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 플레이어의 애니메이션 살펴보기

Q&A (0)

> *이 캐릭터가 팔과 다리를 움직이도록 하려면 애니메이션 컨트롤러를 살펴봐야 합니다.*

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

플레이어의 **Animator 컨트롤러**를 더블 클릭하여 다른 **레이어**를 살펴보고, **상태**를 더블 클릭하여 애니메이션을 확인하고, **전환**을 더블 클릭하여 조건을 확인합니다.

단계를 완료로 표시

## 2. 플레이어가 달리기를 하도록 구현

Q&A (0)

> *애니메이션 컨트롤러에 더 익숙해졌으니, 이제 일부 변수와 설정을 조정하여 플레이어가 실제로 달리는 것처럼 만들 수 있습니다.*

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

1. **Parameters 탭**에서 **Speed_f** 변수를 1.0으로 변경합니다.
2. *Run_Static을 **오른쪽 클릭**한 후 Set as Layer Default State*를 선택합니다.
3. Run_Static 상태를 **클릭**하고 인스펙터에서 **Speed** 값을 **배경** 속도와 일치하도록 조정합니다.

단계를 완료로 표시

## 3. 점프 애니메이션 설정

Q&A (0)

> *달리는 애니메이션은 자연스러워 보이는데, 플레이어가 장애물을 뛰어넘는 모습은 조금 어색하네요. 이제 실제로 튀어 오르는 것 같은 점프 애니메이션을 추가해야 합니다.*

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

1. **PlayerController.cs**에서 새 ***private Animator playerAnim;***을 선언합니다.
2. ***Start()***에서 ***playerAnim = GetComponent<Animator>();***를 설정합니다.
3. 플레이어가 점프할 때 사용하는 **if 문**에서 다음과 같이 점프를 트리거합니다.
playerAnim***.SetTrigger("Jump_trig");***

[Image: image]단계를 완료로 표시

## 4. 점프 애니메이션 조정

Q&A (0)

> *달리기 애니메이션이 재생되지만 아직 완벽하지 않습니다. 캐릭터의 물리 관련 변수 중 일부를 조정하여 자연스럽게 표현되도록 해야 합니다.*

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

1. Animator 창에서 **Running_Jump** 상태를 클릭하고 인스펙터에서 **Speed 값을 줄여** 애니메이션 속도를 줄입니다.
2. 플레이어의 **질량**, **점프력**, **중력** 조정값을 조정하여 플레이어가 올바르게 점프하도록 만듭니다.

단계를 완료로 표시

## 5. 넘어지는 애니메이션 설정

Q&A (0)

> *이제 달리고 점프하는 애니메이션은 자연스러워졌지만, 애니메이션을 추가해야 하는 캐릭터 상태가 하나 더 있습니다. 캐릭터가 오브젝트와 충돌하면 계속 전력 질주하는 것이 아니라 KO 당하듯이 뒤로 넘어져야 합니다.*

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

1. 플레이어가 장애물과 충돌하는 **조건**에서 **Death** **부울**을 **true**로 설정합니다.
2. 같은 **if 문**에서 **DeathType** 정수를 1로 설정합니다.

[Image: image]단계를 완료로 표시

## 6. 플레이어가 쓰러진 상태에서 점프 방지

Q&A (0)

> *모든 것이 완벽하게 작동하지만, 한 가지 수정해야 하는 작은 버그가 있습니다. 플레이어가 쓰러진 상태에서도 점프할 수 있어서, 마치 전기 충격을 받은 것처럼 보입니다.*

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

1. 플레이어가 쓰러진 상태에서 점프하지 못하게 하려면 ***&& !gameOver***를 **점프 조건
에 추가합니다.**

[Image: image]단계를 완료로 표시

## 7. 수업 요약

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

새 기능:

- 플레이어가 빠르게 달리는 애니메이션으로 씬 시작
- 플레이어가 점프할 때 점프 애니메이션 재생
- 플레이어가 충돌할 때 플레이어가 넘어지는 애니메이션 재생

새로운 개념 및 기술**:**

- 애니메이션 컨트롤러
- 애니메이션 상태, 레이어, 전환
- 애니메이션 파라미터
- 애니메이션 프로그래밍
- SetTrigger(), SetBool(), SetInt()
- Not(!) 연산자

다음 수업**:**

- 파티클 효과와 음향 효과를 사용하여 게임을 더 멋지게 만들어 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
