This version of Unity is unsupported.

9-slicing

9-slice your sprite

# Set up your sprite for 9-slicing

Before you 9-slice a **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../sprite/sprite-landing.html)
See in [Glossary](../../Glossary.html#Sprite), you need to ensure the Sprite is set up properly.

1. Make sure the **Mesh Type** is set to **Full Rect**. To apply this, select the Sprite, then in the Inspector window click the **Mesh Type** drop-down and select **Full Rect**. If the **Mesh Type** is set to **Tight**, 9-slicing might not work correctly, because of how the **Sprite Renderer**A component that lets you display images as Sprites for use in both 2D and 3D scenes. [More info](../../sprite/renderer/renderer-landing.html)
See in [Glossary](../../Glossary.html#SpriteRenderer) generates and renders the Sprite when it is set up for 9-slicing.

2. Define the borders of the Sprite via the [**Sprite Editor**](../sprite-editor/sprite-editor-landing.html) window. To do this, select the Sprite, then in the [Inspector](../../UsingTheInspector.html)A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../UsingTheInspector.html)
See in [Glossary](../../Glossary.html#Inspector) window click the **Sprite Editor** button.

3. Use the Sprite Editor window to define the borders of the Sprite (that is, where you want to define the tiled areas, such as the walls of a floor tile). To do this, use the Sprite control panel’s **L**, **R**, **T**, and **B** fields (left, right, top, and bottom, respectively). Alternatively, click and drag the green dots at the top, bottom, and sides.

4. Click **Apply** in the Sprite Editor window’s top bar.

5. Close the Sprite Editor window, and drag the Sprite from the [Project window](../../ProjectView.html)A window that shows the contents of your `Assets` folder (Project tab) [More info](../../ProjectView.html)
See in [Glossary](../../Glossary.html#Projectwindow) into the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene) view to begin working on it.

9-slicing

9-slice your sprite
