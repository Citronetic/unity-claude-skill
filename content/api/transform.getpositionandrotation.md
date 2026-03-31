This version of Unity is unsupported.



# [Transform](Transform.html).GetPositionAndRotation




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




                [Switch to Manual](../Manual/class-Transform.html)










## Declaration

public void GetPositionAndRotation(out [Vector3](Vector3.html) position,
out [Quaternion](Quaternion.html) rotation);






### Parameters



| Parameter | Description |
| --- | --- |
| position | Out parameter that will receive the position of the transform in world space. |
| rotation | Out parameter that will receive the rotation of the transform in world space. |





### Description



Updates the value of the out parameters `position` and `rotation` with the transform's current `position` and `rotation` in world space (that is, relative to the scene's origin coordinates).





**Note**: When getting both the `position` and `rotation` of a `Transform`, calling this method is more efficient than querying to [Transform.position](Transform-position.html) and [Transform.rotation](Transform-rotation.html) individually.

The typical usage for this method is to retrieve a transform's `position` and `rotation` in world space, to either display them or evaluate them. For example:

`transform.GetPositionAndRotation(out Vector3 position, out Quaternion rotation)`

The following example logs the position and rotation of a `GameObject`'s `Transform` in world space.


              


```
using UnityEngine;// Attach this script to a GameObject as a component.
public class GetPositionAndRotationExample : MonoBehaviour
{
    void Start()
    {
        // transform refers to the Transform of the GameObject this script is attached to.
        transform.GetPositionAndRotation(out Vector3 position, out Quaternion rotation);        // We will convert the rotation Quaternion to Euler angles for readability.
        Debug.Log($"{name} is located at {position}, and has the rotation {rotation.eulerAngles}");
    }
}
```





Additional resources: [Quaternion](Quaternion.html), [Vector3](Vector3.html).


            
