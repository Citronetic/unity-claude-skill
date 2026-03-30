[Image: image]

# 최종 애니메이션 익스포트

Tutorial

Beginner

+5XP

10 mins

1

(17)

Unity Technologies

[Image: 최종 애니메이션 익스포트]Summary

이 마지막 튜토리얼에서는 최종 애니메이션을 동영상 파일로 익스포트합니다. 다른 소프트웨어로 더 다양한 편집 작업을 수행할 수 있도록 기타 유형의 데이터를 익스포트하는 방법도 함께 알아보겠습니다.

Languages available:

한국어English日本語한국어한국어

## 1. 개요

Q&A (0)

샘플 영상 안에서 짧은 시네마틱 애니메이션을 직접 만들어 보았습니다. 이 마지막 튜토리얼에서는 Recorder를 사용하여 편집한 시퀀스 동영상을 익스포트합니다.

그리고 다음과 같은 기타 유형의 데이터도 익스포트합니다.

- MICH-L 캐릭터의 Alembic 애니메이션 파일
- 알베도, 노멀, 뎁스, 모션 벡터 등의 AOV(임의 출력 변수)

단계를 완료로 표시

## 2. 시퀀스 동영상 익스포트

Q&A (0)

편집한 시퀀스를 동영상 파일로 익스포트하는 방법은 다음과 같습니다.

**1.**  Sequences 창에서 **S01**을 오른쪽 클릭하고 **Record As**를 선택하면 Recorder가 열립니다.

[Image: image]

**2.**  Recorder 창에서 Recorder 리스트가 비어 있지 않은 경우 리스트를 삭제합니다. 왼쪽 창에서 옵션 메뉴를 클릭하고 **Clear Recorder List**를 선택합니다.

[Image: image]

**3.**  **Add Recorder**를 클릭하고 **Movie**를 선택합니다.

[Image: image]

**4.**  Movie Recorder Settings의 **Format** 섹션에서 익스포트할 시퀀스의 **Media File Format**을 선택합니다.

[Image: image]

**5.**  **Start Recording** 버튼을 클릭합니다.
에디터에서는 시네마틱을 처음부터 플레이 모드로 재생하지만, 실제 레코딩은 영상이 타겟 시퀀스(**S01**)에 도달하면 시작됩니다. 타겟 시퀀스가 끝나면 자동으로 레코딩이 중단되고 에디터에서 플레이 모드가 종료됩니다.

**6.**  Movie Recorder Settings의 **Output File** 섹션에서 **Path** 섹션 오른쪽의 출력 위치 버튼을 클릭합니다.

[Image: image]

**7.**  파일 시스템 창에서 출력 파일을 찾아 동영상 플레이어로 플레이합니다.
기본 설정을 사용했다면 파일 이름은 "movie_001.mp4"입니다.

단계를 완료로 표시

## 3. Alembic 애니메이션 파일 익스포트

Q&A (0)

**S01** 시퀀스에서 Mich-L 캐릭터 애니메이션을 Alembic 파일로 익스포트하는 방법은 다음과 같습니다.

**1.**  Sequences 창에서 **S01**을 오른쪽 클릭하고 **Record As**를 선택하면 Recorder가 열립니다.

**2.**  Recorder 창에서 Recorder 리스트가 비어 있지 않은 경우 리스트를 삭제합니다. 왼쪽 창에서 옵션 메뉴를 클릭하고 **Clear Recorder List**를 선택합니다.

**3.**  **Add Recorder**를 클릭하고 **Alembic Clip**을 선택합니다.

[Image: image]

**4.**  Alembic Recorder Settings의 **Output File > Capture Settings > Scope**에서 **Target Branch**를 선택합니다.

[Image: image]

**5.**  계층 창에서 **S01**게임 오브젝트를 펼친 다음, **MICH-L_S01**프리팹을 펼쳐 봅니다.

[Image: image]

**6.**  **01_RIG_ch_Mich-l01 Variant** 프리팹을 드래그하여 Recorder 창의 **Target** 필드에 놓습니다.

