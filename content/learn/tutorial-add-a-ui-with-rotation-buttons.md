[Image: image]

# Add a UI with rotation buttons

Tutorial

Beginner

+10XP

60 mins

3

(85)

Unity Technologies

[Image: Add a UI with rotation buttons]SummarySkills

Making an object appear in the user’s environment is exciting, but it’s a much more engaging experience if the user can interact with that object in some way.

In this tutorial, you’ll add a user interface to your scene with buttons to rotate the model. In later tutorials, you’ll add more features to this user interface.

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. Overview

Q&A (0)

Making an object appear in the user’s environment is exciting, but it’s a much more engaging experience if the user can interact with that object in some way. To do this, you’re going to create a user interface called a **screen space overlay** (it’s called this because it’s always in front of the camera and visible on the screen!) Screen space overlays are useful when you want your users to see the user interface no matter what else they are viewing on their device.

In this tutorial, you’ll add a user interface to your scene with buttons to rotate the model. In later tutorials, you’ll add more features to this user interface.

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

ステップを完了としてマーク

## 2. Set up your buttons

Q&A (0)

Unity uses a special kind of GameObject called a **canvas**to display 2D images for the user interface. Your canvas in this project will display buttons that the user will be able to press.

Follow these instructions to add the canvas to your scene:

**1.** In the Project window, go to **Assets**>**_ARMarker**>**Prefabs**>**UI**, then click and drag **Button_Canvas** into the **Hierarchy**window.

In the **Scene** view, the canvas will be very large, but don’t worry, it’s just the way that Unity handles screen space overlays.

