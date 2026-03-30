This version of Unity is unsupported.

Sprite Atlas V2

Enable Sprite Atlas V2

# Sprite Atlas V2

The original version 1 of the **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlas system packs textures (from sprites, sprites within textures, and sprites in folders) into an Atlas Texture. It packs these textures when it enters Play mode, or when it builds the Player or an AssetBundle. [AssetDatabase V1](../../../AssetDatabase.html) can’t have dependencies, and has no importer support for named objects, so Unity packs its Sprite Atlases through a custom mechanism and stores the output data of textures and render data in the `Library/AtlasCache` folder.

**Note:** From Unity 2022.2 onwards, the Editor’s **Sprite Atlas**A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../Glossary.html#SpriteAtlas) **Mode** is set to **Sprite Atlas V2 - Enabled** by default. Sprite Atlas V2 uses the functionalities exposed by [AssetDatabase V2](https://docs.unity3d.com/2019.3/Documentation/Manual/AssetDatabase.html) (ADBV2) such as [Cache Server](../../../UnityAccelerator.html) support, which the original Sprite Atlas system didn’t support.

Sprite Atlas V2

Enable Sprite Atlas V2
