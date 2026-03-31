This version of Unity is unsupported.



# [OverlayAttribute](Overlays.OverlayAttribute.html).editorWindowType




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












                    public Type editorWindowType;






### Description



Defines which [EditorWindow](EditorWindow.html) type the overlay is used in.





To make an overlay available in all Editor windows, specify `EditorWindow` as the type. To make the overlay available in the Scene view only, set `SceneView` as the type. If you omit this property, then you must instantiate the overlay with [SceneView.AddOverlayToActiveView](SceneView.AddOverlayToActiveView.html) or [OverlayCanvas.Add](Overlays.OverlayCanvas.Add.html).


            
