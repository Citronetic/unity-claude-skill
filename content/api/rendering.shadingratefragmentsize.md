This version of Unity is unsupported.



# ShadingRateFragmentSize





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



Constants that specify the shading rate. Not all values are supported by all hardware. Avaibility should be queried first. See [ShadingRateInfo.availableFragmentSizes](Rendering.ShadingRateInfo-availableFragmentSizes.html) for details.

Additional resources: [ShadingRateInfo.supportsPerImageTile](Rendering.ShadingRateInfo-supportsPerImageTile.html), [ShadingRateInfo.QueryNativeValue](Rendering.ShadingRateInfo.QueryNativeValue.html)





### Properties



| Property | Description |
| --- | --- |
| FragmentSize1x1 | Specifies no change to the vertical and horizontal resolution. |
| FragmentSize1x2 | Specifies that the shading rate should reduce vertical resolution 2x. |
| FragmentSize2x1 | Specifies that the shading rate should reduce horizontal resolution 2x. |
| FragmentSize2x2 | Specifies that the shading rate should reduce the resolution of both axes 2x. |
| FragmentSize1x4 | Specifies that the shading rate should reduce vertical resolution 4x. |
| FragmentSize4x1 | Specifies that the shading rate should reduce horizontal resolution 4x. |
| FragmentSize2x4 | Specifies that the shading rate should reduce horizontal resolution 2x, and reduce vertical resolution 4x. |
| FragmentSize4x2 | Specifies that the shading rate should reduce horizontal resolution 4x, and reduce vertical resolution 2x. |
| FragmentSize4x4 | Specifies that the shading rate should reduce the resolution of both axes 4x. |


            
