[Image: image]

# Collect the collectible

Tutorial

foundational

+10XP

30 mins

49

(8595)

Unity Technologies

[Image: Collect the collectible]SummarySkills

Make each collectible disappear and spawn a cool particle effect when the player gets it.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Overview

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

In the previous tutorial, you wrote your first line of code to make a collectible object rotate in the scene. In this tutorial, you’ll complete the interactive living room scene with more code that allows the player to pick up the collectible object, rewarding them with a satisfying visual effect. You’ll also add more collectibles throughout the room to complete the scene.

When you’re ready to get started, go to the next step.

Mark step as complete

## 2. Allow the player to go through the collectible

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

Right now, the collectible is like an immovable rock — it won’t budge when the player collides with it at full speed, and it even knocks the player off its course! You need to set up the collectible so that the player can pass through it without any visible physical collision or bump.

You can achieve this with the **Is Trigger** property of the **Collider** component. When you tell a collider component to act as a trigger instead of a physical collider, it will no longer have a solid barrier, but it can still detect entry by the player or other GameObjects.

A **trigger collider** makes an object act more like a cloud. Even though it looks solid, an airplane can still pass right through it, and the pilot knows when they’ve gone through it.

**Instructions**

**1.**  Make sure that the collectible is positioned in your scene so that the player can run into it.

**2.**  Enter **Play** mode and try to collide with the collectible — notice what happens. Exit **Play** mode when you’re done testing.

**3.**  Select the collectible object, then locate its **Collider** component.

**4.**  In the **Collider** component, enable the **Is Trigger** property. This transforms the physical collider into a trigger area.

**5.**  Enter **Play** mode to test it again. Verify that the player can move through the collectible without any physical resistance.

The collectible still doesn't disappear when the player moves over it. You’ll work on that next.

Remember to exit **Play** mode when you’re done testing!

Mark step as complete

## 3. Add the OnTriggerEnter function

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

In this step, you’ll write code to detect when the player makes contact with the collectible. You’ll achieve this in your script using the **OnTriggerEnter** function, a special Unity function that is called when one object enters a trigger collider zone of another object.

It's important to note that **OnTriggerEnter** is only called if at least one of the objects involved has a **Rigidbody** component attached to it. The player object already has a **Rigidbody** component, so you’re all set!

**Instructions**

**1.**  Reopen the **Collectible** script in your script editor.

**2.**  After the ending curly bracket of the **Update** method, but before the final curly bracket of the entire script, create some space by pressing **Enter** (macOS: **Return**) a few times.

**Important:** Pay close attention to the demo video to see where to put this code. Putting it in the wrong section of your script will cause errors.

**3.**  Begin entering “OnTriggerEnter”. If your development environment supports it, you should see very helpful autocomplete suggestions.

**4**.  Select or complete the OnTriggerEnter method in your script.

It should look like this:

```csharp
private void OnTriggerEnter(Collider other) {

}
```

Any code that you put in between those two curly brackets will run when an object with a **Rigidbody** component collides with the collectible. In this case, you want to make the collectible disappear, which you’ll do next.

Mark step as complete

## 4. Write a comment

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

**Comments** are non-executable lines in your code that serve as notes or explanations. They are crucial for maintaining clear and understandable code, especially when you're working on complex projects or with a team.

Here, you'll use comments as **pseudo code,** a practice where you outline your code's intended logic in plain language before you write the functional code. It's a way to plan and clarify your thoughts, and make the coding process go smoother.

In C#, comments are marked with “//”, and anything following these two slashes on the same line is ignored when the code runs.

The default template Unity script that you get when you create a new script already has a couple of comments — did you notice them?

**Instructions**

**1.**  In your script, navigate to the **OnTriggerEnter** method where you plan to add new code, then press **Enter** (macOS: **Return**) a few times after the opening curly bracket to make some space.

In this case, you’ll write the comment, “Destroy the collectible”, since that’s what you want to do when the player enters its trigger zone.

**2.**  Write your comment, which should look like this:

```csharp
private void OnTriggerEnter(Collider other) {
       // Destroy the collectible
}
```

Mark step as complete

## 5. Destroy the collectible

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

In this step, you'll make the collectible disappear when the player interacts with it. You'll use the **Destroy** method in Unity, which removes GameObjects from the scene. This will make it seem like the player has collected the object.

**Instructions**

**1.**  Inside the **OnTriggerEnter** method, press **Enter** (macOS: **Return**) to add a new line beneath your comment.

**2.**  Begin to enter “Destroy“ and notice that your code editor may provide autocomplete suggestions. Then complete the line of code:

**Destroy(gameObject);**

The “GameObject” here refers to the GameObject the script is attached to, which in this case, is your collectible. Also, note that “gameObject” starts with a lowercase letter here (camelCase).

Your code should look like this:

```csharp
private void OnTriggerEnter(Collider other) {
       // Destroy the collectible
       Destroy(gameObject);
}
```

**3.**  Save the script, return to Unity, and enter Play mode.

