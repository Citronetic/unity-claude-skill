This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# Attacher





class in
          UnityEditor.Experimental.GraphView


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



Helper object that attaches a visual element next to its target, regarless of their respective location in the visual tree hierarchy.





The Attacher will monitor the position of the target and move the attached element accordingly.





### Properties



| Property | Description |
| --- | --- |
| alignment | Relative alignment between the attached element and the target. |
| distance | The distance between the attached element and the target. |
| element | The element that is attached to the target element. |
| offset | An absolute offset added to the element position after placement. |
| target | The target element. |





### Constructors



| Constructor | Description |
| --- | --- |
| Attacher | Attaches a visual element next to its target, regarless of their respective locations in the visual tree hierarchy. |





### Public Methods



| Method | Description |
| --- | --- |
| Detach | Stop monitoring the target element and postioning the attached element. |
| Reattach | Starts monitoring target element position changes and places the attached element accordingly. |


            
