This version of Unity is unsupported.

DOTS Instancing shaders in URP

Declare DOTS Instancing properties in a custom shader in URP

# Support DOTS Instancing in a a custom shader in URP

To support DOTS Instancing, a **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) needs to do the following:

- Use shader model 4.5 or newer. Specify `#pragma target 4.5` or higher.

- Support the `DOTS_INSTANCING_ON` keyword. Declare this with `#pragma multi_compile _ DOTS_INSTANCING_ON`.

- Declare at least one block of DOTS Instanced properties each of which has least one property. For more information, see [Declaring DOTS Instanced properties](dots-instancing-shaders-unity-dots-instanced-prop.html).

**Note**: Shader Graphs and shaders that Unity provides in URP and HDRP support DOTS Instancing.

DOTS Instancing shaders in URP

Declare DOTS Instancing properties in a custom shader in URP
