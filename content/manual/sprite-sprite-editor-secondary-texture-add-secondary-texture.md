This version of Unity is unsupported.

Sprite editor secondary textures

Delete a secondary texture

# Add a secondary texture

To add a new Secondary Texture entry:

1. Select the **Secondary Textures** module from the drop-down menu at the top left of the ****Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Editor** window.

2. Select the ‘‘+’’ at the bottom right of the **Secondary Textures** panel.

You can add a maximum of eight Secondary Textures to each Sprite or Sprite Sheet. Each added Secondary Texture appears as an entry on the list, with two fields: Name and Texture.

You can enter a custom name for the Secondary Texture in the Name field. Some Unity packages suggest Texture names that can be used with their **Shaders**A program that runs on the GPU. [More info](../../../Shaders.html)
See in [Glossary](../../../Glossary.html#Shader). The drop-down arrow to the right of the Name field displays a list of valid suggested names. Suggested names remain in the drop-down menu even after their associated packages are uninstalled.

3. To select the Texture used by the Secondary Texture, drag the Texture Asset directly onto the Texture field, or open the **Object Picker** window by selecting the circle to the right of the field.

Secondary Textures are sampled with the same UV coordinates as the main Sprite Texture. Align the Secondary Textures with the main Sprite Texture to ensure that additional Texture effects are displayed correctly.

[Image: Left: a sprite displayed in the sprite editor. Right: the same sprite, now transparent, with a secondary texture displayed over it.]
Left: a sprite displayed in the sprite editor. Right: the same sprite, now transparent, with a secondary texture displayed over it.

4. To preview the Secondary Texture in the **Sprite Editor** window with the main Sprite Texture hidden, select an entry in the list. Click outside of the Secondary Textures list to deselect the entry, and the main Sprite Texture is visible again.

[Image: A secondary texture displayed alone in the sprite editor. The texture item is selected in the list of secondary textures.]
A secondary texture displayed alone in the sprite editor. The texture item is selected in the list of secondary textures.

5. To apply your changes to the edited sprites, select Apply on the **toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](../../../Toolbar.html)
See in [Glossary](../../../Glossary.html#Toolbar).

Entries without a Name or selected Texture are considered invalid and are automatically removed when changes are applied.

Sprite editor secondary textures

Delete a secondary texture
