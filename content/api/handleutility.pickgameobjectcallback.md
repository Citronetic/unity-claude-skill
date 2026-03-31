This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).PickGameObjectCallback




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

public delegate [GameObject](GameObject.html) PickGameObjectCallback([Camera](Camera.html) cam,
int layers,
[Vector2](Vector2.html) position,
GameObject[] ignore,
GameObject[] filter,
out int materialIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| cam | The camera with which to render pickable objects. |
| layers | A layer mask specifying what layers to consider valid for picking. See also Camera.cullingMask. |
| position | A position in GUI coordinates. The top-left of the window is (0,0), and the bottom-right is (Screen.width, Screen.height). |
| ignore | An array of GameObjects that will not be considered when selecting the nearest GameObject. |
| filter | An array of GameObjects that will be tested for picking intersection. If this argument is not null, only GameObjects in the filter array will be selected. |
| materialIndex | Returns the index of the Renderer component in the material array that is closest to the specified position. If the picked object does not contain a MeshRenderer, or the picking intersection does not fall within a mesh boundary, this returns -1. |





### Description



This is the method definition for [pickGameObjectCustomPasses](HandleUtility-pickGameObjectCustomPasses.html).


            
