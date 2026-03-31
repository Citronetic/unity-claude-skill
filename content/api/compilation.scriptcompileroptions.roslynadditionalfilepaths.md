This version of Unity is unsupported.



# [ScriptCompilerOptions](Compilation.ScriptCompilerOptions.html).RoslynAdditionalFilePaths




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












                    public string[] RoslynAdditionalFilePaths;






### Description



Array of strings representing the paths of any additional files defined for Roslyn analyzers in the current assembly.





To define additional files for Roslyn analyzers and source generators to use, add them to the project `Assets` and name them in the format `Filename.[Analyzer Name].additionalfile`. The `[Analyzer Name]` component is case-sensitive and must match the name of the analyzer the additional file targets. The `Filename` component must not contain a period (`.`) character.

For more information, refer to [Additional files for Roslyn analyzers and source generators](../Manual/roslyn-analyzers-additional-files.html).


            
