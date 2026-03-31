This version of Unity is unsupported.



# [XRDisplaySubsystem](XR.XRDisplaySubsystem.html).displayFocusChanged




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | Delegate method to call when the event is sent. |





### Description



Event sent when XR display focus changes.





This event is sent on the main thread.


              


```
using UnityEngine;
using UnityEngine.XR;public class ExampleClass : MonoBehaviour
{
    public XRDisplaySubsystem display;    void OnEnable()
    {
        display.displayFocusChanged += HandleFocusChanged;
    }    void OnDisable()
    {
        display.displayFocusChanged -= HandleFocusChanged;
    }    void HandleFocusChanged(bool focus)
    {
    }
}
```


            
