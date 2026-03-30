[Image: image]

# 변수 소개

Tutorial

Beginner

+10XP

10 mins

0

(21)

Unity Technologies

[Image: 변수 소개]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- 변수란 무엇이며 왜 유용한지 알아봅니다.
- 스크립트 내 변수를 식별합니다.
- 변수에 할당된 값을 식별합니다.
- 스크립트에서 명령어를 읽는 연습을 해 봅니다.

이 튜토리얼을 마치면 사용할 변수를 직접 생성할 수 있습니다.

Languages available:

한국어English日本語한국어简体中文한국어

## 1. 크리에이터 키트: 코딩의 기초 스크립트를 이용하여 작업

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

이 튜토리얼에서는 **SpawnerSample** 스크립트에서 특정 명령어를 식별합니다.

주의:

- 스크립트의 모든 내용을 바로 이해할 수는 없을 것입니다.
- 파일에서 정보를 찾는 데 약간의 시간이 소요될 수 있습니다.

이는 매우 자연스러운 현상입니다. 이 크리에이터 키트에서는 게임 관련 스크립트의 모든 내용을 이해하는 방법보다는, 익숙하지 않은 스크립트에 접근하여 주요 요소를 식별하는 방법을 배웁니다.

단계를 완료로 표시

## 2. 스크립트에서 명령어 찾기

Q&A (0)

코드 에디터에서 스크립트의 **10번째 줄**을 찾아보면 다음과 같습니다.

```csharp
int angle = 15;
```

위에 보이는 것이 프로그래밍의 기본 구성 요소인**명령어**입니다. 명령어는 컴퓨터에 부여하는 하나의 작업입니다.

명령어는 세미콜론(**;**)으로 끝납니다. 세미콜론은 명령어가 작성되었으니 컴퓨터가 명령을 수행해야 한다고 컴파일러에게 알려 주는 역할을 합니다. 컴파일러는 줄이 바뀌는 부분이 아닌 세미콜론으로 명령어가 끝났음을 인식합니다. 그러나 사람도 C# 코드를 읽을 수 있어야 하므로 가독성을 높이기 위해 명령어를 각자 다른 줄에 작성하는 것이 좋습니다.

다음 단계로 진행하기 전에 생각해 보세요.

- 게임에서 이 스크립트의 목적
- 'angle'이라는 단어

이 명령어가 컴퓨터에 지시하는 작업은 무엇일까요?

단계를 완료로 표시

## 3. 변수 소개

Q&A (0)

****int angle = 15;**   명령어는 변수를 선언하고 할당합니다.

변수는****값을 저장하는 컨테이너입니다. 나무 상자에 이름을 붙여 두고 그 안에 정보를 저장했다가 나중에 찾아서 사용한다는 방식으로 이해할 수 있습니다. 이름에서 알 수 있듯이 변수에 저장된 정보는 변경될 수 있습니다.

변수를 사용하려면 먼저 이름과 유형을 지정하여 선언해야 합니다. 변수에는 초기값을 할당할 수도 있습니다.

아래 이미지에서는 gems라는 변수(나무 상자)에 2라는 값이 할당되었습니다.

[Image: image]단계를 완료로 표시

## 4. 변수의 유형 및 이름 식별

Q&A (0)

변수를 선언하거나 생성하는 경우 식별해야 할 두 가지가 있습니다.

**1.**  저장할 정보의 **유형**은 컴퓨터에 정보 저장을 위해 사용되는 메모리 공간을 알려 줍니다. 모든 변수에는 유형이 필요합니다.

이 변수는 **int**라는 변수로 정수(범자연수)를****저장합니다.

**2.**  변수의 **이름**은 컴퓨터가 변수의 값을 검색할 때마다 사용됩니다.

이 변수의 이름은 **angle**입니다.

단계를 완료로 표시

## 5.  변수에 할당된 값 식별

Q&A (0)

등호(**=**)를 사용하여 변수에 값을 할당할 수 있습니다. 즉, 등호 오른쪽에 있는 값을 왼쪽에 있는 변수에 복사하는 것입니다.

**int angle = 15;** 명령어는 컴퓨터가 angle이라는 변수에 정수 값 15를****저장하도록 명령합니다.

코드에서 **angle** 변수를 사용할 때마다 컴퓨터는 여기에 저장된 정수 값을 대신 사용합니다.

단계를 완료로 표시

## 6. 변수에 새 값이 할당된 위치 식별

Q&A (0)

SpawnerSample 스크립트에서 int 변수 **angle**에 다른 값이 할당되는 코드 **두** 줄이 이어지는 부분을 찾아 보세요.

코드마다 변수에 처음으로 값이 할당된 때와 달라진 점은 무엇인지 알아보세요.

단계를 완료로 표시

## 7. 2개의 명령어 검토

Q&A (0)

SpawnerSample 스크립트의 **17**번째 줄과 **22**번째 줄에서는 angle 변수에 서로 다른 값이 할당됩니다.

**angle**에 처음으로 값을 할당했던 때와는 달리, 코드에 유형은 포함되지 않았습니다. 이는 컴퓨터가 이미 변수를 인식하고 있고 필요한 메모리 공간을 알고 있기 때문입니다.

스크립트의 명령어는 순서에 따라 한 번에 하나씩 처리되기 때문에, 변경된 값은 변수에 할당된 후에만 명령어에서 사용됩니다.

아래 이미지에서는 위에서 본 gems라는 변수에 이제 4라는 값이 할당되었습니다.

[Image: image]단계를 완료로 표시

## 8. 튜토리얼 요약

Q&A (0)

이 튜토리얼에서 학습한 내용은 다음과 같습니다.

- 스크립트는 명령어로 구성되어 있습니다.
- 변수는 코드에서 값을 저장하는 컨테이너입니다.
- 변수를 선언하고 할당하는 방법을 알아봤습니다.
- 컴퓨터는 명령을 순서에 따라 실행하기 때문에 동일한 스크립트 내에서 하나의 변수에 서로 다른 값이 할당될 수 있습니다.

다음 튜토리얼에서는 여기에서 배운 내용을 응용해 새 변수를 선언하고 할당하는 명령어를 작성해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
