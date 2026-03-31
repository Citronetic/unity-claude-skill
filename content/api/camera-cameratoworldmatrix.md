This version of Unity is unsupported.



# [Camera](Camera.html).cameraToWorldMatrix




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public [Matrix4x4](Matrix4x4.html) cameraToWorldMatrix;






### Description



Matrix that transforms from camera space to world space (Read Only).





Use this to calculate where in the world a specific camera space point is.

Note that camera space matches OpenGL convention: camera's forward is the negative
Z axis. This is different from Unity's convention, where forward is the positive Z
axis.


              


```
distance/
```


            
