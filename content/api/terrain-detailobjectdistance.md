This version of Unity is unsupported.



# [Terrain](Terrain.html).detailObjectDistance




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












                    public float detailObjectDistance;






### Description



Detail objects will be displayed up to this distance.





Additional resources: [detailObjectDensity](Terrain-detailObjectDensity.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Terrain.activeTerrain.detailObjectDistance = 40;
    }
}
```


            
