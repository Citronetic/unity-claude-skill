This version of Unity is unsupported.



# Resources





class in
          UnityEngine



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



The Resources class allows you to find and access Objects including assets.





In the editor, [Resources.FindObjectsOfTypeAll](Resources.FindObjectsOfTypeAll.html) can be used to locate assets and Scene objects.

All assets that are in a folder named "Resources" anywhere in the Assets folder can be accessed via the [Resources.Load](Resources.Load.html) functions.
Multiple "Resources" folders may exist and when loading objects each will be examined.

In Unity you usually don't use path names to access assets, instead you expose a reference to an
asset by declaring a member-variable, and then assign it in the inspector.
When using this technique Unity can automatically calculate which assets are used when building a player.
This radically minimizes the size of your players to the assets that you actually use in the built game.
When you place assets in "Resources" folders this can not be done, thus all assets in the "Resources" folders will be included in a build.

Another disadvantage of using path names is that it leads to less reusable code since scripts will have specific hard coded requirements on where the used assets are placed.
On the other hand using references that are exposed in the inspector are self-documenting and immediately obvious to the user of your script.

However there are situations where it is more convenient to fetch an asset by its name instead of linking to it in the inspector.
Essentially whenever it is inconvenient to assign the reference to the object in the inspector.
For example you might want to create a game object procedurally from a script and for example assign a texture to a procedurally generated mesh.

Some loaded assets, most notably textures, can use up memory even when no instance exists in the Scene. To reclaim this memory when the asset is no longer needed, you can use [Resources.UnloadUnusedAssets](Resources.UnloadUnusedAssets.html).

**Note:** The [Resources](Resources.html) folder in Assets needs to be created before it is used.  It is not created when a new Project is created.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        GameObject go = GameObject.CreatePrimitive(PrimitiveType.Plane);
        Renderer rend = go.GetComponent<Renderer>();
        rend.material.mainTexture = Resources.Load("glass") as Texture;
    }
}
```





### Static Methods



| Method | Description |
| --- | --- |
| FindObjectsOfTypeAll | Returns a list of all objects of Type T. |
| InstanceIDIsValid | Returns true if the given instance ID corresponds to a valid Object in memory. The Object could have been deleted or not loaded into memory yet. |
| InstanceIDsToValidArray | Translates an array of instance IDs to an array of bools indicating whether a given instance ID from instanceIDs corresponds to a valid Object in memory. The Object could have been deleted or not loaded into memory yet. |
| InstanceIDToObject | Translates an instance ID to an object reference. |
| InstanceIDToObjectList | Translates an array of instance IDs to a list of Object references. |
| Load | Loads the asset of the requested type stored at path in a Resources folder. |
| LoadAll | Loads all assets in a folder or file at path in a Resources folder. |
| LoadAsync | Asynchronously loads an asset stored at path in a Resources folder. |
| UnloadAsset | Unloads assetToUnload from memory. |
| UnloadUnusedAssets | Unloads assets that are not used. |


            
