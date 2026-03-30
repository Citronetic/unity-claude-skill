[Image: image]

# 1.3 - 잡을 수 있는 오브젝트

Tutorial

Beginner

+10XP

90 mins

1

(18)

Unity Technologies

[Image: 1.3 - 잡을 수 있는 오브젝트]SummarySkills

이 수업에서는 VR에서 잡을 수 있는 기본 상호 작용 오브젝트를 설정하는 방법을 알아보겠습니다. 이 수업을 마치면 씬에서 오브젝트를 잡거나 던질 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 손 모델 선택

Q&A (0)

단순한 구체 대신 VR에서 사용자의 손을 나타내는 모델을 선택할 수 있습니다.

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

**1.  손 모델 옵션 살펴보기**

- 프로젝트 창에서 **Course Library** > **Prefabs** > **VR**>**Hands**를 열고, 원하는 **VR_Hand** 옵션을 결정합니다.

**2.  왼손에 모델 할당**

- 계층 구조에서 **XR Rig** > **Camera Offset**> **LeftHand Controller**를 선택합니다.
- XR Controller 컴포넌트의 **Model Prefab**프로퍼티에 선택한 손 프리팹을 드래그 앤 드롭하여 할당합니다.

**3.  오른손에 모델 할당**

- 계층 구조에서 **XR Rig** > **Camera Offset**> **RightHand Controller**를 선택합니다.
- 위 단계를 반복하여 오른손에 프리팹을 할당합니다.

[Image: image]

이제 앱을 테스트할 때 회색 구체 대신 선택한 손 모델이 표시되어야 합니다.

단계를 완료로 표시

## 2.  잡을 수 있는 오브젝트 추가

Q&A (0)

이제 VR 손을 추가했으니 손으로 잡을 수 있는 오브젝트를 추가해야 합니다.

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

**1.  씬에 공 추가**

- **Course Library** > **Prefabs** > **Objects** > **Sports**로 이동합니다.
- 방에서 접근할 수 있는 표면으로 공을 드래그합니다.

**2.  공을 잡을 수 있게 설정**

- XR Grab Interactable 컴포넌트를 공에 추가합니다.
- **참고**: Rigidbody 컴포넌트가 공 오브젝트에 자동으로 추가됩니다.

**3.  잡을 수 있는 오브젝트 테스트**

- 잡을 수 있는 공 오브젝트가 있는 테이블 앞에 있도록 **XR 릭**의 위치를 조정합니다.
- 애플리케이션을 실행합니다.
- 광선을 조준하고 그립 버튼을 눌러 오브젝트를 잡을 수 있는지 테스트합니다.

**4.  오브젝트의 크기를 올바르게 설정했는지 확인**

- 계층 구조에서 새로운 **3D Object > Cube** 오브젝트를 생성하고, 이름을 Measuring Stick으로 변경합니다.
- Google 검색을 통해 공의 정확한 공식 지름을 확인하고 찾은 치수를 미터로 변환합니다.
- Measuring Stick의 Transform 컴포넌트에서 X와 Z의 Scale을 0.01로 설정하고 Y의 Scale을 계산한 길이로 설정합니다.
- Measuring Stick을 공 옆으로 옮겨 공의 크기가 정확한지 확인합니다. 크기가 정확하지 않다면 스케일 툴을 사용해서 크기를 조정합니다.

[Image: image]

이제 그립 버튼을 사용하여 공을 잡을 수 있고 그립 버튼을 떼면 공을 던질 수 있습니다.

**참고:** XR 디바이스 시뮬레이터를 사용하는 경우, T 또는 Y로 컨트롤러를 토글할 수 있고, 마우스 가운데 버튼을 누른 채로 오브젝트를 가리키도록 회전한 다음 G 키를 길게 눌러 오브젝트를 잡을 수 있습니다.

단계를 완료로 표시

## 3. 손을 숨기고 앵커 컨트롤 비활성화

Q&A (0)

