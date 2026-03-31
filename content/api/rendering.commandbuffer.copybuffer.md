This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).CopyBuffer




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

public void CopyBuffer([GraphicsBuffer](GraphicsBuffer.html) source,
[GraphicsBuffer](GraphicsBuffer.html) dest);






### Parameters



| Parameter | Description |
| --- | --- |
| source | The source buffer. |
| dest | The destination buffer. |





### Description



Adds a command to copy the contents of one [GraphicsBuffer](GraphicsBuffer.html) into another.





This is the equivalent of calling [Graphics.CopyBuffer](Graphics.CopyBuffer.html), using a CommandBuffer.


            
