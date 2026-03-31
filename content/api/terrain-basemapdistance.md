This version of Unity is unsupported.



# [Terrain](Terrain.html).basemapDistance




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












                    public float basemapDistance;






### Description



Heightmap patches beyond basemap distance will use a precomputed low res basemap.





This improves performance for far away patches. Close up Unity renders the heightmap using splat maps by blending between
any amount of provided terrain textures.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Terrain.activeTerrain.basemapDistance = 100;
    }
}
```


            
