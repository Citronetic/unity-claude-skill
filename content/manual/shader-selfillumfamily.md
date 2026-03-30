This version of Unity is unsupported.

Transparent Cutout Bumped Specular

Self-Illuminated Vertex-Lit

# Self-Illuminated Shader Family

**Note.** Unity 5 introduced the [Standard Shader](shader-StandardShader.html) which replaces these **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).

The **Self-Illuminated** shaders will emit light only onto themselves based on an attached alpha channel. They do not require any Lights to shine on them to emit this light. Any vertex lights or **pixel**The smallest unit in a computer image. Pixel size depends on your screen resolution. Pixel lighting is calculated at every screen pixel. [More info](ShadowPerformance.html)
See in [Glossary](Glossary.html#pixel) lights will simply add more light on top of the self-illumination.

This is mostly used for light emitting objects. For example, parts of the wall texture could be self-illuminated to simulate lights or displays. It can also be useful to light power-up objects that should always have consistent lighting throughout the game, regardless of the lights shining on it.

## [Self-Illuminated Vertex-Lit](shader-SelfIllumVertexLit.html)

[Image: shader-SelfIllumVertexLit]
shader-SelfIllumVertexLit

**Assets needed:**

- One **Base** texture, no alpha channel required

- One **Illumination** texture with alpha channel for Illumination Map

[» More details](shader-SelfIllumVertexLit.html)

## [Self-Illuminated Diffuse](shader-SelfIllumDiffuse.html)

[Image: shader-SelfIllumDiffuse]
shader-SelfIllumDiffuse

**Assets needed:**

- One **Base** texture, no alpha channel required

- One **Illumination** texture with alpha channel for Illumination Map

[» More details](shader-SelfIllumDiffuse.html)

## [Self-Illuminated Specular](shader-SelfIllumSpecular.html)

[Image: shader-SelfIllumSpecular]
shader-SelfIllumSpecular

**Assets needed:**

- One **Base** texture with alpha channel for Specular Map

- One **Illumination** texture with alpha channel for Illumination Map

[» More details](shader-SelfIllumSpecular.html)

## [Self-Illuminated Bumped](shader-SelfIllumBumpedDiffuse.html)

[Image: shader-SelfIllumBumpedDiffuse]
shader-SelfIllumBumpedDiffuse

**Assets needed:**

- One **Base** texture, no alpha channel required

- One **Normal map**A type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.
See in [Glossary](Glossary.html#Normalmap) normal map with alpha channel for Illumination

[» More details](shader-SelfIllumBumpedDiffuse.html)

## [Self-Illuminated Bumped Specular](shader-SelfIllumBumpedSpecular.html)

[Image: shader-SelfIllumBumpedSpecular]
shader-SelfIllumBumpedSpecular

**Assets needed:**

- One **Base** texture with alpha channel for Specular Map

- One **Normal map** normal map with alpha channel for Illumination Map

[» More details](shader-SelfIllumBumpedSpecular.html)

## [Self-Illuminated Parallax](shader-SelfIllumParallaxDiffuse.html)

[Image: shader-SelfIllumParallaxDiffuse]
shader-SelfIllumParallaxDiffuse

**Assets needed:**

- One **Base** texture, no alpha channel required

- One **Normal map** normal map with alpha channel for Illumination Map & Parallax Depth combined

**Note:**
One consideration of this shader is that the **Bumpmap** texture’s alpha channel doubles as a Illumination and the Parallax Depth.

[» More details](shader-SelfIllumParallaxDiffuse.html)

## [Self-Illuminated Parallax Specular](shader-SelfIllumParallaxSpecular.html)

[Image: shader-SelfIllumParallaxSpecular]
shader-SelfIllumParallaxSpecular

**Assets needed:**

- One **Base** texture with alpha channel for Specular Map

- One **Normal map** normal map with alpha channel for Illumination Map & Parallax Depth combined

**Note:**
One consideration of this shader is that the **Bumpmap** texture’s alpha channel doubles as a Illumination and the Parallax Depth.

[» More details](shader-SelfIllumParallaxSpecular.html)

SelfIllumFamily

Transparent Cutout Bumped Specular

Self-Illuminated Vertex-Lit
