This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetShadingRateFragmentSize




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

public void SetShadingRateFragmentSize([Rendering.ShadingRateFragmentSize](Rendering.ShadingRateFragmentSize.html) shadingRateFragmentSize);






### Parameters



| Parameter | Description |
| --- | --- |
| shadingRateFragmentSize | Shading rate to set as the base rate. |





### Description



Add a "set base shading rate" command.





In a draw call, the final shading rate is influenced by three key components: the base shading rate, shading rate combiners, and the shading rate image.
                The base shading rate serves as the default when no other specifications are provided.
                The shading rate combiners dictate the manner in which the base shading rate interacts with the shading rate image.
                If not explicitly specified, the default [ShadingRateFragmentSize.FragmentSize1x1](Rendering.ShadingRateFragmentSize.FragmentSize1x1.html) is employed.
                It's essential to note that Unity currently does not offer complete support for variable rate shading, and the associated method is reserved for future use.

Additional resources: [SystemInfo.supportsVariableRateShading](SystemInfo-supportsVariableRateShading.html).


            
