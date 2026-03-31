This version of Unity is unsupported.



# [EditorApplication](EditorApplication.html).update




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












                    public static [EditorApplication.CallbackFunction](EditorApplication.CallbackFunction.html) update;






### Description



Delegate called periodically at the editor's tick rate for performing checks or updates.





`EditorApplication.update` is not tied to the update loop of your project in Play mode. Instead, this callback follows the Editor's tick rate. The Editor's tick rate is not fixed and it can vary in different situations. Under normal circumstances, the Editor tries to respect the integer `ApplicationIdleTime` stored in [EditorPrefs](EditorPrefs.html) for the interval between ticks, with a default value of 4ms. However, running in the background, running in headless mode, or performing a drag operation can affect the tick rate.

                Additional resources: [EditorApplication.delayCall](EditorApplication-delayCall.html)


            
