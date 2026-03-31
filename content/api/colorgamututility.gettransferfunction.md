This version of Unity is unsupported.



# [ColorGamutUtility](ColorGamutUtility.html).GetTransferFunction




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

public static [TransferFunction](TransferFunction.html) GetTransferFunction([ColorGamut](ColorGamut.html) gamut);






### Parameters



| Parameter | Description |
| --- | --- |
| gamut | The color gamut to look up. |





### Returns



**TransferFunction**
        The transfer function that the given gamut uses.





### Description



Returns the transfer function that the given gamut uses on the current platform.





Due to platform differences, the encoding of a specific ColorGamut may differ.


            
