This version of Unity is unsupported.



# TransferFunction





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



Contains electro-optical transfer function (EOTF) options, which describe how the final rendered video signal is converted to physical light intensity on display devices.





Selecting the appropriate transfer function ensures that the color representation is accurate and consistent across different display systems.

Unity selects the appropriate transfer function based on the selected [ColorGamut](ColorGamut.html).





### Properties



| Property | Description |
| --- | --- |
| sRGB | sRGB transfer function, commonly used for Standard Dynamic Range (SDR) displays. |
| BT1886 | ITU-R BT.1886 transfer function, standard for HDTV. |
| PQ | Perceptual Quantizer (PQ), also known as SMPTE ST 2084 transfer function, used for High Dynamic Range (HDR) displays. |
| Linear | Linear transfer function, where output luminance is directly proportional to input. |
| Gamma22 | Gamma 2.2 transfer function, common in CRT displays. |


            
