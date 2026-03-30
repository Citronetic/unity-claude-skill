[Image: image]

# 2.1 - 오디오 및 햅틱

Tutorial

Beginner

+10XP

90 mins

1

Unity Technologies

[Image: 2.1 - 오디오 및 햅틱]SummarySkills

이 수업에서는 터치와 오디오 자극을 통해 프로젝트의 몰입감을 높이는 방법을 알아보겠습니다. 이 수업을 마치면 사용자가 오브젝트 위에 손을 올려 놓거나 오브젝트를 잡을 때 햅틱 및 오디오 피드백을 경험할 수 있습니다. 또한 씬에서 3D 공간 앰비언트 사운드가 나오도록 만들 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 오브젝트 위에 손을 올려 놓거나 오브젝트를 잡을 때 발생하는 햅틱 피드백 추가

Q&A (0)

오브젝트 위에 손을 올려 놓거나 오브젝트를 잡을 때 플레이어의 손에 물리적 피드백을 제공하는 햅틱을 추가할 수 있습니다.

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

**참고**: HTC Vive 또는 Valve Index와 같은 디바이스에서 개발용 OpenXR 플러그인을 사용하는 경우 이 기능이 작동하지 않을 수 있습니다.

**1.  두 컨트롤러 오브젝트를 동시에 편집합니다.**

- 계층 구조에서**XR Rig** > **Camera Offset**을 펼칩니다.
- Ctrl/Cmd 키를 누른 상태에서 **RightHand** **Controller**와 **LeftHand Controller**를 모두 클릭하면 두 컨트롤러가 함께 선택됩니다**.**

**2.  햅틱 이벤트를 찾습니다.**

- **Controller** 오브젝트의 XR Ray Interactor 컴포넌트 하단에서 **Haptic Events**를 펼칩니다.

**3.  사용자가 오브젝트 위에 손을 올려 놓을 때 미세한 햅틱 피드백을 생성합니다.**

- **On Hover Entered** 체크박스를 클릭하여 활성화합니다.
- **Intensity**를 낮은 값으로 설정합니다(예: 0.1~0.5).
- **Duration**을 매우 낮은 값으로 설정합니다(예: 0.1초).

**4.  사용자가 오브젝트를 잡을 때 보다 분명한 피드백을 생성합니다.**

- **On Select Entered** 체크박스를 선택합니다.
- **Intensity**와 **Duration** 값을 약간 더 높게 설정합니다(예: 0.25초).

[Image: image]

이제 오브젝트 위에 손을 올려 놓으면 컨트롤러가 미세하게 진동하고, 오브젝트를 잡으면 컨트롤러가 좀 더 세게 진동합니다.

단계를 완료로 표시

## 2. 오브젝트 위에 손을 올려 놓거나 오브젝트를 잡을 때 발생하는 오디오 피드백 추가

Q&A (0)

이제 햅틱 피드백을 설정했으며, 오디오 피드백을 추가하면 UX(사용자 경험)를 향상할 수 있습니다.

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

**참고**: HTC Vive 또는 Valve Index와 같은 디바이스에서 개발용 OpenXR 플러그인을 사용하는 경우 이 기능이 작동하지 않을 수 있습니다.

**1.  사용할 음향을 선택합니다.**

- **Course Library** > **Audio** > **FX**에서 오브젝트 위에 손을 올려 놓거나 오브젝트를 잡을 때 사용할 미세한 UI 음향 효과를 정합니다.
- 인스펙터(Inspector) 창 하단에서 미리듣기 패널을 위로 드래그하면 음향을 미리 들어 볼 수 있습니다.

**2.  이 음향 효과를 두 컨트롤러 모두에 적용합니다.**

- 계층 구조에서 RightHand Controller와 LeftHand Controller 오브젝트를 둘 다 선택합니다.
- XR Ray Interactor 컴포넌트에서 **Audio Events**를 펼칩니다.
- 클릭하여 **On Select Entered** 또는 **On Hover Entered** 설정을 활성화합니다.
- 선택한 음향 효과를 할당합니다.

