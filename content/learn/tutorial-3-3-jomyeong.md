[Image: image]

# 3.3 - 조명

Tutorial

Beginner

+10XP

90 mins

1

Unity Technologies

[Image: 3.3 - 조명]SummarySkills

이 수업에서는 VR에 맞게 조명을 최적화할 수 있도록 광원 모드와 라이트매핑, 라이트 프로브를 사용하는 방법을 알아봅니다. 이 수업을 마치면 씬에 설정한 조명을 성능 및 미적인 면에서 모두 향상할 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 조명 설정 테스트

Q&A (0)

씬의 조명을 편집하기 전에 새로운 조명 설정 에셋을 생성하고 원하는 대로 설정해 보며 익숙해지는 시간을 가질 것입니다.

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

**1.  렌더 파이프라인 설정에 액세스합니다.**

- 프로젝트 창에서 'UniversalRenderPipelineAsset'을 검색하고 선택합니다.

**2.  렌더 파이프라인 설정을 테스트합니다.**

- URP 에셋 인스펙터의 **Lighting** 섹션에서 설정을 조정해 봅니다.
- **Per Object Limit** 슬라이더를 반드시 테스트하여 해당 설정이 복잡한 조명에 어떤 제한을 적용하는지 파악해야 합니다.

**3.  씬에 새로운 조명 설정을 생성합니다.**

- **Window**> **Rendering**>**Lighting**을 클릭하여 Lighting 창을 엽니다.
- 인스펙터 옆에 창을 고정한 다음 **New Lighting Settings** 버튼을 클릭하여 새 프로파일을 생성합니다.

**4.  씬의 환경 조명을 테스트합니다.**

- Lighting 창 상단에서 **Environment** 탭을 선택합니다.
- 설정을 테스트해 보며 씬에 미치는 영향을 확인합니다.

[Image: image][Image: image]

이제 Lighting 창과 URP 에셋 내에서 조명 설정을 찾고 조정할 수 있습니다.

**관련 리소스:**

- [유니버설 렌더 파이프라인 에셋](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.0/manual/universalrp-asset.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)

단계를 완료로 표시

## 2. 첫 번째 라이트맵 준비 및 베이크

Q&A (0)

첫 번째 라이트맵 베이크를 시작할 시간입니다. 하지만 그 전에 몇 가지 단계를 진행해야 합니다.

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

**1.  모든 광원을 베이크하도록 허용합니다.**

- 씬에서 움직이지 않거나 켜고 끄지 않을 각 광원을 찾아 선택합니다. 계층 구조 검색창에서 't:light'를 검색하면 됩니다.
- Light 컴포넌트의 **General** 폴드아웃에서 **Mode** 설정을 **Realtime**에서 **Baked**로 변경합니다.

**2.  씬에 있는 오브젝트에 베이크된 광원을 적용합니다.**

- 계층 구조에서 움직이지 않는 정적 오브젝트를 모두 선택합니다.
- 인스펙터 상단에서 **Static** 체크박스를 선택해야 합니다.
- **참고:**반드시 Lighting 섹션에서 오브젝트를 선택하세요(예: 램프, 촛대, 샹들리에).

**3.  라이트맵에서 배경 및 전경 오브젝트를 제거해 베이크 횟수를 줄입니다.**

- 큰 배경 오브젝트를 각각 선택합니다.
- Mesh Renderer 컴포넌트의 **Lightmapping** 섹션에서 **Scale in Lightmap** 프로퍼티를 0으로 줄입니다.

**4.  광원을 베이크해 봅니다.**

- **Lighting**창으로 이동합니다.
- **Scene** 탭 하단에서 **Generate Lighting**을 클릭합니다.
- **참고:**베이크가 멈추거나 충돌한 것 같으면 Lightmapper 베이크 시스템을 Progressive CPU 대신 Progressive GPU로 변경해 보세요.

**5.  일시적으로 라이트맵 생성 시간을 최소화합니다.**

- **Lightmap Resolution**을 5~10 사이의 값으로 줄입니다.
- 라이트맵 품질(샘플, 반사 등)에 영향을 미치는 다른 값을 줄입니다.

[Image: image][Image: image][Image: image]

이제 씬에 저해상도로 베이크된 라이트맵이 있습니다.

**관련 리소스:**

