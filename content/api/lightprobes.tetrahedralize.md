This version of Unity is unsupported.



# [LightProbes](LightProbes.html).Tetrahedralize




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

public static void Tetrahedralize();






### Description



Synchronously tetrahedralize the currently loaded LightProbe positions.





Call this function to tetrahedralize the currently loaded LightProbe positions.
You should generally only call this function upon receiving a [LightProbes.needsRetetrahedralization](LightProbes-needsRetetrahedralization.html) event.


              


```
using UnityEngine;
using UnityEngine.SceneManagement;public class TetrahedralizeExample : MonoBehaviour
{
    void Start()
    {
        // Additively load a Scene containing light probes
        SceneManager.LoadScene("ExampleScene", LoadSceneMode.Additive);        // Force Unity to synchronously regenerate the tetrahedral tesselation for all loaded Scenes
        LightProbes.Tetrahedralize();
    }
}
```





Additional resources: [LightProbes.TetrahedralizeAsync](LightProbes.TetrahedralizeAsync.html), [Light Probes in the Unity Manual](../Manual/LightProbes.html), [Lightmapping.Tetrahedralize](Lightmapping.Tetrahedralize.html).


            
