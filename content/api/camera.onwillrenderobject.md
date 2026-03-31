This version of Unity is unsupported.



# [Camera](Camera.html).OnWillRenderObject()




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














### Description



OnWillRenderObject is called for each camera if the object is visible.





This function is called if the object is deemed visible from the current camera after the culling process.
The method is useful if you need a preparation step for every camera that is rendering the object.
One example of this is rendering reflection onto a render  texture.
The reflection will be different for every camera's view point, and needs to be rendered before the original object.
If the object gets culled away by a given camera, the reflections for that object will be skipped.
For usage in a proper context, see the script `Water.cs` in *Assets->Import Package->Effects*.

Note that `Camera.current` will be set to the camera that will render the object.
Also, this is called multiple times per frame.


            
