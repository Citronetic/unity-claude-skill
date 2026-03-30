This version of Unity is unsupported.

Sprite editor

Use the editor

# Open the sprite editor

To open the ****Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../sprite/sprite-landing.html)
See in [Glossary](../../Glossary.html#Sprite) Editor**:

1. Select the 2D image you want to edit from the **Project** window.

**Note**: You can’t edit a sprite by selecting it in the ****Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene)** view.

2. Click on the **Sprite Editor** button in the **Texture Import **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../UsingTheInspector.html)
See in [Glossary](../../Glossary.html#Inspector)**.

Unity displays the **Sprite Editor**.

**Notes:**

- You can only see the **Sprite Editor** button if the **Texture Type** on the image you have selected is set to **Sprite (2D and UI)**.

- Set the **Sprite Mode** to **Multiple** in the ****Texture Import Inspector**An Inspector that allows you to define how your images are imported from your project’s `Assets` folder into the Unity Editor. [More info](../../class-TextureImporter.html)
See in [Glossary](../../Glossary.html#TextureImportInspector)** if your image has several elements.

Along with the composite image, you will see a number of controls in the bar at the top of the window. The slider at the top right controls the zoom, while the color bar button to its left chooses whether you view the image itself or its alpha levels. The right-most slider controls the pixilation (mipmap) of the Texture. Moving the slider to the left reduces the resolution of the Sprite Texture. The most important control is the **Slice** menu at the top left, which gives you options for separating the elements of the image automatically.

Select the **Apply** and **Revert** buttons to keep or discard any changes you have made in the Sprite Editor window respectively. You set these buttons to display a confirmation dialog before applying their effects in Unity’s [Preferences window](../../Preferences.html). In the Preferences window, go to **2D > Sprite Editor Window** to open the Sprite Editor window options.

Select the respective option to have a dialog appear after selecting **Apply** or **Revert** to confirm your selection, preventing accidental saving or discarding of changes made.

Sprite editor

Use the editor
