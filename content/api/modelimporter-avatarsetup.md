This version of Unity is unsupported.



# [ModelImporter](ModelImporter.html).avatarSetup




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












                    public [ModelImporterAvatarSetup](ModelImporterAvatarSetup.html) avatarSetup;






### Description



The Avatar generation of the imported model.





This property depends on the value of [ModelImporter.animationType](ModelImporter-animationType.html):

- [ModelImporterAnimationType.None](ModelImporterAnimationType.None.html) or [ModelImporterAnimationType.Legacy](ModelImporterAnimationType.Legacy.html) sets this property to [ModelImporterAvatarSetup.NoAvatar](ModelImporterAvatarSetup.NoAvatar.html) because Avatar generation does not support the None or Legacy animation types.

- [ModelImporterAnimationType.Generic](ModelImporterAnimationType.Generic.html) supports any value.

- [ModelImporterAnimationType.Human](ModelImporterAnimationType.Human.html) requires an avatar to import its animation. You must use either [ModelImporterAvatarSetup.CreateFromThisModel](ModelImporterAvatarSetup.CreateFromThisModel.html),  [ModelImporterAvatarSetup.CopyFromOther](ModelImporterAvatarSetup.CopyFromOther.html) or set ModelImporterAvatarSetup.autoGenerateAvatarMappingIfUnspecified to true .


            
