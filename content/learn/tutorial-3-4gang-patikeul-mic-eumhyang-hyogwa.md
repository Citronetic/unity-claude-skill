[Image: image]

# 3.4강 - 파티클 및 음향 효과

Tutorial

Beginner

+10XP

60 mins

3

(200)

Unity Technologies

[Image: 3.4강 - 파티클 및 음향 효과]SummarySkills

**개요:**

이제 게임의 그래픽이 아주 근사하게 완성되었는데, 중요한 몇 가지가 빠져 있습니다. 바로 음향 효과와 파티클 효과입니다. 음향과 음악은 조용한 게임 월드에 생동감을 더하고, 파티클은 플레이어의 행동을 더 역동적이고 두드러지게 표현합니다. 이 수업에서는 캐릭터가 달리고, 점프하고, 충돌할 때 발생하는 멋진 음향 효과와 파티클 효과를 추가해 보겠습니다.

**프로젝트 결과:**

플레이어가 씬에서 달릴 때 음악이 재생되고, 플레이어의 발 뒤쪽으로 흙먼지가 날립니다. 점프할 때 통통 튀는 사운드가 재생되고, 플레이어가 충돌하면 폭발음이 재생되며 플레이어가 뒤로 넘어지는 동시에 연기구름 파티클이 나타납니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 폭발 파티클 커스터마이즈

Q&A (0)

> *먼저 플레이어가 장애물과 충돌할 때 발생하는 폭발에 대한 파티클 효과를 추가해야 합니다.*

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

1. *Course* *Library > Particles*에서 **FX_Explosion_Smoke**를 계층 구조로 드래그한 다음 **Play**/**Restart**/**Stop** 버튼을 사용하여 효과를 미리 봅니다.
2. **파티클 시스템**을 원하는 대로 만들기 위해 **설정**을 다양하게 조정해 봅니다.
3. **Play On Awake** 설정을 **선택 해제**해야 합니다.
4. **파티클**을 플레이어로 드래그하여 **자식 오브젝트**로 만들고, 플레이어를 기준으로 위치를 지정합니다.

단계를 완료로 표시

## 2. 충돌 시 파티클 효과 재생

Q&A (0)

> *파티클 효과와 충돌 시 폭발을 살펴봤지만, 이를 재생하려면 플레이어 컨트롤러에 할당하고 새 코드를 작성해야 합니다.*

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

1. **PlayerController.cs**에서 ***public ParticleSystem explosionParticle;*** 변수를 새로 선언합니다.
2. 인스펙터에서 **Explosion Particle** 변수에 **폭발**을 할당합니다.
3. 플레이어가 장애물과 충돌하는 **if 문**에서 ***explosionParticle.Play();***를 호출하고 **파티클 프로퍼티**를 테스트하고 조정합니다.

[Image: image]단계를 완료로 표시

## 3. 흙먼지가 날리는 파티클 추가

Q&A (0)

> *다음으로 플레이어가 씬에서 달릴 때 땅을 차는 것처럼 보이도록 흙먼지가 날리는 파티클 효과를 추가해야 합니다. 플레이어가 지면에 닿아 있을 때만 파티클 효과가 재생되도록 하는 것이 중요합니다.*

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

1. **FX_DirtSplatter**를 플레이어의 **자식 오브젝트**로 드래그하고, 위치를 변경하고, 회전하고, 설정을 편집합니다.
2. 새  ***public ParticleSystem dirtParticle;***을 선언하고, 인스펙터에서 **할당**합니다.
3. 플레이어가 점프하거나 **장애물**과 충돌할 때 ***dirtParticle.Stop();***을 추가합니다.
4. 플레이어가 **지면**에 닿을 때 ***dirtParticle.Play();***를 추가합니다.

[Image: image]단계를 완료로 표시

## 4. 카메라 오브젝트에 음악 추가

Q&A (0)

> *파티클 효과가 잘 적용되었으니, 이제 사운드로 넘어가 보겠습니다. 음악을 추가하려면 카메라에 사운드 컴포넌트를 연결해야 합니다. 카메라는 씬에서 눈과 귀의 역할을 합니다.*

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

1. **Main Camera** 오브젝트를 선택하고 *Add Component > Audio Source*로 이동합니다.
2. *Course* *Library > Sound*에서 **음악 클립**을 인스펙터의 **AudioClip** 변수로 드래그합니다.
3. **음향 효과**가 잘 들리도록 **볼륨**을 줄입니다.
4. **Loop** 체크박스를 선택합니다.

단계를 완료로 표시

## 5. 오디오 클립 변수 선언

Q&A (0)

> *이제 멋진 음악을 추가했으니 음향 효과도 추가해 보겠습니다. 이번에는 오디오 클립이 카메라가 아닌 플레이어로부터 재생되도록 하겠습니다.*

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

1. **PlayerController.cs**에서 새 ***public AudioClip jumpSound;***와 새 ***public AudioClip crashSound;***를 선언합니다.
2. *Course Library > Sound*에서 클립을 인스펙터에 있는 새로운 각 **음향** 변수로 드래그합니다.

단계를 완료로 표시

## 6. 점프 및 충돌 시 오디오 클립 재생

Q&A (0)

> *PlayerController에서 점프와 충돌에 오디오 클립을 할당했습니다. 이제 적절한 시점에 오디오 클립이 재생되도록 구현하여 게임이 완전한 오디오 경험을 갖추도록 해야 합니다.*

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

1. **Audio Source** 컴포넌트를 **플레이어**에 추가합니다.
2. 새 ***private AudioSource playerAudio;***를 선언하고 ***playerAudio = GetComponent<AudioSource>();***로 초기화합니다.
3. 캐릭터가 **점프**할 때, ***playerAudio.PlayOneShot(jumpSound, 1.0f);***를 호출합니다.
4. 플레이어가 **충돌**할 때, ***playerAudio.PlayOneShot(crashSound, 1.0f);***를 호출합니다.

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

새 기능**:**

- 게임 중에 음악 재생
- 플레이어가 달릴 때 플레이어의 발에 파티클 효과 추가
- 플레이어가 장애물과 부딪힐 때의 음향 효과 및 폭발

새로운 개념 및 기술**:**

- 파티클 시스템
- 자식 오브젝트 위치 지정
- 오디오 클립 및 오디오 소스
- 음향 효과 재생 및 중지

전체 요약**:**

- 멋진 음향 효과와 파티클 효과를 추가해 매우 세련된 게임을 완성했습니다. 경쾌한 배경 음악도 추가했고, 캐릭터 애니메이션을 활용하는 방법을 알아보고, 배경이 계속해서 스크롤되도록 프로그래밍했습니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
