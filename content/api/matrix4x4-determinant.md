This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).determinant




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












                    public float determinant;






### Description



The determinant of the matrix. (Read Only)





You can not invert matrices with a determinant of zero.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Update()
    {
        // create a transformation matrix with scale, zero position and no rotation
        var scale = new Vector3(5,3,2);
        var matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, scale);        // determinant of a scaled matrix is volume of the parallelepiped
        // formed from its axes, in this case 5*3*2=30
        Debug.Log(matrix.determinant);
    }
}
```





See [Determinant on Wikipedia](https://en.wikipedia.org/wiki/Determinant) for more details.

Additional resources: [inverse](Matrix4x4-inverse.html) property, [Inverse3DAffine](Matrix4x4.Inverse3DAffine.html) method.


            
