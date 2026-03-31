This version of Unity is unsupported.



# [IExternalCodeEditor](Unity.CodeEditor.IExternalCodeEditor.html).Installations




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












                    public Installation[] Installations;






### Description



Provide the editor with a list of known and supported editors that this instance supports.





This gets called multiple times through execution and is not expected to be persistent. For example, after calling [TryGetInstallationForPath](Unity.CodeEditor.IExternalCodeEditor.TryGetInstallationForPath.html) this class may realize that you have added a custom code editor.


            
