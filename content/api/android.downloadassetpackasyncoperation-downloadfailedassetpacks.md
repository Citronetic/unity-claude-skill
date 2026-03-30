This version of Unity is unsupported.



# [DownloadAssetPackAsyncOperation](Android.DownloadAssetPackAsyncOperation.html).downloadFailedAssetPacks




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












                    public string[] downloadFailedAssetPacks;






### Description



Gets the names of Android asset packs that failed to download.





The Android asset pack names this property returns correspond to asset pack downloads that either failed due to some error or that the end user canceled. For more information, call [AndroidAssetPacks.DownloadAssetPackAsync](Android.AndroidAssetPacks.DownloadAssetPackAsync.html) and pass a callback method to it. Unity raises the callback with additional information, such as the error code, during the download.
Note: This list also includes the names of Android asset packs for which Google's PlayCore API did not raise any callbacks. This happens if you access this property right away after calling DownloadAssetPackAsync, before the PlayCore API raises any of the callbacks.
Read-only.
Additional resources: DownloadAssetPackAsyncOperation.isDone [[DownloadAssetPackAsyncOperation.progress.


            
