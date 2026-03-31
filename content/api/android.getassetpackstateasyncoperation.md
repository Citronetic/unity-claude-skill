This version of Unity is unsupported.



# GetAssetPackStateAsyncOperation





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



Represents an asynchronous Android asset pack state request operation. [AndroidAssetPacks.GetAssetPackStateAsync](Android.AndroidAssetPacks.GetAssetPackStateAsync.html) returns an instance of this class.





You can yield until the operation completes, or manually check whether it's done using isDone or keepWaiting properties.
Additional resources: [AndroidAssetPacks.GetAssetPackStateAsync](Android.AndroidAssetPacks.GetAssetPackStateAsync.html).





### Properties



| Property | Description |
| --- | --- |
| isDone | Checks if the operation is finished. |
| keepWaiting | Checks if the operation is still running. |
| size | Gets the total size in bytes of all Android asset packs that had their status checked by this operation. |
| states | Gets the states of all Android asset packs that had their status checked by this operation. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| keepWaiting | Indicates if coroutine should be kept suspended. |












            
