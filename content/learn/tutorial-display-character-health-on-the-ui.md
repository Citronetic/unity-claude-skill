[Image: image]

# Display character health on the UI

Tutorial

Beginner

+0XP

25 mins

3

(28)

Unity Technologies

[Image: Display character health on the UI]Summary

In this tutorial, you’ll create a script to adjust the health display bar based on the player character’s health.

By the end of the tutorial, you’ll be able to do the following:

- Resize a UI element based on a variable.
- Make your script accessible without a reference using a static class member.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

Now you’ve made your health display, you can use it to display information for the player. In this tutorial, you’ll create a new script to adjust the health display bar based on the player character’s health.

**Note**: For the purposes of this tutorial, we chose to use the**Ruby’s Adventure** asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Create a script to update the health display

Q&A (0)

Now that you’ve created your UI, it’s time to make the size of the health bar change based on the player character’s health.

To create a script that updates the health display, follow these instructions:

**1.** In the **Project** window, navigate to your **Scripts** folder, and create a new **MonoBehaviour Script**, and name it “UIHandler”.

**2.**From****the**Project**window, click and drag the **UIHandler** script into the **Hierarchy** window and release it over the **UIDocument** GameObject.

[Image: Unity Inspector showing a GameObject named “UIDocument”. Components displayed: Transform; UI Document with Panel Settings set to “PanelSettings” and Source Asset set to “GameUI” Sort Order 0; and a UI Handler (Script) field referencing “UIHandler.]

**3.** Double-click the **UIHandler** script to open it in your IDE.

Mark step as complete

## 3. Implement basic health display functionality

Q&A (0)

To set up the **UI Handler** script so that a variable controls the health percentage displayed, follow these instructions:

**1.** Go to the namespaces at the top of the script and add the following line of code:

```csharp
using UnityEngine.UIElements;
```

This namespace provides access to the UI Toolkit system.

**2.** Go to the top of the **UIHandler** class, above the **Start** function, and declare a public float variable called **CurrentHealth** and set it to **0.5**:

```csharp
public float CurrentHealth = 0.5f;
```

**Note**: This is a temporary variable for testing the script before you write a function that uses the correct health value in the **PlayerController** script.

**3.** In the **Start** function, add an instruction to get the **UI Document** component that’s on the same **UI Document** GameObject as this script:

```csharp
UIDocument uiDocument = GetComponent<UIDocument>();
```

**4.** Add a second instruction under the line you just added to get the root element of the **UI Builder Hierarchy** (in this case the**HealthBarBackground** element) and call a function named “Q” on it:

```csharp
VisualElement healthBar = uiDocument.rootVisualElement.Q<VisualElement>("HealthBar");
```

Here’s an explanation of this code:

- The root of the **UI** **Hierarchy** is accessed through **rootVisualElement**.
- As you’ve encountered previously, the **rootVisualElement** is accessed using the dot operator (**.**).
- The **Q** function is short for **Query**. You can use this function to find a particular VisualElement in the **Hierarchy** pane that matches certain search parameters – in this case the parameter you want to match is the element name.
- **Query** (**Q**) is a generic function, because you can use it to query lots of different types. The specific type you are looking for is provided inside the angle brackets – in this case, it’s an element named “HealthBar”.

**5.** Add a final instruction to resize the health bar based on the **CurrentHealth** variable value:

```csharp
healthBar.style.width = Length.Percent(CurrentHealth * 100.0f);
```

- **style** contains all the VisualElement properties that you can set with UI Builder, and it is the **width** that you are resizing with this instruction.
- The special function **Length** defines a size in **Percent** (one of the various size types available for the property).

**Note**: If you provide a value to the **Width** property directly, the UI Toolkit system will interpret it as a pixel size rather than a percentage.

