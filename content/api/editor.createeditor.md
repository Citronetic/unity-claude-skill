This version of Unity is unsupported.



# [Editor](Editor.html).CreateEditor




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

public static [Editor](Editor.html) CreateEditor([Object](Object.html) targetObject,
Type editorType = null);






## Declaration

public static [Editor](Editor.html) CreateEditor(Object[] targetObjects,
Type editorType = null);






### Parameters



| Parameter | Description |
| --- | --- |
| objects | All objects must be of the same type. |





### Description



Make a custom editor for `targetObject` or `targetObjects`.





By default, an appropriate editor with a matching CustomEditor attribute is created.
                    If an editorType is specified, an editor of that type is created instead.
                    Use this if you have created multiple custom editors, and each editor shows different properties of the object.
                    Returns NULL if `objects` are of different types or if no approprate editor was found. Editors created using this function have to be destroyed explicitly, using either [Object.Destroy](Object.Destroy.html) or [Object.DestroyImmediate](Object.DestroyImmediate.html).

                    Consider a script WaypointPathEditor for editing  the Transforms of a wayPoint array.


              


```
using UnityEditor;
using UnityEngine;
using System.Collections;
[CustomEditor(typeof(WaypointPath))]
public class WaypointPathEditor : Editor
{
    Editor currentTransformEditor;
    Transform selectedTransform;
    string[] optionsList;
    int index = 0;
    WaypointPath myWayPath;    void GetWaypoints()
    {
        myWayPath = target as WaypointPath;        if (myWayPath.wayPointArray != null)
        {
            optionsList = new string[myWayPath.wayPointArray.Length];            for (int i = 0; i < optionsList.Length; i++)
            {
                Transform wayPoint = myWayPath.wayPointArray[i];                if (wayPoint != null)
                    optionsList[i] = wayPoint.name;
                else
                    optionsList[i] = $"Empty waypoint {(i + 1)}";
            }
        }
    }    public override void OnInspectorGUI()
    {
        GetWaypoints ();
        DrawDefaultInspector ();
        EditorGUILayout.Space ();
        EditorGUI.BeginChangeCheck ();        if (optionsList != null)
            index = EditorGUILayout.Popup ("Select Waypoint", index, optionsList);        if (EditorGUI.EndChangeCheck())
        {
            Editor tmpEditor = null;            if (index < myWayPath.wayPointArray.Length)
            {
                selectedTransform = myWayPath.wayPointArray[index];                //Creates an Editor for selected Component from a Popup
                tmpEditor = Editor.CreateEditor(selectedTransform);
            } else {
                selectedTransform = null;
            }            // If there isn't a Transform currently selected then destroy the existing editor
            if (currentTransformEditor != null)
            {
                DestroyImmediate (currentTransformEditor);
            }            currentTransformEditor = tmpEditor;
        }        // Shows the created Editor beneath CustomEditor
        if (currentTransformEditor != null && selectedTransform != null)
        {
            currentTransformEditor.OnInspectorGUI ();
        }
    }
}
```





The script attached to a waypath GameObject:


              


```
using UnityEngine;
using System.Collections;// Note: this is not an editor script.
public class WaypointPath : MonoBehaviour
{
    public Transform[] wayPointArray;
}
```


            
