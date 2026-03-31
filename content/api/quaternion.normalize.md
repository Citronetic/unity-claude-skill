This version of Unity is unsupported.



# [Quaternion](Quaternion.html).Normalize




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




                [Switch to Manual](../Manual/class-Quaternion.html)










## Declaration

public static [Quaternion](Quaternion.html) Normalize([Quaternion](Quaternion.html) q);






### Description



Converts this quaternion to a quaternion with the same orientation but with a magnitude of 1.0.





Note that this method changes the current quaternion. If you
want to keep the current quaternion unchanged, use the [normalized](Quaternion-normalized.html) property instead.

If this quaternion is too small to be normalized it will be set to [Quaternion.identity](Quaternion-identity.html).

Additional resources: [normalized](Quaternion-normalized.html) variable.


            
