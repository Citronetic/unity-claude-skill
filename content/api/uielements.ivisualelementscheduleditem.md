This version of Unity is unsupported.



# IVisualElementScheduledItem





interface in
          UnityEngine.UIElements


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



















### Description



Represents a scheduled task created with a VisualElement's schedule interface.





### Properties



| Property | Description |
| --- | --- |
| element | Returns the VisualElement this object is associated with. |
| isActive | Will be true when this item is scheduled. Note that an item's callback will only be executed when it's VisualElement is attached to a panel. |





### Public Methods



| Method | Description |
| --- | --- |
| Every | Repeats this action after a specified time. |
| ExecuteLater | Cancels any previously scheduled execution of this item and re-schedules the item. |
| ForDuration | After specified duration, the item will be automatically unscheduled. |
| Pause | Removes this item from its VisualElement's scheduler. |
| Resume | If not already active, will schedule this item on its VisualElement's scheduler. |
| StartingIn | Adds a delay to the first invokation. |
| Until | Item will be unscheduled automatically when specified condition is met. |


            
