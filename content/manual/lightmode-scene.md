This version of Unity is unsupported.

Lighting Mode

Adjust Mixed lights at runtime

# Set the Lighting Mode of a scene

1. Select the [Lighting Settings Asset](class-LightingSettings.html) for the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene).

2. In the **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector), navigate to **Mixed Lighting**.

3. Use the drop-down menu to set the **Lighting Mode**.

If your project uses the High-Definition **Render Pipeline**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) (HDRP), follow the instructions in the [HDRP Shadowmask Lighting Mode](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@latest/index.html?subfolder=/manual/Shadows-in-HDRP.html%23shadowmasks) documentation instead.

## Match shadow colors in Subtractive mode

When you set a Scene’s Lighting Mode to Subtractive, Unity displays the **Realtime Shadow Color** property in the Lighting window. Unity uses this color when it combines real-time shadows with baked shadows. Change this value to approximate the color of the indirect lighting in your Scene, to better match the real-time shadows with the baked shadows.

Lighting Mode

Adjust Mixed lights at runtime
