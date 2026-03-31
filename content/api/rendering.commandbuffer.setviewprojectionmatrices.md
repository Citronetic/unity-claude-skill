This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetViewProjectionMatrices




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

public void SetViewProjectionMatrices([Matrix4x4](Matrix4x4.html) view,
[Matrix4x4](Matrix4x4.html) proj);






### Parameters



| Parameter | Description |
| --- | --- |
| view | View (world to camera space) matrix. |
| proj | Projection (camera to clip space) matrix. |





### Description



Add a command to set the view and projection matrices.





This function is equivalent to calling [SetViewMatrix](Rendering.CommandBuffer.SetViewMatrix.html) and [SetProjectionMatrix](Rendering.CommandBuffer.SetProjectionMatrix.html). It is slightly more efficient when changing both matrices at once.

This function is compatible with the Built-in Render Pipeline. It is not compatible with the Universal Render Pipeline (URP), the High Definition Render Pipeline (HDRP), or custom Scriptable Render Pipelines.

Note: The camera space in Unity matches OpenGL convention, so the negative z-axis is the camera's forward. This
is different from usual Unity convention, where the camera's forward is the positive z-axis. If you are
manually creating the view matrix, for example with an inverse of [Matrix4x4.LookAt](Matrix4x4.LookAt.html), you need to scale
it by -1 along the z-axis to get a proper view matrix.


              


```
using UnityEngine;
using UnityEngine.Rendering;// Attach this script to a Camera and pick a mesh to render.
// When entering Play mode, this will render a green mesh at
// origin position, via a command buffer.
[RequireComponent(typeof(Camera))]
public class ExampleScript : MonoBehaviour
{
    public Mesh mesh;    void Start()
    {
        var material = new Material(Shader.Find("Hidden/Internal-Colored"));
        material.SetColor("_Color", Color.green);        var tr = transform;
        var camera = GetComponent<Camera>();        // Code below does the same as what camera.worldToCameraMatrix would do. Doing
        // it "manually" here to illustrate how a view matrix is constructed.
        //
        // Matrix that looks from camera's position, along the forward axis.
        var lookMatrix = Matrix4x4.LookAt(tr.position, tr.position + tr.forward, tr.up);
        // Matrix that mirrors along Z axis, to match the camera space convention.
        var scaleMatrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, new Vector3(1, 1, -1));
        // Final view matrix is inverse of the LookAt matrix, and then mirrored along Z.
        var viewMatrix = scaleMatrix * lookMatrix.inverse;        var buffer = new CommandBuffer();
        buffer.SetViewProjectionMatrices(viewMatrix, camera.projectionMatrix);
        buffer.DrawMesh(mesh, Matrix4x4.identity, material);        camera.AddCommandBuffer(CameraEvent.BeforeSkybox, buffer);
    }
}
```





Additional resources: [SetViewMatrix](Rendering.CommandBuffer.SetViewMatrix.html), [SetProjectionMatrix](Rendering.CommandBuffer.SetProjectionMatrix.html), [Camera.projectionMatrix](Camera-projectionMatrix.html), [Matrix4x4.LookAt](Matrix4x4.LookAt.html), [Matrix4x4.Perspective](Matrix4x4.Perspective.html).


            
