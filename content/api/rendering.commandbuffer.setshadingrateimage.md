This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetShadingRateImage




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

public void SetShadingRateImage(ref [Rendering.RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) shadingRateImage);






### Parameters



| Parameter | Description |
| --- | --- |
| shadingRateImage | The shading rate image to use with variable rate shading. |





### Description



Add a "set shading rate image" command.





In a draw call, the final shading rate is influenced by three key components: the base shading rate, shading rate combiners, and the shading rate image.
                The base shading rate serves as the default when no other specifications are provided.
                The shading rate combiners dictate the manner in which the base shading rate interacts with the shading rate image.
                An invalid [RenderTargetIdentifier](Rendering.RenderTargetIdentifier.html) is the equivalent of [ShadingRateFragmentSize.FragmentSize1x1](Rendering.ShadingRateFragmentSize.FragmentSize1x1.html) for images.

**Note**: To apply the shading rate value from the Shading Rate Image, set the [ShadingRateCombiner](Rendering.ShadingRateCombiner.html) for the fragment stage to `Override`, `Min`, or `Max`.

Additional resources: [SystemInfo.supportsVariableRateShading](SystemInfo-supportsVariableRateShading.html), [CommandBuffer.SetShadingRateCombiner](Rendering.CommandBuffer.SetShadingRateCombiner.html).


            
