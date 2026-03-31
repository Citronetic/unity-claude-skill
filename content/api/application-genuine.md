This version of Unity is unsupported.



# [Application](Application.html).genuine




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












                    public static bool genuine;






### Description



Returns false if application is altered in any way after it was built.





Otherwise returns true.

**Note**: Use [Application.genuineCheckAvailable](Application-genuineCheckAvailable.html) along with `Application.genuine` to verify app integrity. Accessing the `Application.genuine` property is a resource-intensive operation, so do not call it during frame updates or other time-critical code.

**Android**: Returns false if the package name set in project settings mismatches with package name returned at runtime.

You can use this as an anti-piracy check because it checks if the application was altered after being built. Refer to [iOS Scripting](../Manual/iphone-API.html) and [Android mobile scripting](../Manual/android-API.html) for more information.


            
