[Image: image]

# Develop the AR UFO movement

Tutorial

Beginner

+10XP

120 mins

2

(20)

Unity Technologies

[Image: Develop the AR UFO movement]SummarySkills

The desktop version of the game uses the keyboard to move the UFO around in the play area. However, this isn’t the best solution for the mobile version of the game, so you need to create a new way to interact with the UFO.

In this tutorial you'll do the following:

- Review the UFO movement visual script
- Create an AR-friendly movement control scheme for mobile devices
- Modify the existing visual script to use your new control scheme

Languages available:

日本語EnglishEspañol日本語한국어日本語

## 1. Overview

Q&A (0)

As you adapt the UFO game to be an AR experience, you'll need to rethink the way that the UFO moves.  In the desktop version, the UFO was controlled with the keyboard, but displaying the entire keyboard isn’t really a viable option for a mobile game — it would take up half the screen!

[Image: image]

In this tutorial, you’ll explore  options for alternative controls and implement new UFO movement for the mobile AR game.

ステップを完了としてマーク

## 2. Evaluate UI options for the UFO movement

Q&A (0)

As with many challenges in creating digital experiences, there are different approaches that you can take as you redesign the UFO movement. You know the keyboard won’t work, so take a few minutes to explore how other AR experiences handle user input.

#### Screen space UI

