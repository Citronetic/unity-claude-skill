This version of Unity is unsupported.



# [IPanel](UIElements.IPanel.html).PickAll




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

public [UIElements.VisualElement](UIElements.VisualElement.html) PickAll([Vector2](Vector2.html) point,
List<VisualElement> picked);






### Parameters



| Parameter | Description |
| --- | --- |
| point | World coordinates. |
| picked | If not null, the list is cleared and filled with all VisualElements that overlap the specified point. |





### Returns



**VisualElement**
        The top-most VisualElement overlapping the provided point. Null if none was found.





### Description



Finds all VisualElements overlapping the provided point.





It doesn't return the following:



          - Invisible elements

          - Elements with display style set to [DisplayStyle.None](UIElements.DisplayStyle.None.html)

          - Elements with [pickingMode](UIElements.VisualElement-pickingMode.html) set to [PickingMode.Ignore](UIElements.PickingMode.Ignore.html)





Additional resources: [VisualElement.visible](UIElements.VisualElement-visible.html), [IStyle.display](UIElements.IStyle-display.html), [VisualElement.pickingMode](UIElements.VisualElement-pickingMode.html)


            
