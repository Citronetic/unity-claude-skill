This version of Unity is unsupported.



# [EditorSettings](EditorSettings.html).referencedClipsExactNaming




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












                    public static bool referencedClipsExactNaming;






### Description



Controls which referenced clips an humanoid rig is able to update when using @convention files.





When referenced clips are present in the same directory as a Human rig asset, an "Update
                    referenced clips" button is available in the Inspector, under "Rig".

                    When this setting is true, the button will only be available if the rig asset name matches the
                    referenced clip names exactly. These are the referenced clips that will get updated. For example if
                    `player@walk` and `player@run` are present in the same folder as `player` and `player2`, only
                    `player` will display the "Update referenced clips" button in the inspector.

                    When this setting is set to false, the button is available for all rigs whose asset names start with
                    the referenced clip names. Prior to Unity 6, any of these rigs were able to update the referenced clips. In the
                    example above, both the `player` and `player2` rig assets display the **Update referenced clips** button
                    in the Inspector window. From Unity 6, users can control the behavior by changing the `ReferencedClipsExactNaming` setting.

                    You can read more  on referenced clips by looking at the [Importing
                    animations using multiple model files](../Manual/Splittinganimations.html) section of the User Manual.


            
