This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).hierarchyChanged




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



Event that is raised when an object or group of objects in the hierarchy changes.





Actions that trigger this event include creating, renaming, reparenting, or destroying objects in the current hierarchy, as well as loading, unloading, renaming, or reordering loaded Scenes. Note that the event is not raised immediately in response to these actions, but rather during the next update of the editor application.

Actions taken with objects that have [HideFlags.HideInHierarchy](HideFlags.HideInHierarchy.html) set will not cause this event to be raised, but changing [Object.hideFlags](Object-hideFlags.html) will.

The following example script logs the number of objects to the console whenever the hierarchy changes. Copy it into a file called HierarchyMonitor.cs and put it in a folder called Editor.


              


```
using System.Linq;
using UnityEditor;
using UnityEngine;[InitializeOnLoadAttribute]
public static class HierarchyMonitor
{
    static HierarchyMonitor()
    {
        EditorApplication.hierarchyChanged += OnHierarchyChanged;
    }    static void OnHierarchyChanged()
    {
        var all = Resources.FindObjectsOfTypeAll(typeof(GameObject));
        var numberVisible =
            all.Where(obj => (obj.hideFlags & HideFlags.HideInHierarchy) != HideFlags.HideInHierarchy).Count();
        Debug.LogFormat("There are currently {0} GameObjects visible in the hierarchy.", numberVisible);
    }
}
```





Additional resources: [EditorWindow.OnHierarchyChange](EditorWindow.OnHierarchyChange.html).


            
