This version of Unity is unsupported.



# PropFlags





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



Flags that control how a [MaterialProperty](MaterialProperty.html) is displayed.





### Properties



| Property | Description |
| --- | --- |
| None | No flags are set. |
| HideInInspector | Do not show the property in the Inspector. |
| PerRendererData | In the Material Inspector, value for this property will be queried from Renderer's MaterialPropertyBlock, instead of from the Material. The value will also appear as read-only. This corresponds to the "[PerRendererData]" attribute in front of a property in the Shader code. |
| NoScaleOffset | Do not show UV scale/offset fields next to a texture. |
| Normal | Signifies that values of this property contain Normal (normalized vector) data. |
| HDR | Signifies that values of this property contain High Dynamic Range (HDR) data. |
| Gamma | Signifies that values of this property are in gamma space and should not be gamma corrected. |
| NonModifiableTextureData | Do not allow this texture property to be edited in the Inspector. |


            
