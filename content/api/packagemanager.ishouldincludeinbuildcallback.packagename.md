This version of Unity is unsupported.



# [IShouldIncludeInBuildCallback](PackageManager.IShouldIncludeInBuildCallback.html).PackageName




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







                    public string PackageName;






### Description



The package name.





Name of the package associated with this instance. The build pipeline invokes the [ShouldIncludeInBuild](PackageManager.IShouldIncludeInBuildCallback.ShouldIncludeInBuild.html) method once for each managed plugin in this package during a build.
This name must match the `name` attribute in the package manifest (package.json).


            
