This version of Unity is unsupported.



# [OverrideTextureCompression](Build.OverrideTextureCompression.html).ForceUncompressed




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



Import textures with texture compression off.





You can set [EditorUserBuildSettings.overrideTextureCompression](EditorUserBuildSettings-overrideTextureCompression.html) to `ForceUncompressed` to import
all textures into uncompressed texture formats. This is the same as if all the textures had "Compression: None"
option set in their import settings.

This setting is mostly useful for local development, to speed up texture importing or a platform
switch process. Some compressed texture formats are slow to compress, and for local development
you might want to skip that. Note however that uncompressed textures do take up more memory
and might be slower for GPU to render with.

Additional resources: [EditorUserBuildSettings.overrideTextureCompression](EditorUserBuildSettings-overrideTextureCompression.html), [Texture Importer](../Manual/class-TextureImporter.html), [command line arguments](../Manual/CommandLineArguments.html).


            
