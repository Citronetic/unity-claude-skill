This version of Unity is unsupported.



# [Terrain](Terrain.html).treeMaximumFullLODCount




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












                    public int treeMaximumFullLODCount;






### Description



Maximum number of trees rendered at full LOD.





This is an easy setting to prevent too many trees being rendered at too high resolution in dense forests.
Since there will be no fade if `treeMaximumFullLODCount` is exceeded you should tweak the `treeBillboardDistance` to
not include unnecessary trees that are not being seen but, still rendered.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Terrain.activeTerrain.treeMaximumFullLODCount = 200;
    }
}
```


            