You'll see that when the player collides with the collectible, it disappears from the scene and from the **Hierarchy** window, simulating that it has been collected by the player.

Remember to exit Play mode when you’re done testing!

**Tip:** If the behavior does not work, double-check that you saved your script.

Mark step as complete

## 6. Explore particle effect options

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

You probably noticed that collecting the object was not very satisfying or obvious; you could barely tell it was collected!

When the player accomplishes something, they should get some kind of visual feedback to make that clear. Simple **Visual Effects (VFX)** — like puffs of smoke or mini explosions — are one of the most effective ways to provide this visual feedback.

In Unity, you can use **particle systems** to simulate complex visual effects such as fire, smoke, or a burst of sparks. In this step, you’ll select a particle system to provide visual feedback for your collectible.

**Instructions**

**1.**  In the **Project** window, navigate to **_Unity Essentials** > **Prefabs** > **VFX** folder.

This folder contains pre-made 2D and 3D visual effects that you can use in your scene. You’ll use the non-2D effects for this project.

**2.**  Double-click the various 3D particle system prefabs to preview them in prefab editing mode.

Inside prefab editing mode, you should see a **Particles** panel that allows you to restart and preview the particle effect.

**3.**  Take note of which one you want to use for your collectible — you’ll actually make it appear in the following steps.

**4.**  Exit prefab editing mode using the small back arrow at the top of the **Hierarchy** window.

Mark step as complete

## 7. Create and assign a new variable for the particle

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

Variables store data that you can reference and manipulate in your code. For example, you made a float variable for the rotation speed of your collectible in the previous tutorial.

Variables aren’t just limited to numbers, though. They can be any data type — you can even have GameObjects variables!

In this step, you'll create a variable of the type GameObject to reference your chosen particle effect prefab. Later on, you’ll be able to reference this variable to spawn your particle effect in the scene.

**Instructions**

**1.**  Open your **Collectible** script in your script editor.

**2.**  Below your **rotationSpeed** variable near the top of the script, add a new line that declares a new public variable of type GameObject:

```csharp
public GameObject onCollectEffect;
```

You can name the variable whatever you want, but something like “onCollectEffect” makes sense. This variable will hold the reference to your particle effect prefab.

**3.**  Save your script and switch back to the Unity Editor.

**4.**  In the Unity Editor, select the collectible GameObject that your script is attached to.

You should now see the new **On Collect Effect** variable in the **Inspector** window window. You’ll notice that it has **None** assigned as its value. You need to tell Unity what prefab GameObject you actually want to use as your collection effect.

**5.**  To assign your chosen particle effect to the variable, locate your chosen VFX prefab in the **Project** window, then drag the prefab from the **Project** window onto the **On Collect Effect** variable box in the **Inspector** window. This links your VFX prefab with the variable in your script.

If you enter **Play** mode now, the particle effect still won’t generate — you’ll add the code to do that next.

Mark step as complete

## 8. Instantiate the particle

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

**Instantiating** an object in Unity means creating a copy of it during runtime (while the application is running); you’re making a new instance of that prefab in your scene.

Just like the transform.Rotate method you used earlier required a rotation value for the X, Y, and Z axes, the **Instantiate** method also requires certain information to execute, separated by commas. Specifically, you need to specify the following information:

- Which object to instantiate
- The position of the instantiated object
- The rotation of the instantiated object

In this step, you'll instantiate your chosen particle effect when the player collides with the collectible.

**Instructions**

**1.**  Inside the **OnTriggerEnter** method, press **Enter** (macOS: **Return**) after the **Destroy** command to make room for your new code.

**2.**  Add the **Instantiate** code as is shown below — feel free to also include the comment:

```csharp
// instantiate the particle effect
Instantiate(onCollectEffect, transform.position, transform.rotation);
```

Keep in mind that since this code defines properties of the collectible, "transform" refers to the transform (position, scale, rotation) of this particular collectible GameObject. With that in mind, here’s how you can interpret the code above:

- Call the **Instantiate** method.
- Which object do we want to instantiate? The **onCollectEffect.**
- What position should we instantiate it at? My current position (**transform.position**).
- What rotation should it have when it’s instantiated? My current rotation (**transform.rotation**).

**transform.position** and **transform.rotation** refer to the collectible’s position and rotation since this script is attached to the collectible object.

Don’t worry if this is still confusing at this point. It’ll take repetition and time before you’re fully comfortable. This is part of the process.

**3.**  Save your script, return to Unity, and enter **Play** mode.

You'll see the particle effect appear when you collide with the collectible. This visual feedback is much more satisfying!

Mark step as complete

## 9. Create an interesting path of collectibles

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

With your collectible now completely functional, you’re ready to populate your scene with more of them. We'll provide you with a few pro tips for efficiently creating a straight, evenly-spaced path of objects in your scene.

**Instructions**

**1.**  In the **Scene**view, make sure you are using **Global** coordinates so that you can move objects in a straight line relative to the world’s coordinates, regardless of which way each object is facing.

