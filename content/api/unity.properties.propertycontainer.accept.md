This version of Unity is unsupported.



# [PropertyContainer](Unity.Properties.PropertyContainer.html).Accept




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

public static void Accept([Unity.Properties.IPropertyBagVisitor](Unity.Properties.IPropertyBagVisitor.html) visitor,
TContainer container,
[Unity.Properties.VisitParameters](Unity.Properties.VisitParameters.html) parameters);






### Parameters



| Parameter | Description |
| --- | --- |
| visitor | The visitor. |
| container | The container to visit. |
| parameters | The visit parameters to use. |





### Description



Visit the specified  using the specified .




---








## Declaration

public static void Accept([Unity.Properties.IPropertyVisitor](Unity.Properties.IPropertyVisitor.html) visitor,
ref TContainer container,
ref [Unity.Properties.PropertyPath](Unity.Properties.PropertyPath.html) path,
[Unity.Properties.VisitParameters](Unity.Properties.VisitParameters.html) parameters);






### Parameters



| Parameter | Description |
| --- | --- |
| visitor | The visitor. |
| container | The container to visit. |
| path | The property path to visit. |
| parameters | The visit parameters to use. |





### Description



Visit the specified  using the specified  at the given [PropertyPath](Unity.Properties.PropertyPath.html).


            
