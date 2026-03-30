[Image: image]

# AR 마커에 오브젝트 생성

Tutorial

Beginner

+10XP

45 mins

1

(15)

Unity Technologies

[Image: AR 마커에 오브젝트 생성]Summary

이제 애플리케이션에서 모델을 선택했습니다. 하지만 모델이 씬에 항상 표시된다는 문제가 있습니다. 이 튜토리얼에서는 AR 마커를 생성하고 마커가 감지된 경우에만 모델이 나타나도록 설정합니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 개요

Q&A (0)

이제 애플리케이션에서 모델을 선택했습니다. 하지만 모델이 씬에 항상 표시된다는 문제가 있습니다. 이 튜토리얼에서는 AR 마커를 생성하고 마커가 감지된 경우에만 모델이 나타나도록 설정합니다.

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

## 2. 바람직한 AR 마커의 조건

Q&A (0)

AR 마커는 다음 요구 사항을 충족해야 합니다.

- 크기가 300 x 300픽셀 이상이어야 합니다. 단, 마커가 꼭 정사각형일 필요는 없습니다.
- 형식이 PNG 또는 JPG여야 합니다.
- 이미지에 강렬한 색상 값 콘트라스트가 있어야 합니다.
- 이미지에 반복되는 패턴이 없어야 합니다.

**참고**: AR Foundation에서는 색상 정보를 사용하지 않고 그레이스케일만 사용해 이미지를 감지하므로 마커의 콘트라스트가 충분해야 합니다. 마커에 색상을 적용하면 디자인 면에서 좋을 뿐입니다.

단계를 완료로 표시

## 3. XR Reference Image Library 생성

Q&A (0)

**_ARMarker** 에셋 폴더에는 제공되는 프리팹의 테마와 어울리는 3가지의 사전 제작된 마커가 있습니다. 이는 시작을 돕기 위한 샘플일 뿐이며, 위 단계에 명시된 요구 사항을 충족하는 한 개발자가 원하는 어떤 이미지든 실제 마커가 될 수 있습니다.

AR Foundation의 이미지 인식은 **Reference Image Library**라는 특수 에셋에서 관리합니다. 마커를 선택하면 이를 저장할 레퍼런스 이미지 라이브러리를 생성합니다. Reference Image Library는 애플리케이션에서 추적하려는 모든 이미지 마커를 저장할 수 있습니다. 이 라이브러리에 있는 이미지만 감지됩니다.

Reference Image Library에 대한 자세한 내용은 [Unity 매뉴얼 기술 자료](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@3.0/manual/tracked-image-manager.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951096769)를 참조하세요.

AR 마커를 선택하고 Reference Image Library를 생성하는 방법은 다음과 같습니다.

**1.**  프로젝트 창에서 **Assets**> **_ARMarker** > **Markers** 폴더로 이동합니다. 제공되는 마커 중에서 애플리케이션에 사용할 마커를 선택하거나 직접 생성한 후 임포트합니다.

**2.**  프로젝트 창의 **Markers** 폴더에서 오른쪽 클릭하고 **Create** > **XR** >**Reference  Image Library**를 선택합니다.

[Image: image]

**3.**  **Markers** 폴더에서 생성한 **ReferenceImageLibrary** 에셋을 선택하고 인스펙터에서 **Add Image**를 선택합니다.

**4.**  인스펙터의 **Texture 2D** 슬롯에 **Texture Selector**를 사용하고 'Marker'를 검색한 다음 프로젝트의 AR 마커로 사용할 **MarkerIcon** 이미지를 선택합니다.

**5.**iOS만 해당: iOS 프로젝트를 성공적으로 빌드하려면 마커의 실제 크기(미터 단위)를 지정해야 합니다. 지정한 크기와 일치하지 않더라도 마커가 인식될 수 있지만, 마커의 크기와 입력 값의 크기가 일치하지 않으면 앵커의 위치가 약간 벗어날 수 있습니다.

[Image: image]단계를 완료로 표시

## 4. 마커를 인쇄하거나 모니터에서 열기

Q&A (0)

이 프로젝트를 진행하다 보면 디바이스에서 앱의 마커 인식 기능을 자주 테스트하게 됩니다. 프린터를 이용할 수 있는 경우 종이에 마커를 인쇄하여 책상 위에 두고 테스트해 보세요.

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

종이에 인쇄된 마커를 사용하면 마커를 언제든지 확인하고 필요한 대로 옮길 수 있으므로 쉽게 테스트할 수 있습니다.

