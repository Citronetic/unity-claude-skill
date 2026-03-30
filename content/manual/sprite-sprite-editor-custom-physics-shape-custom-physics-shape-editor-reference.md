This version of Unity is unsupported.

Update the shape of the collider 2D meshes

Sprite editor secondary textures

# Custom physics shape editor reference

| Property | Function |
| --- | --- |
| Snap | Snap control points to the nearest pixelThe smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. More infoSee in Glossary. |
| Outline Tolerance | Use this slider to control how tightly and accurately the generated outline follows the outline of the SpriteA 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. More infoSee in Glossary texture. At the minimum value (0), the Sprite Editor generates a basic outline around the Sprite. At the maximum value (1), the Sprite Editor generates an outline that follows the outline of the Sprite as closely as possible. |
| Generate | When you click this button, Unity automatically creates a physics shape outline based on the Outline Tolerance value you set. |
| Copy | After you have generated or set up a custom physics shape, click this Copy button to duplicate the custom physics shape. Leaving the Custom Physics Shape module or closing the Sprite Editor removes the copied physics shape from memory. |
| Paste | Use this button to paste a copied physics shape to the currently selected Sprite. If you have not used the Copy function to copy a physics shape, this button is not available. To Paste a copied custom physics shape to another Sprite, in the Project windowA window that shows the contents of your Assets folder (Project tab) More infoSee in Glossary select the Sprite while the Custom Physics Shape editor window is open. Then click the Paste button to paste the copied physics shape to the new Sprite. When you paste the physics shape, if a point in the physics shape is larger than the Sprite’s frame, Unity clamps the point to be inside the Sprite’s frame. |
| Paste All | Use this button to paste a copied physics shape to all sprites in the Sprite Editor window, regardless of selection. If you have not used the Copy function to copy a physics shape, this button is not available. Use this function to apply the same physics shape to multiple sprites in the same Texture (such as when a Texture has its Sprite Mode set to ‘Multiple’). When you paste the physics shape, if a point in the physics shape exceeds the Sprite’s frame, Unity clamps the point to be inside that Sprite’s frame. |
| Revert | Undoes any unsaved recent changes made in the editor window. To save changes, click Apply first. |
| Apply | Select this button to save all changes made in the editor window. |

Update the shape of the collider 2D meshes

Sprite editor secondary textures
