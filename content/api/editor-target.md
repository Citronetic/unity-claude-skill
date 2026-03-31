This version of Unity is unsupported.



# [Editor](Editor.html).target




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












                    public Object target;






### Description



The object being inspected.





For editors that support multi-object editing, the target property should not be used inside [OnInspectorGUI](Editor.OnInspectorGUI.html) since it only refers to the first of the edited objects.
It should still be used in [OnSceneGUI](Editor.OnSceneGUI.html) and [OnPreviewGUI](Editor.OnPreviewGUI.html), which will be called once for each of the selected objects with the target property referring to each of them in turn.

Additional resources: [targets](Editor-targets.html), [serializedObject](Editor-serializedObject.html), [Editor](Editor.html) class.


            
