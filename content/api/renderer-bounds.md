This version of Unity is unsupported.



# [Renderer](Renderer.html).bounds




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












                    public [Bounds](Bounds.html) bounds;






### Description



The bounding box of the renderer in world space.





This is the axis-aligned bounding box fully enclosing the object in world space.

Using `bounds` is convenient to make rough approximations about the object's location
and its extents. For example, the `center` property is often a more precise
approximation to the center of the object than [Transform.position](Transform-position.html), especially if the object is not
symmetrical.

[Mesh.bounds](Mesh-bounds.html) and [localBounds](Renderer-localBounds.html) are similar but they return the bounds in local space.

You can override the default bounding box by setting your own world space bounding box. This is mostly useful when the
renderer uses a shader that does custom vertex deformations, and the default bounding box is not accurate.

When you set custom world bounds, the renderer bounding volume no longer automatically tracks Transform component changes. If there is a local space bounding volume override ([localBounds](Renderer-localBounds.html)) active at the same time, it is ignored and the custom
world space bounds are used. Use [ResetBounds](Renderer.ResetBounds.html) to remove the custom bounds override. Note that the custom
world bounds value is not saved into scenes or prefabs and has to be set from a script at runtime.


              


```
using UnityEngine;public class DrawRendererBounds : MonoBehaviour
{
    // Draws a wireframe box around the selected object,
    // indicating world space bounding volume.
    public void OnDrawGizmosSelected()
    {
        var r = GetComponent<Renderer>();
        if (r == null)
            return;
        var bounds = r.bounds;
        Gizmos.matrix = Matrix4x4.identity;
        Gizmos.color = Color.blue;
        Gizmos.DrawWireCube(bounds.center, bounds.extents * 2);
    }
}
```





Additional resources: [ResetBounds](Renderer.ResetBounds.html), [localBounds](Renderer-localBounds.html), [Bounds](Bounds.html), [Mesh.bounds](Mesh-bounds.html).


            
