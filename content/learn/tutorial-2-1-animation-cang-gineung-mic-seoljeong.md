[Image: image]

# 2.1 Animation 창: 기능 및 설정

Tutorial

Beginner

+10XP

45 mins

0

(20)

Unity Technologies

[Image: 2.1 Animation 창: 기능 및 설정]Summary

이 튜토리얼에서는 Animation 창의 주요 기능과 설정을 컨텍스트와 함께 살펴봅니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

[**1.2: 애니메이션 시스템 핵심 개념: 애니메이션 데이터**](https://learn.unity.com/tutorial/lesson-1-2-animation-systems-core-concepts-animation-data?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5eba9fffedbc2a0020b332d7)에서 애니메이션 데이터가 바인딩과 값으로 어떻게 이루어지는지 살펴보았습니다.

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- Animation 창에서 바인딩과 값이 어떻게 표현되는지에 대한 이해도를 높입니다.
- Animation 창에서 애니메이션 클립 보기와 관련된 기본을 살펴봅니다.

단계를 완료로 표시

## 2. 시작하기 전에

Q&A (0)

이 튜토리얼은 '3D 애니메이션 시스템 소개' 교육 과정의 Unity 프로젝트를 활용합니다. 프로젝트를 아직 다운로드하지 않았다면 [**다운로드**](https://learn.unity.com/tutorial/1-1-welcome-to-the-course#5f3e641cedbc2a002175fe66) 후 계속 진행하세요.

프로젝트를 다운로드한 후에 다음 단계를 따릅니다.

**1.** Unity 에디터에서 프로젝트를 엽니다.

**2.**프로젝트 창에서 **Assets** > **2.1 Animation Window Features and Settings**로 이동합니다.

이 튜토리얼에 필요한 모든 에셋이 이 폴더에 있습니다.

단계를 완료로 표시

## 3. 복습: 애니메이션 클립의 데이터

Q&A (0)

애니메이션 클립에 저장된 애니메이션 데이터는 바인딩과 값으로 이루어집니다.

이 튜토리얼을 시작하기 전에 이 데이터에 대한 주요 내용을 아래와 같이 정리해 보겠습니다.

- 바인딩은 게임 오브젝트 또는 컴포넌트의 필드 중 애니메이션을 재생하는 동안 변경되어야 하는 필드를 나타냅니다.
- 값은 특정 시점에 해당 필드가 변경되어야 하는 값을 나타냅니다. 일반적으로 이 값은 시간이 지나면 바뀌는 플로트(소수 값)이며 커브로 표시됩니다.
- Animation 창(Animator 창과 다름)에 애니메이션 클립과 연계된 바인딩과 값이 표시됩니다.
- Animation 창을 사용하여 애니메이션 클립의 바인딩과 값을 모두 편집할 수 있습니다.

단계를 완료로 표시

## 4. 예시 애니메이션 검토

Q&A (0)

먼저 [**핵심 개념 튜토리얼**](https://learn.unity.com/project/course-overview-and-core-concepts?uv=2019.4&courseId=5eba874aedbc2a00219550ff)에서 다룬 원과 정사각형의 예와는 조금 다른 예시 애니메이션을 살펴보겠습니다.

이 튜토리얼에서는 가로등 애니메이션을 살펴봅니다.

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

이 애니메이션을 여는 방법은 다음과 같습니다.

**1.** 프로젝트 창에서 **Assets** > **2.1 - Animation Window Features and Settings**> **Scenes**로 이동하고 **StreetLampExample** 씬을 더블 클릭해 엽니다.

**2.  플레이** 버튼을 눌러 플레이 모드를 시작하고 애니메이션이 작동하는지 확인합니다. 가로등의 불빛이 깜박거릴 것입니다.

**3.** **플레이** 버튼을 다시 눌러 플레이 모드를 종료합니다.

**4.**프로젝트 창에서 **2.1 - Animation Window Features and Settings**> **AnimationClips**로 이동하고 **LightFlicker** 애니메이션 클립을 더블 클릭하여 Animation 창에서 엽니다.

이 애니메이션 클립에는 **Light**컴포넌트의 **Intensity** 필드를 변경하는 바인딩-값이 한 쌍 있습니다.

**5.**  Animation 창 이 Curves 모드로 설정되어 있어야 값을 편집할 때 변경된 내용을 더 명확하게 확인할 수 있습니다.

[Image: image]단계를 완료로 표시

## 5. 임포트한 애니메이션 클립 편집

Q&A (0)

StreetLamp 애니메이션의 애니메이션 클립은 Unity에서 곧바로 생성되었지만, 다른 소프트웨어에서 생성된 애니메이션 클립이 포함된 모델을 임포트할 수도 있습니다. 모델의 일부로 임포트된 애니메이션 클립은 읽기 전용이며 편집할 수 없습니다.

모델의 일부로 임포트된 애니메이션 클립을 편집하려면 애니메이션 클립 에셋을 복제하고, 이렇게 생성된 새로운 애니메이션 클립을 편집할 수 있습니다. 애니메이션 클립의 복사본은 모델과 연계되지 않으므로 모델의 임포트 설정이 변경되더라도 그대로 유지됩니다.

다음과 같이 임포트한 HumanoidCrouch 모델의 애니메이션 클립을 복제하고 편집해 보겠습니다.

**1.**프로젝트 창에서 **Assets**>**2.1 - Animation Window Features and Settings**> **AnimationClips** 폴더로 이동하고 **HumanoidCrouch** 모델을 선택합니다.

**2. HumanoidCrouch** 모델 아이콘 왼쪽에 있는 폴드아웃 화살표를 클릭해 하위 에셋을 표시합니다. 모델 아래에 여러 개의 애니메이션 클립이 중첩되어 있습니다.

[Image: image]

**3.**Animation 창에서 보려는 애니메이션 클립 중 하나를 선택합니다.

[Image: image]

**4.  Ctrl**+**D**(Windows) 또는 **Cmd**+**D**(MacOS)를 눌러 애니메이션 클립을 복제합니다.

이제 새로운 애니메이션 클립에서 프로퍼티를 편집할 수 있지만, 이 애니메이션 클립은 더이상 HumanoidCrouch 모델과 연계되지 않습니다.

#### 임포트한 읽기 전용 애니메이션 클립 표시

Unity에서는 읽기 전용 프로퍼티를 숨길 수 있습니다. 이러한 프로퍼티를 숨기거나 표시하는 방법은 다음과 같습니다.

**1.**Animation 창에서 타임라인 옆에 있는 컨텍스트 메뉴를 선택합니다(인접한 컨텍스트 메뉴 두 개 중 아래쪽 메뉴).

[Image: image]

**2.  Show Read-only Properties**를 활성화하거나 비활성화하여 읽기 전용 프로퍼티를 표시하거나 숨깁니다.

단계를 완료로 표시

## 6. 애니메이션 클립 컨텍스트

Q&A (0)

Animation 창에서 애니메이션 클립을 볼 수 있는 방법은 두 가지로, 에셋으로 보거나 컨텍스트와 함께 보는 것입니다. 선택하는 방법에 따라 애니메이션 클립을 편집하는 방법이 달라집니다.

#### 애니메이션 클립을 에셋으로 보기

애니메이션 클립을 에셋으로 보면 Animation 창에 애니메이션 클립을 플레이하는 데 사용할 게임 오브젝트의 컨텍스트가 전혀 표시되지 않습니다. 따라서 Unity에서 어떤 필드를 추가할 수 있는지 인지하지 못하기 때문에, 애니메이션 클립에 애니메이션 커브를 더 추가할 수 없습니다.

애니메이션 클립을 에셋으로 보는 방법은 다음과 같습니다.

- 프로젝트 창에서 애니메이션 클립을 선택해 엽니다.

#### 컨텍스트와 함께 애니메이션 클립 보기

게임 오브젝트 계층 구조를 통해 애니메이션 클립을 볼 경우 Animation 창에 컨텍스트가 표시됩니다. 따라서 애니메이션 커브를 더 추가할 수 있습니다.

컨텍스트와 함께 애니메이션 클립을 보는 방법은 다음과 같습니다.

- 계층 구조에서 애니메이션 클립이 포함된 Animator 컨트롤러가 있는 게임 오브젝트를 선택합니다. Animation 창에서 Animator 컨트롤러가 참조하는 클립을 사용할 수 있으며, 컨텍스트가 필요한 설정도 조정할 수 있습니다.

이처럼 컨텍스트와 함께 보는 방법은 다른 면으로도 Animation 창의 기능에 영향을 줍니다. 예를 들어, 컨텍스트 없이는 애니메이션 클립을 미리 볼 수 없습니다.

Animation 창의 여러 기능과 설정, 툴을 살펴보다 보면 컨텍스트가 각 요소에 영향을 주는지, 그리고 어떤 영향을 주는지를 알 수 있습니다.

단계를 완료로 표시

## 7. 애니메이션 클립 컨텍스트: StreetLamp 예시

Q&A (0)

StreetLamp 예시를 사용해 Unity 에디터에서 컨텍스트의 개념을 알아보겠습니다.

LightFlicker를 에셋으로 보기

LightFlicker 애니메이션 클립을 에셋으로 보는 방법은 다음과 같습니다.

- 프로젝트 창에서 **Assets**> **2.1 - Animation Window Features and Settings**>**AnimationClips**로 이동하고 **LightFlicker** 애니메이션 클립을 선택해 Animation 창에서 엽니다.

**Add Property**버튼이 비활성화되어 있는데, 이 상태에서는 기존 애니메이션 커브를 편집할 수 없습니다. 게임 오브젝트의 컨텍스트 없이 애니메이션 클립을 보고 있기 때문에 발생하는 문제입니다.

[Image: image]

#### 컨텍스트와 함께 LightFlicker 보기

게임 오브젝트 컨텍스트와 함께 LightFlicker 애니메이션 클립을 보는 방법은 다음과 같습니다.

- 계층 구조에서 **StreetLamp** 게임 오브젝트를 선택합니다. LightFlicker 애니메이션 클립이 Animation 창에 표시됩니다.

애니메이션 클립을 편집하려는 경우 이제 게임 오브젝트의 프로퍼티에 접근할 수 있습니다. Animation 창에서 애니메이션 클립에 대한 컨텍스트를 감지했기 때문입니다. **Add Property** 버튼이 이제 활성화됩니다.

[Image: image]

애니메이션 클립 편집에 대한 더 자세한 내용은 [**다음 튜토리얼**](https://learn.unity.com/tutorial/2-2-editing-animation-clips?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69)에서 다루겠습니다.

단계를 완료로 표시

## 8. Animation 창 모드 알아보기

Q&A (0)

앞서 Animation 창에서 애니메이션 클립을 열고 편집하는 방법을 배웠으므로, 이제 Animation 창의 몇몇 기능에 대해 좀 더 자세히 알아보겠습니다.

#### Animation 창 개요

애니메이션 클립은 값과 바인딩으로 구성됩니다. Animation 창은 애니메이션 클립의 이러한 요소를 기준으로 두 개의 주요 영역으로 나뉩니다. 바인딩은 왼쪽, 값은 오른쪽입니다.

[Image: image]

#### 키프레임

애니메이션 클립의 바인딩마다 해당 값을 구성하는 키프레임 컬렉션이 있습니다. 키프레임은 특정 시점의 애니메이션 커브 값은 물론, 중간의 값을 보간하는 방법에 대한 정보를 포함하고 있습니다.

#### Dopesheet 및 Curves 모드

애니메이션 클립의 값은 Animation 창에서 Dopesheet 모드와 Curves 모드로 볼 수 있습니다.

Dopesheet 모드는 키프레임만 표시되는 간략한 뷰입니다. 이 뷰는 키프레임이 어떻게 배치되어 있는지 확인하거나 키프레임이 플로트 값이 아닌 오브젝트 레퍼런스를 표시하도록 할 때 유용합니다. 키프레임마다 서로 다른 스프라이트로 교체되는 2D 애니메이션의 경우에 흔히 사용됩니다.

Curves 모드에는 모든 바인딩 혹은 선택한 바인딩에 대한 키프레임 값과 보간이 표시됩니다.

이 교육 과정은 Unity 3D 애니메이션 시스템을 중점적으로 다루지만, 많은 내용이 Unity 2D 애니메이션에도 적용됩니다. 그러나 스프라이트 애니메이션에 사용되는 오브젝트 레퍼런스 커브에 대해서는 다루지 않습니다.

#### 모드 변경

지금까지 이 튜토리얼은 Curves 모드에서 애니메이션 클립을 보는 방법을 설명했습니다. 다음과 같이 Animation 창을 Dopesheet 모드로 바꿔 보겠습니다.

**1.** Animation 창 왼쪽 하단에서 **Dopesheet** 탭을 선택해 Dopesheet 모드로 변경합니다.

[Image: image]

이 모드는 Curves 모드에 비해 매우 간결하고, 이 튜토리얼에서 필요한 애니메이션에 대한 세부 정보가 전혀 나와 있지 않습니다.

**2. Curves** 탭을 선택하여 Curves 모드로 돌아갑니다.

#### 속도 변경

Dopesheet와 Curves, 두 모드에서 모두 Animation 창 상단에는 항상 타임라인이 표시되며, **초:프레임 형식**으로 시간을 보여 줍니다. 예를 들어, 1:15는 애니메이션 클립 시작부터 15프레임, 1초가 지났다는 뜻입니다.

초당 프레임 수를 변경해 애니메이션의 속도를 변경할 수 있습니다. 방법은 다음과 같습니다.

**1.**타임라인 옆의 컨텍스트 메뉴에서**Frames**를 선택합니다.

[Image: image]

**2.**동일한 컨텍스트 메뉴를 다시 열고 **Show Sample Rate**를 선택합니다.

**3.**Animation 창에서 프레임의 개수를 수동으로 설정할 수 있습니다.

[Image: image]

또는 컨텍스트 메뉴에서 **Set Sample Rate**를 선택하고 제공되는 옵션 중 하나를 선택해 속도를 변경할 수 있습니다.

단계를 완료로 표시

## 9. Animation 창 툴바 살펴보기

Q&A (0)

Animation 창 왼쪽의 바인딩 위를 보면 애니메이션 클립의 데이터를 보고 편집하는 데 사용할 수 있는 몇 개의 버튼과 설정이 있습니다.

[Image: image]

애니메이션 클립을 에셋으로 보는 경우에는 이 버튼 중 일부가 비활성화됩니다. 계층 구조에서 관련 게임 오브젝트를 선택해 컨텍스트와 함께 애니메이션 클립을 보고 이러한 툴을 모두 사용할 수 있습니다.

#### 프리뷰 모드

첫 번째 버튼은 **Preview** 버튼입니다. 프리뷰 모드에서는 미리 보고 있는 인스펙터의 타임라인과 모든 프로퍼티가 파란색으로 표시됩니다.

[Image: image]

이 모드를 일시적으로 활성화하면 애니메이션 클립의 값이 게임 오브젝트에 설정되므로 어떻게 표시되는지 미리 볼 수 있습니다. 즉, 애니메이션 클립을 에셋으로 보는 경우에는 설정을 사용할 수 없습니다.

커브 디스플레이 위의 타임라인을 클릭하고 드래그해서 프리뷰 모드를 시작할 수도 있습니다.

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

#### 레코딩 모드

Animation 창 툴바에 표시되는 다음 버튼은 **레코딩** 버튼입니다. 레코딩 모드에서는 미리 보고 있는 인스펙터의 타임라인과 모든 프로퍼티가 빨간색으로 표시됩니다.

[Image: image]

프리뷰 모드와 유사하게 레코딩 모드를 활성화하면 애니메이션 클립의 값이 일시적으로 게임 오브젝트에 설정됩니다. 프리뷰 모드와의 가장 큰 차이는 이 모드가 활성화된 상태에서 프로퍼티를 변경하면 그 변경 내용이 애니메이션 클립에 기록된다는 것입니다.

이 모드에서 변경하고 저장할 수 있는 내용은 다음과 같습니다.

- 애니메이션 클립에 새로운 바인딩 추가
- 애니메이션 커브에 키프레임 추가
- 키프레임 값 설정

따라서 게임 오브젝트의 프로퍼티를 변경할 수 있고 새로운 값, 바인딩, 키프레임이 모두 애니메이션 클립에 기록됩니다.

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

#### 타임라인 플레이헤드

**타임라인 플레이헤드**에는 타임라인에서 현재 미리 보고 있는 정확한 지점이 표시됩니다.

[Image: image]

다음으로 소개할 툴바의 5개 버튼은 타임라인 플레이헤드의 위치를 설정하는 데 사용됩니다.

#### **플레이** 버튼

애니메이션 클립을 컨텍스트와 함께 보는 경우에만 **플레이** 버튼을 사용할 수 있습니다. 이 버튼을 누르면 다음과 같은 결과가 발생합니다.

1. 프리뷰 모드가 활성화됩니다.
2. 애니메이션이 플레이헤드의 현재 시간부터 플레이됩니다.
3. 씬 뷰에서 애니메이션을 볼 수 있습니다.

#### **처음**, **이전**, **다음**, **마지막** 버튼

플레이 버튼 양쪽에 있는 버튼은 애니메이션 클립을 에셋으로 볼 때나 컨텍스트와 함께 볼 때 모두 사용할 수 있습니다. 이 버튼을 사용해 키프레임 사이에서 플레이헤드를 옮길 수 있는데, 각각 처음, 이전, 다음, 마지막 키프레임으로 옮길 수 있습니다.

[Image: image]

#### 현재 프레임

5개 버튼 오른쪽에는 숫자 필드가 있는데, 이 필드도 플레이헤드의 위치를 설정하는 데 사용할 수 있습니다. 숫자는 현재 프레임의 위치를 나타내며, 이 숫자를 변경하면 플레이헤드의 위치가 바뀝니다.

[Image: image]

애니메이션 클립을 컨텍스트와 함께 보는 경우, 플레이헤드 위치 버튼 중 하나를 선택하거나 숫자 필드를 변경하면 프리뷰 모드가 활성화됩니다.

단계를 완료로 표시

## 10. 애니메이션 클립 선택 또는 생성

Q&A (0)

여러 설정과 버튼이 포함된 Animation 창의 두 번째 줄에서 현재 보고 있는 애니메이션 클립의 이름을 확인할 수 있습니다.

[Image: image]

컨텍스트와 함께 애니메이션 클립을 볼 때 다른 애니메이션 클립을 선택하거나 새로 생성하는 방법은 다음과 같습니다.

**1.**Animation 창에서 애니메이션 클립 이름을 선택해 드롭다운 선택 메뉴를 엽니다.

**2.**Animator 컨트롤러에서 현재 사용하고 있는 애니메이션 클립 중 하나를 선택하거나 **Create New Animation Clip**을 선택해 새로운 애니메이션 클립을 생성합니다.

[Image: image]

새로운 애니메이션 클립을 생성하면 현재 사용 중인 Animator 컨트롤러에 자동으로 추가되고 현재 게임 오브젝트의 컨텍스트 내에 배치됩니다.

단계를 완료로 표시

## 11. 애니메이션 클립의 애니메이션 커브 필터링

Q&A (0)

통상적으로 애니메이션 클립이 복잡할수록 애니메이션 커브는 늘어날 수밖에 없습니다. 애니메이션 클립에 애니메이션 커브가 너무 많을 경우, 표시되는 애니메이션 커브를 필터링하면 도움이 됩니다.

선택한 게임 오브젝트와 연계된 애니메이션 커브만 표시되도록 필터링하는 방법은 다음과 같습니다.

**1.** 계층 구조에서 보려는 애니메이션 커브와 연계된 게임 오브젝트나 그 자식을 선택합니다.

**2.**Animation 창에서 애니메이션 클립 이름 오른쪽에 있는 **Filter by selection**을 클릭합니다.

[Image: image]

#### 예시

캐릭터 애니메이션에서 특히 손 애니메이션을 집중해서 살펴보려 할 때 이와 같은 필터링 기능을 사용할 수 있습니다. 손 트랜스폼과 연계된 애니메이션 커브만 보는 방법은 다음과 같습니다.

**1.**계층 구조에서 손에 해당하는 자식 게임 오브젝트를 선택합니다.

**2.**Animation 창에서 **Filter by selection**버튼을 클릭합니다.

단계를 완료로 표시

## 12. 키프레임 및 애니메이션 이벤트 추가

Q&A (0)

이 튜토리얼에서 마지막으로 살펴볼 버튼 두 개는 키프레임 추가 버튼과 애니메이션 이벤트 추가 버튼입니다.

[Image: image]

#### 키프레임 추가

**키프레임 추가** 버튼을 사용하면 플레이헤드의 현재 시간에 사용자가 선택한 모든 애니메이션 커브에 키프레임을 추가할 수 있습니다. 애니메이션 커브를 선택하지 않은 상태에서 **키프레임 추가**를 클릭하면, 선택한 게임 오브젝트와 연계된 모든 애니메이션 커브에 키프레임이 추가됩니다.

#### 이벤트 추가

**이벤트 추가** 버튼을 사용하면 새로운 애니메이션 이벤트를 추가할 수 있습니다. 애니메이션 클립을 에셋으로 보거나 컨텍스트와 함께 볼 때 모두 추가 가능하지만, 애니메이션 이벤트가 설정되는 방식이 달라집니다. [**2.7: 애니메이션 이벤트 생성 및 설정**](https://learn.unity.com/tutorial/2-7-creating-and-configuring-animation-events?uv=2019.4&courseId=5eba874aedbc2a00219550ff&projectId=5ebaa036edbc2a001f65dc69)에서 애니메이션 이벤트에 대해 더 자세히 알아보세요.

단계를 완료로 표시

## 13. 요약

Q&A (0)

이 튜토리얼에서 Animation 창의 여러 기능을 살펴보았습니다. 배운 내용은 아래와 같습니다.

- 임포트한 애니메이션 클립을 복제하고 편집하는 방법
- 애니메이션 클립을 에셋으로 보거나 컨텍스트와 함께 볼 때 Animation 창에서 사용할 수 있는 여러 가지 기능
- Dopesheet 모드와 Curves 모드의 차이

Animation 창의 각 버튼도 확인했습니다.

이 교육 과정을 계속 진행하다 보면 몇몇 기능에 대해 좀 더 자세히 다루겠지만, 이 개요를 참고하면 Animation 창을 보다 수월하게 사용할 수 있습니다. 이를 바탕으로 학습 프로젝트의 다른 튜토리얼을 계속 배워 나갈 수 있습니다.

이어지는 다음 튜토리얼에서는 Unity 에디터에서 애니메이션 클립을 생성하고 편집해 보겠습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
