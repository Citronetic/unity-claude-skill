This version of Unity is unsupported.



# DownloadedTextureFlags





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



Flags to be set in [DownloadedTextureParams](Networking.DownloadedTextureParams.html) to indicate properties of the texture that will be created.





These flags should be combined using bitwise-or operator.





### Properties



| Property | Description |
| --- | --- |
| None | Special value indicating that none of the other options are being used. |
| Readable | Indicates that created texture must be readable. Allows reading values of texture pixels, but increases memory usage. |
| MipmapChain | Indicates that created texture must have mipmaps (multiple versions of different quality of the same texture). More efficient, but uses more memory. |
| LinearColorSpace | Indicates that a texture using linear color space must be created. |


            
