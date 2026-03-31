This version of Unity is unsupported.



# [StaticEditorFlags](StaticEditorFlags.html).ContributeGI




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



Include the target [Mesh Renderer](../Manual/class-MeshRenderer.html) in global illumination calculations.





These calculations take place while precomputing lighting data at bake time. The ContributeGI property exposes the [ReceiveGI](ReceiveGI.html) property. The ContributeGI property only takes effect if you enable a global illumination setting such as [Baked Global Illumination](../Manual/class-LightingSettings.html#MixedLighting.html) or [Enlighten Realtime Global Illumination](../Manual/class-LightingSettings.html#RealtimeLighting.html) for the target Scene. For additional context, see [this tutorial for setting up the Built-in Render Pipeline and lighting](../Manual/BestPracticeLightingPipelines.html) in Unity.


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
        var flags = StaticEditorFlags.ContributeGI;
        GameObjectUtility.SetStaticEditorFlags(go, flags);
    }
}
```





Additional resources: [GameObjectUtility.SetStaticEditorFlags](GameObjectUtility.SetStaticEditorFlags.html), [GameObject.isStatic](GameObject-isStatic.html).


            
