This version of Unity is unsupported.

Customize the global cache

Scoped registries

# Customize the asset package cache location

The Package Manager maintains a cache for **asset packages**A collection of files and data from Unity projects, or elements of projects, which are compressed and stored in one file, similar to Zip files, with the `.unitypackage` extension. Asset packages are a handy way of sharing and re-using Unity projects and collections of assets. [More info](AssetPackages.html)
See in [Glossary](Glossary.html#Assetpackage) that you get from the **Asset Store**A growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. [More info](AssetStore.html)
See in [Glossary](Glossary.html#AssetStore).

**Note:** This cache is separate from the [global cache](upm-cache.html), which the Package Manager uses for **UPM packages**A **Package** managed by the **Unity Package Manager**. Refer to **Packages**.
See in [Glossary](Glossary.html#UPMpackage).

The Package Manager stores the asset package cache in a default location, which you can override. You might want to override the location of this cache for several reasons:

- You want to save space on your internal drive.

- You want to store the cache on a shared drive, which is accessible to others.

- You want to store the cache in a folder that’s not in a system directory.

By default, the Package Manager uses the following folder structure for its asset package cache:

```plain
<asset-store-cache-root>
  └── Asset Store-5.x
      └── <subfolders for Asset Store vendors>
```

For information on the default location of the asset package cache, refer to [Location of downloaded asset package files](asset-store-packages#asset-location).

To override the default location of the asset package cache, you can use the following methods:

- The [Preferences](#pref-method) window is the recommended method because of its ease and permanence. When you change the package cache location using this method, Unity stores the preference for the current session and future sessions.

- The [`ASSETSTORE_CACHE_PATH` environment variable](#envar-method) method isn’t permanent, but advanced users might find it preferable in specific use cases.

## Important notes before you begin

- Regardless of the method you choose, changing the cache location tells the Package Manager to use that location going forward. Existing packages that Package Manager stored in the original location remain in that folder structure.

- If you used the environment variable method to change the cache location, then you can’t use the Preferences window to change the location.

## Using the Preferences window

To use the [Preferences window](Preferences.html) to override the default location of the asset package cache, follow these steps.

1. Use one of the following methods to open the Preferences window:

- Use the Unity Editor’s menus, as described in [Preferences](Preferences.html).

- Open the Package Manager window, click the settings icon [Image: Settings icon], and select **Preferences**.

2. Select the **Package Manager** category.

3. Under **My Assets** open the folder menu beside **Cache Location**.

4. Choose **Change Location**.

5. Choose a new location for the asset package cache.

[Image: The Preferences window with the Package Manager category selected]
The Preferences window with the Package Manager category selected

## Using the environment variable

In scenarios that involve automation or continuous integration, it’s less practical and more error prone to configure settings in a configuration file or a preferences window. In such scenarios, you might consider setting the `ASSETSTORE_CACHE_PATH` environment variable to override the default location of the asset package cache.

**Important**: Follow these guidelines when you use this method:

- Close the Unity Editor and Unity Hub if they’re already running before setting the environment variable.

- Launch the Unity Editor or Unity Hub from the same command prompt or terminal session where you set the environment variable.

- You must set the `ASSETSTORE_CACHE_PATH` environment variable every time you launch Unity.

For information on setting environment variables, refer to the documentation for your operating system. For an introduction to environment variables, refer to [https://en.wikipedia.org/wiki/Environment_variable](https://en.wikipedia.org/wiki/Environment_variable).

## Additional resources

- [Package types](upm-package-types.html)

- [Global cache](upm-cache.html)

- [Customize the global cache](upm-config-cache.html)

Customize the global cache

Scoped registries
