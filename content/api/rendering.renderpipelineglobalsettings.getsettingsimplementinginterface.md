This version of Unity is unsupported.



# [RenderPipelineGlobalSettings](Rendering.RenderPipelineGlobalSettings.html).GetSettingsImplementingInterface




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

protected bool GetSettingsImplementingInterface(out List<TSettingsInterfaceType> settings);






### Parameters



| Parameter | Description |
| --- | --- |
| settings | A list of settings of type TSettingsInterfaceType. If none were found, the list is empty. |





### Returns



**bool**
        Returns true if any settings of type `TSettingsInterfaceType` were found, false otherwise.





### Description



Get all settings for the currently active pipeline that implement `TSettingsInterfaceType`.


            
