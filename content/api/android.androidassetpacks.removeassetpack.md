This version of Unity is unsupported.



# [AndroidAssetPacks](Android.AndroidAssetPacks.html).RemoveAssetPack




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

public static void RemoveAssetPack(string assetPackName);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPackName | The name of the Android asset pack to remove. |





### Description



Removes Android asset pack.





This method directly wraps Google's PlayCore plugin API. If the PlayCore plugin is missing, calling this method throws an InvalidOperationException exception.
If you call this method with any core Unity asset pack names (those that AndroidAssetPacks.GetCoreUnityAssetPackNames returns) as a parameter, the method does nothing.
Additional resources: AndroidAssetPacks.DownloadAssetPackAdync.


            
