This version of Unity is unsupported.



# [Camera](Camera.html).RenderToCubemap




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










## Declaration

public bool RenderToCubemap([Cubemap](Cubemap.html) cubemap);






## Declaration

public bool RenderToCubemap([Cubemap](Cubemap.html) cubemap,
int faceMask);






### Parameters



| Parameter | Description |
| --- | --- |
| cubemap | The cube map to render to. |
| faceMask | A bitmask which determines which of the six faces are rendered to. If not supplied, the mask is set to the value, 63, to render to all cube faces. |





### Returns



**bool**
        False if rendering fails, else true.





### Description



Render into a static cubemap from this camera.





This function is mostly useful in the editor for "baking" static cubemaps of your Scene. See
wizard example below. If you want a real-time-updated cubemap, use RenderToCubemap variant that uses
a RenderTexture with a cubemap dimension, see below.

Camera's position, clear flags and clipping plane distances will be used to
render into cubemap faces. `faceMask` is a bitfield indicating which cubemap faces should be rendered into. Each
bit that is set corresponds to a face. Bit numbers are integer values of [CubemapFace](CubemapFace.html) enum.
By default all six cubemap faces will be rendered (default value 63 has six lowest bits on).

This function will return `false` if rendering to cubemap fails. Some graphics hardware does not
support the functionality.

Note also that ReflectionProbes are a more advanced way of performing real-time reflections.  Cubemaps can be created in the editor by selecting the Create->Legacy option.

Additional resources: [Cubemap assets](../Manual/class-Cubemap.html), [Reflective shaders](../Manual/shader-ReflectiveFamily.html).


              


```
using UnityEngine;
using UnityEditor;
using System.Collections;public class RenderCubemapWizard : ScriptableWizard
{
    public Transform renderFromPosition;
    public Cubemap cubemap;    void OnWizardUpdate()
    {
        string helpString = "Select transform to render from and cubemap to render into";
        bool isValid = (renderFromPosition != null) && (cubemap != null);
    }    void OnWizardCreate()
    {
        // create temporary camera for rendering
        GameObject go = new GameObject("CubemapCamera");
        go.AddComponent<Camera>();
        // place it on the object
        go.transform.position = renderFromPosition.position;
        go.transform.rotation = Quaternion.identity;
        // render into cubemap
        go.GetComponent<Camera>().RenderToCubemap(cubemap);        // destroy temporary camera
        DestroyImmediate(go);
    }    [MenuItem("GameObject/Render into Cubemap")]
    static void RenderCubemap()
    {
        ScriptableWizard.DisplayWizard<RenderCubemapWizard>(
            "Render cubemap", "Render!");
    }
}
```




---








## Declaration

public bool RenderToCubemap([RenderTexture](RenderTexture.html) cubemap);






## Declaration

public bool RenderToCubemap([RenderTexture](RenderTexture.html) cubemap,
int faceMask);






### Parameters



| Parameter | Description |
| --- | --- |
| faceMask | A bitmask indicating which cubemap faces should be rendered into. If not supplied, the mask is set to the value, 63, to render to all cube faces. |
| cubemap | The texture to render to. |





### Returns



**bool**
        False if rendering fails, else true.





### Description



Render into a cubemap from this camera.





This is used for real-time reflections into cubemap render textures. It can be quite expensive though,
especially if all six cubemap faces are rendered each frame.

The Camera's position, clear flags and clipping plane distances will be used to
render into cubemap faces. `faceMask` is a bitfield indicating which cubemap faces should be rendered into. Each
bit that is set corresponds to a face. Bit numbers are integer values of [CubemapFace](CubemapFace.html) enum.
By default all six cubemap faces will be rendered (default value 63 has six lowest bits on).

This function will return `false` if rendering to cubemap fails. Some graphics hardware does not
support the functionality.

Note that the RenderTexture must have [RenderTexture.dimension](RenderTexture-dimension.html) set to [TextureDimension.Cube](Rendering.TextureDimension.Cube.html).  This is illustrated in the example following.

Additional resources: RenderTexture.isCubemap, [Reflective shaders](../Manual/shader-ReflectiveFamily.html).


              


```
using UnityEngine;[ExecuteInEditMode]
public class Example : MonoBehaviour
{
    // Attach this script to an object that uses a Reflective shader.
    // Real-time reflective cubemaps!    int cubemapSize = 128;
    bool oneFacePerFrame = false;
    Camera cam;
    RenderTexture renderTexture;
    void Start()
    {
        // render all six faces at startup
        UpdateCubemap(63);
    }    void OnDisable()
    {
        DestroyImmediate(cam);
        DestroyImmediate(renderTexture);
    }    void LateUpdate()
    {
        if (oneFacePerFrame)
        {
            var faceToRender = Time.frameCount % 6;
            var faceMask = 1 << faceToRender;
            UpdateCubemap(faceMask);
        }
        else
        {
            UpdateCubemap(63); // all six faces
        }
    }    void UpdateCubemap(int faceMask)
    {
        if (!cam)
        {
            GameObject obj = new GameObject("CubemapCamera", typeof(Camera));
            obj.hideFlags = HideFlags.HideAndDontSave;
            obj.transform.position = transform.position;
            obj.transform.rotation = Quaternion.identity;
            cam = obj.GetComponent<Camera>();
            cam.farClipPlane = 100; // don't render very far into cubemap
            cam.enabled = false;
        }        if (!renderTexture)
        {
            renderTexture = new RenderTexture(cubemapSize, cubemapSize, 16);
            renderTexture.dimension = UnityEngine.Rendering.TextureDimension.Cube;
            renderTexture.hideFlags = HideFlags.HideAndDontSave;
            GetComponent<Renderer>().sharedMaterial.SetTexture("_Cube", renderTexture);
        }        cam.transform.position = transform.position;
        cam.RenderToCubemap(renderTexture, faceMask);
    }
}
```




