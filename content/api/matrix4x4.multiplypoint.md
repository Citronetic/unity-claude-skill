This version of Unity is unsupported.



# [Matrix4x4](Matrix4x4.html).MultiplyPoint




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

public [Vector3](Vector3.html) MultiplyPoint([Vector3](Vector3.html) point);






### Description



Transforms a position by this matrix (generic).





Returns a position `v` transformed by the current fully arbitrary matrix.
If the matrix is a regular 3D transformation matrix, it is much faster to
use [MultiplyPoint3x4](Matrix4x4.MultiplyPoint3x4.html) instead. `MultiplyPoint` is slower, but can handle
projective transformations as well.

Additional resources: [MultiplyPoint3x4](Matrix4x4.MultiplyPoint3x4.html), [MultiplyVector](Matrix4x4.MultiplyVector.html).


              


```
using UnityEngine;public class ScriptExample : MonoBehaviour
{
  void Start()
  {
    // Find our current location in the camera's projection space.
    Vector3 pt = Camera.main.projectionMatrix.MultiplyPoint(transform.position);
  }
}
```


            
