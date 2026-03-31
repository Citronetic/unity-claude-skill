This version of Unity is unsupported.



# [Camera](Camera.html).transparencySortAxis




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







                    public [Vector3](Vector3.html) transparencySortAxis;






### Description



An axis that describes the direction along which the distances of objects are measured for the purpose of sorting.





If the [TransparencySortMode](TransparencySortMode.html) of the [Camera](Camera.html) or [GraphicsSettings](Rendering.GraphicsSettings.html) are set to [TransparencySortMode.CustomAxis](TransparencySortMode.CustomAxis.html), the rendering pipeline evaluates the distance of the object along the axis specified by this property.

This is used for sorting Renderer components when other, higher priority, criterias fail to distinguish the render order.

This is a useful technique in 2.5D games or isometric games where the [SpriteRenderer](SpriteRenderer.html)s need to be sorted along the vertical screen axis. For this specific use case, set the TransparencySortMode to [TransparencySortMode.CustomAxis](TransparencySortMode.CustomAxis.html) and set the axis to (0.0f, 1.0f, 0.0f).


            
