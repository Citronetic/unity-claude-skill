This version of Unity is unsupported.



# AndroidAssetPackError





enumeration


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



Values that indicate the type of Android asset pack error when the status is either AndroidAssetPackStatus.Failed or AndroidAssetPackStatus.Unknown.





Unity always returns the error value and the status together in AndroidAssetPackInfo or AndroidAssetPackState objects. Unity returns these objects via callback methods after you call either AndroidAssetPacks.DownloadAssetPackAsync or AndroidAssetPacks.GetAssetPackStateAsync. When the status value is AndroidAssetPackStatus.Failed or AndroidAssetPackStatus.Unknown, the error value indicates the cause of the failure. For any other status value, the error value should always be AndroidAssetPackError.NoError.
This enum directly wraps the [AssetPackErrorCode](https://developer.android.com/reference/com/google/android/play/core/assetpacks/model/AssetPackErrorCode) values in the PlayCore API.
Additional resources: [AndroidAssetPackInfo](Android.AndroidAssetPackInfo.html), [AndroidAssetPacks.DownloadAssetPackAsync](Android.AndroidAssetPacks.DownloadAssetPackAsync.html), [AndroidAssetPacks.GetAssetPackStateAsync](Android.AndroidAssetPacks.GetAssetPackStateAsync.html), [AndroidAssetPackState](Android.AndroidAssetPackState.html).





### Properties



| Property | Description |
| --- | --- |
| NoError | Indicates that there is no error. |
| AppUnavailable | Indicates that this application is unavailable in the Google's Play Store. |
| PackUnavailable | Indicates that the requested Android asset pack is not available in the Google Play Store. |
| InvalidRequest | Indicates that the request was invalid. |
| DownloadNotFound | Indicates that the requested download is not found. |
| ApiNotAvailable | Indicates that the Asset Delivery API is not available. |
| NetworkError | Indicates that the Android asset pack is not accessible because there was an error related to the network connection. |
| AccessDenied | Indicates that the application does not have permission to download asset packs under the current device circumstances. |
| InsufficientStorage | Indicates that there is not enough storage space on the device to download the Android asset pack. |
| PlayStoreNotFound | Indicates that the device does not have the Play Store application installed or has an unofficial version. |
| NetworkUnrestricted | Indicates that the app requested to use mobile data while there were no Android asset packs waiting for WiFi. |
| AppNotOwned | Indicates that the end user does not own the application on the device. |
| InternalError | Indicates that unknown error occured while downloading an asset pack. |


            
