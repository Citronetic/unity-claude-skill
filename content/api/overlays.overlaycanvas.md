This version of Unity is unsupported.



# OverlayCanvas





class in
          UnityEditor.Overlays


                  Leave feedback





Implements interfaces:[ISerializationCallbackReceiver](ISerializationCallbackReceiver.html)




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



















### Description



OverlayCanvas is a container for collections of [Overlay](Overlays.Overlay.html)s.





Every [EditorWindow](EditorWindow.html) has an [OverlayCanvas](Overlays.OverlayCanvas.html), but only windows that opt-in to Overlay support will display Overlays. See [ISupportsOverlays](Overlays.ISupportsOverlays.html) for more information.





### Properties



| Property | Description |
| --- | --- |
| overlays | The Overlays in this canvas. |
| overlaysEnabled | Returns true if overlays display in the window, or false if overlays are hidden. |





### Public Methods



| Method | Description |
| --- | --- |
| Add | Add an Overlay to this canvas. Added Overlays will be displayed in the associated EditorWindow until they are removed. |
| OnAfterDeserialize | Invoked after OverlayCanvas is deserialized. |
| OnBeforeSerialize | Invoked before OverlayCanvas will be serialized. This is used to store Overlay layout data. |
| Remove | Remove an Overlay from this canvas. Removed Overlays are disassociated from OverlayCanvas and the related EditorWindow, but not destroyed. This means you are able to move a single Overlay between multiple windows. |
| ResetOverlay | Resets the overlay to its default state. |
| RestoreOverlay | Restores Overlay state according to the data parameter. |
| ShowPopup | Displays an overlay as a pop-up in a EditorWindow. |
| ShowPopupAtMouse | Displays an overlay as a pop-up in a EditorWindow at the mouse position. |


            
