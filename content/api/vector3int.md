This version of Unity is unsupported.



# Vector3Int





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



Representation of 3D vectors and points using integers.





This structure is used in some places to represent 3D positions and vectors that don't require the precision of floating-point.





### Static Properties



| Property | Description |
| --- | --- |
| back | The unit vector in the negative z direction |
| down | Shorthand for writing Vector3Int(0, -1, 0). |
| forward | Shorthand for writing Vector3Int(0, 0, 1). |
| left | Shorthand for writing Vector3Int(-1, 0, 0). |
| one | Shorthand for writing Vector3Int(1, 1, 1). |
| right | Shorthand for writing Vector3Int(1, 0, 0). |
| up | Shorthand for writing Vector3Int(0, 1, 0). |
| zero | Shorthand for writing Vector3Int(0, 0, 0). |





### Properties



| Property | Description |
| --- | --- |
| magnitude | Returns the length of this vector (Read Only). |
| sqrMagnitude | Returns the squared length of this vector (Read Only). |
| this[int] | Access the x, y or z component using [0], [1] or [2] respectively. |
| x | X component of the vector. |
| y | Y component of the vector. |
| z | Z component of the vector. |





### Constructors



| Constructor | Description |
| --- | --- |
| Vector3Int | Initializes and returns an instance of a new Vector3Int with x, y, z components. |





### Public Methods



| Method | Description |
| --- | --- |
| Clamp | Clamps the Vector3Int to the bounds given by min and max. |
| Equals | Returns true if the objects are equal. |
| GetHashCode | Gets the hash code for the Vector3Int. |
| Set | Set x, y and z components of an existing Vector3Int. |
| ToString | Returns a formatted string for this vector. |





### Static Methods



| Method | Description |
| --- | --- |
| CeilToInt | Converts a  Vector3 to a Vector3Int by doing a Ceiling to each value. |
| Distance | Returns the distance between a and b. |
| FloorToInt | Converts a  Vector3 to a Vector3Int by doing a Floor to each value. |
| Max | Returns a vector that is made from the largest components of two vectors. |
| Min | Returns a vector that is made from the smallest components of two vectors. |
| RoundToInt | Converts a  Vector3 to a Vector3Int by doing a Round to each value. |
| Scale | Multiplies two vectors component-wise. |





### Operators



| Operator | Description |
| --- | --- |
| operator - | Subtracts one vector from another. |
| operator != | Returns true if vectors different. |
| operator * | Multiplies a vector by a number. |
| operator / | Divides a vector by a number. |
| operator + | Adds two vectors. |
| operator == | Returns true if the vectors are equal. |
| Vector2Int | Converts an integer three-vector into an integer two-vector. |
| Vector3 | Converts a Vector3Int to a Vector3. |


            
