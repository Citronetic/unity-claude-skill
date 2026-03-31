This version of Unity is unsupported.



# [Renderer](Renderer.html).localBounds




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












                    public [Bounds](Bounds.html) localBounds;






### Description



The bounding box of the renderer in local space.





This is the axis-aligned bounding box fully enclosing the object in local space.

For a [SkinnedMeshRenderer](SkinnedMeshRenderer.html), default local bounds are precomputed based on animations associated with that model,
which means that the bounding box might be much bigger than the mesh itself.
When [SkinnedMeshRenderer.updateWhenOffscreen](SkinnedMeshRenderer-updateWhenOffscreen.html) is enabled, Unity recomputes the local bounds every frame.

You can override the default bounding box by setting your own local space bounding box. This is mostly useful when the
renderer uses a shader that does custom vertex deformations, and the default bounding box is not accurate.
Use [ResetLocalBounds](Renderer.ResetLocalBounds.html) to remove custom bounds override. Note that the custom
local bounds value is not saved into scenes or prefabs and has to be set from a script at runtime.


              


```
using UnityEngine;public class DrawRendererBounds : MonoBehaviour
{
    // Draws a wireframe box around the selected object,
    // indicating local space bounding volume.
    public void OnDrawGizmosSelected()
    {
        var r = GetComponent<Renderer>();
        if (r == null)
            return;
        var bounds = r.localBounds;
        Gizmos.matrix = transform.localToWorldMatrix;
        Gizmos.color = Color.blue;
        Gizmos.DrawWireCube(bounds.center, bounds.extents * 2);
    }
}
```





Additional resources: [ResetLocalBounds](Renderer.ResetLocalBounds.html), [bounds](Renderer-bounds.html), [Bounds](Bounds.html).


            
