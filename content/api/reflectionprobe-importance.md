This version of Unity is unsupported.



# [ReflectionProbe](ReflectionProbe.html).importance




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




                [Switch to Manual](../Manual/class-ReflectionProbe.html)







                    public int importance;






### Description



Reflection probe importance.





The bigger the value the more important the probe is.
When deciding which probe to use for the object, Unity will always pick **Important** probe over the **Not Important**.
This property also affects blending, if object is inside both **Important** and **Not Important** probe, only **Important** probe will be used, when object is leaving **Important** probe bounding box, it will gradually blend over **Not Important** probe. If both probes would have same importance, the object would use both probes.


            
