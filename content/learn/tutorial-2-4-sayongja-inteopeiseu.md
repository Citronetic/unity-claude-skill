[Image: image]

# 2.4 - 사용자 인터페이스

Tutorial

Beginner

+10XP

90 mins

0

(6)

Unity Technologies

[Image: 2.4 - 사용자 인터페이스]SummarySkills

이 수업에서는 VR에서 월드 공간 사용자 인터페이스를 구현하는 방법을 알아보겠습니다. 이 수업을 마치면 기본 지침을 확인할 수 있는 시작 화면이 표시됩니다. 또한 사용자는 간단한 재설정 메뉴를 사용하여 씬을 다시 로드할 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 방에 월드 공간 UI 추가

Q&A (0)

시작 화면 텍스트를 만들려면 가장 먼저 방에 텍스트와 위치가 있는 캔버스를 추가해야 합니다.

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

**1.  씬에 새 캔버스를 추가합니다.**

- 계층 구조에서 빈 오브젝트를 새로 추가한 다음 위치를 재설정하고 이름을 INTERFACE로 변경합니다.
- 이 정리용 오브젝트 내에 **XR** > **UI Canvas**오브젝트를 생성합니다.

**2.  방 안의 적절한 곳에 캔버스의 위치를 지정합니다.**

- 캔버스의 Rect Transform 컴포넌트에서 XYZ **Scale**을 0.01로 설정합니다.
- **Pos Y**와 **Pos Z** 프로퍼티를 설정하여 캔버스를 방의 뒤쪽에 배치합니다.

**3.  UI에 활용할 반투명 검정색 배경을 추가합니다.**

- 계층 구조에서 **UI** > **Image**를 생성하고 이름을 Welcome Background로 변경합니다.
- Image 컴포넌트에서 **Color** 상자를 클릭합니다.
- 색상을 검정색으로 변경합니다.
- Alpha (A) 슬라이더를 사용하여 색상의 투명도를 줄입니다.

**4.  텍스트 위에 창이 렌더링되는 경우 다음과 같이 설정합니다.**

- Canvas 컴포넌트에서 **Order in Layer** 프로퍼티를 1로 설정합니다.

**5.  패널에 텍스트를 자식 오브젝트로 추가합니다.**

- 계층 구조에서 **Welcome Background**를 오른쪽 클릭하고 **UI** > **Text - TextMeshPro**를 자식 오브젝트로 생성합니다.
- **참고:** 메시지가 나타나고 **Import** **TMP Essentials**를 클릭해야 할 수 있습니다.

[Image: image]

이제 방에 반투명 상자가 있고, 상자 위에는 중심에서 벗어난 위치에 New Text라는 커다란 텍스트가 쓰여 있습니다.

**관련 리소스**

