This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).isPlayingOrWillChangePlaymode




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












                    public static bool isPlayingOrWillChangePlaymode;






### Description



Editor application state which is true only when the Editor is currently in or about to enter Play mode. (Read Only)





The value is `true` when the Editor is either in Play mode or will enter Play mode after finishing in-progress tasks such as compiling scripts. The value is `false` when the Editor is not in Play mode or will exit Play mode after finishing in-progress tasks.

**Note**: Despite its name, `isPlayingOrWillChangePlaymode` is not `true` every time the Play mode state will change, but specifically when it will change from Edit mode to Play mode. Subscribe to [EditorApplication.playModeStateChanged](EditorApplication-playModeStateChanged.html) to capture different changes in Play mode state, including exit from Play mode.

Additional resources: [isPlaying](EditorApplication-isPlaying.html), [isCompiling](EditorApplication-isCompiling.html).


            
