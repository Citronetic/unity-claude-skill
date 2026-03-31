This version of Unity is unsupported.



# [TypeUtility](Unity.Properties.TypeUtility.html).TryInstantiateArray




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

public static bool TryInstantiateArray(int count,
out TArray instance);






### Parameters



| Parameter | Description |
| --- | --- |
| count | The count the array should have. |
| instance | When this method returns, contains the created instance, if type instantiation succeeded; otherwise, the default value for <typeparamref name="TArray" />. |





### Returns



**bool**

          `true` if the type was instantiated; otherwise, `false`.





### Description



Tries to create a new instance of an array with the given count.


            
