[Image: image]

# 2D Game Kit Advanced Topics

Tutorial

intermediate

+0XP

60 mins

192

(18)

Unity Technologies

[Image: 2D Game Kit Advanced Topics]Summary

The following sections consist of deeper information on the Game Kit systems and may require more Unity knowledge. Some topics require knowledge of C#.

Languages available:

EnglishEnglish日本語English

## 1. RandomAudioPlayer

Q&A (0)

This script allows you to play a random sound chosen from a list of user-assigned clips. You can see it being used to control different sounds on the Ellen prefab (check under the **SoundSources** child GameObject of Ellen). For example, looking at **FootstepSource**, you can see that it defines a list of four footstep sounds that the footstep randomly picks from, with an added pitch randomization. That example also includes the use of overrides per specific tile - an override for the Alien Tile plays a different footstep sound than if Ellen was walking on a grassier surface. To add overrides to GameObjects that aren't a tilemap, check the **AudioSurface** section below.

#### Scripting side

On the scripting side, **RandomAudioPlayer** has a PlayRandomSound function that is called by other scripts when a sound needs to be played (e.g. the footstep sound is triggered by the function PlayFootstep in the **PlayerController**, while the function itself is called by the Animation Clip on the frame where the feet make contact with the ground.)

This function can take a TileBase to choose override sounds (e.g. footsteps use the current surface the Player is on, or a bullet colliding uses the Tile of the surface it just collided with).

#### AudioSurface

**AudioSurface** is a script you can add to any GameObject that is not a tilemap. It allows you to define which Tile should be used when the Audio Player looks for an override sound (e.g. a stone box would use an **AudioSurface** with the Alien Tile as the tile setup, so walking on it would trigger the "stone footstep" sound and not the normal "ground" sound).

Mark step as complete

## 2. VFXController

Q&A (0)

This component is used to spawn VFX prefabs from a pool. Deactivate them and return them to the pool after a lifetime has expired.

[Image: image]

**VFXController** is an Asset in the Project folder (inside the Resources folder) which allows you to list all the visual effects the game uses. It creates a pool of instances of those visual effects to be used, moving the cost of instantiating the VFX prefab at the beginning of the game instead of every time they are used.

Scripts like the **PlayerController** or the **StateMachineBehaviour** **TriggerVFX** then trigger those visual effects by name.

Like the **Audio Player**, it also allows you to define overrides per tile. For example, you can set an override to the visual effect used for each footstep depending on which surface the footstep lands on.

In the case of the **VFXController** shipped with this project, you can see an example of that on the **DustPuff VFX** that uses an override for when the Player walks on stone.

The overriding tile is given by the script that triggers the visual effect (e.g. footstep pass the current surface, or a bullet hitting a surface passes whichever tile is in that surface).

*It is possible to setup the override tile on non-tilemap GameObjects; refer to the sound documentation Sounds.txt for how to setup which override a GameObject should correspond to.*

Mark step as complete

## 3. Data Persistence

Q&A (0)

The data persistence system allows you to save some data during a playthrough, to keep some information on what the Player already did.

Without it, as each zone is a new Scene, entering a zone loads the "default" state of that zone (as it is designed in the editor), but any permanent action the Player took (like grabbing a key or a weapon) would be undone.

#### Usage in Editor

The data system works through a scripting interface called IDataPersister.

Objects implementing this interface (like the built-in InventoryItem, HubDoor, PlayerInput, etc.) can write and read data from the **PersistentDataManager**.

MonoBehaviours that implement the interface have a **Data Settings** foldout that appears at the bottom of their Inspector. The settings comprise of:

- **Data Tag**: This is a unique identifier for the GameObject, used by the manager to link data to that GameObject. It can be anything: some built-in components use an auto-generated Unique ID, but it could also be a manually typed name, like "Zone_3_key" or "Quest_Item_Card".
- **Persistence Type**: There are four types of persistence:
- **Don't Persist**: This allows disabling persistence. This is useful for GameObjects that need to be reset on Scene change (e.g. you may want a door to close again when restarting a level).
- **Read Only**: This GameObject can only read data, not write to it. A way to use this is to have a GameObject with **Write Only** (see below) with the same **Data Tag**. This GameObject uses the data that the other GameObject writes for that tag, but is not able to write over it.
- **Write Only**: The GameObject can write data but can't read from it. See **Read Only** above for example of use.
- **Read Write**: This is the most common case of use. The GameObject reads and writes data with its given **Data Tag**.

