This version of Unity is unsupported.

AssetBundle file format reference

Handling dependencies between AssetBundles

# Loading assets from AssetBundles

To load assets from an AssetBundle, you must first load the AssetBundle itself and then load the assets from it.

## Loading AssetBundles

You can use the following APIs to load AssetBundles:

- The static Load methods on the [`AssetBundle`](../ScriptReference/AssetBundle.html) class, for example [`AssetBundle.LoadFromFile`](../ScriptReference/AssetBundle.LoadFromFile.html). This class has a range of loading methods depending on the AssetBundle location and whether you want to load it synchronously or asynchronously.

- The [UnityWebRequest](web-request.html) support for AssetBundles, for example [`UnityWebRequestAssetBundle.GetAssetBundle`](../ScriptReference/Networking.UnityWebRequestAssetBundle.GetAssetBundle.html).

Refer to the API references for these classes for the full range of AssetBundle loading methods available and usage examples.

## Loading assets

Once an AssetBundle is loaded, you can use the `AssetBundle` class to load individual assets from it as follows.

Use `LoadAsset` to load a single asset, for example the root **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) of a **prefab**An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab), synchronously:

```cs
GameObject gameObject = loadedAssetBundle.LoadAsset<GameObject>(assetName);
```

Use `LoadAllAssets` to load all assets as follows:

```cs
Unity.Object[] objectArray = loadedAssetBundle.LoadAllAssets();
```

This returns an array with all the root Object of each asset.

The methods in the previous snippets return either the type of object to be loaded or an array of objects. The asynchronous counterparts of these methods return an [`AssetBundleRequest`](../ScriptReference/AssetBundleRequest.html) instead. You must wait for this operation to complete before accessing the asset.

To load a single asset asynchronously:

```cs
AssetBundleRequest request = loadedAssetBundleObject.LoadAssetAsync<GameObject>(assetName);
yield return request; // or await request;
var loadedAsset = request.asset;
```

To load all assets asynchronously:

```cs
AssetBundleRequest request = loadedAssetBundle.LoadAllAssetsAsync();
yield return request; // or await request;
var loadedAssets = request.allAssets;
```

For more information and a full code example, refer to the [`AssetBundle`](../ScriptReference/AssetBundle.html) API reference.

### Loading AssetBundle manifests

You can load an AssetBundle manifest into an instance of the [`AssetBundleManifest`](../ScriptReference/AssetBundle.html) class to get information including dependency data, hash data, and variant data for built AssetBundles.

This is especially useful when managing dependencies between AssetBundles. The manifest object makes dynamically finding and loading dependencies possible, so you don’t have to hardcode all the AssetBundle names and their relationships explicitly in your code.

For more information and a code example, refer to [Handling dependencies between AssetBundles](AssetBundles-Dependencies.html).

## Managing loaded AssetBundles

The [Addressables](http://docs.unity3d.com/Packages/com.unity.addressables@latest/index.html) package simplifies the process for managing AssetBundles, dependencies, and assets. For manual management, understanding proper AssetBundle loading and unloading is critical to avoid memory duplication or missing objects.

### Recommended unload strategies

The [`AssetBundle.Unload`](../ScriptReference/AssetBundle.Unload.html) function removes the AssetBundle header and associated structures from memory, with the Boolean argument determining whether loaded objects are also unloaded.

Use `AssetBundle.Unload(true)` to prevent object duplication. For example:

- **Defined unload points**: Unload transient AssetBundles at specific times, such as during level transitions or loading screens.

- **Reference-counting**: Track object usage and unload AssetBundles only when all constituent objects are unused. For an example implementation, refer to [Example unload strategy: reference counting](AssetBundles-Dependencies.html#reference-counting).

If you must use `Unload(false)`, unwanted objects can only be unloaded in one of the following ways:

- References elimination: Remove all references to an object and call [`Resources.UnloadUnusedAssets`](../ScriptReference/Resources.UnloadUnusedAssets.html).

- Non-additive **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) loading: Load a new scene non-additively to destroy current scene objects, automatically invoking `Resources.UnloadUnusedAssets`.

For detailed information on memory usage during AssetBundle loading and specific scenarios where entire AssetBundles might be loaded into RAM, refer to [Optimizing AssetBundles](assetbundles-optimizing.html).

## Distributing AssetBundles

You can distribute AssetBundles in the following ways:

- Locate the files inside the [StreamingAssets](StreamingAssets.html) folder and include them with the Player build.

- Host the files with a web service such as [Unity’s Cloud Content Delivery](https://docs.unity.com/ugs/manual/ccd/manual/UnityCCD?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936586870) and use [`UnityWebRequestAssetBundle`](../ScriptReference/UnityWebRequestAssetBundle.html) to download them.

- Write custom download and installation code. This approach takes more development work but allows you to control aspects such as **compression**A method of storing data that reduces the amount of storage space it requires. See [Texture Compression](texture-choose-format-by-platform.html), [Animation Compression](class-AnimationClip.html#AssetProperties), [Audio Compression](AudioFiles-compression.html), [Build Compression](ReducingFilesize.html).
See in [Glossary](Glossary.html#compression), caching, patching and [validation](AssetBundles-Integrity.html) before loading the file using Unity APIs.

## Additional resources

- [Building AssetBundles](AssetBundles-Building.html)

- [Managing loaded AssetBundles](https://learn.unity.com/tutorial/assets-resources-and-assetbundles#Managing_Loaded_Assets?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936586870).

AssetBundle file format reference

Handling dependencies between AssetBundles
