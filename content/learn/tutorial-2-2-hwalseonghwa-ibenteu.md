[Image: image]

# 2.2 - 활성화 이벤트

Tutorial

Beginner

+10XP

90 mins

1

Unity Technologies

[Image: 2.2 - 활성화 이벤트]SummarySkills

이 수업에서는 사용자가 특정한 방식으로 오브젝트와 상호 작용할 때 작동하는 독특한 기능을 오브젝트에 추가하는 방법을 알아보겠습니다. 이 수업을 마치면 리모컨을 주워서 컨트롤러의 버튼을 눌러 TV를 켤 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Resources

- [Polaroid-Scripts.zip](https://unity-connect-prd.storage.googleapis.com/20210416/489413a8-b8f1-4cb5-9490-c7b0cac395f8/Polaroid-Scripts.zip?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931418785)

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 잡을 수 있는 리모컨 오브젝트 추가

Q&A (0)

지금까지는 오브젝트를 주웠다가 내려놓는 동작만 할 수 있었습니다. 이제는 손에 잡았을 때 실제로 *특정 행동*을 할 수 있도록 활성화할 수 있는 오브젝트를 추가해 보겠습니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 한국어, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  씬에 리모컨을 추가합니다.**

- **Course Library**> **Prefabs**> **Objects** > **Electronics**로 이동합니다.
- 씬에서 Remote 프리팹 오브젝트를 표면으로 드래그합니다.

**2.  오브젝트를 주울 수 있도록 설정합니다.**

- Rigidbody 컴포넌트를 추가하고 Collision Detection을 Continuous Dynamics로 설정하여 오브젝트가 바닥 아래로 통과하지 않도록 합니다.
- XR Grab Interactable 컴포넌트를 추가합니다.

**3.  플레이어가 리모컨을 주웠을 때 손에 올바르게 위치하도록 설정합니다.**

- **Remote**오브젝트 내에 빈 Attach 자식 오브젝트를 새로 생성합니다.
- **Attach** 오브젝트의 위치와 방향을 적절하게 조정합니다.
- **Attach**오브젝트를 XR Grab Interactable 컴포넌트의 **Attach Transform** 프로퍼티에 할당합니다.

[Image: image]

이제 자연스러운 모습으로 리모컨을 주울 수 있습니다.

단계를 완료로 표시

## 2. 리모컨을 활성화할 때의 음향 플레이

Q&A (0)

이제 리모컨을 잡은 상태에서 트리거를 누르면 딸깍 소리가 나도록 해 보겠습니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 한국어, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  리모컨에서 음향이 플레이되도록 설정합니다.**

- Remote 오브젝트에 AudioSource 컴포넌트를 추가합니다.
- AudioSource 컴포넌트에서 **Spatial Blend** 프로퍼티를 오른쪽 끝에 있는**3D**(1)까지 밀어 3D 음향으로 설정합니다.

**2.  리모컨에 음향을 플레이하는 기능을 부여합니다.**

- 리모컨에 Play Quick Sound 컴포넌트를 추가합니다.
- **Course Library** > **Audio**폴더에서 원하는 오디오 클립을 찾아 **Sound** 프로퍼티에 할당합니다.

**3.  리모컨의 Activated 이벤트를 찾습니다.**

- 리모컨의 XR Grab Interactable 컴포넌트 하단에서 **Interactable Events**를 펼쳐 모든 이벤트 옵션을 표시합니다.
- **Activated** 이벤트를 찾습니다.

**4.  리모컨이 활성화되면 음향을 플레이합니다.**

- **Activated** 이벤트에서 **+**를 클릭하여 새 동작을 추가합니다.
- **Remote**오브젝트를 빈 Object 슬롯으로 드래그 앤 드롭하여 해당 컴포넌트에 액세스합니다.
- 함수를 선택하기 위해 **No Function** 드롭다운을 클릭한 다음 **PlayQuickSound**>**Play ()**를 선택합니다.

[Image: image]

이제 리모컨을 손에 잡았을 때 활성화 버튼을 누르면 컨트롤러가 트리거되고 음향을 들을 수 있습니다.

단계를 완료로 표시

## 3. 활성화되었을 때 리모컨의 표시기 광원 색상 변경

Q&A (0)

리모컨이 활성화되었을 때 표시기 광원 색상이 빨간색으로 바뀌도록 설정하면 리모컨의 버튼이 눌렸음을 나타내는 추가 피드백을 제공할 수 있습니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 한국어, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  표시기 광원 색상이 빨간색으로 바뀌게 하는 기능을 추가합니다.**

- 계층 구조에서 Remote 오브젝트를 펼치고 **Indicator_Light** 자식 오브젝트를 선택합니다.
- Change Material 컴포넌트를 추가합니다.
- **Other Material** 프로퍼티에 Red 머티리얼을 할당합니다.

**2.  트리거를 눌렀을 때 머티리얼 색상을 빨간색으로 변경합니다.**

- **Remote** 부모 오브젝트의 XR Grab Interactable 컴포넌트 하단에서 **Interactable Events**를 펼쳐 모든 이벤트 옵션을 표시합니다.
- **Activated** 이벤트에서 **+**를 클릭하여 새 함수를 추가합니다.
- **Indicator Light** 자식 오브젝트를 Object 프로퍼티에 할당합니다.
- 새 함수를 선택하기 위해 **No Function** 드롭다운을 클릭한 다음 **Change Material**>**SetOtherMaterial ()**함수**를 클릭합니다.**

**3.  활성화 버튼을 놓았을 때 머티리얼을 원래 색상으로 되돌리도록 설정합니다.**

- **Deactivated** 이벤트에서 **+**를 클릭하여 새 동작을 추가합니다.
- Indicator_Light 오브젝트를 할당한 다음 **Change Material**>**SetOriginalMaterial ()**함수를 선택합니다.

[Image: image]

이제 리모컨을 활성화하면 표시기 광원 색상이 빨간색으로 바뀌고, 활성화 버튼을 놓으면 원래 색상으로 돌아갑니다.

단계를 완료로 표시

## 4. TV에서 비디오 플레이

Q&A (0)

버튼으로 TV를 켤 수 있도록 설정하기 전에 먼저 씬의 TV에서 비디오가 성공적으로 플레이되는지 확인해야 합니다.

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- 한국어, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  TV에서 3D 음향이 나오도록 설정합니다.**

- 계층 구조에서 Television의 **Screen** 자식 오브젝트를 선택합니다.
- Audio Source 컴포넌트를 추가합니다.
- **Spatial Blend** 프로퍼티를 3D(1.0)로 끝까지 드래그하여 입체 음향을 활성화합니다.

**2.  TV에서 비디오가 플레이되도록 설정합니다.**

- Screen 자식 오브젝트에서 Video Player 컴포넌트를 추가합니다.
- **Material Property**를 _MainTex에서 **_BaseMap**으로 변경하여 비디오가 텍스처가 아닌 머티리얼에 투사되도록 합니다.

**3.  비디오 제어 기능을 추가합니다.**

- Screen 자식 오브젝트에서 Play Video 컴포넌트를 추가합니다.
- **Play At Start**체크박스를 선택하여 비디오가 자동으로 플레이되도록 합니다.

**4.  화면에 플레이할 비디오를 선택합니다.**

- Play Video 컴포넌트에서 **Video Clips**를 펼칩니다.
- **Size** 목록 프로퍼티를 1로 설정하고 Enter 키를 눌러 빈 Video Clip 슬롯을 표시합니다.
- **Course Library** > **Videos**에 있는 비디오 중 하나를 Video Clip 프로퍼티에 할당합니다.

[Image: image]

이제 애플리케이션을 실행하면 TV화면에서 3D 음향과 함께 비디오가 자동으로 플레이됩니다.

단계를 완료로 표시

## 5. 리모컨으로 TV 제어

Q&A (0)

TV가 잘 작동하므로 이제 리모컨으로 TV를 제어할 차례입니다.

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

The media could not be loaded, either because the server or network failed or because the format is not supported.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**1.  비디오가 자동으로 플레이되지 않도록 설정합니다.**

- Play Video 컴포넌트에서 **Play At Start** 체크박스를 선택 취소합니다.

**2.  리모컨의 Interaction 이벤트를 찾습니다.**

- **Remote** 게임 오브젝트를 선택합니다.
- XR Grab Interactable 컴포넌트에서 **Interactable Events**를 펼쳐 모든 이벤트 옵션을 표시합니다.

**3.  리모컨이 활성화되면 TV를 트리거합니다.**

- **Activated** 이벤트에서 **+**를 클릭하여 새 동작을 추가합니다.
- 비어 있는 Object 프로퍼티에 **Screen** 오브젝트를 할당합니다. 이 오브젝트에 Play Video 스크립트가 있기 때문입니다.
- **No Function** 드롭다운을 클릭하고, 두 번째로 버튼을 눌렀을 때 비디오가 일시 중지되도록 할 것인지 아니면 중단되도록 할 것인지 여부에 따라 **PlayVideo**>**TogglePlayPause ()**함수 또는 **PlayVideo**>**TogglePlayStop ()**함수**를 선택합니다**.

[Image: image]

이제 리모컨을 활성화하면 TV의 비디오를 플레이, 일시 중지 또는 중단할 수 있습니다.

단계를 완료로 표시

## 6. 요약

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

The media could not be loaded, either because the server or network failed or because the format is not supported.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**새 기능**

- 잡을 수 있는 리모컨
- 음향 플레이 동작
- 머티리얼 변경 동작
- 비디오 플레이 동작

**새로운 개념 및 기술**

- 오브젝트 활성화
- 이벤트 및 동작
- 스크립트 및 함수

**다음 수업**

- 다이렉트 인터랙터와 레이 인터랙터

단계를 완료로 표시선택 단계

## 7. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  비디오를 플레이하는 휴대폰 추가 [쉬움]**

트리거를 누르면 휴대폰에서 비디오가 플레이되도록 설정합니다.

- Course Library > Prefabs > Objects > Electronics 폴더에서 휴대폰 프리팹을 찾을 수 있습니다.
- TV 화면을 설정할 때와 비슷한 방식으로 머티리얼이 있는 별도의 Screen 자식 오브젝트를 새로 만들어야 합니다.
- **보너스:**Play Video > NextClip () 함수를 사용하여 휴대폰이 여러 비디오를 돌아가며 플레이하도록 설정해 보세요.

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

The media could not be loaded, either because the server or network failed or because the format is not supported.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**2.  작동하는 손전등 추가 [보통]**

트리거를 누를 때 토글로 켜지고 꺼지는 손전등을 씬에 추가하고, 딸깍 소리를 넣어 오디오 피드백을 제공합니다.

- 손전등에 자식 SpotLight 오브젝트를 추가해야 합니다.
- ToggleLight > Flip () 함수를 사용하여 불빛이 켜지고 꺼지도록 설정해 보세요.

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

The media could not be loaded, either because the server or network failed or because the format is not supported.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**3.  작동하는 라이터와 더불어 라이터로 불을 붙일 수 있는 양초 추가 [어려움]**

활성화하면 불꽃이 나오는 라이터를 씬에 추가합니다. 불꽃이 양초에 가까워지면 양초에 불이 붙어야 합니다.

- Particle_Flame 프리팹을 사용할 수 있습니다.
- 양초에서 트리거 콜라이더와 OnTrigger 스크립트를 사용하여 특정 태그가 있는 오브젝트가 트리거에 진입하는 시점을 감지합니다.
- **보너스:** OnVelocity 스크립트를 사용하여 불꽃이 흔들리면 불이 꺼지도록 만들어 보세요.

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

The media could not be loaded, either because the server or network failed or because the format is not supported.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**4.  다트 건 또는 스테이플러 발사체 추가 [전문가]**

트리거를 누를 때 다트를 발사하는 다트 건 또는 스테이플러 침을 발사하는 스테이플러를 추가합니다.

- Course Library > Prefabs > Objects > Launchers 폴더에서 오브젝트와 발사체의 프리팹을 찾습니다.
- Course Library에서 제공되는 LaunchProjectile 스크립트를 사용합니다.
- 필요한 경우 Course Library에서 제공되는 DestroyObject 스크립트를 사용하여 발사체가 일정 시간이 지난 후에 사라지도록 설정합니다.
- **보너스:** 스테이플러가 힌지 조인트를 축으로 벌어지도록 만들어 보세요.
- **보너스**:  오브젝트가 발사될 때 음향을 추가해 보세요.

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

The media could not be loaded, either because the server or network failed or because the format is not supported.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**5.  작동하는 폴라로이드 카메라 추가  [전문가] [프로그래밍 필요]**

실제로 작동하는 폴라로이드 카메라를 추가하여 뷰파인더 화면으로 촬영할 사진을 미리 보고 트리거를 사용하여 사진을 인쇄합니다.

- 뷰파인더 화면에서 렌더 텍스처로 거울이 어떻게 설정되어 있는지 살펴봅니다.
- [Camera.Render()](https://docs.unity3d.com/ScriptReference/Camera.Render.html)에 대한 기술 자료를 검토합니다.
- 카메라가 현재 레이를 렌더링 중이더라도 걱정하지 마세요. 다음 튜토리얼에서 레이를 숨기는 방법을 알아보겠습니다.
- 도움이 필요한 경우 [폴라로이드 및 사진 스크립트](https://connect-prd-cdn.unity.com/20210416/489413a8-b8f1-4cb5-9490-c7b0cac395f8/Polaroid-Scripts.zip)

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

The media could not be loaded, either because the server or network failed or because the format is not supported.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
