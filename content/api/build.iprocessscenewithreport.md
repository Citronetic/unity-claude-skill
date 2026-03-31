This version of Unity is unsupported.



# IProcessSceneWithReport





interface in
          UnityEditor.Build


                  Leave feedback





Implements interfaces:[IOrderedCallback](Build.IOrderedCallback.html)




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



Implement this interface to receive a callback for each scene during the build.





If the scene or related content in the project is unchanged from the previous Player build, Unity doesn't build the scene and instead uses cached Player build data. In this case the callback isn't called. For more information about build callbacks, refer to [Use build callbacks](../Manual/build-callbacks.html).





### Public Methods



| Method | Description |
| --- | --- |
| OnProcessScene | Implement this function to receive a callback for each Scene during the build. |


            