Some AR experiences include **screen space** **UI** buttons, which remain on screen at all times at the same location, to allow the user movement control. The benefit of screen space buttons is that they will always be visible and accessible to the user, but the drawback is that they take up valuable screen space. [Krystal Kart AR](https://www.antlerinteractive.com/krystal-kart-ar), a game where you drive a cart around an AR track, uses a screen space joystick.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

#### World space UI

Other AR experiences use **worldspace UI** elements, which include buttons or text that are located within the 3D AR scene. The benefit of worldspace buttons is that they can feel more integrated into the AR world, but a potential drawback is that they will change in position and perspective as you move around the AR scene and may not always be visible or accessible. [Knightfall AR](https://play.google.com/store/apps/details?id=com.aetn.games.android.history.knightfall.ar), for example, includes some worldspace UI elements.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

#### Other types of player control

In addition to having actual buttons the user can press on the screen, there are other ways the user could control movement in an AR experience. Here are two examples:

- The user could click and drag digital objects around the scene. You can see an example of this movement in [Wayfair AR](https://youtu.be/BrZUEL3LJtU?t=16), where you can touch and drag furniture.
- The user could tap on an object or the location that the player should move. You can see an example of this in [My AR Puppy](https://apps.apple.com/us/app/my-ar-puppy-fun-virtual-pet/id1487263639), where you can play fetch with your puppy or have him walk towards a food bowl.

ステップを完了としてマーク

## 3. Review the UFO Movement Script Machine

Q&A (0)

The UFO Movement Script Machine handles all of the UFO’s movement in the game. Inside the Script Machine are four graphs, which manage left, right, forward and backward movement.

[Image: image]

Each of these graphs are functionally the same, with only two differences:

- The button that triggers the sequence (currently the W, A, S, or D keys) is different in each group.
- The X or Z position value that limits how far the UFO can move in a given direction is different in each group.

[Image: image]

You’ll notice that there are two values to detect keyboard input: one for **On Input System Event Float: On Pressed** and one for **On Input System Event Float: On Released**. These nodes feed into the **Toggle Value** node, which allows the graph to detect the complete button press action.

[Image: image]

When the key is down, the toggle is On and the UFO starts moving. When the key is up, the toggle is off and the UFO stops moving.

The entirety of the movement input system is controlled by those **On Keyboard Input**nodes. Your job is to replace those nodes with something that is compatible with mobile AR.

ステップを完了としてマーク

## 4. Create a worldspace UI

Q&A (0)

In this tutorial, we will guide you through implementing a world space UI, with directional movement buttons on all four sides of the farm.

[Image: image]

This is probably the simplest and most intuitive movement option that also stays true to the original gameplay from the desktop version. However, if you want to implement an alternative movement system, you will have an opportunity to do that at the end of this tutorial!

Follow these instructions to create a worldspace UI to control your UFO:

**1.**  In the **Project** window, navigate to the **Prefabs** folder. Click and drag the **Gameplay** prefab into the **Hierarchy**window.

**2.**  Create a new **UI** >**Canvas**GameObject as a child of the **MeshParent**GameObject. Name the UI Canvas “WorldspaceCanvas” or something similar.

[Image: image]

**3.**  In the **Inspector** window, find the Canvas component. Set the **Render Mode** to **World Space**.

**Important:**The **Inspector** window will display a warning that states that a World Space Canvas needs to have an assigned camera to register UI events correctly. This Canvas is part of a prefab, so references to hierarchical cameras will be lost. You’ll need to keep this fact in mind and solve the issue in a script graph as you adjust the game.

[Image: image]

**4.** Position, scale and rotate the canvas so that it lays flat on the ground and is larger than the fenced-in farm area. For this example, the canvas's **Height** and **Width** were set to **30** and the **Rotation X** was set to **90**.

[Image: image]

**5.**In the **Hierarchy**window, create a new UI Button GameObject as a child of the **WorldspaceCanvas**. Rename the new button “LeftArrow”.

**6.**In the **Inspector** window, style the**LeftArrow** GameObject as desired. Customize the text by selecting the **Font Asset**, **Font Size**, and**Font Style** properties you think look best, and change the **Source Image** to a different sprite if desired.

**7.**Duplicate the **LeftArrow**GameObject three times and rename each button for a different direction.

**8.**  Position each direction button on the matching side of the play area.

[Image: image]ステップを完了としてマーク

## 5. Reconfigure movement for buttons

Q&A (0)

Regardless of your chosen button design, connecting the UFO movement to the correct buttons will be the same. You will begin by creating variables for each of your buttons and then connect them to corresponding directional movement using pointer events. **Pointer events** can detect when a UI element has been selected with a pointing device, such as a mouse click or finger tap. In this app the user’s finger is the pointer device.

Watch the following video to see how to modify the UFOMovement visual script or follow the instructions below:

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

**1.**In the **Hierarchy**window, select the **UFO** GameObject. In the **Inspector** window, locate the **UFOMovement** script machine and select**Edit Graph**.

**2.**  In the Blackboard, create four Object variables for your directional buttons, taking care to give them relevant names.

**3.**  In the Graph Editor, starting at the UFO right movement graph, delete both D-key **On Keyboard Input** Event nodes.

**4.**  Add a **Get Variable** node for your right directional button.

**5.**  Add an **On Pointer Down** Event node.

This event is called when the user touches the screen.

**6.**  Add an **On Pointer Up** Event node.

This event is called when the user takes their finger off the screen.

**7.**  Connect the **On Pointer Down** output to the **On**input of the **Toggle Value** node.

**8.**  Connect the **On Pointer Up** output to the **Off** input of the **Toggle Value** node.

**9.**  Connect the right directional button **Get Variable** node to the input of both **On Pointer** Event nodes.

[Image: image]

**10.** Repeat this process with the remaining three buttons, taking care to match the button direction with the direction of the graph section.

The forward and backward direction can be especially confusing, since “forward” could mean away from the user, but could also mean towards the front of the farm.

**11.** To save the changes to the Gameplay prefab, select the **Gameplay** GameObject, then in the **Inspector** window select **Overrides**> **Apply All.**

[Image: image]

**Important:**You must apply the changes to your Gameplay prefab or you'll lose the new functionality you just implemented when the prefab is spawned into the scene.

**11.**  Build and test on your device. When you touch one of the world space directional buttons, the UFO should move in the correct direction.

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

## 6. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each activity is identified as being either Easy, Medium, or Difficult so you know what level of difficulty to expect.

These activities are entirely optional, so if you’re not interested, no problem — just skip this step.

We do recommend attempting at least one of them in order to get the most out of this learning experience, however. Good luck!

#### Easy - Make the back button easier to access

The button that moves the UFO toward the back of the farm is often obscured by the farm. Is there some other location that you could place this button so that it’s more easily accessed? Keep in mind that the whole point of an AR experience is for the user to be able to move around and view the subject from different angles in their environment — so make sure the user can still use the button in different positions around the play area.

In this example, the button is raised a bit higher and angled towards the user for easier access.

[Image: image]

Alternatively, you could make the buttons much wider and therefore easier to press from any angle.

[Image: image]

There might be some other solution, too — it’s up to you to come up with a great user experience!

#### Medium - Add a sound or effect to the move buttons

On the desktop version of the game, it was obvious when you were moving the UFO since you got the physical feedback from pressing on the keyboard. In this AR version, it is more difficult to know when a button is being pressed since you don’t have any physical feedback.

Is there an effect or sound you could add that would make this interaction more obvious to the user?

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

## 7. Next steps

Q&A (0)

Congratulations! You now have a working world space UI that your player can use to control the UFO’s movement in your AR game port, regardless of whether you have chosen a marker or plane-based approach.

In the next tutorial you will adjust the UI so that the player can press a UI button to abduct the sheep.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
