[Image: image]

# Enemies, Part 2: Dynamic Observers

Tutorial

Beginner

+10XP

40 mins

124

(2804)

Unity Technologies

[Image: Enemies, Part 2: Dynamic Observers]Summary

You’ve created one enemy John Lemon has to avoid, but that doesn’t seem like much of a challenge. It’s time to create another enemy that will increase the challenge for the player.

In this tutorial, you’ll:

- Create a dynamic Ghost enemy
- Write a custom script so Ghosts can patrol the haunted house
- Populate your game with enemies

When you’ve finished the tutorial, your game will be full of enemies — and almost complete!

Languages available:

EnglishEnglishEspañol日本語한국어简体中文English

## 1. Set Up the Ghost Prefab

Q&A (0)

In the previous tutorial, you created a Gargoyle enemy for the haunted house. Now you’re going to enhance the challenge of your level by creating dynamic (moving) enemies. This time, you’ll create a Ghost to roam the halls of the house searching for JohnLemon.

The first step is to use the Ghost model is to create a Prefab — you should be quite familiar with this process now.

**1.**In the Project window, open the **Assets > Models > Characters**folder and find the **Ghost** Asset.

[Image: image]

**2.**Drag the Ghost model from the Project window into the Hierarchy window to create an instance of the model.

**3.**Drag the Ghost GameObject from the Hierarchy window into the **Assets > Prefabs** folder in the Project window. When the Create Prefab dialogue box appears, select **Original Prefab**.

**4.**Open the Prefab for editing.

Mark step as complete

## 2. Animate the Ghost

Q&A (0)

The next step is to animate your new enemy. The Ghost will also have a simple Animation Controller, as it will be playing a single animation on loop.

To animate the Ghost:

**1.**In the Project window, go to the **Assets > Animation > Animators** folder and right-click on it.

**2.**In the context menu, select **Create > Animator Controller.**Name the new Animation Controller “**Ghost**”.

**3.**Double click on **Ghost** to open the Animator window.

**4.**In the Project window, navigate to the **Assets > Animation > Animations**.

**5.**Expand the **Ghost@Walk** Model Asset.

[Image: image]

**6.**Drag the **Walk**animation from the Project window into the Animator window.

The Ghost’s simple Animation Controller is completed, but it still needs to be assigned to the Animator component.

**7.**In the Project window, go to the **Assets > Animation > Animators** folder.

**8.**In the Hierarchy window, select the **Ghost** GameObject.

**9.**Drag the Ghost Animator Controller from the Project window onto the **Controller**property of the Ghost’s Animator Component in the Inspector.

**10.**Save the Scene.

Mark step as complete

## 3. Add a Collider to the Ghost

Q&A (0)

Just like JohnLemon and the Gargoyles (although perhaps a little counterintuitively!), Ghosts need a physical presence in the Scene.  This means that they will need a Collider.

To add the Collider:

**1.**Check sure that Unity Editor is still in Prefab Mode. If not, you can use the shortcut you learned when you created the Gargoyle Prefab.

**2.**In the Inspector, add a **Capsule Collider component**to the Ghost GameObject.

**3.**Let’s adjust the settings so the Collider fits the Ghost model better:

- Change the Capsule Collider’s **Center** property to (**0**, **0.6**, **0**)
- Change the **Radius** property to **0.25**
- Change the **Height** property to **1.2**

[Image: image][Image: image]

Now the Collider fits well!

Mark step as complete

## 4. Add a Rigidbody Component to the Ghost GameObject

Q&A (0)

The Ghost will also need a Rigidbody, because it is moving. You need to be careful with the settings for this: a collision with JohnLemon shouldn’t cause any movement in the Ghost.

You could avoid movement by enabling all of the Constraints for position and rotation, but an easier approach is to set the Rigidbody as **kinematic.**

In the Inspector, find the Rigidbody component and **enable** the **Is Kinematic** checkbox.

[Image: image]

A kinematic Rigidbody cannot be affected by external forces such as collisions, but it can still collide with other GameObjects. The paddle in the game Breakout is a perfect example of a kinematic Rigidbody: the ball bounces off the paddle, but the paddle is not affected by the bounce.

Mark step as complete

## 5. Make the Ghost an Observer

Q&A (0)

The Ghost Prefab now has all the basics, but it currently won’t move or spot JohnLemon. You’ve already created a PointOfView GameObject for the Gargoyle Prefab which controls this — let’s create a Prefab of that, rather than repeat all the work!

