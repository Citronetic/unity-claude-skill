This version of Unity is unsupported.



# [Terrain](Terrain.html).collectDetailPatches




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












                    public bool collectDetailPatches;






### Description



Collect detail patches from memory.





By default the property value is true, meaning the detail patches in the Terrain will be removed from memory when not visible. If the property is set to false, the patches are kept in memory until the Terrain object is destroyed or the collectDetailPatches property is set to true. By setting the property to false all the detail patches for a given density will be initialized and kept in memory. Changing the density will recreate the patches.

Note that detail patches can use a large amount of memory, therefore this property when set to false can increase the memory usage of your application significantly.

The value is not serialized with Terrain component.

Additional resources: [detailObjectDensity](Terrain-detailObjectDensity.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Terrain.activeTerrain.collectDetailPatches = false;
    }
}
```


            
