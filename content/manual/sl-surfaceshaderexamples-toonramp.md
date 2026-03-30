This version of Unity is unsupported.

Wrapped diffuse Surface Shader example in the Built-In Render Pipeline

Global illumination Surface Shader example in the Built-In Render Pipeline

# Toon shading Surface Shader example in the Built-In Render Pipeline

The following example shows a “Ramp” lighting model that uses a Texture ramp to define how surfaces respond to the angles between the light and the normal. This can be used for a variety of effects, and is especially effective when used with **Toon** lighting.

```hlsl
...ShaderLab code...
    CGPROGRAM
    #pragma surface surf Ramp

    sampler2D _Ramp;

    half4 LightingRamp (SurfaceOutput s, half3 lightDir, half atten) {
        half NdotL = dot (s.Normal, lightDir);
        half diff = NdotL * 0.5 + 0.5;
        half3 ramp = tex2D (_Ramp, float2(diff)).rgb;
        half4 c;
        c.rgb = s.Albedo * _LightColor0.rgb * ramp * atten;
        c.a = s.Alpha;
        return c;
    }

    struct Input {
        float2 uv_MainTex;
    };

    sampler2D _MainTex;

    void surf (Input IN, inout SurfaceOutput o) {
        o.Albedo = tex2D (_MainTex, IN.uv_MainTex).rgb;
    }
    ENDCG
    ...ShaderLab code...
```

Here’s how it looks like with a Texture and without a Texture, with one directional Light in the **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene):

[Image: Shader using both a lighting ramp texture and a diffuse texture.]
[Image: Shader using only a lighting ramp texture.]

[Image: A lighting ramp texture example.]
A lighting ramp texture example.

Wrapped diffuse Surface Shader example in the Built-In Render Pipeline

Global illumination Surface Shader example in the Built-In Render Pipeline
