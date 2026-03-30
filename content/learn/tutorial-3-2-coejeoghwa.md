[Image: image]

# 3.2 - 최적화

Tutorial

Beginner

+10XP

90 mins

1

Unity Technologies

[Image: 3.2 - 최적화]SummarySkills

이 수업에서는 VR의 개별 주요 성능 지표(FPS, 폴리곤 개수, 드로우 콜)와 이러한 지표를 최적화하는 방법에 대해 알아봅니다. 이 수업을 마치면 앱의 성능을 더 최적화할 수 있습니다.

이 수업은 [VR로 창작하기](https://learn.unity.com/course/create-with-vr) 교육 과정의 일부입니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 현재 FPS 살펴보기

Q&A (0)

코드 최적화를 시작하기 전에 성능 목표를 확인하고, 앱이 그러한 목표를 충족하는지 평가하는 방법을 파악해야 합니다.

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

**1.  디바이스의 목표 FPS(초당 프레임 수)를 확인합니다.**

- 아래 링크를 참조로 사용해 목표 FPS를 기록합니다.

**2.  디바이스에서 실행되는 FPS(초당 프레임 수)를 확인합니다.**

- **Course Library** > **Prefabs** > **Testing**에서 **FPS Overlay UI**를 계층 구조로 드래그합니다.
- **Main Camera**를 **Render Camera** 프로퍼티에 할당합니다.
- 애플리케이션을 실행해 FPS를 확인합니다.
- **참고**: Unity 에디터를 통해 앱을 실행하는 방법으로는 FPS를 정확히 예측할 수 없습니다.

**3.  Unity Stats 창에서 FPS를 확인합니다.**

- **게임(Game) 뷰** 오른쪽 상단에서 **Stats** 창을 활성화하고 FPS 값을 찾습니다.

**4.  Unity 프로파일러를 살펴봅니다.**

- 플레이 버튼을 클릭합니다.
- 상단 메뉴 바에서 **Window** > **Analysis** > **Profiler**를 선택합니다.
- Profiler 창에서 동그란 빨간색 레코딩 버튼을 클릭합니다.

**5.  모바일 헤드셋에서 실행되는 실제 FPS(초당 프레임 수)를 테스트합니다.**

- 앱을 빌드하고 컴퓨터에 연결하지 않은 상태로 디바이스에서 실행합니다.

[Image: image][Image: image]

이제 디바이스의 목표 지표를 찾는 위치와 디바이스에서 초당 프레임 수를 찾는 방법을 확인했습니다.

**관련 리소스:**

- 목표 성능 지표

- [HTC Vive 성능 목표](https://hub.vive.com/storage/app/doc/en-us/MobileVRperformancechecklist.html#:~:text=The%20target%20framerate%20for%20Vive,as%20Desktop%20PCs%20and%20Laptops.)
- [Oculus 성능 목표](https://developer.oculus.com/documentation/unity/unity-perf/)
- Unity 툴

- [Stats 창](https://docs.unity3d.com/kr/Manual/RenderingStatistics.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)
- [프레임 디버거](https://docs.unity3d.com/kr/Manual/FrameDebugger.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)
- [프로파일러](https://docs.unity3d.com/kr/Manual/ProfilerWindow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)

단계를 완료로 표시

## 2. 드로우 콜 최소화

Q&A (0)

프레임 하나를 렌더링하기 위해 Unity에서는 오브젝트의 '배치(batch)'를 활용해 화면에 사물을 '그립니다'. Unity에서 화면에 무언가를 '그리기(draw)' 위해 엔진을 '호출(call)'하는 것을 '드로우 콜(draw call)'이라 합니다. 드로우 콜을 최소화하면 성능을 향상할 수 있습니다.

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

**1.  디바이스의 목표 드로우 콜 횟수(배칭 횟수)를 확인합니다.**

- 플랫폼의 웹사이트를 참조하여 목표 '드로우 콜' 지표를 찾습니다.

**2.  씬에서 드로우 콜 횟수를 찾습니다.**

- Game Stats 창을 열고 'Batches'(드로우 콜 배치) 값을 찾습니다.

**3.  배칭 및 드로우 콜이 프레임 속도에 미치는 영향을 시각화합니다.**

- 상단 메뉴에서 **Window** > **Analysis** > **Frame Debugger**를 선택합니다.
- **Enable**을 클릭합니다.
- Frame Debugger 창에서 좌우 화살표를 사용해 게임 뷰를 살펴보며 한 프레임이 생성되는 방식을 한 단계씩 확인합니다.

**4.  '정적 배칭'을 활성화합니다.**

- 상단 메뉴에서 **Edit > Project Settings > Player** 패널을 선택합니다.
- **Other Settings** 폴드아웃에서 **Static Batching**을 활성화합니다.

**5.  움직이지 않는 오브젝트를 '정적'으로 표시하여 배칭을 개선합니다.**

- 모든 정적 오브젝트를 쉽게 선택할 수 있도록 계층 구조를 정리해야 합니다.
- 모든 정적 오브젝트(램프, 샹들리에와 같은 조명 오브젝트 포함)를 선택합니다.
- 인스펙터 상단에서 **Static** 체크박스를 선택합니다.
- 메시지가 나타나면 '**Yes, change children**'을 선택합니다.
- **플레이**를 클릭하여 이 설정이 배치에 미치는 영향을 확인합니다.

**6.  배치 값이 여전히 높은 경우(175 초과) 다음을 따릅니다.**

- 씬에서 거울 오브젝트를 제거해 봅니다.

[Image: image]

이제 공유 머티리얼을 사용한 오브젝트 배칭을 통해 드로우 콜 횟수가 감소했습니다.

**관련 리소스:**

- [드로우 콜 배칭](https://docs.unity3d.com/kr/Manual/DrawCallBatching.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)

단계를 완료로 표시

## 3. 폴리곤 개수 최소화

Q&A (0)

가장 단순한 성능 지표는 폴리곤 개수입니다. 폴리곤 개수는 주로 삼각형을 집계하는 'Tris' 또는 버텍스를 집계하는 'Verts'로 측정됩니다.

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

**1.  디바이스의 목표 폴리곤 개수(삼각형 개수)를 확인합니다.**

- 플랫폼의 웹사이트를 참조하여 목표 '삼각형 개수' 지표를 찾습니다.

**2.  씬에서 삼각형 개수를 찾습니다.**

- Game Stats 창을 열고 'tris'(삼각형 개수) 값을 찾습니다.

**3.  삼각형을 더욱 명확하게 시각화합니다.**

- **씬** 뷰에서 'Shaded' 드로우 모드를  **Wireframe** 드로우 모드로 변경합니다.
- **참고:**Unity 2021 LTS에서 드로우 모드 드롭다운은 씬 뷰 상단의 동그라미 아이콘으로 표시됩니다.

[Image: image]

**4.  개별 오브젝트의 삼각형 개수를 확인합니다.**

- 오브젝트를 선택합니다.
- Mesh Filter 컴포넌트에서 메시를 클릭합니다.
- 프로젝트(Project) 창에서 해당 메시를 선택하여 인스펙터에서 삼각형 개수를 확인합니다.
- **참고:**  삼각형이 1,000개 미만이면 폴리곤 개수가 상당히 적은 것입니다.

**5.  프레임에 잡히는 오브젝트에 따른 삼각형 개수의 변화를 확인합니다.**

- XR 릭을 회전하면서 Stats 창을 모니터링합니다.

**6.  권장되는 삼각형 개수 목표를 달성하지 못한 경우 다음을 따릅니다.**

- 목표를 달성할 때까지 폴리곤 수가 많은 에셋을 제거하거나 교체합니다.
- 씬에서 거울을 제거하는 방법도 시도해 볼 수 있습니다.

[Image: image][Image: image]

이제 삼각형 개수 목표를 달성하고 삼각형 메모리 할당량(budget)을 어디에 사용 중인지 파악했습니다.

**관련 리소스:**

- [오클루전 컬링](https://docs.unity3d.com/kr/Manual/OcclusionCulling.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)

단계를 완료로 표시

## 4. 텍스처 최적화

Q&A (0)

Unity에서 실행되는 드로우 콜을 평가하는 것 외에, 씬에 사용되는 텍스처의 크기를 고려하는 것도 중요합니다.

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

**1.  씬에 그림을 추가해 텍스처 설정의 영향을 더 정확히 분석합니다.**

- **Course Library** > **Prefabs** > **Art**에서 씬에 있는 벽에 그림을 추가합니다.

**2.  씬에 있는 오브젝트의 머티리얼에 액세스합니다.**

- 그림의 Mesh Renderer 컴포넌트에서 인스펙터 하단의 **Material**섹션을 펼칩니다.

**3.  머티리얼에 사용되는 텍스처 아틀라스를 찾습니다.**

- 머티리얼의 **Surface Inputs** 폴드아웃에서 **Base Map**옆에 있는 썸네일을 클릭하여 프로젝트 창에서 텍스처를 찾습니다.
- 이 텍스처를 클릭하여 텍스처의 **Import Settings**를 확인합니다.

**4.  텍스트 설정을 테스트합니다.**

- 텍스처 설정 하단에서 **Max Size, Resize Algorithm,** **Format**, **Compression**프로퍼티를 조정합니다.
- **Apply**를 클릭하여 각 설정이 씬의 화질에 미치는 영향을 확인합니다.
- 차이점을 살펴봤으면 원래 설정으로 되돌립니다.

**5.  '밉맵'을 활성화하여 멀리서 보이는 텍스처의 해상도를 자동으로 줄입니다.**

- 프로젝트 창에서 InteriorColorSwatch 텍스처를 찾아 선택합니다.
- 인스펙터에서 **Advanced** 폴드아웃을 펼치고 **Generate Mip Maps**를 선택합니다.
- **Apply**를 클릭합니다. 그러면 저화질 텍스처가 생성되어 멀리 있는 오브젝트에 적용됩니다.

**6.  '이방성 필터링'을 활성화하여 완만한 각도에서 보이는 텍스처의 화질을 개선합니다.**

- 프로젝트 창에서 **WoodFloor_Texture**를 찾아 선택합니다.
- 인스펙터에서 **Aniso Level** 슬라이더를 드래그하여 값을 높입니다.
- **Apply**를 클릭합니다. 그러면 이방성 필터링 수준이 높아지므로 완만한 각도에서 보이는 텍스처 화질이 개선됩니다.

[Image: image]

이제 성능이나 화질에 맞춰 텍스처를 최적화할 때 어떤 설정을 사용하는지 알 수 있습니다.

**관련 리소스:**

- [텍스처 임포트](https://docs.unity3d.com/kr/Manual/ImportingTextures.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)
- [텍스처 임포트 설정(및 밉맵](https://docs.unity3d.com/kr/Manual/class-TextureImporterOverride.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869))
- [이방성 필터링](https://docs.unity3d.com/ScriptReference/Texture-anisoLevel.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)

단계를 완료로 표시

## 5. 파티클 및 포스트 프로세싱 최적화

Q&A (0)

파티클과 포스트 프로세싱도 성능에 영향을 미칩니다. 이러한 요소들이 초당 프레임 수에 미치는 영향을 살펴보고 프로젝트에서 성능 문제를 일으키지 않도록 할 것입니다.

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

**1.  동적 광원에 반응하지 않도록 파티클 셰이더를 최적화합니다.**

- Particle_Fire 오브젝트를 선택합니다.
- 인스펙터 하단에서 **Shader** 프로퍼티 드롭다운을 찾습니다.
- 파티클이 **Universal Render Pipeline**>**Particles**>**Unlit**셰이더를 사용하도록 해야 합니다.

**2.  포스트 프로세싱을 테스트합니다.**

- **Main Camera**오브젝트의 Camera 컴포넌트에서 **Post-processing**설정을 활성화합니다.
- Volume 컴포넌트를 추가합니다.
- **New** 버튼을 클릭하여 새 포스트 프로세싱 프로파일을 생성합니다.
- 그러면 **Add Override** 버튼을 클릭하고 새 효과를 활성화해 테스트해 볼 수 있습니다.
- **경고:**포스트 프로세싱 효과를 추가하려는 경우 색상 조정을 사용하는 것이 좋습니다. 렌즈 왜곡과 모션 블러는 사이버 멀미를 유발하므로 가급적 사용하지 마세요.

[Image: image][Image: image]

이제 앱에 파티클과 포스트 프로세싱을 적절하게 적용했습니다.

**관련 리소스:**

- [URP용 셰이더 선택](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/shaders-in-universalrp.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)
- [유니버설 렌더 파이프라인의 포스트 프로세싱](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/integration-with-post-processing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)
- [스크린 공간 프로세싱](https://unity3d.com/kr/how-to/optimize-mobile-VR-games?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)

단계를 완료로 표시

## 6. 안티앨리어싱 활성화

Q&A (0)

일부 3D 오브젝트의 가장자리가 거칠게 표현되는 현상을 본 적이 있으실 겁니다. 이러한 현상은 VR에서 몰입감을 저해할 수 있습니다. 안티앨리어싱을 적용하면 거친 가장자리를 매끄럽게 할 수 있습니다.

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

- 프로젝트 창에서 'UniversalRenderPipelineAsset'을 검색하고 선택하여 인스펙터에서 해당 프로퍼티를 확인합니다.

**2.  URP(유니버설 렌더 파이프라인) 에셋에서 안티앨리어싱을 활성화합니다.**

- **Quality** 폴드아웃에서 **Anti-Aliasing** 설정을 Disabled에서 **4x**로 변경합니다.

**3.  메인 카메라에 안티앨리어싱을 더 추가하려는 경우 다음을 따르세요.**

- **Main Camera** 오브젝트의 Camera 컴포넌트에서 **Rendering** 폴드아웃을 펼칩니다.
- **Anti-Aliasing** 설정을 'Fast Approximate Anti-Aliasing (FXAA)'으로 변경합니다.
- 효과를 확인할 수 있도록 **Post-Processing** 설정을 활성화합니다.
- **참고:** 이 설정은 FPS에 상당한 영향을 미칠 수 있습니다.

**4.  거울에 안티앨리어싱을 적용합니다.**

- 프로젝트에서 'Mirror_Texture'를 찾습니다.
- **Anti-Aliasing** 프로퍼티를 'None'에서 '4 samples'로 변경합니다.

[Image: image][Image: image]

이제 메인 카메라와 거울의 가장자리가 이전보다 훨씬 더 매끄럽게 표현됩니다.

**관련 리소스:**

- [안티앨리어싱](https://docs.unity3d.com/Packages/com.unity.postprocessing@2.3/manual/Anti-aliasing.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)

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

- 프레임 속도 향상

**새로운 개념 및 기술:**

- VR을 위한 목표 지표
- 폴리곤 개수
- 드로우 콜
- 텍스처 및 머티리얼 최적화
- 파티클 및 FX 최적화
- 안티앨리어싱

**다음 수업:**

- 조명

단계를 완료로 표시선택 단계

## 8. 추가 활동

Q&A (0)

기술을 더 개발하고, 새로운 개념을 살펴보고, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요.

각 활동에는 [쉬움], [보통], [어려움], [전문가]라는 태그로 과제의 수준이 표시되며, 코딩이 필요한 경우 [프로그래밍 필요] 태그도 포함됩니다.

**1.  VR 최적화에 대해 자세히 알아보기 [보통]**

VR에 맞는 최적화 기법과 전략을 자세히 알아보세요. 최적화에서 중요한 부분은 조명이며 다음 수업에서 다룰 예정입니다.

- [모바일 VR을 위한 최적화 7단계](https://unity3d.com/how-to/optimize-mobile-VR-games?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)
- [VR/AR 경험 최적화](https://learn.unity.com/tutorial/optimizing-your-vr-ar-experiences)
- [VR 앱 최적화](https://learn.unity.com/tutorial/unit-9-optimizing-vr-apps)
- [VR 베스트 프랙티스](https://learn.unity.com/tutorial/vr-best-practice)
- [그래픽스 성능 최적화](https://docs.unity3d.com/kr/Manual/OptimizingGraphicsPerformance.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)

**2.  플랫폼별 툴 연구 [어려움]**

사용 중인 플랫폼에 따라 디바이스의 성능을 모니터링하는 데 사용하는 특정한 툴이 있을 수 있습니다.

- 별도의 애플리케이션 다운로드가 필요한 경우, 공식 스토어에서 앱을 다운로드하는 대신 디바이스에 앱을 사이드로드(sideload)해야 하는 경우도 있습니다(예: SideQuest for Oculus 사용).
- 예:

- Oculus - [OVR Metrics Tool](https://developer.oculus.com/documentation/tools/tools-ovrmetricstool/)
- HTC Vive - [Android Systrace](https://hub.vive.com/storage/app/doc/en-us/PerformanceProfiling.html)
- Valve / SteamVR - [Frame Timing Tool](https://www.google.com/search?q=SteamVR+Frame+Timing+Tool&oq=SteamVR+Frame+Timing+Tool&aqs=chrome..69i57j33i10i160.211j0j7&sourceid=chrome&ie=UTF-8)

**3.  Unity 프로파일러 살펴보기 [전문가]**

Unity 프로파일러 창에 더 익숙해져 보세요.

- [Unity 프로파일러 창 매뉴얼](https://docs.unity3d.com/kr/Manual/ProfilerWindow.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)
- [프로파일러를 사용한 최적화 가이드](https://docs.unity3d.com/kr/Manual/BestPracticeUnderstandingPerformanceInUnity.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774949575869)
- [성능 문제 진단](https://learn.unity.com/tutorial/diagnosing-performance-problems#5c7f8528edbc2a002053b597)

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
