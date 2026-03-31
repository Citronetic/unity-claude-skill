This version of Unity is unsupported.



# [Handles](Handles.html).RotationHandle




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

public static [Quaternion](Quaternion.html) RotationHandle([Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) position);






## Declaration

public static [Quaternion](Quaternion.html) RotationHandle([Handles.RotationHandleIds](Handles.RotationHandleIds.html) ids,
[Quaternion](Quaternion.html) rotation,
[Vector3](Vector3.html) position);






### Parameters



| Parameter | Description |
| --- | --- |
| rotation | The orientation of the handle in 3D space. |
| position | The center of the handle in 3D space. |
| ids | The control IDs of the handles. Use RotationHandleIds.default. |





### Returns



**Quaternion**
        The new rotation value modified by the user's interaction with the handle. If the user has not moved the handle, it will return the same value as you passed into the function.





### Description



Make a Scene view rotation handle.





This will behave like the built-in rotation tool in Unity.
**Note:** Use [HandleUtility.GetHandleSize](HandleUtility.GetHandleSize.html) where you might want to have constant screen-sized handles.

[Image: image]

*Rotate the attached object from the Rotation Handle.*


              


```
// Name this script "RotateAtPointEditor"
using UnityEngine;
using UnityEditor;[CustomEditor(typeof(RotateAtPoint))]
[CanEditMultipleObjects]
public class RotateAtPointEditor : Editor
{
    public void OnSceneGUI()
    {
        RotateAtPoint t = (target as RotateAtPoint);        EditorGUI.BeginChangeCheck();
        Quaternion rot = Handles.RotationHandle(t.rot, Vector3.zero);
        if (EditorGUI.EndChangeCheck())
        {
            Undo.RecordObject(target, "Rotated RotateAt Point");
            t.rot = rot;
            t.Update();
        }
    }
}
```





And the script attached to this GameObject:


              


```
// Name this script "RotateAtPoint"
using UnityEngine;[ExecuteInEditMode]
public class RotateAtPoint : MonoBehaviour
{
    public Quaternion rot = Quaternion.identity;
    public void Update()
    {
        transform.rotation = rot;
    }
}
```


            
