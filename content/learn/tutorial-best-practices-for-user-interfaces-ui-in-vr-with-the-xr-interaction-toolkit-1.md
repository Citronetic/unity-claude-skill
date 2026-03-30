[Image: image]

# Best Practices for User Interfaces (UI) in VR with the XR Interaction Toolkit

Tutorial

intermediate

+0XP

15 mins

122

(50)

Unity Technologies

[Image: Best Practices for User Interfaces (UI) in VR with the XR Interaction Toolkit]Summary

In this tutorial, we'll explore how to implement UI in VR so that it’s comfortable and immersive for your users. We'll look at in-world versions of traditional UI, as well as look back at how we can use Interactable Events with 3D objects, such as buttons and switches, for in-world interaction that never breaks immersion.

Languages available:

EnglishEnglishEnglish

## 1. Best Practices for User Interfaces (UI) in VR with the XR Interaction Toolkit

Q&A (0)

This tutorial has been verified using Unity 2019.4.12f1 LTS, XR Interaction Toolkit 0.9.3-preview, and Oculus XR Plugin 1.4.3

In this tutorial, we'll explore how to implement UI in VR so that it’s comfortable and immersive for your users. We'll look at in-world versions of traditional UI, as well as look back at how we can use Interactable Events with 3D objects, such as buttons and switches, for in-world interaction that never breaks immersion.

Mark step as complete

## 2. Creating a World Space UI

Q&A (0)

Applying UI directly to a user's screen in VR is like attaching a sticky note to their face. Instead, it’s good practice to anchor the UI in World Space so that it exists in 3D independent of the player (**Figure 01**). In this exercise, we’ll create a simple starting Scene with a button that loads a second Scene.

[Image: image]

1. Create a new Scene.

2. Create a raw image for your title by selecting **UI** > **Raw Image** from the GameObject drop-down. This also creates a Canvas set to Screen Space - Overlay.

3. In the Hierarchy view, select your Canvas.

4. In the Inspector, change its type to **World Space** and drag the Main Camera into the **Event Camera** property slot (**Figure 02**).

[Image: image]

5. Depending on your source art and how you want the UI to look, you may wish to increase or decrease **Reference Pixels per Unit** (**Figure 03**).

[Image: image]

6. Create a new empty GameObject by selecting **Create Empty** from the GameObject drop-down. Name it *SceneLoaderGO*.

7. Attach a new C# script called *SceneLoader* and open it in the Script Editor.

8. Delete Start and Update, as we won’t be using these.

9. Add the following namespace:

```csharp
using UnityEngine.SceneManagement;
```

10. Add the following data member:

```csharp
public string nextScene;
```

11. Add the following method:

```csharp
public void LoadScene()
   {
       SceneManager.LoadScene(nextScene);
   }
```

12. Save changes and return to the Unity Editor.

13. Add a button by selecting **UI** > **Button - TextMeshPro** from the GameObject drop-down.

14. When prompted, click **Import TMP Essentials** (**Figure 04**).

[Image: image]

15. Expand the button in the Hierarchy view and select **Text (TMP)**. Set it to “NEW GAME” (or whatever suits your purposes).

16. Click to select the button in the Hierarchy. In the Inspector, scroll down to On Click (). Click the **+** sign (**Figure 05**).

[Image: image]

17. Drag **SceneLoaderGO** into the **Object** slot. In the Function drop-down, select **SceneLoader** > **LoadScene()** (**Figure 06**).

[Image: image]

18. Create a second Scene. An easy way to do this is to save the current Scene under a new name, make some changes so that it’s visually distinct from the Scene we’ve been working on, and save again.

19. Reload the original Scene.

20. In the Hierarchy view, select **SceneLoaderGO**.

21. In the Inspector for the Scene Loader component, enter the name of the second Scene (**Figure 07**).

[Image: image]

22. Add an XR Rig. This works with either type of XR Rig. For this exercise, it doesn’t matter which you choose, as we’re working in Play Mode. For actual builds, you’d use the type most suitable for your project and target hardware.

23. Scale the Canvas/UI GameObjects down and place them so that they’re in front of the XR Rig and visible in the Main Camera’s preview in the Scene view.

24. Save the Scene and enter Play Mode.

25. In the Scene view, or using the Transform, move the Main Camera around. The UI elements remain in their original position rather than sticking to the screen/Camera.

26. Click the button. The second Scene should load. Make sure to include both Scenes in the Build Settings.

27. Exit Play Mode.

28. Try creating more complex interfaces. Rather than a single button, try a Vertical Layout Group.

Mark step as complete

## 3. In-World User Interfaces

Q&A (0)

A more immersive option would be to replace the UI button with the mesh of a button, with an Interactable and with the LoadScene() method attached to the OnSelectEnter event. For more information, see Customizing Interactors and Interactables.

Mark step as complete

## 4. Conclusion

Q&A (0)

With careful design, in-world user interfaces need not cause discomfort or break immersion. Even the traditional Canvas-based UI, when anchored in World Space, can take on the form of a holographic display, interactive kiosk, or whatever suits your project’s world.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
