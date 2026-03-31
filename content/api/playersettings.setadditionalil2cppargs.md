This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetAdditionalIl2CppArgs




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










## Declaration

public static void SetAdditionalIl2CppArgs(string additionalArgs);






### Parameters



| Parameter | Description |
| --- | --- |
| additionalArgs | The additional arguments passed to the IL2CPP compiler during the build process. |





### Description



Set additional arguments passed to the IL2CPP compiler during the build process.





Sets additional C++ compiler arguments for an IL2CPP build. The Unity Editor normally passes a number of command line arguments to IL2CPP as part of the build process. This method allows you to specify additional compiler options. Provide compiler arguments as a single string, with spaces separating each argument. Pass an empty string to this method to remove any previously provided additional arguments. Valid compiler flags depend on the platform you are building for and the C++ compiler used by IL2CPP on that platform. Use GetAdditionalIl2CppArgs to determine the argument string previously provided to this method.

For more information on the correct syntax and usage for passing arguments to this method, refer to [Additional IL2CPP compiler arguments](../Manual/handling-il2cpp-additional-args.html) in the Unity Manual.

**Warning**: Passing additional arguments to the IL2CPP compiler is an experimental feature for debugging and optimizing IL2CPP code generation in complex projects. Like diagnostics switches, it's intended for use by advanced developers in coordination with Unity support staff. Arguments are passed directly to the C++ compiler with no interpretation, which means there is a high risk of breaking builds. Unity reserves the right to change or remove this feature without notice.


            
