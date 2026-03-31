This version of Unity is unsupported.



# [RaycastHit](RaycastHit.html).textureCoord2




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












                    public [Vector2](Vector2.html) textureCoord2;






### Description



The secondary uv texture coordinate at the impact point.





This can be used for 3D texture painting or drawing bullet marks.
If the collider is not a mesh collider, [Vector2.zero](Vector2-zero.html) will be returned.
If the mesh contains no secondary uv set, the uv of the primary uv set will be returned. This property can be accessed off the main thread.

**Note:** A [textureCoord2](RaycastHit-textureCoord2.html) requires the collider to be a [MeshCollider](MeshCollider.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Attach this script to a camera and it will paint black pixels in 3D
    // on whatever the user clicks. Make sure the mesh you want to paint
    // on has a mesh collider attached.    Camera cam;    void Start()
    {
        cam = GetComponent<Camera>();
    }    void Update()
    {
        // Only when we press the mouse
        if (!Input.GetMouseButton(0))
        {
            return;
        }        // Only if we hit something, do we continue
        RaycastHit hit;
        if (!Physics.Raycast(cam.ScreenPointToRay(Input.mousePosition), out hit))
        {
            return;
        }        // Just in case, also make sure the collider also has a renderer
        // material and texture. Also we should ignore primitive colliders.
        Renderer rend = hit.transform.GetComponent<Renderer>();        MeshCollider meshCollider = hit.collider as MeshCollider;        if (rend == null || rend.sharedMaterial == null ||
            rend.sharedMaterial.mainTexture == null || meshCollider == null)
        {
            return;
        }        // Now draw a pixel where we hit the object
        Texture2D tex = rend.material.mainTexture as Texture2D;
        Vector2 pixelUV = hit.textureCoord2;
        pixelUV.x *= tex.width;
        pixelUV.y *= tex.height;        tex.SetPixel(Mathf.FloorToInt(pixelUV.x), Mathf.FloorToInt(pixelUV.y), Color.black);        tex.Apply();
    }
}
```


            
