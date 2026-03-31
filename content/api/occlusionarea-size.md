This version of Unity is unsupported.



# [OcclusionArea](OcclusionArea.html).size




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







                    public [Vector3](Vector3.html) size;






### Description



Size that the occlusion area will have.


              


```
using UnityEngine;[RequireComponent(typeof(OcclusionArea))]
public class Example : MonoBehaviour
{
    // Sets an Occlusion area of 10 units in x, 20 units in y and 30 units in z
    void Start()
    {
        transform.GetComponent<OcclusionArea>().size = new Vector3(10, 20, 30);
    }
}
```


            
