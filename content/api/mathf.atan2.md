This version of Unity is unsupported.



# [Mathf](Mathf.html).Atan2




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




                [Switch to Manual](../Manual/class-Mathf.html)










## Declaration

public static float Atan2(float y,
float x);






### Parameters



| Parameter | Description |
| --- | --- |
| y | Y-component of the input 2D vector. |
| x | X-component of the input 2D vector. |





### Returns



**float**
        Angle in radians between the (`x`,`y`) vector and the (1,0) unit vector, in the range [-Pi, Pi].





### Description



Returns the angle in radians whose [Tan](Mathf.Tan.html) is `y/x`.





Return value is the angle between the x-axis unit vector (1, 0) and a 2D vector starting at zero and terminating
at (x,y).

**Note:** This function takes account of the cases where x is zero and returns the
correct angle rather than throwing a division by zero exception.

Additional resources: [Tan](Mathf.Tan.html), [Atan](Mathf.Atan.html).


              


```
// Usually you use transform.LookAt for this.
// But this can give you more control over the angleusing UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Transform target;    void Update()
    {
        Vector3 relative = transform.InverseTransformPoint(target.position);
        float angle = Mathf.Atan2(relative.x, relative.z) * Mathf.Rad2Deg;
        transform.Rotate(0, angle, 0);
    }
}
```


            
