This version of Unity is unsupported.



# [PanelSettings](UIElements.PanelSettings.html).clearDepthStencil




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












                    public bool clearDepthStencil;






### Description



Determines whether the depth/stencil buffer is cleared before the panel is rendered.





Only the first panel (according to the sorting order) must clear the depth/stencil buffer.
 Subsequent panels should not clear it. Unnecessary clearing can significantly degrade performance.

 UI Toolkit uses the depth/stencil buffer to perform masking operations, refer to [Overflow.Hidden](UIElements.Overflow.Hidden.html) for more inforamtion.
 The renderer strategically positions masking shapes to intentionally fail the depth test.
 This failure triggers efficient push/pop operations within the stencil buffer, enabling effective masking.

 To ensure this process functions correctly, the depth buffer values
 must be within a predetermined range. When UI Toolkit clears the depth buffer, it leaves
 a gap (controlled by [PanelSettings.depthClearValue](UIElements.PanelSettings-depthClearValue.html)) where masks can be positioned to fail
 the test. Additionally, UI Toolkit clears the stencil because the bits are used to store data
 representing the stack of masking shapes.

 An incorrect depth/stencil buffer clearing can cause malfunctions with the masking system. Such
 as:
- Masking shapes might become visible
- Normal meshes might become invisible
- Complete masking failure


            
