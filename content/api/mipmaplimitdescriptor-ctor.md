This version of Unity is unsupported.



# MipmapLimitDescriptor Constructor




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

public MipmapLimitDescriptor(bool useMipmapLimit,
string groupName);






### Parameters



| Parameter | Description |
| --- | --- |
| useMipmapLimit | Enable or disable mipmap limit effects for a Texture. |
| groupName | The TextureMipmapLimitGroup to use the mipmap limit of. |





### Description



Creates a new MipmapLimitDescriptor.





Use a `MipmapLimitDescriptor` to determine whether a texture uses a mipmap limit when you create the texture using a constructor.

If you create a texture using a script, the texture doesn't use mipmap limits by default.
The texture uses the mipmap limit of `groupName` if you set `useMipmapLimit` to `true`. If the group is not defined (either `null` or an empty string), the texture falls back to following the global mipmap limit.

The texture also uses the global mipmap limit if the group is not known by the Editor.

Additional resources:: [TextureMipmapLimitGroups](TextureMipmapLimitGroups.html).


            
