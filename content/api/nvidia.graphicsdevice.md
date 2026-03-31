This version of Unity is unsupported.



# GraphicsDevice





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



Provides the main entry point for the NVIDIA Module. Use this to interact with specific NVIDIA graphics card features.





### Static Properties



| Property | Description |
| --- | --- |
| device | Gets the device created by GraphicsDevice.CreateGraphicsDevice. If the device hasn't been created this property evaluates to null. |
| version | Gets the version that corresponds to Unity's host plugin that manages the NVIDIA.NVUnityPlugin official library. |





### Public Methods



| Method | Description |
| --- | --- |
| CreateDebugView | Creates an object containing debug information of the device. |
| CreateFeature | Creates a specific NVIDIA feature. |
| DeleteDebugView | Deletes a debug view created with GraphicsDevice.CreateDebugView. |
| DestroyFeature | Destroys a specific feature created with GraphicsDevice.CreateFeature. |
| ExecuteDLSS | Records the execution of DLSS into a rendering command buffer. This call does not execute the command buffer, it only appends custom commands into it. |
| GetOptimalSettings | Returns a structure containing the optimal settings for a specific target resolution and quality. |
| IsFeatureAvailable | Checks if the current NVIDIA graphics card supports the feature you specify using the GraphicsDeviceFeature enum. |
| UpdateDebugView | Updates a snapshpot of the debug information for the view object passed. |





### Static Methods



| Method | Description |
| --- | --- |
| CreateGraphicsDevice | Creates the main API object. Call this method only once in your application. |


            
