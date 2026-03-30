This version of Unity is unsupported.

Differences between linear and gamma color space

Linear color space

# Gamma color space

While a linear workflow ensures more precise rendering, sometimes you may want a gamma workflow (for example, on some platforms the hardware only supports the gamma format).

For information on how to set the color space of your project, refer to [Set a project’s color space](set-project-color-space.html).

Unity uses the gamma color space for color calculations, and keeps imported textures in the gamma color space. Unity also makes sure **shaders**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) keep textures in gamma color space, calculate in gamma color space, and write to a framebuffer that doesn’t reapply gamma correction.

[Texture Import Settings](class-TextureImporter.html) might show textures as being in linear format, because this avoids shaders recognising the textures as being in gamma color space and automatically removing the gamma correction.

**Note**: You can choose to bypass sRGB sampling in **Color Space: Gamma** mode. For more information on how to do this, refer to [Disable sRGB sampling for a texture](disable-srgb-sampling-textures.html).

Differences between linear and gamma color space

Linear color space
