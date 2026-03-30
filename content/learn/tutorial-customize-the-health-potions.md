[Image: image]

# Customize the health potions

Tutorial

Beginner

+10XP

25 mins

1

(106)

Unity Technologies

[Image: Customize the health potions]Summary

In this tutorial, you’ll apply your previous learning to:

- Create a custom health effect script
- Review the contents of a template script
- Write new instructions to increase the player’s health points (HP)
- Change the HP increase value to a public variable

When you’ve finished, you’ll have written a custom effect for the health potions in the Creator Kit game!

Languages available:

日本語English日本語한국어简体中文日本語

## 1. Customize the player experience

Q&A (0)

Now you’ve explored the basic concepts of writing C# scripts for Unity, you can begin to script some gameplay!

So far, the potions that spawn at game start can’t be used in the player’s inventory. This is because the potions have no specific **effects** associated with them.

In this tutorial, you’ll write an effect for those potions so they give the player character an additional **10 health points** when used.

[Image: image]ステップを完了としてマーク

## 2. Create and open a new script file

Q&A (0)

In this Creator Kit, there is a simple template script that you can use to write item effects.

To create and open a new script from the template:

**1.** In the top menu, go to **Beginner Code** > **Create Item Effect**.

[Image: image]

**2.**Enter a name without spaces (for example, “AddHealthEffect”) and select **Create**.

**3.** In the Project window, go to***Assets/Creator Kit - Beginner Code/Scripts/ItemEffects***.

[Image: image]

**4.**  Double-click the **AddHealthEffect.cs** script file to open it in your script editor.

The basic code will look like this:

```csharp
using System.Collections;
using System.Collections.Generic;
using CreatorKitCode;
using UnityEngine;

public class AddHealthEffect : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        return false;
    }
}
```

ステップを完了としてマーク

## 3. Review the contents of the template script

Q&A (0)

Let’s use everything you’ve learned so far to review the elements in this small script:

- Lines 1 to 4 begin with **using**; as before, you can ignore these.
- Line 6 is a **class declaration**, with the same name that you provided for the effect. The dialog window added this for you.

This new class is derived from another class called **UsableItem.UsageEffect**— this is a class written for this Creator Kit, which controls everything related to in-game items. It provides the common code required for these effects, and lets you focus on the specific features of your chosen effect.

#### The Use function

Line 8 is the declaration for a function called **Use**. Let’s break down the function:

- **Use** is a public bool type function. The bool variable type stores one of the two Boolean values: true or false.
- There’s an unfamiliar keyword in its declaration: **override**. As its name suggests, the keyword is used to override the same function in the base class (UsableItem.UsageEffect). This enables you to write generic code that will work for any Use function.

When an object is used, this function will be called by the game and will execute all the instructions in it. It returns a bool value because the game will check whether the object has been used; if it has been used, it will be removed from the inventory.

This functionality enables you to return false if the player is at full health, so the potion doesn't get used.

ステップを完了としてマーク

## 4.  Add the effect to your health potion

Q&A (0)

Now that the script exists in the Assets folder, it is compiled and part of your game code. This means that you can already assign it to the health potions in the game:

**1.**Return to Unity Editor.

**2.**In the Project window, go to ***Assets/Creator Kit - Beginner Code/Prefabs /ItemDatabase***. Select the **Potion Prefab**.

**3.**In the Inspector, use the **Add New Effect** drop-down menu to select the **AddHealthEffect**. This will appear in the Script field beneath.

[Image: image]

**4.** In the **Description** field, add a description of the effect (for example, “Gives 10 HP”).

This field appears because the base class has a description variable that it uses to fill the Inventory UI; since your effect is derived from this class, it also has the Description field.

**5.**  Press **Ctrl + S** (Windows) or **Cmd + S** (macOS) to save your changes.

ステップを完了としてマーク

## 5.  Write the effect function

Q&A (0)

Now you need to go back to the **AddHealthEffect** script and actually write the effect function!

