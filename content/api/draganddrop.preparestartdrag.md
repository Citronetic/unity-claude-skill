This version of Unity is unsupported.



# [DragAndDrop](DragAndDrop.html).PrepareStartDrag




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

public static void PrepareStartDrag();






### Description



Clears drag & drop data.





Clears everything stored in the drag & drop object and prepares it so you can write into it for initiating a drag operation.

Additional resources: [StartDrag](DragAndDrop.StartDrag.html), [paths](DragAndDrop-paths.html), [objectReferences](DragAndDrop-objectReferences.html).


              


```
using UnityEngine;
using UnityEditor;public class Example : MonoBehaviour
{
    void OnGUI()
    {
        if (Event.current.type == EventType.MouseDrag)
        {
            // Clear out drag data
            DragAndDrop.PrepareStartDrag();            // Set up what we want to drag
            DragAndDrop.paths = new string[] { "/Users/joe/myPath.txt" };            // Start the actual drag
            DragAndDrop.StartDrag("Dragging title");            // Make sure no one uses the event after us
            Event.current.Use();
        }
    }
}
```


            
