This version of Unity is unsupported.



# [Quaternion](Quaternion.html).SlerpUnclamped




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

public static [Quaternion](Quaternion.html) SlerpUnclamped([Quaternion](Quaternion.html) a,
[Quaternion](Quaternion.html) b,
float t);






### Parameters



| Parameter | Description |
| --- | --- |
| a | Start unit quaternion value, returned when t = 0. |
| b | End unit quaternion value, returned when t = 1. |
| t | Interpolation ratio. Value is unclamped. |





### Returns



**Quaternion**
        A unit quaternion spherically interpolated between unit quaternions `a` and `b`.





### Description



Spherically linear interpolates between unit quaternions `a` and `b` by t.





Additional resources: [LerpUnclamped](Quaternion.LerpUnclamped.html), [Slerp](Quaternion.Slerp.html).


            
