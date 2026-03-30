[Image: image]

# Get Started with the 2D Game Kit

Tutorial

Beginner

+10XP

10 mins

249

(9363)

Unity Technologies

[Image: Get Started with the 2D Game Kit]Summary

The Explorer: 2D is a collection of mechanics, tools, systems and assets to hook up gameplay without writing any code. To show how these elements can be used we’ve also created a game example using these systems.

In this first tutorial, you’ll explore the **Unity Editor** and import the **Assets** for your game.

Languages available:

EnglishEnglish한국어简体中文English

## 1. Update your version of Unity

Q&A (0)

Before you can download the **Project** for these tutorials, you’ll need to:

- Download the[Unity Hub](https://unity3d.com/get-unity/download?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955949656)
- Download the latest[Unity Personal](https://store.unity.com/download?ref=personal) official release
- Log in with your Unity ID
- When you install the **Editor**, keep the default install options.

For advice on using the **Unity Hub**, see the[Unity Hub documentation](https://docs.unity3d.com/Manual/GettingStartedInstallingHub.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955949656). If you don’t have the latest official release, select the **Installs** tab from the menu to the left of the**Unity Hub** window to download it.

**Note:** The **2D Game Kit** and learning content is only compatible with official releases from**2017.3** onward.

Mark step as complete

## 2. Download the 2D Game Kit

Q&A (0)

To download the Unity Project for **2D Game Kit**:

**1.** Open the **Unity Hub**.

**2.** Select the **Learn** tab on the left side of the window.

[Image: image]

**3.** Scroll down and select the correct **Project**from the available list.

**4.**  In the project dialog window, select **Download Project**.

[Image: image]

**5.**  When the download is complete, select **Open Project**.

[Image: image]

**Unity Editor** will import the **Project**, and update any necessary [packages](https://docs.unity3d.com/Manual/Packages.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955949656).

Mark step as complete

## 3. Important: If you cannot save your Unity Project

Q&A (0)

**Note:** Some users are currently experiencing an error which stops them from saving Unity Projects downloaded through the Hub. If you encounter this error, you can use the following workaround:

**1.** In the top menu, go to **File**> **Close**.

**2.** In the Keep Project? dialog window, select **Keep**.

[Image: image]

**3.**  Save your Project using your Operating System’s saving window. Choose an easily accessible location for your Project, such as a dedicated Projects folder or your Documents folder.

**4.**  Once the Project is saved, re-open Unity Hub.

**5.** Select **Add** and navigate to the location of your saved Project. This will add your Project to the Project List in the Hub.

[Image: image]

**6.**  Left-click on the Project in the Project List to open it and continue with the tutorial.

You will be able to save the Project as normal after completing this process.

Mark step as complete

## 4. Review the Unity Editor interface

Q&A (0)

In this project, you’ll use the same key parts of the Unity Editor that you did in the code-free Creator Kits.

[Image: image]

The Unity Editor has four main sections:

**1.  Scene view**This is where you can edit the current Scene by selecting and moving objects in the 3D space for the game. In this kit, the game level is contained in one Scene.

**2.  Hierarchy window**
This is a list of all the GameObjects in a Scene. Every object in your game is a GameObject. These can be placed in a parent-child hierarchy, which lets you group objects — this means that when the parent object is moved, all of its children will move at the same time.

**3.  Inspector window**
This display all settings related to the currently selected object. You will explore this window more during the walkthrough.

**4.  Project window**
This is where you manage your Project Assets. Assets are the media files used in a Project (for example, images, 3D models and sound files). The Project window acts like a file explorer, and can be used to explore and create folders on your computer. When the walkthrough asks you to find an Asset at a given file path, use this window.

**TIP:** If your Editor layout doesn’t match the image above, use the layout drop-down menu at the top right of the toolbar to select **Default**.

Mark step as complete

## 5. Review the Unity Editor toolbar

Q&A (0)

The toolbar includes a range of useful tool buttons to help you design and test your game.

[Image: image]

#### Play buttons

**Play**Play is used to test the Scene which is currently loaded in the Hierarchy window, and enables you to try out your game live in the Editor.

**Pause**Pause, as you have probably guessed, allows you to pause the game playing in the Game window. This helps you spot visual problems or gameplay issues that you wouldn’t otherwise see.

**Step**Step is used to walk through the paused Scene frame by frame. This works really well when you’re looking for live changes in the game world that it would be helpful to see in real time.

#### Manipulating objects

These tools move and manipulate the GameObjects in the Scene view. You can click on the buttons to activate them, or use a shortcut key.

[Image: image]

**Hand Tool**

[Image: image]

You can use this tool to move your Scene around in the window. You can also use middle click with the mouse to access the tool.

**Move Tool**

[Image: image]

This tool enables you to select items and move them individually.

**Rotate Tool**

[Image: image]

Select items and rotate them with this tool.

**Scale Tool**

[Image: image]

You guessed it — this is the tool to scale your GameObjects up and down.

**Rect Transform Tool**

[Image: image]

This tool does lots of things. Essentially, it combines moving, scaling and rotation into a single tool that’s specialized for 2D and UI.

**Rotate, Move or Scale**

[Image: image]

Again, this tool does lots of things. It also enables you to move, rotate, or scale GameObjects, but is more specialized for 3D.

#### Focusing on a GameObject

Another useful shortcut is the **F** key, which enables you to focus on a selected object.  If you forget where a GameObject is in your Scene, select it in the Hierarchy. Then move your cursor over the Scene view,  and press **F** to center it.

[Image: image]

#### Navigating with the mouse

When you’re in the Scene view, you can also:

- Left click to select your GameObject in the Scene.
- Middle click and drag to move the Scene view’s camera using the hand tool.

For more advice on moving GameObjects in the Scene view, see [Scene View Navigation](https://docs.unity3d.com/Manual/SceneViewNavigation.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774955949656) in the Manual.

Mark step as complete

## 6. Review key concepts for working with Unity

Q&A (0)

Let’s review some key concepts explored in this code-free Game Kit, which will help you as you begin to explore editing scripts for the game.

#### Scenes

In Unity, areas of the game that a player can interact with are generally made up of one or more Scenes. Small games may only use one Scene; large ones could have hundreds. We used a number of different Scenes when making the Creator Kit: Beginner Code game — the one you should use to play and customize the game in these tutorials is called **ExampleScene**.

#### GameObjects and components

Every object in the game world exists as a **GameObject**in Unity. GameObjects are given specific features by giving them appropriate **components**, which provide a wide range of different functionality. When you create a new GameObject, it comes with a Transform component already attached. This component controls the GameObject’s positional properties in the 3D (or 2D) gamespace. You need to add all other components manually in the Inspector.

#### Prefabs

Prefabs are a great way to configure and store GameObjects for re-use in your game. They act as templates, storing the components and properties of a specific GameObject and enabling you to create multiple instances of it within a Scene.  All copies of the Prefab template in a Scene are linked. This means that if you change the object values for the health potion Prefab, for example, each copy of that Prefab within the Scene will change to match it. However, you can also make specific instances of the GameObject different to the default Prefab settings.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
