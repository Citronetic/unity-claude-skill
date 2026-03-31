This version of Unity is unsupported.



# [GameObjectRecorder](Animations.GameObjectRecorder.html).TakeSnapshot




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

public void TakeSnapshot(float dt);






### Parameters



| Parameter | Description |
| --- | --- |
| dt | Delta time. |





### Description



Forwards the animation by **dt** seconds, then record the values of the added bindings.





To add bindings, use the bindings methods: [BindComponent](Animations.GameObjectRecorder.BindComponent.html), [BindComponentsOfType](Animations.GameObjectRecorder.BindComponentsOfType.html), [BindAll](Animations.GameObjectRecorder.BindAll.html), or [Bind](Animations.GameObjectRecorder.Bind.html).

Note that **dt** is not added the first time this function is called so that the clip will start at 0.0f. This means the forwarding only starts on the subsequent calls.


            
