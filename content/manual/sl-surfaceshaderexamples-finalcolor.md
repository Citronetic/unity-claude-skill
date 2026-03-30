This version of Unity is unsupported.

Custom data Surface Shader example in the Built-In Render Pipeline

Decals Surface Shader example in the Built-In Render Pipeline

# Final color modifier Surface Shader example in the Built-In Render Pipeline

It is possible to use a “final color modifier” function that will modify the final color computed by the **Shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader).The **Surface Shader**A streamlined way of writing shaders for the Built-in Render Pipeline. [More info](SL-SurfaceShaders.html)
See in [Glossary](Glossary.html#SurfaceShader) compilation directive `finalcolor:functionName` is used for this, with a function that takes `Input IN, SurfaceOutput o, inout fixed4 color` parameters.

Here’s a simple Shader that applies tint to the final color. This is different from just applying tint to the surface Albedo color: this tint will also affect any color that comes from **Lightmaps**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap), **Light Probes**Light probes store information about how light passes through space in your scene. A collection of light probes arranged within a given space can improve lighting on moving objects and static LOD scenery within that space. [More info](LightProbes.html)
See in [Glossary](Glossary.html#LightProbe) and similar extra sources.

```hlsl
Shader "Example/Tint Final Color" {
    Properties {
      _MainTex ("Texture", 2D) = "white" {}
      _ColorTint ("Tint", Color) = (1.0, 0.6, 0.6, 1.0)
    }
    SubShader {
      Tags { "RenderType" = "Opaque" }
      CGPROGRAM
      #pragma surface surf Lambert finalcolor:mycolor
      struct Input {
          float2 uv_MainTex;
      };
      fixed4 _ColorTint;
      void mycolor (Input IN, SurfaceOutput o, inout fixed4 color)
      {
          color *= _ColorTint;
      }
      sampler2D _MainTex;
      void surf (Input IN, inout SurfaceOutput o) {
           o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;
      }
      ENDCG
    }
    Fallback "Diffuse"
  }
```

[Image: Shader example that uses the final color modifier method.]
Shader example that uses the final color modifier method.

Custom data Surface Shader example in the Built-In Render Pipeline

Decals Surface Shader example in the Built-In Render Pipeline
