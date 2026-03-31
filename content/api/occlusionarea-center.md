This version of Unity is unsupported.



# [OcclusionArea](OcclusionArea.html).center




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




                [Switch to Manual](../Manual/class-OcclusionArea.html)







                    public [Vector3](Vector3.html) center;






### Description



Center of the occlusion area relative to the transform.


              


```
using UnityEngine;[RequireComponent(typeof(OcclusionArea))]
public class Example : MonoBehaviour
{
    // Sets the center of the occlusion area to the center of the transform
    void Start()
    {
        transform.GetComponent<OcclusionArea>().center = Vector3.zero;
    }
}
```


            
