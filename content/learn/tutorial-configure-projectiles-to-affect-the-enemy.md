[Image: image]

# Configure projectiles to affect the enemy

Tutorial

Beginner

+0XP

20 mins

1

(34)

Unity Technologies

[Image: Configure projectiles to affect the enemy]Summary

In this tutorial, you’ll add functionality so your projectiles can repair the enemy and stop it from damaging the player. You’ll also adjust the projectile configuration to optimize game performance.

By the end of this tutorial, you’ll be able to do the following:

- Destroy the enemy on projectile impact.
- Change the enemy state on projectile impact, stopping all broken behavior.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

You’ve set up projectiles that the player can throw, but they currently don’t actually do anything. In this tutorial, you’ll add functionality so your projectiles fix the enemy. You’re going to configure some of the visual and audio effects based on the enemy’s broken and fixed states later in this course. You’ll also adjust the projectile configuration to optimize game performance.

**Note**: For the purposes of this tutorial, we chose to use the **Ruby’s Adventure** asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Add functionality to attack enemies

Q&A (0)

You’ve fixed the projectile errors, but there’s an important thing still missing: the projectile doesn’t do anything but disappear on collision. But the player character’s goal in the game is not just to evade the enemy characters, it’s to fix them – now it’s time to add that functionality.

Follow these instructions to update the projectile functionality:

**1.** Open the **EnemyController** script in your IDE.

**2.** At the top of the **EnemyController** class, declare a new bool variable:

```csharp
bool broken = true;
```

The enemies start off broken and need to be fixed by the player – this variable stores that state and sets the enemy to initialize in the broken state.

**3.** At the start of the **FixedUpdate** function, add the following test to check whether the enemy is broken or not:

```csharp
if (!broken)
{
    return;
}
```

Here’s an explanation of this code:

- You’ve used**if**statements to perform checks before – here the check is whether the **broken** bool is not (**!**) true.
- If **broken** is not true (the enemy is fixed), Unity exits the function. If the enemy is still broken, the rest of the code in the function will execute.

**4.** At the bottom of the script, add a new public function called **Fix**:

```csharp
public void Fix()
{
    broken = false;
    rigidbody2d.simulated = false;
}
```

Here’s an explanation of this code

- This function is **public** so you can call it from the **Projectile** script.
- The first instruction sets the broken bool variable to false.
- The second instruction sets the simulated property of the **Enemy** GameObject’s **Rigidbody** component to false, which removes the **Enemy** GameObject from the physics system’s simulations for collisions. This change means that projectiles will no longer collide with enemies or be able to damage the enemy character.

**5.** Save your changes, then open the **Projectile**script.

**6.** At the top of the **OnTriggerEnter2D** function, remove the instruction printing to the **Console**window and add the following line of code:

```csharp
EnemyController enemy = other.GetComponent<EnemyController>();
```

This instruction stores a reference to the **Enemy Controller (Script)** component on the GameObject that collides with the projectile in a variable called enemy, if it has one.

**7.** Just after that new line add the following conditional code to fix a broken enemy:

```csharp
if (enemy != null)
{
    enemy.Fix();
}
```

If **enemy** is not null (that is, if the **OnTriggerEnter2D** function has an **EnemyController** script reference), the **Fix** function in the **Enemy Controller** script is called.

**8.** Add add a new **OnCollisionEnter2D**function with the following instruction:

```csharp
void OnCollisionEnter2D(Collision2D collision)
{
    Destroy(gameObject);
}
```

Since the previous function only handles collisions with triggers, you need to create a new one to handle collisions with standard colliders, like those used for decorations, obstacles, and similar elements. This way, the projectile will be properly destroyed on impact.

**9.** Save your changes and test the game in Unity.

The player can now use the projectiles to fix enemies! Fixed enemies will stop moving and won’t deal damage to the player.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:03Loaded: 0.00%0:00Remaining Time -0:031xPlayback Rate

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

## 3. Optimize the projectiles in your game

Q&A (0)

You’ve finished the projectile functionality, but there’s one more projectile issue for you to address. Right now, if the player character launches a projectile and it doesn’t hit anything, that projectile will continue moving offscreen for as long as the game runs. As you enhance this game (or create new, more complex games) this could cause performance issues – for example, 500 projectiles moving out of the player’s view could have a significant impact!

You can address this issue by checking the projectile’s distance from the center of the game world and destroying the GameObject when it is far enough away that the player character will never reach it.

To make this check, follow these instruction:

**1.** Open the **Projectile** script in your IDE.

**2.** Inside the **Update**function, add the following conditional statement and code to the **Update** function:

```csharp
if (transform.position.magnitude > 100.0f)
{
    Destroy(gameObject);
}
```

Here’s an explanation of this code:

- You can consider **position** to be a vector from the center of the game world to the location of the **Projectile** GameObject. **Magnitude** is the length of that vector, so the magnitude of the position is the distance to the center of the game world.
- If the distance is greater than **100**, the **Projectile** GameObject is destroyed.

**3.** Save your changes.

Mark step as completeOptional Step

## 4. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

**Important:** The **Medium: Create an animation for fixed enemies** challenge is marked as optional, but it’s actually essential for a good gameplay experience, so we strongly encourage you to complete it. After this step, the affected script updates will be reflected in the **Check your scripts** sections at the end of the tutorials. To avoid confusion between the provided scripts and your own code, please make sure you complete this challenge first.

### Easy: Destroy the enemies

We’ve guided you through fixing enemies because of the particular way that the example game for this course is designed, but you’ll more commonly find that the enemies are destroyed when you harm them in a game. If you want, you can change your game to this functionality instead.

### Medium: Create an animation for fixed enemies

