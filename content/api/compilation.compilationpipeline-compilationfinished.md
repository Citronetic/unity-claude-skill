This version of Unity is unsupported.



# [CompilationPipeline](Compilation.CompilationPipeline.html).compilationFinished




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | A context object, which is a temporary store that allows you to compare compilation start and finish events. |





### Description



An event that is invoked on the main thread when the compilation of assemblies finishes.





This is called after the last [CompilationPipeline.assemblyCompilationFinished](Compilation.CompilationPipeline-assemblyCompilationFinished.html) event.

Context object can be used to match [CompilationPipeline.compilationStarted](Compilation.CompilationPipeline-compilationStarted.html) and [CompilationPipeline.compilationFinished](Compilation.CompilationPipeline-compilationFinished.html) events.

**Note:** Performing Player builds or triggering additional compilation tasks from callbacks is not supported. This is because the global state of Unity that is required to perform a build is not guaranteed.


            