[Image: image]

이제 오브젝트 위에 손을 올려 놓거나 오브젝트를 잡으면 음향 효과가 들립니다.

단계를 완료로 표시

## 3. 벽난로에서 나오는 3D 음향 추가

Q&A (0)

이벤트에 대한 오디오 피드백에 더하여 벽난로에서 나오는 3D 입체 음향을 씬에 추가하면 몰입감을 더욱 높일 수 있습니다.

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

**1.  불에 음향 효과를 적용합니다.**

- 파티클 오브젝트에 Audio Source 컴포넌트를 추가합니다.
- **AudioClip** 프로퍼티에 **Course Library**>**Audio**>**FX**폴더에 있는 SFX_Loop_Fire 음향 효과를 할당합니다.

**2.  음향이 자동으로 플레이되고 반복되도록 설정합니다.**

- Audio Source 컴포넌트에서 **Play on Awake**와 **Loop** 설정을 모두 활성화합니다.

**3.  이 컴포넌트를 3D 음향으로 설정합니다.**

- **Spatial Blend** 프로퍼티의 슬라이더를 오른쪽 끝에 있는 **3D** 설정까지 드래그합니다. 직접 값을 1로 입력해도 됩니다.

**4.  벽난로의 전체 볼륨과 거리에 따른 볼륨 차이를 편집합니다.**

- **Volume** 프로퍼티를 편집합니다.
- 3D Sound Settings를 펼친 다음 **Min Distance**와 **Max Distance**값**을 조정합니다.**

[Image: image]

이제 벽난로에서 장작이 타는 소리가 나고, 씬에 있는 사용자의 위치와 방향에 따라 음향의 볼륨과 좌우 균형이 조정됩니다.

**관련 리소스**

