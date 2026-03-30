# [SetPropertyBagBase<T0,T1>](Unity.Properties.SetPropertyBagBase_2.html).TryGetProperty




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

public bool TryGetProperty(ref TSet container,
object key,
out IProperty<TSet> property);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container hosting the data. |
| key | The key to lookup. |
| property | When this method returns, contains the property associated with the specified name, if the name is found; otherwise, null. |





### Returns



**bool**

          `true` if the INamedProperties_1 contains a property with the specified name; otherwise, `false`.





### Description



Gets the property associated with the specified name.


            