If you want to add an additional animation for fixed enemies, follow these high-level instructions:

**1.** Create a new animation clip for the enemy using the following sprites:

- **[Enemy Name]Fixed1**
- **[Enemy Name]Fixed2**
- **[Enemy Name]Fixed3**
- **[Enemy Name]Fixed4**

Name the new animation clip “EnemyFixed".

**2.** Select the **Enemy** GameObject and view its **Animator** **Controller** in the **Animator** window.

Your new animation clip will be visible in the graph layout area.

**3.** Right-click the**Blend Tree** node, select **Make Transition**, and then select the **EnemyFixed** node.

The connection between the nodes will have an arrow showing the direction of the transition.

[Image: Unity Animator graph with an active transition arrow from the orange “Blend Tree” state to the highlighted blue “EnemyFixed” state. Entry feeds into Blend Tree; Exit is below]

**4.** In the **Layers and Parameters** pane, select the **Parameters**tab,****add a new **Trigger** parameter, and name it “Fixed”.

[Image:  Unity Animator Parameters tab listing Move X (0), Move Y (0), and a bool parameter “Fixed” (selected)]]

**5.** Select the transition between the **Blend Tree**node and the **EnemyFixed** node, then go to the **Conditions** list in the **Inspector**window. Select the **Add** (**+**) button and set the new **Fixed** parameter as the condition.

**6.**Select the transition between the **Blend Tree**node and the **EnemyFixed** node and disable **Has Exit Time**.

The enemy will now be in its fixed state until the end of the game.

[Image: Unity Inspector for “Blend Tree -> EnemyFixed” with “Has Exit Time” unchecked and highlighted in red. Timeline displays Blend Tree transitioning into EnemyFixed, and under Conditions a single parameter “Fixed” is set.]]

**7.** Save your changes and open the **EnemyController**script in your IDE.

**8.** Go to the **Fix** function and add the following instruction:

```csharp
animator.SetTrigger("Fixed");
```

**9.** Save your script changes and return to the Unity Editor.

**10.** Test your changes.

When you fix the enemy, the new animation will play until you exit Play mode.

[Image: image]Video Player is loading.Play VideoPlayMuteCurrent Time 0:00/Duration 0:05Loaded: 0%0:00Remaining Time -0:051xPlayback Rate

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

### Hard: Alternative optimization approaches

There are other ways that you can address the optimization issue for projectiles, depending on the specification and requirements of your game. For example, you can also take one of the following approaches:

- Get the distance between the player character and the projectile by using the function [Vector3.Distance(a,b)](https://docs.unity3d.com/ScriptReference/Vector3.Distance.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774953930822) to compute the distance between **position** **a** and **position b**.
- Add a timer to the **Projectile** script, decrement (reduce) that timer in the **Update** function, and then destroy the projectile when the timer reaches zero.

Mark step as complete

## 5. Check your scripts

Q&A (0)

Take a moment to check that your scripts are correct before continuing.

### EnemyController.cs

**Important**: This script includes the instruction to implement the optional fixed animation in the **Fix** function, added in the **Medium: Create an animation for fixed enemies** challenge, but does not contain code for any additional extension work.

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
   	Animator animator;
   	float timer;
   	int direction = 1;
   	bool broken = true;

   	// Start is called once before the first execution of Update after the MonoBehaviour is created
   	void Start()
   	{
       	rigidbody2d = GetComponent<Rigidbody2D>();
       	animator = GetComponent<Animator>();
       	timer = changeTime;
   	}

 	// Update is called every frame
  	void Update()
  	{
        	timer -= Time.deltaTime;

        	if (timer < 0)
        	{
            		direction = -direction;
            		timer = changeTime;
        	}
  	}

  	// FixedUpdate has the same call rate as the physics system
  	void FixedUpdate()
  	{
      		if(!broken)
      		{
           		return;
      		}

Vector2 position = rigidbody2d.position;

       	if (vertical)
       	{
           		position.y = position.y + speed * direction * Time.deltaTime;
           		animator.SetFloat("Move X", 0);
           		animator.SetFloat("Move Y", direction);
       	}
       	else
       	{
           		position.x = position.x + speed * direction * Time.deltaTime;
           		animator.SetFloat("Move X", direction);
           		animator.SetFloat("Move Y", 0);
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
 	public void Fix()
   	{
       	broken = false;
       	rigidbody2d.simulated = false;
       	animator.SetTrigger("Fixed");
   	}
}
```

### Projectile.cs

```csharp
using UnityEngine;

public class Projectile : MonoBehaviour
{
   	Rigidbody2D rigidbody2d;

// Awake is called when the Projectile GameObject is instantiated
   	void Awake()
   	{
       	rigidbody2d = GetComponent<Rigidbody2D>();
   	}

   	void Update()
   	{
       	if(transform.position.magnitude > 100.0f)
       	{
           		Destroy(gameObject);
       	}
   	}

   	public void Launch(Vector2 direction, float force)
  	{
       	rigidbody2d.AddForce(direction * force);
  	}

   	void OnTriggerEnter2D(Collider2D other)
  	{
       	EnemyController enemy = other.GetComponent<EnemyController>();
       	if (enemy != null)
           	{
               	enemy.Fix();
           	}

       	Destroy(gameObject);
  	}

void OnCollisionEnter2D(Collision2D collision)
    	{
        	Destroy(gameObject);
    	}
}
```

Mark step as complete

## 6. Next steps

Q&A (0)

You’ve now got a functioning projectile that will fix enemies. However, some players might need a little guidance to help them know what they need to do. In the next unit, you’ll learn how to add UI elements to display the **PlayerCharacter**’s current health, and you’ll create a friendly NPC who’ll explain the goal of the game to the player – fixing all the robot enemies.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
