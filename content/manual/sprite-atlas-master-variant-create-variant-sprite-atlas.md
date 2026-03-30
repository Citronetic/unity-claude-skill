This version of Unity is unsupported.

Variant Sprite Atlas

Scale the textures of a variant Sprite Atlas

# Create a variant Sprite Atlas

To create a Variant **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlas:

1. Prepare the **Sprite Atlas**A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../Glossary.html#SpriteAtlas) that will be the Variant Atlas’ Master Atlas. It contains the Texture Assets that the Variant Atlas will derive its own content from.

2. [Create a new Sprite Atlas](../workflow/create-sprite-atlas-asset.html), and set its **Type** to ‘Variant’.

3. Assign the Sprite Atlas prepared in Step 1 to this property to set it as the Variant’s Master.

As a Variant Atlas without a Master Atlas contains no content on its own, Unity will not pack it into a `.spriteatlas` Asset.

In a Project that includes both a Master and a Variant Sprite Atlas, if both are **Included in the Build**, then the Textured used by mutual sprites can come from either Sprite Atlas (refer to Scenario 3 of the [Resolving different Sprite Atlas scenarios](../distribution/resolve-different-sprite-atlas-scenarios.html) page).

To automatically load Sprite Textures from the Variant Atlas instead of the Master Atlas, enable **Include in Build** for the Variant Atlas only and disable it for the Master Atlas. The build then automatically loads the Variant Sprite Atlas instead of the Master Atlas at runtime.

Variant Sprite Atlas

Scale the textures of a variant Sprite Atlas
