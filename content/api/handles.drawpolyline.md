This version of Unity is unsupported.



# [Handles](Handles.html).DrawPolyLine




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

public static void DrawPolyLine(params Vector3[] points);






### Description



Draw a line going through the list of `points`.





**Note:** Use [HandleUtility.GetHandleSize](HandleUtility.GetHandleSize.html) where you might want to have constant screen-sized handles.

[Image: image]

*PolyLine that connects all the objects in the Scene View.*


              


```
// Draw lines between selected GameObjects.using UnityEditor;
using UnityEngine;
using System.Collections;[CustomEditor(typeof(DrawPolyLineExample))]
public class PolyLineDraw : Editor
{
    private Vector3[] positions;    void OnSceneGUI()
    {
        DrawPolyLineExample connectedObjects = target as DrawPolyLineExample;
        if (connectedObjects.objs == null)
        {
            return;
        }        if (connectedObjects.objs.Length > 0)
        {
            positions = new Vector3[connectedObjects.objs.Length];
        }        for (var i = 0; i < connectedObjects.objs.Length; i++)
        {
            if (connectedObjects.objs[i])
            {
                positions[i] = connectedObjects.objs[i].transform.position;
            }
            else
            {
                positions[i] = Vector3.zero;
            }
        }        Handles.DrawPolyLine(positions);
    }
}
```





And the script attached to this handle:


              


```
using UnityEngine;public class DrawPolyLineExample : MonoBehaviour
{
    public GameObject[] objs;
}
```


            
