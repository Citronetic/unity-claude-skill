[Image: image]

# 음향 효과 구현

Tutorial

Beginner

+0XP

30 mins

0

Unity Technologies

[Image: 음향 효과 구현]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 정적 음향 효과를 구현합니다.
- 컨택트 음향 효과를 구현합니다.
- 음향 효과에 대한 폐쇄 캡션을 추가합니다.

Languages available:

한국어English日本語한국어简体中文한국어

## 1. 개요

Q&A (0)

이제 기본적인 인터랙티브 VR 경험을 만들었으므로 오디오를 사용하여 몰입감을 높일 수 있습니다. 이 튜토리얼에서는 프로토타입 룸의 오브젝트에 정적 및 컨택트 음향 효과를 추가합니다. 또한 VR 경험을 더욱 많은 사람들이 즐길 수 있도록 폐쇄 캡션을 추가할 수 있습니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼에서는 VR 기초 학습 Unity 프로젝트와 VR 하드웨어를 사용합니다. 시작하기 전에 다음 단계를 따르세요.

**1.**  VR Beginner Unity 프로젝트를 엽니다.

**2.** 하드웨어가 준비되었는지 확인합니다. Oculus Link를 Oculus Quest와 함께 사용하는 경우 Oculus 앱을 통해 활성화하고 연결합니다.

단계를 완료로 표시

## 3. VR에서 기본적인 오디오 음향 효과 구현

Q&A (0)

VR 외의 경험과 마찬가지로, Unity에서 VR 경험에도 음향을 추가할 수 있습니다. 또한 Unity에서는 오디오에 입체감을 더하여 3D 환경에서 소리가 들려오는 것처럼 연출할 수 있습니다. Unity의 오디오 공간화 기능을 사용하려면 다음 사항을 확인해야 합니다.

