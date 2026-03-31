This version of Unity is unsupported.



# ContactPairHeader





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



A header struct which contains colliding bodies.





This struct contains an array of [ContactPair](ContactPair.html)s that can be retrieved with the [GetContactPair](ContactPairHeader.GetContactPair.html) method.





### Properties



| Property | Description |
| --- | --- |
| body | The first Rigidbody or ArticulationBody in the pair. |
| bodyInstanceID | Instance ID of the first Rigidbody or the ArticualtionBody in the pair. |
| otherBody | The second Rigidbody or ArticulationBody in the pair. |
| otherBodyInstanceID | Instance ID of the second Rigidbody or the ArticualtionBody in the pair. |
| pairCount | Number of ContactPairs that this header contains. |





### Public Methods



| Method | Description |
| --- | --- |
| GetContactPair | Gets the ContactPair at index of this pair header. |


            