- [캔버스 렌더 모드](https://docs.unity3d.com/kr/current/Manual/UICanvas.html)

단계를 완료로 표시

## 2. 시작 텍스트 편집

Q&A (0)

이제 캔버스를 배치했으므로 보다 유용한 시작 메시지를 작성해야 합니다.

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

**1.  배경 이미지의 형태와 배치를 편집합니다.**

- 이미지 오브젝트의 Rect Transform 컴포넌트에서 **Width, Height, Pos X**, **Pos Y** 프로퍼티를 편집합니다.

**2.  텍스트의 형상을 편집합니다.**

- 텍스트 오브젝트의 TextMeshPro - Text (UI) 컴포넌트에서 **Font Asset,** **Font Size**, **Vertex Color**, **Alignment**프로퍼티를 변경합니다**.**

**3.  텍스트 내용을 변경합니다.**

- TextMeshPro - Text (UI) 컴포넌트에서 New Text를 짧지만 씬에 대한 정보가 담긴 시작 메시지로 변경합니다.

**4.  텍스트 상자의 크기와 간격을 편집합니다.**

- Rect Transform 컴포넌트에서 **Width**, **Height**, **Pos X, Pos Y**를 설정하여 텍스트의 위치를 조정합니다.
- **참고**: OK 버튼이 들어갈 여백과 공간을 어느 정도 남겨 두어야 합니다.

[Image: image]

씬에는 이제 의도한 시작 텍스트가 나타납니다.

단계를 완료로 표시

## 3. 패널에 OK 버튼 추가

Q&A (0)

시작 텍스트가 계속 표시되기를 원하지 않는 경우 OK 버튼을 추가하여 숨길 수 있습니다.

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

**1.  패널에 버튼을 자식 오브젝트로 추가합니다.**

- 계층 구조에서 **Welcome Background**를 오른쪽 클릭하고 **UI** > **Button - TextMeshPro**를 클릭합니다.

**2.  버튼 텍스트를 편집합니다.**

- 버튼의 자식 Text 오브젝트를 선택합니다.
- 텍스트를 'OK' 또는 'Got it!' 등으로 변경합니다.
- 다른 텍스트와 일치하도록 Text 설정을 편집합니다.

**3.  버튼의 위치를 적절하게 지정합니다.**

- Rect Transform 컴포넌트에서 버튼의 위치, 너비 및 높이를 편집합니다.

**4.  다음 작업을 수행하여 버튼과 상호 작용할 때 버튼의 색상이 변경되도록 설정합니다.**

- Button 컴포넌트에서 Normal, Highlighted, Pressed Color 프로퍼티를 편집합니다.

**5.  레이가 배경 패널 위에 있을 때 활성화된 상태로 표시되지 않도록 설정합니다.**

- Background Image 컴포넌트에서 **Raycast Target** 설정을 비활성화합니다.
- **Text**오브젝트의 TextMeshPro 컴포넌트에서 Extra Settings 섹션으로 내려가 **Raycast Target** 설정을 비활성화합니다.

[Image: image]

이제 트리거를 사용하여 강조 표시하고 클릭할 때 색상이 바뀌는 OK 버튼이 완성되었습니다.

단계를 완료로 표시

## 4. OK 버튼을 클릭할 때 시작 패널이 사라지도록 설정

Q&A (0)

이제 원하는 모양의 버튼을 갖추었으므로 버튼을 클릭했을 때 시작 패널이 사라지도록 설정해 보겠습니다.

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

**1.  버튼의 On Click 이벤트를 찾습니다.**

- **Button**오브젝트를 클릭한 다음 Button 컴포넌트의 하단에서 **On Click** 이벤트를 찾습니다.

**2.  시작 패널을 비활성화합니다.**

- **On Click**이벤트에서 **+** 버튼을 클릭하여 새 동작을 추가합니다.
- Object 슬롯에 Welcome Background를 할당합니다.
- No Function 드롭다운에서 **GameObject** > **Set Active (bool)** 함수를 선택하고 체크박스를 선택 해제하여 함수를 비활성화합니다.

[Image: image]

이제 트리거로 OK 버튼을 선택하면  시작 패널이 사라집니다.

단계를 완료로 표시

## 5. 재설정 UI 캔버스 만들기

Q&A (0)

이제 시작 UI가 완벽하게 작동하므로, UI 요소를 복제하고 용도를 변경하면 씬을 다시 로드하는 재설정 UI를 간편하게 만들 수 있습니다.

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

**1.  재설정 화면에 들어갈 새로운 텍스트를 만듭니다.**

- 계층 구조에서 **Welcome_Background** 오브젝트를 복제하고 새 오브젝트의 이름을 Reset_Background로 변경합니다.
- 보다 손쉽게 편집할 수 있도록 **Welcome Background**를 임시로 비활성화합니다.
- 씬을 원래 상태로 재설정할지 묻는 내용으로 텍스트를 편집합니다.

**2.  재설정 화면에 사용할 두 번째 버튼을 추가합니다.**

- 버튼을 복제한 다음 원래 버튼 옆에 오도록 위치를 조정합니다.
- 버튼 이름을 변경하고 텍스트를 편집하여 하나는 Cancel 버튼으로, 다른 하나는 재확인을 위한 Yes 버튼으로 만듭니다.

**3.  Yes 버튼을 누르면 씬이 실제로 재설정되도록 설정합니다.**

- Yes 버튼 오브젝트에 Load Scene 컴포넌트를 추가합니다.
- **On Click** 이벤트에 Load Scene 컴포넌트를 할당하고 **Load Scene**>**ReloadCurrentScene ()**함수를 선택합니다.

[Image: image]

이제 재설정 캔버스에서 Cancel을 클릭하면 패널이 사라지고 Yes를 클릭하면 현재 씬이 다시 로드됩니다.

단계를 완료로 표시

## 6. 보조 버튼을 누를 때 재설정 패널 표시

Q&A (0)

아직까지는 재설정 화면 UI를 다시 열 방법이 없습니다. 보조 버튼을 누르면 플레이어를 시작점으로 텔레포트하여 재설정을 실행하도록 설정할 수 있습니다.

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

**1.  시작 시에 시작 패널만 표시합니다.**

- **Welcome Background**오브젝트를 다시 활성화하고 **Reset_Background**오브젝트를 비활성화합니다.

**2.  보조 버튼 입력을 테스트합니다.**

- **XR Rig**오브젝트에서 On Button Press 컴포넌트를 추가합니다.
- **+** 버튼을 클릭하여 새 **Action Binding**을 추가합니다.
- 바인딩 경로를 **XR Controller**>**Optional Controls**>**secondaryButton**에 할당합니다.

**참고**: 컨트롤러에 따라 사용되는 버튼과 트리거, 패드가 다릅니다. 사용 중인 디바이스가 Oculus Quest가 아닌 경우, 올바른 작동을 위해 바인딩 경로를 다르게 설정해야 할 수 있습니다. 예를 들어, [HTC Vive](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/htcvivecontrollerprofile.html) 또는 [Valve Index](https://docs.unity3d.com/Packages/com.unity.xr.openxr@0.1/manual/features/valveindexcontrollerprofile.html)를 사용 중인 경우 OpenXR 컨트롤러 프로필을 확인하세요.

**3.  보조 버튼을 누를 때 재설정 패널을 표시합니다.**

- **On Press** 이벤트에서 **+** 버튼을 클릭하여 새 동작을 추가합니다.
- **Reset_Background** 오브젝트를 할당합니다.
- **GameObject** > **Set Active (bool)** 함수를 선택하고 체크박스를 **활성화**합니다.

**4.  보조 버튼을 눌렀을 때 시작 패널을 숨깁니다.**

- **+** 버튼을 클릭하여 새 동작을 추가합니다.
- **Welcome Background** 오브젝트를 할당합니다.
- **GameObject** > **Set Active (bool)**함수를 선택하고 체크박스를 **비활성화**합니다.

[Image: image]

이제 보조 버튼을 누르면 시작 패널이 사라지고 재설정 패널이 나타납니다.

단계를 완료로 표시

## 7. 버튼을 누를 때 시작점으로 텔레포트

Q&A (0)

보조 버튼을 누를 때 플레이어가 시작 지점에 있지 않은 경우, 재설정 패널이 보이도록 하려면 플레이어를 시작 지점으로 텔레포트해야 합니다.

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

**1.  씬의 시작 위치에 텔레포트 앵커를 배치합니다.**

- 시작 지점에 텔레포트 앵커가 없는 경우 텔레포트 앵커를 복제하여 플레이어가 방에서 플레이를 시작할 위치에 배치합니다.

**2.  플레이어가 올바른 위치에서 시작하도록 설정합니다.**

- **XR Rig** 오브젝트의 **Position**과 **Rotation**을 시작 앵커의 값과 일치시킵니다.

**3.  XR Rig에 새 텔레포트 동작을 추가합니다.**

- **XR Rig** 오브젝트에 Teleport Player 컴포넌트를 추가합니다.
- **Teleport Destination** 프로퍼티에 씬의 시작 위치에 있는 텔레포트 앵커를 할당합니다.
- **Provider** 프로퍼티에 Teleportation Provider를 할당합니다.

**4.  텔레포트 동작을 버튼을 누르는 동작에 연결합니다.**

- **XR Rig**오브젝트의 On Button Press 컴포넌트에서 **On Press**이벤트에 **+** 버튼을 클릭하여 새 함수를 추가합니다.
- **XR Rig** 오브젝트를 할당합니다.
- **TeleportPlayer** > **Teleport ()**함수를 선택합니다.

[Image: image]

이제 보조 버튼을 누르면 플레이어가 씬의 시작 지점으로 텔레포트되어 플레이어에게 재설정 UI가 보입니다.

단계를 완료로 표시

## 8. 요약

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

**새 기능**

- OK 버튼이 포함된 시작 화면
- 씬을 다시 로드하는 재설정 화면

**새로운 개념 및 기술**

- VR UI 베스트 프랙티스
- 월드 공간 UI와 스크린 공간 UI 비교

**다음 수업**

- 편리성 및 접근성

단계를 완료로 표시선택 단계

## 9. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  씬에 사실적인 텍스트 추가 [쉬움]**

공책과 같은 사실적인 오브젝트에 텍스트를 추가하여 사용자에게 추가 정보를 제공합니다.

- 텍스트를 표시할 오브젝트의 자식 오브젝트로 TexMeshPro - Text 오브젝트를 만듭니다.
- 캔버스가 월드 공간 렌더 모드로 설정되어 있어 있는지 확인합니다.
- 보너스 - 오브젝트를 주웠을 때 텍스트를 읽어 주는 오디오 내레이션을 추가해 보세요.

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

**2.  다단계 사용자 인터페이스 추가 [보통]**

VR 방 경험을 시작할 때 지침 단락 하나와 함께 OK 버튼을 표시하는 대신, 짧은 텍스트 문자열을 돌아가면서 표시하는 Next 버튼을 추가합니다.

- TextMeshPro - Text 컴포넌트에 Course Library에서 제공되는 ShowMessagesFromList 컴포넌트를 추가한 다음 NextMessage() 함수를 사용하여 텍스트가 순환되도록 설정합니다. 이 컴포넌트에 있는 On Complete () 이벤트는 더 이상 표시할 메시지가 없어지면 발생하는 이벤트입니다.

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

**3.  컨텍스트 툴팁 추가 [어려움]**

작은 UI 화면을 추가하여 방에서 특정 작업을 수행 중인 사용자를 안내합니다.

- UI 화면은 관련성이 있는 경우에만 나타나야 합니다.
- 보너스 - 모자를 잡고 머리에 쓰는 것과 같이 여러 단계로 이루어진 작업인 경우, 사용자가 어떤 단계에 있는지에 따라 UI에 다양한 메시지가 표시되도록 해 보세요.
- 보너스 - 작업을 처음으로 진행할 때만 UI가 표시되는 것이 좋습니다.

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

## Complete this Tutorial

모든 단계를 완료로 표시
