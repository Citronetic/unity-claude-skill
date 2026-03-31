This version of Unity is unsupported.



# [Undo](Undo.html).RecordObjects




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

public static void RecordObjects(Object[] objectsToUndo,
string name);






### Description



Records multiple undoable objects in a single call. This is the same as calling Undo.RecordObject multiple times.





**Important:** To correctly handle instances where *objectToUndo* is an instance of a Prefab, [PrefabUtility.RecordPrefabInstancePropertyModifications](PrefabUtility.RecordPrefabInstancePropertyModifications.html) must be called after RecordObject.

                    Additional resources: [Undo.RecordObject](Undo.RecordObject.html).


            
