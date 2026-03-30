This version of Unity is unsupported.

Static GameObjects

Primitive and placeholder objects

# Deactivate GameObjects

To temporarily remove a **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) from your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene), you can mark the GameObject as inactive.

To do this, navigate to the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window and clear the checkbox to the left of the GameObject’s name. The names of deactivated GameObjects appear faded in the Hierarchy window.

To deactivate a GameObject through script, use the [SetActive](../ScriptReference/GameObject.SetActive.html) method. To see if an object is active or inactive, check the [activeSelf](../ScriptReference/GameObject-activeSelf.html) property.

If you deactivate a GameObject, coroutines attached to it are stopped.

## Deactivate a parent GameObject

If you deactivate a parent GameObject, you also deactivate all of its child GameObjects because the deactivation overrides the `activeSelf` setting on all child GameObjects. The child GameObjects return to their original state when you reactivate the parent.

To know if a child GameObject is active in your scene, use the [activeInHierarchy](../ScriptReference/GameObject-activeInHierarchy.html) property.

**Note:** The `activeSelf` property is not always accurate if you check a child GameObject because even if it is set to active, you might have set one of its parent GameObjects to inactive.

[Image: The selected GameObject (Cube) is set as active, but remains inactive until you set its parent GameObject to active.]
The selected GameObject (Cube) is set as active, but remains inactive until you set its parent GameObject to active.

Static GameObjects

Primitive and placeholder objects
