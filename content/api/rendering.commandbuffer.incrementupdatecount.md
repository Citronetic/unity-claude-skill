This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).IncrementUpdateCount




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

public void IncrementUpdateCount([Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) dest);






### Parameters



| Parameter | Description |
| --- | --- |
| dest | Increments the updateCount for this Texture. |





### Description



Increments the updateCount property of a Texture.





This is useful if the execution of a command buffer mutates a Texture because you can rely on the Texture's updateCount to detect any changes.


            
