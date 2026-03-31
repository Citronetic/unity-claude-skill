This version of Unity is unsupported.



# PropertyPath





struct in
          Unity.Properties



/



Implemented in:[UnityEngine.PropertiesModule](UnityEngine.PropertiesModule.html)


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



A [PropertyPath](Unity.Properties.PropertyPath.html) is used to store a reference to a single property within a tree.





The path is stored as an array of parts and can be easily queried for algorithms.





### Properties



| Property | Description |
| --- | --- |
| IsEmpty | Gets if there is any part contained in the PropertyPath. |
| Length | Gets the number of parts contained in the PropertyPath. |
| this[int] | Gets the PropertyPathPart at the given index. |





### Constructors



| Constructor | Description |
| --- | --- |
| PropertyPath | Initializes a new instance of the PropertyPath based on the given property string. |





### Public Methods



| Method | Description |
| --- | --- |
| Equals | Indicates whether this instance and a specified object are equal. |





### Static Methods



| Method | Description |
| --- | --- |
| AppendIndex | Returns a new PropertyPath combining the given PropertyPath and an index-type
 PropertyPathPart. |
| AppendKey | Returns a new PropertyPath combining the given PropertyPath and an key-type
 PropertyPathPart. |
| AppendName | Returns a new PropertyPath combining the given PropertyPath and an name-type
 PropertyPathPart. |
| AppendPart | Returns a new PropertyPath combining the given PropertyPath and PropertyPathPart. |
| AppendProperty | Returns a new PropertyPath combining the given PropertyPath and a PropertyPathPart
 whose type will be based on the property interfaces. |
| Combine | Returns a new PropertyPath combining the parts of the two given PropertyPath. |
| FromIndex | Returns a new PropertyPath from the provided index. |
| FromKey | Returns a new PropertyPath from the provided key. |
| FromName | Returns a new PropertyPath from the provided name. |
| FromPart | Returns a new PropertyPath from the provided PropertyPathPart. |
| Pop | Returns a new PropertyPath that will not include the last PropertyPathPart. |
| SubPath | Returns a new PropertyPath containing the PropertyPathPart starting at the given
 start index. |


            
