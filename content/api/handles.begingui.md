This version of Unity is unsupported.



# [Handles](Handles.html).BeginGUI




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

public static void BeginGUI();






### Description



Begin a 2D GUI block inside the 3D handle GUI.





The start of a [GUILayout](GUILayout.html) sequence of function calls.
                    As expected the [EndGUI](Handles.EndGUI.html) is used to close these.

Additional resources: [Handles.EndGUI](Handles.EndGUI.html).

[Image: image]

*GUI in the Scene View.*


              


```
// Change the transform values for the selected object.
// When selected this script starts and the handleExample is managed.
// The HandlesGUI.BeginGUI() and EndGUI() functions allow the shieldArea
// to be changed back to five, which is the starting value.using UnityEditor;
using UnityEngine;[CustomEditor(typeof(HandleExample))]
class HandleExampleEditor : Editor
{
    protected virtual void OnSceneGUI()
    {
        HandleExample handleExample = (HandleExample)target;        if (handleExample == null)
        {
            return;
        }        Handles.color = Color.yellow;        GUIStyle style = new GUIStyle();
        style.normal.textColor = Color.green;        Vector3 position = handleExample.transform.position + Vector3.up * 2f;
        string posString = position.ToString();        Handles.Label(position,
            posString + "\nShieldArea: " +
            handleExample.shieldArea.ToString(),
            style
        );        Handles.BeginGUI();
        if (GUILayout.Button("Reset Area", GUILayout.Width(100)))
        {
            handleExample.shieldArea = 5;
        }
        Handles.EndGUI();        Handles.DrawWireArc(
            handleExample.transform.position,
            handleExample.transform.up,
            -handleExample.transform.right,
            180,
            handleExample.shieldArea);        handleExample.shieldArea =
            Handles.ScaleValueHandle(handleExample.shieldArea,
                handleExample.transform.position + handleExample.transform.forward * handleExample.shieldArea,
                handleExample.transform.rotation,
                1, Handles.ConeHandleCap, 1);
    }
}
```





Add a script that specifies the object that can be animated
                in the SceneView.


              


```
using UnityEngine;[ExecuteInEditMode]
public class HandleExample : MonoBehaviour
{
    public float shieldArea = 5.0f;
}
```


            
