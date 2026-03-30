This version of Unity is unsupported.

Load a Sprite Atlas with SpriteAtlasManager.atlasRequested

Resolve different Sprite Atlas scenarios

# Retrieve sprite contents at runtime with GetSprites

If the sprites packed into a **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlas don’t exist in the current build or project, use [GetSprites](../../../../ScriptReference/U2D.SpriteAtlas.GetSprites.html) to create sprites bound to a Sprite Atlas at runtime with the following steps.

1. Create a [custom component](../../../CreatingComponents.html) that takes [SpriteAtlas](../../../../ScriptReference/U2D.SpriteAtlas.html) as a public variable.

2. Assign a [Sprite Atlas](../sprite-atlas-reference.html)A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../Glossary.html#SpriteAtlas) to that property.

3. Enter the Editor’s [Play mode](../../../GameView.html).

4. Access the variable and call the property [GetSprites](../../../../ScriptReference/U2D.SpriteAtlas.GetSprites.html) to retrieve the array of sprites packed in the selected atlas.

Load a Sprite Atlas with SpriteAtlasManager.atlasRequested

Resolve different Sprite Atlas scenarios
