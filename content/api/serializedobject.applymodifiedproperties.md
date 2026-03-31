This version of Unity is unsupported.



# [SerializedObject](SerializedObject.html).ApplyModifiedProperties




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

public bool ApplyModifiedProperties();






### Returns



**bool**
        Returns true if any pending property changes were applied to the target objects of the SerializedObject.





### Description



Apply property modifications.





Each instance of SerializedObject contains a serialized representation of its target objects.
                Changes applied via the SerializedProperty API are not reflected back to the target objects until this method is called.
                First [Undo](Undo.html) information is recorded, then each target object is brought in sync by loading from the SerializedObject's
                local serialized content.

                Additional resources: [Update](SerializedObject.Update.html), [ApplyModifiedPropertiesWithoutUndo](SerializedObject.ApplyModifiedPropertiesWithoutUndo.html)


            
