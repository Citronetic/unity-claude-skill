This version of Unity is unsupported.



# IProperty





interface in
          Unity.Properties


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



Base interface for working with properties.





This is used to pass or store properties without knowing the underlying container or value type.
 " IProperty_1
 " Property_2





### Properties



| Property | Description |
| --- | --- |
| IsReadOnly | Gets a value indicating whether the property is read-only or not. |
| Name | Gets the name of the property. |





### Public Methods



| Method | Description |
| --- | --- |
| DeclaredValueType | Returns the declared value type of the property. |
| GetAttribute | Returns the first attribute of the given type. |
| GetAttributes | Returns all attribute of the given type. |
| HasAttribute | Returns true if the property has any attributes of the given type. |


            
