# Addressables package

The Addressables package provides a user interface in the Unity Editor to organize and manage the assets in your project. It also has an API that you can use to load and release assets at runtime.

The Addressables package is built on top of Unity's [AssetBundle](https://docs.unity3d.com/Manual/AssetBundlesIntro.html) API, and automatically manages dependencies, asset locations, and memory allocation, which you otherwise have to handle manually in the AssetBundle system.

When you make an asset Addressable, you can use that asset's address to load it locally or from a content delivery network, rather than using its file name or AssetBundle location. This means you can change the location of assets in a project without needing to rewrite code.

| Topic | Description |
| --- | --- |
| Addressables package set up | Install and configure the Addressables package in your Unity project. |
| Addressables introduction | Understand the core concepts of the Addressables system. |
| Create and organize Addressable assets | Make assets Addressable and organize them into groups for efficient management. |
| Build Addressable assets | Build and package Addressable assets for deployment. |
| Load Addressable assets | Control how to load assets with the Addressables API. |
| Distribute and update remote content | Host and deliver assets from remote servers and content delivery networks. |
| Optimization tools | Use analysis tools to optimize Addressables. |

## Additional resources

- [Introduction to runtime asset management](https://docs.unity3d.com/6000.0/Documentation/Manual/assets-managing-introduction.html)

- [Convert existing projects to Addressables](convert-existing-projects.html)
