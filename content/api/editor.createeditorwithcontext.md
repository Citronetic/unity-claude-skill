This version of Unity is unsupported.



# [Editor](Editor.html).CreateEditorWithContext




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

public static [Editor](Editor.html) CreateEditorWithContext(Object[] targetObjects,
[Object](Object.html) context,
Type editorType = null);






### Description



Make a custom editor for `targetObject` or `targetObjects` with a context object.





This method is identical to [CreateEditor](Editor.CreateEditor.html) except that the [SerializedObject](SerializedObject.html) will be created using the context object passed as parameter. This context object will be used to store and retrieve the value for ExposedReference types declared on the [SerializedObject](SerializedObject.html).


            