[Image: image]

**7.**  **Start Recording** 버튼을 클릭합니다.
에디터에서는 시네마틱을 처음부터 플레이 모드로 재생하지만, 실제 레코딩은 영상이 타겟 시퀀스(**S01**)에 도달하면 시작됩니다. 타겟 시퀀스가 끝나면 자동으로 레코딩이 중단되고 에디터에서 플레이 모드가 종료됩니다.

**8.**  Movie Recorder Settings의 **Output File** 섹션에서 **Path** 섹션 오른쪽의 출력 위치 버튼을 선택하고 파일 시스템 창에서 출력 파일을 찾습니다.

단계를 완료로 표시

## 4. AOV(임의 출력 변수) 익스포트

Q&A (0)

영상 콘텐츠에서 다양한 AOV를 익스포트할 수 있습니다. AOV에는 주로 영상에 등장하는 요소의 머티리얼, 지오메트리, 뎁스, 모션 또는 조명 리스폰스와 관련된 데이터가 포함됩니다.

**참고:** 이 단계에서는 기본 이미지 뷰어로 간편하게 결과물을 확인할 수 있도록 JPEG로 익스포트하는 방법을 소개합니다.

**S01** 시퀀스에서 알베도(트루 컬러) 이미지 시퀀스를 익스포트하는 방법은 다음과 같습니다.

**1.**  Recorder 창을 닫은 경우, Sequences 창에서 **S01**을 오른쪽 클릭하고 **Record As**를 선택하면 Recorder 창이 다시 열립니다.

**2.**  Recorder 창에서 Recorder 리스트가 비어 있지 않은 경우 리스트를 삭제합니다. 왼쪽 창에서 옵션 메뉴를 클릭하고 **Clear Recorder List**를 선택합니다.

**3.**  **Add Recorder**를 클릭하고 **AOV Image Sequence**를 선택합니다.

[Image: image]

**4.**  AOV Recorder Settings의 **Capture > Aov to Export**에서 **Albedo**를 선택하고 **Format > Format**에서 **JPEG**를 선택합니다.

[Image: image]

**5.**  **Start Recording** 버튼을 클릭합니다.
에디터에서는 시네마틱을 처음부터 플레이 모드로 재생하지만, 실제 레코딩은 영상이 타겟 시퀀스(**S01**)에 도달하면 시작됩니다. 타겟 시퀀스가 끝나면 자동으로 레코딩이 중단되고 에디터에서 플레이 모드가 종료됩니다.

**6.**  AOV Recorder Settings의 **Output File** 섹션에서 **Path** 섹션 오른쪽의 출력 위치 버튼을 선택합니다.

**7.**  파일 시스템 창에서 레코딩을 거친 여러 이미지 파일을 찾아 그중 하나를 열어 결과를 확인합니다.

[Image: image]

**8.**  다른 AOV를 테스트하려면 **Capture > Aov to Export**에서 다른 값을 선택하고 한 번 더 레코딩을 시작합니다. 제공되는 AOV에 대해 자세히 알아보려면 [Recorder 기술 자료](https://docs.unity3d.com/Packages/com.unity.recorder@latest?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952862184)를 참조하세요.

노멀 출력 예시:

[Image: image]

뎁스 출력 예시:

[Image: image]

모션 벡터 출력 예시:

[Image: image]단계를 완료로 표시

## 5. 다음 단계

Q&A (0)

이 짧은 튜토리얼 시리즈에서는 Cinematic Studio Sample과 시퀀스를 활용하여 생성할 수 있는 요소에 대해 살펴보았습니다. 즐거운 시간이 되셨기를 바라며, 멋진 작품이 나오기를 기대하고 있겠습니다.

#### 소식 받기

[Unity 포럼](https://forum.unity.com/forums/film-tv-animation-cinematics.466/)에 참여해서 최신 소식을 받아보고 Cinematic Studio Sample에 대한 의견을 공유하세요.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
