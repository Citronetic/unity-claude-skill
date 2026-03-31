This version of Unity is unsupported.



# [EventModifiers](EventModifiers.html).Alt




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



Is Alt/Option key held down?





Additional resources: [Event.alt](Event-alt.html).


              


```
using UnityEngine;
using UnityEngine.UIElements;[RequireComponent(typeof(UIDocument))]
public class Example : MonoBehaviour
{
    // Prints Option or Alt key was pressed depending on the
    // platform where this script is running.    void OnEnable()
    {
        var button = new Button();
        button.RegisterCallback<ClickEvent>(e =>
        {
            if ((e.modifiers & EventModifiers.Alt) != 0)
            {
                if (Application.platform == RuntimePlatform.OSXEditor)
                {
                    Debug.Log("Option key was pressed");
                }
                else if (Application.platform == RuntimePlatform.WindowsEditor)
                {
                    Debug.Log("Alt Key was pressed!");
                }
            }
        });
        GetComponent<UIDocument>().rootVisualElement.Add(button);
    }
}
```


            
