[Image: image]

# 3D Essentials: More things to try

Tutorial

foundational

+10XP

15 mins

32

(10060)

Unity Technologies

[Image: 3D Essentials: More things to try]Summary

Further develop your project and skills with optional challenges of varying difficulty.

Languages available:

EnglishEnglishEspañolEnglish

## 1. Overview

Q&A (0)

Try these optional activities to challenge yourself, build your skills, and improve your project!

Each challenge is tagged as **Easy**, **Medium**, or **Expert** difficulty so that you know what to expect. You can do one of them, all of them, or none of them — it’s totally up to you!

- **Easy:** Make a perfect block tower with vertex snapping.
- **Medium:** Add different shaped prefab blocks.
- **Expert:** Add and frame custom artwork.

If you’re not interested in doing these challenges, skip to the end of this tutorial to mark it as complete.

Mark step as complete

## 2. Easy: Make a perfect block tower with vertex snapping

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

This optional challenge is classified as Easy difficulty. If you’re interested in completing it, read on. Otherwise, skip to the next step.

A **vertex** (plural: vertices) is a point in where the edges of shapes meet — like a corner. In Unity, **vertex snapping** is a feature that allows you to perfectly align the vertices of different GameObjects to one another by snapping them together.

Vertex snapping is a little tricky at first, which is why this is an optional challenge. However, if you master this skill, it can be very useful!

**Instructions**

**1.**  Add a new **Block** prefab to a spot on the floor, then drag another two blocks onto the floor next to it.

**2.**  Hold down the **V** key on your keyboard while you left-click one of the bottom vertices of a block you want to put on top of another.

**3**.  Drag your cursor toward the target vertex on another block, and the vertices will snap together.

**Note:** While holding **V** and hovering a block’s corner, a direction gizmo (similar to the Move tool) will appear. Do not drag using the gizmo’s arrows, drag the Block from the vertex itself.

**4.** Repeat this process to create a perfectly aligned tower that is three or four blocks high.

Mark step as complete

## 3. Medium: Add different shaped prefab blocks

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

This optional challenge is classified as Medium difficulty. If you’re interested in completing it, read on. Otherwise, skip to the next step.

You created an interesting tower using simple rectangles, but the tower could be much more interesting if you incorporated a few different shapes, like cylinders, cones, and prisms.

**Instructions**

**1.**  In the **Project** window, go to **_Unity Essentials** > **Prefabs** > **Shapes.**

**2.**  Click and drag one of the shapes into the scene.

**3.**  To make the shape detect collisions, add a **Mesh** collider component, then enable the **Convex** property.

**4.**  To make it respond to forces, add a **Rigidbody** component.

**5.**  To give the new block some color, either create a new material for it and apply it, or select an existing material using the object picker in the **Mesh Renderer** component.

**6.**  Position the shape in an interesting position in your block configuration.

**Hint:** You might want to scale these shapes proportionally. To do this, you can click and drag the central gray handle with the **Scale** tool, or you can select the chain link icon next to the**Scale** property in the **Transform** component to constrain proportions.

Repeat this step for other blocks to try and make the collision more interesting.

Mark step as complete

## 4. Expert: Add and frame custom artwork

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

This optional challenge is classified as Expert difficulty. If you’re interested in completing it, read on. Otherwise, skip to the next step.

This room is still sort of bland — it would benefit a lot from some custom artwork. Adding some artwork also allows you to personalize this room a bit more and make it your own.

To accomplish this, you’ll need to create a blank art canvas using a quad primitive, then import and apply an image of your choosing as the quad’s material. Finally, you’ll make it look a little nicer with a frame.

**Instructions**

**1.**  Right-click in the **Hierarchy** window, select **3D Object** > **Quad** to create a flat one-sided object.

**2.**  In the **Transform** component of the quad, set its **Y** rotation value to **90** so that it will lie flat against the wall (or another multiple of 90, depending on which wall you want to put it on), then position it against a wall using the **Move** tool.

**3.**  Find or create an image you want to use for your artwork.

If you don’t have one in mind, use one from one of the links below by opening the link, right-clicking on the image, and selecting **Save Image As…:**

- [John Lemon](https://unity-connect-prd.storage.googleapis.com/20190411/learn/images/2c2068e0-dc6c-4661-bff7-21f9059d3775_3DBeginner_AssetStore_SocialMedia.png?ampDeviceId=e9830c98-cc09-4dc1-a23f-2e395d2f97b5&ampSessionId=1774846999159&ampTimestamp=1774934199953)
- [Big Cactus](https://unity-connect-prd.storage.googleapis.com/20190808/learn/images/b8fc4d22-6741-437f-998f-df4d04bfed52_BigCactus2_AssetStore_SocialMedia.jpg?ampDeviceId=e9830c98-cc09-4dc1-a23f-2e395d2f97b5&ampSessionId=1774846999159&ampTimestamp=1774934199953)
- [Game Jam Race](https://unity-connect-prd.storage.googleapis.com/20230413/learn/images/da6c7837-79c6-411c-bbc4-e56e94b42766_Game_Jam_Start_Blue_2.jpg?ampDeviceId=e9830c98-cc09-4dc1-a23f-2e395d2f97b5&ampSessionId=1774846999159&ampTimestamp=1774934199953)

**4.**  Create a new material in the **My Materials** folder named “Art_Mat” and apply it to your Quad GameObject.

**5.**  To import your chosen image into your project, drag the image file from your file explorer into the **My Materials** folder in the **Project** window.

This action will create a new copy of the image file in your Unity project folder.

**6.**  In the **Surface Inputs** section of your Art_Mat’s **Inspector** window, for the **Base Map** property, use the **Object** picker (**⊙**) to select your image.

**7.**  Adjust the Quad GameObject’s scale if necessary to avoid image distortion.

You will likely want to stretch out the canvas to make it wider.

**8.**  Duplicate the Quad (**Ctrl+D** (macOS: **Cmd+D**)), rename the duplicate "Frame", and make it a child GameObject of the Quad GameObject.

**9**.  Adjust the scale of the **Frame**GameObject to **1.1** on all axes to slightly enlarge it compared to the art, then reposition it behind the other Quad GameObject to ensure it doesn't block the art.

**10.**  Create a new material in the "My Materials" folder, name it after your chosen frame color, set the **Base Map** to a nice frame color, and apply this material to the frame to finalize the frame's appearance.

If you want, you can create additional pieces of artwork using the same steps above!

Mark step as complete

## 5. Review and proceed to the next tutorial

Q&A (0)

No matter if you chose to tackle a single challenge, complete them all, or skip them, you're set for the next step.

**Instructions**

Proceed to the next tutorial, where you'll have a chance to complete a quiz, and get credit for completing this project.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
