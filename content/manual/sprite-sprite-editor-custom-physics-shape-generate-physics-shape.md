This version of Unity is unsupported.

Open the Custom Physics Shape editor

Manually edit the physics shape

# Generate the physics shape

To have Unity automatically generate a physics shape that follows the shape of the original **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) texture, and that also takes into account transparent areas in the texture;

1. Click the **Generate** button.

However, you can adjust how tightly the generated physics shape follows the Sprite texture by adjusting the **Outline Tolerance**slider.

2. Adjust the **Outline Tolerance** slider to refine the outline of the physics shape that Unity generates.

Increasing the value increases how closely the outline follows the shape of the Sprite texture. Leaving the slider at 0 generates a physics shape that more loosely follows the Sprite texture.

3. After adjusting the Outline Tolerance value, to have Unity automatically generate the physics shape based on the slider settings, click **Generate**.

If you adjust the slider value after generating an outline, to regenerate the outline based on the updated slider value, click **Generate** again.

[Image: The generated outline and control points.]
The generated outline and control points.

Open the Custom Physics Shape editor

Manually edit the physics shape
