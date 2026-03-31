This version of Unity is unsupported.



# [PrimitiveBoundsHandle](IMGUI.Controls.PrimitiveBoundsHandle.html).DrawHandle




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

public void DrawHandle();






### Description



A function to display this instance in the current handle camera using its current configuration.





Always write properties to the handle before calling this function. Place the calls to this function inside [EditorGUI.BeginChangeCheck](EditorGUI.BeginChangeCheck.html) and [EditorGUI.EndChangeCheck](EditorGUI.EndChangeCheck.html) to detect user interaction and read the updated properties from the handle.

The following component defines an object with a [Bounds](Bounds.html) property.


              


```
using UnityEngine;public class BoundsExample : MonoBehaviour
{
    public Bounds bounds { get { return m_Bounds; } set { m_Bounds = value; } }
    [SerializeField]
    private Bounds m_Bounds = new Bounds(Vector3.zero, Vector3.one);
}
```





The following Custom Editor allows the user to edit the bounds property for this component in the Scene view.


              


```
using UnityEditor;
using UnityEditor.IMGUI.Controls;
using UnityEngine;[CustomEditor(typeof(BoundsExample)), CanEditMultipleObjects]
public class BoundsExampleEditor : Editor
{
    private BoxBoundsHandle m_BoundsHandle = new BoxBoundsHandle();    // the OnSceneGUI callback uses the Scene view camera for drawing handles by default
    protected virtual void OnSceneGUI()
    {
        BoundsExample boundsExample = (BoundsExample)target;        // copy the target object's data to the handle
        m_BoundsHandle.center = boundsExample.bounds.center;
        m_BoundsHandle.size = boundsExample.bounds.size;        // draw the handle
        EditorGUI.BeginChangeCheck();
        m_BoundsHandle.DrawHandle();
        if (EditorGUI.EndChangeCheck())
        {
            // record the target object before setting new values so changes can be undone/redone
            Undo.RecordObject(boundsExample, "Change Bounds");            // copy the handle's updated data back to the target object
            Bounds newBounds = new Bounds();
            newBounds.center = m_BoundsHandle.center;
            newBounds.size = m_BoundsHandle.size;
            boundsExample.bounds = newBounds;
        }
    }
}
```





Additional resources: [Editor.OnSceneGUI](Editor.OnSceneGUI.html), [Handles.SetCamera](Handles.SetCamera.html).


            
