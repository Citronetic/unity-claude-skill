This version of Unity is unsupported.



# [Light](Light.html).shadowCustomResolution




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




                [Switch to Manual](../Manual/class-Light.html)







                    public int shadowCustomResolution;






### Description



The custom resolution of the shadow map.





By default, shadow map resolution is computed from its importance on screen. Setting this property to a value greater than zero will override that behavior. Please note that the shadow map resolution will still be rounded to the nearest power of two and capped by memory and hardware limits. Note that this property is supported only in the Built-in Render Pipeline.  It is not supported in the High Definition Render Pipeline (HDRP) or in the Universal Render Pipeline (URP).

Additional resources: [shadows](Light-shadows.html) property, [shadowResolution](Light-shadowResolution.html) property, [Shadow Mapping](../Manual/shadow-mapping.html).


            
