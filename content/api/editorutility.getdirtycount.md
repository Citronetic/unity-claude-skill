This version of Unity is unsupported.



# [EditorUtility](EditorUtility.html).GetDirtyCount




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

public static int GetDirtyCount(int instanceID);






## Declaration

public static int GetDirtyCount([Object](Object.html) target);






### Parameters



| Parameter | Description |
| --- | --- |
| instanceID | The object's instance ID. |
| target | The object. |





### Description



Returns an integer that indicates the number of times the specified object's serialized properties have changed.





This count is incremented each time a call to [SetDirty](EditorUtility.SetDirty.html) changes the object's serializable properties, and is reset to zero when the object is saved.

Additional resources: [IsDirty](EditorUtility.IsDirty.html), [SetDirty](EditorUtility.SetDirty.html).


            
