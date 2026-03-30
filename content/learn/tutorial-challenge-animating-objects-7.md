[Image: image]

# Challenge — Animating Objects

Tutorial

Beginner

+10XP

0 mins

1

(10)

Unity Technologies

[Image: Challenge — Animating Objects]Summary

In this challenge, you'll animate a car to rotate on a pedestal using Animation Clips. You'll practice skills covered in the previous tutorial to allow your user to view the car from all angles and gain a better understanding of the model.

Resources

- [Tutorial15_AnimatingObjects.zip](https://unity-connect-prd.storage.googleapis.com/20200410/1d94c242-a9bb-4ad9-b019-5cf02c72abd2/Tutorial15_AnimatingObjects.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952198699)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this challenge, you will animate a showroom car to rotate on a pedestal using Animation Clips. This will give you a chance to practice the skills covered in the previous tutorial and apply them to a simple Scene containing a car model.

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

In this challenge, you will animate the car and pedestal. To do so, you’ll need to:

1. Create an Animation Clip
2. Add the Rotation property and Keyframes
3. Rotate the platform and car 360 degrees

Mark step as complete

## 2. Create an Animation Clip

Q&A (0)

*Open the Animation window. With the GameObject Platform-detach* *selected in your Hierarchy, create an animation clip.*

[Image: image]

**Platform-detach** is a child of **Platform**, which is a child of **Room**. Make sure to expand GameObjects in your Hierarchy to see all parts. The reason we are creating our Animation Clip with the GameObject **Platform-detach** selected is because our car is a child of that GameObject and we want to animate both.

1. Open the Animation window by navigating to **Window**> **Animation** in your navigation bar.
2. Select the GameObject **Platform-detach** in your Hierarchy. With Platform-detach selected, select **Create**in the Animation window.
3. Name the animation **SpinDisplay** and save to your Animations folder.

**Tip — Expand GameObjects in the Hierarchy**

To quickly expand a GameObject with many children/parent relationships, use **Alt + Click** to fully view all working parts.

Mark step as complete

## 3. Add the Rotation Property and Keyframes

Q&A (0)

*Add the Rotation property to your Dope Sheet*

[Image: image]

*Add a Keyframe between 10 and 12 seconds that will be the duration of your animation*

[Image: image]

(**Hint:**Use the **Add Keyframe** button to add the Keyframe once you reach your desired time.)

1. Click **Add Property**to open up the property list.
2. Select **Transform > Rotation**.
3. Use your mouse in **Dope Sheet**so you can see the 10 to 12**second mark.
4. Scrub (drag) the white line to the 10 to 12 second mark.
5. Click the **Add Keyframe** button to see Keyframes added.

Mark step as complete

## 4. Rotate the Platform and Car 360 Degrees

Q&A (0)

*Input 360 in the Rotation.y field at your end Keyframe*

(**Hint**: Expand Platform-detach : Rotation in the **Property List** to find the **Rotation.y** field)

[Image: image]

*Test your animation by pressing **Play** in the **Animation Window***

[Image: image]

1. In your Dope Sheet, expand **Platform-detach : Rotation**.
2. With your scrubber on the end **Keyframe**, input 360 on **Rotation.y**. Currently it will say 0.
3. Press the play button in your Animation window to preview your animation.

**Tip — View your Animation frame by frame**

Instead of hitting play, scrub in your **Dope Sheet** back and forth to control your animation preview.

Mark step as complete

## 5. Key Takeaways

Q&A (0)

Great job adding your first animations to different GameObjects! You should now be familiar with how to create a simple rotation animation using the Animation window along with its various features:

- Animation Properties List
- Dope Sheet
- Keyframes
- Animation Timeline

Mark step as complete

## Complete this Tutorial

Mark all steps complete
