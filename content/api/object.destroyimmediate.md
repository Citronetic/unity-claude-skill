This version of Unity is unsupported.



# [Object](Object.html).DestroyImmediate




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




                [Switch to Manual](../Manual/class-Object.html)










## Declaration

public static void DestroyImmediate([Object](Object.html) obj,
bool allowDestroyingAssets = false);






### Parameters



| Parameter | Description |
| --- | --- |
| obj | Object to be destroyed. |
| allowDestroyingAssets | Set to true to allow assets to be destroyed. |





### Description



Destroys the specified object immediately. Use with caution and in Edit mode only.





`DestroyImmediate` is intended for use in scripts that run in Edit mode, not at runtime. In Edit mode, the usual delayed destruction performed by `Destroy` does not occur, so immediate destruction is necessary.

In runtime code, use [Object.Destroy](Object.Destroy.html) instead. This call marks the object for destruction at the end of the current frame, which is safer and prevents many common issues. If you only want to deactivate a GameObject, use [GameObject.SetActive](GameObject.SetActive.html) instead.

Attempting to call `DestroyImmediate` during physics trigger/contact events, animation event callbacks, rendering callbacks, or [MonoBehaviour.OnValidate](MonoBehaviour.OnValidate.html) results in an error.

Using `DestroyImmediate` with the optional `allowDestroyingAssets` parameter set to `true` can permanently remove assets from your project.

Destroying or removing objects from a collection (such as an array or list) while looping through it can cause skipped elements, out-of-bounds errors, or other unpredictable behavior. This is a general programming risk, not unique to Unity.


              


```
// Select one or more GameObjects in your hierarchy.
// Go to the menu: Tools > Destroy Selected GameObjects Immediately.
// The selected GameObjects will be deleted from the scene immediately.using UnityEngine;
using UnityEditor;public class DestroyImmediateExample
{
    [MenuItem("Tools/Destroy Selected GameObjects Immediately")]
    static void DestroySelectedGameObjects()
    {
        // Get all selected GameObjects in the scene
        var selected = Selection.gameObjects;        if (selected.Length == 0)
        {
            Debug.LogWarning("No GameObjects selected!");
            return;
        }        foreach (var go in selected)
        {
            // Destroys the object immediately in the editor
            Object.DestroyImmediate(go);
        }
        Debug.Log($"{selected.Length} GameObjects destroyed immediately.");
    }
}
```


            
