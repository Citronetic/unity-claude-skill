This version of Unity is unsupported.



# [RaycastHit](RaycastHit.html).textureCoord




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












                    public [Vector2](Vector2.html) textureCoord;






### Description



The uv texture coordinate at the collision location.





A ray is fired into the Scene.  The `textureCoord` is the location where the ray
    has hit a collider.  `RaycastHit._textureCoord` is a texture coordinate when
    a hit occurs.  A [Vector2](Vector2.html) zero is returned if no mesh collider is present in
    the `GameObject`. This property can be accessed off the main thread.

**Note:** A [textureCoord](RaycastHit-textureCoord.html) requires the collider to be a [MeshCollider](MeshCollider.html).


              


```
// Write black pixels onto the GameObject that is located
// by the script. The script is attached to the camera.
// Determine where the collider hits and modify the texture at that point.
//
// Note that the MeshCollider on the GameObject must have Convex turned off. This allows
// concave GameObjects to be included in collision in this example.
//
// Also to allow the texture to be updated by mouse button clicks it must have the Read/Write
// Enabled option set to true in its Advanced import settings.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public Camera cam;    void Start()
    {
        cam = GetComponent<Camera>();
    }    void Update()
    {
        if (!Input.GetMouseButton(0))
            return;        RaycastHit hit;
        if (!Physics.Raycast(cam.ScreenPointToRay(Input.mousePosition), out hit))
            return;        Renderer rend = hit.transform.GetComponent<Renderer>();
        MeshCollider meshCollider = hit.collider as MeshCollider;        if (rend == null || rend.sharedMaterial == null || rend.sharedMaterial.mainTexture == null || meshCollider == null)
            return;        Texture2D tex = rend.material.mainTexture as Texture2D;
        Vector2 pixelUV = hit.textureCoord;
        pixelUV.x *= tex.width;
        pixelUV.y *= tex.height;        tex.SetPixel((int)pixelUV.x, (int)pixelUV.y, Color.black);
        tex.Apply();
    }
}
```





Additional resources: [Physics.Raycast](Physics.Raycast.html), [Physics.Linecast](Physics.Linecast.html), [Physics.RaycastAll](Physics.RaycastAll.html).


            
