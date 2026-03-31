This version of Unity is unsupported.



# [Handles](Handles.html).FreeRotateHandle




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

public static [Quaternion](Quaternion.html) FreeRotateHandle(int id,
[Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) position,
float size);






## Declaration

public static [Quaternion](Quaternion.html) FreeRotateHandle([Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) position,
float size);






### Parameters



| Parameter | Description |
| --- | --- |
| id | The control ID of the handle. |
| rotation | The orientation of the handle in 3D space. |
| position | The center of the handle in 3D space. |
| size | The size of the handle.Note: Use HandleUtility.GetHandleSize where you might want to have constant screen-sized handles. |





### Returns



**Quaternion**
        The new rotation value modified by the user's interaction with the handle. If the user has not moved the handle, it will return the same value as you passed into the function.





### Description



Make an unconstrained rotation handle.





The handle can rotate freely on all axes. The rotation gizmo has no visible axes and is simply a circle in the Scene view. Users can click and drag from within the circle to provide input rotation to your editor script.

[Image: image]

*FreeRotate handle seen in the Scene View.*


              


```
// Name this script "FreeRotateEditor"
using UnityEngine;
using UnityEditor;[CustomEditor(typeof(FreeRotate))]
[CanEditMultipleObjects]
public class FreeRotateEditor : Editor
{
    public void OnSceneGUI()
    {
        FreeRotate t = (target as FreeRotate);        EditorGUI.BeginChangeCheck();
        Quaternion rot = Handles.FreeRotateHandle(t.rot, Vector3.zero, 2);
        if (EditorGUI.EndChangeCheck())
        {
            Undo.RecordObject(target, "Free Rotate");
            t.rot = rot;
            t.Update();
        }
    }
}
```





And the script attached to this Handle:


              


```
// Name this script "FreeRotate"
using UnityEngine;[ExecuteInEditMode]
public class FreeRotate : MonoBehaviour
{
    public Quaternion rot = Quaternion.identity;
    public void Update()
    {
        transform.rotation = rot;
    }
}
```


            
