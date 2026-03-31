This version of Unity is unsupported.



# [ScriptableObject](ScriptableObject.html).OnEnable()




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




                [Switch to Manual](../Manual/class-ScriptableObject.html)














### Description



This function is called when the object is loaded.





`OnEnable` is called whenever a ScriptableObject instance is loaded into memory. This happens in the following scenarios:



          - At Editor startup, for all ScriptableObjects referenced in open scenes.

          - On creation of a new ScriptableObject created as an asset via the [Create Asset menu](CreateAssetMenuAttribute.html) in the Editor.

          - On instantiation of a ScriptableObject instantiated at runtime via [ScriptableObject.CreateInstance](ScriptableObject.CreateInstance.html) or by runtime loading of the asset.

          - On [domain reload](../Manual/domain-reloading.html), for all ScriptableObjects loaded in memory on.

          - On first loading a scene which contains a reference to the ScriptableObject in the [Hierarchy window](../Manual/Hierarchy.html), or on subsequent loads if the original instance has since been garbage collected.

          - On first selection of a ScriptableObject in the [Project window](../Manual/ProjectView.html), or on subsequent selections if the original instance has since been garbage collected.





In most circumstances, `OnEnable` is only called once for a particular instance of a ScriptableObject asset in memory and is appropriate to use for initialization. If `OnEnable` is being called multiple times, it's likely that the ScriptableObject is being re-instantiated. This can happen for a variety of reasons.

For example, if you deselect the ScriptableObject in the Project window or open a new scene that doesn't reference it, the object goes out of scope and can be garbage collected. Alternatively, events that trigger domain reloads, such as recompiling scripts or reimporting assets, can also cause ScriptableObjects to be re-instantiated and `OnEnable` to be called again.

In the Editor, Unity also sometimes creates temporary instances of ScriptableObjects for property inspection or editing. Each temporary instance receives its own `OnEnable` call, but [ScriptableObject.OnDisable](ScriptableObject.OnDisable.html) might not be called if the object is garbage collected or destroyed without proper cleanup.

`OnEnable` can't be a [coroutine](../Manual/Coroutines.html).


              


```
// Right-click in the Project window > Create > Example > CounterData.
// Every time you recompile scripts or reload the asset, OnEnable is called, and the counter resets.using UnityEngine;[CreateAssetMenu(menuName = "Example/CounterData")]
public class CounterData : ScriptableObject
{
    public int counter;    // Called when the ScriptableObject is loaded or reloaded
    void OnEnable()
    {
        Debug.Log("CounterData enabled! Resetting counter.");
        counter = 0; // Reset counter whenever enabled
    }
}
```


            
