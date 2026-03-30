[Image: image]

# Creating Ragdolls

Tutorial

Beginner

+10XP

40 mins

382

(96)

Unity Technologies

[Image: Creating Ragdolls]Summary

Ragdolls are variants of animated objects whose bones are completely taken over by the force of physics. They’re most often used when a character is defeated, like in an action game when a player’s health depletes, or when you want a character’s movement to appear to be driven by physical forces.

In this tutorial, we’ll create a Ragdoll using Unity’s built-in Create Ragdoll window. We'll use the Eva character in our examples, but you can use any character you want.

Resources

- [CharacterModel_Eva.zip](https://unity-connect-prd.storage.googleapis.com/20200207/a86bbf78-f563-4294-8e0a-502254dabfe4/CharacterModel_Eva.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774954383404)

Languages available:

EnglishEnglishEnglish

## 1. Creating Ragdolls

Q&A (0)

This tutorial has been verified using Unity 2022 LTS.

Ragdolls are variants of animated objects whose bones are completely taken over by the force of physics. They’re most often used when a character is defeated, like in an action game when a player’s health depletes, or when you want a character’s movement to appear to be driven by physical forces.

In this tutorial, we’ll create a Ragdoll using Unity’s built-in **Create Ragdoll** window. We’ll be using the Eva character, but feel free to use any character you desire.

**1.**  To begin, create a new scene.

**2.**  Click and drag your character prefab into the **Hierarchy**window and move it to an empty area in your scene.

[Image: image]

**3.**  Select your character in the **Hierarchy**window and navigate to **3D Object** > **Ragdoll…** to open the **Create Ragdoll** window.

**Note**: You can also open the **Add** (**+**) button dropdown menu in the **Hierarchy**window and select **3D Object**> **Ragdoll…**or right-click in the **Hierarchy** window and select **3D Object**> **Ragdoll…**to open the **Create Ragdoll**window.

[Image: image]

The **Create Ragdoll**window contains a list of slots for the bones in your rig.

**4.**  Use the foldout (triangle) to expand your character GameObject in the **Hierarchy window**, then hold **Alt** (macOS: hold **Option**) and open the  **Root** GameObject dropdown menu to open your character’s entire bone hierarchy.

[Image: image]

**5.**  From this list, drag the bones to the **Create Ragdoll** pop-up window as follows:

- Pelvis → Hips
- Left Hips → LeftLeg
- Left Knee → LeftCalf
- Left Foot → LeftFoot
- Right Hips → RightLeg
- Right Knee → RightCalf
- Right Foot → RightFoot
- Left Arm → LeftArm
- Left Elbow → LeftForeArm
- Right Arm → RightArm
- Right Elbow → RightForeArm
- MiddleSpine → Spine2
- Head → Head

When you’re done, the **Create** **Ragdoll** window should be populated in the manner below.

[Image: image]

**6.**  If all seems correct, select **Create** to complete the initial setup of the **Create Ragdoll**window.

**7.**  Select your character in the **Hierarchy**window and you’ll see the new group of Capsule Colliders that comprise the Ragdoll.

[Image: image]

Notice there are no Colliders on the feet. We’ll address this now:

**8.**  In the **Hierarchy window**, select **RightFoot** and add a **Rigidbody**, **Capsule Collider**, and a **Character Joint** component.

In the previous step, each of these components were added to the bones specified in the **Create Ragdoll** window.

[Image: image]

**9.** In the **Project**tab, open the **Material’s** folder and set the **Material** variable of the Capsule Collider to the **Limb_PhysMat**.

This Material will help your Ragdoll move more quickly and stop more slowly when it collides with itself or other objects.

[Image: image]

**10.**  Select **Edit Collider** and conform the Collider to your character’s foot. Alternatively, you can use the **Radius**, **Height**, and **Center** settings.

[Image: image]

**11.**  Select **Edit Joint Angular Limits** in the **Character Joint** component.

A new gizmo will appear in the **Scene** view. If you cannot see it, check to make sure you have only one **Inspector** window open.

[Image: image]

With this gizmo, you can grab the handles to set limits on the Ragdoll’s joint rotation. It’s important to keep the handles within reasonable limits to prevent excessive squashing or stretching of your character’s joints when the Ragdoll is activated.

This particular joint will control the angular rotation of the ankle, so try to adjust the handles accordingly. The settings shown below provide a good guide.

[Image: image]

If the ankle motions don’t look correct, you might need to change the axis in the **Character Joint** component so the twist axis (y-axis) is pointing up.

**12.**  Set the axis to **X**=**0**, **Y**=**1**, **Z**=**0** to see how the ankles realign themselves.

**13.** In the **Character Joint**component, set **Connected Body** to the previous bone above it in the **Hierarchy window**.

In this example that would be **RightCalf**.

[Image: image]

Now we must repeat the last six steps for the **LeftFoot**, **LeftHand**, and **RightHand** bones. Using this method, you can add any bone to the Ragdoll system.

Mark step as complete

## 2. Debugging your Ragdolls

Q&A (0)

Often, you will want to see the other bones while you are adjusting each one individually to make sure your collider components don’t overlap. By default, Unity pushes overlapping collider components away from each other. This can inadvertently deform bones. The Physics Debugger can help you identify overlapping collider components:

**1.**  Go to **Window**>**Analysis**>**Physics Debugger**.

[Image: image]

**2.**  Enable **Collision Geometry** to see all the Ragdoll Colliders. Enable **Mouse Select** to select bones in the **Scene** view.

[Image: image]

**3.**  Make sure none of the Capsule Colliders are overlapping. You can also check the Angular Limits on the bones to make sure they will move in a more realistic way.

**4.**  If you don’t need to see the Collision Geometry, you can disable **Collision Geometry** in the Physics Debug.

Before you test your Ragdoll, select your character in the **Hierarchy**window and disable its **Animator**component in the **Inspector window**. This will ensure you won’t animate the character while the Ragdoll is trying to run its simulation.

[Image: image]

**5.**Enter Play mode and check out how your Ragdoll works. If you see any strange rotations, adjust the Capsule Colliders or the Joint Angular Limits.

If the limbs or the Ragdoll are overly stretchy ,disable **Enable Preprocessing** in the **Character Joint** component. **Preprocessing** predicts all the possible ways the Ragdoll can deform upon impact, then selects one at random. For more accurate deformation, it’s best to leave this option disabled unless you’re running on a mobile device.

[Image: image]

You can also enable **Enable Collision** if you want the Collider to collide with another connected joint (for example, hand, forearm, foot, lower leg). This option is best used on the last bone of a chain, like the hands or feet.

Mark step as complete

## 3. Toggling between Ragdoll and Kinematic Characters

Q&A (0)

**1.**  Rename your character something like “[Character]_Ragdoll” and drag it from the **Hierarchy**window to the **Prefabs** folder in the **Project** window.

You can position your Ragdoll in the scene as you see fit.

**2.**  Drag another instance of your **Ragdoll** prefab from the **Prefabs** folder into the **Hierarchy window** and rename it something like “[Character]_Ragdoll_Animated”.

[Image: image]

**3.**  Add a **Box Collider** component to **[Character]_Ragdoll_Animated** and position it so that it encapsulates your character.

[Image: image]

Now that you have both a player controlled version of your character and a Ragdoll variant, you need to create a script to toggle when to switch between the two. The following script is a good place to start in implementing this feature:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimationToRagdoll : MonoBehaviour
{
    [SerializeField] Collider myCollider;
    [SerializeField] float respawnTime = 30f;
    Rigidbody[] rigidbodies;
    bool bIsRagdoll = false;
```

When this script is activated, we assume the character is in an animated state, so its Ragdoll is not activated.

```csharp
void Start()
    {
        rigidbodies = GetComponentsInChildren<Rigidbody>();
        ToggleRagdoll(true);
    }
```

If your character is not in a Ragdoll state, enable its Ragdoll and reset the character back to its animated state after a set number of seconds (respawnTime) have passed. You can change this if statement to the condition that activates the Ragdoll, such as pressing the Spacebar (currently it will activate when it collides with a GameObject tagged as Projectile).

```csharp
private void OnCollisionEnter(Collision collision)
    {

        if (!bIsRagdoll && collision.gameObject.tag == "Projectile")
        {
            ToggleRagdoll(false);
            StartCoroutine(GetBackUp());
        }
    }
```

What actually makes your character a Ragdoll? By disabling the character’s outer Collider and setting all its bones to non-kinematic (disabling **isKinematic**), you surrender control of your character’s rig to the physics system.

```csharp
private void ToggleRagdoll(bool bisAnimating)
    {
       bIsRagdoll = !bisAnimating;

        myCollider.enabled = bisAnimating;
        foreach (Rigidbody ragdollBone in rigidbodies)
        {
            ragdollBone.isKinematic = bisAnimating;
        }
```

Consequently the character’s **Animator** component is only enabled when the character is not in a Ragdoll state. The character will play an animation at random when it’s in an animated state.

```csharp
GetComponent<Animator>().enabled = bisAnimating;
        if (bisAnimating)
        {
                     RandomAnimation();
        }
    }

 private IEnumerator GetBackUp()
    {
        yield return new WaitForSeconds(respawnTime);
        ToggleRagdoll(true);
    }

    void RandomAnimation()
    {
        int randomNum = Random.Range(0, 2);
        Debug.Log(randomNum);
        Animator animator = GetComponent<Animator>();
        if (randomNum == 0)
        {
            animator.SetTrigger("Walk");
        }
        else
        {
            animator.SetTrigger("Idle");
        }
    }
}
```

**4.**  Disable the **Box Collider** component in the **Inspector**window and add an **AnimationToRagdoll** component. Drag the **Box Collider** component to the **My Collider** variable in the **AnimationToRagdoll**component.

This script toggles the activation of the **Ragdoll** prefab you created earlier.

[Image: image]

**5.**  Set the **Respawn Time** variable to whatever you want.

This is the number of seconds the character will remain in a Ragdoll state when activated.

**6.**  Set the **Controller** variable in the **Animator** component to the **[Character]_AnimationController** from the **Animation** folder in the **Project** window.

[Image: image]

This script cycles through the Ragdoll bones and sets them to **IsKinematic**. It then enables the **Animator** component and chooses a random (either idle or walk) animation to play. In its current script, when your Ragdoll is toggled, the script disables the animation and sets those bones back to not being kinematic (subsequently enabling the Ragdoll). Then, after the wait time has been reached, it will reset back to another random animation.

**7.**Enter Play mode and test out your new Ragdoll.

Mark step as complete

## 4. Conclusion

Q&A (0)

There are many uses for Ragdolls in your projects. Beyond acting as a procedural death animation for characters, Ragdolls allow you to create interesting movement patterns for characters since they’re controlled by physically based forces. To add even more functionality to Ragdolls, you can also easily toggle whether your character is in a kinematic or Ragdoll state with a simple C# script.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
