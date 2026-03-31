This version of Unity is unsupported.



# AccessibilityNode





class in
          UnityEngine.Accessibility



/



Implemented in:[UnityEngine.AccessibilityModule](UnityEngine.AccessibilityModule.html)


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



















### Description



An instance of a node in the [AccessibilityHierarchy](Accessibility.AccessibilityHierarchy.html), representing an element in the UI that the screen reader
 can read, focus, and execute actions on.





### Properties



| Property | Description |
| --- | --- |
| allowsDirectInteraction | Whether this node allows direct touch interaction for users. |
| children | The children nodes of the node. |
| frame | The Rect represents the position in screen coordinates of the node in the UI. This can be set
 directly but it is recommended that frameGetter is set instead, so that the value can be
 recalculated when necessary. |
| frameGetter | Optional delegate that can be set to calculate the frame for the node instead of setting a flat value.
 If the frame of the node may change over time, this delegate should be set instead of giving a one time value for
 the frame. |
| hint | Provides additional information about the accessibility node.
 For example, the result of performing an action on the node. |
| id | The ID of this node. |
| isActive | Whether this node is active in the hierarchy. The default value is true. |
| isFocused | Whether the node is focused by the screen reader. |
| label | A string value that succinctly describes this node.
 The label is the first thing read by the screen reader when a node is focused. |
| parent | The parent of the node. If the node is at the root level, the parent value is null. |
| role | The role for the node. |
| state | The state for the node. |
| value | The value of this node. |





### Public Methods



| Method | Description |
| --- | --- |
| GetHashCode | A hash used for comparisons. |
| ToString | Provides a debugging string. |





### Events



| Event | Description |
| --- | --- |
| decremented | Called when the user of the screen reader decrements the content of the node. |
| dismissed | Called when the user of the screen reader dismisses this node. |
| focusChanged | Called when the node gains or loses screen reader focus. |
| incremented | Called when the user of the screen reader increments the content of the node. |
| selected | Called when the user of the screen reader selects this node. |


            
