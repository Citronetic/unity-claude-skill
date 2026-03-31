This version of Unity is unsupported.



# DependencyType





enumeration


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



Dependency calculation flags to control what is returned, and how it operates.





### Properties



| Property | Description |
| --- | --- |
| RecursiveOperation | Depencency calculation is recursive. For each new valid reference discovered during calculation, the dependencies of those references will also be included in the returned results. |
| MissingReferences | Object dependencies returned for only missing references. |
| ValidReferences | Depencency calculation is not recursive. Only dependencies of the initial passed in set will be returned. |
| DefaultDependencies | Default mode. Dependencies are calculated recursively, and only valid references are returned. |


            