**2.**  In the **Hierarchy** window, double-click the **03_Living_Room** GameObject to frame it, then use the **Scene** view gizmos to switch to the Top view to get a better perspective for arranging the collectibles.

**3.**  Select the **Move** tool, then select your collectible.

**4.**  Press **Ctrl+D** (macOS: **Cmd+D**) to duplicate the collectible.

The duplicate collectible will be at the same position — so you won’t see it in the **Scene** view, but you will see a copy appear in the **Hierarchy** window.

**5.**  To move the duplicated collectible along a specific axis (X, Y, or Z), click and drag one of the arrows of the **Move** tool.

**6.** To ensure that the collectibles are evenly spaced, hold down **Ctrl** (macOS: **Cmd**) while you move the collectible.

This enables snapping, so that you can place the collectible at fixed increments along the chosen axis.

**7.**  Repeat the process: duplicate (**Ctrl+D** (macOS: **Cmd+D**), then move (drag while holding **Ctrl** or **Cmd**) to create a series of collectibles, forming a path or pattern.

Make an interesting path through the environment so that the user of your game will explore and interact with the entire living room.

**8.**  Test your living room scene in Play mode and try to collect all the collectibles — it should be pretty satisfying gameplay now that you have some visual feedback on each collision!

Mark step as complete

## 10. Restrict collisions to the player only

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

When you spread collectibles around the room, you may have noticed something strange: collectibles disappear when they collide with one of the chairs! If you haven’t already seen the problem, try putting one of the chair’s legs or the couch on top of one of your collectibles, then enter Play mode. You’ll see the chair trigger the destruction of the collectible!

To fix this, you'll need to adjust the logic in the code so that only the player triggers these events. The logic in the **Collectible** script needs to be: "When an object with a **Rigidbody** component collides with me, **IF that object is the player**, then destroy myself and spawn a particle effect."

To add this logic, you’ll use an if-statement to check if a certain condition is true, and if that condition is true, then continue to execute the code.

You’ll also use a feature in Unity called **tags** to identify the player GameObject.

**Instructions**

**1.**  Select the player GameObject, open the **Tag** dropdown at the top of the **Inspector** window, and select **Player** to apply that tag.

**2.**  In the **Collectible**script, use the **Enter** (macOS: **Return**) key to add some space above the **Destroy** command for your new if-statement.

**Important:**  Pay close attention to the demo video to see where to put this code. Putting it in the wrong section of your script will cause errors.

**3.**  Add the following if-statement code:

```csharp
if (other.CompareTag("Player")) {

}
```

Remember, this code defines properties of this collectible, so “other” refers to another object that has collided with this one. With that in mind, here’s how you can read the code above:

"If the “other” GameObject that collided with me has the **Player** tag, then execute the code inside the brackets."

**Important:**  Getting the brackets and capitalization exactly right is important.

**4.**  Select the**Destroy** and **Instantiate** code below your if-statement, then use **Ctrl+X, Ctrl+V** (macOS: **Cmd+X, Cmd+V**) to cut and paste the code to the space between the curly brackets of your new if-statement.

Now that code will only run if the if-statement’s condition is met.

**5.**  Save your script and return to Unity.

**6.**  Enter **Play** mode to test your scene.

Only the player should be able to trigger the collection effect now.

Mark step as complete

## 11. Declutter the Hierarchy

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

You now have a lot of collectible objects in your scene, and the **Hierarchy** window is getting very cluttered. Take a moment to organize the **Hierarchy** using an empty parent GameObject.

**Instructions**

**1.**  In the **Hierarchy** window, select the first collectible GameObject, then hold down the **Shift** key and select the last collectible object in your list to select all GameObjects in between.

**2.**  Right-click the selected objects and select **Create Empty Parent.**
This action creates a new GameObject with the collectible GameObjects indented as **child** GameObjects.

**3.**  Rename this new GameObject to something descriptive, like “Collectibles”.
**Tip:**  When an object is selected in the **Hierarchy** window or the **Project** window, you can press **F2** (macOS: **Return**) to quickly rename it.

You can now expand and collapse that parent GameObject in the **Hierarchy** to keep things nice and tidy.

Mark step as complete

## 12. Review and proceed to next tutorial

Q&A (0)

Congratulations on completing your interactive living room scene by setting up collision detection for your collectible and triggering VFX feedback.

Here are some of the things you learned along the way:

- Set up a collider as a trigger instead of a physical boundary.
- Apply the OnTriggerEnter() function to detect collisions with other objects.
- Devise comments that describe a given block or line of code.
- Apply the Destroy() function to remove objects from a scene.
- Code quickly using the autocomplete feature of the IDE.
- Explain how visual effects (VFX) can be used to give the user visual feedback.
- Declare a variable with the data type of GameObject.
- Apply the Instantiate() function to spawn prefab instances in a scene.
- Apply snapping with the Move tool to align and evenly space out GameObjects.
- Apply if statements to control the logic and flow of a script.
- Apply tags to GameObjects in order to identify them in a script.

**Instructions**

Proceed to the next tutorial, which includes optional challenges to further develop your skills, explore new concepts, and improve your project.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
