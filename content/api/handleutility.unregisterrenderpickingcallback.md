This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).UnregisterRenderPickingCallback




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

public static bool UnregisterRenderPickingCallback([HandleUtility.RenderPickingCallback](HandleUtility.RenderPickingCallback.html) renderPickingCallback);






### Parameters



| Parameter | Description |
| --- | --- |
| renderPickingCallback | The delegate object to unregister from the callback. |





### Returns



**bool**
        True if the unregistration succeeds. False if the callback is not registered.





### Description



Unregisters the callback that was previously registered for custom picking rendering.

The method throws `InvalidOperationException` if you try to call it inside render picking callbacks.





Additional resources: [RegisterRenderPickingCallback](HandleUtility.RegisterRenderPickingCallback.html).


            
