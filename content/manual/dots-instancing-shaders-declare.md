This version of Unity is unsupported.

Support DOTS Instancing in a a custom shader in URP

Access DOTS Instancing properties in a custom shader

# Declare DOTS Instancing properties in a custom shader in URP

To load instance data, such as transform matrices, the **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) needs to define DOTS Instanced properties. Below is an example of a simple DOTS Instanced property block:

```hlsl
UNITY_DOTS_INSTANCING_START(MaterialPropertyMetadata)
    UNITY_DOTS_INSTANCED_PROP(float4, Color)
UNITY_DOTS_INSTANCING_END(MaterialPropertyMetadata)
```

To mark the beginning and end of the property block, use the `UNITY_DOTS_INSTANCING_START` and `UNITY_DOTS_INSTANCING_END` macros followed by the name of the block. The example uses the name `MaterialPropertyMetadata`. There are three allowed block names:

- BuiltinPropertyMetadata

- MaterialPropertyMetadata

- UserPropertyMetadata

The shader can declare one of each, so a DOTS Instanced shader can have between zero and three of such blocks. Unity-defined shader code doesn’t use UserPropertyMetadata so this name is guaranteed to be free for you to use. URP and HDRP define BuiltinPropertyMetadata for every shader they provide and define MaterialPropertyMetadata for most of them too, so it’s best practice to use UserPropertyMetadata. Your custom shaders can use all three possible names, even all at once.

The block can contain any number of DOTS Instanced property definitions formatted like:

```hlsl
UNITY_DOTS_INSTANCED_PROP(PropertyType, PropertyName)
```

`PropertyType` can be any HLSL built-in type (like uint, float4, float4x4, or int2x4) except a bool vector, and `PropertyName` is the name of the DOTS Instanced property. DOTS Instanced properties are completely separate from [regular material properties](SL-Properties.html), and you can give them the same name as another regular material property. This is possible because the `UNITY_DOTS_INSTANCED_PROP` macro generates special constant names which Unity recognizes that don’t conflict with other property names. Shaders that Unity provides give DOTS Instanced properties the same names as regular material properties, but you don’t need to follow this convention.

Internally, Unity provides the shader with a 32-bit integer metadata value for every DOTS Instanced property the shader declares. Unity sets the metadata value when your code makes a [BatchRendererGroup.AddBatch](../ScriptReference/Rendering.BatchRendererGroup.AddBatch.html) call to create the batch associated with the draw. The metadata value defaults to `0` if Unity doesn’t set it. The shader also has access to `ByteAddressBuffer unity_DOTSInstanceData` which Unity sets to the GraphicsBuffer you pass as an argument to `BatchRendererGroup.AddBatch`. This buffer is typically where the shader loads the instance data from. Multiple batches can share a single GraphicsBuffer, but it is also possible for each batch to use its own separate GraphicsBuffer for `unity_DOTSInstanceData`.

**Note**: Unity doesn’t provide any DOTS Instanced data automatically. It’s your responsibility to make sure that the `unity_DOTSInstanceData` buffer of each batch contains the correct data. Instance data must include many properties that are Unity normally provides for **GameObjects**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject), such as transform matrices, **light probe**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe) coefficients, and **lightmap**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap) texture coordinates.

Support DOTS Instancing in a a custom shader in URP

Access DOTS Instancing properties in a custom shader
