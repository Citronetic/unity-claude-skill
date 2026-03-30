[Image: image]

# Programming Essentials: More things to try

Tutorial

foundational

+10XP

20 mins

28

(4980)

Unity Technologies

[Image: Programming Essentials: More things to try]Summary

Further develop your project and skills with optional challenges of varying difficulty.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Overview

Q&A (0)

Try these optional activities to challenge yourself, build your skills, and improve your project!

Each challenge is tagged as **Easy**, **Medium**, or **Expert** difficulty so that you know what to expect. You can do one of them, all of them, or none of them — it’s totally up to you!

- **Easy:** Add a jump ability.
- **Medium:** Make the door open when the player approaches.
- **Expert:** Use generative AI to simulate sunrise and sunset.

If you’re not interested in doing these challenges, skip to the end of this tutorial to mark it as complete.

Mark step as complete

## 2. Easy: Add a jump ability

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

The ability for a player character to jump unlocks limitless additional gameplay possibilities and mechanics.

In this extra challenge, you’ll give the player the ability to jump with just a few lines of code.

This optional challenge is classified as Easy difficulty.

**Instructions**

**1.**  Open the **PlayerController** script in your script editor.

**2.**  Add the following variable declaration statement directly below your other **speed** and **rotationSpeed** variables toward the top of your script:

**public float jumpForce = 5.0f;**

After you save your script, this variable will be visible and editable in the **Player Controller** component.

**3.**  Below the **Start()** function, add the following code:

```csharp
private void Update()
{
  if (Keyboard.current.spaceKey.wasPressedThisFrame)
  {
    rb.AddForce(Vector3.up * jumpForce, ForceMode.VelocityChange);
  }
}
```

Here's what this code means:

- **Update():** Unity calls this method once per frame. It’s ideal for checking player input and driving real-time behavior.
- **if (Keyboard.current.spaceKey.wasPressedThisFrame):** Checks if the **Spacebar** was pressed during the current frame using Unity’s Input System package. This triggers once per key press, not every frame the key is held.
- **rb:** A reference to the GameObject's **Rigidbody** component, used to apply physics.
- **rb.AddForce(Vector3.up * jumpForce, ForceMode.VelocityChange):** Applies an upward force to make the object jump.

- Vector3.up indicates the upward direction, and jumpForce sets the force magnitude.
- ForceMode.VelocityChange changes velocity directly, making the jump instant.

**4.**  Save your script and return to Unity. Enter **Play** mode and press **Spacebar** to test the new jump. Adjust the Jump Force variable as you see fit.

Mark step as complete

## 3. Medium: Use generative AI to simulate sunrise and sunset

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

You’d be amazed at how much you can accomplish with the help of generative AI large language models (LLMs) like [Unity AI](https://unity.com/features/ai), ChatGPT, or Claude. These tools are especially helpful for generating relatively simple code. Unity Muse is trained and refined for Unity-specific questions, so it will probably give you the most reliable results, but other LLMs will work very well too.

In this Expert-level challenge, you’ll use one of these tools to generate a script that slowly rotates the **Directional Light**, simulating a day-night cycle in your scene.

This optional challenge is classified as Expert difficulty.

**Instructions**

**1.**  Head over to your generative AI tool of choice and enter a prompt similar to the one below:

“Create a script for Unity that I can add to my **Directional Light** that slowly rotates the light to simulate the day passing. The actual seconds for a day to pass should be a variable editable in the **Inspector** window.”

**2.**  In the script that is generated, locate the class declaration line at the top of the script that says, “public class [SCRIPT_NAME] : MonoBehaviour.”

The [SCRIPT_NAME] is what you’ll need to name your script. The one generated for you will likely be different from the name of the script in the example!

**3.**  In the **Project** window, create a new script and give it the appropriate script name, then apply it to the **Directional Light** GameObject in your scene.

**Important:**  The name of your script in the **Project** window and the name declared within the script in the class declaration (“public class [SCRIPT_NAME]”) must match exactly! Otherwise, your project will display an error in the console.

**4.**  Open the script and replace the default code with the AI-generated code. Save the script and return to the Editor.

**5.**  In the **Inspector** window, there should be a new variable that allows you to control the time it takes for a full day to pass. Make the day pass quickly for testing purposes.

**6.**  Enter **Play** mode to test your new sun rotation functionality.

If something doesn’t work, explain what is happening to the AI tool and see if the AI can troubleshoot the issue!

Mark step as complete

## 4. Expert: Make the door open when the player approaches

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

The player is currently trapped in the living room. It would open up so many possibilities if the player was able to open the doors and enter other rooms. You could even connect the living room with the kitchen and the kid’s room and allow the player to explore all three environments!

To allow the player to open the door, you’ll need to add a new script that makes use of Unity’s Animator system. You may not have realized this, but you can actually create animations directly in Unity and then trigger those animations via scripts.

The **Door** GameObject already has an **Animator** component with a Door_Open animation attached to it. You need to add the script that tells that animation to start when the player enters a trigger zone of the door.

This optional challenge is classified as Medium difficulty.

**Instructions**

**1.**  Create a new script in the **Unity Essentials** > **Scripts** folder named “DoorOpener”.

**Important:**  The name of this script must match exactly the name declared at the top of the class in the code snippet below (DoorOpener).

**2.**  In the **Scene** view, select the door on the right side of the living room, then in the **Hierarchy** window, make sure you have selected the parent **Door** GameObject — and not the child **DoorPanel** or **DoorHandle** GameObjects.

The parent GameObject is the one with the **Animator** component attached to it.

**3.**  With the **Door** GameObject selected, select **Add Component,** then search for and add your new **DoorOpener** script.

**4.**  Open the **DoorOpener** script in your script editor, delete all the default code inside it, and replace it by copying and pasting the code below into the empty script.

Feel free to read through the code to see if you can understand it, with help from the comments. When you’re done, save your script and return to the Unity Editor.

The script relies on the door having a trigger zone that detects when the player has entered it.

**5.**  With the **Door** GameObject still selected, add a new **Box Collider** component, then enable the **Is Trigger** property.

**6.**  In the **Box Collider**component, select **Edit Collider** then use the **Scene** view collider controls to set the size and position of the trigger zone.

**7.**  Enter **Play** mode to test your game.

When the player enters the trigger zone, the door should open!

**Code**

```csharp
using UnityEngine;

public class DoorOpener : MonoBehaviour
{
   private Animator doorAnimator;

   void Start()
   {
       // Get the Animator component attached to the same GameObject as this script
       doorAnimator = GetComponent<Animator>();
   }

   private void OnTriggerEnter(Collider other)
   {
       // Check if the object entering the trigger is the player (or another specified object)
       if (other.CompareTag("Player")) // Make sure the player GameObject has the tag "Player"
       {
           if (doorAnimator != null)
           {
               // Trigger the Door_Open animation
               doorAnimator.SetTrigger("Door_Open");
           }
       }
   }
}
```

Mark step as complete

## 5. Proceed to the next tutorial

Q&A (0)

No matter if you chose to tackle a single challenge, complete them all, or skip them, you're set for the next step.

**Instructions**

Proceed to the next tutorial, where you'll have a chance to complete a quiz and get credit for completing this project.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
