[Image: image]

# Create a rotating collectible

Tutorial

foundational

+10XP

25 mins

29

(5967)

Unity Technologies

[Image: Create a rotating collectible]SummarySkills

Program your first line of code from scratch to make your collectible object rotate around its Y-axis.

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

In the last tutorial, you copy and pasted code into a new script, which is a great way to start. In this tutorial, you’ll write your first line of code to make a collectible object rotate in the scene. These rotating collectible objects will be the things that your player character tries to gather throughout the living room scene.

When you’re ready to get started, proceed to the next step.

Mark step as complete

## 2. Add a collectible GameObject in front of the player

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

The first step is adding a collectible item in front of the player. You'll probably want to select a collectible prefab that makes sense with the character you've chosen:

- The robot vacuum could suck up dirt
- The toy car could get little stars
- The wind-up mouse could find cheese
- The alien UFO could collect precious gemstones.

There are also a bunch of other interesting collectibles to choose from, so feel free to get creative with your selection.

**Instructions**

**1.**  In the **Project** window, navigate to **_Unity Essentials** > **Prefabs** > **Collectibles.**

**2.**  Drag and drop your chosen collectible prefab into the scene directly in front of the player.

**3.**  Adjust the collectible’s position, rotation, and scale in the **Scene** view as needed to ensure that it's easily visible and reachable by the player.

This will make testing as efficient as possible.

**Tip:**  You might want to adjust the position and rotation of the camera so that you can easily see the collectibles in front of the player in **Play** mode.

Mark step as complete

## 3. Create and apply a new Collectible script

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

In this step, you’ll create a new empty script. This script, which you’ll name "Collectible", will govern the behavior of the collectible objects you've added to the scene.

**Instructions**

**1.**  In the **Project** window, navigate to the **_Unity Essentials** > **Scripts** folder you accessed in the previous tutorial.

**2.**  Within the **Scripts** folder, right-click and select **Create** > **MonoBehaviour Script.**
**3.**  With the script’s name automatically highlighted, immediately rename this new script "Collectible".

Just like last time, the spelling of the name is important because it becomes part of the script.
**4.**  Press **Enter** to save the script name.

You'll see the code of the new blank script in the **Inspector** window.

**Note:**  If you make a typo in your script name or have to rename it for any reason, it will be easier to just delete it and create a new one with the correct name.

**5.**  In the **Hierarchy**, select the **Collectible** GameObject.

**6.**  Drag and drop the **Collectible** script you just created from the **Project** window into an empty space of the **Inspector** window for the **Collectible** GameObject (such as the space around the **Add Component** button).

Note that this is different from the technique you used earlier to apply a script, where you dragged it onto the object directly in the **Scene** view. There are usually a few different ways to do the same things in Unity!

Mark step as complete

## 4. Review the structure of the default script

Q&A (0)[Image: image]

Before you start coding, take a minute to review the structure of the default script you've just created.

This might feel overwhelming at first, especially if you're new to programming. It's important to remember that understanding the nuances of scripting is a gradual process and it’s entirely normal to feel a bit daunted at this point! So don’t worry about that and trust that it will all slowly start to make sense over time.

**Instructions**

**1.**  In the **Project** window, double-click the **Collectible** script to open it in the script editor.

**2.**  Locate the **using statements** at the top of the script, including “using UnityEngine;”.

These lines link the script to the necessary libraries so that when you enter something like “Rigidbody,” the script knows what that means.

**3.**  Beneath the using statements, locate the class declaration:
**public class Collectible : MonoBehaviour.**

This defines the script as a public class named "Collectible" that inherits from Unity's **MonoBehaviour** class. **MonoBehaviour** is a required class for all GameObjects in Unity. This bit of code is what allows you to add your script as a component to a GameObject.

Don’t worry if this is still confusing at this point — it will slowly make more and more sense as you continue on.

**4.**  Locate the **Start() function.**

This function is executed once at the beginning of the game.

**5.**  Locate the **Update() function.**

Unity runs this function once per frame.

Games typically run at 30-60 frames per second, so any code within this function will be executed many times continuously throughout the game, making it suitable for ongoing actions and animations. This is where you’ll put your rotation code so that the collectible will rotate continuously.

Mark step as complete

## 5. Plan your rotation code

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

Before writing your first line of code, let’s take a moment to understand what you’re actually trying to do in your code. You’ll experiment in the **Scene** view to visualize this.

**Instructions**

**1.**  Select the collectible object and frame it in the **Scene** view so you have a good view of it.

**2.**  At the top of the **Scene** view, make sure you’re using the **Local** coordinate system instead of the **Global** system so that you’ll be able to see the orientation of the collectible changing as it rotates.

**3.**  In the **Inspector** window, in the **Transform** component, locate the **Rotation** coordinates. Click and drag the label **Y** right and left to change the Y-axis rotation.

Watch the demo video again very closely if you’re still not sure how to do this.

**Tip:**  If you hold down the **Shift** key while you click and drag the value, the value will change more quickly.

Observe how the object rotates in the **Scene** view. This visual experiment helps you see the effect of rotation values on your object. This is the effect you want to achieve in your script: you want to increase the Y rotation value in the **Transform**component continuously over time.

In the next step, you’ll add the code that rotates the collectible around the Y-axis continuously.

Mark step as complete

## 6. Add your first line of code to rotate the collectible

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

It's time to add continuous rotation from your **Collectible** script. You'll do this by manipulating the object's **Transform** component, which controls the object's position, rotation, and scale in the scene.

