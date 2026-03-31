This version of Unity is unsupported.



# [EventModifiers](EventModifiers.html).Control




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



Is Control key held down?





Additional resources: [Event.control](Event-control.html).


              


```
using UnityEngine;
using UnityEngine.UIElements;[RequireComponent(typeof(UIDocument))]
public class Example : MonoBehaviour
{
    void OnEnable()
    {
        var button = new Button();
        button.RegisterCallback<ClickEvent>(e =>
        {
            if ((e.modifiers & EventModifiers.Control) != 0)
            {
                if ((e.modifiers & EventModifiers.Shift) != 0)
                    Debug.Log("Control+Shift is pressed");
                else
                    Debug.Log("Control is pressed");
            }
            else if ((e.modifiers & EventModifiers.Shift) != 0)
            {
                Debug.Log("Shift is pressed");
            }
        });
        GetComponent<UIDocument>().rootVisualElement.Add(button);
    }
}
```


            