- 씬의 카메라 게임 오브젝트에는 [Audio Listener 컴포넌트](https://docs.unity3d.com/Manual/class-AudioListener.html&sa=D&ust=1582204767622000&usg=AFQjCNHvNaDANVldGMwG10Tf9tQYGNWsrw?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954915664)가 있어, Unity가 VR 헤드셋의 위치에 따라 헤드폰을 통해 소리를 공간화할 수 있습니다.
- VR 경험에 포함된 음향에서는 보다 높은 몰입감을 위해 오디오 소스 공간 블렌드가 3D로 설정되어 있습니다.

이러한 사항은 Unity 프로젝트의 커스텀 메뉴를 사용하여 제작한 프로토타입 씬에서 이미 기본적으로 설정되어 있습니다.

단계를 완료로 표시

## 4. 오브젝트에 정적 음향 효과 추가

Q&A (0)

먼저 프로토타입 룸에 공간화된 루프 음향을 추가하겠습니다. 퓨즈박스가 낮게 웅웅거리는 소리입니다.

Fusebox 게임 오브젝트에 음향을 추가하려면 다음 단계를 따르세요.

**1.**계층 구조에서 **Fusebox** 게임 오브젝트를 선택합니다.

**2.**인스펙터에서 **Add Component**를 선택합니다. 'Audio Source'를 검색하고 이 컴포넌트를 게임 오브젝트에 추가합니다.

[Image: image]

**3.**프로젝트 창에서 **Assets** > **VR Beginner** > **Audio**로 이동합니다. **SFXDoorHumLoop** 오디오 파일을 찾습니다.

**4.**  프로젝트 창에서 **SFXDoorHumLoop**를 Audio Source 컴포넌트 위쪽의 Audio Clip 프로퍼티로 드래그합니다.

**5.**  Audio Source 컴포넌트에서 **Play On Awake**와 **Loop**를 활성화합니다.

[Image: image]

**6.**  **Spatial Blend** 슬라이더를 3D로 설정합니다(숫자 필드에 1이 표시되어야 함).

[Image: image]

**7.**3D Sound Settings가 아직 열려 있지 않은 경우 회색 화살표를 선택하여 확장합니다.

[Image: image]

**8.**프로퍼티 값을 다음과 같이 설정합니다.

- **Volume Rolloff**를 **Linear Rolloff**로 설정합니다. 이렇게 설정하면 오디오 소스에서 멀어질수록 볼륨이 작아집니다.
- **Min Distance**를 **0.2**로 설정합니다. 이는 최대 볼륨이 도달하는 거리를 정의합니다.
- **Max Distance**를 **4**로 설정합니다. 이는 음향이 재생되기 시작하는 거리를 정의합니다.

[Image: image]

**9. Ctrl**+**S**를 눌러 변경 내용을 저장합니다.

**10.**이제 음향 효과를 테스트할 수 있습니다. 퓨즈박스 옆에 있는 텔레포터를 사용하면 음향이 크게 들립니다. 텔레포터를 더 먼 곳에 생성하면 음향이 훨씬 희미해집니다. 머리를 움직여 보면 오디오도 실제 공간에 있는 것처럼 변화합니다.

단계를 완료로 표시

## 5. VR에서 폐쇄 캡션 사용

Q&A (0)

폐쇄 캡션은 더욱 많은 사람들이 VR 경험을 즐길 수 있도록 해 주는 기능입니다. 이 학습 프로젝트에는 폐쇄 캡션 시스템의 예시 프로토타입이 포함되어 있어, VR 경험에서 폐쇄 캡션을 구현하는 방법을 익히는 데 도움이 됩니다.

폐쇄 캡션 시스템 프로토타입은 다음과 같은 세 가지 스크립트로 구성됩니다.

- **CCDatabase**: 특정 오디오 클립을 하나 이상의 텍스트 라인과 연결하고 각 라인의 시간을 표시합니다.
- **CCSource**: 오디오 소스 컴포넌트(예: 퓨즈박스)가 있는 오브젝트에 추가할 수 있으며, 오브젝트에 대한 폐쇄 캡션을 활성화합니다.
- **CCManager**: 씬에서 폐쇄 캡션이 활성화된 오디오 소스를 확인하고 사용자가 오브젝트 앞에 있을 때 텍스트를 표시합니다.

이러한 스크립트는 모두 **Assets** > **VR Beginner** > **Scripts** > **System**에서 찾을 수 있습니다.

단계를 완료로 표시

## 6. 음향 효과에 대한 폐쇄 캡션 추가

Q&A (0)

퓨즈박스 음향 효과에 대한 폐쇄 캡션을 추가해 보겠습니다.

**1.**프로젝트 창에서 Assets 폴더로 이동합니다. 폴더에서 오른쪽 클릭한 다음 **Create** > **ClosedCaption**> **CCDatabase**를 선택하여 새로운 데이터베이스 에셋을 생성합니다.

[Image: image]

**2. F2**를 누르고 에셋 이름을 *TutorialCCDatabase*로 변경합니다.

**3.**에셋 아이콘을 더블 클릭하여 데이터베이스 에디터를 엽니다.

[Image: image]

**4.**프로젝트 창에서 **Assets** >**VR Beginner** > **Audio**로 이동합니다. 프로젝트 창에서 TutorialCCDatabase 창으로 **SFXDoorLoopHum**을 드래그합니다. 이것이 퓨즈박스에 추가한 음향 효과입니다.

**5.**음향 효과 이름이 표시된 새 버튼을 선택합니다.

[Image: image]

**6. New Line**을 선택하여 데이터베이스에 새 텍스트 라인을 생성합니다. 새 **Line** 필드에 '[ Humming ]'을 추가합니다.

[Image: image]

**7.**음향 효과가 3초 넘게 지속되므로, 폐쇄 캡션에 대한 텍스트 라인을 하나 더 만들어 Unity 프로젝트에서 어떻게 보이는지 확인해 보겠습니다. 다시 **New Line**을 선택하고 다음과 같이 설정합니다.

- **Time**을 **1.5**로 설정합니다.
- **Line** 필드에 '[ More humming ]'을 입력합니다.

[Image: image]

이렇게 하면 음향이 1.5초간 재생되는 동안 텍스트의 두 번째 라인이 표시됩니다. 이제 데이터베이스 에디터 창을 닫아도 좋습니다.

**8.**  계층 구조에서 **CCSystem** 게임 오브젝트를 선택합니다.

**9.** 인스펙터에서 **Database** 필드 오른쪽에 있는 선택자 버튼을 사용하여 Closed Captions System이 데이터를 읽어 오는 데이터베이스로 새 TutorialCCDatabase를 선택합니다.

[Image: image]

**10. Ctrl**+**S**를 눌러 변경 내용을 저장합니다.

단계를 완료로 표시

## 7. 퓨즈박스를 폐쇄 캡션 소스로 설정

Q&A (0)

음향 효과에 폐쇄 캡션을 추가했으므로 Fusebox 게임 오브젝트를 씬에서 폐쇄 캡션의 소스로 설정해야 합니다.

**1.**  계층 구조에서 Fusebox 게임 오브젝트를 선택합니다.

[Image: image]

**2.**  인스펙터에서 **Add Component**를 선택합니다. **CC Source** 컴포넌트를 검색하고 추가합니다.

[Image: image]

**3.**  프로젝트 창에서 **Assets** > **VR Beginner** > **Prefabs** >**System**으로 이동합니다.

[Image: image]

**4.**  **CCCanvas** 프리팹을 프로젝트 창에서 인스펙터의 CC Source 컴포넌트인 **Canvas Prefab** 필드로 드래그합니다.

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

이 캔버스는 폐쇄 캡션이 표시되는 방식을 정의합니다. Unity로 UI를 개발한 경험이 있는 경우 VR 경험에 맞게 UI를 커스터마이즈할 수 있습니다.

**5.**  CC Source 컴포넌트에서 다음 필드를 사용하여 캡션 디스플레이에 대한 기본적인 조정을 할 수 있습니다.

- **Always Tracked**를 활성화합니다. 그러면 재생 중인 폐쇄 캡션이 있는 오브젝트를 가리키는 화살표가 사용자의 뷰 중앙에 표시됩니다. 이렇게 하면 게임플레이 정보를 제공하는 오디오 소스와 같이 사용자에게 중요한 오디오 소스를 표시할 수 있습니다.
- **Max Distance**를 **2**로 설정합니다. 이는 캡션이 표시되는 최대 거리입니다. 퓨즈박스 옆에 서 있을 때는 퓨즈박스 캡션이 표시되지만 테이블 옆에 있을 때는 표시되지 않습니다.
- 기본 캡션 크기를 늘리려면 **Scale**을 1보다 크게, 줄이려면 **1**보다 작게 설정합니다.

**6. Ctrl**+**S**를 눌러 변경 내용을 저장합니다.

**7.**이제 음향 효과 폐쇄 캡션을 테스트할 수 있습니다. 퓨즈박스 옆에 서면 음향 효과가 루프됨에 따라 캡션 텍스트가 순환하면서 표시되어야 합니다. 박스 테이블로 다시 이동하면 폐쇄 캡션 텍스트가 표시되지 않습니다. **Always Tracked**를 활성화한 경우 음향 효과의 방향을 나타내는 화살표가 표시됩니다.

단계를 완료로 표시

## 8. 오브젝트에 컨택트 음향 효과 추가

Q&A (0)

VR 기초 학습에는 스크립트를 통해 SFX(특수 효과) 음향을 재생하도록 하는 **SFXPlayer**라는 커스텀 시스템이 포함되어 있습니다. 커스텀 메뉴를 사용하여 제작한 프로토타입 씬에는 기본적으로 이 시스템이 포함됩니다. 이 Unity 프로젝트의 특징 중 하나는 인터랙터블 오브젝트가 다른 오브젝트와 접촉할 때 발생하는 소리를 설정하는 커스텀 스크립트입니다. 예를 들어, 이 스크립트는 그랩 가능한 손전등을 테이블 위에 놓으면 음향을 재생합니다.

씬의 그랩 가능한 오브젝트에 컨택트 음향 효과를 추가하려면 다음 단계를 따르세요.

**1.**  계층 구조에서 인터랙터블 항목 게임 오브젝트를 선택합니다.

[Image: image]

**2.**  인스펙터에서 **Add Component** 버튼을 선택합니다.

**3.**  **Contact Sound Player** 컴포넌트를 검색하여 선택합니다. 이 컴포넌트는 이 Unity 프로젝트에 대해 생성된 커스텀 컴포넌트입니다.

[Image: image]

**4.**프로젝트 창에서 **Assets** > **VR Beginner** > **Audio**로 이동하여 음향 효과 파일을 선택합니다.  폴더에 있는 4개의 **SFXImpactHeavy** 오디오 클립 중 하나를 사용해 보세요.

**5.**  프로젝트 창에서 Contact Sound Player 컴포넌트의 **Clips** 프로퍼티로 파일을 드래그합니다.

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

여러 음향 효과를 사용하는 경우, 스크립트는 오브젝트가 다른 오브젝트와 접촉할 때 사용할 효과 하나를 임의로 선택합니다. 4가지 배리언트 **SFXImpactHeavy** 오디오 클립을 모두 추가해 보세요.

**6. Ctrl**+**S**를 선택하여 변경 내용을 저장합니다.

**7.**  이제 VR에서 음향 효과를 테스트할 수 있습니다. 선택한 인터랙터블 오브젝트를 들어올려 블록 테이블에 내려놓습니다. Contact Sound Player 컴포넌트에 추가한 음향 효과 중 한 가지가 재생됩니다.

단계를 완료로 표시

## 9. 과제: 컨택트 음향 효과에 대한 폐쇄 캡션 추가

Q&A (0)

이제 오브젝트에 대한 컨택트 음향 효과를 추가했으므로 해당 효과에 대한 폐쇄 캡션을 추가해 보겠습니다.

해야 할 일은 다음과 같습니다.

- 데이터베이스에 음향 효과를 추가하고 캡션 텍스트 및 시간을 설정합니다.
- Contact Sound Player 컴포넌트에서 **Closed Captioned** 체크박스를 활성화합니다.
- 폐쇄 캡션을 성공적으로 구현했는지 테스트합니다.

이 과제를 완료하기 위해 더 자세한 가이드가 필요한 경우, 본 튜토리얼의 6단계와 7단계를 확인해 보세요.

단계를 완료로 표시

## 10. 요약

Q&A (0)

이 튜토리얼에서는 오디오 및 폐쇄 캡션을 구현하여 VR 경험을 향상했습니다. 다음으로는 UI 개발을 위해 Unity 프로젝트를 설정하는 방법을 알아보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