현재 손 모델이 잡고 있는 오브젝트와 겹치며, 손에 있는 오브젝트의 위치를 컨트롤러로 변경할 수 있습니다. 씬에서 바람직하게 상호 작용하는 모습은 아닌 것 같습니다.

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

**1.  사용자가 왼쪽 조이스틱으로 오브젝트를 옮기지 못하게 설정**

- 계층 구조에서**XR Rig**> **Camera Offset**> **LeftHand Controller**오브젝트를 선택합니다.
- XR Ray Interactor 컴포넌트에서 **Anchor Control** 설정을 비활성화합니다.

**2.  오브젝트를 잡으면 손 모델이 사라지도록 설정**

- XR Ray Interactor 컴포넌트에서 **Hide Controller on Select** 설정을 활성화합니다.

**3.  변경 사항을 오른쪽 컨트롤러에 적용**

- 위 단계를 **RightHand Controller**오브젝트에 반복합니다**.**

[Image: image]

이제 오브젝트를 잡으면 손이 사라지며 더 이상 조이스틱으로 오브젝트를 옮기거나 회전할 수 없게 됩니다.

단계를 완료로 표시

## 4. 던지기 경험 조정

Q&A (0)

이제 오브젝트를 잡을 수 있지만 아직 몇 가지 세부적인 동작을 조정해야 합니다.

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

**1.  공에 탄성 추가**

- **Ball**오브젝트의 Sphere Collider 컴포넌트에서 **Material**프로퍼티를 찾습니다.
- 동그란 버튼을 클릭해서 제공된 Physics Materials 중 하나를 할당합니다.

**2.  떨어진 오브젝트가 바닥을 통과하지 않도록 설정**

- Ball 오브젝트의 Rigidbody 컴포넌트에서 **Collision Detection** 설정을 **Continuous Dynamic**으로 설정합니다.

**3.  공이 손에 있는 동안 공의 리지드바디 물리가 작동하도록 설정**

- XR Grab Interactable 컴포넌트에서 **Movement Type**이 **Kinematic**으로 설정되어 있도록 합니다.

**4.  오브젝트 움직임을 부드럽게 만들기**

- XR Grab Interactable 컴포넌트에서 **Smooth Position** 프로퍼티와 **Smooth Rotation** 프로퍼티를 활성화합니다.

[Image: image][Image: image][Image: image]

이제 공이 튕기게 되고, 떨어질 때 바닥을 통과하지 않으며, 손 안에서 부드럽게 움직입니다.

단계를 완료로 표시

## 5. 핸들이 있는 오브젝트 추가

Q&A (0)

추가한 공 오브젝트의 경우 중심을 잡고 있으며, 이때 방향은 중요하지 않습니다. 이번에는 특정 위치와 방향에서 잡히는 오브젝트를 추가해 보겠습니다.

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

**1.  씬에 스포츠 라켓, 노, 배트 추가**

- **Course Library** > **Prefabs** > **Sports**로 이동합니다.
- 운동 기구 중 하나를 공 옆의 표면으로 드래그합니다.

**2.  새 오브젝트를 잡을 수 있게 설정**

- 새 오브젝트를 선택하고 XR Grab Interactable 컴포넌트를 추가합니다.
- XR Grabbable 컴포넌트에서 **Smooth Position** 설정과 **Smooth Rotation** 프로퍼티를 모두 활성화하여 떨림을 줄입니다.
- 자동으로 추가된 Rigidbody 컴포넌트의 **Collision Detection**옵션에서 **Continuous Dynamic**을 선택하여 오브젝트가 바닥을 통과하지 않도록 합니다.

**3.  오브젝트에 특정 연결 포인트 생성**

- 계층 구조에서 오브젝트를 오른쪽 클릭하고**Empty**자식 오브젝트를 생성합니다.
- 빈 오브젝트의 이름을 Attach로 변경합니다.
- 새 오브젝트를 잡는 손 모델의 위치와 방향에 맞도록 Attach 오브젝트의 위치와 회전을 조정합니다.

**4.  운동 기구에 연결 포인트 할당**

