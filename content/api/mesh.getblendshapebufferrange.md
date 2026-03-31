This version of Unity is unsupported.



# [Mesh](Mesh.html).GetBlendShapeBufferRange




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




                [Switch to Manual](../Manual/class-Mesh.html)










## Declaration

public [BlendShapeBufferRange](BlendShapeBufferRange.html) GetBlendShapeBufferRange(int blendShapeIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| blendShapeIndex | Which blend shape to locate the data for. |





### Returns



**BlendShapeBufferRange**
        A struct that describes the start and end index of the data for the given blend shape.





### Description



Get the location of blend shape vertex data for a given blend shape.





When you call [Mesh.GetBlendShapeBuffer](Mesh.GetBlendShapeBuffer.html) with [BlendShapeBufferLayout.PerShape](Rendering.BlendShapeBufferLayout.PerShape.html), Unity returns a [GraphicsBuffer](GraphicsBuffer.html) that contains blend shape vertex data, ordered by blend shape.

When you call this function, Unity returns a [BlendShapeBufferRange](BlendShapeBufferRange.html) for the given blend shape. Use it to locate the data for that blend shape in the `GraphicsBuffer`.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class Example : MonoBehaviour
{
    public Mesh mesh;
    public ComputeShader computeShader;    void Start()
    {
        // Fetch GraphicsBuffer with Blend Shape data, ordered per shape, from the mesh
        var perShapeBuffer = mesh.GetBlendShapeBuffer(BlendShapeBufferLayout.PerShape);        // Iterate over all Blend Shapes in a mesh
        for(int blendShapeIndex = 0; blendShapeIndex  < mesh.blendShapeCount; ++blendShapeIndex)
        {
            // Fetch which indices in the buffer that are part of this Blend Shape
            var blendShapeRange = mesh.GetBlendShapeBufferRange(blendShapeIndex);            // Set the start and end indices of the Blend Shape in the compute shader
            computeShader.SetInt("_StartIndex", (int)blendShapeRange.startIndex);
            computeShader.SetInt("_EndIndex", (int)blendShapeRange.endIndex);            // Dispatch compute shader and access data between start and end index for this Blend Shape
            computeShader.Dispatch(0, 64, 1, 1);
        }        // Dispose of GraphicsBuffer to avoid leak memory
        perShapeBuffer.Dispose();
    }
}
```





Additional resources: UnityEngine.BlendShapeBufferRange, [Mesh.GetBlendShapeBuffer](Mesh.GetBlendShapeBuffer.html), [BlendShapeBufferLayout.PerShape](Rendering.BlendShapeBufferLayout.PerShape.html)


            