To make the Ghost an Observer:

**1.**First, save your changes to the Ghost Prefab.

[Image: image]

**2.**In the Project window, open the**Assets > Prefabs** folder and select the **Gargoyle** Prefab.

**3.**In the Inspector window, click the **Open Prefab** button.

**4.**In the Hierarchy, find the **PointOfView** GameObject that you created as a child of Gargoyle.

You’re going to turn this GameObject into a Prefab, so that both the Gargoyle and Ghost Prefabs can reference it.

**5.**Drag the PointOfView GameObject from the Hierarchy window into the **Assets > Prefabs** folder in the Project window.

**6.**You should see that the PointOfView GameObject in the Hierarchy is now represented by a blue cube instead of a grey one, and the name is blue instead of grey. This is because it’s now a Prefab instance!

[Image: image]

**7.**Save the Gargoyle Prefab.

**8.**In the Project window, go to **Assets > Prefabs** and select the Ghost Prefab. Click the Open Prefab button.

**9.**Drag the PointOfView Prefab from the **Assets > Prefabs** folder onto the **Ghost**GameObject in the Hierarchy window.

[Image: image]

Now the Ghost also has PointOfView, and can use all of its functionality! There are a couple of adjustments to make so that PointOfView works properly for this enemy though. The Gargoyle is taller than the Ghost and looks down, while the Ghost will need to look straight forward.

**10.**In the Hierarchy window, select the **PointOfView**GameObject.

**11.**In the Inspector, find the Transform component.

- Change the **Position** property to (**0**, **0.75**, **0.4**)
- Change the **Rotation** property to (**0**, **0**, **0**)

[Image: image]

Now your Ghost is set up as an Observer. You can also change the PointOfView Prefab to update both enemies in your game, if you ever need to do this.

Mark step as complete

## 6. Set up a Nav Mesh Agent Component

Q&A (0)

Now you’re ready to set up the Ghost so it can move around your game environment.

You’re going to use two components to do this:

