[Image: image]

# Conditionals primer

Tutorial

foundational

+0XP

45 mins

0

Unity Technologies

[Image: Conditionals primer]Summary

This primer teaches you how to code for different scenarios using conditionals like and, if, and or.

Click [here](https://docs.google.com/document/d/1jxaSaL-eb9nEyWloV6xWDWo231Sfy683pwF8JNxjpXo/copy) to access a Google Doc version of the activities below.

Languages available:

EnglishEnglishEnglish

## Overview Video

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

Optional Step

## 1. Key terms

Q&A (0)

- *if:* An if statement is used to present a condition where, if it is met, the code within the if statement will be executed
- else if/else: An else statement triggers when an if statement is not met. Else statements never exist on their own.
- *&&:* This is referred to as the and operator. The and operator strings together 2 conditionals indicating that the statement is only true when both conditions are met.
- *||:* This is referred to as the or operator. The or operator functions the same as &&, except that the statement will be true when at least one of the conditions is true.
- *!:* This is the not operator. The not operator will return true if the opposite condition is met. It can also be used to get the opposite of a bool value.
- *==, >/>=, </<=:* These are comparison operators. The == returns true if two things are equal. The >/>= and </<= are the greater/greater or equal to and the less than/less than or equal symbols commonly used in math logic.

Mark step as complete

## 2. Explore activities

Q&A (0)

*1. Increment Z*Create a script called TestZ.

At the top, create a private int variable named z and initialize it with 0.

In the Update() function, type a conditional statement: if z is less than 5.

In the conditional, use Debug.Log to display the value of z.

Under the line you just made, write a statement to increment z by 1.

What do you get when you attach this script to a GameObject and hit play? What happens if you change the conditional to: when z is less than or equal to 5? When z is not 5? If you moved the incrementation outside of the conditional, what happens?

*2. Nested Statements*Another important thing to remember about if statements is that they can be nested within each other. For example, you could have code that looks like this:

if (<condition>)

{
  if  (<another condition>)

{...}

}
Give three examples of when you might want to use nested if statements.

Mark step as complete

## 3. Deeper dive activities

Q&A (0)

*3. Truth Table One*Good programmers plan out their code before they start coding. Truth tables can help you as you plan out your conditional statements.

Create a truth table where we have conditionA and conditionB, both of which are booleans. What are the results for when we need both of them (&&) or either (||) and when A is not true and B is not true?

*4.  Truth Table Two*Create a new truth table with conditionA, conditionB, and conditionC. How does including conditionC complicate the truth table? Are other scenarios possible?

Mark step as complete

## Complete this Tutorial

Mark all steps complete