- [광원 모드: Baked, Mixed, Realtime](https://docs.unity3d.com/kr/Manual/LightModes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)

단계를 완료로 표시

## 3. 씬 조명 조정 후 다시 베이크

Q&A (0)

처음으로 베이크를 시도해 봤으므로 이제 씬에 적절한 조명을 설정해 보고 또 한번 해 보세요.

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

**1.  라이트맵을 초기화하고 실시간으로 조명 변경 사항을 확인합니다.**

- Lighting 창 하단에서 Generate Lighting 옆의 **드롭다운**을 클릭합니다.
- **Clear Baked Data**를 선택합니다.

**2.  최대한 많은 조명의 효과를 확인합니다.**

- **UniversalRenderPipelineAsset**을 선택합니다.
- 일시적으로 **Additional Light** **Per Object Limit**을 최대로 늘립니다.

**3.  방 프리팹과 함께 제공된 기본 광원을 제거합니다.**

- 계층 구조에서 Room_[style] 프리팹을 펼칩니다.
- 2개의 자식 점 광원을 삭제합니다.
- **참고:** 광원을 삭제하려면 방 프리팹을 열어야 합니다.

**4.  씬의 실제 광원에서 나오는 더욱 현실적인 조명을 추가합니다.**

- **Course Library** > **Prefabs** > **Lighting** 폴더에는 씬에 조명을 설정할 수 있을 만큼 충분한 발광 오브젝트가 있어야 합니다.
- 그러한 조명 요소에 자식 광원 오브젝트를 추가하려면 계층 구조에서 오른쪽 클릭하고 **Light**> **Point / Spot Light**를 선택합니다.

**5.  방에 보다 균형 잡힌 조명을 설정합니다.**

- **Directional Light**의 **Intensity** 및 **Indirect Multiplier**값을 높여 봅니다.
- Lighting 설정에서 **Indirect Intensity** 값을 높여 봅니다.

**6.  조명 상태를 테스트합니다.**

- Generate Lighting을 다시 클릭합니다.
- 여유가 된다면 **Lightmap Resolution**과 기타 Light 설정 값을 높여 최종 상태에서 어떻게 보이는지 확인합니다.
- **참고:**그림자에서 얼룩이 생기거나 픽셀이 잘 보이는 경우, Lighting 설정에서 **Lightmap Compression**프로퍼티를 **None**으로 설정합니다.

[Image: image]

이제 원하는 결과에 가깝게 연출되도록 대략적으로 베이크된 조명을 씬에 적용했습니다.

**관련 리소스:**

- [라이트맵 설정](https://learn.unity.com/tutorial/configuring-lightmaps#)

단계를 완료로 표시

## 4. 혼합 조명 추가

Q&A (0)

오브젝트에 실시간으로 그림자를 드리우지만 베이크된 라이트맵이 주는 성능상의 장점도 함께 얻으려는 경우 혼합 조명을 사용하면 됩니다.

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

**1.  베이크된 라이트맵에 실시간 그림자를 적용합니다.**

- **Directional Light**의 **Mode**를 'Baked'가 아닌 'Mixed'로 변경합니다.

**2.  새로운 혼합 조명의 효과를 확인합니다.**

- **Lighting** 창에서 **Generate Lighting**을 클릭하여 조명을 다시 베이크합니다.
- 혼합 광원이 동적 오브젝트의 조명과 그림자에 미치는 영향을 파악합니다.

[Image: image]

이제 동적 오브젝트에 방향 광원에서 비롯되는 실시간 그림자가 생깁니다.

**관련 리소스:**

- [혼합 조명](https://docs.unity3d.com/kr/Manual/LightMode-Mixed.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)

단계를 완료로 표시

## 5. 라이트 프로브 추가

Q&A (0)

씬에 있는 모든 베이크된 광원으로 보다 실감 나는 실시간 조명을 구현하려면 라이트 프로브가 필요합니다.

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

**1.  새 라이트 프로브 그룹을 방 오브젝트의 자식으로 추가합니다.**

- 계층 구조에서 **Room_[style]** 오브젝트를 오른쪽 클릭하고 **Light** > **Light Probe Group**을 선택합니다.

**2.  라이트 프로브를 편집하려면 다음을 따릅니다.**

- 씬 뷰 오른쪽 상단에서 **3D 아이콘**이 적용된 **기즈모**를 활성화해야 합니다.
- Light Probe Group의 인스펙터에서 **Edit Light Probes** 버튼을 클릭합니다.

**3.  방에 있는 라이트 프로브를 복제하고 위치를 조정합니다.**

- 프로브의 **선택** 박스를 드래그하여 선택합니다.
- **이동** 툴을 사용하여 프로브의 위치를 지정합니다.
- **Ctrl/Cmd+D** 키를 사용해 선택한 프로브를 복제합니다.
- **참고:**씬 뷰의 오른쪽 상단에 있는 축 기즈모 아래의 작은 아이콘을 클릭하여 아이소메트릭 뷰로 전환하면 도움이 될 수 있습니다.

**4.  라이트 프로브 위치를 적절하게 지정합니다.**

- 프로브는 조명의 색상이나 강도가 급격하게 변화하는 영역에 있어야 합니다.
- 오브젝트 내부에 프로브를 두면 안 됩니다.

**5.  라이트 프로브의 효과를 확인합니다.**

- Lighting 창에서 조명을 다시 생성하고 테스트하여 동적 오브젝트에 적용된 조명을 확인합니다.

[Image: image]

이제 씬에 라이트 프로브가 계산한 베이크된 조명을 기반으로 하는 대략적인 동적 조명이 구현되었습니다.

**관련 리소스:**

- [라이트 프로브](https://docs.unity3d.com/kr/Manual/LightProbes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)
- [라이트 프로브 그룹](https://docs.unity3d.com/kr/Manual/class-LightProbeGroup.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)
- [라이트 프로브 설정](https://learn.unity.com/tutorial/configuring-light-probes-2019-3#)

단계를 완료로 표시

## 6. 라이트맵 마무리

Q&A (0)

조명이 원하는 방식에 가깝게 설정되었으므로 이제 더 높은 해상도의 최종 라이트맵을 사용할 준비가 되었습니다.

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

**1.  타겟 디바이스에 적합하도록 조명을 최적화합니다.**

- 사용자가 수행할 것으로 예상되는 방식으로 앱을 테스트합니다(즉, 모바일 디바이스를 타게팅하는 경우 컴퓨터에 연결되지 않은 스탠드얼론 디바이스에서 테스트).
- 목표 프레임 속도를 달성해야 합니다.
- 앱을 빌드하고 실제 디바이스에서 실행하는 방법은 [VR 프로젝트 설정 튜토리얼](https://learn.unity.com/tutorial/vr-project-setup)의 지침을 참조하세요.

**2.  작은 라이트맵 파일 여러 개 대신 하나의 라이트맵 파일을 생성합니다.**

- **Max Lightmap Size**를 4096으로 늘립니다.
- 작은 라이트맵 파일 여러 개 대신 단일 라이트맵 파일을 사용하는 것이 좋습니다.

**3.  그림자에 얼룩이 생기거나 픽셀이 잘 보이는 경우 다음을 따릅니다.**

- **Lightmap Compression**프로퍼티를 **None**으로 설정합니다.

**4.  구현된 조명의 형상에 대체로 만족하고 최종 라이트맵을 생성할 준비가 된 경우 다음을 따릅니다.**

- **Lighting** 창에서 Lightmap Resolution을 20~80 정도로 늘립니다.
- 필요한 경우 원하는 결과를 얻을 수 있도록 계속해서 다른 조명 설정(샘플, 반사 등)을 조정합니다.

[Image: image]

이제 조명이 만족스럽게 보이며 성능 면에서도 최적화됩니다.

**관련 리소스:**

- [Unity에서 조명 설정](https://docs.unity3d.com/kr/Manual/BestPracticeLightingPipelines.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)

단계를 완료로 표시

## 7. 요약

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

**새 기능:**

- 복잡하지만 성능 면에서 유리한 조명

**새로운 개념 및 기술:**

- 베이크된 조명과 실시간 조명 비교
- 라이트매핑
- 라이트 프로브

**다음 수업:**

- 퍼블리싱

단계를 완료로 표시선택 단계

## 8. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  새 스카이박스 추가 [쉬움]**

새 스카이박스를 생성하거나 다운로드하여 씬 분위기를 개선해 보세요.

- [스카이박스](https://docs.unity3d.com/kr/Manual/skyboxes-using.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)에 대해 자세히 알아보기
- Unity 에셋 스토어에서 무료 에셋을 검색하여 스카이박스 다운로드 가능
- Lighting 창의 Environment 탭에서 스카이박스 추가
- 경고: 스카이박스가 고해상도이고 Environment 탭에서 스카이박스를 환경 조명의 소스로 설정한 경우 라이트매핑에 시간이 오래 걸릴 수 있습니다. Source를 Gradient로 변경하면 이를 방지할 수 있습니다.

[Image: image][Image: image]

**2.  조명 미세 조정 계속하기 [보통]**

씬의 조명과 조명 설정을 계속 미세 조정하여 씬이 최대한 근사하고 뛰어난 성능을 내도록 구현해 보세요.

- [Lighting 창](https://docs.unity3d.com/2020.1/Documentation/Manual/lighting-window.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)에서 값을 조정해 보면서 어떤 결과가 나오는지 확인합니다.
- Unity의 조명에 대해 자세히 알아보세요.

- [조명 및 렌더링 소개](https://learn.unity.com/tutorial/introduction-to-lighting-and-rendering#)

[Image: image]

**3.  반사 프로브 살펴보기 [어려움]**

금속 오브젝트에서 보다 사실적인 반사 효과를 구현할 수 있도록 씬에 반사 프로브를 추가해 보세요.

- [반사 프로브 매뉴얼](https://docs.unity3d.com/kr/Manual/class-ReflectionProbe.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885) 및 [반사 프로브 사용](https://docs.unity3d.com/kr/Manual/UsingReflectionProbes.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575885)에 대한 모든 자료
- Material_Main을 복제하여 새로운 'Material_Main_Shiny'를 생성하고, 이 머티리얼의 metallic 프로퍼티를 높인 후, 씬에서 반사하여 빛을 낼 오브젝트에 해당 머티리얼을 할당합니다.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
