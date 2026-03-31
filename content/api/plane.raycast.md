This version of Unity is unsupported.



# [Plane](Plane.html).Raycast




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

public bool Raycast([Ray](Ray.html) ray,
out float enter);






### Description



Intersects a ray with the plane.





This function sets `enter` to the distance along the ray, where it intersects the plane.
If the ray is parallel to the plane, function returns `false` and sets `enter` to zero.
If the ray is pointing in the opposite direction than the plane, function returns `false` and sets `enter` to the distance along the ray (negative value).


              


```
//This script detects mouse clicks on a plane using Plane.Raycast.
//In this example, the plane is set to the Camera's x and y position, but you can set the z position so the plane is in front of your Camera.
//The normal of the plane is set to facing forward so it is facing the Camera, but you can change this to suit your own needs.//In your GameObject's Inspector, set your clickable distance and attach a cube GameObject in the appropriate fieldsusing UnityEngine;public class PlaneRayExample : MonoBehaviour
{
    //Attach a cube GameObject in the Inspector before entering Play Mode
    public GameObject m_Cube;    //This is the distance the clickable plane is from the camera. Set it in the Inspector before running.
    public float m_DistanceZ;    Plane m_Plane;
    Vector3 m_DistanceFromCamera;    void Start()
    {
        //This is how far away from the Camera the plane is placed
        m_DistanceFromCamera = new Vector3(Camera.main.transform.position.x, Camera.main.transform.position.y, Camera.main.transform.position.z - m_DistanceZ);        //Create a new plane with normal (0,0,1) at the position away from the camera you define in the Inspector. This is the plane that you can click so make sure it is reachable.
        m_Plane = new Plane(Vector3.forward, m_DistanceFromCamera);
    }    void Update()
    {
        //Detect when there is a mouse click
        if (Input.GetMouseButton(0))
        {
            //Create a ray from the Mouse click position
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);            //Initialise the enter variable
            float enter = 0.0f;            if (m_Plane.Raycast(ray, out enter))
            {
                //Get the point that is clicked
                Vector3 hitPoint = ray.GetPoint(enter);                //Move your cube GameObject to the point where you clicked
                m_Cube.transform.position = hitPoint;
            }
        }
    }
}
```





Additional resources: [Physics.Raycast](Physics.Raycast.html).


            
