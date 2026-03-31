This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetInvertCulling




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

public void SetInvertCulling(bool invertCulling);






### Parameters



| Parameter | Description |
| --- | --- |
| invertCulling | A boolean indicating whether to invert the backface culling (true) or not (false). |





### Description



Add a "set invert culling" command to the buffer.





When the command buffer is executed, the backface culling is either inverted (when invertCulling is set to true) or not (when invertCulling is set to false) (see [GL.invertCulling](GL-invertCulling.html)).


            
