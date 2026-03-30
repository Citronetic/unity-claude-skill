[Image: image]

# CRC Cards

Exercise

Beginner

+60XP

35 mins

63

Unity Technologies

[Image: CRC Cards]Summary

A useful tool that will help you design your game in an object oriented system are CRC Cards.

Languages available:

EnglishEnglishEnglish

## 1. Managing Scope

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

Mark step as complete

## 2. What are CRC Cards?

Q&A (0)[Image: image]

CRC cards are literal, physical 3”x5” (or 8cm x 13cm) index cards. Each one shows three things:

1. A Class Name
2. Its Responsibilities
3. Its Collaborators

On each card, write the **name**of a C# class you plan to create for your game. Under that, describe what the class **does**. Be reasonably specific. If you can’t fit all the responsibilities onto the card, your class may be trying to do too much and you should consider splitting it up.

Next you’ll think about what **other classes**this one might need to talk to – its collaborators. Write the names of those classes at the bottom of the card. (If there are two classes that need to talk to each other, write it down on both cards.)

When you’ve created your cards, group them so that collaborators are near each other. Imagine a sequence in your game, e.g. the player defeats the final enemy in a wave or picks up a power-up. Trace through all the things your code needs to do in response and make sure that each step is represented on your cards. Try this with another sequence or two.

You will be tempted to just do this in a Google Doc, or by drawing a grid in a notebook, instead of digging up index cards. But one of the ways this exercise helps you is that it lets you physically group cards together and rearrange them as you think about them working together. This spatial organization allows you to create a mental picture of your code that will help you keep things clear and separate in your mind for the rest of the project.

**For Beginners:**

If you’ve never tried to plan code before, you might feel intimidated by this assignment. The most important thing about planning your code is *just that you do it*. You’ll get better at it as you gain experience.

To get started, look at your concept document and the drawing you made of gameplay. Look at each item on the screen and think about what it needs to do.

For example, the tower in a tower-defense game needs to track enemies that are nearby and fire at them. The player character in a platformer needs to run and jump. They might also need to keep track of health, or pick up and fire weapons. That’s starting to sound complicated, so you might split the responsibilities into PlayerMovement, PlayerHealth, and PlayerWeapons.

If there’s more than one of something on the screen, think about how they will get there – will you hand-place them or spawn them from code? Either way, when you have more than one of something think about whether you need another class to manage them.

Finally, think about how things change as the player plays the game – for example, when the player eats a power pellet, or when all the enemies have been cleared from a level. What class will keep track of this information? What class(es) will respond to the change?

Mark step as complete

## 3. Assignment: CRC Cards

Q&A (0)

In this assignment you’re going to use a tool called CRC cards to think through how you will set up your code. This process usually doesn’t take more than half an hour for a small game.

Thinking through how you set up your code has two powerful benefits:

- A little planning is guaranteed to save you a lot of debugging.
- As you think through how to set up your code you’ll get a sense of how much work you need to do, so you can check whether your scope is realistic.

Here are the steps:

1. Make the cards using the instructions above.
2. Take pictures of your cards and upload them to the submission gallery and provide some description.
3. After you submit, we give feedback, via comments in the Gallery, to at least 2 fellow course participants.

#### Please login to submit

Login

## Complete this Tutorial

Mark all steps complete

Submission Gallery

[[Image: Game banaa]

Game banaa

😊 Missing description! 🤔

*Let's fill the gaps*:
- *Game name?*
- *Tractor type? (e.g., farming, construction)*
- *Core gameplay? (e.g., plowing, racing, collecting items)*

*Example*:
- Game: "Tractor TodiHai"
- Tractor: Farming tractor with plow
- Play: Plow fields, collect crops, upgrade tractor 🚜

Tell me, हम details जोड़ेंगे! 😊

Ddivyathakur75359235591690](https://learn.unity.com/submission/6948a7cdedbc2a1a6f3368b0)[[Image: CRC card diagram ]

CRC card diagram

initial diagram

RROOCKY3510](https://learn.unity.com/submission/68c97bacedbc2a0503bcbaa4)[[Image: LV 1 ]

LV 1

player, heart rate (representing HP), interactive objects (maybe I should split this class for three others?)

Rraulsanchezmicheas5721](https://learn.unity.com/submission/677812d4edbc2a4ed9e48eef)[[Image: Tarjetas sobre El equilibrista]

Tarjetas sobre El equilibrista

Made some cards with the classes that at this point come to mind

ADAgustin Dominguez4300](https://learn.unity.com/submission/67203627edbc2a1150908254)[[Image: CRC cards]

CRC cards

Classes and relations based on the playable prototype.

Uunity_ABBB8FB9151B27AEEBC3162230](https://learn.unity.com/submission/66fd14abedbc2a05697b8a5d)[[Image: i wanna de@d i'm bad in all help me ]

i wanna de@d i'm bad in all help me

player, heart rate (representing HP), interactive objects (maybe I should split this class for three others?)

Dd4351535-31e5-47aa-868c-f3750366e3573600](https://learn.unity.com/submission/66e1c0c8edbc2a002419004c)Load More
