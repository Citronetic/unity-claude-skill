[Image: image]

# Add an enemy character

Tutorial

Beginner

+0XP

20 mins

3

(51)

Unity Technologies

[Image: Add an enemy character]Summary

In this tutorial, you’ll build on your previous work to create moving enemies for the player character.

By the end of this tutorial, you’ll have written a new script to control enemy movement and behavior using concepts that you’ve already learned in this course.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In the **Health System** unit, you created static hazards in the form of damage zones. Now you’ll build on that work to create dynamic hazards for the player to deal with: enemies.

Whatever asset pack you’re working with, the enemies for your **2D Beginner** game are all malfunctioning machinery – a robot, a boiler, or a vending machine. You’ll set up these enemy characters to move around and attack the player character until the player fixes them using a projectile that you’ll implement later in this unit.

[Image: The three enemy character sprites of each theme next to each other.]

By the end of this tutorial, you’ll have created enemies with a new script that controls their movement and behavior using concepts that you’ve already learned in this course.

**Note**: For the purposes of this tutorial, we chose to use the **Ruby’s Adventure** asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Create an enemy GameObject

Q&A (0)

**You’ve encountered a challenge!**

Throughout this course, you’ll find a few challenges where you’re encouraged to try writing the code on your own. But don’t worry – if you want to make sure you did it correctly, you can review the script later in the step.

You’re going to repeat the process you’ve previously followed when you set up a **DamageZone** GameObject, but this time for an enemy character. Try to set up the GameObject using the guidance below but without following the detailed instructions at the bottom of this step.

Use the following guidance to help you as you create your enemy:

1. You can find an **Enemy** sprite in the **Characters** folder for your chosen asset pack.
2. Give the **Enemy** GameObject the components and configuration that it needs to move and collide with the player character and environment.
3. Set the pivot for the **Enemy** GameObject as you did for the player character.
4. Create a new script called “EnemyController” and attach it to the **Enemy** GameObject.

You might want to add more than one enemy to the game, so remember to turn the **Enemy**GameObject into a prefab.

### Check your Enemy GameObject configuration

Review these high-level instructions to confirm that you’ve set up the enemy correctly:

**1.** Navigate to **Assets** > **_2DAdventureGame**> **Art** > **[Your Chosen Project]**>**Characters**and select the**Enemy**sprite.

**2.** In the **Inspector** window open the **Sprite Editor**, by clicking the **Open Sprite Editor** button. Then set the sprite’s **Pivot** to **Custom**, and set the **Custom Pivot** to the following values:

- **X** = **0.5**
- **Y** = **0**

Remember to select **Apply** before closing the **Sprite Editor** window.

**3.** Create a new GameObject using the **Enemy**sprite.

**4.** In the **Inspector** window, find the **Sprite Renderer** component, set the **Sprite Sort Point** property to **Pivot**.

**5.** Select the **Add Component**button and add a **Box Collider 2D** component and enable the **Is Trigger** property.

**6.** Add a **Rigidbody 2D** component. Set the **Gravity Scale**property****to**0**, then use the foldout (triangle) to expand the **Constraints** section and enable the **Freeze Rotation Z**property.

**7.** Create a new script called “EnemyController” and attach it to the **Enemy**GameObject.

**8.** Turn the **Enemy**GameObject into a prefab.

Mark step as complete

## 3. Challenge: Write a script to move the enemy

Q&A (0)

**You’ve encountered a challenge!**

Throughout this course, you’ll find a few challenges where you’re encouraged to try writing the code on your own. But don’t worry – if you want to make sure you did it correctly, you can review the script later in the step.

For this project, you want the enemy character to move in a predictable patrol pattern, rather than in more unexpected ways. Before we guide you through writing instructions for the patrol, take some time to apply what you’ve learned already to make the **Enemy** GameObject start to move horizontally when the game launches.

You’ll need to do the following:

