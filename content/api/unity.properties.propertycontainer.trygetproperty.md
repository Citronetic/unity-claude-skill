This version of Unity is unsupported.



# [PropertyContainer](Unity.Properties.PropertyContainer.html).TryGetProperty




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

public static bool TryGetProperty(TContainer container,
ref [Unity.Properties.PropertyPath](Unity.Properties.PropertyPath.html) path,
out [Unity.Properties.IProperty](Unity.Properties.IProperty.html) property);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container tree to search. |
| path | The property path to resolve. |
| property | When this method returns, contains the property associated with the specified path, if the property is found; otherwise, null. |





### Returns



**bool**

          `true` if the property was found at the specified path; otherwise, `false`.





### Description



Gets an [IProperty](Unity.Properties.IProperty.html) on the specified container for the given [PropertyPath](Unity.Properties.PropertyPath.html).





While the container data is not actually read from or written to. The container itself is needed to resolve polymorphic fields and list elements.




---








## Declaration

public static bool TryGetProperty(ref TContainer container,
ref [Unity.Properties.PropertyPath](Unity.Properties.PropertyPath.html) path,
out [Unity.Properties.IProperty](Unity.Properties.IProperty.html) property,
out [Unity.Properties.VisitReturnCode](Unity.Properties.VisitReturnCode.html) returnCode);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container tree to search. |
| path | The property path to resolve. |
| property | When this method returns, contains the property associated with the specified path, if the property is found; otherwise, null. |
| returnCode | When this method returns, contains the return code. |





### Returns



**bool**

          `true` if the property was found at the specified path; otherwise, `false`.





### Description



Gets an [IProperty](Unity.Properties.IProperty.html) on the specified container for the given [PropertyPath](Unity.Properties.PropertyPath.html).





While the container data is not actually read from or written to. The container itself is needed to resolve polymorphic fields and list elements.


            
