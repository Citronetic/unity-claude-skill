This version of Unity is unsupported.

Configure edge reflections (Fresnel effect)

Customize the Standard shader source code in the Built-In Render Pipeline

# Set the Rendering Mode in the Standard Shader using a script

When you change the **Rendering Mode**, Unity applies a number of changes to the Material. There is no single C# API to change the Rendering Mode of a Material, but you can make the same changes in your code.

To see the changes that Unity makes when you change the **Rendering Mode**:

1. Download the source code for Unity’s built-in **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader). See [Make your own shader](https://docs.unity3d.com/Manual/StandardShaderMakeYourOwn.html) for instructions.

2. Open the file *StandardShaderGUI.cs*.

3. Locate the area of the file that looks like this, and observe the changes for each **Rendering Mode**.

```cs
switch (blendMode)
        {
            case BlendMode.Opaque:
               // Changes associated with Opaque Rendering Mode are here
                break;
            case BlendMode.Cutout:
                // Changes associated with Cutout Rendering Mode are here
                break;
            case BlendMode.Fade:
                // Changes associated with Fade Rendering Mode are here
                break;
            case BlendMode.Transparent:
                // Changes associated with Transparent Rendering Mode are here
                break;
        }
```

[Image: The helmet visor in this image is rendered using the Transparent mode, because it is supposed to represent a real physical object that has transparent properties. Here the visor is reflecting the skybox in the scene. ]
The helmet visor in this image is rendered using the Transparent mode, because it is supposed to represent a real physical object that has transparent properties. Here the visor is reflecting the skybox in the scene.

[Image: These windows use Transparent mode, but have some fully opaque areas defined in the texture (the window frames). The Specular reflection from the light sources reflects off the transparent areas and the opaque areas.]
These windows use Transparent mode, but have some fully opaque areas defined in the texture (the window frames). The Specular reflection from the light sources reflects off the transparent areas and the opaque areas.

[Image: The hologram in this image is rendered using the Fade mode, because it is supposed to represent an opaque object that is partially faded out.]
The hologram in this image is rendered using the Fade mode, because it is supposed to represent an opaque object that is partially faded out.

[Image: The grass in this image is rendered using the Cutout mode. This gives clear sharp edges to objects which is defined by specifying a cut-off threshold. All parts of the image with the alpha value above this threshold are 100% opaque, and all parts below the threshold are invisible. To the right in the image you can see the material settings and the alpha channel of the texture used.]
The grass in this image is rendered using the Cutout mode. This gives clear sharp edges to objects which is defined by specifying a cut-off threshold. All parts of the image with the alpha value above this threshold are 100% opaque, and all parts below the threshold are invisible. To the right in the image you can see the material settings and the alpha channel of the texture used.

Configure edge reflections (Fresnel effect)

Customize the Standard shader source code in the Built-In Render Pipeline