---








## Declaration

public bool RenderToCubemap([RenderTexture](RenderTexture.html) cubemap,
int faceMask,
[Camera.MonoOrStereoscopicEye](Camera.MonoOrStereoscopicEye.html) stereoEye);






### Parameters



| Parameter | Description |
| --- | --- |
| cubemap | The texture to render to. |
| faceMask | A bitfield indicating which cubemap faces should be rendered into. Set to the integer value 63 to render all faces. |
| stereoEye | A Camera eye corresponding to the left or right eye for stereoscopic rendering, or neither for non-stereoscopic rendering. |





### Returns



**bool**
        False if rendering fails, else true.





### Description



Render one side of a stereoscopic 360-degree image into a cubemap from this camera.





Setting the `stereoEye` parameter to [Camera.MonoOrStereoscopicEye.Left](Camera.MonoOrStereoscopicEye.Left.html) or [Camera.MonoOrStereoscopicEye.Right](Camera.MonoOrStereoscopicEye.Right.html) renders the left or right eye point-of-view of a stereo 360 image with proper world space transform. Setting `stereoEye` to [Camera.MonoOrStereoscopicEye.Mono](Camera.MonoOrStereoscopicEye.Mono.html) renders a monoscopic view of the Scene. After rendering the separate left and right cubemaps, you can convert them into equirectangular panoramic images that occupy one texture.

When rendering either side of a stereoscopic view, the camera uses its [stereoSeparation](Camera-stereoSeparation.html) value as the inter-pupillary distance (IPD), unless VR Support is enabled. When using a VR camera, the VR device IPD overrides the [stereoSeparation](Camera-stereoSeparation.html) value.

                  Unity uses the Camera's position, clear flags and clipping plane distances to
                  render into the cubemap faces. The camera is rotated for each face. `faceMask` is a bitfield indicating which cubemap faces should be rendered into. Each
                  bit that is set corresponds to a face. Bit numbers are integer values of [CubemapFace](CubemapFace.html) enum.
                  For 360 stereo image capture, all six cubemap faces should be rendered (set `facemask` to 63).

                  This function will return `false` if rendering to the cubemap fails. Some graphics hardware does not
                  support the functionality.

                  Note that the RenderTexture must have [RenderTexture.dimension](RenderTexture-dimension.html) set to [TextureDimension.Cube](Rendering.TextureDimension.Cube.html).

                  Additional resources: RenderTexture.isCubemap, [Cubemap](../Manual/class-Cubemap.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;//attach this script to your camera object
public class CreateStereoCubemaps : MonoBehaviour
{
    public RenderTexture cubemapLeftEye;
    public RenderTexture cubemapRightEye;
    public RenderTexture equirect;
    public bool renderStereo = true;
    public float stereoSeparation = 0.064f;    void Start()
    {
        cubemapLeftEye = new RenderTexture(1024, 1024, 24, RenderTextureFormat.ARGB32);
        cubemapLeftEye.dimension = TextureDimension.Cube;
        cubemapRightEye = new RenderTexture(1024, 1024, 24, RenderTextureFormat.ARGB32);
        cubemapRightEye.dimension = TextureDimension.Cube;
        //equirect height should be twice the height of cubemap
        equirect = new RenderTexture(1024, 2048, 24, RenderTextureFormat.ARGB32);
    }    void LateUpdate()
    {
        Camera cam = GetComponent<Camera>();        if (cam == null)
        {
            cam = GetComponentInParent<Camera>();
        }        if (cam == null)
        {
            Debug.Log("stereo 360 capture node has no camera or parent camera");
        }        if (renderStereo)
        {
            cam.stereoSeparation = stereoSeparation;
            cam.RenderToCubemap(cubemapLeftEye, 63, Camera.MonoOrStereoscopicEye.Left);
            cam.RenderToCubemap(cubemapRightEye, 63, Camera.MonoOrStereoscopicEye.Right);
        }
        else
        {
            cam.RenderToCubemap(cubemapLeftEye, 63, Camera.MonoOrStereoscopicEye.Mono);
        }        //optional: convert cubemaps to equirect        if (equirect == null)
            return;        if (renderStereo)
        {
            cubemapLeftEye.ConvertToEquirect(equirect, Camera.MonoOrStereoscopicEye.Left);
            cubemapRightEye.ConvertToEquirect(equirect, Camera.MonoOrStereoscopicEye.Right);
        }
        else
        {
            cubemapLeftEye.ConvertToEquirect(equirect, Camera.MonoOrStereoscopicEye.Mono);
        }
    }
}
```


            
