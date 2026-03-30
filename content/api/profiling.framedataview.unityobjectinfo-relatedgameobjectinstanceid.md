This version of Unity is unsupported.



# [FrameDataView.UnityObjectInfo](Profiling.FrameDataView.UnityObjectInfo.html).relatedGameObjectInstanceId




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












                    public int relatedGameObjectInstanceId;






### Description



The instance ID of a related Unity Object.





Stores the ID of a related Unity Object. You can use this to find the name of a related Unity Object if the Profiler didn't capture the name of the current Unity Object. Components might not have a defined name when a Scene loads, but the name will always evaluate to the same as the GameObject that the Component is assigned to. If the *relatedInstanceId* isn't zero, then use the FrameData.GetUnityObjectInfo function to see more information about the related Unity Object.


            
