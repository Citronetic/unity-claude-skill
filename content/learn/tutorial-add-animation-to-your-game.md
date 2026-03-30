[Image: image]

# Add animation to your game

Tutorial

foundational

+10XP

60 mins

3

(18)

Unity Technologies

[Image: Add animation to your game]Summary

You've learned how to implement animation in 3D and 2D projects. In this tutorial, you'll apply those skills to add animations to your game.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this tutorial, you’ll add animations to your game, whether you’re working in 2D, 3D, or decided to try both. By the end, your project will have animated elements, just like the example projects shown below.

### 3D game

If you’re doing the 3D game, you’ll create an animated enemy character to replace the current basic enemy shape.

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

### 2D game

If you are doing the 2D game, you'll add animations to the enemy and player sprites.

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

## 2. Requirements

Q&A (0)

Your game design document (GDD) is still evolving, so take a moment to review it with a focus on character and object movement.

Animation shapes how your game feels moment to moment. A horror game might rely on slow, unsettling motions, while a fast-paced arcade game uses snappy, exaggerated animations.

Now, think about the animation style that suits your project, whether you’re building in 2D, 3D, or both.

Ask yourself the following questions:

- What core actions must be animated — movement, attacks, pickups, damage, death, UI reactions?
- How will animation support player feedback — for example, squash and stretch, anticipation, or hit reactions?

Mark step as complete

## 3. Review your design document

Q&A (0)

