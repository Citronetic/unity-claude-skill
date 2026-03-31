This version of Unity is unsupported.



# [Light](Light.html).cullingMask




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







                    public int cullingMask;






### Description



This is used to light certain objects in the Scene selectively.





A [GameObject](GameObject.html) will only be illuminated by a light if that light's `cullingMask/`
includes the layer chosen for the GameObject (ie, the mask bit for the layer must be set to 1
for the object to receive any light).
See [Layers](../Manual/Layers.html) for more information about layer masking.
Additional resources: [Light component](../Manual/class-Light.html).


            
