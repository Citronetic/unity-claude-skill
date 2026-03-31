This version of Unity is unsupported.



# [PropertyBag](Unity.Properties.PropertyBag.html).AcceptWithSpecializedVisitor




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

public static void AcceptWithSpecializedVisitor(IPropertyBag<TContainer> properties,
[Unity.Properties.IPropertyBagVisitor](Unity.Properties.IPropertyBagVisitor.html) visitor,
ref TContainer container);






### Parameters



| Parameter | Description |
| --- | --- |
| properties | The property bag to visit. |
| visitor | The visitor or specialized visitor to invoke. |
| container | The container being visited. |





### Description



Accepts visitation for the given property bag and tries to invoke the most specialized visitor first.


            