Take some time to review the assets provided in the [UCU Game Developer package](https://drive.google.com/uc?id=1Q2CX4Ju-5UgrsJKkc135vu0zImUPvtbP&export=download) that you downloaded and imported earlier.

If you haven’t downloaded and imported those assets, you can do that now.

In the asset pack, you can browse the **Prefabs**> **Characters**folder, which contains a few character options for you to work with. Each character comes with at least a walk/run animation. Feel free to use any of these characters. You’ll have an opportunity to search for other characters in the Asset Store in a later tutorial.

### 2D game

Most sprite sheets come with animation frames included. If yours didn’t, you'll have to create animations for your sprites and export those as new sheets.

This is beyond the scope of this course, but you can look at generators like these:

- [Voidless.Dev - AI Pixel Art Generator](https://voidless.dev/pixel-art-generator)
- [Universal LPC Sprite Sheet Character Generator](https://liberatedpixelcup.github.io/Universal-LPC-Spritesheet-Character-Generator/#sex=male&body=Body_color_light&head=Human_male_light&expression=Neutral_light)
- [Universal Sprite Creator YouTube Tutorial](https://www.youtube.com/watch?v=dTBbJ6qDY8o)

You can also do it manually using software like [Adobe Animate](https://www.adobe.com/za/products/animate.html?mv=search&mv=search&mv2=paidsearch&sdid=GMCWY69B&ef_id=Cj0KCQiAoZDJBhC0ARIsAERP-F9vGQ4AQumuGmHWoCjJF6dCcvfNdCMIKMWaObCj5p5xgjaIXmy_hX4aAs4uEALw_wcB:G:s&s_kwcid=AL!3085!3!714726055380!b!!g!!adobe%20animate!20914207083!157477690077&gad_source=1&gad_campaignid=20914207083&gbraid=0AAAAADraYsLqI28TeOa7oPBWj4vsbtlJW&gclid=Cj0KCQiAoZDJBhC0ARIsAERP-F9vGQ4AQumuGmHWoCjJF6dCcvfNdCMIKMWaObCj5p5xgjaIXmy_hX4aAs4uEALw_wcB) or [Asperite](https://www.aseprite.org/).

You can even [create sprite animations](https://www.youtube.com/watch?v=_J5okZLZzFY&t=1s) from 3D models using software like Blender.

Mark step as complete

## 4. Challenge guidance

Q&A (0)

#### Create an animated enemy character (3D)

We’ve provided a few sample characters to demonstrate how you can add animated enemies to your game. In the following steps you'll learn how to do that.

We encourage you to repeat these steps with your own character once you understand the process.

To add the an enemy model to your game, follow these instructions:

**1.**Drag your selected character model from the **Prefabs** > **Characters**folder onto the **Enemy** GameObject to add it as a child GameObject.

The **Enemy** GameObject already controls the movement on the NavMesh, so any child GameObject will move along with it.

**2.**Change the scale and position of your selected character model as you see fit.

The **Enemy** GameObject will still show as a cube GameObject in the scene.

**3.**Select the **Enemy** GameObject, and in the **Inspector**window, disable the **Mesh Renderer** component to hide it.

**4.**Test the game.

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

You’ll notice that the new character is chasing the player as before, but the character stays in the default T-pose. Let’s add the provided animations to the character.

#### Adding animations to the enemy character

To add animation to your selected character model mode, follow these instructions:

**1.**Navigate to the **Assets**> **Animations**folder,****right-click in the **Animations**folder, then select **Create** > **Animation Controller**. Name it “EnemyAnimation”.

**2.**Select your chosen character model in the **Hierarchy**window, then, in the **Inspector**window, drag the newly created **Animator** **Controller** to the **Controller**property box of the **Animator** component.

[Image: Animation controller added to the Animator component.]

We’ve provided a few animations for your selected character model character, but they still need to be assembled and assigned to be used.

**3.**From the main menu,****select**Window** > **Animation** > **Animator** to open the **Animator** window.

[Image: The Animator window]

**4.**Navigate to**Assets** > **Animations** > **AnimationClips,**locate****the idle animation for your character, in this case the **Mr.Crab@Idle** animation, and drag it into the **Animator** window.

If there’s no Idle animation, select the walk or run animation instead.

This will set the idle animation as the default state. If you test the game now, you'll see that the idle animation runs once, then stops.

**5.**In the **Project** window, select the animation clip again. In the **Inspector** window, select the **Animation** tab, and then enable **Loop Time**.

This will ensure that the idle animation plays continuously. Unfortunately, the idle animation is the only animation that plays, even when the character is moving. Let’s fix that.

[Image: Set the loop option for Idle animation in the Inspector]

****

**6.**Navigate to **Assets** > **Animations** > **AnimationClips**, locate the **walk**animation, and drag it into the **Animator** window.

****

**7.**Right-click the **Idle** animation, select **Make Transition**, and select the **Walk** animation to link the two.

[Image: Set the Idle to Walk animation transition.]

****

**8.** In the **Animator**window, switch to the **Parameters** tab and add a new float parameter. Name it “speed_f”.

You’ll use this parameter later in a script to toggle the transition between the idle and walk animations.

[Image: Create a new float parameter]

****

**9.**Select the transition line between the **Idle** and **Walk** animations and in the **Inspector**window, select the **Add** (**+**) button under **Conditions** to add a new condition.

[Image: Use the float speed as transition condition]

****

**10.**Ensure that the new condition is set to **speed_f**, **Greater** and **0**.

This means the transition will happen whenever the **speed_f parameter** is set to something bigger than **0**.

****

**11.**Create another transition, this time from the **Walk** animation to the **Idle**animation.

[Image: Set the Walk to Idle transition]

****

**12.**Select the new transition line, and in the **Inspector**window, add a condition set to**speed_f**,**Less** and **0.05**.

This will let the animation transition back to idle when the enemy is not moving.

Now you need to make sure that the transition will happen when the state of the enemy changes and not only when the animation has played all of its frames.

****

**13.**Select the transition line from **Idle** to **Walk** and disable **Has Exit Time**.

****

**14.**Select the transition line from **Walk** to **Idle** and disable **Has Exit Time**.

The **Has Exit Time** property determines if a transition from one animation state to another should wait for the first animation clip to finish or if it can transition at any point based on other conditions being met. In gameplay, responsiveness is critical. If a player provides input to make a character walk, they expect the action to be immediate. If **Has Exit Time** is enabled, the transition to the walk animation might have to wait for the idle animation to finish its current loop, leading to perceived input lag.

**15.**Navigate to **Assets** > **Animations** > **Mr.Crab**, select the **Walk** animation, and just like you did for the **Idle** animation, enable **Loop Time**.

#### Update the EnemyMovement script

To update the **EnemyMovement** script to reflect the new animations you just added, follow these instructions:

**1.**Open your **EnemyMovement** script and add a new private **Animator** variable.

```csharp
private Animator anim;
```

**2.**Add the following code to the **Start** function:

```csharp
private void Start()
    {
        //Get the nav mesh agent component
        navMeshAgent = GetComponent<NavMeshAgent>();
        //Get the animator component
        anim = GetComponentInChildren<Animator>();
        //Set the value of speed_f
        if (anim)
        {
            anim.SetFloat("speed_f", navMeshAgent.speed);
        }
    }
```

This code retrieves the **Animator** component from any child GameObject. Then, if the **Animator** component exists, it sets the **speed_f** parameter to match the speed of the agent. This means that the animation clip’s speed will be proportional to the speed the enemy is moving, which is perfect.

Now, the enemy’s walking animation should play when it moves, but the enemy character will continue its walking cycle after it has stopped when it catches the player — this will look very strange.

To set the animation back to idle, you need to set the **speed_f** variable back to**0** when the lose condition is triggered.

**3.**Add the following line to your **PlayerController** script inside the i**f (collision.gameObject.CompareTag("Enemy"))** section of the OnCollisionEnter****function:

```csharp
//Set the speed of the enemy’s animation to 0
            collision.gameObject.GetComponentInChildren<Animator>().SetFloat("speed_f", 0);
```

The complete function should look like this:

```csharp
private void OnCollisionEnter(Collision collision)
 {
  if (collision.gameObject.CompareTag("Enemy"))
  {
    // play explosion fx
    Instantiate(explosionFX, transform.position, Quaternion.identity);

    // Destroy the current object
    Destroy(gameObject);

    // Set the text to "You Lose!"
    winText.text = "You Lose!";
    AnimateText();

    // play explosion sound
    collision.gameObject.GetComponent<AudioSource>().Play();

    // Set the speed of the enemy to 0
    collision.gameObject.GetComponentInChildren<Animator>().SetFloat("speed_f", 0);

  }

}
```

### Add animations to your sprites (2D)

#### Prepare the sprite sheet

To set up the sprite sheet so that it can be animated, follow these instructions:

**1.** Import your sprite into your Unity project and select it in the **Project** window.

**2.** Change the Sprite Mode in the Inspector window from "Single" to "Multiple".

[Image: image]

****

**3.** Adjust other settings if needed (for example, set the **Filter Mode** property to **Point (no filter)** for pixel art and the **Compression** property to **None** for best quality).

**4.** Select **Apply** to save the import settings.

**5.**Open the Sprite Editor by selecting the **Sprite** **Editor** button in the **Inspector** window.

If the button is greyed out, ensure the **2D Sprite** package is installed via the **Package** **Manager**.

**6.** Open the **Slice** dropdown menu in the upper-left corner.

**7.** Select a slicing **Type**:

- **Automatic**: Best for irregular sprites with spacing between them.
- **Grid By Cell Size**: Ideal for evenly distributed sprites of a standard size. Enter the pixel dimensions of each sprite (for example, **32x32**).
- **Grid By Cell Count**: Useful if you know the number of columns and rows.

[Image: image]

**8.** Select a **Pivot** point (for example, **Center** or **Bottom Left**) for the individual sprites.

**9.** Select the **Slice** button.

**10.** Review and refine the slices.

You can manually adjust the bounding boxes of individual sprites, rename them, or change their **Pivot** points if needed.

**11.** Apply changes by selecting the **Apply** button in the upper-right of the **Sprite** **Editor** window.

**12.** Close the **Sprite** **Editor** and return to your **Project** window.

The individual sub-sprites will now appear as child sprites of the main sprite sheet asset and can be dragged into your scene or used in animations.

You can learn more about this in the [Introduction to Sprite Editor and Sheets](https://learn.unity.com/tutorial/introduction-to-sprite-editor-and-sheets) tutorial and the [Sprites documentation](https://docs.unity3d.com/Manual/sprite/sprite-landing.html).

#### Create the animations

To create the keyframed animations, follow these instructions:

**1.** Open the **Animation** window by selecting **Window > Animation > Animation**.

**2.** Select the sprite you want to animate.

Make sure it’s the actual GameObject that contains the **Sprite Renderer** component, and not a parent**GameObject**.

**3.** In the **Animation** window, select the **Create** button to create a new animation clip and name it something relevant.

[Image: image]

**4.** Drag the individual sprite frames you prepared earlier from the **Project** window directly into the timeline.

Unity will automatically place them in sequence.

[Image: image]

****

**5.** Select **Play** in the **Animation** window to preview the animation.

If it looks too fast or too slow, adjust the **Samples** property value in the upper-left of the **Animation** window until you get the timing you want.

[Image: image]

If the **Samples**property isn’t visible, activate it by selecting the **More**(**⋮**) menu in the upper-right corner of the **Animation** window and enable **Show** **Sample** **Rate**.

Once enabled, the **Samples** property will appear next to the clip name.

[Image: image]

Unity automatically creates an **Animator** **Controller**when you save the clip.

**6.** Select the sprite GameObject and look in the **Inspector** to confirm that an **Animator** component and controller have been assigned.

**7.** To make the animation loop (or not), select the animation clip in the **Project** window, then in the **Inspector**window, enable or disable **Loop Time** depending on what the animation should do.

**8.** Test the animation in Play mode to ensure it behaves correctly in-game. Adjust clip settings, frame order, or sample rate as needed.

Mark step as complete

## 5. More things to try

Q&A (0)

If you want to develop your skills further, explore new concepts, or improve your project, check out some of the optional activities below.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting it in order to get the most out of this learning experience. Good luck!

#### Easy: Add additional animations to scene elements

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

Your characters aren’t the only objects that can be animated in the scene. Try using Unity’s built-in animation tools to animate other objects. You could add a moving platform that adds new gameplay mechanics, or you could do more aesthetic animations like giving static environmental objects a subtle bounce or sway.

Mark step as complete

## 6. Next steps

Q&A (0)

In this tutorial, you created animations to add some life and dynamics to the game. In the next tutorial, you'll learn how to customize the look and feel of your game with materials and shaders.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
