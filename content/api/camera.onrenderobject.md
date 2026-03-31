This version of Unity is unsupported.



# [Camera](Camera.html).OnRenderObject()




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




                [Switch to Manual](../Manual/class-Camera.html)














### Description



OnRenderObject is called after camera has rendered the Scene.





This can be used to render your own objects using [Graphics.DrawMeshNow](Graphics.DrawMeshNow.html) or other functions.
This function is similar to [OnPostRender](Camera.OnPostRender.html), except OnRenderObject is called on any object
that has a script with the function; no matter if it's attached to a Camera or not.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Mesh mainMesh;
    Mesh miniMapMesh;    void OnRenderObject()
    {
        // Render different meshes for the object depending on whether
        // the main camera or minimap camera is viewing.
        if (Camera.current.name == "MiniMapcam")
        {
            Graphics.DrawMeshNow(miniMapMesh, transform.position, transform.rotation);
        }
        else
        {
            Graphics.DrawMeshNow(mainMesh, transform.position, transform.rotation);
        }
    }
}
```


            