#### Data Saving/Loading cycle

SaveData is called on all instances of IDataPersister in the scene before a scene transition out.

LoadData is called on all instances of IDataPersister in the scene after a new scene was loaded.

It is possible to manually save data at any time by calling PersistentDataManager.SetDirty(this) on any IDataPersister.

#### Example of use in code

The way that the data manager can be used in code is by reading its associated data when it's enabled/started and react to it.

For example, the inventory item writes its state to the persistent data (active or not). So when the scene is loaded, the inventory item retrieves the data associated to its tag. If a false value is saved, that means that the GameObject had already been retrieved and it can disable itself.

Another example would be a door saving its state. When the scene is loaded and data is read, it can set itself to the desired state (e.g. open/closed).

Mark step as complete

## 4. SceneLinkedSMB

Q&A (0)

SceneLinkedSMB is a class that extends how StateMachineBehaviours work. It allows for Behaviour on states in the Animator state machine to keep a reference to the MonoBehaviour. Although SceneLinkedSMBs can be used wherever you need to reference a specific MonoBehaviour, they were designed with the idea of separating logic and functionality. An animator controller contains a state machine which is ideal for controlling flow of execution. Using SceneLinkedSMBs you can make calls to public functions on a MonoBehaviour allowing it to control functionality because it can more easily obtain scene references. In this way, SceneLinkedSMBs can control logic as part of a state machine and the MonoBehaviours they are linked to control functionality.

#### Usage of SceneLinkedSMB

To code a new Behaviour using the SceneLinkedSMB, you need to:

- Make your new class inherit SceneLinkedSMB. As the class is a Generic, you need to specify the type of the MonoBehaviour that it should hold. For example: public class EnemyAttackState: SceneLinkedSMB<Enemy>
- Initialize on every GameObject with an animator using that state. In the above example, we could add the following line to the Start() function of Enemy class: SceneLinkedSMB<Enemy>.Initialise(animator, this); In this example, animator is a reference to the animator with a state which has a SceneLinkedSMB<Enemy> on. Note that you only need to call this once, even if you have 10 differents scripts on multiples states. As long as they all inherit from SceneLinkedSMB<Enemy> they will all get initialized.
- Override any state functions you need. More functions are added to SceneLinkedSMB to allow for more specific control of when functionality happens. In your class you can access a protected member called m_MonoBehaviour that has the same type as the class’s generic type parameter. So continuing our example, m_MonoBehaviour would be of type Enemy.

#### Example

**Enemy.cs**

```csharp
public class Enemy: MonoBehaviour
{
    Animator animator;

    void Start()
   {
        animator = GetComponent<Animator>();
        SceneLinkedSMB<Enemy>.Initialise(animator, this);
    }

    public void TrickerAttack()
   {
    // ...
    }
}
```

**EnemyAttackState.cs**

```csharp
public class EnemyAttackState: SceneLinkedSMB<Enemy>
{
    public override void OnSLStateEnter (Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
    {
        // m_MonoBehaviour is of type Enemy
        m_MonoBehaviour.TrickerAttack ();
    }
}
```

Mark step as complete

## 5. Object Pooling in the Gamekit

Q&A (0)

The Game Kit uses an extensible object pooling system for some of its systems. The following explanation is only relevant to those wishing to extend the system for their own use and is not required knowledge for working with the Game Kit.

In order to extend the object pool system you must create two classes - one which inherits from **ObjectPool** and the other from **PoolObject**. The class inheriting from ObjectPool is the pool itself while the class inheriting from PoolObject is a wrapper for each prefab in the pool. The two classes are linked by generic types. The ObjectPool and PoolObject must have the same two generic types: the class that inherits from ObjectPool and the class that inherits from PoolObject in that order. This is most easily shown with an example:

public class SpaceshipPool: ObjectPool<SpaceshipPool, Spaceship>

{

…

}

public class Spaceship: PoolObject<SpaceshipPool, Spaceship>

{

…

}

This is so that the pool knows the type of objects it contains and the objects know what type of pool to which they belong. These classes can optionally have a third generic type. This is only required if you wish to have a parameter for the PoolObject’s WakeUp function which is called when the PoolObject is taken from the pool. For example, when our spaceships are woken up, they might need to know how much fuel they have and so could have an additional float type as follows:

