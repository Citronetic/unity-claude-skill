This version of Unity is unsupported.



# BlendTree





class in
          UnityEditor.Animations



/



Inherits from:[Motion](Motion.html)


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



Blend trees are used to blend continuously animation between their children. They can either be 1D or 2D.





### Properties



| Property | Description |
| --- | --- |
| blendParameter | Parameter that is used to compute the blending weight of the children in 1D blend trees or on the X axis of a 2D blend tree. |
| blendParameterY | Parameter that is used to compute the blending weight of the children on the Y axis of a 2D blend tree. |
| blendType | The Blending type can be either 1D or different types of 2D. |
| children | A copy of the list of the blend tree child motions. |
| maxThreshold | Sets the maximum threshold that will be used by the ChildMotion. Only used when useAutomaticThresholds is true. |
| minThreshold | Sets the minimum threshold that will be used by the ChildMotion. Only used when useAutomaticThresholds is true. |
| useAutomaticThresholds | When active, the children's thresholds are automatically spread between 0 and 1. |





### Public Methods



| Method | Description |
| --- | --- |
| AddChild | Utility function to add a child motion to a blend trees. |
| CreateBlendTreeChild | Utility function to add a child blend tree to a blend tree. |
| RemoveChild | Utility function to remove the child of a blend tree. |





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





            