- [오디오 소스 설정](https://docs.unity3d.com/kr/Manual/class-AudioSource.html)

단계를 완료로 표시

## 4. 리버브 존 추가

Q&A (0)

VR 환경의 현실감을 유지하려면 현실 세계와 동일한 방식으로 오디오가 들리는 것이 특히 중요합니다. 음향이 서로 다른 방에서 어떻게 울려 퍼지는지를 고려하면 더욱 현실에 가까운 느낌을 낼 수 있습니다.

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

**1.  새 Audio Reverb Zone을 Room 오브젝트에 자식으로 추가합니다.**

- 계층 구조에서 **Room_[style]** 오브젝트를 오른쪽 클릭합니다.
- **Audio** > **Audio Reverb Zone**을 클릭합니다.

**2.  방 전체가 리버브 존에 포함되도록 설정합니다.**

- Audio Reverb Zone 컴포넌트에서 **Min Distance** 프로퍼티를 방 너비(10) 이상으로 설정합니다.
- **참고:**존을 시각화하려면 기즈모를 켜고 씬을 축소해야 합니다.
**Unity 2021 LTS**에서는 다음과 같이 버텍스에 점이 있는 구체 아이콘으로 기즈모 버튼이 표시됩니다.

[Image: image]

**3.  리버브 존을 방에 어울리게 설정합니다.**

- **Reverb Presets** 드롭다운을 사용하여 다양한 스타일의 리버브를 실험해 봅니다.
- 방에 어울리는 설정을 선택합니다(Room 또는 LivingRoom).

[Image: image]

이제 방에 리버브 존이 설정되었으며 3D 음향이 보다 사실적으로 들립니다.

**관련 리소스**

- [오디오 리버브 존](https://docs.unity3d.com/kr/Manual/class-AudioReverbZone.html)

단계를 완료로 표시선택 단계

## 5. 스페이셜라이저 플러그인 테스트 [선택 사항]

Q&A (0)

플레이어의 거리와 방향에 따라 왼쪽 귀와 오른쪽 귀에 들리는 음향의 볼륨이 달라지는 Unity 빌트인 3D 음향 외에 스페이셜라이저 플러그인을 추가로 설치하면 음향이 더욱 사실적으로 들리도록 만들 수 있습니다.

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

**1.  플러그인을 다운로드하고 임포트합니다.**

- 아래 링크에서 플랫폼에 사용할 적절한 스페이셜라이저 플러그인을 다운로드합니다.
- 패키지를 프로젝트로 임포트합니다.

**2.  플러그인을 활성화합니다.**

- **Edit** > **Project Settings**를 클릭합니다.
- 왼쪽 패널에서 **Audio** 섹션을 선택합니다.
- **Spatializer Plugin** 옆의 드롭다운을 사용하여 플러그인을 선택합니다.

**3.  플러그인을 불 파티클에 구현합니다.**

- 사용 중인 디바이스에 해당하는 지침을 따라 입체화된 음향을 구현합니다.

[Image: image]

이제 씬에서 사용자의 HRTF(머리전달함수)를 고려하여 오디오가 훨씬 더 사실적으로 전달됩니다.

**관련 리소스**

- [Unity 오디오 스페이셜라이저](https://docs.unity3d.com/kr/Manual/VRAudioSpatializer.html)
- [Oculus Spatializer 다운로드](https://developer.oculus.com/downloads/package/oculus-spatializer-unity/)

- [Oculus 3D 음향 입체화 가이드](https://developer.oculus.com/learn/audio-intro-spatialization/)
- [Oculus Spatializer 기능](https://developer.oculus.com/documentation/unity/audio-spatializer-features/?locale=en_US)
- [Unity에 입체화 적용](https://developer.oculus.com/documentation/unity/audio-osp-unity-spatialize/)
- [Microsoft HRTF Spatializer 다운로드](https://docs.microsoft.com/en-us/windows/mixed-reality/develop/unity/spatial-sound-in-unity)
(UWP을 지원하는 Windows 10 기반 PC)

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

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

**새 기능**

- 컨트롤러의 햅틱 피드백
- 컨트롤러의 오디오 피드백
- 벽난로에서 나오는 사실적인 3D 음향

**새로운 개념 및 기술**

- 몰입감을 더하는 햅틱과 오디오의 중요성
- 3D와 2D 음향 비교
- 리버브 존
- HRTF(머리전달함수)가 적용되어 더욱 공간화된 음향

**전문 기술**

- 오디오 및 햅틱 이벤트

단계를 완료로 표시선택 단계

## 7. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  스피커 추가 [쉬움]**

음악을 플레이하는 스피커 또는 실제로 레코드를 플레이하는 레코드 플레이어를 방에 추가합니다.

- Course Library > Prefabs > Objects > Speakers 폴더에서 스피커를 찾습니다.
- **Course Library**>**Audio**>**Music**폴더에서 음악 옵션을 찾습니다.
- 보너스 - 레코드 플레이어를 사용하려면 간단한 스크립트를 사용하여 레코드 플레이어의 판을 회전시켜야 합니다.

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

**2.  사실적인 튕기는 소리 추가 [보통] [프로그래밍 필요]**

공에 튕기는 소리를 추가하여 공이 바닥에 부딪힐 때마다 튀어 오르는 소리를 연출합니다.

- 새로운 음향 효과를 다운로드하고 임포트할 수 있습니다.
- 벽난로에 3D 음향 효과를 넣을 때처럼 공에 3D 오디오 소스를 추가합니다.
- 공이 땅에 부딪힐 때 음향이 플레이되도록 하려면 OnCollisionEnter 함수와 PlayOneShot 메서드를 사용하면 됩니다.
- 보너스 - 공이 움직이는 속도에 따라 볼륨이 바뀌도록 하고 싶은 경우 rigidbody.velocity.magnitude를 사용해 보세요.

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
