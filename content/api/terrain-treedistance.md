This version of Unity is unsupported.



# [Terrain](Terrain.html).treeDistance




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












                    public float treeDistance;






### Description



The maximum distance at which trees are rendered.





The higher this is, the further the distance trees can be seen and the slower it will run.

Additional resources: [Terrain.treeBillboardDistance](Terrain-treeBillboardDistance.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Terrain.activeTerrain.treeDistance = 2000;
    }
}
```


            
