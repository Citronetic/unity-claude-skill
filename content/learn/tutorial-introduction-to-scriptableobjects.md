[Image: image]

# Introduction to ScriptableObjects

Tutorial

intermediate

+10XP

20 mins

0

Unity Technologies

[Image: Introduction to ScriptableObjects]Summary

ScriptableObjects are a special kind of script that is designed specifically to hold different types of data. Unlike traditional C# scripts, ScriptableObjects do not need to be, and in fact, cannot be, directly attached to GameObjects. In this tutorial, you will learn about ScriptableObjects and how to use them.

Languages available:

EnglishEnglishEnglish

## 1. Introduction to ScriptableObjects

Q&A (0)

Verified with: 2019.4

ScriptableObjects are a special kind of script that is designed specifically to hold different types of data. Unlike traditional C# scripts, ScriptableObjects do not need to be, and in fact, cannot be, directly attached to GameObjects. The reason for this is because ScriptableObjects are never tied to any one single object. Instead, the information they contain can be shared with any object and are easily accessible via other scripts. This makes ScriptableObjects ideal for sharing information between objects. While ScriptableObjects are not necessarily an advanced subject, understanding when and where they should be used can be. To learn about ScriptableObjects in more detail and understand why they are so helpful, please refer to this blog post about ScriptableObjects: [Making Cool Stuff with ScriptableObjects](https://blogs.unity3d.com/2017/11/20/making-cool-stuff-with-scriptableobjects/?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035042532) and this Unite Talk: [ScriptableObjects: What they are and how to use them](https://www.youtube.com/watch?v=VtuSKmfrFDU).

ScriptableObjects are excellent for projects that handle a lot of data that might change throughout production. The example below is a ScriptableObject that defines components for a kitchen (**Figure 01**).

[Image: image]

This ScriptableObject contains five different values that can be customized to describe the type of object it is defining. Any object in the Kitchen Configurator that can potentially contain drawers can access this ScriptableObject and get all of the information it needs to define the drawer option to the end-user. With this drawer example, the script accessing it would be able to tell:

- That it’s looking at Drawers (based on the Component Type value: Other values in this dropdown list include Appliance, Countertop, Doors, Surface, and Accessory)
- That these drawers can only be styled with Wood Materials (Material List)
- That these drawers have multiple style options (Has Swappable Mesh)
- That they must always be visible to the object they’re applied to (Visibility Option)
- That they do not have an accessory category (Not a Component Type of Accessory, and have Accessory Type set to None)

Using these values as definitions of an object’s appearance, designers can use the same ScriptableObject template to create data for virtually any kind of kitchen object. Below is the same ScriptableObject configured for a backsplash (**Figure 02**).

[Image: image]

The features of this object are immediately very different, even though the same data points are being used. Any script accessing this ScriptableObject would know:

- It is looking at a Surface
- This backsplash could be configured with Paint, Granite, or Tile material types
- It has no other style options
- It must always be visible on the wall
- It isn’t an accessory

Perhaps the most valuable aspect of ScriptableObjects is that they can be reconfigured at any time, and the changes will be propagated across to anything that is referencing it. For example, if the designer later decided that the backsplash really should only be shown with tile, the Material List option could be changed to reflect this, and all objects referencing the backsplash would automatically know.

The process of creating a ScriptableObject is virtually identical to creating any other script in Unity.

1. In the Project window, Right-click and select **Create** > **C# script**.

2. Give the script a descriptive name, ideally indicating that it is a ScriptableObject.

3. Double-click the script to open it up in Visual Studio (**Figure 03**).

[Image: image]

By default, all scripts in Unity are created as MonoBehaviours, which is the base class that gives programmers access to Unity’s API. ScriptableObjects are their own type of class, so the script must be updated to reflect the fact that it is a ScriptableObject.

4. Replace the word MonoBehavior on line 5 with ScriptableObject

5. Delete the void Start() and Update() methods, being sure to get the associated brackets. This would be lines 8-15 in the reference above (**Figure 04**).

[Image: image]

The ScriptableObject is now properly configured and is ready for any data that you might need to store. Any variable type can be used, but note that if you plan to reference GameObjects, they must be Prefabs, as ScriptableObjects cannot reference any Scene object.

For the sake of this example, we will create a simple food object.

6. On line 6, type:

```csharp
public string foodName;
```

7. On line 7, type:

```csharp
public int totalCalories;
```

8. On line 8, type:

```csharp
public bool needsCooking;
```

The final script should look as it does in the example below (**Figure 05**).

[Image: image]

At this point the ScriptableObject is usable; however, we want to be able to use this template object many times and it would be convenient to be able to create it in the same way a C# script is created.

9. Directly above the public class line, type (**Figure 06**):

```csharp
[CreateAssetMenu(menuName = "Create new food")]
```

[Image: image]

10. Save the script and return to Unity.

11. Right-click in the Project window and in the Create menu; you will now see an option to Create new food (**Figure 07**).

[Image: image]

12. Select **Create new food**, and name the object “*Bacon”*.

13. Select *Bacon*, and in the Inspector, fill in the details that the variables were created for (**Figure 08**).

[Image: image]Mark step as complete

## 2. Next Steps

Q&A (0)

ScriptableObjects are scripts designed to handle and store different types of data, including any variable type. ScriptableObjects are beneficial when used for projects not only requiring data organization and management, but also they are used as an ideal way to share information across multiple objects, easily accessible via other scripts. ScriptableObjects are not directly attached to GameObjects within a Scene, however they can reference Prefab GameObjects.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