- 계층 구조에서 부모 운동 기구 오브젝트를 다시 선택합니다.
- XR Grab Interactable 컴포넌트에서 **Attach Transform**프로퍼티를 찾습니다.
- 새 Attach 오브젝트를 드래그 앤 드롭하여 Attach Transform 프로퍼티에 할당합니다.

[Image: image]

이제 핸들을 사용해 운동 기구 오브젝트를 잡을 수 있으며 운동 기구 오브젝트로 공을 칠 수 있습니다.

단계를 완료로 표시

## 6. 계층 구조 정리

Q&A (0)

계층 구조에 더 많은 오브젝트를 추가하기 전에 오브젝트를 정리하는 체계를 세우는 것이 좋습니다.

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

**1.  계층 구조에 정리용 오브젝트 생성**

- 계층 구조에서 XR, LIGHTING, STATIC,  DYNAMIC이라는 빈 게임 오브젝트를 새로 생성합니다.
- 위치를 모두 0, 0, 0으로 초기화합니다.

**2.  오브젝트를 카테고리별로 정리**

- 오브젝트를 계층 구조에서 정리용 오브젝트로 드래그합니다. 이렇게 하면 계층 구조를 깔끔하게 정리할 수 있습니다.
- 또는 오브젝트를 정리용 오브젝트 밑으로 드래그합니다. 이렇게 하면 오브젝트에 쉽게 액세스할 수 있습니다.

[Image: image]

이제 계층 구조가 카테고리별로 정리되어 더 쉽게 사용할 수 있습니다.

단계를 완료로 표시

## 7. 요약

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

- 손 모델
- 잡을 수 있는 간단한 공 오브젝트
- 연결 포인트가 있으며 잡을 수 있는 툴
- 정리된 계층 구조

**새로운 개념 및 기술**

- Unity 스케일과 실제 스케일 비교
- 잡을 수 있는 오브젝트 프로퍼티
- 충돌 검사 모드
(Discrete와 Continuous Dynamic의 차이)
- 이동 유형
(Kinematic, Instantaneous, Velocity Tracking)

**다음 수업**

- 소켓

단계를 완료로 표시선택 단계

## 8. 추가 자료

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  방에 더 많은 오브젝트 추가 [쉬움]**

아직 오브젝트가 완벽하게 작동하지는 않더라도 재미있는 장식 오브젝트와 잡을 수 있는 오브젝트를 씬에 추가하여 더 상호 작용이 활발한 경험을 만들 수 있습니다.

- Course Library > Prefabs > Objects 폴더를 살펴보며 아이디어를 얻어 보세요.

[Image: image]

**2.  Grab Interactable 프로퍼티 테스트 [쉬움]**

씬에 잡을 수 있는 오브젝트를 새로 추가하고 다음을 비롯해 XR Grab Interactable 컴포넌트의 여러 프로퍼티를 테스트해 보세요.

- 이동 유형: Kinematic, Instantaneous, Velocity Tracking 비교
- Smooth Position/Rotation Amount 및 Tighten Position
- Throw on Detach 프로퍼티

**3.  확대경 추가 [어려움]**

오브젝트를 잡고 살펴보는 데 사용할 수 있는 확대경을 씬에 추가합니다.

- 거울과 비슷한 방식으로 작동하는 Camera Render Texture를 사용할 수 있습니다.
- 광선이 확대경을 방해하더라도 걱정하지 않아도 됩니다. 나중에 광선을 켜고 끄도록 설정하면 이 문제를 해결할 수 있습니다.

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

**4.  펼칠 수 있는 공책 추가 [전문가]**

잡았을 때 표지를 펼칠 수 있는 공책을 추가합니다.

- 힌트: Notebook_Cover에는 **Connected Body** 프로퍼티가 공책의 리지드바디로 설정된 [힌지 조인트](https://docs.unity3d.com/kr/Manual/class-HingeJoint.html?ampDeviceId=bf64ecc4-e9ac-484b-b805-43ba57fb2f0c&ampSessionId=1774844981984&ampTimestamp=1774931381988)가 필요합니다.
- 원한다면 공책에 텍스트를 추가해 보세요.

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
