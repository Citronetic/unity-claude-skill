This version of Unity is unsupported.



# [IPointerEvent](UIElements.IPointerEvent.html).clickCount




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












                    public int clickCount;






### Description



Gets the number of consecutive times a down-up sequence was executed in a short amount of time
 with the same pointer ID and button.





There are two different formulas used to determine the value for clickCount.

 If the event is a [ClickEvent](UIElements.ClickEvent.html), a special data structure tracks
 click counts for each pointer ID, and will use that click count when initializing the next click event:

- clickCount is incremented on [PointerDownEvent](UIElements.PointerDownEvent.html).
- Time is measured between consecutive [PointerDownEvent](UIElements.PointerDownEvent.html)s.
- The time limit is 0.5 seconds by default but can vary on some platforms.
- clickCount is reset whenever an event with a different pointer ID or button than the previous one is sent.
- clickCount is reset on [PointerDownEvent](UIElements.PointerDownEvent.html) if its target is not the same as the previous
 [PointerDownEvent](UIElements.PointerDownEvent.html).

 If the event is not a [ClickEvent](UIElements.ClickEvent.html), the value for clickCount does not follow a strict
 formula, but rather it is determined by the active input framework and platform conventions.
 The amount of time allowed and whether that time is measured between consecutive
 [PointerDownEvent](UIElements.PointerDownEvent.html)s or between a [PointerUpEvent](UIElements.PointerUpEvent.html) and the next
 [PointerDownEvent](UIElements.PointerDownEvent.html) varies.

 To remain consistent in your code, don't depend on clickCount for other events than
 [ClickEvent](UIElements.ClickEvent.html) if possible. We recommend keeping track of click counts manually by
 registering callbacks to [PointerDownEvent](UIElements.PointerDownEvent.html) and [PointerUpEvent](UIElements.PointerUpEvent.html) on the
 [IPanel.visualTree](UIElements.IPanel-visualTree.html) using the [TrickleDown.TrickleDown](UIElements.TrickleDown.TrickleDown.html) phase to monitor all
 incoming Panel events. The code below shows an example implementation.


              


```
using UnityEngine;
using UnityEngine.UIElements;public class ClickCountMonitor
{
    public int ClickCount { get; private set; }    private float doubleClickTime;
    private int lastPointerId = -1;
    private int lastButton;
    private IEventHandler lastTarget;
    private float lastTime;

    public ClickCountMonitor(IPanel panel, float doubleClickTime = 0.5f)
    {
        this.doubleClickTime = doubleClickTime;

        panel.visualTree.RegisterCallback<PointerDownEvent>(e =>
        {
            CheckResetConditions(e);
            ClickCount++;
        }, TrickleDown.TrickleDown);

        panel.visualTree.RegisterCallback<PointerUpEvent>(e =>
        {
            CheckResetConditions(e);
        }, TrickleDown.TrickleDown);
    }

    private void CheckResetConditions(IPointerEvent e)
    {
        if (e.pointerId != lastPointerId || e.button != lastButton || ((EventBase)e).target != lastTarget ||
            Time.time >= lastTime + doubleClickTime)
            ClickCount = 0;
        lastPointerId = e.pointerId;
        lastButton = e.button;
        lastTarget = ((EventBase)e).target;
        lastTime = Time.time;
    }
}
```


            
