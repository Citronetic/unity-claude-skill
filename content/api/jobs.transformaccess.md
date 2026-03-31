This version of Unity is unsupported.



# TransformAccess





struct in
          UnityEngine.Jobs



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Represents the position, rotation and scale of an object.





### Properties



| Property | Description |
| --- | --- |
| isValid | Determines whether this instance refers to a valid Transform. |
| localPosition | The position of the transform relative to the parent. |
| localRotation | The rotation of the transform relative to the parent transform's rotation. |
| localScale | The scale of the transform relative to the parent. |
| localToWorldMatrix | Matrix that transforms a point from local space into world space (Read Only). |
| position | The position of the transform in world space. |
| rotation | The rotation of the transform in world space stored as a Quaternion. |
| worldToLocalMatrix | Matrix that transforms a point from world space into local space (Read Only). |





### Public Methods



| Method | Description |
| --- | --- |
| GetLocalPositionAndRotation | Gets the position and rotation of the transform in local space relative to its parent transform. |
| GetPositionAndRotation | Gets the position and rotation of the transform in world space. |
| SetLocalPositionAndRotation | Sets the position and rotation of the transform in local space relative to its parent transform. |
| SetPositionAndRotation | Sets the world space position and rotation of the transform. |


            
