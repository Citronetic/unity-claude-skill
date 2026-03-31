[Image: image]

# 제출 자료: 새 저장소에서 데이터 지속성 구현

Exercise

foundational

+60XP

30 mins

23

Unity Technologies

[Image: 제출 자료: 새 저장소에서 데이터 지속성 구현]SummarySkills

애플리케이션의 씬 간에, 그리고 세션 간에 데이터를 저장하는 방법을 알아보았으니, 이제 배운 기술을 새로운 프로젝트에 활용해 볼 차례입니다. 새로운 저장소를 설정하고 버전 관리를 사용할 수 있는 좋은 기회이기도 합니다.

Resources

- [Data-Persistence-Starter-Files.zip](https://unity-connect-prd.storage.googleapis.com/20210602/29d6df2f-7766-4564-be87-b1e22c49c5eb/Data-Persistence-Starter-Files.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035125682)

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 업데이트된 미션

Q&A (0)

여러분이 학습을 진행하거나 쉬는 사이에 미션이 업데이트되었을 수도 있으므로, 제출 자료를 작업하기 전에 다음 콘텐츠를 완료했는지 확인하시기 바랍니다.

- [버전 관리 설정](https://learn.unity.com/tutorial/set-up-version-control)
- [샘플 프로젝트 살펴보기](https://learn.unity.com/tutorial/explore-the-sample-project)
- [객체 지향 프로그래밍의 원칙](https://learn.unity.com/tutorial/principles-of-object-oriented-programming)
- [씬 플로 생성](https://learn.unity.com/tutorial/create-a-scene-flow)
- [씬 간 데이터 지속성 구현](https://learn.unity.com/tutorial/implement-data-persistence-between-scenes)
- [세션 간 데이터 지속성 구현](https://learn.unity.com/tutorial/implement-data-persistence-between-sessions)

단계를 완료로 표시

## 2. 개요

Q&A (0)

이전 튜토리얼에서는 예제 프로젝트를 활용해 [씬](https://learn.unity.com/tutorial/implement-data-persistence-between-scenes) 사이는 물론 [세션](https://learn.unity.com/tutorial/implement-data-persistence-between-sessions) 사이에도 데이터 지속성을 구현했습니다.

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

이 제출 자료 과제에서는 새로운 게임 프로젝트에 이 두 가지 기술을 모두 적용합니다. 또한 씬 간에 사용자의 이름을 저장하고 세션 간에 높은 점수를 저장합니다.

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

데이터 지속성 기술에 집중하기 위해 데이터 지속성이 구현되지 않은 간단한 벽돌깨기 방식의 게임이 제공됩니다. 간단한 게임을 처음부터 직접 만들어 봐도 좋습니다. 사용자 점수를 추적하고 표시할 수만 있으면 됩니다.

이 제출 자료에서 처리하게 될 작업은 다음과 같습니다.

- 새 저장소를 만듭니다.
- 최초 커밋을 수행합니다.
- 프로젝트를 버전 관리로 가져와 커밋을 수행합니다.
- 씬과 세션 간 데이터 지속성을 구현합니다.

단계를 완료로 표시

## 3. 새 저장소 만들기

Q&A (0)

프로젝트의 백업과 버전 관리를 처리할 새 저장소를 만들겠습니다. 이를 통해 추후에 동료 학습자와 코드를 더욱 간단하게 공유할 수도 있습니다.

**1.**[GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/creating-your-first-repository-using-github-desktop)을 통해 프로젝트에 새 저장소를 만듭니다. 이때 **Git Ignore** 드롭다운에서 **Unity**를 선택해야 합니다. 미리 만들어진 이 구성 파일은 저장소에서 불필요한 Unity 전용 파일을 자동으로 제외합니다. 저장소의 이름을 'Data-Persistence-Project' 등으로 지정합니다.

[Image: image]

**2.** 컴퓨터에서 방금 생성한 폴더를 찾습니다. 폴더에는 GitHub가 저장소로 인식할 수 있는 방식인 **.git 폴더**와 더불어 무시할 파일 및 파일 유형의 목록을 포함하는 **.gitignore** 파일이 포함되어 있어야 합니다. .git 폴더가 있으면 GitHub에서 디렉토리 내 모든 파일을 추적 대상으로 인식합니다. 사용자의 컴퓨터 설정에 따라 .git 파일이 보이지 않을 수도 있습니다.

[Image: image]

**참고:** GitHub.com에서 직접 저장소를 만든 후 이러한 저장소를 클로닝해도 되는데, 그러려면 [몇 가지 단계](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository)를 추가로 거쳐야 합니다. GitHub나 버전 관리가 무엇인지 잘 기억나지 않는다면 버전 관리 튜토리얼로 돌아가 다시 확인하세요.

단계를 완료로 표시

## 4. 프로젝트를 열어 최초 커밋 수행

Q&A (0)

저장소에 커밋하는 첫 번째 파일 세트는 **최초 커밋**에 해당합니다. 프로젝트를 처음 설정한 후에 처음으로 커밋하는 것이 보통이므로, 지금 바로 커밋을 수행해 보겠습니다.

**1.**[프로젝트 zip 폴더](https://connect-prd-cdn.unity.com/20210602/29d6df2f-7766-4564-be87-b1e22c49c5eb/Data-Persistence-Starter-Files.zip?_gl=1*tj35ph*_ga*NDI3MDM1NDEuMTU5MjI0OTM3NA)를 다운로드하여 압축을 푼 후 **Data-Persistence-Starter-Files**폴더를 엽니다. 여기에 포함되는 폴더는 다음과 같습니다.

- Assets
- Packages
- ProjectSettings

**2.  Ctrl+A**(Windows) 또는 **Cmd+A**(Mac)로 3개의 폴더를 모두 선택한 후 복사하여 숨겨진 .git 파일 바로 옆에 있는 저장소 폴더에 붙여 넣습니다. 이제 이 폴더를 Unity 프로젝트로 열 준비가 되었습니다.

[Image: image]

**3.  Unity Hub**에서 프로젝트를 실행하려면 **프로젝트**탭으로 이동하여 저장소 폴더를**추가**한 후 Unity 에디터에서 프로젝트를 엽니다.

이 프로젝트에는 Unity 2020.3 LTS가 필요합니다. 설치되어 있지 않은 경우에는 Unity Hub의 목록 아래에 올바른 버전을 설치하라는 프롬프트와 함께 경고 알림이 표시됩니다.

**4.**프로젝트 창에서 **Scenes** > **Main**을 연 후 **플레이** 버튼을 눌러 게임을 테스트합니다. 스페이스바를 눌러 공을 발사하고 왼쪽 및 오른쪽 화살표 키를 눌러 패들을 좌우로 움직입니다. 화면 상단에서 점수를 확인할 수 있지만, 최고 점수가 작동하지 않음을 확인할 수 있습니다.

[Image: image]

Github Desktop 창에서 다양한 새 파일이 **Changes**패널에 표시되고, 각 파일 옆에 표시되는 작은 녹색 플러스(+) 아이콘은 새 파일임을 나타냅니다.

[Image: image]

**5**.  저장소 관련 변경 사항이 나열된 섹션 아래의 **Summary** 필드에 'initial commit'을 입력한 다음 **Description** 필드에 설명(예: 'starter breakout game imported')을 입력합니다. 그런 다음 **Commit to main**을 선택하여 프로젝트의 기본 브랜치에 변경 사항을 저장합니다.

[Image: image]

**6.**Publish Repository를 선택한 후 **Keep this code private** 체크박스를 선택 해제합니다. 그러면 이 제출 자료에서 코드를 공유할 수 있습니다.

[Image: image]단계를 완료로 표시

## 5. 데이터 지속성 구현

Q&A (0)

이제 애플리케이션에서 데이터 지속성 구현 과제를 시작할 준비가 되었습니다. 이를 구현하는 데 필요한 주요 기능은 다음과 같습니다.

- **씬 간**에 데이터 저장: 하나의 씬의 데이터 세트가 저장되어 다른 씬에 사용됩니다.
- **세션 간**에 데이터 저장: 런타임 도중 데이터 세트가 저장되고 다음번에 애플리케이션을 실행할 때 사용됩니다.

[Image: image][Image: image]

애플리케이션에서 이러한 기능을 구현할 수 있는 방법에는 여러 가지가 있지만, 이 특정 과제에서는 다음과 같은 방법으로 구현하기를 권장합니다.

**플레이어 이름(씬 간에 데이터 저장)**

- 사용자 이름을 입력할 수 있는 텍스트 입력 필드가 표시되는 Start Menu 씬과 Start 버튼을 새로 만듭니다.
- 사용자가 Start 버튼을 클릭하면 메인 게임 씬이 로드되고 사용자가 입력한 이름이 점수 옆에 표시됩니다.

**최고 점수(세션 간 데이터 저장)**

- 플레이 중 현재 최고 점수와 그 점수를 기록한 플레이어의 이름이 화면에 표시됩니다.
- 최고 점수를 경신하면 새로운 점수와 플레이어 이름이 대신 표시됩니다.
- 최고 점수의 경우 플레이어가 애플리케이션을 종료했다가 다시 열어도 최고 점수와 플레이어 이름은 그대로 유지되도록 세션 간에 저장됩니다.

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

자신감이 붙었다면 부가적으로 데이터 지속성 기능도 추가해 볼 수 있습니다. 예를 들면 다음과 같습니다.

- 최고 점수를 표시하는 별도의 최고 점수 씬을 만듭니다.
- 최고 점수를 하나만 표시하지 않고 여러 개 표시합니다.
- 사용자가 게임플레이를 설정할 수 있는 설정 씬을 만들고 세션 간에 이러한 정보를 사용합니다.

단계를 완료로 표시

## 6. 프로젝트 제출

Q&A (0)

데이터 지속성을 구현하고 나면 프로젝트를 제출해서 공유해 주세요. 그 전에, 철저히 플레이 테스트를 진행했는지 확인해야 합니다. 친구나 가족에게 플레이 테스트를 부탁하면 더 좋습니다.완성된 제출 자료에 포함할 내용은 다음과 같습니다.

- 커밋 메시지와 함께 여러 커밋을 보여 주는 프로젝트의 GitHub 저장소 링크
- 씬 간 데이터 지속성
- 세션 간 데이터 지속성

프로젝트 스크린샷을 찍거나 프로젝트를 설명하는 화면을 녹화한 후 여기에 게시하여 작업물을 공유하시기 바랍니다. 한 명 이상의 다른 크리에이터 제출 자료에 댓글을 달 것을 적극 권장합니다. 다른 크리에이터들이 과제를 성공적으로 완료했나요? 해당 프로젝트의 어떤 점이 마음에 들며, 추가하면 좋을 새로운 기능에는 어떤 것이 있을까요?

#### 제출하려면 로그인하세요

로그인

## Complete this Tutorial

모든 단계를 완료로 표시

Submission Gallery

[[Image: Ranking Breakout]

Ranking Breakout

Classic Brick Breaker with a competitive twist!

Mmizurew00](https://learn.unity.com/submission/69c34948edbc2a04a7c12b4f)[[Image: 개고생한 지속성구현]

개고생한 지속성구현

개고생한 지속성구현

Yyun4616282140](https://learn.unity.com/submission/69834e68edbc2a07112b04d2)[[Image: Data-Persistence-Project]

Data-Persistence-Project

Data-Persistence

Ggreataos1220](https://learn.unity.com/submission/69085fb9edbc2a1532077dd7)[[Image: MiDi]

MiDi

;)

TTHSALST240](https://learn.unity.com/submission/690044e1edbc2a014f4b2997)[[Image: Data-Persistence-Project]

Data-Persistence-Project

github : https://github.com/changil98/Data-Persistence-Project

CCCI98250](https://learn.unity.com/submission/68ff3374edbc2a038daa3a20)[[Image: DataPersistence]

DataPersistence

DataPersistence

Wwhwnsdlr2013340](https://learn.unity.com/submission/68e72a0bedbc2a20028ed5cd)Load More
