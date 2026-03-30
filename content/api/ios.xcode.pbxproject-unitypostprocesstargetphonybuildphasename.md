This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).unityPostprocessTargetPhonyBuildPhaseName




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












                    public string unityPostprocessTargetPhonyBuildPhaseName;






### Description



The name of the placeholder build phase, which Unity adds to indicate a place to add **post-processing** actions.





Any build phases added after the placeholder build phase can safely assume that the target is built. For example, Unity adds symbols processing afterwards, which requires Application/Framework to be fully built.


            
