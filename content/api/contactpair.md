This version of Unity is unsupported.



# ContactPair





struct in
          UnityEngine



/



Implemented in:[UnityEngine.PhysicsModule](UnityEngine.PhysicsModule.html)


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



















### Description



A pair of Colliders that belong to the bodies in the parent [ContactPairHeader](ContactPairHeader.html) struct.





Contains an array of [ContactPairPoint](ContactPairPoint.html)s that can be retrieved using the [GetContactPoint](ContactPair.GetContactPoint.html) method.





### Properties



| Property | Description |
| --- | --- |
| collider | The first Collider component of the ContactPair. |
| colliderInstanceID | Instance ID of the first Collider in the ContactPair. |
| contactCount | The number of ContactPairPoints that this pair contains. |
| impulseSum | Total impulse sum of the pair. |
| isCollisionEnter | Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionEnter events. |
| isCollisionExit | Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionExit events. |
| isCollisionStay | Whether or not this pair is equivalent to a pair reported in MonoBehaviour.OnCollisionStay events. |
| otherCollider | The second Collider component of the ContactPair. |
| otherColliderInstanceID | Instance ID of the second Collider in the ContactPair. |





### Public Methods



| Method | Description |
| --- | --- |
| CopyToNativeArray | Copies the internal ContactPairPoint buffer to the provided buffer. |
| GetContactPoint | Gets the ContactPairPoint at the provided index of this pair. |
| GetContactPointFaceIndex | Get the index of a face that a particular contact point belongs to in this ContactPairPoint. |


            
