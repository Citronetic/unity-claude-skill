This version of Unity is unsupported.

Upgrade to Unity 6.2

Upgrade to Unity 6.0

# Upgrade to Unity 6.1

This page lists changes in Unity 6.1 that can affect existing projects when you upgrade them from Unity 6.0 to Unity 6.1.

Review changes for Unity 6.1 in these areas:

- [Editor and workflow](#editor)

- [Graphics](#graphics)

- [Physics](#physics)

- [Platforms](#platforms)

## Editor and workflow

This section outlines recent updates to the Editor and its general workflows that can affect your upgrade experience.

### Window menu changes

Package Manager, **Asset Store**A growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. [More info](AssetStore.html)
See in [Glossary](Glossary.html#AssetStore), Services, My Assets, and **Version Control**A system for managing file changes. You can use Unity in conjunction with most common version control tools, including Perforce, Git, Mercurial and PlasticSCM. [More info](VersionControl.html)
See in [Glossary](Glossary.html#VersionControl) now [appear in new submenus](WhatsNewUnity61.html#editor-and-workflow). This change breaks any custom keyboard shortcuts to open these windows.

After upgrading, recreate any shortcuts to these windows.

## Graphics

This section outlines recent updates to Unity’s graphics systems that can affect your upgrade experience.

### Render pipelines

For upgrade guides for specific **render pipelines**A series of operations that take the contents of a Scene, and displays them on a screen. Unity lets you choose from pre-built render pipelines, or write your own. [More info](render-pipelines.html)
See in [Glossary](Glossary.html#Renderpipeline) in Unity, refer to one of the following pages:

- [Upgrade to URP 17.1 (Unity 6.1)](urp/upgrade-guide-unity-6-1.html)

- [Upgrade to HDRP 17.1 (Unity 6.1)](https://docs.unity3d.com/Packages/com.unity.render-pipelines.high-definition@17.1/manual/upgrade-guides.html)

To upgrade other packages, refer to [the documentation for the packages you’re using](upm-docs.html).

### The `_CLUSTER_LIGHT_LOOP` shader keyword replaces `_FORWARD_PLUS`

Unity 6.1 replaces the `_FORWARD_PLUS` **shader**A program that runs on the GPU. [More info](Shaders.html)
See in [Glossary](Glossary.html#Shader) keyword with the `_CLUSTER_LIGHT_LOOP` keyword. If your custom shaders use the `_FORWARD_PLUS` keyword, replace it with `_CLUSTER_LIGHT_LOOP`.

For more information about using the keywords, refer to [Shader keywords and macros reference in URP](urp/urp-shaders/shader-keywords-macros.html).

### Support for the PVRTC format is deprecated

Support for PVRTC **compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](Glossary.html#compression) is deprecated and will be fully removed in the future. It’s recommended that you transition to other compression formats, such as ASTC or ETC, to avoid issues in future upgrades.

## Physics

This section outlines recent updates to Physics-specific tools and settings that can affect your upgrade experience.

### Rigidbody.SetDensity is deprecated

The `SetDensity` method was deprecated for [`Rigidbody`](../ScriptReference/Rigidbody.html). Use [`Rigidbody.mass`](../ScriptReference/Rigidbody-mass.html) instead.

The `SetDensity` method was effectively used as a mass multiplier for the body by the physics integration instead of a per-Collider value used during mass distribution to determine each **Collider**An invisible shape that is used to handle physical collisions for an object. A collider doesn’t need to be exactly the same shape as the object’s mesh - a rough approximation is often more efficient and indistinguishable in gameplay. [More info](CollidersOverview.html)
See in [Glossary](Glossary.html#Collider)’s mass.

## Platforms

This section outlines recent updates to platform-specific tools and settings that can affect your upgrade experience.

### Android

#### The default Android tools versions have changed

Unity has updated the default versions of the following tools used by Android. The default versions of SDK build tools, SDK platform tools, and JDK remain unchanged. The updated versions are as follows:

| Tool | Version |
| --- | --- |
| GradleAn Android build system that automates several build processes. This automation means that many common build errors are less likely to occur. More infoSee in Glossary | 8.11 |
| Android Gradle Plugin | 8.7.2 |
| SDK Command-line tools | 16.0 |
| NDK | r27c |

If your project uses any [custom Gradle templates](gradle-templates.html), consider recreating those templates to avoid any build issues with the updated Android Gradle Plugin version. For more information, refer to [Modify Gradle project files with Gradle template files](android-modify-gradle-project-files-templates.html).

### Windows

#### New default Auto Graphics API

The default Auto Graphics API in Unity 6.1 is DirectX12. Projects upgrading from older versions of Unity maintain the default setting from their version.

To change to the default for 6.1, in ****Player Settings**Settings that let you set various player-specific options for the final game built by Unity. [More info](class-PlayerSettings.html)
See in [Glossary](Glossary.html#PlayerSettings)**, enable **Auto Graphics API**.

Upgrade to Unity 6.2

Upgrade to Unity 6.0