**6.** Delete the **Update** function (you won't be using it) and save your script changes.

**7.** Return to the Unity Editor and enter Play mode to test your changes.

You set your temporary **CurrentHealth** variable to **0.5f**, so the bar should fill 50% of the frame (0.5 * 100 = 50).

[Image: In-game close-up of the HUD: Ruby character portrait with a partially filled blue bar over a gold/brown frame, Ruby character nearby with damage zone and collectibles.]

**8.** Exit Play mode when you’ve finished testing.

The bar doesn’t react to changes in the character’s health yet – you’ll implement that next.

Mark step as complete

## 4. Challenge: Write a function to change character health UI

Q&A (0)

**You’ve encountered a challenge!**

Throughout this course, you’ll find a few challenges where you’re encouraged to try writing the code on your own. But don’t worry – if you want to make sure you did it correctly, you can review the script later in the step.

Now that you’ve checked the basic functionality of your **UIHandler** script, you need to write a function that dynamically displays the player character’s current health.

Use the following guidance to help you as you write your new function:

1. At the top of the **UIHandler**class, remove the temporary **CurrentHealth** variable.
2. Declare a new private variable of the **VisualElement** type called “m_Healthbar”.
3. This variable is a member of the UIHandler class – you’ll use it to store the reference to **HealthBar**and access that reference within the script.
4. In the **Start** function, update the second instruction that gets the **HealthBar**reference to now set the new **m_Healthbar** variable.
5. Remove the next instruction that defines the HealthBar width. And below the **Start** function, create a new public function called “SetHealthValue” that sets the **HealthBar** element’s **width**.
6. This function needs to take a float value between **0** and **1** as a parameter.
7. At the end of the **Start** function, add an instruction that passes a parameter of **1.0f** to **SetHealthValue**.

### Check your updated script

When you’ve revised the script yourself, review the completed example below:

```csharp
using UnityEngine;
using UnityEngine.UIElements;

public class UIHandler : MonoBehaviour
{
   	private VisualElement m_Healthbar;

   	// Start is called once before the first execution of Update after the MonoBehaviour is created
   	void Start()
   	{
       	UIDocument uiDocument = GetComponent<UIDocument>();
       	m_Healthbar = uiDocument.rootVisualElement.Q<VisualElement>("HealthBar");
       	SetHealthValue(1.0f);
   	}

   	public void SetHealthValue(float percentage)
   	{
       	m_Healthbar.style.width = Length.Percent(100 * percentage);
   	}
}
```

Mark step as complete

## 5. What are static class members?

Q&A (0)

So far in this course, you’ve created variables in scripts to store data for each individual instance of a GameObject. For example, in the **HealthCollectible** script, you currently pass the value **1** as a parameter to the **ChangeHealth()** function of the **PlayerController** script. Instead, you could create a public variable to contain that health increase value and use it as the parameter. Each collectible would then have its own copy of that variable – allowing different collectibles to give different amounts of health.

However, when you set a variable or a function as a **static member** instead, it’ll belong to the class itself, not to any particular instance. This means all instances share the same memory space for that variable. So, if you made the health increase variable static, changing its value on one collectible would also change it for all others in the game.

Static members are useful when you only need one shared version of something in your game. They can be accessed directly using the class name, rather than through an instance reference. In fact, you’ve already used static members in this course! Here are some examples:

### Time.deltaTime

[deltaTime](https://docs.unity3d.com/ScriptReference/Time-deltaTime.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954656908) is a static variable member of the **Time** class. You’ve accessed this variable by using its name, rather than the following two instructions you’d need if it wasn’t declared as a static member:

```csharp
Time myTime = gameObject.GetComponent<Time>();
myTime.deltaTime;
```

### Debug.Log

[Log](https://docs.unity3d.com/ScriptReference/Debug.Log.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954656908) is a static function within the **Debug** class. Just as the example before, you don’t need to retrieve the function to print a message to the **Console** window; you can just call the **Log** function directly using its class name.

Mark step as complete

## 6.  Revise your script to make it accessible without a reference

Q&A (0)

The reason we introduced the concept of static class members is because now you’re going to set your **UIHandler** class to be static and be used without a reference. To revise your **UIHandler** script, follow these instructions:

**1.** At the top of the **UIHandler**class, declare a new static property:

```csharp
public static UIHandler instance { get; private set; }
```

Some parts of this line of code should be familiar to you, but some information is new:

- The **get** property is **public** and **static,** so you can access it from any script in your project by writing **UIHandler.instance.**
- The **set** property is **private**,****meaning only the **UIHandler**script itself can change the value of the instance property.

**2.** Above the **Start** function, add a new **Awake** function:

```csharp
private void Awake()
{

}
```

This function is called as soon as the GameObject the script is attached to is created. **UIHandler** is attached to the **UIDocument** GameObject, which will be created when the game launches.

**3.** In the **Awake** function, add an instruction to store the keyword “this” in your static property:

```csharp
instance = this;
```

The instruction stores the special C# keyword **this**in the **instance**property; the **this**keyword is a reference to the current instance of the **UIHandler** class executing the **Awake** function.

**Important:** If you have little or no programming experience, or if some of these explanations still feel unclear, the [**Junior Programmer Pathway**](https://learn.unity.com/pathway/junior-programmer) will guide you step-by-step through the fundamentals.

**4.** Save your changes.

### How have you changed the script functionality?

Now, when the game starts, Unity calls the **Awake** function and the **UIHandler** script stores itself in the static member property instance. You can call **UIHandler.instance** in any other script, which will return the **UIHandler** class to the script making the call.

This approach works for the **UIHandler** script because there is only one GameObject with the **UIHandler** script attached (the **UIDocument** GameObject). Static members of a class are shared across all instances of that script; if you change the health increase value for one collectible GameObject, that change will be applied to every collectible in the game.

The **UIHandler** class follows the **singleton** pattern, a specific design approach for situations when you will only need one instance of a class. This pattern is perfect for situations like the **UIHandler**, which is a single class to control everything related to the UI heads-up display in your game.

Mark step as complete

## 7. Update the PlayerController script

Q&A (0)

You’ve prepared everything in the **UIHandler** script, now you need to adjust the **PlayerController** script so that the health values that it contains are reflected on the UI display.

To update the script, follow these instructions:

**1.** Open the **PlayerController** script in your IDE.

**2.** Locate the **ChangeHealth** function, at the bottom of your script.

**3.** Delete the instruction that displays the health values in the **Console** window by calling **Debug.Log** – you won’t need this any more.

**4.** Add the following instruction in the place of the one you deleted:

``

```csharp
UIHandler.instance.SetHealthValue(currentHealth / (float)maxHealth);
```

Before you read on, take a moment to review this code – what do you already understand?

- This instruction passes the ratio of the **currentHealth** value over the **maxHealth** value to the **SetHealthValue** function in the **UIHandler** script.
- Both **currentHealth** and **maxHealth** are integers, and in C# the division of two integers can only return another integer (whole number). For example, 2 / 4 would give 0, because the fractional remainder gets ignored. A whole number value will not work for your percentage calculation in **SetHealthValue**.
- The (float) keyword that precedes **maxValue** is C# syntax that makes the compiler treat **maxHealth** as a floating point value, which resolves the division problem. When at least one value in the division calculation is a float (floating point), the calculation returns a float value. In the example, 2 / 4.0 would give 0.5.

**5.** Save your changes.

**6.** Return to the Unity Editor and test your game.

The health bar on the heads-up display will now increase and decrease as the player character’s health changes!

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

## 8. More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

### Easy: Adjust the positioning for optimal player experience

Now that the HUD is fully-functioning, take some time to test its positioning. If you can ask someone else to test your game-in-progress and get their feedback, even better! You might find that you want to move the display to the upper-right corner instead, or that the general position is good, but tweaking it a little more makes a positive difference.

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
   	Vector2 moveDirection = new Vector2(1, 0);

  	// Variables related to projectiles
   	public GameObject projectilePrefab;
   	public InputAction LaunchAction;

  	// Start is called once before the first execution of Update after the MonoBehaviour is created
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

if (!Mathf.Approximately(move.x, 0.0f) || !Mathf.Approximately(move.y, 0.0f))
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

       	if (LaunchAction.WasPressedThisFrame())
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
     		UIHandler.instance.SetHealthValue(currentHealth / (float)maxHealth);
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

### UIHandler.cs

```csharp
using UnityEngine;
using UnityEngine.UIElements;

public class UIHandler : MonoBehaviour
{
   	private VisualElement m_Healthbar;
   	public static UIHandler instance { get; private set; }

   	// Awake is called when the script instance is being loaded (in this situation, when the game scene loads)
   	private void Awake()
   	{
       	instance = this;
   	}

   	// Start is called once before the first execution of Update after the MonoBehaviour is created
   	void Start()
   	{
       	UIDocument uiDocument = GetComponent<UIDocument>();
       	m_Healthbar = uiDocument.rootVisualElement.Q<VisualElement>("HealthBar");
       	SetHealthValue(1.0f);
   	}

   	public void SetHealthValue(float percentage)
   	{
       	m_Healthbar.style.width = Length.Percent(100 * percentage);
   	}
}
```

Mark step as complete

## 10. Next steps

Q&A (0)

So far in this unit, you’ve created a display to help the player track the **PlayerCharacter**’s health, which will be very helpful to guide the player while completing their challenging adventure. In the next tutorial, you’ll learn how to add another UI element to add another functional element to your game – a dialogue screen.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
