[Image: image]

# Customize your game

Tutorial

Beginner

+10XP

0 mins

1

(44)

Unity Technologies

[Image: Customize your game]Summary

This tutorial is a reference guide for further customization of the Creator Kit: Beginner Code game.

It provides guidance to help you use script templates to create:

- Usable items with Usage Effects (like the health potion in the final tutorial)
- Equipment items with Equipped Effects
- Weapons with Weapon Attack Effects

Languages available:

日本語English日本語한국어简体中文日本語

## 1. Customizing the game

Q&A (0)

This tutorial is a reference guide for further customization of the Creator Kit: Beginner Code game.

It provides guidance on script templates which will help you create:

- Usable Items with Usage Effects (like the health potion in the final tutorial)
- Equipment Items with Equip Effects
- Weapons with Weapon Attack Effects

#### Guide structure

This guide is a tool to help you consolidate your understanding  and experiment with the game, rather than a step-by-step guide. It might also be a useful environment to apply what you have learnt in other Unity tutorials!

This guide has the following structure:

**1.** How to create an item type in Unity Editor

**2.** How to create the custom effect script for that item, and basic guidance on using it

**3.**  How to apply the effect to the item

#### Join the community

You’ve finished the Creator Kit: Beginner Code tutorial, but you’re not alone on your learning journey. If you have a question, or want to find out what other learners are doing with the game, why not join the [official thread in the Unity forum](https://forum.unity.com/threads/creator-kit-beginner-code-beta.724871/)?

ステップを完了としてマーク

## 2. Create a Usable Item

Q&A (0)

#### What is a Usable Item?

A Usable Item is an item that the player can **use** by double-clicking on it in their inventory (for example, a health potion).

#### How do I create a Usable Item in Unity Editor?

To create a Usable Item in the Editor:

**1.** In the Project window, go to ***Assets/Creator Kit - Beginner Code/Prefabs/InGameItem***.

**2.**  Right-click in the Project window and select **Create > Beginner Code > Usable Item** from the contextual menu. Alternatively, you can access this menu from **Assets** in the main menu.

[Image: image]

This creates a new Asset for the Usable Item.

**3.** In the Project window, right-click the new Usable Item and select **Rename**. Give your item a memorable name.

**4.**Make sure that your Usable Item is still selected. In the Inspector, you will see the following fields (exposed variables):

- **Item Sprite:** The Sprite that will be used in the inventory for the item. It will also be used to display the object in the world if no World Object Prefab is set (see below).
- **Item Name:** The name of the item that will appear above it in the game, and in the tooltip in the player’s inventory.
- **Description:** The description of the item that will be displayed in the tooltip in the player’s inventory.
- **World Object Prefab:** The 3D GameObject that will be created to show the Usable Item in the game world when it is spawned. If this is left empty (null), the item Sprite will be used instead.
- **Add New Effect:** A drop-down menu listing the **Usage Effects** you have written. When you write a new effect, it will appear here. Select a Usage Effect to add it to your Usable Item.

[Image: image]

In the next step, you’ll learn how to write a Usage Effect script and apply it to your Usable Item.

ステップを完了としてマーク

## 3. Write a Usage Effect script

Q&A (0)

#### What is a Usage Effect script?

A Usage Effect script specifies what happens when a Usable Item is double-clicked in the player’s inventory. It is added to a Usable Item Asset in the Editor.

#### How do I create a new Usage Effect script?

To create a new Usage Effect script from the Creator Kit: Beginner Code template:

**1.**In the top menu, go to **Beginner Code > Create Item Effect**.

[Image: image]

**2.**In the NameWindow dialog box that opens, give the Usage Effect script a name and select **Create**.

This creates the script in ***Assets/Scripts/ItemEffect*** and selects it in the Editor.

**3.** In the Project window, double-click the script to open it in your code editor. We’ve provided a template script to help you write a Usage Effect for items:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SceneKitCode;

public class EFFECTNAME : UsableItem.UsageEffect
{
    public override bool Use(CharacterData user)
    {
        return false;
    }
}
```

**EFFECTNAME** is a placeholder for your Usage Effect script name.

#### How do I customize the Usage Effect?

To customize the Usage Effect, you need to add instructions to the **Use**function:

```csharp
public override bool Use(CharacterData user)
    {
        return false;
    }
```

The **user** parameter contains the **CharacterData** of the character that used the item. In this game, there is only one character which can use items (the moose). You can use this parameter to access stats, inventory and equipment items to modify them.

#### How do I find out more about the custom CharacterData class?

To find out more about the**CharacterData** class:

**1.**  In Unity Editor, go to **Beginner Code > Open Documentation**in the main menu.

**2.**  In the top menu bar of the local documentation guide, select **API Documentation**.

**3.**  In the filter bar, search for “**CharacterData**”.

**4.**  Select the link in the **left-hand menu**.

#### How do I set the return value for the Usable Item?

The **Use** function returns a Boolean value (true or false). Set it to:

- **True** if the object is used and removed from the player’s inventory (if it's a stack of objects, the count will be reduced by one).
- **False** if the object can’t be used (for example, you can test if health is already at maximum before adding health, and return false if it is so that a health potion won’t be wasted).

ステップを完了としてマーク

## 4. Apply the Usage Effect script to the Usable Item

Q&A (0)

When you’ve modified your Usage Effect script, you can add it to the Usable Item in the Editor:

**1.**  In the Project window, select the Usable Item you have created (filepath: *Assets/Creator Kit - Beginner Code/Prefabs/InGameItem*).

**2.**  In the Inspector, find the **Add New Effect**field. Select your Usage Effect from the drop-down menu.

**3.** Add a **Description** for the Usage Effect.

**4.**  Press **Ctrl + S**(Windows) or **Cmd + S** (macOS) to save your changes.

**5.** Test your Usable Item in Play Mode.

**TIP:** If you want to remove the Usage Effect, select the minus button (**-**) to the right of the **Script** field in the Inspector.

ステップを完了としてマーク

## 5. Create an Equipment Item

Q&A (0)

#### What is an Equipment Item?

An **Equipment Item** is an item that gives the player character particular attributes when equipped. (Weapons are a special kind of Equipment Item with additional functionality; this is explored separately later in this guide.)

You can give an Equipment Item:

- A minimum stat requirement, which stops it from being equipped until the player achieves the minimum (for example, an item which can only be equipped when the player has over 5 HP).
- An Equipped Effect, which adds an effect to the player character whilst the item is equipped (for example, raising their stats).

#### How do I create an Equipment Item in Unity Editor?

To create an Equipment Item in the Editor:

**1.** In the Project window, go to ***Assets/Creator Kit - Beginner Code/Prefabs/InGameItem***.

**2.**  Right-click in the Project window and select **Create > Beginner Code > Equipment Item** from the contextual menu. Alternatively, you can access this menu from **Assets** in the top menu.

[Image: image]

This creates a new Asset for the Equipment Item.

**3.** In the Project window, right-click the new Equipment Item and select **Rename**. Give your item a memorable name.

**4.**Make sure that your Equipment Item is still selected. In the Inspector, you will see the following fields (exposed variables):

- **Item Sprite:** The Sprite that will be used in the inventory for the item. It will also be used to display the object in the world if no World Object Prefab is set (see below).
- **Item Name:** The name of the item that will appear above it in the game, and in the tooltip in the player’s inventory.
- **Description:** The description of the item that will be displayed in the tooltip in the player’s inventory.
- **World Object Prefab:** The 3D GameObject that will be created to show the Usable Item in the game world when it is spawned. If this is left empty (null), the item Sprite will be used instead.
- **Slot:**The Equipment Slot on which the Equipment Item can be worn (for example, Head).
- **Minimum Stats:**The minimum **Strength**, **Agility**, and **Defense** status values required to equip the item. If the player doesn’t meet the minimum values for these stats, double-clicking the item in their inventory won’t do anything.
- **Add New Effect:** A drop-down menu listing the **Equipped Effects** you have written. When you write a new effect, it will appear here. Select an Equipped Effect to add it to your Equipment Item.

In the next step, you’ll learn how to write an Equipped Effect script and apply it to your Equipment Item.

ステップを完了としてマーク

## 6. Write an Equipped Effect script

Q&A (0)

#### What is an Equipped Effect script?

An****Equipped Effect script****enables a custom effect when the player equips an item. It is added to an Equipment Item or Weapon in the Editor.

#### How do I create a new Equipped Effect script?

To create a new Equipped Effect script from the Creator Kit: Beginner Code template:

**1.**In the top menu, go to **Beginner Code > Create Equipped Effect**.

[Image: image]

**2.**In the NameWindow dialog box that opens, give the Equipped Effect script a name and select **Ok**. This creates the script in ***Assets/Scripts/EquippedEffect*** and selects it in the Editor.

**3.** In the Project window, double-click the script to open it in your code editor. We’ve provided a template script to help you write an Equipped Effect:

```csharp
public class EFFECTNAME : EquipmentItem.EquippedEffect
{
     public override void Equipped(CharacterData user)
     {

     }

     public override void Removed(CharacterData user)
     {

     }
}
```

**EFFECTNAME** is a placeholder for your Equipped Effect script name.

#### How do I customize the Equipped Effect?

There are two functions****you can customize in the Equipped Effect script:

**1.  void Equipped(CharacterData user)**

This function is called when the player (user) **equips the item**. Use the function to add the effect — for example, to give the character a +1 Strength stat modifier.

**TIP:** You can use a private variable to store your chosen modifier.

**2.  void Removed(CharacterData user)**

This function is called when the player (user) **removes the item**. Use this function to remove the effect on the player character.

ステップを完了としてマーク

## 7. Apply the Equipped Effect script to an Equipment Item

Q&A (0)

When you’ve modified your Equipped Effect script, you can add it to the Equipment Item in the Editor:

**1.**  In the Project window, select the Equipment Item you have created (go to ***Assets/Creator Kit - Beginner Code/Prefabs/InGameItem***).

**2.**  In the Inspector, find the **Add new Effect**field. Select your Equipped Effect from the drop-down menu.

**3.** Add a **Description** for the Equipped Effect.

**4.**  Press **Ctrl + S**(Windows) or **Cmd + S** (macOS) to save your changes.

**5.** Test your Equipment Item in Play Mode.

**TIP:** If you want to remove the Equipped Effect, select the minus button (**-**) to the right of the **Script** field in the Inspector.

ステップを完了としてマーク

## 8.  Create a Weapon

Q&A (0)

#### What is a Weapon?

A **Weapon** is a special Equipment Item that you can equip on the character Weapon Slot.

In addition to the features of an ordinary Equipment Item, you can also give a Weapon:

- Stats relating to attack actions: **Reach**, **Speed**, **Minimum Damage** and **Maximum Damage**.
- A **Weapon Attack Effect**, which enables you to customize what happens when the weapon damages an enemy character.

#### How do I create a Weapon in Unity Editor?

To create a Weapon in the Editor:

**1.** In the Project window, go to ***Assets/Creator Kit - Beginner Code/Prefabs/InGameItem***.

**2.**  Right-click in the Project window and select **Create > Beginner Code > Weapon** from the contextual menu. Alternatively, you can access this menu from **Assets** in the top menu.

[Image: image]

This creates a new Asset for the Weapon.

**3.** In the Project window, right-click the new Weapon and select **Rename**. Give it a memorable name.

**4.**Make sure that the Weapon is still selected. In the Inspector, you will see the following fields (exposed variables) in addition to those available for all Equipped Items.

- **Weapon Stats:**

- **Speed:** How fast the Weapon attacks. This is the cooldown time between two attacks — the lower the value, the faster the next attack. If the value is 0, the next attack will be performed as soon as the first animation is finished.
- **Minimum Damage:** The minimum amount of damage the Weapon can do, before adding any character modifiers. **Damage Done** is a random value between the Minimum and Maximum Damage.
- **Maximum Damage:** The maximum amount of damage the Weapon can do, before adding any character modifiers. **Damage Done** is a random value between the Minimum and Maximum Damage.
- **Range:**The distance at which the Weapon can damage an enemy character. If the target character is past the Range when the attack should connect, it won't do any damage.
- **Add New Weapon Attack Effect:**A drop-down menu listing the **Weapon Attack Effects** you have written. When you write a new effect, it will appear here. Select a Weapon Attack Effect to add it to your Weapon.

In the next step, you’ll learn how to write a Weapon Attack Effect script and apply it to your Weapon.

ステップを完了としてマーク

## 9. Write a Weapon Attack Effect script

Q&A (0)

#### What is a Weapon Attack Effect script?

A **Weapon Attack Effect** script enables a customized effect when the Weapon hits a target. It is added to a Weapon.

#### How do I create a new Weapon Attack Effect script?

To create a new Weapon Attack Effect script from the Creator Kit: Beginner Code template:

**1.**In the top menu, go to **Beginner Code > Create Weapon Attack Effect**.

[Image: image]

**2.**In the NameWindow dialog box that opens, give the Weapon Effect script a name and select **Create**. This creates the script in ***Assets/Scripts/WeaponEffect*** and selects it in the Editor.

**3.** In the Project window, double-click the script to open it in your code editor. We’ve provided a template script to help you write a Weapon Attack Effect for items:

```csharp
public class EFFECTNAME : Weapon.WeaponAttackEffect
{
    public override void OnAttack(CharacterData target, CharacterData user, ref Weapon.AttackData attackData)
    {

    }

    public override void OnPostAttack(CharacterData target, CharacterData user, Weapon.AttackData data)
    {

    }
}
```

**EFFECTNAME** is a placeholder for your Weapon Attack Effect script name.

#### How do I customize the Weapon Attack Effect?

There are **two functions**you can customize in the Weapon Attack Effect script:

**1.  OnAttack(CharacterData target, CharacterData user, ref Weapon.AttackData attackData)**

This function is for instructions which control what happens when the Weapon hits an enemy.  You can add damage or apply elemental effects to the target using the **AddDamage** function in **attackData**.

**2.  void OnPostAttack(CharacterData target, CharacterData user, Weapon.AttackData data)**

This function is called after all the OnAttack function instructions are executed. This enables you to customize things that happen in reaction to the **total amount** **of damage** the target receives after all OnAttack effects are applied.

For example, you could use this function to convert a percentage of damage to the enemy back into health for the player character.

#### How do I find out more about the custom Weapon.AttackData class?

The custom **Weapon.AttackData class** enables you to query the amount of damage an enemy has received. To find out more about the **Weapon.AttackData** class:

**1.**  In Unity Editor, go to **Beginner Code > Open Documentation**in the top menu.

**2.**  In the top menu bar, select **API Documentation**.

**3.**  In the filter bar, search for “**Weapon.AttackData”.**

**4.**  Select the link in the left-hand menu.

ステップを完了としてマーク

## 10. Apply the Weapon Attack Effect script to a Weapon

Q&A (0)

When you’ve modified your Weapon Attack Effect script, you can add it to the Weapon in the Editor:

**1.**  In the Project window, select the Weapon you have created (go to ***Assets/Creator Kit - Beginner Code/Prefabs/InGameItem***).

**2.**  In the Inspector, find the **Add new Weapon Attack Effect**field. Select your Weapon Attack Effect from the drop-down menu.

**3.** Add a **Description** for the Weapon Attack Effect.

**4.**  Press **Ctrl + S**(Windows) or **Cmd + S** (macOS) to save your changes.

**5.** Test your Equipment Item in Play Mode.

**TIP:** If you want to remove the Weapon Attack Effect, select the minus button (**-**) to the right of the Script field in the Inspector.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

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

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
