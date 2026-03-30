This version of Unity is unsupported.



# [AndroidAssetPacks](Android.AndroidAssetPacks.html).RequestToUseMobileDataAsync




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

public static [Android.RequestToUseMobileDataAsyncOperation](Android.RequestToUseMobileDataAsyncOperation.html) RequestToUseMobileDataAsync();






### Returns



**RequestToUseMobileDataAsyncOperation**
        Returns an object that represents the request operation. If you yield this object inside a coroutine, the coroutine pauses until the operation is complete.





### Description



Requests to use mobile data to download Android asset packs.





If the device is not connected to WiFi, it pauses large Android asset pack downloads until a WiFi connection is available. If this is the case, the asset pack has the AndroidAssetPackStatus.WaitingForWifi status. In this situation, you can call RequestToUseMobileDataAsync to give the end user the option to download your application's asset packs using mobile data.
This method directly wraps Google's PlayCore plugin API. If the PlayCore plugin is missing, calling this method throws an InvalidOperationException exception.
Additional resources: [RequestToUseMobileDataAsyncOperation](Android.RequestToUseMobileDataAsyncOperation.html), [AndroidAssetPacks.CancelAssetPackDownload](Android.AndroidAssetPacks.CancelAssetPackDownload.html), [AndroidAssetPacks.DownloadAssetPackAsync](Android.AndroidAssetPacks.DownloadAssetPackAsync.html), [AndroidAssetPacks.GetAssetPackStateAsync](Android.AndroidAssetPacks.GetAssetPackStateAsync.html).




---








## Declaration

public static void RequestToUseMobileDataAsync(Action<AndroidAssetPackUseMobileDataRequestResult> callback);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | The callback method to get the result. The callback method must have an AndroidAssetPackUseMobileDataRequestResult parameter. This contains the value that indicates the end user's choice. The application raises this callback a single time after the end user submits their decision. |





### Description



Requests to use mobile data to download Android asset packs.





If the device is not connected to WiFi, it pauses large Android asset pack downloads until a WiFi connection is available. If this is the case, the asset pack has the AndroidAssetPackStatus.WaitingForWifi status. In this situation, you can call RequestToUseMobileDataAsync to give the end user the option to download your application's asset packs using mobile data.
This method directly wraps Google's PlayCore plugin API. If the PlayCore plugin is missing, calling this method throws an InvalidOperationException exception.
Additional resources: [AndroidAssetPackUseMobileDataRequestResult](Android.AndroidAssetPackUseMobileDataRequestResult.html), [AndroidAssetPacks.CancelAssetPackDownload](Android.AndroidAssetPacks.CancelAssetPackDownload.html), [AndroidAssetPacks.DownloadAssetPackAsync](Android.AndroidAssetPacks.DownloadAssetPackAsync.html), [AndroidAssetPacks.GetAssetPackStateAsync](Android.AndroidAssetPacks.GetAssetPackStateAsync.html).


            
