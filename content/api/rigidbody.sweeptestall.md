This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).SweepTestAll




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




                [Switch to Manual](../Manual/class-Rigidbody.html)










## Declaration

public RaycastHit[] SweepTestAll([Vector3](Vector3.html) direction,
float maxDistance = Mathf.Infinity,
[QueryTriggerInteraction](QueryTriggerInteraction.html) queryTriggerInteraction = QueryTriggerInteraction.UseGlobal);






### Parameters



| Parameter | Description |
| --- | --- |
| direction | The direction into which to sweep the rigidbody. |
| maxDistance | The length of the sweep. |
| queryTriggerInteraction | Specifies whether this query should hit Triggers. |





### Returns



**RaycastHit[]**
        An array of all colliders hit in the sweep.





### Description



Like [Rigidbody.SweepTest](Rigidbody.SweepTest.html), but returns all hits.





The sweep may return multiple hits against the same collider if more then one of the rigidbody's attached colliders would hit it.

Note that this function only works when a primitive collider type (sphere, cube or capsule) or a convex mesh is attached to the rigidbody object - concave mesh colliders will not work, although they can be detected in the Scene by the sweep.

This function can only return up to 128 hits.


            
