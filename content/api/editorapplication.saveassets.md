                  **Removed**





# [EditorApplication](EditorApplication.html).SaveAssets




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













                        **Obsolete**
                        Use AssetDatabase.SaveAssets instead.
**Upgrade to [SaveAssets](AssetDatabase.SaveAssets.html)**




## Declaration

public static void SaveAssets();






### Description



Saves all serializable assets that have not yet been written to disk (eg. Materials).





Also makes sure the asset database is written.
This function does the same thing as [AssetDatabase.SaveAssets](AssetDatabase.SaveAssets.html) with the exception that it is allowed to be called during serialization, and the AssetDatabase function is not.


            
