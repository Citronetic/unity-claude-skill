This version of Unity is unsupported.

Make a material transparent

Configure edge reflections (Fresnel effect)

# Set the color of a material in the Standard Shader

The **Albedo** property controls the base color and transparency of the material.

## Set a single color

To use a single color across a material, do either of the following:

- Select the swatch to open the **Color** window.

- Select the dropper to select a new color from anywhere on your screen.

In the **Color** window, use the **Alpha** (**A**) slider to set transparency. Refer to [Transparency](StandardShaderTransparency.html) for more information.

Refer to [Color](graphics-color.html) for more information about color.

## Set a texture

To assign a texture to a material, drag the texture asset from the **Project window**A window that shows the contents of your `Assets` folder (Project tab) [More info](ProjectView.html)
See in [Glossary](Glossary.html#Projectwindow) to the **Albedo** property.

Unity uses the swatch color to tint the texture.

The alpha channel of the texture controls the transparency of the material. Refer to [Transparency](StandardShaderTransparency.html) for more information.

Refer to [Textures](Textures.html)An image used when rendering a GameObject, Sprite, or UI element. Textures are often applied to the surface of a mesh to give it visual detail. [More info](class-TextureImporter.html)
See in [Glossary](Glossary.html#texture) for more information about textures.

## Additional resources

- [Material.Color](../ScriptReference/Material-color.html)

Make a material transparent

Configure edge reflections (Fresnel effect)
