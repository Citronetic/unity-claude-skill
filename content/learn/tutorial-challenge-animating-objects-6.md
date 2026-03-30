[Image: image]

# Challenge — Animating Objects

Tutorial

Beginner

+10XP

30 mins

0

(23)

Unity Technologies

[Image: Challenge — Animating Objects]Summary

In this challenge, you will animate Cameras on the Mars Rover using Animation Clips.

Resources

- [Tutorial15_Animating.zip](https://unity-connect-prd.storage.googleapis.com/20200409/854c4a6e-1a35-4e87-b255-0e32b3d15870/Tutorial15_Animating.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952241990)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this challenge, you will animate Cameras on the Mars Rover using Animation Clips. This gives you a chance the practice the skills covered in the previous tutorial.

[Image: image]

In this challenge, you will animate the Rover Camera. To do so, you’ll need to:

1. Create an Animation Clip
2. Add the rotation property and Keyframes
3. Rotate the Rover camera back and forth

Mark step as complete

## 2. Create an Animation Clip

Q&A (0)

*Open the Animation window. With the GameObject Roverhead selected in your Hierarchy, create an Animation Clip.*

[Image: image]

(**Hint**: **RoverHead****is a child of **Rover**. Make sure to expand GameObjects in your Hierarchy (**Alt + Click**)****to see all the parts.)

1. Open the Animation window by navigating to (**Window**> **Animation**> **Animation**).
2. With **RoverHead****selected in your Hierarchy, click **Create** in the Animation window.
3. Name the animation **CameraRotate****and save to your Animations folder.

Mark step as complete

## 3. Add the Rotation Property and Keyframes

Q&A (0)

*Add the Rotation Property to your Dopesheet to expose values that you can adjust.*

[Image: image]

1. Click **Add Property** to open up the property list.
2. Select **Transform > Rotation**.

*Add a Keyframe at 1.30 seconds to mark where the Rotation property will change.*

[Image: image]

**1.** Use your mouse scroll wheel in the **Dopesheet** so you can see the 1.30 seconds mark.

[Image: image]

**2.** Scrub (drag) the white line to the 1.30 seconds mark.

[Image: image]

**3.** Click the **Add Keyframe** button to see Keyframes added.

Mark step as complete

## 4. Rotate the Camera Back and Forth

Q&A (0)

*Input 65 in the Rotation.y field at your end Keyframe to rotate to one side and loop the animation.*

[Image: image]

(**Hint:** Expand **RoverHead: Rotation** in the Property List to find the Rotation.y field.)

1. In your Dopesheet, expand **RoverHead: Rotation**.
2. With your scrubber on the end Keyframe, input **65** on **Rotation.y** (currently it will say 0).
3. Add another Keyframe at 2.30 seconds.
4. Copy your Keyframes at 0 and paste them at 2.30 seconds.

[Image: image]

--------------------

*Test your animation by pressing **play** in the **Animation window**.*

[Image: image][Image: image]

**Tip — View Your Animation Frame by Frame**

Instead of hitting play, scrub back and forth in your **Dopesheet** to control your animation preview.

Mark step as complete

## 5. Key Takeaways

Q&A (0)

Great job adding your first animations to different GameObjects! You should now be familiar with how to create a simple rotation animation using the Animation window along with its various features, such as the:

- Animation Properties List
- Dopesheet
- Keyframes
- Animation Timeline

Mark step as complete

## Complete this Tutorial

Mark all steps complete
