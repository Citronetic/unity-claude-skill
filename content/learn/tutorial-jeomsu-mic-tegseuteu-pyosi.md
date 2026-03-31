[Image: image]

# 점수 및 텍스트 표시

Tutorial

Beginner

+10XP

20 mins

2

(136)

Unity Technologies

[Image: 점수 및 텍스트 표시]Summary

이 튜토리얼에서 배울 내용은 다음과 같습니다.

- PlayerController 스크립트를 수정하여 수집한 PickUp 게임 오브젝트 수 저장
- 표시할 UI 텍스트 요소 생성 및 설정:

- count 값
- 게임 종료 메시지

Resources

- [Store_the_value_of_collected_PickUps-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/0b9632a5-b063-4091-a61b-38de02fa32c9/Store_the_value_of_collected_PickUps-Transcript.txt?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035127385)
- [Create_a_UI_text_element-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/9c18646b-8fef-4bb3-bc88-ddd2e51cfd90/Create_a_UI_text_element-Transcript.txt?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035127385)
- [Display_the_count_value-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/767d8de9-0b9a-497b-877c-3bce87f45499/Display_the_count_value-Transcript.txt?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035127385)
- [Create_a_game_end_message-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/a7918ac3-b20a-4cd3-89db-4f9ff58b75b1/Create_a_game_end_message-Transcript.txt?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035127385)

Languages available:

한국어English日本語한국어한국어

## 1. 수집한 PickUp 게임 오브젝트의 수 저장

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

[대본 다운로드](https://connect-prd-cdn.unity.com/20200716/0b9632a5-b063-4091-a61b-38de02fa32c9/Store_the_value_of_collected_PickUps-Transcript.txt?_ga=2.43613101.943030393.1594530423-42703541.1592249374)

#### **PlayerController 스크립트**

```csharp
using UnityEngine;

// Unity UI 및 Input System을 사용하는 데 필요한 네임스페이스를 포함합니다.
using UnityEngine.InputSystem;
using TMPro;

public class PlayerController : MonoBehaviour {

	// 플레이어 속도 및 텍스트 UI 게임 오브젝트에 대한 public 변수를 만듭니다.
	public float speed;
	public TextMeshProUGUI countText;
	public GameObject winTextObject;

        private float movementX;
        private float movementY;

	private Rigidbody rb;
	private int count;

	// 게임을 시작할 때
	void Start ()
	{
		// 리지드바디 컴포넌트를 private rb 변수에 할당합니다.
		rb = GetComponent<Rigidbody>();

		// count를 0으로 설정합니다.
		count = 0;

		SetCountText ();

                // Win Text UI의 텍스트 프로퍼티를 빈 문자열로 설정하여 'You Win'(게임 오버 메시지)을 공백으로 만듭니다.
                winTextObject.SetActive(false);
	}

	void FixedUpdate ()
	{
		// Vector3 변수를 만들고 X와 Z를 할당하여 위의 horizontal 및 vertical 플로트 변수를 구현합니다.
		Vector3 movement = new Vector3 (movementX, 0.0f, movementY);

		rb.AddForce (movement * speed);
	}

	void OnTriggerEnter(Collider other)
	{
		// 교차하는 게임 오브젝트에 'Pick Up' 태그가 할당되어 있는 경우
		if (other.gameObject.CompareTag ("PickUp"))
		{
			other.gameObject.SetActive (false);

			// 점수 변수 'count'에 1을 추가합니다.
			count = count + 1;

			// 'SetCountText()' 함수를 실행합니다(아래 참조).
			SetCountText ();
		}
	}

        void OnMove(InputValue value)
        {
        	Vector2 v = value.Get<Vector2>();

        	movementX = v.x;
        	movementY = v.y;
        }

        void SetCountText()
	{
		countText.text = "Count: " + count.ToString();

		if (count >= 12)
		{
                    // 'winText'의 텍스트 값을 설정합니다.
                    winTextObject.SetActive(true);
		}
	}
}
```

단계를 완료로 표시

## 2. UI 텍스트 요소 생성

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

[대본 다운로드](https://connect-prd-cdn.unity.com/20200716/9c18646b-8fef-4bb3-bc88-ddd2e51cfd90/Create_a_UI_text_element-Transcript.txt?_ga=2.112098188.943030393.1594530423-42703541.1592249374)

단계를 완료로 표시

## 3. count 값 표시

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

[대본 다운로드](https://connect-prd-cdn.unity.com/20200716/767d8de9-0b9a-497b-877c-3bce87f45499/Display_the_count_value-Transcript.txt?_ga=2.74447130.943030393.1594530423-42703541.1592249374)

단계를 완료로 표시

## 4. 게임 종료 메시지 생성

Q&A (0)[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

[대본 다운로드](https://connect-prd-cdn.unity.com/20200716/a7918ac3-b20a-4cd3-89db-4f9ff58b75b1/Create_a_game_end_message-Transcript.txt?_ga=2.82229918.943030393.1594530423-42703541.1592249374)

단계를 완료로 표시

## Complete this Tutorial

모든 단계를 완료로 표시
