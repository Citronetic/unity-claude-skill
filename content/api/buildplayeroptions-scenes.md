This version of Unity is unsupported.



# [BuildPlayerOptions](BuildPlayerOptions.html).scenes




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












                    public string[] scenes;






### Description



The Scenes to be included in the build.





If empty, the currently open Scene will be built. Paths are relative to the project folder, for example "Assets/MyLevels/MyScene.unity". If any scene is currently open and has unsaved changes, the editor will ask the user to save these changes before building - or save changes automatically, if [Application.isBatchMode](Application-isBatchMode.html) is true.
                Additional resources: [EditorBuildSettings.scenes](EditorBuildSettings-scenes.html).


            
