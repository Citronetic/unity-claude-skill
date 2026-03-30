[Image: image]

# アイテムとの衝突を検知する

Tutorial

Beginner

+10XP

15 mins

0

(50)

Unity Technologies

[Image: アイテムとの衝突を検知する]Summary

本チュートリアルでは、以下のことを行います：

- PlayerController のスクリプトを修正して、PickUp　ゲームオブジェクトが Player スフィアに衝突したときに消えるようにする
- PickUp ゲームオブジェクトにタグをつけて、それだけが消えるように条件付きステートメントを作成する
- プレハブの PickUp Collider（ピックアップコライダー）をトリガーとして設定し、Rigidbody コンポーネントを追加することで、収集アイテムが正しく動作するようにする

Resources

- [Disable_PickUps_with_OnTriggerEnter-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/0f4aa1c4-b373-44cf-9f6a-31e832a2c75e/Disable_PickUps_with_OnTriggerEnter-Transcript.txt?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774935911570)
- [Add_a_tag_to_the_PickUp_Prefab-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/1e17a6e9-4a2b-4cf1-8401-3cb94121cf57/Add_a_tag_to_the_PickUp_Prefab-Transcript.txt?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774935911570)
- [Write_a_conditional_statement-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/23e75f60-a18a-4d96-a68c-fdda66e51766/Write_a_conditional_statement-Transcript.txt?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774935911570)
- [Set_the_PickUp_Colliders_as_triggers-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/c7ad327e-d87c-4fbc-8f42-6757042e91e0/Set_the_PickUp_Colliders_as_triggers-Transcript.txt?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774935911570)
- [Add_a_Rigidbody_component_to_the_PickUp_Prefab-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/c4b82a23-2459-48a9-956a-ae769971f549/Add_a_Rigidbody_component_to_the_PickUp_Prefab-Transcript.txt?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774935911570)

Languages available:

日本語English日本語한국어日本語

## 1. OnTriggerEnter 関数で PickUps を無効にする

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/0f4aa1c4-b373-44cf-9f6a-31e832a2c75e/Disable_PickUps_with_OnTriggerEnter-Transcript.txt?_ga=2.78093852.943030393.1594530423-42703541.1592249374)

ステップを完了としてマーク

## 2. PickUp プレハブにタグを追加する

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/1e17a6e9-4a2b-4cf1-8401-3cb94121cf57/Add_a_tag_to_the_PickUp_Prefab-Transcript.txt?_ga=2.107524362.943030393.1594530423-42703541.1592249374)

ステップを完了としてマーク

## 3. 条件付きステートメントの作成

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/23e75f60-a18a-4d96-a68c-fdda66e51766/Write_a_conditional_statement-Transcript.txt?_ga=2.39959082.943030393.1594530423-42703541.1592249374)

ステップを完了としてマーク

## 4. Pickup Colliders をトリガーとして設定する

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/c7ad327e-d87c-4fbc-8f42-6757042e91e0/Set_the_PickUp_Colliders_as_triggers-Transcript.txt?_ga=2.120102528.943030393.1594530423-42703541.1592249374)

ステップを完了としてマーク

## 5. PickUp プレハブに Rigidbody コンポーネントを追加

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/c4b82a23-2459-48a9-956a-ae769971f549/Add_a_Rigidbody_component_to_the_PickUp_Prefab-Transcript.txt?_ga=2.120609024.943030393.1594530423-42703541.1592249374)

#### **PlayerController スクリプト**

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
    public float speed = 0;

    private Rigidbody rb;

    private float movementX;
    private float movementY;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    private void OnMove(InputValue movementValue)
    {
        Vector2 movementVector = movementValue.Get<Vector2>();

        movementX = movementVector.x;
        movementY = movementVector.y;
    }

    private void FixedUpdate()
    {
        Vector3 movement = new Vector3(movementX, 0.0f, movementY);

        rb.AddForce(movement * speed);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("PickUp"))
        {
            other.gameObject.SetActive(false);
        }
    }
}
```

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
