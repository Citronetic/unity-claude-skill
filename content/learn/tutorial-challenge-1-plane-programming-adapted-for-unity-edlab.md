[Image: image]

# Challenge 1 - Plane Programming (Adapted for Unity EdLab)

Tutorial

Beginner

+10XP

30 mins

0

(33)

Unity Technologies

[Image: Challenge 1 - Plane Programming (Adapted for Unity EdLab)]Summary

**Challenge Overview:**

Use the skills you learned in the driving simulation to fly a plane around obstacles in the sky. You will have to get the user’s input from the up and down arrows in order to control the plane’s pitch up and down. You will also have to make the camera follow alongside the plane so you can keep it in view.

**Challenge Outcome:**

- The plane moves forward at a constant rate
- The up/down arrows tilt the nose of the plane up and down
- The camera follows along beside the plane as it flies

Resources

- [Challenge 1 - Starter Files.zip](https://unity-connect-prd.storage.googleapis.com/20210506/913574fa-af65-4d95-abe8-d90282b27a83/Challenge%201%20-%20Starter%20Files.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952046084)

Languages available:

EnglishEnglishEnglish

## 1. Challenge 1 Overview

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off
- English, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

- Open your **Prototype 1**project
- In your **File Explorer**, select the drive named “Unity Projects and Assets”. Navigate to **CreateWithCode > Unit 1 - Player Control > Challenge 1 - Plane Programming**. Double-click the “Challenge- 1_Start” package to **import**.
- In the *Project Window > Assets > Challenge 1 > **Instructions*** folder, use the Challenge 1 - Outcome video as a guide to complete the challenge

Mark step as complete

## 2. Warning

Q&A (0)

When you import the challenge into your project, it is **supposed to have bugs**.

The purpose of the challenge is for you to fix those bugs, which are listed below. There are also hints at the bottom of the page to help you if you get stuck.

If you cannot fix the bugs and wish to delete the challenge files from your project, in the Project window, right-click on**Assets > **Challenge 1**and select **Delete.**

Good luck!

Mark step as complete

## 3. The plane is going backward

Q&A (0)

- **Make the plane go forward**

Mark step as complete

## 4. The plane is going too fast

Q&A (0)

- **Slow the plane down to a manageable speed**

Mark step as complete

## 5. The plane is tilting automatically

Q&A (0)

- **Make the plane tilt only if the user presses the up/down arrows**

Mark step as complete

## 6. The camera is in front of the plane

Q&A (0)

- **Reposition it so it’s beside the plane**

Mark step as complete

## 7. The camera is not following the plane

Q&A (0)

- **Make the camera follow the plane**

Mark step as complete

## 8. Bonus: The plane’s propeller does not spin

Q&A (0)

- **Create a script that spins the plane’s propeller**

Mark step as completeOptional Step

## 9. Hints

Q&A (0)

- **Make the plane go forward***Hint: Vector3.back makes an object move backwards, Vector3.forward makes it go forwards*
- **Slow the plane down to a manageable speed*****Hint: If you multiply a value by Time.deltaTime, it will change it from 1x/frame to 1x/second*
- **Make the plane tilt only if the user presses the up/down arrows*****Hint: In PlaneController.cs, in Update(), the verticalInput value is assigned, but it’s never actually used in the Rotate() call*
- **Reposition it so it’s beside the plane*****Hint: For the camera’s position, try X=30, Y=0, Z=10 and for the camera’s rotation, try X=0, Y=-90, Z=0*
- **Make the camera follow the plane*****Hint: In FollowPlane.cs, neither the plane nor offset variables are assigned a value - assign the plane variable in the camera’s inspector and assign the offset = new Vector3(30, 0, 10) in the code*
- **Bonus - Make the propeller spin*****Hint: There is a “Propeller” child object of the plane - you should create a new “SpinPropellerX.cs” script and make it rotate every frame around the Z axis.*

Mark step as completeOptional Step

## 10. Want even more challenges?

Q&A (0)

If you want, you can challenge yourself even more by attempting to add special bonus features to your main prototype, which range from Easy to Expert in difficulty.

Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration -:-Loaded: 0%Remaining Time -0:001xPlayback Rate

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

These extra bonus challenges are entirely optional. If you are not interested and just want to continue with the course, simply mark this step complete and move on to the next tutorial.

If you are interested, check out the [Bonus Feature tutorial](https://learn.unity.com/tutorial/bonus-features-1-share-your-work) and remember to return here when you're done to keep learning!

Mark step as complete

## Complete this Tutorial

Mark all steps complete
