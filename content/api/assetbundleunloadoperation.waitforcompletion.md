This version of Unity is unsupported.



# [AssetBundleUnloadOperation](AssetBundleUnloadOperation.html).WaitForCompletion




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

public void WaitForCompletion();






### Description



Synchronously waits for the operation to complete.





Call this function if you need to wait on the main thread until the [AssetBundleUnloadOperation](AssetBundleUnloadOperation.html) completes. When you call `WaitForCompletion`, the Unity runtime also waits for all other pending asynchronous operations to complete.


            
