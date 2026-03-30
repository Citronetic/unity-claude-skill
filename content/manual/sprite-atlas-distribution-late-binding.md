This version of Unity is unsupported.

Methods of distribution

Load a Sprite Atlas with SpriteAtlasManager.atlasRequested

# Late binding

Late binding is the process of loading or swapping in a [Sprite Atlas](../atlas-landing.html)A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../Glossary.html#SpriteAtlas) at runtime via the [Sprite Atlas API](../../../../ScriptReference/U2D.SpriteAtlas.html). It’s necessary when the atlas isn’t available during start-up, such as when loading assets from [AssetBundles](../../../AssetBundlesIntro.html). You can choose to bind [different Sprite Atlases](../distribution/prepare-sprite-atlases-distribution.html) based on specific criteria, such as loading a high or low-resolution **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlas ford different platforms to improve performance and efficiency.

After you [pack your sprites into a Sprite Atlas](../workflow/sprite-atlas-workflow.html) in your project, you can decide whether to [include the Sprite Atlas with the published build](../distribution/distribution-landing.html). To exclude the Sprite Atlas from the build, clear **Include in Build** in the Sprite Atlas’ properties. When not included in a build, the Sprite Atlas isn’t loaded at runtime and sprites that reference textures packed into the atlas will appear blank until you use late binding to load the atlas. Note that this also means that Unity Editor won’t automatically load the Sprite Atlas and that your sprites will appear blank when you enter Play mode.

Additional samples of the different ways and scenarios to use Sprite Atlases and late binding are available for download from the [2D Common](https://docs.unity3d.com/Packages/com.unity.2d.common@latest) package’s **Samples** tab.

## Additional resources

- [Sprite Atlas workflow](../workflow/sprite-atlas-workflow.html)

- [Methods of distribution](../distribution/methods-distribution.html)

- [Unity Support: Sprite Atlas with late binding and Asset Bundles](https://support.unity.com/hc/en-us/articles/360000665546-Sprite-Atlas-with-late-binding-and-Asset-Bundles?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774937655333)

Methods of distribution

Load a Sprite Atlas with SpriteAtlasManager.atlasRequested
