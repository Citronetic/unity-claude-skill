This version of Unity is unsupported.



# [GameObjectUtility](GameObjectUtility.html).SetStaticEditorFlags




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















## Declaration

public static void SetStaticEditorFlags([GameObject](GameObject.html) go,
[StaticEditorFlags](StaticEditorFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| go | The GameObject whose Static Editor Flags you want to set. |
| flags | The StaticEditorFlags to set on the GameObject. |





### Description



Sets the StaticEditorFlags of the specified GameObject.





[StaticEditorFlags](StaticEditorFlags.html) determine which Unity systems consider a GameObject as static, and include the GameObject in their precomputations in the Unity Editor. Setting StaticEditorFlags at runtime has no effect on these systems.

For more information, see the [Unity Manual documentation on Static Editor Flags](../Manual/StaticObjects.html).

The code in this example enables the **Occludee Static** and **Occluder Static** StaticEditorFlags for a GameObject:


              


```
using UnityEngine;
using UnityEditor;
public class StaticEditorFlagsExample
{
    [MenuItem("Examples/Create GameObject and set Static Editor Flags")]
    static void CreateGameObjectAndSetStaticEditorFlags()
    {
        // Create a GameObject
        var go = new GameObject("Example");
        // Set the GameObject's StaticEditorFlags
        var flags = StaticEditorFlags.OccluderStatic | StaticEditorFlags.OccludeeStatic;
        GameObjectUtility.SetStaticEditorFlags(go, flags);
    }
}
```





Additional resources: [StaticEditorFlags](StaticEditorFlags.html), [GameObject.isStatic](GameObject-isStatic.html)


            
