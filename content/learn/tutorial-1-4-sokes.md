[Image: image]

# 1.4 - 소켓

Tutorial

Beginner

+10XP

90 mins

1

(15)

Unity Technologies

[Image: 1.4 - 소켓]SummarySkills

이 수업에서는 VR에서 오브젝트를 스냅하는 소켓의 설정 방법을 알아보겠습니다. 이 수업을 마치면 모자를 고리에 걸거나 머리에 쓸 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 씬에 잡을 수 있는 모자 추가

Q&A (0)

모자를 걸 수 있는 고리를 만들기 전에 먼저 잡을 수 있는 모자를 만들어야 합니다.

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

**1.   씬에 모자 추가**

- **Course Library**>**Prefabs**>**Objects**> **Hats** 폴더를 엽니다.
- 쓰고 싶은 모자 두 개를 거울 근처의 표면으로 드래그합니다.
- **참고:** 아직 씬에 고리가 없다면, **Course Library** >**Prefabs** > **Hooks** 폴더에서 고리를 추가합니다.

**2.  모자에 물리 적용**

- Ctrl 또는 Cmd 키를 누른 채로 계층 구조에서 두 모자를 모두 선택합니다.
- Rigidbody 컴포넌트를 선택한 모자 오브젝트에 추가합니다.
- Collision Detection 프로퍼티를 **Continuous Dynamic**으로 설정하여 모자가 바닥으로 떨어지지 않게 합니다.

**3.  모자를 잡을 수 있게 설정**

- XR Grab Interactable 컴포넌트를 모자마다 추가합니다.
- 원하는 경우 **Smooth Position** 프로퍼티와 **Smooth Rotation** 프로퍼티를 활성화하여 떨림 현상을 줄일 수 있습니다.

**4.  테스트 준비**

- 고리와 모자가 닿는 거리 내에서 거울 앞에 위치하도록 **XR 릭**의 위치와 방향을 조정합니다.

[Image: image]

이제 모자를 잡을 수 있습니다.

단계를 완료로 표시

## 2. 고리를 간단한 소켓으로 변경

Q&A (0)

모자를 고리에 걸려면 고리가 소켓처럼 동작해야 합니다.

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

**1.  소켓 위치를 올바르게 지정**

- 계층 구조에서 **Hook**오브젝트를 오른쪽 클릭하고**Empty** 자식 오브젝트를 생성합니다.
- 자식 오브젝트의 이름을 Socket 1로 변경합니다.
- **Socket 1** 오브젝트의 위치를 모자가 놓일 고리 끝으로 조정합니다.

**2.  소켓을 위한 트리거 감지 영역 정의**

- Sphere Collider 컴포넌트를 Socket 오브젝트에 추가합니다.
- **Edit Collider** 버튼을 클릭하고 **Radius**를 0.1로 줄입니다.
- **Is Trigger**체크박스를 선택하여 모자와 충돌하지 않도록 합니다.

**3.  Socket 1 오브젝트가 소켓처럼 동작하도록 설정**

- XR Socket Interactor 컴포넌트를 오브젝트에 추가합니다.

**4.  모자가 소켓에 연결되어 있을 때 모자 포인트가 아래를 향하도록 설정**

- Socket 1의 빈 자식 오브젝트를 만들고 자식 오브젝트의 이름을 Attach로 변경합니다.
- Attach 오브젝트가 아래를 향하도록 방향을 조정합니다.
- Attach 오브젝트를 Socket Interactor 컴포넌트의 **Attach Transform**프로퍼티에 할당합니다.
- **참고:** 연결 포인트의 로컬 Z축은 모자의 앞쪽 방향과 정렬해야 하고 로컬 Y축은 모자의 위쪽 방향과 정렬해야 합니다.

[Image: image]

이제 모자를 잡을 수 있고 설정한 소켓 위에 모자를 걸 수 있습니다.

단계를 완료로 표시

## 3. 소켓을 복제하고 기본적으로 모자를 연결하도록 설정

Q&A (0)

이제 완벽하게 작동하는 소켓을 만들었으니 다른 위치에 있는 고리에 소켓을 복제할 수 있으며 씬이 로드될 때 모자가 고리에 걸려 있도록 설정할 수 있습니다.

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

**1.  모든 고리 위치에 소켓 생성**

- 계층 구조에서 Socket 1 오브젝트를 두 번 복제합니다.
- 복사한 오브젝트의 이름을 Socket 2와 Socket 3으로 변경합니다.
- 복사한 소켓의 위치를 다른 두 고리의 위치로 조정합니다.

**2.  기본적으로 모자가 고리에 걸려 있도록 설정**

- 각 Socket 오브젝트의 XR Socket Interactor 컴포넌트에서 **Starting Selected Interactable**프로퍼티에 모자 하나를 할당합니다.
- **참고:** 모자가 2개밖에 없다면 한 개의 소켓에는 Starting Selected Interactable 프로퍼티에 None을 할당해야 합니다.

