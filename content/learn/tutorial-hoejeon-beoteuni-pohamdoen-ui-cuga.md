[Image: image]

# 회전 버튼이 포함된 UI 추가

Tutorial

Beginner

+10XP

60 mins

1

(6)

Unity Technologies

[Image: 회전 버튼이 포함된 UI 추가]Summary

사용자의 환경에 나타나는 오브젝트를 만드는 작업 자체도 재미있지만, 사용자가 특정 방식으로 오브젝트와 상호 작용할 수 있다면 그 경험은 훨씬 더 흥미로울 것입니다.

이 튜토리얼에서는 모델 회전 버튼이 포함된 사용자 인터페이스를 씬에 추가합니다. 튜토리얼 후반부에서는 이 사용자 인터페이스에 더 많은 기능을 추가합니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 개요

Q&A (0)

사용자의 환경에 나타나는 오브젝트를 만드는 작업 자체도 재미있지만, 사용자가 특정 방식으로 오브젝트와 상호 작용할 수 있다면 그 경험은 훨씬 더 흥미로울 것입니다. 이를 위해 **스크린 공간 오버레이**라는 사용자 인터페이스를 만들어 보겠습니다. 스크린 공간 오버레이는 항상 카메라 앞에 위치하여 화면에 보이기 때문에 이러한 이름으로 부르며, 사용자가 디바이스에서 무엇을 보고 있든 상관없이 사용자 인터페이스를 표시하려는 경우에 유용합니다.

이 튜토리얼에서는 모델 회전 버튼이 포함된 사용자 인터페이스를 씬에 추가합니다. 튜토리얼 후반부에서는 이 사용자 인터페이스에 더 많은 기능을 추가합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:04Loaded: 2.92%0:00Remaining Time -0:041xPlayback Rate

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

## 2. 버튼 설정

Q&A (0)

Unity에서는 **캔버스**라고 하는 특수한 유형의 게임 오브젝트를 사용하여 사용자 인터페이스용 2D 이미지를 표시합니다. 이 프로젝트의 캔버스에서는 사용자가 누를 수 있는 버튼을 표시합니다.

캔버스를 씬에 추가하는 방법은 다음과 같습니다.

**1.**프로젝트 창에서 **Assets**>**_ARMarker**>**Prefabs**>**UI**로 이동한 후 **Button_Canvas**를 클릭하여 계층 구조로 드래그합니다. 씬 뷰에서는 캔버스가 매우 크지만 걱정하지 마세요. Unity에서 스크린 공간 오버레이를 그렇게 처리할 뿐입니다.

**참고**: TMP Importer 창이 나타나면 **Import TMP Essentials** 버튼을 선택한 후 창을 닫습니다. TMP([TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956393805))를 사용하면 텍스트 형식과 레이아웃을 제어할 수 있습니다. 지금은 Import TMP Examples & Extras를 선택할 필요가 없습니다.

[Image: image]

**2.**게임(Game) 뷰로 이동하여 4개의 기본 버튼이 애플리케이션에 어떻게 표시되는지 미리 봅니다.

[Image: image]

**3.**  계층 구조에서 **ButtonCanvas** 게임 오브젝트를 확장하고 **Button1** 및 **Button2** 자식 게임 오브젝트의 이름을 각각 'ButtonRotateLeft'와 'ButtonRotateRight'로 변경합니다.

**4.**  계층 구조에서 **ButtonRotateLeft**게임 오브젝트의 자식 게임 오브젝트인 **Text (TMP)**를 선택합니다. 인스펙터에서 TextMeshPro **Text Input**을 '<'로 변경합니다. **ButtonRotate Right** 게임 오브젝트에서도 동일하게 **Text Input**을 '>'로 변경합니다.

[Image: image]

**5.**  가장 만족스러운 **Font Asset**, **Font Size**, **Font Style** 프로퍼티를 선택하여 텍스트를 커스터마이즈합니다.

**참고**: 추가 폰트와 스타일을 사용하려면 **Window**> **TextMeshPro** > **Import TMP Examples and Extras**로 이동합니다.

**6.**  버튼 크기를 조정하려면 **사각** 툴을 사용합니다.

[Image: image]단계를 완료로 표시

## 3. 새로운 비주얼 스크립트 생성

Q&A (0)

화면에 버튼이 있으므로 이제 버튼을 작동시킬 차례입니다. 사용자가 버튼을 눌렀을 때 앱의 동작을 제어하는 비주얼 스크립트를 사용할 수 있습니다. 모든 비주얼 스크립트를 쉽게 찾을 수 있도록 게임 오브젝트를 하나 생성해 보겠습니다.

