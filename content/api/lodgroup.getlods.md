This version of Unity is unsupported.



# [LODGroup](LODGroup.html).GetLODs




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




                [Switch to Manual](../Manual/class-LODGroup.html)










## Declaration

public LOD[] GetLODs();






### Returns



**LOD[]**
        The LOD array.





### Description



Returns the array of LODs.


              


```
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;[ExecuteInEditMode]
public class DisplayLods : MonoBehaviour
{
#if UNITY_EDITOR
    void OnGUI()
    {
        // Display on the Game view top level information of each LOD for the selected LODGroup.
        if (gameObject != Selection.activeGameObject)
            return;        var lodGroup = GetComponent<LODGroup>();        if (lodGroup && gameObject == Selection.activeGameObject)
        {
            LOD[] lods = lodGroup.GetLODs();            GUILayout.BeginVertical(gameObject.name);
            for (int i=0 ; i<lods.Length ; i++)
            {
                LOD lod = lods[i];                GUILayout.Label($"LOD {i} : Renderer count = {lod.renderers.Length}, Fade trans. width = {lod.fadeTransitionWidth}, Screen rel. trans. height = {lod.screenRelativeTransitionHeight}");
            }
            GUILayout.EndVertical();
        }
    }
#endif
}
```





Additional resources: [LOD](LOD.html), [SetLODs](LODGroup.SetLODs.html)


            
