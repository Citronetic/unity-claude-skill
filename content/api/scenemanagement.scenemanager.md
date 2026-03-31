This version of Unity is unsupported.



# SceneManager





class in
          UnityEngine.SceneManagement



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Manage scenes in the Player and in Play mode in the Editor.





You can use the SceneManager to manage and manipulate scenes in the Player.

**Scene creation, loading and unloading**



          - To create scenes dynamically at runtime, use [SceneManager.CreateScene](SceneManagement.SceneManager.CreateScene.html).

          - To load scenes from built content, use [SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html) or [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html).

          - Scenes cannot be saved at runtime.

          - You can load multiple scenes simultaneously. To add more scenes to the currently open ones, use the [LoadSceneMode.Additive](SceneManagement.LoadSceneMode.Additive.html) option when calling [SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html) or [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html).

          - You can load the same scene multiple times in both the Player and in Play mode in the Editor.  In Edit mode in the Editor, SceneManager cannot be used and a scene can only be loaded once (using [EditorSceneManager](SceneManagement.EditorSceneManager.html)).

          - To unload a scene explicitly, use [SceneManager.UnloadSceneAsync](SceneManagement.SceneManager.UnloadSceneAsync.html).  All open scenes can be unloaded implicitly by loading another scene with [LoadSceneMode.Single](SceneManagement.LoadSceneMode.Single.html).





**Accessing loaded scenes**



The Scene Manager offers APIs to access currently loaded Scenes. For example, [SceneManager.loadedSceneCount](SceneManagement.SceneManager-loadedSceneCount.html), [SceneManager.GetSceneAt](SceneManagement.SceneManager.GetSceneAt.html), and [SceneManager.GetSceneByPath](SceneManagement.SceneManager.GetSceneByPath.html).

**Scene manipulation**

To move objects between scenes, use methods like [SceneManager.MergeScenes](SceneManagement.SceneManager.MergeScenes.html) and [SceneManager.MoveGameObjectToScene](SceneManagement.SceneManager.MoveGameObjectToScene.html).

**SceneManager events**

The SceneManager also exposes the following events:



          - [SceneManager.activeSceneChanged](SceneManagement.SceneManager-activeSceneChanged.html)

          - [SceneManager.sceneLoaded](SceneManagement.SceneManager-sceneLoaded.html)

          - [SceneManager.sceneUnloaded](SceneManagement.SceneManager-sceneUnloaded.html)





Scripts can register on these events and then be notified when there are changes in the state of the SceneManager.

**The scene list**

The Player contains a BuildSettings object which records the list of scenes that are available to load.  The contents of this list is exposed by [SceneManager.sceneCountInBuildSettings](SceneManagement.SceneManager-sceneCountInBuildSettings.html) and [SceneUtility.GetScenePathByBuildIndex](SceneManagement.SceneUtility.GetScenePathByBuildIndex.html).

The contents of this list is determined when the Player is built:



          - By default, all the enabled scenes in the [EditorBuildSettings.scenes](EditorBuildSettings-scenes.html) array are included. You can view and edit this list from the active profile in the Build Profiles window.

          - When building via scripts with [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html), specify scenes using [BuildPlayerOptions.scenes](BuildPlayerOptions-scenes.html).





The scene order is crucial for several reasons:



          - The first enabled scene in the Scene list (with a build index of 0) loads automatically when the Player starts.

          - Earlier listed Scenes load faster due to optimized assignment of their dependent content to fewer sharedAsset files.

          - [SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html) and [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html) supports loading scenes by index, determined by the order in [EditorBuildSettings.scenes](EditorBuildSettings-scenes.html) or [BuildPlayerOptions.scenes](BuildPlayerOptions-scenes.html) after any disabled scenes are removed.





**AssetBundles and Scenes**



          - Additional scenes can be included in AssetBundles. When an [AssetBundle](AssetBundle.html) that contains scenes is loaded, its scenes become available to the SceneManager and can be loaded by path using [SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html) or [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html).

          - Scenes from AssetBundles have a [Scene.buildIndex](SceneManagement.Scene-buildIndex.html) of -1.

          - When loading scenes by path, a match from loaded AssetBundle takes priority over scenes in the Player build.





**Scene management in the Editor**



          - Use [EditorSceneManager](SceneManagement.EditorSceneManager.html) instead of SceneManager for scene authoring and manipulation in the Editor.

          - The [SceneManager](SceneManagement.SceneManager.html) API should only be used in Play mode.  In Edit mode calls to unsupported methods such as [SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html) will throw an invalid operation exception.

          - In Play mode, only scenes listed in [EditorBuildSettings](EditorBuildSettings.html) are available to load, along with scenes from loaded AssetBundles, simulating Player behavior.





