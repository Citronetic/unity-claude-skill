This version of Unity is unsupported.

Prepare Sprite Atlases for distribution

Late binding

# Methods of distribution

After you [prepare the Sprite Atlases for distribution](prepare-sprite-atlases-distribution.html), there are several methods to distribute the Atlases. Each method is more suitable for different Project needs or characteristics, such as the size of the Atlas Assets or the target platform of the Project.

The following are the two main methods to consider when you distribute **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlases:

1. Place the Sprite Atlases into the build’s *[Resources](../../../SpecialFolders.html)* folder.

2. Distribute them as downloadable [AssetBundles](../../../AssetBundles-Building.html).

## Method A: Resources folder

Unity can distribute Sprite Atlases in the final build, as long as it is within the size limits of their chosen target platform. To distribute Sprite Atlases together with the final build, place them in the Project’s `Resource` folder, which includes Sprite Atlases in the exported build when users download the application. Unity then loads these Atlases from the `Resource` folder via [script](../../../../ScriptReference/Resources.html)). Refer to documentation on the [Resources API](../../../../ScriptReference/Resources.html) for more information.

## Method B: Downloadable AssetBundles

Sprite Atlases that are large in size can cause inconvenience for the application user if Unity includes them with the exported build’s download, because they require a lot of bandwidth and device storage. To avoid problems, distribute large Sprite Atlases in **AssetBundles**, so that the player can download each AssetBundle individually at their discretion. Unity then loads the Sprite Atlases during run time via [script](late-binding.html). Refer to the [AssetBundle Workflow](../../../AssetBundles-Building.html) for more information.

Prepare Sprite Atlases for distribution

Late binding
