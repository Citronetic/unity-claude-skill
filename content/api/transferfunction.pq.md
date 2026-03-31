This version of Unity is unsupported.



# [TransferFunction](TransferFunction.html).PQ




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



Perceptual Quantizer (PQ), also known as SMPTE ST 2084 transfer function, used for High Dynamic Range (HDR) displays.





The Perceptual Quantizer (PQ) transfer function is a newer version of a traditional gamma curve used in Standard Dynamic Range (SDR) displays.

                Unlike the gamma curve, which is a simple power-law function, the PQ curve is designed to better align with the non-linear way the human eye perceives luminance.

                The function is designed for High Dynamic Range (HDR) displays, enabling a more accurate and perceptually uniform representation of brightness across a wide range of luminance levels, up to 10,000 nits.

For more information, refer to [SMPTE reference document for ST 2084](https://pub.smpte.org/latest/st2084/st2084-2014.pdf) and [Dolby's Reference Level Guidelines For PQ (BT.2100)](https://professional.dolby.com/siteassets/pdfs/operational-guidelines-for-pq.pdf).

Unity uses this EOTF when the [ColorGamut](ColorGamut.html) of the display is [ColorGamut.HDR10](ColorGamut.HDR10.html) or [ColorGamut.DolbyHDR](ColorGamut.DolbyHDR.html).


            
