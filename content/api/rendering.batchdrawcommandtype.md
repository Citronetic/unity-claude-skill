This version of Unity is unsupported.



# BatchDrawCommandType





enumeration


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



















### Description



Enumerates the different draw command types a [BatchRendererGroup](Rendering.BatchRendererGroup.html) can draw.





This is used in [BatchDrawRange](Rendering.BatchDrawRange.html) to say from what draw command stream the batch will read the commands.





### Properties



| Property | Description |
| --- | --- |
| Direct | A direct draw command with a mesh and material. |
| Indirect | An indirect draw command with a mesh and material. |
| Procedural | A procedural draw command. Has a material but vertex data is procedurally fetched by the shader. |
| ProceduralIndirect | A procedural indirect draw command. Has a material but vertex data is procedurally fetched by the shader. |


            
