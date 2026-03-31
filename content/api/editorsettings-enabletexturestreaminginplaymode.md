This version of Unity is unsupported.



# [EditorSettings](EditorSettings.html).enableTextureStreamingInPlayMode




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












                    public static bool enableTextureStreamingInPlayMode;






### Description



Enable texture mipmap streaming system when in Play Mode.





Texture mipmap streaming only loads the texture mipmaps required by active cameras in the Scene. During Play mode, some mipmaps will be discarded from memory. This can slow down the process of switching back to Edit mode, as the high-resolution mipmaps are reloaded after Play mode is exited. Disabling the texture mipmap streaming system during Play mode speeds up the workflow for some Scenes. Alternatively enable texture streaming in Edit Mode as well as Play Mode.


            
