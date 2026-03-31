This version of Unity is unsupported.



# [IListPropertyAccept<T0>](Unity.Properties.IListPropertyAccept_1.html).Accept




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

public void Accept([Unity.Properties.IListPropertyVisitor](Unity.Properties.IListPropertyVisitor.html) visitor,
Property<TContainer,TList> property,
ref TContainer container,
ref TList list);






### Parameters



| Parameter | Description |
| --- | --- |
| visitor | The visitor being run. |
| property | The property being visited. |
| container | The container being visited. |
| list | The list value. |





### Description



Call this method to invoke IListPropertyVisitor.Visit{TContainer, TList, TElement}.





This method is used to join the container type and element type.


            
