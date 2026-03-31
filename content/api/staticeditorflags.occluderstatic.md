This version of Unity is unsupported.



# [StaticEditorFlags](StaticEditorFlags.html).OccluderStatic




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



Mark the GameObject as a Static Occluder in the occlusion culling system.





For more information, see the documentation on [the Occlusion Culling system](../Manual/OcclusionCulling.html).


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
        var flags = StaticEditorFlags.OccluderStatic;
        GameObjectUtility.SetStaticEditorFlags(go, flags);
    }
}
```





Additional resources: [GameObjectUtility.SetStaticEditorFlags](GameObjectUtility.SetStaticEditorFlags.html), [GameObject.isStatic](GameObject-isStatic.html)


            
