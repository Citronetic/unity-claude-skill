This version of Unity is unsupported.



# XRBlitParams





struct in
          UnityEngine.XR



/



Implemented in:[UnityEngine.XRModule](UnityEngine.XRModule.html)


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



This struct  holds data for a single blit operation.





### Properties



| Property | Description |
| --- | --- |
| destRect | Destination Rect area that the blit operation wants to blit to. |
| foveatedRenderingInfo | A pointer to a native struct containing platform-specific data for foveated rendering. |
| srcHdrColorGamut | The ColorGamut of the source texture if srcHdrEncoded is true. |
| srcHdrEncoded | Specifies whether the source texture is encoded for use with an HDR display and might require decoding during the blit process. |
| srcHdrMaxLuminance | The maximum luminance in nits of the encoding used for the source texture if srcHdrEncoded is true. |
| srcRect | Source Rect area that the blit operation wants to blit from. |
| srcTex | Source render texture that the blit operation wants to blit from. |
| srcTexArraySlice | Describes source texture's desired array slice. Texture2D will have array slice 1. |


            