비주얼 스크립트를 생성하는 방법은 다음과 같습니다.

**1.**  계층 구조에서 새로운 빈 게임 오브젝트를 만들고 이름을 'VisualScripts'로 지정합니다.

**2.**  인스펙터에서 Script Machine 컴포넌트를 **VisualScripts**에 추가합니다.

**3.**  **New**를 선택하여 새 그래프를 만듭니다.

**4.**  파일 탐색기가 나타나면 **_ARMarker** 폴더를 열고 거기에 새로운 'VisualScripts' 폴더를 만든 후 'RotateObject'라는 이름으로 그래프를 저장합니다.

[Image: image]

**5.**  인스펙터에서 제목에 'Rotate Object'를 입력하고, 요약에 'Rotates the AR object using rotate UI buttons'를 입력합니다.

**6.**  **Edit Graph**를 선택하여 비주얼 스크립트 그래프를 엽니다.

[Image: image]

**참고**: 처음으로 그래프를 열면 움직일 수 있는 창으로 열립니다. 원하는 경우 창을 Unity 에디터에 배치하세요.

단계를 완료로 표시

## 4. 필요한 변수 생성

Q&A (0)

스크립트에서는 버튼과 이 버튼의 영향을 받는 게임 오브젝트를 참조하는 변수를 사용합니다.

비주얼 스크립트용 변수를 생성하는 방법은 다음과 같습니다.

**1.**  RotateObject 스크립트 그래프에서 **On Start** 및 **On Update** 노드를 삭제합니다.

**2.**  Blackboard에서 **Object** 변수 탭을 선택합니다.

**3.**  'buttonRotateLeft'라는 새 변수를 생성하고 **Type**을 **Button**으로 설정합니다.

**4.**  **Value**의 경우 오브젝트 피커(동그라미 모양)를 사용하여 **ButtonRotateLeft** 게임 오브젝트를 선택합니다.

**5.**  **ButtonRotateRight**게임 오브젝트에는 'buttonRotateRight'라는 변수로 동일한 과정을 반복합니다.

**7.**  'modelObject'라는 새 변수를 생성하고 **Type**을 **GameObject**로 설정합니다.

**8.**  계층 구조에서 에디터 내 모델을 modelObject 변수에 할당합니다.

[Image: image]단계를 완료로 표시

## 5. 좌우 회전

Q&A (0)

사용할 수 있는 변수가 생겼으니 이제 사용자가 버튼을 눌렀을 때 모델의 회전을 제어할 로직을 그래프로 만들 차례입니다.

아래의 영상을 시청하거나 지침을 따라 버튼을 눌렀을 때 모델을 회전시키는 비주얼 스크립트를 만드세요.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:47Loaded: 12.55%0:00Remaining Time -0:471xPlayback Rate

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

**1.**  그래프 에디터에서**On Button Click** 노드를 그래프 에디터에 추가합니다.

**2.**그래프에서 buttonRotateLeft 변수를 **On Button Click** 노드 왼쪽으로 드래그한 후 둘을 연결합니다.

**3.**  그래프 에디터에서 **Transform Rotate** 노드(X Angle, Y Angle, Z Angle)를 추가한 후 값을 **X Angle** = **0**, **Y Angle** = **15**, **Z Angle** = **0**으로 할당합니다.

**중요**: 모니터에서 마커를 테스트하고 회전된 모델을 사용하는 경우 y축이 아닌 z축을 기준으로 회전해야 합니다.

**4.**  **On Button Click** 노드를 **Transform Rotate** 노드의 플로 입력에 연결합니다.

**5.**modelObject 변수를 그래프 에디터로 드래그한 후 **Transform Rotate** 노드의 트랜스폼 입력에 연결합니다.

[Image: image]

**6.**계층 구조에서 에디터 내 모델을 선택합니다. 인스펙터에서 이를 활성화하면 씬 뷰에서 보입니다.

**7.**  에디터에서 **플레이**를 선택하여 스크립트를 테스트합니다. 씬 뷰에서 ButtonRotateLeft 버튼을 선택하면 왼쪽으로 회전하는 모델을 볼 수 있습니다. 그런 다음 플레이 모드를 종료합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:09Loaded: 26.10%0:00Remaining Time -0:091xPlayback Rate

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

**8.**Script Graph 창에서 기존 그래프를 클릭하고 드래그하여 노드를 모두 선택합니다.

**9**. Ctrl+D(macOS: Cmd+D) 키를 눌러 그래프를 복제합니다. 겹치지 않도록 새 그래프를 아래로 드래그하여 기존 그래프 바로 아래에 배치합니다.

