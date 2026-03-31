This version of Unity is unsupported.



# AntiAliasingSamples





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




                [Switch to Manual](../Manual/class-LightmapParameters.html)














### Description



The number of sub-texel positions to use when sampling a lightmap texel.





The number of sub-texel positions to use when sampling a lightmap texel. Values higher than 1 will use supersampling to improve lightmap quality and reduce artifacts related to aliasing.


The default value of 4 should be sufficient to remove the majority of aliasing issues. However, in some cases it may be necessary to increase the number of sub-texel sample positions. This can be particularly useful where "jaggy" edges in direct lighting can be observed. Typically this is more visible when using baked shadows.


Note that memory usage increases proportionally to the number of samples used. Using high values in large Scenes may therefore increase the chance that lightmap bakes do not complete, especially when using large lightmap texture sizes.

Additional resources: [LightmapParameters.antiAliasingSamples](LightmapParameters-antiAliasingSamples.html).





### Properties



| Property | Description |
| --- | --- |
| SSAA1 | Disables supersampling. This results in a faster but lower-quality bake. |
| SSAA4 | Supersamples each texel by a factor of 4. This results in a 4 times larger G-buffer size. |
| SSAA16 | Supersamples each texel by a factor of 16. This results in a 16 times larger G-buffer size. |


            
