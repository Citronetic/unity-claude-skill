[Image: image]

# Lesson 1.4 - Get into the Driver's Seat

Tutorial

Beginner

+10XP

50 mins

2

(69)

Unity Technologies

[Image: Lesson 1.4 - Get into the Driver's Seat]Summary

**Overview:**

In this lesson, we need to hit the road and gain control of the vehicle. In order to do so, we need to detect when the player is pressing the arrow keys, then accelerate and turn the vehicle based on that input. Using new methods, Vectors, and variables, you will allow the vehicle to move forwards or backwards and turn left to right. At the end of this lesson, you will take the role of a QA tester and write a 'Test Script' for the finished prototype

**Project Outcome:**

When the player presses the up/down arrows, the vehicle will move forward and backward. When the player presses the left/right arrows, the vehicle will turn.

Languages available:

EnglishEnglishEnglish

## 1. Introduction

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

Mark step as complete

## 2. Allow the vehicle to move left/right

Q&A (0)

> *Until now, the vehicle has only been able to move straight forward along the road. We need it to be able to move left and right to avoid the obstacles.*

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

1. At the top of PlayerController.cs, add a ***public float turnSpeed;*** variable
2. In ***Update()***, add  ***transform.Translate(Vector3.right * Time.deltaTime * turnSpeed);***
3. Run your game and use the ***turnSpeed*** **variable slider** to move the vehicle left and right

[Image: image]Mark step as complete

## 3. Base left/right movement on input

Q&A (0)

> *Currently, we can only control the vehicle’s left and right movement in the inspector. We need to grant some power to the player and allow them to control that movement for themselves.*

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

1. In **PlayerController.cs**, add a new ***public float horizontalInput*** variable
2. In ***Update***, assign ***horizontalInput = Input.GetAxis("Horizontal");***, then test to see it in inspector
3. Add the ***horizontalInput*** variable to your left/right **Translate method** to gain control of the vehicle
4. In the inspector, set the ***turnSpeed*** and edit the ***speed*** variables to tweak the feel

[Image: image]Mark step as complete

## 4. Take control of the vehicle speed

Q&A (0)

> *We’ve allowed the player to control the steering wheel, but we also want them to control the gas pedal and brake*

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

1. Declare a new public ***forwardInput*** variable
2. In ***Update***, assign ***forwardInput = Input.GetAxis("Vertical");***
3. Add the ***forwardInput*** variable to the **forward Translate method**, then test

[Image: image]Mark step as complete

## 5. Make vehicle rotate instead of slide

Q&A (0)

> *There’s something weird about the vehicle’s movement… it’s slides left to right instead of turning. Let’s  allow the vehicle to turn like a real car!*

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

1. In ***Update***, call ***transform.Rotate(Vector3.up**, **horizontalInput)***, then test
2. **Delete** the line of code that **translates Right**, then test
3. Add **** turnSpeed * Time.deltaTime***, then test

[Image: image]Mark step as complete

## 6. Clean your code and hierarchy

Q&A (0)

> *We added lots of new stuff in this lesson. Before moving on and to be more professional, we need to clean our scripts and hierarchy to make them more organized.*

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

1. In the hierarchy, *Right-click > Create Empty* and rename it “Obstacles”, then **drag** all the obstacles into it
2. **Initialize** variables with values in **PlayerController**, then make all variables **private** (except for the **player** variables)
3. Use ***//*** to add **comments** to each section of code

[Image: image]

- **QA Tip**: Sometimes comments are used to advise what should be tested or can be used in a code review before the formal QA step of unit testing. Alternatively, when using automated testing it is at this phase a test script might be created and applied to the project.

Mark step as complete

## 7. Introduction to Test Scripts in QA

Q&A (0)

Test scripts are a series of steps for a tester to follow with open sections where they can fill in observations.  They are usually built before formal testing starts and try to capture test specific requirements or assumptions as they are delivered by development to inform the testing.

[Image: image]

Characteristics of a good test script are:

- Written in a way that tested will test only one thing at a time. Do not overlap or complicate steps.
- Ensure that all positive and negative scenarios are covered.
- Simply written using easy-to-understand language.
- Written in the active voice: "Do this, do that."
- Use exact and consistent names (of forms, fields, etc).
- Does not include any unnecessary steps or words.
- Is repeatable and can be used to perform the test over and over.
- Can be reused if necessary.

Mark step as complete

## 8. Create a Draft Test Script

Q&A (0)

Using the specifications of the Driving Simulator prototype you just created, create a draft of a test script outlining the existing features and mechanics found in this prototype. You can create it in a spreadsheet or you can use templates of test cases, similar to those found [here](https://www.guru99.com/test-case.html).

Mark step as complete

## 9. Lesson Recap

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

New Functionality

- When the player presses the up/down arrows, the vehicle will move forward and backward
- When the player presses the left/right arrows, the vehicle turns

New Concepts & Skills

- Working with empty objects
- Get user input
- Understand Translate vs Rotate
- Writing a Test Script

Mark step as complete

## Complete this Tutorial

Mark all steps complete
