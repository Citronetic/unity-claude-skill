This version of Unity is unsupported.



# [OverrideTextureCompression](Build.OverrideTextureCompression.html).ForceFastCompressor




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



Import textures with fast, but lower quality, texture compression.





You can set [EditorUserBuildSettings.overrideTextureCompression](EditorUserBuildSettings-overrideTextureCompression.html) to `ForceFastCompressor` to import
all compressed textures with a faster (but possibly lower quality) texture compression. This is the same as if all the textures had "Compressor Quality: Fast" option set in their per-platform import settings.

This setting is mostly useful for local development, to speed up texture importing or a platform
switch process. "Fast" compressor in particular only affects the texture pixels: the compression artifacts are in
some cases more visible, but the import process can be up to 10 times faster.

Additional resources: [EditorUserBuildSettings.overrideTextureCompression](EditorUserBuildSettings-overrideTextureCompression.html), [Texture Importer](../Manual/class-TextureImporter.html), [command line arguments](../Manual/CommandLineArguments.html).


            
