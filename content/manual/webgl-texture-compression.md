This version of Unity is unsupported.

Video playback in Web

Embedded resources in Web

# Texture compression in Web

Use texture **compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](Glossary.html#compression) in the Web platform to create builds that target platforms based on the **texture compression**3D Graphics hardware requires Textures to be compressed in specialized formats which are optimized for fast Texture sampling. [More info](texture-choose-format-by-platform.html)
See in [Glossary](Glossary.html#TextureCompression) formats they support.

## Texture compression formats

Desktop and mobile devices support different texture compression formats. For the best results, provide a format optimized for each.

To run your game on both desktop and mobile browsers with compressed textures, you might want to create two builds targeting:

- Desktop browsers with DXT set as the texture compression format.

- Mobile browsers with adaptable scalable texture compression (ASTC) set as the texture compression format.

### Platform compatibility and fallbacks

Choosing a format that your target platform natively supports provides the best performance and uses the least memory.

If a device doesn’t natively support the texture compression format you select, Unity uses a software fallback to decompress the textures at runtime. With the fallback, your application still works, but it uses more memory and might run slower.

## Precedence for compression format settings

You can set the default texture compression format for your Web application from either the [Web build settings](web-build-settings.html) or the Web [Player Settings](class-PlayerSettingsWebGL.html)Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings). Before you set the texture compression format, it’s important to decide which of these settings take precedence. The texture compression format value you set in build settings has priority over the value you set in Player Settings. By default, the Unity Editor sets the build settings value to **Use Player Settings**.

**Note:** The Editor serializes the texture compression in build settings in the `Library` folder. This means that it’s not managed by **version control**A system for managing file changes. You can use Unity in conjunction with most common version control tools, including Perforce, Git, Mercurial and PlasticSCM. [More info](VersionControl.html)
See in [Glossary](Glossary.html#VersionControl).

You can also customize the texture compression format for individual textures. The value you set for an individual **texture overrides**Platform-specific settings that allow you to set the resolution, file size with associated memory size requirements, pixel dimensions, and quality of your textures for each target platform. [More info](texture-choose-format-by-platform.html)
See in [Glossary](Glossary.html#TextureOverrides) the default texture compression format value. For information on how to change the **texture format**A file format for handling textures during real-time rendering by 3D graphics hardware, such as a graphics card or mobile device. [More info](texture-choose-format-by-platform.html)
See in [Glossary](Glossary.html#TextureFormat) of individual textures, refer to [Texture Import Settings](class-TextureImporter.html).

## Set the default compression format

You can set the default texture compression format for your Web application using either build settings or Player settings. The texture compression format value you set in build settings has priority over the value you set in Player settings. By default, the Unity Editor sets the build settings value to **Use Player Settings**.

To select a default texture compression format using build settings:

1. Select **File** > **Build Profiles**.

2. From the list of platforms in the **Platforms** panel, select **Web** or [create a build profile](create-build-profile.html) for the **Web** platform.

3. Select a compression format from the **Texture Compression** drop-down menu.

To select a default texture compression format using Player Settings:

1. Select **File** > **Build Profiles**.

2. From the list of platforms in the **Platform** panel, select **Web**.

3. Select **Player Settings** > **Other Settings**.

4. Select a compression format from the **Texture compression format** drop-down menu.

For an example on how to simultaneously create builds for both desktop browsers and mobile browsers with their corresponding texture compression formats, refer to [Create builds for desktop and mobile browsers from a script](#desktop+mobile).

## Create builds for desktop and mobile browsers from a script

You can run a build for both desktop browsers and mobile browsers with the corresponding texture compression formats simultaneously using a script. For example:

```cs
using UnityEditor;
using System.IO;
using UnityEngine;

public class ComboBuild
{
    // This creates a menu item to trigger the dual builds.
    [MenuItem("Game Build Menu/Dual Build")]
    public static void BuildGame()
    {
        // Define the output folder structure and names for the builds.
        string dualBuildPath = "WebGLBuilds";
        string desktopBuildName = "WebGL_Build";
        string mobileBuildName = "WebGL_Mobile";
        string desktopPath = Path.Combine(dualBuildPath, desktopBuildName);
        string mobilePath = Path.Combine(dualBuildPath, mobileBuildName);
        string[] scenes = new string[] { "Assets/scene.unity" };

        // Desktop build with DXT texture compression:
        BuildPlayerOptions desktopBuildPlayerOptions = new BuildPlayerOptions();
        desktopBuildPlayerOptions.scenes = scenes;
        desktopBuildPlayerOptions.locationPathName = desktopPath;
        desktopBuildPlayerOptions.target = BuildTarget.WebGL;
        desktopBuildPlayerOptions.options = BuildOptions.Development;
        desktopBuildPlayerOptions.subtarget = (int)WebGLTextureSubtarget.DXT;
        BuildPipeline.BuildPlayer(desktopBuildPlayerOptions);

        // Mobile build with ASTC texture compression:
        BuildPlayerOptions mobileBuildPlayerOptions = new BuildPlayerOptions();
        mobileBuildPlayerOptions.scenes = scenes;
        mobileBuildPlayerOptions.locationPathName = mobilePath;
        mobileBuildPlayerOptions.target = BuildTarget.WebGL;
        mobileBuildPlayerOptions.options = BuildOptions.Development;
        mobileBuildPlayerOptions.subtarget = (int)WebGLTextureSubtarget.ASTC;
        BuildPipeline.BuildPlayer(mobileBuildPlayerOptions);

        // Copy the mobile.data file to the desktop build directory.
        FileUtil.CopyFileOrDirectory(Path.Combine(mobilePath, "Build", mobileBuildName + ".data"), Path.Combine(desktopPath, "Build", mobileBuildName + ".data"));
    }
}
```

You can modify the [Web template’s](webgl-templates.html) `index.html` file to select the appropriate data file if there’s support for the texture compression format extension:

```js
// choose the data file based on whether there's support for the ASTC texture compression format
      var dataFile = "/{{{ DATA_FILENAME }}}";
      var c = document.createElement("canvas");
      var gl = c.getContext("webgl");
      var gl2 = c.getContext("webgl2");
      if ((gl && gl.getExtension('WEBGL_compressed_texture_astc')) || (gl2 &&
              gl2.getExtension('WEBGL_compressed_texture_astc'))) {
        dataFile =  "/WebGL_Mobile.data";
      }

      var buildUrl = "Build";
      var loaderUrl = buildUrl + "/{{{ LOADER_FILENAME }}}";
      var config = {
        dataUrl: buildUrl + dataFile,
        frameworkUrl: buildUrl + "/{{{ FRAMEWORK_FILENAME }}}",
#if USE_WASM
        codeUrl: buildUrl + "/{{{ CODE_FILENAME }}}",
#endif
#if MEMORY_FILENAME
        memoryUrl: buildUrl + "/{{{ MEMORY_FILENAME }}}",
#endif
#if SYMBOLS_FILENAME
        symbolsUrl: buildUrl + "/{{{ SYMBOLS_FILENAME }}}",
#endif
        streamingAssetsUrl: "StreamingAssets",
        companyName: {{{ JSON.stringify(COMPANY_NAME) }}},
        productName: {{{ JSON.stringify(PRODUCT_NAME) }}},
      productVersion: {{{ JSON.stringify(PRODUCT_VERSION) }}},
        showBanner: unityShowBanner,
     };
```

## Additional resources

- [Build your Web application](webgl-building.html)

- [Player Settings](class-PlayerSettingsWebGL.html)

Video playback in Web

Embedded resources in Web
