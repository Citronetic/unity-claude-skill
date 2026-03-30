This version of Unity is unsupported.

Add material properties

Access material properties in a script

# Texture properties

For each texture that is setup as a **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader)/material property, Unity also sets up some extra information in additional vector properties.

## Texture tiling & offset

[Materials](class-Material.html)An asset that defines how a surface should be rendered. [More info](class-Material.html)
See in [Glossary](Glossary.html#Material) often have Tiling and Offset fields for their texture properties. This information is passed into shaders in a float4 *{TextureName}*`_ST` property:

- `x` contains X tiling value

- `y` contains Y tiling value

- `z` contains X offset value

- `w` contains Y offset value

For example, if a shader contains texture named `_MainTex`, the tiling information will be in a `_MainTex_ST` vector.

## Texture size

*{TextureName}*`_TexelSize` - a float4 property contains texture size information:

- `x` contains 1.0/width

- `y` contains 1.0/height

- `z` contains width

- `w` contains height

## Texture HDR parameters

*{TextureName}*`_HDR` - a float4 property with information on how to decode a potentially **HDR**high dynamic range
See in [Glossary](Glossary.html#HDR) (e.g. RGBM-encoded) texture depending on the [color space](color-spaces-landing.html) used. See `DecodeHDR` function in [UnityCG.cginc](SL-BuiltinIncludes.html) shader include file.

Add material properties

Access material properties in a script
