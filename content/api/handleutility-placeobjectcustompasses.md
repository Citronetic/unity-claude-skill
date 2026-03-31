This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).placeObjectCustomPasses




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



Subscribe to this event to handle object placement in the [SceneView](SceneView.html).





This delegate is invoked by [PlaceObject](HandleUtility.PlaceObject.html) when drag and dropping objects from the Hierarchy and Project views.


              


```
using UnityEditor;
using UnityEngine;static class PlaceObjectExample
{
    static readonly Plane s_GroundPlane = new Plane(Vector3.up, Vector3.zero);    [InitializeOnLoadMethod]
    static void InitPlaceObjectHandler()
    {
        HandleUtility.placeObjectCustomPasses += PlaneRaycast;
    }    // In this example, we register a plane at the scene origin to test for object placement.
    static bool PlaneRaycast(Vector2 mousePosition, out Vector3 position, out Vector3 normal)
    {
        Ray worldRay = HandleUtility.GUIPointToWorldRay(mousePosition);
        float distance;        if (s_GroundPlane.Raycast(worldRay, out distance))
        {
            position = worldRay.GetPoint(distance);
            normal = s_GroundPlane.normal;
            return true;
        }        position = Vector3.zero;
        normal = Vector3.up;
        return false;
    }
}
```


            
