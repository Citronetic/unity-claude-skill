This version of Unity is unsupported.

Configure mipmap streaming

Preload mipmap levels

# Override the mipmap level of a texture

You configure Unity to override the mipmap level of a texture using the following:

- The **Priority** property in the **Texture Import Settings** window of the texture.

- The [Texture2D.requestedMipmapLevel](../ScriptReference/Texture2D-requestedMipmapLevel.html) API.

## Use the Priority property

Follow these steps:

1. Select the texture asset in the **Project** window.

2. In the **Texture Import Settings** window, in the **Advanced** section, set a **Priority** value between –128 and 127.

When Unity needs to reduce mipmap levels to meet the memory limit, it considers textures in priority order from low to high until it meets the limit. This means textures with a higher priority value are more likely to keep their higher-resolution mipmap levels.

Unity removes a mipmap level of a lower-priority texture every time it considers textures at that priority or higher. For example, if you set one texture to a **Priority** of 1 and another texture to a **Priority** of 5, Unity might remove four mipmap levels before it considers the second texture.

You can also use the following APIs to set the **Priority** value:

- [TextureImporter.streamingMipmapsPriority](../ScriptReference/TextureImporter-streamingMipmapsPriority.html)

- [Texture2D.streamingMipmapsPriority](../ScriptReference/Texture2D-streamingMipmapsPriority.html)

- [IHVImageFormatImporter.streamingMipmapsPriority](../ScriptReference/IHVImageFormatImporter-streamingMipmapsPriority.html)

## Use the API

Use the following APIs:

- [Texture2D.requestedMipmapLevel](../ScriptReference/Texture2D-requestedMipmapLevel.html) to request that Unity overrides the mipmap level of the texture.

- [Texture2D.IsRequestedMipmapLevelLoaded](../ScriptReference/Texture2D.IsRequestedMipmapLevelLoaded.html) to check if Unity loads your requested mipmap level.

- [Texture2D.ClearRequestedMipmapLevel](../ScriptReference/Texture2D.ClearRequestedMipmapLevel.html) if you no longer want to override the mipmap level.

You can use the `Mesh.GetUVDistributionMetric` API to get an estimate of the UV density of a **mesh**The main graphics primitive of Unity. Meshes make up a large part of your 3D worlds. Unity supports triangulated or Quadrangulated polygon meshes. Nurbs, Nurms, Subdiv surfaces must be converted to polygons. [More info](mesh.html)
See in [Glossary](Glossary.html#Mesh). This helps you calculate the mipmap level you need, based on the position of the **camera**A component which creates an image of a particular viewpoint in your scene. The output is either drawn to the screen or captured as a texture. [More info](CamerasOverview.html)
See in [Glossary](Glossary.html#Camera). For example code, refer to [Mesh.GetUVDistributionMetric](../ScriptReference/Mesh.GetUVDistributionMetric.html).

### Override mipmap levels on all textures

Use [Texture.streamingTextureForceLoadAll](../ScriptReference/Texture-streamingTextureForceLoadAll.html) to load all mipmap levels for all textures.

## Additional resources

- [TextureImporter.streamingMipmaps](../ScriptReference/TextureImporter-streamingMipmaps.html)

- [IHVImageFormatImporter.streamingMipmaps](../ScriptReference/IHVImageFormatImporter-streamingMipmaps.html)

Configure mipmap streaming

Preload mipmap levels
