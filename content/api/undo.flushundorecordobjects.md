This version of Unity is unsupported.



# [Undo](Undo.html).FlushUndoRecordObjects




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

public static void FlushUndoRecordObjects();






### Description



Ensure objects recorded using [RecordObject](Undo.RecordObject.html) or [RecordObjects](Undo.RecordObjects.html) are registered as an undoable action. In most cases there is no reason to invoke [FlushUndoRecordObjects](Undo.FlushUndoRecordObjects.html) since it's automatically done right after mouse-up and certain other events that conventionally marks the end of an action.


            
