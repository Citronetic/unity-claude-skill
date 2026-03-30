[Image: image]

# 2D 에셋 받기

Tutorial

foundational

+10XP

60 mins

3

(110)

Unity Technologies

[Image: 2D 에셋 받기]SummarySkills

이 튜토리얼에서는 2D DCC(디지털 콘텐츠 제작) 툴에 대해 설명하고, Unity 에셋 스토어를 살펴보면서 이 튜토리얼 이후에 필요한 2D 에셋을 받습니다.

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 실시간 2D 제작을 지원하는 콘텐츠 제작 툴을 설명합니다.
- 웹 브라우저에서 에셋 스토어로 이동합니다.
- 에셋 스토어에서 검색 및 검색 대상을 필터링합니다.
- Unity 계정을 통해 에셋 스토어에서 자동으로 에셋을 임포트합니다.

Resources

- [Get-2D-assets-transcripts.zip](https://unity-connect-prd.storage.googleapis.com/20201106/73ac5823-671d-419c-961f-10b650ffa5bf/Get-2D-assets-transcripts.zip?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666459)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 개요

Q&A (0)

이 튜토리얼에서는 2D DCC(디지털 콘텐츠 제작) 툴을 사용하여 2D 에셋을 만드는 방법과, 이러한 툴을 사용해 제작된 에셋을 Unity 에셋 스토어에서 받는 방법을 설명합니다. 이러한 에셋에는 스프라이트 및 스프라이트 모음집, 머티리얼용 이미지, 사용자 인터페이스 구성 요소 및 기타 2D 에셋 등이 있으며, 에셋을 사용하면 시간과 노력을 절감할 수 있습니다. 이번 학습 프로젝트의 과제에 유용하게 활용할 수 있는 에셋을 임포트하는 방법을 알아보겠습니다.

단계를 완료로 표시

## 2. 2D DCC

Q&A (0)

#### 2D DCC란?

아티스트는 Adobe [Photoshop](https://www.adobe.com/products/photoshop.html), [Illustrator](https://www.adobe.com/products/illustrator.html), [Substance Painter](https://www.substance3d.com/products/substance-painter/), [Gimp](https://www.gimp.org/)와 같은 2D DCC(디지털 콘텐츠 제작) 툴을 사용해 텍스처, 배경, UI(사용자 인터페이스) 요소를 2D로 제작할 수 있습니다.

이러한 프로그램에서 아티스트는 종이에 하는 것처럼 **그리거나** **칠하고**, 품질 저하 없이 확대 가능한 **벡터 아트**를 제작하고, 레이어, 필터, 효과를 사용하여 기존 이미지를 **편집** 및 **보강**하고, 메뉴, 버튼, 텍스트를 포함한 **인터페이스** 또는 레이아웃을 **디자인**합니다.

다음은 Photoshop에서 편집 중인 텍스처의 예시입니다.

[Image: image]

3D 에셋과 마찬가지로 2D 에셋도 쉽게 엔진에 임포트되어 프로젝트에 통합됩니다.

[Image: image]

아래 영상을 시청하고, 전문 아티스트가 DCC를 사용해 Unity에서 아이디어를 구현하는 방법을 알아보세요.

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

**참고:** 영상 대본을 보려면 재생 중에 **대본 보기**를 선택하세요. 각 튜토리얼 페이지 상단에 있는 **자료**섹션의 링크에서 PDF 파일을 다운로드할 수도 있습니다.

### Unity의 2D 에셋용 기타 리소스

Unity에는 2D 에셋 사용에 특화된 빌트인 툴이 있습니다. 예를 들어 [2D 타일맵 에디터에서는](https://docs.unity3d.com/Manual/class-Tilemap.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666459) 2D 레벨을 빠르게 디자인할 수 있으며, [스프라이트 에디터](https://docs.unity3d.com/Manual/SpriteEditor.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666459)를 사용하면 2D 애니메이션에 들어갈 다양한 이미지(스프라이트)를 관리할 수 있습니다. [2D 물리](https://docs.unity3d.com/Manual/class-Physics2DManager.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666459), [2D 광원](https://docs.unity3d.com/Packages/com.unity.render-pipelines.lightweight@6.7/manual/2DLightProperties.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931666459) 등에 특화된 시스템도 있습니다.

[Image: image][Image: image][Image: image]

[Unity 에셋 스토어](https://assetstore.unity.com/)는 Unity 작업에 특화된 2D 아트를 구할 수 있는 유용한 리소스입니다.

단계를 완료로 표시

## 3. 실습

Q&A (0)

[Unity로 제작된 프로젝트](https://unity.com/madewith)의 예시를 하나 이상 살펴보고 2D DCC로 제작되어 Unity로 임포트된 요소를 확인합니다.  알아본 내용을 댓글로 공유해 보세요.

단계를 완료로 표시

## 4. 에셋 스토어 검색

Q&A (0)

**1.**[Unity 에셋 스토어](https://assetstore.unity.com/)(기본 브라우저에서 열림)로 이동하여 Unity ID를 사용해 로그인합니다.

**힌트:**에셋 스토어를 통해 받은 에셋은 Unity 계정에 연결되며, 동일한 Unity ID로 로그인되어 있는 동안 에디터에서 사용할 수 있습니다.

**2.**에셋 스토어 검색 탭에 'sprite'를 입력하여 사용 가능한 스프라이트 에셋을 검색합니다.

**3.**필터 패널의 가격 섹션에서 **무료 에셋**을 선택합니다.

**4.**머티리얼이 포함된 무료 에셋 패키지를 선택합니다. **Brackeys의 Free 2D Mega Pack**을 권장합니다.

**5.**에셋을 다운로드하여 프로젝트로 임포트하는 방법을 전체적으로 소개하는 최신 지침은 [**에셋 스토어에서 에셋 임포트**](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)를 참조합니다.

**6.**임포트 과정이 완료되면 새로운 스프라이트 중 하나를 선택하여 씬으로 드래그합니다.

[Image: image]단계를 완료로 표시

## 5. 다음 단계

Q&A (0)

이번 튜토리얼에서는 한 번 더 Unity 에셋 스토어를 사용해 보고 무료 에셋을 다운로드하여 임포트했습니다. 다음에는 이러한 에셋이나 에셋 스토어에서 볼 수 있는 다른 에셋을 사용하여 과제를 직접 완료해 보세요.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
