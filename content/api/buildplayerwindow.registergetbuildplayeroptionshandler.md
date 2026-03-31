This version of Unity is unsupported.



# [BuildPlayerWindow](BuildPlayerWindow.html).RegisterGetBuildPlayerOptionsHandler




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

public static void RegisterGetBuildPlayerOptionsHandler(Func<BuildPlayerOptions,BuildPlayerOptions> func);






### Parameters



| Parameter | Description |
| --- | --- |
| func | Delegate System.Func that takes a BuildPlayerOptions parameter. The value passed into the delegate will represent default options. The return value will be passed to the default build player handler, or to a custom handler set with BuildPlayerWindow.RegisterBuildPlayerHandler. |





### Description



Register a delegate method to calculate [BuildPlayerOptions](BuildPlayerOptions.html) that are passed to the build player handler. Registering a null value will restore default behavior, which is the equivalent of calling [BuildPlayerWindow.DefaultBuildMethods.GetBuildPlayerOptions](BuildPlayerWindow.DefaultBuildMethods.GetBuildPlayerOptions.html).





If this delegate is registered and used in conjunction with the default build player handler, be sure to set [BuildPlayerOptions.scenes](BuildPlayerOptions-scenes.html), [BuildPlayerOptions.locationPathName](BuildPlayerOptions-locationPathName.html), and [BuildPlayerOptions.target](BuildPlayerOptions-target.html) before exiting for the build process to proceed correctly.


            
