This version of Unity is unsupported.



# [ResourcesAPI](ResourcesAPI.html).LoadAsync




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

protected [ResourceRequest](ResourceRequest.html) LoadAsync(string path,
Type systemTypeInstance);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Path to the target resource to load. |
| systemTypeInstance | Type filter for objects returned. |





### Description



Override for customizing the behavior of the [Resources.LoadAsync](Resources.LoadAsync.html) function.





Note: [AssetBundleRequest](AssetBundleRequest.html) inherits from [ResourceRequest](ResourceRequest.html) and can also be returned here.


            
