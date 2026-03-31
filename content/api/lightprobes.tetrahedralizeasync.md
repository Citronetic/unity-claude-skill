This version of Unity is unsupported.



# [LightProbes](LightProbes.html).TetrahedralizeAsync




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

public static void TetrahedralizeAsync();






### Description



Asynchronously tetrahedralize all currently loaded LightProbe positions.





Call this function to asynchronously calculate a Delaunay tetrahedralization of all currently loaded LightProbe positions, and update the [LightProbes](LightProbes.html) object with the result. Note that Unity does not raise an event when this asynchronous method completes.

Call this method after you load a Scene with [LoadSceneMode.Additive](SceneManagement.LoadSceneMode.Additive.html), or unload a Scene with [SceneManager.UnloadSceneAsync](SceneManagement.SceneManager.UnloadSceneAsync.html). Note that updating the tetrahedral tessellation is CPU-intensive. For more information, see [Light Probes and Scene loading](../Manual/light-probes-and-scene-loading.html).


              


```
using UnityEngine;
using UnityEngine.SceneManagement;public class TetrahedralizeAsyncExample : MonoBehaviour
{
    void Start()
    {
        // Additively load a Scene containing light probes
        SceneManager.LoadScene("ExampleScene", LoadSceneMode.Additive);        // Force Unity to asynchronously regenerate the tetrahedral tesselation for all loaded Scenes
        LightProbes.TetrahedralizeAsync();
    }
}
```





Additional resources: [LightProbes.Tetrahedralize](LightProbes.Tetrahedralize.html), [Light Probes in the Unity Manual](../Manual/LightProbes.html), [Lightmapping.Tetrahedralize](Lightmapping.Tetrahedralize.html).


            