- A Nav Mesh Agent, which will allow the Ghost to find paths around the Nav Mesh you baked in the [Environment Tutorial](https://learn.unity.com/tutorial/the-environment)
- A script which tells the Nav Mesh Agent where the Ghost should go

Let’s start by creating a Nav Mesh Agent:

**1.**In the Inspector, add a **Nav Mesh Agent** component to the Ghost GameObject.

[Image: image]

You will mostly be able to use default settings for this component, but there are a few that you need to adjust.

**2.**In the Scene view, you should see a cylinder representation of the Nav Mesh Agent around the Ghost.

[Image: image]

This is a little big. In the Inspector, change the **Radius**property of the Nav Mesh Agent component to **0.25**.

The agent’s height is also quite a bit taller than the Ghost, but since the environment does not have a ceiling this won’t matter.

**3.**Change the **Speed**property of the Nav Mesh Agent component to **1.5**. The default speed of 3.5 meters per second is pretty fast for a ghost, and will make your game a little too difficult.

**4.**Change the **Stopping Distance** property of the Nav Mesh Agent component to **0.2**. You don’t need too much precision in how close to the waypoints the Ghosts get, so can increase the distance the Nav Mesh Agent is able to be from its destination and still consider itself arrived.

[Image: image]

**5.**Save your changes.

The Nav Mesh Agent is now set up, but it won’t do anything by itself. It needs to have its destination set, and to do this you need to write a script.

Mark step as complete

## 7. Create a New WaypointPatrol Script

Q&A (0)

The Ghosts in your game are going to move by patrolling in a loop through a collection of waypoints, so it makes sense to we’ll call this script WaypointPatrol. Don’t forget to save your changes as you go.

To create the new script:

In the Project window, go to **Assets > Scripts**.

**1.**Right-click on the Scripts folder and select **Create > C# Script**. Name the new script “**WaypointPatrol**”.

**2.**In the Hierarchy, select the Ghost GameObject.

**3.**Drag the newly created WaypointPatrol script from the Project window into the Inspector window to add it as a to Ghost as a component.

**4.**Double click on the WaypointPatrol script to open it for editing.

Mark step as complete

## 8. Set the Destination of the Nav Mesh Agent

Q&A (0)

Before you start editing the script, let’s think briefly about what it needs to do. It should set the destination of the Nav Mesh Agent both when the Scene is first loaded and whenever the Ghost has reached its destination. In order to know when it has reached its destination, you’ll need to check every frame.

Let’s start editing your new script:

**1.**You’re going to need both Start and Update methods in this script, so it doesn’t make sense to remove them as you’ve done before. Instead, just remove the **comments** above the Start and Update methods.

The script should now look like this:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WaypointPatrol : MonoBehaviour
{
    void Start ()
    {

    }

    void Update ()
    {

    }
}
```

**2.**You’re going to need to tell the Nav Mesh Agent what destination it should have, so you’ll need a reference to it. In order to do any scripting with the Nav Mesh Agent, you need to include its namespace.

At the top of the script with the other using directives, add the following code:

```csharp
using UnityEngine.AI;
```

Including the AI namespace will give you access to the **NavMeshAgent class**.

**3.**Above the Start method, add the following:

```csharp
public NavMeshAgent navMeshAgent;
```

This public reference to the component will enable you to assign the Nav Mesh Agent reference in the Inspector window.

**4.**Next, you need to set the waypoints that the Ghost should patrol. A Nav Mesh Agent’s destination is a Vector3 — a position in world space.  But if you made the waypoints Vector3s, you will have to manually set all the positions and hope that the numbers you use are accurate.

Instead, it makes sense to have a collection of empty GameObjects and use their positions as the waypoints. These GameObjects can be moved around the scene much more easily, making any changes you want to make much more simple. Rather than having references to a collection of GameObjects though, you can just have references to their Transform components. You could simply have several public Transform variables and then set each one separately in the Inspector window, but this doesn’t allow much flexibility in how many waypoints each Ghost can have.

Instead, you can use something called an **array**.  An array is a basic collection of variables that exist together.  They are defined using square brackets.

Add the following line just below the navMeshAgent variable declaration

```csharp
public Transform[] waypoints;
```

This line of code is declaring a public variable called **waypoints**, which is an array of Transforms.

**5.**Next, add a line to your Start method to set the initial destination of the Nav Mesh Agent:

```csharp
navMeshAgent.SetDestination(waypoints[0].position);
```

Mark step as complete

## 9. How Do Arrays Work?

Q&A (0)

Let’s explore this to understand a little more about how arrays work:

Your lline of code is calling the SetDestination method of your Nav Mesh Agent Component.  It takes a Vector3 as a parameter, and so you are using the position property of the first waypoint Transform in the array.

The individual things that make up an array are called **elements**. Individual elements in an array are accessed using their index in square brackets. Think of the index as the number of elements you need to skip over from the start of the array to get to the element you want. You don’t need to skip over any elements to access the first element, so its index is **0**.

Mark step as complete

## 10. Add Additional Destinations

Q&A (0)

Let’s carry on adding to your script:

**1.**Your Ghost needs to move on to the next waypoint when it reaches the last one it had set as its destination. The easiest way to track which waypoint is next is by storing the current index of the waypoint array.

Below the waypoints array declaration, add the following code:

```csharp
int m_CurrentWaypointIndex;
```

**2.**Next, let’s move on to the Update method so you can use this index.

In the Update method you need to perform a check — you want to know if the Nav Mesh Agent has arrived at its destination. An easy way to check this is to see whether the remaining distance to the destination is less than the stopping distance you set in the Inspector window earlier.

Add the following if statement to the Update method:

```csharp
if(navMeshAgent.remainingDistance < navMeshAgent.stoppingDistance)
        {

        }
```

**3.**Now you need to update the current index, and then use it to set the Nav Mesh Agent’s destination. To do this you will use a new operator called the **remainder operator** which is represented by the percentage character: **%**.

Add the following code within the if statement:

```csharp
m_CurrentWaypointIndex = (m_CurrentWaypointIndex + 1) % waypoints.Length;
```

The remainder operator takes whatever is to its left and divides it by whatever is to its right, then returns the remainder. For example, 3 % 4 would return 3 (because 4 goes into 3 zero times with 3 left over).  5 % 4 would return 1 (because 4 goes into 5 once with 1 left over).

Your code is saying, “Add one to the current index, but if that increment puts the index equal to the number of elements in the waypoints array then instead set it to zero.”  It would be set to zero in this circumstance, because the remainder when dividing any number by itself is zero.

**4.**Now that you have incremented the index (and looped it back to zero when necessary), you need to use it.  Add the following below the index incrementation:

```csharp
navMeshAgent.SetDestination (waypoints[m_CurrentWaypointIndex].position);
```

This is exactly what you did in the Start method, except instead of using zero as the index, you’re using whatever waypoint the Ghost is currently up to as the index.

**5.**That’s it! Your completed script should look like this:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class WaypointPatrol : MonoBehaviour
{
    public NavMeshAgent navMeshAgent;
    public Transform[] waypoints;

    int m_CurrentWaypointIndex;

    void Start ()
    {
        navMeshAgent.SetDestination (waypoints[0].position);
    }

    void Update ()
    {
        if(navMeshAgent.remainingDistance < navMeshAgent.stoppingDistance)
        {
            m_CurrentWaypointIndex = (m_CurrentWaypointIndex + 1) % waypoints.Length;
            navMeshAgent.SetDestination (waypoints[m_CurrentWaypointIndex].position);
        }
    }
}
```

**6.**Save the script and return to Unity Editor.

Mark step as complete

## 11. Assign the Nav Mesh Agent Reference to the Ghost Prefab

Q&A (0)

You should be able to see in the Inspector window that you need to assign the Nav Mesh Agent reference and some Transforms for the waypoints. The Nav Mesh Agent reference will be the same for every instance of the Prefab, so you can assign that now. However, the waypoints will be different for every Ghost and so should not be part of the Prefab — not only that, but the waypoints will be part of the Scene so cannot be referenced by the Ghost Prefab.

**1.**In the Hierarchy window, select the **Ghost**GameObject.

**2.**Drag the name of the**Nav Mesh Agent** component in the Inspector window down to the Nav Mesh Agent field on the Waypoint Patrol script. This will assign the Nav Mesh Agent reference.

[Image: image]

**3.**Save the Ghost Prefab, and return to the Scene.

**4.**Let’s check that your Ghost’s Observer script has the references it needs. In the Hierarchy, expand the Ghost GameObject and select the **PointOfView**child GameObject.

**5.**Drag the JohnLemon GameObject from the Hierarchy window onto the **Player**field of the Observer script to assign its Transform.

**6.**Next, click the circle select button and assign the GameEnding field. Since there is only one GameEnding Component in the Scene, there will only be one option for you to select.

Your enemies are now pretty close to complete! You just need to add more Ghosts and assign their waypoints, then add a couple more static Gargoyles.

Mark step as complete

## 12. Place Ghosts in your Scene

Q&A (0)

Now you’re ready to add enemies to your Scene! First, create four duplicate Ghosts and populate the level with moving enemies:

**1.**In the Hierarchy window, collapse and then select the **Ghost**GameObject. Duplicate the GameObject by pressing Ctrl + D (Windows) or CMD + D (macOS) until you have four copies of Ghost.

**2.**The first Ghost should be moving back and forward near the room JohnLemon starts in. In the Inspector, set the position of the Ghost named **Ghost** to (**-5.3**, **0**, **-3.1**).

**3.**The second Ghost is going to be moving back and forth down a long corridor, so that JohnLemon has to duck into side rooms to get past. Set the position of the Ghost named **Ghost (1)** to (**1.5**, **0**, **4**).

**4.**The third Ghost will be circling the table in one of the dining rooms. Set the position of the Ghost named **Ghost (2)**to (**3.2**, **0**, **6.5**).

**5.**The final Ghost will be moving around in the bedroom near the exit, so JohnLemon gets caught if he goes the wrong way. Set the position of the Ghost named **Ghost (3)** to (**7.4**, **0**, **-3**).

Now you have your Ghosts positioned, you need to make and position their waypoints.

Mark step as complete

## 13. Create and Position the Ghost Waypoints

Q&A (0)

The waypoints just need to be empty GameObjects, since you’re only using their Transform components and all GameObjects have a Transform. To be as efficient as possible, you’re going to create all the waypoints, and then position and assign them.

To set up and assign the waypoints:

**1.**In the Hierarchy window, click on the Create button and select **Create Empty**.

**2.**Rename the newly created empty GameObject to “**Waypoint**”.

**3.**Duplicate the Waypoint GameObject nine times to create ten waypoints in total — Waypoint through to Waypoint (9).

**4.**In the Hierarchy, select the **Ghost** GameObject.

**5.**In the Inspector, scroll down until the **Waypoint Patrol Component** is visible.

**6.**Drag the **Waypoint**GameObject from the Hierarchy window onto the name of the Waypoints field to add it to the array.

**7.**Drag the **Waypoint (1)** GameObject onto the name of the Waypoints field to add it to the array as well.

**8.**Your first Ghost has two waypoints in its array, but you need to position them. The Ghost will be moving back and forward through the starting room.

- In the Inspector, set the position of **Waypoint** to (**-5.3**, **0**, **6.7**).
- Set the position of **Waypoint (1)** to (**-5.5**, **0**, **-4.5**).

**9.**The second Ghost is going to be moving up and down the corridor with side rooms. Select the **Ghost (1)** GameObject and assign **Waypoint (2)**and **Waypoint (3)** to its Waypoints array.

- Set the position of **Waypoint (2)** to (**1.2**, **0**, **7.7**).
- Set the position of **Waypoint (3)** to (**0.9**, **0**, **-3.5**).

**10.**The third Ghost is going to be circling the table in the dining room, and will need more waypoints.

- Select the **Ghost (2) GameObject**and assign **Waypoint (4)**, **Waypoint (5)**, **Waypoint (6)** and **Waypoint (7)** to its Waypoints array.
- Set the position of **Waypoint (4)** to **(3.2, 0, 5.6)**.
- Set the position of **Waypoint (5)** to **(3.2, 0, 12.3)**.
- Set the position of **Waypoint (6)** to **(6.5, 0, 12.3)**.
- Set the position of **Waypoint (7)** to **(6.5, 0, 5.6)**.

**11.**The final Ghost is in the bottom right bedroom. Select the **Ghost (3)**GameObject and assign **Waypoint (8)** and **Waypoint (9)** to its Waypoints array.

- Set the position of **Waypoint (8)** to **(3.2, 0, -5)**.
- Set the position of **Waypoint (9)**to **(7.4, 0, -2)**

That’s it — your ghosts are finished!

Mark step as complete

## 14. Place Gargoyles in your Scene

Q&A (0)

Next, place three Gargoyles in your level:

**1.**Duplicate the **Gargoyle** GameObject twice, to make three Gargoyles in total.

**2.**You’ve already positioned the first Gargoyle. The second one should go at the bottom of the long corridor, so JohnLemon can’t go too far down.

- Set the position of **Gargoyle (1)**to **(-2.6, 0, -8.5)**.
- Set the rotation of **Gargoyle (1)** to **(0, 30, 0)**.

**3.**The third Gargoyle should go in the corner of the corridor next to the dining room, so JohnLemon gets caught if he goes the wrong way.  Since it’ll be the same corner as the first Gargoyle you won’t need to change the rotation, but you still need to adjust the position.

- Set the position of **Gargoyle (2**) to **(-4.8, 0, 10.6)**.

Now your level is populated with a range of enemies to make JohnLemon’s escape more challenging.

Mark step as complete

## 15. Clean Up the Hierarchy

Q&A (0)

There’s one final thing for you to do before you’re completely finished with enemies and their waypoints: tidy them up. The Hierarchy window is currently looking a bit cluttered:

[Image: image]

The best solution is to create some empty GameObjects that can act as parents to the enemies and waypoints. This will enable you to expand or collapse them as required, keeping the Hierarchy window nice and tidy.

To tidy the Hierarchy:

**1.**In the Hierarchy window, create an empty GameObject.  Rename it to “**Enemies**”.

**2.**In the Inspector, set the position of **Enemies** to **(0, 0, 0)**. This will act as a parent to all the Ghost and Gargoyle GameObjects.

**3.**Hold the Ctrl key (Windows) or CMD key (macOS) and in the Hierarchy window click on each of the Ghosts and Gargoyles.  When they are all selected, drag them onto the **Enemies** GameObject to make it their parent.

[Image: image]

Now you can expand and collapse the enemies whenever you want to. Next, you need to do the same for the waypoints.

**4.**In the Hierarchy window, create an empty GameObject. Rename it to “**Waypoints**”.

**5.**In the Inspector, set the position of **Waypoints** to **(0, 0, 0)**. This will act as a parent to all the Waypoint GameObjects.

**6.**Hold the Ctrl key (Windows) or CMD key (macOS) and in the Hierarchy window click on each of the Waypoints.  When they are all selected, drag them onto the **Waypoints**GameObject to make it their parent.

[Image: image]

That’s it, you’ve tidied up your enemies!

Save the Scene and enter Play Mode to give it a test. When you’re finished, make sure to exit Play Mode.

Mark step as complete

## 16. Summary

Q&A (0)

In this tutorial, we finished creating enemies for your game. It’s almost complete! It’s a bit quiet though — there’s some buzzing coming from the lights, but it’d be nice to have more sound to enhance the atmosphere. In the next tutorial, you’ll be adding more audio to your game.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
