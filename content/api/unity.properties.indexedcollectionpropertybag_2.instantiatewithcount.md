This version of Unity is unsupported.



# [IndexedCollectionPropertyBag<T0,T1>](Unity.Properties.IndexedCollectionPropertyBag_2.html).InstantiateWithCount




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

protected TList InstantiateWithCount(int count);






### Description



Implement this method to provide custom type instantiation with a count value for the container type.





You MUST also override [InstantiationKind](Unity.Properties.InstantiationKind.html) to return `ConstructionType.PropertyBagOverride` for this method to be called.


            
