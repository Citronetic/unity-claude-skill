This version of Unity is unsupported.



# DrawGizmo





class in
          UnityEditor


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



















### Description



The DrawGizmo attribute allows you to supply a gizmo renderer for any [Component](Component.html).





The renderer function must be static, and take two parameters: the object
        for which the gizmo is being drawn, and a [GizmoType](GizmoType.html) parameter which indicates the context in which the gizmo is being drawn.

        The renderer function can be defined in any class, including editor scripts. This
        allows you to keep your gizmo-drawing code out of your component scripts so that it
        is not included in builds.

Additional resources: [GizmoType](GizmoType.html).


              


```
using UnityEngine;
using UnityEditor;public class MyScript : MonoBehaviour
{
}// The icon has to be stored in Assets/Gizmospublic class MyScriptGizmoDrawer
{
    [DrawGizmo(GizmoType.Selected | GizmoType.Active)]
    static void DrawGizmoForMyScript(MyScript scr, GizmoType gizmoType)
    {
        Vector3 position = scr.transform.position;        if (Vector3.Distance(position, Camera.current.transform.position) > 10f)
            Gizmos.DrawIcon(position, "MyScript Gizmo.tiff");
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| DrawGizmo | Defines when the gizmo should be invoked for drawing. |


            
