This version of Unity is unsupported.



# [GameObjectUtility](GameObjectUtility.html).SetParentAndAlign




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

public static void SetParentAndAlign([GameObject](GameObject.html) child,
[GameObject](GameObject.html) parent);






### Parameters



| Parameter | Description |
| --- | --- |
| child | The GameObject that should have a new parent set. |
| parent | The GameObject that the child should get as a parent and have position and layer copied from. If null, this function does nothing. |





### Description



Sets the parent and gives the child the same layer and position.





This is intended as a utility function when creating custom GameObjects with a [MenuItem](MenuItem.html) in the "GameObject/" menu. When using the context click menu to create new GameObjects in the Scene hierarchy, the newly created GameObjects should be parented to the clicked GameObject, which is passed in as [MenuCommand.context](MenuCommand-context.html). Calling this method ensures this behavior in the case of a context click while doing nothing if the context is null (see example on the [MenuItem](MenuItem.html) docs).


            
