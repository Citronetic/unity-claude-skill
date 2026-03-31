[Image: image]

# 자료 제출: AR 캐릭터 만들기

Exercise

Beginner

+60XP

120 mins

3

Unity Technologies

[Image: 자료 제출: AR 캐릭터 만들기]Summary

이 과제에서는 프로젝트 브리프를 따라 테이블에 놓을 수 있는 인터랙티브 AR 캐릭터를 제작합니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 개요

Q&A (0)

이 과제에서는 프로젝트 브리프를 따라 테이블에 놓을 수 있는 인터랙티브 AR 캐릭터를 제작합니다.

단계를 완료로 표시

## 2. 프로젝트 브리프: AR 캐릭터 만들기

Q&A (0)

한 엔터테인먼트 회사에서는 컴패니언 AR 앱을 활용해 자사의 최신 TV 시리즈를 발표할 방안을 모색하고 있는데, 이 앱은 팬들이 TV 프로그램에 등장하는 캐릭터와 상호 작용할 수 있도록 구현되었습니다. 이 TV 프로그램에는 주인공과 여정을 함께하는 조연이 등장하며, 회사에서는 이 조연 캐릭터가 팬의 사랑을 받아 프로그램의 마스코트가 되기를 바랍니다.

#### 고려할 참고 자료

이 회사는 다음 앱에 나오는 경험으로부터 영감을 받았습니다.

