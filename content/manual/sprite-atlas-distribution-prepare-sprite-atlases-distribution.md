This version of Unity is unsupported.

Distribution

Methods of distribution

# Prepare Sprite Atlases for distribution

Ensure that the source Texture of the **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) is always uncompressed. While packing **Sprite Atlas**A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../Glossary.html#SpriteAtlas), **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](../../../ShadowPerformance.html)
See in [Glossary](../../../Glossary.html#pixel) data is read from the source texture and if it uses any compressed format, it may result in loss of precision as it must be uncompressed first before packing. If a Sprite is packed to a Sprite Atlas, only the Sprite Atlas Texture needs to be compressed.

A Project can have multiple Sprite Atlases for different purposes (for example, [Variant Atlases](../master-variant/variant-sprite-atlas.html) with [lower-resolution](../master-variant/scale-textures-variant-sprite-atlas.html) Textures for hardware with different limitations). If you enable all available Sprite Atlases, you might encounter conflicts (refer to [Resolving different Sprite Atlas scenarios](../distribution/resolve-different-sprite-atlas-scenarios.html) for more information).

To prevent these issues, properly prepare Sprite Atlases for distribution with the following steps:

1. [Disable ‘Include in Build’](#Dontinclbuild) in the Sprite Atlas properties.

2. Choose a [method](methods-distribution.html) to distribute the Atlas.

3. Load the Atlas via [Late Binding](late-binding.html) with a script.

## Disable ‘Include in Build’

Unity includes Sprite Atlases in a Project’s build by default, and automatically loads them at run time. Clear the **Include in Build** setting of the selected Sprite Atlas to disable this behavior.

If ‘Include in Build’ is disabled, Unity still packs the Sprite Atlas into a *.spriteatlas file in the Project’s Assets folder. However, sprites which reference Textures in a disabled Sprite Atlas appear invisible as the reference Texture is not available or loaded. Unity does not include the disabled Sprite Atlas in the Project’s published build, and does not automatically load it at run time. To do so, a [script](../../../../ScriptReference/U2D.SpriteAtlas.html) is required to load the Sprite Atlas via [Late Binding](late-binding.html).

## Sprite Atlas AssetBundle compatibility

If you use [AssetBundles](../../../AssetBundlesIntro.html) Unity assigns any automatically generated sprite atlases to the AssetBundle containing the sprite objects from which the sprite atlas was generated. If the sprite objects are assigned to multiple AssetBundles, then the sprite atlas isn’t assigned to an AssetBundle and is duplicated. If the sprite objects aren’t assigned to an AssetBundle, then the sprite atlas isn’t assigned to an AssetBundle.

To ensure that sprite atlases aren’t duplicated, check that all sprites tagged into the same sprite atlas are assigned to the same AssetBundle.

For more information, refer to [AssetBundles introduction](../../../AssetBundlesIntro.html).

Distribution

Methods of distribution
