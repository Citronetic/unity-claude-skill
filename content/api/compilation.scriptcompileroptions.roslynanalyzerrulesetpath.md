This version of Unity is unsupported.



# [ScriptCompilerOptions](Compilation.ScriptCompilerOptions.html).RoslynAnalyzerRulesetPath




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












                    public string RoslynAnalyzerRulesetPath;






### Description



Stores the path to the Roslyn ruleset file.





You can define your own rules on how to handle the various warnings and errors that Roslyn analyzers raise. You must put these rules inside a file with the .ruleset extension. Unity detects this .ruleset file, and stores its path inside RoslynAnalyzerRulesetPath.

                In the root folder, you can store a ruleset file named "Default.ruleset". The rules defined in Default.ruleset apply to all predefined assemblies, as well as all assemblies that are built using .asmdef files.

                To override the rules in Default.ruleset for a predefined assembly, create a .ruleset file in the root folder with the name [PredefinedAssemblyName].ruleset. For example, the rules in Assembly-CSharp.ruleset apply to Assembly-CSharp.dll.

                Only these .ruleset files are permitted inside the root folder:
                - Default.ruleset
                - Assembly-CSharp.ruleset
                - Assembly-CSharp-firstpass.ruleset
                - Assembly-CSharp-Editor.ruleset
                - Assembly-CSharp-Editor-firstpass.ruleset

                To override the rules in Default.ruleset for an assembly built using an .asmdef file, create a .ruleset file in the same folder as its .asmdef file. You can give it any name you like. The name of this ruleset file does not necessarily have to match the name of the assembly.


            
