This version of Unity is unsupported.



# [BuildReport](Build.Reporting.BuildReport.html).SummarizeErrors




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

public string SummarizeErrors();






### Description



Returns a string summarizing any errors that occurred during the build





Convenience method for summarizing errors (or exceptions) that occurred during a build into a single line of text.
If no error was logged this returns an empty string.  If a single error was logged this reports the error messages.  Otherwise it reports the number of errors, for example "5 errors".

Note: To examine all errors, warnings and other messages recorded during a build you can enumerating through the build steps and check [BuildStep.messages](Build.Reporting.BuildStep-messages.html).
And to retrieve the count of errors call [BuildSummary.totalErrors](Build.Reporting.BuildSummary-totalErrors.html).


            
