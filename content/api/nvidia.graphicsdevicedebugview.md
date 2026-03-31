This version of Unity is unsupported.



# GraphicsDeviceDebugView





class in
          UnityEngine.NVIDIA



/



Implemented in:[UnityEngine.NVIDIAModule](UnityEngine.NVIDIAModule.html)


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



Represents a memory snapshot of the current feature states. The memory of the arrays/buffers in this struct are tied to the lifetime of the debug view. Additional resources: [GraphicsDevice.CreateDebugView](NVIDIA.GraphicsDevice.CreateDebugView.html), [GraphicsDevice.UpdateDebugView](NVIDIA.GraphicsDevice.UpdateDebugView.html) and [GraphicsDevice.DeleteDebugView](NVIDIA.GraphicsDevice.DeleteDebugView.html).





### Properties



| Property | Description |
| --- | --- |
| deviceVersion | The version that corresponds to Unity's host plugin NVUnityPlugin. |
| dlssFeatureInfos | A snapshot enumeration of all the active dlss features information currently active in the runtime. The method GraphicsDevice.UpdateDebugView will performs update on this snapshot. |
| ngxVersion | The current version id of the official internal NV NGX library. This version can change if you swap the DLLs for DLSS. |


            
