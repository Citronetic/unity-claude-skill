[Image: image]

# Implement projectiles for the player

Tutorial

Beginner

+0XP

30 mins

2

(38)

Unity Technologies

[Image: Implement projectiles for the player ]Summary

Your game now includes enemies, but no way to defeat them. In this tutorial, you’ll create projectiles that the player can launch at enemies.

By the end of this tutorial, you’ll be able to do the following:

- Create and configure a **Projectile** GameObject.
- Write a function to launch a projectile using Input Events.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

Your game now includes enemies, but no way to defeat them. In this tutorial, you’ll create projectiles that the player can launch at enemies. Then, in the next tutorial, you’ll configure the projectiles to affect the enemy so the player can neutralize the threat and complete the game.

**Note**: For the purposes of this tutorial, we chose to use the **Ruby’s Adventure** asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Create a projectile GameObject

Q&A (0)

You’ve previously set up different GameObjects for this game, and now you’re going to repeat that process for a projectile that the player character throws at the enemy.

To set up the projectile, follow these instructions:

**1.** In the **Project** window, within your chosen asset pack folder, navigate to **Assets**> **_2DAdventureGame**> **Art** > **[Chosen Asset Pack]** > **VFX** Select the **Projectile** sprite.

**2.** In the **Inspector**window, set the **Pixels Per Unit** property to **300**, then select the **Apply**button.

This change will make the asset more proportional in size to the other game sprites. You can adjust this size if you’d like to!

[Image:  Unity Inspector showing import settings for a 2D sprite named “Projectile.” Texture type is Sprite (2D and UI), Sprite Mode Single, Pixels Per Unit 300, Mesh Type Tight, Pivot Center, Generate Physics Shape enabled. Advanced: sRGB on, Alpha Source “Input Texture Alpha,” Alpha Is Transparency checked, Wrap Mode Clamp, Filter Mode Bilinear. Platform settings use Max Size 2048, Format Automatic, Compression Normal Quality. A yellow swirling projectile sprite preview appears at the bottom.]

**3.** Click and drag the **Projectile**sprite over the **Hierarchy**window and release it to create a new GameObject.

**4.** In the **Inspector**window, add **Box Collider 2D** and **Rigidbody 2D** components to the **Projectile**GameObject so Unity can detect when the projectile collides with another GameObject.

In this situation, the default size of the collider is fine because all of the sprite needs to be able to collide with other GameObjects.

**5.** In the **Rigidbody 2D**component, set the **Gravity Scale**property to **0** In the **Box Collider 2D**component, enable the **Is** **Trigger**property.

[Image: Unity Inspector showing a Rigidbody 2D component with the Gravity Scale property set to 0 and highlighted in red.]

**6.** Create a new script called “Projectile” and attach it to the **Projectile**GameObject.

**7.** Turn the **Projectile** GameObject into a prefab.

**8.** Delete the **Projectile** GameObject from the **Hierarchy**window.

The projectile should only be created when the player decides to use one. The prefab will still be available in the correct asset folder.

Mark step as complete

## 3. Script the basic projectile functionality

Q&A (0)

To write the basic physics functionality for the projectile, follow these instructions:

**1.** Open the **Projectile** script in your IDE.

**2.** At the top of the **Projectile** class, declare a private **Rigidbody2D** variable:

```csharp
Rigidbody2D rigidbody2d;
```

**3.** Rename the **Start** function to “Awake”:

```csharp
void Awake()
{

}
```

