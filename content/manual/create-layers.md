This version of Unity is unsupported.

Uses of layers in Unity

Layers and layerMasks

# Create functional layers in Unity

Layers can help to organize the **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) in your **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene). If you create a layer and assign GameObjects to it, you can edit how your GameObjects interact with other GameObjects, dependent on the layer.

## Add a new layer

There are two ways you can create a new layer:

- Select the [Tags and Layers window](class-TagManager.html) (main menu: **Edit** > **Project Settings** > **Tags and Layers** > **Layers**).

- Select a GameObject, select the **Layer** dropdown in the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector) window, and select **Add Layer** from the menu.

To remember the intended function for a layer, give it a descriptive name.

**Warning**: Layer 31 is used internally by the Editor’s Preview window mechanics. To prevent clashes, do not use this layer.

### Built-in layers

When you open the layer menu, you can see that some layers are already named. Except for Default and Ignore Raycast, Unity no longer uses these built-in layers for many dedicated purposes; they exist mainly for backward compatibility:

| Layer number | Layer name | Description |
| --- | --- | --- |
| 0 | Default | The default layer for all scene elements. |
| 1 | TransparentFX | Unity uses this layer in the flare system. |
| 2 | Ignore Raycast | Physics ray cast APIs ignore this layer by default. |
| 4 | Water | Unity’s Standard Assets for Unity 2018.4 use this layer. |
| 5 | UI | The Unity UI uses this as the default layer for UI elements. |

You can still use these layers, but you can’t rename or delete them.

## Add GameObjects to a layer

To assign a GameObject to a layer, select the GameObject, go to the Inspector window and select the dropdown next to **Layer**. This menu shows the layers that have names so you can select which one works best for your GameObject.

You can only assign each GameObject to one layer, but you can add multiple GameObjects to one layer.

## Additional resources

- [Essential Unity concepts](https://learn.unity.com/pathway/unity-essentials?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936857397)

- [Tags and layers](class-TagManager.html)

- [Layer-based collision detection](LayerBasedCollision.html)

Uses of layers in Unity

Layers and layerMasks
