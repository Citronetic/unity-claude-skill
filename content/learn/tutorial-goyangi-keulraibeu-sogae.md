[Image: image]

# 고양이 클라이브 소개

Tutorial

Beginner

+10XP

10 mins

6

(66)

Unity Technologies

[Image: 고양이 클라이브 소개]Summary

고양이 클라이브를 만나 보세요. 게임을 플레이하며 게임 메카닉과 게임의 목표를 이해하고, 비주얼 스크립팅을 사용하여 레벨을 추가로 개발할 수 있습니다.

이 튜토리얼에서 소개할 내용은 다음과 같습니다.

- 이 튜토리얼을 진행하기 위한 올바른 Unity 버전과 필요한 기술을 보유하고 있는지 확인합니다.
- Unity 에셋 스토어에서 '고양이 클라이브와 비밀의 지하실'을 다운로드하고 엽니다.
- 게임을 플레이하면서 작업 시 사용할 게임 컨트롤과 메카닉을 살펴봅니다.

Resources

- [Asset Store: Unity’s Visual Scripting Tutorial](https://assetstore.unity.com/packages/slug/192201)

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

먹이를 찾아 수수께끼 같은 지하실을 탐험하는 발랄한 고양이 클라이브를 소개합니다. 이 튜토리얼에서는 클라이브 게임의 첫 번째 레벨을 플레이하며 클라이브가 퀘스트에서 어떤 과제에 직면하는지 알아봅니다. 그런 다음 비주얼 스크립팅을 사용하여 게임의 두 번째 레벨을 개발하겠습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

#### 먼저 알아야 할 것

이번 튜토리얼 시리즈는 [**비주얼 스크립팅 소개**](https://learn.unity.com/project/introduction-to-visual-scripting)의 후속 과정으로, 비주얼 스크립팅 인터페이스와 기본 원칙, 알아야 할 용어를 다룹니다. 고양이 클라이브와 비밀의 지하실을 시작하려면 다음과 같은 내용을 알아야 합니다.

- 이름이 주어진 노드를 퍼지 파인더에서 찾아 비주얼 스크립트에 추가합니다.
- 게임 오브젝트(Script Machine)에서 간단한 비주얼 스크립트를 만들고 실행합니다.
- 비주얼 스크립트에서 변수와 변수 값을 생성하고 조정합니다.
- 비주얼 스크립트에 브랜칭을 적용합니다.

복습이나 준비가 더 필요한 경우 비주얼 스크립팅 소개부터 시작하세요. 금방 비주얼 스크립팅에 익숙해질 것입니다. 그런 다음 고양이 클라이브 게임에 여러분이 배운 지식을 활용해 보세요.

#### Unity 버전

이 학습 콘텐츠는 **Unity** **2021.1 이상**의 버전과 호환됩니다. 이 버전부터 Visual Scripting 패키지가 Unity에 기본 설치됩니다. 설치 프로세스를 간략하게 살펴보려면 [Hub에서 새로운 버전의 Unity를 설치하는 방법](https://learn.unity.com/tutorial/choose-the-right-unity-version?uv=2019.4&missionId=5f77cc6bedbc2a4a1dbddc46&pathwayId=5f7bcab4edbc2a0023e9c38f&contentId=5faec8a0edbc2a001fe5120e&projectId=5fa1b4d0edbc2a0020bc3a54&architecture=true#5fa1b6d7edbc2a0304437a1e)을 확인하세요. 이 튜토리얼에서는 Unity 버전 2021.1 이상을 사용하는 것이 좋습니다.

[Unity 에셋 스토어에서 Bolt라는 제품을 설치](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)한 경우, 이 튜토리얼을 Unity 2019 LTS 또는 Unity 2020 LTS로 진행할 수도 있습니다. [**Bolt**](https://assetstore.unity.com/packages/tools/visual-scripting/bolt-163802)를 사용하는 경우, 사용자 인터페이스와 항목 이름이 이 튜토리얼과 조금 다르긴 하지만 이해하는 데 큰 문제는 없습니다.

#### Unity 프로젝트 설정

고양이 클라이브 Unity 프로젝트를 설정하는 방법은 다음과 같습니다.

**1.** [**Unity 2021.1** 이상 버전을 설치합니다.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a3fedbc2a001f71f1aa)

**2.** **3D Sample Scene(URP)** 템플릿을 사용하여 [새로운 Unity 프로젝트를 만듭니다](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196).

**3.** Unity 에셋 스토어에서 [**Unity’s Visual Scripting Tutorial**](https://assetstore.unity.com/packages/essentials/tutorial-projects/unity-s-visual-scripting-tutorial-192201) 프로젝트 에셋을 엽니다.

**4.** [에셋을 다운로드하고 Unity 프로젝트로 임포트합니다](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4).

단계를 완료로 표시

## 3. 클라이브의 지하실 탐험

Q&A (0)

게임을 시작하고 플레이하는 방법은 다음과 같습니다.

**1.**기본적으로 SampleScene이라는 이름의 씬(Scene)이 열립니다. 아니면 Projects 폴더에서 **Assets > VisualScriptingTutorial > CompleteGame > Scenes > SampleScene**으로 이동하여 씬을 열어도 됩니다.

**2.**플레이 모드를 실행하여 클라이브의 지하실을 탐험합니다. 화살표 키를 사용하여 지하실 바닥의 그리드를 따라 클라이브를 움직입니다. 이 게임의 목적은 클라이브가 먹이를 찾도록 하는 것이지만, 여러 장애물이 클라이브가 가는 길을 가로막습니다.

**3.** 게임을 플레이하면서 게임 내 오브젝트가 어떻게 상호 작용하는지 살펴봅니다. 버튼과 레버로 문이 열리고 닫히며, 클라이브는 여기저기에 놓인 오브젝트를 밀어서 길을 열어 보지만 다양한 오브젝트들이 클라이브를 계속 방해합니다. 이번 튜토리얼 시리즈에서는 바로 이러한 메카닉을 프로그래밍하는 방법을 배우게 됩니다.

**4.**실제 게임플레이와 클라이브가 먹이를 찾아가는 모습은 이 영상에서 확인하세요. 클라이브의 모든 과제에 대한 공략법이 나오니 스포일러에 주의하세요.

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

## 4. 다음 단계

Q&A (0)

비주얼 스크립팅의 기본 사항을 알고 게임을 플레이했다면 고양이 클라이브의 새로운 레벨을 작업할 수 있습니다. 먼저 기존 스크립트를 더 쉽게 사용 및 재사용할 수 있도록 편집한 다음, 게임 내 액션을 스크립팅하겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
