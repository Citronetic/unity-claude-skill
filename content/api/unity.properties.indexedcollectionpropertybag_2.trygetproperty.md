This version of Unity is unsupported.



# [IndexedCollectionPropertyBag<T0,T1>](Unity.Properties.IndexedCollectionPropertyBag_2.html).TryGetProperty




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

public bool TryGetProperty(ref TList container,
int index,
out IProperty<TList> property);






### Parameters



| Parameter | Description |
| --- | --- |
| container | The container hosting the data. |
| index | The index of the property to get. |
| property | When this method returns, contains the property associated with the specified index, if the name is found; otherwise, null. |





### Returns



**bool**

          `true` if the IIndexedProperties_1 contains a property for the specified index; otherwise, `false`.





### Description



Gets the property associated with the specified index.


            
