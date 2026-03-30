This version of Unity is unsupported.

Transparent Parallax Specular

Transparent Cutout Vertex-Lit

# Transparent Cutout Shader Family

**Note.** Unity 5 introduced the [Standard Shader](shader-StandardShader.html) which replaces these **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).

The Transparent Cutout shaders are used for objects that have fully opaque and fully transparent parts (no partial transparency). Things like chain fences, trees, grass, etc.

## [Transparent Cutout Vertex-Lit](shader-TransCutVertexLit.html)

[Image: shader-TransCutVertexLit]
shader-TransCutVertexLit

**Assets needed:**

- One **Base** texture with alpha channel for Transparency Map

[» More details](shader-TransCutVertexLit.html)

## [Transparent Cutout Diffuse](shader-TransCutDiffuse.html)

[Image: shader-TransCutDiffuse]
shader-TransCutDiffuse

**Assets needed:**

- One **Base** texture with alpha channel for Transparency Map

[» More details](shader-TransCutDiffuse.html)

## [Transparent Cutout Specular](shader-TransCutSpecular.html)

[Image: shader-TransCutSpecular]
shader-TransCutSpecular

**Assets needed:**

- One **Base** texture with alpha channel for combined Transparency Map/Specular Map

**Note:**
One limitation of this shader is that the **Base** texture’s alpha channel doubles as a Specular Map for the Specular shaders in this family.

[» More details](shader-TransCutSpecular.html)

## [Transparent Cutout Bumped](shader-TransCutBumpedDiffuse.html)

[Image: shader-TransCutBumpedDiffuse]
shader-TransCutBumpedDiffuse

**Assets needed:**

- One **Base** texture with alpha channel for Transparency Map

- One **Normal map**A type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.
See in [Glossary](Glossary.html#Normalmap) normal map, no alpha channel required

[» More details](shader-TransCutBumpedDiffuse.html)

## [Transparent Cutout Bumped Specular](shader-TransCutBumpedSpecular.html)

[Image: shader-TransCutBumpedSpecular]
shader-TransCutBumpedSpecular

**Assets needed:**

- One **Base** texture with alpha channel for combined Transparency Map/Specular Map

- One **Normal map** normal map, no alpha channel required

**Note:**
One limitation of this shader is that the **Base** texture’s alpha channel doubles as a Specular Map for the Specular shaders in this family.

[» More details](shader-TransCutBumpedSpecular.html)

TransparentCutoutFamily

Transparent Parallax Specular

Transparent Cutout Vertex-Lit