**10.**  새 그래프에서 **Get Variable** 노드의 변수를 buttonRotateRight로 변경하고 **Y Angle** 값을 **-15**로 변경합니다(수직 모니터에서 마커를 테스트하는 경우에는 X Angle).

[Image: image]

**11.**  Unity 에디터에서 플레이 모드로 앱을 테스트하여 두 버튼이 작동하는지 확인합니다.

**참고**: 디바이스에서 앱을 테스트하는 경우 버튼이 에디터 내 모델에서는 작동하지만 마커를 통해 생성된 모델에서는 작동하지 않습니다. 걱정하지 마세요. 다음 단계에서 이 문제를 해결하겠습니다.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:17Loaded: 0.00%0:00Remaining Time -0:171xPlayback Rate

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

## 6. 모델을 식별할 태그 추가

Q&A (0)

회전 버튼이 작동하지만 씬에 있는 에디터 내 모델에서만 작동합니다.

앱이 실행될 때까지 존재하지 않는 게임 오브젝트를 회전시키는 스크립트는 어떻게 작성해야 할까요? 프리팹에 태그를 적용하면 생성된 프리팹 인스턴스에도 태그가 생깁니다. 스크립트에서 카메라가 마커를 비추면 프리팹에서 모델이 생성되고 앱에서 해당 태그로 게임 오브젝트를 검색합니다. **태그**는 스크립팅 목적으로 게임 오브젝트를 식별하는 데 유용합니다.

모델이 앱에서 생성되었을 때 모델을 찾을 수 있도록 해 주는 태그를 추가하는 방법은 다음과 같습니다.

**1.**  계층 구조에서 에디터 내 모델을 선택하고 인스펙터에서 비활성화합니다.

**2.**  프로젝트 창에서 모델의 프리팹을 찾아 더블 클릭하여 프리팹 모드로 엽니다.

**3.**인스펙터에서 **Tag** 드롭다운을 열고 **Add Tag**를 선택합니다.

[Image: image]

**4.**  **추가**(**+**) 버튼을 선택하고 'modelObject'를 입력한 후 **Save**를 선택합니다.

[Image: image]

**5.**계층 구조에서 원하는 프리팹의 **Mesh** 자식 게임 오브젝트를 선택하고 **Tags** 드롭다운을 사용하여 **modelObject** 태그를 할당합니다.

[Image: image]

**중요**: 프리팹의 최상위 부모 게임 오브젝트는 회전할 수 없으므로 **Mesh** 자식 게임 오브젝트에 태그를 적용해야 합니다. 부모 게임 오브젝트의 태그는 제거해야 합니다. 자체 3D 모델을 사용하는 경우 해당 게임 오브젝트의 메시가 포함된 자식 게임 오브젝트에 태그를 지정하세요.

**6.**  프리팹 모드를 종료합니다.

**7.**변경 사항이 프리팹에 올바르게 적용되었는지 살펴봅니다. 프로젝트 창에서 modelObject 태그가 에디터 내 모델과 프리팹에 나타나는지 확인하세요.

프리팹을 수정했으므로 이제 해당 프리팹을 기반으로 하는 에디터 내 모델에도 **Mesh** 자식 게임 오브젝트에 이 태그가 적용되어 있습니다. 따라서 에디터 내 모델을 사용하여 다음 단계에서 작성할 스크립트를 테스트할 수 있습니다.

단계를 완료로 표시

## 7. 새로운 설정 스크립트 그래프 생성

Q&A (0)

다음으로, modelObject 태그가 있는 모든 게임 오브젝트를 지속적으로 검색하는 새로운 스크립트를 생성해 보겠습니다. 태그가 지정된 게임 오브젝트를 찾으면 RotateObject 스크립트에 사용할 수 있도록 이를 변수로 할당합니다. 새 변수가 올바르게 할당되면 씬에서 생성되는 모델을 제어할 수 있습니다.

새로운 설정 스크립트를 설정하는 방법은 다음과 같습니다.

**1.**계층 구조에서 **VisualScripts**게임 오브젝트를 선택합니다.

**2.**인스펙터에서 **Add Component**를 선택하고 'Setup'이라는 새 Script Machine을 생성합니다. 이때 제목은 'Setup', 설명은 'Initializes variables'입니다.  그런 다음 **Edit Graph**를 선택합니다.

[Image: image]

**3.**  그래프 에디터의 Blackboard 영역에서 **Object**탭을 선택합니다. 그런 다음 modelObject 변수의 **Value**를 찾고 피커(동그라미 모양)를 사용하여 **None**을 선택합니다. 스크립트에서는 이 변수의 값을 할당합니다.

