This version of Unity is unsupported.



# [PropertyVisitor](Unity.Properties.PropertyVisitor.html).VisitProperty




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

protected void VisitProperty(Property<TContainer,TValue> property,
ref TContainer container,
ref TValue value);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The property providing access to the value. |
| container | The container being visited. |
| value | The value being visited. |





### Description



Called when visiting any leaf property with no specialized handling.


            
