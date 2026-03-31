[Image: image]

# 키 카드 리더기

Tutorial

intermediate

+10XP

90 mins

1

Unity Technologies

[Image: 키 카드 리더기]SummarySkills

이제 프로젝트 브리프의 두 번째 기능이자 더 어려운 기능인 키 카드 리더기로 넘어갈 차례입니다. 이 기능을 사용하려면 카드를 리더기에 넣고 뺄 때 정확한 위치와 각도를 감지해야 하므로 약간의 3D 벡터 기술이 필요합니다.

이 튜토리얼에서 실습해 볼 내용은 다음과 같습니다.

- 프로젝트 브리프의 요구 사항에 따라 선택적으로 힌트를 사용하여 커스텀 VR 키 카드 리더기를 프로그래밍합니다.
- 내적과 같은 수학 공식을 사용하여 커스텀 3D 상호 작용을 프로그래밍합니다.

Languages available:

한국어EnglishEspañol한국어한국어

## 1. 개요

Q&A (0)

두 번째로 구현할 프로젝트 브리프의 기능은 키 카드 리더기입니다. 사용자는 카드 리더기에 키 카드를 긁어 문의 잠금을 해제해야 합니다.

[Image: image]

키 카드에 대한 구체적인 요구 사항은 다음 단계에 명시되어 있습니다.

이 요구 사항을 구현하는 방법을 잘 모르겠는 경우를 대비하여 세 단계의 힌트 세트가 제공됩니다. 다음 힌트 세트로 넘어가기 전에 스스로 구현해 보는 것이 좋습니다.

세 단계의 힌트 세트를 모두 살펴보고도 여전히 진행이 막힌다면 이 프로젝트의 마지막에 완성된 스크립트를 다운로드하고 살펴볼 수 있습니다. 프로젝트가 제대로 작동하지 않더라도 직접 구현해 보고 잘 작동하는 다른 사람의 코드를 검토하는 과정에서 많은 것을 배울 수 있습니다.

행운을 빕니다!

단계를 완료로 표시

## 2. 구체적인 요구 사항

Q&A (0)

키 카드 리더기에 대한 필수 요구 사항은 프로젝트 브리프 전문에 나와 있으며 편의를 위해 여기를 확인해도 괜찮습니다.

- 키 카드를 잡을 수 있어야 합니다.
- CardReader.cs 스크립트가 XRSocketInteractor 클래스를 확장해야 하지만, 키 카드가 일반적인 소켓처럼 소켓에 스냅되면 안 됩니다.
- 리더기에 카드를 최소 거리만큼 아래로 긁은 경우에만 스와이프가 등록되어야 합니다.
- 스와이프가 등록되면 문을 가로막는 빗장과 자물쇠가 사라져야 합니다.

단계를 완료로 표시

## 3. 내적이란?

Q&A (0)

코드에 내적을 사용하면 키 카드 리더기가 올바르게 작동하는 데 도움이 될 수 있습니다.

**내적**은 두 벡터의 방향이 얼마나 일치하는지 나타내는 기하학 개념입니다. 수식을 쓸 때 가운뎃점( · )을 사용하기 때문에 영어로는 dot product라고 합니다. 예를 들어 A와 B의 내적은 ‘A · B’라고 표기하고 ‘A 도트 B’라고 읽습니다.

이 프로젝트에서 내적을 사용하면 키 카드가 키 카드 리더기와 같은 방향을 가리키는지 확인하는 데 도움이 됩니다.

두 벡터가 같은 방향을 가리키면 내적은 양수입니다.

[Image: image]

두 벡터가 반대 방향을 가리키면 내적은 음수가 됩니다.

[Image: image]

두 벡터가 서로 수직인 경우 내적은 0입니다.

[Image: image]

두 벡터가 서로의 평행과 수직 사이에 위치한다면 내적은 0~1 사이의 값이 됩니다.

[Image: image]

아래의 데모 동영상에서 실제 결과를 확인해 보세요.

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

