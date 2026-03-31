This version of Unity is unsupported.



# [DragAndDrop](DragAndDrop.html).AddDropHandler




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

public static void AddDropHandler([DragAndDrop.ProjectBrowserDropHandler](DragAndDrop.ProjectBrowserDropHandler.html) handler);






## Declaration

public static void AddDropHandler([DragAndDrop.SceneDropHandler](DragAndDrop.SceneDropHandler.html) handler);






## Declaration

public static void AddDropHandler([DragAndDrop.HierarchyDropHandler](DragAndDrop.HierarchyDropHandler.html) handler);






## Declaration

public static void AddDropHandler([DragAndDrop.InspectorDropHandler](DragAndDrop.InspectorDropHandler.html) handler);






### Parameters



| Parameter | Description |
| --- | --- |
| handler | Function to handle drop on the corresponding window. |





### Description



Allow override of the default behavior for the corresponding window. Multiple handlers can be registered on the same window. If a handler returns [DragAndDropVisualMode.None](DragAndDropVisualMode.None.html) the system will check the next handler. Any other results ([DragAndDropVisualMode.Rejected](DragAndDropVisualMode.Rejected.html) or others [DragAndDropVisualMode](DragAndDropVisualMode.html)) means this handler has processed the drop event and no other handler will be called. The last handler is the default Unity handler.


              


```
using UnityEditor;
using UnityEngine;
using System;static class DragDropSample
{
    static DragAndDropVisualMode ProjectHandler(int id, string path, bool perform)
    {
        if (perform)
            Debug.Log($"Dropped upon {path} {id}");
        else
            Debug.Log($"Dragging upon {path} {id}");
        return DragAndDropVisualMode.Move;
    }    public static void AddDragProjectHandler()
    {
        // Add the handler
        DragAndDrop.AddDropHandler(ProjectHandler);
    }    public static void RemoveProjectHandler()
    {
        // Remove the handler
        DragAndDrop.RemoveDropHandler(ProjectHandler);
    }
}
```


            
