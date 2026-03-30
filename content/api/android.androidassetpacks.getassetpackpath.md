This version of Unity is unsupported.



# [AndroidAssetPacks](Android.AndroidAssetPacks.html).GetAssetPackPath




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

public static string GetAssetPackPath(string assetPackName);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPackName | The name of the Android asset pack to get path. |





### Returns



**string**
        Returns the full path to the location where the device stores the assets for the Android asset pack. If the asset pack you specify is not on the device, or if it does not use the fast-follow or on-demand delivery type, this returns an empty string.





### Description



Gets the full path to the location where the device stores the assets for the Android asset pack.





This method directly wraps Google's PlayCore plugin API. If the PlayCore plugin is missing, calling this method throws an InvalidOperationException exception.
The returned path can be used with File.IO methods to access assets inside.
Additional resources: [AndroidAssetPacks.DownloadAssetPackAsync](Android.AndroidAssetPacks.DownloadAssetPackAsync.html).


            
