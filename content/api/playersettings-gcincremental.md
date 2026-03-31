This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).gcIncremental




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static bool gcIncremental;






### Description



Allows you to enable or disable incremental mode for garbage collection.





Incremental mode is a feature which tries to reduce the interruption times caused by garbage collection. When enabled, the garbage collection task is split into smaller slices which are performed incrementally instead of all at once. Instead of fewer long interruptions you will get more shorter interruptions, which could benefit the consistency of your project's frame rate and make your content run smoother. To learn more about how to judge whether this will benefit your project, see [Memory in Unity](../Manual/performance-memory-overview.html).


            
