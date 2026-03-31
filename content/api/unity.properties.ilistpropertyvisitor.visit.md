This version of Unity is unsupported.



# [IListPropertyVisitor](Unity.Properties.IListPropertyVisitor.html).Visit




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

public void Visit(Property<TContainer,TList> property,
ref TContainer container,
ref TList list);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The property being visited. |
| container | The container being visited. |
| list | The list value. |





### Description



Implement this method to accept visitation for a specialized list property.





This method is invoked by IListPropertyAccept_1


            