[Image: image]단계를 완료로 표시

## 8. 마커를 통해 생성한 모델 회전

Q&A (0)

설정 스크립트와 변수가 준비되면 이제 그래프를 생성할 수 있습니다. 아래 동영상을 시청하거나 지침에 따라 태그가 지정된 게임 오브젝트를 검색하고, 오브젝트를 찾으면 modelObject 변수에 할당하세요.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:37Loaded: 12.79%0:00Remaining Time -0:371xPlayback Rate

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

**1.**  **On Start**이벤트 노드를 삭제합니다.

**2.**  그래프 에디터에서 퍼지 파인더를 사용하여**Find Game Object With Tag** 노드를 추가합니다.

**참고**: 복수인 **Find Game Objects**노드가 아니라 단수인 **Find Game Object**노드를 선택해야 합니다**.**

**3**.  **Tag**필드에 'modelObject'를 입력합니다.

**4.  On Update** 출력을 **Find Object with Tag** 노드의 입력에 연결합니다.

**5.**  그래프 에디터에서 퍼지 파인더를 사용하여 **Set Object Variable**노드를 그래프에 추가합니다.

**6.  Find Game Object With Tag**의 플로 출력을 **Set Variable**노드의 플로 입력에 연결합니다. 그런 다음 오브젝트 출력을 레이블이 없는 **Set Variable** 오브젝트의 하단 입력에 연결합니다.

[Image: image]

이 **New Value**필드는 변수의 새 값을 설정하며, 이 변수는 어떤 데이터 유형이든 될 수 있습니다.

스크립트가 실행되면 modelObject 변수가 모델의 특정 태그가 있는 자식 게임 오브젝트로 설정됩니다. 이 스크립트를 에디터에서 테스트하면 에디터 내 모델을 찾고, 앱에서 실행하면 마커에서 생성된 모델을 찾습니다.

**7.**계층 구조에서 에디터 내 모델을 선택한 후 테스트를 위해 인스펙터에서 활성화합니다.

**8.**  **플레이**를 선택하고 비주얼 스크립트를 확인합니다. **Find Game Object With Tag** 노드가 게임 오브젝트를 찾아 modelObject 변수 값을 할당한 것을 알 수 있습니다.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:18Loaded: 21.88%0:00Remaining Time -0:181xPlayback Rate

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

**9.**계층 구조에서 에디터 내 모델을 선택하고 인스펙터에서 비활성화합니다.

**10.**디바이스에 빌드하고 앱에서 버튼을 테스트합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:04Loaded: 3.01%0:00Remaining Time -0:041xPlayback Rate

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

## 9. null 검사를 통한 최적화

Q&A (0)

앱 개발에서는 최적화가 매우 중요한 부분을 차지합니다. 최적화는 모바일 디바이스용 콘텐츠 제작에서 특히 중요하며, 일반적으로 설계를 시작하는 시점부터 최적화하면 작업이 더 수월해집니다.

이전 단계의 동영상에서 볼 수 있듯이 현재 스크립트에서는 **Find Game Object With Tag**노드가 항상 모델을 찾습니다. 이 스크립트는 씬에 있는 모든 게임 오브젝트를 지속적으로 검색하며, 해당 태그가 있는 게임 오브젝트를 찾아도 검색을 멈추지 않습니다. 적은 수의 게임 오브젝트만 있는 경우에는 괜찮지만, 씬에 있는 게임 오브젝트 수가 늘어나면 검색으로 인해 성능이 저하될 수 있습니다. 이 스크립트를 최적화하기 위해 태그를 찾으면 검색을 중단하는 **null 검사**를 추가해 보겠습니다.

**Null Check** 노드를 통해 null 검사를 구현할 수 있습니다. 이 노드는 씬에서 게임 오브젝트가 생성되고 태그가 발견되었음을 나타내는 값이 modelObject 변수에 있는지 테스트합니다. 게임 오브젝트가 아직 생성되지 않은 경우(Null Check가 참) 스크립트가 계속되다가 게임 오브젝트가 생성되면(Null Check가 거짓) 다시 실행되지 않습니다.

아래의 영상을 시청하거나 지침을 따라 비주얼 스크립트에 null 검사를 추가하세요.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:26Loaded: 0%0:00Remaining Time -0:261xPlayback Rate

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

**1.**아직 열지 않았다면 **Setup** 스크립트 머신을 엽니다.

**2.**그래프 에디터에서 그래프의 시작 부분에**Null Check**노드를 추가합니다.

