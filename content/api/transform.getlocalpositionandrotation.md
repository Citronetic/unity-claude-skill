This version of Unity is unsupported.



# [Transform](Transform.html).GetLocalPositionAndRotation




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

public void GetLocalPositionAndRotation(out [Vector3](Vector3.html) localPosition,
out [Quaternion](Quaternion.html) localRotation);






### Parameters



| Parameter | Description |
| --- | --- |
| localPosition | Out parameter that will receive the position of the transform in local space. |
| localRotation | Out parameter that will receive the rotation of the transform in local space. |





### Description



Updates the value of the out parameters `localPosition` and `localRotation` with the transform's current `position` and `rotation` in local space (that is, relative to its parent's `transform`).





**Note**: When getting both the `localPosition` and `localRotation` of a `Transform`, calling this method is slightly more efficient than querying [Transform.localPosition](Transform-localPosition.html) and [Transform.localRotation](Transform-localRotation.html) individually.

If the transform has no parent, then calling this is equivalent to calling [Transform.GetPositionAndRotation](Transform.GetPositionAndRotation.html).

The typical usage for this method is to retrieve a transform's `position` and `rotation` in local space, to either display them or evaluate them. For example:

`transform.GetLocalPositionAndRotation(out Vector3 localPosition, out Quaternion localRotation)`

The following example logs the position and rotation of a `GameObject`'s `Transform` in local space.


              


```
using UnityEngine;// Attach this script to a GameObject as a component.
public class GetLocalPositionAndRotationExample : MonoBehaviour
{
    void Start()
    {
        // transform refers to the Transform of the GameObject this script is attached to.
        transform.GetLocalPositionAndRotation(out Vector3 localPosition, out Quaternion localRotation);        // We will convert the rotation Quaternion to Euler angles for readability.
        Debug.Log($"{name} is located at {localPosition}, and has the rotation {localRotation.eulerAngles} relative to its parent.");
    }
}
```





Additional resources: [Quaternion](Quaternion.html), [Vector3](Vector3.html).


            
