This version of Unity is unsupported.



# [RenderTargetSetup](RenderTargetSetup.html).depthSlice




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












                    public int depthSlice;






### Description



Slice of a [Texture3D](Texture3D.html) or [Texture2DArray](Texture2DArray.html) to set as a render target.





Some platforms (e.g. D3D11) support setting -1 as the slice, which binds whole render target for rendering. Then typically a geometry
shader is used to direct rendering into the appropriate slice.


            
