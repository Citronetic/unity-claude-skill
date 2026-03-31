This version of Unity is unsupported.



# [TypeUtility](Unity.Properties.TypeUtility.html).CanBeInstantiated




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

public static bool CanBeInstantiated(Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type to query. |





### Returns



**bool**

          `true` if the given type is instantiatable.





### Description



Returns `true` if the specified type is instantiatable.





Instantiatable is defined as either having a default or implicit constructor or having a registered instantiation method.




---








## Declaration

public static bool CanBeInstantiated();






### Returns



**bool**

          `true` if type T is instantiatable.





### Description



Returns `true` if type T is instantiatable.





Instantiatable is defined as either having a default or implicit constructor or having a registered instantiation method.


            
