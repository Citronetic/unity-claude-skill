[Image: image]

# Displaying Score and Text

Tutorial

Beginner

+10XP

20 mins

20

(4159)

Unity Technologies

[Image: Displaying Score and Text]Summary

In this tutorial, you’ll:

- Revise the PlayerController script to store the value of collected PickUp GameObjects
- Create and configure UI Text Elements to display:

- The count value
- An end of game message

Resources

- [Store_the_value_of_collected_PickUps-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/0b9632a5-b063-4091-a61b-38de02fa32c9/Store_the_value_of_collected_PickUps-Transcript.txt?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954673263)
- [Create_a_UI_text_element-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/9c18646b-8fef-4bb3-bc88-ddd2e51cfd90/Create_a_UI_text_element-Transcript.txt?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954673263)
- [Create_a_game_end_message-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20200716/a7918ac3-b20a-4cd3-89db-4f9ff58b75b1/Create_a_game_end_message-Transcript.txt?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954673263)
- [Display_the_count_value-Transcript.txt](https://unity-connect-prd.storage.googleapis.com/20240924/d66641f2-8d3d-411a-99cb-eac793da885f/Display_the_count_value-Transcript.txt?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954673263)

Languages available:

EnglishEnglish日本語한국어English

## 1. Overview

Q&A (0)

In this tutorial, you’ll:

- Revise the PlayerController script to store the value of collected PickUp GameObjects
- Create and configure UI Text Elements to display:

- The count value
- An end of game message

By the end of this tutorial, your game will look something like this:

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

Mark step as complete

## 2. Store the value of collected PickUps

Q&A (0)

Follow the video or text instructions below to declare a new count variable, initialize the variable, and increment it by 1 every time the player collects a **PickUp** GameObject:

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/0b9632a5-b063-4091-a61b-38de02fa32c9/Store_the_value_of_collected_PickUps-Transcript.txt?_ga=2.43613101.943030393.1594530423-42703541.1592249374)

#### 1.  Declare a new count variable.

- Open the **PlayerController** script for editing.
- Underneath the **Rigidbody** variable declaration, add the following line of code:

```csharp
private int count;
```

#### 2.  Initialize the count variable.

- In the **Start** function, add the following line of code to initialize the count variable at 0:

```csharp
count = 0;
```

#### 3.  Increment the count variable.

- In the **OnTrigger** function, after the line that sets the other GameObject to inactive, add the following line of code:

```csharp
count = count + 1;
```

Mark step as complete

## 3. Create a UI text element

Q&A (0)

Follow the video or text instructions below to add a Text GameObject named “CountText”, preview the full canvas in 2D view, edit the text, and edit the text position:

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/9c18646b-8fef-4bb3-bc88-ddd2e51cfd90/Create_a_UI_text_element-Transcript.txt?_ga=2.112098188.943030393.1594530423-42703541.1592249374)

#### 1.  Add a Text object named “CountText”.

- In the Hierarchy, **right-click** > **UI** > **Text - TextMeshPro**.
- If a dialog opens to install TextMesh Pro Essentials – select **Import TMP Essentials,**then close that dialog.
- Rename the **Text (TMP)** GameObject “CountText”.

#### 2.  Preview the full canvas in 2D view.

- Select the **Canvas** GameObject and press the **F** key to frame the entire GameObject in the **Scene** view.
- Select the 2D toggle at the top of the **Scene** view to change to 2D view.

#### 3.  Edit the text.

- Select the **CountText** GameObject.
- In the **Text** box, delete “New Text” and replace it with “Count Text” as a placeholder.

#### 4.  Edit the text position.

- Select the anchor preset icon at the top of the **Rect Transform** component to open the **Anchors and Presets** menu.
- Hold **Shift**+**Alt** (macOS: **Option**) and select the upper-left anchor point. Holding those keys will set the pivot and position for **CountText** based on the new anchor.
- Change the **Rect Transform**component’s **Pos X** value to **10** and **Pos Y** value to **-10** to move it away from the corner a bit.

[Image: image]Mark step as complete

## 4. Display the count value

Q&A (0)

Follow the video or text instructions below to create a new **SetCountText()** function that updates the score UI:

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

