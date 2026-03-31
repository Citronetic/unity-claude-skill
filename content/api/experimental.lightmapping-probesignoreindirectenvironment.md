This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [Lightmapping](Experimental.Lightmapping.html).probesIgnoreIndirectEnvironment




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












                    public static bool probesIgnoreIndirectEnvironment;






### Description



If enabled ignores the indirect contribution from the environment lighting in baked probes.





This feature is useful in combination with custom shaders where the sky contribution is added directly in the shader. This way various per pixel sky occlusion techniques can be integrated. NOTE: Works only with the GPU Lightmapper.


            
