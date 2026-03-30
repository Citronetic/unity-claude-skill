This version of Unity is unsupported.

Example of a Surface Shader that supports GPU Instancing in the Built-In Render Pipeline

Example of changing per-instance data at runtime in the Built-In Render Pipeline

# Example of a shader that supports GPU Instancing in the Built-In Render Pipeline

The following example demonstrates how to create an instanced vertex and fragment **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) with different color values for each instance. Unlike the **surface shader**A streamlined way of writing shaders for the Built-in Render Pipeline. [More info](SL-SurfaceShaders.html)
See in [Glossary](Glossary.html#SurfaceShader), when you create the vertex and fragment shader you must use UNITY_SETUP_INSTANCE_ID to manually set up an instance ID.

```hlsl
Shader "Custom/SimplestInstancedShader"
{
    Properties
    {
        _Color ("Color", Color) = (1, 1, 1, 1)
    }

    SubShader
    {
        Tags { "RenderType"="Opaque" }
        LOD 100

        Pass
        {
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma multi_compile_instancing
            #include "UnityCG.cginc"

            struct appdata
            {
                float4 vertex : POSITION;
                UNITY_VERTEX_INPUT_INSTANCE_ID
            };

            struct v2f
            {
                float4 vertex : SV_POSITION;
                UNITY_VERTEX_INPUT_INSTANCE_ID // use this to access instanced properties in the fragment shader.
            };

            UNITY_INSTANCING_BUFFER_START(Props)
            UNITY_DEFINE_INSTANCED_PROP(float4, _Color)
            UNITY_INSTANCING_BUFFER_END(Props)

            v2f vert(appdata v)
            {
                v2f o;

                UNITY_SETUP_INSTANCE_ID(v);
                UNITY_TRANSFER_INSTANCE_ID(v, o);
                o.vertex = UnityObjectToClipPos(v.vertex);
                return o;
            }

            fixed4 frag(v2f i) : SV_Target
            {
                UNITY_SETUP_INSTANCE_ID(i);
                return UNITY_ACCESS_INSTANCED_PROP(Props, _Color);
            }
            ENDHLSL
        }
    }
}
```

Example of a Surface Shader that supports GPU Instancing in the Built-In Render Pipeline

Example of changing per-instance data at runtime in the Built-In Render Pipeline
