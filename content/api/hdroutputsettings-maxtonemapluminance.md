This version of Unity is unsupported.



# [HDROutputSettings](HDROutputSettings.html).maxToneMapLuminance




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












                    public int maxToneMapLuminance;






### Description



Maximum input luminance at which gradation is preserved when 10% of the screen is bright.





Measured in nits. This value is -1 if Unity cannot obtain a value from the HDR display.
Accessing this member results in an exception if HDR is not available on the display. Use [HDROutputSettings.available](HDROutputSettings-available.html) for the display to check that HDR is available.


            
