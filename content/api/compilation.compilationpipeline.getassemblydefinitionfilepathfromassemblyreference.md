This version of Unity is unsupported.



# [CompilationPipeline](Compilation.CompilationPipeline.html).GetAssemblyDefinitionFilePathFromAssemblyReference




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

public static string GetAssemblyDefinitionFilePathFromAssemblyReference(string reference);






### Parameters



| Parameter | Description |
| --- | --- |
| reference | The assembly definition file GUID or assembly name reference. |





### Returns



**string**
        The file path of the given assembly definition file.





### Description



Returns the assembly definition file path for an Assembly Definition File GUID or assembly name reference. Returns null if there is no assembly definition file for the given assembly reference.





This utilty method should be used instead of [CompilationPipeline.GetAssemblyDefinitionFilePathFromAssemblyName](Compilation.CompilationPipeline.GetAssemblyDefinitionFilePathFromAssemblyName.html) for Assembly Definition File references, as it supports both assembly name and GUID based references.


            
