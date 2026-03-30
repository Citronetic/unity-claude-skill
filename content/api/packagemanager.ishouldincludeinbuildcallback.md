This version of Unity is unsupported.



# IShouldIncludeInBuildCallback





interface in
          UnityEditor.PackageManager


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














### Description



Interface used by the Package Manager to request build information about packages.





During a build, the [ShouldIncludeInBuild](PackageManager.IShouldIncludeInBuildCallback.ShouldIncludeInBuild.html) method is invoked on each managed plugin (DLL) inside the package whose name is [PackageName](PackageManager.IShouldIncludeInBuildCallback.PackageName.html).

                Register your implementation with the Package Manager using [BuildUtilities.RegisterShouldIncludeInBuildCallback](PackageManager.BuildUtilities.RegisterShouldIncludeInBuildCallback.html). You can only register one implementation of this interface per package.

                Additional resources: [BuildUtilities](PackageManager.BuildUtilities.html).





### Properties



| Property | Description |
| --- | --- |
| PackageName | The package name. |





### Public Methods



| Method | Description |
| --- | --- |
| ShouldIncludeInBuild | Determines whether to include a managed plugin in a build. |


            
