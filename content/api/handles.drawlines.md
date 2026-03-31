This version of Unity is unsupported.



# [Handles](Handles.html).DrawLines




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

public static void DrawLines(Vector3[] lineSegments);






### Parameters



| Parameter | Description |
| --- | --- |
| lineSegments | A list of pairs of points that represent the start and end of line segments. |





### Description



Draw a list of line segments.





[Image: image]
"Draw multiple lines in sceneview.".

Below is an example of an Editor script that draws lines in SceneView to GameObjects listed in a script.


              


```
// Draw lines to the connected game objects that a script has.
// if the target object doesn't have any game objects attached
// then it draws a line from the object to 0,0,0.using UnityEditor;
using UnityEngine;
using System.Collections.Generic;[CustomEditor(typeof(ConnectedObjects))]
class ConnectLineHandle : Editor
{
    void OnSceneGUI()
    {
        ConnectedObjects connectedObjects = target as ConnectedObjects;
        if (connectedObjects.objs == null ||
            connectedObjects.objs.Length == 0)
            return;
        // we store the start and end points of the line segments in this array
        Vector3[] lineSegments = new Vector3[connectedObjects.objs.Length * 2];        int lastObject = connectedObjects.objs.Length - 1;
        Vector3 prevPoint;
        if (connectedObjects.objs[lastObject])
        {
            prevPoint = connectedObjects.objs[lastObject].transform.position;
        }
        else
        {
            prevPoint = Vector3.zero;
        }
        int pointIndex = 0;
        for (int currObjectIndex = 0; currObjectIndex < connectedObjects.objs.Length; currObjectIndex++)
        {
            // find the position of our connected object and store it
            Vector3 currPoint;
            if (connectedObjects.objs[currObjectIndex])
            {
                currPoint = connectedObjects.objs[currObjectIndex].transform.position;
            }
            else
            {
                currPoint = Vector3.zero;
            }            // store the starting point of the line segment
            lineSegments[pointIndex] = prevPoint;
            pointIndex++;            // store the ending point of the line segment
            lineSegments[pointIndex] = currPoint;
            pointIndex++;            prevPoint = currPoint;
        }
        Handles.DrawLines(lineSegments);
    }
}
```





Example script to attach to a GameObject that will act as a handle:


              


```
using UnityEngine;
using System.Collections;public class ConnectedObjects : MonoBehaviour
{
    public GameObject[] objs = null;
}
```




---








## Declaration

public static void DrawLines(Vector3[] points,
int[] segmentIndices);






### Parameters



| Parameter | Description |
| --- | --- |
| points | A list of points. |
| segmentIndices | A list of pairs of indices to the start and end points of the line segments. |





### Description



Draw a list of indexed line segments.


              


```
// Draw lines to the connected game objects that a script has.
// if the target object doesn't have any game objects attached
// then it draws a line from the object to 0,0,0.using UnityEditor;
using UnityEngine;
using System.Collections.Generic;[CustomEditor(typeof(ConnectedLinePointsObjects))]
class ConnectLinePointsHandle : Editor
{
    void OnSceneGUI()
    {
        ConnectedLinePointsObjects connectedObjects = target as ConnectedLinePointsObjects;
        if (connectedObjects.objs == null ||
            connectedObjects.objs.Length == 0)
            return;        // we store the points of the line segments in this array
        Vector3[] points = new Vector3[connectedObjects.objs.Length];        // for each line segment we need two indices into the points array:
        // the index to the start and the end point
        int[] segmentIndices = new int[connectedObjects.objs.Length * 2];        // create the points and line segments indices
        int prevIndex = connectedObjects.objs.Length - 1;
        int pointIndex = 0;
        int segmentIndex = 0;
        for (int currIndex = 0; currIndex < connectedObjects.objs.Length; currIndex++)
        {
            // find the position of our connected object and store it
            if (connectedObjects.objs[pointIndex])
            {
                points[pointIndex] = connectedObjects.objs[currIndex].transform.position;
            }
            else
            {
                points[pointIndex] = Vector3.zero;
            }            // the index to the start of the line segment
            segmentIndices[segmentIndex] = prevIndex;
            segmentIndex++;            // the index to the end of the line segment
            segmentIndices[segmentIndex] = pointIndex;
            segmentIndex++;            pointIndex++;
            prevIndex = currIndex;
        }
        Handles.DrawLines(points, segmentIndices);
    }
}
```





And the script attached to this Handle:


              


```
using UnityEngine;using System.Collections;
public class ConnectedLinePointsObjects : MonoBehaviour
{
    public GameObject[] objs = null;
}
```


            
