This version of Unity is unsupported.



# [CompilationPipeline](Compilation.CompilationPipeline.html).GetAssemblyRootNamespaceFromScriptPath




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

public static string GetAssemblyRootNamespaceFromScriptPath(string sourceFilePath);






### Parameters



| Parameter | Description |
| --- | --- |
| sourceFilePath | Source (script) file path. |





### Returns



**string**
        Returns the root namespace for the given script. If there is no root namespace defined for the script, it returns null.





### Description



Gets the root namespace associated with the given script path.





This method gets the root namespace associated with the given script path. If there is an assembly definition file associated to the given script, the root namespace defined is returned, otherwise the C# project Root Namespace in project settings is returned.


            