public class SpaceshipPool: ObjectPool<SpaceshipPool, Spaceship, float>

{

…

}

public class Spaceship: PoolObject<SpaceshipPool, Spaceship, float>

{

…

}

By default a **PoolObject** has the following fields:

- **inPool**: This bool determines whether or not the PoolObject is currently in the pool or is awake.
- **instance**: This GameObject is the instantiated prefab that this PoolObject wraps.
- **objectPool**: This is the object pool to which this PoolObject belongs. It has the same type as the ObjectPool type of this class.

A **PoolObject** also has the following virtual functions:

- **SetReferences**: This is called once when the PoolObject is first created. Its purpose is to cache references so that they do not need to be gathered whenever the PoolObject is awoken, although it can be used for any other one-time setup.
- **WakeUp**: This is called whenever the PoolObject is awoken and gathered from the pool. Its purpose is to do any setup required every time the PoolObject is used. If the classes are given a third generic parameter then WakeUp can be called with a parameter of that type.
- **Sleep**: This is called whenever the PoolObject is returned to the pool. Its purpose is to perform any tidy up that is required after the PoolObject has been used.
- **ReturnToPool**: By default this simply returns the PoolObject to the pool but it can be overridden if additional functionality is required.

An **ObjectPool** is a MonoBehaviour and can therefore be added to GameObjects. By default it has the following fields:

- **Prefab**: This is a reference to the prefab that is instantiated multiple times to create the pool.
- **InitialPoolCount**: The number of PoolObjects that are created in the Start method.
- **Pool**: A list of the PoolObjects.

An **ObjectPool** also has the following functions:

- **Start**: This is where the initial pool creation happens. You should note that if you have a Start function in your ObjectPool it effectively hides the base class version.
- **CreateNewPoolObject**: This is called when PoolObjects are created and calls their SetReferences and then Sleep functions. It is not virtual, so it cannot be overridden but it is protected and can therefore be called in your inheriting class if you wish.
- **Pop**: This is called to get a PoolObject from the pool. By default it searches for the first one that has the inPool flag set to true and return that. If none are true it creates a new one and returns that. It calls WakeUp on whichever PoolObject is going to be returned. This is virtual and can be overridden.
- **Push**: This is called to put a PoolObject back in the pool. By default it just sets the inPool flag and calls Sleep on the PoolObject but it is virtual and can be overridden.

For a full example of how to use the object pool system, see the BulletPool documentation and scripts.

#### BulletPool

The **BulletPool** MonoBehaviour is a pool of **BulletObjects**, each of which wraps an instance of a bullet prefab. The BulletPool is used for both Ellen and enemies but is used slightly differently for each. For Ellen there is a BulletPool MonoBehaviour attached to the parent GameObject with the Bullet prefab set as its Prefab field. The other use of BulletPool is in the EnemyBehaviour class. It uses the GetObjectPool static function to use BulletPools without the need to actively create them.

The **BulletPool** class has the following fields:

- **Prefab**: This is the bullet prefab you wish to use.
- **Initial Pool Count**: This is how many bullets are created in the pool to start with. It should be as many as you expect to be used at once. If more are required they are created at runtime.
- **Pool**: This is the BulletObjects in the pool. This is not shown in the inspector.

The **BulletPool** class has the following functions:

- **Pop**: Use this to get one of the BulletObjects from the pool.
- **Push**: Use this to put a BulletObject back into the pool.
- **GetObjectPool**: This is a static function that finds an appropriate BulletPool given a specific prefab.

When getting a bullet from the pool it comes in the form of a **BulletObject**. The BulletObject class has the following fields:

- **InPool**: Whether or not this particular bullet is in the pool or being used.
- **Instance**: The instantiated prefab.
- **ObjectPool**: A reference to the BulletPool this BulletObject belongs to.
- **Transform**: A reference to the Transform component of the instance.
- **Rigidbody2D**: A reference to the Rigidbody2D component of the instance.
- **SpriteRenderer**: A reference to the SpriteRenderer component of the instance.
- **Bullet**: A reference to the Bullet script of the instance.

The **BulletObject** has the following functions:

- **WakeUp**: This is called by the BulletPool when its Pop function is called.
- **Sleep**: This is called by the BulletPool when its Push function is called.
- **ReturnToPool**: This should be called when you are finished with a particular bullet. It calls the Push function of its BulletPool and so calls its Sleep function.

