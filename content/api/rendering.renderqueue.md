This version of Unity is unsupported.



# RenderQueue





enumeration


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



The order in which Unity renders objects.





This enum represents the start of each range of render queue values. The [render queue value of a material](Material-renderQueue.html) is an integer in the range [0;5000], which determines the order in which Unity renders the object. Unity renders materials with lower render queue values earlier than materials with higher values.

The total range of render queue values is divided into sections, and each section is represented as an element in this enum. Use the render queue section that matches the object type. For example, opaque geometry should be in the `Geometry` queue, while transparent geometry should be in the `Transparent` queue. This ensures that Unity renders transparent objects after opaque objects.

Objects using a render queue value in the range [0; 2500] are sorted during rendering based on [Camera.opaqueSortMode](Camera-opaqueSortMode.html) (typically front-to-back order), while objects using a render queue value in the range [2501; 5000] are sorted based on [Camera.transparencySortMode](Camera-transparencySortMode.html) (typically back-to-front). This behavior ensures that Unity renders opaque objects performantly and renders transparent objects without sorting artifacts.

Additional resources: [Material.renderQueue](Material-renderQueue.html), [Shader.renderQueue](Shader-renderQueue.html).


              


```
// To use this script, attach it to a GameObject with a mesh renderer.using UnityEngine;
using UnityEngine.Rendering;// This example sets the render queue value of an object based on settings selected in the Inspector.
// The queue setting selects the base render queue and queueOffset adds a small offset to it.[RequireComponent(typeof(MeshRenderer))]
public class RenderQueueAssigner : MonoBehaviour
{
    public RenderQueue queue = RenderQueue.Geometry; // Base queue
    [Range(-20, 20)] public int queueOffset = 0; // Small offset to control order of objects on the same queue    private Material material;    private void Start()
    {
        material = GetComponent<Renderer>().material;
    }    void Update()
    {
        material.renderQueue = (int)queue + queueOffset;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| Background | This render queue is rendered before any others. This value corresponds to a render queue of 1000. |
| Geometry | Opaque geometry uses this queue. This value corresponds to a render queue of 2000. |
| AlphaTest | Alpha tested geometry uses this queue. This value corresponds to a render queue of 2450. |
| GeometryLast | The last render queue that is treated as opaque. This value corresponds to a render queue of 2500. |
| Transparent | This render queue is rendered after Geometry and AlphaTest, in back-to-front order. This value corresponds to a render queue of 3000. |
| Overlay | This render queue is meant for overlay effects, and is rendered last. This value corresponds to a render queue of 4000. |


            
