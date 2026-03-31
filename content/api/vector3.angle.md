This version of Unity is unsupported.



# [Vector3](Vector3.html).Angle




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

public static float Angle([Vector3](Vector3.html) from,
[Vector3](Vector3.html) to);






### Parameters



| Parameter | Description |
| --- | --- |
| from | The vector from which the angular difference is measured. |
| to | The vector to which the angular difference is measured. |





### Returns



**float**
        The angle in degrees between the two vectors.





### Description



Calculates the angle between two vectors.





The angle returned is the angle of rotation from the first vector to the second, when treating these two vector inputs as directions.

Note: The angle returned will always be between 0 and 180 degrees, because the method returns the smallest angle between the vectors. That is, it will never return a reflex angle.


              


```
using UnityEngine;public class AngleExample : MonoBehaviour
{
    public Transform target;    // prints "close" if the z-axis of this transform looks
    // almost towards the target    void Update()
    {
        Vector3 targetDir = target.position - transform.position;
        float angle = Vector3.Angle(targetDir, transform.forward);        if (angle < 5.0f)
            print("Close");
    }
}
```





Additional resources: [SignedAngle](Vector3.SignedAngle.html) function.


            