Let’s review what the function needs to do and the tools available to you.

#### The Creator Kit StatSystem

This Creator Kit has a special system to control the character’s stats called **StatSystem**. A GameObject gains access to the Creator Kit **StatSystem** when the **CharacterData** script is attached to it as a component.

To change the character’s health, you can use the**ChangeHealth()** function. This function enables you to change the health of a **StatSystem**-equipped GameObject.

#### What does the function need to do?

To change the health of the player character when they use a health potion, the effect function needs to:

**1.** Access the player’s **CharacterData script.**

**2.**  Access the **Stats** **class**, by using the dot operator.

**3.**  Access the the **ChangeHealth() function** contained inside Stats, using a second dot operator.

**4.** Pass in an **int value** to declare how much health will be restored to the player character as the function’s parameter.

The function should also finish with “**return true;**” instead of “return false;” — this item will be consumed and disappear from the player’s inventory.

#### Challenge: Write the function

Have a go at writing the effect function using the dot operator, then continue to the next step to see the solution. If you don’t feel confident doing this independently, you can continue to the next step to review the solution.

ステップを完了としてマーク

## 6. Check your effect function

Q&A (0)

The effect function should look like this:

```csharp
public class AddHealthEffect : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        user.Stats.ChangeHealth(10);
        return true;
    }
}
```

ステップを完了としてマーク

## 7. Change the health value to a variable

Q&A (0)

Now try to change the health increase value to a **variable**. Use the following information to help you:

- The variable type should be **int**; it needs to store a whole number.
- Make the variable **public** —this means that it will be displayed as an Inspector field in Unity Editor.
- Declare the variable above the **Use**function declaration.

**TIP:**If you’re struggling, review the[introduction to variables](https://learn.unity.com/tutorial/write-your-own-instruction?projectId=5d48025dedbc2a0020e85be2) and use it as a reference to help you.

When you’ve had a go at making this substitution, continue to the next step to see the solution.

ステップを完了としてマーク

## 8. Check your script changes

Q&A (0)

Your adjusted script should look like this:

```csharp
public class AddHealthEffect : UsableItem.UsageEffect
{
    public int HealthAmount;

    public override bool Use(CharacterData user)
    {
        user.Stats.ChangeHealth(HealthAmount);
        return true;
    }
}
```

Press **Ctrl + S** (Windows) or **Cmd** **+ S** (macOS) to save your changes.

Now you can edit this variable from Unity Editor:**1.**  In the Inspector, you should see a **Health Amount**field for the exposed variable below the Description field:

[Image: image]

**2.**  Change the value, then press **Ctrl + S**(Windows) or **Cmd + S** (macOS) to save your changes.

**3.**  Press **Play** to enter Play Mode and test your changes to the game.

That’s it — you’ve finished!

ステップを完了としてマーク

## 9. Tutorial summary

Q&A (0)

In this tutorial, you applied your learning from this project to:

- Create a custom health effect script
- Write new instructions to increase the player’s health points (HP)
- Make the HP increase value a variable that can be changed in Unity Editor

Congratulations — you’ve written your first C# code for Unity and completed the main Creator Kit: Beginner Code tutorials!

[Image: image]

#### Staying on at Rancho Rodadora?

You’ve completed the main tutorials in this learning project, but there's still plenty more to explore.

The final tutorial is a reference guide for customizing the game using script templates we’ve created to go with this Creator Kit. You can use these to create a range of different items and effects.

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

#### Ready for more?

Creator Kit: Beginner Code is just the start of your journey with Unity and C# Scripting!

There are two different options for your next learning adventure:

- Create a 3D stealth game with [John Lemon’s Haunted Jaunt: 3D Beginner](https://learn.unity.com/project/john-lemon-s-haunted-jaunt-3d-beginner)
- Build a 2D RPG from scratch with [Ruby’s Adventure: 2D Beginner](https://learn.unity.com/project/ruby-s-2d-rpg)

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
