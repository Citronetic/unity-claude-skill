This version of Unity is unsupported.



# IFocusRing





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



Interface for classes implementing focus rings.





When the [EventDispatcher](UIElements.EventDispatcher.html) processes navigation and pointer events, it
 automatically uses this interface to generate corresponding Focus events if applicable.


 Each Panel's [FocusController](UIElements.FocusController.html) has a focus ring implementation automatically assigned to it.
 The type of that focus ring depends on the associated Panel's [ContextType](UIElements.ContextType.html).

 For Editor-type Panels, only [NavigationMoveEvent](UIElements.NavigationMoveEvent.html) events in the following directions are
 considered:



          - [NavigationMoveEvent.Direction.Next](UIElements.NavigationMoveEvent.Direction.Next.html),

          - [NavigationMoveEvent.Direction.Previous](UIElements.NavigationMoveEvent.Direction.Previous.html).





For Player-type Panels, the following directions are also considered:



          - [NavigationMoveEvent.Direction.Left](UIElements.NavigationMoveEvent.Direction.Left.html),

          - [NavigationMoveEvent.Direction.Right](UIElements.NavigationMoveEvent.Direction.Right.html),

          - [NavigationMoveEvent.Direction.Up](UIElements.NavigationMoveEvent.Direction.Up.html),

          - [NavigationMoveEvent.Direction.Down](UIElements.NavigationMoveEvent.Direction.Down.html).





See also
 [How can I change what element is focused next](../Manual/UIE-faq-event-and-input-system.html#directional-nav.html) for
 an example of a workaround solution if the assigned focus ring navigation rules don't correspond to your needs.


Additional resources: [FocusController](UIElements.FocusController.html)





### Public Methods



| Method | Description |
| --- | --- |
| GetFocusChangeDirection | Get the direction of the focus change for the given event. |
| GetNextFocusable | Get the next element in the given direction. |


            
