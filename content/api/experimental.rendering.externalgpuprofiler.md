This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# ExternalGPUProfiler





class in
          UnityEngine.Experimental.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



The ExternalGPUProfiler API allows developers to programatically take GPU frame captures in conjunction with supported external GPU profilers.

GPU frame captures can be used to both analyze performance and debug graphics related issues.





GPU captures can be taken when running using the API both in Editor and in standalone development builds.

The ExternalGPUProfiler API supports both PIX and RenderDoc.

**PIX Specific Support**

Support for PIX is only available on Windows desktop when using the DirectX 12 rendering API.

**NOTE:** The entire editor will be captured when capturing a frame in editor.

**RenderDoc Specific Support**

Support for RenderDoc is available when running on both Windows and Linux desktop.

Supported rendering APIs include DirectX 12, DirectX 11, and Vulkan.

**NOTE:**  Only the game view will be captured when capturing a frame in editor.





### Static Methods



| Method | Description |
| --- | --- |
| BeginGPUCapture | Begins the current GPU frame capture in the external GPU profiler. |
| EndGPUCapture | Ends the current GPU frame capture in the external GPU profiler. |
| IsAttached | Returns true when a development build is launched by an external GPU profiler. |


            
