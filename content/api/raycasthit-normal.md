This version of Unity is unsupported.



# [RaycastHit](RaycastHit.html).normal




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












                    public [Vector3](Vector3.html) normal;






### Description



The normal of the surface the ray hit.





The normal of the surface the ray hit on the collider where the ray intersects, which may or may not match the original mesh surface depending on the collider type and settings.

                    For primitive colliders such as BoxCollider or SphereCollider, the normal is calculated based on their simple geometric shape. For MeshCollider, if convex is set to false (non-convex), Unity can return the actual interpolated normal from the mesh surface at the hit point. If convex is true, the normal is instead approximated from the convex hull of the mesh.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Calculate the reflection of a "laser beam" off a clicked object.    // The object from which the beam is fired. The incoming beam will
    // not be visible if the camera is used for this!
    Transform gunObj;    void Start()
    {
        gunObj = this.GetComponent<Transform>();
    }

    void Update()
    {
        if (Input.GetMouseButton(0))
        {
            RaycastHit hit;
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);            if (Physics.Raycast(ray, out hit))
            {
                // Find the line from the gun to the point that was clicked.
                Vector3 incomingVec = hit.point - gunObj.position;                // Use the point's normal to calculate the reflection vector.
                Vector3 reflectVec = Vector3.Reflect(incomingVec, hit.normal);                // Draw lines to show the incoming "beam" and the reflection.
                Debug.DrawLine(gunObj.position, hit.point, Color.red);
                Debug.DrawRay(hit.point, reflectVec, Color.green);
            }
        }
    }
}
```





Additional resources: [Physics.Raycast](Physics.Raycast.html), [Physics.Linecast](Physics.Linecast.html), [Physics.RaycastAll](Physics.RaycastAll.html).


            
