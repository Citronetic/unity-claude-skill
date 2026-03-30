This version of Unity is unsupported.

Create a variant Sprite Atlas

Sprite Atlas workflow

# Scale the textures of a variant Sprite Atlas

A Variant **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) Atlas scales the Textures it gets from its Master Atlas via its **Scale** property. The resolution of the Variant Atlas’ Texture is the result of the Master Atlas’ Texture multiplied by the Scale factor.

1. Set the **Scale** of the Variant Atlas from the range of 0.1 to 1.

2. Create multiple Variant Atlases with the same Master Atlas and different Scale values to create lower-resolution copies of the Atlas Texture.

This is useful if you want to create various Variant Atlases for a range of platforms with different hardware limitations.

Create a variant Sprite Atlas

Sprite Atlas workflow
