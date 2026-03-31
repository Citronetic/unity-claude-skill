This version of Unity is unsupported.



# [GeometryChangedEvent](UIElements.GeometryChangedEvent.html).GetPooled




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

public static [UIElements.GeometryChangedEvent](UIElements.GeometryChangedEvent.html) GetPooled([Rect](Rect.html) oldRect,
[Rect](Rect.html) newRect);






### Parameters



| Parameter | Description |
| --- | --- |
| oldRect | The old dimensions of the element. |
| newRect | The new dimensions of the element. |





### Returns



**GeometryChangedEvent**
        An initialized event.





### Description



Gets an event from the event pool, and initializes it with the specified values. Use this method
 instead of instancing new events. Use Dispose() to release events back to the event pool.


            