**Note:** If the TMP Importer window appears, select the **Import TMP Essentials** button and then close the window. [TextMeshPro](https://docs.unity3d.com/Packages/com.unity.textmeshpro@3.0/manual/index.html)(TMP) gives you control over text formatting and layout. You don’t need to select Import TMP Examples & Extras for now.

[Image: image]

**2.**Go to the **Game**view to preview how the four default buttons will appear in your application.

[Image: image]

**3.**  In the **Hierarchy**window, expand the **ButtonCanvas** GameObject and rename the **Button1** and **Button2** child GameObjects to “ButtonRotateLeft” and “ButtonRotateRight”, respectively.

**4.**  In the **Hierarchy**window, select the **Text (TMP)** child GameObject of the **ButtonRotateLeft**GameObject. In the **Inspector window**, change TextMeshPro **Text Input** to “<”. Repeat for the **ButtonRotate Right** GameObject and change the **Text Input** to “>”.

[Image: image]

**5.**  Customize the text by selecting the **Font Asset**, **Font Size**, and **Font Style** properties you think look best.

**Note:** If you want to get additional fonts and styles, go to **Window**> **TextMeshPro** > **Import TMP Examples and Extras**.

**6.**  If you want to adjust the size of the buttons, use the **Rect** tool.

[Image: image]ステップを完了としてマーク

## 3. Create a new visual script

Q&A (0)

Now that your buttons are on the screen, it is time to make the buttons work. You’ll use visual scripts to control the app’s behavior when the user presses the buttons. You’ll create one GameObject for all your visual scripts to make them easier to find.

Follow these instructions to create a visual script:

**1.**  In the **Hierarchy**window, create a new empty GameObject named “VisualScripts”.

**2.**  In the **Inspector**window, add a Script Machine component to **VisualScripts**.

**3.**  Select **New** to make a new graph.

**4.**  When the File Explorer appears, open the **_ARMarker** folder, create a new “VisualScripts” folder there, and save the graph with the name “RotateObject”.

[Image: image]

**5.**  In the **Inspector** window, enter the title “Rotate Object” and the summary “Rotates the AR object using rotate UI buttons”.

**6.**  Select **Edit Graph** to open the visual script graph.

[Image: image]

**Note:** The first time you open your graph, it will be in a floating window. You may dock it in the Unity Editor if you prefer.

ステップを完了としてマーク

## 4. Create required variables

Q&A (0)

Your script will use variables that reference the buttons and the GameObject the buttons will affect.

Follow these instructions to create variables for your visual script:

**1.**  In the RotateObject script graph, delete the **On Start** and **On Update** nodes.

**2.**  In the Blackboard, select the **Object** variable tab.

**3.**  Create a new variable called “buttonRotateLeft” and set its **Type**to **Button**.

**4.**  For the **Value**, use the object picker (circle) and select the **ButtonRotateLeft** GameObject.

**5.**  Repeat the same process for a variable called “buttonRotateRight” with the **ButtonRotateRight**GameObject.

**7.**  Create a new variable called “modelObject” and set its **Type** to **GameObject**.

**8.**  Assign the in-Editor model from the **Hierarchy** window to the modelObject variable.

[Image: image]ステップを完了としてマーク

## 5. Rotate left and right

Q&A (0)

Now you have variables that you can use, it’s time to create the logic in the graphs that will control the rotation of your model when your user presses a button.

Watch the video or follow the instructions below to make your visual script rotate your model when you press a button:

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

**1.**  In the Graph Editor, add an**On Button Click** node to the Graph Editor.

**2.**Drag the buttonRotateLeft variable onto the graph to the left of the **On Button Click** node, then connect them.

**3.**  In the Graph Editor, add a **Transform Rotate** node (X Angle, Y Angle, Z Angle) and then assign it the following values: **X Angle** = **0**, **Y Angle** = **15**, **Z Angle** = **0**.

**Important:** If you are testing your marker on your monitor and are using a rotated model, you will have to rotate about the z axis instead of the y axis.

**4.**  Connect the **On Button Click** node to the flow input of the **Transform Rotate** node.

**5.** Drag the modelObject variable into the Graph Editor, then connect it to the transform input of the **Transform Rotate** node.

[Image: image]

**6.** In the **Hierarchy**window, select your in-Editor model. In the **Inspector**window, enable it so it is visible in the **Scene** view.

**Note:** Currently the Script Graph is dependent on the actual in-Editor model, not the prefab that is spawned in the Simulated Environment. This will be adjusted in a later step. When you enter Play mode, there will be two models in the scene: the one automatically spawned on the simulated image marker, and your in-Editor model. You may have to look around the environment to locate the in-Editor model. Only the in-Editor model will rotate at this time.

**7.**  Select **Play**in the Editor to test the script.

You'll be able to select the ButtonRotateLeft button in **Scene** view and see that your model rotates to the left. Then exit Play mode.

**8.**Exit Play mode.

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

**9.** In the **Script Graph** window, click and drag across your existing graph to select all of the nodes.

**10.** Press **Ctrl**+**D** (macOS: **Cmd**+**D**) to duplicate the graph. Drag the new graph down so it’s positioned directly below the old graph without overlapping.

**11.**  On the new graph, change the variable in the **Get Variable** node to buttonRotateRight, and change the **Y Angle** value to **-15** (or X Angle if you are testing your marker on a vertical monitor).

[Image: image]

**12.**  Test the app in Play mode in the Unity Editor to verify that both buttons work.

**Note:** If you test the app on your device, you’ll see that it works on your in-Editor model, but not the one generated by the marker. Don’t worry — you’ll address this issue in the next steps.

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

ステップを完了としてマーク

## 6. Add a tag to identify your model

Q&A (0)

Your rotate buttons work, but they only work with the in-Editor model in the scene.

How will you write a script to rotate a GameObject that won’t exist until your app runs? You’ll apply a tag to the prefab that will also exist on the spawned prefab instances. In your script, when the camera sees the marker and spawns a model from the prefab, the app will search for a GameObject with that tag. **Tags** are useful to identify GameObjects for scripting purposes.

Follow these instructions to add the tag that will allow you to find the model when the model is spawned in the app:

**1.**  In the **Hierarchy**window, select the in-Editor model and disable it in the **Inspector** window.

**2.**  In the **Project** window, find the prefab of your model and double-click it to open it in prefab editing mode.

**3.**In the **Inspector**window, open the **Tag** dropdown and select **Add Tag.**

[Image: image]

**4.**  Select the **Add**(**+**) button, enter “modelObject”, and select **Save**.

[Image: image]

**5.**In the **Hierarchy**window, select the **Mesh** child GameObject for your selected prefab and use the **Tags** dropdown to assign it the tag **modelObject**.

[Image: image]

**Important:** You won’t be able to rotate the highest parent GameObject of the prefab, so make sure it is the **Mesh** child GameObject that has the tag. The parent GameObject should be untagged. If you are using your own 3D model, you will need to tag a child GameObject that contains the GameObject’s mesh.

**6.**  Exit prefab editing mode.

**7.**Make sure the changes were successfully applied to the prefab. Check that the modelObject tag appears in the in-Editor model and in the prefab in your **Project**window.

ステップを完了としてマーク

## 7. Create a new setup script graph

Q&A (0)

Next, you’ll create a new script that will constantly search for any GameObject that has the modelObject tag. If the tagged GameObject is located, it will be assigned to a variable so that it’s ready for the RotateObject script. With the new variable assigned correctly, you will be able to control the model that spawns in the scene.

Follow these instructions to set up a new setup script:

**1.** In the **Hierarchy**window, select the **VisualScripts**GameObject.

**2.** In the **Inspector**window, select **Add Component** and create a new Script Machine named “Setup” with the title “Setup” and the description “Initializes variables”.  Then select **Edit Graph**.

[Image: image]

**3.**  In the Blackboard area of the Graph Editor, select the **Object**tab. Then, find the modelObject variable’s **Value** and use the picker (circle) to select **None**. The script will assign this variable’s value.

[Image: image]ステップを完了としてマーク

## 8. Rotate the marker-generated model

Q&A (0)

With your setup script and variable ready, you can now create the graph. Watch the video or follow the instructions below to search for the tagged GameObject and assign it to the modelObject variable when the object is located:

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

**1.**  Delete the**On Start**Event node.

**2.**  In the Graph Editor, use the fuzzy finder to add a**Find Game Object With Tag** node.

**Note:** Make sure to select the singular **Find Game Object**node and not the plural **Find Game Objects**node**.**

**3**.  In the **Tag**field, enter “modelObject”.

**4.**Connect the **On Update** output to the input of the **Find Object with Tag** node.

**5.**  In the Graph Editor, use the fuzzy finder to add a **Set Object Variable**node to the graph.

**6.**Connect the flow output of **Find Game Object With Tag** to the flow input of the **Set Variable**node. Then connect the object output to the bottom input of the **Set Variable** object, which doesn’t have a label.

[Image: image]

This **New Value**field sets the new value of the variable, which can be any data type. When the script runs, the modelObject variable will be set to a model’s child GameObject with the specified tag.

**7.**  Select **Play** and look at your visual script. You’ll see that the **Find Game Object With Tag** node found the GameObject and assigned the modelObject variable value.

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

**8.**In the **Hierarchy**window, select the in-Editor model and disable it in the **Inspector**window.

**9.** Build to your device and test the buttons in the app.

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

ステップを完了としてマーク

## 9. Optimize with a null check

Q&A (0)

An important part of developing apps is ensuring that they are optimized. Optimization is especially important when you’re creating mobile devices, and optimization is usually easier to do when it is done from the beginning of your designs.

In your script right now, the **Find Game Object With Tag**node is always looking for the model, as you can see in the video in the previous step. The script is constantly searching all of the GameObjects in your scene, without stopping when it finds the GameObject with the tag. If there are only a few GameObjects, that might not be so bad, but as you increase the number of GameObjects in your scene, this search can really reduce your performance. To optimize this script, you’ll add a **null check** that will stop the search as soon as the tag is found.

You’ll implement the null check with the **Null Check** node. This node tests to see if the modelObject variable has a value, which indicates that the GameObject has spawned in the scene and the tag has been found. The script will continue if the GameObject isn’t spawned yet (Null Check is true), and then not run again once the GameObject is spawned (Null Check is false).

Watch the video or follow the instructions below to add a null check to your visual script:

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

**1.**Open your **Setup** script machine if it’s not already open.

**2.** In the Graph Editor, add a**Null Check**node toward the beginning of the graph.

**3.**  Insert the **Null Check**node between the **On Update**node and**Find Game Object With Tag**node in the flow of your graph. Connect the Null output to the **Find Game Object With Tag** node.

**4.**  Drag the modelObject variable from the Blackboard into the Graph Editor, which will create a **Get Variable** node.

**5.**  Connect the output of the **Get Variable** node to the input of the **Null Check** node.

[Image: image]

**6.**  Test your script in the Editor to make sure the null check is working.

It will happen too fast for you to see it, but in the first frame, the **Null Check** node will discover that modelObject is null and allow the rest of the script to run. After that, you will see that the modelObject’s value is the **Mesh** GameObject, and the **Null Check** node prevents the rest of the script from running again.

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

**7.**Build and test on your device. You may not see significant performance changes, but it is always good practice to ensure that your scripts are optimized.

ステップを完了としてマーク

## 10. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each activity is identified as being either Easy, Medium, or Difficult, so you know what level of difficulty to expect.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step.

We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

#### Easy: Customize the style of the buttons

[Image: image]

If you want to give your buttons some style, change the sprite to one of the provided button sprites or make your own. A customized UI is a feature that makes an app look finished and professional. An example is provided below, but use your creativity to make your UI. To edit the button sprite, locate the Image component for your button, then select the object picker (circle) for the **Source Image** property.

#### Medium: Adjust the position of the model with a button press

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

Making the modelObject rotate is just one way you could interact with your model. Another way to interact with your model is to make buttons that will let you move the model up or down on a button press.

Create new UI buttons and a visual script that lets you move the object by a small amount up and down or left and right.

#### Difficult: Rotate the model as if it was on a turntable

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

Right now, to rotate the model, you have to press the button repeatedly. A better user interface would let you press the button once to start rotating the model and press it again to stop. Edit your Rotate Object visual script to make your model rotate on its own when you press a button.

Use the following guidance for help completing this challenge:

- Boolean values can be useful to turn behaviors on and off.
- There is a special node called **Negate**.
- The transformations and Boolean checks will need to happen continually.

**Tip:** One way to approach this challenge is to create some Boolean variables that change when the user presses the buttons. How will your script behave if the user starts rotating the model in one direction and then the other?

ステップを完了としてマーク

## 11. Next steps

Q&A (0)

Now your users can rotate your model left and right using buttons on the UI canvas. In the next tutorial, you’ll make additional information about your model appear and disappear on a button press. You’ll be able to extend the functionality of your AR experiences by letting users control which information, models, visual effects, or other content is displayed when the app detects the marker.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
