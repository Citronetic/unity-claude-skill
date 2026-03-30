[Image: image]

# Create a Level Endpoint

Tutorial

Beginner

+10XP

15 mins

1

(184)

Unity Technologies

[Image: Create a Level Endpoint]Summary

You’ve now created a playable level of the game with a custom design, a range of germ targets and a choice of weapons! In this tutorial, you'll create an endpoint in a given room which triggers the end of the level.

This screen will show the player:

- How long they took to complete the level
- How many germs they cured with medicine
- Their score for the level

Languages available:

日本語English日本語한국어简体中文日本語

## 1. Create a LevelEnd GameObject

Q&A (0)

First, create a LevelEnd GameObject:

**1.** Right click in an empty space in the **Hierarchy window** and select **Create Empty**.

[Image: image]

**2.**With the GameObject selected, go to the **Inspector window.**Rename it to “**LevelEnd**” using the text field in the header.

[Image: image]

**3.**Next, you need to make sure that LevelEnd is in the middle of the level. Click the small gear icon (or series of 3 vertical dots) at the top right of the **Transform** component. Select **Reset**.

[Image: image]

**4.**Move your cursor over the Scene view and press **F** on your keyboard to focus on the LevelEnd GameObject.

[Image: image]

**5.**In the **Inspector**, click the **Add Component**button. Search for “**Box Collider**”, and add this component to LevelEnd.

[Image: image]

**6.**A green wireframe box will appear in Scene view indicating that LevelEnd has a Collider.

[Image: image]

Use the **Transform Tool**to place the object where you would like the level to end. The end of a room or corridor is a good place to do this.

**7.**If you need to, you can resize the Collider using the **Size** parameter in the Box Collider component. Hover your mouse over one axis at a time, then click and drag right or left to increase or decrease the Collider size.

[Image: image]

In the example below, the LevelEnd GameObject has been moved to the end of a room. The Collider has been resized to fill most of the available space.

[Image: image]

**8.**Save your changes.

ステップを完了としてマーク

## 2. Add a Trigger

Q&A (0)

Now you need to add a trigger. Triggers are a basic building block of games, and can be used to do many different things. For example, triggers can start a cutscene when the player reaches a certain point, play sounds or load new game level. An important part of level design is placing Colliders that will trigger gameplay events when player reaches a specific location.

So that the player can finish your level, you need to set the LevelEnd Box Collider as a trigger for the final screen of your game:

**1.**In the Inspector, go to the**Box Collider** component**.**Enable the **Is Trigger**checkbox.

[Image: image]

**2.**Click the **Add Component**button. Search for “**End Checkpoint**”, and add this component to LevelEnd.

[Image: image]

**3.**Save your changes.

That’s it! Now press **Play** and test the trigger, by moving into the Box Collider you placed in the level. When you enter that space, the game will end and show you the result screen.

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
