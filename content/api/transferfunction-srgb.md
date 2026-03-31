This version of Unity is unsupported.



# [TransferFunction](TransferFunction.html).sRGB




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



sRGB transfer function, commonly used for Standard Dynamic Range (SDR) displays.





The sRGB transfer function is a piece-wise function that includes a linear segment near zero to handle low-intensity values smoothly, and a power-law segment for the remaining parts of the curve, to align with human visual perception.

                Both its inputs and outputs are normalized to [0, 1], similar to [TransferFunction.BT1886](TransferFunction.BT1886.html) and [TransferFunction.Gamma22](TransferFunction.Gamma22.html) EOTFs.

Unity uses this EOTF when the [ColorGamut](ColorGamut.html) of the display is [ColorGamut.sRGB](ColorGamut-sRGB.html) or [ColorGamut.DisplayP3](ColorGamut.DisplayP3.html).


            
