This version of Unity is unsupported.



# CapsuleGeometry Constructor




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

public CapsuleGeometry(float radius,
float halfLength);






### Parameters



| Parameter | Description |
| --- | --- |
| radius | The radius of the capsule's end caps. |
| halfLength | The distance from the center of the capsule to the center of the end point sphere. |





### Description



Create a capsule shape with the provided parameters.





The capsule shape is made from a cylinder shape with 2 half-spheres at each end. Therefore, the total height of the capsule is `2 * halfLength + 2 * radius`.


            
