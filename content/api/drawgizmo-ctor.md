This version of Unity is unsupported.



# DrawGizmo Constructor




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

public DrawGizmo([GizmoType](GizmoType.html) gizmo);






### Parameters



| Parameter | Description |
| --- | --- |
| gizmo | Flags to denote when the gizmo should be drawn. |





### Description



Defines when the gizmo should be invoked for drawing.





Additional resources: [GizmoType](GizmoType.html), [DrawGizmo](DrawGizmo.html).


              


```
using UnityEngine;
using UnityEditor;// Draw an image above the light when the light is not selected
// The icon has to be stored in Assets/Gizmospublic class ExampleScript : MonoBehaviour
{
    // Draw an image above the light when the light is not selected
    [DrawGizmo(GizmoType.NotInSelectionHierarchy | GizmoType.Pickable)]
    static void drawGizmo1(Light light, GizmoType gizmoType)
    {
        Vector3 position = light.transform.position;        Gizmos.DrawIcon(position + Vector3.up, "ninja.jpg");
    }    // Place a red sphere around a selected light.
    // Surround the sphere dark shaded when not selected.
    [DrawGizmo(GizmoType.Selected | GizmoType.NonSelected)]
    static void drawGizmo2(Light light, GizmoType gizmoType)
    {
        Vector3 position = light.transform.position;        if ((gizmoType & GizmoType.Selected) != 0)
        {
            Gizmos.color = Color.red;
        }
        else
        {
            Gizmos.color = Color.red * 0.5f;
        }
        Gizmos.DrawSphere(position , 1);
    }
}
```




---








## Declaration

public DrawGizmo([GizmoType](GizmoType.html) gizmo,
Type drawnGizmoType);






### Parameters



| Parameter | Description |
| --- | --- |
| gizmo | Flags to denote when the gizmo should be drawn. |
| drawnGizmoType | Type of object for which the gizmo should be drawn. |





### Description



Same as above. `drawnGizmoType` determines of what type the object we are drawing the gizmo of has to be.





If drawnGizmoType is null, the type will be determined from the first parameter of the draw gizmo method.
        If drawnGizmoType is not null, it must be the same type as, or a subtype of, the type of the first parameter.


            
