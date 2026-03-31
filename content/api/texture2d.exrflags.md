This version of Unity is unsupported.



# EXRFlags





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



Flags used to control the encoding to an EXR file.





Additional resources: [ImageConversion.EncodeToEXR](ImageConversion.EncodeToEXR.html).





### Properties



| Property | Description |
| --- | --- |
| None | No flag. This will result in an uncompressed 16-bit float EXR file. |
| OutputAsFloat | The texture will be exported as a 32-bit float EXR file (default is 16-bit). |
| CompressZIP | The texture will use the EXR ZIP compression format. |
| CompressRLE | The texture will use RLE (Run Length Encoding) EXR compression format (similar to Targa RLE compression). |
| CompressPIZ | This texture will use Wavelet compression. This is best used for grainy images. |


            
