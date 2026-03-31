This version of Unity is unsupported.



# [StatusQueryOptions](StatusQueryOptions.html).UseCachedIfPossible




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



















### Description



This option sets the status query to first use the latest valid version control system status of the file and query for a valid status synchronously if otherwise.





A synchronous query does not return a value until the VCS system responds. This can cause significant delays especially when the VCS is server controlled. It is better to use [StatusQueryOptions.UseCachedAsync](StatusQueryOptions.UseCachedAsync.html) for an asynchronous query in that situation.

Additional resources: [AssetDatabase.IsOpenForEdit](AssetDatabase.IsOpenForEdit.html), [AssetDatabase.IsMetaFileOpenForEdit](AssetDatabase.IsMetaFileOpenForEdit.html).


            
