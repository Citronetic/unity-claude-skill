This version of Unity is unsupported.

Sprite Atlas workflow

Create a Sprite Atlas Asset

# Create a sprite Atlas workflow

**Prerequisites:**
You must have the [2D Sprite](com.unity.2d.sprite.html) package installed to have the option to create a **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlas asset. This package is part of the [2D feature set](../../../2DFeature.html) and is automatically installed if you select the [2D template](https://docs.unity3d.com/hub/manual/Templates.html) when creating a new project. You can also manually install this package via [Unity’s Package Manager](../../../Packages.html).

## Sprite Atlas Workflow

Follow the steps below to create a Sprite Atlas asset and how to select different options and features when you include a Sprite Atlas in your projects.

1. Create a [Sprite Atlas](create-sprite-atlas-asset.html)A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../Glossary.html#SpriteAtlas) Asset.

2. Select a list of [Objects for Packing](select-items-objects-packing-list.html) into the Sprite Atlas.

3. Enable [Include in build](include-build.html) on Sprite Atlases to include them with the project.

4. (Optional) Create a [Variant Sprite Atlas](../master-variant/variant-sprite-atlas.html).

5. (Optional) Prepare Sprite Atlases for [distribution](../distribution/prepare-sprite-atlases-distribution.html).

Sprites prepared for distribution need to be loaded via [Late Binding](../distribution/late-binding.html) with a script.

6. (Optional) [Optimize](optimize-sprite-atlas-usage-size-improved-performance.html) Sprite Atlas usage and size in your Project for improved performance.

Sprite Atlas workflow

Create a Sprite Atlas Asset
