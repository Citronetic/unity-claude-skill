This version of Unity is unsupported.



# [IShouldIncludeInBuildCallback](PackageManager.IShouldIncludeInBuildCallback.html).ShouldIncludeInBuild




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




                [Switch to Manual](../Manual/class-PackageManager.html)










## Declaration

public bool ShouldIncludeInBuild(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The absolute path of the managed plugin to include or exclude. |





### Returns



**bool**
        Returns **true** to include the plugin identified by `path` in the build; otherwise, returns **false**.





### Description



Determines whether to include a managed plugin in a build.





Predicate invoked during a build to determine whether to include a managed plugin (DLL) in the associated package.


            
