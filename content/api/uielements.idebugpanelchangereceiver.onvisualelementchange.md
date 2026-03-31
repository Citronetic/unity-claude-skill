This version of Unity is unsupported.



# [IDebugPanelChangeReceiver](UIElements.IDebugPanelChangeReceiver.html).OnVisualElementChange




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

public void OnVisualElementChange([UIElements.VisualElement](UIElements.VisualElement.html) element,
[UIElements.VersionChangeType](UIElements.VersionChangeType.html) changeType);






### Parameters



| Parameter | Description |
| --- | --- |
| element | The element that changed. |
| changeType | A string that contains the comma-separated value of what has changed. |





### Description



Receives notifications for every change that occurs on the panel's visual elements.
 This method is exclusively available in development builds and the Editor, as it serves as a debug feature that complements the profiling of an application.





The number of times the callback is called, the value returned, and the order in which they are returned are subject to change between each minor release of Unity, as this is considered internal.
 Related to [PanelSettings.SetPanelChangeReceiver](UIElements.PanelSettings.SetPanelChangeReceiver.html)


            