Specifically, you'll use the **transform.Rotate** method, a built-in Unity function that makes an object rotate in three dimensional space. For a simple rotation effect, you'll change the Y value, which makes the object rotate around its vertical axis.

When you put this rotation code in the **Update** function, the collectible will rotate a little bit each frame, making it appear to smoothly, continuously rotate.

**Instructions**

**1.**  Open the **Collectible** script in the script editor.

**2.**  Put your cursor inside the **Update()** method, between the sets of curly brackets.

It can be helpful to add a few new lines using the **Enter** (macOS: **Return**) key to give yourself a bit of space before you add your new code.

The extra space won’t change the functionality of the code, but it can make your code easier to read.

**3.**  Write the following line of code inside the **Update** function, between the opening and closing curly brackets:

 **transform.Rotate(0, 1, 0);**

**Important:** Don’t forget to add the semicolon at the end of the line of code.

This line instructs Unity to rotate the collectible object 1 degree around the Y-axis in each frame, creating a continuous rotation effect.

**4.**  Save the script by pressing **Ctrl+S** (macOS: **Cmd+S**) or by selecting **File** > **Save** from the main menu of the script editor.

**5.**  Back in the Unity Editor, enter Play mode to see the collectible object rotating continuously.

**Tip:** During **Play** mode, you can switch to the **Scene** view tab, which will allow you to get a close-up view of your collectible as the application is running.

**6.**  Remember to exit **Play** mode when you’re done testing!

**Note:** If IntelliSense in Visual Studio doesn’t suggest code, open **Window** > **Package Management** > **Package Manager**, set the source to Unity Registry, and ensure the “Visual Studio Editor” package is installed (reinstall it if needed).

Mark step as complete

## 7. Reduce speed to a decimal float value

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

You might notice that the collectible rotates really quickly. However, if you try to reduce the value from **1** to **0.5** in your script, you'll get an error in your code, indicated by a red underline.

In C#, decimal numbers are treated as **float values.**
A float, short for "floating point number", is a data type that can handle decimals.

**Data types** in programming specify the type of a value and how the computer interprets this value. For instance, integers for whole numbers, floats for decimal numbers, and strings for text.

When you use float values in C#, you need to explicitly indicate it's a float by putting an “f” at the end of the number.

**Instructions**

**1.**  Reopen the **Collectible** script in your script editor.

**2.**  Modify the rotation line in the **Update()** method to **transform.Rotate(0, 0.5f, 0);.**

This change reduces the rotation speed to half a degree per frame.

When entering the decimal value **0.5,** make sure to add “f” at the end (0.5f). Try temporarily removing the “f” to see the error in your code.

**3.**  Save the script and return to the Unity Editor. Play your scene to observe the slower rotation of the collectible.

Mark step as complete

## 8. Declare new rotation speed variable

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

In this step, you will enhance the flexibility of the rotation behavior by introducing a **public variable** to your script.

A variable in programming is just a named piece of data that can vary. When you declare a public variable for rotation speed, you'll allow yourself, and anyone else who works on this project in Unity, to easily adjust the rotation rate directly from the **Inspector** window without the need to modify the script.

This practice is an example of efficient game programming.

**Instructions**

**1.**  Open the **Collectible** script in your script editor.

**2.**  Above the **Start()** method, but after the first opening curly bracket of your script, use the **Enter** (macOS: **Return**) key to add a few empty lines to make some space for yourself to type.

**Important:**  Pay close attention to the demo video to see where to put this code. Putting it in the wrong section of your script will cause errors.

**3.**  Declare a new public float variable before the **Start** method by adding the line:

 **public float rotationSpeed;**

This creates a public variable named **rotationSpeed** of type float. The word "public" (as opposed to "private") makes this value editable in the **Inspector** window.

Using a lowercase letter for the first word, but uppercase letters at the start of all subsequent words is known as **camelCase,** and is a common practice when naming variables. It’s called camelCase because it kind of looks like a camel from the side, with humps at the center of the word.

**4.**  Now, replace the hard-coded rotation value in the **Update()** method with this new variable you just created:

     **transform.Rotate(0, rotationSpeed, 0);**
**5.**  Save the script and switch back to the Unity Editor. In the **Inspector** window, you'll now see the **rotationSpeed** variable in the **Inspector** window when you select the collectible object, which is set to zero by default. You’ll also notice that Unity has taken your camelCase **rotationSpeed** variable and changed it to **Rotation Speed** in the **Inspector** window for improved readability.

**6.**  In the **Inspector** window, set the **Rotation Speed** value to a number like **0.5** to control the speed of rotation. Edit the value to the rotation speed you like the best.

Now, if you ever want to adjust that value in the future, you don’t need to open a script! You can make the change right there in the **Inspector** window.

**Note:**  Remember to save your scene after exiting **Play** mode.

Mark step as complete

## 9. Review and proceed to next tutorial

Q&A (0)

Congratulations on writing your first line of code to make the collectible rotate about the Y-axis!

Here are some of the things you learned along the way:

- Explain the **using**statements at the top of a Unity script.
- Identify a class declaration in a script.
- Explain the MonoBehaviour class in Unity scripts.
- Explain the **Start()** and **Update()** functions in a Unity script.
- Call a transform function in the **Update()** method to transform a GameObject over time.
- Apply correct data types in code, including integers and floats.
- Declare new custom variables in a script.
- Explain how public variables in a script behave in Unity.
- Describe common naming conventions including PascalCase and camelCase.
- Apply correct naming conventions to variables and methods.

**Instructions**

Proceed to the next tutorial where you'll finalize the living room functionality. You’ll add more code that will allow the player to pick up the collectible object. and then you’ll arrange more collectibles throughout the room.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
