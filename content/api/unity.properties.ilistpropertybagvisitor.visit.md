This version of Unity is unsupported.



# [IListPropertyBagVisitor](Unity.Properties.IListPropertyBagVisitor.html).Visit




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

public void Visit(IListPropertyBag<TList,TElement> properties,
ref TList container);






### Parameters



| Parameter | Description |
| --- | --- |
| properties | The properties of the container. |
| container | The container being visited. |





### Description



Implement this method to accept visitation for a collection of properties.





This method is invoked by IListPropertyBagAccept_1.Accept.


            
