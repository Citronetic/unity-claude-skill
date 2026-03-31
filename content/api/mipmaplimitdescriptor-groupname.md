This version of Unity is unsupported.



# [MipmapLimitDescriptor](MipmapLimitDescriptor.html).groupName




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












                    public string groupName;






### Description



The [TextureMipmapLimitGroup](TextureMipmapLimitGroups.html) to use the mipmap limit of.





The texture uses the mipmap limit of `groupName` if you set [MipmapLimitDescriptor.useMipmapLimit](MipmapLimitDescriptor-useMipmapLimit.html) to `true`.
If no group is provided (either `String.Empty()` or `null`), the texture will use the [global mipmap limit](QualitySettings-globalTextureMipmapLimit.html).

If a group is provided but it has not been defined in the Unity Project (set up in the Project's Quality Settings, or managed via [TextureMipmapLimitGroups](TextureMipmapLimitGroups.html)), the texture also falls back to following the global mipmap limit.


            
