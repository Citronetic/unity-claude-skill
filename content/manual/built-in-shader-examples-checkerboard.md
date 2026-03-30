This version of Unity is unsupported.

Single color shader example in the Built-In Render Pipeline

Simple unlit shader example in the Built-In Render Pipeline

# Checkerboard pattern shader example in the Built-In Render Pipeline

[Image: A cat-like character rendered with a checkerboard pattern.]
A cat-like character rendered with a checkerboard pattern.

Here’s a **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) that outputs a checkerboard pattern based on texture coordinates of a **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh):

```hlsl
Shader "Unlit/Checkerboard"
{
    Properties
    {
        _Density ("Density", Range(2,50)) = 30
    }
    SubShader
    {
        Pass
        {
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };

            float _Density;

            v2f vert (float4 pos : POSITION, float2 uv : TEXCOORD0)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(pos);
                o.uv = uv * _Density;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                float2 c = i.uv;
                c = floor(c) / 2;
                float checker = frac(c.x + c.y) * 2;
                return checker;
            }
            ENDHLSL
        }
    }
}
```

The density slider in the [Properties](SL-Properties.html) block controls how dense the checkerboard is. In the **vertex shader**A program that runs on each vertex of a 3D model when the model is being rendered. [More info](writing-shader-writing-shader-programs-hlsl.html)
See in [Glossary](Glossary.html#vertexshader), the mesh UVs are multiplied by the density value to take them from a range of 0 to 1 to a range of 0 to density. Let’s say the density was set to 30 - this will make **i.uv** input into the fragment shader contain floating point values from zero to 30 for various places of the mesh being rendered.

Then the fragment shader code takes only the integer part of the input coordinate using HLSL’s built-in **floor** function, and divides it by two. Recall that the input coordinates were numbers from 0 to 30; this makes them all be “quantized” to values of 0, 0.5, 1, 1.5, 2, 2.5, and so on. This was done on both the x and y components of the input coordinate.

Next up, we add these x and y coordinates together (each of them only having possible values of 0, 0.5, 1, 1.5, …) and only take the fractional part using another built-in HLSL function, **frac**. Result of this can only be either 0.0 or 0.5. We then multiply it by two to make it either 0.0 or 1.0, and output as a color (this results in black or white color respectively).

Single color shader example in the Built-In Render Pipeline

Simple unlit shader example in the Built-In Render Pipeline
