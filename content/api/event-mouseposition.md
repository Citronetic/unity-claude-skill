This version of Unity is unsupported.



# [Event](Event.html).mousePosition




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












                    public [Vector2](Vector2.html) mousePosition;






### Description



The mouse position.





Used in [EventType.MouseMove](EventType.MouseMove.html) and [EventType.MouseDrag](EventType.MouseDrag.html) events.  The top-left of the window returns (0, 0).  The bottom-right returns (Screen.width, Screen.height).

Additional resources: [Event.delta](Event-delta.html).


              


```
using UnityEngine;
using System.Collections;// print the mousePosition every 10th of a secondpublic class ExampleClass : MonoBehaviour
{
    private float range = 0.0f;    void OnGUI()
    {
        range = range + Time.deltaTime;        if (range > 0.1f)
        {
            Event e = Event.current;
            Debug.Log(e.mousePosition);
            range = 0.0f;
        }
    }
}
```


            
