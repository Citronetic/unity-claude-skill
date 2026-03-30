This version of Unity is unsupported.

Usage and Performance of Built-in Shaders

Vertex-Lit

# Normal Shader Family

**Note.** Unity 5 introduced the [Standard Shader](shader-StandardShader.html) which replaces these **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).

These shaders are the basic shaders in Unity. They are not specialized in any way and should be suitable for most opaque objects. They are not suitable if you want your object to be transparent, emitting light etc.

## [Vertex Lit](shader-NormalVertexLit.html)

[Image: shader-NormalVertexLit]
shader-NormalVertexLit

**Assets needed:**

- One **Base** texture, no alpha channel required

## [Diffuse](shader-NormalDiffuse.html)

[Image: shader-NormalDiffuse]
shader-NormalDiffuse

**Assets needed:**

- One **Base** texture, no alpha channel required

## [Specular](shader-NormalSpecular.html)

[Image: shader-NormalSpecular]
shader-NormalSpecular

**Assets needed:**

- One **Base** texture with alpha channel for Specular Map

## [Normal mapped](shader-NormalBumpedDiffuse.html)

[Image: shader-NormalBumpedDiffuse]
shader-NormalBumpedDiffuse

**Assets needed:**

- One **Base** texture, no alpha channel required

- One **Normal map**A type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.
See in [Glossary](Glossary.html#Normalmap)

## [Normal mapped Specular](shader-NormalBumpedSpecular.html)

[Image: shader-NormalBumpedSpecular]
shader-NormalBumpedSpecular

**Assets needed:**

- One **Base** texture with alpha channel for Specular Map

- One **Normal map**

## [Parallax](shader-NormalParallaxDiffuse.html)

[Image: shader-NormalParallaxDiffuse]
shader-NormalParallaxDiffuse

**Assets needed:**

- One **Base** texture, no alpha channel required

- One **Normal map**

- One **Height** texture with Parallax Depth in the alpha channel

## [Parallax Specular](shader-NormalParallaxSpecular.html)

[Image: shader-NormalParallaxSpecular]
shader-NormalParallaxSpecular

**Assets needed:**

- One **Base** texture with alpha channel for Specular Map

- One **Normal map**

- One **Height** texture with Parallax Depth in the alpha channel

## [Decal](shader-NormalDecal.html)

[Image: shader-NormalDecal]
shader-NormalDecal

**Assets needed:**

- One **Base** texture, no alpha channel required

- One **Decal** texture with alpha channel for Decal transparency

## [Diffuse Detail](shader-NormalDiffuseDetail.html)

[Image: shader-NormalDiffuseDetail]
shader-NormalDiffuseDetail

**Assets needed:**

- One **Base** texture, no alpha channel required

- One **Detail** grayscale texture; with 50% gray being neutral color

NormalFamily

Usage and Performance of Built-in Shaders

Vertex-Lit
