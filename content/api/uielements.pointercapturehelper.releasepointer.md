This version of Unity is unsupported.



# [PointerCaptureHelper](UIElements.PointerCaptureHelper.html).ReleasePointer




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

public static void ReleasePointer([UIElements.IEventHandler](UIElements.IEventHandler.html) handler,
int pointerId);






### Parameters



| Parameter | Description |
| --- | --- |
| handler | The element which potentially captured the pointer. |
| pointerId | The captured pointer. |





### Description



Tests whether an element captured a pointer and, if so, tells the element to release the pointer.





If a pointer release is requested during the propagation of an existing event, the release
 takes effect only after the ongoing event has been fully dispatched and propagated.




---








## Declaration

public static void ReleasePointer([UIElements.IPanel](UIElements.IPanel.html) panel,
int pointerId);






### Parameters



| Parameter | Description |
| --- | --- |
| panel | The panel that holds the element that captured the pointer. |
| pointerId | The captured pointer. |





### Description



Releases the pointer.





If a pointer release is requested during the propagation of an existing event, the release
 takes effect only after the ongoing event has been fully dispatched and propagated.


            
