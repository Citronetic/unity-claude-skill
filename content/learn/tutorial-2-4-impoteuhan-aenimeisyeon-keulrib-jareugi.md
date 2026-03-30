[Image: image]

# 2.4 임포트한 애니메이션 클립 자르기

Tutorial

Beginner

+10XP

40 mins

0

(13)

Unity Technologies

[Image: 2.4 임포트한 애니메이션 클립 자르기]Summary

이 튜토리얼에서는 달리기 애니메이션 클립에서 나만의 컷을 선택합니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 애니메이션별 설정을 사용해 임포트한 애니메이션 클립을 자릅니다. 애니메이션을 자르는 가장 일반적인 방법은 모션 캡처 데이터를 사용하는 것이지만, 모션 캡처 데이터는 임포트된 애니메이션을 조정하는 용도로도 사용할 수 있습니다.

[**2.3 모델별 애니메이션 임포트 설정**](https://learn.unity.com/tutorial/2-3-model-specific-animation-import-settings)에서는 임포트한 모델의 모든 애니메이션에 적용된 설정을 살펴보았습니다. 이 튜토리얼에서는 애니메이션에 개별적으로 적용되는 설정을 사용합니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.** 프로젝트 창에서**Assets**> **2.4 - Animation Import Settings**로 이동합니다.

이 튜토리얼에 필요한 모든 에셋이 이 폴더에 있습니다.

단계를 완료로 표시

## 3. 애니메이션 클립 자르기 및 설정

Q&A (0)

앞으로 진행할 세 개의 튜토리얼에서는 Unity 에디터에서 휴머노이드 달리기 애니메이션 클립을 자르고 설정합니다. 이 애니메이션 클립은 모션 캡처 데이터를 사용합니다.

튜토리얼을 차례대로 따라하거나 이 교육 과정을 위해 프로젝트에 준비된 리소스를 이용해 각 단계를 별도로 진행할 수 있습니다.

단계를 완료로 표시

## 4. 애니메이션 클립 열기

Q&A (0)

먼저 설정을 컨텍스트와 함께 검토할 수 있도록 다음과 같이 튜토리얼용 애니메이션 클립을 엽니다.

**1.**  프로젝트 창에서 **HumanoidRun** 모델을 선택합니다.

[Image: image]

**2.**  인스펙터에서 **Animation** 탭을 선택합니다.

[Image: image]

**3.**  **이름** 프로퍼티를 'Take 001'에서 'Run'으로 변경합니다. 이름 없이 임포트한 애니메이션 클립의 경우 Take 001이 기본값입니다.

[Image: image]

특정한 이름으로 변경하면 애니메이션 클립의 콘텐츠를 보다 쉽게 알아볼 수 있습니다.

단계를 완료로 표시

## 5. 애니메이션 타임라인 살펴보기

Q&A (0)

애니메이션 클립의 이름을 변경했으므로 타임라인으로 넘어가겠습니다. 애니메이션 타임라인에는 현재 애니메이션 클립(또는 테이크)의 애니메이션 데이터가 모두 표시됩니다.

핸들을 드래그하면 테이크를 자를 애니메이션 클립의 시작과 끝을 설정할 수 있습니다.

[Image: image]

정확도를 높이기 위해, 애니메이션 타임라인 바로 아래에 있는 필드를 사용하여 애니메이션 클립의 시작과 끝에 해당하는 프레임 번호를 설정할 수 있습니다.

단계를 완료로 표시

## 6. 루프 품질에 대한 신호등 시스템

Q&A (0)

**Animation** 탭에 있는 툴을 사용하면 이 애니메이션 클립의 모션 캡처 데이터를 통해 원활하게 반복되는 달리기 애니메이션을 생성할 수 있습니다. 그러나 이를 위해서는 자르기에 적합한 루프를 식별했는지 파악해야 합니다.

다음과 같이 탭의 여러 설정 옆에 표시되는 신호등 시스템이 도움이 됩니다.

- 설정 옆에**초록색** 원이 표시되면 양호한 루프가 있다는 뜻입니다.
- **노란색** 원은 루프가 적당한 수준이라는 뜻으로, 상황에 어울릴 수도 있고 그렇지 않을 수도 있습니다.
- **빨간색** 원은 부적합한 루프라는 뜻입니다.

[Image: image]

모든 설정의 시작점과 끝점에 양호(초록색) 표시가 나타나게 해야 할 것 같지만, 모든 애니메이션의 설정을 초록색으로 맞출 필요는 없습니다. 어떤 애니메이션을 생성하려는지에 따라 달라질 수 있습니다. 부적합한 루프라 해도 상황에 따라서는 의도한 바와 일치할 수도 있습니다.

단계를 완료로 표시

## 7. 전체 애니메이션 플레이

Q&A (0)

이 시점에서 애니메이션을 확인해 보겠습니다.

**1.** 인스펙터에서 프리뷰 창을 찾습니다.

**참고:**프리뷰 창이 축소되어 있을 수도 있습니다. 축소되어 있다면 인스펙터 하단의 바를 선택해서 확장하세요.

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

**2.** 프리뷰 창에서 **플레이**버튼을 눌러 전체 애니메이션을 끝까지 봅니다.

**3.**마쳤으면 프리뷰 창에서 **일시 정지** 버튼을 누릅니다.

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

확인해 보니 애니메이션 데이터 상태가 좋지 않네요. 이걸로 괜찮은 애니메이션 클립을 만들기는 좀 어려울 것 같지만, 그래도 한번 시도해 보겠습니다.

단계를 완료로 표시

## 8. 예시 루프 신호등 살펴보기

Q&A (0)

타임라인 핸들 중 하나를 드래그하면 모델 임포터에 신호등 각각에 대한 컬러 그래프가 표시되므로 양호한 루프를 찾는 데 도움이 됩니다.

[Image: image]

자세히 살펴보겠습니다.

- 그래프의 몇몇 부분은 평평한 선으로 나타납니다. 이 지점은 애니메이션이 멈춘 곳으로, 모션 캡처가 제대로 레코딩되지 않았기 때문일 가능성이 큽니다. 애니메이션 클립의 컷에 이 부분을 넣지 마세요.
- 테이크 시작 지점에서 모델이 평범하게 달릴 때보다 앞으로 기울어져 있는데, 통상적인 달리기 애니메이션에 이상적인 모습은 아닙니다.
- 테이크에 사용할 수 있는 10초 정도의 작은 애니메이션 섹션이 있는 것 같습니다. 여기서 루프를 찾아보겠습니다.

단계를 완료로 표시

## 9. 나만의 애니메이션 컷 생성

Q&A (0)

나만의 애니메이션 클립 컷을 생성하는 방법은 다음과 같습니다.

**1.  290프레임과 330프레임** 사이의 한 지점으로 시작 핸들을 드래그합니다.

[Image: image]

**2.** 종료 핸들을 드래그해 루프를 만듭니다.

[Image: image]

위의 예시에서는**317프레임**을 사용합니다. 다른 시작 프레임을 사용한다면 컬러 그래프를 이용해 적절한 종료 프레임을 찾아 보세요.

**팁:** 그래프에서 초록색 정점은 루프에 적합한지 확인하기에 좋은 위치입니다.

**3.** 프리뷰 창에서 **플레이**버튼을 눌러 애니메이션을 미리 봅니다.

**4.**마쳤으면 프리뷰 창에서 **일시 정지**버튼을 누릅니다.

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

다른 프레임을 사용했는데 약간 이상하게 보이더라도 아직은 변경하지 마세요. 도움이 될 만한 몇 가지 설정이 더 있습니다.

단계를 완료로 표시

## 10. Loop Time 활성화

Q&A (0)

타임라인 아래에 있는 첫 번째 설정 그룹을 통해 루프를 제어할 수 있습니다.

[Image: image]

**Loop Time** 설정이 활성화되어 있으면 애니메이션이 끝난 후 시작 지점에서 다시 시작됩니다.

현재 달리기 애니메이션으로 활용하기에 문제가 없으니 다음과 같이 구현하겠습니다.

- **Loop Time** 설정을 활성화합니다.

이렇게 하면 추가적인 설정 옵션이 활성화됩니다.

[Image: image]단계를 완료로 표시

## 11. Loop Pose 활성화

Q&A (0)

**Loop Pose**설정을 사용하면 애니메이션 클립의 키프레임 값이 시작과 끝에 일치하도록 변경할 수 있습니다.

간단히 말해 Loop Pose는 애니메이션이 시작해서 끝날 때까지 애니메이션에 멈칫거림을 일으킬 만한 급작스러운 변화를 방지하는 데 활용됩니다. 정확하게 일치하는 경우가 거의 없는 모션 캡처 데이터를 사용할 경우에 특히 유용합니다.

애니메이션이 매끄럽게 반복되어야 하므로 다음 설정을 사용해야 합니다.

- **Loop Pose** 설정을 활성화합니다.

#### 계산 방법

계산에 사용되는 대략적인 수식은 아래와 같습니다.

*newValue = originalValue - normalizedTime * (endValue - startValue)*

애니메이션 커브의 시작 값과 종료 값이 동일하면 같은 커브에서 임의의 키프레임에 해당하는 새로운 값도 원래 값과 동일합니다. 시작 값과 종료 값 사이의 차이가 벌어지면 시작부터 키프레임의 변화가 더 극명하게 드러납니다.

달리기 애니메이션에 맞는 양호한 루프를 잘라낸 경우, Loop Pose를 통해 애니메이션의 전반적인 모습을 바꾸지 않고 시작과 끝을 매끄럽게 만들 수 있습니다. 일반적으로 애니메이션 루프를 매끄럽게 만들려면 성능에 전혀 영향을 주지 않는 Loop Pose를 활성화하는 것이 좋습니다.

단계를 완료로 표시

## 12. Cycle Offset 설정 살펴보기

Q&A (0)

**Cycle Offset**은 선택한 프레임 범위에서 애니메이션 클립이 실제로 시작하는 시점을 조정합니다.

정규화된 시간으로 측정되므로, 값이 0.2라면 애니메이션 클립이 선택한 프레임 범위의 20% 정도 지점에서 시작합니다.

애니메이션 클립을 별개로 생각한다면 대개 Cycle Offset을 변경하지 않아도 됩니다. 하지만 비슷한 애니메이션 여러 개를 블렌딩할 때에는 동기화가 이뤄져야 자연스러워 보입니다.

휴머노이드 캐릭터 애니메이션의 경우, 블렌딩하려는 모든 애니메이션 클립에서 같은 정규화된 시간에는 다리의 위치가 모두 비슷해야 합니다. 각 애니메이션 클립의 시작 지점에서 반복되는 다리 움직임에 대한 기준을 마련해 두면 쉽습니다.

이 애니메이션 클립에 대해 다음과 같은 기준을 설정해 보겠습니다.

- 캐릭터의 오른쪽 발이 바닥에 고정되어 있습니다.
- 움직이는 방향에서 수직으로 보면 캐릭터의 왼쪽 무릎이 오른쪽 무릎을 지나고 있습니다.

[Image: image]단계를 완료로 표시

## 13. 애니메이션의 Cycle Offset 설정

Q&A (0)

Cycle Offset을 설정하고 정의된 포즈로 컷을 시작하는 방법은 다음과 같습니다.

**1.** 프리뷰 창에서 오른쪽 클릭하고 드래그해서 애니메이션 컷을 측면에서 봅니다.

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

**2.** 오른쪽 발이 바닥에 고정되어 있고 왼쪽 무릎이 오른쪽 무릎 뒤로 겹치는 지점으로 프리뷰 플레이헤드를 드래그합니다.

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

**3.** 프리뷰 창 하단에는 이 포즈에 대해 정규화된 시간이 괄호 안에 표시되어 있습니다.

[Image: image]

제시된 예시 범위를 사용할 경우 대략적으로 **(013.0%)**여야 합니다.

**4.**  선택한 포즈에 대해 **Cycle Offset**을 정규화된 시간으로 설정합니다.

[Image: image]

예제에서 정규화된 시간은 **0.13**입니다.  그러면 선택한 포즈에서 애니메이션 루프가 시작됩니다.

단계를 완료로 표시

## 14. 요약

Q&A (0)

이 튜토리얼에서는 달리기 애니메이션 클립에서 특정한 컷을 직접 선택해 보았습니다. 이는 Unity에서 애니메이션 작업을 할 때 기초적인 프로세스입니다.

[**임포트한 애니메이션 클립의 루트 모션 설정**](https://learn.unity.com/tutorial/2-5-setting-the-root-motion-of-imported-animation-clips?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69)에서는 이 프로세스를 기반으로 사전에 자른 애니메이션 클립으로 현실적이고 흥미로운 애니메이션을 생성하는 데 루트 모션을 어떻게 활용할지 살펴봅니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
