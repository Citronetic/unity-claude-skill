This version of Unity is unsupported.



# [ContextualMenuPopulateEvent](UIElements.ContextualMenuPopulateEvent.html).GetPooled




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

public static [UIElements.ContextualMenuPopulateEvent](UIElements.ContextualMenuPopulateEvent.html) GetPooled([UIElements.EventBase](UIElements.EventBase.html) triggerEvent,
[UIElements.DropdownMenu](UIElements.DropdownMenu.html) menu,
[UIElements.IEventHandler](UIElements.IEventHandler.html) target,
[UIElements.ContextualMenuManager](UIElements.ContextualMenuManager.html) menuManager);






### Parameters



| Parameter | Description |
| --- | --- |
| triggerEvent | The event that triggered the display of the contextual menu. |
| menu | The menu to populate. |
| target | The element that triggered the display of the contextual menu. |
| menuManager | The menu manager that displays the menu. |





### Returns



**ContextualMenuPopulateEvent**
        An initialized event.





### Description



Gets an event from the event pool and initializes it with the given values. Use this function instead of creating new events. Events obtained using this method need to be released back to the pool. You can use `Dispose()` to release them.


            
