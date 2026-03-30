This version of Unity is unsupported.

Add tests to a package

Package manifest file

# Create samples for packages

Starting with Unity Editor version 2019.1, you can add samples to a package. A sample might be a piece of example code, some **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) and textures, some animation, or any other files that you can usually find under the project’s `Assets` folder.

When you open the Package Manager window and select a package containing samples, an **Import** button appears in the package’s [details panel](upm-ui-details.html) for each sample in the package. When you select **Import**, the Package Manager copies the whole subfolder structure for that sample under the project’s `Assets` folder.

To add samples to your package:

1. Put the asset files or example C# code files [under the Samples~ folder](#sample-subfolder). You can have more than one sample in a package; each subfolder of the `Samples~` folder has one sample.

**Note**: The tilde character (`~`) tells Unity to ignore the contents the `Samples~` folder. Such folders aren’t tracked with `.meta` files.

2. Add a [JSON object for each sample](#sample-manifest) under the `samples` array in your `package.json` manifest file.

## Location of sample files

You can add your sample assets under subfolders of the `Samples~` folder of your package. For example, a package with shader samples might look something like this:

```plain
MyPackage
  ├── package.json
  └── Samples~
        ├── SamplesHDRP
        │    ├── Textures
        │    |     ├── MossyRock.bmp
        │    |     └── SandyRock.bmp
        │    └── Shader
        │          ├── Lit Texture Blend HDRP.ShaderGraph
        │          └── Lit Vertex Color HDRP.ShaderGraph
        └── SamplesStandard
        │    ├── Textures
        │    |     ├── MossyRock.bmp
        │    |     └── SandyRock.bmp
        │    └── Shader
        │          ├── StandardTextureBlend.shader
        │          └── StandardVertexColor.shader
        └── SamplesUniversalRP
             ├── Textures
             |     ├── MossyRock.bmp
             |     └── SandyRock.bmp
             └── Shader
                   ├── Lit Texture Blend URP.ShaderGraph
                   └── Lit Vertex Color URP.ShaderGraph
```

## Include your samples in the manifest

Add a JSON array called `samples` to the `package.json` file. For each sample, add a JSON object containing at least the `displayName` and the `path` to the samples folder:

| Key | Description |
| --- | --- |
| displayName | The name of the sample as it appears in the package details in the Package Manager window. |
| description | A brief description of what the sample demonstrates or contains. This is just for the package manifestEach package has a manifest, which provides information about the package to the Package Manager. The manifest contains information such as the name of the package, its version, a description for users, dependencies on other packages (if any), and other details. More infoSee in Glossary. The description doesn’t appear in the interface, even as a tooltip. |
| path | The path from the Samples~ folder to the sample’s root folder. |

For example, using the same structure as the example for [Location of sample files](#sample-subfolder), the `samples` section looks similar to this:

```json
{
    "samples": [
        {
            "displayName": "HDRP Shaders",
            "description": "Contains sample shaders for the High Definition render pipeline",
            "path": "Samples~/SamplesHDRP"
        },
        {
            "displayName": "URP Shaders",
            "description": "Contains sample shaders for the Universal render pipeline",
            "path": "Samples~/SamplesUniversalRP"
        },
        {
            "displayName": "Standard RP Shaders",
            "description": "Contains sample shaders for the Standard render pipeline",
            "path": "Samples~/SamplesStandard"
        }
    ]
}
```

Add tests to a package

Package manifest file
