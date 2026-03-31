This version of Unity is unsupported.



# [Handles](Handles.html).Disc




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

public static [Quaternion](Quaternion.html) Disc(int id,
[Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) position,
[Vector3](Vector3.html) axis,
float size,
bool cutoffPlane,
float snap);






## Declaration

public static [Quaternion](Quaternion.html) Disc([Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) position,
[Vector3](Vector3.html) axis,
float size,
bool cutoffPlane,
float snap);






### Parameters



| Parameter | Description |
| --- | --- |
| id | The control ID of the handle. |
| rotation | The rotation of the disc. |
| position | The center of the disc. |
| axis | The axis to rotate around. |
| size | The size of the disc in world space. |
| cutoffPlane | If true, only the front-facing half of the circle is draw / draggable. This is useful when you have many overlapping rotation axes (like in the default rotate tool) to avoid clutter. |
| snap | The grid size to snap to. |





### Returns



**Quaternion**
        The new rotation value modified by the user's interaction with the handle. If the user has not moved the handle, it will return the same value as you passed into the function.





### Description



Make a 3D disc that can be dragged with the mouse.





**Note:** Use [HandleUtility.GetHandleSize](HandleUtility.GetHandleSize.html) where you might want to have constant screen-sized handles.

[Image: image]

*Disc Handle on the Scene View.*


              


```
// Name this script "DiscHandleEditor"
using UnityEngine;
using UnityEditor;[CustomEditor(typeof(DiscHandle))]
[CanEditMultipleObjects]
public class DiscHandleEditor : Editor
{
    public void OnSceneGUI()
    {
        DiscHandle t = (target as DiscHandle);        EditorGUI.BeginChangeCheck();
        Quaternion rot = Handles.Disc(t.rot, t.transform.position, new Vector3(1, 1, 0), 5, false, 1);        if (EditorGUI.EndChangeCheck())
        {
            Undo.RecordObject(target, "Disc Rotate");
            t.rot = rot;
            t.Update();
        }
    }
}
```





And the script attached to this Handle:


              


```
// Name this script "DiscHandle"
using UnityEngine;
[ExecuteInEditMode]
public class DiscHandle : MonoBehaviour
{
    public Quaternion rot = Quaternion.identity;
    public void Update()
    {
        transform.rotation = rot;
    }
}
```


            
