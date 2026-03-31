This version of Unity is unsupported.



# [DragAndDrop](DragAndDrop.html).visualMode




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












                    public static [DragAndDropVisualMode](DragAndDropVisualMode.html) visualMode;






### Description



The visual indication of the drag.





Default is [DragAndDropVisualMode.Link](DragAndDropVisualMode.Link.html).


              


```
using UnityEngine;
using UnityEditor;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        EventType eventType = Event.current.type;
        if (eventType == EventType.DragUpdated ||
            eventType == EventType.DragPerform)
        {
            // Show a copy icon on the drag
            DragAndDrop.visualMode = DragAndDropVisualMode.Copy;            if (eventType == EventType.DragPerform)
            {
                DragAndDrop.AcceptDrag();
            }
            Event.current.Use();
        }
    }
}
```


            
