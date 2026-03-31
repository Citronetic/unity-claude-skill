This version of Unity is unsupported.



# AvatarMask





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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




                [Switch to Manual](../Manual/class-AvatarMask.html)














### Description



AvatarMask is used to mask out humanoid body parts and transforms.





They can be used when importing animation or in an animator controller layer.





### Properties



| Property | Description |
| --- | --- |
| transformCount | Number of transforms. |





### Constructors



| Constructor | Description |
| --- | --- |
| AvatarMask | Creates a new AvatarMask. |





### Public Methods



| Method | Description |
| --- | --- |
| AddTransformPath | Adds a transform path into the AvatarMask. |
| GetHumanoidBodyPartActive | Returns true if the humanoid body part at the given index is active. |
| GetTransformActive | Returns true if the transform at the given index is active. |
| GetTransformPath | Returns the path of the transform at the given index. |
| RemoveTransformPath | Removes a transform path from the AvatarMask. |
| SetHumanoidBodyPartActive | Sets the humanoid body part at the given index to active or not. |
| SetTransformActive | Sets the tranform at the given index to active or not. |
| SetTransformPath | Sets the path of the transform at the given index. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
