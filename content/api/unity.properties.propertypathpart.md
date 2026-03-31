This version of Unity is unsupported.



# PropertyPathPart





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



A [PropertyPathPart](Unity.Properties.PropertyPathPart.html) represents a single element of the path.





[PropertyPathPartKind.Name](Unity.Properties.PropertyPathPartKind.Name.html)  -> ".{name}"
 [PropertyPathPartKind.Index](Unity.Properties.PropertyPathPartKind.Index.html) -> "[{index}]"
 [PropertyPathPartKind.Key](Unity.Properties.PropertyPathPartKind.Key.html)   -> "[{key}]"





### Properties



| Property | Description |
| --- | --- |
| Index | The Index of the part. This will only be set when using PropertyPathPartKind.Index |
| IsIndex | Returns true if the part is PropertyPathPartKind.Index. |
| IsKey | Returns true if the part is PropertyPathPartKind.Key. |
| IsName | Returns true if the part is PropertyPathPartKind.Name. |
| Key | The Key of the part. This will only be set when using PropertyPathPartKind.Key |
| Kind | The PropertyPathPartKind for this path. This determines how algorithms will resolve the path. |
| Name | The Name of the part. This will only be set when using PropertyPathPartKind.Name |





### Constructors



| Constructor | Description |
| --- | --- |
| PropertyPathPart | Initializes a new PropertyPathPart with the specified name. |





### Public Methods



| Method | Description |
| --- | --- |
| Equals | Indicates whether this instance and a specified object are equal. |


            
