This version of Unity is unsupported.



# [LightmapParameters](LightmapParameters.html).limitLightmapCount




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







                    public bool limitLightmapCount;






### Description



If enabled, objects sharing the same lightmap parameters will be packed into [LightmapParameters.maxLightmapCount](LightmapParameters-maxLightmapCount.html) lightmaps.





This setting can be used to limit the number of generated lightmaps. This is achieved by iteratively scaling down the UV layouts until they fit into the specified number of allowed lightmaps.


            
