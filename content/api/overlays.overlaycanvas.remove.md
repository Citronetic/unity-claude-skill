This version of Unity is unsupported.



# [OverlayCanvas](Overlays.OverlayCanvas.html).Remove




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

public bool Remove([Overlays.Overlay](Overlays.Overlay.html) overlay);






### Parameters



| Parameter | Description |
| --- | --- |
| overlay | The Overlay to remove. |





### Returns



**bool**
        Returns true if Overlay was found and removed, false if Overlay was not present in OverlayCanvas.





### Description



Remove an [Overlay](Overlays.Overlay.html) from this canvas. Removed Overlays are disassociated from [OverlayCanvas](Overlays.OverlayCanvas.html) and the related [EditorWindow](EditorWindow.html), but not destroyed. This means you are able to move a single [Overlay](Overlays.Overlay.html) between multiple windows.





An [Overlay](Overlays.Overlay.html) may only belong to a single [OverlayCanvas](Overlays.OverlayCanvas.html). To display an [Overlay](Overlays.Overlay.html) in multiple windows, you must instantiate an [Overlay](Overlays.Overlay.html) for each window.


            
