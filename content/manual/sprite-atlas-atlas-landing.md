This version of Unity is unsupported.

Sprite mask reference

Create a Sprite Atlas

# Sprite atlas

A 2D project uses **sprites**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../sprite/sprite-landing.html)
See in [Glossary](../../Glossary.html#Sprite) and other graphics to create the visuals of its **scenes**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene). This means a single project can contain many texture files. Unity typically issues a [draw call](../../DrawCallBatching.html) for each texture in the scene; however, in a project with many textures, multiple draw calls become resource-intensive and can negatively impact the performance of your project.

A **Sprite Atlas**A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../Glossary.html#SpriteAtlas) is an asset that consolidates several textures into a single combined texture. Unity can call this single texture to issue a single draw call instead of multiple draw calls to access the packed textures all at once at a smaller performance overhead. You can use the [Sprite Atlas API](../../../ScriptReference/U2D.SpriteAtlas.html) to control loading the Sprite Atlases at your project’s runtime.

| Topic | Description |
| --- | --- |
| Create a Sprite Atlas | Create a .spriteatlas file in the Assets folder. |
| Master and Variant Sprite Atlases | Choose the Type property for a Sprite Atlas. |
| Sprite Atlas Workflow | Follow the general workflow to create a Sprite Atlas. |
| Prepare Sprite Atlases for distribution | Distribute Sprite Atlases. |
| Sprite Atlas V2 | Use the Sprite Atlas V2 mode. |
| Sprite Packer Modes | Choose the default packing behavior for a Sprite Atlas. |
| Sprite Atlas reference | Refer to the properties of the Sprite Atlas. |

Sprite mask reference

Create a Sprite Atlas
