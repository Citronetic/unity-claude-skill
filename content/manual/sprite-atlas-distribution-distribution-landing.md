This version of Unity is unsupported.

Optimize Sprite Atlas usage and size for improved performance

Prepare Sprite Atlases for distribution

# Distribution

To prepare **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlases for distribution, ensure the source texture is uncompressed, manage build inclusion, use late binding for performance, and handle sprite requests and creation at runtime while resolving atlas interactions based on their inclusion or exclusion in the build.

| Topic | Description |
| --- | --- |
| Prepare Sprite Atlases for distribution | Ensure the source texture is uncompressed and manage how the Atlas is loaded. |
| Methods of distribution | Place Sprite Atlases in the build’s Resources folder or as downloadable AssetBundles. |
| Late binding | Enhance performance by loading or swapping in Sprite Atlases of different resolutions at runtime. |
| Load a Sprite Atlas with SpriteAtlasManager.atlasRequested | Manually load the Sprite AtlasA utility that packs several sprite textures tightly together within a single texture known as an atlas. More infoSee in Glossary using late binding and send the sprite to the Unity Editor. |
| Retrieve sprite contents at runtime with GetSprites | Create sprites from a Sprite Atlas at runtime. |
| Resolve different Sprite Atlas scenarios | Resolve sprite and Sprite Atlas interactions based on various conditions. |

Optimize Sprite Atlas usage and size for improved performance

Prepare Sprite Atlases for distribution