1. Inside the new **EnemyController**script, declare a public variable to control the enemy speed.
2. Create a variable of type **Rigidbody2D** and then use **GetComponent**to store a reference to the **Rigidbody2D** component of the **Enemy** GameObject.
3. The enemy will move along a single axis. To calculate its movement, update its position by adding the speed value to its current position and multiply it by time. For now, make the enemy move only along the **X** axis.
4. Apply the updated position information in the position variable to the actual **Rigidbody 2D** component on the **Enemy** GameObject using [Rigidbody2D.MovePosition](https://docs.unity3d.com/ScriptReference/Rigidbody2D.MovePosition.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774934979893), as you did when you fixed the player character’s movement jittering.

**Note**: Remember to write your movement code inside the correct function for physics calculations.

### Review your movement code

To check through the work that you have done in the script, use the following guidance:

- You don’t need to add any new **using** statements at the top of the script. The enemy character’s movement isn’t going to be controlled by player input, so the script doesn’t need to use the input system library.
- At the beginning of the **EnemyController**class, above the **Start** function, you need two new variables:
- A public **float** variable to control the enemy **speed**.
- A **Rigidbody2D** variable to contain the reference to the **Enemy** GameObject’s **Rigidbody 2D** component.

```csharp
public float speed;
Rigidbody2D rigidbody2d;
```

- In the **Start** function, you need to get the reference to the **Rigidbody2D** component for the **Enemy** GameObject and store it in the variable that you created, as you’ve done previously in the **PlayerController** script:

```csharp
void Start()
{
     	rigidbody2d = GetComponent<Rigidbody2D>();
}
```

Physics calculations need to be made in the **FixedUpdate** function rather than the **Update** function. You need three instructions:

```csharp
void FixedUpdate()
{
     	Vector2 position = rigidbody2d.position;
     	position.x = position.x + speed * Time.deltaTime;
     	rigidbody2d.MovePosition(position);
}
```

### Test the enemy’s movement

Back in the Unity Editor, set a value for the **Enemy**GameObject’s exposed **Speed**property and then check the **Enemy**GameObject’s movement in **Play** mode.

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

The enemy moves all the way to the right and doesn't stop, which is not an interesting behavior – you’ll improve this in the next step.

When you’re finished, return to your IDE.

Mark step as complete

## 4.  Add vertical movement for the enemy

Q&A (0)

Although the enemy characters aren’t going to have sophisticated movement patterns, it would be more engaging for players if the enemies’ patrol movement could be horizontal or vertical.

To adjust your script to add vertical movement, follow these instructions:

**1.** At the top of the **EnemyController** class, declare a new public bool variable called “vertical”:

```csharp
public bool vertical;
```

Remember, **bool**type variables contain Boolean values, which can be true or false. You can use this variable to determine whether the enemy will move along the x-axis (if vertical is false), or the y-axis (if vertical is true).

Next you’ll need to update the movement code you’ve already written.

**2.** At the top of the **FixedUpdate** function, just beneath the **Vector2**variable declaration, add the following two conditional statements:

```csharp
if ()
{

}
else
{

}
```

Here’s an explanation of this code:

- You’ve encountered **if** statements before; when the conditions in the parentheses are met, Unity will execute the code inside the statement.
- The **else statement** addition contains code that will be executed when the condition for the **if** statement is not met.

Before you continue to the next instruction, try to apply what you’ve learned so far and complete the **if** and **else** statements to define the enemy’s position in each case.

**3.** Check your statements against the code below:

```csharp
if (vertical)
{
 	position.y = position.y + speed * Time.deltaTime;
}
else
{
      position.x = position.x + speed * Time.deltaTime;
}
```

Here’s an explanation of this code:

- The **if**statement takes your variable **vertical** as its condition; when that Boolean is **true**, y-axis movement is applied to the enemy.
- The **else** statement does not take its own condition because it is linked to the if statement’s condition. When the **vertical variable** is **false**, x-axis movement is applied to the enemy.

**C**heck that the **FixedUpdate** function contains the following code:

```csharp
void FixedUpdate()
{
    Vector2 position = rigidbody2d.position;

    if (vertical)
    {
        position.y = position.y + speed * Time.deltaTime;
    }
    else
    {
        position.x = position.x + speed * Time.deltaTime;
    }

    rigidbody2d.MovePosition(position);
}
```

**4.** Save your changes.

Mark step as complete

## 5. Challenge: Add a timer for patrol movement

Q&A (0)

**You’ve encountered a challenge!**

Throughout this course, you’ll find a few challenges where you’re encouraged to try writing the code on your own. But don’t worry – if you want to make sure you did it correctly, you can review the script later in the step.

You’ve added the functionality to make the enemy move side to side, but it needs to have a condition so that once it reaches the edge of the gameplay area, it can't keep going in the same direction. There are different ways you can achieve this. In this case, you’ll use a timer for the movement, just as you did when you implemented a cooldown period after the player character takes damage in [**Implement a cooldown after the character takes damage**.](https://learn.unity.com/course/2D-adventure-robot-repair/unit/health-system/tutorial/add-damage-zones-to-decrease-health-static-hazards?version=6.3#af733ce276f1)

Try to apply what you’ve learned so far to create a timer that moves the enemy in one direction until the timer count reaches zero, and then reverses the direction and resets the timer.

Use the following guidance to help you as you script the timer:

1. You’ll need to create variables to store the timer for movement before the direction is reversed, the current value of the timer, and the enemy’s current direction on the axis for movement.
2. You’ll need to set an initial value to the timer and then update it every frame.
3. Use a conditional statement to change the enemy’s direction.

### Review the patrol movement code in the EnemyController script

To check through the work that you have done in on the script, use the following guidance:

**1.** At the beginning of the**enemy controller** class, you need one new public variable so you can adjust the timer for movement in the **Inspector**window:

```csharp
public float changeTime = 3.0f;
```

**changeTime** is a **float** variable, which is a good fit for countdowns.

**2.**You also need two private variables:

```csharp
float timer;
int direction = 1;
```

Here’s an explanation of this code:

- The **float** variable **timer** will store the current value of the movement countdown; the initial **changeTime** value and then each subsequent negative increment before the movement is reversed.
- The **direction**variable stores the enemy’s direction of movement along your chosen axis – a positive value (**1**) forward movement on the axis or a negative value (**-1**) for backward movement.
- The movement**direction** will only ever be set to **1** or **-1**, so the **integer** variable type is a good fit for this situation.

**3.** In the **Start** function, you need an instruction that sets the **timer** variable’s initial value to **changeTime** (the full countdown value before the movement direction changes):

```csharp
timer = changeTime;
```

**4.** At the **Update** function, you need an instruction that subtracts **Time.deltaTime** from the movement timer:

```csharp
timer -= Time.deltaTime;
```

You previously used the subtract operator (**-=**) in exactly the same way for the damage cooldown timer.

**5.** Still in the **Update** function, you need to add an **if** statement to control what happens when the timer count reaches zero:

```csharp
if (timer < 0)
{
 	direction = -direction;
   	timer = changeTime;
}
```

Here’s an explanation of this code:

- This **if** statement is executed if the timer value is less than (**<**) zero,
- The **direction** variable is set to minus the current value, reversing the current direction (as two negatives cancel each other to make the value positive).
- The **timer** is reset to the full **changeTime** value.

Finally, in the **Fixed Update** function, you need to revise the two instructions that apply movement to the enemy to multiply the speed by the correct direction on the movement axis:

```csharp
if (vertical)
{
      	position.y = position.y + speed * direction * Time.deltaTime;
}
else
{
      	position.x = position.x + speed * direction * Time.deltaTime;
}
```

### Test the enemy’s update patrol movement

Set initial values in the **Enemy Controller (Script)** component and then test your changes in Play mode. The following setting configuration is a good starting point for testing:

- **Speed** to **1**
- **Vertical**to**True**
- **Change Time** to **3**

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

If the enemy spends too long outside of the camera bounds, you can adjust its initial position or change the patrol timer and speed.

Mark step as complete

## 6. Add damage for enemy collisions

Q&A (0)

You’ve created a moving enemy; now it’s time to define the damage it will inflict when it collides with the player character. Although this code will be similar to what you’ve previously written for the damage zones in [**Challenge: Create a functioning damage zone**,](https://learn.unity.com/course/2D-adventure-robot-repair/unit/health-system/tutorial/add-damage-zones-to-decrease-health-static-hazards?version=6.3#45cb9477a3db) this time you’re going to use a different Unity function: [**OnTriggerEnter2D**](https://docs.unity3d.com/ScriptReference/Collider.OnTriggerEnter.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774934979893).

To set up damage on collision, follow these instructions:

**1.** Return to the **EnemyController** script in your IDE.

**2.** Below the **FixedUpdate** function, add a new **OnTriggerEnter2D** function:

```csharp
void OnTriggerEnter2D(Collider2D other)
{

}
```

Here’s an explanation of this code:

- The type of the parameter (**other**) for this function is **Collider2D**.
- The **Collider2D** type contains a lot of data about the collision, including the other GameObject involved in any collisions with the enemy.

**3.** Add the following instruction inside the **OnTriggerEnter2D**function:

```csharp
PlayerController player = other.gameObject.GetComponent<PlayerController>();
```

Here’s an explanation of this code:

- This instruction creates a variable that contains the reference to the **Player Controller (Script)** component on GameObject that collides with the collectible.
- You’ve used this code previously for health collectibles and damage zones.

**4.** Underneath the instruction, add an **if** statement with code to increment the player character health by **-1** on collision:

```csharp
if (player != null)
{
   	player.ChangeHealth(-1);
}
```

Here’s an explanation of this code:

- Unity will execute this code if a GameObject with the **PlayerCharacter** script attached collides with the enemy – again, you’ve used this code previously for collectibles and damage zones.

**5.** Save your changes and return to the Unity Editor to test the damage functionality.

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

Mark step as completeOptional Step

## 7. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

### Easy: Create fast and slow enemy variants

To craft the right challenge for your players, try to create fast and slow enemy variants. Remember to carefully consider the enemies’ placement and patrol patterns.

### Hard: Configure the enemy to switch between vertical and horizontal movement

Currently the enemies in your game only move horizontally or vertically, based on what axis you set them to move. To make the enemies less predictable, create script functionality that will allow the enemies to randomly change what axis they’re moving along while the game is playing.

Mark step as complete

## 8. Check your script

Q&A (0)

Take a moment to check that your script is correct before continuing.

**Important**: If you completed any extension work in your script, this will not be reflected in the reference script below.

### EnemyController.cs

```csharp
using UnityEngine;

public class EnemyController : MonoBehaviour
{
   	// Public variables
   	public float speed;
   	public bool vertical;
   	public float changeTime = 3.0f;

   	// Private variables
   	Rigidbody2D rigidbody2d;
   	float timer;
   	int direction = 1;

   	// Start is called once before the first execution of Update after the MonoBehaviour is created

   	void Start()
   	{
       	rigidbody2d = GetComponent<Rigidbody2D>();
       	timer = changeTime;
   	}

   	// Update is called every frame
   	void Update()
   	{
       	timer-= Time.deltaTime;

      		if (timer < 0)
      		{
        		direction = -direction;
        		timer = changeTime;
      		}
   	}

  	// FixedUpdate has the same call rate as the physics system
  	void FixedUpdate()
  	{
       	Vector2 position = rigidbody2d.position;

       	if (vertical)
       	{
           		position.y = position.y + speed * direction * Time.deltaTime;
       	}
       	else
       	{
           		position.x = position.x + speed * direction * Time.deltaTime;
       	}

       	rigidbody2d.MovePosition(position);
  	}

   	void OnTriggerEnter2D(Collider2D other)
   	{
       	PlayerController player = other.gameObject.GetComponent<PlayerController>();

       	if (player != null)
       	{
           		player.ChangeHealth(-1);
       	}
   	}
}
```

Mark step as complete

## 9. Next steps

Q&A (0)

In this tutorial, you’ve set up an enemy to challenge the player. Next you’ll add movement animations to make that enemy (and the player character) feel more realistic.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
