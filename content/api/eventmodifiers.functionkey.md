This version of Unity is unsupported.



# [EventModifiers](EventModifiers.html).FunctionKey




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



Determines whether the current key press is a function key.





Function keys include the arrow keys, backspace, page up/down, as well as most non-printable keys.

                    Additional resources: [Event.functionKey](Event-functionKey.html).


              


```
using UnityEngine;
using UnityEngine.UIElements;[RequireComponent(typeof(UIDocument))]
public class Example : MonoBehaviour
{
    // Detects if a function Key was pressed. If a
    // function key was pressed, prints its key code.    void OnEnable()
    {
        var textField = new TextField();
        textField.RegisterCallback<KeyDownEvent>(e =>
        {
            if ((e.modifiers & EventModifiers.FunctionKey) != 0)
            {
                Debug.Log("Pressed: " + e.keyCode);
            }
        }, TrickleDown.TrickleDown);
        GetComponent<UIDocument>().rootVisualElement.Add(textField);
    }
}
```


            
