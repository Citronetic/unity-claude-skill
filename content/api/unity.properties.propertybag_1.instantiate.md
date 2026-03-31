This version of Unity is unsupported.



# [PropertyBag<T0>](Unity.Properties.PropertyBag_1.html).Instantiate




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

protected TContainer Instantiate();






### Description



Implement this method to provide custom type instantiation for the container type.





You MUST also override [InstantiationKind](Unity.Properties.InstantiationKind.html) to return `ConstructionType.PropertyBagOverride` for this method to be called.


            
