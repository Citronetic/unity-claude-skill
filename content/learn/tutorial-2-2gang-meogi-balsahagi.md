[Image: image]

# 2.2강 - 먹이 발사하기

Tutorial

Beginner

+10XP

70 mins

1

(311)

Unity Technologies

[Image: 2.2강 - 먹이 발사하기]SummarySkills

**개요:**

이 수업에서는 플레이어가 씬을 가로질러 날아가는 발사체를 발사하도록 구현해 보겠습니다. 먼저 발사체를 앞으로 보내는 새 스크립트를 작성합니다. 다음으로, Unity의 새로운 주요 개념 중 하나인 프리팹을 사용하여 모든 관련 스크립트 및 프로퍼티와 함께 발사체를 저장합니다. 플레이어는 스페이스바를 눌러 발사체 프리팹을 발사할 수 있습니다. 마지막으로, 씬에 경계를 추가하여 화면을 벗어나는 모든 오브젝트를 제거합니다.

**프로젝트 결과:**

플레이어는 스페이스바를 눌러 씬에서 발사체 프리팹을 발사할 수 있으며 발사체가 게임의 경계를 벗어나면 스스로 파괴됩니다. 동물도 게임 영역을 벗어나면 씬에서 제거됩니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 앞으로 발사체 날리기

Q&A (0)

> *가장 먼저 해야 할 일은 발사체에 전진하는 움직임을 구현해 플레이어가 발사하는 발사체가 씬을 빠르게 가로지르도록 만드는 것입니다.*

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

1. 새 "MoveForward" 스크립트를 생성하고 먹이 오브젝트에 **연결**한 후 엽니다.
2. 새 ***public float speed*** 변수를 선언합니다.
3. ***Update()***에 ***transform.Translate(Vector3.forward * Time.deltaTime * speed);***를 추가한 후 **저장**합니다.
4. **인스펙터**에서 발사체의 **speed** 변수를 설정한 후 테스트합니다.

[Image: image]단계를 완료로 표시

## 2. 발사체를 프리팹으로 만들기

Q&A (0)

> *발사체가 원하는 동작을 갖추었으므로, 이제 언제 어디서든 재사용할 수 있도록 모든 동작이 포함된 발사체를 프리팹으로 만들어야 합니다.*

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

1. 새 "Prefabs" 폴더를 생성하고 먹이를 여기에 드래그한 다음, **Original Prefab**을 선택합니다.
2. PlayerController.cs에서 새 ***public GameObject projectilePrefab;*** 변수를 선언합니다.
3. 계층 구조에서 Player를 **선택**한 후 Prefabs 폴더의 오브젝트를 인스펙터 내 새로운 **Projectile Prefab 상자**로 **드래그**합니다.
4. 런타임에 발사체를 씬으로 **드래그**해 발사체가 날아가는지 확인합니다.

단계를 완료로 표시

## 3. 스페이스바 입력 테스트

Q&A (0)

> *발사체 프리팹을 PlayerController.cs로 할당했으므로, 이제 플레이어가 스페이스바를 사용해 발사할 수 있어야 합니다.*

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

1. PlayerController.cs의 ***Update()***에서 스페이스바 입력을 검사하는 **if 문**을 추가합니다.
***if (Input.GetKeyDown(KeyCode.Space)) {***
2. if 문 안에 설명을 위한 주석을 추가합니다. 예: ***// 플레이어가 발사체 발사***

[Image: image]단계를 완료로 표시

## 4. 스페이스바를 눌러 발사체 발사

Q&A (0)

> *플레이어가 스페이스바를 누르는지 테스트하는 코드를 생성했지만, 실제로는 그러한 동작이 발생할 때 발사체를 생성해야 합니다.*

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

1. if 문 안에 프리팹의 회전을 사용해 플레이어의 위치에서 발사체를 생성하는   **Instantiate** 메서드를 사용합니다.

[Image: image]단계를 완료로 표시

## 5. 동물을 프리팹으로 만들기

Q&A (0)

> *이제 발사체를 프리팹으로 만들었습니다. 하지만 동물은 어떻게 해야 할까요? 게임 중에 인스턴스화될 수 있도록 동물도 프리팹으로 만들어야 합니다.*

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

1. Y축을 기준으로 모든 동물을 **180도** **회전**하여 아래를 향하게 합니다.
2. 계층 구조에서 3마리 동물을 모두 **선택**하고 *Add Component > **Move Forward***를 수행합니다.
3. **speed 값**을 편집하고 **테스트**하여 어떻게 보이는지 확인합니다.
4. "Original Prefab"을 선택하여 3마리 동물을 모두 **Prefabs 폴더**로 드래그합니다.
5. 게임플레이 중에 씬 뷰로 프리팹을 드래그하여 **테스트**합니다.

단계를 완료로 표시

## 6. 화면을 벗어난 발사체 제거

Q&A (0)

> *발사체는 생성될 때마다 플레이 영역을 벗어나 무한히 움직입니다. 게임 성능을 향상하려면 경계를 벗어난 발사체를 제거해야 합니다.*

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

1. "DestroyOutOfBounds" 스크립트를 생성하고 **발사체**에 적용합니다.
2. 새 ***private float topBound***변수를 추가하고 ***= 30;***으로 초기화합니다.
3. 위쪽 경계를 벗어나면 파괴하는 코드를 작성합니다. ***if (transform.position.z > topBound) {***
***Destroy(gameObject); }***
4. 인스펙터의 **Overrides** 드롭다운에서 **Apply all**을 클릭하여 프리팹에 적용합니다.

[Image: image]단계를 완료로 표시

## 7. 화면을 벗어난 동물 제거

Q&A (0)

> *경계를 벗어나는 발사체를 파괴하는 것처럼 동물에도 같은 설정을 적용해야 합니다. 생명체가 Unity 에디터의 끝없는 심연에서 헤매게 되면 곤란하니까요.*

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

1. 오브젝트가 *lowerBound* 아래에 있는지 검사하는 **else-if 문**을 생성합니다.
***else if (transform.position.z > topBound)***
2. 스크립트를 모든 동물에 **적용**한 후 프리팹을 **오버라이드**합니다.

[Image: image]단계를 완료로 표시

## 8. 수업 요약

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

- 플레이어가 스페이스바를 눌러 발사체 프리팹을 발사할 수 있습니다.
- 발사체와 동물이 화면을 벗어나면 씬에서 삭제됩니다.

새로운 개념 및 기술

- 프리팹 생성
- 프리팹 오버라이드
- 키 입력 테스트
- 오브젝트 인스턴스화
- 오브젝트 파괴
- else-if 문

다음 수업

- 모든 동물 프리팹을 씬에 배치하는 대신, 평원을 떠도는 동물 무리를 만들어 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
