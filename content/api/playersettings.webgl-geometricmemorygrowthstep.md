This version of Unity is unsupported.



# [PlayerSettings.WebGL](PlayerSettings.WebGL.html).geometricMemoryGrowthStep




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







                    public static float geometricMemoryGrowthStep;






### Description



Heap memory growth factor.





Advanced tuning option to control the growth step for the heap memory if geometric memory growth is enabled (Recommended default: 0.2). A growth factor of 0.2 means that the size of the heap is increased by 0.2 * currentHeapSize each time the heap needs to grow.


            
