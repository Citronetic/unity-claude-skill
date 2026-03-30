This version of Unity is unsupported.

Custom outline

Edit the custom outline

# Generate the outline

To have Unity automatically generate an outline that follows the shape of the original **Sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite) texture, and that also takes into account transparent areas in the texture, click the **Generate**button. However, you can adjust how tightly the generated outline follows the Sprite texture by adjusting the **Outline Tolerance**slider.

Adjust the **Outline Tolerance** slider to refine the outline of the **Mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../../../mesh.html)
See in [Glossary](../../../Glossary.html#Mesh) that Unity generates. Increasing the value increases how closely the outline follows the shape of the Sprite texture. Leaving the slider at 0 generates a Mesh that more loosely follows the Sprite texture.

[Image: Left: An automatically generated Mesh outline with a low Outline Tolerance. Right: An automatically generated Mesh outline with a high Outline Tolerance.]
*Left*: An automatically generated Mesh outline with a low **Outline Tolerance**. *Right*: An automatically generated Mesh outline with a high **Outline Tolerance**.

Custom outline

Edit the custom outline