[Download Transcript](https://unity-connect-prd.storage.googleapis.com/20240924/d66641f2-8d3d-411a-99cb-eac793da885f/Display_the_count_value-Transcript.txt?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954673263)

#### 1.  Import the TMPro library.

- Open the **PlayerController** script in your script editor.
- Add the following new line of code underneath the other “using” statements:

```csharp
using TMPro;
```

#### 2.  Declare a new text variable.

- Underneath the **speed** variable, create a new variable for your text:

```csharp
public TextMeshProUGUI countText;
```

#### 3.  Create a new SetCountText() function.

- Underneath the **OnMove** function’s closing curly brace, leave a space and add the following new function:

```csharp
void SetCountText()
   {
       countText.text =  "Count: " + count.ToString();
   }
```

#### 4.  Call SetCountText in Start and OnTriggerEnter.

- Add the following line at the end of the **Start** function to set the text at the beginning of the game:

```csharp
SetCountText();
```

- Inside the IF statement for **OnTriggerEnter**, call the **SetCountText** function again using the same instruction:

```csharp
SetCountText();
```

- Save your script.

#### 5. Assign the CountText variable in the Inspector window.

- Select the **Player** GameObject in the **Hierarchy**window, then drag the **CountText** GameObject into the **Count Text** slot to reference the UI text element.

**Important:**This step is very important and easy to miss. If you do not do this step, you will see a **NullReferenceException**error in the **Console** window and your game will not work.

[Image: image]

#### 6.  Test your game.

- The score should now start at 0, then increase by 1 each time the player collects a **PickUp** GameObject!
- If your game is not working, check the script sample at the end of this tutorial to make sure your code is correct.

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

Mark step as complete

## 5. Create a game end message

Q&A (0)

Follow the video or text instructions below to create a new “You Win” text GameObject, declare a variable for your text that’s disabled at start, display the text when all **PickUp** GameObjects are collected, and assign the **winTextObject** variable in the **Inspector** window:

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

[Download Transcript](https://connect-prd-cdn.unity.com/20200716/a7918ac3-b20a-4cd3-89db-4f9ff58b75b1/Create_a_game_end_message-Transcript.txt?_ga=2.82229918.943030393.1594530423-42703541.1592249374)

#### 1.  Create a new “You Win” text GameObject.

- In the **Hierarchy** window,**right-click** > **UI** > **Text - TextMeshPro,**then rename it something like “WinText”
- In the **Inspector**window, change the text to “You Win!”
- Set the **Vertex Color** to black.
- Set the**Font Size** to **32**, and make it bold if you want.
- Set the **alignment** to **Center**.
- In the **Rect Transform** component, set the **Pos X** value to **0**, and the **Pos Y** to around **100**.
- Preview the text in **Game** view, then save the scene if you’re happy with the text.

#### 2. Declare a variable for your text that’s disabled at start.

- In the **PlayerController** script, create a new public variable, of the type GameObject, and call it “winTextObject”:

```csharp
public GameObject winTextObject;
```

- In the **Start** function, add the following line of code to hide the win text by default at start:

```csharp
winTextObject.SetActive(false);
```

#### 3. Display the text when all pickups are collected.

- In the **SetCountText** function, underneath the instruction setting the count value UI text, add the following IF statement:

```csharp
if (count >= 12)
       {
           winTextObject.SetActive(true);
       }
```

**Important:**Make sure to change the number “12” to however many PickUp GameObjects you actually have in your game.

#### 4.  Assign the winTextObject variable in the Inspector window.

- Save your script and return to Unity Editor.
- Select the **Player** GameObject in the **Hierarchy**window, then drag the **WinText** GameObject from the **Hierarchy**window into the **Win Text Object** variable slot.

[Image: image]

#### 5.  Test your game.

- Save the scene and enter Play mode to test your changes.
- The win text should be displayed when all PickUp GameObjects are collected.

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

Mark step as completeOptional Step

## 6. Final script sample

Q&A (0)

If your script is not working as expected, below is an example of what your code should look like at this point. The comments have been added to make the code more readable.

#### PlayerController.cs

```csharp
using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.InputSystem;
using TMPro;

public class PlayerController : MonoBehaviour
{
 // Rigidbody of the player.
 private Rigidbody rb;

 // Variable to keep track of collected "PickUp" objects.
 private int count;

 // Movement along X and Y axes.
 private float movementX;
 private float movementY;

 // Speed at which the player moves.
 public float speed = 0;

 // UI text component to display count of "PickUp" objects collected.
 public TextMeshProUGUI countText;

 // UI object to display winning text.
 public GameObject winTextObject;

 // Start is called before the first frame update.
 void Start()
    {
 // Get and store the Rigidbody component attached to the player.
        rb = GetComponent<Rigidbody>();

 // Initialize count to zero.
        count = 0;

 // Update the count display.
        SetCountText();

 // Initially set the win text to be inactive.
        winTextObject.SetActive(false);
    }

 // This function is called when a move input is detected.
 void OnMove(InputValue movementValue)
    {
 // Convert the input value into a Vector2 for movement.
        Vector2 movementVector = movementValue.Get<Vector2>();

 // Store the X and Y components of the movement.
        movementX = movementVector.x;
        movementY = movementVector.y;
    }

 // FixedUpdate is called once per fixed frame-rate frame.
 void FixedUpdate()
    {
 // Create a 3D movement vector using the X and Y inputs.
        Vector3 movement = new Vector3 (movementX, 0.0f, movementY);

 // Apply force to the Rigidbody to move the player.
        rb.AddForce(movement * speed);
    }


 void OnTriggerEnter(Collider other)
    {
 // Check if the object the player collided with has the "PickUp" tag.
 if (other.gameObject.CompareTag("PickUp"))
        {
 // Deactivate the collided object (making it disappear).
            other.gameObject.SetActive(false);

 // Increment the count of "PickUp" objects collected.
            count = count + 1;

 // Update the count display.
            SetCountText();
        }
    }

 // Function to update the displayed count of "PickUp" objects collected.
 void SetCountText()
    {
 // Update the count text with the current count.
        countText.text = "Count: " + count.ToString();

 // Check if the count has reached or exceeded the win condition.
 if (count >= 12)
        {
 // Display the win text.
            winTextObject.SetActive(true);
        }
    }
}
```

Mark step as complete

## Complete this Tutorial

Mark all steps complete
