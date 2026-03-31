This version of Unity is unsupported.



# [Camera](Camera.html).eventMask




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public int eventMask;






### Description



Mask to select which layers can trigger events on the camera.





Just as the camera's `cullingMask` determines if the camera is able to see the [GameObject](GameObject.html), the event mask determines whether the [GameObject](GameObject.html) is able to receive mouse events.
Only objects visible by the camera and whose `layerMask` overlaps with the camera's `eventMask` will be able to receive OnMouseXXX events.
Setting this mask to zero will improve performance and is recommended if you don't use OnMouseXXX events.
See [Layers](../Manual/Layers.html) for more information.

Additional resources: [MonoBehaviour.OnMouseEnter](MonoBehaviour.OnMouseEnter.html), [MonoBehaviour.OnMouseExit](MonoBehaviour.OnMouseExit.html), [MonoBehaviour.OnMouseOver](MonoBehaviour.OnMouseOver.html),
[MonoBehaviour.OnMouseDown](MonoBehaviour.OnMouseDown.html), [MonoBehaviour.OnMouseOver](MonoBehaviour.OnMouseOver.html), [MonoBehaviour.OnMouseUp](MonoBehaviour.OnMouseUp.html),
[MonoBehaviour.OnMouseDrag](MonoBehaviour.OnMouseDrag.html), [MonoBehaviour.OnMouseUpAsButton](MonoBehaviour.OnMouseUpAsButton.html).


            
