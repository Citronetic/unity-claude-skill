This version of Unity is unsupported.

WebGL2

WebGPU (Experimental)

# Recommendations for both WebGL2 and WebGPU APIs

If you use either of the WebGL2 or WebGPU APIs, there are recommendations and restrictions you need be aware of:

- [Recommendations for how to use fonts in your Web application](#recommendations-for-how-to-use-fonts-in-your-web-application).

- [Restrictions on global illumination in Web](#restrictions-on-global-illumination-in-web).

- [Recommendations on how to use video in Web](#recommendations-on-how-to-use-video-in-web).

- [Restrictions on shader variants in Web](#information-about-shader-variants-in-web).

**Note:** There are further restrictions and limitations that are unique to each API that you need to be aware of. For more information, refer to [WebGL2](WebGL2.html) or [Limitations of WebGPU](WebGPU-limitations.html).

## Recommendations for how to use fonts in your Web application

Unity Web supports dynamic font rendering similar to other Unity platforms. However, Unity Web doesn’t have access to the fonts installed on the user’s machine, so if you want to use any fonts, include them in the project folder (including any fallback fonts for international characters, or bold/italic versions of fonts), and set as fallback font names.

## Restrictions on global illumination in Web

Unity Web only supports [Baked Global Illumination](LightingInUnity.html#globalIllumination). Realtime **Global Illumination**A group of techniques that model both direct and indirect lighting to provide realistic lighting results.
See in [Glossary](Glossary.html#globalillumination) isn’t currently supported in Web. Also, Unity Web supports non-directional **lightmaps**A pre-rendered texture that contains the effects of light sources on static objects in the scene. Lightmaps are overlaid on top of scene geometry to create the effect of lighting. [More info](Lightmapping.html)
See in [Glossary](Glossary.html#Lightmap) only.

## Recommendations on how to use video in Web

You can’t use `VideoClipImporter` to import video clips to your Unity project because it might increase the initial asset data download size and prevent network streaming. To use video playback in Web:

1. Use the `URL` option in the VideoPlayer component.

2. Place the asset in the `StreamingAssets` directory to use the built-in network streaming of your browser.

## Recommendations for shader variants in Web

Due to limited available memory in Web, don’t include unwanted **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) variants because it can lead to unnecessary memory usage. Therefore, it’s recommended to familiarize yourself with [shader variants](shader-variants.html)A verion of a shader program that Unity generates according to a specific combination of shader keywords and their status. A Shader object can contain multiple shader variants. [More info](shader-variants.html)
See in [Glossary](Glossary.html#Shadervariant) and [shader stripping](shader-variant-stripping.html). Also, take extra care to ensure that you don’t add shaders with too many variants (for example, Unity’s [Standard Shader](shader-StandardShader.html)) to the [Always-included Shaders](class-GraphicsSettings.html#Always) section in [Graphics Settings](class-GraphicsSettings.html).

## Additional resources

- [WebGL2](WebGL2.html)

- [WebGPU (Experimental)](WebGPU.html)

WebGL2

WebGPU (Experimental)
