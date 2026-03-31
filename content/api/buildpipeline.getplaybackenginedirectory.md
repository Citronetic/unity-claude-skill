This version of Unity is unsupported.



# [BuildPipeline](BuildPipeline.html).GetPlaybackEngineDirectory




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















## Declaration

public static string GetPlaybackEngineDirectory([BuildTarget](BuildTarget.html) target,
[BuildOptions](BuildOptions.html) options);






## Declaration

public static string GetPlaybackEngineDirectory([BuildTargetGroup](BuildTargetGroup.html) buildTargetGroup,
[BuildTarget](BuildTarget.html) target,
[BuildOptions](BuildOptions.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| target | Build target. |
| options | Build options. |
| buildTargetGroup | Build target group. |





### Description



Returns the path of a player directory. For ex., Editor\Data\PlaybackEngines\AndroidPlayer.





In some cases the player directory path can be affected by [BuildOptions.Development](BuildOptions.Development.html).


            