[Image: image]

이제 3개의 모든 소켓이 완벽하게 작동하며 씬 시작 시 모자가 고리에 걸려 있습니다.

단계를 완료로 표시

## 4. 머리에 모자 소켓 생성

Q&A (0)

모자를 머리에 쓸 수 없다면 모자와 거울이 쓸모없어집니다.

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

**1.  머리 소켓 오브젝트의 위치를 올바르게 지정**

- 계층 구조에서 **XR Rig**>**Camera Offset**>**Main Camera**를 오른쪽 클릭하고 **Empty** 자식 오브젝트를 생성합니다.
- 새로 생성한 자식 오브젝트의 이름을 Socket으로 변경합니다.
- Socket 오브젝트의 **Y** **위치**를 0.1로 설정해서 모자가 눈 위에 위치하도록 조정합니다.

**2.  소켓을 위한 트리거 감지 영역 추가**

- Sphere Collider 컴포넌트를 **Socket** 오브젝트에 추가합니다.
- **Edit Collider** 버튼을 클릭하고 **Radius**프로퍼티를 0.2로 설정합니다.
- **Is Trigger**체크박스를 선택합니다.

**3.  모자가 이 소켓에 연결되도록 허용**

- XR Socket Interactor 컴포넌트를 추가합니다**.**

[Image: image]

이제 머리에 모자를 쓰고 거울에서 모자를 쓴 모습을 확인할 수 있습니다.

단계를 완료로 표시

## 5. 다른 오브젝트가 모자처럼 동작하지 않도록 설정

Q&A (0)

현재 모든 오브젝트를 머리나 고리에 모자처럼 연결할 수 있습니다. Interaction 레이어를 사용하면 상호 작용할 수 있는 오브젝트와 상호 작용할 수 없는 오브젝트를 제어할 수 있습니다.

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

**1.  Hats에 새 레이어 추가**

- 모자 오브젝트를 선택합니다.
- XR Grabbable Interactable 컴포넌트의 **Interaction Layer Mask** 드롭다운에서 Add Layer를 선택합니다.
- 새로운 Hats 레이어를 첫 번째 빈 슬롯에 추가합니다.
- **참고:** 아직 모자를 해당 레이어에 설정한 것은 아니며, 일단 레이어만 준비해 둔 상태입니다.

**2.  새로운 Hats 레이어에 모자 할당**

- 계층 구조에서 Ctrl/Cmd + 클릭으로 모든 **Hat** 오브젝트를 선택합니다.
- XR Grab Interactable 컴포넌트의 **Interaction Layer Mask** 드롭다운에서 **Nothing**을 선택하여 레이어를 지웁니다.
- 드롭다운에서 새 **Hats** 레이어를 선택하여 해당 레이어만 활성화합니다.

**3.  고리 소켓과 머리 소켓이 Hats 레이어의 오브젝트에만 상호 작용하도록 설정**

- 각 고리 소켓과 머리 소켓 오브젝트의 **Interaction Layer Masks** 프로퍼티를 **Hats** 레이어로만 설정합니다.

**4.  다른 오브젝트를 모자처럼 사용할 수 없도록 설정**

- 잡을 수 있는 다른 모든 오브젝트를 선택합니다.
- **Interaction Layer Mask** 드롭다운에서 **Default** 레이어만 활성화되어 있도록 합니다.
- 이를 통해 다른 오브젝트들이 **Hats** 레이어의 소켓과 상호 작용하지 않도록 할 수 있습니다.

[Image: image][Image: image][Image: image]

이제 머리와 고리에만 모자를 연결할 수 있고 잡을 수 있는 다른 오브젝트는 연결할 수 없습니다.

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

- 모자 추가
- 고리에 모자 걸기
- 머리에 모자 쓰기

**새로운 개념 및 기술**

- 소켓 인터랙터
- 상호 작용을 감지하는 트리거
- 인터랙션 레이어 마스크

**다음 수업**

- 오디오 및 햅틱

단계를 완료로 표시선택 단계

## 7. 추가 자료

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  재배치할 수 있는 그림 추가 [보통]**

사용자가 벽에 걸린 그림의 위치를 바꾸도록 허용합니다.

- 간단한 고리를 만들려면 Socket Interactor 컴포넌트가 있는 빈 오브젝트를 만들고, 기본 큐브 자식 오브젝트를 생성하고, 메시를 나타내도록 크기와 회전을 적절하게 조정합니다.
- 그림을 적절한 높이에 걸도록 하려면 그림이 걸려 있는 프레임의 위치에 Attach Transform을 추가해야 할 수도 있습니다.

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

**2.  재배치할 수 있는 책 추가 [어려움]**

사용자가 원하는 순서대로 깔끔하게 재배치할 수 있는 책을 선반에 추가합니다.

- 책이 원하는 방향으로 보이도록 하려면 올바른 방향으로 빈 오브젝트를 만든 다음 책 오브젝트를 자식 오브젝트로 만듭니다.

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
