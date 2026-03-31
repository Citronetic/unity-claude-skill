This version of Unity is unsupported.



# PhysicsMaterial2D





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.Physics2DModule](UnityEngine.Physics2DModule.html)


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



Asset type that defines the surface properties of a [Collider2D](Collider2D.html).





When two Colllider2D come into contact, the physics system uses both friction and bounciness if it needs to calculate a collision response.





### Properties



| Property | Description |
| --- | --- |
| bounceCombine | Determines how the effective bounciness is calculated when two Collider2D come into contact. |
| bounciness | Coefficient of restitution. |
| friction | Coefficient of friction. |
| frictionCombine | Determines how the effective friction is calculated when two Collider2D come into contact. |





### Static Methods



| Method | Description |
| --- | --- |
| GetCombinedValues | Calculates the effective value used when two Collider2D come into contact with their own PhysicsMaterial2D. |





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





            
