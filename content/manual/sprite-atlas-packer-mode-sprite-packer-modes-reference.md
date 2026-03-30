This version of Unity is unsupported.

Enable or disable the Sprite Atlas default packing behavior

Sprite Atlas V2

# Sprite packer modes reference

| Mode | Function |
| --- | --- |
| Disabled | Select this mode to disable SpriteA 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. More infoSee in Glossary Atlas packing in the current Project. Sprite Atlases are not built when the Project enters Play mode or when publishing a build. Pack Preview is also disabled. |
| Sprite AtlasA utility that packs several sprite textures tightly together within a single texture known as an atlas. More infoSee in Glossary V1 - Enabled For Builds | Select this mode to have Unity pack Sprites into the Sprite Atlas when publishing builds only. The Editor and Play mode reference the original source Texture instead of the Texture within the Sprite Atlas. |
| Sprite Atlas V1 - Always Enabled | This option is enabled by default. Select this mode to have Unity pack selected Textures into the Sprite Atlas, and Sprites reference the packed Textures during runtime. However, Sprites will reference the original unpacked Textures during Edit mode. |
| Sprite Atlas V2 - Enabled | Select this mode to have Unity pack Sprites into the Sprite Atlas immediately when there are any changes. The packed Sprite Atlas is available when the project enters Play mode or when publishing a build. |
| Sprite Atlas V2 - Enabled For Builds | Select this mode to have Unity pack Sprites into the Sprite Atlas only when publishing a build. The Editor and Play mode will reference the original unpacked Textures. |

Enable or disable the Sprite Atlas default packing behavior

Sprite Atlas V2
