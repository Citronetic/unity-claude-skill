[Image: image]

# 6.1강 - 프로젝트 최적화

Tutorial

Beginner

+10XP

30 mins

5

(84)

Unity Technologies

[Image: 6.1강 - 프로젝트 최적화]SummarySkills

**개요:**

이 수업에서는 프로젝트를 최적화하고 성능을 더 높이는 다양한 기법을 배웁니다. 이러한 소규모 프로토타입 프로젝트에서는 큰 차이점을 확인하지 못할 수도 있지만, 큰 프로젝트를 익스포트하는 경우에는 성능 향상이 매우 중요하며 특히 모바일이나 웹 환경에서는 더욱 그렇습니다.

**프로젝트 결과:**

여러 프로토타입 프로젝트의 최적화를 개선하며, 이는 개인 프로젝트에서 구현할 샘플이 됩니다.

Resources

- [Object Pooling.zip](https://unity-connect-prd.storage.googleapis.com/20200422/b9f723f1-2e90-4b7a-872b-379160bf81d0/Object%20Pooling.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949733305)

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 변수 속성

Q&A (0)

> *이 교육 과정에서는 public 또는 private 변수만 사용했지만, 그 외에도 다양한 변수 속성을 숙지해야 합니다.*

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

1. **Prototype 1** 프로젝트를 열고 **PlayerController.cs** 스크립트를 엽니다.
2. private 속성을 사용하는 줄 맨 앞에 [SerializeField]를 추가한 다음 인스펙터에서 값을 수정합니다.
3. **FollowPlayer.cs**에서 **[SerializeField]**속성을 Vector3 **offset** 변수에 추가합니다.
4. **readonly**, **const** 또는 **static** 속성을 적용하여 인스펙터에서 변수가 제거되는지 확인합니다.

[Image: image]단계를 완료로 표시

## 2. Unity 이벤트 함수

Q&A (0)

> *이 교육 과정에서는 기본 Update() 및 Start() 이벤트 함수만 사용했지만, 다양한 상황에서 사용할 수 있는 다른 함수들도 많습니다.*

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

1. Main Camera를 **복제**하고 이름을 Secondary Camera로 변경한 후 Main Camera를 **비활성화**합니다.
2. Secondary Camera의 위치를 1인칭 시점으로 **다시 지정**한 후 해당 위치에 맞게 **offset 변수**를 편집합니다.
3. 프로젝트를 실행하고 얼마나 끊기는지 확인합니다.
4. **PlayerController**.cs에서 Update를 FixedUpdate로 변경하고, **FollowPlayer**.cs에서 Update를 LateUpdate로 변경한 후 **다시 테스트**합니다.
5. 두 스크립트에서 Start() 함수를 **삭제**한 후 Main Camera를 다시 활성화합니다.

[Image: image]단계를 완료로 표시

## 3. 오브젝트 풀링

Q&A (0)

> *이 교육 과정에서는 게임플레이 중에 오브젝트를 인스턴스화하고 파괴하는 프로토타입을 주로 제작했지만, 실제로는 성능이 더 뛰어나고 효율적인 오브젝트 풀링 방법이 있습니다.*

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

1. **Prototype 2**를 열고 백업을 생성합니다.

1. 프로젝트에서 **DetectCollisions**, **PlayerController** 및 **DestroyOutOfBounds**스크립트를 삭제합니다.
2. **Object Pooling**Unity 패키지를 **다운로드**하고 씬으로 **임포트**합니다.
3. **PlayerController** 스크립트를 플레이어에 다시 연결합니다. **DestroyOutOfBounds**스크립트를 동물 및 먹이 프리팹에 다시 연결한 후 **DetectCollisions** 스크립트를 동물 프리팹에 다시 연결합니다(먹이 프리팹은 ***제외***).
4. **ObjectPooler**스크립트를 Spawn Manager에 연결하고, 먹이 발사체를 **Objects To Pool** 변수로 드래그하고, **Amount To Pool**을 20으로 설정합니다.
5. 프로젝트를 **실행**한 다음 발사체가 활성화되거나 비활성화되는 모습을 확인합니다.

단계를 완료로 표시

## 4. 수업 요약

Q&A (0)

**새로운 개념 및 기술**

- 최적화
- 직렬화된 필드
- readonly / const / static / protected
- 이벤트 함수
- FixedUpdate(), Update(), LateUpdate() 비교
- Awake()와 Start() 비교
- 오브젝트 풀링

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
