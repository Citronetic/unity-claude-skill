This version of Unity is unsupported.



# [Lightmapping](Lightmapping.html).TryGetLightingSettings




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

public static bool TryGetLightingSettings(out [LightingSettings](LightingSettings.html) settings);






### Parameters



| Parameter | Description |
| --- | --- |
| settings | See Lightmapping.lightingSettings. |





### Returns



**bool**
        Returns true if there is an object, and false if it isn't.





### Description



Fetches the Lighting Settings for the current Scene. Will return false if it is null.





Useful if you don't want an exception to be thrown if lightingSettings is null.


            
