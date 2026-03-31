This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).UpdateGlobalShaderProperties




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

public static void UpdateGlobalShaderProperties(float time);






### Parameters



| Parameter | Description |
| --- | --- |
| time | Time to use. -1 to disable. |





### Description



Updates the global shader properties to use when rendering.





If the Editor is not in Play Mode, [Graphics.Blit](Graphics.Blit.html) will not normally take time into consideration. Setting the internal time and updating the global shader properties before doing a Blit will use the custom time value when performing the Blit operation.

Additional resources: [EditorUtility.SetCameraAnimateMaterialsTime](EditorUtility.SetCameraAnimateMaterialsTime.html) [EditorUtility.SetCameraAnimateMaterials](EditorUtility.SetCameraAnimateMaterials.html).


            
