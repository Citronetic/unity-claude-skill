This version of Unity is unsupported.



# [PropertyContainer](Unity.Properties.PropertyContainer.html).GetProperty




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

public static [Unity.Properties.IProperty](Unity.Properties.IProperty.html) GetProperty(TContainer container,
ref [Unity.Properties.PropertyPath](Unity.Properties.PropertyPath.html) path);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container tree to search. |
| path | The property path to resolve. |





### Returns



**IProperty**
        The [IProperty](Unity.Properties.IProperty.html) for the given path.





### Description



Gets an [IProperty](Unity.Properties.IProperty.html) on the specified container for the given [PropertyPath](Unity.Properties.PropertyPath.html).





While the container data is not actually read from or written to. The container itself is needed to resolve polymorphic fields and list elements.


            
