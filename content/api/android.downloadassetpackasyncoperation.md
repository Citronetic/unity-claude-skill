This version of Unity is unsupported.



# DownloadAssetPackAsyncOperation





class in
          UnityEngine.Android



/



Inherits from:[CustomYieldInstruction](CustomYieldInstruction.html)



/



Implemented in:[UnityEngine.AndroidJNIModule](UnityEngine.AndroidJNIModule.html)


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



















### Description



Represents an asynchronous Android asset pack download operation. [AndroidAssetPacks.DownloadAssetPackAsync](Android.AndroidAssetPacks.DownloadAssetPackAsync.html) returns an instance of this class.





You can yield until the operation completes, or manually check whether it's done using isDone or keepWaiting properties. You can also track the progress of the operation using the progress property.
Additional resources: [AndroidAssetPacks.DownloadAssetPackAsync](Android.AndroidAssetPacks.DownloadAssetPackAsync.html).





### Properties



| Property | Description |
| --- | --- |
| downloadedAssetPacks | Gets the names of Android asset packs downloaded by this operation. |
| downloadFailedAssetPacks | Gets the names of Android asset packs that failed to download. |
| isDone | Checks if the operation is finished. |
| keepWaiting | Checks if the operation is still running. |
| progress | Gets the progress of the operation. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| keepWaiting | Indicates if coroutine should be kept suspended. |












            
