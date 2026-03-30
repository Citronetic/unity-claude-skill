This version of Unity is unsupported.

Make a shader compatible with the Deferred or Deferred+ rendering paths in URP

Installing and upgrading URP

# Troubleshooting the Forward+ rendering path in URP

## Reduce build time

Due to the wide variety of use cases, target platforms, renderers, and features used in projects, certain URP configurations can result in a large number of **shader**A program that runs on the GPU. [More info](../../Shaders.html)
See in [Glossary](../../Glossary.html#Shader) variants. That can lead to long compilation times.

Long shader compilation time affects both player build time and the time for a **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](../../CreatingScenes.html)
See in [Glossary](../../Glossary.html#Scene) to render in the Editor.

The per-camera visible light limit value affects the compilation time for each **Lit** and **Complex Lit** shader variant. In the Forward+ **Rendering Path**The technique that a render pipeline uses to render graphics. Choosing a different rendering path affects how lighting and shading are calculated. Some rendering paths are more suited to different platforms and hardware than others. [More info](../../RenderingPaths.html)
See in [Glossary](../../Glossary.html#RenderingPath), on desktop platforms, that limit is 256.

This section describes how to reduce the shader compilation time by changing the default maximum per-camera visible light count.

### Change the maximum number of visible lights

**Note:** This instruction describes a workaround for a limitation in the URP design. This limitation will be mitigated in one of the future Unity versions.

The [Universal Render Pipeline Config package](../URP-Config-Package.html) contains the settings that define the number of maximum visible light. The following instructions describe how to change those settings.

**Note:** If you upgrade the Unity version of your project, repeat this procedure.

1. In your project folder, copy the **URP Config Package** folder from `/Library/PackageCache/com.unity.render-pipelines.universal-config` to `/Packages/com.unity.render-pipelines.universal-config`.

2. Open the file `/com.unity.render-pipelines.universal-config/Runtime/ShaderConfig.cs.hlsl`.

The file contains multiple definitions that start with `MAX_VISIBLE_LIGHT_COUNT` and end with the target platform name. Change the value in brackets to a suitable maximum in-frustum per-camera light count for your project, for example, `MAX_VISIBLE_LIGHT_COUNT_DESKTOP (32)`.

For the **Forward+** Rendering Path, the value includes the Main Light. For the **Forward** Rendering Path, the value does not include the Main Light.

3. Open the file `/com.unity.render-pipelines.universal-config/Runtime/ShaderConfig.cs`.

The file contains multiple definitions that start with `k_MaxVisibleLightCount` and end with the platform name. Change the value so that it matches the value set in the `ShaderConfig.cs.hlsl` file, for example `k_MaxVisibleLightCountDesktop = 32;`.

4. Save the edited files and restart the Unity Editor. Unity automatically configures your project and shaders to use the new configuration.

Now the Player build time should be shorter due to the reduced compilation time for each shader variant.

**Note:** After you copy the package source code into the `Packages` folder, this package code becomes embedded in your project and is no longer part of a Unity install. If you upgrade the Unity version later, Unity doesn’t update the **embedded package**An *embedded* package is a mutable package that you store under the `Packages` directory at the root of a Unity project. This differs from most packages which you download from a package server and are immutable. [More info](../../upm-concepts.html#Embedded)
See in [Glossary](../../Glossary.html#Embeddedpackage) source automatically. You need to apply the changes to the source code manually. For more information about embedded packages, refer to [Embedded dependencies](../../upm-embed.html).

Make a shader compatible with the Deferred or Deferred+ rendering paths in URP

Installing and upgrading URP
