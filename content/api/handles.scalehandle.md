This version of Unity is unsupported.



# [Handles](Handles.html).ScaleHandle




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

public static [Vector3](Vector3.html) ScaleHandle([Vector3](Vector3.html) scale,
[Vector3](Vector3.html) position,
[Quaternion](Quaternion.html) rotation,
float size);






### Parameters



| Parameter | Description |
| --- | --- |
| scale | Scale to modify. |
| position | The position of the handle. |
| rotation | The rotation of the handle. |
| size | Allows you to scale the size of the handle on-screen. |





### Returns



**Vector3**
        The new value modified by the user's interaction with the handle. If the user has not moved the handle, it will return the same value as you passed into the function.





### Description



Make a Scene view scale handle.





This will behave like the built-in scale tool

**Note:** Use [HandleUtility.GetHandleSize](HandleUtility.GetHandleSize.html) where you might want to have constant screen-sized handles.

[Image: image]

*Scale handle that will appear whenever you select the GameObject.*


              


```
// Name this script "ScaleAtPointEditor"
using UnityEngine;
using UnityEditor;[CustomEditor(typeof(ScaleAtPoint))]
[CanEditMultipleObjects]
public class ScaleAtPointEditor : Editor
{
    public void OnSceneGUI()
    {
        ScaleAtPoint t = (target as ScaleAtPoint);        EditorGUI.BeginChangeCheck();
        Vector3 scale = Handles.ScaleHandle(t.scale, Vector3.zero, Quaternion.identity, 1);
        if (EditorGUI.EndChangeCheck())
        {
            Undo.RecordObject(target, "Scaled ScaleAt Point");
            t.scale = scale;
            t.Update();
        }
    }
}
```





And the script Attached to this GameObject:


              


```
// Name this script "ScaleAtPoint"
using UnityEngine;
[ExecuteInEditMode]
public class ScaleAtPoint : MonoBehaviour
{
    public Vector3 scale = Vector3.one;
    public void Update()
    {
        transform.localScale = scale;
    }
}
```


            
