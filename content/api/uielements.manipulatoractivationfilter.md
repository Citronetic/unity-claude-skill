This version of Unity is unsupported.



# ManipulatorActivationFilter





struct in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Defines conditions for manipulators to respond to specific events.


              


```
public class ClickableTest
 {
     public void CreateClickable()
     {
         var clickable = new Clickable(() => { Debug.Log("Clicked!"); });
         clickable.activators.Add(new ManipulatorActivationFilter { button = MouseButton.LeftMouse });
         clickable.activators.Add(new ManipulatorActivationFilter { button = MouseButton.RightMouse, clickCount = 2, modifiers = EventModifiers.Control });
     }
 }
```





### Properties



| Property | Description |
| --- | --- |
| button | The button that triggers the manipulation. |
| clickCount | Number of mouse clicks required to activate the manipulator. |
| modifiers | Any modifier keys (ie. ctrl, alt, ...) required to trigger the manipulator. |





### Public Methods



| Method | Description |
| --- | --- |
| Matches | Checks whether the current mouse event satisfies the activation requirements. |


            
