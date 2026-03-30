This version of Unity is unsupported.

Grid Selection properties reference

Move tiles with the Move tool

# Modify Tilemap reference

The **gizmo**A graphic overlay associated with a GameObject in a Scene, and displayed in the Scene View. Built-in scene tools such as the move tool are Gizmos, and you can create custom Gizmos using textures or scripting. Some Gizmos are only drawn when the GameObject is selected, while other Gizmos are drawn by the Editor regardless of which GameObjects are selected. [More info](../../../../GizmosMenu.html#GizmosIcons)
See in [Glossary](../../../../Glossary.html#Gizmo) **toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](../../../../Toolbar.html)
See in [Glossary](../../../../Glossary.html#Toolbar) in this section has different gizmos you can use to change the **tilemap**A GameObject that allows you to quickly create 2D levels using tiles and a grid overlay. [More info](../../../../tilemaps/work-with-tilemaps/tilemap-reference.html)
See in [Glossary](../../../../Glossary.html#Tilemap) and its contents. You can select different options and behaviors for inserting or removing rows and columns of blank cells into the tilemap from the [dropdown menu](#dropdown).

## Gizmo toolbar

Select a gizmo from the toolbar to activate as specific gizmo to change the selected contents in the tilemap. The following table describes each option, with links to examples showing how they affect the tilemap.

| Gizmo | Function |
| --- | --- |
| None | No gizmo is active or shown in the SceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary view. |
| Move | Activates and displays a Move gizmo in the Scene viewAn interactive view into the world you are creating. You use the Scene View to select and position scenery, characters, cameras, lights, and all other types of Game Object. More infoSee in Glossary. Use this to change the offset of the selected contents. |
| Rotate | Activates and displays a Rotate gizmo in the Scene view. Use this to change the rotation of the selected contents. |
| Scale | Activates and displays a Scale gizmo in the Scene view. Use this to change the scale of the selected contents. |
| Transform | Activates and displays a Transform gizmo in the Scene view. Use this to change the offset, rotation and scale of the selected contents all at once. |

### Gizmo function examples

**None**

[Image: No gizmo]
Default Tilemap and selected cell location. No Gizmo is activated or visible.

**Move**

[Image: Move]
**Left:** Default Tilemap and selected cell location. **Right:** Offset changed for the selected cell locations.

**Rotate**

[Image: Rotate]
**Left:** Default Tilemap and selected cell location. **Right:** Rotation changed for the selected cell locations.

**Scale**

[Image: Scale]
**Left**: Default Tilemap and selected cell location. **Right**: Scale changed for the selected cell locations.

**Transform**

[Image: Transform]
**Left:** Default Tilemap and selected cell location. **Right:** Offset, rotation and scale of the selected cell locations are modified.

## Cell rows and columns options

The dropdown menu provides different options for inserting or removing rows and columns of blank cells onto the tilemap. After selecting one of the dropdown menu options, enter the number of rows or columns to insert or remove into the box and select **Modify**.

The following table describes each option, with links to examples showing how they affect the tilemap.

| Property | Function |
| --- | --- |
| Insert Row | Inserts one or more rows of blank cells at the selected location. Existing cells are displaced upward along the positive y-axis. |
| Insert Row Before | Inserts one or more rows of blank cells below the selected location. Existing cells are displaced downward along the negative y-axis. |
| Delete Row | Removes one or more rows of cells at the selected location and above. Existing cells above then collapse down to fill the space left by the deleted rows. |
| Delete Row Before | Removes one or more rows of cells below the selected location. Existing cells below then shift upward along the positive y-axis to fill the space left by the deleted rows. |
| Insert Column | Inserts one or more columns of blank cells at the selected location. Existing cells are displaced to the right along the positive x-axis. |
| Insert Column Before | Inserts one or more columns of blank cells to the left of the selected cell. Existing cells are displaced to the left along the negative x-axis. |
| Delete Column | Removes one or more columns of cells at the selected location and to its right. Existing cells then shift to the left along the negative x-axis to fill the space left by the deleted columns. |
| Delete Column Before | Removes one or more columns of cells to the left of the selected cell. Existing cells shifted to the right along the positive x-axis to fill the space left by the deleted columns. |

### Examples of different dropdown menu options

**Insert Row**

[Image: Insert Row]
**Left:** *Default Tilemap and selected cell location.* **Right:** *Insert Row.*

**Insert Row Before**

[Image: Insert Row Before]
**Left:** *Default Tilemap and selected cell location.* **Right:** *Insert Row Before.*

**Delete Row**

[Image: Delete Row]
**Left:** *Default Tilemap and selected cell location.* **Right:** *Delete Row.*

**Delete Row Before**

[Image: Delete Row Before]
**Left:** *Default Tilemap and selected cell location.* **Right:** *Delete Row Before.*

**Insert Column**

[Image: Insert Column]
**Left:** *Default Tilemap and selected cell location.* **Right:** *Insert Column.*

**Insert Column Before**

[Image: Insert Column Before]
**Left:** *Default Tilemap and selected cell location.* **Right:** *Insert Column Before.*

**Delete Column**

[Image: Delete Column]**Left:** *Default Tilemap and selected cell location.* **Right:** *Delete Column.*

**Delete Column Before**

[Image: Delete Column Before]
**Left:** *Default Tilemap and selected cell location.* **Right:** *Delete Column Before.*

### Multiple cell selection

When multiple cells are selected, the lower-leftmost cell is the main point of reference when applying the Modify Tilemap options. See the following examples of selecting multiple cells then modifying the Tilemap.

[Image: Insert Row with multiple selected cells]
**Left:** *Default Tilemap with multiple cells selected.* **Right:** *Insert Row.*

[Image: Insert Column with multiple selected cells]
**Left:** *Default Tilemap with multiple cells selected.* **Right:** *Insert Column.*

[Image: Delete Row with multiple selected cells]
**Left:** *Default Tilemap with multiple cells selected.* **Right:** *Delete Row.*

[Image: Delete Column with multiple selected cells]
**Left:** *Default Tilemap with multiple cells selected.* **Right:** *Delete Column.*

## Additional resources

- [Grid Selection properties](./grid-selection-properties-reference.html)

- [Tile Palette editor reference](../../tile-palette-editor-reference.html)

Grid Selection properties reference

Move tiles with the Move tool
