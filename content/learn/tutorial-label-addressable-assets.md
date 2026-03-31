[Image: image]

# Label addressable assets

Tutorial

intermediate

+10XP

20 mins

5

(170)

Unity Technologies

[Image: Label addressable assets]SummarySkills

In this tutorial, you'll learn how to assign labels to addressable assets and use labels to more efficiently manage assets in your scripts.

By the end of this tutorial, you will be able to:

- Assign labels to sets of addressable assets
- Load assets by label in scripts
- Merge labels to create new sets of assets
- Configure AssetBundles using labels and bundle modes

Resources

- [GetStarted-LoadyDungeons.zip](https://unity-connect-prd.storage.googleapis.com/20230512/5fdc2efb-5114-4519-bd93-8e70f8150ea1/GetStarted-LoadyDungeons.zip?ampDeviceId=b1d4c960-c18d-4868-99d7-4a16921fb9dd&ampSessionId=1774948551783&ampTimestamp=1775035277217)

Languages available:

EnglishEnglishEnglish

## 1. Overview

Q&A (0)

In the Addressables system, a **label** is a way of categorizing one or more addressable assets so that you can easily load them as a set at runtime.

While groups and labels are both used to categorize addressable assets, they achieve different goals. Groups are used when you develop in Unity Editor to inform the build scripts how to build AssetBundles, the Addressables content. Once the content is built, groups have no presence in the runtime API. On the other hand, labels are authored in the Editor to help with loading strategies at runtime.

Addresses and labels are treated the same at runtime as **locator keys**, the concept that is used to locate and retrieve assets. When you write scripts that load assets, rather than request an individual addressable asset by address, you can instead request by a combination of addresses and labels. The Addressables system will retrieve all assets that match the locator keys queried, regardless of which group they were built from, whether in local or remote AssetBundles.

For example, you can create a label for assets you want loaded together, such as gameplay elements or assets by level.

Mark step as complete

## 2. Assign labels

Q&A (0)

To assign labels in Loady Dungeons, follow these instructions:

**1.**In the Addressables Groups window, select **Tools**> **Window**> **Labels**.

**2.**To add a new label named "Fancy" in the Addressables Labels dialog, select the **Add** (**+**) button in the reorderable list, and enter "Fancy". Select **Save**.

[Image: image]

**3.**In the Addressables Groups window, locate the **Hat00** prefab.

**4.**Open the **Labels** dropdown in the rightmost column. (You might have to expand the Addressables Groups window on the right side to see this column.)

[Image: image]

**5.**Select the **Manage Labels**(gear) menu to open the Addressables Labels dialog, and add a "Seasonal" label and a "Hats" label. Be sure to select **Save**.

You now have three labels defined: Fancy, Seasonal, and Hats.

**6.**Assign the **Fancy** label to**Hat00**, **Hat01** and **Hat02**.

**7.**Assign the **Seasonal** label to **Hat00**, **Hat04** and **Hat05**.

**8**.  Finally, assign the "Hats" label to all of the hats. In the Addressable Groups window, select the **Hat00** and press Shift+Down arrow key (macOS: Cmd+Down arrow key) or Ctrl+select (macOS: Cmd+select) on the assets to select **Hat00** through **Hat05**, and select the **Hats** label to apply it to all selected assets.

[Image: image]

Now you have seen a few different ways to create and assign labels. The hats have various labels that you can use in your scripts to identify these assets.

**9.** Switch the Play mode script back to **Use Asset Database**.

Mark step as complete

## 3. Load assets by a label

Q&A (0)

Let’s rewrite the game to place a randomized hat on the dinosaur by loading assets with labels. Now that all the hats are identifiable with the common Hats label, the code will be simple.

To load multiple assets by a label, follow these instructions:

**1.**In the Project window, select **Assets**> **Scripts**and open the **PlayerConfigurator.cs** script.

**2.**Near the top of the script, add the following namespace:

```csharp
using System.Collections.Generic;
```

**3.**Add the following field to the existing script:

```csharp
private List<string> m_Keys = new List<string>() {"Hats"};
```

**4.**Locate the following line in the existing script:

```csharp
private AsyncOperationHandle<GameObject> m_HatLoadOpHandle;
```

Replace the line above with the following line:

```csharp
private AsyncOperationHandle<IList<GameObject>> m_HatsLoadOpHandle;
```

**5.**In the **Start** method, locate the following line in the existing script:

```csharp
LoadInRandomHat();
```

Replace the line above with the following lines:

```csharp
m_HatsLoadOpHandle = Addressables.LoadAssetsAsync<GameObject>(m_Keys, null, Addressables.MergeMode.Union);
m_HatsLoadOpHandle.Completed += OnHatsLoadComplete;
```

This will make an attempt to load all the assets across all the groups that have the "Hats" key, so it will load Hat00 through Hat05. It also registers an event handler **OnHatsLoadComplete()**, which is called when all the assets with the Hats label are collected and loaded.

**6.** Locate **OnHatLoadComplete()** and replace it with the following method:

```csharp
private void OnHatsLoadComplete(AsyncOperationHandle<IList<GameObject>> asyncOperationHandle)
{
    Debug.Log("AsyncOperationHandle Status: " + asyncOperationHandle.Status);

    if (asyncOperationHandle.Status == AsyncOperationStatus.Succeeded)
    {
        IList<GameObject> results = asyncOperationHandle.Result;
        for (int i = 0; i < results.Count; i++)
        {
            Debug.Log("Hat: " + results[i].name);
        }

        LoadInRandomHat(results);
    }
}
```

This method will test to see if loading all the hats was a successful operation with a valid result. If it was a success, we iterate and log the names of all the assets with the “Hats” key and pass them along to **LoadInRandomHat**which chooses one of the prefabs at random.

**7.**Replace the **LoadInRandomHat** method with this modified version:

```csharp
private void LoadInRandomHat(IList<GameObject> prefabs)
{
    int randomIndex = Random.Range(0, prefabs.Count);
    GameObject randomHatPrefab = prefabs[randomIndex];
    m_HatInstance = Instantiate(randomHatPrefab, m_HatAnchor);
}
```

Here, the main changes are that the method takes in a list of loaded prefabs, the random range is no longer hard-coded, and it will randomly pick one of the prefabs from the list to instantiate.

**8.**In the **Update** method, locate the following line in the existing script:

```csharp
Destroy(m_HatInstance);
Addressables.ReleaseInstance(m_HatLoadOpHandle);

LoadInRandomHat();
```

Replace the line above with the following lines:

```csharp
Destroy(m_HatInstance);

LoadInRandomHat(m_HatsLoadOpHandle.Result);
```

Here, we are still destroying the instance of the hat prefab, but instead of releasing the prefab, we keep all the hat assets in memory. We avoid releasing because the result of the load operation wasn’t one asset but multiple, so releasing **m_HatsLoadOpHandle**will decrement the reference count on all prefabs, releasing all of them. Instead, we keep the reference to all and pass it along to pick from randomly again.

**9.**Replace the **OnDisable**method with the following lines:

```csharp
private void OnDisable()
{
    m_HatsLoadOpHandle.Completed -= OnHatsLoadComplete;
}
```

**10.**Open the **MainMenu**scene and enter Play mode.

**11.**Select the **Start** button to load the **LoadingScene**, then select the **Play** button.

**12.**Note that "AsyncOperationHandle Status: Succeeded” is printed in the Console window and you can now see the name of each hat that has the Hats label. This means that the hats loaded successfully.

Since this method collects multiple assets with its AsyncOperationHandle, the result is a list of GameObjects. The method was one asynchronous operation that was used to get all of them, so you do not have individual handles that you can release for each asset. As a result, you have to create and destroy the prefab instance using the **Object.Instantiate** and **Object.Destroy** methods.

Mark step as complete

## 4. Merge labels to create new sets of assets

Q&A (0)

When you specify multiple locator keys (addresses and labels), you can specify a merge mode to determine how the sets of assets matching each key are combined:

- **Union**: Include assets that match any key.
- **Intersection**: Include assets that match every key.
- **UseFirst**: Include assets only from the first key that resolves to a valid location.

In Loady Dungeons, you can use this feature to load only assets labeled "Hat" and "Seasonal" for a seasonal update to your game. To make only seasonal hats appear, follow these instructions:

**1.**In the **PlayerConfigurator.cs** script, locate the following line:

```csharp
private List<string> m_Keys = new List<string>() {"Hats"};
```

Replace the line above with the following line:

```csharp
private List<string> m_Keys = new List<string>() {"Hats", "Seasonal"};
```

**2.**In the **Start**method, pass in the **Intersection**merge mode so that LoadAssetsAsync gets assets with both the Hats and Seasonal labels:

```csharp
m_HatsLoadOpHandle = Addressables.LoadAssetsAsync<GameObject>(m_Keys, null, Addressables.MergeMode.Intersection);
```

**3.**Save your script and play the **LoadingScene**scene.

**4.**Hats with the Seasonal label are randomly loaded. Note that "AsyncOperationHandle Status: Succeeded” is printed in the Console window and **Hat00**, **Hat04**, and **Hat05** are listed, which are the only hats labeled with both the Hats and Seasonal labels. This means that the correct hats loaded successfully.

Mark step as complete

## 5. Load one random fancy hat and instantiate it

Q&A (0)

The previous code accomplishes the job of showing the correct visuals - we have a random hat that appears on Loady’s head at the start of the level. However, the hat does not switch until the next level, so having all prefabs loaded may not be the best use of memory. Loading somewhere between 6 Hat assets may work fine now, but what happens if we grow our hat inventory to 200, or 1000 hats? It wouldn’t be practical to load all of those assets into memory just to have 1 on Loady’s head at any time.

The Addressables runtime represents all the content using **Resource Locations**, which define where all the assets can be found. Resource locations are the intermediary between locator keys and assets. So far, we have shown you ways to ask for assets so that they are loaded and ready. But in those load requests this chain of events generally occurs:

1. You pass in a locator key or a set of keys.
2. All the resource locations associated with the locator keys are found.
3. All the assets are loaded from the resource locations.

The API provides a way to break this up into two requests - load resource locations from locator keys, and load assets from the resource locations. This allows you to separate finding the items from loading them, which can split the overhead of doing it all at once.

Let’s modify our script so that you can get the locations to the assets without loading them, picking one random fancy hat at the start of the level, and then instantiating it.

To limit the amount of loaded assets, follow these instructions:

**1.**In the Project window, in **Assets**> **Scripts,**open the **PlayerConfigurator.cs** script.

**2.**Near the top of the script, add the following namespace:

```csharp
using UnityEngine.ResourceManagement.ResourceLocations;
```

**3.**Locate the following line in the existing script:

```csharp
private List<string> m_Keys = new List<string>() {"Hats", "Seasonal"};
```

Replace the line above with the following line:

```csharp
private List<string> m_Keys = new List<string>() {"Hats", "Fancy"};
```

**4.**Locate the following line in the existing script:

```csharp
private AsyncOperationHandle<IList<GameObject>> m_HatsLoadOpHandle;
```

Replace the line above with the following lines:

```csharp
private AsyncOperationHandle<IList<IResourceLocation>> m_HatsLocationsOpHandle;

private AsyncOperationHandle<GameObject> m_HatLoadOpHandle;
```

We are going to perform two operations, one for loading the locations, and the other for loading the single asset. The **m_HatsLocationsOpHandle**field captures the handle for the resource location request, and **m_HatInstantiateOpHandle**is used to capture the instantiate operation.

**5.**Locate the following lines in the **Start**method:

```csharp
m_HatsLoadOpHandle = Addressables.LoadAssetsAsync<GameObject>(m_Keys, null, Addressables.MergeMode.Intersection);
m_HatsLoadOpHandle.Completed += OnHatsLoadComplete;
```

Replace the line above with the following line:

```csharp
m_HatsLocationsOpHandle = Addressables.LoadResourceLocationsAsync(m_Keys, Addressables.MergeMode.Intersection);
m_HatsLocationsOpHandle.Completed += OnHatLocationsLoadComplete;
```

This is the request that simply gets the resource locations without loading the assets.

**6.**Locate the following line in the existing script:

```csharp
private void OnHatsLoadComplete(AsyncOperationHandle<IList<GameObject>> asyncOperationHandle)
```

Replace the line above with the following line:

```csharp
private void OnHatLocationsLoadComplete(AsyncOperationHandle<IList<IResourceLocation>> asyncOperationHandle)
```

**7.**  Locate the following lines in the existing script:

```csharp
IList<GameObject> results = asyncOperationHandle.Result;
for (int i = 0; i < results.Count; i++)
{
    Debug.Log("Hat: " + results[i].name);
}
```

Replace the line above with the following line:

```csharp
IList<IResourceLocation> results = asyncOperationHandle.Result;
for (int i = 0; i < results.Count; i++)
{
    Debug.Log("Hat: " + results[i].PrimaryKey);
}
```

**8.**Locate the **LoadInRandomHat**method and replace it with the following lines:

```csharp
private void LoadInRandomHat(IList<IResourceLocation> resourceLocations)
{
    int randomIndex = Random.Range(0, resourceLocations.Count);
        IResourceLocation randomHatPrefab = resourceLocations[randomIndex];

        m_HatLoadOpHandle = Addressables.LoadAssetAsync<GameObject>(randomHatPrefab);
        m_HatLoadOpHandle.Completed += OnHatLoadComplete;
}
```

Instead of accepting a list of loaded prefab assets, it instead receives a list of resource locations, so that one can be randomly picked. Once it is randomly picked, that lone asset can be loaded into memory and registers an event handler OnHatLoadComplete that will notify you when all the asset is loaded.

**9.** Let us reintroduce the **OnHatLoadComplete**method now that we are calling **LoadAssetAsync**again:

```csharp
private void OnHatLoadComplete(AsyncOperationHandle<GameObject> asyncOperationHandle)
{
    if (asyncOperationHandle.Status == AsyncOperationStatus.Succeeded)
    {
        m_HatInstance = Instantiate(asyncOperationHandle.Result, m_HatAnchor);
    }
}
```

**10.**In the **Update** method, locate the following line in the existing script:

```csharp
LoadInRandomHat(m_HatsLoadOpHandle.Result);
```

Replace the line above with the following lines:

```csharp
Addressables.Release(m_HatLoadOpHandle);

LoadInRandomHat(m_HatsLocationsOpHandle.Result);
```

Here, the changes are that the asset can be released from memory and, and then it will randomly pick one of the resource locations which should be loaded and instantiated next.

**11.**  Replace the **OnDisableMethod**with this code:

```csharp
m_HatLoadOpHandle.Completed -= OnHatLoadComplete;
m_HatsLocationsOpHandle.Completed -= OnHatLocationsLoadComplete;
```

**12.**Open the **MainMenu** scene and enter Play mode.

**13.**Select the **Start** button to load the **LoadingScene**, then select the **Play** button.

The fancy hats that are randomly loaded when the user clicks the primary mouse button. Note that "AsyncOperationHandle Status: Succeeded” is printed in the Console window and  **Hat00**, **Hat01**, and **Hat02** are listed, which are the only hats labeled with both the Hats and Fancy labels. The details about the hats are requested, but only one is loaded successfully at a time.

Mark step as complete

## 6. Labels and Bundle Mode

Q&A (0)

Recall that in the previous tutorial, **Organize addressable assets into groups**, we briefly mentioned that the Content Packing & Loading group schema had an advanced option called Bundle Mode, and that Bundle Mode had a**Pack Together By Label** option. Now that you know how labels work, it’s time to revisit this option.

The Pack Together By Label option uses labels to inform how assets are split into AssetBundles during builds. Using the Pack Together By Labels option, when assets have unique combinations of labels, they can be loaded together. For example, **Hat01** and **Hat02**, which are labeled as Fancy, can be loaded with **Hat00,** which is labeled as Fancy and Seasonal. **Hat04** and **Hat05** are labeled as Seasonal, but **Hat00** can be loaded with them as well because all three share the Seasonal label.

There are memory allocation benefits to building individual AssetBundles with the **Pack Separately** bundle mode. This mode avoids loading in a large bundle when all you want are Fancy hats, for example. In this scenario, there is no need to bring non-Fancy hats in memory, so it’s best to avoid the Pack Together mode.

There are performance benefits with loading items from one bundle with Pack Together mode. For example, you can group **Hat01** and **Hat02** together if you know that you want to load some combination of objects with the Hats and Fancy labels. That way, you can bring them in together. What about **Hat00**? **Hat00** is labeled Fancy, so it would make sense to bundle it with **Hat01** and **Hat02**, but it also has the Seasonal label. Bundling it with **Hat01** and **Hat02** may be optimal for loading Fancy hats, but doing so would note be optimal for loading in Seasonal hats, since that would create a bundle large enough to include **Hat01** and **Hat02** to be loaded in when you aren’t using them. What to do?

This is where the Pack Together By Label option comes in. During build, it brings together assets that have a unique combination of labels and bundles them. You can make it so that **Hat00** is in its own AssetBundle, **Hat01** and **Hat02** are in their own bundle, and **Hat04** and **Hat05** are in their own bundle. That way, you have the tradeoff: items that are loaded and unloaded together are mostly clumped together, while memory is in smaller reusable chunks.

To see how the asset bundles are built from Pack Together By Label groups, follow these instructions:

**1.**From the **Groups**window, select the **Hats**group.

**2.**In the Inspector window, under the Content Packing & Loading schema, select **Advanced Options** and set **Bundle Mode** to **Pack Together By Label**.

**3.**From the Groups window, select **New Build**>**Default Build Script** from the toolbar to start the build process again.

**4.**After the build is finished, find the remote build directory in your file system. Note the bundle files that were created. In addition to previously seen bundles, there are now four AssetBundles for each unique combination of labels in the Hats group that have replaced the original hats bundle.

Mark step as complete

## 7. Next steps

Q&A (0)

In the next tutorial, you will learn how to serve addressable assets on a local hosting service in the Editor.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
