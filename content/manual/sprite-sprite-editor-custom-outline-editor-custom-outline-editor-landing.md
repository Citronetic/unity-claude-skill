This version of Unity is unsupported.

Resize polygons

Generate the outline

# Custom outline

Use the [Sprite Editor’s](../sprite-editor-landing.html) **Custom Outline** option to edit the shape of the [Mesh](../../../class-Mesh.html)The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../../../mesh.html)
See in [Glossary](../../../Glossary.html#Mesh) that Unity renders the [Sprite](../../sprite-landing.html)A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) texture on. The Custom Outline editor allows you to use control points to create and define the shape of the Sprite’s Mesh outline.

By default, Unity renders each Sprite on a rectangle Mesh. This Mesh might include transparent areas outside the Texture’s border, and rendering these transparent areas can negatively affect performance. When you use the Custom Outline editor to define a Mesh outline that matches the outline of the Sprite Texture, you reduce the size of the transparent areas, which improves performance.

To access the Custom Outline editor, select a Sprite and then in the Sprite’s **Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](../../../UsingTheInspector.html)
See in [Glossary](../../../Glossary.html#Inspector) window, select the [Sprite Editor](../sprite-editor-landing.html) button. In the Sprite Editor window, open the upper-left drop-down menu and select **Custom Outline** to open the Custom Outline editor.

The Custom Outline editor allows you to to create or generate the Mesh of the Sprite. There are two ways to create a custom outline: have Unity automatically [generate](generate-outline.html) the shape, or [manually creating and editing](../custom-physics-shape/custom-physics-shape-landing.html) it in the editor window.

| Topic | Description |
| --- | --- |
| Generate the outline | Automatically create an outline based on the Sprite texture. |
| Edit the custom outline | Create and refine custom outlines. |
| Add or remove control points | Control the sprite’s behavior and its position relative to the GameObjectThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary it’s attached to. |
| Move control points | Adjust the Mesh outline to refine or remove control points. |
| Move edges | Select and drag edges between control points to reshape the outline. |
| Custom Outline editor reference | Snap control points, adjust outline tolerance, generate outlines, and copy or paste outlines to individual or multiple sprites. |

---

- Copy and Paste editor window functions added in [2020.1](https://docs.unity3d.com/2020.1/Documentation/Manual/30_search.html?q=newin20201) NewIn20201

Resize polygons

Generate the outline
