[Image: image]

# 6.2강 - 조사 및 문제 해결

Tutorial

Beginner

+10XP

60 mins

0

(75)

Unity Technologies

[Image: 6.2강 - 조사 및 문제 해결]SummarySkills

**개요:**

이 수업에서는 Prototype 1에서 차량의 속도계와 RPM 디스플레이를 추가합니다. 이를 통해 프로젝트에서 새로운 기능을 구현하고 버그를 해결할 때 인터넷을 검색하는 프로세스를 배웁니다. 새로운 기능을 추가하는 일이 처음에 보이는 것처럼 간단한 경우는 거의 없으며, 대개 약간의 온라인 검색이 필요한 복잡한 부분과 오류에 직면할 수밖에 없습니다. 이 수업에서는 자신의 프로젝트에서 새로운 기능을 추가하는 방법을 배웁니다.

**프로젝트 결과:**

이 수업을 마치면 차량이 더욱 사실적인 물리적 특성을 갖추고 동작하며 속도계와 RPM(분당 회전 수) 디스플레이가 생깁니다.

Languages available:

한국어EnglishEspañol日本語한국어한국어

## 1. 차량이 힘을 사용하도록 구현

Q&A (0)

> *속도계를 구현하려면 먼저 Translate 메서드를 사용하기보다는, 힘을 사용하는 실제 자동차처럼 차량을 가속하고 감속해야 합니다.*

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

1. **Prototype 1** 프로젝트를 열고 백업을 만듭니다.
2. 차량의 Rigidbody에서 Translate 호출을 AddForce 호출로 바꾸고 speed 변수의 이름을 horsePower로 변경합니다.
3. 차량이 실제로 움직일 정도로 ***horsePower***를 늘립니다.
4. 차량이 올바른 방향으로 움직일 수 있도록 AddForce를 AddRelativeForce로 변경합니다.

[Image: image]단계를 완료로 표시

## 2. 차량의 전복 방지

Q&A (0)

> *차량에 실제 물리를 구현했는데, 조금 쉽게 뒤집어지는 것 같습니다. 차량을 더 안전하게 운전할 방법을 찾아야 합니다.*

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

1. 차량 휠에 휠 콜라이더를 추가하고 해당 반지름과 중앙 위치를 편집한 후 휠에 적용된 다른 콜라이더를 비활성화합니다.
2. 새로운 ***GameObject centerOfMass*** 변수를 만든 후 Start()에서 playerRb 변수를 centerOfMass position에 할당합니다.
3. Center Of Mass라는 차량에 새로운 **Empty Child**오브젝트를 만들고, 위치를 다시 지정하고 인스펙터에서 **Center Of Mass**변수에 할당합니다.
4. 자동차를 원하는 대로 운전할 수 있도록 다양한 질량 중심 위치, 속도, 회전 속도 값을 **테스트**합니다.

[Image: image]단계를 완료로 표시

## 3. 속도계 디스플레이 추가

Q&A (0)

> *차량이 어느 정도 주행 가능한 상태가 되었으므로, 이제 사용자 인터페이스에 속도를 표시해 보겠습니다.*

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

1. Speedometer Text에 사용할 새로운 ***TextMeshPro - Text*** 오브젝트를 추가합니다.
2. **TMPro** **라이브러리**를 임포트한 후 ***speedometerText***에 사용할 새로운 **TextMeshProUGUI**변수를 생성하고 할당합니다.
3. *속도*에 필요한 새로운 float 변수를 추가합니다.
4. Update()에서 속도(mph 또는 kph)를 **계산**한 후 UI에 이 값을 **표시**합니다.

[Image: image]단계를 완료로 표시

## 4. RPM 디스플레이 추가

Q&A (0)

> *많은 차량 시뮬레이터에서 볼 수 있는 멋진 RPM(분당 회전 수) 디스플레이를 추가할 때 까다로운 부분은 RPM 계산 방법을 고안하는 것입니다.*

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

1. 새로운 RPM Text 오브젝트를 만들고, 이를 위한 새로운 **rpmText 변수**를 **생성** 및 **할당**합니다.
2. Update()에서 Modulus/Remainder 연산자(%)를 사용한 다음, 이 값을 UI에 표시합니다.

[Image: image]단계를 완료로 표시

## 5. 공중 운전 방지

Q&A (0)

> *이제 차량에서 대부분의 기능이 제대로 작동하지만, 해결해야 할 심각한 버그가 하나 더 있습니다. 지금은 공중에서도 가속/감속하고, 방향을 바꾸고, 속도/rpm을 높일 수 있습니다.*

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

1. ***allWheels***(또는 frontWheels/backWheels)라는 새로운 **WheelCollider**의 **List**를 선언한 후 각 휠을 인스펙터의 해당 목록에 할당합니다.
2. 새로운 ***int*** ***wheelsOnGround***를 선언합니다.
3. 모든 휠이 지면에 있으면 true를 반환하고 그렇지 않으면 false를 반환하는 ***bool IsOnGround()*** 메서드를 작성합니다.
4. 차량이 지면에 있는지 검사하는 if 문에서 **가속**, **방향 전환**, **속도/rpm** 기능을 래핑합니다.

**PlayerController**

```csharp
using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using UnityEngine;
using TMPro;

public class PlayerController : MonoBehaviour
{

    [SerializeField] float speed;
    [SerializeField] float rpm;
    [SerializeField] private float horsePower = 0;
    [SerializeField] float turnSpeed = 30.0f;
    private float horizontalInput;
    private float forwardInput;
    private Rigidbody playerRb;

    [SerializeField] GameObject centerOfMass;
    [SerializeField] TextMeshProUGUI speedometerText;
    [SerializeField] TextMeshProUGUI rpmText;

    [SerializeField] List<WheelCollider> allWheels;
    [SerializeField] int wheelsOnGround;

    private void Start()
    {
        playerRb = GetComponent<Rigidbody>();
        playerRb.centerOfMass = centerOfMass.transform.position;
    }

    // Update는 프레임당 한 번 호출
    void FixedUpdate()
    {
        //플레이어 입력 받기
        horizontalInput = Input.GetAxis("Horizontal");
        forwardInput = Input.GetAxis("Vertical");

        if (IsOnGround())
        {

            //차량 전진
            //transform.Translate(Vector3.forward * Time.deltaTime * speed * forwardInput);
            playerRb.AddRelativeForce(Vector3.forward * forwardInput * horsePower);
            //차량 방향 전환
            transform.Rotate(Vector3.up * Time.deltaTime * turnSpeed * horizontalInput);

            //속도 출력
            speed = Mathf.RoundToInt(playerRb.velocity.magnitude * 2.237f);
            speedometerText.SetText("Speed: " + speed + " mph");

            //RPM 출력
            rpm = Mathf.Round((speed % 30) * 40);
            rpmText.SetText("RPM: " + rpm);
        }
    }

    bool IsOnGround()
    {
        wheelsOnGround = 0;
        foreach (WheelCollider wheel in allWheels)
        {
            if (wheel.isGrounded)
            {
                wheelsOnGround++;
            }
        }
        if (wheelsOnGround == 4)
        {
            return true;
        } else
        {
            return false;
        }
    }
}
```

단계를 완료로 표시

## 6. 수업 요약

Q&A (0)

**새로운 개념 및 기술**

- Unity Answers, 포럼, 스크립팅 API에서 조사 수행
- 문제 해결을 통해 버그 해결
- AddRelativeForce, Center of Mass, RoundToInt
- Modulus/Remainder(%) 연산자
- 목록 루핑
- 부울을 반환하는 커스텀 메서드

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