또는 컴퓨터에서 이미지를 열고 디바이스의 카메라에 이미지를 비추어 마커 인식 여부를 테스트할 수 있습니다.

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

컴퓨터 모니터를 사용하면 인쇄할 필요도 없고, 언제든지 이미지를 열 수 있으므로 더욱 편리한 경우도 있습니다. 하지만 모니터를 사용하면 테스트가 필요할 때마다 이미지를 열어야 하며 마커가 컴퓨터의 물리적 위치에 영향을 받습니다.

인쇄하는 편이 편할 것 같으면, 이 단계에서 마커를 인쇄해 두세요. 모니터를 사용하기로 정했다면 프로젝트 창에서 마커 이미지를 찾아 더블 클릭하여 컴퓨터의 기본 이미지 뷰어로 엽니다.

단계를 완료로 표시

## 5. Tracked Image Manager 추가

Q&A (0)

**AR Tracked Image Manager**는 Reference Image Library에 있는 이미지를 검색합니다. 이미지를 찾으면 프리팹에서 오브젝트를 생성해 AR 공간에 있는 마커 위에 배치합니다.

여기에서 단일 게임 오브젝트뿐만 아니라 프리팹을 지정하게 됩니다. 앱에서 마커가 트리거되면 이 프리팹의 인스턴스(사본)를 생성하며, 이로 인해 앱에 새 게임 오브젝트가 생성됩니다. 이 점은 나중에 중요하니 기억해 두세요.

