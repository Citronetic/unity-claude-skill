This version of Unity is unsupported.



# [Terrain](Terrain.html).heightmapPixelError




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












                    public float heightmapPixelError;






### Description



An approximation of how many pixels the terrain will pop in the worst case when switching lod.





A higher value reduces the number of polygons drawn.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Terrain.activeTerrain.heightmapPixelError = 10;
    }
}
```


            
