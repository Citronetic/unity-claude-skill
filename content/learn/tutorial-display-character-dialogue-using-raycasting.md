[Image: image]

# Display character dialogue using raycasting

Tutorial

Beginner

+0XP

50 mins

1

(33)

Unity Technologies

[Image: Display character dialogue using raycasting]Summary

In this tutorial, you’ll add a friendly NPC to your game to share a message with the player character.

By the end this this tutorial, you’ll be able to do the following:

- Create a UI display for NPC dialogue.
- Raycast to identify a specific GameObject.
- Display the dialogue UI when the raycast is successful.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

You’ve almost completed your game’s core functionality. In this tutorial you’ll add a friendly non-player character (NPC) who shares a message with the player character, explaining what the task is – to fix all the broken robots.

**Note**: For the purposes of this tutorial, we chose to use the **Ruby’s Adventure** asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Set up a new NPC

Q&A (0)

You’ve already learned how to configure character’s GameObjects like the **PlayerCharacter** or the enemies of your game. The first step of this tutorial will cover some of the same setup: slicing the spritesheet, creating a new GameObject, and adding animations.

To set up the NPC character for your game, follow these instructions:

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

**1.** In the **Project** window, navigate to **Assets**> **_2DAdventureGame**> **Art** > **[Your Chosen Project]** > **Characters**, and select the **NonPlayerCharacterSheet** spritesheet.

**2.** In the **Inspector**window, select the **Open** **Sprite Editor** button and slice the sprite atlas in a 2 by 2 grid.