AR Tracked Image Manager에 대한 자세한 내용은 [Unity 매뉴얼 기술 자료](https://docs.unity3d.com/Packages/com.unity.xr.arfoundation@3.0/manual/tracked-image-manager.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774951096769)를 참조하세요.

다음 지침을 따라 Tracked Image Manager를 씬에 추가합니다.

**1.**  계층 구조에서 **AR Session Origin** 게임 오브젝트를 선택합니다.

**2.**  인스펙터에서 **Add Component**를 선택하고 AR Tracked Image Manager 컴포넌트를 추가합니다.

**3.**  **Serialized Library** 프로퍼티를 찾고 피커(동그라미 모양)를 사용하여 생성한 ReferenceImageLibrary 에셋을 선택합니다.

**4.**  프로젝트 창의 **Assets** > **_ARMarker** > **Prefabs** 폴더에서 원하는 프리팹을 찾고, 해당 프리팹을 AR Tracked Image Manager 컴포넌트의 **Tracked Image Prefab** 프로퍼티로 드래그합니다.

[Image: image]단계를 완료로 표시

## 6. 디바이스에서 마커 테스트

Q&A (0)

Tracked Image Manager를 설정했으므로 이제 디바이스에서 실제 앱 기능을 테스트할 수 있습니다. 디바이스의 카메라가 이미지를 감지하면 선택한 프리팹이 나타나 마커의 추적 대상 이미지 위에 표시됩니다.

하지만 지금 씬에는 모델의 인스턴스가 이미 있습니다. 마커를 인식했을 때 프리팹이 씬에 자동으로 생성되므로 씬에서 활성화된 모델이 더 이상 필요하지 않습니다.

다음 지침을 따라 디바이스에서 마커 인식 여부와 오브젝트 생성 여부를 테스트하세요.

**1.**계층 구조에서 원하는 프리팹을 선택하고 인스펙터에서 비활성화합니다.

[Image: image]

빌드하기 전에 빠르게 반복 작업하고 테스트하려면 에디터 내 모델이 필요하지만, 디바이스에 있는 앱에는 모델을 표시하지 않으려고 합니다. 항상 빌드하기 전에 인스펙터에서 에디터 내 모델을 비활성화하세요.  그러지 않으면 씬에 또 다른 모델이 떠 있게 됩니다.

**2.**  저장하고 앱을 빌드합니다.

**3.**  종이에 마커를 인쇄한 경우 수평면 위에 둡니다. 마커를 인쇄하지 않았다면 컴퓨터의 기본 이미지 뷰어에서 열리도록 프로젝트 창에서 마커 이미지를 더블 클릭하여 모니터에 띄웁니다.

**4.**  디바이스의 카메라를 마커에 비추면 마커 위에 모델이 표시됩니다.

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

컴퓨터의 모니터를 사용하여 마커를 표시하는 경우 모델이 아래로 회전된 상태로 표시되지만, 이 문제는 다음 단계에서 해결할 테니 괜찮습니다.

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

## 7. 프리팹 조정

Q&A (0)

다음으로는 프리팹의 사본이 앱에 적절한 방향과 스케일로 표시되도록 프리팹을 조정해야 합니다.

종이에 인쇄하지 않고 컴퓨터 모니터에서 마커를 테스트하는 경우 모델의 회전을 수정해야 아래 방향으로 회전하지 않습니다. AR Foundation에서는 마커가 수평면에 나란히 배치된다고 가정하지만 컴퓨터 모니터는 수직입니다.

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

90도 전방으로 회전된 모니터를 보정하려면 모델을 후방으로 90도 회전해야 합니다.

다음 지침을 준수하여 마커에 따라 프리팹을 조정하세요.

**1.**프리팹 모드에서 모델을 엽니다. 프로젝트 창에서 프리팹 에셋을 더블 클릭하거나, 프로젝트 창 또는 계층 구조에서 선택하고 인스펙터 창에서 **Open** 버튼을 선택하여 프리팹 모드를 열 수 있습니다.

[Image: image]

**2.**자식 게임 오브젝트를 확인할 수 있도록 계층 구조에서 게임 오브젝트를 확장합니다. **[your model]Mesh**라는 이름의 자식 게임 오브젝트를 선택합니다.

[Image: image]

**3.**  실제 환경의 마커에 따라 앱에서 원하는 대로 모델이 표시되도록 메시의 **Position**, **Rotation**, **Scale**을 편집합니다. 수평으로 놓인 종이가 아니라 수직인 디바이스 모니터로 앱을 테스트하는 경우 x축을 기준으로 하여 오브젝트를 후방으로 90도 회전합니다.

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

**중요**: 부모 프리팹 게임 오브젝트가 아니라 **[your model]Mesh** 자식 게임 오브젝트를 수정해야 합니다. 부모 프리팹 게임 오브젝트의 위치, 회전, 스케일에 대한 수정 사항은 씬에서 프리팹이 생성되면 초기화됩니다.

**4.**수정이 끝나면 프리팹 모드를 종료합니다. 계층 창의 헤더 바에서 뒤로 가기 화살표를 선택하거나 씬 뷰 상단의 이동 경로 바에서 Scenes를 선택하여 프리팹 모드를 종료할 수 있습니다.

[Image: image]

**5.** 빌드하고 디바이스에서 테스트합니다.

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

## 8. 추가 작업

Q&A (0)

기술을 더 개발하거나, 새로운 개념을 살펴보거나, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요. 각 활동은 쉬움, 보통, 어려움으로 구별되므로 난이도를 예상할 수 있습니다.

이러한 활동은 필수는 아니므로 관심이 없다면 이 단계를 건너뛰어도 무방합니다.

이 학습 경험을 최대한 활용하려면 하나 이상의 활동을 시도해 보세요. 행운을 빕니다!

#### 쉬움: 다른 사람이 만든 그래픽 또는 마커 사용

다양한 마커를 온라인에서 찾을 수 있습니다. 마커 또는 이미지를 검색하여 프로젝트에 임포트하고 무엇이 AR Foundation 추적에 적합한지 테스트해 보세요. 바람직한 마커의 조건에 대한 정보는 2단계를 다시 참조하세요.

#### 보통: 제공된 AR 마커 하나를 수정

제공된 마커 중 하나를 복제하고 수정하여 자신만의 마커를 만들어 보세요. 예를 들어 텍스처의 중간에 있는 아이콘을 제거하고 다른 아이콘 또는 이미지를 추가할 수 있습니다.

[Gimp](https://www.gimp.org/)는 Adobe® [Photoshop](https://www.adobe.com/products/photoshop.html)®을 대체하는 오픈 소스 툴로, 그래픽스를 생성하고, 수정하고, 익스포트하는 데 사용할 수 있습니다. 검색 엔진에서 간단히 찾아 보면 텍스처 편집 소프트웨어를 사용하는 데 도움이 되는 수많은 튜토리얼이 나옵니다.

#### 어려움: 그래픽 편집 프로그램을 사용하여 자신만의 마커 만들기

완전히 새로운 자신만의 마커를 만들어 새로운 경험을 디자인해 보세요. 바람직한 마커의 조건에 대한 정보는 2단계를 다시 참조하세요.

단계를 완료로 표시

## 9. 다음 단계

Q&A (0)

이제 마커를 추적하고 3D 오브젝트를 표시하는 애플리케이션이 생겼습니다. 다음 튜토리얼에서는 사용자가 3D 모델과 상호 작용할 수 있는 버튼을 추가하여 이 기능을 확장합니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
