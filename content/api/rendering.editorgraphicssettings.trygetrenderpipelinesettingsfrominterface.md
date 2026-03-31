This version of Unity is unsupported.



# [EditorGraphicsSettings](Rendering.EditorGraphicsSettings.html).TryGetRenderPipelineSettingsFromInterface




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

public static bool TryGetRenderPipelineSettingsFromInterface(out TSettingsInterfaceType[] settings);






### Parameters



| Parameter | Description |
| --- | --- |
| settings | The array of the settings objects of type TSettingsInterfaceType if found, or null. |





### Returns



**bool**
        True if any settings of type `TSettings` are available for the active Render Pipeline.





### Description



Retrieves the array of the settings objects of type `TSettingsInterfaceType` for the active Render Pipeline if they are registered.


            