If you need to recap this process, review the guidance in [**Slice the tileset into sprites**.](https://learn.unity.com/course/2D-adventure-robot-repair/unit/game-environment-and-physics/tutorial/design-and-paint-your-game-tilemap?version=6.3#6932cf45d5bfab44ab132cbb)

**3.** In the **Project** window, select the three sprites for the NPC animation, then drag and release them over the **Hierarchy**window.

This process will automatically add a new GameObject to the scene with an **Animator Controller** set up with an animation clip using the sprites that you have chosen.

**4.** When prompted with the **Create New Animation** dialog, name the animation “NPC” and save it in a new folder inside your **2DAdventureGame**> **Animation** > **[Your Chosen Project]** folder.

**5.** Rename the new GameObject in the scene “NPC”.

**6.** Go to the **Animation** window (**Window** > **Animation** > **Animation**), and change the **Sample Rate** property to **4**, just as you did previously with other animations.

**7.** Now that the NPC sprite is visible in the **Scene** view, position it in the location where you want the NPC to interact with the player.

**Note:** If you want to change the size aspect ratio of your NPC, you can adjust the **Pixels Per Unit** value of its sprite sheet.

**8.** Add a **Box Collider 2D**component to the **NPC** GameObject and scale it to cover the bottom half of the sprite just as you did for the player and enemy characters.

**9.** Create a new layer for the NPC and set the **NPC** GameObject to that layer.

**10.** Turn the **NPC** GameObject into a prefab.

**11**. Test the game and make sure that the animations and collisions work as expected.

Mark step as complete

## 3. Raycast to the the NPC

Q&A (0)

The NPC is going to tell the player that they need to fix the robot enemies, but if that text is constantly displayed on screen that’s going to take up space that could be better used. The NPC’s dialogue should only display when the player character is within a certain range, so you need to determine when the player character is close and facing the NPC.

You could use a trigger, but this means that the player character could trigger the dialogue without facing the NPC, which can feel clunky in practice. Instead, you’ll use a physics system feature called **raycasting**.

**Raycasting** is the action of casting a ray (straight line) in the scene and checking whether that ray intersects with a **collider**. A ray has a starting point, direction, and length. You cast a ray because the check is made from the starting point along the ray until its end.

To set up the raycast, follow these instructions:

**1.** Open the **PlayerController** script in your IDE.

**2.** At the top of the class, declare a new public input action, as you did for the projectile launch action:

```csharp
public InputAction TalkAction;
```

**3.** Save your changes

**4.** In the Unity Editor, set up an event-based Input Action for the **X** key or your choice of alternative input, as you did when implementing projectile launch functionality in [**Detect input to launch a projectile**.](https://learn.unity.com/course/2D-adventure-robot-repair/unit/characters-and-interaction-mechanics/tutorial/implement-projectiles-for-the-player?version=6.3#caa361183e02)

**5.** In your **PlayerController** script, enable the Input Action in the **Start** function:

```csharp
TalkAction.Enable();
```

**6.**In the **Update** function, add the following instructions:

```csharp
RaycastHit2D hit = Physics2D.Raycast(rigidbody2d.position + Vector2.up * 0.2f, moveDirection, 1.5f, LayerMask.GetMask("NPC"));
if (hit.collider != null)
{
FindFriend(hit);
}
```

Here’s an explanation of this code:

- The **RaycastHit2D** type variable hit stores the result of a raycast, which is obtained by calling **Physics2D.Raycast**. There are multiple versions of [Physics2D.Raycast](https://docs.unity3d.com/ScriptReference/Physics2D.Raycast.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954658690); the version used here has four arguments (values you can pass to it).

- The first argument is the starting point for the ray. Here it’s an upward offset from the position of the **PlayerCharacter** GameObject, which will test from the center of the sprite rather than its feet.
- The second argument is the direction that the player character is looking, using **moveDirection**.
- The third argument is the maximum distance for the ray – 1.5 units keeps the test within a short distance from the start point, because the characters aren’t shouting.
- The final argument defines a layer mask, which is a way to only check within specified layers. Any layers that aren’t within the mask are ignored during the intersection test. The NPC layer is the only layer relevant for this test, so it’s the only one in the mask.
- If the raycast detects a GameObject that meets the defined conditions, the**if** statement below will execute and call the **FindFriend** function. You’ll see an error for now because the function hasn’t been defined yet – you’ll define the function next.

**7.** Create the function **FindFriend** that will first check if the correct input action was activated:

```csharp
void FindFriend(RaycastHit2D hit)
{
if (TalkAction.WasPressedThisFrame())
       {

	}
}
```

The **FindFriend** function takes one parameter of type **RaycastHit2D**. This is because the **hit**variable calculated earlier will be used inside the function.

**8.** Within the nested **if**statement code block, add the following instruction to print the GameObject found in the **Console**window:

```csharp
Debug.Log("Raycast has hit the object " + hit.collider.gameObject);
```

**9.** Save your changes, then return to the Unity Editor and test your game to confirm that the raycast works.

[Image: Unity Editor showing the full layout. The Game view is centered and displays the level with the Ruby character, an NPC, damage zones, and strawberry collectibles. The Hierarchy window is on the left, and the Console at the bottom shows logged raycast hit messages.]Mark step as complete

## 4. Create the dialogue UI

Q&A (0)

Next you’re going to create the UI window to display the NPC dialogue to the player.

**Note:** If you need more support to complete this step, refer back to [**Create a health display with UI Toolkit**](https://learn.unity.com/course/2D-adventure-robot-repair/unit/game-ui-and-game-loop/tutorial/create-a-health-display-with-ui-toolkit?version=6.3)for detailed guidance.

To set up the NPC dialogue UI, follow these instructions:

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

**1.** In the **Project** window, inside the **Assets** folder, create a new **UI** **Document** asset, call it “NPCDialogue” and open it.

**2.** In the **Hierarchy**pane add a **VisualElement** and name it “Background”.

**3.** In the **Inspector**pane, use the foldout (triangle) to expand the Inlined Styles section and then the **Background** section, open the **Image** property dropdown, and select **Sprite**.

**4.** Select the **Image** property picker (**⊙**), then search for and select the correct **UIDialogueBox** sprite for your asset pack.

**5.** Still in the **Background** section, select the **Color** property box and set its **A** (alpha) value to **0**.

This will make the dialogue box transparent.

**6.** Use the foldout (triangle) to expand the **Size** section and set the **Size**property’s **Width** and **Height**values to **100%** so that it fills the entire canvas.

Mark step as complete

## 5. Add a Label element

Q&A (0)

To add a **Label**element to the UI that will display the NPC’s dialogue to the player, follow these steps:

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

**1.** In the **Library** pane, under the **Controls**section, click and drag the**Label** element into the **Hierarchy** pane as a child element of the **Background** element.

**2.** In the **Size** section, set the **Label** element’s **Size**property’ **Width**and**Height** values to **100%**.

**3.** In the **Inspector** pane, use the foldout (triangle) to expand the **Spacing** section. In the **Margin** property box enter “0” and in the **Padding** property box enter “25px”, to set the same value for all sides.

Feel free to experiment with bigger or smaller values to find one that looks right to you.

**4.** In the **Inspector**pane, use the foldout (triangle) to expand the **Text** section, and set the **Font**, **Size**, and **Color** properties as you like.

**5.** Still in the **Text** section, set the **Wrap**property to**normal**.

**6.** Use the foldout (triangle) to expand the **Attributes** section. In the **Text** box, enter what you want the NPC to say to the player.

An example of what you could add is: “Press C to shoot cogs and help me fix these broken robots! Come speak to me when you’re finished!”

**7.** Save your changes.

Mark step as complete

## 6. Update the GameUI asset

Q&A (0)

To link the dialogue window to the rest of the game UI, follow these instructions:

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

**1.** In the Editor, double-click the **GameUI** asset to open it in the **UI Builder** window.

**2.** In the**Library** pane, select the **Project**button. Use the foldout (triangle) to expand the **Assets** section.

You’ll find the two **UI** **Document** assets that you’ve created listed.

**3.** Click and drag the **NPCDialogue** asset into the **Hierarchy**pane – this instantiates the **UI** **Document**, like a prefab can instantiate a GameObject. Rename it “NPCDialogue”.

**Note**: The instance of the **NPCDialogue** asset in the **Hierarchy** pane has a different icon.

Adding the additional UI here means that you can modify the individual asset you’ve created and the instance in the **GameUI** will reflect those changes. If you added multiple dialogue windows in your UI, you would then have to change the source asset once to update all instances.

**4.** With the **NPCDialogue** still selected, in the **Inspector**pane, use the foldout (triangle) to expand the **Position** section, then set the **Position Mode**property to **Absolute**.

**5.** Set the remaining property values in the **Position** section as follows:

- **Top** to **70%**
- **Right** to **10%**
- **Bottom** to **0%**
- **Left** to **10%**

If you want to adjust the exact positioning of the dialogue window on the screen, you can adjust the position values.

**Important**: Remember to set your **Canvas** GameObject to match the **Game** view so the **Viewport**pane reflects the positioning that players will encounter in the game. If you need a reminder on how to do this, check the instructions in [**Set the UI Canvas size to match the Game view**.](https://learn.unity.com/course/2D-adventure-robot-repair/unit/game-ui-and-game-loop/tutorial/create-a-health-display-with-ui-toolkit?version=6.3#7d2fb7f77894)

Mark step as complete

## 7. Update the UIHandler script

Q&A (0)

Now that you’ve created the UI for the dialogue, you need to update your scripts to ensure that it’s displayed for a short amount of time after a raycast that finds the NPC’s collider.

To update the **UIHandler** script, follow these instructions:

**1.** Open the **UIHandler** script in your IDE.

**2.** At the top of the **UI Handler** class, declare the following three variables:

```csharp
public float displayTime = 4.0f;
private VisualElement m_NonPlayerDialogue;
private float m_TimerDisplay;
```

Here’s an explanation of this code:

- The float variable **displayTime** stores the length of time that the dialogue window will be displayed, initialized to 4 but made public so you can adjust this in the **Inspector**window.
- The private **VisualElement** variable **m_NonPlayerCharacterDialogue** will store the reference to the **VisualElement** when you retrieve it.
- The private float variable **timerDisplay** is set to the value of **displayTime** when the dialogue window is instantiated, and will count down the time until the window needs to be hidden.

**3.** In the **Start** function, add the following three instructions:

```csharp
m_NonPlayerDialogue = uiDocument.rootVisualElement.Q<VisualElement>("NPCDialogue");
m_NonPlayerDialogue.style.display = DisplayStyle.None;
m_TimerDisplay = -1.0f;
```

Here’s an explanation of this code:

- The first instruction stores the reference to the**NPCDialogue** element in the **m_NonPlayerDialogue** variable.
- The second instruction hides the element when the **UIDocument** GameObject is instantiated at the start of the game.
- The third instruction sets the **m_TimeDisplay** countdown to **-1**. This value is just below zero, and so can be used as a default for not displaying the UI.

**4.** Save your changes.

Mark step as complete

## 8. Challenge: Add new functions

Q&A (0)

**You’ve encountered a challenge!**

Here, we encourage you to try writing the code on your own. But don’t worry – if you want to make sure you did it correctly, you can review the script in the next step.

You need to write two additional functions for the **UIHandler** script:

1. An **Update** function that decrements (decreases) the display timer if it’s above zero and then resets **m_NonPlayerDialogue** to **DisplayStyle.None** when the timer reaches zero.
2. A public function to display the **NPCDialogue** window when called and set the timer variable to begin the countdown.

Apply what you’ve learned so far in this course and try to write these functions yourself before you read on to review the solution.

### Check the solution

To check your functions for the NPC dialogue window, follow these instructions:

**1.** Create a new **Update** function:

```csharp
private void Update()
{

}
```

**2.** Add an **if** statement inside the **Update** function and code block that decrements the **m_TimerDisplay** variable by **Time.deltaTime** if the variable value is greater than zero:

```csharp
if (m_TimerDisplay > 0)
{
m_TimerDisplay -= Time.deltaTime;

}
```

**3.** Nested within that same code block, add another **if** statement that hides the dialogue window when the countdown is over:

```csharp
if (m_TimerDisplay < 0)
{
m_NonPlayerDialogue.style.display = DisplayStyle.None;
}
```

**4.** Check the full **Update** function before you continue:

```csharp
private void Update()
{
if (m_TimerDisplay > 0)
       {
           	m_TimerDisplay -= Time.deltaTime;
           	if (m_TimerDisplay < 0)
           	{
               	m_NonPlayerDialogue.style.display = DisplayStyle.None;
           	}
       }
}
```

**5.** Create a new public function called **DisplayDialogue**:

```csharp
public void DisplayDialogue()
{

}
```

**6.** Inside the function add the following instructions to make the UI window visible and set the timer to its full count:

```csharp
m_NonPlayerDialogue.style.display = DisplayStyle.Flex;
m_TimerDisplay = displayTime;
```

**7.** Save your changes.

Mark step as complete

## 9. Display the dialogue window in the game

Q&A (0)

The final step to complete is to display the dialogue window after the raycast finds the NPC and the Talk action key binding is pressed.

To implement this functionality, follow these instructions:

**1.** Open the **PlayerController** script in your IDE and go to the **FindFriend** function. Find your nested **if** statement that currently prints to the **Console**window.

**2.** Delete the current instruction that prints to the **Console**window and in its place, add the following line of code:

```csharp
UIHandler.instance.DisplayDialogue();
```

This will call the **DisplayDialogue** function from the **UIHandler** script you defined in the previous step, and thus create an instance of the dialogue UI on the screen.

**3.**The function no longer requires a parameter, so remove it from the function definition and delete the **hit** variable you passed when calling the function inside the **Update** method.

This is how your function should look now:

```csharp
void FindFriend()
{
if (TalkAction.WasPressedThisFrame())
       {
           	UIHandler.instance.DisplayDialogue();
       }
}
```

**4.** Save your changes, then return to the Unity Editor and test the game.

Now the NPC dialogue should display for a short time when the **PlayerCharacter** is close to and facing the NPC and then provides the required input.

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

## 10. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

**Important:** The **Medium: Add Controls UI** challenge is marked as optional, but it’s actually essential for a good gameplay experience, so we strongly encourage you to complete it. After this step, the affected script updates will be reflected in the **Check your scripts** sections at the end of the tutorials. To avoid confusion between the provided scripts and your own code, please make sure you complete this challenge first.

### Medium: Add a controls UI

Right now, there’s a small issue: as the developer, you know which key activates the **Talk** action, but the player doesn’t. UI elements help guide players through the game, showing how to move, interact, and make decisions. You’ve already used UI to display the player’s health and added text instructions for launching projectiles, but you still need to show how to interact with the NPC.

To fix this, you’ll add a small dialogue bubble that appears when the **PlayerCharacter** detects the NPC with the raycast, showing the correct key to press, and disappears when the **PlayerCharacter**moves away.

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

**1.** In the **Project** window, go to the **_2DAdventureGame** > **Tutorial_Demo** > **Demo_Art**>**Common**folder, find the **DialogueBox**asset, and add it to your scene.

This asset is a sprite that already includes the **X** key printed on it, indicating which key should be pressed. If you chose a different key for the **TalkAction** binding, you’ll need to create your own sprite or find another way to display the correct key visually.

**2.**Resize the sprite and use the **Move**Tool to position it above the NPC. Then, set the **Order in Layer**value in the **Sprite Renderer** component to **2** so it appears above the characters and background.

**Note:**You’ve already learned earlier in this course how to control sprite rendering order using **Sorting Layers**and the **Order in Layer**property in**[Set the tilemap Order in Layer](https://learn.unity.com/course/2D-adventure-robot-repair/unit/player-character-and-movement/tutorial/create-a-basic-2d-gameplay-environment?version=6.3#6932ccc4d5bfab44ab132c7e)**[.](https://learn.unity.com/course/2D-adventure-robot-repair/unit/player-character-and-movement/tutorial/create-a-basic-2d-gameplay-environment?version=6.3#6932ccc4d5bfab44ab132c7e)

**4.** Set the new **DialogueBox** GameObject as a child of the **NPC.**

**5.** Now, create a new **NonPlayerCharacter** script and open the script in your IDE.

**6.** Delete the **Update** function.

**7.** Create one public variable called **dialogueBubble**of type **GameObject**:

```csharp
public GameObject dialogueBubble;
```

**8.** In the **Start** function, set the **dialogueBubble** GameObject to inactive.

```csharp
void Start()
{
dialogueBubble.SetActive(false);
}
```

You only want it to appear when the **PlayerCharacter**’s raycast detects the NPC.

**9.** Save the script.

**10.** In the Unity Editor, assign the script to the **NPC** GameObject as a component and assign the **DialogueBox** GameObject to the **dialogueBubble** property.

The main purpose of this script is to identify the **NPC** GameObject through code so that you can access its child GameObjects.

**11.** Open the **PlayerController** script and declare a new private **NonPlayerCharacter**variable.

```csharp
private NonPlayerCharacter lastNonPlayerCharacter;
```

**12.** In the **Update** method, after calculating the raycast to detect the enemy, and inside the **if** statement that checks **hit.collider != null**, create a new variable of type **NonPlayerCharacter**to store a reference to the **NPC** GameObject detected by the raycast:

```csharp
NonPlayerCharacter npc = hit.collider.GetComponent<NonPlayerCharacter>();
```

**Note**: **GetComponent** is relatively **resource-intensive**, so avoid calling it every frame. In this situation, **GetComponent** is only called when the **PlayerCharacter**raycast detects the NPC.

**13.**Still within the same **if** code block, on the next line, but before the **FindFriend()**function calling, add the following lines of code:

```csharp
npc.dialogueBubble.SetActive(true);
lastNonPlayerCharacter = npc;
```

With these instructions, you activate the **DialogueBox** GameObject only when the raycast detects the **NPC GameObject**. The script also stores the detected **NPC**GameObject in the **lastNonPlayerCharacter** variable to keep track of the interaction during the current frame.

**14.**Right after the **if** code block that checks whether **hit.collider != null**, add the following lines of code:

```csharp
else
{
if (lastNonPlayerCharacter != null)
      	{
       	lastNonPlayerCharacter.dialogueBubble.SetActive(false);
             	lastNonPlayerCharacter = null;
      	}
}
```

The **else** statement means that the condition **hit.collider != null**was not met – in other words, there is no **NPC**GameObject in front of the **PlayerCharacter**. In that case, the code checks whether an **NPC**GameObject was previously stored in the **lastNonPlayerCharacter** variable. If so, it hides the **DialogueBox** GameObject and clears the **lastNonPlayerCharacter**variable.

The entire code block should look like this:

```csharp
RaycastHit2D hit = Physics2D.Raycast(rigidbody2d.position + Vector2.up * 0.2f, moveDirection, 1.5f, LayerMask.GetMask("NPC"));
if (hit.collider != null)
{
NonPlayerCharacter npc = hit.collider.GetComponent<NonPlayerCharacter>();
npc.dialogueBubble.SetActive(true);
lastNonPlayerCharacter = npc;
FindFriend();
}
else
{
if (lastNonPlayerCharacter != null)
{
         	lastNonPlayerCharacter.dialogueBubble.SetActive(false);
             	lastNonPlayerCharacter = null;
  }
}
```

### Medium: Add a second NPC with a unique dialogue

One NPC is great, but two are even better! Add a second NPC to your scene and give them something different to say than the first NPC. To accomplish this task, you should do the following:

- Make the text displayed a parameter of the **DisplayDialogue** function. (You’ll need to retrieve the **Label** child element of the **DialogueWindow** to change it!)
- Make the text a public property of the **NonPlayerCharacter** script.

By making the text a public property, you can write whatever you like for each individual NPC.

Mark step as complete

## 11. Check your scripts

Q&A (0)

Take a moment to check that your script is correct before continuing.

### PlayerController.cs

**Important**: This script includes the instruction to implement the optional UI added to display de controls to talk with the NPC, added in the **Medium: Add a controls UI** challenge, but does not contain code for any additional extension work.

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{

    	// Variables related to player character movement
    	public InputAction MoveAction;
    	Rigidbody2D rigidbody2d;
    	Vector2 move;
    	public float speed = 3.0f;

    	// Variables related to the health system
    	public int maxHealth = 5;
    	public int health { get { return currentHealth; } }
    	int currentHealth;

    	// Variables related to temporary invincibility
    	public float timeInvincible = 2.0f;
    	bool isInvincible;
    	float damageCooldown;

    	// Variables related to Animation
    	Animator animator;
    	Vector2 moveDirection = new Vector2(1, 0);

    	// Variables related to Projectile
    	public GameObject projectilePrefab;
    	public InputAction LaunchAction;

// Variables related to NPC
private NonPlayerCharacter lastNonPlayerCharacter;

    	// Start is called once before the first execution of Update after the MonoBehaviour is created
    	void Start()
    	{
        	MoveAction.Enable();
 		LaunchAction.Enable();
 		TalkAction.Enable();
        	rigidbody2d = GetComponent<Rigidbody2D>();
        	currentHealth = maxHealth;
        	animator = GetComponent<Animator>();
    	}

    	// Update is called once per frame
    	void Update()
    	{
        	move = MoveAction.ReadValue<Vector2>();

        	if (!Mathf.Approximately(move.x, 0.0f) || !Mathf.Approximately(move.y, 0.0f))
        	{
            		moveDirection.Set(move.x, move.y);
            		moveDirection.Normalize();

        	}

        	animator.SetFloat("Look X", moveDirection.x);
        	animator.SetFloat("Look Y", moveDirection.y);
        	animator.SetFloat("Speed", move.magnitude);

        	if (isInvincible)
        	{
            		damageCooldown -= Time.deltaTime;
            		if (damageCooldown < 0)
            		{
                		isInvincible = false;
            		}
        	}

if (LaunchAction.WasPressedThisFrame())
       	{
           		Launch();
       	}

		// NPC raycast detection
       	RaycastHit2D hit = Physics2D.Raycast(rigidbody2d.position + Vector2.up * 0.2f, moveDirection, 1.5f, LayerMask.GetMask("NPC"));
       	if (hit.collider != null)
       	{
			NonPlayerCharacter npc = hit.collider.GetComponent<NonPlayerCharacter>();
npc.dialogueBubble.SetActive(true);
lastNonPlayerCharacter = npc;
           		FindFriend(hit);
       	}
else
{
if (lastNonPlayerCharacter != null)
{
         			lastNonPlayerCharacter.dialogueBubble.SetActive(false);
             			lastNonPlayerCharacter = null;
}
}

    	}

    	// FixedUpdate has the same call rate as the physics system
    	void FixedUpdate()
    	{
        	Vector2 position = (Vector2)rigidbody2d.position + move * speed * Time.deltaTime;
        	rigidbody2d.MovePosition(position);
    	}

    	public void ChangeHealth(int amount)
    	{
        	if (amount < 0)
        	{
            		if (isInvincible)
            		{
                		return;
            		}
            		isInvincible = true;
            		damageCooldown = timeInvincible;
            		animator.SetTrigger("Hit");
        	}
        	currentHealth = Mathf.Clamp(currentHealth + amount, 0, maxHealth);
        	UIHandler.instance.SetHealthValue(currentHealth / (float)maxHealth);
    	}

    	void Launch()
    	{
        	GameObject projectileObject = Instantiate(projectilePrefab, rigidbody2d.position + Vector2.up * 0.5f, Quaternion.identity);
        	Projectile projectile = projectileObject.GetComponent<Projectile>();
        	projectile.Launch(moveDirection, 300);
        	animator.SetTrigger("Launch");
    	}

    	void FindFriend()
    	{
       	if (TalkAction.WasPressedThisFrame())
       	{
           		UIHandler.instance.DisplayDialogue();
       	}
   	}
}
```

### UIHandler.cs

```csharp
using UnityEngine;
using UnityEngine.UIElements;

public class UIHandler : MonoBehaviour
{
   	private VisualElement m_Healthbar;
   	public static UIHandler instance { get; private set; }

   	// UI dialogue window variables
   	public float displayTime = 4.0f;
   	private VisualElement m_NonPlayerDialogue;
   	private float m_TimerDisplay;

   	// Awake is called when the script instance is being loaded (in this situation, when the game scene loads)
   	void Awake()
   	{
       	instance = this;
   	}

   	// Start is called once before the first execution of Update after the MonoBehaviour is created
   	void Start()
   	{
       	UIDocument uiDocument = GetComponent<UIDocument>();
       	m_Healthbar = uiDocument.rootVisualElement.Q<VisualElement>("HealthBar");
       	SetHealthValue(1.0f);
       	m_NonPlayerDialogue = uiDocument.rootVisualElement.Q<VisualElement>("NPCDialogue");
       	m_NonPlayerDialogue.style.display = DisplayStyle.None;
       	m_TimerDisplay = -1.0f;
   	}

   	public void SetHealthValue(float percentage)
   	{
       	m_Healthbar.style.width = Length.Percent(100 * percentage);

   	}

   	private void Update()
   	{
       	if (m_TimerDisplay > 0)
       	{
           		m_TimerDisplay -= Time.deltaTime;
           		if (m_TimerDisplay < 0)
           		{
               		m_NonPlayerDialogue.style.display = DisplayStyle.None;
           		}
       	}
   	}

   	public void DisplayDialogue()
   	{
   		m_NonPlayerDialogue.style.display = DisplayStyle.Flex;
   		m_TimerDisplay = displayTime;
   	}
}
```

### NonPlayerCharacter.cs

**Important**: This script includes the instruction to implement the optional UI added to display de controls to talk with the NPC, added in the **Medium: Add a controls UI** challenge, but does not contain code for any additional extension work.

```csharp
using UnityEngine;

public class NonPlayerCharacter : MonoBehaviour
{
public GameObject dialogueBubble;

void Start()
{
dialogueBubble.SetActive(false);
}
}
```

Mark step as complete

## 12.  Next steps

Q&A (0)

You’ve added an NPC that guides the player through the task of completing the level by fixing the robots, making the game’s objective clearer. In the next tutorial, you’ll close the game loop by introducing win and lose conditions, and set up the scene to reload when either occurs.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
