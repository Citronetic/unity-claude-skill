This version of Unity is unsupported.

Variant Sprite Atlases

Variant Sprite Atlas

# Master and Variant Sprite Atlases

The **Type** property defines whether a **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlas is a ‘**Master**’ or a ‘**Variant**’. Sprite Atlases are created as Master types by default. Set their Type to ‘Variant’ to create a **Variant Atlas**.

A Variant Atlas requires a Master type **Sprite Atlas**A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../Glossary.html#SpriteAtlas) to be set in its **Master Atlas** property. The Variant Atlas receives a copy of the Master Atlas’s contents to use as its own. Refer to documentation on [Variant Sprite Atlas](variant-sprite-atlas.html) for more details about how to create and use Variant Sprite Atlases.

When the Sprite Atlas Type is set to ‘Variant’, the following properties appear:

[Image: The additional Sprite Atlas properties that appear in the Inspector when you set the Atlas Type to Variant.]
The additional Sprite Atlas properties that appear in the Inspector when you set the Atlas Type to Variant.

| Property | Description |
| --- | --- |
| Type | Set the Atlas’s Type to Variant to reveal the following properties. |
| Master Atlas | A Variant Atlas receives a copy of its Master Atlas’ contents to use as its own. Assign a Sprite Atlas to this property to make it the Master Atlas of the currently selected Variant Atlas. The Master Atlas cannot be a Variant Atlas itself. |
| Include in Build | Check this box to include the Sprite Atlas in the current build. This option is enabled by default. |
| Scale | Set the scale factor of the Variant Sprite Atlas that can range from 0.1 to 1. The size of the Variant Atlas Texture is the result of the Master Atlas’ Texture multiplied by the Scale value. The default and maximum Scale value is 1, where the Variant Atlas Texture remains identical to its Master Atlas’ Texture. |

Variant Sprite Atlases

Variant Sprite Atlas
