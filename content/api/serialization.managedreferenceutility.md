This version of Unity is unsupported.



# ManagedReferenceUtility





class in
          UnityEngine.Serialization



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



Utility functions related to SerializeReference manipulation and access.





Additional resources: [SerializeReference](SerializeReference.html), [SerializedProperty](SerializedProperty.html), [SerializationUtility](SerializationUtility.html).





### Static Properties



| Property | Description |
| --- | --- |
| RefIdNull | Special value, -2, used as the managed reference Id of any field decorated with SerializeReference that has no object assigned to it. |
| RefIdUnknown | Special value, -1, used when the managed reference Id for an object is unknown, for example if GetManagedReferenceIdForObject is called with invalid arguments. |





### Static Methods



| Method | Description |
| --- | --- |
| GetManagedReference | Retrieves an object based on its managed reference Id. |
| GetManagedReferenceIdForObject | Retrieves the managed reference Id for an object that is referenced using SerializeReference. |
| GetManagedReferenceIds | Retrieves a list of managed reference Ids assigned to objects that are referenced using SerializeReference on a specified host. |
| SetManagedReferenceIdForObject | Assigns a managed reference Id to an object that is referenced using SerializeReference on a specified host. |


            
