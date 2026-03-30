This version of Unity is unsupported.

Create an Isometric Tilemap

Import Sprites for an Isometric Tilemap

# Create a Tile Palette for an Isometric Tilemap

To create a **Tile Palette** for painting an Isometric **Tilemap**A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../../../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../../../Glossary.html#Tilemap):

1. Open the Tile Palette window. To do this, go to the top menu and select **Window** > **2D** > **Tile Palette**:

2. Select the **Create New Palette** to open its drop-down menu.

[Image: Select Create New Palette.]
Select **Create New Palette**.

3. Set the **Grid type** to the same layout as the **Isometric** or **Isometric Z As Y** Tilemap you are painting.

4. Set **Cell Size** to **Manual**. Leave X and Z at their default values, but set Y to the same value as the Y value of the Tilemap’s Cell Size. This value depends on the projection type of the Tilemap. Refer to the [Creating an Isometric Tilemap](create-isometric-tilemap.html) page for more details.

[Image: Set the Cell Size property.]
Set the **Cell Size** property.

5. Select **Create** to finalize your settings and create the new **Tile Palette Asset**.

6. To make any changes to the Tile Palette, double-click the Asset in the Asset Folder to open it as a [Prefab](../../../Prefabs.html)An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](../../../Prefabs.html)
See in [Glossary](../../../Glossary.html#Prefab) and make your changes there.

## Adjusting the Tile height in the Palette

When painting Tiles on an **Isometric Z as Y Tilemap**, you define the Z position of the **Grid** you are painting on by setting the **Z Position** value. For this type of Tilemap, the Z position value translates into an offset along the Y-axis, and Tiles painted with different Z positions appear to have different heights on the Tilemap.

To do this, use the following steps:

1. Select the tile palette and open it in the Tile Palette window.

2. Adjust the **Z Position** by entering the desired value (only whole numbers).

[Image: The Z Position is at the bottom of the Tile Palette.]
The **Z Position** is at the bottom of the Tile Palette.

**Note**: Tiles are painted on a Grid with the set Z position until the value is changed or reset. To change the value back to the default of 0, select **Reset**.

In the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../../CreatingScenes.html)
See in [Glossary](../../../Glossary.html#Scene) view, the brush preview now displays both the Tile at the Cell’s original position with a Z value of 0 as a blue outline, and its painted position with the Z-as-Y offset applied is displayed with a white outline.

[Image: The Scene view with the brush preview and the blue and white outlines in context.]
The Scene view with the brush preview and the blue and white outlines in context.

The **Z Position** of a brush can also be adjusted with keyboard shortcuts. For more information on this, refer to [Isometric brush shortcut reference](isometric-brush-shortcut-reference.html).

**Note**: To remove Tiles, the **Erase Brush** must have the same **Z Position** as the target Tile to be removed. The Erase Brush does not erase Tiles painted on at a different Z position to it.

---

- Isometric Tilemaps added in [2018.3](https://docs.unity3d.com/2018.3/Documentation/Manual/30_search.html?q=newin20183) NewIn20183

Create an Isometric Tilemap

Import Sprites for an Isometric Tilemap
