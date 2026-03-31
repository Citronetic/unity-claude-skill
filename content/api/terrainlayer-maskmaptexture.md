This version of Unity is unsupported.



# [TerrainLayer](TerrainLayer.html).maskMapTexture




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




                [Switch to Manual](../Manual/class-TerrainLayer.html)







                    public [Texture2D](Texture2D.html) maskMapTexture;






### Description



The mask map texture used by the terrain layer.





The content of each channel varies by the terrain shader. For HDRP TerrainLit shader, the channels are:

R: Height - used when doing height based blending

G: Smoothness

B: Metallic.


            
