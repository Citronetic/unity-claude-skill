This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).GetOverlappingObjects




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

public static void GetOverlappingObjects([Vector2](Vector2.html) position,
List<Object> outObjectList);






### Parameters



| Parameter | Description |
| --- | --- |
| position | The mouse position to test. |
| outObjectList | The list to hold the returned objects. |





### Description



Gets an ordered list of objects that would be picked under the give mouse position.





The `position` argument specifies the test location in GUI coordinates.

This function returns an unprocessed list of objects that could be either GameObjects or Components. This list also doesn't take the [SelectionBase attribute](UnityEngine.SelectionBaseAttribute.html) or prefab roots into account.

This function must be called during a Scene GUI event that is not [Repaint](UnityEngine.EventType.Repaint.html). It only works with the current [SceneView](SceneView.html).

Additional resources: [PickGameObject](HandleUtility.PickGameObject.html), [SceneView.duringSceneGui](SceneView-duringSceneGui.html).


            
