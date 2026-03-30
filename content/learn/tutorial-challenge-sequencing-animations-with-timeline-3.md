[Image: image]

# Challenge — Sequencing Animations with Timeline

Tutorial

Beginner

+10XP

30 mins

3

(56)

Unity Technologies

[Image: Challenge — Sequencing Animations with Timeline]Summary

In this challenge, you'll be animating a brake model to demonstrate the brake’s components.

Resources

- [Tutorial17_Timeline.zip](https://unity-connect-prd.storage.googleapis.com/20200403/fab0255a-cc07-447c-ac34-3fbf02f237e2/Tutorial17_Timeline.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952714710)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

The goal of this challenge is to apply what you've learned about animations to a GameObject to visualize the anatomy of the object itself. We'll use an automotive brake to explore how we can animate its different child GameObjects to reveal all of it parts and pieces. The provided scene has a brake labeled “PiXYZ-DEMO-BRAKES.CATProduct.” The complete Scene uses a Timeline to coordinate the multiple animations.

To complete this challenge, you will:

1. Animate the caliper on the Z axis
2. Animate the bolts vertically on the Y axis
3. Animate the brake’s back and front on the Z and Y axes

Mark step as complete

## 2. Create the Brake Caliper Animation

Q&A (0)

*Create an animation that moves the brake caliper in the negative Z direction.*

[Image: image]

**(Hint:**Click on various pieces of the brake model to figure out which parts you need to use.)

[Image: image]

(**Hint**:****You can find the Timeline and Animation windows by selecting **Window**> **Animation**or **Window**>**Timeline**)

**1.** Open the Animation window (**Window**> **Animation**).

[Image: image]

**2.** Create a new **Animation Clip**and name it **CaliperFlyout**.

[Image: image][Image: image]

**3.** Click the **Add Property** button and grab the Transform/position of every caliper part in the Hierarchy.

[Image: image]

**4.** Zoom out on the Timeline and add a **Keyframe**(to recap, a Keyframe defines the starting and ending points of any smooth transition) at around 6:00.

[Image: image]

**5.** Click **Record**and drag each of the caliper parts backward in the Z direction within the Scene view.

[Image: image]

**Tip — Carefully Add Your Animation Properties**

If you simply grab the high-level caliper parts, you will not be able to access the position property in the Animation Clip. Here’s what it looks like when you grab only the higher-level parts.

[Image: image]Mark step as complete

## 3. Animate the Bolts

Q&A (0)

*Create a BoltFlyOut Animation for the bolts in the brake assembly.*

[Image: image]

1. Open the **Animation** window.
2. Create a new **Animation Clip**and name it **BoltFlyout**.
3. Add each **Bolt Transform** to the Animation window using the **Add Property**button.
4. Add **Keyframes**that move the bolts in the negative Y direction (Note: Past -3 is a good number as a guideline to ensure the bolts get out of the way of the rest of the brake.)

Mark step as complete

## 4. Animate the Brake Backing Pieces

Q&A (0)

*Use the Animation window to create an animation that moves the brake backs outward.*

[Image: image]

1. Open the Animation window.
2. Create a new **Animation Clip**and name it **BrakeBackFlyout**.
3. Add each back disc part’s Transform to the Animation window.
4. Move the GameObjects away from the center of the model, creating new Keyframes to lock in the changed Position values.

Mark step as complete

## 5. Animate the Manifold

Q&A (0)

*Use the Animation window to create an animation that moves the manifold piece backward on the Z axis.*

[Image: image]

1. Select the **Manifold** GameObject in the Hierarchy and add a new property.
2. Add a new Keyframe approximately five seconds into the Timeline, and record the Manifold’s adjusted position on the Z axis.
3. Deselect record to stop the edit and hit the play button to test the Manifold’s movement.

Mark step as complete

## 6. Sequence the Animation Clips with Timeline

Q&A (0)

*Create a Timeline and drag the four animations you created above into the Timeline editor. Drag each clip to the initial timestamp — we want all to play at the same time.*

[Image: image]

(**Hint:**The Timeline is responsible for executing Animations in a sequence, but needs an Animator to bind to as well.)

**1.** Create a new Timeline Asset and name it **Explode**.**

[Image: image]

**2.** Double-click it to open the **Timeline Asset** in the Timeline window and create or drag the four Animation Clips you created from the Project window to the Timeline.

[Image: image]

**3.** By the time you’ve finished adjusting the clips, your Timeline will look like this.

[Image: image]

**4.** Create a **Playable Director** on an empty GameObject (called **Timeline**) and drag it into the **Timeline Asset.**

[Image: image][Image: image]

--------------------

**Tip — Create Your Animation Clips Directly in Timeline**

Create your Animation Clips directly in Timeline by adding a new GameObject, hitting the record button, and adjusting the object's **Position, Rotation,** or **Scale** (depending on your intention). This saves you the step of making them and then adding them to the Timeline.

[Image: image][Image: image]

Amazing! Now that you've built your own Timeline creation, feel free to explore more animations.

**Tip — Un-looping your Animations**

Having trouble with looping animations? Locate the animation in your Project window, select it to show the Animation Clip Inspector, then ensure Loop Time is unchecked.

[Image: image]Mark step as complete

## 7. Key Takeaways

Q&A (0)

You've now completed the animation challenge and have animated a brake model, providing users with a  clearer view of the brake's many parts, which is helpful when engineering, designing, or reviewing a product.

By completing this challenge, you’re now able to:

- Create multiple Animation Clips using the Animation window and Keyframes
- Sequence multiple animations at once using Timeline to increase the amount of activity in a Scene.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
