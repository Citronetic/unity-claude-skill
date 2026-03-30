This version of Unity is unsupported.

Late binding

Retrieve sprite contents at runtime with GetSprites

# Load a Sprite Atlas with SpriteAtlasManager.atlasRequested

`atlasRequested` is a callback that tells you when a **sprite**A 2D graphic objects. If you are used to working in 3D, Sprites are essentially just standard textures but there are special techniques for combining and managing sprite textures for efficiency and convenience during development. [More info](../../../sprite/sprite-landing.html)
See in [Glossary](../../../Glossary.html#Sprite), which isn’t included in the build, is requested. You need to manually load the **Sprite Atlas**A utility that packs several sprite textures tightly together within a single texture known as an atlas. [More info](../../../sprite/atlas/v2/v2-landing.html)
See in [Glossary](../../../Glossary.html#SpriteAtlas) with late binding, and send the sprite to the Unity Editor.

The following example demonstrates how to set up the callback to load the [Sprite Atlas from an AssetBundle](../distribution/methods-distribution.html) with late binding. Note that this script is for loading and binding a Sprite Atlas to sprites which already exist in the build or project. You can create sprites that don’t exist in the project from a Sprite Atlas by [retrieving the Sprite Atlas’ contents at runtime with `GetSprites`](../distribution/retrieve-sprite-contents-runtime-getsprites.html)

```cs
void OnEnable()
{
    SpriteAtlasManager.atlasRequested += RequestAtlas;
}
void OnDisable()
{
    SpriteAtlasManager.atlasRequested -= RequestAtlas;
}
void RequestAtlas(string tag, System.Action callback)
{
    if (spriteAtlas == null)
    {
        StartCoroutine(LoadFromStreammingAsset(callback));
    }
    else
    {
        callback(spriteAtlas);
    }
}

IEnumerator LoadFromStreammingAsset(System.Action callback)
{
    string path = Application.streamingAssetsPath + "/" + bundleName;
    print(path);
    AssetBundleCreateRequest bundleLoadRequest = AssetBundle.LoadFromFileAsync(Application.streamingAssetsPath + "/" + bundleName);
    yield return bundleLoadRequest;
    bundle = bundleLoadRequest.assetBundle;
    if (bundle == null)
    {
        Debug.Log("Failed to load AssetBundle!");
        yield break;
    }
    SpriteAtlas spriteAtlas = bundle.LoadAsset(bundleName);
    callback(spriteAtlas);
}
```

Late binding

Retrieve sprite contents at runtime with GetSprites
