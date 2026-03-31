This version of Unity is unsupported.



# [PropertyVisitor](Unity.Properties.PropertyVisitor.html).VisitCollection




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

protected void VisitCollection(Property<TContainer,TCollection> property,
ref TContainer container,
ref TCollection value);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The property providing access to the collection. |
| container | The container being visited. |
| value | The collection being visited. |





### Description



Called when visiting any non-specialized collection property.





When visiting a specialized collection the appropriate method will be called.
 * [[VisitList{TContainer, TList, TElement}]]


            