**3.**  그래프의 플로에서 **On Update**노드와**Find Game Object With Tag**노드 사이에 **Null Check**노드를 넣습니다. Null 출력을 **Find Game Object With Tag** 노드에 연결합니다.

**4.**  Blackboard에서 modelObject 변수를 그래프 에디터로 드래그하면 **Get Variable** 노드가 생성됩니다.

**5.**  **Get Variable** 노드의 출력을 **Null Check** 노드의 입력에 연결합니다.

[Image: image]

**6.**  에디터 내 모델을 활성화하고 에디터에서 스크립트를 테스트하여 null 검사가 올바르게 이루어지는지 확인합니다.

육안으로 확인하기에는 너무 빠를 수 있지만, 첫 번째 프레임에서 **Null Check** 노드가 해당 modelObject가 null인 것을 발견하여 스크립트의 나머지 부분이 실행되도록 합니다. 그런 다음에는 modelObject의 값이 **Mesh** 게임 오브젝트이며, **Null Check** 노드가 스크립트의 나머지 부분이 실행되지 못하도록 한다는 것을 알 수 있습니다.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

**7.**에디터 내 모델을 비활성화한 후 디바이스에서 빌드하고 테스트합니다. 큰 성능 변화를 체감하지 못할 수도 있지만 항상 스크립트를 최적화하는 것이 좋습니다.

단계를 완료로 표시

## 10. 추가 작업

Q&A (0)

기술을 더 개발하거나, 새로운 개념을 살펴보거나, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요. 각 활동은 쉬움, 보통, 어려움으로 구별되므로 난이도를 예상할 수 있습니다.

이러한 활동은 필수는 아니므로 관심이 없다면 이 단계를 건너뛰어도 무방합니다.

이 학습 경험을 최대한 활용하려면 활동 중 하나 이상을 시도해 보세요. 행운을 빕니다!

#### 쉬움: 버튼 스타일 커스터마이즈

[Image: image]

버튼에 스타일을 적용하고 싶다면 제공되는 버튼 스프라이트로 스프라이트를 변경하거나 직접 만들어 보세요. 커스터마이즈된 UI는 앱을 깔끔하고 전문적으로 보이게 하는 효과를 줍니다. 아래에 예시가 제공되지만 자신만의 창의력을 활용해서 UI를 만들어 보세요. 버튼 스프라이트를 편집하려면 버튼의 Image 컴포넌트를 찾은 후 **Source Image** 프로퍼티의 오브젝트 피커(동그라미 모양)를 선택합니다.

#### 보통: 버튼 입력으로 모델 위치 조정

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

modelObject를 회전하는 것은 모델과 상호 작용할 수 있는 여러 방식 중 하나일 뿐입니다. 버튼을 누르면 모델을 위아래로 움직이게 하는 버튼을 만드는 방법으로도 모델과 상호 작용할 수 있습니다.

오브젝트를 위아래 또는 좌우로 살짝씩 움직일 수 있는 새로운 UI 버튼과 비주얼 스크립트를 만들어 보세요.

#### 어려움: 턴테이블 위에 있는 경우 모델 회전

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

현재는 모델을 회전하려면 버튼을 반복적으로 눌러야 합니다. 하지만 더 효율적인 사용자 인터페이스에서는 버튼을 한 번 누르면 모델이 회전하기 시작하고 다시 한 번 누르면 멈춥니다. 버튼을 누르면 모델이 알아서 회전하도록 Rotate Object 비주얼 스크립트를 편집해 보세요.

이 과제를 완료하는 데 도움이 필요한 경우에는 다음 가이드를 확인해 보세요.

- 동작을 설정하고 해제하는 데 부울 값이 유용할 수 있습니다.
- **Negate**라는 특수 노드가 있습니다.
- 변환과 부울 검사는 계속해서 이루어져야 합니다.

**팁**: 이 과제에 대한 접근 방법 중 하나는 사용자가 버튼을 눌렀을 때 변경되는 부울 변수를 생성하는 것입니다. 사용자가 모델을 한 방향으로 회전시키다가 반대 방향으로 회전시키는 경우 스크립트는 어떻게 작동할까요?

단계를 완료로 표시

## 11. 다음 단계

Q&A (0)

이제 사용자는 UI 캔버스에 있는 버튼을 사용하여 모델을 좌우로 회전시킬 수 있습니다. 다음 튜토리얼에서는 버튼을 누르면 모델에 대한 추가 정보가 표시되거나 사라지도록 설정해 보겠습니다. 앱에서 마커를 감지했을 때 표시할 정보, 모델, 시각 효과 또는 다른 콘텐츠를 사용자가 제어할 수 있도록 해 AR 경험의 기능을 확장할 수 있습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
