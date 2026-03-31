This version of Unity is unsupported.



# BoundProperty





struct in
          UnityEngine.Animations



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



















### Description



A BoundProperty is a safe handle to read and write value in a generic way from any Unity components.





### Static Properties



| Property | Description |
| --- | --- |
| Null | An empty BoundProperty object that does not refer to a property. |





### Properties



| Property | Description |
| --- | --- |
| index | The index of this BoundProperty to the internal list of bound properties. |
| version | The version of the BoundProperty. |





### Public Methods



| Method | Description |
| --- | --- |
| CompareTo | Compares this BoundProperty to a specific BoundProperty. |
| Equals | Checks if this BoundProperty equals a specified BoundProperty object. |
| GetHashCode | Retrieves a unique hash based on this BoundProperty. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | BoundProperty objects are not equal if they refer to different properties. |
| operator == | BoundProperty objects are equal if they refer to the same property. |


            