Mark step as complete

## 6. Behaviour Tree

Q&A (0)

**Note: This is a scripting-only system. You need at least basic knowledge in how scripts and C# work in Unity to understand how it works and how to use it**

As the name implies, Behaviour Trees are a way to code behaviour using a tree of actions. They are used in the Game Kit to control the behaviour of AI for enemies and the boss battle sequence.

A visual example of a Behaviour Tree is shown below:

[Image: image]

#### Theory

During each update of the game, the tree is "ticked", meaning it goes through each child node of the root, going further down if said node has children, etc.

Each node has associated actions, and returns one of three states to its parent:

- **Success**: the node successfully finished its task.
- **Failure**: the node failed the task.
- **Continue**: the node didn't finish the task yet.

Returned state is used by each node parent differently.

*For example:*

- ***Selector** makes the next child active if the current one returns **Failure** or **Success**, and keeps the current one active if it returns **Continue**.*
- ***Test** nodes call their child nodes and return the child state if the test is true, or return **Failure** without calling their child nodes if the test is false.*

#### Game Kit Implementation

The way Behaviour Trees are used in the game kit is through script. Here is an example of a very simple behaviour tree:

First, we need to add **using BTAI;** at the top of the file.

Root aiRoot = BT.Root();

aiRoot.Do(

BT.If(TestVisibleTarget).Do(

BT.Call(Aim),

BT.Call(Shoot)

),

BT.Sequence().Do(

BT.Call(Walk),

BT.Wait(5.0f),

BT.Call(Turn),

BT.Wait(1.0f),

BT.Call(Turn)

)

);

**aiRoot** should be stored in the class as a member, because you need to call **aiRoot.Tick()** in the **Update** function so that Tree actions can be executed.

Let's walk through how the **Update** works in the **aiRoot.Tick()**:

- First, we test if the function **TestVisibleTarget** returns true. If it does, it goes on to execute the children, which are calling the functions **Aim** and **Shoot**
- If the test returns false, the **If** node returns **Failure** and the root then goes to the next child. This is a **Sequence**, which starts by executing its first child
- This calls the function **Walk**. It returns **Success** so that the **Sequence** sets the next child as active and executes it
- The **Wait** node executes. Because it has to wait for 5 seconds and was just called for the 1st time, it hasn't reached the wait time, so it returns **Continue**
- Because the Sequence receives a **Continue** state from its active child, it doesn't change the active child, so it starts from that child on the next **Update**
- Once the **Wait** node has been updated enough to reach its timer, it returns **Success** so that the sequence goes to the next child.

#### Nodes List

#### Sequence

Execute child nodes one after another. If a child returns:

- **Success**: the sequence ticks the next child on the next frame.
- **Failure**: the sequence returns to the first child on the next frame.
- **Continue**: the sequence calls that node again on the next frame.

#### RandomSequence

Execute a random child from its list of children every time it is called. You can specify a list of weights to apply to each child as an int array in the constructor, to make some children more likely to be picked.

#### Selector

Execute all children in order until one returns **Success**, then exit without executing the remaining children nodes. If none return **Success** then this node returns **Failure.**

#### Call

Call the given function, which always returns **Success.**

**If**

Call the given function.

- If it returns true, it calls the current active child and return its state.
- Otherwise, it returns **Failure** without calling its children

**While**

Return **Continue** as long as the given function returns true (so the next frame when the tree is ticked, it starts from that node again without evaluating all the previous nodes).

Children are executed one after another.

Returns **Failure** when the function returns false and the loop is broken.

#### Condition

This node returns **Success** if the given function returns true, and returns **Failure** if false.

Useful when chained with other nodes that depend on their children’s result (e.g Sequence, Selector.)

**Repeat**

Executes all child nodes a given number of times consecutively.

Returns **Continue** until it reaches the count, where it returns **Success.**

**Wait**

Returns **Continue** until the given time has been reached (starting when first called), where it then returns **Success.**

**Trigger**

Allows the setting of a trigger (or unsetting of a trigger if the last argument is set to false) in the given animator. Always returns **Success.**

**SetBool**

Allows setting the value of a Boolean Parameter in the given animator. Always returns **Success**

**SetActive** Set active/inactive a given GameObject. Always returns **Success.**

Mark step as complete

## Complete this Tutorial

Mark all steps complete
