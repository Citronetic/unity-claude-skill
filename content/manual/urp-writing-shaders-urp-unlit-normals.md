This version of Unity is unsupported.

Draw a texture in a shader in URP

Write a depth-only pass in a Universal Render Pipeline shader

# Visualize normal vectors in a shader in URP

The Unity **shader**A program that runs on the GPU. [More info](../Shaders.html)
See in [Glossary](../Glossary.html#Shader) in this example visualizes the normal vector values on the **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](../mesh.html)
See in [Glossary](../Glossary.html#Mesh).

Use the Unity shader source file from section [URP unlit basic shader](writing-shaders-urp-basic-unlit-structure.html) and make the following changes to the **ShaderLab**Unity’s language for defining the structure of Shader objects. [More info](../SL-Shader.html)
See in [Glossary](../Glossary.html#ShaderLab) code:

1. In `struct Attributes`, which is the input structure for the **vertex shader**A program that runs on each vertex of a 3D model when the model is being rendered. [More info](../writing-shader-writing-shader-programs-hlsl.html)
See in [Glossary](../Glossary.html#vertexshader) in this example, declare the variable containing the normal vector for each vertex.

```cpp
struct Attributes
{
    float4 positionOS   : POSITION;
    // Declaring the variable containing the normal vector for each vertex.
    half3 normal        : NORMAL;
};
```

2. In `struct Varyings`, which is the input structure for the fragment shader in this example, declare the variable for storing the normal vector values for each fragment:

```cpp
struct Varyings
{
    float4 positionHCS  : SV_POSITION;
    // The variable for storing the normal vector values.
    half3 normal        : TEXCOORD0;
};
```

This example uses the three components of the normal vector as RGB color values for each fragment.

3. To render the normal vector values on the mesh, use the following code as the fragment shader:

```cpp
half4 frag(Varyings IN) : SV_Target
{
    half4 color = 0;
    color.rgb = IN.normal;
    return color;
}
```

4. Unity renders the normal vector values on the mesh:

[Image: Rendering normals without compression]
Rendering normals without compression

A part of the capsule is black. This is because in those points, all three components of the normal vector are negative. The next step shows how to render values in those areas as well.

5. To render negative normal vector components, use the **compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](../Glossary.html#compression) technique. To compress the range of normal component values `(-1..1)` to color value range `(0..1)`, change the following line:

```cpp
color.rgb = IN.normal;
```

to this line:

```cpp
color.rgb = IN.normal * 0.5 + 0.5;
```

Now Unity renders the normal vector values as colors on the mesh.

[Image: Rendering normals with compression]
Rendering normals with compression

Below is the complete ShaderLab code for this example.

```cpp
// This shader visuzlizes the normal vector values on the mesh.
Shader "Example/URPUnlitShaderNormal"
{
    Properties
    { }

    SubShader
    {
        Tags { "RenderType" = "Opaque" "RenderPipeline" = "UniversalPipeline" }

        Pass
        {
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"

            struct Attributes
            {
                float4 positionOS   : POSITION;
                // Declaring the variable containing the normal vector for each
                // vertex.
                half3 normal        : NORMAL;
            };

            struct Varyings
            {
                float4 positionHCS  : SV_POSITION;
                half3 normal        : TEXCOORD0;
            };

            Varyings vert(Attributes IN)
            {
                Varyings OUT;
                OUT.positionHCS = TransformObjectToHClip(IN.positionOS.xyz);
                // Use the TransformObjectToWorldNormal function to transform the
                // normals from object to world space. This function is from the
                // SpaceTransforms.hlsl file, which is referenced in Core.hlsl.
                OUT.normal = TransformObjectToWorldNormal(IN.normal);
                return OUT;
            }

            half4 frag(Varyings IN) : SV_Target
            {
                half4 color = 0;
                // IN.normal is a 3D vector. Each vector component has the range
                // -1..1. To show all vector elements as color, including the
                // negative values, compress each value into the range 0..1.
                color.rgb = IN.normal * 0.5 + 0.5;
                return color;
            }
            ENDHLSL
        }
    }
}
```

Draw a texture in a shader in URP

Write a depth-only pass in a Universal Render Pipeline shader