In the next step, you’ll create a new **Launch** function in your **PlayerController** script that calls an **Instance** of the **Projectile**. **Start** is called on the frame after the **Projectile** GameObject is instantiated, so this reference would be empty. Instead, [Awake](https://docs.unity3d.com/ScriptReference/MonoBehaviour.Awake.html) is called when a GameObject is initialized, even before the **Start** function, which will ensure that the reference is in place.

**4.** In the **Awake** function, add an instruction to get the reference to the **Rigidbody 2D** component on the **Projectile** GameObject and store it in the **Rigidbody2D** variable:

```csharp
void Awake()
{
rigidbody2d = GetComponent<Rigidbody2D>();
}
```

**5.** Below the **Update** function, create a new public function called “Launch”:

```csharp
public void Launch(Vector2 direction, float force)
{

}
```

Here’s an explanation of this code:

- The function takes a **Vector2** variable (**direction**) and a **float** variable (**force**) as its parameters.
- You’ll use these parameters to move the projectile’s **Rigidbody** **2D** component: the higher the force value, the faster the projectile moves.

**6.** In the **Launch** function, add the following instruction:

```csharp
rigidbody2d.AddForce(direction * force);
```

Here’s an explanation of this code:

- The function calls [AddForce](https://docs.unity3d.com/ScriptReference/Rigidbody.AddForce.html) on the projectile’s **Rigidbody** component; the calculation for this here is the **direction** variable multiplied by the **force** variable.
- When the force is applied to the **Rigidbody** **2D** component, the physics engine will apply that force and direction to move the **Projectile** GameObject every frame.

**7.** Below the **Launch** function, add a new **OnTriggerEnter2D** function:

```csharp
void OnTriggerEnter2D(Collider2D other)
{

}
```

Here’s an explanation of this code:

- The projectile will affect the enemy on impact, so the code needs to detect when it collides with another GameObject.
- The parameter **other** stores the **Collision2D**data associated with the collision.

**8.** Add the following two instructions to the **OnTriggerEnter** function:

```csharp
Debug.Log("Projectile collision with " + other.gameObject);
Destroy(gameObject);
```

Here’s an explanation of this code:

- The first instruction prints a message to the console when the projectile collides with a GameObject, so you can identify the specific GameObject it has collided with.
- The second instruction destroys the **Projectile** GameObject on collision. Eventually these projectiles will fix the enemy robots; you’ll add that functionality later in this tutorial.

**9.** Save your changes.

Mark step as complete

## 4. Write a function to launch projectiles

Q&A (0)

You’ve created a basic projectile with some interim functionality, but at the moment the player character has no way to use it.

Follow these instructions to assign the **Projectile** prefab to the **PlayerController** script component:

**1.** Open the **PlayerController** script in your IDE.

**2.** At the top of the **PlayerController** class, declare a new public variable:

```csharp
public GameObject projectilePrefab;
```

Here’s an explanation of this code:

- The variable type **GameObject** can contain the data for the **Projectile** prefab.
- This variable is public, so you can assign any **GameObject prefab** to this variable in the **Inspector**window.

**3.** Underneath the existing functions, add a new function called **Launch**:

```csharp
void Launch()
{

}
```

**4.** In the new **Launch** function, add the following instruction:

```csharp
GameObject projectileObject = Instantiate(projectilePrefab, rigidbody2d.position + Vector2.up * 0.5f, Quaternion.identity);
```

This instruction uses some new things that you haven’t encountered before:

- This instruction calls [Instantiate](https://docs.unity3d.com/ScriptReference/Object.Instantiate.html), a Unity function that takes three parameters.

- **Instantiate**’s first parameter is a **GameObject** reference. Calling **Instantiate** creates a copy of that GameObject in a position defined by the second parameter, with the rotation defined by the third parameter.
- In this situation, the **Projectile** prefab is the GameObject. You’ve set the **Projectile**’s****position to the **PlayerCharacter**’s **Rigidbody** **2D** component position. This is located at the base of the **PlayerCharacter**’s GameObject, but shifted towards the middle because it is multiplied by a **2D Vector** facing up and with a length of **0.5**.
- You’ve also set a rotation of **Quaternion.identity**. **Quaternions** are mathematical operators that can express rotation. All you need to know here is that **Quaternion.identity** means no rotation.

**5.** Add the following two instructions underneath the last one:

```csharp
Projectile projectile = projectileObject.GetComponent<Projectile>();
projectile.Launch(moveDirection, 300);
```

Here’s an explanation of this code:

- The first instruction gets a reference to the **Projectile** script on the newly instantiated **Projectile** GameObject.
- The second instruction calls the **Launch** function from the **Projectile** script on the new **Projectile**GameObject instance, passing it the direction of movement (which you stored in a variable for the player character animations) and a **force** value of **300**.

- The **force** value that you have set is high because it’s expressed in **Newton** units. If you want to fine-tune the force of the projectile, you can create a public **float** variable and use that as the force instead.

**6.** Add a final instruction to the **Launch** function:

```csharp
animator.SetTrigger("Launch");
```

The instruction **[SetTrigger](https://docs.unity3d.com/ScriptReference/Animator.SetTrigger.html)**triggers****the **Launch** animation to play when the player character launches a projectile.

Mark step as complete

## 5. Detect input to launch a projectile

Q&A (0)

Now you’ve written the **Launch** function, you need to configure an input for it. You also need to assign the **Projectile** prefab, so the player character actually has something to launch with this function.

Follow these instructions to set up the **Launch** Input action:

**1.** Open the **PlayerCharacte**r prefab in prefab editing mode, then select the **PlayerController**GameObject in the **Hierarchy**window.

**2.** In the **Inspector**window, under the **Player Controller (Script)**component, select the **Projectile Prefab** property picker (**⊙**) and select the **Projectile** prefab.

[Image: Unity Inspector showing the Player Controller (Script) component. The Move Action Input Action is a 2D Vector. The following fields are set as: Speed 3, Max Health 5, Time Invincible 2, and Projectile Prefab to the Projectile prefab.]Mark step as complete

## 6. Define the Launch Input Action

Q&A (0)

You now need to create a new **Input Action** for launching the projectile. You’ve already learned this process when setting up the Input Actions for player movement, so here’s a quick recap of the steps:

**1.**In the **PlayerController** script, declare a new public variable:

```csharp
public InputAction LaunchAction;
```

**2.** Save your script, then return to the Inspector window in the Editor and add a new **binding** for this **Input Action**.

**3.** Set its type to **Button**, and use the **Listen** button to assign a key for the **LaunchAction**. In this case, use the **C** key.

**4.** Next you need to enable the **LaunchAction** in the **Start** method, and call the **Launch** function whenever the user presses key **C**.

```csharp
LaunchAction.Enable();
```

**5.** In the **Update** function after the **if (isInvincible)** loop add the following statement:

```csharp
if(LaunchAction.WasPressedThisFrame())
{
     	Launch();
}
```

This **if**statement will call the **Launch()** function when the **LaunchAction** binding (the **C** key) is detected as pressed in that particular frame.

**6.** Save your changes, return to the Unity Editor, and enter Play mode to test your changes.

As soon as an instance of the **Projectile** prefab is created, a collision with the **PlayerCharacter** GameObject is registered in the **Console** window, and the **Projectile** GameObject is destroyed. You could remove the destroy functionality to test this, but this change wouldn’t resolve the issue of an immediate collusion.

Mark step as complete

## 7. Configure Layers to fix the collision issue

Q&A (0)

You can address the immediate collision issue by using layers. **Layers** group GameObjects together so you can filter them. Here, you’ll create one layer for the player character and one layer for all projectiles. You can then instruct the physics system that these two layers can’t collide, so it ignores all collisions between objects in those layers.

To configure the player character and projectile layers for your game, follow these instructions:

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

**1.** Open the **PlayerCharacter** GameObject in prefab editing mode.

**2.** In the **Inspector**window, under the GameObject header, open the **Layer** property dropdown**.**

All GameObjects start on the **Default** layer (layer 0); you can create up to 32 layers for your game. There are some built-in layers already defined.

**3.** Select **Add Layer…** to open the **Layer Manager** view.

**4.** Pick any two empty layers after **Layer 5** and call them “Character”, and “Projectiles” respectively.

**Note**: Some layers are used by Unity for fixed purposes, but you can use the other layers as needed.

**5.** In the **Hierarchy** window, select the **PlayerCharacter** GameObject. In the **Inspector**window, set its **Layer**property to **Character**, then save your changes and exit prefab editing mode.

**6.** Repeat this process to set the correct layer for the **Projectile** prefab.

Remember, you can find the **Projectile**prefab in the **Project** window.

Mark step as complete

## 8. Adjust the Layer Collision Matrix

Q&A (0)

The final thing that you need to do is to configure your project so that the two new layers can’t collide. Layers are a helpful way to organize the different things in your game for a number of reasons. Here, layers are useful because you can turn off collisions between just the two new layers. Everything else will work as expected, but the projectile and the player character will never collide, which means that the projectile will be available for the player to launch at enemies.

To adjust the layer collision in your project, follow these instructions:

**1.** In the main menu, go to **Edit** > **Project Settings…** > **Physics 2D** and select the **Layer Collision Matrix**tab.

[Image:  Unity Project Settings window open to Physics 2D. The Layer Collision Matrix is highlighted in red and shows checkboxes for every layer interaction between Default, TransparentFX, Ignore Raycast, NPC, Water, UI, Character, and Projectiles. Buttons for Disable All and Enable All appear below.]

By default, GameObjects in each layer can collide with GameObjects in every other layer.

**2.** Disable collisions between the **Projectiles** and **Character** layers.

[Image: Close-up of Unity Physics 2D Layer Collision Matrix highlighting in red Character and Projectiles rows. The checkbox for Character colliding with Projectiles is unchecked; the Projectiles self-collision box is unchecked.]]

**3.** Save your changes, then test the game in Play mode.

Now projectiles won’t collide with the player character, but they will collide with all other GameObjects in the scene that have colliders when you launch them.

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

Mark step as complete

## 9. Check your scripts

Q&A (0)

Take a moment to check that your scripts are correct before continuing.

### PlayerController.cs

**Important**: If you completed any extension work in your script beyond exposing the variable that controls movement speed, this will not be reflected in the reference script below.

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
  	// Variables related to player character movement
  	public InputAction MoveAction;
  	Rigidbody2D rigidbody2d;
  	Vector2 move;
  	public float speed = 3.0f;

  	// Variables related to the health system
  	public int maxHealth = 5;
  	int currentHealth;
  	public int health { get { return currentHealth; }}

  	// Variables related to temporary invincibility
  	public float timeInvincible = 2.0f;
  	bool isInvincible;
  	float damageCooldown;

   	// Variables related to animation
  	Animator animator;
  	Vector2 moveDirection = new Vector2(1,0);

  	// Variables related to projectiles
  	public GameObject projectilePrefab;
  	public InputAction LaunchAction;

  	// Start is called before the first frame update
  	void Start()
  	{
     		MoveAction.Enable();
     		LaunchAction.Enable();
     		rigidbody2d = GetComponent<Rigidbody2D>();
     		animator = GetComponent<Animator>();
     		currentHealth = maxHealth;
  	}

  	// Update is called once per frame
  	void Update()
  	{
     		move = MoveAction.ReadValue<Vector2>();

      		if(!Mathf.Approximately(move.x, 0.0f) || !Mathf.Approximately(move.y,0.0f))
        	{
           		moveDirection.Set(move.x, move.y);
           		moveDirection.Normalize();
        	}

     		animator.SetFloat("Look X", moveDirection.x);
     		animator.SetFloat("Look Y", moveDirection.y);
     		animator.SetFloat("Speed", move.magnitude);

     		if (isInvincible)
       	{
           		damageCooldown -= Time.deltaTime;
           		if (damageCooldown < 0)
{
               		isInvincible = false;
}
       	}

     		if(LaunchAction.WasPressedThisFrame())
        	{
           		Launch();
        	}

   	}

// FixedUpdate has the same call rate as the physics system
  	void FixedUpdate()
  	{
     		Vector2 position = (Vector2)rigidbody2d.position + move * speed * Time.deltaTime;
     		rigidbody2d.MovePosition(position);
  	}

  	public void ChangeHealth (int amount)
  	{
     		if (amount < 0)
       	{
           		if (isInvincible)
			{
               		return;
			}

           		isInvincible = true;
           		damageCooldown = timeInvincible;
           		animator.SetTrigger("Hit");
       	}
     		currentHealth = Mathf.Clamp(currentHealth + amount, 0, maxHealth);
     Debug.Log(currentHealth + "/" + maxHealth);
     		Debug.Log(currentHealth + "/" + maxHealth);
  	}

  	void Launch()
  	{
     		GameObject projectileObject = Instantiate(projectilePrefab, rigidbody2d.position + Vector2.up * 0.5f, Quaternion.identity);
     		Projectile projectile = projectileObject.GetComponent<Projectile>();
     		projectile.Launch(moveDirection, 300);
     		animator.SetTrigger("Launch");
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

   	}

   	public void Launch(Vector2 direction, float force)
  	{
       	rigidbody2d.AddForce(direction * force);
  	}

   	void OnTriggerEnter2D(Collider2D other)
  	{
        	Debug.Log("Projectile collision with " + other.gameObject);
        	Destroy(gameObject);
  	}
}
```

Mark step as complete

## 10. Next steps

Q&A (0)

Now that you’ve created projectiles for the player character, you can add functionality so that they actually do something to the enemy. In the next tutorial, you’ll configure the projectiles to stop enemies’ aggressive behavior.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
