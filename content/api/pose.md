This version of Unity is unsupported.



# Pose





struct in
          UnityEngine



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



Representation of a Position, and a Rotation in 3D Space





This structure is used primarily in XR applications to describe the current "pose" of a device in 3D space.





### Static Properties



| Property | Description |
| --- | --- |
| identity | Shorthand for pose which represents zero position, and an identity rotation. |





### Properties



| Property | Description |
| --- | --- |
| forward | Returns the forward vector of the pose. |
| position | The position component of the pose. |
| right | Returns the right vector of the pose. |
| rotation | The rotation component of the pose. |
| up | Returns the up vector of the pose. |





### Constructors



| Constructor | Description |
| --- | --- |
| Pose | Creates a new pose with the given vector, and quaternion values. |





### Public Methods



| Method | Description |
| --- | --- |
| GetTransformedBy | Transforms the current pose into the local space of the provided pose. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | Returns true if two poses are not equal. |
| operator == | Returns true if two poses are equal. |


            