- [AR Dragon](https://apps.apple.com/us/app/ar-dragon/id1270046606)
- [My AR Puppy](https://apps.apple.com/us/app/my-ar-puppy-fun-virtual-pet/id1487263639)

#### 특징

이 회사에서는 이 앱에서 사용자가 자신의 집에 놓을 수 있는 캐릭터의 AR 버전을 제공하도록 구현하려 합니다. 여러분은 이 AR 경험의 간단한 POC(Proof of Concept)를 만들어 달라는 요청을 받았습니다.

이 경험은 사용자가 수평면을 스캔하는 프롬프트로 시작되어야 합니다. 앱에서 유효한 평면을 찾으면 캐릭터가 자동으로 나타나야 합니다. 이 캐릭터는 일종의 대기 상태(idle) 행동을 하다가 사용자 인터랙션에 반응해 별도의 행동을 해야 합니다.

회사에서는 시작점으로 삼을 만한 여러 아이디어를 제시했지만, 여러분이 고유의 컨셉을 구상해도 무방하다고 이야기했습니다.

상호 작용 중이 아닌 경우 캐릭터는 다음과 같은 행동을 할 수 있습니다.

- 무작위로 걷기
- 잠자기
- 말하기

사용자가 캐릭터와 상호 작용할 때 캐릭터는 다음과 같은 행동을 할 수 있습니다.

- 쓰다듬기 또는 누르기에 반응
- 음식 먹기
- 사용자가 평면에서 누른 장소로 이동하기(더 복잡함)

#### 예시

다음은 이러한 요구 사항을 충족하기 위해 만들 수 있는 프로젝트 유형의 예시이며, 여러분의 프로젝트는 전혀 다를 수 있습니다. 이 예시에서는 [Practical Game Accessibility](https://assetstore.unity.com/packages/essentials/tutorial-projects/practical-game-accessibility-case-study-223056) 에셋의 마녀가 책상 위에 생성되며 말하기 애니메이션을 트리거하는 등, 무작위로 사용자에게 말을 겁니다. Explode 버튼을 누르면 마녀의 손에 있는 플라스크가 파티클 효과를 방출합니다. 이 예시에는 재설정 버튼과 생성 행동에 따른 파티클을 비롯하여 선택적인 추가 기능이 나와 있습니다.

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

위 예시에서는 캐릭터 아래에 작은 그림자가 있습니다. 이 은은한 효과는 AR 오브젝트가 환경에 훨씬 더 녹아든 느낌을 줍니다.

TV 프로그램은 현재 사전 제작 단계에 있으므로 아직 컴패니언 캐릭터의 모델을 사용할 수는 없습니다. 이 회사에서는 POC용으로 어떤 종류의 캐릭터 모델을 사용해도 무방하다고 했습니다. 회사 입장에서는 여러분이 사용자 환경에 캐릭터를 배치하는 것을 보여 주고 흥미로운 인터랙션 예시를 시연할 수만 있으면 됩니다.

단계를 완료로 표시

## 3. 요구 사항

Q&A (0)

이 과제를 성공적으로 완수하려면 다음 요구 사항을 충족해야 합니다.

- 앱이 시작하자마자 환경을 스캔하라는 텍스트가 사용자에게 표시되어야 합니다.
- 유효한 평면이 감지되는 대로 펫이 자동으로 나타나야 합니다.
- 사용자가 펫과 직접 상호 작용하지 않는 동안에는 펫이 하나 이상의 행동을 해야 합니다.
- 사용자가 펫을 누르는 경우 펫이 하나 이상의 행동을 해야 합니다.

단계를 완료로 표시

## 4. 추가 자료 제출 지침

Q&A (0)

제출 자료 제작 시 주요 고려 사항은 다음과 같습니다.

#### 에셋

이 교육 과정에서 사용된 에셋을 원하는 방식으로 자유롭게 재사용 및 수정할 수 있습니다. 직접 디자인한 에셋이나 [Unity 에셋 스토어](https://assetstore.unity.com/) 또는 [Sketchfab](https://sketchfab.com/)과 같은 리소스 사이트의 에셋을 추가해도 됩니다.

**중요**: 제3자의 에셋은 에셋 크리에이터가 제공하는 라이선스에 따라 사용해야 합니다.

#### 사용자 인터페이스

사용자가 어떤 방법으로 필터 기능을 선택할 수 있나요? 사용할 UI 요소를 디자인하고 Unity에서 구현하세요. 이전 마커 프로젝트의 UI 버튼 프리팹을 출발점으로 사용하거나 직접 디자인할 수 있습니다.

Unity에서 사용자 인터페이스를 제작하는 방법에 대한 추가 리소스가 필요한 경우 [**Creative Core: UI**](https://learn.unity.com/project/creative-core-ui)를 참고하면 도움이 됩니다.

#### 비주얼 스크립트

앱이 작동하는 데 필요한 그래프를 생성하세요. 요소를 정돈하고 파악하기 쉽도록 기능의 주요 부분마다 별도의 그래프를 만들어야 합니다. 이전 프로젝트에서 만든 모든 그래프를 재사용 및 수정하거나 직접 디자인할 수 있습니다.

비주얼 스크립팅 사용법에 대한 추가 리소스가 필요한 경우 [**비주얼 스크립팅 소개**](https://learn.unity.com/project/introduction-to-visual-scripting)를 확인해 보세요.

단계를 완료로 표시

## 5. 작업물 제출

Q&A (0)

요구 사항을 충족하고 나면 프로젝트를 제출해서 공유해 주세요. 그 전에 철저히 테스트를 진행하세요. 친구나 가족에게도 테스트를 부탁하면 더 좋습니다.

프로젝트를 업로드하는 방법은 다음과 같습니다.

**1.**프로젝트의 스크린샷을 찍거나 AR 캐릭터가 나오는 화면을 녹화합니다.

**2.**  제출 자료의 제목과 설명을 추가합니다. 동영상 녹화본을 포함해야 합니다. 프로젝트를 진행한 프로세스나 생성한 프로젝트에 대해 공유할 추가 세부 정보가 있으면 설명란에서 공유할 수 있습니다.

**3.**  제출 자료 보기 권한 설정:

- 공개: 누구나 이 튜토리얼을 볼 수 있습니다.
- 비공개: 제출자만 볼 수 있습니다.

**4.** **저장 및 제출 자료 미리 보기**를 선택합니다.

**5.**  제출 자료 미리 보기를 확인한 후 CAPTCHA 테스트를 완료하고 **제출 및 계속**을 선택합니다.

한 명 이상의 다른 크리에이터 제출 자료에 댓글을 달 것을 적극 권장합니다. 다른 크리에이터들이 과제를 성공적으로 완료했나요? 해당 프로젝트의 어떤 점이 마음에 들며, 추가하면 좋을 새로운 기능에는 어떤 것이 있을까요?

#### 제출하려면 로그인하세요

로그인

## Complete this Tutorial

모든 단계를 완료로 표시