위 동영상에서 초록색 선은 당기는 방향의 벡터를, 미닫이문은 실제 문의 방향을, 빨간색 선은 당기는 방향과 문 방향의 내적(즉 당기는 방향 · 문의 방향)을 나타냅니다.

이 개념은 마지막 튜토리얼에서 미닫이문을 프로그래밍할 때도 유용합니다.

Unity에서 내적을 구현하는 법에 대한 자세한 내용은 [기술 자료](https://docs.unity3d.com/ScriptReference/Vector3.Dot.html)에서 확인할 수 있습니다.

VR을 비롯한 3D 애플리케이션을 만드는 프로그래머는 이와 같은 대수나 기하학 연산을 자주 사용합니다. 커스텀 VR을 개발하려면 각도, 속도, 회전을 익숙하게 다루는 것이 매우 중요하므로 지금 바로 연습해 두는 것이 좋습니다.

단계를 완료로 표시

## 4. 힌트 세트 1

Q&A (0)

아래는 대략적인 코드 아키텍처와 프로그래밍 로직에 대한 지침이 포함된 첫 번째 힌트 세트입니다. 이 힌트를 확인하기 전에 위의 지침에 따라 기능을 스스로 구현해 보세요.

- 키 카드가 기본적으로 소켓에 스내핑되지 않도록 해야 합니다. 그 방법을 알아보려면 [XRSocketInteractor 기술 자료](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@2.0/api/UnityEngine.XR.Interaction.Toolkit.XRSocketInteractor.html)를 읽어 보세요.
- 카드가 소켓에 들어가면 키 카드의 위치를 저장해야 합니다.
- 카드가 소켓에서 나가면 키 카드가 나간 위치를 저장하고 이동 경로를 확인해야 합니다.
- 모든 프레임에서 카드의 각도가 적절한지 확인해야 합니다.
- 벡터의 Y 컴포넌트가 아래 방향으로 충분한 거리를 이동했다면 잠금장치를 제거해야 합니다.

단계를 완료로 표시

## 5. 힌트 세트 2

Q&A (0)

아래는 이 기능을 구현하는 데 도움이 될 수 있는 구체적인 메서드, 클래스, 기술 자료를 안내하는 두 번째 힌트 세트입니다. 이 힌트를 확인하기 전에 위의 지침에 따라 기능을 스스로 구현해 보세요.

- XRSocketInteractor를 확장하면 움직임 이벤트를 감지할 수 있습니다.
- [CanSelect](https://docs.unity3d.com/Packages/com.unity.xr.interaction.toolkit@0.9/api/UnityEngine.XR.Interaction.Toolkit.XRBaseInteractor.html#UnityEngine_XR_Interaction_Toolkit_XRBaseInteractor_CanSelect_UnityEngine_XR_Interaction_Toolkit_XRBaseInteractable_)를 오버라이드하고 false를 반환하면 오브젝트가 소켓에 스내핑되지 않을 수 있습니다.
- OnHoverEntered에서는 args.interactableObject를 사용하여 메서드에 전달된 ‘args’ 파라미터에서 인터랙터블 오브젝트를 가져올 수 있습니다.
- OnHoverEntered에서는 키 카드가 들어온 위치를 Vector3로 저장합니다.
- OnHoverExited에서는 키 카드가 나간 위치에서 키 카드가 들어온 위치인 Vector3를 빼서 카드가 이동한 Vector3를 구합니다.
- 카드가 이동한 벡터의 Y 컴포넌트 절댓값이 최소 거리보다 크면 문의 잠금을 해제합니다.
- 키 카드의 위쪽 방향과 월드의 위쪽 벡터 사이의 내적을 구하여 두 방향이 평행한지 확인합니다. 내적이 특정 값보다 작으면 스와이프를 취소합니다.

단계를 완료로 표시

## 6. 힌트 세트 3

Q&A (0)

아래는 특정 기능에 사용할 수 있는 실제 코드 스니핏이 포함된 세 번째 힌트 세트입니다. 이 힌트를 사용하기 전에 위의 지침에 따라 기능을 스스로 구현해 보세요.

OnHoverEntered 함수:

```csharp
protected override void OnHoverEntered(HoverEnterEventArgs args)
{
  base.OnHoverEntered(args);

  m_KeycardTransform = args.interactableObject.transform;
  m_HoverEntry = m_KeycardTransform.position;
  m_SwipIsValid = true;
}
```

OnHoverExited 함수:

```csharp
protected override void OnHoverExited(HoverExitEventArgs args)
{
  base.OnHoverExited(args);

  Vector3 entryToExit = m_KeycardTransform.position - m_HoverEntry;

  if (m_SwipIsValid && entryToExit.y < -0.15f)
  {
    VisualLockToHide.gameObject.SetActive(false);
    HandleToEnable.enabled = true;
  }

  m_KeycardTransform = null;
}
```

Update 함수:

```csharp
private void Update()
{
  if (m_KeycardTransform != null)
  {
    Vector3 keycardUp = m_KeycardTransform.forward;
    float dot = Vector3.Dot(keycardUp, Vector3.up);

    if (dot < 1 - AllowedUprightErrorRange)
    {
      m_SwipIsValid = false;
    }
  }
}
```

단계를 완료로 표시

## 7. 추가로 시도해 볼 만한 작업

Q&A (0)

기술을 더 발전시키거나, 새로운 개념을 살펴보거나, 프로젝트를 개선하려면 아래의 추가 활동을 확인해 보세요. 각 활동은 [쉬움], [보통], [어려움]으로 태그가 지정되어 있으므로 과제의 난이도를 선택할 수 있습니다.

이러한 활동은 필수는 아니므로 관심이 없다면 이 단계를 건너뛰어도 무방합니다.

이 학습 경험을 최대한 활용하려면 하나 이상의 활동을 시도해 보는 것이 좋습니다. 행운을 빕니다!

#### [쉬움] 유효 및 무효 스와이프에 대한 피드백

카드 리더기에는 빨간색과 초록색 표시등이 있지만 아무런 기능도 하지 않습니다. 스와이프가 유효하면 초록색 표시등이 켜져야 하고 스와이프가 유효하지 않으면 빨간색 표시등이 켜져야 합니다. 음향 효과를 동반한다면 사용자에게 더 만족스러운 경험이 될 것입니다.

#### [보통] 스와이프 속도 확인

현재는 사용자가 카드 리더기에 카드를 10초 동안 아주 천천히 긁을 수도 있습니다. 하지만 대부분의 카드 리더기는 이런 방식으로 작동하지 않습니다. 카드를 적절한 속도로 카드 리더기에 통과시키는 경우에만 스와이프가 유효해야 합니다.

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

#### [어려움] 특정 경로로 카드 강제 이동

실제 카드 리더기에서 카드는 아주 좁은 특정 경로만 통과할 수 있습니다. 하지만 현재 프로젝트에서는 카드가 정해진 경로를 따르지 않고 손의 위치를 따릅니다. 대신 카드를 어느 정도 가까이 가져가면 카드 리더기의 경로에 스냅됩니다. 그리고 손을 아래로 내릴 때 손의 위치가 카드 리더기에 충분히 가깝다면, 카드가 손의 미묘한 움직임을 따르지 않고 카드 리더기의 경로 내에 완벽하게 머무릅니다. 손의 움직임이 거의 정확하다면 카드가 적절한 위치에 자석으로 고정된 것처럼 움직입니다.

**참고**: ‘어려움’으로 표시된 기능이지만 ‘매우 어려움’이라고 하는 것이 더 정확할 것입니다.

단계를 완료로 표시

## 8. 다음 단계

Q&A (0)

다음 튜토리얼에서는 사용자가 미닫이문을 열고 방을 나가도록 문 기능을 추가합니다.

이 튜토리얼의 기능을 모두 구현했다면 아래의 선택 기능을 구현하여 기술과 프로젝트를 더 발전시켜 보세요.

요구 사항을 성공적으로 충족하지 못했거나 코드를 구현하는 다른 방법이 궁금한 경우 이 프로젝트의 마지막에 완성된 스크립트를 다운로드하여 결과물을 비교해 보세요.

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
