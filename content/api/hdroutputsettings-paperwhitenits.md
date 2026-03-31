This version of Unity is unsupported.



# [HDROutputSettings](HDROutputSettings.html).paperWhiteNits




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












                    public float paperWhiteNits;






### Description



The base luminance of a white paper surface in nits or candela per square meter (cd/m2).





This value is used if [HDROutputSettings.automaticHDRTonemapping](HDROutputSettings-automaticHDRTonemapping.html) is true. The higher this value, the brighter the resulting image appears on the HDR display.

Unity only uses this value if [HDROutputSettings.automaticHDRTonemapping](HDROutputSettings-automaticHDRTonemapping.html) is true and HDR is active on the display.

Accessing this member results in an exception if HDR is not available on the display. Use [HDROutputSettings.available](HDROutputSettings-available.html) for the display to check that HDR is available.


            
