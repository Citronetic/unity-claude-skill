[Image: image]

# 4.2강 - 플레이어 따라가기

Tutorial

Beginner

+10XP

60 mins

2

(150)

Unity Technologies

[Image: 4.2강 - 플레이어 따라가기]SummarySkills

**개요:**

플레이어는 마음껏 굴러다닐 수 있지만, 아직 어떤 목적도 없습니다. 이 수업에서는 플레이어를 쫓아다니는 적을 추가하여 게임에 목적을 부여해 보겠습니다. 가장 먼저 적에게 원하는 텍스처를 적용하고 플레이어를 절벽 아래로 떨어뜨릴 수 있도록 튕겨내는 능력을 추가합니다. 그리고 적이 섬 전체에서 플레이어를 추적하고 무작위 위치에서 생성되도록 합니다.

**프로젝트 결과:**

게임 시작 시 텍스처가 적용된 구체 형태의 적이 커스텀 함수로 결정된 섬 내부의 무작위 위치에서 생성됩니다. 적이 섬을 돌아다니며 플레이어를 추적하고 플레이어와 근접하면 섬 밖으로 플레이어를 튕겨냅니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 적과 물리 머티리얼 추가

Q&A (0)

> *이제 카메라가 원활하게 회전하고 플레이어도 매끄럽게 이동합니다. 이번에는 적을 설정하고 플레이어를 멀리 튕겨내도록 적에게 몇 가지 특별한 새 물리를 적용하겠습니다.*

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

1. 새 **Sphere**를 생성하고 이름을 Enemy로 변경하고 위치를 조정한 후 **텍스처**를 그 위에 드래그합니다.
2. 새 **Rigidbody** 컴포넌트를 추가하고 XYZ **스케일**을 조정한 다음, 테스트합니다.
3. 새 Physics Materials****폴더에서, *Create > Physics Material*로 이동한 후 이름을 Bouncy로 설정합니다.
4. **Bounciness** 값을 1로 설정하고, **Bounce Combine**을 Multiply로 변경한 다음,  플레이어와 적에게 적용하고 **테스트**합니다.

단계를 완료로 표시

## 2. 플레이어를 따라가는 적 스크립트 생성

Q&A (0)

> *이제 적은 플레이어를 튕겨낼 수 있지만, 플레이어가 적에게 근접해야만 플레이어를 튕겨낼 수 있습니다. 적이 섬 안에서 플레이어의 위치를 따라 추적하게 만들어야 합니다.*

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

1. 새 Enemy 스크립트를 만들고 **Enemy**에 연결합니다.
2. 3개의 새 변수(  ***Rigidbody enemyRb;***, ***GameObject player;***, ***public float speed;***)를 선언합니다.
3. ***enemyRb = GetComponent<Rigidbody>();***  와  ***player = GameObject.Find("Player");***를 초기화합니다.
4. ***Update()***에서 Player와 Enemy 사이의 방향으로 AddForce를 호출합니다.

[Image: image]단계를 완료로 표시

## 3. lookDirection 변수 생성

Q&A (0)

> *적이 이제 플레이어를 향해 굴러 가지만, 코드가 약간 복잡합니다. 새 벡터에 대한 변수를 추가하여 코드를 정리해 보겠습니다.*

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

1. ***Update()***에서 새 ***Vector3 lookDirection*** 변수를 선언합니다.
2. ***Vector3 lookDirection = (player.transform.position - transform.position).normalized;***로 설정합니다.
3. ***AddForce*** 호출에서 ***lookDirection*** 변수를 구현합니다.

[Image: image]단계를 완료로 표시

## 4. 적의 생성 관리자 만들기

Q&A (0)

> *이제 적이 원하는 대로 정확하게 움직이므로, 적을 프리팹으로 전환하고 생성 관리자로 인스턴스화해 보겠습니다.*

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

1. **Enemy**를 Prefabs 폴더로 드래그하여 새 **프리팹**을 만들고, 씬에서 **Enemy**를 삭제합니다.
2. 새 Spawn Manager **오브젝트**를 만들고 새 SpawnManager **스크립트**를 연결한 다음 엽니다.
3. 새 ***public GameObject enemyPrefab***변수를 선언한 다음 **인스펙터**에서 프리팹을 할당합니다.
4. ***Start()***에서 미리 정한 위치에 새 ***enemyPrefab***을 인스턴스화합니다.

[Image: image]단계를 완료로 표시

## 5. 생성 위치를 무작위로 만들기

Q&A (0)

> *게임을 시작하면 적이 생성되지만, 지금은 항상 같은 위치에 생성됩니다. 이제는 익숙해진 Random 클래스를 사용하여 무작위 위치에서 적을 생성할 수 있습니다.*

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

1. SpawnManager.cs의 ***Start()***에서 **무작위로 생성된** 새 X와 Z를 만듭니다.
2. 생성한 임의의 X 및 Z 위치를 사용하여 새 ***Vector3 spawnPos*** 변수를 만듭니다.
3. 새 ***spawnPos*** 변수를 ***Instantiate*** 호출에 통합합니다.
4. 하드 코딩된 **값**을 ***spawnRange*** 변수로 변경합니다.
5. 프로젝트를 **시작** 및 **재시작**하여 제대로 작동하는지 확인합니다.

[Image: image]단계를 완료로 표시

## 6. 생성 지점을 반환하는 메서드 작성

Q&A (0)

> *생성 위치를 무작위로 만드는 데 사용되는 코드를 완벽하게 작성했으며, 앞으로 이 코드를 많이 사용할 것입니다. 스크립트를 정리하고 나중에 이 코드를 다시 사용하려면 커스텀 함수에 코드를 저장해야 합니다.*

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

1. 새로운 ***Vector3 GenerateSpawnPosition() { }*** 함수를 생성합니다.
2. ***spawnPosX***와 ***spawnPosZ***변수를 새 메서드에 복사하여 붙여 넣습니다.
3. 새 메서드에 ***randomPos;***를 반환하는 코드를 추가합니다.
4. **Instantiate 호출**의 코드를 새 함수 이름인 ***GenerateSpawnPosition()***으로 변경합니다.

[Image: image]단계를 완료로 표시

## 7. 수업 요약

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

새로운 기능:

- 섬에서 무작위 위치에 적 생성
- 플레이어를 따라가는 적
- 서로 튕겨내는 구체

새로운 개념 및 기술**:**

- 물리 머티리얼
- 3D 공간에서 벡터 정의
- 값 정규화
- 반환 값이 있는 메서드

다음 수업**:**

- 다음 수업에서는 파워업을 사용하여 플레이어가 적에 맞서 싸울 수 있는 방법을 만들어 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
