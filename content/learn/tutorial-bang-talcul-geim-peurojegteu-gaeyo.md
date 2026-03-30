[Image: image]

# 방 탈출 게임 프로젝트 개요

Tutorial

intermediate

+10XP

30 mins

2

Unity Technologies

[Image: 방 탈출 게임 프로젝트 개요]Summary

이 프로젝트는 지금까지 해 왔던 프로젝트와 다릅니다. 프로젝트 브리프와 몇 가지 힌트가 제공되지만 프로젝트를 구현하는 것은 여러분의 몫입니다. 여러분의 목표는 방 탈출 게임의 마지막 상호 작용을 구현하는 것입니다.

이 튜토리얼에서는 프로젝트 개요를 살펴보고, 제공된 힌트를 적절하게 사용하는 방법을 배우고, Unity에서 기본 프로젝트를 설정해 보겠습니다.

Resources

- [VR-Pathway_Escape-Room_partial-project-brief.pdf](https://unity-connect-prd.storage.googleapis.com/20220613/7bde88ee-5d2a-4851-8240-fe917127d0fd/VR-Pathway_Escape-Room_partial-project-brief.pdf?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951525296)
- [VR-Pathway_Escape-Room_Assets.zip](https://unity-connect-prd.storage.googleapis.com/20220614/ae357b7b-0652-4352-b515-6def6dafda09/VR-Pathway_Escape-Room_Assets.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951525296)

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 개요

Q&A (0)

현재 여러분은 XR Interaction Toolkit API를 사용하여 커스텀 VR 상호 작용을 프로그래밍한 경험이 있을 것입니다. 이제 배운 내용을 새로운 프로젝트 브리프에 적용하여 방 탈출 게임의 일부 기능을 코딩해 보겠습니다.

프로젝트를 개발하는 동안 프로젝트 브리프의 비교적 까다로운 요소들을 해결하는 데 도움이 되는 몇 가지 힌트가 제공됩니다.

이 튜토리얼에서는 프로젝트 브리프에 대해 알아보고 Unity에서 기본 씬을 설정해 보겠습니다.

단계를 완료로 표시

## 2. 프로젝트 브리프란?

Q&A (0)

**프로젝트 브리프**는 프로젝트를 요약하고 핵심 요구 사항을 간략하게 설명하는 문서입니다. 프로젝트 브리프는 모든 프로젝트 작업자를 위한 SSOT(single source of truth)입니다. 프로젝트 브리프가 없으면 개발 과정 중에 오해가 발생하고 작업이 비효율적으로 진행되어 다양한 고충을 겪게 됩니다.

VR 개발 분야에서 일하면 클라이언트가 프로젝트 브리프를 제공하거나 클라이언트와 함께 프로젝트 브리프를 만들게 됩니다. 그 후 프로젝트 브리프의 요구 사항을 구현하는 것은 여러분과 팀의 몫입니다.

이 학습 프로젝트에서는 이런 일반적인 클라이언트 상호 작용을 시뮬레이션해 봅니다.

이 동영상에서는 유명 크리에이터들이 업계에서 프로젝트 브리프가 맡는 역할에 대해 이야기합니다.

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

단계를 완료로 표시

## 3. 프로젝트 목표

Q&A (0)

이 프로젝트에서는 방 탈출 게임의 마지막 상호 작용을 구현해야 합니다. 사용자가 할 수 있어야 하는 동작은 다음과 같습니다.

**1.**  숫자 패드에 코드를 입력하여 키 카드를 받습니다.

**2.**  키 카드를 사용하여 문의 잠금을 해제합니다.

**3.**  미닫이문을 열고 방에서 탈출합니다.

프로젝트를 완료하면 다음과 같은 모습이 되어야 합니다.

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

다음 세 개의 튜토리얼은 각각 프로젝트의 세 가지 핵심 상호 작용인 숫자 패드, 카드 리더기, 미닫이문에 대해 다룹니다. 각 상호 작용의 구체적인 기술 요구 사항과 힌트는 해당 튜토리얼에서 확인할 수 있습니다.

미리 읽어 보고 싶다면 [프로젝트 브리프를 다운로드](https://connect-prd-cdn.unity.com/20220613/7bde88ee-5d2a-4851-8240-fe917127d0fd/VR-Pathway_Escape-Room_partial-project-brief.pdf)하여 요구 사항을 확인해 보세요.

단계를 완료로 표시

## 4. 힌트 활용 방법

Q&A (0)

결코 쉬운 프로젝트는 아닙니다. 지금까지 코딩해 본 적이 없는 기능을 프로그래밍해야 합니다.

따라서 이 과제를 해결하는 데 도움이 되도록 프로젝트 진행 중에 여러 힌트 세트가 제공됩니다.

각 튜토리얼에는 세 단계의 힌트 세트가 있으며, 높은 단계일수록 더 유용하고 구체적인 힌트가 제공됩니다. 처음에는 힌트를 보지 않고 시작해 보세요. 그러다 막히면 1단계 힌트를 확인하세요. 그래도 막히면 2단계 힌트를 확인하고, 여전히 이해가 되지 않는다면 마지막 힌트를 확인하세요.

각 힌트 세트에 포함되는 내용은 다음과 같습니다.

- 힌트 세트 1
코드 아키텍처와 프로그래밍 로직 전반을 안내하는 포괄적이고 개략적인 내용의 힌트입니다.
- 힌트 세트 2
기능을 구현하는 데 도움이 될 수 있는 구체적인 메서드, 클래스, 기술 자료를 알려 주는 힌트입니다.
- 힌트 세트 3
어려운 기능을 구현하는 데 도움이 되는 실제 코드 스니핏이 포함되어 있습니다.

전문 팀에서 이 프로젝트를 진행하고 있다면 막힐 때 도움을 주거나 함께 브레인스토밍할 동료가 있을 것입니다. 혼자서 프로젝트를 진행하는 경우에는 이 힌트를 친절하고 숙련된 프로그래머 팀원이 주는 조언이라고 생각하세요.

다음 힌트 세트로 넘어가기 전에 각 기능을 프로그래밍해 보는 것이 좋습니다. 직접 과제를 해결하려고 노력하는 것이 가장 좋은 학습 방법입니다.

프로젝트 진행이 완전히 막혀서 실제 작동 코드를 참조하고 싶다면 각 튜토리얼의 마지막 부분에서 완성된 스크립트를 확인할 수 있습니다.

단계를 완료로 표시

## 5. 프로젝트 및 씬 설정

Q&A (0)

프로젝트의 첫 번째 기능을 작업하기 전에 다음 단계를 완료하여 씬을 설정하고 작업 준비를 마치세요.

**1.** 새로운 VR용 프로젝트를 생성합니다.
[프로젝트 설정 튜토리얼](https://learn.unity.com/tutorial/vr-project-setup)의 지침과 시작용 프로젝트 템플릿을 사용하여 프로젝트를 만들면 됩니다. **XR Plug-in Management** 패널에서 플러그인을 설정하는 것도 잊지 마세요.

**2.** [Escape Room 에셋](https://connect-prd-cdn.unity.com/20220614/ae357b7b-0652-4352-b515-6def6dafda09/VR-Pathway_Escape-Room_Assets.zip)을 다운로드하고 새 VR 프로젝트로 임포트합니다.

**3.** Scenes 폴더에서 **VREscapeRoom_Start** 씬을 엽니다.

다음과 같은 씬이 열릴 것입니다.

[Image: image]

헤드셋이나 XR 릭 시뮬레이터로 VR에서 프로젝트를 테스트하여 성공적으로 실행되는지 확인합니다.

아직 작동하는 에셋은 없을 것입니다. 에셋을 작동하게 만드는 것은 앞으로 튜토리얼을 통해 진행할 작업입니다.

단계를 완료로 표시

## 6. 다음 단계

Q&A (0)

다음 튜토리얼에서는 첫 번째 기능인 숫자 패드를 구현합니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
