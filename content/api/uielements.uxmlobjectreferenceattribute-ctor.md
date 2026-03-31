This version of Unity is unsupported.



# UxmlObjectReferenceAttribute Constructor




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















## Declaration

public UxmlObjectReferenceAttribute();






### Description



Declares that a field or property is associated with nested UXML objects.




---








## Declaration

public UxmlObjectReferenceAttribute(string uxmlName);






### Parameters



| Parameter | Description |
| --- | --- |
| uxmlName | The name of the nested UXML element that the UXML Objects are serialized to. Note: This field can not be null or empty. |





### Description



Declares that a field or property is associated with nested UXML objects.




---








## Declaration

public UxmlObjectReferenceAttribute(string uxmlName,
params Type[] acceptedTypes);






### Parameters



| Parameter | Description |
| --- | --- |
| uxmlName | The name of the nested UXML element that the UXML Objects are serialized to. Note: A null or empty value will result in the objects being serialized into the root. |
| acceptedTypes | In UI Builder, when adding a UXML Object to a field that has multiple derived types,
 a dropdown list appears with a selection of available types that can be added to the field. By default,
 this list comprises all types that inherit from the UXML object type. You can use a parameter
 to specify a list of accepted types to be displayed, rather than showing all available types. |





### Description



Declares that a field or property is associated with nested UXML objects.


            
