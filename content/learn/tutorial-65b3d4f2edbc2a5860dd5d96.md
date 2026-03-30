[Image: image]

# Learn entities with HelloCube

Tutorial

intermediate

+10XP

30 mins

7

(196)

Unity Technologies

[Image: Learn entities with HelloCube]Summary

This HelloCube tutorial is a beginner-friendly entry point for the Data-Oriented Technology Stack (DOTS). In this tutorial, you'll learn the fundamentals of the Entities package, a core piece of DOTS, which implements Entity Component System (ECS) architecture.

By the end of this tutorial, you'll be able to do the following:

- Bake a subscene in order to create entities from GameObjects.
- Spawn entities from prefabs in code.
- Code using the Entities API to manipulate entities.

Resources

- [Hello.zip](https://unity-connect-prd.storage.googleapis.com/20240214/8ab3dde3-ae9e-41df-8082-7f1d735e77ef/Hello.zip?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774933292004)

Languages available:

EnglishEnglish한국어English

## 1. Overview

Q&A (0)

This tutorial introduces the basics of using [the Entities package](https://docs.unity3d.com/Packages/com.unity.entities@1.2/manual/concepts-intro.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774933292004) and covers how to create entities and manipulate them in systems.

In this tutorial, you’ll spawn some cube entities, and then you’ll rotate them with system code.

This tutorial is a simplified version of the HelloCube samples from the [Entities samples repository](https://github.com/Unity-Technologies/EntityComponentSystemSamples/).

Mark step as complete

## 2. Before you begin

Q&A (0)

To complete this tutorial, you should already be comfortable with C# and Unity GameObjects.

If you are new to Entities and the rest of the Data-Oriented Technology Stack (DOTS), the following links provide some background:

- [**Entities Component System concepts**](https://docs.unity3d.com/Packages/com.unity.entities@1.2/manual/concepts-intro.html?ampDeviceId=92c91bc4-9bf1-4741-9062-ee22bfe0f504&ampSessionId=1774844981984&ampTimestamp=1774933292004)
- [**Learning DOTS**](https://github.com/Unity-Technologies/EntityComponentSystemSamples#learning-dots)

#### Set up your Unity project

To set up a Unity project for this tutorial, follow these instructions:

**1.**  [Create a new Unity project](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) using the **3D (URP) Template**.

**2.**  [Install the **Entities Graphics package** via the Package Manager](https://learn.unity.com/tutorial/project-setup-processes#60ed7a6aedbc2a002520b6ec).

You’ll need the Entities Graphics package to render entities, and installing Entities Graphics will also automatically install the Entities package itself as a dependency.

Mark step as complete

## 3. Create a subscene for baking

Q&A (0)

Entities can be created in code or loaded from scenes. In this first step, you’ll load entities from a scene.

Entities can't be added directly to a Unity scene, but if a Unity scene is nested as a subscene within another, a process called **baking**will create an entity equivalent of each GameObject in the subscene. When the subscene is loaded at runtime, only the baked entities will be loaded, not the GameObjects.

For an overview of baking, watch the video below:

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

To create a subscene, follow these instructions:

**1.**  Right-click (macOS: **Ctrl**+click) in the **Hierarchy** window and select **New Sub Scene** > **Empty Scene**. Accept the default name, “New Sub Scene”.

A new **New Sub Scene** GameObject will appear in the **Hierarchy** window that has a **Sub Scene** component, and this **Sub Scene** component references a **New Sub Scene** scene asset

**2.**  In the **Hierarchy** window, check the checkbox on the **New Sub Scene** GameObject to open the new subscene for editing.

Mark step as complete

## 4. Add a cube to the subscene

Q&A (0)

In the **Hierarchy** window, the **New Sub Scene** GameObject has a checkbox. When the checkbox is enabled, the subscene is open for editing, and the content of the subscene will appear under the **New Sub Scene**GameObject. When the checkbox is disabled, the subscene is closed, and the content of the subscene won’t appear in the **Hierarchy** window.

The subscene starts out empty, but let’s add a cube by right-clicking the **New Sub Scene**GameObject, then selecting **3D Object** > **Cube**. This adds a Cube GameObject with **Transform**, **Mesh Filter**, **Mesh Renderer**, and **Box Collider** components.

When the subscene is open, the new cube will appear in the **Hierarchy** window as a child GameObject of **New Sub Scene**.

**Note**: The new cube is actually a member of the subscene rather than a child of the **New Sub Scene**GameObject.

Every time you edit the content of a subscene by adding or removing GameObjects or modifying their components, you trigger a re-bake. Baking does the following things in this order:

1. For each GameObject in the subscene, baking creates an entity.
2. For each GameObject component that has an associated Baker class, the Baker’s Bake method is called. These Bake methods are able to add and set components on the entities.
3. The entities are baked into a file. It is these serialized entities that get loaded when a subscene is loaded at runtime.

Select the **Cube** GameObject in the subscene. At the bottom of the **Inspector** window there is an **Entity Baking Preview** section, which lists all the **Entity** components that baking has added to the entity created from this GameObject.

Because the Entities Graphics package provides Baker classes for the standard rendering components, you can see that the cube entity is given various entity rendering components, such as**Unity.Rendering.RenderMeshArray** and**Unity.Rendering.WorldRenderBounds**, among others.

The Unity.Physics package contains Baker classes for the standard physics components, including **Box Collider** components. Because we’re not concerned with collisions in this project, we haven’t included the Unity.Physics package, so the **Box Collider** component is effectively ignored by baking here, and we can safely remove it.

You now have a single cube entity that will be loaded from this subscene when you enter Play mode. Duplicate the cube a few times and reposition the new cubes so they don’t all overlap, and reposition the camera so that all of the cubes are clearly in view.

Mark step as complete

## 5. Add components to the cube entity

Q&A (0)

To specify that a cube should rotate at a certain rate, define a new component to add to the cubes. First, create a new file called **RotationSpeedAuthoring.cs** and add the following lines of code:

```csharp
using UnityEngine;
using Unity.Entities;
using Unity.Mathematics;

public struct RotationSpeed : IComponentData {
    public float RadiansPerSecond;  // how quickly the entity rotates
}
```

To add this component to an entity in baking, you'll define a new authoring MonoBehaviour and a Baker class. In the same file, add the following classes:

```csharp
public class RotationSpeedAuthoring : MonoBehaviour
{
    public float DegreesPerSecond = 360.0f;
}

class RotationSpeedBaker : Baker<RotationSpeedAuthoring>
{
    public override void Bake(RotationSpeedAuthoring authoring)
    {
        var entity = GetEntity(authoring, TransformUsageFlags.Dynamic);

        var rotationSpeed = new RotationSpeed
        {
            RadiansPerSecond = math.radians(authoring.DegreesPerSecond)
        };

        AddComponent(entity, rotationSpeed);
    }
}
```

**Note**: What you name your baker class is not really important. The important part is that you have a class that extends Baker<RotationSpeedAuthoring>.

In the Baker’s Bake method, you first call **GetEntity** to retrieve the entity being baked and pass the enum value **TransformUsageFlags.Dynamic** to specify that the entity needs the standard transform components, including **LocalTransform**. You then create a **RotationSpeed**value and add it as a new component to the entity.

**Note:** The **RotationSpeedAuthoring** MonoBehaviour specifies rotation speed in degrees per second, but the **RotationSpeed** IComponentData specifies rotation speed in radians per second, so the **Bake** method converts the degrees to radians. This demonstrates a very simple case in which the authoring data (what we specify in the subscene) and the runtime data (the baked entities that will be loaded at runtime) don't need to correspond exactly one-to-one.

Now that you’ve defined **RotationSpeedAuthoring**, add it to some (but not all) of the cube GameObjects in the subscene, and set each cube's **DegreesPerSecond** to a value between 180 and 360.

In the next step, you'll write the code to actually spin the cubes.

Mark step as complete

## 6. Make the cubes spin

Q&A (0)

To make our cubes spin, create a new script file called **CubeRotationSystem.cs** and add the following lines of code:

```csharp
using Unity.Entities;
using Unity.Transforms;
using Unity.Burst;

public partial struct CubeRotationSystem : ISystem
{
    [BurstCompile]
    public void OnUpdate(ref SystemState state)
    {
	// … we’ll later add the code to rotate the cubes here
    }
}
```

Unlike a MonoBehaviour, a system is not explicitly added into a scene. Instead, by default, each system is automatically instantiated when you enter Play mode, and so the **OnUpdate** of the **CubeRotationSystem** will be invoked once every frame. The **BurstCompile** attribute marks the **OnUpdate** to be Burst compiled, which is valid as long as the **OnUpdate** does not access any managed objects (which will be the case in this example).

**Note:** It's possible to read and write entities from MonoBehaviours or other code outside of systems, but doing so is generally not recommended because only systems are aware of the job safety checks.

To rotate the cubes, you need to do the following three things in the **OnUpdate** in the following order:

**1.**  Query for all entities that have a **LocalTransform** and **RotationSpeed** component.

**2.**  Loop through all entities matching the query.

**3.**  Modify the **LocalTransform**component of each of the entities to rotate them at a constant rate around the y-axis.

There are a few ways in the API to express this, but let’s use the most compact and convenient option. Add the following lines of code inside the system’s **OnUpdate**:

```csharp
// ...inside the OnUpdate of CubeRotationSystem
var deltaTime = SystemAPI.Time.DeltaTime;

// This foreach loops through all entities that have LocalTransform and RotationSpeed components.
// You need to modify the LocalTransform, so it is wrapped in RefRW (read-write).
// You only need to read the RotationSpeed, so it is wrapped in RefRO (read only).
foreach (var (transform, rotationSpeed) in
        SystemAPI.Query<RefRW<LocalTransform>, RefRO<RotationSpeed>>())
{
    // Rotate the transform around the Y axis.
    var radians = rotationSpeed.ValueRO.RadiansPerSecond * deltaTime;
    transform.ValueRW = transform.ValueRW.RotateY(radians);
}
```

**Note**: The SystemAPI.Query is a special method processed by source generation and which can only be called in the **in** clause of a foreach loop. In the generated code, a query is created and executed. When a **SystemAPI.Query** call includes more than one component type, it returns a tuple, so you wrap the transform and speed variables in parenthesis to [deconstruct the tuple](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/deconstruct) (a standard C# feature).

The **SystemAPI.Query**call performs a query for all entities that have both the **LocalTransform** and **RotationSpeed** components. The foreach loops over each entity matching the query, assigning a read-write reference to the **transform** variable and a read-only reference to the **rotationSpeed**variable. In the body of the loop, you can read and write the **LocalTransform** via the **ValueRW** (read write) property, and you can read the **RotationSpeed** via the **ValueRO** (read only) property. The **LocalTransform** method **RotateY** takes a radian value and returns a new rotated transform, which you assign back to the component.

Now when you enter Play mode, you'll see the cubes with a **RotationSpeed** component rotating at the rate set by **RotationSpeedAuthoring**.

Mark step as complete

## 7. Spawning entities from a prefab

Q&A (0)

To spawn cubes at runtime in a system, you need to bake the cube as a prefab. To do this, follow these instructions:

**1.**  Drag one of the rotating cube GameObjects from the subscene into the **Project** window to create a prefab asset, then delete the cubes from the subscene.

**2.**  Define a new authoring component, **SpawnerAuthoring.cs**, and add the following code:

```csharp
using Unity.Entities;
using UnityEngine;

public class SpawnerAuthoring : MonoBehaviour
{
    public GameObject CubePrefab;

    class Baker : Baker<SpawnerAuthoring>
    {
        public override void Bake(SpawnerAuthoring authoring)
        {
            // ...code to bake the prefab will go here
        }
    }
}

struct Spawner : IComponentData
{
    public Entity CubePrefab;
}
```

**Note**: Notice that the baker class is nested inside the authoring MonoBehaviour. This isn't required, but it’s arguably the cleanest organizational style.

**3.**  Create a new GameObject in the subscene, add the **SpawnerAuthoring** component to it, and set its **CubePrefab** field to reference the cube prefab.

**4.**  Add the following lines of code to the **SpawnerAuthoring**bake method:

```csharp
var entity = GetEntity(authoring, TransformUsageFlags.None);
var spawner = new Spawner
{
        Prefab = GetEntity(authoring.CubePrefab, TransformUsageFlags.Dynamic)
};
AddComponent(entity, spawner);
```

Because the spawner entity won’t be visible, it doesn’t need any **Transform**components, so **TransformUsageFlags.None** is specified in the first **GetEntity**call.

The second **GetEntity** call returns the baked entity equivalent of the prefab. Because the prefab represents the rendered cubes, it needs the standard **Transform**components, so **TransformUsageFlags.Dynamic**is specified in the call.

Now in the baked subscene, you have an entity with a **Spawn** component that references the baked entity form of the cube prefab.

**5.**  Create a new file, name it **SpawnSystem.cs**, and add the following lines of code:

```csharp
using Unity.Burst;
using Unity.Collections;
using Unity.Entities;
using Unity.Mathematics;
using Unity.Transforms;

public partial struct SpawnSystem : ISystem
{
    [BurstCompile]
    public void OnCreate(ref SystemState state)
    {
        state.RequireForUpdate<Spawner>();
    }

    [BurstCompile]
    public void OnUpdate(ref SystemState state)
    {
        state.Enabled = false;

        // ...we’ll add code to spawn the prefab here in a moment
    }
}
```

The **SpawnSystem** is a system that you only want to update once, so in the **OnUpdate**, the **Enabled** property of the **SystemState** is set to **false**, which prevents subsequent updates of the system.

Systems are usually instantiated and start updating even before the initial scene has loaded, yet here you don’t want this system to update until the entity with the **Spawner** component has been loaded from the subscene. By calling the **SystemState** method **RequireForUpdate<Spawner>()** in **OnCreate**, the system won’t update in a frame unless at least one entity with the **Spawner** component currently exists.

**6.**  To spawn instances of your cube prefab, add the following lines of code to **OnUpdate**:

```csharp
var prefab = SystemAPI.GetSingleton<Spawner>().CubePrefab;
var instances = state.EntityManager.Instantiate(prefab, 10, Allocator.Temp);
```

Because you can be sure that only one entity will have the **Spawner** component, you can access the component conveniently by calling **SystemAPI.GetSingleton<Spawner>()**.

**Note**: **GetSingleton<T>** will throw an exception if no entity has the component type or if more than one entity has the component type.

The **Instantiate**call creates 10 new instances of the prefab entity and returns a **NativeArray** of the new **Entity** IDs. In this case, the array is only needed for the duration of the **OnUpdate** call, so **Allocator.Temp** is used.

**7.**  To make sure the new cubes instances aren’t all drawn on top of each other, add the following lines of code to **OnUpdate**:

```csharp
// randomly set the positions of the new cubes
// (we'll use a fixed seed, 123, but if you want different randomness
// for each run, you can instead use the elapsed time value as the seed)
var random = new Random(123);
foreach (var entity in instances)
{
    var transform = SystemAPI.GetComponentRW<LocalTransform>(entity);
    transform.ValueRW.Position = random.NextFloat3(new float3(10, 10, 10));
}
```

Here a random number generator from the **Unity.Mathematics** package is used with a fixed, arbitrarily chosen seed of 123. In the loop, **SystemAPI.GetComponentRW** returns a read-write reference to each entity’s **LocalTransform**component, and via this reference, the **Transform** of the entity is set to a random position (in the range from 0 to 10 along each axis).

**8.** Remove the cubes that were added to the scene in the prior steps.

Now when you enter Play mode, you will see 10 cubes spawned, clustered near the origin.

[Image: image]Mark step as complete

## 8. More things to try

Q&A (0)

Following several steps of the HelloCube samples, you've created entities from code and through baking, and you've started using the basic API for accessing and manipulating entities in systems. Next, you can review additional HelloCube samples, which cover the following topics:

- Accessing entities in jobs
- Accessing GameObjects from systems and syncing their state with entities
- Parenting entities
- Enableable components

To follow the entire collection of HelloCube samples, visit [the HelloCube section of the Entity Component System Samples repository on GitHub](https://github.com/Unity-Technologies/EntityComponentSystemSamples/tree/master/EntitiesSamples/Assets/HelloCube).

Mark step as complete

## 9. Next steps

Q&A (0)

The next tutorial in this course will introduce you to Unity's C# job system, which allows you to write multithreaded code that fully utilizes multicore processors.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
