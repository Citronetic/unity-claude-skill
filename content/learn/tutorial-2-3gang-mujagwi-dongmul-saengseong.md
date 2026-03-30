[Image: image]

# 2.3강 - 무작위 동물 생성

Tutorial

Beginner

+10XP

60 mins

3

(290)

Unity Technologies

[Image: 2.3강 - 무작위 동물 생성]SummarySkills

**개요:**

동물 프리팹은 화면을 가로질러 걸어오고 경계를 벗어나면 제거되지만, 씬에 드래그하기 전에는 게임에 나타나지 않습니다. 이 수업에서는 동물이 화면 상단의 무작위 위치에서 저절로 생성되도록 구현해 보겠습니다. 이를 위해 새 오브젝트와 전체 생성 과정을 관리할 새 스크립트를 생성합니다.

**프로젝트 결과:**

사용자가 S 키를 누르면 무작위로 선택된 동물이 화면 상단의 무작위 위치에 생성되고 플레이어를 향해 걸어갑니다.

Resources

- [Lesson Plan 2.3 - Random Animal Stampede.pdf](https://unity-connect-prd.storage.googleapis.com/20190516/ebd9ef79-cece-4b54-be5d-8afa9f7fb147_Lesson_Plan_2.3___Random_Animal_Stampede.pdf?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774931439902)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 생성 관리자 만들기

Q&A (0)

> *이처럼 복잡한 오브젝트 생성 작업을 수행하는 경우 생성 과정을 관리할 전용 스크립트와 해당 스크립트에 연결할 오브젝트가 필요합니다.*

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

1. 계층 구조에서 "SpawnManager"라는 **빈 오브젝트**를 생성합니다.
2. "SpawnManager"라는 새 스크립트를 생성하고 **Spawn Manager**에 연결한 후 엽니다.
3. 새 ***public GameObject[ ] animalPrefabs;***를 선언합니다.
4. 인스펙터에서 동물 수에 맞게 **배열 크기**를 변경한 후 프로젝트 창에서 빈 슬롯으로 **드래그**하여 동물을 **할당**합니다.

**참고:**계층 구조가 아닌 **프로젝트**창에서 드래그해야 합니다. 오브젝트를 생성하려면 프로젝트 창에 저장되어 있는 프리팹을 사용해야 합니다.

단계를 완료로 표시

## 2. S 키를 눌러 동물 생성

Q&A (0)

> *배열을 만들고 동물을 할당했지만, 게임 중에 생성할 방법이 없다면 별 도움이 되지 않습니다. 동물을 선택하고 생성하는 해결책을 임시로 만들어 보겠습니다.*

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

1. ***Update()***에 **S** 키를 누르면 화면 상단에서 새 동물 프리팹을 **인스턴스화**하는 if-then 문을 작성합니다.
2. 새로운 ***public int animalIndex***를 선언하고 **Instantiate**호출에 포함한 후 인스펙터에서 값을 편집하면서 테스트합니다.

[Image: image]단계를 완료로 표시

## 3. 배열로부터 무작위 동물 생성

Q&A (0)

> *S 키를 눌러 동물을 생성할 수 있지만, 이 경우 지정된 배열 인덱스에 있는 동물만 생성됩니다. 지정 없이도 S 키를 누르면 인덱스에 따라 무작위로 동물을 생성하도록 선택을 무작위화해야 합니다.*

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

1. S 키를 눌렀는지 여부를 검사하는 if 문에서 0과 배열 길이 사이의 무작위 ***int animalIndex***를 생성합니다.
2. ***animalIndex*** 전역 변수를 제거합니다. 이 변수는 **if 문**에서 로컬로만 필요하기 때문입니다.

[Image: image]단계를 완료로 표시

## 4. 생성 위치 무작위화

Q&A (0)

> *S 키를 눌러 animalIndex로부터 무작위로 동물을 생성할 수 있지만, 모두 동일한 위치에 나타납니다. 동물이 화면에서 줄지어 내려오지 않도록 생성 위치를 무작위화해야 합니다.*

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

1. Vector3의 X 값을 ***Random.Range(-20, 20)***으로 **교체**한 후 테스트합니다.
2. **if 문** 내에서 새로운 ***Vector3 spawnPos*** 로컬 변수를 만듭니다.
3. 클래스 맨 위에 ***spawnRangeX*** 및 ***spawnPosZ***에 대한 ***private float*** 변수를 생성합니다.

단계를 완료로 표시

## 5. 카메라 시점 변경

Q&A (0)

> *생성 관리자를 올바르게 만들었으므로, 이제 주제를 바꾸어 카메라 관련 작업을 수행하겠습니다. 카메라의 시점을 변경하면 이 탑다운 게임에 더 적합한 뷰를 제공할 수 있습니다.*

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

1. 씬 뷰에서 **Perspective** 및 **Isometric** 뷰를 전환하여 차이점을 파악합니다.
2. **카메라**를 선택하고 **Projection**을 "Perspective"에서 "Orthographic"으로 변경합니다.

단계를 완료로 표시

## 6. 수업 요약

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

새 기능

- 플레이어가 S 키를 눌러 동물을 생성할 수 있습니다.
- 동물 선택과 생성 위치가 무작위화됩니다.
- 카메라 투영(원근/직교)을 선택했습니다.

새로운 개념 및 기술

- 생성 관리자
- 배열
- 키코드
- 무작위 생성
- 로컬 변수 및 전역 변수
- 원근 투영 및 아이소메트릭 투영

다음 수업

- 충돌을 사용하여 동물에게 먹이를 줘 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
