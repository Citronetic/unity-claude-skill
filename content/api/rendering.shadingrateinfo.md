This version of Unity is unsupported.



# ShadingRateInfo





class in
          UnityEngine.Rendering



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



Encapsulate the informations and capabilities related to variable rate shading.

Additional resources: [Variable Rate Shading](../Manual/variable-rate-shading.html).





### Static Properties



| Property | Description |
| --- | --- |
| availableFragmentSizes | Get the supported shading rate fragment sizes by the current platform. |
| graphicsFormat | Get the shading rate graphics format used by the current platform. |
| imageTileSize | Get the shading rate image tile size used by the current platform. |
| supportsPerDrawCall | Returns true if variable fragment shading rates per draw call are supported by the current graphics card for variable rate shading.                Note that this feature is not currently supported in Unity.
Additional resources: SystemInfo.supportsVariableRateShading. |
| supportsPerImageTile | Returns true if image-based fragment shading rates are supported by the current graphics card for variable rate shading.
Additional resources: SystemInfo.supportsVariableRateShading, CommandBuffer.SetShadingRateImage. |





### Static Methods



| Method | Description |
| --- | --- |
| QueryNativeValue | Get the native graphics API value for ShadingRateFragmentSize. |


            
