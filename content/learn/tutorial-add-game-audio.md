[Image: image]

# Add game audio

Tutorial

Beginner

+0XP

30 mins

0

(20)

Unity Technologies

[Image: Add game audio]Summary

In this tutorial, you’ll use a variety of different kinds of audio to bring your game to life.

By the end of the tutorial, you’ll be able to do the following:

- Add looping background audio for the game.
- Set up one-off sound effects.
- Implement spatialized sound.

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

Your game is still missing an important feature: audio. For creators working on a game, audio is a critical design element: it can help players connect with your game and create a more immersive and engaging experience. We’ve included different audio clips for you to implement in your 2D adventure game, but don’t be afraid to find your own assets and customize the experience even further!

**Note**: For the purposes of this tutorial, we chose to use the **Ruby’s Adventure** asset set, and the images used in instructions will reflect this. If you chose another asset set, the file names will be the same, but in your corresponding theme folder.

Mark step as complete

## 2. Add background audio for the game

Q&A (0)

The first type of audio you’ll add is background music that will play on loop while the game is running. We’ve provided one single audio clip for you to use, but you can replace this with audio assets that you’ve sourced yourself if you like!

**Important**: If you find your own audio assets in the [Unity Asset Store](https://assetstore.unity.com/)****or elsewhere, make sure that you follow the terms of the license, you can learn more about licenses in the [**Copyright for creators**](https://learn.unity.com/tutorial/copyright-for-creators?version=6.3) tutorial.

**Important:** This tutorial will guide you through setting up basic audio in your 2D project. However, if you haven’t done any audio work before and want a more detailed course, we recommend taking the [**Creative Core Pathway: Audio**](https://learn.unity.com/course/creative-core-audio?version=6.0) course.

To set up the background audio for your game, follow these instructions:

**1.** Right-click in the **Hierarchy** window and select **Audio**> **Audio Source**to create a new **Audio Source** GameObject, and rename it “BackgroundMusic”.

**2.** In the **Project** window, navigate to **Assets**> **_2D AdventureGame**> **Audio** and locate the **2D MUSIC LOOP** asset**.**

**3.** Click and drag the **2D MUSIC LOOP**asset from the **Project** window in the **Audio Source**component’s **Audio Generator** property box.

**4.** Enable the **Loop** property.

**5.** Check that the **Spatial Blend**property is set to **2D**(**0**).

[Image: Inspector window showing an Audio Source component. The Audio Clip field is highlighted and set to “2D MUSIC LOOP”. The Loop option is also highlighted, with its checkbox checked.]

The **Spatial Blend** property defines whether the audio clip is **spatialized**: whether it plays at different volumes or from different speakers based on the listener’s location, giving a realistic sense of sound in space. The **Main Camera** GameObject in your project already has an **Audio Listener** component, which will pick up the sounds in the scene. When the **Spatial Blend**property of an **Audio Source**component is set to**2D**, the sound isn’t spatialized and will play at the same volume no matter where the**Audio Listener** component is in relation to the **Audio Source**component.

**6.** Save your changes and test the game.

The audio will start to play as soon as the game launches.

**Important**: If you don’t hear any audio when you test and your hardware is switched on, check the **Game** view tools to confirm that audio is enabled.

Mark step as complete

## 3. Call PlayOneShot for gameplay sounds

Q&A (0)

There are other elements and events in your game that you could add sound effects to; for example, the player character’s walking sound while moving or an audio feedback when picking up a health collectable. The easiest way to play a sound once is to use a [PlayOneShot](https://docs.unity3d.com/ScriptReference/AudioSource.PlayOneShot.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774935310812)****function.

The [PlayOneShot](https://docs.unity3d.com/ScriptReference/AudioSource.PlayOneShot.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774935310812) function is applied to an **Audio Source** component and uses an **audio clip** as its parameter. Then, it will play the clip once.

To set up the **PlayOneShot**function to play a certain **audio clip** once, follow these instructions:

**1.** Add an **Audio Source** component to the **PlayerCharacter** GameObject.

**Important:**Because the **PlayerCharacter** GameObject is a prefab, make sure to add this component in prefab editing mode.

**2.** Open the **PlayerController** script in your IDE.

**3.** At the top of the class, declare a new private variable to contain a reference to the **Audio Source** component:

```csharp
AudioSource audioSource;
```

**4.** In the **Start** function, store the **Audio Source** component reference in the variable:

```csharp
audioSource = GetComponent<AudioSource>();
```

**5.** Create a new public function called **PlaySound**, with an **AudioClip** parameter and the following instruction inside:

```csharp
public void PlaySound(AudioClip clip)
{
audioSource.PlayOneShot(clip);
}
```

When this function is called, it executes the **PlayOneShot** method to play the **audio clip** that was provided as its parameter.

**6.** Save your changes.

Mark step as complete

## 4. Add an audio clip to the health collectible

Q&A (0)

You’ve created a function to call **PlayOneShot**, but at the moment there are no sound effects implemented for it to play.

To add a sound effect when the player picks up a collectible, follow these instructions:

**1.** Open the **HealthCollectible** script in your IDE.

**2.** At the top of the class, declare a new public **AudioClip** variable:

```csharp
public AudioClip collectedClip;
```

**3.** Inside the **OnTriggerEnter2D** function, find the **if** statement and, within that code block, call the **PlaySound** function on the **PlayerController** to play the sound:

```csharp
controller.PlaySound(collectedClip);
```

You might wonder why you’re using the **PlayerCharacter** GameObject’s **Audio Source** component instead of the one of the **Collectible** GameObject.The **Collectible** GameObject is destroyed when the **PlayerCharacter** GameObject meets the conditions for collecting it, thus the **Audio Source**component would also be destroyed, which would stop the sound from being played.

**4.** Save your changes.

**5.** In the Unity Editor, open the **Collectible** GameObject in prefab editing mode.

**6.** In the **Project** window, navigate to the **Assets**>**_2DAdventureGame** > **Audio** folder.

**7.** Assign the **Collectible** audio asset to the **Collected Clip** property in the **Health Collectible (Script)** component.

**8.** Save your changes and test your game.

Now each time the player character picks up a collectible, a sound effect will play.

**Note**: If you find the sounds too loud, you can reduce the volume in the **PlayerCharacter** GameObject’s and/or **BackgroundMusic** GameObject’s **Audio Source** component.

Mark step as complete

## 5. Implement spatialized sound for the enemy movement

Q&A (0)

So far you’ve used 2D sound because the background audio and collectible pickup sound are **not spatialized**. However, next you’ll implement audio for the **Enemy**’s movement. This sound is very much part of the game world because the player character would be able to hear it get louder or quieter as they move around the environment.

To implement audio for the enemy character’s movement, follow these instructions:

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

**1.** Open the **Enemy** GameObject in prefab editing mode and add an **Audio Source** component to it.

**2.** Assign the **EnemyWalk**asset to its **Audio Generator** property box.

**3.** Enable the **Loop**property.

**4.** Set **Spatial Blend** property to **3D** (**1**). In the **Scene** view, a blue circle will now surround the speaker icon of the **Enemy** GameObject.

This circle represents the minimum distance of the spatial blend. If the GameObject with the **Audio Listener**component is inside that circle, it will hear the **Audio Source**’s sound at the maximum volume. Once the GameObject with the **Audio Listener**component is outside of the circle, the volume will slowly attenuate (reduce) until the **Audio Listener**component reaches the maximum distance, where it will be silent.

**5.** In the **Scene** view, zoom out until the circle that represents the maximum distance is displayed.

You’ll need to zoom out a lot!

This distance is larger than your entire game world, so you’ll need to adjust it to a more reasonable size. You can drag the dot in the center of the circle, but it’s easier to make the adjustment directly in the values of the **Inspector**window.

**6.** In the **Inspector**window, if the **3D Sound Settings** section is collapsed, use the foldout (triangle) to expand it.

You can use the **Volume Rolloff** property to choose between three different methods of audio attenuation:

- **Logarithmic Rolloff**: The default, which mimics the way that sound behaves in the real world. A visualization of this audio reduction curve is currently displayed in the Listener preview pane.
- **Linear**: The sound is reduced in a straight line rather than a curved rolloff.
- **Custom**: Used for different custom rolloff curves to achieve specific effects.

**7.** Open the **Volume Rolloff**property dropdown and select either **Logarithmic Rolloff**or **Linear**.

Because you’re working at a very small distance, either **Logarithmic Rolloff**or **Linear Rolloff**will give similar results.

**8.** Set the **Max Distance**property to **10**.

**9.** Save your changes and exit prefab editing mode.

If you test the game now, the attenuations won’t work just yet because the**Spacial Blend** setting is made for 3D. The circles that represent the distances are actually spheres, which are displayed if you turn the **Scene** view back to **3D** mode.

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

The camera sits slightly above your whole game. This means that even if an **Enemy** GameObject is in the center of the screen and the camera is directly above, the **Audio Listener**component on the camera is still located over the **Max Distance** from the **Audio Source** component****and the volume is totally muted.

Mark step as complete

## 6.  Fix the audio attenuation

Q&A (0)

You need to place the **Audio Listener**component at the same depth as the rest of the GameObjects (**Z**= **0**) to address the attenuation issue, but if you set the **Main Camera** GameObject to that position, you’ll break the rendering for your game. Instead, you’ll create a child GameObject for the **Main Camera** GameObject; this child GameObject will move with the **Main Camera** GameObject and be in the center of the screen, but will be located higher in the Z-axis.

To fix the attenuation for your game, follow these instructions:

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

**1.** In the **Hierarchy**window, right-click the **Main Camera** GameObject, select **Create Empty**, and name the new child GameObject “Listener”.

**2.** Select the **Listener**GameObject.

**3.** In the **Inspector**window, add an **Audio Listener** component.

**4.** In the **Transform** component, set the**Position**property****values to the following values:

- **X** = **0**
- **Y** = **0**
- **Z** = **10**

The position of a child GameObject is relative to the parent GameObject; these position values place the **Listener** GameObject **10**units in front of the **Main Camera** GameObject. As the camera is **10** units back from the plane for your game, this places the **Listener** GameObject at **Z** = **0**, just what you needed.

**5.** In the **Hierarchy**window, select the **Main Camera** GameObject.

**6.** In the **Inspector**window, right-click the **Audio Listener** component and select **Remove Component**.

**7.** Save your changes.

Now, when you test your game, the walking sounds for the enemy will be spatialized through your speakers and attenuated depending on the player character’s location.

Mark step as complete

## 7.  More things to try

Q&A (0)

If you want to further develop your skills, explore new concepts, or improve your project, check out some of the optional activities below. Each one is tagged as either Easy, Medium, or Difficult, so you can choose the level of challenge.

These activities are entirely optional, so if you’re not interested, no problem – just skip this step. We do recommend attempting at least one of them in order to get the most out of this learning experience. Good luck!

### Easy: Stop enemy audio when its state changes

The enemy audio only makes sense when the enemy is walking around; when the player fixes it and the enemy stops moving, this audio is no longer needed.

To stop the audio, you’ll need to do the following things in the **EnemyController** script:

- Create a new variable of type **AudioSource** to store a reference to the component.
- In the **Start** function, use **GetComponent**to retrieve the reference and store it in your variable.
- In the **Fix** function, call the **audioSource.Stop()**function.

### Medium: Additional one-shot sound effects

We’ve provided a range of sound effects that you can implement for the following things:

- When the **PlayerCharacter** walks (**PlayerWalk.wav**).
- When the **PlayerCharacter**throws a projectile (**Projectile.wav**).
- When the **PlayerCharacter** takes damage (**PlayerHit.wav**).
- When the **PlayerCharacter** fixes an enemy with a cog (**EnemyFix.wav, EnemyHit1.wav or EnemyHit2.wav**).

Adding all of these sounds to your game would make it sound very busy, so take some time to consider which ones are the best for the specific experience you’re crafting. You can also find your own sound assets to achieve this!

For each one-shot sound effect that you implement, remember to do the following:

- Add an **Audio Clip** variable to the script for the GameObject that is the in-game source of the sound. For example, effects for when the player character is hit or throws a projectile should be added to the **PlayerController** script.

Call **PlayOneShot**on the **Audio Source** component at the relevant code for the action with which you are associating the sound effect.

Mark step as complete

## 8. Check your script

Q&A (0)

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
    	public int health { get { return currentHealth; } }
    	int currentHealth;

    	// Variables related to temporary invincibility
    	public float timeInvincible = 2.0f;
    	bool isInvincible;
    	float damageCooldown;

    	// Variables related to Animation
    	Animator animator;
    	Vector2 moveDirection = new Vector2(1, 0);
    	public InputAction TalkAction;

    	// Variables related to Projectile
    	public GameObject projectilePrefab;
    	public InputAction LaunchAction;

// Variables related to NPC
private NonPlayerCharacter lastNonPlayerCharacter;

    	// Variables related to audio
    	AudioSource audioSource;

    	// Start is called before the first frame update
    	void Start()
    	{
        	MoveAction.Enable();
	 	LaunchAction.Enable();
	 	TalkAction.Enable();
        	rigidbody2d = GetComponent<Rigidbody2D>();
        	currentHealth = maxHealth;
        	animator = GetComponent<Animator>();
        	audioSource = GetComponent<AudioSource>();

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


       	// NPC raycast detection
       	RaycastHit2D hit = Physics2D.Raycast(rigidbody2d.position + Vector2.up * 0.2f, moveDirection, 1.5f, LayerMask.GetMask("NPC"));
       	if (hit.collider != null)
       	{
			NonPlayerCharacter npc = hit.collider.GetComponent<NonPlayerCharacter>();
npc.dialogueBubble.SetActive(true);
lastNonPlayerCharacter = npc;
           		FindFriend(hit);
       	}
else
{
if (lastNonPlayerCharacter != null)
{
         			lastNonPlayerCharacter.dialogueBubble.SetActive(false);
             			lastNonPlayerCharacter = null;
}
}

    	}

    	// FixedUpdate has the same call rate as the physics system
    	void FixedUpdate()
    	{
        	Vector2 position = (Vector2)rigidbody2d.position + move * speed * Time.deltaTime;
        	rigidbody2d.MovePosition(position);
    	}

    	public void ChangeHealth(int amount)
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

    	void FindFriend(RaycastHit2D hit)
   	{
       	if (TalkAction.WasPressedThisFrame())
       	{
           	UIHandler.instance.DisplayDialogue();
       	}
   	}

    	public void PlaySound(AudioClip clip)
    	{
        	audioSource.PlayOneShot(clip);
    	}
}
```

### HealthCollectible.cs

```csharp
using UnityEngine;

public class HealthCollectible : MonoBehaviour
{
   	public AudioClip collectedClip;
   	void OnTriggerEnter2D(Collider2D other)
   	{
       	PlayerController controller = other.GetComponent<PlayerController>();

       	if (controller != null && controller.health< controller.maxHealth)
       	{
           		controller.PlaySound(collectedClip);
           		controller.ChangeHealth(1);
           		Destroy(gameObject);
       	}
   	}
}
```

Mark step as complete

## 9. Next steps

Q&A (0)

Audio makes a significant contribution to the player’s experience of your game. In this tutorial, you’ve enhanced the world that you created. In the next tutorial, you’ll continue to polish your game by improving the game visuals with 2D particle effects.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
