This version of Unity is unsupported.



# [PropertyVisitor](Unity.Properties.PropertyVisitor.html).IsExcluded




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

protected bool IsExcluded(Property<TContainer,TValue> property,
ref TContainer container,
ref TValue value);






### Parameters



| Parameter | Description |
| --- | --- |
| property | The property providing access to the data. |
| container | The container being visited. |
| value | The value being visited. |





### Returns



**bool**

          `true` if the property should be skipped; otherwise, `false`.





### Description



Called before visiting each property to determine if the property should be visited.





This method is called after all IExcludePropertyAdapter_1 have had a chance to run.


            
