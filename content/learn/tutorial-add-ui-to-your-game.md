[Image: image]

# Add UI to your game

Tutorial

Beginner

+10XP

60 mins

2

(22)

Unity Technologies

[Image: Add UI to your game]Summary

You've learned how to implement UI in 3D and 2D projects. In this tutorial, you'll apply those skills to add VFX to your game.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In this tutorial, you’ll add particle effects to your game, whether you’re working in 2D, 3D, or decided to try both. By the end, your project will have a fully functional UI, just like the example projects shown below.

### 3D game

If you are doing the 3D game, you'll add a play button that activates the game, as well as a title text element that disappears after you start the game.

[Image: UI with title and Play button]

### 2D game

If you’re working on a 2D game, you'll customize the user interface of your game to reflect your selected theme.

[Image: UI with Score display, Highscore display and Restart button]Mark step as complete

## 2. Requirements

Q&A (0)

Your game design document (GDD) is still evolving, so open it now and revisit how your interface supports the player experience.

Your UI style should reinforce the tone of your game. A horror game might use subdued colours, sharp edges, and minimal noise, while a bright, playful game might lean into bold icons and lively animations.

Now, think about the type of interface that makes sense for your project, whether you’re building in 2D, 3D, or both.

Ask yourself the following questions:

- What information does the player genuinely need at all times, and what can stay hidden until needed?
- Should your UI be minimal and unobtrusive, or stylised and full of character?
- How will your UI communicate success, danger, damage, pickups, or progress?
- Does your game benefit more from an in-world UI (diegetic) or a traditional on-screen UI (non-diegetic)?
- Should different game states — combat, exploration, pause — use different UI layouts or styles?
- Will animations, highlights, or subtle motion help guide the player’s attention?

Mark step as complete

## 3. Review possible assets

Q&A (0)

### 3D game

Take some time to review the assets provided in the [UCU Game Developer package](https://drive.google.com/uc?id=1Q2CX4Ju-5UgrsJKkc135vu0zImUPvtbP&export=download) that you downloaded and imported earlier.

If you haven’t downloaded and imported those assets, you can do that now.

In the asset pack, you can browse the **Textures**> **UI Sprites**folder, which contains a few sample UI images to get you started. Feel free to use these or create your own!

### 2D game

Take some time to find UI elements you can use in your own 2D game that align with your selected theme. Below are a few links to sites that contain both free and commercial 2D assets:

- [Free Asset store UI assets](https://assetstore.unity.com/search#q=User%20interface%20UI&nf-ec_price_filter=0...0)
- [Kenney 2D Assets](https://kenney.nl/assets/category:2D?sort=update)
- [OpenGameArt.org](https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=9&sort_by=count&sort_order=DESC)
- [CraftPix.net](https://craftpix.net/)
- [Top free game assets tagged 2D - itch.io](https://itch.io/game-assets/free/tag-2d)

Mark step as complete

## 4. Challenge guidance

Q&A (0)

The following sections will provide you with some guidance on each of the tasks in this challenge.

### Create a play button (3D)

- The play button should start the game when it is selected. Before the click event, the **Player** GameObject should be disabled and the **Enemy**GameObject shouldn’t start the chase.
- You can disable the **PlayerController** and **EnemyMovement** components and enable them again using the **Play** button’s **OnClick** event.

[Image: Play button OnClick events added]

### Create a title text (3D)

- Add a title screen to your game. Keep your chosen theme in mind when designing your titles.
- UI elements are the perfect candidates for implementing a theme in your project. In the examples, there is a distinct beach theme.
- The title screen should be disabled when the game starts.

**Tip**: This can be controlled with the **OnClick** event of the **Play** button.

- If you need a refresher on this, refer back to the [UI section](https://learn.unity.com/project/creative-core-ui) of the **Creative Core** pathway.

[Image: image]

### Customize your UI (2D)

Customize the interface elements in your 2D game to match your chosen theme by adjusting their fonts and colors. Consider adding extra images for a more refined and polished look.

Mark step as complete

## 5. More things to try

Q&A (0)

If you want to develop your skills further, explore new concepts, or improve your project, check out some of the optional activities below. Each activity is identified as being either Easy, Medium, or Difficult, so you know what level of difficulty to expect.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

#### Easy: Instructions

[Image: image]

Provide the user with a set of on-screen instructions to help them understand the game's purpose and mechanics effectively. To ensure a seamless gaming experience, ensure that the instructions either disappear when the game starts or position them in an unobtrusive manner that allows the player to engage with the gameplay.

#### Medium: Quit button

[Image: image][Image: Image showing the Quit option added to the main user interface]

To enhance user experience and provide a convenient option for closing the game, implement a quit button in the game's interface. To implement this functionality, you can use the Application.Quit(); method.

#### Hard: Settings menu

[Image: image]

Create a settings menu with options to adjust the enemy speed and music volume. Add a button on the title screen to access the settings menu and disable the title screen. Include a simple way for users to navigate back to the main title screen from the settings menu.

Mark step as complete

## 6. Next steps

Q&A (0)

In this tutorial, you created a user interface for your game to give the user more control and access to settings. In the next tutorial, you will animate your enemy.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
