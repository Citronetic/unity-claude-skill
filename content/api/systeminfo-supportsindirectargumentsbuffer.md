This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).supportsIndirectArgumentsBuffer




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












                    public static bool supportsIndirectArgumentsBuffer;






### Description



Returns `true` if the graphics system supports GPU draw calls with indirect argument buffers. (Read Only)





The following methods use indirect argument buffers and do not have fallbacks for systems that do not support GPU draw calls with indirect argument buffers:

[Graphics.DrawProceduralIndirect](Graphics.DrawProceduralIndirect.html), [Graphics.DrawMeshInstancedIndirect](Graphics.DrawMeshInstancedIndirect.html), [CommandBuffer.DrawProceduralIndirect](Rendering.CommandBuffer.DrawProceduralIndirect.html), [CommandBuffer.DrawMeshInstancedIndirect](Rendering.CommandBuffer.DrawMeshInstancedIndirect.html).

Ensure that the system supports indirect argument buffers before using those methods.


            
