This version of Unity is unsupported.



# [Handles](Handles.html).DrawDottedLine




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

public static void DrawDottedLine([Vector3](Vector3.html) p1,
[Vector3](Vector3.html) p2,
float screenSpaceSize);






### Parameters



| Parameter | Description |
| --- | --- |
| p1 | The start point. |
| p2 | The end point. |
| screenSpaceSize | The size in pixels for the lengths of the line segments and the gaps between them. |





### Description



Draw a dotted line from **p1** to **p2**.





[Image: image]


*Draw Line in the Scene View.*


              


```
// Draw lines to the connected game objects that a script has.
// If the target object doesn't have any game objects attached
// then it draws a line from the object to (0, 0, 0).using UnityEditor;
using UnityEngine;[CustomEditor(typeof(ConnectedObjectsExample))]
class ConnectLineHandleExample : Editor
{
    float dashSize = 4.0f;
    void OnSceneGUI()
    {
        ConnectedObjectsExample connectedObjects = target as ConnectedObjectsExample;
        if (connectedObjects.objs == null)
            return;        Vector3 center = connectedObjects.transform.position;
        for (int i = 0; i < connectedObjects.objs.Length; i++)
        {
            GameObject connectedObject = connectedObjects.objs[i];
            if (connectedObject)
            {
                Handles.DrawDottedLine(center, connectedObject.transform.position, dashSize);
            }
            else
            {
                Handles.DrawDottedLine(center, Vector3.zero, dashSize);
            }
        }
    }
}
```





And the script attached to this Handle:


              


```
using UnityEngine;
using System.Collections;public class ConnectedObjectsExample : MonoBehaviour
{
    public GameObject[] objs = null;
}
```


            
