This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).ImportPackageFailedCallback




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

public delegate void ImportPackageFailedCallback(string packageName,
string errorMessage);






### Description



Delegate to be called from [AssetDatabase.ImportPackage](AssetDatabase.ImportPackage.html) callbacks. **packageName** is the name of the package that raised the callback. **errorMessage** is the reason for the failure.





ImportPackageCallback is used by [AssetDatabase.importPackageFailed](AssetDatabase-importPackageFailed.html).


            