**Notes**



          - Loading Scenes by index can be fragile due to potential reordering; the recommended best practice is to load scenes by path for better clarity.

          - Loading scenes by filename (without a full path) can cause issues if multiple scenes share the same name; full path specification removes that ambiguity.





Additional resources: [EditorSceneManager](SceneManagement.EditorSceneManager.html), [SceneUtility](SceneManagement.SceneUtility.html), [Scene.buildIndex](SceneManagement.Scene-buildIndex.html), [EditorBuildSettingsScene.enabled](EditorBuildSettingsScene-enabled.html), [AssetBundle.GetAllScenePaths](AssetBundle.GetAllScenePaths.html).


              


```
using UnityEngine;
using UnityEngine.SceneManagement;// This MonoBehaviour could be placed as a component inside the first scene in the Build Profiles Scene List.
// When the Player starts it instantiates this MonoBehaviour, which in turn loads
// an additional scene.
public class SceneLoader : MonoBehaviour
{
    // This scene must be listed in the Scene List in the Build Profiles Window,
    // or available from a loaded AssetBundle.
    const string sceneToLoad = "Assets/Example/AnotherScene.unity";    void Start()
    {
        var op = SceneManager.LoadSceneAsync(sceneToLoad, LoadSceneMode.Additive);
        op.completed += (AsyncOperation obj) =>
        {
            Scene loadedScene = SceneManager.GetSceneByPath(sceneToLoad);
            Debug.Log($"{sceneToLoad} finished loading (build index: {loadedScene.buildIndex}).");
            Debug.Log($"It has {loadedScene.rootCount} root(s).");
            Debug.Log($"There are now {SceneManager.loadedSceneCount} Scenes open.");
        };
    }    private void OnDestroy()
    {
        // When closing the Scene containing this MonoBehaviour we also remove the Scene we loaded
        SceneManager.UnloadSceneAsync(sceneToLoad);
    }
}
```


              


```
using System.Text;
using UnityEngine;
using UnityEngine.SceneManagement;public class SceneInfo : MonoBehaviour
{
    void Start()
    {
        LogSceneManagerState();
    }    void LogSceneManagerState()
    {
        var sb = new StringBuilder();
        sb.AppendLine("SceneManager state");        sb.AppendLine($"Active Scene: {SceneManager.GetActiveScene().path}");        sb.AppendLine($"Scene List (size {SceneManager.sceneCountInBuildSettings})");
        for(int i = 0; i < SceneManager.sceneCountInBuildSettings; i++)
        {
            var scenePath = SceneUtility.GetScenePathByBuildIndex(i);
            sb.AppendLine($"  {i}: {scenePath}");
        }        sb.AppendLine($"Loaded Scenes (size {SceneManager.sceneCount})");
        for(int i = 0; i < SceneManager.sceneCount; i++)
        {
            var scene = SceneManager.GetSceneAt(i);
            sb.AppendLine($"  {i}: {scene.path}");
        }        Debug.Log(sb.ToString());
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| loadedSceneCount | The number of loaded Scenes. |
| sceneCount | The current number of Scenes. |
| sceneCountInBuildSettings | Number of Scenes in Build Settings. |





### Static Methods



| Method | Description |
| --- | --- |
| CreateScene | Create an empty new Scene at runtime with the given name. |
| GetActiveScene | Gets the currently active Scene. |
| GetSceneAt | Get the Scene at index in the SceneManager's list of loaded Scenes. |
| GetSceneByBuildIndex | Get a Scene struct from a build index. |
| GetSceneByName | Searches through the Scenes loaded for a Scene with the given name. |
| GetSceneByPath | Searches all Scenes loaded for a Scene that has the given asset path. |
| LoadScene | Loads the Scene by its name or index in Build Settings. |
| LoadSceneAsync | Loads the Scene asynchronously in the background. |
| MergeScenes | This will merge the source Scene into the destinationScene. |
| MoveGameObjectsToScene | Move multiple GameObjects, represented by a NativeArray of instance IDs, from their current Scene to a new Scene. |
| MoveGameObjectToScene | Move a GameObject from its current Scene to a new Scene. |
| SetActiveScene | Set the Scene to be active. |
| UnloadSceneAsync | Destroys all GameObjects associated with the given Scene and removes the Scene from the SceneManager. |





### Events



| Event | Description |
| --- | --- |
| activeSceneChanged | Subscribe to this event to get notified when the active Scene has changed. |
| sceneLoaded | Assign a custom callback to this event to get notifications when a Scene has loaded. |
| sceneUnloaded | Add a delegate to this to get notifications when a Scene has unloaded. |


            
